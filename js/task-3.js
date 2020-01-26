const findLongestWord = function(string) {
    // твой код
    let word = string.split(' ');
    let wordLength = 0;
    let longestWord;

    for (let i = 0; i < word.length; i += 1) {
        wordLength = word[1].length;
        if (word[i].length > wordLength) {
            longestWord = word[i];
            return longestWord;
        }
    }
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
