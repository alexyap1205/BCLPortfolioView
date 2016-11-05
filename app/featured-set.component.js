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
/**
 * Created by alexy on 3/11/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var portfolio_service_1 = require('./portfolio.service');
var FeaturedComponent = (function () {
    function FeaturedComponent(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.sets = [];
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        // this.portfolioService.getFeatured()
        //     .then(sets => this.sets = sets.slice(1, 9));
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'featured',
            templateUrl: 'app/featured-set.component.html'
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService, router_1.Router])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=featured-set.component.js.map