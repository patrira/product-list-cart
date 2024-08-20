import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { DessertComponent } from './components/desert/dessert.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    DessertComponent,
    ConfirmOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
