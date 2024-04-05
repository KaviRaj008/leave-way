 /*  
    if (!navigator.geolocation){
        throw new Error("no geolocation available");
    
    }
    function success(pos) {
     
        
        const lat = pos.coords.latitude;
        const lan = pos.coords.longitude;
        
        
        const markup = `<a href="https://www.openstreetmap.org/#map=16/${lat}/${lan}"> your current position: latitude: ${lat}, longitude: ${lan}.</a>`;
    
        document.getElementById('map-container').innerHTML = markup;
          console.log(lat, lan);
    }
    
    function error(err) {

        if(err.code === 1){
        alert("allow access to geolocation");
    }
    else{
        alert("position unavailable");
    }
}

    
    const options = {

        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 50000,
    };
    
    
    
    
    navigator.geolocation.watchPosition(success,error,options);

 */

  
var map = L.map('map-container');
map.setView([13.13798423, 80.20428], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


 

 let marker, circle, zoomed ;

  function success(pos) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (marker){
      map.removeLayer(marker);
      map.removeLayer(circle);
    }

    marker = L.marker([lat, lng]).addTo(map);
    circle = L.circle([lat, lng],{ radius: accuracy }).addTo(map);
    
    if(!zoomed){
    zoomed = map.fitbounds(circle.getBounds());
    }
   map.setView([lat, lng]);

  }




  const options = {

    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 3000,
};

  
function error(err) {

  if(err.code === 1){
  alert("allow access to geolocation");
}

}


navigator.geolocation.watchPosition(success,error,options);
