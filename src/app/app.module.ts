import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgswitchComponent,
    NgifComponent,
    NgclassComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
