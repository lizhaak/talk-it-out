//pairs Liz Haakenson and Josh Gressman

var value = 42;

if(value >= 53){
  value += 42;
} else {
  value -= 13;
}

value += "11"; //"2911"

var array = [];

for(var i =0; i < value.length; i++){
  array.push(value.charAt(i));
}

console.log('array: ', array);  // array = ["2", "9", "1", "1"]

array.shift();
array.pop();

console.log("array changes", array); // array = ["9", "1"];

var reverseSum = "";

for(var i = 1; i >= 0; i--){
  reverseSum += (array[i]);
}

console.log("reverseSum: ", reverseSum);

value = parseInt(value);
reverseSum = parseInt(reverseSum);

console.log('value: ', value, 'reverseSum: ', reverseSum);

 value += reverseSum; //value now 2930
 console.log(value);

 if(value < 60){
    value = 14;
 } else if (value === 2930){
  value = 27;
 } else {
  value = 2;
 }             //value is now 27

 console.log(value);

 var count = 10;

 while(count > 0){
  value++;
  count--;
  
 }
 console.log("value: ", value); //value is now 37

 function stringDrop (val) {
  val = val.toString();
  if (val.length > 1){
    val = val.slice(1);
 // Extracts a value of a string as based on index, creates a new string 
 // can use .slice to take out sections
  }
  
    return val;
  }


value = stringDrop(value);

console.log('final value:', value);






