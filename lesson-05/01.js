/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    // Проверяем, существует ли указанный тип ресурса в объекте resources
    if (!(resource in this.resources)) {
      console.log("Invalid resource");
      return; // Завершаем выполнение метода, если ресурс не существует
    }

    // Добавляем указанное количество ресурса к текущему количеству
    this.resources[resource] += amount;
  }
}
// Примеры использования
// game.addResource('gold', 50); // Увеличивает количество золота до 300
// console.log(game.resources.gold); // 300

// game.addResource('lumber', 25); // Увеличивает количество древесины до 125
// console.log(game.resources.lumber); // 125

// game.addResource('stone', 10); // Выводит "Invalid resource"