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
var phone_modal_component_1 = require("./demo/phone-modal.component");
var AppNavComponent = (function () {
    function AppNavComponent() {
        this.isShrinkNav = false;
        this.isAdminMenuVisible = false;
    }
    AppNavComponent.prototype.toggleAdminMenu = function () {
        if (!this.isAdminMenuVisible) {
            this.isAdminMenuVisible = true;
        }
        else {
            this.hideAdminMenu();
        }
    };
    AppNavComponent.prototype.hideAdminMenu = function () {
        this.isAdminMenuVisible = false;
    };
    return AppNavComponent;
}());
__decorate([
    core_1.ViewChild(phone_modal_component_1.PhoneModalComponent),
    __metadata("design:type", phone_modal_component_1.PhoneModalComponent)
], AppNavComponent.prototype, "modal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AppNavComponent.prototype, "isShrinkNav", void 0);
AppNavComponent = __decorate([
    core_1.Component({
        selector: 'my-app-nav',
        templateUrl: './app-nav.component.html',
        styleUrls: ['./app-nav.component.css']
    })
], AppNavComponent);
exports.AppNavComponent = AppNavComponent;
//# sourceMappingURL=app-nav.component.js.map