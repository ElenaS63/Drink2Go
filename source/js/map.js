const ZOOM = 20;
const LOCATION = {
  lat: 59.968385,
  lng: 30.317932,
};
const PIN_LOCATION = {
  lat: 59.968320,
  lng: 30.317460,
};
const PIN_DATA = {
  iconUrl: './img/icons/stack.svg#map-marker',
  iconSize: [38, 50],
  iconAnchor: [19, 50]
  }
;
const LAYER_ADRESS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const map = L.map('map-canvas', {scrollWheelZoom:false});
const mapIcon = L.icon(PIN_DATA);
const mapPin = L.marker(PIN_LOCATION,
  {
    draggable: false,
    icon: mapIcon,
  }
  );
  const mapImage = document.querySelector('.map__img');
  const mapFrame = document.querySelector('.map__frame');

const createMap = () => {
  map.setView(LOCATION, ZOOM);
  L.tileLayer(LAYER_ADRESS, { attribution: LAYER_ATTRIBUTION}).addTo(map);
  mapPin.addTo(map);
  mapImage.classList.add('map__img--js');
  mapFrame.classList.remove('map__frame--nojs');
};

export {createMap};
