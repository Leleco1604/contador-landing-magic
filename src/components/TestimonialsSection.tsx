
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Oliveira",
    company: "Oliveira Tech LTDA",
    position: "CEO",
    content: "A equipe da ContábilPrecisão transformou nossa gestão fiscal. Reduziram nossa carga tributária em quase 30% e nos mantêm sempre atualizados sobre mudanças na legislação.",
    rating: 5
  },
  {
    name: "Mariana Santos",
    company: "Café Aroma ME",
    position: "Proprietária",
    content: "Como MEI, precisava de orientação clara para formalizar meu negócio. O atendimento personalizado e paciente foi fundamental para organizar minhas finanças desde o início.",
    rating: 5
  },
  {
    name: "Pedro Mendes",
    company: "Construmendes Engenharia",
    position: "Diretor Financeiro",
    content: "Trabalho com eles há mais de 5 anos. A precisão dos relatórios e a rapidez no atendimento fazem toda diferença para nossa empresa. Recomendo sem hesitar!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-b from-white to-accountant-50">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-blue-700">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accountant-950 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-accountant-600 text-lg">
            A confiança de nossos clientes é nosso maior patrimônio. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-accountant-100 p-8 hover-lift transition-all hover:shadow-md"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-accountant-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-accountant-700 mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-accountant-900">{testimonial.name}</h4>
                  <p className="text-accountant-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
