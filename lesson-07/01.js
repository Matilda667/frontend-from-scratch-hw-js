/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    // Разделяем строку на слова
    const words = str.split(' ');
    // Создаем массив для хранения преобразованных слов
    const capitalizedWords = [];

    // Проходим по каждому слову
    for (let i = 0; i < words.length; i++) {
        // Получаем текущее слово
        const word = words[i];
        // Если слово не пустое, преобразуем его
        if (word) {
            // Делаем первую букву заглавной и добавляем оставшуюся часть слова
            const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            // Добавляем преобразованное слово в массив
            capitalizedWords.push(capitalizedWord);
        } else {
            // Если слово пустое, просто добавляем его в массив
            capitalizedWords.push(word);
        }
    }

    // Объединяем массив обратно в строку и возвращаем результат
    return capitalizedWords.join(' ');
}

// Пример использования
console.log(capitalizeWords("hello world from javascript")); // "Hello World From JavaScript"