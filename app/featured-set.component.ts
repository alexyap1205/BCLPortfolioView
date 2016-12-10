/**
 * Created by alexy on 3/11/2016.
 */
import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Set } from './set';
import { PortfolioService } from './portfolio.service';
import {ModalDetailComponent} from './modal-detail.component';

@Component({
    selector: 'featured',
    templateUrl: 'app/featured-set.component.html'
})

export class FeaturedComponent implements OnInit {
    set1: Set;
    set2: Set;
    set3: Set;
    set4: Set;
    set5: Set;
    set6: Set;
    set7: Set;
    set8: Set;
    set9: Set;
    sets: Set[] = [];

    constructor(private portfolioService: PortfolioService, private router: Router, private modalService: NgbModal){

    }

    ngOnInit(): void{
        this.portfolioService.getFeatured()
            .then(sets => {
                this.sets = sets as Set[];
                if(sets.length == 9){
                    this.set1 = sets[0];
                    this.set2 = sets[1];
                    this.set3 = sets[2];
                    this.set4 = sets[3];
                    this.set5 = sets[4];
                    this.set6 = sets[5];
                    this.set7 = sets[6];
                    this.set8 = sets[7];
                    this.set9 = sets[8];
                }

            });
    }

    open(event, folder:string): void{
        event.preventDefault();
        let paths = folder.split('/');
        let id = paths[1];
        let modalRef = this.modalService.open(ModalDetailComponent, {size: 'lg'});
        modalRef.componentInstance.id = id;
    }
}
