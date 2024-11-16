import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker'
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  // swpush: SwPush = inject(SwPush)
  constructor(private communicationService: CommunicationService) { }

  sendMessage(): void {
    this.communicationService.sendMessage('Hello from Angular!');
  }

}
