app.controller('DatavizController', ['$scope', '$route', 'characters', '$routeParams', function($scope, $route, characters, $routeParams) {
	/**   VideoJS ??????????????   **/
	angular.element(document).ready(function() {
		var player = videojs('VideoIntervistato');
		   
		player.markers({
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
	/**/
	angular.element(document).ready(function() {
		var bars = ['.foundation14', '.foundation21', '.foundation23', '.foundation7'];
		var bars_dates = ['.foundation8', '.foundation3', '.foundation22', '.foundation12',];
		TweenLite.from('.foundation2', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenMax.staggerFrom(bars_dates, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.k_txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 3
		});
	});
	angular.element(document).ready(function() {
		var bars = ['.revenue17', '.revenue2', '.revenue4', '.revenue16', ];
		TweenLite.from('.revenue1', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.revenue77', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2.7
		});
		TweenLite.from('.revenue11', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
		TweenLite.from('.revenue5', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
	});
	angular.element(document).ready(function() {
		var bars = ['.LinePTEK', '.LineIT', '.LineMAV', '.LineFOOD'];
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.greyline', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenLite.from('.greytext', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
	});
	angular.element(document).ready(function() {	
		var circles = ['.CircleFOOD', '.CircleIT', '.CircleMAV', '.CirclePTEK']
		TweenLite.from(circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenLite.from(['.StatLine1', '.StatLine2'], 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
		TweenLite.from(['.ReadingLinePTEK', '.ReadingLinePTEKaux'], 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from(['.PTEK_', '.PTEKaux_'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from(['.White'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
	});
	angular.element(document).ready(function() {
		var logo_globo = ['.Logo1Lines2px', '.Logo1Lines5px'];
		TweenLite.from(logo_globo, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});
		TweenLite.from('.Logo2Lines5px', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});
	});
}]);