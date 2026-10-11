import { Check, Lock, MessageCircle } from 'lucide-react';
import paymentMethods from '@/assets/payment-methods.jpg';
import { product } from '@/lib/landing-config';

const includes = [
  '50 robots para armar con materiales de casa',
  '100 experimentos para descubrir la ciencia',
  'Guía detallada de los 150 proyectos',
  '4 bonos digitales incluidos',
];

export function MainOffer() {
  return (
    <div className="learning-band offer-band">
      <div className="learning-inner offer-card">
        <div className="offer-kicker">UN SOLO EBOOK · ACCESO DIGITAL</div>
        <h2 className="learning-title offer-title">{product.name}</h2>
        <ul className="offer-includes">
          {includes.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}
        </ul>
        <div className="offer-before">ANTES: <s>$27 USD</s></div>
        <div className="offer-now">AHORA SOLO: <span>${product.price} USD</span></div>
        <div className="offer-once">Pago único</div>
        <button type="button" className="buy-button">¡QUIERO MI KIT DE 150 ROBOTS Y EXPERIMENTOS STEM AHORA!</button>
        <div className="offer-secure"><Lock size={14} aria-hidden="true" />Pago 100% seguro · Pago único · Acceso inmediato</div>
        <img className="offer-payments" src={paymentMethods} alt="Métodos de pago compatibles: tarjetas, PayPal, Google Pay, Apple Pay y más" loading="lazy" />
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="learning-band testimonials-band">
      <div className="learning-inner">
        <h2 className="learning-title testimonials-title">Únete a personas de todo el mundo que quieren que sus hijos aprendan ciencia creando con sus propias manos</h2>
        <p className="testimonials-sub">Y obtén el {product.name} para transformar los materiales de casa en tardes de descubrimientos, lejos de las pantallas.</p>
        <div className="chat-grid">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="chat-shot">
              <div className="chat-head"><span className="chat-avatar"><MessageCircle size={16} aria-hidden="true" /></span><span className="chat-line" /></div>
              <div className="chat-body"><p>Reemplazar por testimonio real</p></div>
              <div className="chat-input"><span /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
