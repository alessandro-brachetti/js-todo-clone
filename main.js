$(document).ready(function(){
  //Creare una Todo-list in cui si possano aggiungere nuovi todo, editarli e rimuoverli
  $('#add').click(function(){ //Click su aggiungi e salvo value dell'input
    var todo = $('#todo').val();
    $('#todo').val('');

    console.log(todo);

  var template = $('.template li').clone();//Clono li di template
  template.children('span.todoText').text(todo);

  template.children('span.edit').click(function() {//Click su edit
    var todoText = $(this).siblings('span.todoText').text();

    $(this).siblings('span.todoText').hide();
    $(this).siblings('input.temp').val(todoText).show();

    console.log(todoText);

  });

  template.children('span.delete').click(function() {//Click su delete

    console.log($(this).parent());
    $(this).parent().remove();

  });

  template.children('input.temp').keyup(function(e) {//Premi tasto enter
    if (e.which == 13) {
      var todoText = $(this).val();
      $(this).hide();
      $(this).siblings('span.todoText').text(todoText).show();
    }
  });

  $('#list').append(template);//Appendi sulla lista

  });

});
