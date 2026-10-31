import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="container text-center my-5 py-5">
            <div className="display-1 text-danger fw-bold mb-3">404</div>
            <h2 className="mb-3">¡Ups! Página no encontrada</h2>
            <p className="text-muted col-md-6 mx-auto mb-4">
                La ruta a la que intentas ingresar no existe en el sistema de supermercado o fue movida.
            </p>
            <Link to="/" className="btn btn-primary px-4 py-2 shadow-sm">
                🏠 Volver al Inicio
            </Link>
        </div>
    );
}