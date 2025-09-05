import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, ExternalLink } from "lucide-react";

const Preinscription = () => {

  const steps = [
    {
      number: 1,
      title: "Préinscription en ligne",
      description: "Remplissez le formulaire de préinscription"
    },
    {
      number: 2,
      title: "Prise de contact",
      description: "Nous vous contactons sous 48h"
    },
    {
      number: 3,
      title: "Visite personnalisée",
      description: "Découverte des lieux et de l'équipe"
    },
    {
      number: 4,
      title: "Inscription définitive",
      description: "Signature du contrat et début d'accueil"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimation animation="slideUp">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Préinscription</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Commencez dès maintenant le processus d'inscription de votre enfant 
              dans notre micro crèche Les petites perles Des Alpes
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Processus d'inscription */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Processus d'Inscription</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Un processus simple et personnalisé pour assurer le meilleur accueil de votre enfant
            </p>
          </ScrollAnimation>
          
          <StaggeredAnimation 
            animation="scaleIn" 
            staggerDelay={0.2}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl shadow-soft">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-balance">{step.description}</p>
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Formulaire de préinscription */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-0 shadow-luxury bg-card/95 backdrop-blur">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Formulaire de Préinscription
              </CardTitle>
              <p className="text-muted-foreground text-balance">
                Accédez à notre formulaire de préinscription en ligne pour commencer le processus d'inscription
              </p>
            </CardHeader>
            
            <CardContent className="p-8 text-center">
              <div className="space-y-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-12 w-12 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Accéder au formulaire de préinscription
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Cliquez sur le bouton ci-dessous pour accéder à notre formulaire de préinscription sécurisé. 
                    Vous pourrez y renseigner toutes les informations nécessaires pour votre demande.
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="shadow-luxury transition-smooth hover:shadow-soft"
                  onClick={() => window.open("https://les-petites-perles-des-alpes.jdmapps.fr/index.php/espace-famille/reserver-une-place", "_blank")}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Accéder au formulaire de préinscription
                </Button>

                <div className="text-sm text-muted-foreground">
                  <p>Le formulaire s'ouvrira dans un nouvel onglet</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Informations Importantes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Documents à fournir</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Copie du livret de famille</li>
                  <li>• Certificat médical d'aptitude</li>
                  <li>• Carnet de vaccinations à jour</li>
                  <li>• Justificatif de domicile</li>
                  <li>• Attestation d'assurance responsabilité civile</li>
                  <li>• Avis d'imposition (pour les aides CAF)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Période d'adaptation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nous proposons une période d'adaptation progressive sur une semaine :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Jour 1-2 : 1h avec un parent</li>
                  <li>• Jour 3-4 : 2h sans parent</li>
                  <li>• Jour 5 : Matinée complète avec repas</li>
                  <li>• À partir du jour 6 : Accueil normal</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Preinscription;