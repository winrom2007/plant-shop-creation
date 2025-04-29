import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface PlantCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  salePrice?: number;
  isNew?: boolean;
}

const PlantCard = ({ id, name, category, price, image, salePrice, isNew }: PlantCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md animate-fade-in">
      {isNew && (
        <div className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
          Новинка
        </div>
      )}
      {salePrice && (
        <div className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
          Скидка
        </div>
      )}
      <Link to={`/plant/${id}`} className="block aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <Link to={`/plant/${id}`} className="block mb-2">
          <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {salePrice ? (
              <>
                <span className="font-medium text-primary">{salePrice} ₽</span>
                <span className="text-sm text-muted-foreground line-through">{price} ₽</span>
              </>
            ) : (
              <span className="font-medium">{price} ₽</span>
            )}
          </div>
          <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
