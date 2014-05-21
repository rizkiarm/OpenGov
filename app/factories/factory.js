OpenGov.factory('DataFactory', function(){
	var factory = {};
	var data = [
		{
			id : 0,
			name : 'Proyek Hambalang',
			description : 'Proyek Hambalang adalah proyek yang keren',
			long_desc : 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.',
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