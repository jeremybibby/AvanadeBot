import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { BsDropdownModule } from 'ng2-bootstrap';

import { AppNavComponent }          from './app-nav.component';
import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';

import { GetSupportComponent }      from './support/get-support.component';
import { GccAlertsComponent }       from './gcc/gcc-alerts.component';
import { GccAlertDetailComponent }  from './gcc/gcc-alert-detail.component';
import { GccAlertService }          from './gcc/gcc-alert.service';

import { DropdownComponent }        from './util/dropdown.component';
import { PhoneModalComponent }      from './demo/phone-modal.component';
import { PfizerbotService }         from './pfizerbot/pfizerbot.service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ 
    AppNavComponent,
    AppComponent,
    DashboardComponent,
    GetSupportComponent,
    GccAlertsComponent,
    GccAlertDetailComponent,
    DropdownComponent,
    PhoneModalComponent
  ],
  providers: [ 
    GccAlertService, 
    PfizerbotService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

