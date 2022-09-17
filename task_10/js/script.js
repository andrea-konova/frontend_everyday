const mapContainer = document.querySelector('.map');

let url,
  longitude,
  latitude;

let data;

function httpGetAsync(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 400) {
      alert("You have entered an invalid IP address! Please try again!");
      const ipAddress = document.getElementById('ip-address');
      handleSubmit(ipAddress.textContent);
    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      data = JSON.parse(xmlHttp.responseText);
      getPosition();
      viewData();
      mapContainer.classList.remove('_sending');
    }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

url = "https://ipgeolocation.abstractapi.com/v1/?api_key=fce60e902aa5419c95edf9550d724f01"

httpGetAsync(url);

function initMap() {

  let position = { lat: latitude, lng: longitude };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Your location',
    icon: {
      url: "./img/marker.png",
      scaledSize: new google.maps.Size(64, 64)
    }
  });
}

const getPosition = () => {
  longitude = data.longitude;
  latitude = data.latitude

  initMap(longitude, latitude);
}

const viewData = () => {
  const ipAddress = document.getElementById('ip-address'),
    location = document.getElementById('location'),
    offset = document.getElementById('offset'),
    isp = document.getElementById('isp');

  ipAddress.textContent = data.ip_address;
  isp.textContent = data.connection.isp_name;

  if (data.timezone.gmt_offset >= 0) {
    offset.textContent = `+${data.timezone.gmt_offset}`;
  } else {
    offset.textContent = data.timezone.gmt_offset;
  }

  if (data.city && data.region_iso_code && data.postal_code) {
    location.textContent = `${data.city}, ${data.region_iso_code}
    ${data.postal_code}`;
  } else {
    location.textContent = `${data.country}, ${data.country_code}`;
  }
}

const handleSubmit = (value) => {
  mapContainer.classList.add('_sending');

  url = `https://ipgeolocation.abstractapi.com/v1/?api_key=fce60e902aa5419c95edf9550d724f01&ip_address=${value}`;
  httpGetAsync(url);
}

const validateIPaddress = (ipAddress) => {
  const ipRegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; // /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/

  if (ipRegExp.test(ipAddress)) {
    handleSubmit(ipAddress);
  } else {
    alert("You have entered an invalid IP address!");
    return (false);
  }
}

const form = document.querySelector('.search-block');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('.search-block__input');
  validateIPaddress(input.value);

  input.value = '';
})
