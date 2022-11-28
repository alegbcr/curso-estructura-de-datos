// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  // agregar un elemento en el tail
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  // agregar un elemento en el head
  prepend(value) {
    const newNode = new Node(value);

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
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index);
    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

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

  // eliminar un elemento
  delete(index) {
    if (index === 0) {
      const firstNode = this.getTheIndex(index);
      this.head = firstNode.next;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = holdingPointer.next;
    }
    this.length--;
  }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);
mySinglyLinkedList.append(2);
mySinglyLinkedList.append(3);
mySinglyLinkedList.append(4);
mySinglyLinkedList.append(5);
