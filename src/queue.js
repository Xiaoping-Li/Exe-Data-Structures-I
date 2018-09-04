/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(value) {
    const item = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
  }

  dequeue() {
    const currentHead = this.head;
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return currentHead.value;
    }
    this.head = this.head.next;
    return currentHead.value;
  }
}

module.exports = Queue;
