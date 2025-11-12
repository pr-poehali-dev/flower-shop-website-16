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
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                FlowerShop
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {['Главная', 'Каталог', 'О нас', 'Доставка', 'Контакты', 'Блог'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
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
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
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
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 text-sm px-4 py-1">
                  Доставка за 2 часа
                </Badge>
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  Цветы,<br />
                  которые<br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    вдохновляют
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-md">
                  Создаём букеты с душой. Свежие цветы от лучших поставщиков. Доставка по городу 24/7.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                    Смотреть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-2">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/50e3c96e-523c-4efc-859d-55f39ecf6491/files/c081207e-cd21-4b37-8abd-c16c3525ffe2.jpg"
                  alt="Букет цветов"
                  className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Популярные категории</h3>
              <p className="text-muted-foreground">Выберите идеальные цветы для любого случая</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {['Розы', 'Тюльпаны', 'Композиции', 'Подарки'].map((category, index) => (
                <Card key={category} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className={`text-5xl mb-3 ${
                      index === 0 ? 'text-primary' : 
                      index === 1 ? 'text-secondary' : 
                      index === 2 ? 'text-accent' : 'text-muted-foreground'
                    }`}>
                      {index === 0 ? '🌹' : index === 1 ? '🌷' : index === 2 ? '💐' : '🎁'}
                    </div>
                    <h4 className="font-semibold text-lg">{category}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Хиты продаж</h3>
              <p className="text-muted-foreground">Букеты, которые выбирают чаще всего</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-xl mb-2">{product.name}</h4>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-primary">{product.price} ₽</div>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
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

        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Быстрая доставка</h4>
                <p className="text-muted-foreground">Доставим за 2 часа в любую точку города</p>
              </Card>
              
              <Card className="text-center p-8 hover:shadow-xl transition-shadow">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Flower" size={32} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Свежие цветы</h4>
                <p className="text-muted-foreground">Напрямую от лучших поставщиков</p>
              </Card>
              
              <Card className="text-center p-8 hover:shadow-xl transition-shadow">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h4 className="font-semibold text-xl mb-2">С любовью</h4>
                <p className="text-muted-foreground">Каждый букет создан с душой</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-4xl font-bold mb-6">О нас</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Мы — команда профессиональных флористов с 10-летним опытом. Создаём уникальные композиции для любого случая: свадьбы, дни рождения, корпоративные мероприятия.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Работаем только со свежими цветами от проверенных поставщиков. Каждый букет — это произведение искусства.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Узнать больше
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold mb-6">Доставка</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-semibold mb-1">Бесплатная доставка</h5>
                      <p className="text-muted-foreground">При заказе от 3000 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-semibold mb-1">Доставка за 2 часа</h5>
                      <p className="text-muted-foreground">По всему городу</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                    <div>
                      <h5 className="font-semibold mb-1">Работаем 24/7</h5>
                      <p className="text-muted-foreground">Круглосуточная служба поддержки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold mb-4">Свежие статьи в блоге</h3>
            <p className="text-lg mb-8 opacity-90">Советы по уходу за цветами и флористические тренды</p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Как продлить жизнь розам', 'Модные букеты 2024', 'Символика цветов'].map((title) => (
                <Card key={title} className="text-left hover:shadow-2xl transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-xl mb-2 text-foreground">{title}</h4>
                    <p className="text-muted-foreground mb-4">
                      Полезные советы от профессиональных флористов...
                    </p>
                    <Button variant="link" className="p-0 text-primary">
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={28} />
                <h4 className="text-xl font-bold">FlowerShop</h4>
              </div>
              <p className="text-gray-400">Цветы, которые вдохновляют</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Розы</li>
                <li>Тюльпаны</li>
                <li>Композиции</li>
                <li>Подарки</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@flowershop.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Цветочная, 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlowerShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}