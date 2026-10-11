import { describe, expect, it } from 'vitest';
import { landingParts, product } from '@/lib/landing-config';

describe('Product and landing rules', () => {
  it('keeps the final price at 7 USD', () => {
    expect({ price: product.price, currency: product.currency }).toEqual({ price: 7, currency: 'USD' });
  });
  it('keeps exactly nine parts in the required order', () => {
    expect(landingParts.map(part => part.id)).toEqual(['hero', 'benefits', 'solution', 'contents', 'bonuses', 'offer', 'testimonials', 'recap', 'faq']);
  });
  it('only shows the hero at this stage', () => {
    expect(landingParts.filter(part => part.visible).map(part => part.id)).toEqual(['hero']);
  });
  it('reserves both purchases for the offer and recap only', () => {
    expect(landingParts.filter(part => part.purchase).map(part => part.id)).toEqual(['offer', 'recap']);
  });
});