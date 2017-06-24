/// <reference path="../typings/toastr.d.ts"/>
/// <reference path="./04b5-dataservice.ts"/>
let dataservice = new DataService();
class Alerter {
    constructor() {
        this.name = 'John';
    }
    showMessage() {
        let msg = dataservice.getMessage();
        console.log(msg + ' ' + this.name);
        // toastr.info(msg)
    }
}
