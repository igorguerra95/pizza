import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Pizzaria%20Teste.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-2 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-stone-900/95 border border-hairline shadow-2xl backdrop-blur-md text-xs text-stone-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Peça agora pelo WhatsApp</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-stone-500 hover:text-stone-300 ml-1"
              aria-label="Fechar dica"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Discrete Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white" />
      </motion.a>
    </div>
  );
};
