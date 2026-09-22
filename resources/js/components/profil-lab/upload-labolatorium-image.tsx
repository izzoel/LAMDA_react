import { useState, useEffect } from "react";
import { SingleFileUpload } from "@idds/react";
import type { FileValidationResult } from "@idds/react";
import { IconPencil, IconLoader2, IconPhotoSearch } from "@tabler/icons-react";

interface UploadMediaButtonProps {
    onMediaChange?: (file: File | null) => void;
}

export default function SingleFileUploadBasic({
    onMediaChange,
}: UploadMediaButtonProps) {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<FileValidationResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Event listener untuk mendeteksi saat jendela upload ditutup
    useEffect(() => {
        const handleWindowFocus = () => {
            // Beri sedikit delay agar event onChange pada input sempat berjalan terlebih dahulu
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        };

        if (isLoading) {
            window.addEventListener("focus", handleWindowFocus);
        }

        return () => {
            window.removeEventListener("focus", handleWindowFocus);
        };
    }, [isLoading]);

    const handleButtonClick = () => {
        setIsLoading(true);
    };

    const handleChange = (
        newFile: File | null,
        validationError: FileValidationResult | null,
    ) => {
        setFile(newFile);
        setError(validationError);
        setIsLoading(false); // Matikan loading saat file berhasil dipilih
        if (onMediaChange) {
            onMediaChange(newFile);
        }
    };

    const handleRemove = () => {
        setFile(null);
        setError(null);
        if (onMediaChange) {
            onMediaChange(null);
        }
    };

    return (
        <div className="relative inline-block">
            {/* 1. Tombol Ikon Bulat sebagai UI utama */}
            <label
                htmlFor="single-file-upload-input"
                onClick={handleButtonClick}
                className={`p-2.5 bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center border border-gray-100 ${
                    isLoading ? "cursor-wait opacity-80" : "cursor-pointer"
                }`}
                aria-label="Edit Gambar"
            >
                {isLoading ? (
                    <IconLoader2
                        size={18}
                        className="animate-spin text-blue-600"
                    />
                ) : (
                    <IconPhotoSearch size={18} />
                )}
            </label>

            {/* 2. Komponen SingleFileUpload tersembunyi */}
            <div className="hidden">
                <SingleFileUpload
                    id="single-file-upload-input"
                    title="Unggah File"
                    description="Unggah atau seret dan lepas ke sini"
                    onChange={handleChange}
                    onRemove={handleRemove}
                />
            </div>
        </div>
    );
}
