/**
 * @param {number} k
 */
class MyCircularQueue {
    constructor(k){
        this.head = 0;
        this.tail = -1;
        this.data = new Array(k);
        this.maxSize = k;
    }
    
/** 
 * @param {number} value
 * @return {boolean}
 */
    enQueue(value) {
        if (this.isFull()) return false;
        this.tail = (this.tail + 1) % this.maxSize;
        this.data[this.tail] = value;
        return true;
    }
    deQueue() {
        // if the queue is empty return false;
        if (this.isEmpty()) return false;
        // if head and tail are equal to one another (single element in arr), 
        if (this.head === this.tail) {
            this.head = 0;
            this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.maxSize;
            
        }
        return true;
        // set queue properties back to initital conditions (this.head = 0, this.tail = -1)
        // before we set these conditions back, we need to extract the current value of this.data
        
    }
    Front() {
        return this.isEmpty() ? -1 : this.data[this.head];
    }
    Rear() {
        return this.isEmpty() ? -1 : this.data[this.tail];
    }
    
    isEmpty() {
        return this.tail === -1;
    }
    isFull() {
        return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head;
    }
    

    
};



