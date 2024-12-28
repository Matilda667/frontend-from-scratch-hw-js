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
function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}
function findUniqueElements(array) {
        const uniqueElements = []; // Создаем новый массив для уникальных элементов

for (let i = 0; i < array.length; i++) {
    // Проверяем, есть ли элемент уже в массиве уникальных элементов
    if (!includesElement(uniqueElements, array[i])) {
        uniqueElements.push(array[i]); // Если нет, добавляем его
    }
}

return uniqueElements; // Возвращаем массив с уникальными элементами
}
// const arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(findUniqueElements(arr));