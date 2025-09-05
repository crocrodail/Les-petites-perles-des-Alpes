import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Shield, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";
import interiorImage from "@/assets/interior-nursery.jpg";

const Presentation = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Pédagogie Nature",
      description: "Apprentissage en harmonie avec la nature pour développer curiosité et respect de l'environnement"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bienveillance",
      description: "Accompagnement respectueux et personnalisé de chaque enfant dans son développement unique"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Petit Effectif",
      description: "Maximum 10 enfants pour garantir un suivi individualisé et des liens privilégiés"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité",
      description: "Environnement sécurisé avec du personnel qualifié et des espaces adaptés aux tout-petits"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[80vh] overflow-hidden">
          <img 
            src={heroImage}
            alt="Enfants jouant dans un environnement naturel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
                Micro Crèche
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Nature & Éveil</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
                Un environnement bienveillant où chaque enfant grandit en harmonie avec la nature
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-luxury transition-smooth hover:shadow-soft">
                  Découvrir notre pédagogie
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Une philosophie éducative centrée sur l'épanouissement de chaque enfant 
              dans le respect de son rythme et de son environnement naturel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth bg-card/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground shadow-soft">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-balance">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Notre Approche</h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Dans notre micro crèche, nous privilégions une pédagogie active où l'enfant 
                est acteur de ses apprentissages. Les activités en plein air, les matériaux 
                naturels et les expériences sensorielles favorisent un développement harmonieux.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Respect du rythme naturel</h4>
                    <p className="text-muted-foreground">Chaque enfant évolue à son propre rythme dans un cadre sécurisant</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Matériaux écologiques</h4>
                    <p className="text-muted-foreground">Jeux et mobilier en matériaux naturels et durables</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Lien avec la nature</h4>
                    <p className="text-muted-foreground">Jardin pédagogique et sorties régulières en extérieur</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 shadow-soft">
                En savoir plus sur notre pédagogie
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={interiorImage}
                alt="Intérieur de la micro crèche avec matériaux naturels"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-luxury border border-border">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Agrément PMI</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Structure agréée et contrôlée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Offrez à votre enfant un environnement d'épanouissement unique 
            dans notre micro crèche Nature & Éveil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-luxury">
              Demander une visite
            </Button>
            <Button variant="outline" size="lg">
              Télécharger notre brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Presentation;