import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MessageService {

    messages: Message[] = [];

    getMessages(): Observable<Message[]> {
        return of(this.messages);
    }

    addMessage(message: string, type: string) {
        this.messages.push({
            'type': (type) ? type : 'success',
            'text': (message)
        });
    }

    clearMessages(): Observable<Message[]> {
        this.messages = [];
        return of(this.messages);
    }

    deleteMessage(index: number): Observable<Message[]> {
        if (index > -1) {
            this.messages.splice(index, 1);
        }
        return of(this.messages);
    }
}
