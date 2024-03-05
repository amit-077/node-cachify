// cache.js
class NCache {
  constructor() {
    this.cache = new Map();
  }

  // Set a key-value pair in the cache with TTL (time-to-live) in seconds
  set(key, value, ttl = 0) {
    const expirationTime = ttl > 0 ? Date.now() + ttl * 1000 : 0;
    this.cache.set(key, { value, expirationTime });
    return true;
  }

  // Get the value of a key from the cache
  get(key) {
    const item = this.cache.get(key);
    if (item && (!item.expirationTime || item.expirationTime > Date.now())) {
      return item.value;
    }
    this.cache.delete(key); // Clear expired item from the cache
    return null;
  }

  // Remove a key from the cache
  delete(key) {
    this.cache.delete(key);
    return true;
  }

  // Clear all items from the cache
  clear() {
    this.cache.clear();
    return true;
  }
}

module.exports = NCache;
