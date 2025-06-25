import { Download, FileText } from "lucide-react";
import screenshot from "../assets/screen.png";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                ConexTEA
              </h1> */}
              <img
                src={logo}
                alt="Print da tela do ConexTEA"
                className="object-cover w-full h-full rounded-xl"
              />
              <h2 className="text-2xl md:text-3xl text-slate-700 font-medium">
                Inovação na Educação Inclusiva para o Acompanhamento de Alunos
                com TEA{" "}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A tecnologia que apoia o desenvolvimento de alunos com TEA nas
                escolas públicas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ayy4xMAiF_hOcVTlFwHA5DTURssXKjUC/view?usp=sharing",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="group w-full bg-[#2E8FE6] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Clique aqui para baixar o APK</span>
              </button>
              <a
                href="https://storage2.me-qr.com/pdf/1bf0c204-8aba-45dd-b66e-4dfde9f771df.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group border-2 border-[#2E8FE6] text-[#2E8FE6] hover:bg-[#2E8FE6] hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200">
                  <FileText className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Plano de Negócios</span>
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Teste Gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#2E8FE6] rounded-full"></div>
                <span>Android</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Educação Inclusiva</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <img
                  src={screenshot}
                  alt="Print da tela do ConexTEA"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E8FE6] to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-[#2E8FE6] rounded-2xl transform -rotate-3 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
