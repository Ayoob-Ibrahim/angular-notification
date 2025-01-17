
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private swPush: SwPush) { }

  requestPermission(): void {
    this.swPush.requestSubscription({
      serverPublicKey: 'your-server-public-key'
    });
  }
}