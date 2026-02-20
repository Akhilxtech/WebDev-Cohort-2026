// the problem is with var is it is accesiible from outside block scope 

// if(true){
//     var akhil="I am akhil"
//     console.log(`hello ${akhil}, from block scope`);
    
// }

// console.log(`hello ${akhil}, outside from block scope`);

// In let and const you cannot access variable out side the block

// if(true){
//     const akhil="I am akhil"
//     console.log(`hello ${akhil}, from block scope`);
    
// }

// console.log(`hello ${akhil}, from outside block scope`);

// const userDetails={
//     name:"akhil",
//     age:22,
//     status:"active",
// }

// console.log(`user name before modification ${userDetails.name}`);


// userDetails={ //if object is declared using const variable then you can not change the complete reference of an object
//     age:22,
//     status:"active",
//     term:1
// }

// console.log(`user details ${userDetails.age}`);

// userDetails.name="somu"// but you can change properties of an object

// console.log(`user name after modification ${userDetails.name}`);


// let userDetails={ //if object is declared using const variable then you can not change the complete reference of an object
//     age:22,
//     status:"active",
//     term:1
// }
// console.log(`user age ${userDetails.age}`);

// userDetails={ //if object is declared using const variable then you can not change the complete reference of an object
//     year:50,
// }
// console.log(`user details after modification year ${userDetails.year}`);

// const arr=[1,2,3,4,5]
// console.log(`array: ${arr}`);
// arr=[2,3,4];
// console.log(`arr after modification: ${arr}`);

