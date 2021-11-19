$(document).on('click', '.jeremy .period p', function(){
    $(this).addClass('active').siblings().removeClass('active');
});


$(document).ready(function(){
    $("#daily").click(function(){
        $("#work-data").text("5hrs");
        $("#work-prev-data").text("Last Day - 7hrs");
        $("#play-data").text("1hrs");
        $("#play-prev-data").text("Last Day - 2hrs");
        $("#study-data").text("0hrs");
        $("#study-prev-data").text("Last Day - 1hrs");
        $("#exercise-data").text("1hrs");
        $("#exercise-prev-data").text("Last Day - 1hrs");
        $("#social-data").text("1hrs");
        $("#social-prev-data").text("Last Day - 1hrs");
        $("#self-data").text("0hrs");
        $("#self-prev-data").text("Last Day - 1hrs");
    });

    $("#weekly").click(function(){
        $("#work-data").text("32hrs");
        $("#work-prev-data").text("Last Week - 36hrs");
        $("#play-data").text("10hrs");
        $("#play-prev-data").text("Last Week - 8hrs");
        $("#study-data").text("4hrs");
        $("#study-prev-data").text("Last Week - 7hrs");
        $("#exercise-data").text("4hrs");
        $("#exercise-prev-data").text("Last Week - 5hrs");
        $("#social-data").text("5hrs");
        $("#social-prev-data").text("Last Week - 10hrs");
        $("#self-data").text("2hrs");
        $("#self-prev-data").text("Last Week - 2hrs");
    });

    $("#monthly").click(function(){
        $("#work-data").text("103hrs");
        $("#work-prev-data").text("Last Month - 128hrs");
        $("#play-data").text("23hrs");
        $("#play-prev-data").text("Last Month - 29hrs");
        $("#study-data").text("13hrs");
        $("#study-prev-data").text("Last Month - 19hrs");
        $("#exercise-data").text("11hrs");
        $("#exercise-prev-data").text("Last Month - 18hrs");
        $("#social-data").text("21hrs");
        $("#social-prev-data").text("Last Month - 23hrs");
        $("#self-data").text("7hrs");
        $("#self-prev-data").text("Last Month - 11hrs");
    });
});