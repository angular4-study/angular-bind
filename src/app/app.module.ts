import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BindComponent} from './bind/bind.component';
import {TwobindComponent} from './twobind/twobind.component';
import {ResponsiveComponent} from './responsive/responsive.component';
import {PipeComponent} from './pipe/pipe.component';
import {MultiplePipe} from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    TwobindComponent,
    ResponsiveComponent,
    PipeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule // 响应式编程的模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
