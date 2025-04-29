import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { plants } from "@/data/plants";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Truck, Award, ArrowLeft, Plus, Minus } from "lucide-react";
import { PlantCardProps } from "@/components/PlantCard";

const PlantDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const plant = plants.find((p) => p.id === Number(id)) as PlantCardProps;
  
  // If plant not found, navigate to 404
  if (!plant) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-semibold mb-4">Растение не найдено</h1>
          <p className="mb-8">К сожалению, данное растение отсутствует в нашем каталоге.</p>
          <Button onClick={() => navigate("/plants")}>Вернуться в каталог</Button>
        </div>
      </Layout>
    );
  }

  // Increment and decrement functions
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Related plants (same category)
  const relatedPlants = plants
    .filter(p => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg border border-border bg-card">
            <img 
              src={plant.image} 
              alt={plant.name} 
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Link 
                to={`/category/${plant.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {plant.category}
              </Link>
            </div>
            
            <h1 className="text-3xl font-semibold mb-2">{plant.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              {plant.salePrice ? (
                <>
                  <span className="text-2xl font-medium text-primary">{plant.salePrice} ₽</span>
                  <span className="text-lg text-muted-foreground line-through">{plant.price} ₽</span>
                </>
              ) : (
                <span className="text-2xl font-medium">{plant.price} ₽</span>
              )}
              
              {plant.isNew && (
                <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                  Новинка
                </span>
              )}
            </div>
            
            <div className="border-t border-border pt-6 mb-6">
              <p className="mb-6">
                Красивое и неприхотливое растение для вашего дома или офиса. Прекрасно очищает воздух и создает уютную атмосферу.
              </p>
              
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Доставка в течение 1-3 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>Гарантия качества 14 дней</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decrement}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={increment}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Добавить в корзину
              </Button>
              
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Information Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList>
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="care">Уход</TabsTrigger>
            <TabsTrigger value="shipping">Доставка</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <h3 className="text-lg font-medium mb-2">О растении {plant.name}</h3>
            <p className="mb-4">
              {plant.name} — это популярное комнатное растение с красивыми листьями и неприхотливым характером. 
              Идеально подходит как для начинающих, так и для опытных цветоводов.
            </p>
            <p>
              Растение родом из тропических регионов, где оно привыкло к теплу и влажности. 
              В домашних условиях хорошо адаптируется и при правильном уходе радует своим внешним видом долгие годы.
            </p>
          </TabsContent>
          <TabsContent value="care" className="pt-4">
            <h3 className="text-lg font-medium mb-2">Рекомендации по уходу</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Освещение: яркий рассеянный свет, без прямых солнечных лучей</li>
              <li>Полив: умеренный, после подсыхания верхнего слоя почвы</li>
              <li>Влажность: средняя или повышенная, рекомендуется опрыскивание</li>
              <li>Температура: 18-25°C</li>
              <li>Подкормка: в период активного роста раз в 2-3 недели</li>
            </ul>
          </TabsContent>
          <TabsContent value="shipping" className="pt-4">
            <h3 className="text-lg font-medium mb-2">Информация о доставке</h3>
            <p className="mb-4">
              Мы бережно упаковываем каждое растение, чтобы оно прибыло к вам в отличном состоянии.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Доставка по Москве: 1-2 дня</li>
              <li>Доставка по России: 2-7 дней</li>
              <li>Самовывоз из магазина: в день заказа</li>
              <li>Бесплатная доставка при заказе от 5000 ₽</li>
            </ul>
          </TabsContent>
        </Tabs>
        
        {/* Related Plants */}
        {relatedPlants.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Похожие растения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedPlants.map((relatedPlant) => (
                <div key={relatedPlant.id} className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300">
                  <Link to={`/plant/${relatedPlant.id}`} className="block aspect-square overflow-hidden">
                    <img
                      src={relatedPlant.image}
                      alt={relatedPlant.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{relatedPlant.category}</div>
                    <Link to={`/plant/${relatedPlant.id}`} className="block mb-2">
                      <h3 className="font-medium group-hover:text-primary transition-colors">{relatedPlant.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {relatedPlant.salePrice ? (
                          <>
                            <span className="font-medium text-primary">{relatedPlant.salePrice} ₽</span>
                            <span className="text-sm text-muted-foreground line-through">{relatedPlant.price} ₽</span>
                          </>
                        ) : (
                          <span className="font-medium">{relatedPlant.price} ₽</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PlantDetailPage;
