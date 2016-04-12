# Leaflet.SvgShapeMarkers
Additional marker types based on for leaflet.js 

### Usage
**Step 1.** Include the required js in your document. 

```html
   	<script src="extraSvgMarkers/dist/leaflet-svg-markers.min.js"></script>
```

**Step 2.** Add a point to your map using the `shapeMarker` function

``` js
	var square = L.shapeMarker([51.505, -0.09], {
		shape: "square",
		size: 20
	}).addTo(map);
```

**Step 3.**
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| shape | string | "triangle" | A valid shape, one of "triangle" or "square" or "diamond" |
| size | number | 20 | The size of the svg marker in pixels |

L.shapeMarker also extends the path class so any options that you can pass (such as color or fillOpacity) are also valid.
``` js
	var diamond = L.shapeMarker([51.505, -0.09], {
		fillColor: "#cccccc",
		color: "black",
		shape: "diamond",
		size: 20
	}).addTo(map);
```

### Acknowledgements
Huge hats off go to [mourner](https://github.com/mourner) and all the [contributors](https://github.com/Leaflet/Leaflet/graphs/contributors) to the leaflet.js project, it's an amazing piece of open source software!