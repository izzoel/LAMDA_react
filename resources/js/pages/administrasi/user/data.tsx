import {
    IconTrash,
    IconEdit,
    IconEye,
    IconShieldCheck,
    IconKey,
    IconLock,
    IconUserCheck,
    IconUserX,
    IconBuildingHospital,
} from "@tabler/icons-react";
import { type Column } from "@idds/react";

export interface UserItem {
    id: number;
    name: string;
    identifier: string; // NIP / NIM / ID
    email: string;
    role: "Superadmin" | "Kepala Lab" | "Laboran" | "Dosen" | "Mahasiswa";
    unitLab: string;
    status: "Aktif" | "Nonaktif" | "Pending";
    twoFactorEnabled: boolean;
    passkeyEnabled: boolean;
    lastLogin: string;
    registeredAt: string;
    avatarInitials: string;
    permissions?: string[];
}

export const INITIAL_USER_DATA: UserItem[] = [
    {
        id: 1,
        name: "Dr. Ir. H. Muhammad Arifin, M.T.",
        identifier: "19780512 200312 1 002",
        email: "m.arifin@institusi.ac.id",
        role: "Superadmin",
        unitLab: "Semua Laboratorium (UPT Terpadu)",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: true,
        lastLogin: "Hari ini, 08:30",
        registeredAt: "2024-01-10",
        avatarInitials: "MA",
        permissions: ["All Access", "User Management", "SOP Approval", "Asset Disposal", "Form Approval"],
    },
    {
        id: 2,
        name: "apt. Siti Rahmawati, M.Farm.",
        identifier: "19840315 200812 2 003",
        email: "siti.rahmawati@institusi.ac.id",
        role: "Kepala Lab",
        unitLab: "Lab Farmasi & CBT Center",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: true,
        lastLogin: "Kemarin, 16:45",
        registeredAt: "2024-01-15",
        avatarInitials: "SR",
        permissions: ["SOP Management", "Asset Management", "Form Approval", "Staff Management"],
    },
    {
        id: 3,
        name: "Ahmad Fauzi, S.Si.",
        identifier: "19910512 201602 1 003",
        email: "ahmad.fauzi@institusi.ac.id",
        role: "Laboran",
        unitLab: "Lab Kimia & Kimia Farmasi",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: false,
        lastLogin: "Hari ini, 10:15",
        registeredAt: "2024-02-01",
        avatarInitials: "AF",
        permissions: ["SOP Upload", "Asset Mutation", "Form Verification"],
    },
    {
        id: 4,
        name: "Nurrahmi Arny, A.Md.Farm.",
        identifier: "19920414 201801 2 002",
        email: "nurrahmi.arny@institusi.ac.id",
        role: "Laboran",
        unitLab: "Lab Bahan Alam & Kosmetika",
        status: "Aktif",
        twoFactorEnabled: false,
        passkeyEnabled: true,
        lastLogin: "30 Sep 2026",
        registeredAt: "2024-02-10",
        avatarInitials: "NA",
        permissions: ["SOP Upload", "Asset Inventory", "Form Verification"],
    },
    {
        id: 5,
        name: "dr. Nurul Hidayati, Sp.MK",
        identifier: "19851120 200912 2 002",
        email: "nurul.hidayati@institusi.ac.id",
        role: "Kepala Lab",
        unitLab: "Lab Mikrobiologi & Patologi",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: true,
        lastLogin: "Hari ini, 09:00",
        registeredAt: "2024-01-20",
        avatarInitials: "NH",
        permissions: ["SOP Approval", "Asset Management", "Form Approval"],
    },
    {
        id: 6,
        name: "Prof. Dr. apt. Bambang Sudarsono, M.Sc.",
        identifier: "19680325 199303 1 001",
        email: "bambang.sudarsono@institusi.ac.id",
        role: "Dosen",
        unitLab: "Lab Farmakologi",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: false,
        lastLogin: "28 Sep 2026",
        registeredAt: "2024-02-15",
        avatarInitials: "BS",
        permissions: ["Submit Research Form", "Borrow Asset", "View SOP"],
    },
    {
        id: 7,
        name: "Dina Mariana, A.Md.AK",
        identifier: "19930618 201705 2 001",
        email: "dina.mariana@institusi.ac.id",
        role: "Laboran",
        unitLab: "Lab Flebotomi & Sitohistologi",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: false,
        lastLogin: "Kemarin, 14:20",
        registeredAt: "2024-03-01",
        avatarInitials: "DM",
        permissions: ["SOP Upload", "Asset Inventory"],
    },
    {
        id: 8,
        name: "Farhan Alamsyah",
        identifier: "2201015024",
        email: "farhan.alamsyah@mhs.institusi.ac.id",
        role: "Mahasiswa",
        unitLab: "Fakultas Farmasi & Sains",
        status: "Aktif",
        twoFactorEnabled: false,
        passkeyEnabled: false,
        lastLogin: "Hari ini, 11:30",
        registeredAt: "2024-09-01",
        avatarInitials: "FA",
        permissions: ["Submit Practice Form", "View SOP"],
    },
    {
        id: 9,
        name: "Nabila Aurelia Putri",
        identifier: "2201015088",
        email: "nabila.aurelia@mhs.institusi.ac.id",
        role: "Mahasiswa",
        unitLab: "Fakultas Kedokteran",
        status: "Pending",
        twoFactorEnabled: false,
        passkeyEnabled: false,
        lastLogin: "Belum pernah",
        registeredAt: "2026-10-01",
        avatarInitials: "NA",
        permissions: ["View SOP"],
    },
    {
        id: 10,
        name: "Hendra Gunawan, S.T., M.T.",
        identifier: "19800108 200501 1 002",
        email: "hendra.gunawan@institusi.ac.id",
        role: "Kepala Lab",
        unitLab: "Divisi Kalibrasi & Instrumentasi",
        status: "Aktif",
        twoFactorEnabled: true,
        passkeyEnabled: true,
        lastLogin: "Hari ini, 07:50",
        registeredAt: "2024-01-12",
        avatarInitials: "HG",
        permissions: ["SOP Approval", "Asset Maintenance", "Calibration Management"],
    },
    {
        id: 11,
        name: "dr. Tri Hartati, Sp.PK",
        identifier: "19870815 201210 2 001",
        email: "tri.hartati@institusi.ac.id",
        role: "Dosen",
        unitLab: "Lab Patologi Klinis",
        status: "Nonaktif",
        twoFactorEnabled: true,
        passkeyEnabled: false,
        lastLogin: "15 Agu 2026",
        registeredAt: "2024-02-20",
        avatarInitials: "TH",
        permissions: ["Submit Form", "View SOP"],
    },
];

