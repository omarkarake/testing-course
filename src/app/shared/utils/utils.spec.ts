// import { pluck, range } from './utils';

import { pluck, range } from "./utils";

// describe('utils', () => {
//   describe('range', () => {
//     it('returns correct range from 1 to 5', () => {
//       expect(range(1, 5)).toEqual([1, 2, 3, 4]);
//     });
//     it('returns correct range from 41 to 44', () => {
//       expect(range(41, 44)).toEqual([41, 42, 43]);
//     });
//   });

//   describe('pluck', () => {
//     it('returns correct result', () => {
//       const data = [
//         { id: '1', name: 'foo' },
//         { id: '2', name: 'bar' },
//         { id: '3', name: 'baz' },
//       ];
//       expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
//     });
//   });
// });

describe('utils', () => {
  // describe is our section and it is our test

  describe('range', () => {
    // after it, comes verb like: should or maybe return...
    it('returns correct range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1,2,3,4]);
    });
    it('returns correct range from 41 to 44', () => {
      expect(range(41, 44)).toEqual([41,42,43]);
    });
  });
  describe('pluck', () => {
    it('should correct result from pluck function', () => {
      const data = [
        {id: '1', name: 'foo'},
        {id: '2', name: 'bar'},
        {id: '3', name: 'baz'},
      ]
      expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
      expect(pluck(data, 'name')).toEqual(['foo', 'bar', 'baz']);
    });
  });
});
