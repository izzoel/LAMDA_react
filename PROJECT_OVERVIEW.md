# 📑 Dokumentasi & Analisis Komprehensif Proyek LAMDA
> **Layanan / Manajemen Administrasi & Laboratorium**  
> *Laporan Analisis Sistem & Blueprint Pengembangan Terpadu*  
> **Terakhir Diperbarui:** 24 September 2026

---

## 1. 📋 Ringkasan Proyek

**LAMDA** (*Layanan / Manajemen Administrasi & Laboratorium*) adalah platform aplikasi web modern yang dirancang untuk tata kelola laboratorium institusi pendidikan tinggi dan pusat riset. Aplikasi ini memusatkan seluruh kegiatan administrasi laboratorium, termasuk:
1. **Katalog & Profil Laboratorium**: Manajemen data laboratorium, penanggung jawab (laboran/dosen), lokasi gedung, dan kapasitas.
2. **Manajemen Aset & Inventaris**: Pelacakan alat-alat laboratorium, kode aset, kondisi fisik, ketersediaan, serta riwayat pemeliharaan.
3. **Pusat Dokumen SOP (Standar Operasional Prosedur)**: Pengelolaan dan distribusi SOP penggunaan alat, pedoman umum lab, dan protokol Keselamatan & Kesehatan Kerja (K3) untuk 17 laboratorium.
4. **Formulir Pengajuan Layanan**: Alur permohonan penggunaan lab, peminjaman alat, dan pengujian sampel bagi sivitas akademika.

Aplikasi ini dibangun menggunakan pedoman resmi **IDDS (*Indonesia Digital Design System*)** bertema **PANRB**, dipadukan dengan performa tinggi dari **React 19**, **Inertia.js v3**, dan **Tailwind CSS v4**.

---

## 2. 🛠️ Tech Stack & Ekosistem Teknologi

### ⚙️ Backend Architecture
| Komponen | Teknologi & Versi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Core Framework** | Laravel 13 (`laravel/framework ^13.17`) | Kerangka kerja PHP modern untuk business logic & routing |
| **Runtime Environment** | PHP 8.3+ | Engine performa tinggi dengan fitur type system terbaru |
| **Inertia Adapter** | `inertiajs/inertia-laravel ^3.0` | Menghubungkan routing Laravel langsung ke view React tanpa API REST manual |
| **Autentikasi & Keamanan** | `laravel/fortify ^1.37.2` | Autentikasi headless (Login, Register, 2FA OTP, & Passkeys WebAuthn) |
| **Routing Helper** | `laravel/wayfinder ^0.1.14` | Type-safe router bridge antara Laravel routes dan komponen frontend |
| **Code Quality & Testing**| Pest PHP v5, PHPStan / Larastan v3, Laravel Pint | Unit testing, static analysis, dan code formatter terstandar |

### 🎨 Frontend Architecture
| Komponen | Teknologi & Versi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **UI Framework** | React 19 (`react ^19.2.0`, `react-dom ^19.2.0`) | Library komponen antarmuka deklaratif dan reaktif |
| **Bahasa Pemrograman**| TypeScript (`^5.7.2`) | Menjamin type-safety di seluruh komponen dan state management |
| **Inertia Client** | `@inertiajs/react ^3.0.0` | Router SPA clientside dan manajemen state navigasi |
| **Build Tool & Bundler**| Vite 8 (`vite ^8.0.0`) / Vite Plus (`vp`) | HMR (Hot Module Replacement) super cepat & optimized production build |
| **Design System** | `@idds/react` + `@idds/styles` | Standar UI resmi Indonesia Digital Design System (Tema PANRB) |
| **CSS Framework** | `tailwindcss ^4.3.3` (`@tailwindcss/vite`) | Engine styling utilitas modern v4 |
| **Primitives & Icons** | Radix UI, `@tabler/icons-react`, `lucide-react` | Komponen interaktif aksesibel & paket ikon terlengkap |
| **Notifikasi / Toast** | `sonner ^2.0.0` | Sistem toast alert modern dan interaktif |

---

## 3. 📂 Struktur Direktori Proyek

