// ways to create an array in js
const carriage1=["akhil","manik","sourabh"] // way 1 use 99%
// console.log("way1:",carriage1);

const emptyArr=[];
// console.log(emptyArr);

const fiveElementsArr=Array(5);
// console.log("five elements array: ",fiveElementsArr);// length is 5

const singlePassenger=Array.of(1,2,3);  
// console.log(singlePassenger);

// Array(n)              → length = n (holes)
// Array(a, b, c)        → elements
// Array.of(a, b, c)     → elements ALWAYS

const trainCode=Array.from("AKHIL")

console.log(trainCode);

const doubles=Array.from([1,2,3,4],(x)=>2*x)
console.log(doubles);

const temp=[1,2,3,4,5]
console.log("array before changing length: ",temp);

temp.length=3

console.log("array after changing length: ",temp);

temp.length=5;

console.log("array after reseting to original length: ",temp);







