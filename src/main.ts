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
  { path: 'MarvelComics/:CharacterName', component: MarvelHeroListItemComponent },
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
]

bootstrapApplication(AppComponent,{ providers:[provideRouter(routes)]})
.then(r=>console.log('successful'));
