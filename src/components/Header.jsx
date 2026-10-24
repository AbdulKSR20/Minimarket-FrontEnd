export function Header() {
    return (
        <header className="shadow-sm mb-5">
            <div className="bg-primary text-white text-center py-1 small fw-semibold">
                🛒 Supermercado Express — Calidad y frescura | 🚚 Envíos el mismo día
            </div>

            <div className="bg-primary-subtle border-bottom border-primary-subtle py-3">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                        <img
                            src="/market-supermarket-svgrepo-com.svg"
                            alt="Logo Supermercado"
                            width="45"
                            height="45"
                        />
                        <div>
                            <h1 className="h4 mb-0 fw-bold text-primary">Supermercado Duoc Express</h1>
                            <small className="text-muted">Tu inventario y compras de confianza</small>
                        </div>
                    </div>

                    <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 d-
  none d-md-inline-block">
                        🟢 Abierto hoy hasta las 21:00 hrs
                    </span>
                </div>
            </div>
        </header>
    );
}