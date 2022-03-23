/** Time: O(N) Space: O(1)*/
var connect = function(root) {
    if(!root) return null;

    let leftmost = root
    while(leftmost.left != null){
        let head = leftmost
        while(head != null){
            head.left.next = head.right;
            if(head.next != null){
                head.right.next = head.next.left
            }
            head = head.next
        }
        leftmost = leftmost.left;
    }

    return root;
}

/** Time: O(N) Space: O(N)
 * since we have used queue the space complexity is N
*/
var connect1 = function(root) {
    if(!root) return null;
    let queue = [root]

    while(queue.length){
        let len = queue.length;
        while(len--){
            let current = queue.shift();
            if(len <= 0) current.next = null
            else current.next = queue.peek()

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    return root
}

class Node{
    constructor(val, left= null, right = null, next = null){
        this.val= val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

/** example 1 start*/
let node7 = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, node7)
let node9 = new Node(9)
let node3 = new Node(3, node9, node20)
/** example 1 end*/

/** example 2 start*/
let _node7 = new Node(7)
let _node6 = new Node(6)
let _node5 = new Node(5)
let _node4 = new Node(4)
let _node3 = new Node(3, _node6, _node7)
let _node2 = new Node(2, _node4, _node5)
let _node1 = new Node(1, _node2, _node3)
/** example 2 end*/

let node1 = new Node(1)

console.log(connect(node3))    //  [ 3, #, 9, 20, #, 7, 15, # ]
console.log(connect(_node1))   // [1,#,2,3,#,4,5,6,7,#]
console.log(connect(node1))    // [ 1, #]
console.log(connect([]))       // []
console.log(connect())         // null