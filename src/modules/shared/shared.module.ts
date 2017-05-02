import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@etereo/http';
import { CorbelModule, CorbelAuthConnectorService } from '@etereo/corbel';
import { TranslateModule } from 'ng2-translate';
import { ModalService } from './services/modal.service';
import { ChatService } from './services/chat.service';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';


@NgModule({
  declarations: [
    ModalConfirmComponent,
    ModalAlertComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ModalService,
    ChatService
  ],
  exports: [
    TranslateModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    ModalConfirmComponent,
    ModalAlertComponent
  ]
})

export class SharedModule {
}