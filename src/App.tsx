import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Trophy, Users, MessageCircle, ChevronLeft, ChevronRight, ArrowUp, ChevronDown, Clock } from 'lucide-react';
import backgroundImage from './res/images/bg_hero_section.png';
import backgroundAdvisory from './res/images/assessoria.jpeg';
import backgroundMonitoring from './res/images/monitoria.jpeg';
import backgroundEssay from './res/images/assessoria.jpeg';

function App() {
  const handleWhatsSubscriptionAppClick = () => {
    window.open('https://wa.me/5583999288420?text=Olá! Quero garantir minha vaga na Assessoria Saber+!', '_blank');
  };
  const handleWhatsDoubtsAppClick = () => {
    window.open('https://wa.me/5583999288420?text=Olá! Tenho dúvidas sobre a Assessoria Saber+!', '_blank');
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const benefits = [
    {
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: "Assessoria",
      description: "Conteúdo personalizado e atualizado para maximizar seu aprendizado",
      bgImage: backgroundAdvisory
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Monitoria Individual",
      description: "Acompanhamento próximo com professores especializados",
      bgImage: backgroundMonitoring
    },
    {
      icon: <Trophy className="w-12 h-12 text-white" />,
      title: "Redação",
      description: "Histórico de aprovações nas melhores universidades",
      bgImage: backgroundEssay
    }
  ];

  const features1 = [
    "Monitoria 24h: Tire suas dúvidas a qualquer hora e não perca tempo!",
    "Análise de Desempenho com Dashboard Individual: Acompanhe sua evolução com gráficos claros e metas personalizadas.",
    "Cronograma Individualizado: Planejamento de estudos feito sob medida para você.",
    "Assessoria Semanal Online: Acompanhamento contínuo com dicas e estratégias direto ao ponto."
  ];

  const features2 = [
    "Simulados ENEM 2025: Treine como se fosse o dia da prova, com questões atualizadas e realistas.",
    "Correção de Redação: Avaliação detalhada para você alcançar a nota 1000.",
    "Material de Estudos Exclusivo: Conteúdo organizado e eficiente para maximizar seus resultados."
  ];

  const testimonials = [
    {
      name: "Ana Luiza Ferreira",
      role: "Aluna da Assessoria Enem",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      text: "No final do ano de 2020 eu estava perdida, literalmente, tanto em termos de estudos, como de vida pessoal, era o famoso 8 e 80. Queria fazer tudo ao meu alcance, mas não conseguia por falta de estratégia e quando me deparava com isso decaia cada vez mais. Com a grande ajuda de Eduardo, criador da AssessoriaENEM, consegui mudar minha linha de pensamento e começar a focar mais no meu sonho. A trajetória foi difícil? Não tenho dúvidas, mas ao olhar para trás e ver minha evolução - não somente como vestibulando, mas também como pessoa, percebi que dei um salto enorme e sou muito grata por ter conseguido enxergar isso dentro de mim."
    },
    {
      name: "Júlia Nunes",
      role: "Aluna - Assessoria Enem",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      text: "A minha história segue um roteiro fora da ordem convencional, visto que decidi retomar os estudos para o ENEM durante a conclusão do bacharelado em Direito. Confesso que o início foi apavorante, mas ao longo da trajetória contei com um grande aliado que mudou a minha jornada. A Assessoria ENEM me permitiu desenvolver tanto as habilidades como superar crenças limitantes. Por isso, o atendimento personalizado foi indispensável para melhorar cada vez mais o meu método de estudo, a minha rotina e a estratégia de prova."
    },
    {
      name: "Pedro Santos",
      role: "Aluno da Assessoria Enem",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      text: "A Assessoria ENEM transformou completamente minha forma de estudar. O método personalizado e o acompanhamento constante foram fundamentais para minha aprovação. Em apenas 6 meses, consegui evoluir mais do que em anos de estudo sozinho."
    },
    {
      name: "Mariana Costa",
      role: "Aluna - Assessoria Enem",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      text: "Graças à Assessoria ENEM, consegui organizar meus estudos de forma eficiente. O suporte emocional e as estratégias personalizadas fizeram toda a diferença na minha preparação. Hoje posso dizer que estou realizando meu sonho na universidade."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleNext = () => {
    const increment = isMobile ? 1 : 2;
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + increment) >= testimonials.length ? 0 : prevIndex + increment
    );
  };

  const handlePrevious = () => {
    const increment = isMobile ? 1 : 2;
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - (isMobile ? 1 : 2) : prevIndex - increment
    );
  };

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Caso eu passe no SISU, haverá reembolso da primeira mensalidade?",
      answer: "Sim, reembolso será garantido."
    },
    {
      question: "Faço outro cursinho, a assessoria da Saber+ compensa para mim?",
      answer: "Claro! Em geral, os cursinhos não preparam de forma individual para o ENEM, possuindo uma abordagem mais genérica. Com a Saber, você será diretamente preparado e suas lacunas serão preenchidas."
    },
    {
      question: "Estou no ensino médio. A Assessoria compensa para mim?",
      answer: "Quanto mais cedo você tiver uma base formada e auxiliada por especialistas, mais fácil será sua aprovação quando fizer o ENEM para valer. Quanto maior for o treino, maior será o resultado."
    }
  ];

  const calculateTimeLeft = () => {
    const difference = new Date('2025-01-27').getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every minute
  
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen" style={{
            backgroundImage: `url(${backgroundImage})`,
          }}>
        {/* Hero Section */}
        <div className="relative bg-cover bg-center">

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-sprite font-bold text-white mb-6">
                Saber+
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                VOCÊ MAIS PERTO DA APROVAÇÃO NO ENEM 2025!
              </h2>
              <p className="text-xl text-white mb-8">
                Se preparar para o ENEM é uma jornada, mas você não precisa enfrentá-la sozinho. Com a Assessoria Saber+, cada passo é planejado, cada dúvida é solucionada e cada desafio vira uma oportunidade de crescimento.
              </p>
              <div className="space-y-4">
                <button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center mx-auto transition-all"
                  onClick={handleWhatsSubscriptionAppClick}>
                    Quero ser aprovado no ENEM 2025
                    <ArrowRight className="ml-2" />
                </button>
                <p className="text-white text-sm">Vagas Limitadas - Inscreva-se Agora</p>
              </div>

              {/* Hero Countdown Timer */}
              <div className="mt-12">
                <div className="inline-flex flex-col items-center">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <div className="flex gap-6">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-xs block text-purple-200">dias</span>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-xs block text-purple-200">horas</span>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-xs block text-purple-200">min</span>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="text-xs block text-purple-200">seg</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-white mt-2">Tempo restante para sua matrícula</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
              Por que escolher nosso time?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="relative h-96 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${benefit.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-purple-100">
          <div className="container mx-auto px-4">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-6">
              Alcançar a sua aprovação no ENEM 2025 nunca foi tão fácil!
            </h2>

            {/* Subtitle */}
            <p className="md:text-xl font-bold text-center text-purple-700 mb-12">
              Na Assessoria Saber+, você tem acesso a um acompanhamento completo e personalizado que vai transformar sua preparação. Confira tudo o que oferecemos para te ajudar a chegar lá:
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-4">
                {features1.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-purple-500" />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
              </div>
              <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-4">
                {features2.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-purple-500" />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Centered Button with space above */}
            <div className="mt-10 flex justify-center">
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition-all"
                onClick={handleWhatsSubscriptionAppClick}>
                  Quero ser aprovado no ENEM 2025
                  <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Se você quer ser aprovado(a) em 2025,<br />
                você só precisa estudar na Assessoria Saber+
              </h2>
              <p className="md:text-xl font-bold text-center text-purple-700 mb-12">
                Veja abaixo alguns dos depoimentos dos nossos alunos
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {testimonials
                  .slice(
                    currentTestimonialIndex,
                    currentTestimonialIndex + (isMobile ? 1 : 2)
                  )
                  .map((testimonial, index) => (
                    <div
                      key={`${testimonial.name}-${currentTestimonialIndex + index}`}
                      className="bg-gray-900 rounded-2xl p-8 text-white"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-yellow-400">{testimonial.name}</h3>
                          <p className="text-purple-200 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-purple-100 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-purple-800 hover:bg-purple-700 text-white p-2 rounded-full transition-all"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-purple-800 hover:bg-purple-700 text-white p-2 rounded-full transition-all"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-white py-16 bg-black/50">
          <div className="container mx-auto px-4 text-center">

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mt-26">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">
                  PERGUNTAS <span className="text-yellow-400">FREQUENTES</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-gray-250 rounded-lg overflow-hidden bg-gray-950"
                  >
                    {/* Question button */}
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Answer container */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="border-t border-gray-700/50 p-6 text-white bg-gray-950 text-left">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition-all" 
                onClick={handleWhatsSubscriptionAppClick}>
                  Quero garantir minha vaga
                  <ArrowRight className="ml-2" />
              </button>
            </div>
            
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-gray-900 my-0 bg-black/50" />

        {/* Footer */}
        <footer className="text-white py-8 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              {/* Footer Logo */}
              <h1 className="text-3xl font-sprite font-bold text-white text-center md:text-left">
                Saber+
              </h1>

              {/* Copy */}
              <p className="text-center md:text-left order-3 md:order-2">
                &copy; 2025 Saber+. Todos os direitos reservados.
              </p>

              {/* Countdown Timer */}
              <div className="flex flex-col items-center md:items-end order-2 md:order-3 gap-1">
                <div className="flex items-center gap-2 bg-purple-800 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <div className="flex gap-3">
                    <div className="text-center">
                      <span className="text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="text-xs block">dias</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-xs block">horas</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-xs block">min</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-xs block">seg</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-purple-200">Tempo restante para sua matrícula</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;