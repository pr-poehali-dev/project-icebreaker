import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Hammer" className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">Укладка плитки</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональная укладка керамогранита, мозаики и кафеля в Томске
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79539270707"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Phone" className="w-4 h-4" />
                <span>+7 (953) 927-07-07</span>
              </a>
              <a
                href="mailto:leanidzalevsky@yandex.ru"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Mail" className="w-4 h-4" />
                <span>leanidzalevsky@yandex.ru</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" className="w-4 h-4" />
                <span>г. Томск</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/79539270707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Icon name="Send" className="w-5 h-5" />
              </a>
              <a
                href="https://vk.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Icon name="Share2" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Укладка плитки в Томске. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
