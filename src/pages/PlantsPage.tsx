import { useState } from "react";
import Layout from "@/components/Layout";
import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PlantsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = ["Все", ...new Set(plants.map((plant) => plant.category))];

  // Filter plants based on search term and selected category
  const filterPlants = (category: string) => {
    return plants.filter((plant) => 
      (category === "Все" || plant.category === category) && 
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-3xl font-semibold">Все растения</h1>
            <p className="text-muted-foreground">
              Выберите растения для вашего дома или сада
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-4 items-start md:items-center">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск растений..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="Все" className="w-full">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                  {filterPlants(category).map((plant) => (
                    <PlantCard key={plant.id} {...plant} />
                  ))}
                </div>
                {filterPlants(category).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Растения не найдены</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default PlantsPage;
