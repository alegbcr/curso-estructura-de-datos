class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // metodo que genera el hash
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // agregar datos
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // buscar un valor
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // eliminar datos
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      ``;
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let deleteCurrentBucket = currentBucket[i];
          currentBucket.splice(i, 1);
          return deleteCurrentBucket;
        }
      }
    }
  }

  // buscar todos las keys
  getAllKeys() {
    const currentBucket = this.data;
    let keys = [];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i]) {
        for (let j = 0; j < currentBucket[i].length; j++) {
          if (currentBucket[i][j]) {
            keys.push(currentBucket[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);

// agregando datos
myHashTable.set("Alex", 1985);
myHashTable.set("Ale", 2011);

// buscar el elemento
myHashTable.get("Alex");

// eliminar el elemento
// myHashTable.delete("Alex");

// buscar el elemento
myHashTable.getAllKeys();
