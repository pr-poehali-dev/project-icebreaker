import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Hammer" className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">Укладка плитки</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#works" className="text-sm hover:text-primary transition-colors">
            Работы
          </a>
          <a href="#prices" className="text-sm hover:text-primary transition-colors">
            Цены
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <a 
          href="tel:+79539270707" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          <Icon name="Phone" className="w-4 h-4" />
          <span className="hidden sm:inline font-medium">+7 (953) 927-07-07</span>
        </a>
      </div>
    </header>
  );
};

export default Header;