import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { Validador } from '../utils/validador';
import { Link } from 'react-router-dom';

const tiposDisponibles = ['Lácteos', 'Panadería', 'Abarrotes', 'Bebidas', 'Snacks', 'Limpieza', 'Cuidado Personal'];

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
        <div className="container mt-4 mb-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">➕ Ingresar Nuevo Artículo</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre del Artículo</label>
                                    <input type="text" className={`form-control ${errores.nombre ? 'is-invalid' : ''}`} id="nombre" name="nombre" placeholder="Ej: Leche Descremada 1L" />
                                    {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="marca" className="form-label">Marca</label>
                                    <input type="text" className={`form-control ${errores.marca ? 'is-invalid' : ''}`} id="marca" name="marca" placeholder="Ej: Colun" />
                                    {errores.marca && <div className="invalid-feedback">{errores.marca}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label">Tipo de Producto</label>
                                    <select className={`form-select ${errores.tipo ? 'is-invalid' : ''}`} id="tipo" name="tipo" defaultValue="">
                                        <option value="">Seleccione un tipo</option>
                                        {tiposDisponibles.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                    {errores.tipo && <div className="invalid-feedback">{errores.tipo}</div>}
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="precio" className="form-label">Precio ($)</label>
                                        <input type="number" className={`form-control ${errores.precio ? 'is-invalid' : ''}`} id="precio" name="precio" placeholder="Ej:
                        1200" />{errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="stock" className="form-label">Stock Inicial</label>
                                        <input type="number" className={`form-control ${errores.stock ? 'is-invalid' : ''}`} id="stock" name="stock" placeholder="Ej:
                        15" />{errores.stock && <div className="invalid-feedback">{errores.stock}</div>}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 py-2">
                                    Guardar en Inventario
                                </button>
                            </form>

                            {/* Modal de exito*/}
                            {mostrarModal && (
                                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content text-center p-4">
                                            <div className="modal-body">
                                                <div className="display-4 text-success mb-3">🎉</div>
                                                <h4 className="fw-bold mb-2">¡Artículo Agregado!</h4>
                                                <p className="text-muted">El producto fue incorporado correctamente al inventario global.</p>
                                                <div className="d-flex justify-content-center gap-2 mt-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={() => setMostrarModal(false)}
                                                    >
                                                        Seguir agregando
                                                    </button>
                                                    <Link to="/" className="btn btn-outline-secondary">
                                                        Ir al Inicio
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}