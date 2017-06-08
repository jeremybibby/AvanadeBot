"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_nav_component_1 = require("./app-nav.component");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var get_support_component_1 = require("./support/get-support.component");
var gcc_alerts_component_1 = require("./gcc/gcc-alerts.component");
var gcc_alert_detail_component_1 = require("./gcc/gcc-alert-detail.component");
var gcc_alert_service_1 = require("./gcc/gcc-alert.service");
var dropdown_component_1 = require("./util/dropdown.component");
var phone_modal_component_1 = require("./demo/phone-modal.component");
var pfizerbot_service_1 = require("./pfizerbot/pfizerbot.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            ng2_bootstrap_1.BsDropdownModule.forRoot()
        ],
        declarations: [
            app_nav_component_1.AppNavComponent,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            get_support_component_1.GetSupportComponent,
            gcc_alerts_component_1.GccAlertsComponent,
            gcc_alert_detail_component_1.GccAlertDetailComponent,
            dropdown_component_1.DropdownComponent,
            phone_modal_component_1.PhoneModalComponent
        ],
        providers: [
            gcc_alert_service_1.GccAlertService,
            pfizerbot_service_1.PfizerbotService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map