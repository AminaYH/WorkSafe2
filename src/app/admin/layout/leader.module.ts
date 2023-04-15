import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppMenuitemComponent } from 'src/app/admin/layout/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { AppConfigModule } from 'src/app/employee/layout/config/config.module';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LeaderComponent } from "./leader.component";
import { AppFooterComponent } from 'src/app/employee/layout/footer/app.footer.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MenuComponent,
      AppFooterComponent,
    SidebarComponent,
    TopbarComponent,
      AppMenuitemComponent,
      LeaderComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      PrimeNgUIComponentModule,
      RouterModule,
      AppConfigModule,
      FormsModule,
  ],
    exports: [ LeaderComponent ]
})
export class LeaderModule { }
