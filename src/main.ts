import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MarvelHeroListComponent} from "./app/marvel-hero-list/marvel-hero-list.component";
import {MarvelHeroListItemComponent} from "./app/marvel-hero-list-item/marvel-hero-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {importProvidersFrom} from "@angular/core";

const routes: Routes = [
  {path:'', redirectTo: '/MarvelComics', pathMatch: 'full'},
  { path: 'MarvelComics', component: MarvelHeroListComponent },
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1000}))
  ],
}).catch((err)=>console.error(err));
