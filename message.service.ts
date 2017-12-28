import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    addMessage(message: string) {
        this.messages.push(message);
    }

    clearMessages() {
        this.messages = [];
    }

    deleteMessage(index: number) {
        if (index > -1) {
            this.messages.splice(index, 1);
        }
    }
}
