import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FindIdComponent } from './find-id/find-id.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: FindIdComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FindIdComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
