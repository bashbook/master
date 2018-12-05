import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  //{ path: 'auth', loadChildren: () => System.import('./auth').then((comp: any) => comp.default) },
  //{ path: 'user', loadChildren: () => System.import('./job-seeker').then((comp: any) => comp.default) }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
