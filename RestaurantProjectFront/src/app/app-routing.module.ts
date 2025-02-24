import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatavilleComponent } from './components/ville/dataville/dataville.component';
import { DatarestaurantComponent } from './components/restaurant/datarestaurant/datarestaurant.component';
import { DatacategorieplatComponent } from './components/categorieplat/datacategorieplat/datacategorieplat.component';
import { DataplatComponent } from './components/plat/dataplat/dataplat.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreatevilleComponent } from './components/ville/createville/createville.component';
import { CreaterestaurantComponent } from './components/restaurant/createrestaurant/createrestaurant.component';
import { CreateplatComponent } from './components/plat/createplat/createplat.component';
import { CreatecategorieplatComponent } from './components/categorieplat/createcategorieplat/createcategorieplat.component';

const routes: Routes = [
  { path: 'ville', component: DatavilleComponent },
  { path: 'addville', component: CreatevilleComponent },


  { path: 'restaurant', component: DatarestaurantComponent },
  { path: 'addrestaurant', component: CreaterestaurantComponent },

  { path: 'plat', component: DataplatComponent },
  { path: 'addplat', component: CreateplatComponent },

  { path: 'categorie', component: DatacategorieplatComponent },
  { path: 'addcategorie', component: CreatecategorieplatComponent },

  { path: 'chat', component: ChatComponent },
  
   
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  

 }
