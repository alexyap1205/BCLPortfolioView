/**
 * Created by alexy on 3/11/2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FeaturedComponent} from './featured-set.component';
import {SetDetailComponent} from './set-detail.component';
import {ModalDetailComponent} from './modal-detail.component';
import {ReservationComponent} from './reservation.component';

const appRoutes: Routes = [
    {
        path: 'featured',
        component: FeaturedComponent
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    {
        path: 'detail/:id',
        component: SetDetailComponent
    },
    {
        path: 'modal-detail/:id',
        component: ModalDetailComponent
    },
    {
        path: 'reservation',
        component: ReservationComponent
    },
    {
        path: '',
        redirectTo: '/featured',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
