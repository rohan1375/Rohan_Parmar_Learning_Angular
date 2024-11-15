import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MarvelHeroListComponent} from "./app/marvel-hero-list/marvel-hero-list.component";
import {MarvelHeroListItemComponent} from "./app/marvel-hero-list-item/marvel-hero-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'', redirectTo: '/MarvelComics', pathMatch: 'full'},
  { path: 'MarvelComics', component: MarvelHeroListComponent },
  { path: 'MarvelComics/:id',
  loadComponent: ()=>
  import('./app/marvel-hero-list/marvel-hero-list.component').then(m => m.MarvelHeroListComponent)},
  {path:'modify-list-item',
  loadComponent: () =>
  import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**',
  loadComponent:() =>
  import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)},
]

bootstrapApplication(AppComponent,{ providers:[provideRouter(routes)]})
.then(r=>console.log('successful'));
