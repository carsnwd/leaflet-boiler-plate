/**
 * Created by woodc3 on 6/23/2017.
 */

var map; //Leaflet map
var tilesLoaded = false; //Boolean used to wait for tiles to load before taking screengrab.

$(document).ready(function(){
    initMap();
});

/**
 * Leaflet function to initialize map
 * with tile set, etc.
 */
function initMap() {
    map = L.map('mapid').setView([39.176997, -76.795423], 17);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: '{MAP-BOX-TOKEN}'
    }).addTo(map);
    tilesLoaded = true;
}