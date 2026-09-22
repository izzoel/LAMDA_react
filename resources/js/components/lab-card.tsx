import { useState, useRef, useEffect } from "react";
import {
    IconMapPin,
    IconCheck,
    IconSettings,
    IconEdit,
} from "@tabler/icons-react";
import { SelectFakultas } from "./profil-lab/select-fakultas-card";
import { TextfieldLaboratorium } from "./profil-lab/textfield-laboratorium-card";
import { SelectLokasi } from "./profil-lab/select-lokasi-card";
import SelectLaboran from "./profil-lab/select-laboran-card";
import { TextareaDeskripsi } from "./profil-lab/textarea-deskripsi-card";
import SingleFileUploadBasic from "./profil-lab/upload-labolatorium-image";

interface OptionFakultas {
    label: string;
    value: string;
}

interface OptionLokasi {
    label: string;
    value: string;
}

interface OptionLaboran {
    label: string;
    value: string;
    role: string;
}

interface LabCardProps {
    fakultas: string;
    laboratorium: string;
    deskripsi: string;
    lokasi: string;
    authorName: string;
    authorRole: string;
    mediaSrc?: string;
    onSettingsClick?: () => void;
    fakultasOptions?: OptionFakultas[];
    lokasiOptions?: OptionLokasi[];
    laboranOptions?: OptionLaboran[];
    onStatusChange?: (value: string) => void;
    onLaboratoriumChange?: (value: string) => void;
    onLokasiChange?: (value: string) => void;
    onLaboranChange?: (authorName: string, authorRole: string) => void;
    onDeskripsiChange?: (value: string) => void;
    onMediaChange?: (file: File | null) => void;
}

const DEFAULT_FAKULTAS: OptionFakultas[] = [
    { label: "FARMASI", value: "FARMASI" },
    { label: "KIMIA", value: "KIMIA" },
    { label: "BIOLOGI", value: "BIOLOGI" },
];

const DEFAULT_LOKASI: OptionLokasi[] = [
    { label: "Lab Terpadu", value: "Lab Terpadu" },
    { label: "Gedung B", value: "Gedung B" },
    { label: "Gedung C", value: "Gedung C" },
];

const DEFAULT_LABORAN: OptionLaboran[] = [
    { label: "Dr. John Doe", value: "Dr. John Doe", role: "Dosen" },
    { label: "Dr. Jane Smith", value: "Dr. Jane Smith", role: "Dosen" },
    {
        label: "Nurrahmi Arny, A.Md. Farm",
        value: "Nurrahmi Arny, A.Md. Farm",
        role: "Laboran",
    },
];

