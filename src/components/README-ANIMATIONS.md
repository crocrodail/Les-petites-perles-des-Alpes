# Système d'Animations de Scroll

Ce système d'animations léger et performant utilise Framer Motion avec des optimisations pour les performances.

## Composants disponibles

### 1. ScrollAnimation
Composant de base pour les animations au scroll.

```tsx
import ScrollAnimation from '@/components/ScrollAnimation';

<ScrollAnimation 
  animation="slideUp" 
  duration={0.6} 
  delay={0.2}
  className="my-4"
>
  <h2>Mon titre animé</h2>
</ScrollAnimation>
```

**Props disponibles :**
- `animation`: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn'
- `duration`: number (défaut: 0.6)
- `delay`: number (défaut: 0)
- `distance`: number (défaut: 50)
- `className`: string
- `as`: élément HTML à utiliser

### 2. StaggeredAnimation
Pour animer plusieurs éléments en cascade.

```tsx
import StaggeredAnimation from '@/components/StaggeredAnimation';

<StaggeredAnimation 
  animation="scaleIn" 
  staggerDelay={0.15}
  className="grid grid-cols-3 gap-4"
>
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</StaggeredAnimation>
```

### 3. ParallaxScroll
Pour des effets de parallaxe légers.

```tsx
import ParallaxScroll from '@/components/ParallaxScroll';

<ParallaxScroll speed={0.3} direction="up">
  <img src="image.jpg" alt="Image avec parallaxe" />
</ParallaxScroll>
```

### 4. AnimatedText
Pour animer du texte mot par mot.

```tsx
import AnimatedText from '@/components/AnimatedText';

<AnimatedText 
  animation="slideUp" 
  stagger={0.05}
>
  "Ce texte apparaîtra mot par mot"
</AnimatedText>
```

## Hooks disponibles

### useScrollAnimation
Hook personnalisé pour gérer les animations de scroll.

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const { ref, isInView } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
  delay: 0
});
```

## Exemples d'utilisation

### Section avec titre et contenu
```tsx
<section className="py-24">
  <ScrollAnimation animation="slideUp" className="text-center mb-16">
    <h2 className="text-4xl font-bold">Mon Titre</h2>
    <p className="text-xl text-muted-foreground">Description</p>
  </ScrollAnimation>
  
  <StaggeredAnimation animation="scaleIn" staggerDelay={0.1}>
    {items.map(item => <Card key={item.id}>{item.content}</Card>)}
  </StaggeredAnimation>
</section>
```

### Grille d'images avec parallaxe
```tsx
<div className="grid grid-cols-2 gap-4">
  <ParallaxScroll speed={0.2} direction="up">
    <img src="image1.jpg" alt="Image 1" />
  </ParallaxScroll>
  <ParallaxScroll speed={0.3} direction="down">
    <img src="image2.jpg" alt="Image 2" />
  </ParallaxScroll>
</div>
```

## Optimisations de performance

- Utilise `IntersectionObserver` pour détecter la visibilité
- Animations déclenchées une seule fois par défaut (`triggerOnce: true`)
- Throttling des événements de scroll
- Animations CSS optimisées avec `transform` et `opacity`
- Lazy loading des animations

## Bonnes pratiques

1. **Utilisez des animations subtiles** - Évitez les animations trop agressives
2. **Respectez la hiérarchie** - Les titres apparaissent avant le contenu
3. **Timing cohérent** - Utilisez des délais progressifs (0.1s, 0.2s, 0.3s...)
4. **Performance** - Évitez trop d'animations simultanées
5. **Accessibilité** - Respectez les préférences de mouvement réduit

## Personnalisation

Vous pouvez personnaliser les animations en modifiant les variants dans `ScrollAnimation.tsx` :

```tsx
const animationVariants = {
  customAnimation: {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  }
};
```
