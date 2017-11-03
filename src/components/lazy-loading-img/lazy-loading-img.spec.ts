import { flush, render } from '@stencil/core/testing';
import { LazyLoadingImg } from './lazy-loading-img';

describe('lazy-loading-img', () => {
  it('should build', () => {
    expect(new LazyLoadingImg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;

    beforeEach(async () => {
      element = await render({
        components: [LazyLoadingImg],
        html: '<lazy-loading-img></lazy-loading-img>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });

    xit('should work with a first name', async () => {
      element.first = 'Peter';

      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    xit('should work with a last name', async () => {
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    });

    xit('should work with both a first and a last name', async () => {
      element.first = 'Peter'
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });
  });
});
