import { Brain, TrendingUp, MessageCircle, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Brain,
      title: "PEI Digital",
      description:
        "Plano de Ensino Individualizado digital, facilitando o acompanhamento personalizado de cada aluno.",
    },
    {
      icon: TrendingUp,
      title: "Gráficos de Evolução",
      description:
        "Visualização clara do progresso emocional e comportamental dos estudantes com TEA.",
    },
    {
      icon: MessageCircle,
      title: "Comunicação Escola-Família",
      description:
        "Canal direto entre educadores e famílias para melhor acompanhamento conjunto.",
    },
    {
      icon: Users,
      title: "Plataforma Intuitiva",
      description:
        "Interface simples e acessível, pensada para facilitar o uso por todos os envolvidos.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Sobre o ConexTEA
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            O ConexTEA é uma plataforma digital inovadora que revoluciona o
            acompanhamento educacional de alunos com Transtorno do Espectro
            Autista nas escolas públicas. Nossa missão é conectar educadores,
            famílias e estudantes através da tecnologia, promovendo uma educação
            verdadeiramente inclusiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-[#2E8FE6] rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
