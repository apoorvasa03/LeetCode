
    /** time: o(n)  space- o(1) */
    var removeNthFromEnd = function(head, n) {
        let dummy = new Node(0); // adding dummy to pass the edge case when head = [1]
        dummy.next = head
        let first = dummy
        let second = dummy
    
    
        while(n > -1){
            first= first.next
            n--
        }
    
        while(first != null){
            first = first.next;
            second = second.next
        }
    
        second.next = second.next.next
    
        return dummy.next
    }
    
    
    var removeNthFromEnd1 = function(head, n) {
        let dummy = new Node(0)
        dummy.next = head
    
        let length = 0;
        let list = head
    
        while(list !== null){
            list = list.next;
            length++
        }
        length -= n;
    
        list = dummy
        while (length > 0){
            length--
            list = list.next
        }
    
        list.next = list.next.next
        return dummy.next
    };
    
    
    class Node {
        constructor(val, next= null){
            this.val = val;
            this.next = next;
        }
    }
    
    let five = {
        val : 5,
        next : null
    }
    let four = {
        val : 4,
        next : five
    }
    let three = {
        val : 3,
        next : four
    }
    let two = {
        val : 2,
        next : three
    }
    let one = {
        val : 1,
        next : two
    }
    
    console.log(JSON.stringify(removeNthFromEnd(one, 2))) // {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":5,"next":null}}}}