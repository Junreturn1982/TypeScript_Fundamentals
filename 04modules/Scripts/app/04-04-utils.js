/// <reference path="../typings/toastr.d.ts" />
var App;
(function (App) {
    App.LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    };
    var Utils;
    (function (Utils) {
        class Logger {
            constructor(mode = App.LoggerMode.Console) {
                this.mode = mode;
                switch (this.mode) {
                    case App.LoggerMode.Console:
                        this.writer = (msg) => console.log(msg);
                        break;
                    case App.LoggerMode.Alert:
                        this.writer = (msg) => alert(msg);
                        break;
                    case App.LoggerMode.Toastr:
                        this.writer = (msg) => toastr.info(msg);
                        break;
                }
            }
            write(msg) {
                this.writer(msg);
            }
            ;
        }
        Utils.Logger = Logger;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
