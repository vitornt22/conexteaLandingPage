import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d4271] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E8FE6] to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <div className="text-xl font-bold">ConexTEA</div>
                <div className="text-xs text-blue-300 -mt-1">
                  Conectando Saberes, Emoções e Inclusão
                </div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed max-w-md">
              Transformando a educação inclusiva através da tecnologia,
              conectando educadores, famílias e alunos com TEA.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#documentacao"
                  className="hover:text-white transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">connextea@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © 2024 ConexTEA. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-100">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para a educação inclusiva</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-800">
            <h4 className="font-bold mb-3">Equipe ConexTEA</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-blue-100">
              <div>
                <p className="font-medium text-white">Desenvolvimento</p>
                <p>Vitor Neto</p>
                <p>Lius Remilton</p>
                <p>Marcos Sousa</p>
              </div>
              <div>
                <p className="font-medium text-white">Design & UX</p>
                <p>Vitor Neto</p>
                <p>Yasmin Vitória</p>
                <p>Geremias Silva</p>
                <p>Dayana Maria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
