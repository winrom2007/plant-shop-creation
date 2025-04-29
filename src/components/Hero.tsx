import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-secondary">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Преобразите свой дом с нашими растениями
            </h1>
            <p className="text-muted-foreground mb-6 text-lg">
              Откройте для себя радость общения с природой. Наша коллекция растений подойдет как для начинающих, так и для опытных цветоводов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/plants">
                  Смотреть каталог
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/care">
                  Руководство по уходу
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545165375-7c7eb239752b?q=80&w=1200"
              alt="Комнатные растения"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