// Helper warna Role
export const getRoleBadge = (role: UserItem["role"]) => {
    switch (role) {
        case "Superadmin":
            return {
                label: "Superadmin",
                badgeClass: "bg-red-50 text-red-700 border-red-200 font-semibold",
                avatarBg: "bg-red-600 text-white",
            };
        case "Kepala Lab":
            return {
                label: "Kepala Lab",
                badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold",
                avatarBg: "bg-indigo-600 text-white",
            };
        case "Laboran":
            return {
                label: "Laboran / Pranata",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200 font-medium",
                avatarBg: "bg-emerald-600 text-white",
            };
        case "Dosen":
            return {
                label: "Dosen Peneliti",
                badgeClass: "bg-blue-50 text-blue-700 border-blue-200 font-medium",
                avatarBg: "bg-blue-600 text-white",
            };
        case "Mahasiswa":
            return {
                label: "Mahasiswa",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200 font-medium",
                avatarBg: "bg-amber-600 text-white",
            };
        default:
            return {
                label: role,
                badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
                avatarBg: "bg-slate-600 text-white",
            };
    }
};

// Helper warna Status
export const getStatusBadge = (status: UserItem["status"]) => {
    switch (status) {
        case "Aktif":
            return {
                label: "Aktif",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                dotColor: "bg-emerald-500",
            };
        case "Nonaktif":
            return {
                label: "Nonaktif",
                badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
                dotColor: "bg-rose-500",
            };
        case "Pending":
            return {
                label: "Menunggu Verifikasi",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                dotColor: "bg-amber-500",
            };
        default:
            return {
                label: status,
                badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
                dotColor: "bg-slate-400",
            };
    }
};

interface UserColumnsProps {
    handleView: (row: UserItem) => void;
    handleEdit: (row: UserItem) => void;
    handleDelete: (row: UserItem) => void;
    handleToggleStatus: (row: UserItem) => void;
}

