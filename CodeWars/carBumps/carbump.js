// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
//
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
  var arr = x.split("");
  var bumps = 0;
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i]==="n" ) {
      bumps+=1
    }
  }
  if ( bumps > 15 ) {
    return "Car Dead"
  } else {
   return "Woohoo!"
  }
}

// Sample Tests:

Test.describe("Example tests",_=>{
Test.assertEquals(bump("n"), "Woohoo!");
Test.assertEquals(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
Test.assertEquals(bump("______n___n_"), "Woohoo!");
});
