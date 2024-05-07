// class Node {
//     constructor(value) {
//         // Single Linked List
//         // this.node = value;
//         // this.next = null;

//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class LinkedList {
//     constructor(value) {
//         const node = new Node(value);
//         this.head = node;
//         this.tail = node;
//         this.length = 1;
//     }
//     push(value) {
//         const newNode = new Node(value);
//         if (this.head) {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         } else {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
//     pop() {
//         if (!this.length) throw new Error("Undefined")
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let temp = this.head.next;
//             let prev = this.head;
//             while (temp.next) {
//                 prev = temp;
//                 temp = temp.next;
//             }
//             this.tail = prev;
//             this.tail.next = null;
//         }
//         this.length--;
//         return temp;
//     }
//     unShift(value) {
//         const newNode = new Node(value);
//         if (this.head) {
//             newNode.next = this.head;
//             this.head = newNode
//         } else {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     shift() {
//         if (!this.length) throw new Error("Undefined");
//         let temp;
//         if (this.length === 2) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             temp = this.head;
//             this.head = this.head.next;
//             temp.next = null;
//         }
//         this.length--;
//         return temp;
//     }
//     getMethod(index) {
//         if (!this.head) throw new Error("undefined");
//         if (index < 0 || index > this.length) throw new Error("undefined");

//         let temp = this.head;
//         for (let i = 0; i < index; i++) {
//             temp = temp.next;
//         }
//         return temp;
//     }
//     setMethod(index, value) {
//         if (!this.head) throw new Error("undefined");
//         if (index < 0 || index > this.length) throw new Error("undefined");
//         const getIndex = this.getMethod(index);
//         getIndex.node = value;
//         return this
//     }
//     insertMethod(index, value) {
//         if (index === 0) return this.unShift(value);
//         if (index === this.length) return this.push(value);
//         if (index < 0 || index > this.length) throw new Error("undefined");

//         //New Node
//         const newNode = new Node(value);

//         // Getting The Previous Node by GetMethod
//         const prevIndex = this.getMethod(index - 1);

//         // Getting Next Node
//         const nextIndex = prevIndex.next;

//         prevIndex.next = newNode;
//         newNode.next = nextIndex;

//         this.length++;
//         return this;
//     }
//     removeMethod(index) {
//         if (index === 0) return this.shift();
//         if (index === this.length) return this.pop();
//         if (index < 0 || index > this.length) throw new Error("undefined");

//         const getPrevIndex = this.getMethod(index - 1);
//         const getNextIndex = getPrevIndex.next;

//         getPrevIndex.next = getNextIndex.next;
//         this.length--;
//         return this
//     }
// }


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor(value) {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = newNode;
//         this.length = 1;
//     };
//     push(value) {
//         const newNode = new Node(value);
//         if (this.head) {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         } else {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     };
//     pop() {
//         if (!this.head) throw new Error("undefined");
//         let temp;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             temp = this.tail;
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//             temp.prev = null;
//         }
//         this.length--;
//         return temp;
//     };
//     unShift(value) {
//         const newNode = new Node(value);
//         if (this.head) {
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     };
//     shift() {
//         if (!this.length) throw new Error("undefined");
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let temp = this.head;
//             this.head = this.head.next;
//             temp.next = null;
//             this.head.prev = null;
//         }
//         this.length--;
//         return this;
//     };
//     findMethod(value) {
//         if (!this.head) throw new Error("undefined");
//         let temp = this.head;
//         let prev = this.tail;
//         let center = Math.floor(this.length / 2);
//         if (value < center) {
//             for (let i = 0; i < this.length && temp.next; i++) {
//                 temp = temp.next;
//                 if (temp.value === value) {
//                     return `temp-${temp}`
//                 }
//             }
//         } else {
//             for (let j = 0; j < this.length && prev.prev; j++) {
//                 prev = prev.prev;
//                 if (prev.value === value) {
//                     return `Prev-${prev}`
//                 }
//             }
//         }
//         return - 1
//     };
//     getMethod(index) {
//         if (!this.head) throw new Error("undefined");
//         if (index < 0 || index > this.length) throw new Error("undefined");
//         if (this.head.value === index) return this.head;
//         let temp = this.head;
//         for (let i = 0; i < index; i++) {
//             temp = temp.next;
//         }
//         return temp
//     };
//     setMethod(index, value) {
//         if (!this.head) throw new Error("undefined");
//         if (index < 0 || index > this.length) throw new Error("undefined");
//         const getIndex = this.getMethod(index);
//         getIndex.value = value;
//         return this;
//     };
//     insertMethod(index, value) {
//         if (index === 0) return this.unShift(value);
//         if (index === this.length) return this.push(value);
//         if (index < 0 || index > this.length) throw new Error("undefined");
//         const newNode = new Node(value);
//         const centerNode = this.getMethod(index);
//         centerNode.prev.next = newNode;
//         newNode.prev = centerNode.prev;
//         newNode.next = centerNode;
//         centerNode.prev = newNode;
//         this.length++;
//         return this;
//     };
//     removeMethod(index) {
//         if (!this.head) throw new Error("undefined");
//         if (index === 0) return this.shift();
//         if (index === this.length) return this.pop();

