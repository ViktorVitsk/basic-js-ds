const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
    this.first = null;
    this.last = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.first === null) {
      this.first = new ListNode(value);
    } else if (this.first.next === null) {
      this.last = new ListNode(value);
      this.first.next = this.last;
    } else {
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    }
  }

  dequeue() {
    const shift = this.first.value;
    this.first = this.first.next;
    return shift;
  }
}
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

module.exports = {
  ListNode,
};

module.exports = {
  Queue,
};
