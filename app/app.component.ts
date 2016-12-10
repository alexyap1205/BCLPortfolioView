import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PortfolioService} from './portfolio.service';
import {DateService} from './dates.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ReservationComponent} from './reservation.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['css/bootstrap.min.css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,700,400italic', 'css/font-awesome.min.css',
    'css/owl.carousel.css', 'css/owl.theme.css', 'css/style.default.css', 'css/custom.css']
})
export class AppComponent {
    title = 'BCL Photography';

    constructor(private router: Router) {

    }

    onReserve(event)
    {
        event.preventDefault();
        this.router.navigate(['reservation'])
    }
}
