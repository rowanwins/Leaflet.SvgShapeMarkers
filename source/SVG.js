L.SVG.include({
	_updateShape: function (layer) {
		
		var p = layer._point;
		var s = layer._radius;
		var shape = layer.options.shape;

		if(shape === "diamond"){
			var d = "M "+ (p.x-s)+ " "+ (p.y)+ ", L " + (p.x) +" "+ (p.y-s)+ ", L"  + (p.x+s) + " " + (p.y)+ ", L"  + (p.x) + " " + (p.y+s) +", L"  + (p.x-s) + " " + (p.y);
			this._setPath(layer, d);
		}
		if(shape === "square"){
			var d = "M "+ (p.x-s)+ " "+ (p.y-s)+ ", L " + (p.x+s) +" "+ (p.y-s)+ ", L"  + (p.x+s) + " " + (p.y+s)+ ", L"  + (p.x-s) + " " + (p.y+s) +", L"  + (p.x-s) + " " + (p.y-s);
			this._setPath(layer, d);
		}
		if(shape === "triangle"){
			var d = "M"+ (p.x-s)+ " "+ (p.y+s)+ " L" + (p.x) +" "+ (p.y-s)+ " L" + (p.x+s) + " " + (p.y+s)+  " Z";
			this._setPath(layer, d);
		}
		if(shape === "circle"){
			this._updateCircle(layer)
		}
		if(shape === "x"){
			var s = s/2
			var d = 'M' + (p.x + s) + ',' + (p.y + s) +
			'L' + (p.x - s) + ',' + (p.y - s) +
			'M' + (p.x - s) + ',' + (p.y + s) +
			'L' + (p.x + s) + ',' + (p.y - s);
			this._setPath(layer, d);
		}
	}
})