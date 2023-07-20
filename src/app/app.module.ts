import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './employee/layout/app.layout.module';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { CustomerService } from './shared/service/customer.service';
import { EventService } from './shared/service/event.service';
import { IconService } from './shared/service/icon.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import { FormsModule } from '@angular/forms';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {AdminModule} from "./admin/admin.module";
import {EmployeeModule} from "./employee/employee.module";

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
  }
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,PrimeNgUIComponentModule,FormsModule,AdminRoutingModule,AdminModule,EmployeeModule,


        // translate i18n
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
        })
    ],
    exports: [FormsModule],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
         CustomerService, EventService, IconService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
