import { PizzaItem, PizzaSizeOption, CrustOption, Testimonial, StatItem } from '../types';

export const PIZZA_SIZES: PizzaSizeOption[] = [
  { id: 'individual', name: 'Individual', slices: '4 fatias', cm: '25 cm', priceMultiplier: 0.75 },
  { id: 'media', name: 'Média', slices: '6 fatias', cm: '30 cm', priceMultiplier: 1.0 },
  { id: 'familia', name: 'Família', slices: '8 fatias', cm: '35 cm', priceMultiplier: 1.35 }
];

export const CRUST_OPTIONS: CrustOption[] = [
  { id: 'tradicional', name: 'Borda Tradicional Crocante (Fermentação 48h)', extraPrice: 0 },
  { id: 'catupiry', name: 'Borda Vulcão com Catupiry® Original', extraPrice: 12.0 },
  { id: 'cheddar', name: 'Borda Recheada com Cheddar Inglês Maturado', extraPrice: 14.0 },
  { id: 'chocolate', name: 'Borda Especial Chocolate Meio Amargo Callebaut', extraPrice: 16.0 }
];

export const PIZZA_MENU: PizzaItem[] = [
  {
    id: 'margherita-verace',
    name: 'Margherita Verace D.O.P.',
    tagline: 'O ícone atemporal de Nápoles',
    description: 'Molho de tomate San Marzano pelado à mão, fior di latte fresco, manjericão gigante da horta e azeite extravirgem prensado a frio.',
    ingredients: ['Tomates San Marzano D.O.P.', 'Fior di Latte Artesanal', 'Manjericão Fresco', 'Azeite Extravirgem'],
    price: 68.0,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=80',
    category: 'tradicionais',
    isPopular: true,
    isVegetarian: true,
    bakingTimeMinutes: 3,
    caloriesApprox: 720
  },
  {
    id: 'pepperoni-artesanal',
    name: 'Pepperoni & Mel de Pimenta',
    tagline: 'Crocrância acentuada com contraste agridoce',
    description: 'Fatias generosas de pepperoni artesanal defumado em lenha de macieira, mozzarella de búfala curada e fios de mel cru infusionado com pimenta calabresa.',
    ingredients: ['Pepperoni Defumado Artesanal', 'Mozzarella de Búfala', 'Mel Cru Picante', 'Parmesão 24 Meses'],
    price: 79.0,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
    category: 'especiais',
    isPopular: true,
    isChefSpecial: true,
    bakingTimeMinutes: 3,
    caloriesApprox: 890
  },
  {
    id: 'quatro-queijos-nobres',
    name: 'Quatro Queijos Maturados',
    tagline: 'Aveludada, potente e aromática',
    description: 'Equilíbrio primoroso entre mozzarella da casa, gorgonzola dolce cremosa, queijo gouda holandês e lascas de parmesão reggiano gratinado.',
    ingredients: ['Mozzarella Artesanal', 'Gorgonzola Dolce D.O.P.', 'Gouda Holandês', 'Parmesão Gratinado', 'Nozes Tostadas'],
    price: 76.0,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=900&q=80',
    category: 'tradicionais',
    isPopular: false,
    isVegetarian: true,
    bakingTimeMinutes: 4,
    caloriesApprox: 850
  },
  {
    id: 'calabresa-defumada',
    name: 'Calabresa Artesanal na Brasa',
    tagline: 'O clássico brasileiro elevado à perfeição',
    description: 'Linguiça calabresa de corte nobre com toque de vinho tinto, cebolas roxas marinadas em azeite de ervas, azeitonas pretas azapa e orégano fresco.',
    ingredients: ['Calabresa Nobre ao Vinho', 'Cebola Roxa Marinada', 'Azeitona Azapa', 'Orégano Fresco da Horta'],
    price: 69.0,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
    category: 'tradicionais',
    isPopular: true,
    bakingTimeMinutes: 3,
    caloriesApprox: 790
  },
  {
    id: 'parma-rucula-silvestre',
    name: 'Parma Real & Rúcula Silvestre',
    tagline: 'Frescor, elegância e cura italiana',
    description: 'Base de mozzarella fior di latte, presunto cru di Parma maturado 18 meses adicionado pós-forno, rúcula silvestre fresca e lascas espessas de Grana Padano.',
    ingredients: ['Presunto Cru di Parma 18M', 'Rúcula Silvestre', 'Grana Padano', 'Redução Balsâmica de Modena'],
    price: 89.0,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80',
    category: 'especiais',
    isChefSpecial: true,
    bakingTimeMinutes: 3,
    caloriesApprox: 810
  },
  {
    id: 'funghi-trufas-brancas',
    name: 'Funghi Trifolati & Trufas Brancas',
    tagline: 'Aroma terroso e sofisticação gastronômica',
    description: 'Mix de cogumelos selvagens (portobello, paris e shimeji) salteados no alho negro e manteiga de ervas, base branca cremosa e azeite trufado de Alba.',
    ingredients: ['Cogumelos Selvagens Salteados', 'Alho Negro', 'Azeite de Trufas Brancas de Alba', 'Fior di Latte'],
    price: 88.0,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    category: 'especiais',
    isVegetarian: true,
    isChefSpecial: true,
    bakingTimeMinutes: 4,
    caloriesApprox: 780
  },
  {
    id: 'frango-catupiry-legitimo',
    name: 'Frango Defumado & Catupiry® Original',
    tagline: 'O queridinho do Brasil em versão autoral',
    description: 'Peito de frango desfiado artesanalmente, marinado em páprica defumada e tomilho, coberto com o legítimo Catupiry® cremoso e milho verde fresco salteado.',
    ingredients: ['Frango com Páprica Defumada', 'Catupiry® Original', 'Milho Verde Fresco', 'Palha de Batata Doce'],
    price: 74.0,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80',
    category: 'tradicionais',
    isPopular: true,
    bakingTimeMinutes: 3,
    caloriesApprox: 820
  },
  {
    id: 'doce-nutella-morango',
    name: 'Nutella Pura & Frutas Vermelhas',
    tagline: 'Doçura aveludada com contraste cítrico',
    description: 'Massa fina assada com manteiga noisette, generosa camada de Nutella® morna, morangos orgânicos laminados e farofa crocante de castanhas tostadas.',
    ingredients: ['Nutella® Genuína', 'Morangos Orgânicos', 'Amoras Silvestres', 'Castanhas de Caju Caramelizadas'],
    price: 58.0,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80',
    category: 'doces',
    isPopular: true,
    bakingTimeMinutes: 2,
    caloriesApprox: 640
  },
  {
    id: 'doce-banana-flambada',
    name: 'Banana Flambada ao Doce de Leite',
    tagline: 'Conforto nostálgico com técnica refinada',
    description: 'Bananas prata fatiadas e flambadas na cachaça artesanal de alambique, canela do ceilão, queijo canastra meia cura e gotas do legítimo doce de leite Viçosa.',
    ingredients: ['Banana Prata Flambada', 'Doce de Leite Viçosa', 'Canastra Meia Cura', 'Canela do Ceilão'],
    price: 55.0,
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=80',
    category: 'doces',
    bakingTimeMinutes: 2,
    caloriesApprox: 610
  },
  {
    id: 'vinho-chianti-classico',
    name: 'Chianti Classico DOCG (Garrafa 750ml)',
    tagline: 'Harmonização perfeita para pizzas com queijo e carnes',
    description: 'Vinho tinto toscano encorpado, com notas de cereja madura, carvalho tostado e acidez vibrante que limpa o paladar.',
    ingredients: ['Safra Selecionada', 'Toscana, Itália', '13.5% Vol.'],
    price: 135.0,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    category: 'bebidas',
    bakingTimeMinutes: 0
  },
  {
    id: 'soda-artesanal-siciliana',
    name: 'Soda Italiana de Limão Siciliano & Alecrim (400ml)',
    tagline: 'Refrescância borbulhante e aromática',
    description: 'Água gaseificada na casa, xarope artesanal de limão siciliano orgânico e ramo de alecrim fresco macerado com gelo cristalino.',
    ingredients: ['Limão Siciliano Orgânico', 'Alecrim Fresco', 'Água Mineral com Gás'],
    price: 18.0,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    category: 'bebidas',
    bakingTimeMinutes: 0
  }
];

