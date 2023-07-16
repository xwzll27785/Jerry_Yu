/*function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); // This is regex: https://en.wikipedia.org/wiki/Regular_expression
	}
}

function iterateRecords(results) {

	console.log(results);

	// Setup the map as per the Leaflet instructions:
	// https://leafletjs.com/examples/quick-start/

	var myMap = L.map("map").setView([-27.460751, 153.018704], 12.58);

	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 18,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(myMap);


	// Iterate over each record and add a marker using the Latitude field (also containing longitude)
	$.each(results.result.records, function(recordID, recordValue) {

		var recordLatitude = recordValue["LAT"];
		var recordlongitude = recordValue["LONG"];

		if(recordLatitude && recordlongitude) {

			var lat = recordLatitude;
			var long = recordlongitude;

			// Position the marker and add to map
			var marker = L.marker([lat, long]).addTo(myMap);

			// Associate a popup with the record's information
			popupText = "<strong>" + recordValue["PARK_NAME"] + "</strong><br>" + recordValue["STREET_ADDRESS"] + "<br>" + recordValue["SUBURB"];
			marker.bindPopup(popupText);
		}	
	});

}

$(document).ready(function() {

	var data = {
		resource_id: "2c8d124c-81c6-409d-bffb-5761d10299fe",
		limit: 50
	}

	

	$.ajax({
		url: "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(results) {
			iterateRecords(results);
		}
	});


});*/


