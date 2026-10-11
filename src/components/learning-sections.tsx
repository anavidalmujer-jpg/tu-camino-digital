import { Bot, Brain, HeartHandshake, Lightbulb, Battery, Magnet, Wind, ArrowRight, CornerDownRight, FlaskConical, Droplets, Sun, Volume2, Sprout, HeartPulse, Moon, CloudRain, Triangle, Waves, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import familyImage from '@/assets/family-stem.jpg';
import { ebookModules } from '@/lib/ebook-modules';

const outcomes = [
  { icon: Bot, text: 'Ver a tu hijo transformar cartón en robots que se mueven.' },
  { icon: Brain, text: 'Que entienda la ciencia probando, no solo memorizando.' },
  { icon: HeartHandshake, text: 'Compartir retos en familia que despierten sus ganas de inventar.' },
];

export function ProductBenefits() {
  return (
    <div className="learning-band benefits-band">
      <div className="learning-inner">
        <h2 className="learning-title">¿Qué vas a obtener?</h2>
        <div className="outcome-grid">
          {outcomes.map(({ icon: Icon, text }) => (
            <article className="outcome-card" key={text}>
              <Icon className="outcome-icon" strokeWidth={1.5} aria-hidden="true" />
              <h3>{text}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ImmediateSolution() {
  return (
    <div className="learning-band solution-band">
      <div className="learning-inner">
        <h2 className="learning-title">Esta es la solución inmediata.</h2>
        <p className="solution-intro">Para quienes quieren despertar la curiosidad de sus hijos por la ciencia, desean más momentos juntos sin pantallas y necesitan ideas claras que puedan llevar a la práctica en casa.</p>
        <div className="solution-grid">
          <img className="solution-image" src={familyImage} width={1200} height={1008} loading="lazy" alt="Una madre y su hija exploran juntas una mano robótica de cartón con pajitas e hilos" />
          <div className="solution-copy">
            <h3>Te diré algo claramente…</h3>
            <p>No necesitas saber de robótica ni tener un laboratorio. Lo que necesitas es una idea concreta y saber por dónde empezar.</p>
            <p>Si quieres proponer algo más que otra tarde frente a una pantalla, pero no sabes qué actividad elegir ni qué materiales buscar, este kit te da un punto de partida.</p>
            <p>Elige un proyecto según la edad y el nivel de tu hijo, reúne los materiales indicados y sigue el paso a paso. Desde una mano de cartón hasta un volcán de bicarbonato, cada creación abre una nueva pregunta.</p>
            <p className="solution-emphasis">La guía detallada explica cómo hacerlo y por qué funciona. Así, no solo arman algo: descubren juntos.</p>
            <p className="solution-care">Acompaña a tu hijo y sigue las indicaciones de seguridad de cada proyecto.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const sceneIcons: Record<string, [LucideIcon, LucideIcon]> = {
  robot: [Bot, Lightbulb], circuit: [Battery, Bot], motion: [Wind, Magnet], code: [ArrowRight, CornerDownRight],
  chemistry: [FlaskConical, Droplets], water: [Droplets, Wind], magnet: [Battery, Magnet], light: [Sun, Volume2],
  nature: [Sprout, HeartPulse], space: [Moon, CloudRain], physics: [Triangle, Waves],
};

export function EbookContents() {
  return (
    <div className="learning-band contents-band">
      <div className="learning-inner">
        <h2 className="learning-title">Esto es exactamente lo que recibirás.</h2>
        <p className="contents-intro">Un único ebook con 150 proyectos organizados en 11 capítulos, más la guía detallada con el paso a paso y la explicación de cada robot y experimento.</p>
        <div className="module-grid">
          {ebookModules.map(module => {
            const icons = sceneIcons[module.scene];
            if (!icons) return null;
            const [MainIcon, DetailIcon] = icons;
            return (
              <article className="module-card" key={module.number}>
                <div className="module-scene" aria-hidden="true">
                  <MainIcon className="module-main-icon" strokeWidth={1.3} />
                  <span className="module-connector" />
                  <DetailIcon className="module-detail-icon" strokeWidth={1.5} />
                </div>
                <div className="module-body">
                  <div className="module-meta"><span>MÓDULO {module.number}</span><span>Proyectos {module.range}</span></div>
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                  <div className="module-examples">{module.examples}</div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="guide-note"><BookOpen size={25} strokeWidth={1.5} aria-hidden="true" /><p><strong>La guía detallada acompaña todos los proyectos.</strong> Materiales, instrucciones, explicación de cómo funcionan y retos para seguir explorando, ordenados por número.</p></div>
      </div>
    </div>
  );
}