const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
    this.nodes = [];
  }

  root() {
    if (this.nodes.length === 0) {
      return null;
    }

    return this.treeRoot;
  }

  add(data) {
    if (this.nodes.length === 0) {
      this.treeRoot = { data: data };
    }
    this.nodes.push(data);
  }

  has(data) {
    return this.nodes.includes(data);
  }

  find(data) {
    if (this.nodes.includes(data)) {
      return { data: data };
    } else {
      return null;
    }
  }

  remove(data) {
    let index = this.nodes.indexOf(data);
    if (index >= 0) {
      this.nodes.splice(index, 1);
    }
  }

  min() {
    return Math.min(...this.nodes);
  }

  max() {
    return Math.max(...this.nodes);
  }
}

module.exports = {
  BinarySearchTree,
};
