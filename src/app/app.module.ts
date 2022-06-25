import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegionSelectComponent } from './region-select/region-select.component';
import { RegionSimpleComponent } from './region-select/region-simple/region-simple.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ForceItemComponent } from './region-select/force-item/force-item.component';
import { ForceStartComponent } from './region-select/region-simple/force-start/force-start.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegionSelectComponent,
    RegionSimpleComponent,
    RegionDetailComponent,
    ForceItemComponent,
    ForceStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
