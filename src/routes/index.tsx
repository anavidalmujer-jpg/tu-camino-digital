import { createFileRoute } from "@tanstack/react-router";
import { Atom, Check, FileText, FlaskConical, Lightbulb } from 'lucide-react';
import projectImage from '@/assets/stem-projects.asset.json';
import { landingParts, product } from '@/lib/landing-config';
import { EbookContents, ImmediateSolution, ProductBenefits } from '@/components/learning-sections';
import { BonusSection } from '@/components/bonus-section';
import { MainOffer, Testimonials } from '@/components/offer-section';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Kit de 150 Robots y Experimentos STEM · Taller Creativo' },
      { name: 'description', content: 'Un ebook con 50 robots y 100 experimentos para niños de 4 a 12 años. Crea en familia con materiales cotidianos, instrucciones y explicaciones paso a paso.' },
      { property: 'og:title', content: 'Kit de 150 Robots y Experimentos STEM' },
      { property: 'og:description', content: 'Menos pantallas, más descubrimientos. 150 proyectos para aprender creando en casa y en familia.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {landingParts.map(part => (
        <section key={part.id} id={part.id} hidden={!part.visible} aria-label={part.id === 'hero' ? product.name : part.title}>
          {part.id === 'hero' ? <ProductHero /> : null}
          {part.id === 'benefits' ? <ProductBenefits /> : null}
          {part.id === 'solution' ? <ImmediateSolution /> : null}
          {part.id === 'contents' ? <EbookContents /> : null}
          {part.id === 'bonuses' ? <BonusSection /> : null}
          {part.id === 'offer' ? <MainOffer /> : null}
          {part.id === 'testimonials' ? <Testimonials /> : null}
        </section>
      ))}
    </main>
  );
}

function ProductHero() {
  return (
    <div className="stem-hero">
      <div className="hero-scene">
        <img src={projectImage.url} alt="Brazo robótico hidráulico de cartón, volcán de bicarbonato y robot cepillo: proyectos del ebook" fetchPriority="high" />
      </div>
      <div className="hero-inner">
        <div className="workshop-brand">
          <Atom className="brand-icon" strokeWidth={1.6} aria-hidden="true" />
          <div><div className="brand-name">TALLER CREATIVO</div><div className="brand-note">PEQUEÑAS MANOS. GRANDES IDEAS.</div></div>
        </div>
        <div className="hero-copy">
          <div className="age-label">PARA PEQUEÑOS INVENTORES DE 4 A 12 AÑOS</div>
          <h1 className="hero-title">Kit de <span className="title-highlight">150 Robots</span><br />y Experimentos<br />STEM</h1>
          <p className="hero-promise">Menos pantallas.<br />Más «¡mira lo que hice!».</p>
          <p className="hero-description">Transforma los materiales de casa en robots y descubrimientos. Comparte con tu hijo el placer de crear, aprender y entender por qué pasan las cosas.</p>
          <ul className="hero-features">
            <li><Check aria-hidden="true" />Instrucciones paso a paso, sin ser experto en ciencia</li>
            <li><Check aria-hidden="true" />Proyectos por edad y nivel de dificultad</li>
            <li><Check aria-hidden="true" />Materiales cotidianos y retos para seguir inventando</li>
          </ul>
          <div className="ebook-label"><FileText size={14} aria-hidden="true" /> UN SOLO EBOOK · 150 PROYECTOS · GUÍA DETALLADA</div>
        </div>
      </div>
      <div className="project-caption"><Lightbulb size={17} aria-hidden="true" />Ideas del ebook, hechas realidad.</div>
      <div className="hero-facts">
        <div className="facts-inner">
          <div className="hero-fact"><span className="fact-value">50</span><span className="fact-label">Robots para<br />armar y explorar</span></div>
          <div className="hero-fact"><span className="fact-value">100</span><span className="fact-label">Experimentos para<br />descubrir la ciencia</span></div>
          <div className="hero-fact"><span className="fact-value">4–12</span><span className="fact-label">Años de curiosidad<br />y ganas de crear</span></div>
          <div className="hero-fact"><FlaskConical className="text-secondary" size={35} strokeWidth={1.4} aria-hidden="true" /><span className="fact-label">Aprendizaje con las manos.<br />Tiempo juntos de verdad.</span></div>
        </div>
      </div>
    </div>
  );
}
