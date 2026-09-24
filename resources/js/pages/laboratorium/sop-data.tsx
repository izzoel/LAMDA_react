import { IconTrash, IconEdit, IconEye, IconDownload, IconFileTypePdf, IconFileText } from "@tabler/icons-react";
import { type Column } from "@idds/react";

export interface SopItem {
    id: number;
    kode: string;
    judul: string;
    laboratorium: string;
    kategori: "SOP Penggunaan Alat" | "SOP Pedoman Laboratorium" | "SOP Keselamatan Kerja & K3";
    deskripsi?: string;
    namaAlat?: string;
    fileName: string;
    fileSize: string;
    fileUrl?: string;
    tglUpload: string;
    versi: string;
    status: "Aktif" | "Revisi" | "Arsip";
    uploadedBy: string;
}

export const LABORATORIUM_LIST = [
    "Bahan Alam",
    "Batra dan Kosmetika",
    "CBT",
    "Farmakologi",
    "Flebotomi & Sitohistologi",
    "Gizi Kuliner & Ilmu Bahan Makanan",
    "Kimia",
    "Kimia Farmasi",
    "Microteaching",
    "Mikrobiologi",
    "Mini Teaching Hospital",
    "OSCE",
    "Patologi Klinis",
    "Penilaian Status Gizi",
    "Peradilan Semu",
    "Sediaan Steril",
    "Teknologi Sediaan Farmasi",
];

