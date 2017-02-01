var concat = require('concatenate-files');
var minifier = require('minifier')
var fs = require("fs");

fs.unlink('dist/leaflet-svg-shape-markers.js', function(err) {
   if (err) {
       return console.error(err);
   }
});
fs.unlink('dist/leaflet-svg-shape-markers.min.js', function(err) {
   if (err) {
       return console.error(err);
   }
});

concat([
	'source/SVG.js', 
	'source/markerTypes/shapeMarker.js',
	], 
	'dist/leaflet-svg-shape-markers.js', { separator: ';' }, function(err, result) {

		var input = 'dist/leaflet-svg-shape-markers.js'
		minifier.minify(input, {
			output: 'dist/leaflet-svg-shape-markers.min.js'
		})
		console.log("Done")

	});

