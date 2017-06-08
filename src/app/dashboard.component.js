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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var _ = require("lodash");
var gcc_alert_service_1 = require("./gcc/gcc-alert.service");
var DashboardComponent = (function () {
    function DashboardComponent(gccAlertService, document) {
        this.gccAlertService = gccAlertService;
        this.document = document;
        this.gccAlerts = [];
        this.dropdownValues = [
            {
                value: '1',
                label: 'Critical'
            },
            {
                value: '2',
                label: 'High'
            },
            {
                value: '3',
                label: 'Medium'
            },
            {
                value: '4',
                label: 'Low'
            },
            {
                value: '5',
                label: 'Cosmetic'
            }
        ];
        this.severityFilter = 2; // only critical and high priority
        this.isShrinkNav = false;
    }
    DashboardComponent.prototype.getTopAlerts = function () {
        var _this = this;
        this.gccAlertService.getGccAlerts()
            .then(function (gccAlerts) { return _this.gccAlerts = _.filter(gccAlerts, function (a) { return a.severity <= _this.severityFilter; }); });
    };
    DashboardComponent.prototype.setSeverityFilter = function (severityFilter) {
        this.severityFilter = severityFilter;
        this.getTopAlerts();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTopAlerts();
    };
    DashboardComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        if (number > 20) {
            this.isShrinkNav = true;
        }
        else if (this.isShrinkNav && number < 20) {
            this.isShrinkNav = false;
        }
    };
    return DashboardComponent;
}());
__decorate([
    core_1.HostListener("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardComponent.prototype, "onWindowScroll", null);
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [gcc_alert_service_1.GccAlertService, Document])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map