import { Check, CheckCircle2, Clock3, FileText, FlaskConical, Scissors, Trophy, Mic, Bot } from 'lucide-react';

const bonuses = [
  { number: 1, name: '30 Robots de Cartón para Recortar y Armar', description: 'Plantillas imprimibles de 30 robots de cartón para recortar y montar.', benefit: 'Empieza a crear sin tener que dibujar las piezas desde cero.', kind: 'templates' },
  { number: 2, name: '100 Recetas de Slime, Volcanes y Burbujas Gigantes', description: 'Un kit digital de recetas para explorar mezclas, espuma y burbujas.', benefit: 'Ten nuevas ideas a mano para la próxima tarde de experimentos.', kind: 'recipes' },
  { number: 3, name: '25 Proyectos para la Feria de Ciencias', description: 'Propuestas para la feria escolar con guion de exposición incluido.', benefit: 'Elige un proyecto y prepara cómo contarlo frente a la clase.', kind: 'fair' },
  { number: 4, name: '50 Proyectos para Crear en 15 Minutos', description: 'Un kit digital para los días en que tienes poco tiempo.', benefit: 'Comparte un momento creativo sin necesitar toda una tarde.', kind: 'quick' },
] as const;

function BonusPreview({ kind }: { kind: typeof bonuses[number]['kind'] }) {
  if (kind === 'templates') return (
    <div className="bonus-preview template-preview" aria-hidden="true">
      <div className="template-sheet"><div className="preview-overline">TALLER CREATIVO · IMPRIMIBLES</div><div className="preview-title">RECORTA.<br />ARMA. INVENTA.</div><div className="robot-pattern"><Bot size={84} strokeWidth={1} /><div className="cutout-pieces"><span /><span /><span /><span /></div></div><div className="preview-footer"><Scissors size={13} />30 plantillas de robots</div></div>
      <Scissors className="preview-floating-icon" size={42} strokeWidth={1.4} />
    </div>
  );
  if (kind === 'recipes') return (
    <div className="bonus-preview recipe-preview" aria-hidden="true">
      <div className="recipe-book"><div className="preview-overline">TU LABORATORIO EN CASA</div><div className="preview-title">100 RECETAS<br />PARA EXPLORAR</div><div className="recipe-art"><FlaskConical size={72} strokeWidth={1.3} /><span className="bubble bubble-one" /><span className="bubble bubble-two" /><span className="bubble bubble-three" /></div><div className="recipe-categories">SLIME · VOLCANES<br />BURBUJAS GIGANTES</div></div><div className="recipe-page"><FlaskConical size={26} /><span /><span /><span /><span /></div>
    </div>
  );
  if (kind === 'fair') return (
    <div className="bonus-preview fair-preview" aria-hidden="true">
      <div className="fair-folder"><Trophy size={31} strokeWidth={1.4} /><div className="preview-title">MI FERIA<br />DE CIENCIAS</div><div className="preview-footer">25 proyectos para presentar</div></div><div className="speech-sheet"><Mic size={20} /><strong>MI GUION</strong><div className="speech-step">Qué investigué</div><div className="speech-step">Cómo lo hice</div><div className="speech-step">Qué descubrí</div></div>
    </div>
  );
  return (
    <div className="bonus-preview quick-preview" aria-hidden="true">
      <div className="quick-sheet"><div className="preview-overline">UN RATITO PARA CREAR</div><div className="quick-time"><span>15</span><Clock3 size={38} strokeWidth={1.3} /></div><div className="preview-title">MINUTOS.<br />GRANDES IDEAS.</div><div className="quick-check"><CheckCircle2 size={14} /><span /></div><div className="quick-check"><CheckCircle2 size={14} /><span /></div><div className="quick-check"><CheckCircle2 size={14} /><span /></div><div className="preview-footer">50 proyectos rápidos</div></div><div className="time-stamp"><Clock3 size={20} />15 MIN</div>
    </div>
  );
}

export function BonusSection() {
  return (
    <div className="learning-band bonus-band">
      <div className="learning-inner">
        <h2 className="learning-title bonus-heading">ADEMÁS, SI TE UNES AHORA TAMBIÉN TE LLEVARÁS:</h2>
        <div className="bonus-grid">
          {bonuses.map(bonus => (
            <article className="bonus-card" key={bonus.number}>
              <div className="bonus-included"><Check size={14} aria-hidden="true" />Incluido con tu compra</div>
              <BonusPreview kind={bonus.kind} />
              <div className="bonus-body">
                <div className="bonus-number"><FileText size={13} aria-hidden="true" />BONO {bonus.number}</div>
                <h3>{bonus.name}</h3>
                <p>{bonus.description}</p>
                <p className="bonus-benefit">{bonus.benefit}</p>
                <div className="bonus-free"><CheckCircle2 size={15} aria-hidden="true" />Incluido sin coste adicional</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}