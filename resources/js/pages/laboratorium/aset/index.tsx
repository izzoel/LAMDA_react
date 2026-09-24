import { useState, useEffect } from "react";
import { TextField, CardPlain, Button, SelectDropdown } from "@idds/react";
import {
    IconSearch,
    IconTrash,
    IconEdit,
    IconPlus,
    IconBox,
    IconTools,
    IconWind,
    IconCube,
    IconDroplet,
} from "@tabler/icons-react";

import { data as initialData, getAssetColumns } from "./data";
import ButtonGroupBasic from "@/components/profil-aset/button-group";
import TableComponent from "@/components/table";

export default function LabAssetPage() {
    const [tableData, setTableData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState<any[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    const options = [
        { label: "Gretchen Mango", value: "gretchen" },
        { label: "Alfonso Vetrovs", value: "alfonso" },
        { label: "Terry Lubin", value: "terry" },
        { label: "Giana Levin", value: "giana" },
    ];

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

                {/* Grid Responsif untuk Card Kategori Statis */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3">
                    {/* 1. Alat */}
                    <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 sm:py-1.5 shadow-2xs flex items-center gap-2.5">
                        <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
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
                    </div>

                    {/* 2. Bahan Cair */}
                    <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 sm:py-1.5 shadow-2xs flex items-center gap-2.5">
                        <div className="p-1.5 bg-cyan-50 text-cyan-600 rounded-lg shrink-0">
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
                    </div>

                    {/* 3. Bahan Padat */}
                    <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 sm:py-1.5 shadow-2xs flex items-center gap-2.5">
                        <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
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
                    </div>

                    {/* 4. Bahan Gas */}
                    <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 sm:py-1.5 shadow-2xs flex items-center gap-2.5">
                        <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg shrink-0">
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
                    </div>

                    {/* 5. Total Aset (Di Mobile Memenuhi 2 Kolom) */}
                    <div className="col-span-2 sm:col-span-1 bg-white border border-slate-200 rounded-xl px-3 py-2 sm:py-1.5 shadow-2xs flex items-center justify-center sm:justify-start gap-2.5">
                        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
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
                    </div>
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
                            className={`flex items-center justify-center gap-2 shadow-xs shrink-0 ${!isMobile ? "h-11" : ""}`}
                        >
                            <IconPlus size={16} />
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

                    {/* Grup Kanan: Dropdown Select & Import/Export Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <div className="w-full sm:w-64">
                            <SelectDropdown
                                options={options}
                                selected={selected}
                                onSelect={(val) => setSelected(val as any[])}
                                placeholder="Select People"
                                indicator="check"
                                multiple
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
                        data={tableData}
                        searchTerm={searchTerm}
                        columns={tableColumns}
                    />
                </div>
            </CardPlain>
        </div>
    );
}
