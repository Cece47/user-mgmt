$ (function () {
   'use strict';

  $('.user-input').on('submit', function (e) {
    e.preventDefault();

    var userEntry = {};

    $('.user-field').each(function() {
      userEntry[this.name] = this.value;
    });

    // console.log (userEntry);

    var li = $('<li class="user-field"><span class="user-label"></span><button class="user-remove">X</button></li>');
    li.find('.user-label').text(userEntry['first-name'] + (" ") + userEntry['last-name'] + (" ") + userEntry['email']);
    // console.log (txt);
    // $('list').append($('<li class = "user-field"></li>').text(txt.val()));
    $('.user-list').append(li);

    //txt.val('');

  });
});
     //$(this).find('.todo-txt');

// var users = [];
//
// $ (function (){
//   'use strict';
//
//
//
//   $ ('button').click(function(e) {
//   e.preventDefault();
//
//   addUser();
//   redrawUsers();
// });
//
// function addUser() {
//   var txt = document.querySelector('.user-input');
//
//   if (txt.value) {
//     users.push(txt.value);
//     users.sort();
//     txt.value = '';
//   }
// }
//
// function redrawUsers() {
//   var list = document.querySelector('.user-list');
//
//   list.innerHTML = users.map(function (user, i) {
//     return '<li class="user-item">' +
//       escape(user) +
//       '<button type="button" class="remove" data-index="' + i + '">X</button>'+
//       '</li>';
//   }).join('');
// }
//
// });

// var toValidate = $ ('.userFirstName, .userLastName, .userEmail');
//
// toValidate.keyup(function(e) {
//   if ($(e.target).val().length > 0){
//     $('.add').removeAttr('disabled');
//   } else{
//
//   }
// });

// var txt = document.querySelector('.user-input');

// var textEntered = true;
// $ ("input[type=text]").each(function () {
//     if (textEntered && $(this).val().length === 0) {
//     $(this).css("background-color", "green");
//   }
//   else{
//     $(this).css("background-color", "blue");
//   }
// });
//
// $(document).ready(function() {
//
//   var arrList = [];
//
//   var firstName = ".firstname";
//   var lastName = ".lastname";
//   var email = '.email';
//
//   $(".userfields").submit(function (e){
//
//   e.preventDefault();
//
//   $(".userlist").append($(".firstname, .lastname, "))
//
// }
//
// }
//
//
//
// )

// var txt = $(this).find('.todo-txt');
// var li = $('<li class="todo-item"><span class="todo-label"></span><button class="todo-remove">X</button></li>');
// li.find('.todo-label').text(txt.val());
// $('.todo-list').append(li);
