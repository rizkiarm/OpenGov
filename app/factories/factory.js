OpenGov.factory('DataFactory', function(){
	var factory = {};
	var data = [
		{
			id : 0,
			name : 'Proyek Hambalang',
			description : 'Proyek Hambalang adalah proyek yang keren',
			long_desc : 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.',
			funding : 'IDR 2.3 Billion',
			initiator : 'John Smith',
			keyword : 'hambalang',
			location : 'jakarta',
			lat : '-6.549335',
			lng : '106.901924',
			type: 'building',
			progress : '20',
			status : 'discontinue',
			photos : [
				'assets/images/300x300.gif'
			]
		},
		{
			id : 1,
			name : 'Proyek Pembangunan MRT',
			description : 'MRT merupakan proyek transportasi umum pemerintah provinsi DKI Jakarta dalam meningkatkan kualitas dan kuantitas perjalanan/mobilitas aktivitas masyarakat menjadi lebih andal, aman dan nyaman',
			long_desc : 'Mass Rapid Transit (MRT) adalah sebuah proyek yang menaungi bidang transportasi umum angkutan darat di Provinsi DKI Jakarta. Bertujuan untuk mengingkatkan mobilitas dan kualitas kehidupan masyarakat, MRT Jakarta bertujuan untuk mengurangi masalah kemacetan di Ibukota dan memberikan pelayanan transportasi yang aman, nyaman, dan handal. Selain itu, MRT Jakarta juga mencoba meningkatkan kualitas kehidupan masyarakat Jakarta misalnya dari sisi polusi udara. Penggunaan sistem MRT diharapkan dapat mengurangi polusi dengan berkurangnya penggunaan kendaraan pribadi.',
			funding : '¥125,237,000,000,-',
			initiator : 'Pemerintah DKI Jakarta',
			keyword : 'mrt',
			location : 'DKI Jakarta',
			lat : '-6.149335',
			lng : '106.801924',
			type: 'transportation',
			progress : '30',
			status : 'on progress',
			photos : [
				'http://setkab.go.id/media/article/images/2013/05/02/m/r/mrt-jakarta.jpg'
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