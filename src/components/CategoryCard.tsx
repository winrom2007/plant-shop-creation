import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

const CategoryCard = ({ id, name, description, image, count }: CategoryCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
      <img 
        src={image} 
        alt={name}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-white/90 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm">{count} товаров</span>
          <Button asChild variant="outline" className="bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30">
            <Link to={`/category/${id}`}>
              Смотреть все
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
