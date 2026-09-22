
import { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import {
    IconLayoutDashboard,
    IconArticle,
    IconForms,
    IconMenu2,
    IconX,
    IconBell,
    IconLogout,
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';
import { Button, Avatar, Badge, Tooltip } from '@idds/react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function SidebarExamples() {
    const { url } = usePage(); // Mengambil URL aktif saat ini dari Inertia
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: IconLayoutDashboard, route: '/dashboard' },
        { id: 'articles', label: 'Artikel & Berita', icon: IconArticle, route: '/articles' },
        { id: 'form', label: 'Form Pengajuan', icon: IconForms, route: '/form' },
    ];

    const sidebarWidth = isCollapsed ? 'lg:w-[72px] w-[280px]' : 'w-[280px]';
    return (
        <aside
            className={`fixed lg:sticky top-0 left-0 h-screen ${sidebarWidth} bg-white border-r border-gray-200 z-50 transform transition-[width,transform] duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } flex flex-col`
            }
        >
            {/* Header Sidebar */}
            < div
                className={`h-16 flex items-center border-b border-gray-200 ${isCollapsed ? 'lg:justify-center px-6 lg:px-2' : 'justify-between px-6'
                    }`}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 min-w-[32px] bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                        ID
                    </div>
                    {(!isCollapsed || isSidebarOpen) && (
                        <span
                            className={`font-bold text-lg text-text-primary whitespace-nowrap ${isCollapsed ? 'lg:hidden' : ''
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
            </div >

            {/* Navigation */}
            < nav className="flex-1 p-4 space-y-1 overflow-y-auto" >
                {
                    menuItems.map((item) => {
                        const isActive = url.startsWith(item.route);

                        const ButtonContent = (
                            <button
                                onClick={() => {
                                    router.visit(item.route);
                                    setIsSidebarOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                                    } ${isCollapsed ? 'lg:justify-center' : ''}`}
                            >
                                <item.icon
                                    size={20}
                                    className={`min-w-[20px] ${isActive ? 'text-primary-600' : 'text-text-tertiary'
                                        }`}
                                />
                                {(!isCollapsed || isSidebarOpen) && (
                                    <span className="truncate flex-1 text-left">{item.label}</span>
                                )}
                            </button>
                        );

                        if (isCollapsed) {
                            return (
                                <Tooltip key={item.id} placement="right" title={item.label} showArrow>
                                    {ButtonContent}
                                </Tooltip>
                            );
                        }

                        return <div key={item.id}>{ButtonContent}</div>;
                    })
                }
            </nav>
        </aside>
    );
}
