
$(document).ready(function($) {

// Set the Cosm API key (https://cosm.com/users/YOUR_USERNAME/keys)
cosm.setKey( "yWYxyi3HpdqFCBtKHueTvOGoGROSAKxGRFAyQWk5d3JNdz0g" );

var timer1 = false;
var timer2 = false;
var timer3 = false;
var timer4 = false;
var timer5 = false;



var feedID1    = 104792,          // Feed ID (the last number on the URL on the feed page on Cosm)
datastreamID1  = "group_01";       // Datastream ID
selector1      = "#element1";   // Your element on the page - takes any valid jQuery selector

cosm.datastream.get (feedID1, datastreamID1, function ( datastream ) {
	$(selector1).html( datastream["current_value"] );
	timer1 = setBarTimer('bar1', datastream["current_value"], timer1);

	cosm.datastream.subscribe( feedID1, datastreamID1, function ( event , datastream_updated ) {
		$(selector1).html( datastream_updated["current_value"] );
		timer1 = setBarTimer('bar1', datastream_updated["current_value"], timer1);
	});

});


var feedID2    = 104792,          // Feed ID (the last number on the URL on the feed page on Cosm)
datastreamID2  = "group2";       // Datastream ID
selector2      = "#element2";   // Your element on the page - takes any valid jQuery selector

cosm.datastream.get (feedID2, datastreamID2, function ( datastream ) {
	$(selector2).html( datastream["current_value"] );
	timer2 = setBarTimer('bar2', datastream["current_value"], timer2);

	cosm.datastream.subscribe( feedID2, datastreamID2, function ( event , datastream_updated ) {
		$(selector2).html( datastream_updated["current_value"] );
		timer2 = setBarTimer('bar2', datastream_updated["current_value"], timer2);
	});

});


var feedID3    = 104792,          // Feed ID (the last number on the URL on the feed page on Cosm)
datastreamID3  = "groupAwesome";       // Datastream ID
selector3      = "#element3";   // Your element on the page - takes any valid jQuery selector

cosm.datastream.get (feedID3, datastreamID3, function ( datastream ) {
	$(selector3).html( datastream["current_value"] );
	timer3 = setBarTimer('bar3', datastream["current_value"], timer3);

	cosm.datastream.subscribe( feedID3, datastreamID3, function ( event , datastream_updated ) {
		$(selector3).html( datastream_updated["current_value"] );
		timer3 = setBarTimer('bar3', datastream_updated["current_value"], timer3);
	});

});


var feedID4    = 104792,          // Feed ID (the last number on the URL on the feed page on Cosm)
datastreamID4  = "group_four";       // Datastream ID
selector4      = "#element4";   // Your element on the page - takes any valid jQuery selector

cosm.datastream.get (feedID4, datastreamID4, function ( datastream ) {
	$(selector4).html( datastream["current_value"] );
	timer4 = setBarTimer('bar4', datastream["current_value"], timer4);

	cosm.datastream.subscribe( feedID4, datastreamID4, function ( event , datastream_updated ) {
		$(selector4).html( datastream_updated["current_value"] );
		timer4 = setBarTimer('bar4', datastream_updated["current_value"], timer4);
	});

});


var feedID5    = 104792,          // Feed ID (the last number on the URL on the feed page on Cosm)
datastreamID5  = "group5";       // Datastream ID
selector5      = "#element5";   // Your element on the page - takes any valid jQuery selector

cosm.datastream.get (feedID5, datastreamID5, function ( datastream ) {
	$(selector5).html( datastream["current_value"] );
	timer5 = setBarTimer('bar5', datastream["current_value"], timer5);

	cosm.datastream.subscribe( feedID5, datastreamID5, function ( event , datastream_updated ) {
		$(selector5).html( datastream_updated["current_value"] );
		timer5 = setBarTimer('bar5', datastream_updated["current_value"], timer5);
	});

});

});


function bounceBar(bar) {
	var bar = $('#'+bar);

	bar.css('bottom', '-30px');
	setTimeout(function(){bar.css('bottom', '-50px');}, 100);
}

function setBarTimer(bar, time, timer) {
	// console.log(bar); console.log(time);
	clearInterval(timer);
	var timerRate = 60 / time * 1000;
	var newTimer = setInterval(function(){bounceBar(bar)}, timerRate);
	return newTimer;
}