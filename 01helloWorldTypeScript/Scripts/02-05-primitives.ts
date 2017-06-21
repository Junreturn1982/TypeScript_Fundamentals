module demo_02_05 {
    // any
    let data: any;
    let info;
    let doSomething: any = function(arg) {
        return arg;
    }
    let x = doSomething(5);

    // primitives
    let age: number = 21;
    let score: number = 34.56;
    let rating = 99.99;

    let hasData: boolean = true;
    let isReady = true;
    let isBald = function () {return 'yes'};
    let hasHair = !!isBald();

    let firstName = 'John';
    let lastName = 'Papa';
    
    // string array
    function getArrayLength(x: string[]) {
        let len: number = x.length;
        return len;
    }
    var names: string[] = ['John', 'Dan', 'Paul'];
    let firstPerson = names[0];
    console.log(getArrayLength(names));

    // null
    let guitarSales: any = null;
    let animal = null;
    let orderDate: Date = null;

    // undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}