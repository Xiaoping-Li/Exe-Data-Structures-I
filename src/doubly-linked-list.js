class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = {
      value,
      prev: null,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = {
      value,
      prev: null,
      next: null,
    };
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}
