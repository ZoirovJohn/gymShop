


// if "me"  =>  ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].




function wordSearch(query, seq){
    const result = seq.filter(ele => ele.toLowerCase().includes(query.toLowerCase()))
    return result.length == 0 ? ["Empty"] : result;
}

console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]))