import { createInertiaApp } from "@inertiajs/react";
import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import {
    setBrandTheme,
    ConfirmationProvider,
    ToastProvider,
} from "@idds/react";
import "@idds/react/index.css";
import AppLayout from "@/layouts/app-layout"; // 1. Import AppLayout utama kamu

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

setBrandTheme("panrb");

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        // 2. Resolve komponen halaman seperti biasa
        const page: any = await resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob<ComponentType>("./pages/**/*.tsx"),
        );

        // 3. Pasang AppLayout secara otomatis jika halaman belum menentukan layout
        page.default.layout =
            page.default.layout ||
            ((pageContent: React.ReactNode) => (
                <AppLayout>{pageContent}</AppLayout>
            ));

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StrictMode>
                <ConfirmationProvider>
                    <ToastProvider>
                        <App {...props} />
                    </ToastProvider>
                </ConfirmationProvider>
            </StrictMode>,
        );
    },
});
