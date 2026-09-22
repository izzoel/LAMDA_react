import { BasicDropdown } from "@idds/react";
import { useState, useRef, useEffect } from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

interface OptionItem {
    label: string;
    value: string;
    role: string;
}

interface SelectLaboranProps {
    options: OptionItem[];
    selected: string;
    onSelect: (value: string) => void;
}

export default function SelectLaboran({
    options,
    selected,
    onSelect,
}: SelectLaboranProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const selectedOption = options.find((opt) => opt.value === selected);
    const selectedLabel =
        options.find((opt) => opt.value === selected)?.label || selected;
    const selectedRole = selectedOption?.role;

    return (
        <div ref={dropdownRef} className="relative w-full text-left">
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className="flex px-2 rounded-lg bg-white justify-start text-left shadow-sm shadow-gray-400 hover:bg-gray-100
                hover:cursor-pointer hover-animation-up"
            >
                <span>
                    <h4 className="text-sm font-bold text-gray-900">
                        {selectedLabel}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                        {selectedRole}
                    </p>
                </span>
            </button>

            {/* Menu Popover */}
            {isOpen && (
                <div className="absolute bottom-full mb-2 w-70 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30 animate-in fade-in zoom-in-95">
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
                                className={`w-full flex hover:cursor-pointer px-3 py-1.5 text-xs font-semibold transition-colors ${
                                    isSelected
                                        ? "bg-sky-50 text-sky-900 font-bold"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <span className="tracking-wide">
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
