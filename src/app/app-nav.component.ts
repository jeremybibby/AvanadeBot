import { Component, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { PhoneModalComponent } from './demo/phone-modal.component';

@Component({
    selector: 'my-app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: [ './app-nav.component.css' ]
})
export class AppNavComponent {
    @ViewChild(PhoneModalComponent)
    public readonly modal: PhoneModalComponent;

    @Input()
    isShrinkNav : boolean = false;

    isAdminMenuVisible: boolean = false;

    toggleAdminMenu(): void {
        if (!this.isAdminMenuVisible) {
            this.isAdminMenuVisible = true;
        } else {
            this.hideAdminMenu();
        }
    }

    hideAdminMenu(): void {
        this.isAdminMenuVisible = false;
    }
}