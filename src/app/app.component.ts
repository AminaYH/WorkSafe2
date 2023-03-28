import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    lang: string = 'en';

    subscription!: Subscription;
    constructor(private primengConfig: PrimeNGConfig, public translate: TranslateService,) {
        translate.addLangs(['en', 'th']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang() ?? null;
        let lang = browserLang?.match(/en|th/) ? browserLang : 'en';
        this.changeLang(lang);

        this.subscription = this.translate.stream('primeng').subscribe(data => {
            this.primengConfig.setTranslation(data);
        });
    }

    ngOnInit() {
        this.translate.setDefaultLang('en');
        this.primengConfig.ripple = true;
    }

    changeLang(lang: string) {
        this.translate.use(lang);
        this.translate.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
