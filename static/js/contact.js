
// Sidebar
//  Set the width of the sidebar to 250px (show it) 
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

//  Set the width of the sidebar to 0 (hide it) 
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Topnav

//  Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Geolocation
let map;
let lagosLatLong = {lat: 6.5244, lng: 3.3792}; 

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: lagosLatLong,
    zoom: 8,
  });
}

initMap();
// ahgdjfkalk

const x = document.getElementById("submit");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

