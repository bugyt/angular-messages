import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    deleteMessage(index: number): void {
        this.messageService.deleteMessage(index);
    }


    clearMessages() {
        this.messageService.clearMessages();
    }



    constructor(public messageService: MessageService) { }

    ngOnInit() {
    }

}
