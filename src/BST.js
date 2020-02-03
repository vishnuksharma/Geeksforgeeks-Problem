class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insertNext(node, newNode) {
        if (newNode.data < node.data){
            if (!node.left){
                this.insertNext(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else if(newNode.data > node.data) {
            if (node.right){
                this.insertNext(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root){
            this.root = newNode;
            return;
        }
        this.insertNext(this.root, newNode);
    }

}