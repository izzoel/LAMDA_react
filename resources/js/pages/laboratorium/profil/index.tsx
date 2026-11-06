import { useState, useMemo, useEffect, useRef } from "react";
import LabCard from "@/components/lab-card";
import {
    CardPlain,
    SelectDropdown,
    TextField,
    Button,
    TextArea,
} from "@idds/react";
import {
    IconSearch,
    IconBuildingHospital,
    IconX,
    IconCheck,
    IconUpload,
    IconTrash,
    IconPhoto,
    IconAlertCircle,
} from "@tabler/icons-react";
import {
    INITIAL_LAB_PROFILES,
    FAKULTAS_OPTIONS,
    LOKASI_OPTIONS,
    DEFAULT_LABORAN_OPTIONS,
    fetchLaboranUserOptions,
    getFakultasDropdownOptions,
    matchFakultasFilter,
    type LabProfileItem,
    type FakultasOption,
    type OptionLaboran,
} from "./data";

export default function ProfilLaboratoriumPage() {
    const [labsData, setLabsData] =
        useState<LabProfileItem[]>(INITIAL_LAB_PROFILES);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFakultas, setSelectedFakultas] = useState<string>("");
    const [fakultasOptions, setFakultasOptions] =
        useState<FakultasOption[]>(FAKULTAS_OPTIONS);
    const [laboranOptions, setLaboranOptions] =
        useState<OptionLaboran[]>(DEFAULT_LABORAN_OPTIONS);
    const [isMobile, setIsMobile] = useState(false);

    // Toast State
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Modal State
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Form State untuk Tambah Laboratorium
    const [formNama, setFormNama] = useState("");
    const [formFakultas, setFormFakultas] = useState<string>("");
    const [formLokasi, setFormLokasi] = useState<string>("");
    const [formLaboran, setFormLaboran] = useState("");
    const [formDeskripsi, setFormDeskripsi] = useState("");
    const [formImage, setFormImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Fetch dynamic Fakultas & Laboran options from API on mount
    useEffect(() => {
        getFakultasDropdownOptions(true).then((opts) => {
            if (opts && opts.length > 0) {
                setFakultasOptions(opts);
            }
        });
        fetchLaboranUserOptions().then((opts) => {
            if (opts && opts.length > 0) {
                setLaboranOptions(opts);
            }
        });
    }, []);

    // Responsive Mobile Listener
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Escape Key Listener to Close Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isAddModalOpen) {
                setIsAddModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isAddModalOpen]);

    // Toast Timer
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // Handle pemilihan fakultas dengan aman untuk tipe string, array, atau null (saat 'x' diklik)
    const handleSelectFakultas = (val: any) => {
        if (!val) {
            setSelectedFakultas("");
            return;
        }
        if (typeof val === "string") {
            setSelectedFakultas(val);
        } else if (Array.isArray(val)) {
            if (val.length === 0) {
                setSelectedFakultas("");
            } else {
                const first = val[0];
                setSelectedFakultas(
                    typeof first === "object"
                        ? (first?.value ?? "")
                        : String(first ?? "")
                );
            }
        } else if (typeof val === "object") {
            setSelectedFakultas(val?.value ?? "");
        } else {
            setSelectedFakultas(String(val));
        }
    };

    // Filtered Labs
    const filteredLabs = useMemo(() => {
        return labsData.filter((lab) => {
            const fakultasVal = (selectedFakultas || "").trim();
            const matchFakultas = matchFakultasFilter(
                lab.fakultas,
                fakultasVal
            );

            const q = searchTerm.toLowerCase().trim();
            const matchSearch =
                !q ||
                lab.laboratorium.toLowerCase().includes(q) ||
                lab.kode.toLowerCase().includes(q) ||
                lab.authorName.toLowerCase().includes(q) ||
                lab.fakultas.toLowerCase().includes(q) ||
                lab.lokasi.toLowerCase().includes(q) ||
                (q === "fish" &&
                    (lab.fakultas.toLowerCase() === "fish" ||
                        lab.fakultas.toLowerCase().includes("sosial") ||
                        lab.fakultas.toLowerCase().includes("humaniora"))) ||
                ((q === "fikst" || q === "fiskt") &&
                    (lab.fakultas.toLowerCase() === "fikst" ||
                        lab.fakultas.toLowerCase().includes("kesehatan") ||
                        lab.fakultas.toLowerCase().includes("sains") ||
                        lab.fakultas.toLowerCase().includes("teknologi"))) ||
                (q === "farmasi" &&
                    lab.fakultas.toLowerCase().includes("farmasi"));

            return matchFakultas && matchSearch;
        });
    }, [labsData, selectedFakultas, searchTerm]);

    const handleOpenAddModal = () => {
        setFormNama("");
        setFormFakultas("");
        setFormLokasi("");
        setFormLaboran("");
        setFormDeskripsi("");
        setFormImage(null);
        setImagePreviewUrl(null);
        setFormErrors({});
        setIsAddModalOpen(true);
    };

    const handleProcessImage = (file: File) => {
        if (!file.type.startsWith("image/")) {
            setFormErrors((prev) => ({
                ...prev,
                image: "Hanya file gambar (JPG, PNG, WebP) yang diperbolehkan.",
            }));
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setFormErrors((prev) => ({
                ...prev,
                image: "Ukuran gambar tidak boleh melebihi 5 MB.",
            }));
            return;
        }

        setFormErrors((prev) => {
            const next = { ...prev };
            delete next.image;
            return next;
        });

        setFormImage(file);
        setImagePreviewUrl(URL.createObjectURL(file));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleProcessImage(e.target.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleProcessImage(e.dataTransfer.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setFormImage(null);
        if (imagePreviewUrl) {
            URL.revokeObjectURL(imagePreviewUrl);
            setImagePreviewUrl(null);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSaveNewLab = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: { [key: string]: string } = {};

        if (!formNama.trim()) {
            errors.nama = "Nama Laboratorium wajib diisi.";
        }

        if (!formFakultas.trim()) {
            errors.fakultas = "Fakultas wajib dipilih.";
        }

        if (!formLaboran.trim()) {
            errors.laboran = "Laboran wajib diisi.";
        }

        if (!formLokasi.trim()) {
            errors.lokasi = "Lokasi wajib diisi.";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const fakVal = formFakultas.trim();
        const lokVal = formLokasi.trim();
        const matchedLaboran = laboranOptions.find(
            (opt) => opt.value.toLowerCase() === formLaboran.trim().toLowerCase()
        );
        const roleVal = matchedLaboran?.role || "Laboran";

        const newLab: LabProfileItem = {
            id: Date.now(),
            kode: `LAB-${Date.now().toString().slice(-4)}`,
            laboratorium: formNama.trim(),
            fakultas: fakVal,
            lokasi: lokVal || "Lab Terpadu",
            ruangan: "-",
            deskripsi:
                formDeskripsi.trim() ||
                "Laboratorium terpadu untuk pengujian, riset, dan praktikum mahasiswa.",
            authorName: formLaboran.trim() || "-",
            authorRole: roleVal,
            kapasitas: 0,
            status: "Aktif",
            mediaSrc: imagePreviewUrl || undefined,
        };

        setLabsData([newLab, ...labsData]);
        setIsAddModalOpen(false);
        setToastMessage(`Laboratorium "${newLab.laboratorium}" berhasil ditambahkan.`);
    };

    const handleDeleteLab = (lab: LabProfileItem) => {
        if (confirm(`Apakah Anda yakin ingin menghapus profil "${lab.laboratorium}"?`)) {
            setLabsData((prev) => prev.filter((item) => item.id !== lab.id));
            setToastMessage(`Laboratorium "${lab.laboratorium}" berhasil dihapus.`);
        }
    };

    // Modal options for dropdown without "Semua Fakultas"
    const modalFakultasOptions = useMemo(() => {
        return fakultasOptions.filter((opt) => opt.value !== "");
    }, [fakultasOptions]);

    return (
        <div className="space-y-6 pb-12">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed top-6 right-6 z-60 bg-emerald-700 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 animate-bounce-short">
                    <IconCheck size={18} className="shrink-0" />
                    <span className="text-sm font-medium">{toastMessage}</span>
                    <button
                        type="button"
                        onClick={() => setToastMessage(null)}
                        className="ml-2 hover:bg-emerald-800 p-1 rounded-lg transition-colors"
                    >
                        <IconX size={14} />
                    </button>
                </div>
            )}

            {/* Header Title Section */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary flex items-center gap-2.5">
                        <IconBuildingHospital
                            className="text-blue-600"
                            size={28}
                        />
                        Profil Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Katalog informasi, kapasitas, penanggung jawab, dan profil
                        fasilitas laboratorium
                    </p>
                </div>
            </div>

            {/* Control & Action Bar Section */}
            <CardPlain className="flex flex-col space-y-6 w-full p-4 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                {/* Control Bar: Responsif dari bertumpuk (mobile) ke sebaris (desktop) */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-3">
                    {/* Grup Kiri: Tombol Tambah & Search Input */}
                    <div className="flex items-center gap-3 w-full lg:w-auto flex-1">
                        <Button
                            hierarchy="primary"
                            size={isMobile ? "lg" : "xl"}
                            onClick={handleOpenAddModal}
                            className={`flex items-center justify-center shadow-xs shrink-0 px-3.5 ${!isMobile ? "h-11 min-w-[44px]" : "min-w-[40px]"}`}
                            title="Tambah Laboratorium Baru"
                            aria-label="Tambah Laboratorium"
                        >
                            <span className="text-base font-bold leading-none">+</span>
                        </Button>

                        <div className="w-full">
                            <TextField
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Cari nama laboratorium, kode, fakultas, atau laboran..."
                                prefixIcon={<IconSearch size={16} />}
                            />
                        </div>
                    </div>

                    {/* Grup Kanan: Dropdown Filter Fakultas */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <div className="w-full sm:w-72">
                            <SelectDropdown
                                options={fakultasOptions}
                                selected={selectedFakultas}
                                onSelect={handleSelectFakultas}
                                onRemoveSelected={() => setSelectedFakultas("")}
                                showPreviewValue={false}
                                placeholder="Filter Fakultas"
                                indicator="check"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid Card Laboratorium */}
                {filteredLabs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {filteredLabs.map((item) => (
                            <LabCard
                                key={item.id}
                                fakultas={item.fakultas}
                                laboratorium={item.laboratorium}
                                deskripsi={item.deskripsi}
                                lokasi={item.lokasi}
                                authorName={item.authorName}
                                authorRole={item.authorRole}
                                mediaSrc={item.mediaSrc}
                                fakultasOptions={modalFakultasOptions}
                                lokasiOptions={LOKASI_OPTIONS}
                                laboranOptions={laboranOptions}
                                onStatusChange={(newFakultas) => {
                                    setLabsData((prev) =>
                                        prev.map((lab) =>
                                            lab.id === item.id
                                                ? { ...lab, fakultas: newFakultas }
                                                : lab
                                        )
                                    );
                                }}
                                onLokasiChange={(newLokasi) => {
                                    setLabsData((prev) =>
                                        prev.map((lab) =>
                                            lab.id === item.id
                                                ? { ...lab, lokasi: newLokasi }
                                                : lab
                                        )
                                    );
                                }}
                                onLaboranChange={(newName, newRole) => {
                                    setLabsData((prev) =>
                                        prev.map((lab) =>
                                            lab.id === item.id
                                                ? { ...lab, authorName: newName, authorRole: newRole }
                                                : lab
                                        )
                                    );
                                }}
                                onDelete={() => handleDeleteLab(item)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                        <IconBuildingHospital
                            size={42}
                            className="mx-auto text-slate-400 mb-2"
                        />
                        <h3 className="text-base font-semibold text-slate-700">
                            Laboratorium Tidak Ditemukan
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                            Coba sesuaikan kata kunci pencarian atau filter
                            fakultas.
                        </p>
                    </div>
                )}
            </CardPlain>

            {/* MODAL: TAMBAH PROFIL LABORATORIUM BARU */}
            {isAddModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                        {/* Header Modal */}
                        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                
                                <div>
                                    <h3
                                        id="modal-title"
                                        className="text-lg font-bold text-slate-900"
                                    >
                                        Tambah Profil Laboratorium
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Lengkapi data di bawah ini untuk mendaftarkan fasilitas dan unit laboratorium baru
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                                title="Tutup Modal (Esc)"
                            >
                                <IconX size={20} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <form
                            onSubmit={handleSaveNewLab}
                            className="py-4 space-y-5 overflow-y-auto flex-1 text-xs pr-1"
                        >
                            {/* Section 1: Identitas & Lokasi Laboratorium */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px]">
                                        1
                                    </span>
                                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Identitas & Lokasi Laboratorium
                                    </h4>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Nama Laboratorium <span className="text-red-500">*</span>
                                        </label>
                                        <TextField
                                            value={formNama}
                                            onChange={(val) => {
                                                setFormNama(val);
                                                if (formErrors.nama) {
                                                    setFormErrors((prev) => {
                                                        const next = { ...prev };
                                                        delete next.nama;
                                                        return next;
                                                    });
                                                }
                                            }}
                                            placeholder="Contoh: Kimia Terapan"
                                        />
                                        {formErrors.nama && (
                                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                                <IconAlertCircle size={12} />
                                                {formErrors.nama}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                         <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Fakultas <span className="text-red-500">*</span>
                                        </label>

                                        <SelectDropdown
                                            options={modalFakultasOptions}
                                            selected={formFakultas}
                                            onSelect={(val: any) => {
                                                const resolved =
                                                    typeof val === "object" && val !== null
                                                        ? Array.isArray(val)
                                                            ? (val[0]?.value ?? val[0] ?? "")
                                                            : (val?.value ?? "")
                                                        : (val ?? "");
                                                setFormFakultas(resolved);
                                                if (formErrors.fakultas) {
                                                    setFormErrors((prev) => {
                                                        const next = { ...prev };
                                                        delete next.fakultas;
                                                        return next;
                                                    });
                                                }
                                            }}
                                            onRemoveSelected={() => setFormFakultas("")}
                                            placeholder="Pilih Fakultas"
                                            indicator="check"
                                            showPreviewValue={false}
                                        />
                                        {formErrors.fakultas && (
                                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                                <IconAlertCircle size={12} />
                                                {formErrors.fakultas}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Laboran / PIC <span className="text-red-500">*</span>
                                        </label>
                                        <SelectDropdown
                                            options={laboranOptions}
                                            selected={formLaboran}
                                            onSelect={(val: any) => {
                                                const resolved =
                                                    typeof val === "object" && val !== null
                                                        ? Array.isArray(val)
                                                            ? (val[0]?.value ?? val[0] ?? "")
                                                            : (val?.value ?? "")
                                                        : (val ?? "");
                                                setFormLaboran(resolved);
                                                if (formErrors.laboran) {
                                                    setFormErrors((prev) => {
                                                        const next = { ...prev };
                                                        delete next.laboran;
                                                        return next;
                                                    });
                                                }
                                            }}
                                            onRemoveSelected={() => setFormLaboran("")}
                                            placeholder="Pilih Laboran / PIC"
                                            indicator="check"
                                            showPreviewValue={false}
                                        />

                                        {formErrors.laboran && (
                                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                                <IconAlertCircle size={12} />
                                                {formErrors.laboran}
                                            </p>
                                        )}
                                    </div>
                                    
                                    <div>
                                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Lokasi Gedung <span className="text-red-500">*</span>
                                        </label>
                                        <SelectDropdown
                                            options={LOKASI_OPTIONS}
                                            selected={formLokasi}
                                            onSelect={(val: any) => {
                                                const resolved =
                                                    typeof val === "object" && val !== null
                                                        ? Array.isArray(val)
                                                            ? (val[0]?.value ?? val[0] ?? "")
                                                            : (val?.value ?? "")
                                                        : (val ?? "");
                                                setFormLokasi(resolved);
                                                if (formErrors.lokasi) {
                                                    setFormErrors((prev) => {
                                                        const next = { ...prev };
                                                        delete next.lokasi;
                                                        return next;
                                                    });
                                                }
                                            }}
                                            onRemoveSelected={() => setFormLokasi("")}
                                            placeholder="Pilih Lokasi Gedung"
                                            indicator="check"
                                            showPreviewValue={false}
                                        />
                                        {formErrors.lokasi && (
                                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                                <IconAlertCircle size={12} />
                                                {formErrors.lokasi}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                           

                            {/* Section 2: Deskripsi & Cover Foto */}
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px]">
                                        2
                                    </span>
                                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Deskripsi & Foto Fasilitas
                                    </h4>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Deskripsi Laboratorium
                                    </label>
                                    <TextArea
                                        value={formDeskripsi}
                                        onChange={setFormDeskripsi}
                                        placeholder="Tuliskan gambaran umum fungsi lab, fokus riset, atau peralatan utama yang tersedia..."
                                        rows={3}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Foto Cover Laboratorium
                                    </label>

                                    {imagePreviewUrl ? (
                                        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-48 group shadow-xs">
                                            <img
                                                src={imagePreviewUrl}
                                                alt="Preview Laboratorium"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="px-3 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-medium flex items-center gap-1.5 shadow-md hover:bg-slate-50 transition-colors"
                                                >
                                                    <IconUpload size={14} />
                                                    Ganti Foto
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleRemoveImage}
                                                    className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-medium flex items-center gap-1.5 shadow-md hover:bg-red-700 transition-colors"
                                                >
                                                    <IconTrash size={14} />
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleDrop}
                                            className={`border-2 border-dashed rounded-xl p-5 text-center transition-all ${
                                                isDragging
                                                    ? "border-blue-500 bg-blue-50/50 scale-[1.01]"
                                                    : "border-slate-300 hover:border-blue-400 bg-slate-50/60"
                                            }`}
                                        >
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                id="lab-image-upload"
                                                accept="image/png, image/jpeg, image/jpg, image/webp"
                                                className="hidden"
                                                onChange={handleImageChange}
                                            />
                                            <label
                                                htmlFor="lab-image-upload"
                                                className="cursor-pointer flex flex-col items-center justify-center"
                                            >
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-2 border border-blue-100">
                                                    <IconPhoto size={22} />
                                                </div>
                                                <p className="text-xs font-medium text-slate-700">
                                                    Klik untuk memilih gambar atau seret file ke sini
                                                </p>
                                                <p className="text-[11px] text-slate-400 mt-0.5">
                                                    Format PNG, JPG, JPEG, atau WebP (Maksimal 5 MB)
                                                </p>
                                            </label>
                                        </div>
                                    )}

                                    {formErrors.image && (
                                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                            <IconAlertCircle size={12} />
                                            {formErrors.image}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 bottom-0 bg-white">
                                <Button
                                    hierarchy="secondary"
                                    size="md"
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                >
                                    Batal
                                </Button>
                                <Button
                                    hierarchy="primary"
                                    size="md"
                                    type="submit"
                                    className="flex items-center gap-1.5"
                                >
                                    <IconCheck size={16} />
                                    Simpan
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
