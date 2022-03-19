/** Time: o(n) space: O(1)
 * there will be 3 pointers, 
 * 1st will points to the list before the start of reversal (before LEFT => leftPrev)
 * 2nd will be revesal which will point to head of revered list (prev)
 * 3rd will be the left out list (after RIGHT ends => current)
*/
var reverseBetween = function(head, left, right) {
    let dummy = {next: head};

    let leftPrev = dummy, current = head;

    for(let i =0; i < (left-1); i++){
        leftPrev = current;
        current = current.next
    }

    let prev = null;
    for(let i =0; i < (right -left +1); i++){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    leftPrev.next.next = current;
    leftPrev.next = prev;
    
    return dummy.next;
};


let five ={ val :5, next: null}
let four = {val: 4,next: five}
let three = {val: 3,next: four}
let two = {val : 2, next: three}
let one = {val : 1, next: two}

console.log(reverseBetween(one, 2, 4)) // [1, 4, 3, 2, 5]