import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalOptions } from '../../interface/modalOptions';

@Component( {
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
} )
export class ModalComponent implements OnInit {

    showModal: boolean;
    private keyDownEventListeners;
    private clickEventListeners;
    @Input() options: ModalOptions;
    @ViewChild( 'modalCloseButton' ) modalCloseButton: ElementRef;
    @ViewChild( 'overlay' ) overlay: ElementRef;

    constructor() {
    }

    ngOnInit() {
        this.keyDownEventListeners = ( e ) => {
            if ( e.code === 'Escape' || e.code === 'Enter' ) {
                this.closeModal();
            } else if ( e.code === 'Tab' || e.code === 'ShiftLeft' ) {
                setTimeout( () => {
                    this.modalCloseButton.nativeElement.focus();
                }, 0 );
            }
        };

        this.clickEventListeners = ( e ) => {
            if ( e.srcElement.className ) {
                this.closeModal();
            }
        };
    }

    openModal() {
        this.showModal = true;

        /**
         * Prevent body scroll
         * @type {string}
         */
        document.getElementsByTagName( 'body' )[ 0 ].style.overflow = 'hidden';

        /**
         * Focus on modal (close button)
         */
        setTimeout( () => {
            this.modalCloseButton.nativeElement.focus();
        }, 0 );

        /**
         * Add event listeners for focus trap and keyboard controls
         */
        window.addEventListener( 'keydown', this.keyDownEventListeners );
        this.overlay.nativeElement.addEventListener( 'click', this.clickEventListeners );
    }

    closeModal() {

        /**
         * Remove event listeners
         */
        window.removeEventListener( 'keydown', this.keyDownEventListeners );
        this.overlay.nativeElement.removeEventListener( 'click', this.clickEventListeners );

        /**
         * Allow body scrolling
         */
        document.getElementsByTagName( 'body' )[ 0 ].removeAttribute( 'style' );

        this.showModal = false;
    }

}
