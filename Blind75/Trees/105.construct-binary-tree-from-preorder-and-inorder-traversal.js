/** time: O(N) space: O(logN)*/
var buildTree = function(preorder, inorder) {
    function helper(p1, p2, i1, i2){
        if(p1 > p2 || i1> i2) return null

        let node = new TreeNode(preorder[p1])
        let index = inorder.indexOf(preorder[p1])

        let nLeft = index - i1;
        node.left = helper(p1 + 1, p1+ nLeft, i1, index - 1);
        node.right = helper(p1 + nLeft + 1, p2, index + 1, i2);
        return node
    }
    return helper(0, preorder.length-1, 0, inorder.length -1)
};


/** time:  o(n2) space: o(4^L) 
 * where L is the number of levels of the tree, in each recursion 4 variables are defined. 
 * In the best case scenario where the tree is a balanced tree, L = logN.
*/
var buildTree1 = function(preorder, inorder) {
    if(!preorder.length) return null
    let node = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    node.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))

    return node
};


class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
  }

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))