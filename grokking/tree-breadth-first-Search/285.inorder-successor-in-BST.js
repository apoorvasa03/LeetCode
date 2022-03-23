/** Time: O(log N)  Space: O(1)*/
var inorderSuccessor = function(root, p) {
    if(p.right){
        let current = p.right;
        let prev = null
        while(current){
            prev = current;
            current = current.left
        }
        return prev
    } else{
        let current = root;
        let prev = null;

        while(current != p){
            if(p.val < current.val){
                prev = current;
                current = current.left // since we need successor, we save current to prev value
            }else{
                current = current.right
            }
        }

        return prev
    }
}

var inorderSuccessor4 = function(root, p) {
    if(p.right){
        let curr = p.right
        let prev = null
        while(curr){
            prev = curr;
            curr = curr.left
        }
        return prev
    }

    let curr = root
    let prev = null
    while(curr != p){
        if(p.val < curr.val){
            prev = curr;
            curr = curr.left
        }else{
            curr = curr.right
        }
    }
    return prev
};

/** Time: O(N) Space: O(N)*/
var inorderSuccessor2 = function(root, p) {
    let result = []

    function DFS(root){
        if(!root) return
        if(root.left) DFS(root.left)
        result.push(root.val);
        if(root.right) DFS(root.right)
    }
    DFS(root)

    for(let i = 0; i < result.length-1; i++){
        if(result[i] === p.val) return  result[i+1]
    }
    return null
}


var inorderSuccessor1 = function(root, p) {
    if(!root) return null

    let queue = [root];
    let result = [];
    while(queue.length){
        let len = queue.length
        while(len--){
            let current = queue.shift()
            result.push(current.val)
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right)
        }
    }
    console.log(result)
    for(let i in result){
        if(result[i] === p && i < result.length -1){
            return result[i+1]
        }
    }

    return null
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
let node89 = new Node(89)
let node90 = new Node(90, node89)
let node68 = new Node(68)
let node57 = new Node(57)
let node65 = new Node(65, node57, node68)
let node38 = new Node(38)
let node54 = new Node(54, node38, node65)
let node72 = new Node(72, node54, node90)
let node29 = new Node(29)
let node21 = new Node(21)
let node27 = new Node(27, node21, node29)
let node5 = new Node(5)
let node20 = new Node(20, node5, node27)
let node35 = new Node(35, node20, node72)
/** example 1 end*/

console.log(inorderSuccessor(node35, node72))   // node89
console.log(inorderSuccessor(node35, node29))   // node35
console.log(inorderSuccessor(node35, node38))  // node54
console.log(inorderSuccessor(node35, node89))   // node 90