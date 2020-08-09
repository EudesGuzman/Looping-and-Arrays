var coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

var latitude = coordinatesArray[0][0];
var longitude = coordinatesArray[0][1];
/*for ( let i = 0; i < coordinatesArray.length; i++){
       //console.log(coordinatesArray[i]);
       console.log(coordinatesArray.latitude);
       //console.log(latitude);
}*/

  for (var index in coordinatesArray) {
    console.log(coordinatesArray[index][1]);
}




