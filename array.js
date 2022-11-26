const array = ["Alex", "Ale", "Luisa"];

// agregar un elemento
array.push("sofia");

/* creando un array desde cero */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // muestra los datos
  get(index) {
    return this.data[index];
  }

  // agrega datos
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // elimina el ultimo dato
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // elimina dato por indice
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  // cambiar el valor del indice
  shiftIndex(index) {
    for (let i = index; i < index.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // agrega un dato en la primera posicion
  unshift(item) {
    if (this.length !== 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }
    this.data[0] = item;
    this.length++;
    return item;
  }

  // elimina un dato en la primera posicion
  shift() {
    const item = this.data[0];
    console.log(item);
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myArray = new MyArray();
myArray.push("Alex");
myArray.push("Ale");
myArray.push("Sofía");
myArray.push("Luisa");
