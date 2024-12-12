

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
/*
function friend(friends){
    return friends.filter(name => name.length == 4 ? name : null)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
*/

// function findOdd(A) {
//     const arr = Array.from(new Set(A));
//     // console.log(arr);
//     for (let i of arr) {
//         length = (A.filter(ele => ele === i).length);
//         if (length % 2 == 1){ return i }
//         // console.log(length);
        
        
//     }
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))



// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// function hello(name) {
//     return !!name ? `Hello, ${name[0].toUpperCase()+name.toLowerCase().slice(1)}!` : "Hello, World!" 
// }

// console.log(hello("johN"));
// console.log(hello());
// console.log(hello(""));


// largest(2, [7,6,5,4,3,2,1])
// => [6,7]



function largest(n, array) {
    return array.sort((a, b) => a-b).slice(array.length-n)
    
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))




