import expect from 'expect';
import mapValues from '../../src/utils/mapValues';

describe('Utils', () => {
  describe('mapValues', () => {
    it('should return object with mapped values', () => {
      const test = {
        a: 'c',
        b: 'd'
      };
      expect(mapValues(test, (val, key) => val + key)).toEqual({
        a: 'ca',
        b: 'db'
      });
    });
  });
});

