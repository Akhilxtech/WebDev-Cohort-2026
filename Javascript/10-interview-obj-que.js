const display={
    artifact:"obsdian",
    location:"hall A",
    locked: true
}

// object.freeze(obj): now you can not change anything inside object (no deletion,no addition,no modification)

// console.log("object before freeze :",display);

Object.freeze(display);

// delete display.locked; not working as expected
// display.number=1; not working as expected


// console.log("object after applying freeze :",display);

const display2={
    artifact:"obsdian",
    location:"hall A",
    locked: true
}

// Object.seal(obj); allow you to edit existing properties but not structural changes

Object.seal(display2);

// console.log("object before seal:",display2);

// delete display2.locked not working as expected

display2.locked=false // working as expected

// console.log("object after applying seal :",display2);


const secure={
    name:"Akhil"
}

Object.defineProperty(secure,"age",{
    value:22,
    writable:true, // if false you can't change this property
    enumerable:true,//if true this particular property is traversable during traversal
    configurable:false// if true then you can delete or redefine this property
})

console.log("secure: ",secure);

delete secure.age
console.log("secure1: ",secure);

