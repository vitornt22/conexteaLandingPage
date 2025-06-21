import { Download, Shield, Smartphone, AlertCircle } from "lucide-react";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-[#87C6FF] to-[#2674bd]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Teste Agora o App
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Instale e experimente o ConexTEA diretamente no seu dispositivo
            Android
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">
                    Download Direto
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    O aplicativo ConexTEA está disponível em formato APK para
                    Android. Faça o download e instale diretamente em seu
                    dispositivo para experimentar todas as funcionalidades.
                  </p>
                </div>

                <button className="group w-full bg-[#2E8FE6] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Clique aqui para baixar o APK</span>
                </button>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">
                        Instalação de fontes externas
                      </p>
                      <p>
                        Caso seu dispositivo peça permissões de segurança,
                        permita a instalação de fontes externas nas
                        configurações do Android.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
                  <Smartphone className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Compatibilidade
                  </h4>
                  <p className="text-slate-600">Android 6.0 ou superior</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-green-800">Seguro</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <Download className="h-8 w-8 text-[#2E8FE6] mx-auto mb-2" />
                    <p className="text-sm font-medium text-blue-800">
                      Gratuito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
