export const product = {
  name: 'Kit de 150 Robots y Experimentos STEM',
  price: 7,
  currency: 'USD',
  minimumAge: 4,
  maximumAge: 12,
  robotCount: 50,
  experimentCount: 100,
  bonuses: [
    'Plantillas Imprimibles de 30 Robots de Cartón para Recortar y Armar al Instante',
    'Kit de 100 Recetas de Slime, Volcanes y Burbujas Gigantes',
    'Kit de 25 Proyectos Ganadores para la Feria de Ciencias de su Colegio, con Guion de Exposición',
    'Kit de 50 Proyectos de 15 Minutos para los Días en que Tienes Poco Tiempo',
    'Set de 20 Diplomas e Insignias Imprimibles de Niño Genio para Cada Proyecto Terminado',
  ],
} as const;

export const landingParts = [
  { id: 'hero', title: 'Hero', visible: true, purchase: false },
  { id: 'benefits', title: '¿Qué vas a obtener?', visible: true, purchase: false },
  { id: 'solution', title: 'Esta es la solución inmediata.', visible: true, purchase: false },
  { id: 'contents', title: 'Esto es exactamente lo que recibirás.', visible: true, purchase: false },
  { id: 'bonuses', title: 'Bonos.', visible: true, purchase: false },
  { id: 'offer', title: 'Oferta principal.', visible: false, purchase: true },
  { id: 'testimonials', title: 'Testimonios.', visible: false, purchase: false },
  { id: 'recap', title: 'Recapitulación.', visible: false, purchase: true },
  { id: 'faq', title: 'Preguntas frecuentes.', visible: false, purchase: false },
] as const;