```text
admin_lamda/
├── app/
│   ├── Actions/Fortify/               # Handler aksi autentikasi (2FA, Passkeys, Reset Password)
│   ├── Http/Controllers/              # Controller utama aplikasi (Settings, dll.)
│   └── Models/User.php                # Model Pengguna dengan dukungan Passkey & 2FA
├── config/                            # Konfigurasi sistem (app, database, fortify, inertia, dll.)
├── database/
│   └── migrations/                    # Skema basis data (users, passkeys, sessions, cache, jobs)
├── resources/
│   ├── css/
│   │   └── app.css                    # Definisi Tailwind v4, IDDS PANRB, dan custom table styling
│   └── js/
│       ├── actions/                   # Type-safe actions wrapper
│       ├── components/
│       │   ├── profil-aset/           # Komponen pendukung modul aset lab
│       │   ├── profil-lab/            # Komponen input lab (Fakultas, Laboran, Lokasi, Upload)
│       │   ├── ui/                    # Primitif UI (Button, Input, Modal, Sheet, Tooltip, dll.)
│       │   ├── app-header.tsx         # Header global, breadcrumbs, search, profil avatar
│       │   ├── app-sidebar.tsx        # Sidebar sekunder starter kit
│       │   ├── lab-card.tsx           # Kartu profil lab interaktif dengan modal detail
│       │   ├── table.tsx              # Komponen tabel IDDS terintegrasi dengan aksi hover
│       │   └── user-info.tsx          # Komponen tampilan data pengguna
│       ├── layouts/
│       │   ├── app-layout.tsx         # Layout wrapper utama
│       │   ├── sidebar.tsx            # Sidebar utama responsif IDDS dengan submenu accordion
│       │   └── content.tsx            # Header & wrapper konten halaman
│       ├── pages/
│       │   ├── auth/                  # Halaman otentikasi (Login, Register, 2FA, Passkeys)
│       │   ├── settings/              # Manajemen profil, password, dan preferensi tema
│       │   ├── dashboard.tsx          # Halaman beranda ringkasan dashboard
│       │   ├── welcome.tsx            # Landing page publik aplikasi
│       │   └── laboratorium/
│       │       ├── profil.tsx         # Manajemen katalog & kartu laboratorium
│       │       ├── aset/
│       │       │   ├── index.tsx      # Manajemen tabel data aset & inventaris lab
│       │       │   └── data.tsx       # Definisi skema kolom & dataset aset
│       │       ├── sop.tsx            # Manajemen pusat dokumen SOP laboratorium
│       │       └── sop-data.tsx       # Data 17 lab, kategori SOP, & generator data
│       └── routes/                    # Generator rute otomatis wayfinder
└── routes/
    ├── web.php                        # Rute aplikasi utama & modul laboratorium
    ├── settings.php                   # Rute pengaturan akun dan profil
    └── console.php                    # Artisan command line definitions
```

---

## 4. 🧭 Analisis Modul & Fitur yang Diimplementasikan

### 1. 🗂️ Sistem Layouting & Navigasi Terpadu (`resources/js/layouts/sidebar.tsx`)
- **Mode Responsif**: Dukungan penuh untuk Desktop dan Mobile.
- **Collapsible Desktop Sidebar**: Dapat diciutkan menjadi `72px` (ikon saja dengan tooltip IDDS) atau diperluas menjadi `280px`.
- **Accordion Menu Bertingkat**:
  - 📊 **Dashboard** (`/dashboard`)
  - 🔬 **Laboratorium**:
    - 🏢 **Profil** (`/laboratorium/profil`)
    - 📦 **Aset** (`/laboratorium/aset`)
    - 📑 **SOP** (`/laboratorium/sop`)
  - 📝 **Form Pengajuan** (`/form`) *(dengan badge indikator "New")*
- **Header Global**: Breadcrumbs dinamis, search global quick action, serta dropdown menu akun pengguna.

---

### 2. 🏢 Modul Profil Laboratorium (`resources/js/pages/laboratorium/profil.tsx`)
- **Tampilan Grid Interaktif**: Kartu setiap laboratorium menampilkan nama fakultas, nama laboratorium, deskripsi singkat, lokasi ruangan/gedung, serta foto dan nama laboran penanggung jawab.
- **Interaktivitas**: Fitur pencarian cepat, filter fakultas, serta modal pop-up detail laboratorium lengkap dengan kontak laboran.
- **Form Builder Pembuatan Lab Baru**:
  - Input nama laboratorium & deskripsi.
  - Dropdown dinamis: Fakultas, Laboran, dan Lokasi Gedung.
  - Komponen upload foto laboratorium.

---

### 3. 📦 Modul Aset & Inventaris Laboratorium (`resources/js/pages/laboratorium/aset/`)
- **Struktur Halaman Modern**: Dipisahkan secara bersih antara file tampilan (`index.tsx`) dan dataset definisi (`data.tsx`).
- **Tabel Data IDDS**:
  - **Kolom Terstruktur**: Kode Aset, Nama Aset, Ruang Penyimpanan, Laboratorium, Ketersediaan, Kondisi Fisik, Status, dan Aksi Cepat.
  - **Status Ketersediaan**: *Tersedia*, *Dipinjam*, *Dalam Pemeliharaan*.
  - **Kondisi Fisik**: *Baik*, *Rusak Ringan*, *Rusak Berat*.
- **Aksi Cepat & Hover Effects**: Tombol aksi Edit, Detail, dan Hapus yang muncul secara halus saat baris tabel di-hover.
- **Statistik & Filter**: Ringkasan jumlah aset per laboratorium dan pencarian multi-parameter.

---

