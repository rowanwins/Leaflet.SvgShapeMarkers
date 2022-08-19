L.ShapeMarker = L.CircleMarker.extend({
	options: {
		fill: true,
		shape: 'triangle',
		radius: 10,
		rotation: 0
	},

	setRadius: function (radius) {
		this.options.radius = radius;
		return this.redraw();
	},

	getRadius: function () {
		return this.options.radius;
	},

	setRotation: function (rotation) {
		this.options.rotation = rotation;
		return this.redraw();
	},

	getRotation: function () {
		return this.options.rotation;
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

L.shapeMarker = function shapeMarker(latlng, options) {
	return new L.ShapeMarker(latlng, options);
};
