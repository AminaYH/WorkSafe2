import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';


export class LoginModule { }
@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
      PrimeNgUIComponentModule
  ],
    declarations: [ChatComponent],
})
export class ChatModule { }
