import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Flame, Star, Sparkles, Clock, SlidersHorizontal, Check, Plus } from 'lucide-react';
import { PizzaItem, PizzaCategory } from '../types';
import { PIZZA_MENU } from '../data/pizzas';

interface MenuSectionProps {
  onSelectPizza: (pizza: PizzaItem) => void;
  onOpenContact: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectPizza, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<PizzaCategory | 'todas'>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);

  const categories: { id: PizzaCategory | 'todas'; label: string; icon?: React.ReactNode }[] = [
    { id: 'todas', label: 'Todas as Criações' },
    { id: 'especiais', label: 'Especiais da Forneria' },
    { id: 'tradicionais', label: 'Clássicos Napolitanos' },
    { id: 'doces', label: 'Pizzas Doces' },
    { id: 'bebidas', label: 'Bebidas & Vinhos' }
  ];

  const filteredPizzas = useMemo(() => {
    return PIZZA_MENU.filter((item) => {
      // Category filter
      if (activeCategory !== 'todas' && item.category !== activeCategory) {
        return false;
      }
      // Vegetarian filter
      if (vegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Popular filter
      if (popularOnly && !item.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchIng = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        return matchName || matchDesc || matchIng;
      }
      return true;
    });
  }, [activeCategory, searchQuery, vegetarianOnly, popularOnly]);

  return (
    <section id="cardapio" className="py-24 relative">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E31837]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-3">
              <Flame className="w-3.5 h-3.5 fill-[#FF6B35]" />
              <span>Cardápio Digital Interativo</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Nossas Pizzas & Seleção Autoral
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base max-w-xl">
              Todas as pizzas salgadas contam com massa maturada por 48 horas e assadas na lenha a 450°C. 
              Clique para personalizar tamanho, borda e adicionar ao pedido.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-stone-900 border border-hairline hover:border-[#E31837]/50 text-stone-200 text-xs sm:text-sm font-semibold transition-all"
            >
              Dúvidas ou Pedidos Especiais? Fale Conosco
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-stone-900/80 border border-hairline rounded-2xl p-4 sm:p-5 mb-10 shadow-warm-card backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-pepperoni text-white shadow-glow-sm'
                      : 'bg-stone-950 text-stone-300 hover:text-white border border-hairline'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input & Quick Toggles */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar sabor ou ingrediente..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#E31837]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setVegetarianOnly(!vegetarianOnly)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                    vegetarianOnly
                      ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                      : 'bg-stone-950 border-hairline text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Vegetarianas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPopularOnly(!popularOnly)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                    popularOnly
                      ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
                      : 'bg-stone-950 border-hairline text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Favoritas</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pizza Cards Grid */}
        {filteredPizzas.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/40 rounded-3xl border border-hairline">
            <p className="text-stone-400 text-base font-medium">
              Nenhuma pizza encontrada com esses filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('todas');
                setSearchQuery('');
                setVegetarianOnly(false);
                setPopularOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-stone-900 border border-hairline text-xs font-semibold text-amber-300 hover:text-white"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPizzas.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between rounded-3xl bg-stone-900/70 border border-hairline hover:border-[#E31837]/40 shadow-warm-card overflow-hidden transition-all duration-300"
              >
                <div>
                  {/* Image container with badges */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/10 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                      {item.isPopular && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E31837]/90 text-white text-[11px] font-bold shadow-sm backdrop-blur-sm">
                          <Flame className="w-3 h-3 fill-white" />
                          <span>Mais Pedida</span>
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-stone-950 text-[11px] font-extrabold shadow-sm backdrop-blur-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>Especial do Chef</span>
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-900/90 text-emerald-200 border border-emerald-500/30 text-[11px] font-semibold backdrop-blur-sm">
                          <span>Veggie</span>
                        </span>
                      )}
                    </div>

                    {/* Baking time indicator */}
                    {item.bakingTimeMinutes > 0 && (
                      <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-full bg-stone-950/80 border border-white/10 text-stone-300 text-[11px] font-medium flex items-center gap-1 backdrop-blur-md">
                        <Clock className="w-3 h-3 text-[#FF6B35]" />
                        <span>{item.bakingTimeMinutes} min de forno</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF6B35] block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-100 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Ingredients chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.ingredients.slice(0, 3).map((ing) => (
                        <span
                          key={ing}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-stone-950/80 text-stone-400 border border-hairline"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-stone-950/40 text-stone-500">
                          +{item.ingredients.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action & Price */}
                <div className="p-6 pt-0 border-t border-hairline/60 mt-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                      A partir de
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPizza(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-pepperoni hover:shadow-glow-sm text-white text-xs sm:text-sm font-bold tracking-wide active:scale-95 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Personalizar</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
