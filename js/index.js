let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "Onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santa fe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
];

let from = +prompt("Введите минимальную стоимость:");
let up = +prompt("Введите максимальную стоимость:");

let affordableCars = cars.filter(car => car.price >= from && car.price <= up);//filters cars out according to max and min price, 

if (affordableCars.length === 0) {
  alert("Извините, нет подходящих автомобилей в данном ценовом диапазоне.");
} else {
  let carsList = "Доступные автомобили в выбранном ценовом диапазоне:\n";

  affordableCars.forEach(car => carsList += car.name + "\n"); //collects all cars that fit the price range

  let chosenCar = prompt(carsList + "Выберите автомобиль из списка выше:");
  let selectedCar = cars.find(car => car.name.toLowerCase() === chosenCar);// finds the selected car 
  if (selectedCar) {
    let confirmPayment = confirm(`Вы выбрали ${selectedCar.name}. Стоимость: ${selectedCar.price}$. Оплатить?`);
    if (confirmPayment) {
      let remainingAmount = selectedCar.price;
      let paymentAmount;
  
      while (remainingAmount > 0) {
        paymentAmount = +prompt(`Введите сумму для оплаты : ${remainingAmount}$:`);
  
        if (isNaN(paymentAmount)) {
          alert("Введено некорректное значение.");
        } else if (paymentAmount < remainingAmount) {
          remainingAmount -= paymentAmount;
          alert(`Недостаточно средств на счету. Не хватает ${remainingAmount}$.`);
        } else {
          let change = paymentAmount - selectedCar.price;
          if (change > 0) {
            alert(`Поздравляем с покупкой! Автомобиль ваш. Ваша сдача: ${change}$.`);
          } else {
            alert("Поздравляем с покупкой! Автомобиль ваш.");
          }
  
          // updates the background image according to the selected car
          let modifiedCarName = selectedCar.name.replace(/\s+/g, '_').toLowerCase();
          document.getElementById("carBackground").style.backgroundImage = `url(./img/${modifiedCarName}.jpg)`;
          break;          
        }
      }
    } else {
      alert("Сожалеем, что вы передумали.");
    }
  } else {
    alert("Выбранный автомобиль не найден в списке.Проверьте правильность ввода  и повторите попытку.");
  }
}