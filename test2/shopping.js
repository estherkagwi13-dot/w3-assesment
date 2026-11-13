let list = ["Bread", "Milk", "Sugar", "Rice"]
console.log(`Shopping list ${list}`)
console.log(`First Item: ${list[0]}`)
console.log([list.length-1])
console.log(`last item: ${list[3]}`)
list.push("cooking oil")
console.log(list)
list.shift("bread")
console.log(list)
list[1]="Tea leaves"
console.log(list)
console.log(`Total Items: ${list.length}`)