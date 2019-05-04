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

var frequency;

//declares global varibles to firebase
var resturantOne = "";
var resturantTwo = "";
var resturantThree = "";
var resturantFour = "";



//database.ref().set({

//  resturantOne: resturantOne,
//  resturantTwo: resturantTwo,
//  resturantThree: resturantThree,
//  resturantFour: resturantFour,
//});







//clock function in jumbotron
function updateTime(){

  var now = moment();
  var timeDisplay = now.format("hh:mm:ssA");
  clock.textContent = timeDisplay;

}


setInterval(updateTime, 1000);
updateTime();




//submit event listener

$("#submit").on("click", function(event) {

  event.preventDefault();

var dropDown = $("#dropDown").val();

var frequency = $("#number").val().trim();


if (dropDown === "Resturant 1"){


  database.ref("resturantOne/").set({

    waitTime: frequency,
  });
}


if (dropDown === "Resturant 2"){


  database.ref("resturantTwo").set({

    waitTime: frequency

  });
}


if (dropDown === "Resturant 3"){


  database.ref("resturantThree").set({

    waitTime: frequency
  });
}
if (dropDown === "Resturant 4"){


  database.ref("resturantFour").set({

    waitTime: frequency
  });
}



$("#set").text(frequency);







});
