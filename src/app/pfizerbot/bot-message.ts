import { MeetingRoom }  from './meeting-room';
import { Article }      from './article';

export class BotMessage {
  type: number;
  author: string;
  text: string;
  archive: boolean;
  meetingRooms: MeetingRoom[];
  articles: Article[];

  constructor(type:number, author:string, text:string = '', archive:boolean = false) {
      this.type = type;
      this.author = author;
      this.text = text;
      this.archive = archive;
  }
}
