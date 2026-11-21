import assert from 'node:assert';
import test from 'node:test';
import { LRUCache } from '../lru-cache.js';

test('LRUCache: standard put, get, and update', () => {
  const cache = new LRUCache(2);
  cache.put('a', 1);
  cache.put('b', 2);
  assert.strictEqual(cache.get('a'), 1);
  assert.strictEqual(cache.get('b'), 2);

  // Update existing key
  cache.put('a', 10);
  assert.strictEqual(cache.get('a'), 10);
});

test('LRUCache: evicts least recently accessed element', () => {
  const cache = new LRUCache(2);
  cache.put('a', 1);
  cache.put('b', 2);
  // Access 'a' so 'b' becomes least recently used
  cache.get('a');
  // Insert 'c' -> should evict 'b'
  cache.put('c', 3);

  assert.strictEqual(cache.get('a'), 1);
  assert.strictEqual(cache.get('b'), null);
  assert.strictEqual(cache.get('c'), 3);
  assert.strictEqual(cache.size(), 2);
});

test('LRUCache: missing key returns null', () => {
  const cache = new LRUCache(5);
  assert.strictEqual(cache.get('nonexistent'), null);
});
