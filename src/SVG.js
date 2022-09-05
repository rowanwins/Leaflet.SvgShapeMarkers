L.SVG.include({
	_updateShape: function _updateShape(layer) {

		var p = layer._point;
		var s = layer.options.radius;
		var shape = layer.options.shape;
		var rotation = layer.options.rotation

		layer._path.setAttribute('transform', `rotate(${rotation},${p.x},${p.y})`);

		if (shape === "diamond") {
			var d = "M"+ (p.x-(Math.sqrt(2)*s))+ " "+ (p.y)+ " L " + (p.x) +" "+ (p.y-(Math.sqrt(2)*s))+ " L"  + (p.x+(Math.sqrt(2)*s)) + " " + (p.y)+ " L"  + (p.x) + " " + (p.y+(Math.sqrt(2)*s)) +" L"  + (p.x-(Math.sqrt(2)*s)) + " " + (p.y);
			this._setPath(layer, d);
		}
		if (shape === "square") {
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
			this._updateCircle(layer);
		}
		if (shape.startsWith("star")) {
			var shapesplit = shape.split(/[^0-9a-z]/gi, 2);
			var shapeint = parseInt(shapesplit[1]);
			if (shapesplit[0] === 'star' && !isNaN(shapeint) && shapeint > 2) {
				var v = shapeint;
			} else {
				var v = 5;
			}
			var ratio = 0.5 * (1 + Math.sqrt(5)) + 1;
			var c = [];
			for (var i = 0; i < v; i++) {
				c.push(
					(p.x+s/ratio*Math.sin((2*Math.PI/v)*i))
					+ ',' +
					(p.y+s/ratio*Math.cos((2*Math.PI/v)*i))
				); // outer radius
				c.push(
					(p.x+s*Math.sin((1/v*Math.PI)+(2*Math.PI/v)*i))
					+ ',' +
					(p.y+s*Math.cos((1/v*Math.PI)+(2*Math.PI/v)*i))
				); // inner radius
			}
			var d = 'M' + c.join('L') + 'Z';

			this._setPath(layer, d);
		}
		if (shape === "x") {
			s = s / 2;
			var d = 'M' + (p.x + s) + ',' + (p.y + s) +
				'L' + (p.x - s) + ',' + (p.y - s) +
				'M' + (p.x - s) + ',' + (p.y + s) +
				'L' + (p.x + s) + ',' + (p.y - s);
			this._setPath(layer, d);
		}
		if (shape.startsWith("polygon")) {
			var shapesplit = shape.split(/[^0-9a-z]/gi, 2);
			var shapeint = parseInt(shapesplit[1]);
			if (shapesplit[0] === "polygon" && !isNaN(shapeint) && shapeint > 2) {
				var v = shapeint;
			} else {
				var v = 5;
			}
			var angle = Math.PI; // Starting angle, top apex
			var c = [];
			for (var i = 0; i < v; i++) {
				c.push([
					(p.x + s * Math.sin(angle))
					+ ',' +
					(p.y + s * Math.cos(angle))
				]);
				angle += (2 * Math.PI / v);
			}
			var d = 'M' + c.join('L') + 'Z';

			this._setPath(layer, d);
		}
	}
});
