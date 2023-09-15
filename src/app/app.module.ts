import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeSelectorComponent } from './server/attributeSelector.component';
import { ServerComponent } from './server/server.component';
import { ClassSelectorComponent } from './server/classSelector.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    MyFormComponent,
    AssignmentThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
