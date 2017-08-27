import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  //this ordering matters, in memory api didnt work with http module being below inmemorywebapimodule.
  //no mention of this in the tutorial....
  imports:      [ 
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRoutingModule
                ],
  declarations: [ 
                  AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent
                ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
