// $.ajax({
//   type: 'GET',
//   url: '/my/url',
//   success: function(resp) {
//
//   },
//   error: function() {
//
//   }
// });

// 7 kyu
// Predict your age!
// Code Wars!!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
// In honor of my grandfathers memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
// code here
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  let sum = 0;
  for(i=0; i<arr.length; i++) {
  sum += arr[i] * arr[i]
  }
  let num = Math.floor(Math.sqrt(sum)/2);
  return num;
//   return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
  }
//
// Sample Tests:
// Test.assertEquals(predictAge(65,60,75,55,60,63,64,45), 86);
