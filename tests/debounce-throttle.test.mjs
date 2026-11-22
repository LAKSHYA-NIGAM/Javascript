import assert from 'node:assert';
import test from 'node:test';
import { debounce, throttle } from '../debounce-throttle.js';

test('debounce: coalesces rapid repeated calls', async () => {
  let counter = 0;
  const inc = () => counter++;
  const debouncedInc = debounce(inc, 50);

  debouncedInc();
  debouncedInc();
  debouncedInc();
  assert.strictEqual(counter, 0); // Not called yet

  await new Promise((res) => setTimeout(res, 80));
  assert.strictEqual(counter, 1); // Called once after wait
});

test('debounce: immediate execution calls synchronously on leading edge', () => {
  let counter = 0;
  const inc = () => counter++;
  const debouncedInc = debounce(inc, 50, true);

  debouncedInc();
  assert.strictEqual(counter, 1); // Leading edge invoked immediately
  debouncedInc();
  assert.strictEqual(counter, 1); // Subsequent call ignored during cooldown
});

test('throttle: executes once within rate limit interval', async () => {
  let counter = 0;
  const inc = () => counter++;
  const throttledInc = throttle(inc, 50);

  throttledInc();
  throttledInc();
  throttledInc();
  assert.strictEqual(counter, 1); // Executed first call immediately

  await new Promise((res) => setTimeout(res, 80));
  assert.strictEqual(counter, 2); // Trailing call executed after cooldown
});
