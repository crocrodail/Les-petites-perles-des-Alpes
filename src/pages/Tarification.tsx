import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info, Heart, Clock, Euro } from "lucide-react";

const Tarification = () => {
  const plans = [
    {
      name: "Temps partiel",
      price: "650",
      unit: "€/mois",
      description: "Idéal pour un accueil 2-3 jours par semaine",
      features: [
        "2-3 jours par semaine",
        "Repas bio inclus",
        "Matériel pédagogique fourni",
        "Sorties nature",
        "Suivi personnalisé"
      ],
      popular: false
    },
    {
      name: "Temps plein",
      price: "850",
      unit: "€/mois",
      description: "Pour un accueil 5 jours par semaine",
      features: [
        "5 jours par semaine",
        "Tous repas bio inclus",
        "Kit de change fourni",
        "Sorties nature quotidiennes",
        "Suivi personnalisé",
        "Ateliers parent-enfant inclus"
      ],
      popular: true
    },
    {
      name: "Accueil occasionnel",
      price: "45",
      unit: "€/jour",
      description: "Pour des besoins ponctuels ou dépannage",
      features: [
        "Réservation à la journée",
        "Repas bio inclus",
        "Matériel fourni",
        "Intégration aux activités",
        "Sous réserve de places"
      ],
      popular: false
    }
  ];

  const aids = [
    {
      name: "CAF - CMG",
      amount: "Jusqu'à 687€/mois",
      description: "Complément de libre choix du mode de garde selon vos revenus",
      conditions: "Sous conditions de ressources"
    },
    {
      name: "Crédit d'impôt",
      amount: "50% des frais",
      description: "Réduction d'impôt pour frais de garde d'enfants",
      conditions: "Plafonné à 1 150€/an/enfant"
    },
    {
      name: "Aide employeur",
      amount: "Variable",
      description: "Participation de l'employeur aux frais de garde",
      conditions: "Selon accords d'entreprise"
    },
    {
      name: "Aide municipale",
      amount: "Variable",
      description: "Aides locales selon la commune de résidence",
      conditions: "Se renseigner en mairie"
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tarification</span> & Aides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Des tarifs transparents et accessibles pour offrir à chaque famille 
              l'accès à notre pédagogie naturelle de qualité
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Nos tarifs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Nos Tarifs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Choisissez la formule qui correspond le mieux à vos besoins et à votre rythme de vie
            </p>
          </ScrollAnimation>
          
          <StaggeredAnimation 
            animation="scaleIn" 
            staggerDelay={0.2}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-card hover:shadow-luxury transition-smooth ${plan.popular ? 'ring-2 ring-primary shadow-luxury' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 shadow-soft">
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-xl text-muted-foreground ml-2">{plan.unit}</span>
                  </div>
                  <p className="text-muted-foreground text-balance">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${plan.popular ? 'shadow-luxury' : 'shadow-soft'}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.name === "Accueil occasionnel" ? "Réserver" : "Demander un devis"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
          
          <div className="mt-12 text-center">
            <div className="bg-accent/50 p-6 rounded-xl max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-2">Informations importantes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frais d'inscription : 150€ (non remboursables)</li>
                    <li>• Période d'adaptation incluse (1 semaine progressive)</li>
                    <li>• Facturation mensuelle à terme échu</li>
                    <li>• Possibilité de paiement en CESU</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Aides Financières</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              De nombreuses aides existent pour réduire significativement le coût de la garde 
              de votre enfant dans notre micro crèche Les petites perles Des Alpes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aids.map((aid, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth bg-card/80">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{aid.name}</h3>
                    <div className="text-right">
                      <div className="font-bold text-primary text-lg">{aid.amount}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-balance">{aid.description}</p>
                  <div className="text-sm text-muted-foreground bg-accent/50 p-3 rounded-lg">
                    <strong>Conditions :</strong> {aid.conditions}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Card className="border-0 shadow-card bg-card/80">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                    <Euro className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Exemple de calcul</h3>
                    <p className="text-muted-foreground mb-4">
                      Pour une famille avec un revenus moyens (3 500€ nets/mois), le coût réel mensuel 
                      pour un temps plein peut descendre à <strong className="text-primary">environ 300-400€</strong> après aides.
                    </p>
                    <div className="bg-accent/50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Tarif initial : <span className="font-semibold">850€</span></div>
                        <div>CMG CAF : <span className="font-semibold text-green-600">-450€</span></div>
                        <div>Crédit d'impôt : <span className="font-semibold text-green-600">-96€</span></div>
                        <div className="font-bold border-t pt-2 col-span-2">Reste à charge : <span className="text-primary">304€</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Services Inclus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Tous nos tarifs incluent ces services pour vous simplifier la vie au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="h-6 w-6" />, title: "Repas bio", description: "Petit déjeuner, déjeuner et goûter préparés avec des produits bio locaux" },
              { icon: <Clock className="h-6 w-6" />, title: "Horaires flexibles", description: "Accueil de 7h30 à 18h30 du lundi au vendredi" },
              { icon: <Check className="h-6 w-6" />, title: "Matériel fourni", description: "Jouets, matériel pédagogique, produits d'hygiène et linge de change" },
              { icon: <Info className="h-6 w-6" />, title: "Suivi personnalisé", description: "Carnet de liaison quotidien et entretiens réguliers avec les parents" }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm text-balance">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Besoin d'un Devis Personnalisé ?</h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Contactez-nous pour établir un devis adapté à vos besoins spécifiques 
            et bénéficier de nos conseils pour optimiser vos aides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-luxury">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" size="lg">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarification;