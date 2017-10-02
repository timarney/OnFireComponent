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

    it('should work a first name', async () => {
      element.first = 'Peter';
      await flush(element);
      expect(element.textContent).toEqual('Peter ');
    });

    it('should work with a last name', async () => {
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Parker');
    });

    it('should work with both a first, list name and message', async () => {
      element.message = 'Hey'
      element.first = 'Peter'
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hey Peter Parker');
    });
  });
});