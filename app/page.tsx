'use client';

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';
import {
  Sun,
  TrendingDown,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Battery,
  Factory,
  Home,
  ArrowRight,
  MapPin,
  Phone,
  Instagram,
  HardHat,
  Ruler,
  Award,
  Wrench
} from 'lucide-react';
import Image from 'next/image';
import { AnimatedLogo } from '@/components/animated-logo';
import { AnimatedText } from '@/components/animated-text';

const Logo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className={className}>
    <g fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round">
      <path d="M 150 212 Q 316 400 150 588" />
      <path d="M 230 196 Q 396 400 230 604" />
      <path d="M 310 144 Q 476 400 310 656" />
      <path d="M 390 104 Q 556 400 390 696" />
      <path d="M 650 212 Q 484 400 650 588" />
      <path d="M 570 196 Q 404 400 570 604" />
      <path d="M 490 144 Q 324 400 490 656" />
      <path d="M 410 104 Q 244 400 410 696" />
    </g>
  </svg>
);

const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};



export default function Page() {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollAnimations();

  return (
    <main className="min-h-screen bg-[#0B1121] text-slate-50 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <div className="flex items-center justify-between w-full max-w-6xl bg-[#0B1121]/80 backdrop-blur-lg border border-white/5 px-4 py-3 shadow-2xl">
          <div className="flex items-center gap-3">
            <Logo className="w-6 h-6 md:w-8 md:h-8 rounded-sm overflow-hidden" />
            <span className="text-base md:text-xl font-bold text-white tracking-tight font-comfortaa flex items-center">
              N<span className="text-[10px] md:text-[10px] mx-0.5">&</span>A Engenharia
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <a href="#metodologia" className="hover:text-amber-400 transition-colors">Metodologia</a>
            <a href="#solucoes" className="hover:text-amber-400 transition-colors">Soluções</a>
            <a href="#projetos" className="hover:text-amber-400 transition-colors">Projetos</a>
            <a href="#investimento" className="hover:text-amber-400 transition-colors">Investimento</a>
          </div>
          <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#0B1121] uppercase tracking-wider bg-amber-400 hover:bg-amber-300 transition-colors px-6 py-3">
            Falar com Engenheiro
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center">
            <span className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-[#0B1121]/95 backdrop-blur-lg" />
          <div className="relative flex flex-col items-center justify-center h-full gap-8 text-xl text-white">
            <a href="#metodologia" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Metodologia</a>
            <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Soluções</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Projetos</a>
            <a href="#investimento" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Investimento</a>
            <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="mt-4 px-8 py-4 bg-amber-400 text-[#0B1121] text-sm font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">
              Falar com Engenheiro
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 px-6 overflow-hidden">
        <motion.video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ filter: useTransform(scrollY, [0, 300], ['blur(0px)', 'blur(10px)']) }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[#0B1121]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1121] to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <AnimatedLogo className="w-[800px] h-[800px] max-w-[150vw]" />
        </motion.div>
        
        <div className="z-10 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8 backdrop-blur-sm"
          >
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-wide uppercase">
              Potencialize seu patrimônio com energia solar
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1] font-manrope"
            data-text-reveal
          >
            <span className="word">Energia</span> <span className="word">Solar</span> <br/><span className="font-bold text-amber-400 word">NÃO</span> <span className="font-bold text-amber-400 word">É</span> <span className="font-bold text-amber-400 word">TUDO</span> <span className="font-bold text-amber-400 word">IGUAL.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed flex flex-col gap-2"
          >
            <p>Reduza sua conta de luz em até 90% e invista no que realmente importa.</p>
            <p className="font-medium text-slate-300">Eficiência que gera economia. Solução que traz tranquilidade.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3 }}
          >
            <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-[#0B1121] text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform active:scale-95">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Fazer Simulação Gratuita Agora</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
            01. Nossa Metodologia
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter font-manrope scroll-reveal">
            Nossa metodologia assegura:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: HardHat, title: 'Equipe de engenheiros especializados' },
            { icon: Ruler, title: 'Planejamento detalhado' },
            { icon: Award, title: 'Compromisso de qualidade comprovada' },
            { icon: Wrench, title: 'Assistência garantida contínua' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors group flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-white font-manrope stagger-item">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Authority & Differentials */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-dashed border-white/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
              02. Autoridade
            </span>
            <AnimatedText className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 font-manrope">
              +800 projetos entregues com excelência ao longo de 9 anos.
            </AnimatedText>
            <p className="text-lg text-slate-400 leading-relaxed">
              Somos uma das maiores empresas de engenharia do Nordeste, nascida com a missão de ser referência em tecnologia, segurança e comprometimento. Na N&A Engenharia, você não compra apenas placas solares; você tem o respaldo de engenheiros eletricistas altamente qualificados.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-6"
          >
            <div className="p-8 bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-6xl font-medium text-amber-400 tracking-tighter mb-2 font-manrope">+<Counter end={800} /></span>
              <span className="text-sm text-slate-400 uppercase tracking-widest font-bold font-mono">Projetos Entregues</span>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-6xl font-medium text-amber-400 tracking-tighter mb-2 font-manrope"><Counter end={9} duration={1.5} /> Anos</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest font-bold font-mono">De Excelência</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 md:p-12 bg-amber-400/5 border border-amber-400/20 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-medium text-white mb-2 font-manrope">Garantia Sem Burocracia</h3>
              <p className="text-slate-400">
                Seu inversor apresentou problema? Realizamos a troca imediata. Aqui, o seu sistema não para e o suporte pós-venda é contínuo.
              </p>
            </div>
            <ShieldCheck className="w-16 h-16 text-amber-400 opacity-80 shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="uppercase text-sm font-bold text-amber-400 tracking-widest font-mono">
                03. O Problema
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 font-manrope scroll-reveal">
              A conta de luz só aumenta a cada ano. Você vai continuar perdendo dinheiro?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Empresas e famílias inteligentes já descobriram que investir em energia solar não é um luxo, é matemática básica. Se você não gera a própria energia, está deixando na mesa um dinheiro que poderia ser o lucro da sua empresa ou o lazer da sua família.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: TrendingDown, title: 'Economia Real', desc: 'Redução de até 90% na sua fatura de energia.' },
              { icon: ShieldCheck, title: 'Previsibilidade', desc: 'Fique blindado contra os aumentos anuais e bandeiras tarifárias.' },
              { icon: Smartphone, title: 'Controle Total', desc: 'Monitoramento em tempo real da geração de energia direto do seu celular.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="p-3 bg-amber-400/10 border border-amber-400/20 text-amber-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 font-manrope stagger-item">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions & Technology */}
      <section id="solucoes" className="py-24 px-6 max-w-7xl mx-auto border-t border-dashed border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
            04. Soluções
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4 font-manrope scroll-reveal">
            Projetos sob medida para qualquer cenário.
          </h2>
          <p className="text-lg text-slate-400">
            Mora em apartamento? O telhado não suporta? Nós temos a solução ideal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { image: '/telhados.png', title: 'Instalação em Telhados', desc: 'Estruturas de fixação seguras e precisas, garantindo a melhor orientação para o máximo desempenho do sistema.' },
            { image: '/usina_solo.png', title: 'Usina em Solo (Geração Remota)', desc: 'Estrutura própria em aço galvanizado com alta resistência à torção e 30 anos de garantia. A energia é gerada em nossa usina e descontada direto na sua conta. Perfeito para apartamentos e empresas!' },
            { image: '/baterias.png', title: 'Armazenamento (Baterias)', desc: 'Guarde o excedente produzido durante o dia para usar à noite ou nos momentos de pico de consumo.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors group flex flex-col h-full"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-medium text-white mb-4 font-manrope stagger-item">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-auto">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment */}
      <section id="investimento" className="py-24 px-6 bg-white/[0.02] border-y border-dashed border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
              05. Investimento
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 font-manrope scroll-reveal">
              Facilitamos o seu acesso à economia. O sistema se paga sozinho!
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Somos conveniados com os principais bancos (Banco do Brasil, Bradesco, Santander e outros) para oferecer as melhores condições do mercado.
            </p>
            <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-400 text-[#0B1121] text-sm font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">
              Quero saber qual a melhor condição para mim
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              'Financiamento de 100% do projeto em até 120 vezes.',
              'Zero de entrada e carência de até 6 meses para começar a pagar.',
              'Parcelamento direto com a N&A em até 10x sem juros no boleto.',
              'Desconto especial e agressivo para pagamentos à vista.'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-[#0B1121] border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
                <span className="text-slate-300 font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
            06. Como Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter font-manrope scroll-reveal">
            Tecnologia de ponta, de forma simples.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10">
          {[
            { step: '01', title: 'Painéis Solares', desc: 'Captam a luz e geram a energia.' },
            { step: '02', title: 'Inversor Solar', desc: 'Converte a energia para o padrão usado na sua casa ou empresa.' },
            { step: '03', title: 'Cabos e Estruturas', desc: 'Conectam tudo com segurança extrema e durabilidade.' },
            { step: '04', title: 'Monitoramento', desc: 'Você acompanha a economia acontecendo em tempo real pelo aplicativo.' }
          ].map((item, i) => (
            <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors group">
              <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400 transition-colors mb-6 block">{item.step}</span>
              <h3 className="text-xl font-medium text-white mb-3 font-manrope">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sistemas em Funcionamento */}
      <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto border-t border-dashed border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
            07. Sistemas em Funcionamento
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter font-manrope scroll-reveal">
            Confira alguns de nossos projetos de sucesso.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: '/sousa-pb.png', city: 'Sousa - PB' },
            { src: '/aparecida-pb.png', city: 'Aparecida - PB' },
            { src: '/catole_do_rocha-pb.png', city: 'Catolé do Rocha - PB' },
            { src: '/sousa-pb-2.png', city: 'Sousa - PB' }
          ].map((item, i) => (
            <div key={i} className="relative overflow-hidden group aspect-[4/3] border border-white/10 hover:border-amber-400/30 transition-all">
              <Image
                src={item.src}
                alt={`Sistema de energia solar em ${item.city}`}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-base font-bold text-white">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer & Final CTA */}
      <footer className="border-t border-dashed border-white/10 bg-[#0B1121] pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8 font-manrope scroll-reveal">
            A sua economia de verdade está a um clique de distância.
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            O que você está esperando? Junte-se a centenas de empresas e famílias que já viram a economia acontecer. Fale com um de nossos engenheiros especialistas.
          </p>
          <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber-400 text-[#0B1121] text-lg font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">
            Solicitar Simulação Gratuita Pelo WhatsApp
          </a>
        </div>

        {/* Localização */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="uppercase text-sm font-bold text-amber-400 tracking-widest mb-4 block font-mono">
              08. Localização
            </span>
            <h3 className="text-3xl md:text-4xl font-medium text-white font-manrope">Venha nos visitar</h3>
          </div>
          <div className="w-full h-[450px] border border-white/10 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9334495982635!2d-38.23438732406471!3d-6.777954566285878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45b20368002d5%3A0xea61b970295cb22!2sN%20%26%20A%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1772399307047!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Logo className="w-10 h-10 rounded-sm overflow-hidden" />
                <div>
                  <div className="text-lg font-bold text-white tracking-tight font-comfortaa flex items-center">
                    N<span className="text-[10px] mx-0.5">&</span>A Engenharia
                  </div>
                  <div className="text-xs text-slate-500">Soluções Inteligentes em Energia Solar</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">Transformando energia solar em economia real para empresas e famílias.</p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/naengenharia" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-amber-400 hover:border-amber-400 transition-colors group">
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-[#0B1121] transition-colors" />
                </a>
                <a href="http://wa.me/5583991779547" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-amber-400 hover:border-amber-400 transition-colors group">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-[#0B1121] transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#metodologia" className="hover:text-amber-400 transition-colors">Metodologia</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">Soluções</a></li>
                <li><a href="#projetos" className="hover:text-amber-400 transition-colors">Projetos</a></li>
                <li><a href="#investimento" className="hover:text-amber-400 transition-colors">Investimento</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Sousa - PB</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>(83) 99177-9547</span>
                </li>
                <li className="flex items-start gap-2">
                  <Instagram className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>@naengenharia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} N&A Engenharia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="font-sans">desenvolvido por:</span>
            <a href="https://www.fluiconnect.com.br/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/flui.png" alt="Flui Connect" width={40} height={14} className="opacity-70" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
