import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleLineConverterComponent } from './single-line-converter/single-line-converter.component';
import { FileConverterComponent } from './file-converter/file-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLineConverterComponent,
    FileConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
