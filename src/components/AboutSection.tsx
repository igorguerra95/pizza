import React from 'react';
import { motion } from 'motion/react';
import { Flame, Award, Heart, CheckCircle2, UtensilsCrossed, Sparkles } from 'lucide-react';
import { STATS_ITEMS } from '../data/pizzas';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-stone-950/80 border-t border-hairline">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E31837]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Chef and Oven */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=80"
                alt="Pizzaiolo preparando massa artesanal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-glass-card border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-pepperoni flex items-center justify-center text-white shrink-0 shadow-glow-sm">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      Tradição no Fogo Vivo
                    </h4>
                    <p className="text-xs text-stone-300">
                      Massa viva aberta à mão no semolado, sem rolo e sem pressa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-2xl bg-stone-900 border border-hairline shadow-2xl backdrop-blur-lg flex-col items-center gap-1 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-white text-base">Receita Autoral</span>
              <span className="text-[11px] text-stone-400">Certificação de Origem</span>
            </motion.div>
          </div>

          {/* Right Column: Narrative Storytelling & Big Stats */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-4">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Nossa História & Filosofia</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              O tempo como ingrediente principal da nossa massa.
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                A <strong className="text-white font-semibold">Pizzaria Teste</strong> nasceu da obsessão por resgatar a verdadeira essência da pizza napolitana, onde o tempo não é apressado. Enquanto a maioria das pizzarias usa fermentos químicos e fermentação acelerada de poucas horas, aqui nossa massa descansa em ambiente controlado por <strong className="text-amber-300">48 a 72 horas</strong>.
              </p>
              <p>
                Esse processo transforma os açúcares complexos e quebra o glúten, resultando em uma massa com alvéolos arejados, borda alta e crocante, e uma digestão tão suave que você termina de comer sentindo-se revigorado, nunca pesado.
              </p>
            </div>

            {/* Key Advantages bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-10">
              {[
                'Farinha italiana tipo 00 com alto teor proteico',
                'Molho com tomates San Marzano frescos sem aditivos',
                'Queijo fior di latte fresco de produtores locais',
                'Lenha de reflorestamento com queima limpa e perfumada'
              ].map((adv) => (
                <div key={adv} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid with Big Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-hairline">
              {STATS_ITEMS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-4 rounded-2xl bg-stone-900/60 border border-hairline text-left"
                >
                  <div className="font-display text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5 leading-tight">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
