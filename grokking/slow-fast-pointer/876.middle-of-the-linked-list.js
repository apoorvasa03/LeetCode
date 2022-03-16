/** time: o(n)  space: o(1)*/
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    /** fast move 2 step when sow move 1 step, by the time fast reachs end, slow will be in the middle node */
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }

    return slow
};

let six = {
    val: 6,
    next: null
}

let five = {
    val: 5,
    next: null
}

let four = {
    val: 4,
    next: null
}

let three = {
    val: 3,
    next: four
}


let two = {
    val: 2,
    next: three
}

let one = {
    val: 1,
    next: two
}

console.log(middleNode(one))