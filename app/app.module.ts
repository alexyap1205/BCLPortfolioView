import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import {FeaturedComponent} from './featured-set.component';
import {PortfolioService} from './portfolio.service';
import {DateService} from './dates.service';
import {SetDetailComponent} from './set-detail.component';
import {ModalDetailComponent} from './modal-detail.component';
import {ReservationComponent} from "./reservation.component";

import {routing} from './app.routing';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing, NgbModule.forRoot() ],
    declarations: [ AppComponent, FeaturedComponent, SetDetailComponent, ModalDetailComponent, ReservationComponent ],
    providers: [PortfolioService, DateService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
