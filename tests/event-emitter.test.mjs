import assert from 'node:assert';
import test from 'node:test';
import { EventEmitter } from '../event-emitter.js';

test('EventEmitter: registers and emits events to listeners', () => {
  const ee = new EventEmitter();
  const received = [];
  ee.on('data', (val) => received.push(val));

  ee.emit('data', 'packet1');
  ee.emit('data', 'packet2');

  assert.strictEqual(received.length, 2);
  assert.strictEqual(received[0], 'packet1');
  assert.strictEqual(received[1], 'packet2');
});

test('EventEmitter: once listener fires only once', () => {
  const ee = new EventEmitter();
  let count = 0;
  ee.once('init', () => count++);

  ee.emit('init');
  ee.emit('init');
  ee.emit('init');

  assert.strictEqual(count, 1);
  assert.strictEqual(ee.listenerCount('init'), 0);
});

test('EventEmitter: off removes specific listener', () => {
  const ee = new EventEmitter();
  const fn1 = () => {};
  const fn2 = () => {};

  ee.on('event', fn1);
  ee.on('event', fn2);
  assert.strictEqual(ee.listenerCount('event'), 2);

  ee.off('event', fn1);
  assert.strictEqual(ee.listenerCount('event'), 1);
});
