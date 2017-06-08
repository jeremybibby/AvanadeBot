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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var GccAlertService = (function () {
    function GccAlertService(http) {
        this.http = http;
        this.gccAlertsUrl = 'api/gcc_alerts';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    GccAlertService.prototype.getGccAlerts = function () {
        return this.http.get(this.gccAlertsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GccAlertService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GccAlertService.prototype.getGccAlert = function (id) {
        var url = this.gccAlertsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GccAlertService.prototype.update = function (gccAlert) {
        var url = this.gccAlertsUrl + "/" + gccAlert.id;
        return this.http
            .put(url, JSON.stringify(gccAlert), { headers: this.headers })
            .toPromise()
            .then(function () { return gccAlert; })
            .catch(this.handleError);
    };
    GccAlertService.prototype.create = function (severity, component, description) {
        return this.http
            .post(this.gccAlertsUrl, JSON.stringify({
            severity: severity,
            component: component,
            description: description
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return GccAlertService;
}());
GccAlertService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GccAlertService);
exports.GccAlertService = GccAlertService;
//# sourceMappingURL=gcc-alert.service.js.map