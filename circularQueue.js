class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.elements = new Array(capacity);
    this.front = -1; 
    this.rear = -1;  
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot enqueue.");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0; 
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.elements[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }

    const removedElement = this.elements[this.front];

    if (this.front === this.rear) {
     
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    return removedElement;
  }

  frontElement() {
    return this.isEmpty() ? null : this.elements[this.front];
  }

  rearElement() {
    return this.isEmpty() ? null : this.elements[this.rear];
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }
}


const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);

console.log("Front:", circularQueue.frontElement());  
console.log("Rear:", circularQueue.rearElement());    

circularQueue.dequeue();
console.log("After dequeue:", circularQueue.elements);

circularQueue.enqueue(40);
console.log("After enqueue:", circularQueue.elements); 
