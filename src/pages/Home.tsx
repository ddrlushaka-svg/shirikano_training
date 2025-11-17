import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import aganzeImg from '../images/ddr.jpeg';
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    aganzeImg
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900">
                Bienvenue chez <span className="text-blue-600">Shirikano training</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Nous sommes votre partenaire de confiance pour toutes vos solutions informatiques.
                De l'installation à la maintenance, en passant par le développement et la formation,
                nous mettons notre expertise au service de votre réussite.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Solutions informatiques sur mesure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Support technique réactif et professionnel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Formation continue dans les technologies actuelles</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-2xl h-96 rounded-2xl">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <button
                onClick={prevSlide}
                className="absolute p-2 transition-all -translate-y-1/2 rounded-full shadow-lg left-4 top-1/2 bg-white/80 hover:bg-white"
              >
                <ChevronLeft className="text-gray-800" size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute p-2 transition-all -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2 bg-white/80 hover:bg-white"
              >
                <ChevronRight className="text-gray-800" size={24} />
              </button>

              <div className="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">
            Pourquoi choisir Shirikano training ?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 transition-shadow bg-blue-50 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Expertise</h3>
              <p className="text-gray-600">
                Une équipe qualifiée avec des années d'expérience dans tous les domaines de l'informatique.
              </p>
            </div>

            <div className="p-8 transition-shadow bg-blue-50 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Réactivité</h3>
              <p className="text-gray-600">
                Un service client disponible et réactif pour répondre à tous vos besoins rapidement.
              </p>
            </div>

            <div className="p-8 transition-shadow bg-blue-50 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des technologies pour vous offrir les meilleures solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
