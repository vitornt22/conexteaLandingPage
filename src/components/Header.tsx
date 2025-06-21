import { Menu, X } from "lucide-react";
import logo from "../assets/icon.png";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  const navigation = [
    { name: "Sobre", href: "#sobre" },
    { name: "Teste o App", href: "#download" },
    { name: "Documentação", href: "#documentacao" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                width={200}
                height={100}
                alt="Logo ConexTEA"
                className="object-contain"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-[#2E8FE6] font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#download"
                className="bg-[#2E8FE6] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Baixar APK
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-slate-700 hover:text-[#2E8FE6]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-[#2E8FE6] font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#download"
                className="bg-[#2E8FE6] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Baixar APK
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
