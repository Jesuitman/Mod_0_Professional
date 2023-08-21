var ticket_prices =[1,15,20,32]
ticket_prices.pop()
// this command will remove the first number in the array
console.log (ticket_prices)
var presidents =["Washington","Lincoln","Jefferson","Adams"]
presidents.unshift("Obama")
// this command will add Obama to the beginning of the array
console.log (presidents)
var presidents_paid=[washington=true,lincoln=true,Jefferson=false,Adams=true]
presidents_paid.shift()
// this command will remove the first element from the array
console.log (presidents_paid)
// if you want to determine the index position within the array you can count from zero. so position 
// zero in all three of my arrays would be 1, obama, and true. position 3 is the 4th element in the array
// so that would be 32, Jefferson, and true
console.log (ticket_prices[1]) 
// should yield 15