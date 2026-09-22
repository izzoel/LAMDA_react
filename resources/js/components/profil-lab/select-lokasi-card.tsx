import { useState, useRef, useEffect } from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

export interface OptionLokasi {
    label: string;
    value: string;
}

interface SelectLokasiProps {
    options: OptionLokasi[];
    selected: string;
    onSelect: (value: string) => void;
}

export function SelectLokasi({
    options,
    selected,
    onSelect,
}: SelectLokasiProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Listener click-outside hanya aktif saat dropdown terbuka
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

    const selectedLabel =
        options.find((opt) => opt.value === selected)?.label || selected;

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 bg-white  text-gray-700 shadow-sm shadow-gray-400 hover:bg-gray-50 hover:cursor-pointer transition-all hover-animation-up"
            >
                <span className="truncate">{selectedLabel}</span>
                <IconChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Menu Popover */}
            {isOpen && (
                <div className="absolute left-0 mt-1.5 w-40 max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-in fade-in zoom-in-95">
                    {options.map((option) => {
                        const isSelected = option.value === selected;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors hover:cursor-pointer ${
                                    isSelected
                                        ? "bg-sky-50 text-sky-900 font-bold"
                                        : "text-gray-700 hover:bg-gray-100 font-medium"
                                }`}
                            >
                                <span className="uppercase tracking-wide truncate">
                                    {option.label}
                                </span>
                                {isSelected && (
                                    <IconCheck
                                        size={14}
                                        className="text-sky-600 shrink-0 ml-2"
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
