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
    { id: 1, nombre: 'Lácteos y Huevos', icono: '🥛', color: 'bg-primary-subtle' },
    { id: 2, nombre: 'Panadería y Pastelería', icono: '🥖', color: 'bg-warning-subtle' },
    { id: 3, nombre: 'Abarrotes y Despensa', icono: '🥫', color: 'bg-success-subtle' },
    { id: 4, nombre: 'Bebidas y Jugos', icono: '🧃', color: 'bg-info-subtle' },
];

export function Home() {
    return (
        <div className="container mt-4 mb-5 pb-5">
            {/* 1. Hero Comercial de Bienvenida */}
            <div className="bg-primary text-white rounded-4 p-5 mb-5 shadow-sm text-center text-lg-start">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
                            🎉 ¡Bienvenido a tu Supermercado de Confianza!
                        </span>
                        <h1 className="display-4 fw-bold mb-3">
                            Calidad, Frescura y Ahorro en tu Mesa
                        </h1>
                        <p className="lead mb-4 text-white-50">
                            Encuentra los mejores productos para tu hogar al mejor precio. Compra fácil, rápido y con la
                            atención cercana de siempre.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                            <Link to="/inventario" className="btn btn-light btn-lg px-4 fw-bold text-primary">
                                🛒 Explorar Artículos
                            </Link>
                            <Link to="/quienes-somos" className="btn btn-outline-light btn-lg px-4">
                                Conoce Nuestra Historia
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center mt-4 mt-lg-0 d-none d-lg-block">
                        <div className="display-1">🍎🥦🥖</div>
                    </div>
                </div>
            </div>

            {/* 2. Sección de Beneficios */}
            <div className="row g-4 mb-5 text-center">
                {beneficios.map(b => (
                    <div key={b.id} className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm p-3">
                            <div className="card-body">
                                <div className="display-4 mb-3">{b.icono}</div>
                                <h5 className="fw-bold mb-2">{b.titulo}</h5>
                                <p className="text-muted small mb-0">{b.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Categorías Populares */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-0">🏷️ Categorías Populares</h3>
                    <Link to="/inventario" className="text-decoration-none fw-semibold">
                        Ver todas &rarr;
                    </Link>
                </div>
                <div className="row g-3">
                    {categoriasDestacadas.map(c => (
                        <div key={c.id} className="col-6 col-md-3">
                            <div className={`card border-0 shadow-sm text-center p-3 h-100 ${c.color}`}>
                                <div className="card-body">
                                    <div className="fs-1 mb-2">{c.icono}</div>
                                    <h6 className="fw-bold mb-0 text-dark">{c.nombre}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Banner de Invitación al Club */}
            <div className="bg-light border rounded-4 p-4 text-center">
                <h4 className="fw-bold mb-2">¿Buscas gestionar o ingresar mercadería?</h4>
                <p className="text-muted mb-3">
                    Accede al sistema de inventario general o registra nuevos productos para actualizar el catálogo.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/inventario" className="btn btn-primary px-4">
                        📋 Ir a la Tabla de Inventario
                    </Link>
                    <Link to="/nuevo-articulo" className="btn btn-outline-primary px-4">
                        ➕ Registrar Nuevo Artículo
                    </Link>
                </div>
            </div>
        </div>
    );
}