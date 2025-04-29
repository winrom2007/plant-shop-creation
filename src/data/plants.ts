import { PlantCardProps } from "@/components/PlantCard";

export const plants: PlantCardProps[] = [
  {
    id: 1,
    name: "Монстера Делициоза",
    category: "Комнатные растения",
    price: 2990,
    image: "https://images.unsplash.com/photo-1637967886160-fd778b644bb0?q=80&w=600",
    isNew: true
  },
  {
    id: 2,
    name: "Фикус Лирата",
    category: "Комнатные растения",
    price: 3500,
    image: "https://images.unsplash.com/photo-1608040809869-e69dc991673e?q=80&w=600"
  },
  {
    id: 3,
    name: "Драцена Маргината",
    category: "Комнатные растения",
    price: 1800,
    salePrice: 1499,
    image: "https://images.unsplash.com/photo-1631904457417-c2efa0952e45?q=80&w=600"
  },
  {
    id: 4,
    name: "Хавортия в керамике",
    category: "Суккуленты",
    price: 990,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=600"
  },
  {
    id: 5,
    name: "Замиокулькас",
    category: "Комнатные растения",
    price: 1950,
    image: "https://images.unsplash.com/photo-1632321126003-511bcdc56284?q=80&w=600"
  },
  {
    id: 6,
    name: "Пахира Водная",
    category: "Комнатные растения",
    price: 2490,
    salePrice: 1990,
    image: "https://images.unsplash.com/photo-1676324893991-95d6efe00bb5?q=80&w=600"
  },
  {
    id: 7,
    name: "Эхеверия Элеганс",
    category: "Суккуленты",
    price: 750,
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1909?q=80&w=600",
    isNew: true
  },
  {
    id: 8,
    name: "Сингониум",
    category: "Комнатные растения",
    price: 1290,
    image: "https://images.unsplash.com/photo-1637967909190-2f7a7bc78408?q=80&w=600"
  }
];

export const featuredCategories = [
  {
    id: "indoor",
    name: "Комнатные растения",
    description: "Зелёные друзья для вашего дома",
    image: "https://images.unsplash.com/photo-1632150403063-b067959aafed?q=80&w=700",
    count: 42
  },
  {
    id: "succulents",
    name: "Суккуленты",
    description: "Неприхотливые и стильные",
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=700",
    count: 28
  },
  {
    id: "outdoor",
    name: "Садовые растения",
    description: "Для ландшафтного дизайна",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=700",
    count: 36
  }
];
