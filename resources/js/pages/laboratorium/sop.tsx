import { useState, useMemo } from "react";
import {
    TextField,
    CardPlain,
    Button,
    SelectDropdown,
    Modal,
    TextArea,
    SingleFileUpload,
    type SelectOption,
} from "@idds/react";
import {
    IconSearch,
    IconPlus,
    IconFileText,
    IconTools,
    IconShieldCheck,
    IconFileTypePdf,
    IconDownload,
    IconUpload,
    IconX,
    IconCheck,
    IconBuildingHospital,
    IconRefresh,
} from "@tabler/icons-react";
import {
    INITIAL_SOP_DATA,
    LABORATORIUM_LIST,
    getSopColumns,
    getKategoriBadgeColor,
    getStatusBadgeColor,
    getLabColorClass,
    type SopItem,
} from "./sop-data";
import TableComponent from "@/components/table";

export default function SopPage() {
    const [sopData, setSopData] = useState<SopItem[]>(INITIAL_SOP_DATA);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLabFilter, setSelectedLabFilter] = useState<any[]>([]);
    const [selectedKategoriFilter, setSelectedKategoriFilter] = useState<any[]>(
        [],
    );

    // State Modals
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [activeSop, setActiveSop] = useState<SopItem | null>(null);

    // Form State untuk Upload / Tambah SOP
    const [formLab, setFormLab] = useState<any[]>([]);
    const [formKategori, setFormKategori] = useState<any[]>([]);
    const [formJudul, setFormJudul] = useState("");
    const [formVersi, setFormVersi] = useState("v1.0");
    const [formNamaAlat, setFormNamaAlat] = useState("");
    const [formDeskripsi, setFormDeskripsi] = useState("");
    const [formUploadedFile, setFormUploadedFile] = useState<File | null>(null);

    // Filter Options
    const labFilterOptions: SelectOption[] = useMemo(
        () => [
            { label: "Semua Laboratorium", value: "" },
            ...LABORATORIUM_LIST.map((lab) => ({ label: lab, value: lab })),
        ],
        [],
    );

    const kategoriFilterOptions: SelectOption[] = useMemo(
        () => [
            { label: "Semua Kategori", value: "" },
            { label: "SOP Penggunaan Alat", value: "SOP Penggunaan Alat" },
            {
                label: "SOP Pedoman Laboratorium",
                value: "SOP Pedoman Laboratorium",
            },
            {
                label: "SOP Keselamatan Kerja & K3",
                value: "SOP Keselamatan Kerja & K3",
            },
        ],
        [],
    );

    // Statistik Ringkasan
    const stats = useMemo(() => {
        const total = sopData.length;
        const penggunaanAlat = sopData.filter(
            (item) => item.kategori === "SOP Penggunaan Alat",
        ).length;
        const pedomanLab = sopData.filter(
            (item) => item.kategori === "SOP Pedoman Laboratorium",
        ).length;
        const k3 = sopData.filter(
            (item) => item.kategori === "SOP Keselamatan Kerja & K3",
        ).length;
        return { total, penggunaanAlat, pedomanLab, k3 };
    }, [sopData]);

    // Data yang difilter oleh dropdown Lab & Kategori
    const filteredData = useMemo(() => {
        return sopData.filter((item) => {
            const labFilterValue = selectedLabFilter[0]?.value || "";
            const kategoriFilterValue = selectedKategoriFilter[0]?.value || "";

            const matchLab =
                !labFilterValue || item.laboratorium === labFilterValue;
            const matchKategori =
                !kategoriFilterValue || item.kategori === kategoriFilterValue;

            return matchLab && matchKategori;
        });
    }, [sopData, selectedLabFilter, selectedKategoriFilter]);

    // Handlers
    const handleView = (row: SopItem) => {
        setActiveSop(row);
        setIsPreviewModalOpen(true);
    };

    const handleDownload = (row: SopItem) => {
        alert(`Mengunduh file SOP: ${row.fileName} (${row.fileSize})`);
    };

    const handleEdit = (row: SopItem) => {
        alert(`Edit data dokumen: ${row.judul}`);
    };

    const handleDelete = (row: SopItem) => {
        if (confirm(`Apakah Anda yakin ingin menghapus SOP "${row.judul}"?`)) {
            setSopData((prev) => prev.filter((item) => item.id !== row.id));
        }
    };

    const handleSaveNewSop = (e: React.FormEvent) => {
        e.preventDefault();
        const labVal = formLab[0]?.value || LABORATORIUM_LIST[0];
        const katVal = (formKategori[0]?.value ||
            "SOP Pedoman Laboratorium") as SopItem["kategori"];

        if (!formJudul) {
            alert("Silakan masukkan judul SOP!");
            return;
        }

        const newSop: SopItem = {
            id: Date.now(),
            kode: `SOP-${labVal.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
            judul: formJudul,
            laboratorium: labVal,
            kategori: katVal,
            namaAlat: formNamaAlat || undefined,
            deskripsi: formDeskripsi || "Dokumen SOP resmi laboratorium.",
            fileName:
                formUploadedFile?.name ||
                `${formJudul.replace(/\s+/g, "_")}.pdf`,
            fileSize: formUploadedFile
                ? `${(formUploadedFile.size / (1024 * 1024)).toFixed(1)} MB`
                : "1.8 MB",
            tglUpload: new Date().toISOString().split("T")[0],
            versi: formVersi || "v1.0",
            status: "Aktif",
            uploadedBy: "Admin Laboratorium",
        };

        setSopData([newSop, ...sopData]);
        setIsUploadModalOpen(false);

        // Reset form
        setFormJudul("");
        setFormVersi("v1.0");
        setFormNamaAlat("");
        setFormDeskripsi("");
        setFormLab([]);
        setFormKategori([]);
        setFormUploadedFile(null);
    };

    const tableColumns = getSopColumns({
        handleView,
        handleEdit,
        handleDelete,
        handleDownload,
    });

    return (
        <div className="space-y-6 pb-12">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary">
                        SOP Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Standar Operasional Prosedur Penggunaan Alat dan Pedoman
                        Operasional 17 Laboratorium
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        hierarchy="primary"
                        size="md"
                        onClick={() => setIsUploadModalOpen(true)}
                        className="flex items-center gap-2 shadow-xs"
                    >
                        <IconPlus size={16} />
                        Unggah SOP Baru
                    </Button>
                </div>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Total SOP Terdaftar
                        </p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">
                            {stats.total}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            17 Laboratorium
                        </span>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <IconFileText size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            SOP Penggunaan Alat
                        </p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">
                            {stats.penggunaanAlat}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Instruksi kerja alat
                        </span>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <IconTools size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            SOP Pedoman Lab
                        </p>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">
                            {stats.pedomanLab}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Tata tertib & praktikum
                        </span>
                    </div>
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                        <IconBuildingHospital size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            SOP Keselamatan & K3
                        </p>
                        <p className="text-2xl font-bold text-rose-600 mt-1">
                            {stats.k3}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Protokol keamanan
                        </span>
                    </div>
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-lg">
                        <IconShieldCheck size={24} />
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <CardPlain className="flex flex-col space-y-6 w-full p-4 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                {/* Filter & Search Bar */}
                <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                    {/* Search Bar */}
                    <div className="flex-1 min-w-70">
                        <TextField
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Cari judul SOP, kode dokumen, alat, atau nama file..."
                            prefixIcon={<IconSearch size={16} />}
                        />
                    </div>

                    {/* Dropdown Filters */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <div className="w-full sm:w-55">
                            <SelectDropdown
                                options={labFilterOptions}
                                selected={selectedLabFilter}
                                onSelect={(val) =>
                                    setSelectedLabFilter(val as any[])
                                }
                                placeholder="Filter Laboratorium"
                                indicator="check"
                            />
                        </div>

                        <div className="w-full sm:w-[52.5">
                            <SelectDropdown
                                options={kategoriFilterOptions}
                                selected={selectedKategoriFilter}
                                onSelect={(val) =>
                                    setSelectedKategoriFilter(val as any[])
                                }
                                placeholder="Filter Kategori"
                                indicator="check"
                            />
                        </div>

                        {(selectedLabFilter.length > 0 ||
                            selectedKategoriFilter.length > 0 ||
                            searchTerm) && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedLabFilter([]);
                                    setSelectedKategoriFilter([]);
                                    setSearchTerm("");
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 px-2 py-1.5"
                            >
                                <IconRefresh size={14} />
                                Reset Filter
                            </button>
                        )}
                    </div>
                </div>

                {/* Table Data */}
                <TableComponent
                    data={filteredData}
                    searchTerm={searchTerm}
                    columns={tableColumns}
                />
            </CardPlain>

            {/* MODAL 1: PREVIEW & DETAIL DOKUMEN SOP */}
            {isPreviewModalOpen && activeSop && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100">
                                    <IconFileTypePdf size={28} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                            {activeSop.kode}
                                        </span>
                                        <span
                                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getKategoriBadgeColor(activeSop.kategori)}`}
                                        >
                                            {activeSop.kategori}
                                        </span>
                                        <span
                                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeColor(activeSop.status)}`}
                                        >
                                            {activeSop.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                                        {activeSop.judul}
                                    </h3>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsPreviewModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <IconX size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="py-4 space-y-4 overflow-y-auto flex-1">
                            {/* Metadata Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs">
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Laboratorium:
                                    </span>
                                    <span
                                        className={`inline-block px-2 py-0.5 rounded font-medium border ${getLabColorClass(activeSop.laboratorium)}`}
                                    >
                                        {activeSop.laboratorium}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Versi Dokumen:
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        {activeSop.versi}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Tanggal Unggah:
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        {activeSop.tglUpload}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Diunggah Oleh:
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        {activeSop.uploadedBy}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Ukuran File:
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        {activeSop.fileSize}
                                    </span>
                                </div>
                                {activeSop.namaAlat && (
                                    <div>
                                        <span className="text-slate-400 block mb-0.5">
                                            Alat Terkait:
                                        </span>
                                        <span className="font-semibold text-blue-700">
                                            {activeSop.namaAlat}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Deskripsi Dokumen */}
                            <div>
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                    Deskripsi & Ruang Lingkup Prosedur
                                </h4>
                                <p className="text-sm text-slate-700 bg-white border border-slate-200 rounded-xl p-3 leading-relaxed">
                                    {activeSop.deskripsi ||
                                        "Tidak ada deskripsi tambahan."}
                                </p>
                            </div>

                            {/* Simulated PDF Preview Box */}
                            <div className="border border-slate-200 rounded-xl p-4 bg-slate-900 text-white flex flex-col items-center justify-center text-center space-y-3 min-h-40">
                                <IconFileTypePdf
                                    size={42}
                                    className="text-red-400"
                                />
                                <div>
                                    <p className="font-medium text-sm text-slate-200">
                                        {activeSop.fileName}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        Dokumen Resmi Terverifikasi PDF •{" "}
                                        {activeSop.fileSize}
                                    </p>
                                </div>
                                <div className="flex gap-2 pt-1">
                                    <Button
                                        hierarchy="primary"
                                        size="sm"
                                        onClick={() =>
                                            handleDownload(activeSop)
                                        }
                                        className="flex items-center gap-1.5"
                                    >
                                        <IconDownload size={14} />
                                        Unduh File PDF
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                            <Button
                                hierarchy="secondary"
                                size="md"
                                onClick={() => setIsPreviewModalOpen(false)}
                            >
                                Tutup
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: UNGGAH / TAMBAH SOP BARU */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    Unggah Dokumen SOP Baru
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    Tambahkan file SOP pedoman lab atau
                                    penggunaan alat
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsUploadModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <IconX size={20} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <form
                            onSubmit={handleSaveNewSop}
                            className="py-4 space-y-4 overflow-y-auto flex-1"
                        >
                            {/* Pilih Laboratorium */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Pilih Laboratorium{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <SelectDropdown
                                    options={LABORATORIUM_LIST.map((lab) => ({
                                        label: lab,
                                        value: lab,
                                    }))}
                                    selected={formLab}
                                    onSelect={(val) => setFormLab(val as any[])}
                                    placeholder="Pilih 1 dari 17 Laboratorium..."
                                    indicator="check"
                                />
                            </div>

                            {/* Kategori SOP */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Kategori SOP{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <SelectDropdown
                                    options={[
                                        {
                                            label: "SOP Penggunaan Alat",
                                            value: "SOP Penggunaan Alat",
                                        },
                                        {
                                            label: "SOP Pedoman Laboratorium",
                                            value: "SOP Pedoman Laboratorium",
                                        },
                                        {
                                            label: "SOP Keselamatan Kerja & K3",
                                            value: "SOP Keselamatan Kerja & K3",
                                        },
                                    ]}
                                    selected={formKategori}
                                    onSelect={(val) =>
                                        setFormKategori(val as any[])
                                    }
                                    placeholder="Pilih Kategori SOP..."
                                    indicator="check"
                                />
                            </div>

                            {/* Judul SOP */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Judul Dokumen SOP{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextField
                                    value={formJudul}
                                    onChange={setFormJudul}
                                    placeholder="Contoh: SOP Pengoperasian Rotary Evaporator"
                                />
                            </div>

                            {/* Grid: Versi & Nama Alat */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Versi Dokumen
                                    </label>
                                    <TextField
                                        value={formVersi}
                                        onChange={setFormVersi}
                                        placeholder="Contoh: v1.0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Nama Alat Terkait (Opsional)
                                    </label>
                                    <TextField
                                        value={formNamaAlat}
                                        onChange={setFormNamaAlat}
                                        placeholder="Contoh: Mikroskop Binokuler"
                                    />
                                </div>
                            </div>

                            {/* File Upload Area */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Unggah File SOP (PDF / DOCX){" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-5 text-center bg-slate-50 transition-colors">
                                    <input
                                        type="file"
                                        id="sop-file-upload"
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files[0]
                                            ) {
                                                setFormUploadedFile(
                                                    e.target.files[0],
                                                );
                                            }
                                        }}
                                    />
                                    <label
                                        htmlFor="sop-file-upload"
                                        className="cursor-pointer flex flex-col items-center justify-center"
                                    >
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-2">
                                            <IconUpload size={22} />
                                        </div>
                                        <p className="text-xs font-medium text-slate-700">
                                            {formUploadedFile ? (
                                                <span className="text-blue-600 font-semibold">
                                                    {formUploadedFile.name} (
                                                    {(
                                                        formUploadedFile.size /
                                                        (1024 * 1024)
                                                    ).toFixed(2)}{" "}
                                                    MB)
                                                </span>
                                            ) : (
                                                <span>
                                                    Klik untuk pilih file atau
                                                    seret & lepas ke sini
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-[11px] text-slate-400 mt-1">
                                            Format PDF, DOCX (Maksimal 15 MB)
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Deskripsi Singkat Prosedur
                                </label>
                                <TextArea
                                    value={formDeskripsi}
                                    onChange={setFormDeskripsi}
                                    placeholder="Tuliskan ringkasan prosedur operasional atau catatan keselamatan kerja..."
                                    rows={3}
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                                <Button
                                    hierarchy="secondary"
                                    size="md"
                                    type="button"
                                    onClick={() => setIsUploadModalOpen(false)}
                                >
                                    Batal
                                </Button>
                                <Button
                                    hierarchy="primary"
                                    size="md"
                                    type="submit"
                                    className="flex items-center gap-2"
                                >
                                    <IconCheck size={16} />
                                    Simpan SOP
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
