import { Component } from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['css/bootstrap.min.css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,700,400italic', 'css/font-awesome.min.css',
    'css/owl.carousel.css', 'css/owl.theme.css', 'css/style.default.css', 'css/custom.css']
})
export class AppComponent {
    title = 'BCL Photography';
}
