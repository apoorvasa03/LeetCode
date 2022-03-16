/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
 */


/** time - o(n)  space -o(1) */
const hasCycle = function(head) {
    let slowRunning = head, fastRunning = head
    while(fastRunning && fastRunning.next){
        //  Floyd's Cycle Finding Algorithm
        // if we think fastRuning hop on slowrunning , such that slow runner is i and fastrunning is i+1
        //but in previous cycle slowu=ruuning will be i-1 and falst running will be (i+1) -2 ie i-1, they will collide
        slowRunning = slowRunning.next
        fastRunning = fastRunning.next.next
        if(slowRunning === fastRunning) return true
        
    }

    return false
};


let four = {
    val : 4,
    next : null
}

let three = {
    val : 3,
    next : four
}


let two = {
    val : 2,
    next : null
}

let one = {
    val : 1,
    next : two
}

// four.next = two

console.log(hasCycle(one)) // true