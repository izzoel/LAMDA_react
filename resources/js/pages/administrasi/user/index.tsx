import { useState, useMemo, useEffect } from "react";
import {
    TextField,
    CardPlain,
    Button,
    SelectDropdown,
    type SelectOption,
} from "@idds/react";
import {
    IconSearch,
    IconPlus,
    IconUsers,
    IconUserShield,
    IconUserCheck,
    IconSchool,
    IconX,
    IconCheck,
    IconRefresh,
    IconShieldCheck,
    IconKey,
    IconBuildingHospital,
    IconLock,
    IconMail,
    IconId,
} from "@tabler/icons-react";
import {
    INITIAL_USER_DATA,
    getUserColumns,
    getRoleBadge,
    getStatusBadge,
    type UserItem,
} from "./data";
import TableComponent from "@/components/table";

export default function UserManagementPage() {
    const [userData, setUserData] = useState<UserItem[]>(INITIAL_USER_DATA);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRoleFilter, setSelectedRoleFilter] = useState<any[]>([]);
    const [selectedStatusFilter, setSelectedStatusFilter] = useState<any[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    // Modals State
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [activeUser, setActiveUser] = useState<UserItem | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    // Form State untuk Tambah / Edit User
    const [formName, setFormName] = useState("");
    const [formIdentifier, setFormIdentifier] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formRole, setFormRole] = useState<any[]>([
        { label: "Laboran", value: "Laboran" },
    ]);
    const [formUnitLab, setFormUnitLab] = useState("");
    const [formStatus, setFormStatus] = useState<any[]>([
        { label: "Aktif", value: "Aktif" },
    ]);
    const [form2FA, setForm2FA] = useState(false);

    // Responsive Mobile Listener
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Filter Options
    const roleFilterOptions: SelectOption[] = useMemo(
        () => [
            { label: "Semua Role", value: "" },
            { label: "Superadmin", value: "Superadmin" },
            { label: "Kepala Lab", value: "Kepala Lab" },
            { label: "Laboran", value: "Laboran" },
            { label: "Dosen", value: "Dosen" },
            { label: "Mahasiswa", value: "Mahasiswa" },
        ],
        [],
    );

    const statusFilterOptions: SelectOption[] = useMemo(
        () => [
            { label: "Semua Status", value: "" },
            { label: "Aktif", value: "Aktif" },
            { label: "Nonaktif", value: "Nonaktif" },
            { label: "Menunggu Verifikasi", value: "Pending" },
        ],
        [],
    );

    // Statistik Ringkasan Pengguna
    const stats = useMemo(() => {
        const total = userData.length;
        const pimpinan = userData.filter(
            (u) => u.role === "Superadmin" || u.role === "Kepala Lab",
        ).length;
        const laboran = userData.filter((u) => u.role === "Laboran").length;
        const akademisi = userData.filter(
            (u) => u.role === "Dosen" || u.role === "Mahasiswa",
        ).length;
        return { total, pimpinan, laboran, akademisi };
    }, [userData]);

    // Data Terfilter
    const filteredData = useMemo(() => {
        return userData.filter((item) => {
            const roleFilter = selectedRoleFilter[0]?.value || "";
            const statusFilter = selectedStatusFilter[0]?.value || "";

            const matchRole = !roleFilter || item.role === roleFilter;
            const matchStatus = !statusFilter || item.status === statusFilter;

            return matchRole && matchStatus;
        });
    }, [userData, selectedRoleFilter, selectedStatusFilter]);

    // Handlers
    const handleView = (row: UserItem) => {
        setActiveUser(row);
        setIsDetailModalOpen(true);
    };

    const handleEdit = (row: UserItem) => {
        setActiveUser(row);
        setIsEditing(true);
        setFormName(row.name);
        setFormIdentifier(row.identifier);
        setFormEmail(row.email);
        setFormPassword("");
        setFormRole([{ label: row.role, value: row.role }]);
        setFormUnitLab(row.unitLab);
        setFormStatus([{ label: row.status, value: row.status }]);
        setForm2FA(row.twoFactorEnabled);
        setIsAddModalOpen(true);
    };

    const handleDelete = (row: UserItem) => {
        if (confirm(`Apakah Anda yakin ingin menghapus akun "${row.name}"?`)) {
            setUserData((prev) => prev.filter((item) => item.id !== row.id));
        }
    };

    const handleToggleStatus = (row: UserItem) => {
        const newStatus = row.status === "Aktif" ? "Nonaktif" : "Aktif";
        setUserData((prev) =>
            prev.map((item) =>
                item.id === row.id ? { ...item, status: newStatus } : item,
            ),
        );
    };

    const handleOpenCreateModal = () => {
        setIsEditing(false);
        setActiveUser(null);
        setFormName("");
        setFormIdentifier("");
        setFormEmail("");
        setFormPassword("");
        setFormRole([{ label: "Laboran", value: "Laboran" }]);
        setFormUnitLab("");
        setFormStatus([{ label: "Aktif", value: "Aktif" }]);
        setForm2FA(false);
        setIsAddModalOpen(true);
    };

    const handleSaveUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formName || !formEmail) {
            alert("Nama dan Email wajib diisi!");
            return;
        }

        const roleVal = (formRole[0]?.value || "Laboran") as UserItem["role"];
        const statusVal = (formStatus[0]?.value ||
            "Aktif") as UserItem["status"];

        const initials = formName
            .split(" ")
            .filter(Boolean)
            .map((w) => w[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

        if (isEditing && activeUser) {
            // Update User
            setUserData((prev) =>
                prev.map((item) =>
                    item.id === activeUser.id
                        ? {
                              ...item,
                              name: formName,
                              identifier: formIdentifier || item.identifier,
                              email: formEmail,
                              role: roleVal,
                              unitLab: formUnitLab || "Semua Laboratorium",
                              status: statusVal,
                              twoFactorEnabled: form2FA,
                              avatarInitials: initials || item.avatarInitials,
                          }
                        : item,
                ),
            );
        } else {
            // Create New User
            const newUser: UserItem = {
                id: Date.now(),
                name: formName,
                identifier: formIdentifier || `USR-${Math.floor(1000 + Math.random() * 9000)}`,
                email: formEmail,
                role: roleVal,
                unitLab: formUnitLab || "Laboratorium Terpadu",
                status: statusVal,
                twoFactorEnabled: form2FA,
                passkeyEnabled: false,
                lastLogin: "Belum pernah",
                registeredAt: new Date().toISOString().split("T")[0],
                avatarInitials: initials || "US",
                permissions:
                    roleVal === "Superadmin"
                        ? ["All Access"]
                        : ["View SOP", "Submit Form"],
            };
            setUserData([newUser, ...userData]);
        }

        setIsAddModalOpen(false);
    };

    const tableColumns = getUserColumns({
        handleView,
        handleEdit,
        handleDelete,
        handleToggleStatus,
    });

    return (
        <div className="space-y-6 pb-12">
            {/* Header Title Section */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary flex items-center gap-2.5">
                        <IconUsers className="text-blue-600" size={28} />
                        Manajemen Pengguna & Hak Akses
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Pengelolaan akun pimpinan, pranata laboratorium, dosen
                        peneliti, dan mahasiswa terpadu
                    </p>
                </div>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Total Pengguna
                        </p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">
                            {stats.total}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Semua Akun Terdaftar
                        </span>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <IconUsers size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Superadmin & Pimpinan
                        </p>
                        <p className="text-2xl font-bold text-indigo-600 mt-1">
                            {stats.pimpinan}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Kepala UPT & Kepala Lab
                        </span>
                    </div>
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <IconUserShield size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Laboran & Teknisi
                        </p>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">
                            {stats.laboran}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Pengelola Operasional Lab
                        </span>
                    </div>
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                        <IconUserCheck size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Dosen & Mahasiswa
                        </p>
                        <p className="text-2xl font-bold text-amber-600 mt-1">
                            {stats.akademisi}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Pengguna Layanan Lab
                        </span>
                    </div>
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                        <IconSchool size={24} />
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <CardPlain className="flex flex-col space-y-4 md:space-y-6 w-full p-4 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                {/* Control Bar: Responsif dari bertumpuk (mobile) ke sebaris (desktop) */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-3">
                    {/* Grup Kiri: Tombol Tambah & Search Input */}
                    <div className="flex items-center gap-3 w-full lg:w-auto flex-1">
                        <Button
                            hierarchy="primary"
                            size={isMobile ? "lg" : "xl"}
                            onClick={handleOpenCreateModal}
                            className={`flex items-center justify-center gap-2 shadow-xs shrink-0 ${!isMobile ? "h-11" : ""}`}
                            title="Tambah Pengguna Baru"
                        >
                            <IconPlus size={16} />
                        </Button>

                        <div className="w-full">
                            <TextField
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Cari nama, NIP/NIM, email, role, atau unit lab..."
                                prefixIcon={<IconSearch size={16} />}
                            />
                        </div>
                    </div>

                    {/* Grup Kanan: Dropdown Filters & Reset */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <div className="w-full sm:w-52">
                            <SelectDropdown
                                options={roleFilterOptions}
                                selected={selectedRoleFilter}
                                onSelect={(val) =>
                                    setSelectedRoleFilter(val as any[])
                                }
                                placeholder="Filter Role"
                                indicator="check"
                            />
                        </div>

                        <div className="w-full sm:w-52">
                            <SelectDropdown
                                options={statusFilterOptions}
                                selected={selectedStatusFilter}
                                onSelect={(val) =>
                                    setSelectedStatusFilter(val as any[])
                                }
                                placeholder="Filter Status"
                                indicator="check"
                            />
                        </div>

                        {(selectedRoleFilter.length > 0 ||
                            selectedStatusFilter.length > 0 ||
                            searchTerm) && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedRoleFilter([]);
                                    setSelectedStatusFilter([]);
                                    setSearchTerm("");
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 shrink-0 px-2 py-2 sm:py-1.5"
                            >
                                <IconRefresh size={14} />
                                Reset Filter
                            </button>
                        )}
                    </div>
                </div>

                {/* Table Data */}
                <div className="w-full overflow-x-auto">
                    <TableComponent
                        data={filteredData}
                        searchTerm={searchTerm}
                        columns={tableColumns}
                    />
                </div>
            </CardPlain>

            {/* MODAL 1: DETAIL LENGKAP PENGGUNA & AUDIT KEAMANAN */}
            {isDetailModalOpen && activeUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header Modal */}
                        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3.5">
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base shadow-sm ${getRoleBadge(activeUser.role).avatarBg}`}
                                >
                                    {activeUser.avatarInitials}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getRoleBadge(activeUser.role).badgeClass}`}
                                        >
                                            {getRoleBadge(activeUser.role).label}
                                        </span>
                                        <span
                                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(activeUser.status).badgeClass}`}
                                        >
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full ${getStatusBadge(activeUser.status).dotColor}`}
                                            />
                                            {getStatusBadge(activeUser.status).label}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {activeUser.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-mono">
                                        NIP/NIM. {activeUser.identifier}
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsDetailModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <IconX size={20} />
                            </button>
                        </div>

                        {/* Body Modal */}
                        <div className="py-4 space-y-4 overflow-y-auto flex-1 text-xs sm:text-sm">
                            {/* Grid Detail Identitas */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs">
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Email Institusi:
                                    </span>
                                    <span className="font-semibold text-slate-900 break-all">
                                        {activeUser.email}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Unit / Laboratorium:
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {activeUser.unitLab}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Terakhir Login:
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {activeUser.lastLogin}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block mb-0.5">
                                        Tanggal Terdaftar:
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {activeUser.registeredAt}
                                    </span>
                                </div>
                            </div>

                            {/* Status Keamanan Akun */}
                            <div>
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Status Keamanan & Autentikasi
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white">
                                        <div className="flex items-center gap-2">
                                            <IconShieldCheck
                                                size={18}
                                                className={
                                                    activeUser.twoFactorEnabled
                                                        ? "text-emerald-600"
                                                        : "text-slate-400"
                                                }
                                            />
                                            <div>
                                                <p className="font-semibold text-slate-800">
                                                    Two-Factor Auth (2FA)
                                                </p>
                                                <p className="text-[11px] text-slate-400">
                                                    TOTP Authenticator
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                                activeUser.twoFactorEnabled
                                                    ? "bg-emerald-50 text-emerald-700"
                                                    : "bg-slate-100 text-slate-500"
                                            }`}
                                        >
                                            {activeUser.twoFactorEnabled
                                                ? "Aktif"
                                                : "Nonaktif"}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white">
                                        <div className="flex items-center gap-2">
                                            <IconKey
                                                size={18}
                                                className={
                                                    activeUser.passkeyEnabled
                                                        ? "text-blue-600"
                                                        : "text-slate-400"
                                                }
                                            />
                                            <div>
                                                <p className="font-semibold text-slate-800">
                                                    Passkeys (WebAuthn)
                                                </p>
                                                <p className="text-[11px] text-slate-400">
                                                    Biometrik Touch/Face ID
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                                activeUser.passkeyEnabled
                                                    ? "bg-blue-50 text-blue-700"
                                                    : "bg-slate-100 text-slate-500"
                                            }`}
                                        >
                                            {activeUser.passkeyEnabled
                                                ? "Aktif"
                                                : "Nonaktif"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hak Akses & Izin */}
                            {activeUser.permissions && (
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                        Hak Akses & Otorisasi
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeUser.permissions.map(
                                            (perm, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                                >
                                                    {perm}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Modal */}
                        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                            <Button
                                hierarchy="primary"
                                size="sm"
                                onClick={() => {
                                    setIsDetailModalOpen(false);
                                    handleEdit(activeUser);
                                }}
                            >
                                Edit Data Pengguna
                            </Button>
                            <Button
                                hierarchy="secondary"
                                size="sm"
                                onClick={() => setIsDetailModalOpen(false)}
                            >
                                Tutup
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: TAMBAH / EDIT PENGGUNA */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header Modal */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    {isEditing
                                        ? "Edit Data Pengguna"
                                        : "Tambah Pengguna Baru"}
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    {isEditing
                                        ? "Perbarui informasi akun dan hak akses pengguna"
                                        : "Daftarkan akun personel, dosen, atau mahasiswa baru"}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <IconX size={20} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <form
                            onSubmit={handleSaveUser}
                            className="py-4 space-y-4 overflow-y-auto flex-1 text-xs"
                        >
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Nama Lengkap & Gelar{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextField
                                    value={formName}
                                    onChange={setFormName}
                                    placeholder="Contoh: apt. Fathurrahman, S.Farm."
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        NIP / NIM / ID Pengguna
                                    </label>
                                    <TextField
                                        value={formIdentifier}
                                        onChange={setFormIdentifier}
                                        placeholder="Contoh: 19920815 201802 1 003"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Role / Hak Akses{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <SelectDropdown
                                        options={[
                                            {
                                                label: "Superadmin",
                                                value: "Superadmin",
                                            },
                                            {
                                                label: "Kepala Lab",
                                                value: "Kepala Lab",
                                            },
                                            {
                                                label: "Laboran",
                                                value: "Laboran",
                                            },
                                            {
                                                label: "Dosen Peneliti",
                                                value: "Dosen",
                                            },
                                            {
                                                label: "Mahasiswa",
                                                value: "Mahasiswa",
                                            },
                                        ]}
                                        selected={formRole}
                                        onSelect={(val) =>
                                            setFormRole(val as any[])
                                        }
                                        indicator="check"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Email Institusi{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <TextField
                                        value={formEmail}
                                        onChange={setFormEmail}
                                        placeholder="nama@institusi.ac.id"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        {isEditing
                                            ? "Password Baru (Opsional)"
                                            : "Password Awal"}
                                    </label>
                                    <TextField
                                        value={formPassword}
                                        onChange={setFormPassword}
                                        placeholder={
                                            isEditing
                                                ? "Kosongkan jika tidak diubah"
                                                : "Minimal 8 karakter"
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Unit / Ruang Laboratorium
                                    </label>
                                    <TextField
                                        value={formUnitLab}
                                        onChange={setFormUnitLab}
                                        placeholder="Contoh: Lab Kimia & Kimia Farmasi"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Status Akun
                                    </label>
                                    <SelectDropdown
                                        options={[
                                            {
                                                label: "Aktif",
                                                value: "Aktif",
                                            },
                                            {
                                                label: "Nonaktif",
                                                value: "Nonaktif",
                                            },
                                            {
                                                label: "Menunggu Verifikasi",
                                                value: "Pending",
                                            },
                                        ]}
                                        selected={formStatus}
                                        onSelect={(val) =>
                                            setFormStatus(val as any[])
                                        }
                                        indicator="check"
                                    />
                                </div>
                            </div>

                            {/* Checkbox Keamanan 2FA */}
                            <div className="pt-2">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={form2FA}
                                        onChange={(e) =>
                                            setForm2FA(e.target.checked)
                                        }
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                                    />
                                    <span className="text-xs font-medium text-slate-700">
                                        Wajibkan Autentikasi Dua Faktor (2FA /
                                        OTP) untuk akun ini
                                    </span>
                                </label>
                            </div>

                            {/* Modal Footer */}
                            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                                <Button
                                    hierarchy="secondary"
                                    size="sm"
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                >
                                    Batal
                                </Button>
                                <Button
                                    hierarchy="primary"
                                    size="sm"
                                    type="submit"
                                    className="flex items-center gap-1.5"
                                >
                                    <IconCheck size={16} />
                                    {isEditing
                                        ? "Perbarui Akun"
                                        : "Simpan Pengguna"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
