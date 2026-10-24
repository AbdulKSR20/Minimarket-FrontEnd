const preguntas = [
    {
        id: 1,
        pregunta: "¿Cuáles son los horarios de atención?",
        respuesta: "Nuestras tiendas atienden de lunes a domingo de 08:30 a 21:00 horas."
    },
    {
        id: 2,
        pregunta: "¿Qué medios de pago aceptan?",
        respuesta: "Aceptamos tarjetas de débito, crédito, transferencias y efectivo."
    },
    {
        id: 3,
        pregunta: "¿Tienen servicio de despacho a domicilio?",
        respuesta: "Sí, realizamos envíos el mismo día para compras realizadas antes de las 14:00 hrs."
    },
    {
        id: 4,
        pregunta: "¿Cómo puedo solicitar un cambio o devolución?",
        respuesta: "Puedes acudir con tu boleta a servicio al cliente en un plazo máximo de 30 días."
    }
];

export function PreguntasFrecuentes() {
    return (
        <div className="container mt-4 mb-5 pb-5">
            <h2 className="text-center mb-4">❓ Preguntas Frecuentes</h2>
            <p className="text-center text-muted mb-5">
                Resolvemos las dudas más comunes de nuestros clientes.
            </p>

            <div className="row g-4 justify-content-center">
                {preguntas.map(faq => (
                    <div key={faq.id} className="col-12 col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary">
                                    {faq.pregunta}
                                </h5>
                                <p className="card-text text-secondary">
                                    {faq.respuesta}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}