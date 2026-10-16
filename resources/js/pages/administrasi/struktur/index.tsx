import { useState, useMemo, useRef } from "react";
import {
    TextField,
    CardPlain,
    Button,
    SelectDropdown,
    TextArea,
    type SelectOption,
} from "@idds/react";
import {
    IconSearch,
    IconPlus,
    IconSitemap,
    IconUsers,
    IconUserCheck,
    IconZoomIn,
    IconZoomOut,
    IconRefresh,
    IconChevronDown,
    IconChevronUp,
    IconEye,
    IconEdit,
    IconMail,
    IconPhone,
    IconBuildingHospital,
    IconCertificate,
    IconX,
    IconCheck,
    IconLayoutGrid,
    IconFileText,
    IconBuilding,
    IconId,
} from "@tabler/icons-react";
import {
    INITIAL_ORGANISASI_TREE,
    countTotalMembers,
    getLevelBadge,
    flattenTree,
    type OrganisasiNode,
} from "./data";

export default function StrukturOrganisasiPage() {
    const [treeData, setTreeData] = useState<OrganisasiNode>(
        INITIAL_ORGANISASI_TREE,
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [zoomLevel, setZoomLevel] = useState<number>(100);
    const [viewMode, setViewMode] = useState<"tree" | "grid">("tree");
    const [collapsedNodes, setCollapsedNodes] = useState<
        Record<string, boolean>
    >({});

    // Modals
    const [selectedNode, setSelectedNode] = useState<OrganisasiNode | null>(
        null,
    );
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [targetParentNode, setTargetParentNode] =
        useState<OrganisasiNode | null>(null);

    // Form State untuk Tambah Personel
    const [formNama, setFormNama] = useState("");
    const [formNip, setFormNip] = useState("");
    const [formJabatan, setFormJabatan] = useState("");
    const [formLevel, setFormLevel] = useState<any[]>([
        { label: "Laboran / Pranata Lab", value: "laboran" },
    ]);
    const [formDivisi, setFormDivisi] = useState("");
    const [formLab, setFormLab] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formTelepon, setFormTelepon] = useState("");
    const [formTupoksi, setFormTupoksi] = useState("");

    // Flat list untuk grid view & statistik
    const allMembers = useMemo(() => flattenTree(treeData), [treeData]);

    const stats = useMemo(() => {
        const total = allMembers.length;
        const pimpinanDanKoord = allMembers.filter(
            (m) => m.level === "pimpinan" || m.level === "koordinator",
        ).length;
        const laboran = allMembers.filter((m) => m.level === "laboran").length;
        const staf = allMembers.filter(
            (m) => m.level === "staf" || m.level === "sub_koordinator",
        ).length;
        return { total, pimpinanDanKoord, laboran, staf };
    }, [allMembers]);

    // Toggle collapse node pohon
    const toggleNodeCollapse = (id: string, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCollapsedNodes((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const expandAll = () => setCollapsedNodes({});
    const collapseAll = () => {
        const collapsed: Record<string, boolean> = {};
        allMembers.forEach((m) => {
            if (m.children && m.children.length > 0) {
                collapsed[m.id] = true;
            }
        });
        setCollapsedNodes(collapsed);
    };

    // Zoom Controls
    const handleZoomIn = () =>
        setZoomLevel((prev) => Math.min(prev + 15, 150));
    const handleZoomOut = () =>
        setZoomLevel((prev) => Math.max(prev - 15, 60));
    const handleResetZoom = () => setZoomLevel(100);

    // Buka modal detail
    const handleViewDetail = (node: OrganisasiNode) => {
        setSelectedNode(node);
        setIsDetailModalOpen(true);
    };

    // Buka modal tambah bawahan
    const handleOpenAddModal = (
        parentNode: OrganisasiNode,
        e?: React.MouseEvent,
    ) => {
        if (e) e.stopPropagation();
        setTargetParentNode(parentNode);
        setFormDivisi(parentNode.divisi);
        setIsAddModalOpen(true);
    };

    // Simpan Personel Baru ke Tree
    const handleSaveNewMember = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formNama || !formJabatan) {
            alert("Nama dan Jabatan wajib diisi!");
            return;
        }

        const initials = formNama
            .split(" ")
            .filter(Boolean)
            .map((w) => w[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

        const newNode: OrganisasiNode = {
            id: `org-${Date.now()}`,
            nama: formNama,
            nip: formNip || "-",
            jabatan: formJabatan,
            level: (formLevel[0]?.value ||
                "laboran") as OrganisasiNode["level"],
            divisi: formDivisi || "Operasional Lab",
            laboratorium: formLab || undefined,
            email: formEmail || "personel@institusi.ac.id",
            telepon: formTelepon || "-",
            avatarInitials: initials || "ST",
            status: "Aktif",
            tupoksi: formTupoksi
                ? formTupoksi.split("\n").filter(Boolean)
                : ["Melaksanakan operasional dan layanan laboratorium."],
        };

        // Rekursif tambahkan ke node target
        const addRecursive = (node: OrganisasiNode): OrganisasiNode => {
            if (node.id === targetParentNode?.id) {
                return {
                    ...node,
                    children: [...(node.children || []), newNode],
                };
            }
            if (node.children) {
                return {
                    ...node,
                    children: node.children.map(addRecursive),
                };
            }
            return node;
        };

        if (targetParentNode) {
            setTreeData(addRecursive(treeData));
        }

        setIsAddModalOpen(false);
        // Reset form
        setFormNama("");
        setFormNip("");
        setFormJabatan("");
        setFormLab("");
        setFormEmail("");
        setFormTelepon("");
        setFormTupoksi("");
    };

    // Filter data untuk Grid view & search
    const filteredMembers = useMemo(() => {
        if (!searchTerm) return allMembers;
        const q = searchTerm.toLowerCase();
        return allMembers.filter(
            (m) =>
                m.nama.toLowerCase().includes(q) ||
                m.jabatan.toLowerCase().includes(q) ||
                m.divisi.toLowerCase().includes(q) ||
                (m.laboratorium && m.laboratorium.toLowerCase().includes(q)),
        );
    }, [allMembers, searchTerm]);

    return (
        <div className="space-y-6 pb-16">
            {/* Header Title Section */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary flex items-center gap-2.5">
                        <IconSitemap className="text-blue-600" size={28} />
                        Struktur Organisasi Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Bagan hierarki silsilah kepengurusan, divisi, penanggung
                        jawab, dan pranata laboratorium terpadu
                    </p>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs self-start">
                    <button
                        type="button"
                        onClick={() => setViewMode("tree")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            viewMode === "tree"
                                ? "bg-blue-600 text-white shadow-xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                        <IconSitemap size={16} />
                        Bagan Pohon (Org Tree)
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode("grid")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            viewMode === "grid"
                                ? "bg-blue-600 text-white shadow-xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                        <IconLayoutGrid size={16} />
                        Katalog Personel
                    </button>
                </div>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Total Personel
                        </p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">
                            {stats.total}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Struktur Terdaftar
                        </span>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <IconUsers size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Pimpinan & Koordinator
                        </p>
                        <p className="text-2xl font-bold text-indigo-600 mt-1">
                            {stats.pimpinanDanKoord}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Kepala UPT & Divisi
                        </span>
                    </div>
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <IconBuilding size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Laboran / Pranata Lab
                        </p>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">
                            {stats.laboran}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Penanggung jawab teknis lab
                        </span>
                    </div>
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                        <IconUserCheck size={24} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Sub-Koordinator & Staf
                        </p>
                        <p className="text-2xl font-bold text-amber-600 mt-1">
                            {stats.staf}
                        </p>
                        <span className="text-[11px] text-slate-400">
                            Administrasi & IT
                        </span>
                    </div>
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                        <IconBuildingHospital size={24} />
                    </div>
                </div>
            </div>

            {/* Control & Toolbar Section */}
            <CardPlain className="flex flex-col space-y-4 md:space-y-6 w-full p-4 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                {/* Action & Filter Bar */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-3">
                    {/* Search Bar */}
                    <div className="flex items-center gap-3 w-full lg:w-96 flex-1">
                        <div className="w-full">
                            <TextField
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Cari nama, NIP, jabatan, atau laboratorium..."
                                prefixIcon={<IconSearch size={16} />}
                            />
                        </div>
                    </div>

                    {/* Toolbar Controls (Tree Actions) */}
                    {viewMode === "tree" && (
                        <div className="flex flex-wrap items-center gap-2">
                            {/* Expand / Collapse Buttons */}
                            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50 text-xs font-medium">
                                <button
                                    type="button"
                                    onClick={expandAll}
                                    className="px-2.5 py-1.5 hover:bg-white text-slate-700 transition-colors border-r border-slate-200 flex items-center gap-1"
                                >
                                    <IconChevronDown size={14} />
                                    Buka Semua
                                </button>
                                <button
                                    type="button"
                                    onClick={collapseAll}
                                    className="px-2.5 py-1.5 hover:bg-white text-slate-700 transition-colors flex items-center gap-1"
                                >
                                    <IconChevronUp size={14} />
                                    Tutup Semua
                                </button>
                            </div>

                            {/* Zoom Controls */}
                            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                                <button
                                    type="button"
                                    onClick={handleZoomOut}
                                    title="Zoom Out"
                                    className="p-1.5 hover:bg-slate-100 text-slate-700 border-r border-slate-200 transition-colors"
                                >
                                    <IconZoomOut size={16} />
                                </button>
                                <span className="px-2 text-xs font-mono font-semibold text-slate-700 min-w-12 text-center">
                                    {zoomLevel}%
                                </span>
                                <button
                                    type="button"
                                    onClick={handleZoomIn}
                                    title="Zoom In"
                                    className="p-1.5 hover:bg-slate-100 text-slate-700 border-l border-slate-200 transition-colors"
                                >
                                    <IconZoomIn size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleResetZoom}
                                    title="Reset Zoom (100%)"
                                    className="p-1.5 hover:bg-slate-100 text-slate-500 border-l border-slate-200 transition-colors"
                                >
                                    <IconRefresh size={15} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* VIEW 1: INTERACTIVE ORG TREE (POHON SILSILAH) */}
                {viewMode === "tree" && (
                    <div className="w-full overflow-x-auto overflow-y-auto min-h-[550px] p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl flex justify-center items-start relative select-none">
                        <div
                            style={{
                                transform: `scale(${zoomLevel / 100})`,
                                transformOrigin: "top center",
                                transition: "transform 0.2s ease-out",
                            }}
                            className="inline-flex justify-center pt-2 pb-12"
                        >
                            <OrgTreeNode
                                node={treeData}
                                isRoot={true}
                                searchTerm={searchTerm}
                                collapsedNodes={collapsedNodes}
                                onToggleCollapse={toggleNodeCollapse}
                                onViewDetail={handleViewDetail}
                                onAddChild={handleOpenAddModal}
                            />
                        </div>
                    </div>
                )}

                {/* VIEW 2: GRID CATALOG VIEW */}
                {viewMode === "grid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2">
                        {filteredMembers.map((member) => {
                            const badge = getLevelBadge(member.level);
                            return (
                                <div
                                    key={member.id}
                                    onClick={() => handleViewDetail(member)}
                                    className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-blue-300"
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-xs ${badge.avatarBg}`}
                                            >
                                                {member.avatarInitials}
                                            </div>
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badge.chipColor}`}
                                            >
                                                {badge.label}
                                            </span>
                                        </div>

                                        <div className="mt-3.5">
                                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base">
                                                {member.nama}
                                            </h3>
                                            <p className="text-xs text-slate-500 font-mono mt-0.5">
                                                NIP. {member.nip}
                                            </p>
                                            <p className="text-sm font-semibold text-slate-700 mt-2">
                                                {member.jabatan}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5">
                                                Divisi: {member.divisi}
                                            </p>
                                        </div>

                                        {member.laboratorium && (
                                            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                                                <IconBuildingHospital
                                                    size={15}
                                                    className="shrink-0"
                                                />
                                                <span className="truncate">
                                                    {member.laboratorium}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <span className="truncate max-w-[150px]">
                                                {member.email}
                                            </span>
                                        </div>
                                        <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:underline">
                                            <IconEye size={14} /> Detail
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </CardPlain>

            {/* MODAL 1: DETAIL LENGKAP PROFIL PERSONEL */}
            {isDetailModalOpen && selectedNode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header Modal */}
                        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3.5">
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base shadow-sm ${getLevelBadge(selectedNode.level).avatarBg}`}
                                >
                                    {selectedNode.avatarInitials}
                                </div>
                                <div>
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mb-1 ${getLevelBadge(selectedNode.level).chipColor}`}
                                    >
                                        {
                                            getLevelBadge(selectedNode.level)
                                                .label
                                        }
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {selectedNode.nama}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-mono">
                                        NIP. {selectedNode.nip}
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
                            {/* Informasi Jabatan & Divisi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                                <div>
                                    <span className="text-slate-400 text-xs block mb-0.5">
                                        Jabatan Resmi:
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {selectedNode.jabatan}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-xs block mb-0.5">
                                        Divisi / Bidang:
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {selectedNode.divisi}
                                    </span>
                                </div>
                                {selectedNode.laboratorium && (
                                    <div className="sm:col-span-2">
                                        <span className="text-slate-400 text-xs block mb-0.5">
                                            Laboratorium Terkait:
                                        </span>
                                        <span className="font-semibold text-blue-700">
                                            {selectedNode.laboratorium}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Kontak Personel */}
                            <div>
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Kontak & Komunikasi
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white">
                                        <IconMail
                                            size={16}
                                            className="text-blue-600"
                                        />
                                        <span className="truncate">
                                            {selectedNode.email}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white">
                                        <IconPhone
                                            size={16}
                                            className="text-emerald-600"
                                        />
                                        <span>{selectedNode.telepon}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tugas Pokok & Fungsi (Tupoksi) */}
                            <div>
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Tugas Pokok & Fungsi (Tupoksi)
                                </h4>
                                <ul className="space-y-1.5 bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-700">
                                    {selectedNode.tupoksi.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-blue-600 font-bold mt-0.5">
                                                •
                                            </span>
                                            <span className="leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Sertifikasi / Lisensi Kompetensi */}
                            {selectedNode.sertifikasi &&
                                selectedNode.sertifikasi.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                            Sertifikasi & Lisensi Kompetensi
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedNode.sertifikasi.map(
                                                (cert, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200"
                                                    >
                                                        <IconCertificate
                                                            size={14}
                                                        />
                                                        {cert}
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
                                    handleOpenAddModal(selectedNode);
                                }}
                                className="flex items-center gap-1.5 text-xs"
                            >
                                <IconPlus size={14} />
                                Tambah Bawahan
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

            {/* MODAL 2: TAMBAH PERSONEL / BAWAHAN BARU */}
            {isAddModalOpen && targetParentNode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header Modal */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    Tambah Personel Organisasi
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    Menambahkan bawahan di bawah:{" "}
                                    <span className="font-semibold text-blue-600">
                                        {targetParentNode.nama}
                                    </span>
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
                            onSubmit={handleSaveNewMember}
                            className="py-4 space-y-4 overflow-y-auto flex-1 text-xs"
                        >
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Nama Lengkap & Gelar{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextField
                                    value={formNama}
                                    onChange={setFormNama}
                                    placeholder="Contoh: dr. Ahmad Subagyo, Sp.PK"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        NIP / Nomor Pegawai
                                    </label>
                                    <TextField
                                        value={formNip}
                                        onChange={setFormNip}
                                        placeholder="Contoh: 19890412 201503 1 002"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Tingkat / Level Jabatan
                                    </label>
                                    <SelectDropdown
                                        options={[
                                            {
                                                label: "Koordinator Divisi",
                                                value: "koordinator",
                                            },
                                            {
                                                label: "Sub-Koordinator Lab",
                                                value: "sub_koordinator",
                                            },
                                            {
                                                label: "Laboran / Pranata Lab",
                                                value: "laboran",
                                            },
                                            {
                                                label: "Staf Administrasi & IT",
                                                value: "staf",
                                            },
                                        ]}
                                        selected={formLevel}
                                        onSelect={(val) =>
                                            setFormLevel(val as any[])
                                        }
                                        indicator="check"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Jabatan Resmi{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextField
                                    value={formJabatan}
                                    onChange={setFormJabatan}
                                    placeholder="Contoh: Laboran Kimia Terapan & Spektrofotometri"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Divisi
                                    </label>
                                    <TextField
                                        value={formDivisi}
                                        onChange={setFormDivisi}
                                        placeholder="Contoh: Sains Hayati"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Ruang Laboratorium (Opsional)
                                    </label>
                                    <TextField
                                        value={formLab}
                                        onChange={setFormLab}
                                        placeholder="Contoh: Lab Mikrobiologi"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Email Institusi
                                    </label>
                                    <TextField
                                        value={formEmail}
                                        onChange={setFormEmail}
                                        placeholder="nama@institusi.ac.id"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Nomor Kontak / WhatsApp
                                    </label>
                                    <TextField
                                        value={formTelepon}
                                        onChange={setFormTelepon}
                                        placeholder="0812-xxxx-xxxx"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Tugas Pokok & Fungsi (Tupoksi)
                                </label>
                                <TextArea
                                    value={formTupoksi}
                                    onChange={setFormTupoksi}
                                    placeholder="Tuliskan tugas pokok per baris..."
                                    rows={3}
                                />
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
                                    Simpan Personel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

// =========================================================================
// RECURSIVE TREE NODE COMPONENT (POHON SILSILAH HIERARKI)
// =========================================================================
interface OrgTreeNodeProps {
    node: OrganisasiNode;
    isRoot?: boolean;
    searchTerm: string;
    collapsedNodes: Record<string, boolean>;
    onToggleCollapse: (id: string, e?: React.MouseEvent) => void;
    onViewDetail: (node: OrganisasiNode) => void;
    onAddChild: (node: OrganisasiNode, e?: React.MouseEvent) => void;
}

function OrgTreeNode({
    node,
    isRoot = false,
    searchTerm,
    collapsedNodes,
    onToggleCollapse,
    onViewDetail,
    onAddChild,
}: OrgTreeNodeProps) {
    const hasChildren = Boolean(node.children && node.children.length > 0);
    const isCollapsed = collapsedNodes[node.id];
    const badge = getLevelBadge(node.level);

    // Cek apakah node cocok dengan pencarian
    const isMatch = useMemo(() => {
        if (!searchTerm) return false;
        const q = searchTerm.toLowerCase();
        return (
            node.nama.toLowerCase().includes(q) ||
            node.jabatan.toLowerCase().includes(q) ||
            node.divisi.toLowerCase().includes(q) ||
            (node.laboratorium && node.laboratorium.toLowerCase().includes(q))
        );
    }, [node, searchTerm]);

    const totalSubordinates = useMemo(
        () => (node.children ? countTotalMembers(node) - 1 : 0),
        [node],
    );

    return (
        <div className="flex flex-col items-center">
            {/* KARTU NODE PERSONEL */}
            <div
                onClick={() => onViewDetail(node)}
                className={`w-72 bg-white rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs hover:shadow-lg relative z-10 text-left overflow-hidden group ${
                    isMatch
                        ? "ring-3 ring-blue-500 border-blue-500 shadow-blue-100"
                        : "border-slate-200 hover:border-blue-400"
                }`}
            >
                {/* Header Strip Level */}
                <div
                    className={`h-1.5 w-full ${badge.bgColor.split(" ")[0]}`}
                />

                <div className="p-4">
                    {/* Level Badge & Action Buttons */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badge.chipColor}`}
                        >
                            {badge.label}
                        </span>

                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                type="button"
                                title="Tambah Bawahan"
                                onClick={(e) => onAddChild(node, e)}
                                className="p-1 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded transition-colors"
                            >
                                <IconPlus size={14} />
                            </button>
                            <button
                                type="button"
                                title="Lihat Profil"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onViewDetail(node);
                                }}
                                className="p-1 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded transition-colors"
                            >
                                <IconEye size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Avatar + Nama */}
                    <div className="flex items-start gap-3">
                        <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${badge.avatarBg}`}
                        >
                            {node.avatarInitials}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 text-xs leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                {node.nama}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                                {node.nip !== "-" ? `NIP. ${node.nip}` : "Staf"}
                            </p>
                        </div>
                    </div>

                    {/* Jabatan & Divisi */}
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <p className="text-xs font-semibold text-slate-800 line-clamp-1">
                            {node.jabatan}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                            {node.divisi}
                        </p>
                    </div>

                    {/* Lab Tag (Jika Ada) */}
                    {node.laboratorium && (
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-blue-700 bg-blue-50/70 border border-blue-100 rounded-md px-2 py-1">
                            <IconBuildingHospital size={12} className="shrink-0" />
                            <span className="truncate">
                                {node.laboratorium}
                            </span>
                        </div>
                    )}
                </div>

                {/* Subordinate Counter / Collapse Bar */}
                {hasChildren && (
                    <button
                        type="button"
                        onClick={(e) => onToggleCollapse(node.id, e)}
                        className={`w-full py-1.5 px-3 border-t text-[11px] font-semibold flex items-center justify-between transition-colors ${
                            isCollapsed
                                ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                                : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100"
                        }`}
                    >
                        <span className="flex items-center gap-1">
                            <IconUsers size={12} />
                            {totalSubordinates} Anggota Bawahan
                        </span>
                        {isCollapsed ? (
                            <IconChevronDown size={14} />
                        ) : (
                            <IconChevronUp size={14} />
                        )}
                    </button>
                )}
            </div>

            {/* CABANG BAWAHAN / SILSILAH TREE CONNECTORS */}
            {hasChildren && !isCollapsed && (
                <div className="flex flex-col items-center w-full">
                    {/* Vertical Trunk Drop Line from Parent */}
                    <div className="w-0.5 h-7 bg-slate-300" />

                    {/* Horizontal Branch Bar Across Children */}
                    <div className="relative flex justify-center">
                        <div className="flex items-start gap-8 relative">
                            {node.children!.map((child, index) => {
                                const isFirst = index === 0;
                                const isLast =
                                    index === node.children!.length - 1;
                                const isSingle = node.children!.length === 1;

                                return (
                                    <div
                                        key={child.id}
                                        className="relative flex flex-col items-center"
                                    >
                                        {/* Horizontal Connecting Crossbars */}
                                        {!isSingle && (
                                            <>
                                                {/* Left half bar */}
                                                {!isFirst && (
                                                    <div className="absolute top-0 right-1/2 w-full h-0.5 bg-slate-300 -translate-y-px" />
                                                )}
                                                {/* Right half bar */}
                                                {!isLast && (
                                                    <div className="absolute top-0 left-1/2 w-full h-0.5 bg-slate-300 -translate-y-px" />
                                                )}
                                            </>
                                        )}

                                        {/* Vertical Drop Line into Child Node */}
                                        <div className="w-0.5 h-7 bg-slate-300" />

                                        {/* Recursive Child Node */}
                                        <OrgTreeNode
                                            node={child}
                                            searchTerm={searchTerm}
                                            collapsedNodes={collapsedNodes}
                                            onToggleCollapse={onToggleCollapse}
                                            onViewDetail={onViewDetail}
                                            onAddChild={onAddChild}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
