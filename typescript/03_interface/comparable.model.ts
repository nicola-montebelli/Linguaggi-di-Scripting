
export interface Comparable {
    compareTo: (a: any, b: any) => number;
}



export function ordinaArray(lista: Comparable[]): Comparable[] {
    if (lista == null) return [];

    let compareTo: (a: any, b: any) => number;

    if (lista.length > 0) {
        compareTo = lista[0].compareTo;

        return lista.sort(compareTo);

    } else {
        return [];
    }

}
