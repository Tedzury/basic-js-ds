const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode
  }

  add(value) {
    this.rootNode = addNode(this.rootNode, value);

    function addNode(node, value) {
      if (!node) {
        return new TreeNode(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchNodeValue(this.rootNode, value);

    function searchNodeValue(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ? 
        searchNodeValue(node.left, value) : 
        searchNodeValue(node.right, value);
    }
  }

  find(value) {
    return searchAndReturnNodeValue(this.rootNode, value);

    function searchAndReturnNodeValue(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data ? 
        searchAndReturnNodeValue(node.left, value) : 
        searchAndReturnNodeValue(node.right, value);
    }
  }

  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data)

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  rightTraverse(cb) {
    doRight(this.rootNode, cb);

    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb);
        cb(node.data);
        doRight(node.left, cb);
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

tree.add(10)

tree.add(20)

tree.add(8)

tree.add(9)
tree.add(7)


// console.log(tree.root().data) //=> 1;

// console.log(tree.min()) //=> 1

// console.log(tree.max()) //=> 5

// tree.remove(5);

tree.remove(8);

// console.log(tree.has(5)) //=> false

// console.log(tree.max()) //=> 4

tree.rightTraverse((val) => console.log(val))

module.exports = {
  BinarySearchTree
};