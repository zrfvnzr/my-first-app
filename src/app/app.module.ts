import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeSelectorComponent } from './server/attributeSelector.component';
import { ServerComponent } from './server/server.component';
import { ClassSelectorComponent } from './server/classSelector.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
