/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let doubledString = ''; // Инициализируем пустую строку для хранения результата

    for (let i = 0; i < str.length; i++) {
        doubledString += str[i] + str[i]; // Удваиваем текущий символ и добавляем к результату
    }

    return doubledString; 
}

// Пример использования:
// console.log(doubleEachCharacter('hello')); // Вывод: 'hheelllloo'