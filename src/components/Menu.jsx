import { Link, NavLink } from 'react-router-dom';

const enlaces = [
    { to: '/', texto: 'Home', end: true },
    { to: '/quienes-somos', texto: 'Quienes Somos' },
    { to: '/preguntas-frecuentes', texto: 'Preguntas Frecuentes' },
    { to: '/nuevo-articulo', texto: 'Añadir Nuevo Articulo' },
    { to: '/inventario', texto: 'Inventario' },
    { to: 'not-found', texto: 'Como comprar' },
];

export function Menu() {
    const clasesEnlace = ({ isActive }) =>
        `rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
            isActive
                ? 'bg-white/20 text-white font-semibold ring-1 ring-white/30'
                : 'text-blue-100 hover:bg-white/10 hover:text-white'
        }`;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
                <Link to="/" className="shrink-0 mr-2" aria-label="Inicio - Supermercado">
                    <img
                        src="market-place-svgrepo-com.svg"
                        alt="Inicio - Supermercado"
                        className="h-8 w-8"
                    />
                </Link>

                {enlaces.map((enlace) => (
                    <NavLink
                        key={enlace.to}
                        to={enlace.to}
                        end={enlace.end}
                        className={clasesEnlace}
                    >
                        {enlace.texto}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
