OpenGov.controller('HomeController', function($scope, $location){

	$scope.go = function(url){
		var url = url;
    	$location.path(url);
	}
	
});


OpenGov.controller('MapController', function($scope, $location, $interval, DataFactory){
	var mapdata = DataFactory.getData();
	var markers = [];
	var infowindow = [];
	var type = "all";

	$scope.changeFilter = function(filtertype){
		type = filtertype;
		filterInit = $interval($scope.filterMap,100);
	}

	$scope.filterMap = function() {
		for(var i = 0; i < markers.length; i++){
			markers[i].setMap(null);
		}
		markers = [];
		infowindow = [];
		var counter = 0;
		var filter = $scope.filter ? $scope.filter.name : "";
		for(var i = 0; i < mapdata.length; i++){
			if(isPassed(type,filter,mapdata[i])){
				markers[counter] = new google.maps.Marker({
					id: mapdata[i].id,
            		title: mapdata[i].name,
            		position: new google.maps.LatLng(mapdata[i].lat,mapdata[i].lng),
            		visible: true,
            		map: $scope.map
          		});
          		google.maps.event.addListener(markers[counter], 'click', function() { 
          			var id = this.id;
       				$scope.$apply(function() { 
			    		$location.path("/data/"+id+"/details"); 
			    	});
    			}); 
          		infowindow[counter] = new google.maps.InfoWindow({
      				content: '<p>'+mapdata[i].name+'</p>'
  				});
  				infowindow[counter].open($scope.map,markers[counter]);
          		counter++;
          		console.log(filter+":"+type+" | "+mapdata[i].name);
			} else console.log(filter+":"+type+" not found");
		}
		$interval.cancel(filterInit);

		function isPassed(type,filter,data){
			if(type.toLowerCase() == 'all' && (data.name.toLowerCase().indexOf(filter.toLowerCase()) != -1 || data.description.toLowerCase().indexOf(filter.toLowerCase()) != -1)) return true;
			if(data.type.toLowerCase().indexOf(type.toLowerCase()) != -1 && (data.name.toLowerCase().indexOf(filter.toLowerCase()) != -1 || data.description.toLowerCase().indexOf(filter.toLowerCase()) != -1)) return true;
			return false;
		}
	}
	var filterInit = $interval($scope.filterMap,100);


	$scope.setCenter = function(event) {
      	this.panTo(event.latLng);
    }
});


OpenGov.controller('DetailsController', function($scope, $routeParams, DataFactory){

	var dataID = $routeParams.dataID;
	$scope.detailsData = DataFactory.getDataByID(dataID);

});


OpenGov.controller('ContributionController', function($scope){
	
});