export const getUserColumns = ({
    handleView,
    handleEdit,
    handleDelete,
    handleToggleStatus,
}: UserColumnsProps): Column[] => [
    {
        header: "Pengguna & Identitas",
        accessor: "name",
        render: (row: UserItem) => {
            const roleStyle = getRoleBadge(row.role);
            return (
                <div className="flex items-center gap-3 max-w-xs">
                    <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${roleStyle.avatarBg}`}
                    >
                        {row.avatarInitials}
                    </div>
                    <div className="flex flex-col min-w-0">
                        <button
                            type="button"
                            onClick={() => handleView(row)}
                            className="font-semibold text-sm text-slate-900 hover:text-blue-600 text-left transition-colors truncate block"
                            title={row.name}
                        >
                            {row.name}
                        </button>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="font-mono text-[11px] text-slate-400">
                                {row.identifier}
                            </span>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        header: "Email & Kontak",
        accessor: "email",
        render: (row: UserItem) => (
            <div className="flex flex-col text-xs">
                <span className="text-slate-800 font-medium truncate max-w-[180px]">
                    {row.email}
                </span>
                <span className="text-[11px] text-slate-400">
                    Login: {row.lastLogin}
                </span>
            </div>
        ),
    },
    {
        header: "Role / Hak Akses",
        accessor: "role",
        render: (row: UserItem) => {
            const roleStyle = getRoleBadge(row.role);
            return (
                <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs border shadow-2xs ${roleStyle.badgeClass}`}
                >
                    {roleStyle.label}
                </span>
            );
        },
    },
    {
        header: "Unit / Laboratorium",
        accessor: "unitLab",
        render: (row: UserItem) => (
            <div className="flex items-center gap-1.5 text-xs text-slate-700 max-w-[180px]">
                <IconBuildingHospital size={14} className="text-slate-400 shrink-0" />
                <span className="truncate" title={row.unitLab}>
                    {row.unitLab}
                </span>
            </div>
        ),
    },
    {
        header: "Keamanan Akun",
        accessor: "twoFactorEnabled",
        render: (row: UserItem) => (
            <div className="flex items-center gap-1.5 text-xs">
                {row.twoFactorEnabled ? (
                    <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium"
                        title="Two-Factor Authentication (2FA) Aktif"
                    >
                        <IconShieldCheck size={13} />
                        2FA
                    </span>
                ) : (
                    <span
                        className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[11px]"
                        title="2FA Belum Diaktifkan"
                    >
                        No 2FA
                    </span>
                )}

                {row.passkeyEnabled && (
                    <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-medium"
                        title="Biometrik Passkey (WebAuthn) Aktif"
                    >
                        <IconKey size={13} />
                        Passkey
                    </span>
                )}
            </div>
        ),
    },
    {
        header: "Status",
        accessor: "status",
        render: (row: UserItem) => {
            const statusStyle = getStatusBadge(row.status);
            return (
                <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyle.badgeClass}`}
                >
                    <span
                        className={`w-1.5 h-1.5 rounded-full ${statusStyle.dotColor}`}
                    />
                    {statusStyle.label}
                </span>
            );
        },
    },
    {
        header: "Aksi",
        accessor: "actions",
        render: (row: UserItem) => {
            if (!row.id) return null;
            return (
                <div className="action-buttons flex items-center justify-end gap-1.5 text-slate-600">
                    <button
                        type="button"
                        className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={() => handleView(row)}
                        title="Lihat Detail Profil"
                    >
                        <IconEye size={17} />
                    </button>
                    <button
                        type="button"
                        className="p-1.5 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                        onClick={() => handleEdit(row)}
                        title="Edit Data Pengguna"
                    >
                        <IconEdit size={17} />
                    </button>
                    <button
                        type="button"
                        className={`p-1.5 rounded-md transition-colors ${
                            row.status === "Aktif"
                                ? "hover:text-rose-600 hover:bg-rose-50"
                                : "hover:text-emerald-600 hover:bg-emerald-50"
                        }`}
                        onClick={() => handleToggleStatus(row)}
                        title={
                            row.status === "Aktif"
                                ? "Nonaktifkan Akun"
                                : "Aktifkan Akun"
                        }
                    >
                        {row.status === "Aktif" ? (
                            <IconUserX size={17} />
                        ) : (
                            <IconUserCheck size={17} />
                        )}
                    </button>
                    <button
                        type="button"
                        className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        onClick={() => handleDelete(row)}
                        title="Hapus Pengguna"
                    >
                        <IconTrash size={17} />
                    </button>
                </div>
            );
        },
    },
];
