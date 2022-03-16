/** time: O(n)  space: o(1)*/
var reorderList = function(head) {
    let middle = findMiddleNode(head)
    let second = reverseMiddleList(middle)
    while(second){
        let next = head.next;
        head.next = second;
        second = second.next;
        head.next.next = next;
        head = next; 
    }
};

function findMiddleNode(head){
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let result = slow.next
    slow.next = null
    return result
}

function reverseMiddleList(head){
    let prev = null
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head
        head = next
    }

    return prev
}

var reorderList1 = function(head) {
    let slow = head; fast = head
  
      while(fast && fast.next){
          slow = slow.next;
          fast = fast.next.next;
      }
  
      let current = slow.next;
  
      /** reverse the middle list */
      let prev = null
      while(current){
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next
      }
  
      /** merge the first half and revered second half where prev hold the begining of reversed scond half */
      let first = head, second = prev
  
      while(second){
          let secondNext = second.next;
          let firstNext = first.next;
          first.next = second;
          second.next = firstNext
          second = secondNext
          first = firstNext
      }
  };


let four = {val: 4, next: null}
let three = {val: 3, next: null}
let two = {val: 2, next: three}
let one = {val: 1, next: two}

console.log(reorderList(one))