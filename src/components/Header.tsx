
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-2xl font-bold text-accountant-950">
                <span className="text-blue-500">Contábil</span>Precisão
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('services')} 
              className="text-accountant-700 hover:text-blue-500 font-medium cursor-pointer transition-colors link-underline"
            >
              Serviços
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className="text-accountant-700 hover:text-blue-500 font-medium cursor-pointer transition-colors link-underline"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('testimonials')} 
              className="text-accountant-700 hover:text-blue-500 font-medium cursor-pointer transition-colors link-underline"
            >
              Depoimentos
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="text-accountant-700 hover:text-blue-500 font-medium cursor-pointer transition-colors link-underline"
            >
              Contato
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 transition-colors hover-lift"
            >
              Solicitar Consulta
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-accountant-700 hover:text-blue-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} animate-fade-in`}>
        <div className="px-4 py-3 bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4 py-2">
            <a 
              onClick={() => scrollToSection('services')} 
              className="text-accountant-700 hover:text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-accountant-50 transition-colors"
            >
              Serviços
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className="text-accountant-700 hover:text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-accountant-50 transition-colors"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('testimonials')} 
              className="text-accountant-700 hover:text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-accountant-50 transition-colors"
            >
              Depoimentos
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="text-accountant-700 hover:text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-accountant-50 transition-colors"
            >
              Contato
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 transition-colors w-full"
            >
              Solicitar Consulta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
