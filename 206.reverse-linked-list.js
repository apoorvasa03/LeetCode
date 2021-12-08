/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Example 1:
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

 * Example 2:
    Input: head = []
    Output: []
 */



/** time - o(n) space o(1)
 * length of lest
 */
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


// this solution will not return [] when even [] as head
var reverseList1 = function(head) {
    let list;
    while(head){
        list = new Node(head.val, list)
        head = head.next
    }

    return list

};

class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next
    }
}

let four = {
    val : 4,
    next : null
}


let two = {
    val : 2,
    next : four
}

let one = {
    val : 1,
    next : two
}

let zero = []

console.log(JSON.stringify(reverseList(one))) // {"val":4,"next":{"val":2,"next":{"val":1,"next":null}}}
console.log(JSON.stringify(reverseList(zero))) // []