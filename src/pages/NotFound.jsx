import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-5 py-5">
            <div className="text-6xl sm:text-7xl text-red-500 font-bold mb-3">404</div>
            <h2 className="text-2xl font-bold mb-3">¡Ups! Página no encontrada</h2>
            <p className="text-slate-500 md:w-1/2 mx-auto mb-4">
                La ruta a la que intentas ingresar no existe en el sistema de supermercado o fue movida.
            </p>
            <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-colors"
            >
                🏠 Volver al Inicio
            </Link>
        </div>
    );
}
