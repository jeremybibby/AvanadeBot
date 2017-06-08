import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PfizerbotService } from '../pfizerbot/pfizerbot.service';
import { BotMessage } from '../pfizerbot/bot-message';
import { MeetingRoom } from '../pfizerbot/meeting-room';

@Component({
  selector: 'my-get-support',
  templateUrl: './get-support.component.html',
  styleUrls: [ './get-support.component.css' ]
})
export class GetSupportComponent  { 
  userName: string;
  newMessage: boolean;
  messages: BotMessage[];
  textInput: string;

  constructor(
    private pfizerbotService: PfizerbotService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
            .switchMap((params: Params) => this.setUserAndGetMessages(params['userName'] || 'user'))
            .subscribe(messages => {
              this.messages = messages;
              this.newMessage = true;
            });
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();   
  }

  setUserAndGetMessages(userName: string): Promise<BotMessage[]> {
    this.userName = userName;
    return this.pfizerbotService.getMessagesForUser(userName);
  }

  send(): void {
    if (this.textInput == '') return;

    this.sendText(this.textInput);
    this.textInput = "";
  }

  sendText(text: string): void {
    let userMessage = new BotMessage(0, this.userName, text, false);
    this.messages.push(userMessage);
    this.pfizerbotService.sendMessage(userMessage.text, this.userName)
                          .then(res => this.addMessageAndOptions(res));
  }

  addMessageAndOptions(response: BotMessage) {
    this.messages.push(response);
    this.newMessage = true;
  }

  openArticle(url: string): void {
    window.open(url);
  }

  scrollToBottom(): void {
    if (this.newMessage) {
      let ele = document.getElementsByClassName('chat-messages-box');
      ele[0].scrollTop = ele[0].scrollHeight;
      this.newMessage = false;
    }
  }
}
