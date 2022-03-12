/** time: o(n)  space: o(1)*/
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    /** conside we have [1, 2, 2, 1] => slow will be [2, 1] which is revered => [1, 2], now compare with head
     * consider we have [1, 2, 3, 2, 1] => slow will be [3, 2,1] which is revered => [1, 2, 3], now compare give false
     * hence we need to skip the middle if list is odd numbered
    */
    if(fast) slow = slow.next;

    let middleList = reverseLinkedList(slow)

    slow = head
    while(middleList){
        if(slow.val != middleList.val) return false
        slow = slow.next
        middleList = middleList.next
    }

    return true
}

function reverseLinkedList(head){
    let prev = null;

    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev
}

let one1 = {val: 1, next: null}
let two2 = {val: 2, next: one1}
let two = {val: 2, next: two2}
let one = {val: 1, next: two}

// [1,2] false
// [1, 1, 2, 1] false
// [1, 2, 2, 1]  true
console.log(isPalindrome(one))