export const INITIAL_SOP_DATA: SopItem[] = [
    {
        id: 1,
        kode: "SOP-BA-001",
        judul: "SOP Pengoperasian Rotary Evaporator & Ekstraksi Bahan Alam",
        laboratorium: "Bahan Alam",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Rotary Evaporator Heidolph Hei-VAP",
        deskripsi: "Prosedur operasional standar untuk proses evaporasi pelarut dan pemekatan ekstrak simplisia tanaman obat menggunakan Rotary Evaporator.",
        fileName: "SOP_Rotary_Evaporator_Bahan_Alam.pdf",
        fileSize: "2.4 MB",
        fileUrl: "#",
        tglUpload: "2025-01-15",
        versi: "v2.1",
        status: "Aktif",
        uploadedBy: "Nurrahmi Arny, A.Md. Farm",
    },
    {
        id: 2,
        kode: "SOP-BK-001",
        judul: "SOP Pembuatan & Evaluasi Mutu Formulasi Sediaan Kosmetika Tradisional",
        laboratorium: "Batra dan Kosmetika",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Homogenizer & pH Meter Digital",
        deskripsi: "Pedoman tata cara peracikan krim, lotion, dan formulasi herbal obat tradisional sesuai standar CPOTB dan CPKB.",
        fileName: "SOP_Pedoman_Formulasi_Batra_Kosmetika.pdf",
        fileSize: "3.1 MB",
        fileUrl: "#",
        tglUpload: "2025-01-20",
        versi: "v1.0",
        status: "Aktif",
        uploadedBy: "Fathurrahman, S.Farm.",
    },
    {
        id: 3,
        kode: "SOP-CBT-001",
        judul: "SOP Tata Tertib & Pelaksanaan Ujian Berbasis Komputer (CBT Center)",
        laboratorium: "CBT",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Workstation Client PC & Server CBT",
        deskripsi: "Protokol kesiapan workstation, server ujian lokal, autentikasi peserta, dan penanganan kendala jaringan saat ujian CBT.",
        fileName: "SOP_Pelaksanaan_Ujian_CBT_Center.pdf",
        fileSize: "1.8 MB",
        fileUrl: "#",
        tglUpload: "2025-02-05",
        versi: "v3.0",
        status: "Aktif",
        uploadedBy: "Rizky Ramadhan, S.Kom.",
    },
    {
        id: 4,
        kode: "SOP-FAR-001",
        judul: "SOP Penanganan Hewan Uji (Mencit & Tikus) & Pengujian Farmakologi",
        laboratorium: "Farmakologi",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Plethysmometer & Kandang Hewan Metabolik",
        deskripsi: "Standar etika dan perlakuan pemeliharaan hewan coba, cara induksi bahan uji, serta penanganan pasca percobaan farmakologi/toksisitas.",
        fileName: "SOP_Etik_Hewan_Uji_Farmakologi.pdf",
        fileSize: "2.9 MB",
        fileUrl: "#",
        tglUpload: "2025-01-18",
        versi: "v1.2",
        status: "Aktif",
        uploadedBy: "apt. Hendra Kusuma, M.Sc.",
    },
    {
        id: 5,
        kode: "SOP-FS-001",
        judul: "SOP Pengambilan Darah Vena (Flebotomi) & Pembuatan Blok Parafin Sitohistologi",
        laboratorium: "Flebotomi & Sitohistologi",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Rotary Microtome & Kursi Flebotomi Khusus",
        deskripsi: "Langkah-langkah penusukan vena secara aseptis, fiksasi jaringan patologi, embedding parafin, hingga pemotongan mikrotom 4-5 mikron.",
        fileName: "SOP_Flebotomi_Sitohistologi_Lengkap.pdf",
        fileSize: "4.2 MB",
        fileUrl: "#",
        tglUpload: "2025-02-12",
        versi: "v2.0",
        status: "Aktif",
        uploadedBy: "Dina Mariana, A.Md.AK",
    },
    {
        id: 6,
        kode: "SOP-GZ-001",
        judul: "SOP Keamanan Pangan & Uji Organoleptik Bahan Makanan",
        laboratorium: "Gizi Kuliner & Ilmu Bahan Makanan",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Kompor Induksi, Waterbath & Sensory Booth",
        deskripsi: "Tata tertib sanitasi dapur uji, pengoperasian alat ukur tekstur & suhu, serta evaluasi sensori panelis rasa, warna, aroma.",
        fileName: "SOP_Sanitasi_Uji_Sensori_Gizi.pdf",
        fileSize: "2.1 MB",
        fileUrl: "#",
        tglUpload: "2025-01-25",
        versi: "v1.1",
        status: "Aktif",
        uploadedBy: "Siti Rahmah, S.Gz., M.Biomed",
    },
    {
        id: 7,
        kode: "SOP-KIM-001",
        judul: "SOP Pengoperasian Lemari Asam (Fume Hood) & Manajemen Limbah B3 Kimia",
        laboratorium: "Kimia",
        kategori: "SOP Keselamatan Kerja & K3",
        namaAlat: "Fume Hood Esco Airstream & Spill Kit",
        deskripsi: "Instruksi kerja penggunaan lemari asam saat mereaksikan larutan asam pekat dan pengemasan limbah sisa reagen kimia berbahaya.",
        fileName: "SOP_Lemari_Asam_Limbah_B3_Kimia.pdf",
        fileSize: "3.5 MB",
        fileUrl: "#",
        tglUpload: "2025-01-10",
        versi: "v2.2",
        status: "Aktif",
        uploadedBy: "Ahmad Fauzi, S.Si.",
    },
    {
        id: 8,
        kode: "SOP-KF-001",
        judul: "SOP Kalibrasi & Penggunaan Spektrofotometer UV-Vis Shimadzu",
        laboratorium: "Kimia Farmasi",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Spektrofotometer UV-Vis UV-1800",
        deskripsi: "Protokol kalibrasi panjang gelombang, pembacaan absorbansi kurva baku, dan penentuan kadar zat aktif farmasi.",
        fileName: "SOP_Spektrofotometer_UVVis_Shimadzu.pdf",
        fileSize: "2.7 MB",
        fileUrl: "#",
        tglUpload: "2025-02-01",
        versi: "v1.3",
        status: "Aktif",
        uploadedBy: "apt. Dewi Lestari, M.Farm.",
    },
    {
        id: 9,
        kode: "SOP-MT-001",
        judul: "SOP Perekaman Video Pembelajaran & Simulasi Pengajaran (Microteaching)",
        laboratorium: "Microteaching",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Smart Board Interactive, PTZ Camera & Mixer Audio",
        deskripsi: "Prosedur operasional studio microteaching, setting kamera observasi satu arah (*one-way mirror*), dan pengolahan rekaman evaluasi.",
        fileName: "SOP_Laboratorium_Microteaching.pdf",
        fileSize: "1.5 MB",
        fileUrl: "#",
        tglUpload: "2025-01-30",
        versi: "v1.0",
        status: "Aktif",
        uploadedBy: "Bambang Sudarsono, M.Pd.",
    },
    {
        id: 10,
        kode: "SOP-MIK-001",
        judul: "SOP Sterilisasi Autoclave & Teknik Isolasi Bakteri/Jamur Secara Aseptis",
        laboratorium: "Mikrobiologi",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Autoclave Hirayama HV-50 & Biosafety Cabinet Class II",
        deskripsi: "Pengaturan siklus suhu 121°C dan tekanan 15 psi, penyiapan media agar nutrien, serta teknik inokulasi biakan mikroorganisme.",
        fileName: "SOP_Sterilisasi_Autoclave_Mikrobiologi.pdf",
        fileSize: "3.8 MB",
        fileUrl: "#",
        tglUpload: "2025-01-14",
        versi: "v2.0",
        status: "Aktif",
        uploadedBy: "dr. Nurul Hidayati, Sp.MK",
    },
    {
        id: 11,
        kode: "SOP-MTH-001",
        judul: "SOP Pelayanan Resep, Dispensing Obat & Konseling Pasien Simulasi",
        laboratorium: "Mini Teaching Hospital",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Sistem Informasi Farmasi SIMRS, Rak Obat Depo & Laminar Airflow",
        deskripsi: "Alur simulasi penyerahan obat rawat jalan, telaah resep dokter, skrining klinis interaksi obat, dan edukasi konseling apoteker.",
        fileName: "SOP_Dispensing_Konseling_MTH.pdf",
        fileSize: "2.3 MB",
        fileUrl: "#",
        tglUpload: "2025-02-14",
        versi: "v1.5",
        status: "Aktif",
        uploadedBy: "apt. Wahyu Pratama, S.Farm.",
    },
    {
        id: 12,
        kode: "SOP-OSCE-001",
        judul: "SOP Manajemen Station & Prosedur Ujian Keterampilan Klinis (OSCE)",
        laboratorium: "OSCE",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Bel Otomatis Timer OSCE & Manikin Resusitasi",
        deskripsi: "Tata cara rotasi peserta 14 station, standarisasi penilaian penguji menggunakan tablet rubric, dan peran pasien standar (PS).",
        fileName: "SOP_Protokol_Ujian_OSCE_Center.pdf",
        fileSize: "3.0 MB",
        fileUrl: "#",
        tglUpload: "2025-02-18",
        versi: "v2.1",
        status: "Aktif",
        uploadedBy: "dr. Irwan Setiawan, Sp.PD",
    },
    {
        id: 13,
        kode: "SOP-PK-001",
        judul: "SOP Pengoperasian Automated Hematology Analyzer 5-Diff",
        laboratorium: "Patologi Klinis",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Sysmex XN-550 Hematology Analyzer",
        deskripsi: "Prosedur running reagen kontrol harian (QC), pemuatan tabung EDTA darah lengkap, dan interpretasi histogram hitung jenis sel darah.",
        fileName: "SOP_Hematology_Analyzer_Sysmex.pdf",
        fileSize: "4.5 MB",
        fileUrl: "#",
        tglUpload: "2025-01-22",
        versi: "v1.4",
        status: "Aktif",
        uploadedBy: "dr. Tri Hartati, Sp.PK",
    },
    {
        id: 14,
        kode: "SOP-PSG-001",
        judul: "SOP Pengukuran Antropometri & Analisis Komposisi Tubuh (BIA)",
        laboratorium: "Penilaian Status Gizi",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Bioelectrical Impedance Analyzer (BIA) & Stadiometer Digital",
        deskripsi: "Prosedur pengukuran tinggi badan, lingkar lengan atas (LiLA), ketebalan lipatan kulit (skinfold), serta persentase massa lemak tubuh.",
        fileName: "SOP_Pengukuran_Antropometri_BIA.pdf",
        fileSize: "2.0 MB",
        fileUrl: "#",
        tglUpload: "2025-01-28",
        versi: "v1.0",
        status: "Aktif",
        uploadedBy: "Nadia Putri, S.Gz., RD",
    },
    {
        id: 15,
        kode: "SOP-PS-001",
        judul: "SOP Tata Tertib & Simulasi Persidangan Peradilan Semu (Moot Court)",
        laboratorium: "Peradilan Semu",
        kategori: "SOP Pedoman Laboratorium",
        namaAlat: "Sound System Pengadilan, Palu Sidang & Jubah Hakim/Toga",
        deskripsi: "Pedoman pelaksanaan praktik peradilan perkara pidana/perdata, tata krama ruang sidang, pembagian peran panitera, jaksa, dan majelis hakim.",
        fileName: "SOP_Tata_Tertib_Sidang_Semu.pdf",
        fileSize: "1.9 MB",
        fileUrl: "#",
        tglUpload: "2025-02-02",
        versi: "v2.0",
        status: "Aktif",
        uploadedBy: "M. Firdaus, S.H., M.H.",
    },
    {
        id: 16,
        kode: "SOP-SS-001",
        judul: "SOP Penyiapan Ruang Bersih (Cleanroom Grade A/B) & Uji Sterilitas",
        laboratorium: "Sediaan Steril",
        kategori: "SOP Keselamatan Kerja & K3",
        namaAlat: "Laminar Air Flow (LAF) Vertikal & HEPA Filter Room",
        deskripsi: "Prosedur desinfeksi dinding dan lantai cleanroom, pemakaian pakaian steril *gowning*, serta teknik pengisian sediaan tetes mata dan injeksi.",
        fileName: "SOP_Cleanroom_Sediaan_Steril.pdf",
        fileSize: "3.7 MB",
        fileUrl: "#",
        tglUpload: "2025-01-19",
        versi: "v2.3",
        status: "Aktif",
        uploadedBy: "apt. Ratna Sari, M.Sc.",
    },
    {
        id: 17,
        kode: "SOP-TSF-001",
        judul: "SOP Pengoperasian Mesin Single Punch Tablet & Uji Fisik Tablet",
        laboratorium: "Teknologi Sediaan Farmasi",
        kategori: "SOP Penggunaan Alat",
        namaAlat: "Mesin Cetak Tablet Single Punch, Friability Tester & Hardness Tester",
        deskripsi: "Pengaturan bobot dan kekerasan tablet, pengisian granul ke dalam die, serta uji kerapuhan dan waktu hancur sediaan solid farmasi.",
        fileName: "SOP_Mesin_Cetak_Tablet_Uji_Fisik.pdf",
        fileSize: "3.4 MB",
        fileUrl: "#",
        tglUpload: "2025-02-10",
        versi: "v1.2",
        status: "Aktif",
        uploadedBy: "apt. Agung Prasetyo, M.Farm.",
    },
];

