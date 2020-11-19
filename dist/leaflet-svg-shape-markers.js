L.SVG.include({
	_updateShape: function _updateShape(layer) {

		var p = layer._point;
		var s = layer._radius;
		var shape = layer.options.shape;

		if(shape === "diamond"){
			var d = "M"+ (p.x-(Math.sqrt(2)*s))+ " "+ (p.y)+ " L " + (p.x) +" "+ (p.y-(Math.sqrt(2)*s))+ " L"  + (p.x+(Math.sqrt(2)*s)) + " " + (p.y)+ " L"  + (p.x) + " " + (p.y+(Math.sqrt(2)*s)) +" L"  + (p.x-(Math.sqrt(2)*s)) + " " + (p.y);
			this._setPath(layer, d);
		}
		if(shape === "square"){
			var d = "M"+ (p.x-s)+ " "+ (p.y-s)+ " L " + (p.x+s) +" "+ (p.y-s)+ " L"  + (p.x+s) + " " + (p.y+s)+ " L"  + (p.x-s) + " " + (p.y+s) +" L"  + (p.x-s) + " " + (p.y-s);
			this._setPath(layer, d);
		}
		if (shape === "triangle" || shape === "triangle-up") {
			var d = "M" + (p.x - (13/10*s)) + " " + (p.y + (0.75*s)) + " L" + (p.x) + " " + (p.y - (1.5*s)) + " L" + (p.x + (13/10*s)) + " " + (p.y + (0.75*s)) + " Z";
			this._setPath(layer, d);
		}
		if (shape === "triangle-down") {
			var d = "M" + (p.x - (13/10*s)) + " " + (p.y - (0.75*s)) + " L" + (p.x) + " " + (p.y + (1.5*s)) + " L" + (p.x + (13/10*s)) + " " + (p.y - (0.75*s)) + " Z";
			this._setPath(layer, d);
		}
		if (shape === "arrowhead" || shape === "arrowhead-up") {
			var d = "M " + (p.x + (1.3*s)) + " " + (p.y + (1.3*s)) + " L " + (p.x) + " " + (p.y - (1.3*s)) + " L " + (p.x - (1.3*s)) + " " + (p.y + (1.3*s)) + " L " + (p.x) + " " + (p.y + (0.5 * s)) + " L " + (p.x + (1.3*s)) + " " + (p.y + (1.3*s)) + " Z";
			this._setPath(layer, d);
		}
		if (shape === "arrowhead-down") {
			var d = "M " + (p.x - (1.3*s)) + " " + (p.y - (1.3*s)) + " L " + (p.x) + " " + (p.y + (1.3*s)) + " L " + (p.x + (1.3*s)) + " " + (p.y - (1.3*s)) + " L " + (p.x) + " " + (p.y - (0.5 * s)) + " L " + (p.x - (1.3*s)) + " " + (p.y - (1.3*s)) + " Z";
			this._setPath(layer, d);
		}
		if (shape === "circle") {
			this._updateCircle(layer)
		}
		if (shape === "x") {
			s = s / 2;
			var d = 'M' + (p.x + s) + ',' + (p.y + s) +
				'L' + (p.x - s) + ',' + (p.y - s) +
				'M' + (p.x - s) + ',' + (p.y + s) +
				'L' + (p.x + s) + ',' + (p.y - s);
			this._setPath(layer, d);
		}
	}
});
L.ShapeMarker = L.CircleMarker.extend({
	options: {
		fill: true,
		shape: 'triangle',
		radius: 10
	},

	_updatePath: function () {
		this._renderer._updateShape(this);
	},

	toGeoJSON: function () {
		return L.GeoJSON.getFeature(this, {
			type: 'Point',
			coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
		});
	}

});


// @factory L.shapeMarker(latlng: LatLng, options? ShapeMarker options)
//
L.shapeMarker = function shapeMarker(latlng, options) {
	return new L.ShapeMarker(latlng, options);
};
