export class Validador {
    // 1. Valida si un texto no está vacío
    static validarTexto(valor, nombreCampo) {
        if (!valor || valor.trim() === '') {
            return `${nombreCampo} es obligatorio.`;
        }
        return null;
    }

    // 2. Valida un número positivo 
    static validarNumeroPositivo(valor, nombreCampo, permiteCero = false) {
        const num = Number(valor);
        if (isNaN(num)) {
            return `${nombreCampo} debe ser un número válido.`;
        }
        if (permiteCero ? num < 0 : num <= 0) {
            return `${nombreCampo} debe ser mayor ${permiteCero ? 'o igual ' : ''}a 0.`;
        }
        return null;
    }

    // 3. Valida todo el formulario de un artículo
    static validarArticulo({ nombre, marca, tipo, precio, stock }, inventarioExistente = []) {
        const errores = {};

        const errorNombre = this.validarTexto(nombre, 'El nombre');
        if (errorNombre) errores.nombre = errorNombre;

        const errorMarca = this.validarTexto(marca, 'La marca');
        if (errorMarca) errores.marca = errorMarca;

        if (!tipo || tipo === 'Seleccione un tipo' || tipo === '') {
            errores.tipo = 'Debes seleccionar un tipo de producto.';
        }

        const errorPrecio = this.validarNumeroPositivo(precio, 'El precio', false);
        if (errorPrecio) errores.precio = errorPrecio;

        const errorStock = this.validarNumeroPositivo(stock, 'El stock', true);
        if (errorStock) errores.stock = errorStock;

        // Validar duplicados en el nombre
        const yaExiste = inventarioExistente.some(
            item => item.nombre.toLowerCase().trim() === nombre?.toLowerCase().trim()
        );
        if (yaExiste) {
            errores.nombre = 'Ya existe un artículo con ese mismo nombre.';
        }

        return {
            esValido: Object.keys(errores).length === 0,
            errores
        };
    }
}