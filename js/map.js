const ZOOM=20,LOCATION={lat:59.968385,lng:30.317932},PIN_LOCATION={lat:59.96832,lng:30.31746},PIN_DATA={iconUrl:"./img/icons/stack.svg#map-marker",iconSize:[38,50],iconAnchor:[19,50]},LAYER_ADRESS="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",LAYER_ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',map=L.map("map-canvas",{scrollWheelZoom:!1}),mapIcon=L.icon(PIN_DATA),mapPin=L.marker(PIN_LOCATION,{draggable:!1,icon:mapIcon}),mapImage=document.querySelector(".map__img"),mapFrame=document.querySelector(".map__frame"),createMap=()=>{map.setView(LOCATION,20),L.tileLayer(LAYER_ADRESS,{attribution:LAYER_ATTRIBUTION}).addTo(map),mapPin.addTo(map),mapImage.classList.add("map__img--js"),mapFrame.classList.remove("map__frame--nojs")};export{createMap};