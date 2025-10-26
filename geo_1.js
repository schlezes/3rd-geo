/*global
  console
  window
*/

var getId = (ele) => document.getElementById(ele);

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var position = {
    current: "Your current Position is:",
    Latitude: "Latitude:",
    Longitude: "Longitude:",
    MoreLess: "More or Less:" + "meters"
};

function success(pos) {
    "use strict";
    var crd = pos.coords;
    getId("content").innerHTML =
            position.current +
            "<br />" +
            position.Latitude + " " + crd.latitude +
            "<br />" +
            position.Longitude + " " + crd.longitude;

    console.log(Object.keys(position));

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    "use strict";
    console.log(err.code);
    console.log(err.message);
    getId("content").innerHTML = "User declined the get geo coordinates" +
            "<br />" + "no action further action is required" +
            "<br />" + "continue without geo coordinates" +
            "<br />" + "end of geo coordinates application";
}

navigator.geolocation.getCurrentPosition(success, error, options);