import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Shield, Star, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";
import interiorImage from "@/assets/galery/@GLEMET_LMDT_005_07_3832HD.jpg";
import galleryImage1 from "@/assets/galery/@GLEMET_LMDT_005_04_3751HD.jpg";
import galleryImage2 from "@/assets/galery/@GLEMET_LMDT_005_10_3863HD.jpg";
import galleryImage3 from "@/assets/galery/@GLEMET_LMDT_005_12_3898HD.jpg";
import galleryImage4 from "@/assets/galery/@GLEMET_LMDT_005_13_3912HD.jpg";
import galleryImage5 from "@/assets/galery/WhatsApp Image 2025-08-29 at 18.56.17-2.jpeg";
import { useNavigate } from "react-router-dom";

const Presentation = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const navigate = useNavigate();
  
  const galleryImages = [
    { src: galleryImage1, alt: "Enfants dans l'environnement naturel de la crèche" },
    { src: galleryImage2, alt: "Activités nature avec les enfants" },
    { src: galleryImage3, alt: "Moment de partage et d'apprentissage" },
    { src: galleryImage4, alt: "Jardin pédagogique de la crèche" },
    { src: galleryImage5, alt: "Équipe et enfants en activité" },
    { src: interiorImage, alt: "Intérieur chaleureux de la micro crèche" }
  ];

  const openLightbox = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setSelectedImage(galleryImages[imageIndex].src);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <div className="relative bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D7B772]/30 via-[#F6D7C5]/40 to-[#D7B772]/30 rounded-3xl blur-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-3xl blur-lg"></div>
                <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
                  Les petites perles
                  <br />
                  <span className="text-[#D7B772]">Des Alpes</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
                  Un environnement bienveillant où chaque enfant grandit en harmonie avec la nature
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-luxury transition-smooth hover:shadow-soft" onClick={() => navigate("/pedagogie")}>
                    Découvrir notre pédagogie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="backdrop-blur-sm" onClick={() => window.open("https://les-petites-perles-des-alpes.jdmapps.fr/index.php/espace-famille/reserver-une-place")}>
                    Faire une demande de préinscription
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Une philosophie éducative centrée sur l'épanouissement de chaque enfant 
              dans le respect de son rythme et de son environnement naturel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-smooth bg-card/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-peach rounded-2xl flex items-center justify-center mx-auto mb-6 text-foreground shadow-soft">
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
              <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Notre Approche</h2>
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

      {/* Galerie photos */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Notre Univers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Découvrez l'ambiance chaleureuse et naturelle de notre micro crèche 
              à travers ces moments de vie partagés avec les enfants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <img 
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-80 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(0)}
              />
            </div>
            <div className="space-y-6">
              <img 
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-36 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(1)}
              />
              <img 
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-36 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(2)}
              />
            </div>
            <div className="space-y-6">
              <img 
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-36 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(3)}
              />
              <img 
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-36 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(4)}
              />
            </div>
            <div className="lg:col-span-2">
              <img 
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-80 object-cover rounded-2xl shadow-luxury hover:shadow-soft transition-smooth cursor-pointer"
                onClick={() => openLightbox(5)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Offrez à votre enfant un environnement d'épanouissement unique 
            dans notre micro crèche Les petites perles Des Alpes
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Bouton fermer */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Bouton précédent */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Bouton suivant */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <img 
              src={selectedImage}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Indicateur de position */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;