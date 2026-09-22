import { useState } from "react";
import LayoutSidebar from "@/layouts/sidebar";
import LayoutContent from "./content";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <LayoutSidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Main Body */}
            <LayoutContent onOpenSidebar={() => setIsSidebarOpen(true)}>
                {children}
            </LayoutContent>
        </div>
    );
}
