import { flush, render } from '@stencil/core/testing';
import { OnFire } from './on-fire';

describe('on-fire', () => {
  it('should build', () => {
    expect(new OnFire()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [OnFire],
        html: '<on-fire></on-fire>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('');
    });

    it('should work with message', async () => {
      element.message = 'Hey Tim Arney'
      await flush(element);
      expect(element.textContent).toEqual('Hey Tim Arney');
    });
  });
});