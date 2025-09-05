import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-xl shadow-soft">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Micro Crèche Nature & Éveil</h2>
                <p className="text-sm text-muted-foreground">Pédagogie par la nature</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-balance">
              Une approche éducative bienveillante centrée sur l'éveil par la nature 
              et le respect de l'environnement. Nous accompagnons chaque enfant dans 
              son développement harmonieux.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@microcreche.fr</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/pedagogie" 
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Pédagogie
                </Link>
              </li>
              <li>
                <Link 
                  to="/tarification" 
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Tarification
                </Link>
              </li>
              <li>
                <Link 
                  to="/preinscription" 
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Préinscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Infos pratiques */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Infos pratiques</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Rue de la Nature</p>
                  <p>75001 Paris</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p><strong>Horaires :</strong></p>
                <p>Lundi - Vendredi : 7h30 - 18h30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Micro Crèche Nature & Éveil. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;