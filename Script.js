$(document).ready(function(){
    $('#getWeather').click(function(){
        var city = $("#city").val();
        var key = '991cd81d4c470c1c1775add01f47ef41'
        $.ajax({
            type: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            data: {q: city, appid: key, units: 'imperial'},
            success: function(data){
                var write = '';
                $.each(data.weather, function(index, val){
                    write += '<p><b>' + data.name +'</b></p>'
                        + '<img src="https://openweathermap.org/img/w/' + data.weather[index].icon + '.png"><br>'
                        + 'Current Temperature: ' + data.main.temp + ' F <br>' +
                        ' Feels like: ' + data.main.feels_like + ' F <br>' + ' Condition: ' + val.main + '<br>'
                });
                $("#showWeather").html(write);
            }
        });
    });
    $('#getWeatherZIP').click(function(){
        var key = '991cd81d4c470c1c1775add01f47ef41'
        var cityZIP = $("#cityZIP").val();
        $.ajax({
            type: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            data: {zip: cityZIP, appid: key, units: 'imperial'},
            success: function(data){
                var write = '';
                $.each(data.weather, function(index, val){
                    write += '<p><b>' + data.name +'</b></p>'
                        + '<img src="https://openweathermap.org/img/w/' + data.weather[index].icon + '.png"><br>'
                        + 'Current Temperature: ' + data.main.temp + ' F <br>' +
                        ' Feels like: ' + data.main.feels_like + ' F <br>' + ' Condition: ' + val.main + '<br>'
                });
                $("#showWeatherZIP").html(write);
            }
        });
    });
    $("#photoSD").click(function(){
        $.ajax({
            type: 'GET',
            url: "https://api.nasa.gov/planetary/apod?api_key=YMFIVaA6nLDht6F63xIoV4ecH3e2WSIBadzaRz73",
            success: function(data){
                //var write = '<img src>' + data.photos[0] + '</p'
                document.getElementById("showPhoto").innerHTML="";
                document.getElementById("showPhoto").innerHTML="<img src=" + data.url +">";
            }
        });
    });
    $("#photoHD").click(function(){
        $.ajax({
            type: 'GET',
            url: "https://api.nasa.gov/planetary/apod?api_key=YMFIVaA6nLDht6F63xIoV4ecH3e2WSIBadzaRz73",
            success: function(data){
                //var write = '<img src>' + data.photos[0] + '</p'
                document.getElementById("showPhoto").innerHTML="";
                document.getElementById("showPhoto").innerHTML="<img src=" + data.hdurl +">";
            }
        });
    });

    
});
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});