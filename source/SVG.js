L.SVG.include({
	_updateShape: function _updateShape(layer) {

		var p = layer._point;
		var s = layer._radius;
		var shape = layer.options.shape;

		if (shape === "diamond") {
			var d = "M " + (p.x - s) + " " + (p.y) + ", L " + (p.x) + " " + (p.y - s) + ", L" + (p.x + s) + " " + (p.y) + ", L" + (p.x) + " " + (p.y + s) + ", L" + (p.x - s) + " " + (p.y);
			this._setPath(layer, d);
		}
		if (shape === "square") {
			var d = "M " + (p.x - s) + " " + (p.y - s) + ", L " + (p.x + s) + " " + (p.y - s) + ", L" + (p.x + s) + " " + (p.y + s) + ", L" + (p.x - s) + " " + (p.y + s) + ", L" + (p.x - s) + " " + (p.y - s);
			this._setPath(layer, d);
		}
		if (shape === "triangle" || shape === "triangle-up") {
			var d = "M" + (p.x - s) + " " + (p.y + s) + " L" + (p.x) + " " + (p.y - s) + " L" + (p.x + s) + " " + (p.y + s) + " Z";
			this._setPath(layer, d);
		}
		if (shape === "triangle-down") {
			var d = "M" + (p.x - s) + " " + (p.y - s) + " L" + (p.x) + " " + (p.y + s) + " L" + (p.x + s) + " " + (p.y - s) + " Z";
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