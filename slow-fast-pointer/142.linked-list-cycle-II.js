
/** time: o(n)  space: o(1) 
 * time: for non cyclic list => fast will travel once so O(n)
 * for cyclic
*/
var detectCycle = function(head) {
    let slow = detectIntersection(head);
    let fast = head

    if(slow && fast){
        slow = slow.next;
        fast = fast.next;
        if(slow === fast) return slow
    }
    return null
}
function detectIntersection(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return slow
    }

    return null
}

var detectCycle2 = function(head) {
    let slow = head;
    let fast = head

    /** we will find the intersection of the slow and fast pointer in the list */
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = head;
            /**find the start/enterance of the cycle */
            while(slow != fast){
                slow = slow.next;
                fast = fast.next
            }
            return slow
        };
    }

    /** once the intersection is found where both pointer points to same node, make any one of the pointer to start from head */
   

    return null
};




// [3,2,0,4] pos = 1
let four ={
    val:4,
    next: null
}
let zero ={
    val: 0,
    next: four
}
let two ={
    val: 2,
    next: zero
}
let three = {
    val: 3,
    next: two
}

four.next = two

console.log(detectCycle(three))