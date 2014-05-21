OpenGov.factory('DataFactory', function(){
	var factory = {};
	var data = [
		{
			id : 0,
			name : 'Proyek Hambalang',
			description : 'Proyek Hambalang adalah proyek yang keren',
			long_desc : 'Lorem Ipsum',
			funding : 123000,
			initiator : 'Jokowi',
			keyword : 'hambalang',
			location : 'jakarta',
			latlng : '-6.549335,106.901924',
			type: 'building',
			progress : '20',
			status : 'stuck',
			photos : [
				'assets/images/300x300.gif'
			]
		},
	];

	factory.getData = function(){
		return data;
	}

	factory.getDataByID = function(id){
		return data[id];
	}

	return factory;
});