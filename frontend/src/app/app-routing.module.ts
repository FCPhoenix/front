import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { CookieComponent } from './cookie/cookie.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'tos', component: TosComponent },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
