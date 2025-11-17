import { Laptop, Server, Shield, Code, Wrench, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Laptop size={40} />,
      title: 'Vente de Matériel',
      description: 'Nous proposons une large gamme d\'ordinateurs, périphériques et équipements informatiques de qualité professionnelle adaptés à vos besoins.',
    },
    {
      icon: <Server size={40} />,
      title: 'Installation & Configuration',
      description: 'Installation complète de vos systèmes informatiques, configuration réseau et mise en place d\'infrastructures serveurs performantes.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Maintenance & Support',
      description: 'Service de maintenance préventive et corrective, support technique réactif et assistance à distance pour garantir la continuité de votre activité.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Sécurité Informatique',
      description: 'Protection de vos données, mise en place de solutions antivirus, pare-feu, et sauvegardes automatiques pour sécuriser votre infrastructure.',
    },
    {
      icon: <Code size={40} />,
      title: 'Développement Web',
      description: 'Création de sites web modernes et applications sur mesure, responsive design et solutions e-commerce adaptées à votre entreprise.',
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Formation Informatique',
      description: 'Programmes de formation personnalisés pour vos équipes : bureautique, développement, administration système, cybersécurité et plus encore.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services informatiques conçus pour répondre à tous vos besoins professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Formation Informatique Professionnelle</h2>
            <p className="text-lg mb-8 text-blue-50">
              Nous proposons des formations complètes et certifiantes dans tous les domaines de l'informatique.
              Nos formateurs expérimentés vous accompagnent dans votre montée en compétences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Formations Disponibles</h4>
                <ul className="space-y-2 text-blue-50">
                  <li>• Développement Web & Mobile</li>
                  <li>• Administration Systèmes et Réseaux</li>
                  <li>• Cybersécurité</li>
                  <li>• Cloud Computing (AWS, Azure)</li>
                  <li>• Bureautique (Office, Google Suite)</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Nos Avantages</h4>
                <ul className="space-y-2 text-blue-50">
                  <li>• Formateurs certifiés</li>
                  <li>• Sessions en présentiel ou à distance</li>
                  <li>• Support pédagogique inclus</li>
                  <li>• Certification à la fin du parcours</li>
                  <li>• Suivi personnalisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
