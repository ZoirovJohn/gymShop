console.log("Train.ts ishga tushdi");

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(input: String) {
    let result:String = "";
    for (const ele of input) {
        if (!isNaN(Number(ele))) {
            result += ele;
        }
    }
    return result
}

console.log(getDigits("m14i1t"));

// ---------------------------------------------------
/*// H-TASK

function getPositive(arr: Array<number>) {
    return arr.filter(ele => ele > 0 ? ele : null).join("")
}

console.log(getPositive([1, -4, 2]));
*/