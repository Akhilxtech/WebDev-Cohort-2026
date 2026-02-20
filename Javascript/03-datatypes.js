// string

const batsman="virat"
console.log(`type of batsman: ${typeof batsman}`);

// string methods and properties

// 1. length= used to find length of the string
console.log(`length of batsman is: ${batsman.length}`);

// 2. toLowerCase()/toUpperCase() Used for comparisons, search, normalization.
console.log(`batsman in upper case: ${batsman.toUpperCase()}`);
console.log(`batsman in lower case: ${batsman.toLowerCase()}`);

// 3. includes : used to check if substring exists of not

const info="hello i am akhil, i am from Kanpur UttarPradesh"

console.log(`is akhil hails from Kanpur UttarPradesh?? ${info.includes("Kanpur UttarPradesh")}`);

// 4. startswith/endswith: is used to check string starts with particular word or char 
console.log(`is info starts from hello ${info.startsWith("hello")}`);
console.log(`is info ends with UttarPradesh ${info.endsWith("UttarPradesh")}`);



// 5. substring() used to find substring takes two parameter starts and end and end is exclusive

console.log(`substring from info: ${info.slice(0,16)}`);

// 6. slice() same as substring but allowed negative indexes also

console.log(`substring from info: ${info.slice(-7)}`);

// 7. indexOf()/lastIndexOf()

console.log(` index of h ${info.indexOf("h")}`);// return starting character index

console.log(` last index of h ${info.lastIndexOf("h")}`);


// 8. replace() replace the first match

const name1= "akhil akhil";
console.log(name1.replace("akhil","tiwari"));

// 9. replaceAll() replace all the matches

console.log(name1.replaceAll("akhil","tiwari"));

// 10. trim() / trimStart() / trimEnd() : used to remove spaces

const manik="     hellllllllooooooooo             "
console.log(`before trim ${manik}`);
const manikTrim=manik.trimEnd()
console.log(`after trim: ${manikTrim}`);


// 11. split() convert string into array

const str="hello";
console.log(`before split: ${str}`);

const strArr=str.split(" ");
console.log(`After split: ${strArr}`);
console.log(`is StrArr is array ?? ${Array.isArray(strArr)}`);

// 12 join- convert array to string

const arr=['h','e','l','l']
console.log(`before join: ${arr}`);

const st=arr.join(" ")
console.log(`After join: ${st}`);

console.log(`type of st is: ${typeof st}`);

// padstart/padeng used to format numbers
// Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

// @param maxLength
// The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is.



const sr="akhil"
console.log(`before padding: ${sr}`);

const withPad=sr.padStart(6,"T")
console.log(`after provinding start padding: ${withPad}`);

// repeat: repeat string n times

const akh="at"
console.log(`repeat at 5 times: ${akh.repeat(5)}`);


// Numbers

const num=23;
console.log(`type of num is:  ${typeof num}`);

const status=null;
console.log(`type of status is: ${typeof status}`);

console.log(`type of undefined is: ${typeof undefined}`);

const uniqueRuneId=Symbol("this-is-label-only");// this value is diffrent
console.log(`unique rune id is: ${uniqueRuneId.toString()}`);
const uniqueRuneId1=Symbol("this-is-label-only");// this value is diffrent
console.log(`unique rune id is: ${uniqueRuneId1.toString()}`);


function caste(){
    return "general"
}

console.log(`type of caste is: ${typeof caste}`);// output is function

const big=23n;
console.log(`type of big is: ${typeof big}`);







