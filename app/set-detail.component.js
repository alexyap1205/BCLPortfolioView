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
 * Created by alexy on 8/11/2016.
 */
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var portfolio_service_1 = require('./portfolio.service');
var SetDetailComponent = (function () {
    function SetDetailComponent(portfolioService, config) {
        this.portfolioService = portfolioService;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = true;
    }
    SetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService.getItem(this.id)
            .then(function (set) {
            _this.set = set;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SetDetailComponent.prototype, "id", void 0);
    SetDetailComponent = __decorate([
        core_1.Component({
            selector: 'set-detail',
            templateUrl: 'app/set-detail.component.html',
            styleUrls: ['css/bootstrap.min.css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,700,400italic', 'css/font-awesome.min.css',
                'css/owl.carousel.css', 'css/owl.theme.css', 'css/style.default.css', 'css/custom.css']
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService, ng_bootstrap_1.NgbCarouselConfig])
    ], SetDetailComponent);
    return SetDetailComponent;
}());
exports.SetDetailComponent = SetDetailComponent;
//# sourceMappingURL=set-detail.component.js.map