import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages: Message[] = [];

    getMessages(): void {
        this.messageService.getMessages()
            .subscribe(messages => this.messages = messages);
    }

    deleteMessage(index: number): void {
        this.cancelEvent(event);
        this.messageService.deleteMessage(index)
            .subscribe(messages => this.messages = messages);
    }

    clearMessages() {
        this.messageService.clearMessages()
            .subscribe(messages => this.messages = messages);
    }

    cancelEvent(event) {
        event.preventDefault();
    }
    constructor(public messageService: MessageService) { }

    ngOnInit() {
        this.getMessages();
    }

}
