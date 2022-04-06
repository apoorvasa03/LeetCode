
/** time - o(n)  space- o(n)
 * time is o(n) since we visit each node only once
*/
function levelOrder(root){
    if(!root) return null
    let result = []
    let queue = []
    queue.push(root)
    while(queue.length > 0){
     let newQueue = []
     let level = []
 
     for(let node of queue){
         node.left && newQueue.push(node.left)
         node.right && newQueue.push(node.right)
         level.push(node.val)
     }
     result.push(level)
     queue = newQueue
    }
 
    return result
 }
 
 var levelOrder2 = function(root) {
     let queue = [root]
     let result = []
     while(queue.length){
       let len = queue.length
       let level = []
       while(len--){
         let current = queue.shift()
         level.push(current.val);
         if(current.left) queue.push(current.left);
         if(current.right) queue.push(current.right)
       }
       result.push(level)
     }
     return result;
   }
 
 /** time - o(n)  space- o(n)
  * time is o(n) since we visit each node only once
 */
 var levelOrder1 = function(root) {
     let result = [];
     root && traverse(root, 0);
     return result;
     
     function traverse(node, level) {
         result[level] && result[level].push(node.val) || (result[level] = [node.val]);
         node.left && traverse(node.left, level + 1);
         node.right && traverse(node.right, level + 1);
     };
 };
 
 class Node{
     constructor(val, left =null, right = null){
         this.val = val;
         this.left = left;
         this.right = right
     }
 }
 let node8 = new Node(8)
 let node9 = new Node(9)
 let node6 = new Node(6)
 let node5 = new Node(5)
 let node4 = new Node(4, node8, node9 )
 let node3 = new Node(3, node5, node6)
 let node7 = new Node(7)
 let node2 = new Node(2, node3, node4)
 let node1 = new Node(1, node2, node7)
 
 
 let nodeSeven = new Node(7)
 let node15 = new Node(15)
 let node20 = new Node(20, node15, nodeSeven)
 let nodeNine = new Node(9)
 let node10 = new Node(-10, nodeNine, node20)
 
 let menusThree = new Node(-3)
 
 console.log(levelOrder(node10)) // [ [ -10 ], [ 9, 20 ], [ 15, 7 ] 
 console.log(levelOrder(node1))  // [ [ 1 ], [ 2, 7 ], [ 3, 4 ], [ 5, 6, 8, 9 ] ]
 console.log(levelOrder(menusThree)) // [ [ -3 ] ]