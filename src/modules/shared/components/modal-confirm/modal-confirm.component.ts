import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'client-form',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  @Input() titleText: string;
  @Input() contentText: string;
  @Input() confirmText: string;
  @Input() declineText: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit () {
    console.log('on init');
  }
}
