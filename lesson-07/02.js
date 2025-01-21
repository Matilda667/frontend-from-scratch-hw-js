/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // your code
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false

function isNumeric(str) {
  // Удаляем пробелы в начале и конце строки
  str = str.trim();
  
  // Проверяем, является ли строка пустой
  if (str === "") {
    return false;
  }
  
  // Используем isFinite для проверки, является ли значение числом
  return !isNaN(str) && isFinite(str);
}

// Тестирование функции
console.log(isNumeric("123"));      // Ожидаемый результат: true
console.log(isNumeric("12.3"));     // Ожидаемый результат: true
console.log(isNumeric("123abc"));   // Ожидаемый результат: false
console.log(isNumeric("abc"));      // Ожидаемый результат: false
console.log(isNumeric(" "));        // Ожидаемый результат: false
