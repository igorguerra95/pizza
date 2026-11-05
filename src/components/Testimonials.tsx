import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS } from '../data/pizzas';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-hairline bg-stone-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Opinião de Quem Ama Pizza</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Mais de 3.200 Clientes Encantados
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Veja o que dizem os apaixonados por gastronomia que experimentaram a nossa massa de fermentação lenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-stone-900/60 border border-hairline hover:border-[#E31837]/40 shadow-warm-card flex flex-col justify-between transition-all"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-700" />
                </div>

                <p className="text-stone-300 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-hairline"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-xs text-stone-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                    Favorita:
                  </span>
                  <span className="text-xs font-semibold text-[#FF6B35]">
                    {t.favoritePizza}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
