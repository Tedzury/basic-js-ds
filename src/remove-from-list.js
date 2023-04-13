"use strict"
const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

let list;

function removeKFromList(l, k) {
  list = LinkedList();
  for (let i = 0; i < l.length; i++) {
    list.add(l[i])
  }
  for( let i = 0; i < list.length; i ++) {
    list.remove(k)
  }

  let out = list.output()
  list = null;

  return out
}

// const l = [3, 1, 2, 3, 4, 5];

// const k = 3;

const LinkedList = () => {
  
  return {
  head: null,
  length: 0,
  
  add(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }

    this.length++;
  },
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  },
  remove(element) {

    const positionOfElement = this.findElement(element)

    if (positionOfElement < 0 || positionOfElement >= this.length) {
      return null;
    }

    let current = this.head;

    if (positionOfElement === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < positionOfElement) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  },

  findElement(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  },
  output() {

    let current = this.head;
    return current
  }
}
}

console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3))

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const expected = convertArrayToList([1, 2, 4, 5]);

// console.log(expected)

module.exports = {
  removeKFromList
};
