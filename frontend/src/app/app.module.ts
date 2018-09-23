import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieService } from 'ngx-cookie-service';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { CookieComponent } from './cookie/cookie.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TosComponent } from './tos/tos.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PageNotFoundComponent,
    CookieComponent,
    PrivacyComponent,
    TosComponent
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