### 4. 📑 Modul SOP Laboratorium (`resources/js/pages/laboratorium/sop.tsx` & `sop-data.tsx`)
- **Cakupan 17 Laboratorium**:
  1. Lab Rekayasa Perangkat Lunak
  2. Lab Jaringan Komputer & Siber
  3. Lab Kecerdasan Buatan & Data
  4. Lab Sistem Tertanam & IoT
  5. Lab Multimedia & Grafika
  6. Lab Kimia Dasar & Terapan
  7. Lab Kimia Organik
  8. Lab Biokimia & Mikrobiologi
  9. Lab Biologi Sel & Genetika
  10. Lab Fisika Modern & Optik
  11. Lab Fisika Material
  12. Lab Mekanika Tanah & Geoteknik
  13. Lab Hidraulika & Rekayasa Air
  14. Lab Termodinamika & Fluida
  15. Lab Proses Manufaktur & CNC
  16. Lab Elektronika & Instrumentasi
  17. Lab Tenaga Listrik & Konversi Energi
- **3 Kategori Utama SOP**:
  - ⚙️ *SOP Penggunaan Alat*
  - 📖 *SOP Pedoman Laboratorium*
  - 🛡️ *SOP Keselamatan Kerja & K3*
- **Fitur Unggulan**:
  - **Statistik Ringkasan 4 Kartu**: Total Dokumen, Dokumen SOP Alat, Dokumen Pedoman Lab, dan Dokumen SOP K3.
  - **Dual Filtering**: Filter fleksibel berdasarkan Laboratorium (17 lab) dan Kategori SOP.
  - **Modal Tambah/Unggah SOP**: Form upload file dokumen (PDF/DOCX), nomor dokumen, versi, dan deskripsi prosedur.
  - **Modal Preview & Detail SOP**: Tampilan detail prosedur, nomor dokumen, tanggal upload, status validitas, dan tombol unduh langsung.

---

### 5. 🔐 Keamanan & Autentikasi Lanjutan
- **Laravel Fortify Engine**:
  - Flow autentikasi lengkap (Login, Register, Email Verification, Password Reset).
  - **Two-Factor Authentication (2FA)** dengan kode QR Authenticator & backup recovery codes.
  - **Passkeys (WebAuthn)**: Autentikasi biometrik modern (Touch ID / Face ID / Windows Hello) tanpa memerlukan password.

---

## 5. 🚀 Panduan Menjalankan & Mengembangkan Proyek

### Prasyarat Lingkungan
- **PHP** >= 8.3 dengan ekstensi `pdo`, `mbstring`, `openssl`, `sodium`
- **Node.js** >= 20.x & **npm** / **pnpm** / **vp** (Vite Plus)
- **Composer** >= 2.7
- **Database**: MySQL 8.0+ / MariaDB 10.5+ / PostgreSQL 15+

### Langkah Instalasi & Menjalankan

```bash
# 1. Clone & Masuk ke Direktori Proyek
cd /Applications/MAMP/htdocs/admin_lamda

# 2. Instalasi Dependensi Backend & Frontend
composer install
npm install

# 3. Konfigurasi Environment File
cp .env.example .env
php artisan key:generate

# 4. Migrasi Skema Database
php artisan migrate

# 5. Menjalankan Server Pengembangan (Vite & Laravel)
# Pilihan 1: Menjalankan keduanya bersamaan via composer script
composer dev

# Pilihan 2: Menjalankan secara terpisah di 2 terminal
npm run dev          # Terminal 1: Vite HMR Server
php artisan serve    # Terminal 2: Laravel Backend Server
```

---

## 6. 📌 Rencana Aksi & Rekomendasi Pengembangan Lanjutan

| Prioritas | Modul / Fitur | Rencana Aksi Teknis |
| :---: | :--- | :--- |
| **Tinggi** | **Eloquent Models & Migrations** | Membuat migration & model untuk tabel `laboratoriums`, `assets`, dan `sops` agar data terhubung permanen ke database MySQL. |
| **Tinggi** | **Controller & API Endpoints** | Mengganti rute `Route::inertia()` statis pada `routes/web.php` dengan Resource Controller (`LaboratoriumController`, `AssetController`, `SopController`). |
| **Sedang** | **Modul Formulir Pengajuan (`/form`)** | Mengembangkan halaman permohonan penggunaan lab dan peminjaman alat dengan flow status: *Draft -> Diajukan -> Disetujui / Ditolak -> Selesai*. |
| **Sedang** | **File Storage & Upload Dokumen** | Mengintegrasikan upload PDF dokumen SOP dan foto lab dengan Laravel Storage (`public` / `s3 disk`) dan preview viewer interaktif. |
| **Rendah** | **Role & Permission Management** | Menambahkan role *Superadmin*, *Kepala Lab*, *Laboran*, dan *User Umum* menggunakan middleware hak akses. |
| **Rendah** | **Export / Import Data** | Fitur export data inventaris aset dan katalog SOP ke format Excel (.xlsx) dan laporan PDF. |

---
*Dokumen ini dibuat sebagai acuan teknis dan ringkasan status operasional proyek LAMDA.*
