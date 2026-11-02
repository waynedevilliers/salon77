/// <reference types="vitest" />
import { render } from '@testing-library/react';
import JsonLd from './JsonLd';

describe('JsonLd', () => {
  it('renders the data in a ld+json script tag', () => {
    const { container } = render(
      <JsonLd data={{ '@type': 'Place', name: 'Salon77' }} />
    );
    const script = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(JSON.parse(script?.innerHTML ?? '')).toEqual({
      '@type': 'Place',
      name: 'Salon77',
    });
  });

  it('escapes "<" so content cannot close the script tag', () => {
    const { container } = render(<JsonLd data={{ name: '</script><b>x' }} />);
    const script = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(script?.innerHTML).not.toContain('</script>');
    expect(JSON.parse(script?.innerHTML ?? '').name).toBe('</script><b>x');
  });
});
