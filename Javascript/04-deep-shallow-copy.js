// shallow copy

const a=2;
let b=a;

// console.log(` value of a ${a}`);
// console.log(` value of b ${b}`);

b=10;// no change in a
// console.log(` value of a ${a}`);
// console.log(` value of b ${b}`);


// arrays

const originalArr=[1,2,3,4,5];
// console.log(`value of orignal array: ${originalArr}`);
let copyArr=originalArr;
// console.log(`value of copy array: ${copyArr}`);

copyArr.push(10);// orignal array also modified
// console.log(`value of orignal array after pushing 10: ${originalArr}`);

// console.log(`value of copy array after pushing 10: ${copyArr}`);


// objects
const user={
    name:"akhil",
    age:22,
    status:"active"
}

console.log(` original user obj name: ${user.name}`);

let copyUser=user;
copyUser.name="somu"// name changed in original object also
// console.log(` original user obj name: ${user.name}`);
// console.log(` copy user obj name: ${copyUser.name}`);


//  so in shallow copy if you make changes inside copy of an object or array original data will also changed.


// deep copy

const array=[1,2,3,4];
console.log(`orignal array value ${array}`);

let copyArray=structuredClone(array); // or [...array] or array.slice() .slice goves shallow copy
console.log(`copy array ${copyArray}`);
copyArray.push(10);

console.log(`orignal array value after pushing 10: ${array}`);// if you use string interpolation to print array it print as a string not array
console.log(`copy array after pushing 10: ${copyArray}`);


const originalObj={
    greet:"hii",
    message:{
        name:"akhil"
    }
}

// let copyObj={...originalObj};// only gives deep copy for non nested properties

let copyObj=structuredClone(originalObj)

console.log("orignal obj greet: ", originalObj);
console.log("copy obj greet: ", copyObj.greet);
console.log("copy obj nested property name value: ", copyObj.message.name);


copyObj.greet="hello"
copyObj.message.name="manik"

console.log("orignal obj greet after modification: ", originalObj);
console.log("copy obj greet after modification: ", copyObj.greet);
console.log("orignial obj nested property name value: ", originalObj.message.name);
console.log("copy obj nested property name value: ", copyObj.message.name);










