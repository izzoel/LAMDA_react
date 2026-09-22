export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary">
                        Dashboard
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Selamat datang di aplikasi.
                    </p>
                </div>
            </div>
        </div>
    );
}
