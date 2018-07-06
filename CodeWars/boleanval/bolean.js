
//
// Code Wars~~
//
// Convert boolean values to strings 'Yes' or 'No'.
//
//
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
  return bool ? "Yes": "No"
}

// Sample Tests:

Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')
Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')
