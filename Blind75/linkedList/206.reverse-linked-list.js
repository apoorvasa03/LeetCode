/** time: O(N)  Space: O(N)*/
var reverseList = function(head) {
    let prv = null
    while(head){
        let next = head.next
        head.next = prv
        prv = head
        head = next
    }
 
    return prv
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
 
 let zero = []
 
 console.log(JSON.stringify(reverseList(one))) // {"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}
 console.log(JSON.stringify(reverseList(zero))) // []