export default function LabCard({
    fakultas = "FARMASI",
    laboratorium = "BAHAN ALAM",
    deskripsi,
    lokasi,
    authorName,
    authorRole,
    mediaSrc,
    onSettingsClick,
    fakultasOptions = DEFAULT_FAKULTAS,
    lokasiOptions = DEFAULT_LOKASI,
    laboranOptions = DEFAULT_LABORAN,
    onStatusChange,
    onLaboratoriumChange,
    onLokasiChange,
    onLaboranChange,
    onDeskripsiChange,
    onMediaChange,
}: LabCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedFakultas, setSelectedFakultas] = useState(fakultas);
    const [currentLab, setCurrentLab] = useState(laboratorium);
    const [selectedLokasi, setSelectedLokasi] = useState(lokasi);
    const [selectedLaboran, setSelectedLaboran] = useState(authorName);
    const [currentAuthorRole, setCurrentAuthorRole] = useState(authorRole);
    const [currentDeskripsi, setCurrentDeskripsi] = useState(deskripsi);

    // State lokal untuk menyimpan sumber URL gambar yang ditampilkan
    const [currentMediaSrc, setCurrentMediaSrc] = useState<string | undefined>(
        mediaSrc,
    );

    // Sinkronisasi jika data dari props berubah dari luar
    useEffect(() => {
        setCurrentLab(laboratorium);
        setSelectedLokasi(lokasi);
        setSelectedLaboran(authorName);
        setCurrentAuthorRole(authorRole);
        setCurrentDeskripsi(deskripsi);
        setCurrentMediaSrc(mediaSrc);
    }, [laboratorium, lokasi, authorName, authorRole, deskripsi, mediaSrc]);

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                cardRef.current &&
                !cardRef.current.contains(event.target as Node)
            ) {
                setIsEditing(false);
            }
        }

        if (isEditing) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEditing]);

    const handleToggleEdit = () => {
        setIsEditing((prev) => !prev);
        if (onSettingsClick) {
            onSettingsClick();
        }
    };

    const handleSelectStatus = (val: string) => {
        setSelectedFakultas(val);
        if (onStatusChange) {
            onStatusChange(val);
        }
    };

    const handleSelectLokasi = (val: string) => {
        setSelectedLokasi(val);
        if (onLokasiChange) {
            onLokasiChange(val);
        }
    };

    const handleSelectLaboran = (selectedName: string) => {
        setSelectedLaboran(selectedName);

        const selectedOption = laboranOptions.find(
            (opt) => opt.value === selectedName,
        );

        const newRole = selectedOption?.role || currentAuthorRole;
        setCurrentAuthorRole(newRole);

        if (onLaboranChange) {
            onLaboranChange(selectedName, newRole);
        }
    };

    const handleUpdateLaboratorium = (val: string) => {
        setCurrentLab(val);
        if (onLaboratoriumChange) {
            onLaboratoriumChange(val);
        }
    };

    const handleUpdateDeskripsi = (val: string) => {
        setCurrentDeskripsi(val);
        if (onDeskripsiChange) {
            onDeskripsiChange(val);
        }
    };

    // Handler ketika file foto baru diunggah
    const handleMediaUpload = (file: File | null) => {
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setCurrentMediaSrc(previewUrl);
        } else {
            setCurrentMediaSrc(mediaSrc);
        }

        if (onMediaChange) {
            onMediaChange(file);
        }
    };

    return (
        <div
            ref={cardRef}
            className="max-w-sm w-full bg-white rounded-lg border border-gray-300 shadow-sm flex flex-col hover-animation-up relative"
        >
            {/* Header Media / Gambar */}
            <div className="relative w-full h-52 bg-linear-to-b from-primary-100 to-primary-300 rounded-t-lg overflow-hidden">
                {currentMediaSrc ? (
                    <img
                        src={currentMediaSrc}
                        alt={currentLab}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size[16px_16px]" />
                )}

                <div className="absolute top-4 right-4 z-20 min-w-40 flex justify-end">
                    {isEditing ? (
                        <SelectFakultas
                            options={fakultasOptions}
                            selected={selectedFakultas}
                            onSelect={handleSelectStatus}
                        />
                    ) : (
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-sm uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                {selectedFakultas}
                            </span>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 z-20 flex justify-end">
                    {isEditing ? (
                        <SingleFileUploadBasic
                            onMediaChange={handleMediaUpload}
                        />
                    ) : null}
                </div>
            </div>

            {/* Konten Utama */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                    <div>
                        {isEditing ? (
                            <TextfieldLaboratorium
                                value={currentLab}
                                onChange={handleUpdateLaboratorium}
                                onSave={handleUpdateLaboratorium}
                            />
                        ) : (
                            <span className="inline-block px-3 py-1.5 bg-sky-50 text-sky-900 rounded-lg text-xs font-bold uppercase tracking-wide">
                                {currentLab}
                            </span>
                        )}
                    </div>

                    {isEditing ? (
                        <TextareaDeskripsi
                            value={currentDeskripsi}
                            onChange={handleUpdateDeskripsi}
                            onSave={handleUpdateDeskripsi}
                        />
                    ) : (
                        <textarea
                            value={currentDeskripsi}
                            disabled={true}
                            rows={4}
                            className="w-full px-1 text-gray-900 font-medium text-base leading-relaxed rounded overflow-y-auto resize-none border border-transparent"
                        />
                    )}
                </div>

                <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <IconMapPin
                            size={18}
                            className="text-gray-500 min-w-4.5"
                        />
                        {isEditing ? (
                            <SelectLokasi
                                options={lokasiOptions}
                                selected={selectedLokasi}
                                onSelect={handleSelectLokasi}
                            />
                        ) : (
                            <span>{selectedLokasi}</span>
                        )}
                    </div>

                    <hr className="border-gray-100" />

                    <div className="flex items-center justify-between">
                        <div>
                            {isEditing ? (
                                <SelectLaboran
                                    options={laboranOptions}
                                    selected={selectedLaboran}
                                    onSelect={handleSelectLaboran}
                                />
                            ) : (
                                <span>
                                    <h4 className="text-sm font-bold text-gray-900">
                                        {selectedLaboran}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {currentAuthorRole}
                                    </p>
                                </span>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleToggleEdit}
                            className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                                isEditing
                                    ? "bg-gray-200 text-gray-900"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                            aria-label="Pengaturan Badge"
                        >
                            {isEditing ? (
                                <IconCheck size={20} />
                            ) : (
                                <IconSettings size={20} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
