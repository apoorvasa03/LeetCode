/** Time: O(N+M)  Space: O(N+M)
 * time - time is the sum of length of l1 and l2 
*/
const mergeTwoLists = function(l1, l2) {
    let list = new Node()
    let head = list
 
    while(l2 !== null && l1 !== null){
        if(l1.val < l2.val){
            list.next = new Node(l1.val)
            l1 = l1.next
        }else{
            list.next = new Node(l2.val)
            l2 = l2.next
        }
 
        list = list.next
    }
    list.next = l1 === null ? l2: l1
    
    return head.next;
 };
 
 class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next
    }
 }
 
 let four = {val : 4,next : null}
 let two = {val : 2,next : four}
 let one = {val : 1,next : two}
 
 let _four = {val : 4,next : null}
 let three = {val : 3,next : _four}
 let _one = {val : 1,next : three}
 
 console.log(JSON.stringify(mergeTwoLists(one, _one))) // {"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":4,"next":null}}}}}}