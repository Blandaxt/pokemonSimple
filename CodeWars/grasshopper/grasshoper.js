// Summation
// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  // Code here
  return (num *(num+1))/2;

}

// Sample Tests:

describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})
