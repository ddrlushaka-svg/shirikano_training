import { Target, Eye, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Importation des images locales
import didierImg from '../images/lu.jpeg';
import aganzeImg from '../images/ddr.jpeg';

export default function About() {
  const [currentMember, setCurrentMember] = useState(0);

  const teamMembers = [
    {
      name: 'Didier Lushaka',
      role: 'Directeur Général',
      image: didierImg,
    },
    {
      name: 'Aganze Lushaka',
      role: 'Formateur',
      image: aganzeImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">À Propos de Nous</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Shirikano training est une entreprise spécialisée dans les solutions informatiques professionnelles,
            au service des entreprises et des particuliers depuis plus de 10 ans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3">
          <div className="p-8 text-center bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Notre Mission</h3>
            <p className="text-gray-600">
              Fournir des solutions informatiques innovantes et fiables qui permettent à nos clients de se concentrer sur leur cœur de métier.
            </p>
          </div>

          <div className="p-8 text-center bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Notre Vision</h3>
            <p className="text-gray-600">
              Devenir le partenaire informatique de référence en offrant un service d'excellence et en restant à la pointe de la technologie.
            </p>
          </div>

          <div className="p-8 text-center bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Nos Valeurs</h3>
            <p className="text-gray-600">
              Excellence, intégrité, innovation et engagement envers la satisfaction client sont au cœur de tout ce que nous faisons.
            </p>
          </div>
        </div>

        <section className="mb-20">
          <div className="p-12 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl">
            <h2 className="mb-6 text-3xl font-bold">Notre Histoire</h2>
            <p className="mb-4 text-lg leading-relaxed text-blue-50">
              Fondée en 2024, Shirikano training a débuté comme une petite entreprise de dépannage informatique.
              Grâce à notre expertise technique et notre engagement envers la satisfaction client, nous avons
              rapidement élargi nos services pour devenir un acteur majeur des solutions informatiques globales.
            </p>
            <p className="text-lg leading-relaxed text-blue-50">
              Aujourd'hui, nous servons plus de 200 clients à travers la RDC, des PME aux grandes entreprises,
              en leur fournissant des solutions complètes allant de la vente de matériel à la formation en passant
              par le développement sur mesure et la maintenance.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </div>

          <div className="relative mb-12 overflow-hidden shadow-2xl h-96 rounded-2xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentMember ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <h3 className="mb-2 text-3xl font-bold text-white">{member.name}</h3>
                  <p className="text-xl font-medium text-blue-300">{member.role}</p>
                </div>
              </div>
            ))}

            <button
              onClick={prevMember}
              className="absolute z-10 p-2 transition-all -translate-y-1/2 rounded-full shadow-lg left-4 top-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="text-gray-800" size={24} />
            </button>

            <button
              onClick={nextMember}
              className="absolute z-10 p-2 transition-all -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronRight className="text-gray-800" size={24} />
            </button>

            <div className="absolute z-10 flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentMember
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                  index === currentMember
                    ? 'ring-4 ring-blue-600 scale-105'
                    : 'ring-2 ring-gray-200 hover:ring-blue-400'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}