import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { DashboardComponent }       from './dashboard.component';
import { GetSupportComponent }      from './support/get-support.component';
import { GccAlertsComponent }       from './gcc/gcc-alerts.component';
import { GccAlertDetailComponent }  from './gcc/gcc-alert-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'getSupport', component: GetSupportComponent },
  { path: 'getSupport/:userName', component: GetSupportComponent },
  { path: 'detail/:id', component: GccAlertDetailComponent },
  { path: 'alerts',     component: GccAlertsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}