/**
 * Shuffle function based on algorithm of Fisher-Yates
 * 
 * This is an unbiased shuffle method. For more information,
 * see this: https://bost.ocks.org/mike/shuffle/compare.html
 * 
 * @param {<Array>}
 * 
 * @returns {<Array>}
 */

export function shuffle(array) {
    let copy = array.slice(0);
    let currentIndex = copy.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        temporaryValue = copy[currentIndex];
        copy[currentIndex] = copy[randomIndex];
        copy[randomIndex] = temporaryValue;
    }

    return copy;
}