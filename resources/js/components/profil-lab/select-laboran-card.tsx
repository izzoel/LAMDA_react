import { useState, useRef, useEffect, useMemo } from "react";
import { IconCheck, IconSearch, IconX } from "@tabler/icons-react";

export interface OptionLaboran {
    label: string;
    value: string;
    role: string;
}

interface SelectLaboranProps {
    options: OptionLaboran[];
    selected: string;
    onSelect: (value: string) => void;
}

export default function SelectLaboran({
    options,
    selected,
    onSelect,
}: SelectLaboranProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

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
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Focus input pencarian saat dropdown dibuka, reset query saat ditutup
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                searchInputRef.current?.focus();
            }, 60);
            return () => clearTimeout(timer);
        } else {
            setSearchQuery("");
        }
    }, [isOpen]);

    // Pencocokan laboran terpilih
    const selectedOption =
        options.find((opt) => opt.value === selected) ||
        options.find(
            (opt) => opt.value.toLowerCase() === selected?.toLowerCase()
        ) ||
        options.find(
            (opt) => opt.label.toLowerCase() === selected?.toLowerCase()
        );

    const selectedLabel = selectedOption?.label || selected;
    const selectedRole = selectedOption?.role || "Laboran";

    // Filter opsi berdasarkan pencarian nama atau role (maksimal 5 user)
    const filteredOptions = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        const base = q
            ? options.filter(
                  (opt) =>
                      opt.label.toLowerCase().includes(q) ||
                      opt.value.toLowerCase().includes(q) ||
                      opt.role.toLowerCase().includes(q)
              )
            : options;
        return base.slice(0, 5);
    }, [options, searchQuery]);

    return (
        <div ref={dropdownRef} className="relative w-full text-left">
            {/* Trigger Button */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className="flex px-2 rounded-lg bg-white justify-start text-left shadow-sm shadow-gray-400 hover:bg-gray-100 hover:cursor-pointer hover-animation-up"
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

            {/* Menu Popover dengan Input Search */}
            {isOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-72 max-w-[calc(100vw-32px)] bg-white rounded-xl shadow-xl border border-gray-200 z-50 animate-in fade-in zoom-in-95 overflow-hidden flex flex-col">
                    {/* Header Input Pencarian */}
                    <div className="p-2.5 border-b border-gray-100 bg-slate-50/70">
                        <div className="relative flex items-center">
                            <IconSearch
                                size={15}
                                className="absolute left-2.5 text-gray-400 shrink-0 pointer-events-none"
                            />
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                placeholder="Cari nama laboran / dosen..."
                                className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSearchQuery("");
                                        searchInputRef.current?.focus();
                                    }}
                                    className="absolute right-2 text-gray-400 hover:text-gray-600 p-0.5 rounded-md hover:bg-gray-100"
                                >
                                    <IconX size={13} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Daftar Opsi Laboran */}
                    <div className="max-h-64 overflow-y-auto p-1 divide-y divide-gray-50">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => {
                                const isSelected =
                                    option.value === selected ||
                                    option.value.toLowerCase() ===
                                        selected?.toLowerCase() ||
                                    (selectedOption &&
                                        option.value === selectedOption.value);

                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelect(option.value);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between hover:cursor-pointer px-3 py-2 text-xs transition-colors rounded-lg text-left ${
                                            isSelected
                                                ? "bg-sky-50 text-sky-950 font-bold"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        <div className="truncate pr-2">
                                            <p className="tracking-tight font-medium text-gray-900 truncate">
                                                {option.label}
                                            </p>
                                            <span
                                                className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-md mt-0.5 uppercase tracking-wider ${
                                                    option.role === "Laboran"
                                                        ? "bg-emerald-50 text-emerald-700"
                                                        : option.role ===
                                                          "Kepala Lab"
                                                        ? "bg-indigo-50 text-indigo-700"
                                                        : "bg-amber-50 text-amber-700"
                                                }`}
                                            >
                                                {option.role}
                                            </span>
                                        </div>
                                        {isSelected && (
                                            <IconCheck
                                                size={15}
                                                className="text-sky-600 shrink-0 ml-1.5"
                                            />
                                        )}
                                    </button>
                                );
                            })
                        ) : (
                            <div className="py-6 px-4 text-center">
                                <p className="text-xs font-medium text-gray-500">
                                    Laboran tidak ditemukan
                                </p>
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                    Coba kata kunci nama lain
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
