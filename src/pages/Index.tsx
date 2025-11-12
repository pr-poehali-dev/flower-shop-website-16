import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Букет "Розовая мечта"', price: 3500, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/c081207e-cd21-4b37-8abd-c16c3525ffe2.jpg', category: 'Букеты' },
  { id: 2, name: 'Весенняя композиция', price: 4200, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/105096b5-5129-4743-933e-d4012281cfe4.jpg', category: 'Композиции' },
  { id: 3, name: 'Красные розы Premium', price: 5500, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/b983380b-cec0-440d-ae34-ec40a6911bef.jpg', category: 'Розы' },
  { id: 4, name: 'Яркий микс', price: 2900, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/c081207e-cd21-4b37-8abd-c16c3525ffe2.jpg', category: 'Букеты' },
  { id: 5, name: 'Нежная классика', price: 3800, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/105096b5-5129-4743-933e-d4012281cfe4.jpg', category: 'Композиции' },
  { id: 6, name: 'Романтика', price: 4500, image: 'https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/b983380b-cec0-440d-ae34-ec40a6911bef.jpg', category: 'Розы' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" className="text-primary" size={32} />
              <h1 className="text-3xl font-semibold text-primary tracking-wide">
                FlowerShop
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {['Главная', 'Каталог', 'О нас', 'Доставка', 'Контакты', 'Блог'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm uppercase tracking-widest font-light hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider text-xs font-medium">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="bg-primary text-primary-foreground border-0 text-xs px-6 py-2 uppercase tracking-widest font-light">
                  Доставка за 2 часа
                </Badge>
                <h2 className="text-6xl md:text-8xl font-semibold leading-tight">
                  Цветы,<br />
                  которые<br />
                  <span className="text-primary">
                    вдохновляют
                  </span>
                </h2>
                <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                  Создаём букеты с душой. Свежие цветы от лучших поставщиков. Доставка по городу 24/7.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm uppercase tracking-wider px-10 py-6 font-medium">
                    Смотреть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border border-primary hover:bg-primary hover:text-primary-foreground text-sm uppercase tracking-wider px-10 py-6 font-medium">
                    <Icon name="Gift" size={20} className="mr-2" />
                    Подарочные наборы
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Букетов в наличии</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-muted-foreground">Доставка</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">5★</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/c081207e-cd21-4b37-8abd-c16c3525ffe2.jpg"
                  alt="Букет цветов"
                  className="relative rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-5xl font-semibold mb-4">Популярные категории</h3>
              <p className="text-muted-foreground text-base">Выберите идеальные цветы для любого случая</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {['Розы', 'Тюльпаны', 'Композиции', 'Подарки'].map((category, index) => (
                <Card key={category} className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`text-5xl mb-3 ${
                      index === 0 ? 'text-primary' : 
                      index === 1 ? 'text-secondary' : 
                      index === 2 ? 'text-accent' : 'text-muted-foreground'
                    }`}>
                      {index === 0 ? '🌹' : index === 1 ? '🌷' : index === 2 ? '💐' : '🎁'}
                    </div>
                    <h4 className="font-medium text-lg tracking-wide">{category}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-5xl font-semibold mb-4">Хиты продаж</h3>
              <p className="text-muted-foreground">Букеты, которые выбирают чаще всего</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-500 border border-border bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-foreground border border-border uppercase tracking-wider text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-medium text-xl mb-2 tracking-wide">{product.name}</h4>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-primary">{product.price} ₽</div>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider text-xs font-medium"
                      onClick={addToCart}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-10 hover:shadow-lg transition-all duration-300 border border-border bg-white">
                <div className="bg-muted w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h4 className="font-medium text-xl mb-2 tracking-wide">Быстрая доставка</h4>
                <p className="text-muted-foreground">Доставим за 2 часа в любую точку города</p>
              </Card>
              
              <Card className="text-center p-10 hover:shadow-lg transition-all duration-300 border border-border bg-white">
                <div className="bg-muted w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Flower" size={32} className="text-secondary" />
                </div>
                <h4 className="font-medium text-xl mb-2 tracking-wide">Свежие цветы</h4>
                <p className="text-muted-foreground">Напрямую от лучших поставщиков</p>
              </Card>
              
              <Card className="text-center p-10 hover:shadow-lg transition-all duration-300 border border-border bg-white">
                <div className="bg-muted w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h4 className="font-medium text-xl mb-2 tracking-wide">С любовью</h4>
                <p className="text-muted-foreground">Каждый букет создан с душой</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-5xl font-semibold mb-6">О нас</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Мы — команда профессиональных флористов с 10-летним опытом. Создаём уникальные композиции для любого случая: свадьбы, дни рождения, корпоративные мероприятия.
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Работаем только со свежими цветами от проверенных поставщиков. Каждый букет — это произведение искусства.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider text-xs font-medium px-8 py-6">
                  Узнать больше
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              
              <div>
                <h3 className="text-5xl font-semibold mb-6">Доставка</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-medium mb-1 tracking-wide">Бесплатная доставка</h5>
                      <p className="text-muted-foreground">При заказе от 3000 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-medium mb-1 tracking-wide">Доставка за 2 часа</h5>
                      <p className="text-muted-foreground">По всему городу</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-medium mb-1 tracking-wide">Работаем 24/7</h5>
                      <p className="text-muted-foreground">Круглосуточная служба поддержки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-5xl font-semibold mb-4 text-foreground">Свежие статьи в блоге</h3>
            <p className="text-base mb-8 text-muted-foreground">Советы по уходу за цветами и флористические тренды</p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Как продлить жизнь розам', 'Модные букеты 2024', 'Символика цветов'].map((title) => (
                <Card key={title} className="text-left hover:shadow-lg transition-all duration-300 border border-border bg-white">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-xl mb-2 text-foreground tracking-wide">{title}</h4>
                    <p className="text-muted-foreground mb-4">
                      Полезные советы от профессиональных флористов...
                    </p>
                    <Button variant="link" className="p-0 text-primary uppercase tracking-wider text-xs font-medium">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={28} />
                <h4 className="text-2xl font-semibold tracking-wide">FlowerShop</h4>
              </div>
              <p className="text-primary-foreground/70">Цветы, которые вдохновляют</p>
            </div>
            
            <div>
              <h5 className="font-medium mb-4 uppercase tracking-widest text-sm">Каталог</h5>
              <ul className="space-y-2 text-primary-foreground/70 text-sm">
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Розы</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Тюльпаны</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Композиции</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Подарки</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-4 uppercase tracking-widest text-sm">Информация</h5>
              <ul className="space-y-2 text-primary-foreground/70 text-sm">
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Доставка</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Оплата</li>
                <li className="hover:text-primary-foreground transition-colors cursor-pointer">Контакты</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-4 uppercase tracking-widest text-sm">Контакты</h5>
              <div className="space-y-3 text-primary-foreground/70 text-sm">
                <div className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                  <Icon name="Mail" size={16} />
                  <span>info@flowershop.ru</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Цветочная, 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-xs uppercase tracking-widest">
            <p>&copy; 2024 FlowerShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}