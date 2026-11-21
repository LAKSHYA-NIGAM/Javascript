/**
 * Custom EventEmitter Implementation
 * Provides event subscription, once listeners, emission, and cleanup.
 */

export class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, listener) {
    if (typeof listener !== 'function') return this;
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push({ listener, once: false });
    return this;
  }

  once(eventName, listener) {
    if (typeof listener !== 'function') return this;
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push({ listener, once: true });
    return this;
  }

  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return false;
    const listeners = [...this.events.get(eventName)];

    // Filter out 'once' listeners from the registered set
    this.events.set(
      eventName,
      this.events.get(eventName).filter((item) => !item.once)
    );

    for (const { listener } of listeners) {
      listener(...args);
    }
    return true;
  }

  off(eventName, listener) {
    if (!this.events.has(eventName)) return this;
    if (!listener) {
      this.events.delete(eventName);
      return this;
    }
    const filtered = this.events.get(eventName).filter((item) => item.listener !== listener);
    this.events.set(eventName, filtered);
    return this;
  }

  listenerCount(eventName) {
    return this.events.has(eventName) ? this.events.get(eventName).length : 0;
  }
}
