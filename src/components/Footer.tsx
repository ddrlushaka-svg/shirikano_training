import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Shirikano training</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour tous vos besoins en solutions informatiques.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+243 996 572 542</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">ddrlushaka@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-400">Kinshasa, RDC</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Horaires</h3>
            <div className="space-y-2 text-gray-400">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 10h - 16h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 shirikano training. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
