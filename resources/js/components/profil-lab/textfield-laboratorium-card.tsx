import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { IconPencil } from "@tabler/icons-react";

interface TextfieldLaboratoriumProps {
    value: string;
    onChange?: (value: string) => void;
    onSave?: (value: string) => void;
}

export function TextfieldLaboratorium({
    value,
    onChange,
    onSave,
}: TextfieldLaboratoriumProps) {
    const [isEditingText, setIsEditingText] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    // Simpan lebar awal teks (tidak berubah selama 1 sesi edit) dan lebar dinamis saat mengetik
    const [initialWidth, setInitialWidth] = useState<number | null>(null);
    const [dynamicWidth, setDynamicWidth] = useState<number | null>(null);

    const textRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const measureSpanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    useEffect(() => {
        if (isEditingText && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditingText]);

    // Ukur panjang teks baru setiap kali currentValue berubah saat mode edit
    useLayoutEffect(() => {
        if (isEditingText && measureSpanRef.current && initialWidth !== null) {
            // Tambahkan sedikit buffer (~4px untuk kursor/caret teks)
            const measuredWidth = measureSpanRef.current.offsetWidth + 4;
            // Gunakan lebar terbesar: minimal selebar initialWidth
            setDynamicWidth(Math.max(initialWidth, measuredWidth));
        }
    }, [currentValue, isEditingText, initialWidth]);

    const handleCommit = () => {
        setIsEditingText(false);
        setInitialWidth(null);
        setDynamicWidth(null);
        if (onSave) {
            onSave(currentValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommit();
        } else if (e.key === "Escape") {
            setCurrentValue(value);
            setIsEditingText(false);
            setInitialWidth(null);
            setDynamicWidth(null);
        }
    };

    const handleStartEdit = () => {
        if (textRef.current) {
            const exactWidth = textRef.current.offsetWidth;
            setInitialWidth(exactWidth);
            setDynamicWidth(exactWidth);
        }
        setIsEditingText(true);
    };

    return (
        <div className="inline-flex items-center max-w-full">
            {/* Span bayangan invisible untuk menghitung lebar teks secara presisi */}
            {isEditingText && (
                <span
                    ref={measureSpanRef}
                    aria-hidden="true"
                    // className="absolute bg-amber-700 pointer-events-none whitespace-pre px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                    className="absolute invisible pointer-events-none whitespace-pre px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                >
                    {currentValue || ""}
                </span>
            )}

            {isEditingText ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={currentValue}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setCurrentValue(newValue);
                        if (onChange) onChange(newValue);
                    }}
                    onKeyDown={handleKeyDown}
                    onBlur={handleCommit}
                    style={{
                        width: dynamicWidth ? `${dynamicWidth - 5}px` : "auto",
                    }}
                    className="inline-block px-3 py-1.5 bg-sky-50 text-sky-900 rounded-lg text-xs font-bold uppercase tracking-wide focus:outline-none focus:ring-1 focus:ring-sky-400 min-w-0"
                />
            ) : (
                <div
                    onClick={handleStartEdit}
                    className="inline-flex items-center gap-1.5 max-w-full hover:cursor-pointer"
                >
                    <div
                        ref={textRef}
                        className="inline-block px-3 py-1.5 bg-sky-50 text-sky-900 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-sky-100 transition-colors hover:cursor-text truncate max-w-full"
                    >
                        {currentValue}
                    </div>
                    <IconPencil
                        size={16}
                        className="text-gray-400 shrink-0 hover:cursor-pointer hover:text-gray-600"
                    />
                </div>
            )}
        </div>
    );
}
