import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">Contactez-Nous</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets informatiques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Informations de Contact</h2>

            <div className="space-y-6">
              <div className="flex items-start p-6 space-x-4 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+243 996 572 542</p>
                 
                </div>
              </div>

              <div className="flex items-start p-6 space-x-4 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">shirikano_training@gmail.com</p>
                 
                </div>
              </div>

              <div className="flex items-start p-6 space-x-4 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Kinshasa, RDC</p>
                </div>
              </div>

              <div className="flex items-start p-6 space-x-4 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Horaires d'Ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                  <p className="text-gray-600">Samedi: 10h00 - 16h00</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="p-12 mt-16 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold">Besoin d'une Intervention Urgente ?</h2>
          <p className="mb-8 text-xl text-blue-50">
            Notre équipe technique est disponible 24/7 pour les urgences
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
  href="https://wa.me/243996572542?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services."
  className="px-8 py-4 text-lg font-bold text-blue-600 transition-colors bg-white rounded-lg hover:bg-blue-50"
>
  WhatsApp
</a>

           
            <a
              href="ddrlushaka@gmail.com"
              className="px-8 py-4 text-lg font-bold text-white transition-colors bg-blue-800 rounded-lg hover:bg-blue-900"
            >
              Envoyer un Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
