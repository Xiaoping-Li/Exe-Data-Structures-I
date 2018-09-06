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
    currentHead.next = null;
    nextHead.prev = null;
    this.head = nextHead;
    return currentHead;
  }

  removeFromTail() {
    if (!this.tail) return null;
    const currentTail = this.tail;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
      return currentTail;
    }
    const prevTail = this.tail.prev;
    this.tail.prev.next = null;
    this.tail.prev = null;
    this.tail = prevTail;
    return currentTail;
  }

  moveToFront(node) {
    // If node is alreay the head
    if (!node.prev) return;

    // If node is the tail
    if (!node.next) {
      // Reset tail after move node
      const prevTail = this.tail.prev;
      this.tail.prev.next = null;
      this.tail.prev = null;
      this.tail = prevTail;

      // Reset moved node as the new head
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      // Node is neither head nor tail
      // Connect node prev and next node
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
      // Reset node as head
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  moveToBack(node) {
    // If node is alreay the tail
    if (!node.next) return;

    // If node is the head
    if (!node.prev) {
      // Reset head
      const nextHead = this.head.next;
      this.head.next.prev = null;
      this.head.next = null;
      this.head = nextHead;
      // Reset Tail
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      // Node is neither head or tail
      // Move node out of chain
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
      // Reset tail
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}
