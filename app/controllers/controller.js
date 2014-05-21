OpenGov.controller('HomeController', function($scope, $location){

	$scope.go = function(url){
		var url = url;
    	$location.path(url);
	}
	
});


OpenGov.controller('MapController', function($scope, $location, DataFactory){
	$scope.map = {
		latlng : '-0.703107, 117.854462',
		zoom : 5
	};

	$scope.mapdata = DataFactory.getData();

	$scope.setCenter = function(event) {
      	this.panTo(event.latLng);
    }

    $scope.showDetails = function() {
    	var detailID = this.id;
    	$scope.$apply(function() { 
    		$location.path("/data/"+detailID+"/details"); 
    	});
    }
});


OpenGov.controller('DetailsController', function($scope, $routeParams, DataFactory){

	var dataID = $routeParams.dataID;
	$scope.detailsData = DataFactory.getDataByID(dataID);

});


OpenGov.controller('DemocracyController', function($scope){
	
});