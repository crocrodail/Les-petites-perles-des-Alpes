import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary rounded-xl shadow-soft">
                <img src={logo} alt="Logo" className="h-32 w-32" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Les petites perles Des Alpes</h2>
                <p className="text-sm text-muted-foreground">Pédagogie par la nature</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-balance">
              Une approche éducative bienveillante centrée sur l'éveil par la nature 
              et le respect de l'environnement. Nous accompagnons chaque enfant dans 
              son développement harmonieux.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>07 57 57 45 29</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>lespetitesperlesdesalpes@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Facebook className="h-4 w-4" />
                <a 
                  href="https://www.facebook.com/profile.php?id=61556281616849" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Suivez-nous sur Facebook
                </a>
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
                  <p>224 Rue du Bois Bizot</p>
                  <p>74930 Reignier-Ésery</p>
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
            © {new Date().getFullYear()} Les petites perles Des Alpes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;