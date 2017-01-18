$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('#input').val());
    var result = leapYear(userInput);
    $('#result').text(result);
  });
});

function leapYear(year){
  if ((year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
