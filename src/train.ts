console.log("Train.ts ishga tushdi");

// H-TASK

function getPositive(arr: Array<number>) {
    return arr.filter(ele => ele > 0 ? ele : null).join("")
}

console.log(getPositive([1, -4, 2]));
