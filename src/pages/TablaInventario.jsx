import { useInventario } from '../context/InventarioContext';
import { Link } from 'react-router-dom';

export function TablaInventario() {
    // 1. Consumimos los datos y funciones del estado global
    const { inventario, modificarStock } = useInventario();

    return (
        <div className="container mt-4 mb-5 pb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">📋 Inventario General</h2>
                    <p className="text-muted mb-0">Listado consolidado de artículos en el supermercado</p>
                </div>
                <Link to="/nuevo-articulo" className="btn btn-primary">
                    + Nuevo Artículo
                </Link>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Artículo</th>
                                    <th>Marca</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th className="text-center">Stock</th>
                                    <th className="text-center">Estado</th>
                                    <th className="text-end pe-4">Ajustar Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventario.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-muted">
                                            No hay artículos registrados en el inventario.
                                        </td>
                                    </tr>
                                ) : (
                                    // 2. Recorremos el inventario global
                                    inventario.map(item => (
                                        <tr key={item.id}>
                                            <td className="fw-semibold">{item.nombre}</td>
                                            <td>
                                                <span className="badge bg-secondary-subtle text-secondary border">
                                                    {item.marca || 'Genérica'}
                                                </span>
                                            </td>
                                            <td>{item.tipo || item.categoria}</td>
                                            <td className="fw-bold">${item.precio?.toLocaleString('es-CL')}</td>

                                            {/* Stock numérico */}
                                            <td className="text-center fw-bold fs-6">
                                                {item.stock}
                                            </td>

                                            {/* Estado: Disponible o Agotado */}
                                            <td className="text-center">
                                                {item.stock > 0 ? (
                                                    <span className="badge bg-success-subtle text-success border
                              border-success-subtle">
                                                        Disponible
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                                        Agotado
                                                    </span>
                                                )}
                                            </td>

                                            {/* Botones de acción rápida para ajustar stock */}
                                            <td className="text-end pe-4">
                                                <div className="btn-group btn-group-sm">
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() => modificarStock(item.id, -1)}
                                                        disabled={item.stock <= 0}
                                                        title="Disminuir stock"
                                                    >
                                                        -
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-success"
                                                        onClick={() => modificarStock(item.id, 1)}
                                                        title="Aumentar stock"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}