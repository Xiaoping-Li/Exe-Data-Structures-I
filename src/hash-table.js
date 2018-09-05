/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // Double hash-table's size when capacity > 75%
  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each(bucket => {
      if (!bucket) return;
      bucket.forEach(keyValue => this.insert(keyValue[0], keyValue[1]));
    });
  }

  // Check capacity is >= or < 75%
  isCapacityFull() {
    let taken = 0;
    this.storage.each(bucket => {
      if (bucket) taken++;
    });
    return taken / this.limit >= 0.75;
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.isCapacityFull()) this.resize(); 
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index) || [];
    bucket = bucket.filter(item => item[0] !== key);
    bucket.push([key, value]);
    this.storage.set(index, bucket);  
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);
    if (!bucket) return undefined;
    bucket = bucket.filter(item => item[0] !== key);
    this.storage.set(index, bucket); 
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return undefined;
    const match = bucket.filter(item => item[0] === key)[0];
    return match ? match[1] : undefined;
  }
}

module.exports = HashTable;
