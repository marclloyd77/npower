import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component( {
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
} )
export class ModalComponent implements OnInit {

    showModal: boolean;
    @Input() options: any; // TODO modal interface
    @ViewChild( 'modal' ) modal;

    constructor() {
    }

    ngOnInit() {
        /**
         * Close modal using esc
         */
        window.addEventListener( 'keydown', ( e ) => {
            if ( e.code === 'Escape' ) {
                this.closeModal();
            }
        } );
    }

    openModal() {
        this.showModal = true;
        this.modal.nativeElement.focus();
    }

    closeModal() {
        this.showModal = false;
    }

}
