import { inject, Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // constructor(private swPush: SwPush) { }

  private swPush: any = inject(SwPush)

  sendMessage(message: string): void {
    this.swPush.messages.next(message);
  }


}