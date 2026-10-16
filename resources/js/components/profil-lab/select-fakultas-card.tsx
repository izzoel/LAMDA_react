import { useState, useRef, useEffect } from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { findMatchingFakultasOption } from "@/pages/laboratorium/profil/data";

interface OptionItem {
    label: string;
    value: string;
}

interface SelectFakultasProps {
    options: OptionItem[];
    selected: string;
    onSelect: (value: string) => void;
}

export function SelectFakultas({
    options,
    selected,
    onSelect,
}: SelectFakultasProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Menutup dropdown jika klik di luar elemen
    useEffect(() => {
        if (!isOpen) return;

        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Matching cerdas: exact match -> case-insensitive match -> alias/semantic match
    const matchedOption = findMatchingFakultasOption(options, selected);
    const activeSelectedValue = matchedOption ? matchedOption.value : selected;
    const selectedLabel = matchedOption ? matchedOption.label : selected;

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Trigger Button - Ukuran Presisi Badge */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-sm uppercase tracking-wider hover:bg-gray-100 hover:cursor-pointer hover-animation-up"
            >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{selectedLabel}</span>
                <IconChevronDown size={14} className="text-gray-400 -mr-0.5" />
            </button>

            {/* Menu Popover */}
            {isOpen && (
                <div className="absolute right-0 mt-1.5 min-w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30 animate-in fade-in zoom-in-95">
                    {options.map((option) => {
                        const isSelected =
                            option.value === activeSelectedValue ||
                            option.value.toLowerCase() === selected?.toLowerCase();
                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between hover:cursor-pointer px-3 py-1.5 text-xs font-semibold transition-colors ${
                                    isSelected
                                        ? "bg-sky-50 text-sky-900 font-bold"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <span className="uppercase tracking-wide">
                                    {option.label}
                                </span>
                                {isSelected && (
                                    <IconCheck
                                        size={14}
                                        className="text-sky-600"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
