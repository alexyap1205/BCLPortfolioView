/**
 * Created by alexy on 3/11/2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FeaturedComponent} from './featured-set.component';

const appRoutes: Routes = [
    {
        path: 'featured',
        component: FeaturedComponent
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
