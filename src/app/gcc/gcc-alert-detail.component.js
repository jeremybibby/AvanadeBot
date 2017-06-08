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
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var gcc_alert_1 = require("./gcc-alert");
var gcc_alert_service_1 = require("./gcc-alert.service");
var GccAlertDetailComponent = (function () {
    function GccAlertDetailComponent(gccAlertService, route, location) {
        this.gccAlertService = gccAlertService;
        this.route = route;
        this.location = location;
    }
    GccAlertDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.gccAlertService.getGccAlert(+params['id']); })
            .subscribe(function (gccAlert) { return _this.gccAlert = gccAlert; });
    };
    GccAlertDetailComponent.prototype.save = function () {
        var _this = this;
        this.gccAlertService.update(this.gccAlert)
            .then(function () { return _this.goBack(); });
    };
    GccAlertDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return GccAlertDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", gcc_alert_1.GccAlert)
], GccAlertDetailComponent.prototype, "gccAlert", void 0);
GccAlertDetailComponent = __decorate([
    core_1.Component({
        selector: 'gcc-alert-detail',
        templateUrl: './gcc-alert-detail.component.html',
        styleUrls: ['./gcc-alert-detail.component.css']
    }),
    __metadata("design:paramtypes", [gcc_alert_service_1.GccAlertService,
        router_1.ActivatedRoute,
        common_1.Location])
], GccAlertDetailComponent);
exports.GccAlertDetailComponent = GccAlertDetailComponent;
//# sourceMappingURL=gcc-alert-detail.component.js.map