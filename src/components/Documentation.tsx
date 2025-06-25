import { FileText, Code, Map, ExternalLink } from "lucide-react";

export default function Documentation() {
  const documents = [
    {
      icon: FileText,
      title: "Plano de Negócios",
      description:
        "Documento completo com estratégia, modelo de negócio e projeções financeiras.",
      type: "PDF",
      color: "bg-red-100 text-red-600",
      url: "https://storage2.me-qr.com/pdf/1bf0c204-8aba-45dd-b66e-4dfde9f771df.pdf",
    },
    {
      icon: Code,
      title: "Documentação Técnica",
      description:
        "Especificações técnicas, arquitetura do sistema e guia de desenvolvimento.",
      type: "DOC",
      color: "bg-blue-100 text-blue-600",
      url: "https://storage2.me-qr.com/pdf/7291b055-76d9-4306-9aaa-5c3015e80de6.pdf?time=1750824295", // coloque o URL real aqui
    },
  ];

  return (
    <section id="documentacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Documentação Técnica
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Acesse nossa documentação completa para entender melhor o projeto,
            tecnologias utilizadas e estratégia de implementação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${doc.color}`}
                  >
                    <doc.icon className="h-6 w-6" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${doc.color}`}
                  >
                    {doc.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {doc.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {doc.description}
                </p>

                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full bg-[#2E8FE6] hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <span>Acessar Documento</span>
                  <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React Native",
                "React",
                "Next.JS",
                "Python",
                "Django Rest Framework",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
