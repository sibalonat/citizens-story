app.controller('ProfileController', ['$scope', function($scope) {
	$scope.legends = [
    	{
    		element : " A — C'erano occasioni che andavano colte"
    	},
    	{
    		element : "B — È frutto di un'idea personale"
    	},
    	{
    		element : "C — A seguito di una competenza specifica"
    	},
    	{
    		element : "D — A seguito di una passione da coltivare"
    	},
    	{
    		element : "* startup"
    	},
    	{
    		element : "** artigiani"
    	}
    ];
  	/*** Close Button ***/
	angular.element(document).ready(function() {
		$('#XBtnTesto').mouseover(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "50% 50%",
				ease: Expo.easeOut
		    });
		});
		$('#XBtnTesto').mouseleave(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "100%",
				ease: Expo.easeOut
		    });
		});
		TweenLite.from('.stroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from('.txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2
		});
	});
	/**   VideoJS   **/
	angular.element(document).ready(function() {

		var AndreaMartelli = videojs('AndreaMartelli');
		AndreaMartelli.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var AndreaSalvatori = videojs('AndreaSalvatori');
		AndreaSalvatori.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var AnnaTampieri = videojs('AnnaTampieri');
		AnnaTampieri.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var BarbaraSavorani = videojs('BarbaraSavorani');
		BarbaraSavorani.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var FabrizioMantovani = videojs('FabrizioMantovani');
		FabrizioMantovani.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var GabrieleBandini = videojs('GabrieleBandini');
		GabrieleBandini.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
	});
	IvanoValmori, , , GiuliaRuta, RobertoBertoni, , MarcoPeroni, , StefanoZauli, , RaffaeleBorgini, MaurizioFionda, PaoloRava, MarcoTamba, 

}]);