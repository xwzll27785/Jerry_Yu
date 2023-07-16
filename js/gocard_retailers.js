function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); 
	}
}

function iterateRecords(results) {

	console.log(results);
	

	// Setup the map as per the Leaflet instructions:

	var myMap = L.map("map").setView([-27.468886, 153.025317, -0.09], 16);

	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 18,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(myMap);

	// Iterate over each record and add a marker using the Latitude field (also containing longitude)
	$.each(results.result.records, function(recordID, recordValue) {

		
		var recordLatitude = recordValue["Latitude"];
		//console.log(recordLatitude);
		var recordlongitude = recordValue["Longitude"];
		console.log(recordLatitude);
		//var marker = L.marker([30,40]).addTo(myMap);
		

		

		if(recordLatitude && recordlongitude) {
			console.log(recordLatitude);

			


			var lat = recordLatitude;
			//console.log(lat);
			var long = recordlongitude;

			// Position the marker and add to map
			var marker = L.marker([lat, long]).addTo(myMap);

			// Associate a popup with the record's information
			popupText =  "</strong>" + recordValue["Name"] + "<br>" + recordValue["Address"];
			marker.bindPopup(popupText);
		}	
	});

}

$(document).ready(function() {

	var data = {
		resource_id: "1ae29c54-83d4-46fe-b0ae-09b7953dc9d0",
		limit: 150
	};

	

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(results) {
			iterateRecords(results);
		}
	});


});
