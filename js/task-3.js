const findLongestWord = function(string) {
    // твой код
    let word = string.split(' ');
    let maxWord = 0;
    let longestWord;

    for (const wordLength of word) {
        const maxLength = wordLength.length;
        if (maxWord < maxLength) {
            maxWord = maxLength;
            longestWord = wordLength;
        }
    }
    return longestWord;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
