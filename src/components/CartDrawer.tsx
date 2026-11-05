import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, MessageCircle, Bike, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [customerName, setCustomerName] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = subtotal > 120 || subtotal === 0 ? 0 : 8.0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsText = '';
    cart.forEach((item, idx) => {
      itemsText += `${idx + 1}. *${item.pizza.name}* (${item.size.name} - ${item.size.slices})%0A`;
      if (item.crust.name) itemsText += `   • Borda: ${item.crust.name}%0A`;
      if (item.notes) itemsText += `   • Obs: ${item.notes}%0A`;
      itemsText += `   • Qtd: ${item.quantity}x | R$ ${item.totalPrice.toFixed(2).replace('.', ',')}%0A%0A`;
    });

    const paymentLabel = paymentMethod === 'pix' ? 'Pix (5% desc.)' : paymentMethod === 'cartao' ? 'Cartão na Entrega' : 'Dinheiro';

    const message = `Olá, Pizzaria Teste! 🍕 Gostaria de fechar meu pedido:%0A%0A*ITENS:*%0A${itemsText}*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}%0A*Taxa de Entrega:* ${deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}%0A*TOTAL:* R$ ${grandTotal.toFixed(2).replace('.', ',')}%0A%0A*Nome do Cliente:* ${encodeURIComponent(customerName || 'Cliente')}%0A*Endereço de Entrega:* ${encodeURIComponent(address || 'A combinar')}%0A*Forma de Pagamento:* ${encodeURIComponent(paymentLabel)}`;

    const url = `https://wa.me/5511999999999?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-stone-950 border-l border-hairline shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-hairline flex items-center justify-between bg-stone-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-pepperoni flex items-center justify-center text-white shadow-glow-sm">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Sacola de Pedidos
                    </h3>
                    <p className="text-xs text-stone-400">
                      {cart.length} {cart.length === 1 ? 'item selecionado' : 'itens selecionados'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Fechar sacola"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 rounded-2xl bg-stone-900 border border-hairline flex items-center justify-center text-stone-600 mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      Sua sacola está vazia
                    </h4>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto mb-6 leading-relaxed">
                      Explore nosso cardápio de pizzas artesanais e escolha as suas favoritas para entrega rápida.
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-gradient-pepperoni text-white text-xs font-bold shadow-glow-sm"
                    >
                      Ver Cardápio
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between pb-2 border-b border-hairline">
                      <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                        Itens do seu pedido
                      </span>
                      <button
                        type="button"
                        onClick={onClearCart}
                        className="text-xs text-stone-500 hover:text-[#E31837] flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Esvaziar</span>
                      </button>
                    </div>

                    {cart.map((item) => (
                      <div
                        key={item.cartItemId}
                        className="p-4 rounded-2xl bg-stone-900/60 border border-hairline flex flex-col gap-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <img
                            src={item.pizza.image}
                            alt={item.pizza.name}
                            className="w-14 h-14 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-white text-sm truncate">
                              {item.pizza.name}
                            </h5>
                            <p className="text-xs text-stone-400">
                              {item.size.name} • {item.size.slices}
                            </p>
                            <p className="text-[11px] text-[#FF6B35]">
                              {item.crust.name}
                            </p>
                            {item.notes && (
                              <p className="text-[10px] text-stone-400 italic mt-0.5">
                                Obs: {item.notes}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartItemId)}
                            className="text-stone-500 hover:text-[#E31837] p-1 transition-colors"
                            aria-label="Remover item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-hairline/60">
                          {/* Quantity control */}
                          <div className="flex items-center gap-2 bg-stone-950 px-2 py-1 rounded-lg border border-hairline">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                              className="text-stone-400 hover:text-white p-0.5"
                              aria-label="Reduzir quantidade"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-white min-w-[16px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                              className="text-stone-400 hover:text-white p-0.5"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-bold text-amber-300 text-sm">
                            R$ {item.totalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Customer details for delivery */}
                    <div className="pt-4 space-y-3">
                      <div>
                        <label htmlFor="drawer-name" className="text-xs font-medium text-stone-300 block mb-1">
                          Seu Nome
                        </label>
                        <input
                          id="drawer-name"
                          type="text"
                          placeholder="Como podemos te chamar?"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-hairline text-stone-100 placeholder-stone-600 text-xs focus:outline-none focus:border-[#E31837]"
                        />
                      </div>

                      <div>
                        <label htmlFor="drawer-address" className="text-xs font-medium text-stone-300 block mb-1">
                          Endereço Completo de Entrega
                        </label>
                        <input
                          id="drawer-address"
                          type="text"
                          placeholder="Rua, Número, Bairro e Complemento"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-hairline text-stone-100 placeholder-stone-600 text-xs focus:outline-none focus:border-[#E31837]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-stone-300 block mb-1">
                          Forma de Pagamento
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'pix', label: 'Pix' },
                            { id: 'cartao', label: 'Cartão' },
                            { id: 'dinheiro', label: 'Dinheiro' }
                          ].map((pm) => (
                            <button
                              key={pm.id}
                              type="button"
                              onClick={() => setPaymentMethod(pm.id)}
                              className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                                paymentMethod === pm.id
                                  ? 'bg-[#E31837] text-white border-transparent'
                                  : 'bg-stone-900 border-hairline text-stone-400'
                              }`}
                            >
                              {pm.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Checkout Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-stone-900 border-t border-hairline space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Subtotal</span>
                      <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span className="flex items-center gap-1">
                        <Bike className="w-3.5 h-3.5" />
                        <span>Taxa de Entrega</span>
                      </span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-emerald-400 font-bold">Grátis (acima de R$ 120)</span>
                        ) : (
                          `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-hairline">
                      <span>Total Geral</span>
                      <span className="text-amber-300 text-base">
                        R$ {grandTotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckoutWhatsApp}
                    className="w-full py-3.5 rounded-xl bg-gradient-pepperoni text-white font-bold text-sm tracking-wide shadow-glow-sm hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Entrar em contato via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-stone-400 text-center">
                    🚀 Tempo médio de entrega: 30 a 45 minutos quentinha na sua casa.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
