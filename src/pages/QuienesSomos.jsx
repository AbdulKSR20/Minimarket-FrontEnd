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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5 pb-5">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">🏢 Quiénes Somos</h2>
                <p className="text-lg text-slate-500 md:w-2/3 mx-auto">
                    Nacimos con el sueño de ofrecer a cada barrio una experiencia de compra cercana, rápida y con los
                    mejores productos de la tierra y despensa a su mesa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                {pilares.map(item => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full text-center">
                        <div className="text-5xl mb-3">{item.icono}</div>
                        <h5 className="text-lg font-bold mb-2">{item.titulo}</h5>
                        <p className="text-slate-600">{item.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
