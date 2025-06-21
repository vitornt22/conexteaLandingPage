import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Fabricia",
      role: "Mãe Atípica ",
      school: "Fronteiras-PI",
      quote:
        "É um sonho que se concretizado agilizaria os acompanhamento dos nossos filhos",
      rating: 5,
    },
    {
      name: "Marina Maria de Sousa",
      role: "Mãe Atípica",
      school: "Fronteiras-PI",
      quote:
        "A realização de um sonho inimaginável. Superou todas as minhas expectativas",
      rating: 5,
    },
    {
      name: "Girlene Maria da Silva",
      role: "Mãe Atípica",
      school: "Fronteiras-PI",
      quote:
        "Algo incrível que vai revolucionar, facilitar para os pais e professores.",
      rating: 5,
    },
    {
      name: "Ângela Darla",
      role: "Mãe Atípica",
      school: "Fronteiras-PI",
      quote:
        "É um sonho e necessário, assim nós pais teremos, de  fato, um meio de inclusão escolar",
      rating: 5,
    },
    {
      name: "Fabiana Oliveira",
      role: "Professora",
      school: "Secretaria Municipal de Educação",
      quote:
        "Uma ponte capaz de conectar pais ao ambiente escolar, promovendo acesso imediato ao desenvolvimento de nossos filhos",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Mãe de aluno com TEA",
      school: "Família Costa",
      quote:
        "Finalmente posso acompanhar o progresso do meu filho na escola. A comunicação ficou muito mais fácil e transparente.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            O que dizem sobre o ConexTEA
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Depoimentos de educadores, coordenadores e famílias que já utilizam
            nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-[#2E8FE6]" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-blue-200">
                  <h4 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-700 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {testimonial.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
