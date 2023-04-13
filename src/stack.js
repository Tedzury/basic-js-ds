const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(elem) {
    this.stack.push(elem)
  }

  pop() {
    let elem = this.stack[this.stack.length - 1]
    this.stack.pop()
    return elem
  }

  peek() {
    let max = Number.MIN_VALUE;;
    this.stack.forEach(numb => {
      if (numb > max) max = numb
    })
    return max
  }
}

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

module.exports = {
  Stack
};
