import { type Column, Table } from "@idds/react";

interface TableComponentProps {
    data: any[];
    searchTerm: string;
    columns: Column[];
}

export default function TableComponent({
    data,
    searchTerm,
    columns,
}: TableComponentProps) {
    // --- FETCH DATA DENGAN SORTING & FILTERING ---
    const fetchData = async (params: any) => {
        const page = params?.page || 1;
        const pageSize = params?.pageSize || 5;
        const sortField = params?.sortField || params?.sortBy;
        const sortOrder = params?.sortOrder || params?.sortDirection;

        let resultData = [...data];

        // 1. Pencarian (Filtering)
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            resultData = resultData.filter((item) =>
                Object.values(item).some(
                    (val) =>
                        val && String(val).toLowerCase().includes(searchLower),
                ),
            );
        }

        // 2. Pengurutan (Sorting)
        if (sortField && sortOrder) {
            resultData.sort((a, b) => {
                const aVal = a[sortField];
                const bVal = b[sortField];

                if (aVal === null || aVal === undefined) return 1;
                if (bVal === null || bVal === undefined) return -1;

                let comparison = 0;
                if (typeof aVal === "string" && typeof bVal === "string") {
                    comparison = aVal.localeCompare(bVal);
                } else if (aVal > bVal) {
                    comparison = 1;
                } else if (aVal < bVal) {
                    comparison = -1;
                }

                return sortOrder === "desc" || sortOrder === "DESC"
                    ? -comparison
                    : comparison;
            });
        }

        // 3. Pemotongan Halaman (Pagination)
        const totalFiltered = resultData.length;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = resultData.slice(startIndex, endIndex);

        return {
            data: paginatedData,
            total: totalFiltered,
        };
    };

    return (
        <div className="custom-table-wrapper border border-slate-200 rounded-xl p-4 bg-white shadow-sm overflow-hidden w-full">
            <Table
                key={searchTerm} // Reset halaman ke-1 otomatis saat kata kunci berubah
                rowClickable={false}
                columns={columns}
                fetchData={fetchData}
                initialSortField="kode"
                initialSortOrder="asc"
                rowKey="id"
                showPagination={true}
                initialPage={1}
                initialPageSize={5}
                pageSizeOptions={[5, 10, 20]}
            />
        </div>
    );
}