// Helper warna kategori & badge
export const getKategoriBadgeColor = (kategori: string) => {
    switch (kategori) {
        case "SOP Penggunaan Alat":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "SOP Pedoman Laboratorium":
            return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "SOP Keselamatan Kerja & K3":
            return "bg-rose-50 text-rose-700 border-rose-200";
        default:
            return "bg-slate-50 text-slate-700 border-slate-200";
    }
};

export const getStatusBadgeColor = (status: string) => {
    switch (status) {
        case "Aktif":
            return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "Revisi":
            return "bg-amber-50 text-amber-700 border-amber-200";
        case "Arsip":
            return "bg-slate-100 text-slate-600 border-slate-200";
        default:
            return "bg-slate-50 text-slate-700 border-slate-200";
    }
};

const badgeLabColors = [
    "bg-sky-50 text-sky-700 border-sky-200",
    "bg-emerald-50 text-emerald-700 border-emerald-200",
    "bg-amber-50 text-amber-700 border-amber-200",
    "bg-rose-50 text-rose-700 border-rose-200",
    "bg-purple-50 text-purple-700 border-purple-200",
    "bg-indigo-50 text-indigo-700 border-indigo-200",
    "bg-teal-50 text-teal-700 border-teal-200",
    "bg-cyan-50 text-cyan-700 border-cyan-200",
];

