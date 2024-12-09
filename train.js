console.log("Train.js ishga tushdi");

// Task E

function getHighestIndex(array) {
    let a = array[0];
    array.map((ele, index) => {
        a = ele > a ? ele : a;
        // console.log(index);
        if (index == array.length - 1) {
            console.log(array.indexOf(a));
        }
    })
}

getHighestIndex([5, 21, 12, 21 ,8]);
