import { MessageCircle, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[#87C6FF] to-[#2674bd]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vamos conversar?
          </h2>
          <p className="text-xl text-blue-100 max-w-xl mx-auto">
            Entre em contato com a equipe do ConexTEA para parcerias,
            implementação piloto ou feedback.
          </p>
        </div>

        {/* Card de parceria */}
        <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Interessado em uma parceria?
          </h3>
          <p className="text-blue-900 leading-relaxed mb-8">
            Estamos sempre abertos para conversar sobre implementações piloto,
            parcerias estratégicas e feedback para melhorar nossa plataforma.
            Vamos juntos transformar a educação inclusiva!
          </p>

          <button className="group bg-[#2E8FE6] text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl mx-auto">
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Fale com a gente</span>
          </button>
        </div>

        {/* Contatos email e whatsapp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-medium">Email</span>
            </div>
            <p className="text-blue-800 text-sm">contato@conexstea.com.br</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-medium">WhatsApp</span>
            </div>
            <p className="text-blue-800 text-sm">(11) 99999-9999</p>
          </div>
        </div>
      </div>
    </section>
  );
}
