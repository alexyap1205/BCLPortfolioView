/**
 * Created by alexy on 9/11/2016.
 */
import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {SetDetailComponent} from './set-detail.component';

@Component({
    selector: 'modal-detail',
    templateUrl: 'app/modal-detail.component.html'
})
export class ModalDetailComponent {
    @Input() id;

    constructor(public activeModal: NgbActiveModal) {

    }
}