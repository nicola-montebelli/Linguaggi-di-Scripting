"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinaArray = ordinaArray;
function ordinaArray(lista) {
    if (lista == null)
        return [];
    let compareTo;
    if (lista.length > 0) {
        compareTo = lista[0].compareTo;
        return lista.sort(compareTo);
    }
    else {
        return [];
    }
}
