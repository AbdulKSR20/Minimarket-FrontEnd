import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { Validador } from '../utils/validador';
import { Link } from 'react-router-dom';

const tiposDisponibles = ['Lácteos', 'Panadería', 'Abarrotes', 'Bebidas', 'Snacks', 'Limpieza', 'Cuidado Personal'];

// Clases compartidas por los campos del formulario (estado normal vs. error)
const clasesCampo = (tieneError) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
        tieneError ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
    }`;

export function NuevoArticulo() {
    // 1. Extraemos las funciones y datos del estado global
    const { agregarArticulo, inventario } = useInventario();

    // Estados locales para mensajes visuales (sin alert invasivos)
    const [errores, setErrores] = useState({});
    const [exito, setExito] = useState(false);
    // Estado para controlar la visibilidad del modal
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setExito(false);

        const formData = new FormData(e.target);
        const nuevo = {
            nombre: formData.get('nombre')?.trim(),
            marca: formData.get('marca')?.trim(),
            tipo: formData.get('tipo')?.trim(),
            precio: formData.get('precio')?.trim(),
            stock: formData.get('stock')?.trim(),
        };

        // 2. Usamos la clase Validador
        const resultado = Validador.validarArticulo(nuevo, inventario);

        if (!resultado.esValido) {
            setErrores(resultado.errores);
            return;
        }

        // 3. Si es válido, agregamos al estado global convirtiendo números
        agregarArticulo({
            nombre: nuevo.nombre,
            marca: nuevo.marca,
            tipo: nuevo.tipo,
            precio: Number(nuevo.precio),
            stock: Number(nuevo.stock)
        });

        setErrores([]);
        setExito(true);
        setMostrarModal(true);
        e.target.reset(); // Limpiar el formulario
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5 pb-5">
            <div className="flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-center mb-6">➕ Ingresar Nuevo Artículo</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1.5">Nombre del Artículo</label>
                                <input type="text" className={clasesCampo(errores.nombre)} id="nombre" name="nombre" placeholder="Ej: Leche Descremada 1L" />
                                {errores.nombre && <div className="text-red-500 text-xs mt-1">{errores.nombre}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="marca" className="block text-sm font-medium text-slate-700 mb-1.5">Marca</label>
                                <input type="text" className={clasesCampo(errores.marca)} id="marca" name="marca" placeholder="Ej: Colun" />
                                {errores.marca && <div className="text-red-500 text-xs mt-1">{errores.marca}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="tipo" className="block text-sm font-medium text-slate-700 mb-1.5">Tipo de Producto</label>
                                <select className={`${clasesCampo(errores.tipo)} bg-white`} id="tipo" name="tipo" defaultValue="">
                                    <option value="">Seleccione un tipo</option>
                                    {tiposDisponibles.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                {errores.tipo && <div className="text-red-500 text-xs mt-1">{errores.tipo}</div>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-3">
                                    <label htmlFor="precio" className="block text-sm font-medium text-slate-700 mb-1.5">Precio ($)</label>
                                    <input type="number" className={clasesCampo(errores.precio)} id="precio" name="precio" placeholder="Ej: 1200" />
                                    {errores.precio && <div className="text-red-500 text-xs mt-1">{errores.precio}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stock" className="block text-sm font-medium text-slate-700 mb-1.5">Stock Inicial</label>
                                    <input type="number" className={clasesCampo(errores.stock)} id="stock" name="stock" placeholder="Ej: 15" />
                                    {errores.stock && <div className="text-red-500 text-xs mt-1">{errores.stock}</div>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors"
                            >
                                Guardar en Inventario
                            </button>
                        </form>

                        {/* Modal de exito*/}
                        {mostrarModal && (
                            <div
                                className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                                role="dialog"
                                aria-modal="true"
                            >
                                <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 text-center">
                                    <div className="text-5xl text-emerald-600 mb-3">🎉</div>
                                    <h4 className="text-xl font-bold mb-2">¡Artículo Agregado!</h4>
                                    <p className="text-slate-500">El producto fue incorporado correctamente al inventario global.</p>
                                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                                        <button
                                            type="button"
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                                            onClick={() => setMostrarModal(false)}
                                        >
                                            Seguir agregando
                                        </button>
                                        <Link
                                            to="/"
                                            className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Ir al Inicio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
