$(document).ready(function () {
	// initialize clock
    showTime();

    // source: http://simpleweatherjs.com
    $.simpleWeather({
        zipcode: '',
        // this is the id for sydney, lookup your city at http://woeid.rosselliot.co.nz/lookup/
        woeid: '55864169',
        location: '',
        unit: 'f',
        success: function (weather) {
        	// build html
            html = '<h1>Today</h1>';
            html += '<ul><li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.highAlt + '&deg;C</li></ul>';
            html += '<h1 id="tomorrow">Tomorrow</h1>';
            html += '<ul><li class="currently">' + weather.tomorrow.forecast + '</li>';
            html += '<li>' + weather.tomorrow.highAlt + '&deg;C</li></ul>';

            $("#weather").html(html);
            $("#startpage").fadeIn(400);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
});

// set and update time
function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    $("#clock").text(h + ":" + m);
    t = setTimeout('showTime()', 1000);
}
// add a leading 0 to our digits
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

$(window).resize(function(){

    $('#startpage').css({
        position:'absolute',
        left: ($(window).width() - $('#startpage').outerWidth())/2,
        top: ($(window).height() - $('#startpage').outerHeight())/2
    });

});
$(window).resize();