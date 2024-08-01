//! need to learn queue, tree, graph.

// Linked List
class UNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

// const node1=new UNode(1)
// const node2 =new UNode(2)
// node1.next = node2

// console.log(node1);

// implement a LinkedList class with methods to add a node to the end, remove a node from the end,and display all the nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        if (!value) throw new Error("Please Provide a value")
        const newNode = new UNode(value)
        if (this.head === null) this.head = newNode
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode;
        }
    }
    removeNode() {
        if (this.head === null) {
            throw new Error("List is empty");
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    displayAllNodes() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// const list1 = new LinkedList();
// list1.addNode("abc");
// list1.addNode("def");
// list1.addNode("ghi");
// list1.displayAllNodes();  // Output: abc def ghi
// list1.removeNode();
// list1.displayAllNodes();  // Output: abc def
// list1.removeNode();
// list1.displayAllNodes();  // Output: abc
// list1.removeNode();
// list1.displayAllNodes();  // Output: List is empty

// Stack
class Stack {
    #Stack = [];
    TOP = -1;

    constructor() { }

    push(value) {
        this.TOP += 1
        this.#Stack[this.TOP] = value;
    }
    pop() {
        if (this.TOP === -1) throw new Error("Stack is empty");
        const poppedValue = this.#Stack[this.TOP];
        this.#Stack[this.TOP] = undefined;
        this.TOP -= 1;
        return poppedValue;

    }
    peek() {
        if (this.TOP === -1) {
            throw new Error("Stack is empty");
        }
        return this.#Stack[this.TOP];
    }

    isEmpty() {
        return this.TOP === -1;
    }
}

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek()); // Output: 20
// console.log(stack.pop()); // Output: 20
// console.log(stack.peek()); // Output: 10
// console.log(stack.pop()); // Output: 10
// console.log(stack.isEmpty()); // Output: true

// reverse a str using stack
// abc
// stack.push("a")
// stack.push("b")
// stack.push("c")
// console.log(
//     stack.pop(),
//     stack.pop(),
//     stack.pop()
// );

// Queue
class Queue {
    #Queue = [];

    constructor() { }

    enqueue(value) {
        this.#Queue.push(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.#Queue.shift()
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.#Queue[0];
    }

    isEmpty() {
        return this.#Queue.length === 0;
    }

    size() {
        return this.#Queue.length;
    }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.front()); // Output: 1
// console.log(queue.dequeue()); // Output: 1
// console.log(queue.front()); // Output: 2
// console.log(queue.dequeue()); // Output: 2
// console.log(queue.isEmpty()); // Output: false
// console.log(queue.size()); // Output: 1
// queue.enqueue("Print Job 1");
// queue.enqueue("Print Job 2");
// queue.enqueue("Print Job 3");
// console.log(queue.size()); // Output: 1
// // console.log(queue.front()); // Output: 1
// console.log(queue.dequeue()); // Output: 1
// // console.log(queue.front()); // Output: 2
// console.log(queue.dequeue()); // Output: 2
// // console.log(queue.front()); // Output: 2
// console.log(queue.dequeue()); // Output: 2
// console.log(queue.isEmpty()); // Output: false

// Binary Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// const treeNode = new TreeNode(1)
// console.log(treeNode);

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if (this.root === null) this.root = newNode
        else this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    traverseInOrder(callback) {
        this.inOrderTraversal(this.root, callback);
    }
}

// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(2);
// tree.insert(7);
// tree.insert(12);
// tree.insert(17);

// tree.traverseInOrder(value => console.log(value));

// Graph 
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    bfs(start, end) {
        const queue = [start];
        const visited = {};
        const predecessors = {};

        visited[start] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();

            if (currentVertex === end) {
                return this.constructPath(predecessors, start, end);
            }

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    predecessors[neighbor] = currentVertex;
                    queue.push(neighbor);
                }
            });
        }

        return null; // No path found
    }

    constructPath(predecessors, start, end) {
        const path = [];
        let current = end;

        while (current !== start) {
            path.unshift(current);
            current = predecessors[current];
        }

        path.unshift(start);
        return path;
    }
}

// use the graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('D', 'E');

// const shortestPath = graph.bfs('A', 'E');
// console.log(shortestPath); 