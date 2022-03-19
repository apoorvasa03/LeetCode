var rotateRight = function(head, k) {
    if(!head) return head;

    let length = 1, tail = head
    while(tail.next){
        tail = tail.next;
        length++
    }

    k = k % length
    if(k == 0) return head

    let current = head;
    for(let i =0; i < (length -k -1); i++){
        current = current.next
    }

    let newHead = current.next;
    current.next = null
    tail.next = head;

    return newHead
}