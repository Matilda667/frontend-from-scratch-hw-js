/// Обработчик события клика по контейнеру питомцев
petShop.addEventListener('click', function (event) {
  if (event.target.classList.contains('pet')) {
    const petId = event.target.id;

    // Проверка, можно ли добавить питомца в корзину
    if (cart.length < 3) {
      cart.push(petId); // Добавляем питомца в корзину
      updateCartDisplay(); // Обновляем отображение корзины
      messageBox.textContent = ''; // Очищаем сообщение
    } else {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев'; // Выводим сообщение
    }
  }
});