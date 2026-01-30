import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  const services = [
    {
      title: 'Укладка керамогранита',
      description: 'Любой формат и сложность',
      price: 'от 3000 ₽/м²',
      features: [
        'Выравнивание поверхности',
        'Укладка на клей',
        'Затирка швов',
        'Гарантия 2 года'
      ]
    },
    {
      title: 'Укладка мозаики',
      description: 'Декоративные элементы',
      price: 'от 5000 ₽/м²',
      features: [
        'Подготовка основания',
        'Точная укладка',
        'Затирка специальной смесью',
        'Защитная обработка'
      ]
    },
    {
      title: 'Укладка кафеля',
      description: 'Стены и пол',
      price: 'от 2500 ₽/м²',
      features: [
        'Штукатурка стен',
        'Укладка плитки',
        'Обработка швов',
        'Гарантия качества'
      ]
    }
  ];

  return (
    <section id="prices" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Цены на услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Стоимость работ зависит от сложности объекта. Точный расчет — после осмотра.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Нужен точный расчет? Оставьте заявку, и я приеду на замер бесплатно
          </p>
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Вызвать замерщика
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;