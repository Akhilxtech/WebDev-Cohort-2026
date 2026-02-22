// this keyword in global space- represent global object
// console.log(this); // empty obj

// the value of this keyword in global object depends where the keyword is using for eg in browser the value is window object, in node env the value is empty obj

// this keyword inside function

// 1. normal function

function displayThis(){

    console.log(this);
    
    
}

// the value of this keyword depends how you call the function is called 

// const thisValue=displayThis();
// console.log(thisValue);// in browser non-strict mode(by default) refers to window
//  in node js env non-strict mode(by default) refers to global object



const obj={
    name:"Akhil",
    fun: function hello(){
        console.log(this);
        console.log(this.name);
        
    }
}

// obj.fun();


const object={
    name:"Akhil",
    fun: function hello(){
        let name1="manik"

        console.log("outer: ",this.name);
        console.log("outer: ",name1);


        function inner(){
            console.log("inner: ",this.name1);
            
        }
        inner();

        const nestedArrow=()=>{
            console.log("nested Arrowfunction :",this.name);
            console.log("nested Arrowfunction :",this.name1);

            
        }
        nestedArrow()
    }
}

// object.fun();




const object1 = {
  name: "Akhil",
  fun: function hello() {

    const nestedObj = {
     name1: "manik",

      fun1: function outerNested() {

        console.log("nested object", this);
      },
    };
    nestedObj.fun1()
  },
};

// object1.fun();

const obje={
    name:"Akhil",
    arrow: function normal(){
            const arrow=()=>{
            console.log(this);
            
        }
        arrow();
    }
}

obje.arrow();


