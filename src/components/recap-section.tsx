import { Bot, Check, FileText, FlaskConical, Gift, Lock } from 'lucide-react';
import paymentMethods from '@/assets/payment-methods.jpg';
import { product } from '@/lib/landing-config';
import { BonusPreview } from '@/components/bonus-section';

const mainContents = [
  'Ebook completo con 150 proyectos paso a paso',
  '50 robots para armar con materiales de casa',
  '100 experimentos para descubrir la ciencia',
  'Guía detallada con instrucciones y explicaciones',
  'Proyectos organizados por edad y nivel de dificultad',
];

const recapBonuses = [
  { name: '30 Robots de Cartón para Recortar y Armar', kind: 'templates' },
  { name: '100 Recetas de Slime, Volcanes y Burbujas Gigantes', kind: 'recipes' },
  { name: '25 Proyectos para la Feria de Ciencias', kind: 'fair' },
  { name: '50 Proyectos para Crear en 15 Minutos', kind: 'quick' },
] as const;

export function RecapSection() {
  return (
    <div className="learning-band recap-band">
      <div className="learning-inner">
        <h2 className="learning-title recap-heading">RECAPITULEMOS TODO LO QUE TE LLEVARÁS</h2>
        <div className="bundle-stage">
          <div className="bundle-main" aria-hidden="true">
            <div className="ebook-cover">
              <div className="preview-overline">TALLER CREATIVO</div>
              <div className="ebook-cover-title">150 ROBOTS<br />Y EXPERIMENTOS<br />STEM</div>
              <div className="ebook-cover-art"><Bot size={74} strokeWidth={1.1} /><FlaskConical size={44} strokeWidth={1.2} /></div>
              <div className="preview-footer">Guía detallada · 4 a 12 años</div>
            </div>
          </div>
          <div className="bundle-bonuses" aria-hidden="true">
            {recapBonuses.map(bonus => (
              <div className="bundle-mini" key={bonus.kind}><BonusPreview kind={bonus.kind} /></div>
            ))}
          </div>
        </div>
        <div className="recap-lists">
          <div className="recap-list">
            <h3><FileText size={17} aria-hidden="true" />El producto principal</h3>
            <ul>
              {mainContents.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="recap-list">
            <h3><Gift size={17} aria-hidden="true" />Tus 4 bonos digitales</h3>
            <ul>
              {recapBonuses.map(bonus => <li key={bonus.kind}><Gift aria-hidden="true" />{bonus.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="recap-price">
          <div className="offer-before">ANTES: <s>$27 USD</s></div>
          <div className="offer-now">AHORA SOLO: <span>${product.price} USD</span></div>
          <div className="offer-once">Pago único</div>
          <div className="recap-access">Pago único · Acceso inmediato mediante Hotmart</div>
        </div>
        <button type="button" className="buy-button">¡SÍ, QUIERO MI KIT DE 150 ROBOTS Y EXPERIMENTOS STEM!</button>
        <div className="offer-secure"><Lock size={14} aria-hidden="true" />Pago 100% seguro · Pago único · Acceso inmediato</div>
        <img className="offer-payments" src={paymentMethods} alt="Métodos de pago compatibles: tarjetas, PayPal, Google Pay, Apple Pay y más" loading="lazy" />
        <p className="recap-notice">IMPORTANTE: El precio actual de $7 USD puede cambiar en cualquier momento</p>
      </div>
    </div>
  );
}
