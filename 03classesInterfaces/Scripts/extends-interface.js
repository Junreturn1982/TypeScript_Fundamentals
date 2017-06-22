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
class CustomEngine {
    start(callback) {
        window.setTimeout(() => {
            callback(true, 'custom engine');
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, 'custom engine');
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
    constructor(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
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
    constructor(options) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}
window.onload = function () {
    var truck = new Truck({
        engine: new Engine(250, 'V8'),
        basePrice: 40000,
        state: 'Arizona',
        make: 'Ford',
        model: 'F-150',
        year: 2013,
        bedLength: 'Short bed',
        fourByFour: true
    });
    alert(truck.bedLength);
};
