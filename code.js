
//Function Name --> must
//Input --> optional
//Body --> Must
//Output --> optional undefined

//  function functionName(){

//      var a = 'Function'
//      console.log('Function');
//      return a
//  }
//  //  functionName(); 

//   var result = functionName;
//   console.log(result())

// function functionName1() {
//     console.log(arguments[0]);

// }

// var result = functionName1
// console.log(result('Mahidul', 'Primeasia','Javascript'))

// function functionName2(str) {
//     var some = str.split('');
//     return some;

// }

// var result = functionName2
// console.log(result('Mahidul'))

//--> Function Expression -->

// var  functionName3 = function(str) {
//     var some = str.split('');
//      return some;

// }

//  var result = functionName3
//  console.log(result('Mahidul'))



//--> Function Declaration -->

// function hello(){
//     console.log('Mahidul')
// }
//  hello()

//FistClass Function
//Pure Function

//stored in object --> true
//stored in array
//passed as an arguments to a function


//  var fun = function (num){
//      console.log(num);

//  }

//  function arrFun(callback){
//      console.log(callback('Mahidul'));
//  }

//    arrFun(fun)



//  var obj = {

//      anotherSum: function(){

//          console.log('Hello function from object');
//          return true
//      }


//  }
//  console.log(obj.anotherSum());

// var arr = [2, 'Hello', undefined, arrfun];
// console.log(arr[2]());

//returned from a function
// (function func() {

//     function inner(a, b) {

//         console.log(a + b);

//         function inner1() {

//             console.log('sdasrerewq');

//         }
//         inner1()
//     }
//      inner()

// })()

//{Give the same input,will always return the same output
//No side Effect
// No share state} this is called pure function

// function output(value){

//     var newValue = value.length
//     console.log(newValue)
// } 

// output('Khandaker Mahidul Islam');
// output('Khandaker Mahidul Islam');
// output('Khandaker Mahidul Islam');
// output('Khandaker Mahidul Islam');
// output('Khandaker Mahidul Islam');

//{ this is No pure function
// var a = 10;
// function output() {
//     a = 100;
// }

// a
// output()
// console.log(a)
// a
//}

// this is no pure function
// var a = 10;
// function output(){

//     var newValue = a+ 10
//     console.log(newValue);
// }
// a
// output()
// console.log(a)

// This is No pure function
// var obj = {
//     num: 100
// }

// function output(value){
// console.log(value.num = 200)

// }

// output(obj)
// console.log(obj.num)

// this is pure function concept
// var obj = {

//     num: 100,
// };

// function output(value){
//     var newValue = Object.assign({}, value);
//     console.log(newValue.num = 500)
// }

// output(obj)
// console.log(obj.num);
















// var a=20, b=20
// var z = a+b;
// console.log(z);


// console.log('Hello first console');

// function hello(){

//     console.log("Inner Funtion");
//     return setTimeout(() => {

//         console.log('set time out funtion');

//     }, 3000);
// }

// console.log('Hello second console');
// hello();

// function callMe(name,callBack){

//     console.log('My name is ' + name);
//     console.log('Length ' + name.length);
//     callBack(name)

// }


// callMe('Mahidul', function(name) {

//     var newName = name.split('');
//     console.log(newName);
//     console.log(name.split('').join('-'));


// });



// var arr = [25, 24, 56, 17, 80]

//  arr.forEach(function(data){

//    console.log(data + 2);

// })

// function myForeach(arr,callback){

//    for(var i=0; i<arr.length; i++){

//       callback(arr[i], arr, i);
//    }

// }
// myForeach(arr, function(data, fullArr, index){

//     console.log(index);
// })

// myForeach(arr, function(data){
//     console.log(data - 2);
// })

// arr.map(function(data){

//     console.log(data + 2);

// })

// function myMap(arr, callback){

//     for(var i=0; i < arr.length; i++){

//         callback(arr[i]);
//     }

// }

// myMap(arr, function(data){

//     console.log(data + 2);
// })

// var result = arr.map(function(data){

