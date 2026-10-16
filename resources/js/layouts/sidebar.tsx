import { Avatar, Badge, Tooltip } from "@idds/react";
import { router, usePage } from "@inertiajs/react";
import {
    IconArticle,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconFolder,
    IconForms,
    IconLayoutDashboard,
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarLeftExpand,
    IconLogout,
    IconMenu2,
    IconSitemap,
    IconUser,
    IconX,
} from "@tabler/icons-react";
import { useState } from "react";

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

interface MenuItem {
    id: string;
    label: string;
    route?: string;
    icon: any;
    children?: SubMenuItem[];
}

interface SubMenuItem {
    id: string;
    label: string;
    route: string;
}

export default function LayoutSidebar({
    isSidebarOpen,
    setIsSidebarOpen,
}: SidebarProps) {
    const { url } = usePage();
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    // State untuk menyimpan ID menu utama mana saja yang sedang terbuka
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    
    const mainMenuItems: MenuItem[] = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: IconLayoutDashboard,
            route: "/dashboard",
        },
        {
            id: "laboratorium",
            label: "Laboratorium",
            icon: IconArticle,
            children: [
                {
                    id: "profil",
                    label: "Profil",
                    route: "/laboratorium/profil",
                },
                {
                    id: "aset",
                    label: "Aset",
                    route: "/laboratorium/aset",
                },
                { id: "sop", label: "SOP", route: "/laboratorium/sop" },
            ],
        },
    ];
    
    const adminMenuItems: MenuItem[] = [
        {
            id: "struktur",
            label: "Struktur Organisasi",
            icon: IconSitemap,
            route: "/administrasi/struktur",
        },
        {
            id: "user",
            label: "User",
            icon: IconUser,
            route: "/administrasi/user",
        }
    ];
    
    // Toggle accordion submenu
    const toggleSubmenu = (menuId: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };
    
    const sidebarWidth = isCollapsed ? "lg:w-[72px] w-[280px]" : "w-[280px]";
    
    const renderMenuItem = (item: MenuItem) => {
        const hasChildren = Boolean(
            item.children && item.children.length > 0,
        );
        
        // Cek apakah menu aktif (berdasarkan route item atau salah satu anak submenu-nya)
        const isChildActive =
        hasChildren &&
        item.children?.some((child) =>
            url.startsWith(child.route),
    );
    const isMainActive = item.route
    ? url.startsWith(item.route)
    : false;
    const isActive = isMainActive || isChildActive;
    
    // Buka otomatis jika salah satu submenu-nya sedang aktif
    const isExpanded = openMenus[item.id] ?? isChildActive;
    
    const ButtonContent = (
        <button
        type="button"
        onClick={() => {
            if (hasChildren) {
                toggleSubmenu(item.id);
            } else if (item.route) {
                router.visit(item.route);
                setIsSidebarOpen(false);
            }
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            isActive
            ? "bg-primary-50 text-primary-700"
            : "text-text-secondary hover:bg-gray-100 hover:text-text-primary"
        } ${isCollapsed ? "lg:justify-center" : ""}`}
        >
        <item.icon
        size={20}
        className={`min-w-5 ${
            isActive
            ? "text-primary-600"
            : "text-text-tertiary"
        }`}
        />
        {(!isCollapsed || isSidebarOpen) && (
            <div
            className={`flex flex-1 items-center justify-between min-w-0 ${
                isCollapsed ? "lg:hidden" : ""
            }`}
            >
            <span className="truncate">
            {item.label}
            </span>
            {hasChildren ? (
                isExpanded ? (
                    <IconChevronDown
                    size={16}
                    className="text-text-tertiary min-w-4 ml-1"
                    />
                ) : (
                    <IconChevronRight
                    size={16}
                    className="text-text-tertiary min-w-4 ml-1"
                    />
                )
            ) : null}
            </div>
        )}
        </button>
    );
    
    return (
        <div key={item.id} className="w-full space-y-1">
        {isCollapsed ? (
            <div className="w-full">
            <div className="hidden lg:block w-full">
            <Tooltip
            variant="basic"
            placement="right"
            title={item.label}
            showArrow
            >
            {ButtonContent}
            </Tooltip>
            </div>
            <div className="lg:hidden w-full">
            {ButtonContent}
            </div>
            </div>
        ) : (
            ButtonContent
        )}
        
        {/* Render Submenu Children */}
        {hasChildren &&
            isExpanded &&
            (!isCollapsed || isSidebarOpen) && (
                <div
                className={`pl-9 space-y-1 ${isCollapsed ? "lg:hidden" : ""}`}
                >
                {item.children?.map((child) => {
                    const isSubActive =
                    url.startsWith(child.route);
                    return (
                        <button
                        key={child.id}
                        type="button"
                        onClick={() => {
                            router.visit(
                                child.route,
                            );
                            setIsSidebarOpen(
                                false,
                            );
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            isSubActive
                            ? "text-primary-600 font-semibold bg-primary-50/50"
                            : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                        }`}
                        >
                        {child.label}
                        </button>
                    );
                })}
                </div>
            )}
            </div>
        );
    };
    
    return (
        <>
        {/* Overlay Mobile */}
        {isSidebarOpen && (
            <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            />
        )}
        
        {/* Sidebar */}
        <aside
        className={`fixed lg:sticky top-0 left-0 h-screen ${sidebarWidth} bg-white border-r border-gray-200 z-50 transform transition-[width,transform] duration-300 lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
        >
        {/* Header Sidebar */}
        <div
        className={`h-16 flex items-center border-b border-gray-200 ${
            isCollapsed
            ? "lg:justify-center px-6 lg:px-2"
            : "justify-between px-6"
        }`}
        >
        <div className="flex items-center gap-2 overflow-hidden">
        <div className="w-8 h-8 min-w-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
        ID
        </div>
        {(!isCollapsed || isSidebarOpen) && (
            <span
            className={`font-bold text-lg text-text-primary whitespace-nowrap ${
                isCollapsed ? "lg:hidden" : ""
            }`}
            >
            {/* IDDS Starter */}
            LAMDA
            </span>
        )}
        </div>
        <button
        type="button"
        className="hidden lg:flex rounded-md hover:bg-gray-100 text-text-secondary transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
        >
        {isCollapsed ? (
            <IconChevronRight size={20} />
        ) : (
            <IconChevronLeft size={20} />
        )}
        </button>
        <button
        type="button"
        className="lg:hidden text-text-secondary hover:text-text-primary"
        onClick={() => setIsSidebarOpen(false)}
        >
        <IconX size={20} />
        </button>
        </div>
        
        {/* Navigation */}
        <nav
        className={`flex-1 p-4 space-y-1 ${
            isCollapsed
            ? "lg:overflow-visible overflow-y-auto overflow-x-hidden"
            : "overflow-y-auto overflow-x-hidden"
        }`}
        >
        {(!isCollapsed || isSidebarOpen) && (
            <div
            className={`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2 px-2 whitespace-nowrap ${
                isCollapsed ? "lg:hidden" : ""
            }`}
            >
            Navigasi
            </div>
        )}
        
        {mainMenuItems.map((item) => renderMenuItem(item))}
        
        {(!isCollapsed || isSidebarOpen) && (
            <div
            className={`text-xs font-semibold text-text-tertiary uppercase tracking-wider mt-6 mb-2 px-2 whitespace-nowrap ${
                isCollapsed ? "lg:hidden" : ""
            }`}
            >
            Administrasi
            </div>
        )}
        
        {adminMenuItems.map((item) => renderMenuItem(item))}
        </nav>
        
        {/* Footer User Profile */}
        <div className="p-4 border-t border-gray-200 flex flex-col gap-2">
        <div
        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer ${
            isCollapsed ? "lg:justify-center" : ""
        }`}
        >
        <Avatar
        size={32}
        alt="User Profile"
        initials="AD"
        className="bg-primary-100 text-primary-700 min-w-8"
        />
        {(!isCollapsed || isSidebarOpen) && (
            <div
            className={`flex-1 min-w-0 flex items-center justify-between ${
                isCollapsed ? "lg:hidden" : ""
            }`}
            >
            <div className="flex-1 min-w-0 mr-2">
            <p className="text-sm font-medium text-text-primary truncate">
            Admin User
            </p>
            <p className="text-xs text-text-tertiary truncate">
            admin@inadigital.co.id
            </p>
            </div>
            <IconLogout
            size={18}
            className="text-text-tertiary hover:text-error-600 min-w-4.5"
            />
            </div>
        )}
        </div>
        </div>
        </aside>
        </>
    );
}
