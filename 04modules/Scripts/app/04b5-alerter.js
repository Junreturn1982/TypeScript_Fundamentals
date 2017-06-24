/// <reference path="./04b5-dataservice.ts"/>
/// <reference path="./04-04-utils.ts" />
var Util = App.Utils;
let log = new Util.Logger(App.LoggerMode.Toastr);
let dataservice = new DataService();
class Alerter {
    constructor() {
        this.name = 'John';
    }
    showMessage() {
        let msg = dataservice.getMessage();
        console.log(msg + ' ' + this.name);
        log.write(msg);
        toastr.info(this.name);
    }
}
