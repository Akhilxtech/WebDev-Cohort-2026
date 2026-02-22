console.log(brewPotion("amla",2));

function brewPotion(ingridients,dose){
    return `brewing potion with ${ingridients} and ${dose}`
}

// function expression

const mixElix=function(ingridient){
    return `mixing elexir with ${ingridient}`

}

console.log(mixElix("coke"));


// arrow functions

const distilEssence=(ingri)=>{
    return `mixing essence with ${ingri}`
}

console.log(distilEssence("diet coke"));

// every function has its own argument object

// eg-1 normal function

function oldBrew(){
    console.log("Type of argument: ", typeof arguments);
    console.log(arguments);
    console.log("is argument array ? ", Array.isArray(arguments));
    
}

oldBrew("coke","canaberry","redlabel")



// eg-2 Arrow functions

const arrowBrew=()=>{
try {
    console.log(arguments);

} catch (error) {
    console.log(error.message);
    
}}

// arrowBrew()// program is crashed because you are trying to access arguments inside arrow function, don't think it throws error


// console.log("program still continues");

// IIFE

const potionShop=(()=>{
    let inventory=0;
    return {
        brew(){
            inventory++;
            console.log(`brew potion ${inventory}`);
            
        },
        getStock(){
            return inventory;
        }
    }
}

)()


potionShop.brew();

console.log("running getstock function: ",potionShop.getStock());




// closures

// normal function

function Normal(){
  let count=0;
  count++;
  return count;
}

//  reference lost after execution

console.log("variable lost refrence after return ",Normal()); // 1
console.log("variable lost refrence after return",Normal()); // 1 




// closure Function

function closureFun(){
    let count=0;
    function increment(){
        count++;
        console.log("count: ",count);
    }
    return increment;
}

//  variables didn't lost reference after execution

const closure=closureFun();
closure(); // 1
closure(); // 2
closure(); // 3
closure(); // 4
closure(); // 5
closure(); // 6
