import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalOptions } from '../../interface/modalOptions';

@Component( {
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
} )
export class ModalComponent implements OnInit {

    showModal: boolean;
    @Input() options: ModalOptions;
    @ViewChild( 'modal' ) modal: ElementRef;

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
        document.getElementsByTagName( 'body' )[ 0 ].style.overflow = 'hidden';
    }

    closeModal() {
        this.showModal = false;
        document.getElementsByTagName( 'body' )[ 0 ].removeAttribute( 'style' );
    }

}
