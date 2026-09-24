import {
    IconTrash,
    IconEdit,
    IconSettings,
    IconTools,
    IconDroplet,
    IconCube,
    IconWind,
} from "@tabler/icons-react";
import { type Column } from "@idds/react";

// ==========================================
// 1. DATA DUMMY
// ==========================================
export const data = [
    {
        id: 1,
        kode: "KIM001",
        nama: "Asam Klorida",
        penyimpanan: "Ruang Penyimpanan Utama",
        laboratorium: "Kimia",
        jenis: "Cair",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 2,
        kode: "MIK012",
        nama: "Mikroskop Binokuler Olympus",
        penyimpanan: "Rak Kaca B",
        laboratorium: "Mikrobiologi",
        jenis: "Alat",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 3,
        kode: "PAT005",
        nama: "Mesin Centrifuge",
        penyimpanan: "Meja Kerja C",
        laboratorium: "Patologi",
        jenis: "Alat",
        Kondisi: "Rusak Ringan",
        status: true,
    },
    {
        id: 4,
        kode: "KIM022",
        nama: "Vaseline",
        penyimpanan: "Rak Kaca B",
        laboratorium: "Kimia",
        jenis: "Padat",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 5,
        kode: "HEM008",
        nama: "Oksigen",
        penyimpanan: "Ruang Gas",
        laboratorium: "Kimia",
        jenis: "Gas",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 6,
        kode: "BIO014",
        nama: "Freezer -80°C",
        penyimpanan: "Ruang Dingin",
        laboratorium: "Biomolekuler",
        jenis: "Alat",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 7,
        kode: "MIK003",
        nama: "Autoclave Sterilizer",
        penyimpanan: "Ruang Sterilisasi",
        laboratorium: "Mikrobiologi",
        jenis: "Alat",
        Kondisi: "Rusak Berat",
        status: false,
    },
    {
        id: 8,
        kode: "KIM045",
        nama: "Spektrofotometer UV-Vis",
        penyimpanan: "Ruang Instrumen Optik",
        laboratorium: "Kimia",
        jenis: "Alat",
        Kondisi: "Baik",
        status: true,
    },
    {
        id: 9,
        kode: "HEM011",
        nama: "Mikroskop Trinokuler",
        penyimpanan: "Lemari Besi A-02",
        laboratorium: "Hematologi",
        jenis: "Alat",
        Kondisi: "Rusak Ringan",
        status: true,
    },
    {
        id: 10,
        kode: "BIO020",
        nama: "PCR Thermal Cycler",
        penyimpanan: "Meja Amplifikasi",
        laboratorium: "Biomolekuler",
        jenis: "Alat",
        Kondisi: "Baik",
        status: true,
    },
];

// ==========================================
// 2. HELPER FUNGSI WARNA
// ==========================================
const badgeColors = [
    "bg-sky-50 text-sky-700 border-sky-200",
    "bg-emerald-50 text-emerald-700 border-emerald-200",
    "bg-amber-50 text-amber-700 border-amber-200",
    "bg-rose-50 text-rose-700 border-rose-200",
    "bg-purple-50 text-purple-700 border-purple-200",
    "bg-indigo-50 text-indigo-700 border-indigo-200",
    "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
];

const getColorClass = (text: string) => {
    if (!text) return badgeColors[0];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return badgeColors[Math.abs(hash) % badgeColors.length];
};

// ==========================================
// 3. KONFIGURASI KOLOM
// ==========================================
interface AssetColumnsProps {
    handleEdit: (row: any) => void;
    handleDelete: (row: any) => void;
}

export const getAssetColumns = ({
    handleEdit,
    handleDelete,
}: AssetColumnsProps): Column[] => [
    {
        header: "Kode",
        accessor: "kode",
        sortable: true,
        render: (row: any) => (
            <span className="font-mono text-sm text-slate-500">{row.kode}</span>
        ),
    },
    {
        header: "Nama",
        accessor: "nama",
        sortable: true,
        render: (row: any) => {
            if (!row.nama) return <span className="text-slate-400">-</span>;
            return (
                <div className="flex items-center">
                    <span>{row.nama}</span>
                </div>
            );
        },
    },
    {
        header: "Penyimpanan",
        accessor: "penyimpanan",
        sortable: true,
        render: (row: any) => {
            if (!row.penyimpanan)
                return <span className="text-slate-400">-</span>;
            const colorClasses = getColorClass(row.penyimpanan);
            return (
                <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border shadow-sm ${colorClasses}`}
                >
                    {row.penyimpanan}
                </span>
            );
        },
    },
    {
        header: "Laboratorium",
        accessor: "laboratorium",
        sortable: true,
        render: (row: any) => {
            if (!row.laboratorium)
                return <span className="text-slate-400">-</span>;
            const colorClasses = getColorClass(row.laboratorium);
            return (
                <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border shadow-sm ${colorClasses}`}
                >
                    {row.laboratorium}
                </span>
            );
        },
    },
    {
        header: "Jenis",
        accessor: "jenis",
        sortable: true,
        render: (row: any) => {
            const jenis = row.jenis?.toLowerCase().trim();
            let color = "text-slate-700";
            let icon = null;

            if (jenis === "alat") {
                color = "text-emerald-600";
                icon = <IconTools size={16} />;
            } else if (jenis === "cair") {
                color = "text-cyan-600";
                icon = <IconDroplet size={16} />;
            } else if (jenis === "padat") {
                color = "text-amber-600";
                icon = <IconCube size={16} />;
            } else if (jenis === "gas") {
                color = "text-purple-600";
                icon = <IconWind size={16} />;
            }

            return (
                <span
                    className={`inline-flex items-center gap-1.5 font-medium text-sm ${color}`}
                >
                    {icon}
                    <span>{row.jenis}</span>
                </span>
            );
        },
    },
    {
        header: "Kondisi",
        accessor: "Kondisi",
        sortable: true,
        render: (row: any) => {
            const kondisi = row.Kondisi?.toLowerCase();
            let color = "text-slate-500";
            if (kondisi === "baik") color = "text-emerald-600";
            if (kondisi === "rusak ringan") color = "text-amber-500";
            if (kondisi === "rusak berat") color = "text-red-500";

            return (
                <span className={`font-medium text-sm ${color}`}>
                    {row.Kondisi}
                </span>
            );
        },
    },
    {
        header: "",
        // (
        //     <div className="flex items-center justify-end">
        //         <IconSettings size={18} className="text-slate-600" />
        //     </div>
        // )
        accessor: "actions",
        render: (row: any) => {
            if (!row.id) return null;
            return (
                <div className="action-buttons flex items-center justify-end gap-3 text-slate-700">
                    <button
                        type="button"
                        className="hover:text-blue-600 transition-colors"
                        onClick={() => handleEdit(row)}
                        title="Edit"
                    >
                        <IconEdit size={18} />
                    </button>
                    <button
                        type="button"
                        className="hover:text-red-600 transition-colors"
                        onClick={() => handleDelete(row)}
                        title="Hapus"
                    >
                        <IconTrash size={18} />
                    </button>
                </div>
            );
        },
    },
];
