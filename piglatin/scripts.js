function pigLatin(string){
  var splitArr = string.toLowerCase().split('');
  var vowel = ['a', 'e', 'i', 'o', 'u'];

  for(i=0;i<string.length;i++){
    // console.log('in for loop');
    if (vowel.includes(splitArr[0])){
    }
  }
  console.log(splitArr.join('')+"ay");

}

$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var str = $('#userInput').val();

    pigLatin(str);

  });
});
