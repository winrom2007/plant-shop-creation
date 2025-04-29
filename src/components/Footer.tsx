import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="h-8 w-8 text-primary text-2xl">🌿</span>
              <span className="font-semibold text-lg ml-2">ЭкоФлора</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Мы делаем вашу жизнь зеленее с 2015 года. Лучшие растения для дома и сада.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Информация</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-muted-foreground hover:text-primary transition-colors">
                  Уход за растениями
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">
                ул. Зеленая, 42, Москва
              </li>
              <li>
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@ecoflora.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@ecoflora.ru
                </a>
              </li>
              <li className="text-muted-foreground">
                Пн-Вс: 9:00 - 20:00
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} ЭкоФлора. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
