var hash = '';
for (var i = 0; i < 7; i++) {
  console.log(i);
  console.log(hash = hash + '#');
  console.log("right");
}

var result = 1;
var counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

var number = ' ';
while (number <= 12) {
  console.log(number);
  number = number + '#';
}

var orange = 0;
for (var slice = 0; slice < 5; slice++) {
	console.log(orange += 'ten');
}

var fruitNames = [
	"apple",
	"peach",
	"banana",
	"watermellon",
	"pineapple",
	"kiwi",
	"pear",
	"mango",
	"raspberry",
	"blueberry"
	];

var fruit = console.log(fruitNames)

console.log(fruitNames);

console.log(fruit);

document.write(fruitNames + "<br>");
document.write(fruitNames.length <3 + "<br>")
 