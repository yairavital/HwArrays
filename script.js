//Ex1
/*
function getFirstValue(arr) {
  console.log(arr[0]);
}
getFirstValue([1, 2, 3, 4]);
//Ex2
function drop(arr, num) {
  let arr1 = [];
  for (let i = 0; i < num; i++) {
    arr1.push(arr.shift());
  }
  return arr1;
}
console.log(drop([1, 2, 3], 2));
//Ex3
function conceArray() {
  let arrConc = [];
  for (let i = 0; i < arguments.length; i++) {
    arrConc = arrConc.concat(arguments[i]);
  }
  return arrConc;
}
console.log(conceArray([1, 23, 4], [3, 5, 4], [4, 5]));
//Ex4

function arrayMultiples(num, length) {
  let arrMult = [];
  let count = 1;
  while (count <= length) {
    arrMult.push(num * count);

    count++;
  }
  return arrMult;
}
console.log(arrayMultiples(7, 5));

//Ex5
function sevenBoom(arr) {
  if (find7(arr) != -1) return "Boom containes 7 in " + arr[find7(arr)];
  else return "there is not 7";
}
function find7(arr) {
  let numInclode7 = -1;
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i].toString().includes(7);
    if (y) numInclode7 = parseInt(arr[0]);
  }
  return numInclode7;
}
console.log(sevenBoom([1, 27, 45]));
//Ex6
function lengthOfArray(arr) {
  let strArr = arr.toString();
  let ss = strArr.split(",");
  if (ss.length === 1) console.log(0);
  else console.log(ss.length);
}
lengthOfArray([
  [1, 2, 3],
  [4, [5, 6]],
]);
lengthOfArray([]);
//Ex7
function strPrint(arr) {
  let str = arr.toString();
  if (str.length == 0) console.log("why you make this?");
  console.log(str);
}
strPrint([[[[[[["df"]]]]]]]);
strPrint([]);
//Ex8
function zero(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
      arr.splice(i, 1);
      i--;
    }
  }
  let arr1 = [];
  for (let i = 0; i < count; i++) arr1.push(0);
  arr = arr.concat(arr1);
  console.log(arr);
}

zero([1, 2, 3, 0, 8, 7]);
zero([2, 0, 0, 6]);
//Ex9
function fill(arr, valueUser, start = 0, end = arr.length) {
  let i = start;
  leng = end;
  for (start; i < end; i++) {
    arr[i] = valueUser;
  }
  return arr;
}
const ar = fill([1, 3, 4], 3);
const ar1 = fill([1, 2, 3, 4, 5], 2, 1, 4);
console.log(ar);
console.log(ar1);
*/
//Ex10
let obj = {};
let count1 = 0;
let pos;
let arr = [];
let arr1 = [];
function diamond(number1) {
  if (number1 % 2 == 0) {
    pos = number1 / 2 + 1;
    for (let i = 0; i < number1 - 1; i++) {
      arr[i] = new Array(number1).fill(0);
    }
    let after = pos - 1;
    let prev = after - 1;
    for (let i = 0; i < arr.length; i++) {
      if (prev >= 0 || after >= arr[i].length) {
        arr[i][after] = 1;
        arr[i][prev] = 1;
        after++;
        prev--;
      }
    }
    arr1 = arr.slice(0, pos - 1).concat(arr.slice(0, pos - 2).reverse());
    obj = { arr1, str: "good cut" };
    return obj;
  } else pos = (number1 - 1) / 2;
  {
    for (let i = 0; i < number1; i++) {
      arr[i] = new Array(number1).fill(0);
    }

    for (let i = 0; i < arr.length; i++) {
      if (count1 <= pos) {
        arr[i][pos - count1] = 1;
        arr[i][pos + count1] = 1;
        count1++;
      } else break;
    }
    arr1 = arr.slice(0, count1).concat(arr.slice(0, count1 - 1).reverse());
  }
  obj = { arr1, str: "perfect cut" };
  return obj;
}

console.log(diamond(8));
