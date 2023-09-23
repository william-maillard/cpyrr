const path = require('path');

module.exports = {
    entry: './main_wasm.js',
    output: {
        filename: "compilation.wasm.bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.wasm$/, // Corresponds aux fichiers .wasm
                type: 'webassembly/experimental',
            },
        ],
    },
};