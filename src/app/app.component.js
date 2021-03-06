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
var phone_modal_component_1 = require("./demo/phone-modal.component");
var AppComponent = (function () {
    function AppComponent(document) {
        this.document = document;
        this.isShrinkNav = false;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        if (number > 20) {
            this.isShrinkNav = true;
        }
        else if (this.isShrinkNav && number < 20) {
            this.isShrinkNav = false;
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(phone_modal_component_1.PhoneModalComponent),
    __metadata("design:type", phone_modal_component_1.PhoneModalComponent)
], AppComponent.prototype, "modal", void 0);
__decorate([
    core_1.HostListener("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map