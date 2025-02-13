/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
    return (l1 * l2)
}



const areaRettangolo = area(7, 5)

console.log(areaRettangolo)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.


/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (x, y) {
    if (x !== y) {
        return (x + y)

    }
    else {
        return ((x + y) * 3)

    }
}


const crazySumResult = crazySum(10, 10)

console.log(crazySumResult)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (x) {
    if (x > 19) {
        return Math.abs((x - 19) * 3)
    }
    else {
        return Math.abs(x - 19)
    }

}

const crazyDiffResult = crazyDiff(10)
console.log(crazyDiffResult)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
    if (n >= 20 && n <= 100) {
        return true
    } else if (n === 400) {
        return true
    } else {
        return false
    }
}

const boundaryResult = boundary(50)
console.log(boundaryResult)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (name) {
    if (name.startsWith("EPICODE")) {
        return name
    } else {
        return "EPICODE" + " " + name
    }
}

console.log(epify("EPICODE è un bel bootcamp"))
console.log(epify('Maddalena'))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (x) {
    if (x > 0) {
        (x % 3 === 0 || x % 7 === 0)
        return true
    } else {
        return false
    }
}
const check3and7Result = check3and7(8)
console.log(check3and7Result)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (Str) {
    return Str.split('')
        .reverse()
        .join('')
}
const stringaInvertita = reverseString("ciao, come stai?")
console.log(stringaInvertita)


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (Stringa1) {
    return Stringa1.split('  ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

console.log(upperFirst("buonasera a tutti"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (Str) {
    return Str.slice(1, Str.length - 1);
}

console.log(cutString("Buonasera"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
    const numberRandom = []
    for (let i = 0; i < n; i++) {
        numberRandom.push(Math.floor(Math.random() * 11))
    }
    return numberRandom
}
console.log(giveMeRandom(8))

