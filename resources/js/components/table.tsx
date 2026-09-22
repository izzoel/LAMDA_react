import { useState } from "react";
import {
    IconTrash,
    IconEdit,
    IconSearch,
    IconBan,
    IconClockCheck,
} from "@tabler/icons-react";
import { Button, type Column, Table, TextField } from "@idds/react";

// Helper masking nama
const maskName = (name: string | null) => {
    if (!name) return "-";
    const firstName = name.split(" ")[0];
    return `${firstName} •••••••••`;
};

// Helper masking email
const maskEmail = (email: string | null) => {
    if (!email) return "-";
    const [local, domain] = email.split("@");
    const count = Math.min(Math.max(local.length, 5), 8);
    return `${"•".repeat(count)}@${domain}`;
};

const columns: Column[] = [
    {
        header: "Nama",
        accessor: "name",
        render: (row: any) => maskName(row.name),
    },
    {
        header: "Email",
        accessor: "email",
        render: (row: any) => maskEmail(row.email),
    },
    {
        header: "PERURI ID",
        accessor: "peruri_id",
        render: (row: any) => row.peruri_id ?? "-",
    },
    {
        header: "Status Akun",
        accessor: "status",
        render: (row: any) => {
            if (row.status === true) {
                return (
                    <span className="inline-flex items-center gap-2 text-emerald-500 font-medium">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                        Aktif
                    </span>
                );
            } else if (row.status === false) {
                return (
                    <span className="inline-flex items-center gap-2 text-slate-500 font-medium">
                        <IconBan
                            size={18}
                            className="text-slate-500 shrink-0"
                        />
                        Tidak Aktif
                    </span>
                );
            }
            return <span>-</span>;
        },
    },
    {
        header: "",
        accessor: "actions",
        render: (row: any) => {
            if (!row.id) return null;
            return (
                <div className="flex items-center justify-end gap-3 text-slate-700">
                    <button
                        type="button"
                        className="hover:text-slate-900 transition-colors"
                        onClick={() => handleToggleStatus(row)}
                        title={row.status ? "Nonaktifkan" : "Aktifkan"}
                    >
                        {row.status ? (
                            <IconBan size={18} />
                        ) : (
                            <IconClockCheck size={18} />
                        )}
                    </button>

                    <button
                        type="button"
                        className="hover:text-slate-900 transition-colors"
                        onClick={() => handleEdit(row)}
                        title="Edit"
                    >
                        <IconEdit size={18} />
                    </button>

                    <button
                        type="button"
                        className="hover:text-slate-900 transition-colors"
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

const handleToggleStatus = (row: any) => {
    console.log("Toggle Status:", row);
};

const handleEdit = (row: any) => {
    console.log("Edit:", row);
};

const handleDelete = (row: any) => {
    console.log("Delete:", row);
};

const data = [
    {
        id: 1,
        name: "Alfonso",
        email: "alfonso@hotmail.com",
        peruri_id: "D2019290YU",
        status: true,
    },
    {
        id: 2,
        name: "Lydia",
        email: "lydia@hotmail.com",
        peruri_id: "D2019290YU",
        status: true,
    },
    {
        id: 3,
        name: "Marcus",
        email: "marcus@yahoo.com",
        peruri_id: "D2019290YU",
        status: true,
    },
    {
        id: 4,
        name: "Roger",
        email: "roger@yahoo.com",
        peruri_id: "D2019290YU",
        status: true,
    },
    {
        id: 5,
        name: "Marcus",
        email: "marcus@aol.com",
        peruri_id: "D2019290YU",
        status: false,
    },
];

export default function TableExamples() {
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async (params: any) => {
        let resultData = data;

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            resultData = resultData.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchLower) ||
                    item.email?.toLowerCase().includes(searchLower) ||
                    item.peruri_id?.toLowerCase().includes(searchLower),
            );
        }

        return {
            data: resultData,
            total: resultData.length,
        };
    };

    return (
        <div className="flex flex-col h-full w-full gap-4">
            <div>
                <TextField
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search..."
                    prefixIcon={<IconSearch size={16} />}
                />
            </div>

            {/* Container luar dengan tambahan class "custom-table-wrapper" */}
            <div className="custom-table-wrapper border border-slate-200 rounded-xl p-4 bg-white shadow-sm overflow-hidden">
                {/* CSS standar React untuk override border IDDS secara spesifik */}
                <style>{`
                    .custom-table-wrapper table thead,
                    .custom-table-wrapper table thead tr,
                    .custom-table-wrapper table th {
                        border-top: none !important;
                        border-top-width: 0px !important;
                    }
                    .custom-table-wrapper > div {
                        border-top: none !important;
                    }
                `}</style>

                <Table
                    rowClickable={false}
                    columns={columns}
                    fetchData={fetchData}
                    initialSortField={null}
                    initialSortOrder={null}
                    rowKey="id"
                    showPagination={false}
                />
            </div>
        </div>
    );
}
