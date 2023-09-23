// to interact with the emulated file system
// const FS = require('emscripten-fs');
// FS.init();

// Fonction pour charger et utiliser un fichier WebAssembly
function loadAndUseWasm(wasmFileName, functionName, argv) {
    fetch(wasmFileName)
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes, {
            env: {}
        }))
        .then(module => {
            module.arguments = argv;
            // Obtenez une référence vers le div de sortie
            constoutputDiv = document.getElementById('output');

            // Redéfinissez la fonction printf pour rediriger les sorties
            module.print = text => {
                outputDiv.textContent += text + '\n' // Ajoutez le texte à la div
            };
            // Appeler la fonction spécifiée du module WebAssembly
            module.instance.exports[functionName]();
        });
}



// Gérer le clic sur le bouton "Analyse"
document.getElementById('btnAnalyse').addEventListener('click', () => {
    argv = ['analyse', '-t', '-a1', '-c', '/data/arbre_appel.cpyrr']
    loadAndUseWasm('wasm/analyse.wasm', 'main', argv);
});

// Gérer le clic sur le bouton "Machine Virtuelle"
document.getElementById('btnMachineVirtuelle').addEventListener('click', () => {
    argv = ['/data/arbre_apperl.opyrr', 'yes']
    loadAndUseWasm('wasm/machine_virtuelle.wasm', 'main', argv);
});