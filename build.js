var concat = require('concatenate-files');
var minifier = require('minifier')

concat([
	'source/SVG.js', 
	'source/markerTypes/shapeMarker.js',
	], 
	'dist/leaflet-svg-markers.js', { separator: ';' }, function(err, result) {

		var input = 'dist/leaflet-svg-markers.js'
		minifier.minify(input, {
			output: 'dist/leaflet-svg-markers.min.js'
		})
		console.log("Done")

	});

