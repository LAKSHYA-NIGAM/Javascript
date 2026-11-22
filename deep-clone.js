/**
 * Deep Clone and Recursive Object Equality Diff
 * Handles circular references via WeakMap, Maps, Sets, Dates, and RegExp instances.
 */

export function deepClone(target, hash = new WeakMap()) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime());
  }

  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags);
  }

  if (hash.has(target)) {
    return hash.get(target);
  }

  if (target instanceof Map) {
    const copy = new Map();
    hash.set(target, copy);
    for (const [k, v] of target.entries()) {
      copy.set(k, deepClone(v, hash));
    }
    return copy;
  }

  if (target instanceof Set) {
    const copy = new Set();
    hash.set(target, copy);
    for (const val of target.values()) {
      copy.add(deepClone(val, hash));
    }
    return copy;
  }

  const isArray = Array.isArray(target);
  const copy = isArray ? [] : Object.create(Object.getPrototypeOf(target));
  hash.set(target, copy);

  for (const key of Reflect.ownKeys(target)) {
    copy[key] = deepClone(target[key], hash);
  }

  return copy;
}

export function deepEqual(objA, objB) {
  if (objA === objB) return true;
  if (objA === null || objB === null || typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }

  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }

  if (objA instanceof RegExp && objB instanceof RegExp) {
    return objA.toString() === objB.toString();
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}
