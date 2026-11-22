/**
 * Least Recently Used (LRU) Cache implementation
 * Provides O(1) get and put time complexity.
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  constructor(capacity) {
    this.capacity = Math.max(1, Number(capacity) || 10);
    this.map = new Map();
    this.head = new Node(null, null); // Dummy head
    this.tail = new Node(null, null); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return null;
    const node = this.map.get(key);
    this._remove(node);
    this._addToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._addToHead(node);
      return;
    }

    if (this.map.size >= this.capacity) {
      // Evict least recently used (tail.prev)
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }

    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._addToHead(newNode);
  }

  size() {
    return this.map.size;
  }
}