//     return data * 2;
// });

// console.log(result);

// var result = arr.filter(function(data){

//     if(data > 50){
//         return data
//     }
// });

// console.log(result);

// function myFilter(arr, callBack) {

//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (callBack(arr[i])) {

//             newArr.push(arr[i]);

//         }

//     }
//     return newArr;

// }

// var result = myFilter(arr, function (data) {

//     return data > 50;

// })

// console.log(result);

//  var arr = [1,2,3,4,5,6];

// var result = arr.reduce(function(preValue, nextValue){

//     return preValue + nextValue;
// })

// console.log(result);

// function myReduce(arr, callBack){

//     var result = undefined;

//     for(var i=0; i < arr.length; i++){

//         if(result == undefined){

//             result = arr[i];
//         }else{

//             result = callBack(result, arr[i])
//         }

//     }
//     return result
// }

// var anotherReasult = myReduce(arr , function(preValue, currentValue){

//     return preValue + currentValue;
// })

// console.log(anotherReasult);

// var a=10;
// console.log(global.a);

// var num = 3;

// function add(value){

//     var result = value + 2;
//     function innerAdd(result){
//           var anotherReasult = result + 5;
//          console.log(anotherReasult);
//     }
//     innerAdd(result);    
//     return result;
// }

// var a = add(num);
// console.log(a);

// var arr = [1,2,3];

// function myMap(arr,callBack){

//     for(var i = 0; i < arr.length; i++){

//         callBack(arr[i]);
//     }

// }


//  myMap(arr, function(data){

//     console.log(data + 2)


// })

//Scop And Closer Consept

//   function createFunction(){
//       function multiplyBy2(num){
//              return num * 2;
//        }
//         return multiplyBy2;

//   }

//   var generateFunc = createFunction();
//   var result = generateFunc

//   console.log(result(3)) 

// function one(){
//     var a = 40;
//     console.log(a);

//     function inner(){

//         console.log(a)
//     }
//     inner()
// }

// one()

// function two(){

//     var b = 50;
//     console.log(b);
// }

// two()


// function first(){

//     var counter = 0;
//     function inner(){

//        return counter++;

//     }

//     return inner

// }

// const result1 = first();
// const result3 = result1

// console.log(result3())
// console.log(result3())
// console.log(result3())

// console.log(result1())
// console.log(result1())
// console.log(result1())
// console.log(result1())


//Object Creation

// var arr =
//     [1,
//         4,
//         6,
//         8,
//         'Mahidul Islam',
//         function anotherName() { console.log('function') },
//         { name: 'Mahidul' }
//     ]

// console.log(arr[5]())

//type1

// var obj = {}

// obj.name ='Mahidul Islam'
// obj.email = 'kmahidul17@gmail.com'

// console.log(obj.name)
// console.log(obj['email'])

//type2

//  var obj1 = {

//      name :'Mahidul Islam',
//      phone : '01925691172',
     

//      anotherObject : {
          
//         className : 'Javascript',
//         classShedule:'Friday',
//         name:'Khandaker',

//         getAnothername: function(){

//             console.log(obj1.anotherObject.name)
//         },
//         country :['Bangladesh', 'Finland', 'Australia']

//      },
//      city : ['Dhaka', 'Chittagona', 'Chandpur'],
//      getName: function(){

//         console.log(obj1.name)
//      }
//  };
 
//  console.log(obj1.anotherObject.country[2])
//  console.log(obj1.anotherObject.getAnothername())
//  console.log(obj1.city)
//  obj1.getName()
//  for(item in obj1){

//     console.log(item)
//  }

//  console.log(obj1.name)

//type3

// var obj4 = new Object()

// console.log(typeof obj4)

//type4

// function obj6(name, email, phone){

//     newObj4 = {}

//     newObj4.name = name;
//     newObj4.email = email;
//     newObj4.phone = phone;

//     return newObj4;
// }

// var result = obj6('Mahidul Islam', 'kmahidul17@gmail.com', '01925691172');

// console.log(result.email)