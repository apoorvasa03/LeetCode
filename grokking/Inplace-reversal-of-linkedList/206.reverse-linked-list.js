/** time: O(n) space: O(1)*/
var reverseList = function(head) {
    let prev= null;
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next
    }

    return prev
};


let five ={ val :5, next: null}
let four = {val: 4,next: five}
let three = {val: 3,next: four}
let two = {val : 2, next: three}
let one = {val : 1, next: two}

console.log(reverseList(one))