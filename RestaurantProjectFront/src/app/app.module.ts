import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagouvernoratComponent } from './components/gouvernorat/datagouvernorat/datagouvernorat.component';
import { CreategouvernoratComponent } from './components/gouvernorat/creategouvernorat/creategouvernorat.component';
import { DatavilleComponent } from './components/ville/dataville/dataville.component';
import { CreatevilleComponent } from './components/ville/createville/createville.component';
import { DatarestaurantComponent } from './components/restaurant/datarestaurant/datarestaurant.component';
import { CreaterestaurantComponent } from './components/restaurant/createrestaurant/createrestaurant.component';
import { DataplatComponent } from './components/plat/dataplat/dataplat.component';
import { CreateplatComponent } from './components/plat/createplat/createplat.component';
import { DatacategorieplatComponent } from './components/categorieplat/datacategorieplat/datacategorieplat.component';
import { CreatecategorieplatComponent } from './components/categorieplat/createcategorieplat/createcategorieplat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatagouvernoratComponent,
    CreategouvernoratComponent,
    DatavilleComponent,
    CreatevilleComponent,
    DatarestaurantComponent,
    CreaterestaurantComponent,
    DataplatComponent,
    CreateplatComponent,
    DatacategorieplatComponent,
    CreatecategorieplatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