//img
var zoo = L.icon({
	iconUrl: 'image/zoo.jpg',
	iconSize: [30, 30], // size of the icon 
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var hotel = L.icon({
	iconUrl: 'image/hotel.jpg',
	iconSize: [30, 30], // size of the icon
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var museum = L.icon({
	iconUrl: 'image/museum.jpg',
	iconSize: [30, 30], // size of the icon
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var mountain = L.icon({
	iconUrl: 'image/mountain.jpg',
	iconSize: [30, 30], // size of the icon
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var park = L.icon({
	iconUrl: 'image/park.jpg',
	iconSize: [30, 30], // size of the icon
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});




//map
var map = L.map('map').setView([-27.511886, 153.015117, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//zoo
var lone = L.marker([-27.517004, 152.965800], { icon: zoo }).addTo(map)
	.bindPopup("<b>Lone Pine Koala Sanctuary</b> <br>708 Jesmond Rd, Fig Tree Pocket QLD 4069</br>NEARBY STOPS: 430 <br><a href='https://www.google.com/maps/place/%E9%BE%99%E6%9F%8F%E8%80%83%E6%8B%89%E5%8A%A8%E7%89%A9%E5%9B%AD/@-27.533777,152.9666263,17z/data=!3m1!4b1!4m5!3m4!1s0x6b91502b5bff92a3:0xd95a4342ea4d7936!8m2!3d-27.5337818!4d152.968815'>Bus Route...</a> <br> <a href='/travel_lone.html'>Learn More...</a>")
	.closePopup();



//
var Map = L.layerGroup([map]);

var overlayMaps = {
	"Map": Map
};

var baseMaps = {
	"OpenStreetMap": map
};

var layerControl = L.control.layers(overlayMaps).addTo(map);

var zoo = L.layerGroup([lone]);
var overlayMaps = {
	"zoo": zoo
};
layerControl.addOverlay(zoo, "zoo");


//hotel
var jac = L.marker([-27.508014, 152.950473], { icon: hotel }).addTo(map)
	.bindPopup("<b>Jacaranda House</b><br>Wongabel St, Kenmore QLD 4069<br>NEARBY STOPS: 430 433 <br><a href='https://www.google.com/maps/place/Jacaranda+House+Bed+%26+Breakfast/@-27.5106014,152.946101,17z/data=!3m1!4b1!4m8!3m7!1s0x6b9151b8d6b31a13:0x764bbef5c4d3839f!5m2!4m1!1i2!8m2!3d-27.5106062!4d152.9505857'>Bus Route...</a> <br> <a href='/travel_jac.html'>Learn More...</a>")




var moorooka = L.marker([-27.529122, 153.019332], { icon: hotel }).addTo(map)
	.bindPopup("<b>Moorooka Motel</b><br>980 Ipswich Rd, Moorooka QLD 4105 <br>NEARBY STOPS: 430 433  <br><a href='https://www.google.com/maps/place/Moorooka+Motel/@-27.5297252,153.0172009,17z/data=!3m1!4b1!4m8!3m7!1s0x6b915aa198437a75:0x17be53ed05305a8f!5m2!4m1!1i2!8m2!3d-27.5297349!4d153.0193885'>Bus Route...</a> <br> <a href='/travel_moo.html'>Learn More...</a>")


var benson = L.marker([-27.485348, 152.992722], { icon: hotel }).addTo(map)
	.bindPopup("<b>Benson Court Motel</b><br>61 Benson St, Toowong QLD 4066<br>NEARBY STOPS: 430 433 <br><a href='https://www.google.com/maps/place/Benson+Court+Motel/@-27.4876695,152.9904441,17z/data=!3m1!4b1!4m8!3m7!1s0x6b915092e9c4b4c9:0xcd322a4bdb8715f4!5m2!4m1!1i2!8m2!3d-27.4876828!4d152.9927038'>Bus Route...</a> <br> <a href='/travel_ben.html'>Learn More...</a>")


//
var hotel = L.layerGroup([jac, moorooka, benson]);
var overlayMaps = {
	"hotel": hotel
};
layerControl.addOverlay(hotel, "hotel");


//Museum
var uq = L.marker([-27.496511, 153.011512], { icon: museum }).addTo(map)
	.bindPopup("<b>UQ Anthropology Museum</b><br>NEARBY STOPS: 430 433<br><a href='https://www.google.com/maps/place/%E4%BA%BA%E7%B1%BB%E5%AD%A6%E5%8D%9A%E7%89%A9%E9%A6%86/@-27.4972368,153.0095213,17z/data=!3m2!4b1!5s0x6b9150825e901fa9:0x7ee9eeb9d9b9083b!4m5!3m4!1s0x6b915084e1bc9e95:0x74b7fd350c6cf6ac!8m2!3d-27.4972416!4d153.01171'>Bus Route...</a> <br> <a href='/travel_uqan.html'>Learn More...</a>")


var qu = L.marker([-27.481202, 153.025560], { icon: museum }).addTo(map)
	.bindPopup("<b>Queensland Maritime Museum</b><br>NEARBY STOPS: 66 111 222 <br><a href='https://www.google.com/maps/place/%E6%98%86%E5%A3%AB%E5%85%B0%E6%B5%B7%E4%BA%8B%E5%8D%9A%E7%89%A9%E9%A6%86/@-27.4818287,153.0234579,17z/data=!3m1!4b1!4m5!3m4!1s0x6b915a0d99d6db61:0xc80f1e445146b0c2!8m2!3d-27.4818335!4d153.0256466'>Bus Route...</a> <br> <a href='/travel_queens.html'>Learn More...</a>")


var museum = L.layerGroup([uq, qu]);
var overlayMaps = {
	"museum": museum
};
layerControl.addOverlay(museum, "museum");


//park
var park1 = L.marker([-27.508284, 152.975236], { icon: park }).addTo(map)
	.bindPopup("<b>Gordon Thomson Park</b><br>NEARBY STOPS: 428 414<br><a href='https://www.google.com/maps/place/Gordon+Thomson+Park/@-27.5097535,152.9733627,17z/data=!3m1!4b1!4m5!3m4!1s0x6b91504e5b1b4387:0x3ccbabcad39ee502!8m2!3d-27.5097583!4d152.9755514'>Bus Route...</a> <br> <a href='/travel_gordon.html'>Learn More...</a>")

var park2 = L.marker([-27.509949, 152.982781], { icon: park }).addTo(map)
	.bindPopup("<b>Glencairn Avenue Park</b><br>NEARBY STOPS: 428 <br><a href='https://www.google.com/maps/place/Glencairn+Avenue+Park/@-27.5100995,152.9807279,17z/data=!3m1!4b1!4m5!3m4!1s0x6b915044db9c61ff:0x5ebe14bfe48136bf!8m2!3d-27.5101043!4d152.9829166'>Bus Route...</a> <br> <a href='/travel_glen.html'>Learn More...</a>")

var park3 = L.marker([-27.491387, 152.991677], { icon: park }).addTo(map)
	.bindPopup("<b>Perrin Park</b><br>NEARBY STOPS: 417 <br><a href='https://www.google.com/maps/place/Perrin+Park/@-27.491684,152.989447,17z/data=!3m1!4b1!4m5!3m4!1s0x6b91508d28df0227:0xf02a35bd721bd40!8m2!3d-27.4916888!4d152.9916357'>Bus Route...</a> <br> <a href='/travel_perrin.html'>Learn More...</a>")


var park = L.layerGroup([park1, park2, park3]);
var overlayMaps = {
	"park": park
};
layerControl.addOverlay(park, "park");


//mountain
var mou = L.marker([-27.482119, 152.966326], { icon: mountain }).addTo(map)
	.bindPopup("<b>Mount Coot-Tha</b><br>NEARBY STOPS: 433 <br><a href='https://www.google.com/maps/place/Mount+Coot-Tha+QLD+4066/@-27.4761175,152.9313619,14z/data=!3m1!4b1!4m5!3m4!1s0x6b9150dec0753c05:0x502a35af3de9130!8m2!3d-27.475767!4d152.9764734'>Bus Route...</a> <br> <a href='/travel_mount.html'>Learn More...</a>")


var ste = L.marker([-27.513334, 153.049473], { icon: mountain }).addTo(map)
	.bindPopup("<b>Stephens Mountain</b><br>NEARBY STOPS: 430 453 425 <br><a href='https://www.google.com/maps/place/Stephens+Mountain/@-27.5166469,153.0412452,15z/data=!3m1!4b1!4m5!3m4!1s0x6b915af75f49a0c1:0x9f249e1c1ef792e4!8m2!3d-27.5166667!4d153.05'>Bus Route...</a> <br> <a href='/travel_step.html'>Learn More...</a>")


var mountain = L.layerGroup([mou, ste]);
var overlayMaps = {
	"mountain": mountain
};
layerControl.addOverlay(mountain, "mountain");


var oLi = document.getElementsByTagName('li');
oLi[i].onclick = function () {
	for (var i = 0; i < oLi.lenght; i++) {
		this.className = "";
	}
	this.className = "active"
}