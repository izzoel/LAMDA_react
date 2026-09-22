import { useState, useRef, useEffect } from "react";

interface TextareaDeskripsiProps {
    value: string;
    onChange?: (value: string) => void;
    onSave?: (value: string) => void;
}

export function TextareaDeskripsi({
    value,
    onChange,
    onSave,
}: TextareaDeskripsiProps) {
    const [isEditingText, setIsEditingText] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    useEffect(() => {
        if (isEditingText && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.selectionStart =
                textareaRef.current.value.length;
            textareaRef.current.selectionEnd = textareaRef.current.value.length;
        }
    }, [isEditingText]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        setCurrentValue(val);
        if (onChange) onChange(val);
    };

    const handleCommit = () => {
        setIsEditingText(false);
        if (onSave) {
            onSave(currentValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleCommit();
        } else if (e.key === "Escape") {
            setCurrentValue(value);
            setIsEditingText(false);
        }
    };

    return (
        <div className="w-full">
            {isEditingText ? (
                <textarea
                    ref={textareaRef}
                    value={currentValue}
                    onChange={handleChange}
                    onBlur={handleCommit}
                    onKeyDown={handleKeyDown}
                    rows={4}
                    className="w-full px-1 text-gray-900 font-medium text-base leading-relaxed rounded overflow-y-auto resize-none border border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
            ) : (
                <textarea
                    ref={textareaRef}
                    value={currentValue}
                    onClick={() => setIsEditingText(true)}
                    rows={4}
                    className="w-full px-1 text-gray-900 font-medium text-base leading-relaxed rounded focus:outline-none focus:ring-1 overflow-y-auto resize-none border border-transparent hover:border-blue-300 hover:bg-gray-50 transition-colors"
                />
            )}
        </div>
    );
}
