const Car = require('./Car');
const CarService = require('./services/CarService')

const car1 = new Car("Toyota", "Camry", 2011);
const car2 = new Car("Honda", "Accord", 2015);
const car3 = new Car();
car1.displayCarInfo();
car2.displayCarInfo();
car3.displayCarInfo();
const carService = new CarService("Supercars", "Nigeria");

carService.addCar(car1)
carService.addCar(car2)
carService.addCar(car3)
