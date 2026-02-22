const student={
    name:"akhil",
    usn:"1DB23CS010",
    introduction:function introduce(){
        console.log(`name: ${this.name}, USN: ${this.usn}`);

    }
}

// student.introduction();


const student2={
    name:"Rahul",
    usn:"1DB23CS020",
}

// here i want to access introduction method declared in student object , in student2 object, i can write this explicitly inside student2 object but instead of that i use call apply and bind methods

// student.introduction.call(student2)


function printDetails(hobby,sex){
    console.log(`name: ${this.name}, age: ${this.age},status: ${this.status}, hobby: ${hobby}, gender: ${sex}`);
}


const userDetails1={
    name: "shivam",
    age:22,
    status:"Active"
}
// call- send function argumetns individually
// printDetails.call(userDetails1,"Table Tennis", "Male");



const userDetails2={
    name: "shiv",
    age:20,
    status:"Active"
}
// apply send function arguments as an array
printDetails.apply(userDetails2,["cricket","Male"])

const userDetails3={
    name: "shobhit",
    age:21,
    status:"Active"
}


// bind return a new function

// const bindDetails=printDetails.bind(userDetails3,["football","male"]) you can't send array directly to bind as argument

const arr=["football","male"]
const bindDetails=printDetails.bind(userDetails3,...arr) 


// console.log("typeof bind details: ", typeof bindDetails);

// bindDetails();

// use cases of call bind and apply

// 1. for boorwing functions from object as you see above


// 2. fixing this keyword inside callback

const timing={
    time:function timer(){
        let second=0;
        setTimeout(function (){
            console.log(this);
            this.second++;
            console.log(second);
            
            
            
        }.bind(this),1000)
    }
}


// timing.time();


// 3. partial application

function add(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    
    
    
    return a+b+c;
}

const addition=add.bind(null,3)// here bind returns a function in which the value of parameter a is 3 and rest of the parameters are same
// creates a new function where:

// this is fixed to null (irrelevant here since add does not use this)

// the first argument a is permanently set to 3

// So internally it becomes something like:

// function addition(b, c) {
//     return add(3, b, c);
// }
console.log(addition(2,5));


