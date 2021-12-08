/**
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
 */


/** time - o(n+m) space o(n+m)
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


let four1 = {
    val : 4,
    next : null
}

let three1 = {
    val : 3,
    next : four1
} 

let one1 = {
    val : 1,
    next : three1
}

console.log( JSON.stringify( mergeTwoLists(one, one1))) // {"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":4,"next":null}}}}}}