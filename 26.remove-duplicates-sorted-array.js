function removeDups(list){
    let n = list
    let set = new Set();
    let previous = null;

    while(n!= null){
        if(set.has(n.val)){
            previous.next = n.next
        }else{
            set.add(n.val);
            previous = n;
        }
        n = n.next
    }

    return list
}


let six = {
    val : 4,
    next : null
}
let five = {
    val : 2,
    next : six
}
let four = {
    val : 2,
    next : five
}
let three = {
    val : 2,
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

console.log(JSON.stringify(removeDups(one)))