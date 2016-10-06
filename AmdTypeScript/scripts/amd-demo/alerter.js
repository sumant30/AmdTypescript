define(["require", "exports", './dataservice'], function (require, exports, ds) {
    "use strict";
    var dataService = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = 'Sumant';
        }
        Alerter.prototype.callMessage = function () {
            dataService.showMessage(this.name);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map