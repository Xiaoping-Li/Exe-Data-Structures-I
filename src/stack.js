/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  push(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }
  }

  pop() {
    const currentTail = this.tail;
    let preTail = this.head;
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currentTail.value;
    }

    while (preTail.next.next) {
      preTail = preTail.next;
    }

    preTail.next = null;
    this.tail = preTail;
    this.length -= 1;
    return currentTail.value;
  }
}

module.exports = Stack;
