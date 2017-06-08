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
require("rxjs/add/operator/switchMap");
var pfizerbot_service_1 = require("../pfizerbot/pfizerbot.service");
var bot_message_1 = require("../pfizerbot/bot-message");
var GetSupportComponent = (function () {
    function GetSupportComponent(pfizerbotService, route) {
        this.pfizerbotService = pfizerbotService;
        this.route = route;
    }
    GetSupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.setUserAndGetMessages(params['userName'] || 'user'); })
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.newMessage = true;
        });
    };
    GetSupportComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GetSupportComponent.prototype.setUserAndGetMessages = function (userName) {
        this.userName = userName;
        return this.pfizerbotService.getMessagesForUser(userName);
    };
    GetSupportComponent.prototype.send = function () {
        if (this.textInput == '')
            return;
        this.sendText(this.textInput);
        this.textInput = "";
    };
    GetSupportComponent.prototype.sendText = function (text) {
        var _this = this;
        var userMessage = new bot_message_1.BotMessage(0, this.userName, text, false);
        this.messages.push(userMessage);
        this.pfizerbotService.sendMessage(userMessage.text, this.userName)
            .then(function (res) { return _this.addMessageAndOptions(res); });
    };
    GetSupportComponent.prototype.addMessageAndOptions = function (response) {
        this.messages.push(response);
        this.newMessage = true;
    };
    GetSupportComponent.prototype.openArticle = function (url) {
        window.open(url);
    };
    GetSupportComponent.prototype.scrollToBottom = function () {
        if (this.newMessage) {
            var ele = document.getElementsByClassName('chat-messages-box');
            ele[0].scrollTop = ele[0].scrollHeight;
            this.newMessage = false;
        }
    };
    return GetSupportComponent;
}());
GetSupportComponent = __decorate([
    core_1.Component({
        selector: 'my-get-support',
        templateUrl: './get-support.component.html',
        styleUrls: ['./get-support.component.css']
    }),
    __metadata("design:paramtypes", [pfizerbot_service_1.PfizerbotService,
        router_1.ActivatedRoute])
], GetSupportComponent);
exports.GetSupportComponent = GetSupportComponent;
//# sourceMappingURL=get-support.component.js.map