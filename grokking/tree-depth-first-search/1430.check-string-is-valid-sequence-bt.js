/** Time: O(N) Space: O(H)
 * where H is the height of the tree */
 var isValidSequence = function(root, arr) { 
    
    function checkSequence(root, i){
        if(!root || root.val != arr[i]) return false

        if(i === arr.length-1) return !root.left && !root.right

        return checkSequence(root.left, i+1) || checkSequence(root.right, i+1)
    }
    
    return checkSequence(root, 0)
};

var isValidSequence1 = function(root, arr, i=0) {
    if(!root || root.val != arr[i]) return false

    if((i === arr.length-1) && root.val == arr[i]) return (!root.left && !root.right)

    return isValidSequence(root.left, arr, i+1) || isValidSequence(root.right, arr, i+1)
    
};

class Node{
    constructor(val, left= null, right = null, next = null){
        this.val= val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

/** example 1 start*/
let node1 = new Node(1)
let _node5 = new Node(5)
let _node4 = new Node(4, _node5, node1)
let node9 = new Node(9)
let node8 = new Node(8, node9, _node4)
let node2= new Node(2)
let node7 = new Node(7)
let node3 = new Node(3, node7, node2)
let node4 = new Node(4, node3)
let node5 = new Node(5, node4, node8)
/** example 1 end*/

console.log(isValidSequence(node5, [5, 4, 3, 7], 0))  // true