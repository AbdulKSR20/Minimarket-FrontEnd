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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5 pb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">❓ Preguntas Frecuentes</h2>
            <p className="text-center text-slate-500 mb-12">
                Resolvemos las dudas más comunes de nuestros clientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                {preguntas.map(faq => (
                    <div key={faq.id} className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 h-full">
                        <h5 className="text-lg font-bold text-blue-700 mb-2">
                            {faq.pregunta}
                        </h5>
                        <p className="text-slate-600">
                            {faq.respuesta}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
