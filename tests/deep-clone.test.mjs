import assert from 'node:assert';
import test from 'node:test';
import { deepClone, deepEqual } from '../deep-clone.js';

test('deepClone: clones nested objects and arrays cleanly', () => {
  const orig = { a: 1, b: { c: [2, 3], d: new Date('2026-01-01') } };
  const clone = deepClone(orig);

  assert.deepStrictEqual(clone, orig);
  assert.notStrictEqual(clone, orig);
  assert.notStrictEqual(clone.b, orig.b);
  assert.notStrictEqual(clone.b.c, orig.b.c);
});

test('deepClone: handles circular references safely', () => {
  const nodeA = { name: 'A' };
  const nodeB = { name: 'B', peer: nodeA };
  nodeA.peer = nodeB;

  const cloneA = deepClone(nodeA);
  assert.strictEqual(cloneA.name, 'A');
  assert.strictEqual(cloneA.peer.name, 'B');
  assert.strictEqual(cloneA.peer.peer, cloneA); // Maintains circular graph
});

test('deepEqual: compares deeply nested equality', () => {
  const obj1 = { x: 10, y: { z: [1, 2, 3] } };
  const obj2 = { x: 10, y: { z: [1, 2, 3] } };
  const obj3 = { x: 10, y: { z: [1, 2, 4] } };

  assert.strictEqual(deepEqual(obj1, obj2), true);
  assert.strictEqual(deepEqual(obj1, obj3), false);
});
