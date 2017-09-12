

$(document).ready(function(){

                         
$('form').submit(function(){

var locate = $('input[name="location"]').val() ;

$.get("http://api.openweathermap.org/data/2.5/weather?q="+locate   +"&APPID=e44eac2d966aec73c6270dbdf14e67a0&units=imperial", function(data) {
	    
$('aside').html("<h1>"+locate +"</h1><h3>Temperature: "+data.main.temp+"</h3>"    );


		}, "json");




	return false;
                   
})



});


