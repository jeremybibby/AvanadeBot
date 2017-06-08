"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var bot_message_1 = require("./bot-message");
var meeting_room_1 = require("./meeting-room");
var article_1 = require("./article");
var PfizerbotService = (function () {
    function PfizerbotService() {
    }
    PfizerbotService.prototype.getMessagesForUser = function (userName) {
        var messages = [];
        if (userName === 'Elisa') {
            messages = [
                new bot_message_1.BotMessage(0, "PfizerBot", "Hi " + userName + ", I noticed that you have an upcoming meeting booked for the Main Boardroom. \n                        I wanted to let you know that we have detected audio/video issues with the hardware in that meeting room.", true),
                new bot_message_1.BotMessage(0, "PfizerBot", "Please reply to this message or visit the BT On Demand portal for further assistance.", true)
            ];
            var articlesMessage = new bot_message_1.BotMessage(0, "PfizerBot", "I have included some knowledge base articles below to help you troubleshoot the issue.\n                                    Please let me know if you have any additional questions.", false);
            articlesMessage.articles = [
                new article_1.Article("Troubleshooting Projector Issues", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ligula nisi. Praesent nec ante \n                    augue. Suspendisse potenti. In hac habitasse platea dictumst. Integer imperdiet sem eget urna blandit, nec viverra risus lobortis. Praesent \n                    quis purus est. Integer porta eu sem et pulvinar. Nunc sed nulla maximus, pellentesque sapien ut, ultrices ipsum.", "https://www.google.com"),
                new article_1.Article("Conference Room Audio", "Vivamus ipsum purus, tristique ut dolor congue, pellentesque vulputate urna. Pellentesque et libero \n                    auctor, feugiat lectus eget, venenatis mauris. Maecenas lorem ante, faucibus at ex eget, ornare eleifend lectus. Suspendisse euismod nunc \n                    vitae elit mollis pellentesque. Vivamus finibus condimentum metus, et suscipit turpis sollicitudin a.", "https://www.google.com"),
                new article_1.Article("Conference Room Screen Sharing", "Nullam neque ante, aliquam at congue quis, rutrum eu sapien. Duis scelerisque felis non lorem \n                    varius vehicula. Pellentesque tellus metus, viverra eu eros eu, tincidunt vestibulum quam. Sed et pretium libero. Fusce quam urna, varius \n                    quis nulla eu, gravida finibus risus. Duis eget lacus augue. Mauris accumsan placerat facilisis. Nulla facilisi.", "https://www.google.com")
            ];
            messages.push(articlesMessage);
        }
        else {
            messages.push(new bot_message_1.BotMessage(0, "PfizerBot", "Hi, how can I be of assistance?", false));
        }
        return new Promise(function (resolve, reject) {
            resolve(messages);
        });
    };
    PfizerbotService.prototype.sendMessage = function (message, author) {
        var response = new bot_message_1.BotMessage(0, "PfizerBot");
        var m = message.toLowerCase();
        if (m.includes("fix") && (m.includes("meeting") || m.includes("conference") || m.includes("projector") || m.includes("room"))) {
            response.text = "Please confirm the meeting room below:";
            response.meetingRooms = [
                new meeting_room_1.MeetingRoom(6, "MeetingRoom1"),
                new meeting_room_1.MeetingRoom(8, "MeetingRoom2"),
                new meeting_room_1.MeetingRoom(12, "MeetingRoom3")
            ];
        }
        else if (m.includes("fijar") && (m.includes("reunión") || m.includes("reunion") || m.includes("conferencia") || m.includes("proyector") || m.includes("sala"))) {
            response.text = "Por favor confirme la sala de reuniones a continuaci\u00F3n:";
            response.meetingRooms = [
                new meeting_room_1.MeetingRoom(6, "MeetingRoom1"),
                new meeting_room_1.MeetingRoom(8, "MeetingRoom2"),
                new meeting_room_1.MeetingRoom(12, "MeetingRoom3")
            ];
        }
        else if (message.startsWith("MeetingRoom")) {
            response.text = "I\u2019ve opened a ticket to fix the projector in Meeting Room: \"" + message + "\". \n            I will perform maintenance checks before creating an IT ticket.";
        }
        else if (m.includes("hola")) {
            response.text = "Hola " + author + "!";
        }
        else if (m.includes("hello") || m.includes("hi") || m.includes("hey")) {
            response.text = "Hello " + author + "! Describe what I can help you with today.";
        }
        else {
            response.text = "I'm sorry, " + author + ", I don't understand that command";
        }
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    return PfizerbotService;
}());
PfizerbotService = __decorate([
    core_1.Injectable()
], PfizerbotService);
exports.PfizerbotService = PfizerbotService;
//# sourceMappingURL=pfizerbot.service.js.map