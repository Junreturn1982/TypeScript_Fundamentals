/// <reference path="../typings/toastr.d.ts"/>
/// <reference path="./04b5-dataservice.ts"/>
interface IAlerter{
    name: String;
    showMessage(): void;
}
let dataservice = new DataService();
class Alerter implements IAlerter {
    name = 'John';
    showMessage() {
        let msg = dataservice.getMessage();
        console.log(msg + ' ' + this.name);
        // toastr.info(msg)
    }
}