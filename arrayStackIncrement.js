class Stack {
    constructor() {
      this.stack = []

    }
    push( value ) {
      this.stack.push(value)
      return this
    }
    pop() {
      this.stack.pop()
      return this.stack
      // remove the the value at the top of the stack
      // and return it
    }
    peek() {
      return this.stack[this.stack.length-1]
    }
    increment(counter,add) {
      for(let i = 0 ; i < counter; i++){
        this.stack[i] += add
      }
      return this.stack
    }
  }
  
  let stack = new Stack()
  stack.push(4)
  stack.push(6)
  stack.push(1)
  
  // [4,6,1]
  // increment(2,2)
  // [6, 8, 1]
  // increment(2,2)
  // [8, 10, 1] =>
  
  //1
  //10
  //8
  
  
  