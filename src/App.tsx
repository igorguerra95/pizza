import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { DeliverySection } from './components/DeliverySection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomizeModal } from './components/CustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PizzaItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<PizzaItem | null>(null);

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      // Check if exact same item configuration exists
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.pizza.id === item.pizza.id &&
          ci.size.id === item.size.id &&
          ci.crust.id === item.crust.id &&
          ci.notes === item.notes
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const current = updated[existingIndex];
        const newQty = current.quantity + item.quantity;
        const unitPrice = current.totalPrice / current.quantity;
        updated[existingIndex] = {
          ...current,
          quantity: newQty,
          totalPrice: unitPrice * newQty
        };
        return updated;
      }

      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const unitPrice = item.totalPrice / item.quantity;
          return {
            ...item,
            quantity: newQty,
            totalPrice: unitPrice * newQty
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0d0c] text-stone-100 flex flex-col font-sans selection:bg-[#E31837] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={scrollToContact}
      />

      <main className="flex-1">
        {/* 1. Início / Hero */}
        <Hero
          onOpenContact={scrollToContact}
          onExploreMenu={scrollToMenu}
        />

        {/* Pillars / Highlights */}
        <Highlights />

        {/* 2. Cardápio Digital */}
        <MenuSection
          onSelectPizza={(pizza) => setSelectedPizza(pizza)}
          onOpenContact={scrollToContact}
        />

        {/* Sobre Nós / Tradição */}
        <AboutSection onOpenContact={scrollToContact} />

        {/* 3. Localização & Área de Entrega */}
        <DeliverySection onOpenContact={scrollToContact} />

        {/* Avaliações / Depoimentos */}
        <Testimonials />

        {/* 4. Contato, Pedidos & Reservas */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Customize Pizza Modal */}
      <CustomizeModal
        pizza={selectedPizza}
        onClose={() => setSelectedPizza(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
