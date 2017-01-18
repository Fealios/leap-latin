console.log('hello world');
var vowel = ['a','e','i','o','u'];
var splitArr = [];
var output = [];
//------------------------------------
function hunt(str){
  console.log("you're in the function now");
  splitArr = str.toLowerCase().split('');
  for (i=0;i<splitArr.length;i++){
    if (vowel.includes(splitArr[i])){
      output.push(splitArr[i]);
    }
  }
  console.log(output.length);

}

hunt('HHELLO my NamE is PETEr');
