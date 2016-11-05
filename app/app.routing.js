"use strict";
var router_1 = require('@angular/router');
var featured_set_component_1 = require('./featured-set.component');
var appRoutes = [
    {
        path: 'featured',
        component: featured_set_component_1.FeaturedComponent
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    // {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    // },
    {
        path: '',
        redirectTo: '/featured',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map