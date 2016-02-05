(function(Chart) {
	"use strict";

	var helpers = Chart.helpers;

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

}).call(this, Chart);
