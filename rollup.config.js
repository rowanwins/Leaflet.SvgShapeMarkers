import {terser} from 'rollup-plugin-terser'
import multi from '@rollup/plugin-multi-entry';

const output = (input, output, plugins) => ({
    input,
    external: ['leaflet'],
    output: Object.assign({
        name: 'L.shapeMarker',
        format: 'umd',
        globals: {
            leaflet: 'L',
        }
    }, output),
    plugins
})

export default [
    output(
        ['./src/shapeMarker.js', './src/SVG.js'], {
            file: './dist/leaflet-svg-shape-markers.js'
        },
        [multi()]
    ),
    output(
        ['./src/shapeMarker.js', './src/SVG.js'], {
            file: './dist/leaflet-svg-shape-markers.min.js'
        },
        [multi(), terser()]
    )
]
