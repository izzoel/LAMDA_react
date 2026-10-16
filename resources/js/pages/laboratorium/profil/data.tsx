export interface LabProfileItem {
    id: number;
    kode: string;
    laboratorium: string;
    fakultas: string;
    lokasi: string;
    ruangan?: string;
    deskripsi: string;
    authorName: string;
    authorRole: string;
    mediaSrc?: string;
    kapasitas: number;
    status: "Aktif" | "Pemeliharaan" | "Nonaktif";
}

export interface FakultasItem {
    id: number;
    fakultas: string;
    created_at?: string;
    updated_at?: string;
}

export interface FakultasOption {
    label: string;
    value: string;
}

export const FAKULTAS_OPTIONS: FakultasOption[] = [
    { label: "Semua Fakultas", value: "" },
    { label: "Fakultas Farmasi", value: "Farmasi" },
    { label: "FISH", value: "FISH" },
    { label: "FIKST", value: "FIKST" },
];

/**
 * Mencari opsi fakultas yang paling cocok untuk nilai tertentu (nama panjang atau singkatan)
 */
export function findMatchingFakultasOption<
    T extends { label: string; value: string }
>(options: T[], selected: string): T | undefined {
    if (!selected || !options || !options.length) return undefined;
    const s = selected.toLowerCase().trim();

    // 1. Exact match value / label
    const exact = options.find(
        (opt) =>
            opt.value.toLowerCase() === s ||
            opt.label.toLowerCase() === s
    );
    if (exact) return exact;

    // 2. Prefix / inclusion match
    const sub = options.find(
        (opt) =>
            opt.value.toLowerCase().includes(s) ||
            s.includes(opt.value.toLowerCase()) ||
            opt.label.toLowerCase().includes(s) ||
            s.includes(opt.label.toLowerCase())
    );
    if (sub) return sub;

    // 3. Farmasi
    if (s.includes("farmasi")) {
        return options.find(
            (opt) =>
                opt.value.toLowerCase().includes("farmasi") ||
                opt.label.toLowerCase().includes("farmasi")
        );
    }

    // 4. FISH (Fakultas Ilmu Sosial dan Humaniora)
    if (
        s === "fish" ||
        s.includes("sosial") ||
        s.includes("humaniora")
    ) {
        return options.find(
            (opt) =>
                opt.value.toLowerCase() === "fish" ||
                opt.label.toLowerCase() === "fish" ||
                opt.label.toLowerCase().includes("fish") ||
                opt.value.toLowerCase().includes("sosial") ||
                opt.label.toLowerCase().includes("sosial")
        );
    }

    // 5. FIKST (Fakultas Ilmu Kesehatan dan Sains Teknologi)
    if (
        s === "fikst" ||
        s === "fiskt" ||
        s.includes("kesehatan") ||
        s.includes("sains") ||
        s.includes("teknologi")
    ) {
        return options.find(
            (opt) =>
                opt.value.toLowerCase() === "fikst" ||
                opt.label.toLowerCase() === "fikst" ||
                opt.value.toLowerCase() === "fiskt" ||
                opt.label.toLowerCase() === "fiskt" ||
                opt.value.toLowerCase().includes("kesehatan") ||
                opt.label.toLowerCase().includes("kesehatan")
        );
    }

    return undefined;
}

/**
 * Mencocokkan filter fakultas dengan fleksibel:
 * - farmasi -> Fakultas Farmasi
 * - fish -> Fakultas Ilmu Sosial dan Humaniora (FISH)
 * - fikst -> Fakultas Ilmu Kesehatan dan Sains Teknologi (FIKST)
 */
export function matchFakultasFilter(
    labFakultas: string,
    filterVal: string
): boolean {
    if (!filterVal || filterVal.trim() === "") return true;
    const filterLower = filterVal.toLowerCase().trim();
    const labLower = (labFakultas || "").toLowerCase().trim();

    if (labLower === filterLower) return true;

    // 1. Farmasi
    if (filterLower.includes("farmasi")) {
        return labLower.includes("farmasi");
    }

    // 2. FISH (Fakultas Ilmu Sosial dan Humaniora)
    if (
        filterLower === "fish" ||
        filterLower.includes("sosial") ||
        filterLower.includes("humaniora")
    ) {
        return (
            labLower === "fish" ||
            labLower.includes("sosial") ||
            labLower.includes("humaniora")
        );
    }

    // 3. FIKST (Fakultas Ilmu Kesehatan dan Sains Teknologi)
    if (
        filterLower === "fikst" ||
        filterLower === "fiskt" ||
        filterLower.includes("kesehatan") ||
        filterLower.includes("sains") ||
        filterLower.includes("teknologi")
    ) {
        return (
            labLower === "fikst" ||
            labLower === "fiskt" ||
            labLower.includes("kesehatan") ||
            labLower.includes("sains") ||
            labLower.includes("teknologi")
        );
    }

    return labLower.includes(filterLower) || filterLower.includes(labLower);
}

