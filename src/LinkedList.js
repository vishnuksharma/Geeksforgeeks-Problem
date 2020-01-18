class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            this.length++
            return;
        }
        this.head = new Node(data, this.head);
        this.length++;
    }

    addAtEnd(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            this.length++
            return;
        }
        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = newNode;
        this.length++
        return this.head;
    }
    getAt(index){
        let count = 0;
        // if (index > this.length) return new Error('Index not present.');
        let node = this.head;
        while (node) {
            if (count === index){
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
    insertAt(data, index) {
        const newNode = new Node(data);
        const IndexNode = this.getAt(index);
        if (!this.head){
            this.head = newNode;
            this.length++;
            return;
        }
        if (index === 0){
            this.insertAtBeginning(data);
            return;
        }
        const prev = this.getAt(index-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return this.head;
    }
    removeAtLast(){
        if (!this.head) return null;
        let prev = this.head;
        let tail = this.head.next;
        while (tail.next !== null) {
            prev = tail;
            tail = tail.next;
        }
        prev.next = null;
        this.length--;
        return this.head;
    }
    removeAt(index){
        const prev = this.getAt(index-1);
        if (!prev && !prev.next) return;
        prev.next = prev.next.next;
        this.length--;
    }
}