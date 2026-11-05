import React from 'react';
import { Flame, Heart, ShieldCheck, Award, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-hairline bg-stone-950 text-stone-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-pepperoni flex items-center justify-center text-white shadow-glow-sm">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-black text-white tracking-tight">
                TESTE
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Pizzaria e Forneria artesanal dedicada à autêntica tradição napolitana. Massas de fermentação natural de 48 horas, tomates San Marzano e assamento no fogo vivo da lenha.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-stone-900 border border-hairline px-3 py-1.5 rounded-xl">
                <Award className="w-3.5 h-3.5" />
                <span>Tradição & Autenticidade</span>
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Cardápio Digital
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Entregas & Cobertura
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato & Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Service */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <div className="space-y-2 text-xs leading-relaxed text-stone-400">
              <p>
                <strong className="text-white block">Terça a Domingo:</strong>
                18h00 às 23h45
              </p>
              <p>
                <strong className="text-white block">Sexta e Sábado:</strong>
                18h00 às 00h30
              </p>
              <p className="pt-1 text-[#FF6B35]">
                Segunda-feira: descanso da equipe e maturação da massa viva.
              </p>
            </div>
          </div>

          {/* Payments & Security */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Pagamentos Aceitos
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>• Pix Instantâneo (com 5% de desconto)</p>
              <p>• Cartões de Crédito & Débito na entrega</p>
              <p>• Vales Refeição (Alelo, Sodexo, VR, Ticket)</p>
              <p>• Dinheiro (com troco informado)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Teste Pizzaria & Forneria Artesanal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Feito com paixão pelo forno a lenha</span>
            <Flame className="w-3.5 h-3.5 text-[#E31837]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
