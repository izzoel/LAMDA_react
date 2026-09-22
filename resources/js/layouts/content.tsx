import { Button } from "@idds/react";
import { IconBell, IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
    onOpenSidebar: () => void;
}

export default function LayoutContent({
    children,
    onOpenSidebar,
}: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex-1 flex flex-col min-w-0 transition-[margin] duration-300">
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                <button
                    type="button"
                    className="lg:hidden p-2 text-text-secondary hover:bg-gray-100 rounded-lg"
                    onClick={onOpenSidebar}
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
    );
}
