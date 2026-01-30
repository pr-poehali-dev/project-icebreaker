import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type PortfolioGalleryProps = {
  images: { src: string; title: string; description: string }[];
};

const PortfolioGallery = ({ images }: PortfolioGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Примеры работ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные объекты в Томске — ванные комнаты, кухни, полы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-background">
                <h3 className="text-2xl font-bold mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;
