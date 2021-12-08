/**
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */





/**time - o(n)   space - o(1)*/
var reorderList = function(head) {
    let list = head
    
    // find the middle node
    let middle = findMiddleNode(head)
   
    // break the list and reverse the middle node 
    let second = reverseList(middle)
    

    // merge head and second lists

    while(second){
        let next = head.next
        head.next = second
        second = second.next;
        head.next.next = next;
        head = next
    }

    return list
};

function findMiddleNode(head){
    let slow = fast = head

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
   
    return slow
};

function reverseList(head){
    let current = head.next;
    head.next = null
    let prv = null;
    while(current){
        let next = current.next;
        current.next = prv
        prv = current
        current = next
    }

    return prv
}

let six = {
    val : 6,
    next : null
}
let five = {
    val : 5,
    next : six
}
let four = {
    val : 4,
    next : five
}
let three = {
    val : 3,
    next : four
}
let two = {
    val : 2,
    next : three
}
let one = {
    val : 1,
    next : two
}

console.log(JSON.stringify(reorderList(one))) //  {"val":1,"next":{"val":6,"next":{"val":2,"next":{"val":5,"next":{"val":3,"next":{"val":4,"next":null}}}}}}




