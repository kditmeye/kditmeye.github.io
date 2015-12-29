'use strict';
$('#subs form').submit(function(e) { //Click send
    e.preventDefault();
    var postdata = $('#subs form').serialize();
    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php', //Attach subscribe.php
        data: postdata,
        dataType: 'json',
        success: function(json) {
            if(json.valid == 0) {
                $('#success-message').hide();
                $('#error-message').hide();
                $('#error-message').html(json.message);
                $('#error-message').fadeIn('fast', function(){
                    $('#subs form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated shake');
                    });
                });
            }
            else {
                $('#error-message').hide();
                $('#success-message').hide();
                $('#subs form').hide();
                $('#success-message').html(json.message);
                $('#success-message').fadeIn('fast', function(){
                    $('.top-content').backstretch("resize");
                });
            }
        }
    });
	return false;
});