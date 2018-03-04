$(document).ready(function(){
    $('#nav-toggle').on('click', function(e){
        e.preventDefault();
        if($('#navigation').hasClass('navigation-holder--mobile-open')) {
            $('#navigation').fadeOut();
//            $('#navigation').removeClass('navigation-holder--mobile-open');
            setTimeout(function() {
                $('#navigation').removeClass('navigation-holder--mobile-open');
            } , 1000);
            $(this).text('OPEN NAV');
        } else {
            $('#navigation').hide();
            $('#navigation').addClass('navigation-holder--mobile-open');
            $('#navigation').fadeIn();
            $(this).text('CLOSE NAV');
        }
    });
});