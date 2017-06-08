import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GccAlert } from './gcc-alert';
import { GccAlertService } from './gcc-alert.service';

@Component({
  selector: 'my-gcc-alerts',
  templateUrl: './gcc-alerts.component.html',
  styleUrls: [ './gcc-alerts.component.css' ]
})
export class GccAlertsComponent  { 
  title = '****ALERTS TITLE****';
  gccAlerts: GccAlert[];
  selectedGccAlert: GccAlert;

  constructor(
    private router: Router,
    private gccAlertService: GccAlertService) {}

  getGccAlerts(): void {
    this.gccAlertService.getGccAlerts()
                        .then(gccAlerts => this.gccAlerts = gccAlerts);
  }

  ngOnInit(): void {
    this.getGccAlerts();
  }

  onSelect(gccAlert: GccAlert): void {
    this.selectedGccAlert = gccAlert;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGccAlert.id]);
  }

  add(component: string, severity: number, description: string): void {
    component = component.trim();
    description = description.trim();

    if (!component || !severity || !description) { return; }

    this.gccAlertService.create(severity, component, description)
                        .then(gccAlert => {
                          this.gccAlerts.push(gccAlert);
                          this.selectedGccAlert = null;
                        });
  }
}

