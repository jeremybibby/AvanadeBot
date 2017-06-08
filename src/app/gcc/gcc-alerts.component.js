"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gcc_alert_service_1 = require("./gcc-alert.service");
var GccAlertsComponent = (function () {
    function GccAlertsComponent(router, gccAlertService) {
        this.router = router;
        this.gccAlertService = gccAlertService;
        this.title = '****ALERTS TITLE****';
    }
    GccAlertsComponent.prototype.getGccAlerts = function () {
        var _this = this;
        this.gccAlertService.getGccAlerts()
            .then(function (gccAlerts) { return _this.gccAlerts = gccAlerts; });
    };
    GccAlertsComponent.prototype.ngOnInit = function () {
        this.getGccAlerts();
    };
    GccAlertsComponent.prototype.onSelect = function (gccAlert) {
        this.selectedGccAlert = gccAlert;
    };
    GccAlertsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedGccAlert.id]);
    };
    GccAlertsComponent.prototype.add = function (component, severity, description) {
        var _this = this;
        component = component.trim();
        description = description.trim();
        if (!component || !severity || !description) {
            return;
        }
        this.gccAlertService.create(severity, component, description)
            .then(function (gccAlert) {
            _this.gccAlerts.push(gccAlert);
            _this.selectedGccAlert = null;
        });
    };
    return GccAlertsComponent;
}());
GccAlertsComponent = __decorate([
    core_1.Component({
        selector: 'my-gcc-alerts',
        templateUrl: './gcc-alerts.component.html',
        styleUrls: ['./gcc-alerts.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        gcc_alert_service_1.GccAlertService])
], GccAlertsComponent);
exports.GccAlertsComponent = GccAlertsComponent;
//# sourceMappingURL=gcc-alerts.component.js.map