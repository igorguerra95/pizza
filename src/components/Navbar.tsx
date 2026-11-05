import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Menu, X, PhoneCall, ChevronRight, Clock, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Cardápio Digital', href: '#cardapio' },
    { name: 'Nossa Tradição', href: '#sobre' },
    { name: 'Entregas', href: '#entregas' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-glass shadow-warm-card border-b border-hairline py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-pepperoni flex items-center justify-center text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-amber-100 transition-colors">
                  TESTE
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#FF6B35]">
                  Pizzaria & Forneria
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-stone-300 hover:text-white transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E31837] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions: Cart & Primary CTA */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-stone-900/80 border border-hairline hover:border-[#E31837]/50 text-stone-200 hover:text-white transition-all flex items-center gap-2 group"
                aria-label="Ver sacola de pedidos"
              >
                <ShoppingBag className="w-5 h-5 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-xs font-semibold text-stone-300">Sacola</span>
                {totalCartItems > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#E31837] text-white text-[11px] font-bold flex items-center justify-center animate-bounce shadow-glow-sm">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Main CTA */}
              <button
                type="button"
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-pepperoni text-white text-sm font-semibold tracking-wide hover:shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-stone-900/90 border border-hairline text-stone-300 hover:text-white focus:outline-none"
                aria-label="Menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-stone-950/98 border-b border-hairline p-6 md:hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800/80">
                <div className="flex items-center gap-2 text-xs text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>Forno a Lenha Napolitano</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-400">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>Aberto às 18h</span>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-stone-200 hover:text-[#FF6B35] py-2 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-pepperoni text-white font-semibold text-sm shadow-glow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-900 border border-hairline text-stone-200 font-medium text-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-[#FF6B35]" />
                  <span>Ver Sacola ({totalCartItems})</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
