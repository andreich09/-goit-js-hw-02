const checkForSpam = function(message) {
    // твой код
    const normalizedMessage = message.toLowerCase();
    let spamWord = [ 'spam', 'sale' ];

    return normalizedMessage.includes(spamWord[0]) || normalizedMessage.includes(spamWord[1]);
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
