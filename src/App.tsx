/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  Mail, 
  ArrowRight, 
  Star,
  Clock,
  ChevronDown
} from 'lucide-react';

// --- Components ---

const ScarcityBar = () => (
  <div className="bg-brand-hot text-white py-2 px-4 text-center text-sm font-bold relative z-50 shadow-md">
    <motion.p
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ⚠️ ATENÇÃO: Últimas vagas com acesso promocional liberado hoje!
    </motion.p>
  </div>
);

const ImageCarousel = () => {
  const images = [
    "https://i.postimg.cc/Jh3BQ63d/a104888c7e0d07e142bdabae3d0310c1.jpg",
    "https://i.postimg.cc/G3gTzsDV/55f12deb4ca1eba558364f8e6a8dacc0.jpg",
    "https://i.postimg.cc/TYZLvMt6/ec48de9c3d1dae68950821ffa28c5c8e.jpg",
    "https://i.postimg.cc/FF610X5S/92ccc2399c89876cba285a46c146c78c.jpg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-brand-hot' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Preciso ter experiência anterior?", a: "Não! O curso foi desenhado do absoluto zero até o nível avançado. Você aprenderá cada nó passo a passo." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá os links de acesso via WhatsApp e no seu e-mail cadastrado." },
    { q: "Quais materiais vou precisar?", a: "No início, apenas cordões de algodão e uma tesoura. Dentro do curso, damos a lista completa de fornecedores e materiais premium." },
    { q: "O acesso é vitalício?", a: "Sim! Uma vez adquirido, o curso é seu para sempre. Você pode assistir às aulas no seu ritmo, quantas vezes quiser." },
    { q: "Tenho suporte para dúvidas?", a: "Com certeza! Temos um canal exclusivo para alunas onde você pode tirar todas as suas dúvidas diretamente conosco." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-light/30 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-brand-light/5 hover:bg-brand-light/10 transition-colors"
              >
                <span className="font-bold text-gray-800">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                >
                  <ChevronDown size={20} className="text-brand-hot" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 bg-brand-light/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreatorProfile = () => (
  <section className="py-20 px-6 bg-brand-light/5">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://i.postimg.cc/655J6y1V/36ccdaa501519fde98a7c15e3ae58bb8.jpg" 
              alt="Dona Helena - Criadora do Curso" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-brand-hot text-white p-4 rounded-2xl shadow-xl hidden md:block">
            <p className="text-xl font-serif">+30 Anos</p>
            <p className="text-[10px] uppercase tracking-widest opacity-80">De Experiência</p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Conheça sua Mentora</h2>
          <h3 className="text-xl text-brand-hot font-bold">Dona Helena, Mestra em Macramê</h3>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              "Olá, eu sou a Helena. Dediquei mais de três décadas da minha vida à arte dos nós. O que começou como um hobby para acalmar a mente, transformou-se em uma paixão que decorou centenas de casas de luxo pelo Brasil."
            </p>
            <p>
              Minha missão hoje é passar adiante todo o conhecimento que acumulei, mostrando que o artesanato refinado não é apenas uma terapia, mas uma fonte de renda digna e próspera para mulheres de todas as idades.
            </p>
            <p className="font-serif italic text-gray-900">
              "Espero você dentro do curso para criarmos juntas algo extraordinário."
            </p>
          </div>
        </div>
      </div>

      {/* 30-Day Guarantee Seal */}
      <div className="pt-12 border-t border-brand-light/30 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        <div className="relative">
          <div className="w-32 h-32 bg-brand-hot rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
            <div className="w-28 h-28 border-2 border-dashed border-white/50 rounded-full flex flex-col items-center justify-center text-white">
              <span className="text-3xl font-bold leading-none">30</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Dias de</span>
              <span className="text-xs font-bold uppercase">Garantia</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-white text-brand-hot p-1 rounded-full shadow-md">
            <ShieldCheck size={24} />
          </div>
        </div>
        <div className="max-w-xl">
          <h4 className="text-2xl font-serif text-gray-900 mb-2">Risco Zero para Você!</h4>
          <p className="text-gray-600">
            Eu confio tanto no meu método que te dou <span className="font-bold text-brand-hot">30 dias de garantia incondicional</span>. Se por qualquer motivo você achar que o curso não é para você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhatsAppCarousel = () => {
  const testimonials = [
    { name: "Juliana", text: "Eu não sabia NADA e já vendi minha primeira peça 😍", time: "14:20" },
    { name: "Carla", text: "Fiz uma peça simples e vendi por 180 reais 😳", time: "16:45" },
    { name: "Amanda", text: "É surreal o valor que as pessoas pagam, tô chocada!", time: "10:12" },
    { name: "Renata", text: "Minha sala ficou maravilhosa com o painel que fiz!", time: "09:30" },
    { name: "Sônia", text: "O suporte é maravilhoso, tiraram todas as minhas dúvidas.", time: "11:15" },
    { name: "Bia", text: "Já estou aceitando encomendas para o Natal! 🎄", time: "15:40" }
  ];

  return (
    <div className="overflow-hidden py-10 relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-light/5 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-light/5 to-transparent z-10" />
      
      <motion.div 
        className="flex gap-6"
        animate={{ x: [0, -1824] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div 
            key={i} 
            className="bg-[#DCF8C6] p-4 rounded-2xl shadow-sm border border-black/5 min-w-[280px] max-w-[280px] relative flex-shrink-0"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-[#075E54] text-sm">{t.name}</span>
            </div>
            <p className="text-gray-800 text-sm whitespace-normal mb-2">{t.text}</p>
            <div className="flex justify-end items-center gap-1 opacity-40">
              <span className="text-[10px]">{t.time}</span>
              <Check size={12} className="text-blue-500" />
              <Check size={12} className="text-blue-500 -ml-2" />
            </div>
            {/* WhatsApp bubble tail */}
            <div className="absolute top-0 -right-2 w-4 h-4 bg-[#DCF8C6] clip-path-bubble-tail" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-hot">
      <ScarcityBar />

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 px-6 overflow-hidden bg-gradient-to-b from-brand-light/30 to-white">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-gray-900">
              Aprenda a Criar Peças de Macramê com <span className="text-brand-hot italic">Aparência de Luxo</span> e Venda Cada Unidade por Até 10x o Valor do Custo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10">
              Sem experiência, sem máquinas caras e sem precisar ser artesã profissional. Transforme fios em peças que parecem de loja de alto padrão.
            </p>
            <a href="#ofertas" className="cta-button inline-block text-lg">
              QUERO COMEÇAR AGORA
            </a>
          </motion.div>
        </div>
      </header>

      {/* Desire Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Imagine criar peças incríveis com suas próprias mãos...</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Postar nas redes sociais e começar a receber mensagens todos os dias de pessoas querendo comprar.</p>
                <div className="pl-4 border-l-4 border-brand-light italic space-y-2">
                  <p>“Você faz sob encomenda?”</p>
                  <p>“Qual o valor?”</p>
                  <p>“Quero um igual!”</p>
                </div>
                <p className="font-medium text-gray-900">
                  E o melhor: Você não vende barato... você vende como produto de decoração de luxo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <ImageCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="py-20 px-6 bg-brand-light/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-serif mb-16">O Que Você Vai Aprender</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Técnicas do Zero ao Avançado", desc: "Domine todos os nós e tramas, mesmo que nunca tenha tocado em um fio." },
              { title: "Aparência Premium", desc: "O segredo para suas peças não parecerem 'artesanato comum', mas sim decoração de luxo." },
              { title: "Valor Percebido", desc: "Combinações de materiais e cores que fazem o cliente querer pagar mais." },
              { title: "Decoração de Luxo", desc: "Como transformar algo simples em uma peça central de ambientes sofisticados." },
              { title: "Venda e Precificação", desc: "Aprenda a cobrar o valor justo e ter margens de lucro de até 1000%." },
              { title: "Atração de Clientes", desc: "Como se posicionar no mercado e atrair o público que valoriza o luxo." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-brand-hot/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-brand-hot" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 px-6 bg-white border-y border-brand-light/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Zap size={16} /> ACESSO IMEDIATO APÓS O PAGAMENTO
          </div>
          <h2 className="text-3xl font-serif mb-8">Receba Tudo no Seu Celular</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 bg-brand-light/5 rounded-2xl border border-brand-light/20">
              <div className="bg-green-500 p-3 rounded-xl text-white">
                <MessageCircle />
              </div>
              <div className="text-left">
                <p className="font-bold">WhatsApp</p>
                <p className="text-sm text-gray-500">Acesso completo via Whats</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-brand-light/5 rounded-2xl border border-brand-light/20">
              <div className="bg-blue-500 p-3 rounded-xl text-white">
                <Mail />
              </div>
              <div className="text-left">
                <p className="font-bold">E-mail</p>
                <p className="text-sm text-gray-500">Cópia enviada para seu e-mail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-brand-light/5 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">O Que Nossas Alunas Estão Dizendo...</h2>
          <p className="text-gray-600 mb-8">Mensagens reais enviadas em nosso grupo exclusivo</p>
          <WhatsAppCarousel />
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center font-serif mb-16">Escolha Seu Plano</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-stretch">
            {/* Premium Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col p-6 md:p-8 rounded-3xl border-2 border-brand-hot bg-white relative shadow-2xl shadow-brand-hot/20 md:scale-105 z-10 w-full"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-hot text-white px-6 py-1 rounded-full text-sm font-bold tracking-wider">
                MAIS VENDIDO + ACESSO VITALÍCIO
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Acesso Completo + Bônus</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-lg">R$</span>
                  <span className="text-5xl font-bold text-gray-900">37,90</span>
                </div>
                <p className="text-brand-hot font-bold text-sm mt-2">Pague uma única vez</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <Check className="text-brand-hot" size={20} /> Passo a passo (do zero ao avançado)
                </li>
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <Check className="text-brand-hot" size={20} /> Técnicas de Macramê de Luxo
                </li>
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <Check className="text-brand-hot" size={20} /> Estratégias de Venda e Precificação
                </li>
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <Check className="text-brand-hot" size={20} /> Como atrair clientes todos os dias
                </li>
                <li className="pt-4 border-t border-brand-light/30">
                  <p className="text-xs font-bold text-brand-hot mb-3 uppercase tracking-widest">🎁 Bônus Exclusivos:</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <Star size={14} className="text-brand-hot fill-brand-hot" /> Modelos das peças mais vendidas
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <Star size={14} className="text-brand-hot fill-brand-hot" /> Guia de Precificação Premium
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <Star size={14} className="text-brand-hot fill-brand-hot" /> Venda pelo Instagram
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <Star size={14} className="text-brand-hot fill-brand-hot" /> Lista de Fornecedores
                    </li>
                  </ul>
                </li>
              </ul>
              <a 
                href="https://go.disruptybr.com.br/rfz9hww7pq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button w-full text-lg block"
              >
                QUERO ACESSO VITALÍCIO
              </a>
            </motion.div>

            {/* Basic Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col p-8 rounded-3xl border-2 border-gray-100 bg-white opacity-80"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Acesso Essencial</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-lg">R$</span>
                  <span className="text-5xl font-bold text-gray-900">10</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-green-500" size={20} /> Passo a passo básico
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-green-500" size={20} /> Primeiras peças simples
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-green-500" size={20} /> Introdução ao macramê
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X size={20} /> Sem estratégias de venda
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X size={20} /> Sem bônus exclusivos
                </li>
              </ul>
              <a 
                href="https://go.disruptybr.com.br/fzvsx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-bold border-2 border-brand-hot text-brand-hot hover:bg-brand-hot hover:text-white transition-colors text-center block"
              >
                QUERO COMEÇAR AGORA
              </a>
            </motion.div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <ShieldCheck className="text-green-500" />
              <span className="text-sm">Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Table */}
      <section className="py-20 px-6 bg-[#FFF5F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-serif mb-12">Sua Transformação Começa Aqui</h2>
          <div className="overflow-hidden rounded-3xl border border-brand-light/30 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-light/30">
                  <th className="p-6 font-serif text-gray-500 uppercase tracking-widest text-base font-bold">HOJE</th>
                  <th className="p-6 font-serif text-brand-hot uppercase tracking-widest text-lg font-bold bg-white/50">DEPOIS DO CURSO</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-brand-light/10">
                {[
                  ["Sem renda extra", "Ganhando com peças artesanais"],
                  ["Não sabe por onde começar", "Seguindo um método claro"],
                  ["Faz peças simples", "Cria peças de alto valor"],
                  ["Vende barato", "Cobra como decoração de luxo"],
                  ["Sem clientes", "Recebendo pedidos constantemente"]
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 text-gray-500 border-r border-brand-light/10">{row[0]}</td>
                    <td className="p-6 text-gray-900 font-medium flex items-center gap-2">
                      <Check size={16} className="text-brand-hot" /> {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CreatorProfile />

      <FAQ />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Você pode continuar sem saber por onde começar... ou pode começar hoje e transformar isso em renda real.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#ofertas" className="cta-button inline-flex items-center gap-3 text-xl px-12 py-6">
              👉 QUERO COMEÇAR AGORA <ArrowRight />
            </a>
          </motion.div>
          <div className="mt-12 flex items-center justify-center gap-8 opacity-50">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="text-sm font-medium">Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-sm font-medium">Compra 100% Segura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 text-center text-gray-400 text-xs border-t border-gray-100">
        <p className="mb-4">© 2026 Macramê de Luxo. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-brand-hot transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-brand-hot transition-colors">Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
