
 /**
  * -1.	Use a for loop to print numbers from 1 to 20. 
2.	Print only even numbers between 1 and 20. 
3.	Print only odd numbers between 1 and 20. 
4.	Calculate and display the sum of numbers from 1 to 20. 
5.	Print numbers from 20 down to 1. 

  */
 let i;
 for (let i =1; i<=20; i++){
    console.log(i)
 }
let y;
console.log("even Number")
for (let y=2; y<=20; y+=2){
    console.log(y)
}
console.log("odd number")
for (let i=1; i<=20; i+=2){
    console.log(i)
}
//backwards
console.log("downwards")
for (let i=20; i>=1; i--){
    console.log(i)
}
//sum
console.log("Sum of number")
let sum= 0
for(let i = 1; i<=20; i++){
    sum += i
}
console.log(sum)