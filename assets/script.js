
//var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//L.tileLayer('https://tiles.traveltimeplatform.com/styles/positron/{z}/{x}/{y}.png?key=55d50174b53896c62eb9b9afc66bf092', {
//attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | Created with <a href="http://traveltimeplatform.com" target="_blank">TravelTime API</a>',
//maxZoom: 18,
//}).addTo(mymap);

// Initialize and add the map






var config = {
    apiKey: "AIzaSyC5Ez_S13Nc4q1qOLSYsl4ePkpBX5ke3kk",
    authDomain: "resturantapp-bdb66.firebaseapp.com",
    databaseURL: "https://resturantapp-bdb66.firebaseio.com",
    projectId: "resturantapp-bdb66",
    storageBucket: "resturantapp-bdb66.appspot.com",
    messagingSenderId: "925130971463"
  };


  firebase.initializeApp(config);
  var database = firebase.database();










var zomatoURL = "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city";

var apiKey = "b34f1183cf95d77b0c0d2966e2341be7";

var resturantNames = [];


function displayMap(){
  document.getElementById("resturants").style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});




$("#miami").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h3>");
      $("#infoResponse0-3").html("<a href='https://www.versaillesrestaurant.com/menu'><img class='imageOne' class='restaurantImages' src=https://images1.miaminewtimes.com/imager/u/original/8509948/readers_cuban_versailles_credit_phillip_pessar_via_flickr_cr.jpg></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h3>");
      $("#infoResponse1-3").html("<a href='https://www.versaillesrestaurant.com/menu'><img class='imageOne' class='restaurantImages' src=project1-images/big_pink_interior.0.jpg></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href ='http://www.ceviche105.com/site/#menu'><img class='imageOne' class='restaurantImages' src=project1-images/dt-int.jpg></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href ='http://www.joesstonecrab.com/menumedia'><img class='imageOne' class='restaurantImages' src=project1-images/1-DSC_0050.jpg></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});


$("#NYC").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h1>");
      $("#infoResponse0-3").html("<a href='https://www.katzsdelicatessen.com/menu_and_local-delivery'><img class='imageOne' class='restaurantImages' src=project1-images/katz.png></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h1>");
      $("#infoResponse1-3").html("<a href ='https://www.firstpizza.com/lombardis-nyc-2'><img class='imageOne' class='restaurantImages' src=project1-images/grimaldis-nyc.PNG></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href='https://www.veselka.com/menus/'><img class='imageOne' class='restaurantImages' src=project1-images/Lombardis.PNG></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href='https://menupages.com/grimaldis/656-6th-ave-new-york'><img class='imageOne' class='restaurantImages' src=project1-images/veselka-nyc.PNG></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});

$("#SF").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h3>");
      $("#infoResponse0-3").html("<a href='http://places.singleplatform.com/the-original-ghirardelli-soda-fountain-and-chocolate-shop-at-ghirardelli-square/menu'><img class='imageOne' class='restaurantImages' src=project1-images/ghiradelli-sf.PNG></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h3>");
      $("#infoResponse1-3").html("<a href='https://www.allmenus.com/ca/san-francisco/93927-delfina/menu/'><img class='imageOne' class='restaurantImages' src=project1-images/delfine.jpg></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href='https://boudinbakery.com/menus/'><img class='imageOne' class='restaurantImages' src=project1-images/Boudin-sf.PNG></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href='https://www.burmasuperstar.com/menu'><img class='imageOne' class='restaurantImages' src=project1-images/burma.jpeg></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});


$("#LA").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h3>");
      $("#infoResponse0-3").html("<a href='https://la.pizzeriamozza.com/menu/'><img class='imageOne' class='restaurantImages' src=project1-images/philippe-la.PNG></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h3>");
      $("#infoResponse1-3").html("<a href='https://www.philippes.com/menu'><img class='imageOne' class='restaurantImages' src=project1-images/pizzaMossala.PNG></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href='https://www.zomato.com/los-angeles/bottega-louie-downtown/menu'><img class='imageOne' class='restaurantImages' src=project1-images/Bottega.jpg></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href='http://www.pinkshollywood.com/menu/'><img class='imageOne' class='restaurantImages' src=project1-images/pinks-la.PNG></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});


$("#Chicago").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h3>");
      $("#infoResponse0-3").html("<a href='https://www.tripadvisor.com/Restaurant_Review-g35805-d570063-Reviews-Alinea-Chicago_Illinois.html'><img class='imageOne' class='restaurantImages' src=project1-images/Purple-Pig-Inside-Sign-large.0.jpg></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h3>");
      $("#infoResponse1-3").html("<a href='https://thepurplepigchicago.com/menu'><img class='imageOne' class='restaurantImages' src=project1-images/alinea-chicago.PNG></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href='https://girlandthegoat.com/menu/'><img class='imageOne' class='restaurantImages' src=project1-images/girlandagoat-chicago.PNG></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href='https://www.joes.net/chicago/menu/'><img class='imageOne' class='restaurantImages' src=project1-images/joes-chicago.PNG></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});



$("#NOLA").on("click", function() {



const api_url = "https://developers.zomato.com/api/v2.1/search?entity_id=290&entity_type=city";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
      console.log(response);
      var lat = parseFloat(response.restaurants[0].restaurant.location.latitude);
      var long = parseFloat(response.restaurants[0].restaurant.location.longitude);

      var latOne = parseFloat(response.restaurants[1].restaurant.location.latitude);
      var longOne = parseFloat(response.restaurants[1].restaurant.location.longitude);

      var latTwo = parseFloat(response.restaurants[2].restaurant.location.latitude);
      var longTwo = parseFloat(response.restaurants[2].restaurant.location.longitude);

      var latThree = parseFloat(response.restaurants[3].restaurant.location.latitude);
      var longThree = parseFloat(response.restaurants[3].restaurant.location.longitude);

      function initMap() {
        // The location of Uluru
        var uluru = {lat: lat , lng: long};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
      function initMapOne() {
        // The location of Uluru
        var uluruOne = {lat: latOne , lng: longOne};
        // The map, centered at Uluru
        var mapOne = new google.maps.Map(
            document.getElementById('mapOne'), {zoom: 12, center: uluruOne});
        // The marker, positioned at Uluru
        var markerOne = new google.maps.Marker({position: uluruOne, map: mapOne});
      }

      function initMapTwo() {
        // The location of Uluru
        var uluruTwo = {lat: latTwo , lng: longTwo};
        // The map, centered at Uluru
        var mapTwo = new google.maps.Map(
            document.getElementById('mapTwo'), {zoom: 12, center: uluruTwo});
        // The marker, positioned at Uluru
        var markerTwo = new google.maps.Marker({position: uluruTwo, map: mapTwo});
      }
      function initMapThree() {
        // The location of Uluru
        var uluruThree = {lat: latThree , lng: longThree};
        // The map, centered at Uluru
        var mapThree = new google.maps.Map(
            document.getElementById('mapThree'), {zoom: 12, center: uluruThree});
        // The marker, positioned at Uluru
        var markerThree = new google.maps.Marker({position: uluruThree, map: mapThree});
      }


      initMap();
      initMapOne();
      initMapTwo();
      initMapThree();
      console.log(lat);
      console.log(long);



      $("#infoResponse0-0").html("<h1>" + response.restaurants[0].restaurant.name + "</h1>");
      $("#infoResponse0-1").html("<h3>" + response.restaurants[0].restaurant.location.address + "</h3>");
      $("#infoResponse0-3").html("<a href='http://www.stanleyrestaurant.com/'><img class='imageOne' class='restaurantImages' src=project1-images/stanley-nola.PNG></a>");

      $("#infoResponse1-0").html("<h1>" + response.restaurants[1].restaurant.name + "</h1>");
      $("#infoResponse1-1").html("<h3>" + response.restaurants[1].restaurant.location.address + "</h3>");
      $("#infoResponse1-3").html("<a href='http://www.gumboshop.com/menu.php'><img class='imageOne' class='restaurantImages' src=project1-images/gumboshop-nola.PNG></a>");

      $("#infoResponse2-0").html("<h1>" + response.restaurants[2].restaurant.name + "</h1>");
      $("#infoResponse2-1").html("<h3>" + response.restaurants[2].restaurant.location.address + "</h3>");
      $("#infoResponse2-3").html("<a href='http://www.cafedumonde.com/beignets'><img class='imageOne' class='restaurantImages' src=project1-images/cafedumonde-nola.PNG></a>");

      $("#infoResponse3-0").html("<h1>" + response.restaurants[3].restaurant.name + "</h1>");
      $("#infoResponse3-1").html("<h3>" + response.restaurants[3].restaurant.location.address + "</h3>");
      $("#infoResponse3-3").html("<a href='https://www.oceanagrill.com/oceana-grill-dinner-menu/'><img class='imageOne' class='restaurantImages' src=project1-images/oceana-nola.PNG></a>");





});

function setHeader(xhr) {
    xhr.setRequestHeader('user-key', 'b5ee5402ab1c74adead9b0b432d1db0f');
}


database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Log the value of the various properti

  // Change the HTML

  $("#infoResponse0-2").html("<h3>current wait time: " + snapshot.val().resturantOne.waitTime + "</h3>");
  $("#infoResponse1-2").html("<h3>current wait time: " + snapshot.val().resturantTwo.waitTime + "</h3>");
  $("#infoResponse2-2").html("<h3>current wait time: " + snapshot.val().resturantThree.waitTime + "</h3>");
  $("#infoResponse3-2").html("<h3>current wait time: " + snapshot.val().resturantFour.waitTime + "</h3>");
  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});




});
