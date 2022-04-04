var serialize = function(root) {
    let res = []
    function dfs(root){
        if(!root){
            res.push('N')
            return;
        }
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res.join(',')
}

var deserialize = function(data) {
    let nodes = data.split(',')

    function dfs(){
        let value = nodes.shift()
        if(value == 'N') return null
        let node = new TreeNode(Number(value))
        node.left = dfs();
        node.right = dfs();
        return node
    }
    return dfs()
}



class TreeNode{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
  }

let nodeSeven = new TreeNode(7)
let node15 = new TreeNode(15)
let node20 = new TreeNode(20, node15, nodeSeven)
let nodeNine = new TreeNode(9)
let node10 = new TreeNode(-10, nodeNine, node20)

console.log(serialize(node10)) // -10,9,N,N,20,15,N,N,7,N,N
console.log(deserialize('-10,9,N,N,20,15,N,N,7,N,N')) 
/**  
 TreeNode {
    val: -10,
    left: TreeNode { val: 9, left: null, right: null },
    right: TreeNode {
      val: 20,
      left: TreeNode { val: 15, left: null, right: null },
      right: TreeNode { val: 7, left: null, right: null }
    }
  }
*/