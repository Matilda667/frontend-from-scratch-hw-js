/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements() { }

function findUniqueElements(array) { // исходный массив
    const uniqueElements = []; // создаем новый массив для уникальных элементов
    for (let i = 0; i < array.length; i++) { // итерируемся по массиву
        if (!uniqueElements.includes(array[i])) { // проверяем, содержится ли элемент в массиве уникальных элементов
            uniqueElements.push(array[i]); // если нет, добавляем его
        }
    }
    return uniqueElements; // возвращаем массив уникальных элементов
}

console.log(findUniqueElements([array])); // Выводит: [1, 2, 3, 4]