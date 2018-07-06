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
// FUNDAMENTALS
// 
// "Friend or Foe?
// code wars~~!!
// Friend or Foe?
//
// "Make a program that filters a list of strings and returns a list with only your friends name in it.
// "If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not..."
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output."

function friend(friends){
  //your code here
 return friends.filter(function (item) { return item.length === 4 });
}

Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
