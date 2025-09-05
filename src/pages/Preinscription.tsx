import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, FileText, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Preinscription = () => {
  const [formData, setFormData] = useState({
    childName: "",
    childBirthDate: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    desiredStartDate: "",
    formula: "",
    specificNeeds: "",
    acceptTerms: false,
    acceptNewsletter: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons sous 48h pour confirmer votre préinscription.",
    });
  };

  const steps = [
    {
      number: 1,
      title: "Préinscription en ligne",
      description: "Remplissez le formulaire ci-dessous"
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Préinscription</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Commencez dès maintenant le processus d'inscription de votre enfant 
            dans notre micro crèche Nature & Éveil
          </p>
        </div>
      </section>

      {/* Processus d'inscription */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Processus d'Inscription</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Un processus simple et personnalisé pour assurer le meilleur accueil de votre enfant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          </div>
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
                Tous les champs marqués d'un astérisque (*) sont obligatoires
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations sur l'enfant */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Informations sur l'enfant</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Prénom et nom de l'enfant *</Label>
                      <Input
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                        placeholder="Prénom Nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childBirthDate">Date de naissance *</Label>
                      <Input
                        id="childBirthDate"
                        type="date"
                        value={formData.childBirthDate}
                        onChange={(e) => setFormData({...formData, childBirthDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Informations parents */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Informations des parents</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Nom du parent responsable *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        placeholder="Prénom Nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresse email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="01 23 45 67 89"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse complète *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        placeholder="Rue, ville, code postal"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Modalités d'accueil */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Modalités d'accueil souhaitées</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="desiredStartDate">Date de début souhaitée *</Label>
                      <Input
                        id="desiredStartDate"
                        type="date"
                        value={formData.desiredStartDate}
                        onChange={(e) => setFormData({...formData, desiredStartDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="formula">Formule souhaitée *</Label>
                      <Select value={formData.formula} onValueChange={(value) => setFormData({...formData, formula: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez une formule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temps-partiel">Temps partiel (2-3 jours/semaine)</SelectItem>
                          <SelectItem value="temps-plein">Temps plein (5 jours/semaine)</SelectItem>
                          <SelectItem value="occasionnel">Accueil occasionnel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Besoins spécifiques */}
                <div className="space-y-2">
                  <Label htmlFor="specificNeeds">Besoins spécifiques ou informations importantes</Label>
                  <Textarea
                    id="specificNeeds"
                    value={formData.specificNeeds}
                    onChange={(e) => setFormData({...formData, specificNeeds: e.target.value})}
                    placeholder="Allergies, habitudes particulières, informations médicales..."
                    rows={4}
                  />
                </div>

                {/* Consentements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({...formData, acceptTerms: !!checked})}
                      required
                    />
                    <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                      J'accepte les conditions générales d'admission et le règlement intérieur de la micro crèche *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="acceptNewsletter"
                      checked={formData.acceptNewsletter}
                      onCheckedChange={(checked) => setFormData({...formData, acceptNewsletter: !!checked})}
                    />
                    <Label htmlFor="acceptNewsletter" className="text-sm leading-relaxed">
                      J'accepte de recevoir des informations sur les activités et événements de la micro crèche
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full shadow-luxury" disabled={!formData.acceptTerms}>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Envoyer ma demande de préinscription
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Informations Importantes</h2>
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