/**
 * Mengambil daftar fakultas dari RESTful API (/api/v1/fakultas)
 */
export async function fetchFakultasFromApi(): Promise<FakultasItem[]> {
    try {
        const response = await fetch("/api/v1/fakultas?all=true", {
            headers: {
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const rawData = json.data;
        if (Array.isArray(rawData)) {
            return rawData;
        }
        if (rawData && Array.isArray(rawData.data)) {
            return rawData.data;
        }
        return [];
    } catch (error) {
        console.warn("Gagal memuat fakultas dari API, menggunakan data default:", error);
        return [
            { id: 1, fakultas: "Farmasi" },
            { id: 2, fakultas: "FIKST" },
            { id: 3, fakultas: "FISH" },
        ];
    }
}

/**
 * Mengambil opsi fakultas untuk komponen SelectDropdown
 */
export async function getFakultasDropdownOptions(
    includeAllOption = true
): Promise<FakultasOption[]> {
    const list = await fetchFakultasFromApi();
    const options = list.map((item) => {
        let label = item.fakultas;
        const lower = item.fakultas.toLowerCase();
        if (lower.includes("farmasi") && !lower.startsWith("fakultas")) {
            label = "Fakultas Farmasi";
        } else if (
            lower.includes("kesehatan") ||
            lower.includes("sains") ||
            lower === "fiskt" ||
            lower === "fikst"
        ) {
            label = "FIKST";
        } else if (
            lower.includes("sosial") ||
            lower.includes("humaniora") ||
            lower === "fish"
        ) {
            label = "FISH";
        }

        return {
            label: label,
            value: item.fakultas,
        };
    });

    if (includeAllOption) {
        return [{ label: "Semua Fakultas", value: "" }, ...options];
    }

    return options;
}

/**
 * Menambahkan fakultas baru via API
 */
export async function createFakultasApi(nama: string): Promise<FakultasItem> {
    const response = await fetch("/api/v1/fakultas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ fakultas: nama }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Gagal menambahkan fakultas.");
    }

    return data.data;
}

/**
 * Menghapus fakultas via API
 */
export async function deleteFakultasApi(id: number): Promise<void> {
    const response = await fetch(`/api/v1/fakultas/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Gagal menghapus fakultas.");
    }
}

export interface OptionLaboran {
    label: string;
    value: string;
    role: string;
}

export const DEFAULT_LABORAN_OPTIONS: OptionLaboran[] = [
    { label: "Dr. Ir. H. Muhammad Arifin, M.T.", value: "Dr. Ir. H. Muhammad Arifin, M.T.", role: "Kepala Lab" },
    { label: "apt. Siti Rahmawati, M.Farm.", value: "apt. Siti Rahmawati, M.Farm.", role: "Kepala Lab" },
    { label: "Ahmad Fauzi, S.Si.", value: "Ahmad Fauzi, S.Si.", role: "Laboran" },
    { label: "Nurrahmi Arny, A.Md. Farm", value: "Nurrahmi Arny, A.Md. Farm", role: "Laboran" },
    { label: "Fathurrahman, S.Farm.", value: "Fathurrahman, S.Farm.", role: "Laboran" },
];

/**
 * Mengambil daftar user dari RESTful API (/api/v1/users) dan memadukan dengan daftar user sistem.
 * Hanya menampilkan 5 user saja sesuai kebutuhan sistem.
 */
export async function fetchLaboranUserOptions(): Promise<OptionLaboran[]> {
    try {
        const response = await fetch("/api/v1/users?limit=5&all=true", {
            headers: {
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const rawData = json.data;
        const apiUsers: any[] = Array.isArray(rawData)
            ? rawData
            : rawData && Array.isArray(rawData.data)
            ? rawData.data
            : [];

        const optionsMap = new Map<string, OptionLaboran>();

        // Masukkan user riil dari database/API terlebih dahulu
        apiUsers.forEach((user: any) => {
            if (user && user.name) {
                const key = user.name.toLowerCase().trim();
                if (!optionsMap.has(key)) {
                    optionsMap.set(key, {
                        label: user.name,
                        value: user.name,
                        role: user.role || "Laboran",
                    });
                }
            }
        });

        // Lengkapi dengan opsi default laboran jika belum mencapai 5 user
        DEFAULT_LABORAN_OPTIONS.forEach((item) => {
            const key = item.value.toLowerCase().trim();
            if (!optionsMap.has(key)) {
                optionsMap.set(key, item);
            }
        });

        // Pastikan hanya 5 user saja yang dikembalikan
        return Array.from(optionsMap.values()).slice(0, 5);
    } catch (error) {
        console.warn("Gagal memuat user dari API, menggunakan opsi laboran default:", error);
        return DEFAULT_LABORAN_OPTIONS.slice(0, 5);
    }
}

export const LOKASI_OPTIONS = [
    { label: "Lab Terpadu", value: "Lab Terpadu" },
    { label: "Gedung B", value: "Gedung B" },
    { label: "Gedung C", value: "Gedung C" },
];

/**
 * Mencari opsi lokasi yang paling cocok untuk nilai tertentu (misal mapping 'Lab Terpadu Lt. 1' -> 'Lab Terpadu')
 */
export function findMatchingLokasiOption<
    T extends { label: string; value: string }
>(options: T[], selected: string): T | undefined {
    if (!options || !options.length) return undefined;
    if (!selected) return options[0];
    const s = selected.toLowerCase().trim();

    // 1. Exact match
    const exact = options.find(
        (opt) =>
            opt.value.toLowerCase() === s ||
            opt.label.toLowerCase() === s
    );
    if (exact) return exact;

    // 2. Mapping "terpadu" -> "Lab Terpadu"
    if (s.includes("terpadu")) {
        const found = options.find(
            (opt) =>
                opt.value.toLowerCase().includes("terpadu") ||
                opt.label.toLowerCase().includes("terpadu")
        );
        if (found) return found;
    }

    // 3. Mapping "gedung b"
    if (
        s.includes("gedung b") ||
        s.includes("farmasi") ||
        s.includes("medis") ||
        s.includes("osce") ||
        s.includes("cbt")
    ) {
        const found = options.find(
            (opt) =>
                opt.value.toLowerCase().includes("gedung b") ||
                opt.label.toLowerCase().includes("gedung b")
        );
        if (found) return found;
    }

    // 4. Mapping "gedung c"
    if (
        s.includes("gedung c") ||
        s.includes("hukum") ||
        s.includes("microteaching")
    ) {
        const found = options.find(
            (opt) =>
                opt.value.toLowerCase().includes("gedung c") ||
                opt.label.toLowerCase().includes("gedung c")
        );
        if (found) return found;
    }

    return options[0];
}

export const INITIAL_LAB_PROFILES: LabProfileItem[] = [
    {
        id: 1,
        kode: "LAB-BA",
        laboratorium: "Bahan Alam",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.101",
        deskripsi: "Pusat ekstraksi, fraksinasi, dan isolasi senyawa aktif bahan alam tumbuhan obat herbal nusantara.",
        authorName: "Nurrahmi Arny, A.Md. Farm",
        authorRole: "Laboran",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 2,
        kode: "LAB-BK",
        laboratorium: "Batra dan Kosmetika",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.102",
        deskripsi: "Pengembangan sediaan kosmetika tradisional, formulasi perawatan kulit, dan evaluasi fisik produk herbal.",
        authorName: "Fathurrahman, S.Farm.",
        authorRole: "Laboran",
        kapasitas: 25,
        status: "Aktif",
    },
    {
        id: 3,
        kode: "LAB-CBT",
        laboratorium: "CBT Center",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.301",
        deskripsi: "Pusat ujian berbasis komputer bersertifikasi nasional dengan 100 client workstation berkecepatan tinggi.",
        authorName: "Rizky Ramadhan, S.Kom.",
        authorRole: "Laboran",
        kapasitas: 100,
        status: "Aktif",
    },
    {
        id: 4,
        kode: "LAB-FAR",
        laboratorium: "Farmakologi",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.201",
        deskripsi: "Pengujian efek farmakologis, uji toksisitas in vivo pada hewan coba, dan simulasi reseptor obat.",
        authorName: "apt. Hendra Kusuma, M.Sc.",
        authorRole: "Dosen",
        kapasitas: 35,
        status: "Aktif",
    },
    {
        id: 5,
        kode: "LAB-FS",
        laboratorium: "Flebotomi & Sitohistologi",
        fakultas: "FIKST",
        lokasi: "Lab Terpadu",
        ruangan: "R.202",
        deskripsi: "Praktik pengambilan spesimen darah vena aseptis dan pemrosesan jaringan mikrotom sitohistoteknologi.",
        authorName: "Dina Mariana, A.Md.AK",
        authorRole: "Laboran",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 6,
        kode: "LAB-GZ",
        laboratorium: "Gizi Kuliner & Ilmu Bahan Makanan",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.301",
        deskripsi: "Dapur uji eksperimen menu klinis, analisis sensori organoleptik, dan keamanan mutu pangan diet.",
        authorName: "Siti Rahmah, S.Gz., M.Biomed",
        authorRole: "Dosen",
        kapasitas: 40,
        status: "Aktif",
    },
    {
        id: 7,
        kode: "LAB-KIM",
        laboratorium: "Kimia Dasar & Terapan",
        fakultas: "FIKST",
        lokasi: "Lab Terpadu",
        ruangan: "R.105",
        deskripsi: "Laboratorium reaksi kimia analitis, titrasi, sintesis senyawa organik, dan pengelolaan lemari asam fume hood.",
        authorName: "Ahmad Fauzi, S.Si.",
        authorRole: "Laboran",
        kapasitas: 45,
        status: "Aktif",
    },
    {
        id: 8,
        kode: "LAB-KF",
        laboratorium: "Kimia Farmasi",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.205",
        deskripsi: "Analisis kuantitatif dan kualitatif senyawa obat aktif menggunakan Spektrofotometer UV-Vis dan HPLC.",
        authorName: "apt. Dewi Lestari, M.Farm.",
        authorRole: "Dosen",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 9,
        kode: "LAB-MT",
        laboratorium: "Microteaching",
        fakultas: "FISH",
        lokasi: "Gedung C",
        ruangan: "R.204",
        deskripsi: "Studio simulasi pembelajaran interaktif dengan perekaman video observasi satu arah (*one-way mirror*).",
        authorName: "Bambang Sudarsono, M.Pd.",
        authorRole: "Dosen",
        kapasitas: 25,
        status: "Aktif",
    },
    {
        id: 10,
        kode: "LAB-MIK",
        laboratorium: "Mikrobiologi",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.101",
        deskripsi: "Isolasi biakan bakteri/jamur, uji sensitivitas antibiotik, dan sterilisasi Biosafety Cabinet Class II.",
        authorName: "dr. Nurul Hidayati, Sp.MK",
        authorRole: "Dosen",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 11,
        kode: "LAB-MTH",
        laboratorium: "Mini Teaching Hospital",
        fakultas: "Farmasi",
        lokasi: "Gedung B",
        ruangan: "R.102",
        deskripsi: "Simulasi apotek rumah sakit, peracikan resep obat rawat jalan, dan konseling simulasi klinis pasien.",
        authorName: "apt. Wahyu Pratama, S.Farm.",
        authorRole: "Laboran",
        kapasitas: 25,
        status: "Aktif",
    },
    {
        id: 12,
        kode: "LAB-OSCE",
        laboratorium: "OSCE Center",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.201",
        deskripsi: "Pusat ujian kompetensi keterampilan klinis dokter & ners berstandar 14 station otomatis terpadu.",
        authorName: "dr. Irwan Setiawan, Sp.PD",
        authorRole: "Dosen",
        kapasitas: 50,
        status: "Aktif",
    },
    {
        id: 13,
        kode: "LAB-PK",
        laboratorium: "Patologi Klinis",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.202",
        deskripsi: "Pemeriksaan otomatis hematologi 5-diff, urinalisis kimia, dan evaluasi cairan tubuh pasien.",
        authorName: "dr. Tri Hartati, Sp.PK",
        authorRole: "Dosen",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 14,
        kode: "LAB-PSG",
        laboratorium: "Penilaian Status Gizi",
        fakultas: "FIKST",
        lokasi: "Gedung B",
        ruangan: "R.302",
        deskripsi: "Pengukuran antropometri tubuh, Bioelectrical Impedance Analysis (BIA), dan survei konsumsi pangan.",
        authorName: "Nadia Putri, S.Gz., RD",
        authorRole: "Laboran",
        kapasitas: 30,
        status: "Aktif",
    },
    {
        id: 15,
        kode: "LAB-PS",
        laboratorium: "Peradilan Semu (Moot Court)",
        fakultas: "FISH",
        lokasi: "Gedung C",
        ruangan: "R.101",
        deskripsi: "Ruang sidang simulasi peradilan perkara pidana dan perdata lengkap dengan sistem audio akustik sidang.",
        authorName: "M. Firdaus, S.H., M.H.",
        authorRole: "Dosen",
        kapasitas: 60,
        status: "Aktif",
    },
    {
        id: 16,
        kode: "LAB-SS",
        laboratorium: "Sediaan Steril",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.203",
        deskripsi: "Ruang bersih Cleanroom Grade A/B untuk pembuatan obat tetes mata, injeksi, dan teknik penanganan aseptis.",
        authorName: "apt. Ratna Sari, M.Sc.",
        authorRole: "Laboran",
        kapasitas: 20,
        status: "Aktif",
    },
    {
        id: 17,
        kode: "LAB-TSF",
        laboratorium: "Teknologi Sediaan Farmasi",
        fakultas: "Farmasi",
        lokasi: "Lab Terpadu",
        ruangan: "R.103",
        deskripsi: "Pencetakan sediaan tablet solid single-punch, granulasi basah, dan uji kerapuhan friability sediaan.",
        authorName: "apt. Agung Prasetyo, M.Farm.",
        authorRole: "Laboran",
        kapasitas: 35,
        status: "Aktif",
    },
];
