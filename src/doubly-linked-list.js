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

  removeFromHead() {
    if (!this.head) return null;
    const currentHead = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return currentHead;
    }
    const nextHead = this.head.next;
    this.head.next.prev = null;
    this.head.next = null;
    this.head = nextHead;
    return currentHead;
  }

}
