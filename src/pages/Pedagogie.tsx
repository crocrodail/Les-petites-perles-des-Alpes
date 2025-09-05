import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Sun, Palette, Music, BookOpen, Heart } from "lucide-react";
import pedagogyImage from "@/assets/pedagogy-nature.jpg";

const Pedagogie = () => {
  const activities = [
    {
      icon: <Sprout className="h-6 w-6" />,
      title: "Jardinage",
      description: "Éveil sensoriel à travers la découverte des plantes, graines et terre",
      age: "18 mois - 3 ans"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Exploration nature",
      description: "Sorties quotidiennes pour observer, toucher et comprendre l'environnement",
      age: "12 mois - 3 ans"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Arts créatifs naturels",
      description: "Peinture avec des pigments naturels, collages avec éléments de la nature",
      age: "15 mois - 3 ans"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Musique douce",
      description: "Instruments naturels, chants et berceuses pour l'éveil musical",
      age: "6 mois - 3 ans"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Histoires nature",
      description: "Lectures d'albums sur les animaux, saisons et merveilles naturelles",
      age: "12 mois - 3 ans"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Bien-être",
      description: "Relaxation, yoga enfant et massages doux pour l'équilibre émotionnel",
      age: "6 mois - 3 ans"
    }
  ];

  const principles = [
    {
      title: "Respect du rythme individuel",
      description: "Chaque enfant évolue selon ses propres besoins et capacités. Nous respectons son sommeil, sa faim et ses périodes d'activité naturelles."
    },
    {
      title: "Apprentissage par l'expérience",
      description: "Les enfants découvrent le monde par leurs sens : toucher, sentir, goûter, écouter. Chaque expérience est source d'apprentissage."
    },
    {
      title: "Connexion avec la nature",
      description: "Notre jardin pédagogique et nos sorties régulières permettent aux enfants de développer leur lien avec l'environnement naturel."
    },
    {
      title: "Accompagnement bienveillant",
      description: "Nos professionnelles formées accompagnent chaque enfant avec douceur, patience et respect de ses émotions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Notre <span className="bg-gradient-primary bg-clip-text text-transparent">Pédagogie</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Une approche éducative innovante qui place l'enfant au cœur de la nature 
              pour un développement harmonieux et respectueux
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={pedagogyImage}
              alt="Espace de jeu naturel avec matériaux durables"
              className="w-full rounded-2xl shadow-luxury"
            />
          </div>
        </div>
      </section>

      {/* Nos principes */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nos Principes Pédagogiques</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Une philosophie éducative basée sur le respect, la bienveillance et 
              l'épanouissement naturel de chaque enfant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth bg-card/80">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground text-balance">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nos Activités</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Des activités variées et adaptées pour stimuler tous les sens 
              et favoriser l'éveil naturel des enfants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground shadow-soft group-hover:scale-110 transition-smooth">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4 text-balance">{activity.description}</p>
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {activity.age}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning type */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Une Journée Type</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Découvrez comment se déroule une journée dans notre micro crèche, 
              rythmée par les besoins naturels des enfants
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { time: "7h30 - 9h00", activity: "Accueil échelonné", description: "Arrivée en douceur, petit déjeuner pour ceux qui le souhaitent" },
                { time: "9h00 - 10h00", activity: "Éveil et jeux libres", description: "Exploration des espaces et matériaux naturels" },
                { time: "10h00 - 11h00", activity: "Activité nature", description: "Jardinage, observation, création avec éléments naturels" },
                { time: "11h00 - 11h45", activity: "Repas", description: "Déjeuner équilibré avec produits locaux et bio" },
                { time: "12h00 - 15h00", activity: "Sieste", description: "Repos dans un environnement calme et naturel" },
                { time: "15h00 - 16h00", activity: "Goûter et réveil", description: "Collation saine et réveil en douceur" },
                { time: "16h00 - 18h30", activity: "Jeux et départ", description: "Activités calmes et départ échelonné" }
              ].map((slot, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-card rounded-xl shadow-card">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-semibold text-sm whitespace-nowrap">
                    {slot.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{slot.activity}</h4>
                    <p className="text-muted-foreground">{slot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Découvrez Notre Pédagogie</h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Venez visiter notre micro crèche et découvrir comment nous accompagnons 
            chaque enfant dans son épanouissement naturel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-luxury">
              Prendre rendez-vous
            </Button>
            <Button variant="outline" size="lg">
              Télécharger notre projet pédagogique
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pedagogie;