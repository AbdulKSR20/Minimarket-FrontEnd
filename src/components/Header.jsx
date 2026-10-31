export function Header() {
    return (
        <header className="shadow-sm mb-5">
            <div className="bg-blue-600 text-white text-center py-1 text-xs font-semibold">
                🛒 Supermercado Express — Calidad y frescura | 🚚 Envíos el mismo día
            </div>

            <div className="bg-blue-50 border-b border-blue-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/market-supermarket-svgrepo-com.svg"
                            alt="Logo Supermercado"
                            width="45"
                            height="45"
                            className="h-11 w-11"
                        />
                        <div>
                            <h1 className="text-xl font-bold mb-0 text-blue-700">Supermercado Duoc Express</h1>
                            <small className="text-slate-500">Tu inventario y compras de confianza</small>
                        </div>
                    </div>

                    <span className="hidden md:inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 whitespace-nowrap">
                        🟢 Abierto hoy hasta las 21:00 hrs
                    </span>
                </div>
            </div>
        </header>
    );
}
