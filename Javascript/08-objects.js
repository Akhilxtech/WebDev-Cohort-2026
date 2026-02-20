const obj={
    name:"akhil",
    class:"mage",
    level:20,
    health:85,
    mana:120,
    isAlive:true
}

console.log("object value : ", obj);

// adding property inside object

obj.weapon="fire"
console.log("object value after adding new property: ", obj);



delete obj.weapon;
console.log("object value after deleting new property: ", obj);

// in keyword:  use to check existence of particular property inside object
 
console.log("weapon" in obj); // return true or false
console.log("mana" in obj);

console.log("toString" in obj);// return true because toString is prototype property

// hasOwnProperty : use this method to check existence of properties, it checks explicitly defined properties only not prototype properies

console.log(obj.hasOwnProperty("mana"));
