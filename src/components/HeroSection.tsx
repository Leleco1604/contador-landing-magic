
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-blue-50 to-transparent rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accountant-50 to-transparent rounded-tr-full opacity-70"></div>
      </div>

      <div className="container px-6 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animate">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm font-medium text-blue-700">Contabilidade Especializada</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accountant-950 leading-tight mb-6">
              Soluções Contábeis <span className="text-blue-500">Inteligentes</span> para o Seu Negócio
            </h1>
            
            <p className="text-lg md:text-xl text-accountant-700 mb-8 max-w-xl">
              Deixe-nos cuidar da sua contabilidade enquanto você se concentra em fazer seu negócio crescer. 
              Economize tempo, dinheiro e evite problemas fiscais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 px-8 rounded-md transition-all hover-lift flex items-center justify-center text-lg"
              >
                Agende uma Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-blue-200 text-accountant-800 hover:bg-blue-50 font-medium py-6 px-8 rounded-md transition-all hover-lift"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-10 blur-xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-3xl border border-accountant-100 shadow-xl p-6 animate-fade-in-left">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-accountant-400">Relatório Mensal</div>
              </div>
              
              <div className="space-y-4">
                <div className="h-10 bg-blue-50 rounded-md w-full animate-pulse-soft"></div>
                <div className="flex gap-2">
                  <div className="h-32 bg-green-50 rounded-md w-1/2 animate-pulse-soft" style={{ animationDelay: "0.1s" }}></div>
                  <div className="h-32 bg-blue-50 rounded-md w-1/2 animate-pulse-soft" style={{ animationDelay: "0.2s" }}></div>
                </div>
                <div className="h-24 bg-accountant-50 rounded-md w-full animate-pulse-soft" style={{ animationDelay: "0.3s" }}></div>
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-blue-100 rounded-md w-1/3"></div>
                  <div className="h-10 bg-blue-500 rounded-md w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <p className="text-accountant-600 text-sm md:text-base">CONFIADO POR EMPRESAS DE TODOS OS TAMANHOS</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 w-24 md:w-32 bg-accountant-200/30 rounded-md animate-pulse-soft" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
