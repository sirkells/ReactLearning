class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        
        this.carToRepair = [];
    }
    addCar(car) {
        this.carToRepair.push(car);
    }
}

module.exports = CarService;