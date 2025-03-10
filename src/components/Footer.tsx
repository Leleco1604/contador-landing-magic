
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-accountant-950 text-white">
      <div className="container px-6 mx-auto">
        {/* Upper Footer */}
        <div className="pt-16 pb-8 border-b border-accountant-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-blue-400">Contábil</span>Precisão
              </h3>
              <p className="text-accountant-300">
                Soluções contábeis inteligentes para impulsionar o crescimento do seu negócio com segurança fiscal e financeira.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-accountant-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-accountant-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-accountant-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-accountant-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Column 2 - Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    onClick={() => scrollToSection('services')} 
                    className="text-accountant-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('about')} 
                    className="text-accountant-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('testimonials')} 
                    className="text-accountant-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('contact')} 
                    className="text-accountant-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Abertura de Empresas
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Planejamento Tributário
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Contabilidade para MEIs
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Imposto de Renda
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-accountant-300 hover:text-blue-400 transition-colors"
                  >
                    Consultoria Financeira
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4 - Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-accountant-300 mb-4">
                Assine nossa newsletter para receber dicas e novidades contábeis.
              </p>
              
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-2 rounded-md bg-accountant-800 border border-accountant-700 text-white placeholder-accountant-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Assinar
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lower Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-accountant-400 text-sm mb-4 md:mb-0">
            © {currentYear} ContábilPrecisão. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center text-accountant-300 hover:text-blue-400 transition-colors"
          >
            <span className="mr-2">Voltar ao topo</span>
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
