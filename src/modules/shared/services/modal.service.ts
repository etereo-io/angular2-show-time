// import { ClientModalContent } from './client-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable, Type, Component } from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class ModalService {

    constructor(private modalService: NgbModal) { }

    showModal(AnyModalComponent: Type<Component>, data: { [key:string]: any } = {}) {
        const modalRef = this.modalService.open(AnyModalComponent, { size: 'lg', backdrop: 'static' });
        
        _.forEach(data, (item, key) => {
          modalRef.componentInstance[key] = item;
        });
        // modalRef.componentInstance.client = client ? client: {};

        return modalRef.result;
    }
}