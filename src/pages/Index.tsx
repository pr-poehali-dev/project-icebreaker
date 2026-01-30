import ArcGalleryHero from "@/components/ArcGalleryHero";
import PricingSection from "@/components/PricingSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/c7631ebe-7738-4bd4-83e7-bef2d0d2d721.jpg",
    "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/7ec126e0-b13d-498e-bdf5-5131d9682c59.jpg",
    "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/09808c0a-3d34-4719-8c74-4097072879a6.jpg",
    "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/bf37cb2c-4280-436e-af93-2b94193db3ec.jpg",
  ];

  const portfolioImages = [
    {
      src: "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/c7631ebe-7738-4bd4-83e7-bef2d0d2d721.jpg",
      title: "Санузел премиум-класса",
      description: "Мраморная плитка с золотыми светильниками"
    },
    {
      src: "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/7ec126e0-b13d-498e-bdf5-5131d9682c59.jpg",
      title: "Современная ванная",
      description: "Комбинация мрамора и тёмных акцентов"
    },
    {
      src: "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/09808c0a-3d34-4719-8c74-4097072879a6.jpg",
      title: "Гостиная в классическом стиле",
      description: "Мраморный пол с чёрными вставками"
    },
    {
      src: "https://cdn.poehali.dev/projects/a5dbde5f-7795-47e4-a1d1-0ccad19c34b9/bucket/bf37cb2c-4280-436e-af93-2b94193db3ec.jpg",
      title: "Ванная с мраморной отделкой",
      description: "Отдельностоящая ванна, золотая фурнитура"
    }
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
      <PortfolioGallery images={portfolioImages} />
      <PricingSection />
      <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;