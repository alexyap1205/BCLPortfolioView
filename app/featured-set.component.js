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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var portfolio_service_1 = require('./portfolio.service');
var modal_detail_component_1 = require('./modal-detail.component');
var FeaturedComponent = (function () {
    function FeaturedComponent(portfolioService, router, modalService) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.modalService = modalService;
        this.sets = [];
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService.getFeatured()
            .then(function (sets) {
            _this.sets = sets;
            if (sets.length == 9) {
                _this.set1 = sets[0];
                _this.set2 = sets[1];
                _this.set3 = sets[2];
                _this.set4 = sets[3];
                _this.set5 = sets[4];
                _this.set6 = sets[5];
                _this.set7 = sets[6];
                _this.set8 = sets[7];
                _this.set9 = sets[8];
            }
        });
    };
    FeaturedComponent.prototype.open = function (event, folder) {
        event.preventDefault();
        var paths = folder.split('/');
        var id = paths[1];
        var modalRef = this.modalService.open(modal_detail_component_1.ModalDetailComponent, { size: 'lg' });
        modalRef.componentInstance.id = id;
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'featured',
            templateUrl: 'app/featured-set.component.html'
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService, router_1.Router, ng_bootstrap_1.NgbModal])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=featured-set.component.js.map