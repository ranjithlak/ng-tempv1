import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from './login-list/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './login-list/_helpers/error.interceptor';
import { fakeBackendProvider } from './login-list/_helpers/fake-backend';



@NgModule({
  declarations: [
    AppComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    
    
  ],
   providers: [
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

     // provider used to create fake backend
     fakeBackendProvider
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
