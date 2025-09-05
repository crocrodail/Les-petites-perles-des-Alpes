import ScrollAnimation from './ScrollAnimation';
import StaggeredAnimation from './StaggeredAnimation';
import ParallaxScroll from './ParallaxScroll';
import AnimatedText from './AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const AnimationShowcase = () => {
  const demoItems = [
    { id: 1, title: "Animation 1", content: "Contenu de démonstration" },
    { id: 2, title: "Animation 2", content: "Contenu de démonstration" },
    { id: 3, title: "Animation 3", content: "Contenu de démonstration" },
    { id: 4, title: "Animation 4", content: "Contenu de démonstration" },
  ];

  return (
    <div className="space-y-24 py-24 px-4">
      {/* Fade In Animation */}
      <section>
        <ScrollAnimation animation="fadeIn" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Animation Fade In</h2>
          <p className="text-muted-foreground">Cette section apparaît en fondu</p>
        </ScrollAnimation>
      </section>

      {/* Slide Up Animation */}
      <section>
        <ScrollAnimation animation="slideUp" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Animation Slide Up</h2>
          <p className="text-muted-foreground">Cette section glisse vers le haut</p>
        </ScrollAnimation>
      </section>

      {/* Scale In Animation */}
      <section>
        <ScrollAnimation animation="scaleIn" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Animation Scale In</h2>
          <p className="text-muted-foreground">Cette section s'agrandit progressivement</p>
        </ScrollAnimation>
      </section>

      {/* Staggered Animation */}
      <section>
        <ScrollAnimation animation="slideUp" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Animation en Cascade</h2>
          <p className="text-muted-foreground">Les éléments apparaissent un par un</p>
        </ScrollAnimation>
        
        <StaggeredAnimation 
          animation="scaleIn" 
          staggerDelay={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {demoItems.map(item => (
            <Card key={item.id} className="p-4">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </StaggeredAnimation>
      </section>

      {/* Animated Text */}
      <section>
        <ScrollAnimation animation="slideUp" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Texte Animé</h2>
          <p className="text-muted-foreground">Les mots apparaissent progressivement</p>
        </ScrollAnimation>
        
        <div className="text-center">
          <AnimatedText 
            animation="slideUp" 
            stagger={0.1}
            className="text-xl font-medium"
          >
            "Ce texte apparaît mot par mot avec une animation fluide et élégante"
          </AnimatedText>
        </div>
      </section>

      {/* Parallax Effect */}
      <section className="relative h-96 overflow-hidden rounded-2xl">
        <ParallaxScroll speed={0.5} direction="up">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <ScrollAnimation animation="scaleIn" className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Effet Parallaxe</h3>
              <p className="text-xl">Cette section a un effet de parallaxe léger</p>
            </ScrollAnimation>
          </div>
        </ParallaxScroll>
      </section>

      {/* Different Directions */}
      <section>
        <ScrollAnimation animation="slideUp" className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Directions d'Animation</h2>
          <p className="text-muted-foreground">Différentes directions d'apparition</p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollAnimation animation="slideLeft" delay={0.1}>
            <Card className="p-4 text-center">
              <h4 className="font-semibold mb-2">Slide Left</h4>
              <p className="text-sm text-muted-foreground">Glisse depuis la droite</p>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideRight" delay={0.2}>
            <Card className="p-4 text-center">
              <h4 className="font-semibold mb-2">Slide Right</h4>
              <p className="text-sm text-muted-foreground">Glisse depuis la gauche</p>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <Card className="p-4 text-center">
              <h4 className="font-semibold mb-2">Slide Up</h4>
              <p className="text-sm text-muted-foreground">Glisse depuis le bas</p>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideDown" delay={0.4}>
            <Card className="p-4 text-center">
              <h4 className="font-semibold mb-2">Slide Down</h4>
              <p className="text-sm text-muted-foreground">Glisse depuis le haut</p>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <ScrollAnimation animation="scaleIn" className="text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Prêt à commencer ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Utilisez ces composants d'animation pour créer des expériences utilisateur fluides et engageantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Commencer</Button>
                <Button variant="outline">En savoir plus</Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default AnimationShowcase;
