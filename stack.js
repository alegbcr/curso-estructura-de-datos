class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Buscar el ultimo nodo
  peek() {
    return this.top;
  }

  // Agregar un nuevo nodo
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }

  // Elimimar el ultimo nodo
  pop() {
    if (this.length === 0) {
      console.warn("No hay nodos en el stack");
      return;
    }

    const topNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;

    return topNode;
  }
}

const myStack = new Stack();
