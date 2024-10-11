import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MarvelHeroListComponent} from "./app/marvel-hero-list/marvel-hero-list.component";
import {MarvelHeroListItemComponent} from "./app/marvel-hero-list-item/marvel-hero-list-item.component";

const routes: Routes = [
  {path:'', redirectTo: '/MarvelComics', pathMatch: 'full'},
  { path: 'MarvelComics', component: MarvelHeroListComponent },
  { path: 'MarvelComics/:CharacterName', component: MarvelHeroListItemComponent },
]

bootstrapApplication(AppComponent,{ providers:[provideRouter(routes)]})
.then(r=>console.log('successful'));
