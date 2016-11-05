import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import {FeaturedComponent} from "./featured-set.component";
import {PortfolioService} from "./portfolio.service";

import {routing} from './app.routing';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, FeaturedComponent ],
    providers: [PortfolioService],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
