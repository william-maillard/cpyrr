/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main_wasm.js":
/*!**********************!*\
  !*** ./main_wasm.js ***!
  \**********************/
/***/ (() => {

eval("// to interact with the emulated file system\r\n// const FS = require('emscripten-fs');\r\n// FS.init();\r\n\r\n// Fonction pour charger et utiliser un fichier WebAssembly\r\nfunction loadAndUseWasm(wasmFileName, functionName, argv) {\r\n    fetch(wasmFileName)\r\n        .then(response => response.arrayBuffer())\r\n        .then(bytes => WebAssembly.instantiate(bytes, {\r\n            env: {}\r\n        }))\r\n        .then(module => {\r\n            module.arguments = argv;\r\n            // Obtenez une référence vers le div de sortie\r\n            constoutputDiv = document.getElementById('output');\r\n\r\n            // Redéfinissez la fonction printf pour rediriger les sorties\r\n            module.print = text => {\r\n                outputDiv.textContent += text + '\\n' // Ajoutez le texte à la div\r\n            };\r\n            // Appeler la fonction spécifiée du module WebAssembly\r\n            module.instance.exports[functionName]();\r\n        });\r\n}\r\n\r\n\r\n\r\n// Gérer le clic sur le bouton \"Analyse\"\r\ndocument.getElementById('btnAnalyse').addEventListener('click', () => {\r\n    argv = ['analyse', '-t', '-a1', '-c', '/data/arbre_appel.cpyrr']\r\n    loadAndUseWasm('wasm/analyse.wasm', 'main', argv);\r\n});\r\n\r\n// Gérer le clic sur le bouton \"Machine Virtuelle\"\r\ndocument.getElementById('btnMachineVirtuelle').addEventListener('click', () => {\r\n    argv = ['/data/arbre_apperl.opyrr', 'yes']\r\n    loadAndUseWasm('wasm/machine_virtuelle.wasm', 'main', argv);\r\n});\n\n//# sourceURL=webpack:///./main_wasm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main_wasm.js"]();
/******/ 	
/******/ })()
;