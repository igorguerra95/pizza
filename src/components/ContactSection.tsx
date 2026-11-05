import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { FAQS } from '../data/pizzas';

interface ContactSectionProps {
  onSuccessOrder?: (summary: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'delivery',
    neighborhood: '',
    guestsCount: '2',
    preferredTime: '19:30',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Build WhatsApp message
    const orderTypeLabel = formData.type === 'delivery' 
      ? 'Pedido para Delivery' 
      : formData.type === 'retirada' 
        ? 'Retirada no Balcão' 
        : `Reserva de Mesa (${formData.guestsCount} pessoas)`;

    const text = `Olá, Equipe Teste Pizzaria!%0A%0A*Gostaria de entrar em contato:*%0A• *Nome:* ${encodeURIComponent(formData.name)}%0A• *Telefone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A• *Tipo:* ${encodeURIComponent(orderTypeLabel)}%0A• *Bairro:* ${encodeURIComponent(formData.neighborhood || 'A combinar')}%0A• *Horário Desejado:* ${encodeURIComponent(formData.preferredTime)}%0A• *Mensagem:* ${encodeURIComponent(formData.message || 'Gostaria de fazer meu pedido / tirar dúvidas')}%0A%0A_Enviado pelo site oficial da Pizzaria Teste._`;

    // Open WhatsApp in new tab or show submitted card
    setSubmitted(true);
    const whatsappUrl = `https://wa.me/5511999999999?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 relative border-t border-hairline bg-stone-950">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#E31837]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-hairline text-xs font-semibold text-[#FF6B35] mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Atendimento Rápido & Reservas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Fale com Nossos Pizzaiolos
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Faça seu pedido personalizado, reserve sua mesa ou tire dúvidas em poucos cliques. 
            Nossa equipe responde imediatamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-hairline space-y-6">
              <h3 className="font-display text-xl font-bold text-white">
                Canais de Atendimento
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-pepperoni flex items-center justify-center text-white shrink-0 shadow-glow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">WhatsApp Direto</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Envie mensagem para atendimento instantâneo com nossa equipe
                  </p>
                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20Pizzaria%20Teste!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] hover:text-white transition-colors mt-2"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-950 border border-hairline flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Horários do Forno a Lenha</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Terça a Domingo: das 18h00 às 23h45<br />
                    Sextas e Sábados: até às 00h30
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    ● Forno em pleno funcionamento hoje
                  </span>
                </div>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-hairline">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Perguntas Frequentes
              </h3>
              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.question}
                      className="border border-hairline rounded-xl overflow-hidden bg-stone-950/40"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-200 hover:text-white transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#FF6B35] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-stone-400 leading-relaxed border-t border-hairline/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Order / Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-stone-900/80 border border-hairline shadow-2xl relative">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                    Formulário Direto
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    Entrar em Contato & Fazer Pedido
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-stone-950 border border-hairline flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Solicitação Encaminhada!
                  </h4>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Você foi direcionado ao nosso WhatsApp com todos os detalhes prontos. Caso a janela não tenha aberto, clique no botão abaixo para conversar:
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-pepperoni text-white text-sm font-bold shadow-glow-sm hover:shadow-glow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir WhatsApp da Pizzaria Teste</span>
                  </a>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-stone-500 hover:text-stone-300 underline mt-4"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Order Type Toggle */}
                  <div>
                    <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-2">
                      Tipo de Atendimento:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'delivery', label: 'Entrega Delivery' },
                        { id: 'retirada', label: 'Retirar no Balcão' },
                        { id: 'reserva', label: 'Reservar Mesa' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: item.id })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                            formData.type === item.id
                              ? 'bg-gradient-pepperoni text-white border-transparent shadow-glow-sm'
                              : 'bg-stone-950/80 border-hairline text-stone-400 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="text-xs font-medium text-stone-300 block mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:border-[#E31837]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone-input" className="text-xs font-medium text-stone-300 block mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:border-[#E31837]"
                      />
                    </div>
                  </div>

                  {/* Neighborhood or Table reservation details */}
                  {formData.type === 'reserva' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="guests-select" className="text-xs font-medium text-stone-300 block mb-1.5">
                          Número de Convidados
                        </label>
                        <select
                          id="guests-select"
                          value={formData.guestsCount}
                          onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 text-sm focus:outline-none focus:border-[#E31837]"
                        >
                          <option value="2">2 Pessoas (Mesa intimista)</option>
                          <option value="4">4 Pessoas (Família/Amigos)</option>
                          <option value="6">6 Pessoas</option>
                          <option value="8+">8 ou mais (Confraternização)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="time-select" className="text-xs font-medium text-stone-300 block mb-1.5">
                          Horário Pretendido
                        </label>
                        <select
                          id="time-select"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 text-sm focus:outline-none focus:border-[#E31837]"
                        >
                          <option value="18:30">18:30</option>
                          <option value="19:30">19:30</option>
                          <option value="20:30">20:30</option>
                          <option value="21:30">21:30</option>
                          <option value="22:30">22:30</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="neighborhood-input" className="text-xs font-medium text-stone-300 block mb-1.5">
                        Bairro ou Endereço de Entrega
                      </label>
                      <input
                        id="neighborhood-input"
                        type="text"
                        placeholder="Ex: Jardins, Moema, Centro..."
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:border-[#E31837]"
                      />
                    </div>
                  )}

                  {/* Message / Order details */}
                  <div>
                    <label htmlFor="message-textarea" className="text-xs font-medium text-stone-300 block mb-1.5">
                      Pizzas Desejadas ou Mensagem Especial (opcional)
                    </label>
                    <textarea
                      id="message-textarea"
                      rows={3}
                      placeholder="Ex: Gostaria de 1 Margherita e 1 Pepperoni com borda vulcão, para entregar às 20h..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-hairline text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:border-[#E31837] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-pepperoni text-white font-bold text-sm tracking-wide shadow-glow-sm hover:shadow-glow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Entrar em contato</span>
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    🔒 Seus dados são confidenciais e utilizados apenas para atendimento e confirmação do pedido.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
