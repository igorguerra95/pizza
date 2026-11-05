import React from 'react';
import { motion } from 'motion/react';
import { Flame, ArrowRight, Sparkles, Clock, ShieldCheck, PhoneCall, Award } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreMenu }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E31837]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FF6B35]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-[#E31837]/30 text-xs font-semibold text-stone-200 mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31837] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]" />
              </span>
              <span className="tracking-wide text-amber-200">Fogo a Lenha • 450°C</span>
              <span className="text-stone-500">|</span>
              <span className="text-stone-300">Fermentação Natural 48h</span>
            </motion.div>

            {/* Magnetic Headline with clamp(48px, 6vw, 92px) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-extrabold tracking-[-0.035em] text-white leading-[1.04] mb-6"
            >
              A alquimia do <span className="text-gradient-pepperoni italic font-normal">fogo lento</span> e da massa viva.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Pizzas artesanais napolitanas maturadas por 48 horas com farinha pura tipo 00, 
              molho rústico de tomates San Marzano e queijos nobres derretidos no calor vivo da lenha.
            </motion.p>

            {/* CTAs Staggered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-pepperoni text-white text-base font-bold tracking-wide shadow-glow-sm hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-stone-900/90 border border-hairline text-stone-200 text-base font-semibold hover:bg-stone-800/90 hover:text-white hover:border-stone-600 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                <span>Ver Cardápio Digital</span>
              </button>
            </motion.div>

            {/* Micro-Stats / Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-hairline w-full max-w-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-hairline flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">4.9 / 5.0</div>
                  <div className="text-xs text-stone-400">+3.200 avaliações</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-hairline flex items-center justify-center text-[#FF6B35]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">30–45 min</div>
                  <div className="text-xs text-stone-400">Entrega expressa</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-hairline flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Crocância 100%</div>
                  <div className="text-xs text-stone-400">Caixa térmica respiro</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E31837]/30 to-[#FF6B35]/25 rounded-full filter blur-3xl transform scale-90" />

            {/* Main Showcase Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-stone-700/60 animate-[spin_60s_linear_infinite]" />

              {/* Pizza Image Card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
                  alt="Pizza artesanal assada em forno a lenha"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 pointer-events-none" />

                {/* Bottom Card Ribbon */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-glass-card border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FF6B35]">
                        Destaque da Forneria
                      </span>
                      <h3 className="font-display text-lg font-bold text-white">
                        Pepperoni & Mel de Pimenta
                      </h3>
                      <p className="text-xs text-stone-300">Lenha de macieira • Borda alveolada</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-stone-400 line-through">R$ 89,00</div>
                      <div className="text-lg font-extrabold text-amber-300">R$ 79,00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Wood Fire */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-stone-950/95 border border-hairline-accent shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E31837]/20 flex items-center justify-center text-[#E31837]">
                  <Flame className="w-5 h-5 fill-[#E31837]" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 font-medium">Lenha Nobre</div>
                  <div className="text-xs font-bold text-white">Forno a 450°C</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Natural Fermentation */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-stone-950/95 border border-hairline shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <span className="text-xs font-extrabold">48h</span>
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 font-medium">Massa Viva</div>
                  <div className="text-xs font-bold text-emerald-300">Digestão Leve</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
