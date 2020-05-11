import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AngularFireAuthModule } from 'angularfire2/auth'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD3XzWlvlSZRDvcZI8nhJoFa-E-OmIkpaw",
      authDomain: "user-service-example-c0251.firebaseapp.com",
      databaseURL: "https://user-service-example-c0251.firebaseio.com",
      projectId: "user-service-example-c0251",
      storageBucket: "user-service-example-c0251.appspot.com",
      messagingSenderId: "1018129627210",
      appId: "1:1018129627210:web:aa88e9edac53ec1cd48eb3",
      measurementId: "G-HM3557EM5Q"
    }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
