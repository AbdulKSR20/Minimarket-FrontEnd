import { useInventario } from '../context/InventarioContext';
import { Link } from 'react-router-dom';

export function TablaInventario() {
    // 1. Consumimos los datos y funciones del estado global
    const { inventario, modificarStock } = useInventario();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1">📋 Inventario General</h2>
                    <p className="text-slate-500 mb-0">Listado consolidado de artículos en el supermercado</p>
                </div>
                <Link
                    to="/nuevo-articulo"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-center"
                >
                    + Nuevo Artículo
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 text-slate-700">
                            <tr>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">Artículo</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">Marca</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">Categoría</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">Precio</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-center whitespace-nowrap">Stock</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-center whitespace-nowrap">Estado</th>
                                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-right whitespace-nowrap">Ajustar Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventario.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-4 py-8 text-center text-slate-500 border-b border-slate-100">
                                        No hay artículos registrados en el inventario.
                                    </td>
                                </tr>
                            ) : (
                                // 2. Recorremos el inventario global
                                inventario.map(item => (
                                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-100">
                                        <td className="px-4 py-3 font-semibold">{item.nombre}</td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                                {item.marca || 'Genérica'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">{item.tipo || item.categoria}</td>
                                        <td className="px-4 py-3 font-bold">${item.precio?.toLocaleString('es-CL')}</td>

                                        {/* Stock numérico */}
                                        <td className="px-4 py-3 text-center font-bold text-base">
                                            {item.stock}
                                        </td>

                                        {/* Estado: Disponible o Agotado */}
                                        <td className="px-4 py-3 text-center">
                                            {item.stock > 0 ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                                    Disponible
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                                                    Agotado
                                                </span>
                                            )}
                                        </td>

                                        {/* Botones de acción rápida para ajustar stock */}
                                        <td className="px-4 py-3 text-right">
                                            <div className="inline-flex gap-2">
                                                <button
                                                    className="border border-red-500 text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent px-2.5 py-1 rounded-md text-sm transition-colors"
                                                    onClick={() => modificarStock(item.id, -1)}
                                                    disabled={item.stock <= 0}
                                                    title="Disminuir stock"
                                                >
                                                    -
                                                </button>
                                                <button
                                                    className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-2.5 py-1 rounded-md text-sm transition-colors"
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
    );
}
