var yes = 5;//creates 2 global variables
var no = 2;
$(document).on('ready',function(){//checks that document has finished loading
    $('input#yes').on('click', function(event){//if yes radio button is selected
        yes= yes+1;//adds one to the yes variable
        var input = $(this).parent();//finds parent element of yes button
        input.hide();//hides element
        input.parent().append('<p class="result">Yes:'+yes+'</p>');//finds parent element of input and adds the results
        input.parent().append('<p class="result">No:'+no+'</p>');
    });
    $('input#no').on('click', function(event){//if no radio button is selected
        no= no+1;//adds one to the yes variable
        var input = $(this).parent();//finds parent element of yes button
        input.hide();//hides element
        input.parent().append('<p class="result">Yes:'+yes+'</p>');//finds parent element of input and adds the results
        input.parent().append('<p class="result">No:'+no+'</p>');
    });
});