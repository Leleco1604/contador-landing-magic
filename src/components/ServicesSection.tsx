
import { 
  FileSpreadsheet, 
  BarChart, 
  Briefcase, 
  Calculator, 
  BadgeDollarSign, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Abertura de Empresas",
    description: "Planejamento societário, registro nos órgãos competentes e orientação sobre os regimes tributários mais adequados."
  },
  {
    icon: <BadgeDollarSign className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Planejamento Tributário",
    description: "Análise fiscal para reduzir a carga tributária legal e segura para sua empresa, maximizando resultados."
  },
  {
    icon: <Calculator className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Contabilidade para MEIs e PMEs",
    description: "Serviços contábeis personalizados para Microempreendedores Individuais e Pequenas Empresas."
  },
  {
    icon: <FileSpreadsheet className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Declaração de Imposto de Renda",
    description: "Elaboração e envio de declarações para Pessoas Físicas e Jurídicas, garantindo conformidade fiscal."
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Gestão Financeira",
    description: "Análise de balanços, fluxo de caixa, indicadores financeiros e orientação para tomada de decisões."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Regularização Fiscal",
    description: "Resolução de pendências fiscais, parcelamentos especiais e representação junto aos órgãos fiscalizadores."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-accountant-50">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-blue-700">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accountant-950 mb-4">
            Soluções completas para todas as suas necessidades contábeis
          </h2>
          <p className="text-accountant-600 text-lg">
            Oferecemos serviços contábeis abrangentes para empresas de todos os tamanhos, 
            com foco em qualidade e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-accountant-100 p-8 hover-lift transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 flex items-center justify-center bg-blue-50 rounded-md mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-accountant-900 mb-3">
                {service.title}
              </h3>
              <p className="text-accountant-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
