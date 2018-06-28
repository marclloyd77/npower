import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalOptions } from '../../interface/modalOptions';

@Component( {
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
} )
export class ModalComponent implements OnInit {

    showModal: boolean;
    private keyDownEvents;
    private clickEvents;
    private closeButtonEvents;
    @Input() options: ModalOptions;
    @ViewChild( 'modalCloseButton' ) modalCloseButton: ElementRef;
    @ViewChild( 'modalOpenButton' ) modalOpenButton: ElementRef;
    @ViewChild( 'overlay' ) overlay: ElementRef;

    constructor() {
    }

    ngOnInit() {
        this.keyDownEvents = ( e ) => {
            if ( e.code === 'Escape' ) {
                this.closeModal();
            } else if ( e.code === 'Tab' || e.code === 'ShiftLeft' ) {
                e.preventDefault();
                setTimeout( () => {
                    this.modalCloseButton.nativeElement.focus();
                }, 0 );
            }
        };

        this.clickEvents = ( e ) => {
            if ( e.srcElement.className ) {
                this.closeModal();
            }
        };

        this.closeButtonEvents = ( e ) => {
            if ( e.code === 'Enter' || e.code === 'Space' ) {
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
        window.addEventListener( 'keydown', this.keyDownEvents );
        this.modalCloseButton.nativeElement.addEventListener( 'keydown', this.closeButtonEvents );
        this.overlay.nativeElement.addEventListener( 'click', this.clickEvents );
    }

    closeModal() {

        /**
         * Remove event listeners
         */
        window.removeEventListener( 'keydown', this.keyDownEvents );
        this.overlay.nativeElement.removeEventListener( 'click', this.clickEvents );

        /**
         * Allow body scrolling
         */
        document.getElementsByTagName( 'body' )[ 0 ].removeAttribute( 'style' );

        setTimeout( () => {
            this.modalOpenButton.nativeElement.focus();
        }, 100 );


        this.showModal = false;
    }

}
