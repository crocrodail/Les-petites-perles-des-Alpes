import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, MapPin, Phone, Mail, FileText, HelpCircle, MessageCircle, Facebook } from "lucide-react";

const InfosPratiques = () => {
  const faqItems = [
    {
      question: "À partir de quel âge accueillez-vous les enfants ?",
      answer: "Nous accueillons les enfants dès 2 mois et demi jusqu'à 3 ans. L'enfant doit avoir acquis la marche pour profiter pleinement de nos activités nature."
    },
    {
      question: "Que faire si mon enfant tombe malade ?",
      answer: "Si votre enfant présente de la fièvre (38°C ou plus) ou des symptômes contagieux, nous ne pouvons pas l'accueillir. Vous devez nous prévenir le plus tôt possible et fournir un certificat médical de non-contagion pour le retour."
    },
    {
      question: "Fournissez-vous les repas et collations ?",
      answer: "Oui, tous les repas sont inclus dans nos tarifs : petit-déjeuner, déjeuner et goûter. Nous privilégions les produits bio et locaux, avec adaptation possible pour les régimes spéciaux (allergies, etc.)."
    },
    {
      question: "Comment se passe l'adaptation de mon enfant ?",
      answer: "L'adaptation se fait progressivement sur une semaine. Elle commence par des créneaux courts avec votre présence, puis s'allonge graduellement jusqu'à l'accueil normal. C'est un moment clé pour rassurer l'enfant et les parents."
    },
    {
      question: "Que dois-je apporter pour mon enfant ?",
      answer: "Nous fournissons tout le nécessaire : couches, produits d'hygiène, linge de change, doudou de la crèche. Vous pouvez apporter le doudou personnel de votre enfant et ses médicaments si nécessaire."
    },
    {
      question: "Comment puis-je suivre la journée de mon enfant ?",
      answer: "Chaque enfant a un carnet de liaison quotidien avec photos, activités, repas, sommeil. Nous organisons aussi des entretiens réguliers et vous pouvez nous appeler à tout moment."
    },
    {
      question: "Que se passe-t-il en cas de météo défavorable ?",
      answer: "Nous sortons même par temps de pluie (avec équipements adaptés) ! En cas de météo vraiment extrême, nous avons des activités nature d'intérieur : jardinage en bacs, observation d'insectes, créations avec éléments naturels."
    },
    {
      question: "Acceptez-vous les enfants avec des besoins particuliers ?",
      answer: "Nous étudions chaque situation individuellement. Notre petite structure permet un accompagnement personnalisé, mais nous devons nous assurer de pouvoir répondre aux besoins spécifiques de chaque enfant en toute sécurité."
    }
  ];

  const contactInfo = {
    address: "224 Rue du Bois Bizot, 74930 Reignier-Ésery",
    phone: "07 57 57 45 29",
    email: "lespetitesperlesdesalpes@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61556281616849",
    hours: {
      weekdays: "Lundi au Vendredi : 7h30 - 18h30",
      weekend: "Fermé les week-ends et jours fériés"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimation animation="slideUp">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Infos <span className="bg-gradient-primary bg-clip-text text-transparent">Pratiques</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Toutes les informations utiles pour vous accompagner au quotidien 
              dans l'accueil de votre enfant
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Nous Contacter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </ScrollAnimation>
          
          <div className="flex flex-wrap justify-center gap-8">
            <ScrollAnimation animation="scaleIn" delay={0.1}>
              <Card className="border-0 shadow-card hover:shadow-soft transition-smooth text-center w-64">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground text-sm text-balance">{contactInfo.address}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scaleIn" delay={0.2}>
              <Card className="border-0 shadow-card hover:shadow-soft transition-smooth text-center w-64">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                  <p className="text-muted-foreground text-sm">{contactInfo.phone}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scaleIn" delay={0.3}>
              <Card className="border-0 shadow-card hover:shadow-soft transition-smooth text-center w-64">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm break-all">{contactInfo.email}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scaleIn" delay={0.4}>
              <Card className="border-0 shadow-card hover:shadow-soft transition-smooth text-center w-64">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Facebook className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Facebook</h3>
                  <a 
                    href={contactInfo.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-smooth text-sm"
                  >
                    Suivez-nous sur Facebook
                  </a>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scaleIn" delay={0.5}>
              <Card className="border-0 shadow-card hover:shadow-soft transition-smooth text-center w-64">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                  <p className="text-muted-foreground text-sm text-balance">
                    {contactInfo.hours.weekdays}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Les réponses aux questions les plus courantes de nos familles
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scaleIn" delay={0.3}>
            <Card className="border-0 shadow-luxury bg-card/95">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-balance">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Horaires détaillés */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Horaires & Fonctionnement</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horaires d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span className="text-primary font-semibold">7h30 - 18h30</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Week-ends</span>
                  <span className="text-muted-foreground">Fermé</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Jours fériés</span>
                  <span className="text-muted-foreground">Fermé</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4">
                  <strong>Fermetures annuelles :</strong> 3 semaines en août et 1 semaine entre Noël et Nouvel An
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Documents utiles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Règlement intérieur
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Projet pédagogique
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Contrat d'accueil type
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Fiche d'inscription
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Guide des parents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informations pratiques diverses */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Informations Utiles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Accès & Transport</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Métro :</strong> Ligne 1, Station Louvre-Rivoli (5 min à pied)
                </div>
                <div className="text-sm">
                  <strong>Bus :</strong> Lignes 21, 27, 39, 48
                </div>
                <div className="text-sm">
                  <strong>Parking :</strong> Parking Rivoli à 100m
                </div>
                <div className="text-sm">
                  <strong>Vélib' :</strong> Station à 50m de la crèche
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Équipe & Encadrement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Directrice :</strong> Éducatrice de jeunes enfants
                </div>
                <div className="text-sm">
                  <strong>Ratio :</strong> 1 adulte pour 5 enfants maximum
                </div>
                <div className="text-sm">
                  <strong>Formation :</strong> Équipe formée à la pédagogie nature
                </div>
                <div className="text-sm">
                  <strong>Suivi médical :</strong> Pédiatre référent
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Sécurité & Hygiène</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Agrément PMI :</strong> Contrôlé régulièrement
                </div>
                <div className="text-sm">
                  <strong>Assurance :</strong> Responsabilité civile complète
                </div>
                <div className="text-sm">
                  <strong>Hygiène :</strong> Protocoles stricts appliqués
                </div>
                <div className="text-sm">
                  <strong>Sécurité :</strong> Espaces sécurisés et adaptés
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & formulaire */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Une Question ?</h2>
            <p className="text-xl text-muted-foreground text-balance">
              N'hésitez pas à nous contacter pour toute information complémentaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Nous appeler</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Notre équipe est disponible aux heures d'ouverture pour répondre à vos questions.
                </p>
                <Button className="w-full" onClick={() => window.open("tel:0757574529")}>
                  <Phone className="h-4 w-4 mr-2" />
                  07 57 57 45 29
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Nous écrire</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Envoyez-nous un email, nous vous répondrons dans les plus brefs délais.
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.open("mailto:lespetitesperlesdesalpes@gmail.com")}>
                  <Mail className="h-4 w-4 mr-2" />
                  lespetitesperlesdesalpes@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-luxury bg-gradient-hero">
              <CardContent className="p-8">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Besoin d'aide pour votre inscription ?</h3>
                <p className="text-muted-foreground mb-6 text-balance">
                  Notre équipe vous accompagne dans toutes vos démarches administratives 
                  et vous aide à optimiser vos aides financières.
                </p>
                <Button size="lg" className="shadow-luxury">
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfosPratiques;