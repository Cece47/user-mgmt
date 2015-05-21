$ (function (){
  'use strict';



  $ ('button').click(function(e) {
  e.preventDefault();

  addUser();
  redrawUsers();
});

function addUser() {
  var txt = document.querySelector('.user-input');


});

// var toValidate = $ ('.userFirstName, .userLastName, .userEmail');
//
// toValidate.keyup(function() {
//   if ($(this).val().length > 0){
//     $('.add').removeAttr('disabled');
//   } else{
//
//   }
// });



// var textEntered = true;
// $ ("input[type=text]").each(function () {
//     if (textEntered && $(this).val().length === 0) {
//     $(this).css("background-color", "green");
//   }
//   else{
//     $(this).css("background-color", "blue");
//   }
// });
