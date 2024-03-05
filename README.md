# node-cachify

node-cachify is a simple Node.js caching tool designed to enhance performance by efficiently storing and retrieving data using key-value pairs with an optional time to live (TTL) feature.

## Installation

```bash
npm install node-cachify
```

## Usage

```bash
const Cache = require('node-cachify');

const cache = new Cache();     // Create a new instance of Cache

cache.set('key1', 'value1', 60);   // Set values in the cache with a TTL of 60 seconds

console.log(cache.get('key1'));   // Get values from the cache

// Output: value1
```

## Functions

### set

Sets a key-value pair with a optional TTL field (in seconds). Returns true on success.

```bash
cache.set('key1', 'value1', 60);
```

### get

Retrieves the value associated with the specified key from the cache. Returns null if not found in cache.

```bash
let val = cache.get("key1");
console.log(val);

// Output : value1
```

### delete

Removes the key-value pair associated with the specified key from the cache.

```bash
let deleteData = cache.delete('key1');
console.log(deleteData);   // returns true on successful deletion

// Output: true
```

### clear

Clears the entire cache.

```bash
cache.clear()
```
