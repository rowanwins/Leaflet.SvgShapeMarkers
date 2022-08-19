# Leaflet.SvgShapeMarkers
Additional SVG marker types for leaflet.js such as triangle, diamond and square. Check out the [demo](http://rowanwins.github.io/Leaflet.SvgShapeMarkers/example/).

*Note*: Currently only works when `preferCanvas` isn't set to `true`.


### Installing
Either downloading this repo or install from npm 
````
npm install leaflet-svg-shape-markers
````

### Usage
**Step 1.** Include the required js in your document 

```
    # With requirejs
		require('leaflet-svg-shape-markers')

		# Using ES6
		import 'leaflet-svg-shape-markers'

		# Via a html script
   	<script src="leaflet-svg-shape-markers/dist/leaflet-svg-shape-markers.min.js"></script>
```

**Step 2.** Add a point to your map using the `shapeMarker` function

``` js
	var square = L.shapeMarker([51.505, -0.09], {
		shape: "square",
		radius: 20
	}).addTo(map);
```

**Step 3.**
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| shape | string | "triangle" | A valid shape, see list below |
| radius | number | 20 | The size of the svg marker in pixels |
| rotation | number | 0 | The rotation of the svg marker, between 0 and 360 |

L.shapeMarker also extends the [path class](http://leafletjs.com/reference.html#path) so any options that you can pass (such as color or fillOpacity) are also valid.

``` js
	var diamond = L.shapeMarker([51.505, -0.09], {
		fillColor: "#cccccc",
		color: "black",
		shape: "diamond",
		radius: 200
	}).addTo(map);
```

### Available shapes

* diamond
* square
* triangle (= triangle-up)
* triangle-up
* triangle-down
* arrowhead (= arrowhead-up)
* arrowhead-up
* arrowhead-down
* circle
* star-{number-points}
* x

### Additional methods
| Method        | Returns      | Description  | 
| ------------- |--------------|--------------|
| toGeoJSON | Object | Returns a GeoJSON representation of the marker (as a GeoJSON Point Feature).|
| setLatLng | this | Sets the position of a marker to a new location.|
| getLatLng | LatLng | Returns the current geographical position of the marker.|
| setStyle | this | Changes the appearance of a Path based on the options in the Path options object.|
| getRadius | number | Returns the current radius of the marker.|
| setRadius | this | Sets the radius of a marker. Units are in pixels.|
| getRotation | number | Returns the current rotation of the marker.|
| setRotation | this | Sets the rotation of a marker.|

``` js
	diamond.setRadius(10);
```

### Acknowledgements
Huge hats off go to [mourner](https://github.com/mourner) and all the [contributors](https://github.com/Leaflet/Leaflet/graphs/contributors) to the leaflet.js project, it's an amazing piece of open source software!
