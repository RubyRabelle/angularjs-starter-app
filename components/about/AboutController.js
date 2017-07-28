// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

// use an IIFE - immediately invoked function expression to clean up variables automatically
(function(){
	angular
	.module('app.about', ['ngRoute'])

	// Routing configuration for this module
	.config(['$routeProvider',function($routeprovider){
		$routeprovider.when('/about', {
			controller: 'AboutController',
			templateUrl: 'components/about/aboutView.html'
		});
	}])

	
	.controller('AboutController', AboutController);
	
	
	//FUNCTIONS for the module/controller
	function AboutController($scope){
		// Just a housekeeping.
		// In the init method we are declaring all the
		// neccesarry settings and assignments to be run once
		// controller is invoked
		init();

		function init(){
		
		};

		this.message = "Hello About!";
	}

	
})();

