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
var PhoneModalComponent = (function () {
    function PhoneModalComponent(router) {
        this.router = router;
        this.visible = false;
        this.visibleAnimate = false;
    }
    PhoneModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    PhoneModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    PhoneModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
            this.router.navigate(['/getSupport', 'Eliza']);
        }
    };
    return PhoneModalComponent;
}());
PhoneModalComponent = __decorate([
    core_1.Component({
        selector: 'phone-modal',
        templateUrl: './phone-modal.component.html',
        styleUrls: ['./phone-modal.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], PhoneModalComponent);
exports.PhoneModalComponent = PhoneModalComponent;
//# sourceMappingURL=phone-modal.component.js.map