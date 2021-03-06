import { Injectable }       from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { BotMessage }       from './bot-message';
import { MeetingRoom }      from './meeting-room';
import { Article }          from './article';

@Injectable()
export class PfizerbotService {

    getMessagesForUser(userName: string): Promise<BotMessage[]> {
	    let messages:Array<BotMessage> = [];

        if (userName === 'Elisa') {
            messages = [
                new BotMessage(0, "PfizerBot", `Hi ${userName}, I noticed that you have an upcoming meeting booked for the Main Boardroom. 
                        I wanted to let you know that we have detected audio/video issues with the hardware in that meeting room.`, true),
                new BotMessage(0, "PfizerBot", `Please reply to this message or visit the BT On Demand portal for further assistance.`, true)
            ];

            let articlesMessage = new BotMessage(0, "PfizerBot", `I have included some knowledge base articles below to help you troubleshoot the issue.
                                    Please let me know if you have any additional questions.`, false);

            articlesMessage.articles = [
                new Article("Troubleshooting Projector Issues", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ligula nisi. Praesent nec ante 
                    augue. Suspendisse potenti. In hac habitasse platea dictumst. Integer imperdiet sem eget urna blandit, nec viverra risus lobortis. Praesent 
                    quis purus est. Integer porta eu sem et pulvinar. Nunc sed nulla maximus, pellentesque sapien ut, ultrices ipsum.`, "https://www.google.com"),
                new Article("Conference Room Audio", `Vivamus ipsum purus, tristique ut dolor congue, pellentesque vulputate urna. Pellentesque et libero 
                    auctor, feugiat lectus eget, venenatis mauris. Maecenas lorem ante, faucibus at ex eget, ornare eleifend lectus. Suspendisse euismod nunc 
                    vitae elit mollis pellentesque. Vivamus finibus condimentum metus, et suscipit turpis sollicitudin a.`, "https://www.google.com"),
                new Article("Conference Room Screen Sharing", `Nullam neque ante, aliquam at congue quis, rutrum eu sapien. Duis scelerisque felis non lorem 
                    varius vehicula. Pellentesque tellus metus, viverra eu eros eu, tincidunt vestibulum quam. Sed et pretium libero. Fusce quam urna, varius 
                    quis nulla eu, gravida finibus risus. Duis eget lacus augue. Mauris accumsan placerat facilisis. Nulla facilisi.`, "https://www.google.com")
            ];

            messages.push(articlesMessage);
        } else {
            messages.push(new BotMessage(0, "PfizerBot", `Hi, how can I be of assistance?`, false));
        }

        return new Promise((resolve, reject) => {
            resolve(messages);
        });
    }
    
    sendMessage(message: string, author: string): Promise<BotMessage> {
        let response = new BotMessage(0, "PfizerBot");
        let m = message.toLowerCase();

        if (m.includes("fix") || m.includes("meeting") || m.includes("conference") || m.includes("projector") || m.includes("room")) {
            response.text = `Please confirm the meeting room below:`;
            response.meetingRooms = [
                new MeetingRoom(4, "Raptors"),
                new MeetingRoom(8, "Blue Jays"),
                new MeetingRoom(16, "Maple Leafs")
            ];
        } else if (m.includes("fijar") && (m.includes("reunión") || m.includes("reunion") || m.includes("conferencia") || m.includes("proyector") || m.includes("sala"))) {
            response.text = `Por favor confirme la sala de reuniones a continuación:`;
            response.meetingRooms = [
                new MeetingRoom(4, "Raptors"),
                new MeetingRoom(8, "Blue Jays"),
                new MeetingRoom(16, "Maple Leafs")
            ];
        } else if (message.startsWith("MeetingRoom")) {
            response.text = `I’ve opened a ticket to fix the projector in Meeting Room: "${message}". 
            I will perform maintenance checks before creating an IT ticket.`;
        } else if (m.includes("hola")) {
            response.text = `Hola ${author}!`;
        } else if (m.includes("hello") || m.includes("hi") || m.includes("hey")) {
            response.text = `Hello ${author}! Describe what I can help you with today.`;
        } else {
            response.text = `I'm sorry, ${author}, I don't understand that command`;
        }

        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
}
