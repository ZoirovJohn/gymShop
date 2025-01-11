console.log("Train.ts ishga tushdi");
console.log("--------------------------------------");
/**TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

function calculate(str: string) {
    return eval(str);
}

console.log(calculate("1 + 3"));

// ---------------------------------------------------
/** TASK H:

function getPositive(arr: Array<number>) {
    return arr.filter(ele => ele > 0 ? ele : null).join("")
}

console.log(getPositive([1, -4, 2]));
*/
/** TASK H2:

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
/** TASK I:

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
/** TASK J:

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
/** TASK K:

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1; 

function countVowels(word: String): Number {
    const vowels_arr = ["a", "e", "i", "o", "u"];
    return word.split("").filter((v) => vowels_arr.includes(v)).length;
}
// console.log(countVowels("stringqiiiqoefoiqwobaonfoaucoqanwaiefnawc"));
console.log(countVowels("string"));
*/
/** TASK L:

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
/** TASK M:

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]; 

function getSquareNumbers(arr: number[]) {
    return arr.map((ele: number) => ({ number: ele, square: ele ** 2 }));
}

console.log(getSquareNumbers([1, -4, 2]));
*/
/** TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(word: string) {
    // const reversed_word = word.split("").reverse().join("");
    // console.log(reversed_word)
    return word.split("").reverse().join("") === word;
  }
  
  console.log(palindromCheck("dad"));
  // console.log(palindromCheck("asdfghjklkjhgfdsa"));
*/
/** TASK O:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr: any) {
    //   return word.split("").reverse().join("") === word;
    return arr
      .filter((ele: any) => typeof ele === "number" && !isNaN(ele))
      .reduce((acc: number, value: number) => acc + value);
  }
  
  console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
  // console.log(calculateSumOfNumbers([10, "10", NaN, { son: 10 }, true, 35]));
*/
/** TASK P:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]] 


function objectToArray(obj: any) {
    //   return word.split("").reverse().join("") === word;
    //   return arr
    //     .filter((ele: any) => typeof ele === "number" && !isNaN(ele))
    //     .reduce((acc: number, value: number) => acc + value);
    const result: any[][] = [];
    for (const [key, value] of Object.entries(obj)) {
      // console.log(key);
      // console.log(value);
      result.push([key, value])
    }
    return result;
  }
  
  console.log(objectToArray({ a: 10, b: 20 }));
*/
/** TASK Q:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false 


function hasProperty(obj: any, str: string) {
    for(const key of Object.keys(obj)) {
      if (key === str) return true;
    }
    
    return false;
  }
  
  console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
  console.log(hasProperty({name: "BMW", model: "M3"}, "year"));
*/
  