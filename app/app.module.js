"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var featured_set_component_1 = require('./featured-set.component');
var portfolio_service_1 = require('./portfolio.service');
var dates_service_1 = require('./dates.service');
var set_detail_component_1 = require('./set-detail.component');
var modal_detail_component_1 = require('./modal-detail.component');
var reservation_component_1 = require("./reservation.component");
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing, ng_bootstrap_1.NgbModule.forRoot()],
            declarations: [app_component_1.AppComponent, featured_set_component_1.FeaturedComponent, set_detail_component_1.SetDetailComponent, modal_detail_component_1.ModalDetailComponent, reservation_component_1.ReservationComponent],
            providers: [portfolio_service_1.PortfolioService, dates_service_1.DateService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map