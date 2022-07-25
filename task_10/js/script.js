
let longitude,
  latitude;

let data;

function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      // callback(xmlHttp.responseText);
      data = JSON.parse(xmlHttp.responseText);
      getPosition();
      viewData();
    }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=fce60e902aa5419c95edf9550d724f01"

httpGetAsync(url)

function initMap() {

  let position = { lat: latitude, lng: longitude };

  const  imageMarker = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Your location',
    icon: imageMarker,
  });
}

// window.initMap = initMap;



const getPosition = () => {
  longitude = data.longitude;
  latitude = data.latitude

  window.initMap = initMap(longitude, latitude);
}

const viewData = () => {
  const ipAddress = document.getElementById('ip-address'),
    location = document.getElementById('location'),
    offset = document.getElementById('offset'),
    isp = document.getElementById('isp');

  ipAddress.textContent = data.ip_address;
  offset.textContent = data.timezone.gmt_offset;
  isp.textContent = data.connection.isp_name;

  if (data.city && data.region_iso_code && data.postal_code) {
    location.textContent = `${data.city}, ${data.region_iso_code}
    ${data.postal_code}`;
  } else {
    location.textContent = `${data.country}, ${data.country_code}`;
  }
}
