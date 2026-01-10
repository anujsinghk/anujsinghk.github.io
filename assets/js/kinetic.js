/**
 * Kinetic Typography & Text Animations
 * Uses GSAP for smooth, performant text animations
 */

class KineticText {
  constructor() {
    this.init();
  }

  init() {
    this.animateHeroTitle();
    this.setupScrollTextAnimations();
  }

  animateHeroTitle() {
    const title = document.querySelector('h1');
    if (!title || typeof gsap === 'undefined') return;

    // Split text into characters
    const chars = title.textContent.split('');
    title.innerHTML = chars.map((char) => `<span class="char">${char}</span>`).join('');

    // Animate each character
    gsap.from('.char', {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: 'back.out'
    });
  }

  setupScrollTextAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        x: -30,
        ease: 'power2.out'
      });
    });
  }
}

// Initialize when GSAP is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
      new KineticText();
    }
  });
} else if (typeof gsap !== 'undefined') {
  new KineticText();
}
