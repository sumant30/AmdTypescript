define(["require", "exports"], function (require, exports) {
    "use strict";
    var DataService = (function () {
        function DataService() {
            this.message = 'Welcome to the typescript world, ';
        }
        DataService.prototype.showMessage = function (x) {
            alert(this.message + ', ' + x);
        };
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=dataservice.js.map