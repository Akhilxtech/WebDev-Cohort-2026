const array1=[1,2,3,4,5]
// console.log("array: ",array1);

array1.push(6,10);// multiple elements allowed, add elements at last
// console.log("Array after pushing element: ",array1);

const arr2=[1,2,3,4,5];
// console.log("Array 2: ",arr2);

arr2.pop(); // delete single element from last
// console.log("Array 2 after deleting values: ",arr2);

const arr3=[5,6,7];
// console.log("array 3 before adding values: ",arr3);

arr3.unshift(1,2,3,4);// multiple elements allowed, add elements from front
// console.log("array 3 after adding values from front: ",arr3);

const arr4=[1,2,3];
// console.log("array 4 values: ",arr4);

arr4.shift(); // remove values from front
// console.log("array 4 values after deletion: ", arr4 );


// mutating methods-> changes are done in orignal array

const arr5=[1,2,3,4,5,6,7,8];
arr5.splice(2,4);
console.log("arr5 value after removing value from index 2 and remove 4 elements: ",arr5);

const arr6=[1,2,3,4,5,6,7,8,9,10];
let b=arr6.splice(2,4,50);// return deleted elements
console.log("b value: ",b);

console.log("arr5 value after removing value from index 2 and remove 4 elements and add 50 element: ",arr6);


// non-mutating methods returns new array 

// concat

const arr7=[1,2,3];
const arr8=[4,5,6];

// console.log("arr7: ",arr7);
// console.log("arr8: ",arr8);

const concatArr=arr7.concat(arr8);
// console.log("concanated array: ",concatArr);

// slice exclude end pointer

const a=[1,2,3,2,7,3,9]
// console.log("original array a", a);

const bro=a.slice(2,4);
// console.log("copy of a in bro: ", bro);

// flat 

const nonFlat=[1,2,[3,4,5,6,7]]
// console.log("non flatted array: ",nonFlat);

const flatted=nonFlat.flat();
// console.log("flatted array: ",flatted);


// searching methods

const ar=[1,2,3,4,5,6,7,0];

// indexof return index of particular element

console.log("index of 5: ",ar.indexOf(5));

// includes: tells wethere element is present inside array or not

console.log("is element 10 present: ",ar.includes(10));

// find takes an callback and return first element as soon as condition matches

const ele=ar.find((e)=>{
    return e>4;
})

// console.log("value inside ele: ",ele);

const el=ar.findIndex((e)=>{
    return e>2;
})

console.log("index of element which is greater than 3: ",el);















