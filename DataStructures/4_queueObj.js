class QueueObject{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
        return this.items
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return [item, this.items];
    }

    peek() {
        return this.items[this.front];
      }
    
      size() {
        return this.rear - this.front;
      }
    
      isEmpty() {
        return this.rear - this.front === 0;
      }
    
      print() {
        console.log(this.items);
      }
}

const queue = new QueueObject();
console.log(queue.enqueue(10))
console.log(queue.enqueue(20))
console.log(queue.enqueue(30))
console.log(queue.dequeue())
console.log(queue.dequeue())