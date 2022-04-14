/** time: O(N)  Space: O(1)*/
var hasCycle = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next
       if(slow === fast) return true
    }
    return false
 }
 
 class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next
    }
 }
 
 let four = {val : 4,next : null}
 let three = {val : 3,next : four}
 let two = {val : 2,next : three}
 let one = {val : 1,next : two}
 // four.next = two
 console.log(hasCycle(one)) // true