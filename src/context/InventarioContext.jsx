import { createContext, useState, useContext } from 'react';
import { productosIniciales } from '../data/inventarioInicial';


const InventarioContext = createContext();


export function InventarioProvider({ children }) {
    const [inventario, setInventario] = useState(productosIniciales);

    const agregarArticulo = (nuevoArticulo) => {
        setInventario(prev => [...prev, { ...nuevoArticulo, id: crypto.randomUUID() }]);
    };
    const modificarStock = (id, cantidad) => {
        setInventario(prev =>
            prev.map(item =>
                item.id === id && item.stock + cantidad >= 0
                    ? { ...item, stock: item.stock + cantidad }
                    : item
            )
        );
    };

    return (
        <InventarioContext.Provider value={{ inventario, agregarArticulo, modificarStock }}>
            {children}
        </InventarioContext.Provider>
    );
}

export function useInventario() {
    return useContext(InventarioContext);
}