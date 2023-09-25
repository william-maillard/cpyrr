function getNodeNature(index) {
    const type_noeud = [
        "A_PROG",
        "A_CORPS",
        "A_LISTE_INSTRUCTION",
        "A_RETOURNE",
        "A_LISTE_PARAM",
        "A_INST_COND",
        "A_TANT_QUE",
        "A_AFFECTATION",
        "A_LISTE_INDICES",
        "A_IDF",
        "A_VARIABLE",
        "A_CSTE_ENTIERE",
        "A_CSTE_REEL",
        "A_CSTE_BOOLEEN",
        "A_CSTE_CARACTERE",
        "A_CSTE_CHAINE",
        "A_EXPRESSION_ARITHMETIQUE",
        "A_EXPRESSION_BOOLEENNE",
        "A_EXPRESSION_RELATIONNELLE",
        "A_PLUS",
        "A_MOINS",
        "A_MULT",
        "A_DIV",
        "A_MOD",
        "A_OU",
        "A_ET",
        "A_NON",
        "A_INF",
        "A_INF_EGAL",
        "A_SUP",
        "A_SUP_EGAL",
        "A_EGAL",
        "A_DIFFERENT",
        "A_LIRE",
        "A_ECRIRE",
        "A_APPEL_FCT",
        "A_APPEL_PROC",
        "A_ENTREE",
        "A_SORTIE",
        "A_LISTE_VARIABLES"
    ];
    const name = type_noeud[index]
    return name !== -1 ? name : null;
}


// Définition de la structure "noeud"
// instantier avec new Noeud(...)
function Noeud(nature, valeur, fils, frere) {
    this.nature = nature;
    this.valeur = valeur;
    this.fils = fils || null;
    this.frere = frere || null;
}

// Définition de la structure "arbre" (un pointeur vers un "noeud")
function Arbre(noeud) {
    this.noeud = noeud || null;
}

// Définition de la structure "noeud"
function Noeud(nature, valeur, fils, frere) {
    this.nature = nature;
    this.valeur = valeur;
    this.fils = fils || null;
    this.frere = frere || null;
}

// Définition de la structure "arbre" (un pointeur vers un "noeud")
function Arbre(noeud) {
    this.noeud = noeud || null;
}

// Fonction pour créer un arbre vide
function arbre_vide() {
    return new Arbre(null);
}

// Fonction pour créer un noeud et renvoyer un pointeur sur ce noeud
function creer_noeud(nature, valeur) {
    return new Noeud(nature, valeur, null, null);
}

// Fonction pour ajouter un fils au noeud père et renvoyer un pointeur sur le père
function concat_pere_fils(pere, fils) {
    pere.noeud.fils = fils.noeud;
    return pere;
}

// Fonction pour ajouter un frère au noeud père et renvoyer un pointeur sur le père
function concat_pere_frere(pere, frere) {
    pere.noeud.frere = frere.noeud;
    return pere;
}

// Fonction pour supprimer un arbre et libérer la mémoire occupée
function detruire_arbre(a) {
    if (a.noeud !== null) {
        a.noeud.fils = null;
        a.noeud.frere = null;
    }
    return arbre_vide();
}

// Fonction pour afficher l'arbre a sur la sortie standard
function affiche_arbre(a) {
    var canvas = document.getElementById("display-tree");
    const ctx = canvas.getContext('2d');
    affiche_arbre_bis(ctx, a.noeud, canvas.width/2, 5);
}


function affiche_arbre_bis(ctx, a, x, y) {
    let dx = x/2;
    const dy = 30;

    draw_circle(ctx, x, y, 10, 'cyan');

    if(a != null) {
        name_nature_node = getNodeNature(parseInt(a.nature))
        draw_text(ctx, x, y, name_nature_node);
        draw_text(ctx, x, y + 10, a.valeur);
    
        if (a.fils !== null) {
            affiche_arbre_bis(ctx, a.fils, x - dx, y + dy);
        } else {
            draw_text(ctx, x - dx, y + dy, "NULL");
        }
    
        if (a.frere !== null) {
            affiche_arbre_bis(ctx, a.frere, x + dx, y + dy);
        } else {
            draw_text(ctx, x + dx, y + dy, "NULL");
        }
    }
    else{
        draw_text(ctx, x, y, "NULL");
    }

}

function draw_circle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color; // Set the circle stroke color
    ctx.lineWidth = 2; // Set the circle border width
    ctx.fillStyle = 'lightblue'; // Set the circle fill color
    ctx.stroke(); // Draw the circle border
    ctx.fill(); // Fill the circle with color
}

function draw_text(ctx, x, y, text) {
    ctx.font = '8px Arial'; // Set the font size and type
    ctx.fillStyle = 'black'; // Set the text color
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.textBaseline = 'middle'; // Center the text vertically
    ctx.fillText(text, x, y); // Draw the text at the center
}

function load_tree(path) {
    let data = FS.readFile(path);
    data = String.fromCharCode(...data);
    // the tree is the first in the file following by tables separated by ';'
    // refer to src/compilation/sauvegarde.c for more details
    let saved_tree = data.split(';')[0].split(" ");

    console.log(saved_tree);
    let res = load_nodes(1);
    console.error("debugg, size of array read: "+res[0]);
    let tree = new Arbre(res[1]);
    console.log(tree)
    affiche_arbre(tree);


    function load_nodes(index) {
        let nature = saved_tree[index];
        index++;
        let value = saved_tree[index];
        index++;
        let node = new Noeud(nature, value, null, null);

        if(saved_tree[index] == "N"){
            console.log("N")
            return [index+1, null];
        }

        if(saved_tree[index] == "S"){ // left son
            console.log("S")
            let res = load_nodes(index+1);
            index = res[0]
            node.fils = res[1]
        }
        if(saved_tree[index] == "B"){ // == "B" brother
            console.log("B")
            let res = load_nodes(index+1);
            index = res[0]
            node.frere = res[1]
        }

        return [index, node];
    }
}


