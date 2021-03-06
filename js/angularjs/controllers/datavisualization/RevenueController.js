app.controller('RevenueController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenLite.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		var Bars = ['.PTEKBars', '.ITBars', '.MAVBars', '.FOODBars'];

		TweenMax.staggerFrom(Bars, 2, {
			drawSVG: 0, 
			delay: 2, 
			ease: Expo.easeOut, 
			force3D: true
		}, 0.2);

		TweenMax.from('.BStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});

		TweenMax.from('#DV1NoData', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2.7
		});

	});
}]);