export const getLabColorClass = (text: string) => {
    if (!text) return badgeLabColors[0];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return badgeLabColors[Math.abs(hash) % badgeLabColors.length];
};

interface SopColumnsProps {
    handleView: (row: SopItem) => void;
    handleEdit: (row: SopItem) => void;
    handleDelete: (row: SopItem) => void;
    handleDownload: (row: SopItem) => void;
}

export const getSopColumns = ({
    handleView,
    handleEdit,
    handleDelete,
    handleDownload,
}: SopColumnsProps): Column[] => [
    {
        header: "Kode Dokumen",
        accessor: "kode",
        render: (row: SopItem) => (
            <div className="flex flex-col">
                <span className="font-mono text-xs font-semibold text-slate-700">
                    {row.kode}
                </span>
                <span className="text-[11px] text-slate-400 font-sans">
                    Versi {row.versi}
                </span>
            </div>
        ),
    },
    {
        header: "Judul SOP & File",
        accessor: "judul",
        render: (row: SopItem) => (
            <div className="flex items-start gap-2.5 max-w-md">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0 mt-0.5 border border-red-100">
                    <IconFileTypePdf size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                    <button
                        type="button"
                        onClick={() => handleView(row)}
                        className="font-medium text-sm text-slate-900 hover:text-blue-600 text-left transition-colors truncate block"
                        title={row.judul}
                    >
                        {row.judul}
                    </button>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                        <span className="truncate max-w-[200px] text-slate-600">{row.fileName}</span>
                        <span>•</span>
                        <span className="text-slate-400">{row.fileSize}</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        header: "Laboratorium",
        accessor: "laboratorium",
        render: (row: SopItem) => {
            if (!row.laboratorium) return <span className="text-slate-400">-</span>;
            const colorClasses = getLabColorClass(row.laboratorium);
            return (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border shadow-xs ${colorClasses}`}>
                    {row.laboratorium}
                </span>
            );
        },
    },
    {
        header: "Kategori SOP",
        accessor: "kategori",
        render: (row: SopItem) => {
            const badgeColor = getKategoriBadgeColor(row.kategori);
            return (
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${badgeColor}`}>
                    {row.kategori}
                </span>
            );
        },
    },
    {
        header: "Tanggal Upload",
        accessor: "tglUpload",
        render: (row: SopItem) => (
            <div className="flex flex-col text-xs text-slate-600">
                <span>{row.tglUpload}</span>
                <span className="text-[11px] text-slate-400 truncate max-w-[120px]" title={row.uploadedBy}>
                    {row.uploadedBy}
                </span>
            </div>
        ),
    },
    {
        header: "Status",
        accessor: "status",
        render: (row: SopItem) => {
            const statusColor = getStatusBadgeColor(row.status);
            return (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor}`}>
                    {row.status}
                </span>
            );
        },
    },
    {
        header: "Aksi",
        accessor: "actions",
        render: (row: SopItem) => {
            if (!row.id) return null;
            return (
                <div className="action-buttons flex items-center justify-end gap-2 text-slate-600">
                    <button
                        type="button"
                        className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={() => handleView(row)}
                        title="Lihat Detail & Preview"
                    >
                        <IconEye size={17} />
                    </button>
                    <button
                        type="button"
                        className="p-1.5 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                        onClick={() => handleDownload(row)}
                        title="Unduh File"
                    >
                        <IconDownload size={17} />
                    </button>
                    <button
                        type="button"
                        className="p-1.5 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                        onClick={() => handleEdit(row)}
                        title="Edit SOP"
                    >
                        <IconEdit size={17} />
                    </button>
                    <button
                        type="button"
                        className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        onClick={() => handleDelete(row)}
                        title="Hapus SOP"
                    >
                        <IconTrash size={17} />
                    </button>
                </div>
            );
        },
    },
];
