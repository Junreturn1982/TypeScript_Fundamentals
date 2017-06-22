class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
class Auto {
    constructor(basePrice, engine, make, model) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    calculateTotal() {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }
    // addAccessories(new Accessory(), new Accessory(...))
    // rest parameters
    addAccessories(...accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList() {
        return this.accessoryList;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(value) {
        if (value <= 0)
            throw 'price must be >= 0';
        this._basePrice = value;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine.';
        this._engine = value;
    }
}
class Truck extends Auto {
    constructor(basePrice, engine, make, model, bedLength, fourByFour) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}
window.onload = function () {
    var truck = new Truck(40000, new Engine(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
    truck.engine.start((status, engineType) => {
        alert(engineType + ' was started');
    });
    console.log(truck.engine.engineType);
    console.log(truck.bedLength);
    console.log(truck.calculateTotal().toString());
};
