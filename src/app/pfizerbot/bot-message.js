"use strict";
var BotMessage = (function () {
    function BotMessage(type, author, text, archive) {
        if (text === void 0) { text = ''; }
        if (archive === void 0) { archive = false; }
        this.type = type;
        this.author = author;
        this.text = text;
        this.archive = archive;
    }
    return BotMessage;
}());
exports.BotMessage = BotMessage;
//# sourceMappingURL=bot-message.js.map