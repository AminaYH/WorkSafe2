import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
    styles: [`
:host ::ng-deep .pi-eye,
:host ::ng-deep .pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
    color: var(--primary-color) !important;
}
`]
})
export class ChatComponent {

}
