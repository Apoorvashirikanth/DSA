class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.value < root.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    };

    search(root, value) {
        if (!root) {
          return false;
        }
        if (root.value === value) {
          return true;
        } else if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }

      inOrder(root = this.root) {
        if (root) {
          return [
            ...this.inOrder(root.left),
            root.value,
            ...this.inOrder(root.right)
          ];
        }
        return [];
      }
        
    
      preOrder(root = this.root) {
        if (root) {
          return[
            root.value,
            ...this.preOrder(root.left),
            ...this.preOrder(root.right)
          ];
        }
        return [];
      }
    
      postOrder(root = this.root) {
        if (root) {
            return [
                ...this.postOrder(root.left),
                ...this.postOrder(root.right),
                root.value

             
            ]
        }
        return []
      }

      levelOrder() {
        const queue = [];
        // let result= [];
        queue.push(this.root);
        while (queue.length) {
          let curr = queue.shift();
          console.log(curr.value);
          if (curr.left) {
            queue.push(curr.left);
          }
          if (curr.right) {
            queue.push(curr.right);
          }
        }
      }

      min(root = this.root) {
        if (!root.left) {
          return root.value;
        } else {
          return this.min(root.left);
        }
      }
    
      max(root = this.root) {
        if (!root.right) {
          return root.value;
        } else {
          return this.max(root.right);
        }
      }

      delete(value) {
        this.root = this.deleteNode(this.root, value);
      }
    
      deleteNode(root, value) {
        if (root === null) {
          return root;
        }
        if (value < root.value) {
          root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
          root.right = this.deleteNode(root.right, value);
        } else {
          if (!root.left && !root.right) {
            return null;
          }
          if (!root.left) {
            return root.right;
          } else if (!root.right) {
            return root.left;
          }
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
        }
        return root;
      }
  }
  
  const bst = new BinarySearchTree();
  console.log(bst.isEmpty());
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  console.log(bst.search(bst.root, 10));
  console.log(bst.search(bst.root, 7));
  console.log(bst.inOrder());
  console.log(bst.preOrder());
  console.log(bst.postOrder());
  bst.levelOrder();
  console.log(bst.min());
  console.log(bst.max());