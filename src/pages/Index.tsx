import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import PlantCard from "@/components/PlantCard";
import CategoryCard from "@/components/CategoryCard";
import { plants, featuredCategories } from "@/data/plants";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredPlants = activeTab === "all" 
    ? plants 
    : plants.filter(plant => 
        activeTab === "new" 
          ? plant.isNew 
          : activeTab === "sale" 
            ? plant.salePrice 
            : plant.category.toLowerCase().includes(activeTab)
      );

  return (
    <Layout>
      <Hero />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Наши растения</h2>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="комнатные">Комнатные</TabsTrigger>
                <TabsTrigger value="суккуленты">Суккуленты</TabsTrigger>
                <TabsTrigger value="new">Новинки</TabsTrigger>
                <TabsTrigger value="sale">Скидки</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.id} {...plant} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="rounded-full">
              Показать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Растения делают жизнь лучше</h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Подпишитесь на нашу рассылку, чтобы получать советы по уходу за растениями, 
              эксклюзивные предложения и вдохновляющие идеи для вашего зелёного пространства.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex h-10 w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="rounded-full bg-white text-primary hover:bg-white/90">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
