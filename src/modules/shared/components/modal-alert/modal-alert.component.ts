import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'client-form',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent {
  @Input() titleText: string;
  @Input() contentText: string;
  @Input() confirmText: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit () {
    console.log('on init');
  }
}
