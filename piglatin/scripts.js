function pigLatin(string){
  var splitArr = string.toLowerCase().split('');
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var finalResult;
    if (vowel.includes(splitArr[0])){
    finalResult = (splitArr.join('')+"ay");
  }
    else if(!vowel.includes(splitArr[0])){
      var firstLetters = (string.match(/^[^aeiou]+/gi)).toString();
      var total = string+firstLetters;
      finalResult = (total.slice(firstLetters.length)+'ay');
    } // end of else if statement



  $('#result').text(finalResult);
  // return finalResult;
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
