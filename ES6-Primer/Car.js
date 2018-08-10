class Car {
    constructor(brand="Benz", model="CLK", year= 2009) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayCarInfo() {
        console.log(this.brand + ' ' + this.model + ' ' + this.year);
    }
}


module.exports = Car;