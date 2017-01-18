function pigLatin(string){
  var splitArr = string.toLowerCase().split('');
  var vowel = ['a', 'e', 'i', 'o', 'u'];

    if (vowel.includes(splitArr[0])){
    console.log(splitArr.join('')+"ay");
  }
    else if(!vowel.includes(splitArr[0])){
      console.log('starts with consonant');
        var consonant = splitArr[0];
        var newStr = (splitArr.join('')+consonant + 'ay');
        console.log(newStr.slice(1,newStr.length));

    } // end of else if statement
}

$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var str = $('#userInput').val();

    if (!isNaN(str)){
      console.log('is a number')
    } else {
    pigLatin(str);
    }
  });
});
