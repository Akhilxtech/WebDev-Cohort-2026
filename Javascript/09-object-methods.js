const artifact={
    name:"crown",
    era:"ancient",
    value:50000,
    material:"glass"
}

// Object.keys: return array of all keys of object

const keys=Object.keys(artifact);

console.log("keys of artifact object: ",keys);

// Object.values: return array of all values of object

const values=Object.values(artifact);
console.log("values of objects are :",values);

// Object.entries: return array of array for all key value pair

const entries=Object.entries(artifact);
console.log("entries of object artifact :",entries);


// for of loop

for(const [key,value] of Object.entries(artifact)){
    console.log(`keys: ${key} Value: ${value}`);
    
}

// Object.fromEntries : use to convert array of array into objects

const arr=[
  [ 'name', 'crown' ],
  [ 'era', 'ancient' ],
  [ 'value', 50000 ],
  [ 'material', 'glass' ]
]
console.log(" array of array  :",arr);

const convertedObj=Object.fromEntries(arr);

console.log("converted array of array into object :",convertedObj);



