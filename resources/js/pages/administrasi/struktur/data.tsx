export interface OrganisasiNode {
    id: string;
    nama: string;
    nip: string;
    jabatan: string;
    level: "pimpinan" | "koordinator" | "sub_koordinator" | "laboran" | "staf";
    divisi: string;
    laboratorium?: string;
    email: string;
    telepon: string;
    fotoUrl?: string;
    avatarInitials: string;
    status: "Aktif" | "Cuti" | "Tugas Belajar";
    tupoksi: string[];
    sertifikasi?: string[];
    children?: OrganisasiNode[];
}

export const INITIAL_ORGANISASI_TREE: OrganisasiNode = {
    id: "org-1",
    nama: "Dr. Ir. H. Muhammad Arifin, M.T.",
    nip: "19780512 200312 1 002",
    jabatan: "Kepala UPT Laboratorium Terpadu",
    level: "pimpinan",
    divisi: "Pimpinan Utama",
    email: "m.arifin@institusi.ac.id",
    telepon: "0812-3456-7890",
    avatarInitials: "MA",
    status: "Aktif",
    tupoksi: [
        "Memimpin perencanaan strategis seluruh laboratorium institusi",
        "Mengawasi kepatuhan keselamatan kerja (K3) dan akreditasi ISO 17025",
        "Menetapkan alokasi anggaran dan pengadaan alat laboratorium skala besar",
        "Mengesahkan Standar Operasional Prosedur (SOP) seluruh laboratorium",
    ],
    sertifikasi: ["ISO 17025 Lead Auditor", "Ahli K3 Laboratorium Terlisensi BNSP", "Sertifikasi Asesor Kompetensi Laboran"],
    children: [
        {
            id: "org-2",
            nama: "apt. Siti Rahmawati, M.Farm.",
            nip: "19840315 200812 2 003",
            jabatan: "Koordinator Tata Usaha & Layanan Lab",
            level: "koordinator",
            divisi: "Tata Usaha & Layanan",
            email: "siti.rahmawati@institusi.ac.id",
            telepon: "0813-8877-6655",
            avatarInitials: "SR",
            status: "Aktif",
            tupoksi: [
                "Mengelola administrasi peminjaman alat dan permohonan riset",
                "Manajemen sistem inventaris aset dan perizinan laboratorium",
                "Koordinasi layanan pengujian sampel mahasiswa dan pihak eksternal",
            ],
            sertifikasi: ["Good Laboratory Practice (GLP)", "Manajemen Arsip Laboratorium"],
            children: [
                {
                    id: "org-2-1",
                    nama: "Rina Marlina, S.E.",
                    nip: "19900820 201504 2 001",
                    jabatan: "Staf Administrasi & Inventaris Aset",
                    level: "staf",
                    divisi: "Tata Usaha",
                    email: "rina.marlina@institusi.ac.id",
                    telepon: "0821-4433-2211",
                    avatarInitials: "RM",
                    status: "Aktif",
                    tupoksi: [
                        "Pencatatan mutasi barang, BHP, dan pelabelan kode aset",
                        "Rekapitulasi penggunaan fasilitas laboratorium mingguan",
                    ],
                },
                {
                    id: "org-2-2",
                    nama: "Rizky Ramadhan, S.Kom.",
                    nip: "19941105 201903 1 004",
                    jabatan: "Staf IT & Pengelola CBT Center",
                    level: "staf",
                    divisi: "Teknologi Informasi",
                    laboratorium: "CBT Center & Microteaching",
                    email: "rizky.ramadhan@institusi.ac.id",
                    telepon: "0857-1122-3344",
                    avatarInitials: "RR",
                    status: "Aktif",
                    tupoksi: [
                        "Pemeliharaan server ujian lokal CBT dan sistem LAMDA",
                        "Penyediaan infrastruktur jaringan ruang laboratorium",
                    ],
                    sertifikasi: ["MikroTik Certified Network Associate", "Cisco CCNA"],
                },
            ],
        },
        {
            id: "org-3",
            nama: "Ir. Budi Santoso, S.T., M.Eng.",
            nip: "19820719 200604 1 003",
            jabatan: "Kepala Divisi K3 & Mutu Laboratorium",
            level: "koordinator",
            divisi: "Mutu, Keselamatan & K3",
            email: "budi.santoso@institusi.ac.id",
            telepon: "0811-9988-7766",
            avatarInitials: "BS",
            status: "Aktif",
            tupoksi: [
                "Inspeksi rutin instalasi keselamatan, APAR, dan spill kit",
                "Pengelolaan limbah B3 kimia dan medis cair/padat",
                "Penyusunan audit kepatuhan protokol K3 seluruh lab",
            ],
            sertifikasi: ["Ahli K3 Kimia Utama", "Pengelolaan Limbah B3 Terakreditasi"],
            children: [
                {
                    id: "org-3-1",
                    nama: "apt. Hendra Kusuma, M.Sc.",
                    nip: "19860210 201012 1 001",
                    jabatan: "Koordinator Lab Sains Hayati & Farmasi",
                    level: "sub_koordinator",
                    divisi: "Sains Hayati",
                    laboratorium: "Farmakologi & Bahan Alam",
                    email: "hendra.kusuma@institusi.ac.id",
                    telepon: "0812-7788-9900",
                    avatarInitials: "HK",
                    status: "Aktif",
                    tupoksi: [
                        "Supervisi praktikum farmakologi dan riset hewan coba",
                        "Validasi metode preparasi ekstrak bahan alam",
                    ],
                    children: [
                        {
                            id: "org-3-1-1",
                            nama: "Nurrahmi Arny, A.Md.Farm.",
                            nip: "19920414 201801 2 002",
                            jabatan: "Laboran Bahan Alam & Fitokimia",
                            level: "laboran",
                            divisi: "Sains Hayati",
                            laboratorium: "Bahan Alam",
                            email: "nurrahmi.arny@institusi.ac.id",
                            telepon: "0813-1122-4455",
                            avatarInitials: "NA",
                            status: "Aktif",
                            tupoksi: [
                                "Pengoperasian Rotary Evaporator dan maserasi simplisia",
                                "Penyediaan reagen dan bahan uji praktikum",
                            ],
                        },
                        {
                            id: "org-3-1-2",
                            nama: "apt. Ratna Sari, M.Sc.",
                            nip: "19890928 201403 2 003",
                            jabatan: "Laboran Sediaan Steril & Cleanroom",
                            level: "laboran",
                            divisi: "Farmasi Steril",
                            laboratorium: "Sediaan Steril",
                            email: "ratna.sari@institusi.ac.id",
                            telepon: "0812-3344-5566",
                            avatarInitials: "RS",
                            status: "Aktif",
                            tupoksi: [
                                "Pemeliharaan ruang bersih Cleanroom Grade A/B",
                                "Validasi sterilisasi autoclave dan Laminar Airflow",
                            ],
                            sertifikasi: ["Teknik Aseptis & Uji Sterilitas Farmasi"],
                        },
                    ],
                },
                {
                    id: "org-3-2",
                    nama: "dr. Nurul Hidayati, Sp.MK",
                    nip: "19851120 200912 2 002",
                    jabatan: "Koordinator Lab Diagnostik & Medis",
                    level: "sub_koordinator",
                    divisi: "Kesehatan & Medis",
                    laboratorium: "Mikrobiologi, Patologi, & OSCE",
                    email: "nurul.hidayati@institusi.ac.id",
                    telepon: "0813-4455-6677",
                    avatarInitials: "NH",
                    status: "Aktif",
                    tupoksi: [
                        "Pengawasan biosafety lab mikrobiologi Level 2",
                        "Koordinasi station ujian OSCE dan klinik simulasi",
                    ],
                    children: [
                        {
                            id: "org-3-2-1",
                            nama: "Dina Mariana, A.Md.AK",
                            nip: "19930618 201705 2 001",
                            jabatan: "Laboran Flebotomi & Sitohistologi",
                            level: "laboran",
                            divisi: "Kesehatan",
                            laboratorium: "Flebotomi & Sitohistologi",
                            email: "dina.mariana@institusi.ac.id",
                            telepon: "0852-7788-1122",
                            avatarInitials: "DM",
                            status: "Aktif",
                            tupoksi: [
                                "Penyiapan alat flebotomi dan pewarnaan preparat jaringan",
                                "Pengoperasian mikrotom jaringan patologi",
                            ],
                        },
                        {
                            id: "org-3-2-2",
                            nama: "dr. Tri Hartati, Sp.PK",
                            nip: "19870815 201210 2 001",
                            jabatan: "Penanggung Jawab Patologi Klinis",
                            level: "laboran",
                            divisi: "Medis",
                            laboratorium: "Patologi Klinis",
                            email: "tri.hartati@institusi.ac.id",
                            telepon: "0811-2233-4455",
                            avatarInitials: "TH",
                            status: "Aktif",
                            tupoksi: [
                                "Quality Control harian Hematology Analyzer",
                                "Validasi pembacaan morfologi hitung darah",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "org-4",
            nama: "Hendra Gunawan, S.T., M.T.",
            nip: "19800108 200501 1 002",
            jabatan: "Kepala Divisi Kalibrasi, Instrumentasi & Pemeliharaan",
            level: "koordinator",
            divisi: "Teknik & Instrumentasi",
            email: "hendra.gunawan@institusi.ac.id",
            telepon: "0812-9900-1122",
            avatarInitials: "HG",
            status: "Aktif",
            tupoksi: [
                "Jadwal preventif maintenance seluruh instrumen optik dan elektrik",
                "Kerjasama kalibrasi berkala dengan Balai Pengujian Nasional",
                "Manajemen suku cadang dan perbaikan alat rusak",
            ],
            sertifikasi: ["Teknisi Kalibrasi Suhu, Massa & Optik", "Peralatan Fume Hood Esco Certified"],
            children: [
                {
                    id: "org-4-1",
                    nama: "Ahmad Fauzi, S.Si.",
                    nip: "19910512 201602 1 003",
                    jabatan: "Laboran Kimia & Spektrofotometri",
                    level: "laboran",
                    divisi: "Kimia Terapan",
                    laboratorium: "Kimia & Kimia Farmasi",
                    email: "ahmad.fauzi@institusi.ac.id",
                    telepon: "0822-6677-8899",
                    avatarInitials: "AF",
                    status: "Aktif",
                    tupoksi: [
                        "Pengoperasian Spektrofotometer UV-Vis dan lemari asam",
                        "Pencatatan dan standarisasi larutan baku analitis",
                    ],
                },
                {
                    id: "org-4-2",
                    nama: "apt. Agung Prasetyo, M.Farm.",
                    nip: "19881204 201311 1 002",
                    jabatan: "Laboran Teknologi Formulasi & Sediaan Padat",
                    level: "laboran",
                    divisi: "Teknologi Farmasi",
                    laboratorium: "Teknologi Sediaan Farmasi",
                    email: "agung.prasetyo@institusi.ac.id",
                    telepon: "0813-5566-7788",
                    avatarInitials: "AP",
                    status: "Aktif",
                    tupoksi: [
                        "Pengoperasian mesin cetak tablet single punch & friability tester",
                        "Pengawasan kebersihan alat formulasi solid",
                    ],
                },
            ],
        },
    ],
};

// Helper untuk menghitung total personel dalam subtree
export const countTotalMembers = (node: OrganisasiNode): number => {
    let count = 1;
    if (node.children) {
        for (const child of node.children) {
            count += countTotalMembers(child);
        }
    }
    return count;
};

// Helper warna level jabatan
export const getLevelBadge = (level: OrganisasiNode["level"]) => {
    switch (level) {
        case "pimpinan":
            return {
                label: "Pimpinan Utama",
                bgColor: "bg-blue-600 text-white border-blue-700",
                chipColor: "bg-blue-50 text-blue-700 border-blue-200",
                borderColor: "border-blue-500",
                avatarBg: "bg-blue-700 text-white",
            };
        case "koordinator":
            return {
                label: "Koordinator Divisi",
                bgColor: "bg-indigo-600 text-white border-indigo-700",
                chipColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
                borderColor: "border-indigo-400",
                avatarBg: "bg-indigo-600 text-white",
            };
        case "sub_koordinator":
            return {
                label: "Sub-Koordinator",
                bgColor: "bg-purple-600 text-white border-purple-700",
                chipColor: "bg-purple-50 text-purple-700 border-purple-200",
                borderColor: "border-purple-300",
                avatarBg: "bg-purple-600 text-white",
            };
        case "laboran":
            return {
                label: "Laboran / Pranata Lab",
                bgColor: "bg-emerald-600 text-white border-emerald-700",
                chipColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                borderColor: "border-emerald-300",
                avatarBg: "bg-emerald-600 text-white",
            };
        case "staf":
            return {
                label: "Staf Administrasi & IT",
                bgColor: "bg-amber-600 text-white border-amber-700",
                chipColor: "bg-amber-50 text-amber-700 border-amber-200",
                borderColor: "border-amber-300",
                avatarBg: "bg-amber-600 text-white",
            };
        default:
            return {
                label: "Anggota",
                bgColor: "bg-slate-600 text-white border-slate-700",
                chipColor: "bg-slate-50 text-slate-700 border-slate-200",
                borderColor: "border-slate-300",
                avatarBg: "bg-slate-600 text-white",
            };
    }
};

// Flatten tree untuk mode tabel atau pencarian
export const flattenTree = (node: OrganisasiNode, list: OrganisasiNode[] = []): OrganisasiNode[] => {
    list.push(node);
    if (node.children) {
        for (const child of node.children) {
            flattenTree(child, list);
        }
    }
    return list;
};
