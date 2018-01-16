$(document).ready(function() {
  var animal = prompt("Would you like to learn about Puffins, Quetzals or Sloths?");

  if (animal === 'puffins') {
    $('#puffins').show();
  } else if (animal === 'quetzals') {
    $('#quetzals').show();
  } else {
    $('#sloths').show();
  }


});
