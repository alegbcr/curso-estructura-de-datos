class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  // agregar un elemento en el tail
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  // agregar un elemento en el head
  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  // agregar un elemento en el intermedio
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index);
    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = firstPointer;

    this.length++;

    return this;
  }

  // eliminar un elemento
  delete(index) {
    if (index >= this.length || index < 0) {
      console.warn("Index error");
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    const firstPointer = this.getTheIndex(index - 1);
    const nextPointer = this.getTheIndex(index + 1);
    firstPointer.next = nextPointer;
    nextPointer.prev = firstPointer;

    this.length--;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);
