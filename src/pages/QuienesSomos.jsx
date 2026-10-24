const pilares = [
    {
        id: 1,
        titulo: "Nuestra Misión",
        descripcion: "Abastecer a las familias con productos frescos, saludables y de máxima calidad al precio más justo.",
        icono: "🎯"
    },
    {
        id: 2,
        titulo: "Nuestra Visión",
        descripcion: "Convertirnos en la red de supermercados más cercana, confiable y sostenible de la comunidad.",
        icono: "👁️"
    },
    {
        id: 3,
        titulo: "Nuestros Valores",
        descripcion: "Compromiso con el cliente, transparencia, fomento al productor local y respeto por el medio ambiente.",
        icono: "🤝"
    }
];

export function QuienesSomos() {
    return (
        <div className="container mt-4 mb-5 pb-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-3">🏢 Quiénes Somos</h2>
                <p className="lead text-muted col-md-8 mx-auto">
                    Nacimos con el sueño de ofrecer a cada barrio una experiencia de compra cercana, rápida y con los
                    mejores productos de la tierra y despensa a su mesa.
                </p>
            </div>

            <div className="row g-4 justify-content-center">
                {pilares.map(item => (
                    <div key={item.id} className="col-12 col-md-4">
                        <div className="card h-100 shadow-sm border-0 text-center p-3">
                            <div className="card-body">
                                <div className="display-4 mb-3">{item.icono}</div>
                                <h5 className="card-title fw-bold">{item.titulo}</h5>
                                <p className="card-text text-secondary">{item.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}