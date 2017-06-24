// <reference path="../typings/toastr.d.ts"/>
/// <reference path="./04b5-dataservice.ts"/>
/// <reference path="./04-04-utils.ts" />
interface IAlerter{
    name: String;
    showMessage(): void;
}
import Util = App.Utils;
let log: Util.ILogger = 
    new Util.Logger(App.LoggerMode.Toastr);

let dataservice = new DataService();

class Alerter implements IAlerter {
    name = 'John';
    showMessage() {
        let msg = dataservice.getMessage();
        console.log(msg + ' ' + this.name);
        log.write(msg);
        toastr.info(this.name)
    }
}