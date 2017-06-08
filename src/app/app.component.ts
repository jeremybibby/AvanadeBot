import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { PhoneModalComponent } from './demo/phone-modal.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    @ViewChild(PhoneModalComponent)
    public readonly modal: PhoneModalComponent;

    public isShrinkNav: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let number = this.document.body.scrollTop;
        if (number > 20) {
            this.isShrinkNav = true;
        } else if (this.isShrinkNav && number < 20) {
            this.isShrinkNav = false;
        }
    }
}