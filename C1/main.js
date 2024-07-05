console.log("hello");
// let, var , const 
// string, number and boolean 

// arr = [];
// objects  -- 
// const user1  = {
//   firstname , gender
// } console.log(user1["firstname"]) or user1.firstname 


// // arrays of object 

// function sum(a,b){

//     return a + b;
// }

// console.log(sum(3,5))

// // there is 2 function , you have to return in 1 function call , :::: put function in the arguments of another function 
// function greet(){
//     console.log("hello ");
// }
// // setTimeout(greet , 5 * 1000)
// setInterval(greet, 2*1000)
// sleep(10201);

// String , str.indexOf()  .. lastIndexOf
// str.slice(startidx, endidx)
// str.substr(start, end) .. end gives gives the char needed after strt
// str.replace(target, replacement)
// str.split(separator) -- gives an arr
// str.trim()  -- trim out the space in the beginning and at the end 
// str.toUpperCase()
// str.toLowerCase()
// parseInt("32") -- converts str/float to integer , if no number at the begining --  then NaN  , decimal to integer  , 331adadf to 331 
// parseFloat()


// arr
// arr.push( )
// arr.pop()
// arr.unshift( ) -- put in front
// arr.shift() -- pop from front

/*  

arr1 = arr.concat(arr0);
arr.forEach(logThing ) -- here basically arr is the array of i and logthing is the function to be called like a loop  


undefined come when we are returning the output of the function and that function is not returninig anything  

class Animal{
    constructor(name, legcount, speaks){
        this.name = name


    }
    
    static type -- not associated to objects, its associated to the classes, can be directly called like  Animal.type()
     

    speak(){
    }

}

let d  = new Animal(, , );
d.speak()


Date is a in built class

*/ 

const currentDate  = new Date();

// console.log(currentDate.getMonth()+ 1);
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getTime()) -- - 970s
// console.log(currentDate.getFullYear())

// console.log(currentDate.getTime())
// JSON -- java script object notification

// const user = '{"name": "mayak" ,"age" : 21}' -- it is a string 
// JSON.parse -- convert above one is object form 
// JSON.stringify -- make object like above
// math function 

/* 
object.Keys()
object.values()
object.entries()
object.hasOwnProperty( "name")  -- if name is there then it will print true


// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}


*/