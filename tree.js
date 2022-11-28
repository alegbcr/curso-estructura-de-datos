class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Buscar un elemento
  search(value) {
    let currentNode = this.root;
    let pierna;
    while (currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        console.log(currentNode.value);
        pierna = "izquierda";
      } else {
        currentNode = currentNode.right;
        console.log(currentNode.value);
        pierna = "derecha";
      }
    }

    console.log(
      `Tu elemento ${currentNode.value} fue encontrado en la pierna ${pierna}`
    );
    return currentNode;
  }

  // agregar un elemento
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // eliminar un elemento
  delete(value) {
    let currentNode = this.root;
    let pierna;
    while (currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        pierna = "izquierda";
      } else {
        currentNode = currentNode.right;
        pierna = "derecha";
      }
    }
    currentNode.value = null;

    console.log("Tu elemento fue correctamente eliminado");
    return currentNode;
  }
}

const myTree = new BinarySearchTree();
myTree.insert(180);
myTree.insert(18);
myTree.insert(190);
myTree.insert(290);
myTree.insert(29);
myTree.insert(329);
myTree.insert(39);
