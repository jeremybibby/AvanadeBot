import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { GccAlert } from './gcc-alert';
import { GccAlertService } from './gcc-alert.service';

@Component({
    selector: 'gcc-alert-detail',
    templateUrl: './gcc-alert-detail.component.html',
    styleUrls: [ './gcc-alert-detail.component.css' ]
})
export class GccAlertDetailComponent implements OnInit{
    @Input() gccAlert: GccAlert;

    constructor(
        private gccAlertService: GccAlertService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.gccAlertService.getGccAlert(+params['id']))
            .subscribe(gccAlert => this.gccAlert = gccAlert);
    }

    save(): void {
        this.gccAlertService.update(this.gccAlert)
                            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}