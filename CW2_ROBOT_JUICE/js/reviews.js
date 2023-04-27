$(document).on('ready',function(){//checks that document has finished loading
    $('button').on('click', function(event){//runs the function below when the button is clicked
        var button = $(this);//sets the variable button to the element clicked
        $(this).hide();//hides button
        var section = button.parent();//finds parent element of button
        load_reviews(section);//calls load reviews function
        var element = document.getElementById("sub");//finds element with id sub
        element.classList.add("move");//adds move class to element
        var element = document.getElementById("footer");//finds element with id footer
        element.classList.add("move");//adds move class to element
    });
});
function load_reviews(section){//creates a new function with one parameter
    var promise = $.ajax('https://cis1110apicw.computing.edgehill.ac.uk/reviews');//calls api
    promise.done(function(data){//checks that api has been loaded
        for(var idx = 0; idx<data.length; idx++){//creates a for loop
            var number = "review"+idx;
            section.append('<article class="opinion" id="'+number+'">');//adds the html in brackets to the website
        }
        for(var idx = 0; idx<data.length; idx++){//creates a for loop
            var review = section.find('article#review'+idx);//searches for each new review element
            review.append('<img src="images/reviewicon1.jpg" alt="review"/>');//adds html for an image
            if (data[idx].rating == 1){//adds the star rating depending on review number
                review.append('<h3><span>*</span>****</h3>');
            } else if (data[idx].rating == 2){
                review.append('<h3><span>**</span>***</h3>');
            } else if (data[idx].rating == 3){
                review.append('<h3><span>***</span>**</h3>');
            } else if (data[idx].rating == 4){
                review.append('<h3><span>****</span>*</h3>');
            } else if (data[idx].rating == 5){
                review.append('<h3><span>*****</span></h3>');
            } else{
                review.append('<h3>*****</h3>');
            }
            review.append('<p class="nickname">'+ data[idx].nickname +'</p>')//adds nickname
            review.append('<p class="long">' + data[idx].review + '</p>')//adds review
        }
    });
}
