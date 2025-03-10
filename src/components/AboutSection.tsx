
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const features = [
  "Equipe especializada com mais de 15 anos de experiência",
  "Atendimento personalizado e suporte contínuo",
  "Uso de tecnologia avançada para automação de processos",
  "Confidencialidade e segurança com seus dados",
  "Atualização constante sobre mudanças na legislação fiscal",
  "Prazos de entrega respeitados rigorosamente"
];

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl -rotate-3 transform"></div>
              <div className="relative bg-accountant-950 rounded-3xl overflow-hidden aspect-square max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-accountant-950"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 aspect-square bg-accountant-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="font-semibold text-2xl mb-2">Ricardo Silva</div>
                      <div className="text-accountant-300 text-sm mb-4">Contador CRC/SP 12345-6</div>
                      <div className="h-px w-16 bg-blue-500/50 mx-auto mb-4"></div>
                      <div className="text-accountant-200 text-xs italic">"Transformando números em estratégias para o sucesso do seu negócio."</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-sm font-medium text-blue-700">Sobre Nós</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-accountant-950 mb-6">
              Dedicados a oferecer <span className="text-blue-500">excelência</span> em serviços contábeis
            </h2>
            
            <p className="text-accountant-700 mb-8">
              Somos um escritório de contabilidade com mais de 15 anos de experiência, 
              comprometido em oferecer soluções contábeis de alta qualidade. 
              Nossa missão é ajudar empresas a se manterem em conformidade fiscal 
              enquanto maximizam suas oportunidades de crescimento.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="ml-3 text-accountant-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-blue-500 hover:bg-blue-600 text-white hover-lift"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
