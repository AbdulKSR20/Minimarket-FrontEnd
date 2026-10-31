import { Link } from 'react-router-dom';

const beneficios = [
    {
        id: 1,
        icono: '🚚',
        titulo: 'Despacho a Domicilio',
        desc: 'Llegamos a tu puerta el mismo día para compras realizadas antes de las 14:00 hrs.'
    },
    {
        id: 2,
        icono: '🥑',
        titulo: 'Frescura Garantizada',
        desc: 'Seleccionamos los mejores productos del campo y despensa todas las mañanas.'
    },
    {
        id: 3,
        icono: '💳',
        titulo: 'Precios Bajos Siempre',
        desc: 'Ofertas semanales imperdibles y todos los medios de pago disponibles.'
    }
];

const categoriasDestacadas = [
    { id: 1, nombre: 'Lácteos y Huevos', icono: '🥛', color: 'bg-blue-50' },
    { id: 2, nombre: 'Panadería y Pastelería', icono: '🥖', color: 'bg-amber-50' },
    { id: 3, nombre: 'Abarrotes y Despensa', icono: '🥫', color: 'bg-emerald-50' },
    { id: 4, nombre: 'Bebidas y Jugos', icono: '🧃', color: 'bg-cyan-50' },
];

export function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5 pb-5">
            {/* 1. Hero Comercial de Bienvenida */}
            <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-10 mb-5 shadow-sm text-center lg:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                        <span className="inline-flex items-center bg-amber-300 text-amber-950 px-3 py-2 rounded-full text-xs sm:text-sm font-bold mb-3">
                            🎉 ¡Bienvenido a tu Supermercado de Confianza!
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                            Calidad, Frescura y Ahorro en tu Mesa
                        </h1>
                        <p className="text-base sm:text-lg mb-6 text-blue-100">
                            Encuentra los mejores productos para tu hogar al mejor precio. Compra fácil, rápido y con la
                            atención cercana de siempre.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Link
                                to="/inventario"
                                className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-6 py-3 rounded-lg transition-colors"
                            >
                                🛒 Explorar Artículos
                            </Link>
                            <Link
                                to="/quienes-somos"
                                className="border border-white/70 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                Conoce Nuestra Historia
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block text-center text-6xl">
                        🍎🥦🥖
                    </div>
                </div>
            </div>

            {/* 2. Sección de Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
                {beneficios.map(b => (
                    <div key={b.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full">
                        <div className="text-5xl mb-3">{b.icono}</div>
                        <h5 className="text-lg font-bold mb-2">{b.titulo}</h5>
                        <p className="text-slate-500 text-sm mb-0">{b.desc}</p>
                    </div>
                ))}
            </div>

            {/* 3. Categorías Populares */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4 gap-4">
                    <h3 className="text-xl font-bold mb-0">🏷️ Categorías Populares</h3>
                    <Link to="/inventario" className="text-blue-700 hover:text-blue-800 no-underline font-semibold whitespace-nowrap">
                        Ver todas &rarr;
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categoriasDestacadas.map(c => (
                        <div key={c.id} className={`rounded-xl shadow-sm border border-slate-200 text-center p-4 h-full ${c.color}`}>
                            <div className="text-4xl mb-2">{c.icono}</div>
                            <h6 className="font-bold mb-0 text-slate-900">{c.nombre}</h6>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Banner de Invitación al Club */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold mb-2">¿Buscas gestionar o ingresar mercadería?</h4>
                <p className="text-slate-500 mb-3">
                    Accede al sistema de inventario general o registra nuevos productos para actualizar el catálogo.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/inventario"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        📋 Ir a la Tabla de Inventario
                    </Link>
                    <Link
                        to="/nuevo-articulo"
                        className="border border-blue-600 text-blue-700 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        ➕ Registrar Nuevo Artículo
                    </Link>
                </div>
            </div>
        </div>
    );
}
