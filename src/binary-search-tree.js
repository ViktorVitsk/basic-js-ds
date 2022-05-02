const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

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
    return this.treeRoot;
  }

  add(data) {
    if (this.treeRoot === null) {
      this.treeRoot = new Node(data);
    } else {
      let current = this.treeRoot;
      while (current !== null) {
        if (current.data > data) {
          if (current.left === null) {
            current.left = new Node(data);
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = new Node(data);
            return;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (this.treeRoot === null) {
      return this.treeRoot;
    } else {
      let current = this.treeRoot;
      while (current !== null) {
        if (current.data > data) {
          current = current.left;
        } else if (current.data < data) {
          current = current.right;
        } else {
          return current;
        }
      }
      return null;
    }
  }

  remove(data) {
    let parent = this.treeRoot;
    parent = this.removeNode(parent, data);
  }

  removeNode(node, data) {
    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      const minNode = this.getMin(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    } else {
      if (node.data > data) {
        if (node.left === null) {
          return node;
        } else {
          node.left = this.removeNode(node.left, data);
          return node;
        }
      } else {
        if (node.right === null) {
          return node;
        } else {
          node.right = this.removeNode(node.right, data);
          return node;
        }
      }
    }
  }

  getMin(node) {
    if (node.left !== null) {
      return this.getMin(node.left);
    } else {
      return node;
    }
  }

  min() {
    let current = this.treeRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  max() {
    let current = this.treeRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
