const orders=[
    {dish:"pasta",price:14,spicy:false,qty:2},
    {dish:"dragon",price:2,spicy:true,qty:2},
    {dish:"salad",price:9,spicy:false,qty:2},
    {dish:"wings",price:11,spicy:true,qty:2},
    {dish:"truffle",price:18,spicy:false,qty:2}

]

const data=orders.forEach((order,index)=>{
    console.log(    (`${index+1} Dish Name: ${order.dish} Quantity: ${order.qty} price: ${order.price} total price: ${order.qty*order.price}`)
);
})

console.log(data);

// map - always return new array


const recipt=orders.map((items,idx)=>{
    idx++
 

    let it=`${idx+1}:${items.dish} ${items.qty}`
    return it;

})

console.log(recipt);

// reduce takes two parameter accumlator and currentValue, perform opretion on array and return single value

// ex-1 to understand the syntax

// const syntax=orders.reduce((accumlator,currentValue)=>{
//    //opretion
// },intialvalue)

const total=orders.reduce((sum,items)=>{
    sum+=(items.qty*items.price);
    return sum;
},0)

console.log(total);

const grouped=orders.reduce((acc,items)=>{
    const category=items.spicy? "spicy":"mild"
    acc[category].push(items.dish)
    return acc;

},{spicy:[],mild:[]})


console.log("grouped: ",grouped);

