"use strict";
var router_1 = require('@angular/router');
var featured_set_component_1 = require('./featured-set.component');
var set_detail_component_1 = require('./set-detail.component');
var modal_detail_component_1 = require('./modal-detail.component');
var reservation_component_1 = require('./reservation.component');
var appRoutes = [
    {
        path: 'featured',
        component: featured_set_component_1.FeaturedComponent
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    {
        path: 'detail/:id',
        component: set_detail_component_1.SetDetailComponent
    },
    {
        path: 'modal-detail/:id',
        component: modal_detail_component_1.ModalDetailComponent
    },
    {
        path: 'reservation',
        component: reservation_component_1.ReservationComponent
    },
    {
        path: '',
        redirectTo: '/featured',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map