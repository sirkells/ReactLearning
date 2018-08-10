class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayCarInfo() {
        console.log(this.brand + ' ' + this.model + ' ' + this.year);
    }
}

const car1 = new Car("Toyota", "Camry", 2011);
car1.displayCarInfo();