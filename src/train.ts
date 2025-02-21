console.log("Train.ts ishga tushdi");
console.log("--------------------------------------");
/**TASK-ZF:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
*/

function capitalizeWords(str: string) {
  const list = [1, 2, 3, 4]
  const find_arrr = list.find(ele => ele >= 3 ? ele : null)
  const map_arrr = list.map(ele => ele >= 3 ? ele : null)
  const filter_arrr = list.filter(ele => ele >= 3 ? ele : null)
  console.log("find_arrr qaytgan: ", find_arrr);
  console.log("map_arrr qaytgan: ", map_arrr);
  console.log("filter_arrr qaytgan: ", filter_arrr);
  console.log("original arr: ", list);
  
  return list
}

console.log(capitalizeWords("name should be a string"));
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
/** TASK R:

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. 

function calculate(str: string) {
    return eval(str);
}

console.log(calculate("1 + 3"));
*/
/** TASK S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 

function missingNumber(str: number[]) {
    const a = str.sort()
    let num = a[0]
    for (const ele of a) {
        if (num !== ele) return num;
        num ++;
    }
}

console.log(missingNumber([3, 0, 1]));
*/
/** TASK T:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]


function mergeSortedArrays(str1: number[], str2: number[]) {
    return (str1.join("*") + "*" + str2.join("*")).split("*").map(Number).sort((a, b) => a - b);

}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
*/
/** TASK U:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;




function sumOdds(num: number) {
    return ((num-(num)%2)/2)

}

console.log(sumOdds(9));
console.log(sumOdds(11));
*/
/** TASK V:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}



function countChars(str: string) {
    const result: Record<string, number> = {};
    for (let ele of str) {
      if (result[ele]) {
        result[ele]++;
      } else {
        result[ele] = 1;
      }
    }
  
    return result;
  }
  
  console.log(countChars("hello"));
*/
/**TASK-W:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]



function chunkArray(arr: number[], num: number) {
  let result: number[][] = [];
  while (arr.length) {
    result.push(arr.splice(0, 3));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
*/
/**TASK-X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda



function countOccurrences(obj: Record<string, any>, str: string) {
  let count = 0;

  function insideFunc(object: Record<string, any>) {
    for (const key in object) {
      if (key === str) {
        count++;
      }

      if (typeof object[key] === "object" && object[key] !== null) {
        insideFunc(object[key]);
      }
    }
  }

  insideFunc(obj);
  return count;
}

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model"
  )
);
*/
/**TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.



function findIntersection(arr1: number[], arr2: number[]) {
  return arr1.filter((num) => arr2.includes(num));
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));
*/
/**TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.



function getHighestIndex(arr: number[]) {
  const highest_num = [...arr].sort((a, b) => b - a)[0];

  for (let ele of arr) {
    if (ele === highest_num) return arr.indexOf(ele);
  }
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
*/
/**TASK-ZB:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45


function randomBetween(num1: number, num2: number) {
  return num1 + 1 + Math.floor(Math.random() * (num2 - num1 - 1));
}

console.log(randomBetween(30, 50));
*/
/**TASK ZC

Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.


function celsiusToFahrenheit(celsius: number) {
  return celsius * 9 / 5 + 32
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
*/
/**TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.


function changeNumberInArray(index: number, arr: any[], num: number) {
  arr[index] = num;
  return arr;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
*/
/**TASK ZE

Shunday function yozing, uniygona string parametri mavjud bo'lsin.
Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
qiymatni qaytarsin.

MASALAN: removeDuplicate('stringg') return 'string'

Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
qaytarmoqda.


function removeDuplicate(word: string) {
  let result = "";
  let exist = "";
  for (const ele of word) {
    if (!exist.includes(ele)) {
      result += ele;
      exist += ele;
    }
  }
  return result;
}

console.log(removeDuplicate("stringg"));
*/
/**TASK-ZF:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'


function capitalizeWords(str: string) {
  const splittedWord = str.split(" ");
  const afterUppercasing = splittedWord.map((ele) =>
    ele.length > 3 ? ele.charAt(0).toUpperCase() + ele.slice(1) : ele
  );
  return afterUppercasing.join(" ");
}

console.log(capitalizeWords("name should be a string"));
*/