//         const center = this.getMethod(index);
//         center.prev.next = center.next;
//         console.log(center.prev)
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(value) {
//         const node = new Node(value);
//         this.top = node;
//         this.bottom = this.top;
//     }
//     push(value) {
//         const newNode = new Node(value);
//         if (this.top) {
//             this.bottom.next = newNode;
//             this.bottom = newNode;
//         } else {
//             this.top = newNode;
//             this.bottom = newNode;
//         }
//         return this;
//     }
//     pop() {
//         if (!this.top) throw new Error("undefined");
//         let temp = this.top;
//         let prev = this.top;
//         while (temp.next) {
//             prev = temp;
//             temp = temp.next;
//         }
//         this.bottom = prev;
//         prev.next = null;
//         return this
//     }
// }

// const firstNode = new Stack(0);
// firstNode.push(1);
// firstNode.push(2);
// firstNode.push(3);

class Queue {
    constructor(value) {
        const node = new Node(value);
        this.first = node;
        this.last = node;
    }
    enQueue(value) {
        const newNode = new Node(value);
        if (this.first) {
            this.last.next = newNode;
            this.last = newNode
        } else {
            this.first = newNode;
            this.last = newNode;
        }
        return this
    }
    dequeue() {
        if (!this.first) throw new Error("undefined");
        if (this.first.next === null) {
            this.first = null;
            this.last = null;
        } else {
            let temp = this.first;
            this.first = temp.next;
            temp.next = null;
        }
        return temp;
    }
    isEmpty() {
        return !this.first.value && !this.first.next ? true : false
    }
    peek() {
        return this.first.value
    }
    Size() {
        if (!this.first.value && !this.first.next) return -1;
        let count = 1;
        let temp = this.first;
        while (temp.next) {
            count++;
            temp = temp.next;
        }
        return count;
    }
    clear() {
        if (!this.first) throw new Error("undefined");
        this.first = null;
        this.last = null;
        return this;
    }
    search(index, value) {
        if (!this.first.value && !this.first.next) throw new Error("undefined");
        if (index < 0) throw new Error("undefined");
        if (index === 0) return this.first.value;
        let count = 0;
        let temp = this.first;
        if (index && !value) {
            while (count < index && temp.next) {
                temp = temp.next;
                count++;
            }
            return temp.value ? temp.value : -1;
        } else {
            while (temp.next) {
                if (temp.value === value) {
                    return temp;
                }
                temp = temp.next;
            }
        }
    }
}


class QueueArray {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length > 0 ? true : false;
    }
    enQueue(value) {
        this.items.push(value);
    }
    dequeue() {
        if (this.isEmpty()) {
            this.items.shift();
        } else {
            throw new Error("undefined")
        }
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
        return this;
    }
    peek() {
        if (this.isEmpty()) {
            return this.items[0];
        } else {
            return `This Queue is Empty`
        }
    }
    reverseAQueue() {
        if (this.items.length === 0) return null;
        let reverserList = this.items.reverse();
        this.items = reverserList;
        return this
    }
}

const firstQueue = new QueueArray();
firstQueue.enQueue(0);
firstQueue.enQueue(1);
firstQueue.enQueue(2);

