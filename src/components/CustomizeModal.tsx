import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flame, Check, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { PizzaItem, PizzaSizeOption, CrustOption, CartItem } from '../types';
import { PIZZA_SIZES, CRUST_OPTIONS } from '../data/pizzas';

interface CustomizeModalProps {
  pizza: PizzaItem | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({ pizza, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<PizzaSizeOption>(PIZZA_SIZES[1]); // Média default
  const [selectedCrust, setSelectedCrust] = useState<CrustOption>(CRUST_OPTIONS[0]); // Tradicional default
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  if (!pizza) return null;

  // Calculates unit price based on multiplier and crust extra
  const unitPrice = (pizza.price * selectedSize.priceMultiplier) + selectedCrust.extraPrice;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItem: CartItem = {
      cartItemId: `${pizza.id}-${selectedSize.id}-${selectedCrust.id}-${Date.now()}`,
      pizza,
      size: selectedSize,
      crust: selectedCrust,
      quantity,
      notes: notes.trim(),
      totalPrice
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-stone-900 border border-hairline rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
            
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-white border border-hairline transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs uppercase tracking-wider font-bold text-[#FF6B35]">
                {pizza.tagline}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5">
                {pizza.name}
              </h3>
            </div>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <p className="text-sm text-stone-300 leading-relaxed">
              {pizza.description}
            </p>

            {/* Ingredients Tags */}
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Ingredientes selecionados:
              </span>
              <div className="flex flex-wrap gap-2">
                {pizza.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs px-2.5 py-1 rounded-lg bg-stone-950 border border-hairline text-stone-300"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Choose Size */}
            {pizza.category !== 'bebidas' && (
              <div>
                <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-3">
                  1. Escolha o Tamanho da Pizza:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PIZZA_SIZES.map((size) => {
                    const priceForSize = pizza.price * size.priceMultiplier;
                    const isSelected = selectedSize.id === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-stone-950 border-[#E31837] shadow-glow-sm'
                            : 'bg-stone-950/60 border-hairline hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-white">{size.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#E31837]" />}
                        </div>
                        <div className="text-xs text-stone-400">{size.cm} • {size.slices}</div>
                        <div className="text-xs font-bold text-amber-300 mt-2">
                          R$ {priceForSize.toFixed(2).replace('.', ',')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Choose Crust */}
            {pizza.category !== 'bebidas' && (
              <div>
                <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-3">
                  2. Escolha o Tipo de Borda:
                </label>
                <div className="space-y-2">
                  {CRUST_OPTIONS.map((crust) => {
                    const isSelected = selectedCrust.id === crust.id;
                    return (
                      <button
                        key={crust.id}
                        type="button"
                        onClick={() => setSelectedCrust(crust)}
                        className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-stone-950 border-[#E31837]/80'
                            : 'bg-stone-950/50 border-hairline hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-[#E31837] bg-[#E31837]'
                                : 'border-stone-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="text-sm font-medium text-stone-200">{crust.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-stone-300">
                          {crust.extraPrice === 0
                            ? 'Inclusa'
                            : `+ R$ ${crust.extraPrice.toFixed(2).replace('.', ',')}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Notes */}
            <div>
              <label htmlFor="notes-input" className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Observações para a cozinha (opcional):
              </label>
              <input
                id="notes-input"
                type="text"
                placeholder="Ex: sem cebola, cortar em 12 fatias, mais manjericão..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:border-[#E31837]"
              />
            </div>
          </div>

          {/* Footer with Quantity & Add Button */}
          <div className="p-6 bg-stone-950 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            {/* Quantity Controller */}
            <div className="flex items-center gap-3 bg-stone-900 border border-hairline px-3 py-1.5 rounded-xl">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 rounded-lg text-stone-400 hover:text-white transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-white text-base min-w-[24px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 rounded-lg text-stone-400 hover:text-white transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              type="button"
              onClick={handleAdd}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-pepperoni text-white font-bold text-sm tracking-wide shadow-glow-sm hover:shadow-glow-lg transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar ao Pedido • R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
