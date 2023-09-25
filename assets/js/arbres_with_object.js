const type_noeud = {
    A_PROG: 0,
    A_CORPS: 1,
    A_LISTE_INSTRUCTION: 2,
    A_RETOURNE: 3,
    A_LISTE_PARAM: 4,
    A_INST_COND: 5,
    A_TANT_QUE: 6,
    A_AFFECTATION: 7,
    A_LISTE_INDICES: 8,
    A_IDF: 9,
    A_VARIABLE: 10,
    A_CSTE_ENTIERE: 11,
    A_CSTE_REEL: 12,
    A_CSTE_BOOLEEN: 13,
    A_CSTE_CARACTERE: 14,
    A_CSTE_CHAINE: 15,
    A_EXPRESSION_ARITHMETIQUE: 16,
    A_EXPRESSION_BOOLEENNE: 17,
    A_EXPRESSION_RELATIONNELLE: 18,
    A_PLUS: 19,
    A_MOINS: 20,
    A_MULT: 21,
    A_DIV: 22,
    A_MOD: 23,
    A_OU: 24,
    A_ET: 25,
    A_NON: 26,
    A_INF: 27,
    A_INF_EGAL: 28,
    A_SUP: 29,
    A_SUP_EGAL: 30,
    A_EGAL: 31,
    A_DIFFERENT: 32,
    A_LIRE: 33,
    A_ECRIRE: 34,
    A_APPEL_FCT: 35,
    A_APPEL_PROC: 36,
    A_ENTREE: 37,
    A_SORTIE: 38,
    A_LISTE_VARIABLES: 39
};

function getEnumKeyByValue(enumObj, value) {
    for (const key in enumObj) {
        if (enumObj[key] === value) {
            return key;
        }
    }
    return null;
}