export const STATS_ITEMS: StatItem[] = [
  { value: 8, suffix: ' Anos', label: 'de Tradição & Fogo', sublabel: 'Pizzaiolos dedicados à receita clássica napolitana' },
  { value: 18, suffix: '.000+', label: 'Pizzas Assadas / Mês', sublabel: 'Crocância e sabor entregues diariamente' },
  { value: 48, suffix: ' Horas', label: 'Fermentação Lenta', sublabel: 'Digestão leve, massa aerada e viva' },
  { value: 4.9, suffix: ' ★', label: 'Avaliações Positivas', sublabel: 'Mais de 3.200 clientes encantados no Google' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depo-1',
    author: 'Renato Guimarães',
    role: 'Crítico Gastronômico & Sommelier',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'A melhor massa de pizza que já provei no Brasil. O tempo de fermentação de 48h faz toda a diferença: massa leve, cornicione inflado e alvéolos perfeitos.',
    favoritePizza: 'Pepperoni & Mel de Pimenta',
    date: 'Há 3 dias'
  },
  {
    id: 'depo-2',
    author: 'Camila Albuquerque',
    role: 'Cliente Frequente & Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'A entrega é surreal de rápida e a pizza chega parecendo que acabou de sair do forno da nossa casa. A embalagem térmica é genial, nada murcha!',
    favoritePizza: 'Parma Real & Rúcula Silvestre',
    date: 'Semana passada'
  },
  {
    id: 'depo-3',
    author: 'Chef Marcello Vanni',
    role: 'Chef e Consultor de Fornerias',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'O respeito à tradição e ao produto salta aos olhos: queijos de pequenos produtores, molho San Marzano sem acidez artificial e lenha certificada.',
    favoritePizza: 'Margherita Verace D.O.P.',
    date: 'Há 2 semanas'
  }
];

export const FAQS = [
  {
    question: 'Qual é o segredo da massa da Teste?',
    answer: 'Nossa massa é produzida exclusivamente com farinha de trigo italiana tipo 00, água mineral pura, sal marinho e uma dosagem mínima de levedura natural. Ela passa por maturação a frio de 48 a 72 horas, gerando uma digestibilidade incomparável, massa elástica e bordas alveoladas (cornicione).'
  },
  {
    question: 'Como funciona a entrega expressa?',
    answer: 'Utilizamos caixas térmicas com microrespiradores que mantêm o calor a mais de 70°C sem reter a umidade interna que amolece a massa. Seu pedido chega crocante e borbulhante em 30 a 45 minutos.'
  },
  {
    question: 'Vocês atendem reservas para eventos e aniversários?',
    answer: 'Sim! Nosso salão aconchegante acolhe encontros intimistas, comemorações e confraternizações. Basta clicar no botão "Entrar em contato" ou preencher nosso formulário de reserva.'
  },
  {
    question: 'Possuem opções vegetarianas ou sem lactose?',
    answer: 'Temos diversas opções vegetarianas clássicas com queijos nobres e vegetais frescos salteados no forno. Também preparamos sob consulta opções com mozzarella fior di latte com baixo teor de lactose.'
  }
];
