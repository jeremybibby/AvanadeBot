import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { BsDropdownModule } from 'ng2-bootstrap';

export class DropdownValue {
    value: string;
    label: string;

    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;
    }
}

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: [ './dropdown.component.css' ]
})
export class DropdownComponent {
    @Input()
    values: DropdownValue[];

    @Output()
    select: EventEmitter<any>;

    constructor() {
        this.select = new EventEmitter();
    }

    selectItem(value: string) {
        this.select.emit(value);
    }
}