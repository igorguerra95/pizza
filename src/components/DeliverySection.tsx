import React from 'react';
import { motion } from 'motion/react';
import { Bike, ShieldCheck, ThermometerSun, Clock, Navigation, CheckCircle, PhoneCall } from 'lucide-react';

interface DeliverySectionProps {
  onOpenContact: () => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({ onOpenContact }) => {
  const deliveryFeatures = [
    {
      icon: <ThermometerSun className="w-6 h-6 text-[#FF6B35]" />,
      title: 'Aquecida a Mais de 70°C',
      description: 'Caixas com tecnologia de microrespiro térmico que isolam a temperatura sem criar vapor condensado. A pizza chega com o queijo borbulhante e a borda estalando.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: 'Entrega Expressa em 30–45 min',
      description: 'Logística inteligente conectada diretamente ao painel do forno. A pizza sai da pedra refratária diretamente para a bag térmica do entregador.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Lacre de Segurança Inviolável',
      description: 'Todas as caixas saem com lacre adesivo numerado e selo de temperatura para que você tenha total garantia de higiene e integridade.'
    },
    {
      icon: <Bike className="w-6 h-6 text-purple-400" />,
      title: 'Raio Amplo & Retirada Express',
      description: 'Entregamos em todos os bairros centrais e adjacentes. Se preferir retirar na forneria, seu pedido fica pronto em apenas 20 minutos.'
    }
  ];

  return (
    <section id="localizacao" className="py-24 relative border-t border-hairline bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Área de Cobertura & Entregas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            A mesma crocância do salão, onde você estiver.
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Desenvolvemos um processo logístico exclusivo para que o calor da lenha chegue intacto à sua mesa.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-stone-900/60 border border-hairline hover:border-[#E31837]/40 shadow-warm-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-950 border border-hairline flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Delivery Timeline / Flow */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-hairline p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-950 border border-[#E31837] text-white flex items-center justify-center font-display font-bold shrink-0">
                1
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Você escolhe no cardápio</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Monte sua pizza com seu tamanho preferido, borda e ingredientes pelo nosso cardápio digital ou WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-950 border border-[#FF6B35] text-white flex items-center justify-center font-display font-bold shrink-0">
                2
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Assamento a 450°C</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  O pizzaiolo abre a massa à mão e assa na pedra refratária viva em menos de 3 minutos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-950 border border-emerald-500 text-white flex items-center justify-center font-display font-bold shrink-0">
                3
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Chegada quente e crocante</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Entregador com bag térmica selada chega no seu endereço em até 45 minutos com máquina de cartão ou Pix.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-stone-200">
                Forno em operação: pedidos abertos para entrega e retirada
              </span>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-pepperoni text-white text-sm font-bold shadow-glow-sm hover:shadow-glow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
