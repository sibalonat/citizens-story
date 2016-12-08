app.directive('topMenu', function() { 
  	return { 
	    restrict: 'E', 
	    templateUrl: 'js/angularjs/directives/top-menu.html',
	    link: function(scope, element, attr) {

	    	angular.element(document).ready(function() {

				var effettoClick = document.getElementById("effectClick");
				effettoClick.volume = 0.03;
				
				$('.EffClick').click(function(event) {
					effettoClick.play();
				});

			});
	    }
  	};
});
