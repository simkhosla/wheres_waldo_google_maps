$(document).ready(function() {
  initialize(41.876465
,-87.621887);

});

//get random integer function :
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//initial latitude and longitude
var lat = 54.978252;
var long = -1.617780;

//what happens when you click the button
$('#go').click (function (){
  lat = document.getElementById('latValue').value;
  long = document.getElementById('longValue').value;
  console.log('new lat is '+lat);
  console.log('new long is '+long);
  initialize(lat, long);
  });

//will eventually geocode this ^


//what happens when you click RANDOM
$('#random').click (function (){
  lat = getRandomInt(-90, 90);
  long = getRandomInt(-180, 180);
  console.log('new lat is '+lat);
  console.log('new long is '+long);
  initialize(lat, long);
  });






//array containing sources of the extra markers
var extraMarkerSRCs = ['extras/1.png','extras/2.png', 'extras/3.png', 'extras/4.png', 'extras/5.png', 'extras/6.png', 'extras/7.png', 'extras/8.png', 'extras/9.png', 'extras/10.png', 'extras/11.png'];


//this is what should happen when a location is put in
function initialize(lat, long) {
          var mainLocations = [];


		//current place that changes with lat/long button up top
          var currentPlace = new google.maps.LatLng(lat,long);

          //REQUIRED arguements for Google Map: mapCanvas, mapOptions

        	var mapCanvas = document.getElementById('map-canvas');

          var mapOptions = {

            center: currentPlace,
            zoom: 11,
            mapTypeID: google.maps.MapTypeId.SATELLITE,
            minZoom: 11,
            maxZoom: 15
          }

			//function that creates map
          var map = new google.maps.Map(mapCanvas, mapOptions);


		//request for ATM nearby from PLACES api
          var request1 = {
           location: currentPlace,
           radius: '10000',
           types: ['atm']
         }

		//request for Cafe nearby from PLACES api
         var request2 =  {
         location: currentPlace,
         radius: '10000',
         types: ['cafe']
        };

		//request for Stores nearby from PLACES api
          var request3 = {
             location: currentPlace,
             radius: '10000',
             types: ['store']
          }

		//request for Train Station nearby
        var request4 =  {
        location: currentPlace,
        radius: '10000',
        types: ['train_station']
        };

		//request for Bus Stations nearby
        var request5 = {
          location: currentPlace,
          radius: '10000',
          types: ['bus_station']
        }


		//request for schools nearby (used for main characters)
        var requestMain = {
          location: currentPlace,
          radius: '7000',
          types: ['school']
        }


		//pulling all of the requests with the callbacks
		//the request is what you're asking for, the callback is what happens when the results come back

		//initializing service
         service = new google.maps.places.PlacesService(map);

        //all the location pulls for the extra characters
         service.nearbySearch(request1, callback);
         service.nearbySearch(request2, callback);
         service.nearbySearch(request3, callback);
         service.nearbySearch(request4, callback);
         service.nearbySearch(request5, callback);


		//all the school pulls for the main characters
         service.nearbySearch(requestMain, callbackWaldo);
         service.nearbySearch(requestMain, callbackWenda);
         service.nearbySearch(requestMain, callbackWhitebeard);
         service.nearbySearch(requestMain, callbackOdlaw);
         service.nearbySearch(requestMain, callbackWoof);


		//function that adds markers for the extra people

         function addExtraMarker(place) {
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: extraMarkerSRCs[getRandomInt(0,10)]
          })};

		//callback function for Extras
         function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              addExtraMarker(place);
            }
          }}


		//callback and marker add for WALDO

          function callbackWaldo(results, status) {
           if (status == google.maps.places.PlacesServiceStatus.OK) {
               var place = results[2];
               addWaldoMarker(place);
           }else {
                 console.log("connection failed WALDO");
               }};

        function addWaldoMarker(place) {
            var waldo = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              icon: 'waldo.png'
            })
            console.log('waldo has been added');
          };


		//callback and marker add for WENDA

           function callbackWenda(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var place = results[5];
                addWendaMarker(place);
            }else {
                 console.log("connection failed WENDA");
               }};

          function addWendaMarker(place) {
           var wenda = new google.maps.Marker({
             map: map,
             position: place.geometry.location,
             icon: 'wenda.png'
           })
           console.log('wenda has been added');
         };


		// callback and add marker for WHITEBEARD

            function callbackWhitebeard(results, status) {
             if (status == google.maps.places.PlacesServiceStatus.OK) {
                 var place = results[9];
                 addWhitebeardMarker(place);
             }else {
                 console.log("connection failed for WHITEBEARD");
               }};

        	function addWhitebeardMarker(place) {
          	var whitebeard = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: 'whitebeard.png'
          	})
          	console.log('whitebeard has been added');
        	};


		//callback and add marker for ODLAW

             function callbackOdlaw(results, status) {
              if (status == google.maps.places.PlacesServiceStatus.OK) {
                  var place = results[13];
                  addOdlawMarker(place);
              }else {
                 console.log("connection failed for ODLAW");
               }};

        	function addOdlawMarker(place) {
         	var odlaw = new google.maps.Marker({
          	 map: map,
          	 position: place.geometry.location,
           	icon: 'odlaw.png'
        	 })
        	 console.log('odlaw has been added');
  		     };


       		//callback and add marker for WOOF

              function callbackWoof(results, status) {
               if (status == google.maps.places.PlacesServiceStatus.OK) {
                   var place = results[3];
                   addWoofMarker(place);
                   console.log('callbackcomplete');

               } else {
                 console.log("connection failed for WOOF");
               }};


       			function addWoofMarker(place) {
       			 var woof = new google.maps.Marker({
        		  map: map,
        		  position: place.geometry.location,
        		  icon: 'woof.png'
       			 })
        		console.log('Woof has been added');
     			 };

};
