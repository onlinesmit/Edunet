// let ar = ["Sk", 5, 6.7, "ASDF"]
// console.log(ar)
// ar[1] = "dk"
// console.log(ar)

// ar.push("vv")
// // ar.pop()
// console.log(ar)

// let ar2 = [...ar]  //spread oprator copy/add elements from another array
// console.log(ar2)

// console.log(ar2[ar2.length-1])  //print arr last value


//find dublicATE NUMBER in array

function DubNo(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === undefined) {
            count[arr[i]] = 1;
        } else {
            count[arr[i]]++;
        }
    }

    for (let key in count) {
        if (count[key] > 1) {
            console.log(key);
        }
    }
}

let arr = [1, 2, 2, 5, 3, 6, 2, 8, 4, 9, 5, 6];

DubNo(arr);
