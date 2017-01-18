function pigLatin(string){
  // var splitArr = [];
  // var vowel = ['a', 'e', 'i', 'o', 'u'];
  // var withAy = "";
  // splitArr = string.toLowerCase().split('');
  // console.log(string);
  // console.log(splitArr);
  // for (i=0;i<string.length;i++){
  //   if (vowel.includes(string[i])){
  //     withAy = string.push('ay');
  //     console.log(withAy);
  //     // return withAy;
  //   }
  // }
  // console.log(withAy);
  return (string + 'ay');
}

$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var str = $('#userInput').val();
    console.log(str);
    console.log(pigLatin(str));

    // $('#output').text(result);

  });
});



// function pigLatin(string) {
//   if(!isNaN(string)){
//     console.log("it's a number"); //end of if statement
//   } else {
//
//
//     // console.log(splitStr.join(''));
//     // console.log("it's not a number");
//   } // end of else statment
// }; // end of pig latin function
