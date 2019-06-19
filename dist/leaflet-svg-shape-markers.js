L.DivIcon.SVGShape = L.DivIcon.extend({
	options: {
		"className": 'svg-shape',
		"shape": 'circle',
		"anchor": null,
		"fillColor": '#ce0404',
		"fillOpacity": 1,
		"strokeColor": '#000000',
		"strokeOpacity": 0.8,
		"strokeWidth": 1,
		"strokeLinecap": 'square',
		"strokeLinejoin": 'miter',
		"size": 20,
		"iconSize": null,
	},
	initialize: function(options) {
		options = L.Util.setOptions(this, options);
		if (!this.options.iconSize) {
			this.options.iconSize = L.point(this.options.size, this.options.size);
		}
		
		var style = "width:" + this.options.iconSize.x + "px; height:" + this.options.iconSize.y + "px;";		
		var anchor = L.point(Number(this.options.iconSize.x)/2, Number(this.options.iconSize.x)/2);
		var x = Number(anchor.x);
		var y = Number(anchor.y);
		
		switch(this.options.shape) {
			case "circle":
				var r = Number(this.options.size/2)-1;
				var circle = 'cx="' + x + '" cy="' + y + '" r="' + r + '"';
				var shp = this._drawShape(circle);
			break;
			case "diamond":
				var s = Number(this.options.size/2);
				var diamond = "M"+ (x-s)+ " "+ (y)+ " L " + (x) +" "+ (y-s)+ " L"  + (x+s) + " " + (y)+ " L"  + (x) + " " + (y+s) +" L"  + (x-s) + " " + (y);
				var shp = this._drawShape(diamond);
			break;
			case "square":
				var s = Number(this.options.size/2)-1.5;
				var square = "M"+ (x-s)+ " "+ (y-s)+ " L " + (x+s) +" "+ (y-s)+ " L"  + (x+s) + " " + (y+s)+ " L"  + (x-s) + " " + (y+s) +" L"  + (x-s) + " " + (y-s);
				var shp = this._drawShape(square);
			break;
			case "triangle-up":
			case "triangle":
				var s = Number(this.options.size/2)-1;
				var triangleUp = "M" + (x-s) + " " + (y+s) + " L" + (x) + " " + (y-s) + " L" + (x+s) + " " + (y+s) + " Z";
				var shp = this._drawShape(triangleUp);
			break;
			case "triangle-down":
				var s = Number(this.options.size/2)-1;
				var triangleDown = "M" + (x-s) + " " + (y-s) + " L" + (x) + " " + (y+s) + " L" + (x+s) + " " + (y-s) + " Z";
				var shp = this._drawShape(triangleDown);
			break;
			case "x":
				var s = Number(this.options.size/2)-1;
				var theX = 'M' + (x+s) + ',' + (y+s) + 'L' + (x-s) + ',' + (y-s) +	'M' + (x-s) + ',' + (y+s) +	'L' + (x+s) + ',' + (y-s);
				var shp = this._drawShape(theX);
			break;
		}

		options.html = '<svg style="' + style + '">' + shp + '</svg>';
	},
	_drawShape: function(shp) {
		var fill = this.options.fillColor;
		var fillOpacity = this.options.fillOpacity;
		var stroke = this.options.strokeColor;
		var strokeOpacity = this.options.strokeOpacity;
		var strokeWidth = this.options.strokeWidth;
		var strokeLinecap = this.options.strokeLinecap;
		var strokeLinejoin = this.options.strokeLinejoin;
		
		if (this.options.shape === "circle") {
			return '<circle ' + shp + ' fill="' + fill + '" fill-opacity="' + fillOpacity + '" stroke="' + stroke + '" stroke-opacity="' + strokeOpacity + '" stroke-width="' + strokeWidth + '"/>';
		} else {
			return '<path d="' + shp + '" fill="' + fill + '" fill-opacity="' + fillOpacity + '" stroke="' + stroke + '" stroke-opacity="' + strokeOpacity + '" stroke-width="' + strokeWidth + '" stroke-linecap="' + strokeLinecap + '" stroke-linejoin="' + strokeLinejoin + '"/>';
		}
	},
});

L.divIcon.svgShape = function(options) {
	return new L.DivIcon.SVGShape(options);
};

L.Marker.SimpleSVGMarker = L.Marker.extend({
	options: {
		shape: 'circle',
		size: 12
	},
	initialize: function(latlng, options) {
		options = L.Util.setOptions(this, options);
		this._latlng = latlng;
		options.icon = L.divIcon.svgShape(options);
	},
});

L.simpleMarker = function(latlng, options) {
	return new L.Marker.SimpleSVGMarker(latlng, options);
};
