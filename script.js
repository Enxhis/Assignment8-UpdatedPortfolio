$(document).ready(function () {
    // giphy API key
    //apiKey = "Ydz06FdZ9yfctTVaqZgBHZtRQ41gnPYI";
    // TODOO:// Giphy Query Url 
    
    //list of comments from grader
    comments = ["Your UI is extremely polished and clean",
        "Most of all, I like that the user experience is intuitive and easy to navigate—great effort on your part",
        "Brilliant color-coding by time",
        "Impressive data persisting with localStorage",
        "Keep up the awesome work, and happy coding!"];

    var commentP = $("<p>").addClass('comment-text');
    var i = 0;
    var commentsTimer = function () {
        // set index 0 so that list starts from beginning
        if (i == comments.length - 1) {
            i = 0;
        }
        // comment text fades out
        $(commentP).fadeOut(1000, function () {
            $(this).text(comments[i]);
        });
        // comment text fades in
        $(commentP).fadeIn();
        // increment i
        i++;
    }
    // add comments on page
    $(commentP).text(comments[i++]);
    $('.comments').append(commentP);

    // set interval and make appear each comment for 6 sec
    setInterval(commentsTimer, 6000);


});