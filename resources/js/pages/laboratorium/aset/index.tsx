import { useState, useEffect, useMemo } from "react";
import { TextField, CardPlain, Button, SelectDropdown } from "@idds/react";
import {
    IconSearch,
    IconTrash,
    IconEdit,
    IconBox,
    IconTools,
    IconWind,
    IconCube,
    IconDroplet,
} from "@tabler/icons-react";

import { data as initialData, getAssetColumns } from "./data";
import { INITIAL_LAB_PROFILES } from "@/pages/laboratorium/profil/data";
import ButtonGroupBasic from "@/components/profil-aset/button-group";
import TableComponent from "@/components/table";

export default function LabAssetPage() {
    const [tableData, setTableData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLab, setSelectedLab] = useState<string>("");
    const [selectedJenis, setSelectedJenis] = useState<string>("all");
    const [isMobile, setIsMobile] = useState(false);

    // Opsi Laboratorium berdasarkan data laboratorium profil
    const labOptions = useMemo(() => {
        return [
            { label: "Semua Laboratorium", value: "" },
            ...INITIAL_LAB_PROFILES.map((item) => ({
                label: item.laboratorium,
                value: item.laboratorium,
            })),
        ];
    }, []);

    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    // --- FUNGSI AKSI TOMBOL TABEL ---
    const handleEdit = (row: any) => console.log("Edit Data:", row);

    const handleDelete = (row: any) => {
        console.log("Delete Data:", row);
    };

    const tableColumns = getAssetColumns({
        handleEdit,
        handleDelete,
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // 640px adalah breakpoint 'sm'
        };

        checkMobile(); // Jalankan saat pertama kali render
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Handler filter jenis dari tombol statistik
    const handleFilterJenis = (jenis: string) => {
        setSelectedJenis((prev) => {
            if (jenis === "all") return "all";
            return prev === jenis ? "all" : jenis;
        });
    };

    // Filter data tabel berdasarkan Jenis & Laboratorium
    const filteredData = useMemo(() => {
        return tableData.filter((item: any) => {
            // 1. Filter Berdasarkan Jenis (Alat, Cair, Padat, Gas, atau Semua)
            const matchJenis =
                selectedJenis === "all" ||
                !selectedJenis ||
                item.jenis?.toLowerCase() === selectedJenis.toLowerCase();

            // 2. Filter Berdasarkan Laboratorium
            const matchLab =
                !selectedLab ||
                selectedLab === "" ||
                (item.laboratorium &&
                    item.laboratorium
                        .toLowerCase()
                        .includes(selectedLab.toLowerCase()));

            return matchJenis && matchLab;
        });
    }, [tableData, selectedJenis, selectedLab]);

    return (
        <div className="space-y-6">
            {/* Header + Stats Section */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary">
                        Aset Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Manajemen aset laboratorium
                    </p>
                </div>

                {/* Grid Responsif untuk Tombol Kategori & Filter Jenis */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3">
                    {/* 1. Alat */}
                    <button
                        type="button"
                        onClick={() => handleFilterJenis("Alat")}
                        className={`rounded-xl px-3 py-2 sm:py-1.5 flex items-center gap-2.5 transition-all text-left hover:cursor-pointer ${
                            selectedJenis === "Alat"
                                ? "bg-emerald-50 border-2 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20"
                                : "bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300"
                        }`}
                        title="Filter Aset Jenis Alat"
                    >
                        <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                                selectedJenis === "Alat"
                                    ? "bg-emerald-600 text-white"
                                    : "bg-emerald-50 text-emerald-600"
                            }`}
                        >
                            <IconTools size={18} />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs text-slate-500 font-medium">
                                Alat:
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                85
                            </span>
                        </div>
                    </button>

                    {/* 2. Bahan Cair */}
                    <button
                        type="button"
                        onClick={() => handleFilterJenis("Cair")}
                        className={`rounded-xl px-3 py-2 sm:py-1.5 flex items-center gap-2.5 transition-all text-left hover:cursor-pointer ${
                            selectedJenis === "Cair"
                                ? "bg-cyan-50 border-2 border-cyan-500 shadow-sm ring-2 ring-cyan-500/20"
                                : "bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300"
                        }`}
                        title="Filter Aset Jenis Bahan Cair"
                    >
                        <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                                selectedJenis === "Cair"
                                    ? "bg-cyan-600 text-white"
                                    : "bg-cyan-50 text-cyan-600"
                            }`}
                        >
                            <IconDroplet size={18} />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs text-slate-500 font-medium">
                                Cair:
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                20
                            </span>
                        </div>
                    </button>

                    {/* 3. Bahan Padat */}
                    <button
                        type="button"
                        onClick={() => handleFilterJenis("Padat")}
                        className={`rounded-xl px-3 py-2 sm:py-1.5 flex items-center gap-2.5 transition-all text-left hover:cursor-pointer ${
                            selectedJenis === "Padat"
                                ? "bg-amber-50 border-2 border-amber-500 shadow-sm ring-2 ring-amber-500/20"
                                : "bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300"
                        }`}
                        title="Filter Aset Jenis Bahan Padat"
                    >
                        <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                                selectedJenis === "Padat"
                                    ? "bg-amber-600 text-white"
                                    : "bg-amber-50 text-amber-600"
                            }`}
                        >
                            <IconCube size={18} />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs text-slate-500 font-medium">
                                Padat:
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                15
                            </span>
                        </div>
                    </button>

                    {/* 4. Bahan Gas */}
                    <button
                        type="button"
                        onClick={() => handleFilterJenis("Gas")}
                        className={`rounded-xl px-3 py-2 sm:py-1.5 flex items-center gap-2.5 transition-all text-left hover:cursor-pointer ${
                            selectedJenis === "Gas"
                                ? "bg-purple-50 border-2 border-purple-500 shadow-sm ring-2 ring-purple-500/20"
                                : "bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300"
                        }`}
                        title="Filter Aset Jenis Bahan Gas"
                    >
                        <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                                selectedJenis === "Gas"
                                    ? "bg-purple-600 text-white"
                                    : "bg-purple-50 text-purple-600"
                            }`}
                        >
                            <IconWind size={18} />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs text-slate-500 font-medium">
                                Gas:
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                8
                            </span>
                        </div>
                    </button>

                    {/* 5. Total Aset (Di Mobile Memenuhi 2 Kolom) */}
                    <button
                        type="button"
                        onClick={() => handleFilterJenis("all")}
                        className={`col-span-2 sm:col-span-1 rounded-xl px-3 py-2 sm:py-1.5 flex items-center justify-center sm:justify-start gap-2.5 transition-all text-left hover:cursor-pointer ${
                            selectedJenis === "all"
                                ? "bg-blue-50 border-2 border-blue-500 shadow-sm ring-2 ring-blue-500/20"
                                : "bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300"
                        }`}
                        title="Tampilkan Semua Jenis Aset"
                    >
                        <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                                selectedJenis === "all"
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-50 text-blue-600"
                            }`}
                        >
                            <IconBox size={18} />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs text-slate-500 font-medium">
                                Total Aset:
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                128
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Content & Action Bar Section */}
            <CardPlain className="flex flex-col space-y-4 md:space-y-6 w-full p-4 md:p-6">
                {/* Control Bar: Responsif dari bertumpuk (mobile) ke sebaris (desktop) */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-3">
                    {/* Grup Kiri: Tombol Tambah & Search Input */}
                    <div className="flex items-center gap-3 w-full lg:w-auto flex-1">
                        <Button
                            hierarchy="primary"
                            size={isMobile ? "lg" : "xl"}
                            onClick={() => setIsUploadModalOpen(true)}
                            className={`flex items-center justify-center shadow-xs shrink-0 px-3.5 ${!isMobile ? "h-11 min-w-[44px]" : "min-w-[40px]"}`}
                            title="Tambah Aset Baru"
                            aria-label="Tambah Aset"
                        >
                            <span className="text-base font-bold leading-none">+</span>
                        </Button>

                        <div className="w-full">
                            <TextField
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Cari aset, kode, atau lab..."
                                prefixIcon={<IconSearch size={16} />}
                            />
                        </div>
                    </div>

                    {/* Grup Kanan: Dropdown Select Laboratorium & Import/Export Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <div className="w-full sm:w-72">
                            <SelectDropdown
                                options={labOptions}
                                selected={selectedLab}
                                onSelect={(val) => {
                                    if (!val || val === "") {
                                        setSelectedLab("");
                                    } else if (Array.isArray(val)) {
                                        setSelectedLab(val[0] || "");
                                    } else {
                                        setSelectedLab(String(val));
                                    }
                                }}
                                placeholder="Pilih Laboratorium"
                                indicator="check"
                                showPreviewValue={false}
                            />
                        </div>
                        <div className="flex justify-end shrink-0">
                            <ButtonGroupBasic />
                        </div>
                    </div>
                </div>

                {/* Table Component */}
                <div className="w-full overflow-x-auto">
                    <TableComponent
                        key={`${selectedJenis}_${selectedLab}`}
                        data={filteredData}
                        searchTerm={searchTerm}
                        columns={tableColumns}
                    />
                </div>
            </CardPlain>
        </div>
    );
}
