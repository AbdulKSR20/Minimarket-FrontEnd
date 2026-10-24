import { useState } from 'react';

const categorias = [{ id: 1, nombre: 'Lácteos', }, { id: 2, nombre: 'Panadería', }, { id: 3, nombre: 'Abarrotes', }, { id: 4, nombre: 'Bebidas', }, { id: 5, nombre: 'Snacks', }, { id: 6, nombre: 'Limpieza', }, { id: 7, nombre: 'Cuidado Personal', }]

const inventarioInicial = [{ id: 1, nombre: 'Leche Entera 1L', categoria: 'Lácteos', precio: 1100, stock: 12 },
{ id: 2, nombre: 'Pan Molde Integral', categoria: 'Panadería', precio: 1990, stock: 8 },
{ id: 3, nombre: 'Arroz Grado 1 1kg', categoria: 'Abarrotes', precio: 1450, stock: 25 },]

export function Home() {
    const [inventario, setInventario] = useState(inventarioInicial)

    const modificarStock = (id, cantidad) => {
        setInventario(previo =>
            previo.map(item =>
                item.id === id && item.stock + cantidad >= 0 ? { ...item, stock: item.stock + cantidad } : item))
    }

    const agregarProducto = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const nombre = formData.get('nombreProducto').trim()
        const categoria = formData.get('categoriaProducto').trim()
        const precio = parseInt(formData.get('precioProducto').trim())
        const stock = parseInt(formData.get('stockProducto').trim())

        if (!nombre || !categoria || !precio || !stock || categoria === 'Seleccione una categoría') {
            alert('Todos los campos son obligatorios')
            return
        }
        if (precio < 0 || stock < 0) {
            alert('El precio y el stock deben ser mayores a 0')
            return
        }
        const productoExistente = inventario.find(item => item.nombre.toLowerCase() === nombre.toLowerCase())
        if (productoExistente) {
            alert('El producto ya existe en el inventario')
            return
        }

        setInventario([...inventario, { id: Date.now().toString(), nombre, categoria, precio, stock }])
        e.target.reset()
    }

    return (
        <div className="container mt-4 mb-5 pb-5">
            <h2 className="mb-4 text-center mb-5">Gestión de Inventario</h2>
            <div className="row g-3 justify-content">
                {inventario.map(item => (
                    <div className="card mb-2 mx-4" key={item.id} style={{ width: '18rem' }}>
                        {/*<img src={item.imagen} className="card-img-top" alt="Imagen de Producto" />*/}
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text"><b>Categoría:</b> {item.categoria}</p>
                            <p className="card-text"><b>Precio:</b> ${item.precio}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-sm btn-danger" onClick={() => modificarStock(item.id, -1)}>-</button>
                                <span className="mx-2 "><b>Stock:</b> {item.stock}</span>
                                <button className="btn btn-sm btn-success" onClick={() => modificarStock(item.id, 1)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary col-2 offset-9 mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#formularioProducto" aria-expanded="false" aria-controls="formularioProducto">
                    Agregar Productos
                </button>
                <div className="collapse" id="formularioProducto">
                    <div className="card card-body">
                        <form onSubmit={agregarProducto}>
                            <div className="mb-3">
                                <label htmlFor="nombreProducto" className="form-label">Nombre del Producto</label>
                                <input name="nombreProducto" type="text" className="form-control" id="nombreProducto" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoriaProducto" className="form-label">Categoría del Producto</label>
                                <select name="categoriaProducto" id="categoriaProducto" className="form-select">
                                    <option>Seleccione una categoría</option>
                                    {categorias.map(item => (<option key={item.id}>{item.nombre}</option>))}
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="precioProducto" className="form-label">Precio del Producto</label>
                                <input name="precioProducto" type="number" className="form-control" id="precioProducto" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stockProducto" className="form-label">Stock del Producto</label>
                                <input name="stockProducto" type="number" className="form-control" id="stockProducto" />
                            </div>
                            <button type="submit" className="btn btn-primary">Agregar Producto</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}