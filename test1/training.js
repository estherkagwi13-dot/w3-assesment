/**A training institution wants a simple JavaScript program that calculates students' grades based on their examination marks.
Your task is to develop a Student Grading System that accepts student information, calculates their average marks and determines their grades.
Requirements
Use prompt() to request:
•	Student's full name.
•	Course name.
•	Marks for three subjects.
•	Calculate the average marks for the three subjects.
•	Determine the Grades A to E where 0-49 is E and 80-100 is A
•	Check for invalid marks above 100 and below 
•	Display result using a console.log() or an Alert()
•	Should not accept empty names, marks or course
•	Use at least 2 functions to Calculate the grade and another to calculate average
*/

let name=prompt("enter student name: ")
let course= prompt("Enter the course:")
let subject1=prompt("Enter marks for subject 1")
let subject2=prompt("Enter marks for subject 2")
let subject3=prompt("Enter marks for subject 3")
let total= subject1+subject2+subject3
let average= total/3

console.log(name)
console.log(course)
console.log(average)
console.log(total)
let grade;
if(grade<=49){
    console.log("E")
}
else{console.log("A")}
//validation- Should not accept empty names, marks or course
if (subject1Input<0 || subject1Input >100){
    console.log("error")
}