import { Avatar, Badge, Button, Tooltip } from "@idds/react";
import { router, usePage } from "@inertiajs/react";
import {
    IconArticle,
    IconBell,
    IconForms,
    IconLayoutDashboard,
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarLeftExpand,
    IconLogout,
    IconMenu2,
    IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
    const { url } = usePage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: IconLayoutDashboard,
            route: "/dashboard",
        },
        {
            id: "articles",
            label: "Artikel & Berita",
            icon: IconArticle,
            route: "/articles",
        },
        {
            id: "form",
            label: "Form Pengajuan",
            icon: IconForms,
            route: "/form",
        },
    ];

    const sidebarWidth = isCollapsed ? "lg:w-[72px] w-[280px]" : "w-[280px]";

    return (
        <div className="min-h-screen bg-gray-50 flex">
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
                                IDDS Starter
                            </span>
                        )}
                    </div>
                    <button
                        type="button"
                        className="hidden lg:flex ml-1 rounded-md hover:bg-gray-100 text-text-secondary transition-colors"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? (
                            <IconLayoutSidebarLeftExpand size={20} />
                        ) : (
                            <IconLayoutSidebarLeftCollapse size={20} />
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
                            Menu Utama
                        </div>
                    )}
                    {menuItems.map((item) => {
                        const isActive = url.startsWith(item.route);

                        const ButtonContent = (
                            <button
                                type="button"
                                onClick={() => {
                                    router.visit(item.route);
                                    setIsSidebarOpen(false);
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
                                        className={`flex flex-1 items-center gap-2 min-w-0 ${
                                            isCollapsed ? "lg:hidden" : ""
                                        }`}
                                    >
                                        <span className="truncate">
                                            {item.label}
                                        </span>
                                        {item.id === "form" && (
                                            <Badge
                                                variant="error"
                                                size="sm"
                                                className="ml-auto"
                                            >
                                                New
                                            </Badge>
                                        )}
                                    </div>
                                )}
                            </button>
                        );

                        if (isCollapsed) {
                            return (
                                <div key={item.id} className="w-full">
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
                            );
                        }

                        return <div key={item.id}>{ButtonContent}</div>;
                    })}
                </nav>

                {/* Footer User Profile */}
                <div className="p-4 border-t border-gray-200 flex flex-col gap-2">
                    <div
                        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer ${
                            isCollapsed ? "lg:justify-center" : ""
                        }`}
                    >
                        <Avatar
                            size={"sm" as any}
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

            {/* Main Area & Content Render */}
            <div className="flex-1 flex flex-col min-w-0 transition-[margin] duration-300">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <button
                        type="button"
                        className="lg:hidden p-2 text-text-secondary hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <IconMenu2 size={24} />
                    </button>
                    <div className="flex items-center gap-4 ml-auto">
                        <button
                            type="button"
                            className="relative p-2 text-text-secondary hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <IconBell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-error-500 rounded-full border border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
                        <Button
                            size="sm"
                            hierarchy="secondary"
                            className="hidden sm:flex"
                        >
                            Bantuan
                        </Button>
                    </div>
                </header>

                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
}
