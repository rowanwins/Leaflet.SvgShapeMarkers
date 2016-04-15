var concat = require('concatenate-files');
var minifier = require('minifier')
var fs = require("fs");

fs.unlink('dist/leaflet-svg-markers.js', function(err) {
   if (err) {
       return console.error(err);
   }
});
fs.unlink('dist/leaflet-svg-markers.min.js', function(err) {
   if (err) {
       return console.error(err);
   }
});

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

