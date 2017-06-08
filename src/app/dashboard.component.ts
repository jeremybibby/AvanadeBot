import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as _ from 'lodash';

import { DropdownValue, DropdownComponent } from './util/dropdown.component';
import { GccAlert } from './gcc/gcc-alert';
import { GccAlertService } from './gcc/gcc-alert.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent { 
    gccAlerts: GccAlert[] = [];
    dropdownValues: DropdownValue[] = [
        {
            value: '1',
            label: 'Critical'
        },
        {
            value: '2',
            label: 'High'
        },
        {
            value: '3',
            label: 'Medium'
        },
        {
            value: '4',
            label: 'Low'
        },
        {
            value: '5',
            label: 'Cosmetic'
        }
    ];
    severityFilter: number = 2; // only critical and high priority

    public isShrinkNav: boolean = false;

    constructor(private gccAlertService: GccAlertService, @Inject(DOCUMENT) private document: Document) {}

    getTopAlerts(): void {
        this.gccAlertService.getGccAlerts()
            .then(gccAlerts => this.gccAlerts = _.filter(gccAlerts, a => a.severity <= this.severityFilter));
    }

    setSeverityFilter(severityFilter: number): void {
        this.severityFilter = severityFilter;
        this.getTopAlerts();
    }

    ngOnInit(): void {
        this.getTopAlerts();
    }

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