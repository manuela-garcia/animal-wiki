$(document).ready(function() {
  var animal = prompt("What animal are you itching to learn about today?");

  if (animal === 'puffins') {
    $('#puffins').show();
  } else if (animal === 'quetzals') {
    $('#quetzals').show();
  } else {
    $('#sloths').show();
  }

});
