import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MarvelHeroListComponent} from "./app/marvel-hero-list/marvel-hero-list.component";
import {MarvelHeroListItemComponent} from "./app/marvel-hero-list-item/marvel-hero-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MatTableModule} from "@angular/material/table";

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

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
}).catch((err) => console.error(err));
