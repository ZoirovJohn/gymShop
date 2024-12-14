

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



// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

// f


// function houseNumbersSum(inputArray) {
//     let result=0;
//     for (let i of inputArray) {
//         if(i === 0) { break; }
//         result += i;
//     }
//     return result
// }

// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))
// // [5, 1, 2, 3, 0, 1, 5, 0, 2]


// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"




function solve(str){
    let ind_arr = [];
    const splt_arr = str.split("");
    for (let i=0; i < splt_arr.length; i++) {
        if (splt_arr[i] === " ") {
            ind_arr.push(i);
        }
    }
    const reversed_arr = splt_arr.reverse();
    const filtered_arr = reversed_arr.filter((ele) => ele !== " ")
    for (let i of ind_arr) {
       filtered_arr.splice(i, 0, " ")
    }
    const result = filtered_arr.join("")
    return result
}


console.log(solve("your code rocks"))


