// Write your code below
//function isPalindrome (str) {
    //var reversed = '';
    //for(var char of str) {
      //  reversed = char + reversed;
    //}
  //  return reversed === str;
//}
//console.log(isPalindrome('fletch'));

//const isPalindrome = str => {
   // for(let i = 0; i < str.length; i++){
       // let finalIndex = str.length - 1 - i

    //    if(str[i] != str[finalIndex]){
  //          return false
//        }
    //} 
  //  return true
//}
//console.log(isPalindrome("racecar"))
//console.log(isPalindrome("apple"))

//const isPalindromeMethods = str => {
  //  letreverseStr = str.split('').reverse().join
//    return str === reverseStr
//}
//console.log(isPalindromeMethods("racecar"))
//console.log(isPalindromeMethods("apple"))


//const isPalindromeOneLine = str => str === str.split('').reverse().join('')


let names = ['jOe Mo', 'bOb tOp', "bIll niLl", 'aNth batH', 'this is a sentence']
let nums = [5,2,4,6,4,5,6,7,4,5,6]
//const copyAndChangeArr = (arr, callBack) =>{
    //let newArr = []
  //  for(let i = 0; i < arr.length; i++){
     //   let newValue = callBack(arr[i])
   //     newArr.push(newValue)
 //   }
  //  return newArr
//}

const strToCamelCase = str => {
    let splitStr = str.split(' ')
   for(let i = 0; i < splitStr.length; i++){
       splitStr[i] = splitStr[i].toLowerCase()
        if(i !== 0){
            splitStr[i]= splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
        }    
    }
    return splitStr.join('') 
}

//console.log(copyAndChangeArr(names, strToCamelCase))

const logNames = function(element, index){
console.log(`${element} is at the index of ${index}`)
}
names.forEach(logNames)

letfilteredArray = nums.filter(num =>{
  return num % 2 === 0
})

let sum = nums.reduce((acc, curr)=> {
  acc = acc * curr
})
//console.log(sum)

//console.log(filteredArray)
let mappedArray = names.map()
console.log(mappedArray)



class Users {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  greeting(){
    console.log(`hello, my name is ${this.firstName}`)
  }
}
let nameObj = []


names.forEach((name) =>{
  let nameArr = name.split(' ')
  //console.log(namesArr)
  let newUser = new Users(nameArr[0],namesArr[1])
  namesObj.push(newUser)
}
)
console.log(namesObj)

let firstNameArr = nameObj.map(user =>{
  return user.firstName
})
let greet = (user)=>{
  user.greeting()
}
nameObj.forEach(greet)
//console.log(firstNameArr)


let array = [2,4,5,7,8]

array.forEach((element, index, array) => {
    console.log(`The element at index ${} in the array is ${element}`)
})

let upscaledArr = array.map((element, index, array)=> {
  return element * index
})

console.log(upscaledArr)
let func = (element,index) => element % === 0
let filteredArr = upscaledArr.filter((element, index)=> element % index === 0)

console.log(filteredArr)

let reducedArr = filteredArr.reduce((acc, curr) => {}, 0{
  console.log('The added value is ${acc}')
  console.log(`The current value in the loop is ${curr}`)
  return acc + curr
},1)
console.log(reducedArr)