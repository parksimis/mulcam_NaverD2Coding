/*
slideShow.js
 */

$(function () {
    var movedIndex = 0;

    function moveSlide(index){
        movedIndex = index;

        var moveLeft = -(movedIndex * 1900);
        $('#slidePanel').animate({'left' : moveLeft}, 'slow');
    }

    $('#prevButton').on('click', function (){
        if(movedIndex != 0)
            movedIndex = movedIndex - 1;

        moveSlide(movedIndex);
    });

    $('#nextButton').on('click', function (){
        if(movedIndex != 3)
            movedIndex = movedIndex + 1;
        moveSlide(movedIndex);
    });

});