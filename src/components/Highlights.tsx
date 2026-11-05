import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, ShieldCheck, HeartHandshake, Wheat, ThermometerSun } from 'lucide-react';

export const Highlights: React.FC = () => {
  const pillars = [
    {
      icon: <Wheat className="w-6 h-6 text-[#FF6B35]" />,
      number: '01',
      title: 'Massa Viva de 48 Horas',
      description: 'Farinha italiana tipo 00 importada e maturação lenta a frio. Uma pizza de textura elástica, alvéolos gigantes e digestão incrivelmente leve.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      number: '02',
      title: 'San Marzano D.O.P.',
      description: 'Molho rústico preparado com tomates colhidos no sopé do Vesúvio. Doçura natural, baixa acidez e perfume inconfundível de manjericão fresco.'
    },
    {
      icon: <Flame className="w-6 h-6 text-[#E31837]" />,
      number: '03',
      title: 'Forno a Lenha a 450°C',
      description: 'Assamento flash em menos de 180 segundos na pedra refratária com lenha ecológica selecionada de eucalipto e macieira.'
    },
    {
      icon: <ThermometerSun className="w-6 h-6 text-emerald-400" />,
      number: '04',
      title: 'Caixa Térmica Anti-Vapor',
      description: 'Embalagem inteligente com microventilação controlada: o calor fica retido a 70°C, mas o vapor escapa para a borda não perder a crocância.'
    }
  ];

  return (
    <section className="py-20 relative border-y border-hairline bg-stone-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Nosso Compromisso com o Sabor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Por que cada fatia da Teste é inesquecível
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Combinamos técnicas seculares napolitanas a ingredientes frescos de pequenos produtores parceiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-stone-900/60 border border-hairline hover:border-[#E31837]/40 transition-all duration-300 shadow-warm-card group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-stone-950 border border-hairline flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <span className="font-display text-2xl font-black text-stone-700 group-hover:text-[#E31837]/50 transition-colors">
                  {pillar.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
