import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { APP_ROUTERS } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCardComponent } from './restaurant-detail/shopping-card/shopping-card.component';
import { ShoppingCardService } from './restaurant-detail/shopping-card/shopping-card.service';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTERS)
  ],
  providers: [
    RestaurantesService, 
    ShoppingCardService, 
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
