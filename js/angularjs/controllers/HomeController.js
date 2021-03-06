app.controller('HomeController', ['$scope', function($scope) {

	$scope.ProjectName = "Small city, big stories";

	angular.element(document).ready(function() {

		var audioVoice = document.getElementById('Voiceover');

		    audioVoice.volume = 0.08;

		TweenLite.from('.StrokePages', 1, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.25
		});

		TweenLite.from('.StrokeRettangoloCentrale', 1, {
			drawSVG: "50% 50%",
			ease: Expo.easeInOut,
			delay: 0.5
		});

		TweenLite.from('.StrokeLines', 1, {
			drawSVG: "0%",
			ease: Expo.easeInOut,
			delay: 0.75
		});

		TweenLite.from('.StrokeWindows', 1, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.3
		});

		TweenLite.from('.MAINColor', 1, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.3
		});

		TweenLite.from('.StrokeLines', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: .5
		});

		$('#enter').mouseover(function() {
		    TweenLite.to('.MAINStroke2px', 1, {
			    drawSVG: "50% 50%",
			    ease: Expo.easeOut
		    });
		});

		$('#enter').mouseleave(function() {
		    TweenLite.to('.MAINStroke2px', 1, {
			    drawSVG: "100%",
			    ease: Expo.easeOut
		    });
		});

		TweenLite.from('.MAINStroke2px', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenLite.from('.Stroke10px', 1, {
			drawSVG: "50% 50%",
			ease: Expo.easeInOut,  
		});

		TweenLite.from('.Logotype', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenLite.from('.WLine2px_', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenLite.from('.WLine2px', 1, {
			drawSVG: 0,
			ease: Expo.easeOut,
			delay: 4
		});

		TweenLite.from('.WColor', 1, {
			opacity: 0,
			ease: Expo.easeIn,
			delay: 3.5
		});

		TweenLite.from('.warning_1', 2, {
			drawSVG: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenLite.from('.warning_2', 2, {
			drawSVG: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenLite.to('.warning_1', 1, {
			opacity: 0,
			ease: Expo.easeIn,
			delay: 3
		});

		TweenLite.to('.warning_2', 1, {
			opacity: 0,
			ease: Expo.easeIn,
			delay: 3
		});
		
	});

}]);