class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Add elements to top of stack
  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    console.log("${element} added to ${this.count }");
    return this.count - 1;
  }

  //Return and remove top element in stack
  //Return undefined if stack is empty
  pop() {
    if ((this.count = 0)) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log("${deleteItem} removed");
    return deleteItem;
  }

  //Check top element in stack
  peek() {
    console.log("Top element is ${this.items[this.count-1]}");
    return this.items[this.count - 1];
  }

  //Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }

  //Check size of stack
  size() {
    console.log("${this.count} elements in stack");
    return this.count;
  }

  //Print elemnts in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  //Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared...");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek(200);

stack.push(300);

console.log(stack.print());

stack.push(400);

stack.pop();
stack.pop();

stack.clear();

console.log(stack.print());

stack.size();

stack.isEmpty();
