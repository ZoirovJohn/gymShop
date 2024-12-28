console.log("Train.ts ishga tushdi");
console.log("--------------------------------------")




// ---------------------------------------------------
/*// H-TASK

function getPositive(arr: Array<number>) {
    return arr.filter(ele => ele > 0 ? ele : null).join("")
}

console.log(getPositive([1, -4, 2]));
*/
/*// H2-TASK: 

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
*/
/*// I-TASK:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.


function majorityElement(arr: number[]) {
    const sorted_arr = Array.from(new Set(arr)).sort((a, b) => a - b);
    let max: number = 0;
    let max_numname: string = "";
    for (let num of sorted_arr) {
        console.log(`${num} ni qanchaligini tekshirib, eng kop bosa chiqaramiz`);
        const count = arr.filter((ele) => ele === num).length;
        // console.log(count)
        if (count > max) {
            max_numname = num.toString();
            max = count;
            console.log(`Hozirgacha, soni eng kop raqam: ${max_numname} va u ${max} ta`);
        }
        // console.log("\n")
    }
    console.log("--------------------------------")
    return `Eng kop takrorlangan raqam bu: ${max_numname}`;
}

console.log(majorityElement([1, 2, 1, 9, 3, 4, 5, 4, 8, 4, 2, 4, 1, 4, 3, 4]));
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); */
/*// J-TASK:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda 

function findLongestWord(str: string) {
    let len = str.split(" ")[0].length;
    return str.split(" ").filter((a) => {
        if(a.length >= len){
            len = a.length;
            return len
        }
    }).pop()
}

console.log(findLongestWord("I came a from Uzbekistan!"));
*/
/*// K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1; 

function countVowels(word: String): Number {
    const vowels_arr = ["a", "e", "i", "o", "u"];
    return word.split("").filter((v) => vowels_arr.includes(v)).length;
}
// console.log(countVowels("stringqiiiqoefoiqwobaonfoaucoqanwaiefnawc"));
console.log(countVowels("string"));
*/
/*// L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc"; 
function reverseSentence(sentence: string): string {
    return sentence
        .split(" ")
        .map((word: string) => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("we like coding!"));
*/