import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 text-primary text-2xl">🌿</span>
            <span className="font-semibold text-lg">ЭкоФлора</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Растения</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                    <NavigationMenuLink asChild className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <Link to="/category/indoor">
                        <div className="text-sm font-medium">Комнатные растения</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Для квартир и офисов
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <Link to="/category/outdoor">
                        <div className="text-sm font-medium">Садовые растения</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Для открытого грунта
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <Link to="/category/succulents">
                        <div className="text-sm font-medium">Суккуленты</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Кактусы и другие суккуленты
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <Link to="/new">
                        <div className="text-sm font-medium">Новинки</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Поступления этого месяца
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/care">
                  <Button variant="ghost">Уход</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <Button variant="ghost">О нас</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
