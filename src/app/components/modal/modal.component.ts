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
    @ViewChild( 'modalCloseButton' ) modalCloseButton: ElementRef;
    @ViewChild( 'overlay' ) overlay: ElementRef;

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
        /**
         * Prevent body scroll
         * @type {string}
         */
        document.getElementsByTagName( 'body' )[ 0 ].style.overflow = 'hidden';

        setTimeout( () => {
            /**
             * Focus on modal (close button)
             */
            this.modalCloseButton.nativeElement.focus();

            /**
             * Enter button closes modal
             */
            this.modalCloseButton.nativeElement.addEventListener( 'keydown', ( e ) => {
                if ( e.code === 'Enter' ) {
                    this.closeModal();
                }
            } );
        }, 0 );

        /**
         * Lock focus in modal
         */
        window.addEventListener( 'keydown', ( e ) => {
            if ( e.code === 'Tab' || e.code === 'ShiftLeft' ) {
                setTimeout( () => {
                    this.modalCloseButton.nativeElement.focus();
                }, 0 );
            }
        } );

        this.overlay.nativeElement.addEventListener( 'click', ( e ) => {
            if ( e.srcElement.className ) {
                this.closeModal();
            }
        } );
    }

    closeModal() {
        this.showModal = false;
        document.getElementsByTagName( 'body' )[ 0 ].removeAttribute( 'style' );
    }

}
