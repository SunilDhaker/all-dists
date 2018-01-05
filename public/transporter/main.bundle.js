webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var router_module_routing_module_1 = __webpack_require__("../../../../../src/app/router-module/router-module-routing.module.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var angular_font_awesome_1 = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
var shipment_status_component_1 = __webpack_require__("../../../../../src/app/components/shipment-status/shipment-status.component.ts");
var ng2_charts_1 = __webpack_require__("../../../../ng2-charts/index.js");
var flex_layout_1 = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var manual_shipment_status_component_1 = __webpack_require__("../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.ts");
var core_3 = __webpack_require__("../../../../@agm/core/index.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var filter_1 = __webpack_require__("../../../../../src/app/filters/filter.ts");
var deviceFilter_1 = __webpack_require__("../../../../../src/app/filters/deviceFilter.ts");
var shipmentFilter_1 = __webpack_require__("../../../../../src/app/filters/shipmentFilter.ts");
var sortFilter_1 = __webpack_require__("../../../../../src/app/filters/sortFilter.ts");
var searchDeviceFilter_1 = __webpack_require__("../../../../../src/app/filters/searchDeviceFilter.ts");
var device_dashboard_component_1 = __webpack_require__("../../../../../src/app/components/device-dashboard/device-dashboard.component.ts");
var new_shipment_component_1 = __webpack_require__("../../../../../src/app/components/new-shipment/new-shipment.component.ts");
var picker_module_1 = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var tracker_services_1 = __webpack_require__("../../../../../src/app/services/tracker-services.ts");
var manage_organisation_services_1 = __webpack_require__("../../../../../src/app/services/manage-organisation-services.ts");
// import {TripServices} from "./services/tripServices";
var authorization_services_1 = __webpack_require__("../../../../../src/app/services/authorization-services.ts");
var device_services_1 = __webpack_require__("../../../../../src/app/services/device-services.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
//import {TranslateModule} from 'ng2-translate';
var info_store_1 = __webpack_require__("../../../../../src/app/reducers/info_store.ts");
var confirm_device_return_component_1 = __webpack_require__("../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.ts");
var assign_vehicle_component_1 = __webpack_require__("../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.ts");
var mark_as_required_component_1 = __webpack_require__("../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.ts");
var tracker_shipment_status_component_1 = __webpack_require__("../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.ts");
var edit_shipment_location_component_1 = __webpack_require__("../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
var add_organisation_component_1 = __webpack_require__("../../../../../src/app/components/add-organisation/add-organisation.component.ts");
var settings_component_component_1 = __webpack_require__("../../../../../src/app/components/settings-component/settings-component.component.ts");
var manage_organisation_component_1 = __webpack_require__("../../../../../src/app/components/manage-organisation/manage-organisation.component.ts");
var shipment_management_component_1 = __webpack_require__("../../../../../src/app/components/shipment-management/shipment-management.component.ts");
// import { ShipmentGroupsListComponent } from './components/shipment-management/shipment-groups-list/shipment-groups-list.component';
// import { EditShipmentGroupsComponent } from './components/shipment-management/edit-shipment-groups/edit-shipment-groups.component';
// import { ShipmentListInGroupComponent } from './components/shipment-management/shipment-list-in-group/shipment-list-in-group.component';
var shipment_mgmt_services_1 = __webpack_require__("../../../../../src/app/services/shipment-mgmt-services.ts");
var manual_shipment_service_1 = __webpack_require__("../../../../../src/app/services/manual-shipment-service.ts");
var user_management_console_component_1 = __webpack_require__("../../../../../src/app/components/user-management-console/user-management-console.component.ts");
var users_list_component_1 = __webpack_require__("../../../../../src/app/components/user-management-console/users-list/users-list.component.ts");
var user_management_services_1 = __webpack_require__("../../../../../src/app/services/user-management-services.ts");
var freight_location_picker_component_1 = __webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.ts");
var freight_location_creater_component_1 = __webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.ts");
var user_management_store_1 = __webpack_require__("../../../../../src/app/reducers/user-management-store.ts");
var logout_service_1 = __webpack_require__("../../../../../src/app/services/logout-service.ts");
var stores = { shipmentIdList: info_store_1.shipmentIdList,
    token: info_store_1.token,
    allShipmentList: info_store_1.allShipmentList,
    shipmentDetail: info_store_1.shipmentDetail,
    newShipment: info_store_1.newShipment,
    allDevicesList: info_store_1.allDevicesList,
    checkVehicle: info_store_1.checkVehicle,
    deviceDetails: info_store_1.deviceDetails,
    closeDialog: info_store_1.closeDialog,
    createOrgRes: info_store_1.createOrgRes,
    switchOrganisationResp: info_store_1.switchOrganisationResp,
    customerDetails: info_store_1.customerDetails,
    shipmentGroupList: info_store_1.shipmentGroupList,
    createGroupRes: info_store_1.createGroupRes,
    deleteUserResponse: user_management_store_1.deleteUserResponse,
    getAllUserList: user_management_store_1.getAllUserList,
    updateUserStatusResponse: user_management_store_1.updateUserStatusResponse,
    existingUserResponse: user_management_store_1.existingUserResponse,
    switchShipment: info_store_1.switchShipment,
    addDevice: info_store_1.addDevice,
    authorization: info_store_1.authorization
    // checkDevice
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            shipment_status_component_1.ShipmentStatusComponent,
            manual_shipment_status_component_1.ManualShipmentStatusComponent,
            deviceFilter_1.DeviceFilter, shipmentFilter_1.ShipmentFilter, filter_1.SearchFilter, sortFilter_1.SortFilter, searchDeviceFilter_1.SearchDeviceFilter,
            device_dashboard_component_1.DeviceDashboard, new_shipment_component_1.NewShipment,
            confirm_device_return_component_1.ConfirmDeviceReturnComponent, assign_vehicle_component_1.AssignVehicleComponent, mark_as_required_component_1.MarkAsRequiredComponent,
            tracker_shipment_status_component_1.TrackerShipmentStatusComponent,
            edit_shipment_location_component_1.EditShipmentLocationComponent,
            user_profile_component_1.UserProfile,
            add_organisation_component_1.AddOrganisationComponent,
            settings_component_component_1.SettingsComponentComponent,
            manage_organisation_component_1.ManageOrganisationComponent,
            shipment_management_component_1.ShipmentManagementComponent,
            // ShipmentGroupsListComponent,
            // EditShipmentGroupsComponent,
            users_list_component_1.UsersListComponent,
            // ShipmentListInGroupComponent,
            user_management_console_component_1.UserManagementConsoleComponent,
            //*************freight picker */
            freight_location_picker_component_1.FreightLocationPickerComponent,
            freight_location_creater_component_1.FreightLocationCreaterComponent,
        ],
        entryComponents: [
            confirm_device_return_component_1.ConfirmDeviceReturnComponent,
            assign_vehicle_component_1.AssignVehicleComponent,
            mark_as_required_component_1.MarkAsRequiredComponent,
        ],
        imports: [
            angular_2_local_storage_1.LocalStorageModule.withConfig({
                prefix: "my-app",
                storageType: "localStorage"
            }),
            platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule,
            animations_1.BrowserAnimationsModule,
            router_module_routing_module_1.RouterModuleRoutingModule,
            core_3.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBCRowVqghQTO8iJDgOc4QY-GlFwsn85_I',
                libraries: ["places"]
            }),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            store_1.StoreModule.provideStore(stores),
            angular_font_awesome_1.AngularFontAwesomeModule, picker_module_1.DateTimePickerModule,
            material_1.MdInputModule,
            material_1.MdToolbarModule,
            material_1.MdGridListModule,
            material_1.MdTabsModule,
            material_1.MdCardModule,
            material_1.MdCheckboxModule,
            material_1.MdMenuModule,
            material_1.MdRadioModule,
            ng2_charts_1.ChartsModule,
            material_1.MdButtonModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MdSnackBarModule,
            material_1.MdSelectModule,
            material_1.MdButtonToggleModule, material_1.MdPaginatorModule, material_1.MdExpansionModule,
            material_1.MdChipsModule,
            material_1.MdDialogModule,
            material_1.MdProgressSpinnerModule,
            material_1.MdSlideToggleModule,
        ],
        providers: [material_1.MdIconRegistry,
            forms_1.NgModel, store_1.StoreModule, shipment_services_1.ShipmentServices, authorization_services_1.AuthorizationServices,
            device_services_1.DeviceServices, core_2.GoogleMapsAPIWrapper, tracker_services_1.TrackerServices,
            manage_organisation_services_1.ManageOrganisationService, shipment_mgmt_services_1.ShipmentMgmtService, user_management_services_1.UserManagementService, logout_service_1.LogoutServices, manual_shipment_service_1.ManualShipmentServices],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-organisation/add-organisation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\n  min-width: 200px;\n  max-width: 390px;\n  margin: 50px auto;\n  padding: 8px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-organisation/add-organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-card>\n    <md-card-content>\n      <div>\n        <span>Add New Organisation here : </span>\n      </div>\n      <div>\n        <md-input-container style=\"width: 100%\" >\n          <input placeholder=\"Organisation Name\" type=\"text\"  mdInput required [(ngModel)]=\"orgName\">\n        </md-input-container>\n      </div>\n      <div>\n        <md-input-container style=\"width: 100%\" >\n          <input placeholder=\"Organisation Id\" type=\"text\"  mdInput required [(ngModel)]=\"userOrgId\">\n        </md-input-container>\n      </div>\n\n      <div>\n        <md-select  placeholder=\"Organisation Type\"  style=\"width: 100%\" floatPlaceholder=\"never\"  [(ngModel)]=\"orgType\">\n          <md-option  value=\"TRANSPORTER\">TRANSPORTER</md-option>\n          <md-option  value=\"FLEET_OWNER\">FLEET OWNER</md-option>\n          <md-option  value=\"FLEET_OWNER_AGENT\">FLEET OWNER AGENT</md-option>\n        </md-select>\n      </div>\n\n      <div style=\"margin-top: 20px;text-align: right;\">\n        <!-- (click)=\"goToDashboard()\" -->\n        <button md-raised-button>CANCEL</button>\n        <button md-raised-button color=\"primary\" (click)=\"addNewOrganisation()\">ADD ORGANISATION</button>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-organisation/add-organisation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var manage_organisation_services_1 = __webpack_require__("../../../../../src/app/services/manage-organisation-services.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var AddOrganisationComponent = (function () {
    function AddOrganisationComponent(localStorageService, _router, _store, _manageOrganisationServices, snackBar) {
        var _this = this;
        this.localStorageService = localStorageService;
        this._router = _router;
        this._store = _store;
        this._manageOrganisationServices = _manageOrganisationServices;
        this.snackBar = snackBar;
        this.unSub_customerDetails = null;
        this.customerName = '';
        this.currentOrgId = '';
        this.orgName = '';
        this.userOrgId = '';
        this.orgType = '';
        this.newOrgUuid = '';
        this.customerMobile = '';
        this.userDetails = null;
        this.unsub_createOrgResponse = null;
        this.unsub_switchOrgToUserResponse = null;
        this._store.dispatch({ type: "TITLE", payload: 'Add Organisation' }); // set the header name
        this.unSub_customerDetails = _store.select('customerDetails').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            _this.currentOrgId = value['customer']['orgId'];
            _this.customerName = value['customer']['name'];
        });
        this.unsub_createOrgResponse = _store.select('createOrgRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log('create organisation response in component');
            console.log(value);
            if (value['error'] === '') {
                console.log('create organisation response in component');
                console.log(value);
                _this.openSnackBar('Organisation added successfully!');
                _this.newOrgUuid = value['res']['organisation.created']['uuid'];
                console.log(_this.newOrgUuid);
                _this._manageOrganisationServices.switchOrganisations.emit(_this.newOrgUuid);
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
        this.unsub_switchOrgToUserResponse = _store.select('switchOrganisationResp').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log('switch organisation response in component');
            console.log(value);
            if (value['error'] === '') {
                _this.localStorageService.set("AUTH_TOKEN", value['res']['token']);
                // let customerData=this.customerDetail(value['res']['token']);
                var customerData = _this.customerDetail(value['res']['token']);
                console.log(customerData);
                var path = 'http://' + window.location.hostname + ':' + window.location.port;
                console.log(path + "/transporter");
                if (customerData['details']['orgType'] == 'TRANSPORTER') {
                    window.location.replace(path + "/transporter");
                }
                else if (customerData['details']['orgType'] == 'FLEET_OWNER') {
                    window.location.replace(path + "/tracknet/vtsdashboard");
                }
                else if (customerData['details']['orgType'] == 'FLEET_OWNER_AGENT') {
                    // window.location.replace(path+"/tracknet/vtsdashboard");
                }
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
    }
    AddOrganisationComponent.prototype.ngOnInit = function () {
    };
    AddOrganisationComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined)
            this.unSub_customerDetails.unsubscribe();
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined)
            this.unSub_customerDetails.unsubscribe();
    };
    AddOrganisationComponent.prototype.addNewOrganisation = function () {
        var obj = {
            orgId: this.userOrgId,
            organisationName: this.orgName,
            type: this.orgType
        };
        console.log(obj);
        this._manageOrganisationServices.createOrg.emit(obj);
    };
    AddOrganisationComponent.prototype.customerDetail = function (token) {
        console.log(token);
        var userDetails = {};
        this.userDetails = null;
        var base64Url = token.split('.')[0];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['userType'] = JSON.parse(window.atob(base64));
        base64Url = token.split('.')[1];
        base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['details'] = JSON.parse(window.atob(base64));
        // userDetails['details']['id'] =userDetails['details']['userId'];
        this.userDetails = userDetails;
        console.log(this.userDetails);
        return userDetails;
    };
    AddOrganisationComponent.prototype.goToDashboard = function () {
        this._router.navigate(['dashboard']);
    };
    AddOrganisationComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return AddOrganisationComponent;
}());
AddOrganisationComponent = __decorate([
    core_1.Component({
        selector: 'app-add-organisation',
        template: __webpack_require__("../../../../../src/app/components/add-organisation/add-organisation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-organisation/add-organisation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _c || Object, typeof (_d = typeof manage_organisation_services_1.ManageOrganisationService !== "undefined" && manage_organisation_services_1.ManageOrganisationService) === "function" && _d || Object, typeof (_e = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _e || Object])
], AddOrganisationComponent);
exports.AddOrganisationComponent = AddOrganisationComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-organisation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* abhinav code here*/\n/*md-toolbar{*/\n  /*background-color: #1976d2 ;*/\n  /*color:white*/\n\n/*}*/\n\n/*.title{*/\n /*position: relative;*/\n  /*left: 4%;*/\n  /*font-family: Trebuchet MS;*/\n  /*font-size: larger;*/\n/*}*/\n\n/* abhinav code here */\n\ndiv{\n  font-family: Helvetica;\n}\n\n.logo{\n  width: 100px;\n  padding: 2px;\n  height: 19px;\n}\n\n.service-name{\n  white-space: nowrap;\n  font-size: 11px;\n  position: absolute;\n  top: 28px;\n  left: 38px;\n  font-family: Helvetica;\n}\n\n.header{\n  padding:5px 0px 4px 15px;\n  background-color: #3F51B5;\n  color: white;\n  height: 45px;\n  box-shadow: 0px 0px 6px darkgrey;\n}\n\n.setting-button{\n  margin-left: auto;\n  margin-right: 15px;\n\n}\n\n.menu-button{\n  color: #D7D6D2;\n}\n\n.menu-button >>> .mat-button-focus-overlay{\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.menu-button:hover{\n  color: white !important;\n}\n\n/*.menu-button:active{*/\n  /*color: white !important;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--    ************************ abhinav code ********************* -->\n<!--<md-toolbar>-->\n  <!--<span><img src=\"logo-light.png\"></span>-->\n  <!--<span class=title >Shipment Dashboard</span>-->\n  <!--<span style=\"position: relative; left: 65%;\"><fa name=\"cog\" ></fa></span>-->\n<!--</md-toolbar>-->\n<!--<nav md-tab-nav-bar>-->\n  <!--<a md-tab-link-->\n     <!--*ngFor=\"let link of navLinks\"-->\n     <!--[routerLink]=\"link.link\"-->\n     <!--routerLinkActive #rla=\"routerLinkActive\"-->\n     <!--[active]=\"rla.isActive\"-->\n  <!--style=\"color: #1976d2; font-size: medium\">-->\n    <!--{{link.label}}-->\n  <!--</a>-->\n<!--</nav>-->\n<!--<router-outlet></router-outlet>-->\n<!-- ********************************************************* -->\n\n<div style=\"height: 100vh;overflow: hidden;\" >\n  <div class=\"header\" fxLayout=\"row\" >\n    <img class=\"logo\" src=\"logo-light.png\" alt=\"Fretron Logo\"  >\n    <span class=\"service-name\" >Shipment Tracking</span>\n   <div style=\"margin-left: 80px\" >\n      <button [style.color]=\"selectedView == 'shipment' ? '#FFFFFF':''\" md-button class=\"menu-button\" (click)=\"goToShipmentDashboardView();selectedView = 'shipment'\" >\n            Shipment Dashboard\n      </button>\n\n      <button [style.color]=\"selectedView == 'device' ? '#FFFFFF':''\"   md-button class=\"menu-button\" (click)=\"goToDeviceDashboardView();selectedView = 'device'\"  >\n            Device Dashboard\n      </button>\n   </div>\n\n    <div class=\"setting-button\">\n\n      <button md-icon-button style=\"cursor: pointer;z-index: 1000;\" (click)=\"goTosettingView()\"  >\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n      </button>\n\n      <button [mdMenuTriggerFor]=\"logoutMenu\"  md-icon-button style=\"cursor: pointer;z-index: 1000;\"   >\n        <i  class=\"fa fa-user-o\" aria-hidden=\"true\" >&#9662;</i>\n      </button>\n      <md-menu #logoutMenu=\"mdMenu\" >\n        <app-user-profile [view]=\"web\" ></app-user-profile>\n      </md-menu>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var authorization_services_1 = __webpack_require__("../../../../../src/app/services/authorization-services.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var logout_service_1 = __webpack_require__("../../../../../src/app/services/logout-service.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var DashboardComponent = (function () {
    function DashboardComponent(logoutService, snackBar, _store, authorization, localStorageService, _router) {
        var _this = this;
        this.logoutService = logoutService;
        this.snackBar = snackBar;
        this._store = _store;
        this.authorization = authorization;
        this.localStorageService = localStorageService;
        this._router = _router;
        // public navLinks:any[]=[
        //   {"label":"Shipment Status","link":"shipmentStatus"}
        //   ];
        this.unsub_token = null;
        this.unsub_authorization = null;
        this.unSub_customerDetails = null;
        this.selectedView = 'shipment';
        var customer = this.customerDetail(this.localStorageService.get("AUTH_TOKEN"));
        var orgType = customer['orgType'];
        // let pathname = window.location.pathname;
        var path = 'http://' + window.location.hostname + ':' + window.location.port;
        if (orgType == 'FLEET_OWNER') {
            window.location.replace(path + "/tracknet");
        }
        else if (orgType == 'FLEET_OWNER_AGENT') {
            this.logoutService.logout();
        }
        this.unsub_token = this._store.select('token').subscribe(function (value) {
            var token = _this.localStorageService.get("AUTH_TOKEN"); //check this
            console.log(token);
            if (value == null && token == null) {
                // console.log("token not present in either localstorage or store");
                _this.openSnackBar("you are currently logout, please login first");
                // this._store.dispatch(go(['/userLogin'])); ///// for check token
                _this.logoutService.logout();
                return;
            }
            if (value != null) {
                if (value['error'] == '') {
                    token = value['token'];
                    console.log(token);
                    _this.authorization.tokenAuthorization.emit(token);
                    console.log(token);
                }
            }
            else {
                console.log(token);
                console.log(_this._router.url);
                _this.authorization.tokenAuthorization.emit(token);
            }
        });
        this.unsub_authorization = this._store.select('authorization').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == 'X') {
                // console.log(value['msg']);// set error msg to user
                // console.log("you are not a valid user");// set error msg to user
                _this.openSnackBar("you are not a valid user");
                // this._store.dispatch(go(['/userLogin']));
                console.log("Error in authorisation store ; error == 'X'");
                _this.logoutService.logout();
                return;
            }
            if (value['error'] == '' || value['valid'] == true) {
                // console.log("user authorized subscription");
                // console.log(value['valid']);
                var currentPath = _this._router.url;
                console.log(currentPath);
                if (currentPath === '/dashboard/shipmentStatus') {
                    _this._router.navigate(['dashboard/shipmentStatus']);
                }
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.customerDetail = function (token) {
        // console.log(token);
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    DashboardComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    DashboardComponent.prototype.goToShipmentDashboardView = function () {
        // this.router.navigate'dashboardDesktop/tripStatus']));
        this._router.navigate(['dashboard/shipmentStatus']);
    };
    DashboardComponent.prototype.goToDeviceDashboardView = function () {
        // this.router.navigate'dashboardDesktop/tripStatus']));
        this._router.navigate(['dashboard/deviceDashboard']);
    };
    DashboardComponent.prototype.goTosettingView = function () {
        this._router.navigate(['dashboard/settingsComponent']);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unsub_token != 'undefined' && this.unsub_token != null && this.unsub_token != undefined)
            this.unsub_token.unsubscribe();
        if (typeof this.unsub_authorization != 'undefined' && this.unsub_authorization != null && this.unsub_authorization != undefined)
            this.unsub_authorization.unsubscribe();
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined)
            this.unSub_customerDetails.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof logout_service_1.LogoutServices !== "undefined" && logout_service_1.LogoutServices) === "function" && _a || Object, typeof (_b = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _b || Object, typeof (_c = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _c || Object, typeof (_d = typeof authorization_services_1.AuthorizationServices !== "undefined" && authorization_services_1.AuthorizationServices) === "function" && _d || Object, typeof (_e = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/device-dashboard/device-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n  font-family: Helvetica;\n}\n\n.container{\n  padding: 5px 10px 5px 5px;\n  width: 100%;\n}\n\nmd-card{\n  padding: 15px;\n  font-family: Helvetica;\n}\n\n.custome-button {\n  height: 26px;\n  font-size: 13px;\n  line-height: 26px;\n  border-radius: 5px;\n}\n\n.status-button{\n  font-size: 12px;\n  line-height: 26px;\n  height: 33px;\n  width: 19%;\n  /* overflow: hidden; */\n  line-height: 1.2;\n  white-space: initial;\n  border-radius: 2px;\n}\n\n.status-button:hover\n{\n  background-color: #5b89ff !important;\n  color: white;\n}\n\n.current-status-button{\n  background-color: #FFB75A;\n  font-size: 12px;\n  line-height: 26px;\n  height: 25px;\n  border-radius: 5px;\n  color:#FFFFFF;\n}\n\n.expand-search {\n  border: 1.5px solid #b0bcc1;\n  width: 100%;\n  font-size: 12px;\n  padding: 5px 26px 5px 12px;\n  display: inline-block;\n  border-radius: 17px;\n  box-sizing: border-box;\n  outline: none;\n}\n\n/* search box*/\n.expand-search:focus{\n  outline: none;\n  border: 1.5px solid #03a9f4;\n}\n\n.margins span{\n  margin-left: 5px;\n}\n\n.custome-circle i{\n  font-size: 8px;\n  margin-top: 35%;\n  margin-left: -30%;\n  position: absolute;\n}\n\n.custome-circle{\n  font-size: 9px;\n  padding: 1px 6px;\n  border: 1px solid;\n  position: relative;\n  border-radius: 50%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/device-dashboard/device-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-width: 700px;box-sizing: border-box;overflow: auto\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <div style=\"display:flex;padding:7px\" >\n    <div style=\"display:flex;\">\n      <button (click)=\"selectedFilter = ''\" md-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == ''?'#1976d2':''\"  [style.color]=\"selectedFilter == ''?'#FFFFFF':''\">{{countFilterData['all']}} <span>All</span></button>\n      <button (click)=\"selectedFilter = 'active'\" md-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == 'active'?'#1976d2':''\" [style.color]=\"selectedFilter == 'active'?'#FFFFFF':''\" style=\"margin-left: 15px\">{{countFilterData['active']}} <span>Active</span></button>\n      <button (click)=\"selectedFilter = 'available'\" md-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == 'available'?'#1976d2':''\" [style.color]=\"selectedFilter == 'available'?'#FFFFFF':''\" style=\"margin-left: 15px\">{{countFilterData['available']}} <span>Available</span></button>\n      <!--<button (click)=\"selectedFilter = 'repairing'\" md-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == 'repairing'?'#1976d2':''\" [style.color]=\"selectedFilter == 'repairing'?'#FFFFFF':''\" style=\"margin-left: 15px;width: 23%;\"> {{countFilterData['repairing']}} <span style=\"white-space: nowrap\">Not Working</span></button>-->\n    </div>\n    <div style=\"margin-left: auto;display: flex\">\n      <div >\n        <button class=\"custome-button align-vert-center\"  md-button  (click)=\"showAddDevice()\">+add Tracker</button>\n      </div>\n\n      <div style=\"position:relative;margin-top: 4px;\" >\n        <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\n        <input myAutofocus  [(ngModel)]=\"search\" class=\"expand-search\"  placeholder=\"Search\">\n      </div>\n    </div>\n  </div>\n  <hr>\n  <!--************************  dialog *********************************-->\n  <div *ngIf=\"isAddDeviceDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;overflow:unset\">\n    <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow:unset;max-width: 360px;height:40vh;\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"isAddDeviceDialog=false\" >&times;</span>\n        <div>\n          <label>Add Device</label>\n        </div>\n      </div>\n\n      <div  style=\"font-size: 15px;margin-left:20px;margin-top: 20px;\">          \n        <md-input-container style=\"width: 80%;\">\n          <input   style=\"width: 100%;\" placeholder=\"IMEI Number\" mdInput [(ngModel)]=\"deviceIMEI\"  name=\"deviceIMEI\" id=\"deviceIMEI\" required>\n        </md-input-container>\n      </div>\n      <div  style=\"font-size: 15px;margin-left:20px\" >          \n        <md-input-container style=\"width: 80%;\">\n          <input style=\"width:100%;\" placeholder=\"Manufacturer Name\" mdInput [(ngModel)]=\"manufacturerName\"  name=\"manufacturerName\" id=\"manufacturerName\">\n        </md-input-container>\n      </div>\n      <div style=\"margin-top: 30px;\">\n          <button md-raised-button  style=\"margin-left: 50px;\" (click)=\"isAddDeviceDialog=false\" >Cancel</button>\n          <button md-raised-button  style=\"margin-left: 20px;width: 30%\" (click)=\"confirmAddDevice()\" >Ok</button>\n      </div>\n    </div>\n  </div>\n<!-- close Switch Shipment dialog -->\n<div  style=\"overflow:auto;max-height:100vh;display:flex\" >\n    <div style=\"overflow-y:auto;overflow-x:hidden;max-height:100vh; width: 100%;margin-right: -1px;\" >\n      <div  *ngFor=\"let selDevice of allDeviceList | deviceType: ['status' ,selectedFilter] | searchDeviceFilter:['imei',search]\" >\n        <md-card  *ngIf=\"selDevice['device']['status'] =='active'\" style=\"margin-top:5px;\" (click)=\"selectedShipmentDetail(selDevice['shipment'])\" >\n          <div fxLayout=\"row\" >\n            <div style=\"font-size: 12px;width: 100%\" >\n              <div fxLayout=\"row\" class=\"margins\" >\n                <span fxFlex >{{selDevice['device']?.imei}}</span>\n                <span fxFlex >{{selDevice['shipment']?.shipmentNoExtended}}</span>\n                <span style=\"margin-right: 12px\"  fxFlex ><i style=\"margin-right: 3px\" class=\"fa fa-truck\" aria-hidden=\"true\"></i>{{selDevice['shipment']?.vehicleRegistrationNo}}</span>\n                <!-- <span fxFlex ><i style=\"margin-right: 3px\" class=\"fa fa-user-o\" aria-hidden=\"true\"></i>{{selDevice['shipment']?.driverName}}</span> -->\n              <!-- </div> -->\n  \n              <!-- <div style=\"margin-top: 8px\"  fxLayout=\"row\" class=\"margins\"  > -->\n                <span fxFlex  ><i style=\"margin-right: 3px\" class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>{{(selDevice?.latestGpsState?.endLocation?.address)?selDevice?.latestGpsState?.endLocation?.address:'N/A'}}</span>\n                <span fxFlex><label style=\"margin-right: 3px\" ><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></label>{{(selDevice['shipment']?.startLocation?.freightLocation?.name)?selDevice['shipment']?.startLocation?.freightLocation?.name:'N/A'}}</span>\n                \n                <span fxFlex ><i style=\"margin-right: 3px\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>{{(selDevice['shipment']?.endLocation?.freightLocation?.name)?selDevice['shipment']?.endLocation?.freightLocation?.name:'N/A'}}</span>\n                \n                <!-- <span fxFlex  ><i style=\"margin-right: 3px\" class=\"fa fa-phone\" aria-hidden=\"true\"></i>{{selDevice['shipment']?.mobileNo}}</span> -->\n                <span fxFlex=\"20\" *ngIf=\"selDevice['shipment']['actualStartTime'] != null\" style=\"white-space: nowrap;\" >Since: {{(selDevice['shipment']?._stateDuration)?selDevice['shipment']?._stateDuration:'0 min'}}</span>\n                \n              </div>\n            </div>\n            <!-- <div style=\"font-size: 11px;\">\n              <div style=\"margin-top: 8px;width: 100px;\" >\n              </div>\n            </div> -->\n            <div style=\"margin-right: 30px;\">\n              <button md-raised-button style=\"margin-top: 3px\" class=\"current-status-button\" >Active</button>\n            </div>\n            <!-- <div style=\"margin-left: auto;margin-right: 10px;\">\n              <button class=\"custome-button fade-sub-header-text align-vert-center\"  md-button (click)=\"openDialogConfirmDeviceReturn(selDevice)\" >+confirm device Return</button>\n            </div> -->\n          </div>\n        </md-card>\n\n        <md-card style=\"margin-top:5px;\"  *ngIf=\"selDevice['device']['status'] =='available'\" >\n          <div fxLayout=\"row\">\n            <div style=\"font-size: 12px;width: 100%\" >\n              <div fxLayout=\"row\" class=\"margins\" >\n                <span fxFlex >{{selDevice['device']['imei']}}</span>\n                <span fxFlex=22 ><i style=\"color: #e39f41;margin-right: 5px;font-size: 14px;\" class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>(Since 29 aug 2017)</span>\n              </div>\n            </div>\n  \n            <div style=\"margin-right: 30px;\">\n              <button md-raised-button style=\"margin-top: 3px;background-color: #21b22e\" class=\"current-status-button\" >Available</button>\n            </div>\n  \n            <!-- <div style=\"margin-right: 30px;\">\n              <button class=\"custome-button fade-sub-header-text align-vert-center\"  md-button (click)=\"openDialogAssignVehicle(selDevice)\">+assign Vehicle</button>\n            </div> -->\n          </div>\n        </md-card>\n      </div>\n    </div>\n    <div *ngIf=\"isShowDetails\" class=\"mycustomDialog\" style=\"padding: 8px 10px;width: 100%;margin-bottom: 10px;\" >\n      <div class=\"modal-content\"  style=\"min-width: 280px;overflow:unset;max-width: 400px;height:45vh;margin-top: 70px;\">\n        <i (click)=\"isShowDetails = false;\" style=\"font-size:24px;float: right;margin-top: 3px;color: rgb(82, 80, 80);cursor:pointer\" class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n        <div *ngIf=\"trackingType=='Tracker'\"><app-tracker-shipment-status></app-tracker-shipment-status></div>\n      </div>\n    </div>\n</div>\n\n  <!-- <div style=\"overflow:auto;height:calc(100vh - 115px);\" >\n  <div style=\"margin-top: 10px\" *ngFor=\"let selDevice of allDeviceList | deviceType: ['status' ,selectedFilter]\"> -->\n      <!--<div style=\"margin-top: 10px\" *ngFor=\"let selDevice of allDeviceList\">-->\n     \n\n      <!--<md-card style=\"margin-top:5px;\" *ngIf=\"selDevice.device.status=='repairing'\" >-->\n        <!--<div fxLayout=\"row\">-->\n          <!--<div style=\"font-size: 12px;width: 100%\" >-->\n            <!--<div fxLayout=\"row\" class=\"margins\" >-->\n              <!--<span fxFlex >363251425152</span>-->\n            <!--</div>-->\n\n            <!--<div style=\"margin-top: 8px\"  fxLayout=\"row\" class=\"margins\"  >-->\n              <!--<span fxFlex=\"50\" >-->\n                <!--<i style=\"color: #dc2019;margin-right: 5px;font-size: 14px;\" class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>-->\n                <!--Under Repairing - since 8 days</span>-->\n            <!--</div>-->\n          <!--</div>-->\n\n          <!--<div style=\"margin-right: 30px;\">-->\n            <!--<button md-raised-button style=\"margin-top: 3px;background-color: #dc2019\" class=\"current-status-button\" >Repairing</button>-->\n          <!--</div>-->\n          <!--<div style=\"margin-right: 10px;\">-->\n            <!--<button class=\"custome-button fade-sub-header-text align-vert-center\"  md-button (click)=\"openDialogMarkAsRequired(selDevice)\">+mark as Required</button>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</md-card>-->\n  <!-- </div>\n  <div style=\"height:30px\"></div>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/device-dashboard/device-dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var device_services_1 = __webpack_require__("../../../../../src/app/services/device-services.ts");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var util_1 = __webpack_require__("../../../../util/util.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var confirm_device_return_component_1 = __webpack_require__("../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.ts");
var assign_vehicle_component_1 = __webpack_require__("../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.ts");
var mark_as_required_component_1 = __webpack_require__("../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.ts");
var DeviceDashboard = (function () {
    // public unSub_allActiveDeviceList=null;
    // public unSub_allAvailableDeviceList=null;
    // public unSub_allRepairingDeviceList=null;
    function DeviceDashboard(snackBar, _router, deviceServices, shipmentServices, dialog, _store) {
        var _this = this;
        this.snackBar = snackBar;
        this._router = _router;
        this.deviceServices = deviceServices;
        this.shipmentServices = shipmentServices;
        this.dialog = dialog;
        this._store = _store;
        this.selectedFilter = '';
        this.isSpinner = false;
        this.allDeviceList = [];
        this.deviceIMEI = null;
        this.manufacturerName = null;
        this.isShowDetails = false;
        this.search = '';
        this.countFilterData = { all: 0, active: 0, available: 0, repairing: 0 };
        // public  allActiveDeviceList:any[]=[];
        // public  allAvailableDeviceList:any[]=[];
        // public  allRepairingDeviceList:any[]=[];
        this.unSub_allDeviceList = null;
        this.unSub_addDevice = null;
        this.isAddDeviceDialog = false;
        this.deviceServices.allDevicesList.emit();
        this.isSpinner = true;
        this.unSub_allDeviceList = this._store.select('allDevicesList').subscribe(function (value) {
            console.log(value);
            if (value != null) {
                _this.isSpinner = false;
                if (value['error'] == '') {
                    //for Error Handaling
                    _this.allDeviceList = value['res'];
                    console.log(_this.allDeviceList);
                    _this.countFilterValue();
                }
                else {
                    console.log(value['errorMsg']);
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
        this.unSub_addDevice = this._store.select('addDevice').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    //for Error Handaling
                    if (value['res']['status'] >= 200 && value['res']['status'] < 300) {
                        _this.openSnackBar("Device added successfully");
                    }
                }
                else {
                    console.log(value['errorMsg']);
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
    } //constructor close
    DeviceDashboard.prototype.countFilterValue = function () {
        this.countFilterData = { all: 0, active: 0, available: 0, repairing: 0 };
        this.countFilterData['all'] = this.allDeviceList.length;
        for (var i = 0; i < this.allDeviceList.length; i++) {
            if (this.allDeviceList[i]['device']['status'] == "active") {
                if (this.allDeviceList[i]['shipment']['shipmentState'] == "Completed") {
                    this.allDeviceList[i]['device']['status'] = 'available';
                    this.countFilterData['available'] = this.countFilterData['available'] + 1;
                }
                else {
                    this.countFilterData['active'] = this.countFilterData['active'] + 1;
                    if (this.allDeviceList[i]['shipment']['actualStartTime'] != null) {
                        var stateDuration = this.msToTime(new Date().getTime() - this.allDeviceList[i]['shipment']['actualStartTime']);
                        console.log(stateDuration);
                        this.allDeviceList[i]['shipment']['_stateDuration'] = stateDuration;
                    }
                }
            }
            else if (this.allDeviceList[i]['device']['status'] == null) {
                this.allDeviceList[i]['device']['status'] = 'available';
                this.countFilterData['available'] = this.countFilterData['available'] + 1;
            }
            // else if(this.allDeviceList[i]['status'] =="repairing"){
            //   this.countFilterData['repairing'] =  this.countFilterData['repairing']+1;
            // }
        }
        // console.log(this.countFilterData);
    };
    DeviceDashboard.prototype.showAddDevice = function () {
        this.deviceIMEI = null;
        this.manufacturerName = null;
        this.isAddDeviceDialog = true;
    };
    DeviceDashboard.prototype.confirmAddDevice = function () {
        console.log(this.deviceIMEI);
        if (util_1.isNullOrUndefined(this.deviceIMEI) || this.deviceIMEI == '') {
            this.openSnackBar('please fill device IMEI ');
            return;
        }
        var obj = {
            "imei": this.deviceIMEI,
            "mobileNumber": null,
            "manufacturerName": this.manufacturerName
        };
        console.log(obj);
        this.deviceServices.addDevice.emit(obj);
        this.isAddDeviceDialog = false;
    };
    DeviceDashboard.prototype.ngOnInit = function () {
    };
    DeviceDashboard.prototype.selectedShipmentDetail = function (shipment) {
        console.log(shipment);
        if (!util_1.isNullOrUndefined(shipment)) {
            this.trackingType = shipment.trackingType;
            var id = shipment.shipmentId;
            this.shipmentServices.getShipmentDetail.emit(id);
            this.isShowDetails = true;
        }
    };
    DeviceDashboard.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_allDeviceList != 'undefined' && this.unSub_allDeviceList != null && this.unSub_allDeviceList != undefined)
            this.unSub_allDeviceList.unsubscribe();
        if (typeof this.unSub_addDevice != 'undefined' && this.unSub_addDevice != null && this.unSub_addDevice != undefined)
            this.unSub_addDevice.unsubscribe();
        // if (typeof this.unSub_allAvailableDeviceList != 'undefined' && this.unSub_allAvailableDeviceList != null && this.unSub_allAvailableDeviceList != undefined)
        // this.unSub_allAvailableDeviceList.unsubscribe();
        // if (typeof this.unSub_allRepairingDeviceList != 'undefined' && this.unSub_allRepairingDeviceList != null && this.unSub_allRepairingDeviceList != undefined)
        // this.unSub_allRepairingDeviceList.unsubscribe();
        this._store.dispatch({ type: "ADD_DEVICE", payload: null });
        this._store.dispatch({ type: "All_DEVICES_LIST", payload: null });
    };
    DeviceDashboard.prototype.openDialogConfirmDeviceReturn = function (device) {
        var res = device;
        console.log(res);
        this._store.dispatch({ type: "DEVICE_DETAILS", payload: { error: '', data: res } });
        var dialogRef = this.dialog.open(confirm_device_return_component_1.ConfirmDeviceReturnComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DeviceDashboard.prototype.openDialogAssignVehicle = function (device) {
        var res = device;
        console.log(res);
        this._store.dispatch({ type: "DEVICE_DETAILS", payload: { error: '', data: res } });
        var dialogRef = this.dialog.open(assign_vehicle_component_1.AssignVehicleComponent, {
            height: '350px', width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DeviceDashboard.prototype.openDialogMarkAsRequired = function (device) {
        var res = device;
        console.log(res);
        this._store.dispatch({ type: "DEVICE_DETAILS", payload: { error: '', data: res } });
        var dialogRef = this.dialog.open(mark_as_required_component_1.MarkAsRequiredComponent, {
            height: '350px', width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DeviceDashboard.prototype.msToTime = function (duration) {
        var x = duration / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        // console.log(days);
        var totalDuration = '';
        if (days > 0) {
            totalDuration = days + "d ";
        }
        if (hours > 0) {
            totalDuration = totalDuration + hours + "hr ";
        }
        if (days >= 1) {
            return totalDuration;
        }
        if (minutes > 0) {
            return totalDuration = totalDuration + minutes + "min";
        }
        if (seconds > 0 && totalDuration == '') {
            totalDuration = totalDuration + seconds + " sec";
        }
        if (totalDuration == '') {
            return '0 sec';
        }
        else {
            return totalDuration;
        }
    }; //close methods msToTime
    DeviceDashboard.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return DeviceDashboard;
}());
DeviceDashboard = __decorate([
    core_1.Component({
        selector: 'app-device-dashboard',
        template: __webpack_require__("../../../../../src/app/components/device-dashboard/device-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/device-dashboard/device-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof device_services_1.DeviceServices !== "undefined" && device_services_1.DeviceServices) === "function" && _c || Object, typeof (_d = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _d || Object, typeof (_e = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _e || Object, typeof (_f = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _f || Object])
], DeviceDashboard);
exports.DeviceDashboard = DeviceDashboard;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=device-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title><u>Assign Vehicle</u></h1> \n<div md-dialog-content>\n  <p style=\"margin-left:30px\">Device &nbsp;Id &nbsp;:<i>{{device.imei}}</i></p> \n  <div style=\"margin-left:30px\" >\n    <label>Vehicle&nbsp;&nbsp; Number&nbsp;*:&nbsp;&nbsp;&nbsp; </label>\n    <md-input-container>\n      <input  mdInput [(ngModel)]=\"vehicleNumber\" name=\"vehicleNumber\" id=\"vehicleNumber\" required>\n    </md-input-container>\n  </div>\n</div>\n<div md-dialog-actions>\n  <div style=\"margin-left:auto;margin-right: 60px;margin-top: 50px;\">\n      <button md-raised-button   style=\"margin-left:auto;margin-right: 30px;\" (click)=\"closeDialog()\" >Cancel</button>\n      <button md-raised-button  style=\"margin-left:auto;margin-right: 20px;\" (click)=\"closeDialog()\" >Confirm</button>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var AssignVehicleComponent = (function () {
    function AssignVehicleComponent(dialogRef, _store) {
        var _this = this;
        this.dialogRef = dialogRef;
        this._store = _store;
        this.unSub_deviceDetail = null;
        this.unSub_deviceDetail = this._store.select('deviceDetails').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling          
                }
                else {
                    //this.device = value['data'];
                    console.log(_this.device);
                }
            }
        });
    }
    AssignVehicleComponent.prototype.ngOnInit = function () {
    };
    AssignVehicleComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_deviceDetail != 'undefined' && this.unSub_deviceDetail != null && this.unSub_deviceDetail != undefined)
            this.unSub_deviceDetail.unsubscribe();
    };
    AssignVehicleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AssignVehicleComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    return AssignVehicleComponent;
}());
AssignVehicleComponent = __decorate([
    core_1.Component({
        selector: 'app-assign-vehicle',
        template: __webpack_require__("../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/assign-vehicle/assign-vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object])
], AssignVehicleComponent);
exports.AssignVehicleComponent = AssignVehicleComponent;
var _a, _b;
//# sourceMappingURL=assign-vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n  font-family: Helvetica;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n  <span md-dialog-title>Confirm Device Return</span>\n\n  <div md-dialog-content style=\"font-size: 15px;\">\n    <div  style=\"margin-left:40px;\" >Device <b>{{device?.device?.imei}}</b> is allocated to Vehicle <b>{{device['shipment']?.vehicleRegistrationNo}}</b></div>\n    <div style=\"margin-top: 10px;margin-left:40px;\" >\n      <label style=\"vertical-align: -8px\">Device Condition :</label>\n      <md-select  style=\"width: 140px;margin-left: 14px;\" [(ngModel)]=\"deviceStatus\" floatPlaceholder=\"never\">\n        <md-option [value]=\"condition.value\" *ngFor=\"let condition of deviceCondition\">{{condition.viewName}}</md-option>\n      </md-select>\n    </div>\n  </div>\n\n  <div md-dialog-actions>\n    <button md-raised-button   (click)=\"closeDialog()\" >Cancel</button>\n    <button md-raised-button color=\"primary\" (click)=\"confirmDeviceReturnDialog()\" >Confirm</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var ConfirmDeviceReturnComponent = (function () {
    function ConfirmDeviceReturnComponent(dialogRef, _store) {
        var _this = this;
        this.dialogRef = dialogRef;
        this._store = _store;
        this.deviceCondition = [{ viewName: 'Working', value: "working" },
            { viewName: 'Notworking', value: "notworking" }];
        this.deviceStatus = 'working';
        this.unSub_deviceDetail = null;
        this.unSub_deviceDetail = this._store.select('deviceDetails').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling
                }
                else {
                    _this.device = value['data'];
                    console.log(_this.device);
                }
            }
        });
    }
    ConfirmDeviceReturnComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeviceReturnComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_deviceDetail != 'undefined' && this.unSub_deviceDetail != null && this.unSub_deviceDetail != undefined)
            this.unSub_deviceDetail.unsubscribe();
    };
    // @Inject(MD_DIALOG_DATA) public data: any) { }
    ConfirmDeviceReturnComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDeviceReturnComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ConfirmDeviceReturnComponent.prototype.confirmDeviceReturnDialog = function () {
        this.dialogRef.close('Pizza! bjhnm');
    };
    return ConfirmDeviceReturnComponent;
}());
ConfirmDeviceReturnComponent = __decorate([
    core_1.Component({
        selector: 'app-confirm-device-return',
        template: __webpack_require__("../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/confirm-device-return/confirm-device-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object])
], ConfirmDeviceReturnComponent);
exports.ConfirmDeviceReturnComponent = ConfirmDeviceReturnComponent;
var _a, _b;
//# sourceMappingURL=confirm-device-return.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title><u>Assign Vehicle</u></h1> \n<div md-dialog-content>\n  <p style=\"margin-left:30px\">Device &nbsp;Id &nbsp;:<i>{{device.imei}}</i></p> \n  <div style=\"margin-left:30px\" >\n    <label>Confirm Device Status&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </label>\n    <md-select  style=\"width: 50%\" [(ngModel)]=\"deviceStatus\" floatPlaceholder=\"never\">\n        <md-option [value]=\"condition.value\" *ngFor=\"let condition of deviceCondition\">{{condition.viewName}}</md-option>\n    </md-select>\n  </div>\n</div>\n<div md-dialog-actions>\n  <div style=\"margin-left:auto;margin-right: 60px;margin-top: 50px;\">\n      <button md-raised-button   style=\"margin-left:auto;margin-right: 30px;\" (click)=\"closeDialog()\" >Cancel</button>\n      <button md-raised-button  style=\"margin-left:auto;margin-right: 20px;\" (click)=\"closeDialog()\" >Confirm</button>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var MarkAsRequiredComponent = (function () {
    function MarkAsRequiredComponent(dialogRef, _store) {
        var _this = this;
        this.dialogRef = dialogRef;
        this._store = _store;
        this.deviceCondition = [{ viewName: 'Repaired', value: "repaired" },
            { viewName: 'Damaged', value: "damaged" },
            { viewName: 'Sent For Replacment', value: "replacment" }];
        this.deviceStatus = 'repaired';
        this.unSub_deviceDetail = null;
        this.unSub_deviceDetail = this._store.select('deviceDetails').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling          
                }
                else {
                    _this.device = value['data'];
                    console.log(_this.device);
                }
            }
        });
    }
    MarkAsRequiredComponent.prototype.ngOnInit = function () {
    };
    MarkAsRequiredComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_deviceDetail != 'undefined' && this.unSub_deviceDetail != null && this.unSub_deviceDetail != undefined)
            this.unSub_deviceDetail.unsubscribe();
    };
    MarkAsRequiredComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MarkAsRequiredComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    return MarkAsRequiredComponent;
}());
MarkAsRequiredComponent = __decorate([
    core_1.Component({
        selector: 'app-mark-as-required',
        template: __webpack_require__("../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/mark-as-required/mark-as-required.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object])
], MarkAsRequiredComponent);
exports.MarkAsRequiredComponent = MarkAsRequiredComponent;
var _a, _b;
//# sourceMappingURL=mark-as-required.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trip-header{\n    background-color: #1976d2;\n    width: 100%;\n    /*padding-bottom: 3px;*/\n    padding: 8px;\n    height: 40px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #ffffff;\n  }\n  \n  md-card{\n    padding: 9px;\n    min-width: 200px;\n  }\n  \n  div {\n    font-family: Helvetica !important;\n    /*color: #46465f;*/\n  }\n  \n  .my-hr{\n    border-style:ridge;\n    border-width:1px;\n    margin-top: 6px;\n    min-width: 250px;\n    margin-bottom:3px;\n  }\n  \n  .my-map-search{\n    left: 5%;\n    width: 90%;\n    position: absolute;\n    z-index: 10;\n    margin-top: 10px;\n  }\n  \n  \n  .my-toggle{\n    /*margin-top: auto;*/\n  }\n  \n  .my-toggle >>> .mat-button-toggle-label-content {\n    line-height: 23px;\n    padding: 0px 10px;\n  }\n  /*button {*/\n    /*color:#ffffff;*/\n    /*background-color:#1E88E5;*/\n  /*}*/\n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;top: 0px;z-index:100\" class=\"slow-down\">\n  <!--<div class=\"trip-header\"   fxLayout=\"row\">-->\n    <!--<span  (click)=\"back()\" >-->\n      <!--<i style=\"width: 40px\" class=\"fa fa-arrow-left\" aria-hidden=\"true\" ></i>-->\n    <!--</span>-->\n    <!--<span>{{headerName}}</span>-->\n  <!--</div>-->\n\n  <!--   *************  discard vehicle **************** -->\n  <div *ngIf=\"isDiscardDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;\">\n    <div class=\"modal-content\" style=\"width:40%;min-width:200px;overflow: hidden;max-width: 200px;\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"isDiscardDialog=false;\" >&times;</span>\n        <label>Are you Sure?</label>\n      </div>\n      <div  style=\"padding: 5px;font-size: 13px;\">\n        <div style=\"padding: 5px;margin-top:5px;text-align: right\">\n          <button md-raised-button  style=\"width:47px;line-height: 27px;\" (click)=\"isDiscardDialog=false;\" > cancel </button>\n          <button md-raised-button  style=\"width:47px;line-height: 27px;\" (click)=\"discard();isDiscardDialog=false;\" > Discard</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  discard vehicle -->\n\n  <!--   *************  update confirmation by movement legs**************** -->\n  <div *ngIf=\"isUpdateConfirmDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;\">\n    <div class=\"modal-content\" style=\"width:40%;min-width:250px;overflow: hidden;max-width: 400px;\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"isUpdateConfirmDialog=false;\" >&times;</span>\n        <label>Are you Sure?</label>\n      </div>\n      <div  style=\"padding: 5px;font-size: 13px;\">\n        <div style=\"min-height: 100px;max-height:250px;overflow: auto;padding-bottom: 3px;\" >\n          <md-card style=\"margin-bottom: 1px\" >\n            <div style=\"display: grid\" >\n              <span >{{(selectedConfirmLocation?.endLocation?.address)?(selectedConfirmLocation?.endLocation?.address):(selectedConfirmLocation?.startLocation?.address)}}</span>\n              <span style=\"margin-top: 2px\" class=\"sub-header-text\">{{selectedConfirmLocation?.startTime | date :'medium'}}</span>\n              <span style=\"margin-top: 2px\" class=\"sub-header-text\">{{selectedConfirmLocation?._totalTime}}</span>\n            </div>\n          </md-card>\n        </div>\n      </div>\n\n      <div  style=\"padding: 5px;font-size: 13px;\">\n        <div style=\"padding: 5px;margin-top:5px;text-align: right\">\n          <button md-raised-button  style=\"width:47px;line-height: 27px;\" (click)=\"isUpdateConfirmDialog=false;\" > cancel</button>\n          <button md-raised-button  style=\"width:47px;line-height: 27px;\" (click)=\"isUpdateConfirmDialog=false;editLocationByMovementLog(selectedConfirmLocation);\" > ok</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  discard vehicle -->\n\n\n  <!--   *************  update from movementlegs vehicle **************** -->\n  <div *ngIf=\"isUpdateDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;\">\n    <div class=\"modal-content\" style=\"width:40%;min-width:250px;overflow: hidden;max-width: 400px;\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"isUpdateDialog=false;\" >&times;</span>\n        <label> Confirm Location</label>\n      </div>\n       <div style=\"text-align: center;padding: 4px;background-color: rgba(68, 148, 217, 0.03)\">\n         <span>Select location</span>\n       </div>\n        <div  style=\"padding: 5px;font-size: 13px;\">\n          <div style=\"min-height: 100px;max-height:250px;overflow: auto;padding-bottom: 3px;\" >\n            <md-card style=\"margin-bottom: 1px\" *ngFor=\"let movementLog of shipmentDetailsObject.selectedShipment.movementLegs\">\n              <div style=\"display: grid\" (click)=\"isUpdateDialog=false;isUpdateConfirmDialog=true;selectedConfirmLocation = movementLog\" >\n                <span >{{(movementLog?.endLocation?.address)?(movementLog?.endLocation?.address):(movementLog?.startLocation?.address)}}</span>\n                <span style=\"margin-top: 2px\" class=\"sub-header-text\">{{movementLog?.startTime | date :'medium'}}</span>\n                <span style=\"margin-top: 2px\" class=\"sub-header-text\">{{movementLog?._totalTime}}</span>\n              </div>\n            </md-card>\n          </div>\n          <div style=\"padding: 5px;margin-top:5px;text-align: center\">\n            <button md-raised-button style=\"width:auto;color:#ffffff;background-color:#1E88E5;\" (click)=\"editLocation();isUpdateDialog=false;\" > Edit from Map </button>\n          </div>\n        </div>\n    </div>\n  </div>\n  <!--   *************close  update from movementlegs vehicle **************** -->\n  <!--  discard vehicle -->\n\n<div style=\"overflow:auto;height:calc(100vh - 40px);\" >\n   <section [style.display]=\"isPolygonEditable?'block':'none'\" class=\"my-map-search\" >\n     <!--<input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\">-->\n     <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 8px;position: absolute;margin-top: 7px;font-size: 15px;\"></i>\n     <input id=\"pac-input\"  type=\"text\" class=\"search\"  mdTooltip=\" search Here \"   placeholder=\" Search \"  >\n   </section>\n<!-- ************************ map start here  ******************************************** -->\n  <div>\n    <section style=\"position:absolute;z-index:10;margin-top: 40px;left:5px;\" >\n      <md-button-toggle-group class=\"my-toggle\" #group=\"mdButtonToggleGroup\" [(ngModel)]=\"mapType\">\n        <md-button-toggle value=\"hybrid\" >\n          <span>Satellite</span>\n        </md-button-toggle>\n        <md-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;opacity: .6;\">\n          <span>Map</span>\n        </md-button-toggle>\n      </md-button-toggle-group>\n    </section>\n\n    <agm-map [mapTypeId]=\"mapType\" [style.height]=\"view == 'web'?'calc(100vh - 320px)':'calc(100vh - 218px)'\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\"  >\n      <agm-marker *ngFor=\"let marker of markers\"\n        [latitude]=\"marker.position.lat()\" [longitude]=\"marker.position.lng()\">\n        <agm-info-window  style=\"color:blue;\" [isOpen]=\"markers.length == 1?true:false\" >\n          <div style=\"color:blue;max-width: 150px;text-align:center\" (click)=\"setNewLocation(marker)\">Add Location</div>\n          <!--<button (click)=\"setNewLocation(marker)\">ADD Location</button>-->\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </div>\n  <!-- ************************ map end here  ******************************************** -->\n\n  <md-card style=\"margin: 3px\">\n    <div style=\"display: grid\" >\n      <div style=\"margin-left: 15px;margin-right: 15px\">\n        <md-input-container  style=\"width: 100%;\">\n          <input name=\"location_name\" [disabled]=\"!isPolygonEditable\"  mdTooltip=\" This field is required \" mdInput [(ngModel)]=\"selectedLocation\"  required >\n        </md-input-container>\n      </div>\n\n      <div style=\"margin-left: 15px;margin-right: 15px;font-size:12px;border-bottom:1px solid #D0D0D0;margin-bottom: 15px;color: #959595;\" >\n          <span *ngIf=\"selectedFromTime\" >From: {{selectedFromTime | date:'medium' }}</span>\n          <span *ngIf=\"!selectedFromTime\" >From: Yet to Report</span>\n          <span *ngIf=\"selectedTillTime\" > - {{selectedTillTime | date:'medium' }}</span>\n          <span *ngIf=\"!selectedTillTime\" > - Yet to Report</span>\n      </div>\n\n      <div style=\"width: 100%;\" *ngIf=\"!isPolygonEditable\" fxLayout=\"row\">\n        <button  *ngIf=\"isDiscard\" mdTooltip=\" Discard \"  md-raised-button (click)=\"isDiscardDialog = true\" >\n           Discard \n        </button>\n\n        <button  *ngIf=\"!isEditPlaceFromList\" style=\"width: auto;margin-left: auto;color:#ffffff;background-color:#1E88E5;\" mdTooltip=\" Click here to Edit\"  md-raised-button (click)=\"editLocation()\" >\n          Edit Location \n        </button>\n\n        <button  *ngIf=\"isEditPlaceFromList\" style=\"width: auto;margin-left: auto;color:#ffffff;background-color:#1E88E5;\" mdTooltip=\" Click here to Edit \"  md-raised-button (click)=\"isUpdateDialog =true\" >\n          Edit Location \n        </button>\n      </div>\n\n      <div *ngIf=\"isPolygonEditable\" style=\"width: 100%;\" fxLayout=\"row\">\n        <button  mdTooltip=\"cancel\" (click)=\"back()\"  md-raised-button >\n           cancel \n        </button>\n\n        <button style=\"margin-left: auto;color:#ffffff;background-color:#1E88E5;\" mdTooltip=\" Save new location \"  md-raised-button (click)=\"save()\" >\n           save \n        </button>\n\n      </div>\n    </div>\n  </md-card>\n  <div style=\"height: 40px\"></div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
//import {Polygon} from "angular2-google-maps/esm/core/services/google-maps-types";
var google_maps_types_1 = __webpack_require__("../../../../@agm/core/services/google-maps-types.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var tracker_services_1 = __webpack_require__("../../../../../src/app/services/tracker-services.ts");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// import poly = google.maps.geometry.poly;
var EditShipmentLocationComponent = (function () {
    function EditShipmentLocationComponent(_router, localStorageService, mapApiWrapper, _store, trackerServices, shipmentServices) {
        this._router = _router;
        this.localStorageService = localStorageService;
        this.mapApiWrapper = mapApiWrapper;
        this._store = _store;
        this.trackerServices = trackerServices;
        this.shipmentServices = shipmentServices;
        this.view = '';
        this.latitude = null;
        this.longitude = null;
        this.zoom = 5;
        this.isMarkerDragable = false;
        this.isDiscardDialog = false;
        this.isUpdateDialog = false;
        this.isUpdateConfirmDialog = false;
        this.isEditPlaceFromList = false;
        this.currentPolygonPoints = [];
        this.mapType = 'roadmap';
        this.headerName = '';
        this.selectedFromTime = '';
        this.selectedTillTime = '';
        this.markers = [];
        this.shipmentDetailsObject = null;
        this.isPolygonEditable = false;
        this.isDiscard = false;
        // public editPlace = 'destination';
        // public currentVts ='';
        this.selectedLocation = '';
        this.selectedTrip = null;
        this.selectedConfirmLocation = null;
        this.selectedAddress = null;
        // this.latitude = 21.15083373;
        // this.longitude = 79.081145;
        // this.zoom = 14;
        // this.currentVts = 'waitForLoad';
        this.view = 'web'; //document['view'];
        // if(this._router.url =='/vtsdashboard/trip/status/details/editTripLocation' && this.view =='web'){
        //   this._store.dispatch(go(['vtsdashboard/trip/status']));
        //   return;
        // }
        var tempObject = this.localStorageService.get("SHIPMENT-TRIP-DETAIL-OBJ");
        if (tempObject == undefined || tempObject == null) {
            // this._store.dispatch(go(['']));
            return;
        }
        console.log(tempObject);
        this.shipmentDetailsObject = JSON.parse(JSON.stringify(tempObject));
        if (this.shipmentDetailsObject['forEditPlace'] == 'destination') {
            this.headerName = 'Edit Destination';
        }
        else if (this.shipmentDetailsObject['forEditPlace'] == 'pickup') {
            this.headerName = 'Edit Pickup';
        }
        // this._store.dispatch({type: "TITLE",payload:this.headerName}); // set the header name
        // _store.dispatch({type: "IS_BACK",payload:{isBack:true,backToComponent:"trip/status/details"}});
        if (this.shipmentDetailsObject['selectedShipment'].movementLegs != null) {
            for (var i = 0; i < this.shipmentDetailsObject['selectedShipment'].movementLegs.length; i++) {
                this.shipmentDetailsObject['selectedShipment'].movementLegs[i]._totalTime = this.msToTime(this.shipmentDetailsObject['selectedShipment'].movementLegs[i].totalTime);
            }
        }
        console.log(this.shipmentDetailsObject);
        this.setupUI(this.shipmentDetailsObject); // call for setup various ui according to vehicle state
    } //close constructor
    EditShipmentLocationComponent.prototype.ngOnDestroy = function () {
        //this._store.dispatch({type: "IS_BACK",payload:{isBack:false,backToComponent:''}});
    };
    EditShipmentLocationComponent.prototype.ngAfterViewInit = function () {
    };
    EditShipmentLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            console.log('oninit');
            // let points = this.getNPointsCircularPolygone({lat : this.latitude , lng : this.longitude} , 0.5 , 6);
            // let points =  [
            //   {lat: 21.15083373, lng: 79.084234},
            //   {lat: 21.1537726, lng: 79.09427709},
            //   {lat: 21.1466711482, lng: 79.08886976}
            // ];
            // console.log(points);
            _this.zoom = 12;
            _this.polygon = _this.addPolygone(_this.map, _this.currentPolygonPoints, false, '#858585', '#353535');
        });
    };
    EditShipmentLocationComponent.prototype.setupUI = function (shipmentDetailsObject) {
        /*if(shipmentDetailsObject['selectedShipment']['vts']['state'] == 'WaitingForLoad'){
          if(shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'LT'){
            console.log(shipmentDetailsObject['forEditPlace']);
            console.log(shipmentDetailsObject['tripName'] );
            this.isDiscard = true;
            this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
    
            this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['name'];
            this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.fromTime;
            this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.tillTime;
            this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['boundry']);
            this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['latitude'];
            this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['longitude'];
            console.log(this.currentPolygonPoints);
          }
          else if(shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'LT' ){
            this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['name'];
            this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.fromTime;
            this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.tillTime;
    
            this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
    
            this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['boundry']);
            this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['latitude'];
            this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['longitude'];
            console.log(this.currentPolygonPoints);
          }
      }*/
        if (shipmentDetailsObject['selectedShipment']['vts']['state'] == 'EnrouteForPickUp') {
            /* if(shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'LT'){
               console.log(shipmentDetailsObject['forEditPlace']);
               console.log(shipmentDetailsObject['tripName'] );
               this.isDiscard = true;
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.tillTime;
       
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
       
             }
             else if(shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'LT' ){
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.tillTime;
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
       
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
             }
             else */ if (shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['name'];
                // this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.fromTime;
                // this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime;
                this.selectedFromTime = null;
                this.selectedTillTime = null;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
            }
            else if (shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'CT') {
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['name'];
                // this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.fromTime;
                // this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.tillTime;
                this.selectedFromTime = null;
                this.selectedTillTime = null;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['longitude'];
                this.isEditPlaceFromList = true;
                console.log(this.currentPolygonPoints);
            }
        }
        else if (shipmentDetailsObject['selectedShipment']['vts']['state'] == 'AtPickUpPoint') {
            /* if(shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'LT'){
               console.log(shipmentDetailsObject['forEditPlace']);
               console.log(shipmentDetailsObject['tripName'] );
               this.isDiscard = true;
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation.tillTime;
       
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].endLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
             }
             else if(shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'LT' ){
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation.tillTime;
       
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['lastTrip']));
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['lastTrip'].startLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
             }else*/ if (shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['name'];
                this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.fromTime;
                this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
            }
            else if (shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'CT') {
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['name'];
                this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.fromTime;
                this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.tillTime;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
            }
        }
        else if (shipmentDetailsObject['selectedShipment']['vts']['state'] == 'EnrouteForDestination') {
            if (shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                this.isDiscard = true;
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['name'];
                this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.fromTime;
                this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.tillTime;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
                console.log(this.latitude);
            }
            else if (shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['name'];
                // this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.fromTime;
                // this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime;
                this.selectedFromTime = null;
                this.selectedTillTime = null;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['longitude'];
                this.isEditPlaceFromList = true;
                console.log(this.currentPolygonPoints);
            }
            /* else if(shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'NT'){
               console.log(shipmentDetailsObject['forEditPlace']);
               console.log(shipmentDetailsObject['tripName'] );
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation.tillTime;
       
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['nextTrip']));
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
             }else if(shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'NT'){
               console.log(shipmentDetailsObject['forEditPlace']);
               console.log(shipmentDetailsObject['tripName'] );
               this.selectedLocation = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['name'];
               this.selectedFromTime = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation.fromTime;
               this.selectedTillTime = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation.tillTime;
       
               this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['nextTrip']));
               this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['boundry']);
               this.latitude = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['center']['latitude'];
               this.longitude = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['center']['longitude'];
               console.log(this.currentPolygonPoints);
             }*/
        }
        else if (shipmentDetailsObject['selectedShipment']['vts']['state'] == 'AtDestination') {
            if (shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                if (shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime == null)
                    this.isDiscard = true;
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['name'];
                this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.fromTime;
                this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation.tillTime;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].startLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
            }
            else if (shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'CT') {
                console.log(shipmentDetailsObject['forEditPlace']);
                console.log(shipmentDetailsObject['tripName']);
                if (shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime != null)
                    this.isDiscard = true;
                this.selectedLocation = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['name'];
                this.selectedFromTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.fromTime;
                this.selectedTillTime = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation.tillTime;
                this.selectedTrip = JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['currentShipment']));
                this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['boundry']);
                this.latitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['latitude'];
                this.longitude = shipmentDetailsObject['selectedShipment']['currentShipment'].endLocation['freightLocation']['geofence']['center']['longitude'];
                console.log(this.currentPolygonPoints);
            }
            /*else if(shipmentDetailsObject['forEditPlace'] == 'pickup' && shipmentDetailsObject['tripName'] == 'NT'){
              console.log(shipmentDetailsObject['forEditPlace']);
              console.log(shipmentDetailsObject['tripName'] );
              this.selectedLocation = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['name'];
              this.selectedFromTime = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation.fromTime;
              this.selectedTillTime = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation.tillTime;
      
              this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['nextTrip']));
              this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['boundry']);
              this.latitude = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['center']['latitude'];
              this.longitude = shipmentDetailsObject['selectedShipment']['nextTrip'].startLocation['freightLocation']['geofence']['center']['longitude'];
              console.log(this.currentPolygonPoints);
            }else if(shipmentDetailsObject['forEditPlace'] == 'destination' && shipmentDetailsObject['tripName'] == 'NT'){
              console.log(shipmentDetailsObject['forEditPlace']);
              console.log(shipmentDetailsObject['tripName'] );
              this.selectedLocation = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['name'];
              this.selectedFromTime = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation.fromTime;
              this.selectedTillTime = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation.tillTime;
      
      
              this.selectedTrip =JSON.parse(JSON.stringify(shipmentDetailsObject['selectedShipment']['nextTrip']));
              this.currentPolygonPoints = this.changeLatLng(shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['boundry']);
              this.latitude = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['center']['latitude'];
              this.longitude = shipmentDetailsObject['selectedShipment']['nextTrip'].endLocation['freightLocation']['geofence']['center']['longitude'];
              console.log(this.currentPolygonPoints);
            }*/
        }
    }; // close methods setupUi
    EditShipmentLocationComponent.prototype.changeLatLng = function (points) {
        console.log(points);
        var polyPoints = [];
        for (var i = 0; i < points.length; i++) {
            polyPoints.push({ lat: points[i].latitude, lng: points[i].longitude });
        }
        return polyPoints;
    };
    // markerDragPosition(event) {
    //   console.log(event);
    //
    //   console.log("drag end");
    //   let latPolygonOrigin = event.coords.lat;
    //   let lngPolygonOrigin = event.coords.lng;
    //   // console.log(this.map);
    //   this.latitude=latPolygonOrigin;
    //   this.longitude=lngPolygonOrigin;
    // }
    EditShipmentLocationComponent.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor) {
        // Map Center
        // Styling & Controls
        var myPolygon = new google_maps_types_1.google.maps.Polygon({
            paths: points,
            // draggable: true, // turn off if it gets annoying
            editable: editable,
            strokeColor: strokeColor,
            // strokeColor: '#353535',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            // fillColor: '#858585',
            fillColor: fillColor,
            fillOpacity: 0.35
        });
        myPolygon.setMap(map);
        return myPolygon;
    };
    EditShipmentLocationComponent.prototype.getNPointsCircularPolygone = function (center, dist, n) {
        var i = 0;
        var polygonePoint = [];
        for (i = 1; i <= n; i++) {
            polygonePoint.push(getPointAt(center, (360.0 / n) * (i), dist));
        }
        function toRAD(NUM) {
            return NUM * Math.PI / 180;
        }
        function toDeg(NUM) {
            return NUM * 180 / Math.PI;
        }
        function getPointAt(latlng, brng, dist) {
            // console.log(latlng);
            // console.log(latlng);
            dist = dist / 6371;
            brng = toRAD(brng);
            var lat1 = toRAD(latlng.lat), lon1 = toRAD(latlng.lng);
            var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
            var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) * Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) * Math.sin(lat2));
            if (isNaN(lat2) || isNaN(lon2))
                return null;
            return new google_maps_types_1.google.maps.LatLng(toDeg(lat2), toDeg(lon2));
        }
        ;
        return polygonePoint;
    };
    EditShipmentLocationComponent.prototype.editLocation = function () {
        // this.isMarkerDragable=true;
        // this.polygon.setMap(null);//
        this.isPolygonEditable = true;
        this.polygon.setEditable(true);
        this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
        this.placesServices();
    };
    EditShipmentLocationComponent.prototype.back = function () {
        this.setUrlForDesktop();
        // this._store.dispatch(go(['vtsdashboard/trip/status/details']));
    };
    EditShipmentLocationComponent.prototype.setUrlForDesktop = function () {
        this._store.dispatch({ type: "CLOSE_DIALOG", payload: { isClose: false } });
    };
    EditShipmentLocationComponent.prototype.placesServices = function () {
        var _this = this;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        console.log(input);
        var searchBox = new google_maps_types_1.google.maps.places.SearchBox(input);
        // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        this.map.addListener('bounds_changed', function () {
            searchBox.setBounds(_this.map.getBounds());
        });
        this.markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            _this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            _this.markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google_maps_types_1.google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google_maps_types_1.google.maps.Size(71, 71),
                    origin: new google_maps_types_1.google.maps.Point(0, 0),
                    anchor: new google_maps_types_1.google.maps.Point(17, 34),
                    scaledSize: new google_maps_types_1.google.maps.Size(25, 25)
                };
                // let currentInfowindow = new google.maps.InfoWindow({
                //   content: place.name
                // });
                _this.selectedAddress = place.formatted_address;
                console.log(_this.selectedAddress);
                // Create a marker for each place.
                var currentMarker = new google_maps_types_1.google.maps.Marker({
                    // map: this.map,
                    // icon: icon,
                    title: place.name,
                    position: place.geometry.location
                });
                _this.markers.push(currentMarker);
                //
                // currentMarker.addListener('click', ()=> {
                //   currentInfowindow.open(this.map, currentMarker);
                //   console.log(place.geometry.location.lat());
                // });
                //
                // currentInfowindow.addListener('click', ()=> {
                //   console.log(place.name);
                // });
                // ********** for show marker accoeding to screen ********
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
                // ****** for show marker accoeding to screen  ************
            });
            _this.map.fitBounds(bounds);
            if (_this.markers.length == 1) {
                _this.selectedLocation = _this.markers[0].title; // set current when choose any specific address
            }
        });
    };
    EditShipmentLocationComponent.prototype.setNewLocation = function (selectedMarker) {
        this.latitude = selectedMarker.position.lat();
        this.longitude = selectedMarker.position.lng();
        // this.polygon.setMap(null); // remove previous polygon
        var points = this.getNPointsCircularPolygone({ lat: this.latitude, lng: this.longitude }, 0.5, 5);
        this.polygon.setPath(points);
        //this.polygon == this.addPolygone(this.map,points,true,'#FF0000','#FF0000'); // set this to  selected polygon
        this.map.setZoom(15);
        this.map.setCenter(selectedMarker.getPosition());
        this.selectedLocation = selectedMarker.title;
        // **************************** clear all marker *******************
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
        //   *********************************************************
    };
    EditShipmentLocationComponent.prototype.discard = function () {
        var _this = this;
        if (this.shipmentDetailsObject['tripName'] == 'CT') {
            var trackingType = void 0;
            if (this.shipmentDetailsObject['selectedShipment']['currentShipment']['trackingType'] == 'Tracker') {
                trackingType = 'tracker';
            }
            else
                trackingType = 'trip';
            var obj = { forEditPlace: this.shipmentDetailsObject['forEditPlace'],
                discardObj: {
                    "vehicleId": this.shipmentDetailsObject['selectedShipment']['currentShipment']['vehicleId'],
                    "type": "user.add.missing.pickup",
                    "tripId": this.shipmentDetailsObject['selectedShipment']['vts']['tripId'],
                    "trackingType": trackingType,
                    "startTime": null,
                    "endTime": null,
                    "deviceImei": this.shipmentDetailsObject['selectedShipment']['vts']['deviceImei'],
                    "locationInfo": null,
                    "vehicleStateInfo": null
                }
            };
            console.log(obj);
            this.trackerServices.discardTrackerTrip.emit(obj); // call trip details services
            setTimeout(function () {
                _this.shipmentServices.getShipmentDetail.emit(_this.shipmentDetailsObject.selectedShipment.currentShipment.shipmentId);
            }, 500);
            // this._store.dispatch(go(['vtsdashboard/trip/status/details']));
            //this.setUrlForDesktop();
        }
        this.setUrlForDesktop();
    };
    EditShipmentLocationComponent.prototype.save = function () {
        var _this = this;
        var vertices = this.polygon.getPath();
        console.log(vertices);
        // Iterate over the vertices.
        var boundry = [];
        for (var i = 0; i < vertices.getLength(); i++) {
            var xy = vertices.getAt(i);
            // console.log(xy.lat()+"     "+xy.lng());
            // boundry.push(.selectedShipment.currentShipment.destination["0"].freightLocation.geofence.boundry)
            boundry.push({ latitude: xy.lat(), longitude: xy.lng() });
        }
        console.log(boundry);
        console.log(this.shipmentDetailsObject['forEditPlace']);
        var selectedTrip = JSON.parse(JSON.stringify(this.selectedTrip));
        if (this.shipmentDetailsObject['forEditPlace'] == 'destination') {
            selectedTrip.endLocation['freightLocation']['geofence']['boundry'] = boundry;
            selectedTrip.endLocation['freightLocation']['geofence']['center'] = { latitude: this.latitude, longitude: this.longitude };
            selectedTrip.endLocation['freightLocation']['name'] = this.selectedLocation;
            if (this.selectedAddress != null)
                selectedTrip.endLocation['freightLocation']['address'] = this.selectedAddress;
        }
        else if (this.shipmentDetailsObject['forEditPlace'] == 'pickup') {
            selectedTrip.startLocation['freightLocation']['geofence']['boundry'] = boundry;
            selectedTrip.startLocation['freightLocation']['geofence']['center'] = { latitude: this.latitude, longitude: this.longitude };
            selectedTrip.startLocation['freightLocation']['name'] = this.selectedLocation;
            if (this.selectedAddress != null)
                selectedTrip.startLocation['freightLocation']['address'] = this.selectedAddress;
        }
        if (selectedTrip != null) {
            this.trackerServices.updateTrackerTrip.emit(selectedTrip); // call trip details services
            setTimeout(function () {
                _this.shipmentServices.getShipmentDetail.emit(_this.shipmentDetailsObject.selectedShipment.currentShipment.shipmentId);
            }, 500); // this._store.dispatch(go(['vtsdashboard/trip/status/details'])); // return to previous page
            this.setUrlForDesktop();
        }
        console.log(this.shipmentDetailsObject);
        console.log(selectedTrip);
    }; // save close
    EditShipmentLocationComponent.prototype.editLocationByMovementLog = function (SelectedMovementLocation) {
        var _this = this;
        console.log(SelectedMovementLocation);
        var trackingType;
        if (this.shipmentDetailsObject['selectedShipment']['currentShipment']['trackingType'] == 'Tracker') {
            trackingType = 'tracker';
        }
        else
            trackingType = 'trip';
        var obj = {
            forEditPlace: this.shipmentDetailsObject['forEditPlace'],
            movementObj: {
                "vehicleId": this.shipmentDetailsObject['selectedShipment']['currentShipment']['vehicleId'],
                "type": "user.add.missing.pickup",
                "tripId": this.shipmentDetailsObject['selectedShipment']['vts']['tripId'],
                "startTime": SelectedMovementLocation.startTime,
                "endTime": null,
                "trackingType": trackingType,
                "deviceImei": this.shipmentDetailsObject['selectedShipment']['vts']['deviceImei'],
                "locationInfo": null,
                "vehicleStateInfo": null
            }
        };
        this.trackerServices.updateTrackerTripFromStop.emit(obj); // call trip details services
        setTimeout(function () {
            _this.shipmentServices.getShipmentDetail.emit(_this.shipmentDetailsObject.selectedShipment.currentShipment.shipmentId);
        }, 500);
        console.log(obj);
        this.setUrlForDesktop();
    };
    EditShipmentLocationComponent.prototype.msToTime = function (duration) {
        var x = duration / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        console.log(days);
        var totalDuration = '';
        if (days > 0) {
            totalDuration = days + "d ";
        }
        if (hours > 0) {
            totalDuration = totalDuration + hours + "hr ";
        }
        if (days >= 1) {
            return totalDuration;
        }
        if (minutes > 0) {
            return totalDuration = totalDuration + minutes + "min";
        }
        if (seconds > 0 && totalDuration == '') {
            totalDuration = totalDuration + seconds + " sec";
        }
        if (totalDuration == '') {
            return '0 sec';
        }
        else {
            return totalDuration;
        }
    }; //close methods msToTime
    return EditShipmentLocationComponent;
}()); // class close
__decorate([
    core_1.ViewChild(core_2.AgmMap),
    __metadata("design:type", Object)
], EditShipmentLocationComponent.prototype, "agmMap", void 0);
EditShipmentLocationComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-shipment-location',
        template: __webpack_require__("../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-shipment-location/edit-shipment-location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _b || Object, typeof (_c = typeof core_2.GoogleMapsAPIWrapper !== "undefined" && core_2.GoogleMapsAPIWrapper) === "function" && _c || Object, typeof (_d = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _d || Object, typeof (_e = typeof tracker_services_1.TrackerServices !== "undefined" && tracker_services_1.TrackerServices) === "function" && _e || Object, typeof (_f = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _f || Object])
], EditShipmentLocationComponent);
exports.EditShipmentLocationComponent = EditShipmentLocationComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-shipment-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none\n}\n\n.my-map-search{\n    left: 3%;\n    width: 91%;\n    position: absolute;\n    z-index: 10;\n    margin-top: 5px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slow-down\">\n  <!-- <div> -->\n    <!-- <section class=\"my-map-search\"> -->\n      <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\n      <!-- <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 30px; margin-top: 7px;font-size: 15px; position: absolute\"></i>\n      <input id=\"pac-input\" type=\"text\" class=\"search\" mdTooltip=\"search Here\" placeholder=\"'Search'\">\n    </section> -->\n\n    <!-- ************************ map start here  ******************************************** -->\n    <div style=\"display:flex\">\n        <div>\n            <section class=\"my-map-search\">\n                <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\n                <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 20px; margin-top: 7px;font-size: 15px; position: absolute\"></i>\n                <input id=\"pac-input\" type=\"text\" class=\"search\" mdTooltip=\"search Here\" placeholder=\"'Search'\">\n              </section>\n          <section style=\"position:absolute;z-index:10; left:5px; margin-top :30px;\">\n            <md-button-toggle-group class=\"my-toggle\" #group=\"mdButtonToggleGroup\" [(ngModel)]=\"mapType\">\n              <md-button-toggle value=\"hybrid\">\n                <span>'Satellite'</span>\n              </md-button-toggle>\n              <md-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;opacity: .6;\">\n                <span>'Map'</span>\n              </md-button-toggle>\n            </md-button-toggle-group>\n          </section>\n\n          <agm-map [mapTypeId]=\"mapType\" style=\"height: 38vh; width : 80vh\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"5\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n            </agm-marker>\n          </agm-map>\n        </div>\n      </div>\n    <!-- ************************ map end here  ******************************************** -->\n    <div fxLayout=\"column\">\n        <div fxFlex=50>\n          <md-input-container style=\"width:100%\">\n              <input placeholder=\"Name\" [(ngModel)]= \"name\" mdInput required>\n            </md-input-container>\n          </div>\n          <div fxFlex=50>\n            <md-input-container style=\"width:100%\">\n                <input placeholder=\"Address\" [disabled]=\"true\" [(ngModel)]=\"address\" mdInput required>\n              </md-input-container>\n            </div>\n      </div>\n      <div *ngIf=\"isSearched\" >\n          <md-radio-group value=\"radioSelector\" >\n            <div fxLayout=\"row\">\n              <div *ngIf=\"toAddBoundary\" fxFlex=40>\n                <md-radio-button [value]=\"bundary\" (change)=\"onAddLocation()\">Add Boundary</md-radio-button>\n              </div>\n\n              <div *ngIf = \"toAddProximity\" fxFlex=40>\n                <md-radio-button [value]=\"proximity\" (change)=\" onAddProximity()\"> Add Proximity </md-radio-button>\n              </div>\n\n              <div fxFlex=\"20\"></div>\n            </div>\n          </md-radio-group>\n        </div>\n    <div *ngIf = \"isVisible\" >\n        <md-input-container style=\"width: 100%;\" >\n            <input placeholder=\"radius(in meters)\" [(ngModel)]=\"radius\" mdInput required (keyup)=\"onKeyEvent($event)\">\n          </md-input-container>\n    </div>\n    <div style=\"float : left; margin-top: 0px\" >\n        <!-- <button md-raised-button  (click)=\"cancel()\" style=\"margin-right: 15px\">{{'Cancel' | translate}}</button> -->\n        <button md-raised-button (click)=\"saveLocation()\"  >Save</button>\n    </div>\n    <div>\n  <!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var FreightLocationCreaterComponent = (function () {
    function FreightLocationCreaterComponent(mapApiWrapper) {
        this.mapApiWrapper = mapApiWrapper;
        this.latitude = null;
        this.longitude = null;
        this.zoom = 5;
        this.isMarkerDragable = false;
        this.isPolygonEditable = false;
        this.mapType = 'roadmap';
        this.markers = [];
        this.name = "";
        this.freightObj = {};
        this.isVisible = false;
        this.isSearched = false;
        this.circle = null;
        this.toAddProximity = true;
        this.toAddBoundary = true;
        // public id: any;
        this.onLocationCreation = new core_1.EventEmitter();
        this.latitude = null;
        this.longitude = null;
        console.log(this.latitude);
        this.zoom = 14;
        console.log("constructor");
    } // constructor close
    FreightLocationCreaterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in on init");
        // if(this._calledFrom != null) {
        console.log("oninit");
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            // let points = this.getNPointsCircularPolygone({lat : this.latitude , lng : this.longitude} , 0.5 , 6);
            var points = [];
            console.log(points);
            _this.selectedValue = _this.selectedValueFromParent;
            console.log(_this.selectedValueFromParent);
            console.log(_this.selectedValue);
            if (_this.selectedValue['type'] == "Proximity") {
                _this.toAddProximity = true;
                _this.toAddBoundary = false;
                // this.selectedValue = "both";
            }
            else if (_this.selectedValue['type'] == "Polygon") {
                _this.toAddBoundary = true;
                _this.toAddProximity = false;
                // this.selectedValue = "both";
            }
            else {
                _this.toAddProximity = true;
                _this.toAddBoundary = true;
            }
            // this.selectedValue['type'] = "both";
            _this.polygon = _this.addPolygone(_this.map, points, false, '#858585', '#353535');
            _this.editLocation();
        });
        // }
    };
    FreightLocationCreaterComponent.prototype.ngOnDestroy = function () {
        // this.selectedValue['type'] = "both";
    };
    FreightLocationCreaterComponent.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor) {
        // Map Center
        // Styling & Controls
        var myPolygon = new google.maps.Polygon({
            paths: points,
            // draggable: true, // turn off if it gets annoying
            editable: editable,
            strokeColor: strokeColor,
            // strokeColor: '#353535',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            // fillColor: '#858585',
            fillColor: fillColor,
            fillOpacity: 0.35
        });
        myPolygon.setMap(map);
        return myPolygon;
    };
    FreightLocationCreaterComponent.prototype.getNPointsCircularPolygone = function (center, dist, n) {
        var i = 0;
        var polygonePoint = [];
        for (i = 1; i <= n; i++) {
            polygonePoint.push(getPointAt(center, (360.0 / n) * (i), dist));
        }
        function toRAD(NUM) {
            return NUM * Math.PI / 180;
        }
        function toDeg(NUM) {
            return NUM * 180 / Math.PI;
        }
        function getPointAt(latlng, brng, dist) {
            // console.log(latlng);
            // console.log(latlng);
            dist = dist / 6371;
            brng = toRAD(brng);
            var lat1 = toRAD(latlng.latitude), lon1 = toRAD(latlng.longitude);
            var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
            var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) * Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) * Math.sin(lat2));
            if (isNaN(lat2) || isNaN(lon2))
                return null;
            return new google.maps.LatLng(toDeg(lat2), toDeg(lon2));
        }
        ;
        return polygonePoint;
    };
    FreightLocationCreaterComponent.prototype.editLocation = function () {
        // this.isMarkerDragable=true;
        // this.polygon.setMap(null);//
        this.isPolygonEditable = true;
        this.polygon.setEditable(true);
        this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
        this.placesServices();
    };
    FreightLocationCreaterComponent.prototype.back = function () {
    };
    FreightLocationCreaterComponent.prototype.placesServices = function () {
        var _this = this;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        console.log(input);
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.addListener('bounds_changed', function () {
            searchBox.setBounds(_this.map.getBounds());
        });
        this.markers = [];
        if (this.res != null) {
            if (this.res["data"]["radius"] == null) {
                // console.log(this.res["data"]["radius"])
                var points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
                this.polygon.setPath(points);
                this.polygon.setMap(this.map);
            }
            else {
                this.drawCircel((Number)(this.res["data"]["radius"]));
            }
        }
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            _this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            _this.markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                var currentMarker = new google.maps.Marker({
                    // map: this.map,
                    // icon: icon,
                    title: place.formatted_address,
                    position: place.geometry.location
                });
                // console.log(place.geometry.location);
                _this.latitude = currentMarker['position'].lat();
                _this.longitude = currentMarker['position'].lng();
                _this.isSearched = true;
                console.log(_this.latitude + " " + _this.longitude);
                _this.address = place.formatted_address;
                //  this.polygon.setMap(this.map);
                console.log(place.formatted_address);
                _this.markers.push(currentMarker);
                // ********** for show marker according to screen ********
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
                // ****** for show marker accoeding to screen  ************
            });
            _this.map.fitBounds(bounds);
        });
    };
    FreightLocationCreaterComponent.prototype.openSnackBar = function (message) {
        // this.snackBar.open(message, '', <MdSnackBarConfig>{ duration: 4000 });
    };
    FreightLocationCreaterComponent.prototype.onAddProximity = function () {
        this.isVisible = true;
        this.isCircle = true;
        // circle.bindTo('center',marker,'position');
    };
    // method to draw circle
    FreightLocationCreaterComponent.prototype.drawCircel = function (radius) {
        // this.radius = radius;
        this.isCircle = true;
        if (this.circle != null)
            this.circle.setMap(null);
        if (this.polygon != null)
            this.polygon.setMap(null);
        this.circle = new google.maps.Circle({
            radius: radius,
            center: new google.maps.LatLng(this.latitude, this.longitude)
        });
        this.circle.setMap(this.map);
    };
    // Add location boundary on map
    FreightLocationCreaterComponent.prototype.onAddLocation = function () {
        this.radius = null;
        this.isCircle = false;
        this.isVisible = false;
        var obj = { latitude: this.latitude, longitude: this.longitude };
        console.log('Set New Location Obj');
        console.log(obj);
        if (this.circle != null)
            this.circle.setMap(null);
        if (this.polygon != null)
            this.polygon.setMap(null);
        var points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        this.polygon.setPath(points);
        this.polygon.setMap(this.map);
        this.map.setZoom(14);
        console.log(this.fretDetails);
    };
    FreightLocationCreaterComponent.prototype.onKeyEvent = function (event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8) {
            this.drawCircel(Number(this.radius));
        }
    };
    FreightLocationCreaterComponent.prototype.saveLocation = function () {
        if (this.radius == null) {
            var vertices = this.polygon.getPath();
            var polygonPoints = [];
            // Iterate over the vertices.
            for (var i = 0; i < vertices.getLength(); i++) {
                var xy = vertices.getAt(i);
                polygonPoints.push({ latitude: xy.lat(), longitude: xy.lng() });
                console.log(xy.lat() + "     " + xy.lng());
            }
            this.freightObj = {
                "name": this.name,
                "address": this.address,
                "geofence": {
                    "boundry": polygonPoints,
                    "center": { "latitude": this.latitude, "longitude": this.longitude },
                    "type": "Polygon"
                }
            };
            console.log(this.freightObj);
        }
        else {
            this.freightObj = {
                "name": this.name,
                "address": this.address,
                "geofence": {
                    "type": "Proximity",
                    "circle": {
                        "center": { "latitude": this.latitude, "longitude": this.longitude },
                        "radius": this.radius
                    }
                }
            };
            console.log(this.freightObj);
        }
        var emiter = this.onLocationCreation.emit(this.freightObj);
        console.log(emiter);
    };
    return FreightLocationCreaterComponent;
}());
__decorate([
    core_1.ViewChild(core_2.AgmMap),
    __metadata("design:type", Object)
], FreightLocationCreaterComponent.prototype, "agmMap", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FreightLocationCreaterComponent.prototype, "onLocationCreation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FreightLocationCreaterComponent.prototype, "selectedValueFromParent", void 0);
FreightLocationCreaterComponent = __decorate([
    core_1.Component({
        selector: 'app-freight-location-creater',
        template: __webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-creater/freight-location-creater.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.GoogleMapsAPIWrapper !== "undefined" && core_2.GoogleMapsAPIWrapper) === "function" && _a || Object])
], FreightLocationCreaterComponent);
exports.FreightLocationCreaterComponent = FreightLocationCreaterComponent;
var _a;
//# sourceMappingURL=freight-location-creater.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mycustomDialog-Location {\n  position: fixed; /* Stay in place */\n  z-index: 999; /* Sit on top */\n  padding-top: 10%; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border-radius: 5px;\n    border: 1px solid #888;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.3);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    -webkit-animation-duration: 0.2s;\n            animation-duration: 0.2s\n}\n\n.modal-header {\n    font-family: Gotham-Rounded-Medium,Sans-Serif!important;\n    font-size: 16px;\n    padding: 5px 5px;\n    background-color:#1E88E5;;\n    color: white;\n    text-align: center;\n}\n\n.button1 {\n    /* padding: 10px; */\n    /* margin-left: 20px; */\n    /* background:rgba(245,245,245,1); */\n    color: gray;\n     line-height: 40px;\n    font-size: 13px;\n    font-weight: 500;\n    text-overflow: ellipsis;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.button1 :focus{\n    background-color:#5b89ff !important;\n    color: white;\n}\n\nul {\n    list-style: none; margin-left: -32px;\n}\n\nli {\n    border: 1px solid #ddd;\n    margin-top: -1px; /* Prevent double borders */\n    background-color: white;\n    padding: 12px;\n    text-decoration: none;\n    font-size: 14px;\n    /* font-family: Arial, Helvetica, sans-serif; */\n    color: black;\n    display: block;\n    color: #333;\n    font-size: 14px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-input-container style=\"width: 100%;margin-top:-20px\">\n  <input #tripLocation mdInput [(ngModel)]=\"locationName\" (keyup)=\"searchName(tripLocation.value)\" (click)=\"isSearchClicked=true; onFilterClick('PUBLIC')\"\n    onkeydown=\"if(((event.keyCode<=65 &&  event.keyCode>=122)) && event.keyCode!=8 && event.keyCode!=13 )return false;\" required (blur)=\"hideList(true);hideDropdownMenu()\" >\n  <!--(blur)=\"hideDropdownMenu()\"-->\n</md-input-container>\n<br>\n\n\n<div *ngIf=\"isSearchClicked\" style=\"z-index: 11; position:absolute; width: 96%;\">\n  <div fxLayout=\"row\" style = \"margin: 0px 0px;background-color: whitesmoke;padding-top: 1%; padding-bottom: 1%;margin-top: -2%;\">\n    <!--style=\"border-right: solid; border-right-color:#aaaaaa;padding: 0px 5px\"-->\n    <div fxFlex=\"25\" style=\"padding-left: 7%\" >\n           <span [style.color]=\"clickFilter==='PUBLIC'?'blue':'gray'\" (click)=\"hideList(false);onFilterClick('PUBLIC')\"><label style=\"font-size: smaller\">Public</label></span>\n    </div>\n    <div fxFlex=\"50\" style=\"padding-left: 11%\">\n      <span [style.color]=\"clickFilter==='MYLOCATIONS'?'blue':'gray'\" (click)=\"hideList(false);isHideList=false;onFilterClick('MYLOCATIONS')\"><label style=\"font-size: smaller\">My Locations</label></span>\n    </div>\n    <div fxFlex=\"25\">\n      <span [style.color]=\"clickFilter==='FAVOURITES'?'blue':'gray'\" (click)=\"hideList(false);isHideList=false;onFilterClick('FAVOURITES')\"><label style=\"font-size: smaller\">Favourite</label></span>\n    </div>\n  </div>\n</div>\n\n\n\n<!--<md-select placeholder=\"Proximity/Boundary Selector\" [(ngModel)]=\"selected_value\" (change)=\"onSelection()\" style=\"width:100%; margin-top: 18px;\">-->\n  <!--<md-option value=\"add_boundary\">Add Boundary</md-option>-->\n  <!--<md-option value=\"add_proximity\">Add Proximity</md-option>-->\n  <!--<md-option value=\"both\">Both</md-option>-->\n<!--</md-select>-->\n<div style=\" z-index: 9; overflow: hidden; position: absolute; background-color: white; min-width: 100%; margin-top: 20px; margin-left: 0px;\"\n  *ngIf=\"locationAvailable\">\n  <div style=\"height: 250px; overflow-y: scroll;width: 96%\">\n\n  <div *ngIf=\"isRecentAvailable\">\n      <h4 style=\"height:0px\">Recently Used</h4>\n    <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let location of recentLocationList\">\n      <li (click)=\"setLocation(location)\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i>{{location['name']}}</li>\n    </ul>\n  </div>\n  <!--location['freightLocation']['name']-->\n  <h4 style=\"height:0px\">Public</h4>\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let publiclocation of locationNameList;let ind=index\">\n    <li>\n      <i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i>\n      <span (click)=\"setLocation(publiclocation)\" >{{publiclocation['freightLocation']['name']}}</span>\n      <span style=\"float: right\" (click)=\"setFavouriteLocation(publiclocation.freightLocation)\">\n        <i  [style.color]=\"(publiclocation.freightLocation.isStared)?'blue':'black'\" class=\"fa fa-star-o\" aria-hidden=\"true\" ></i>\n      </span>\n    </li>\n  </ul>\n\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\">\n    <li (click)=\"onAddLocation()\">+add new location</li>\n  </ul>\n  </div>\n\n </div>\n\n<div style=\" z-index: 9; overflow: visible; position: absolute; background-color: white; min-width: 100%; margin-top: 20px; margin-left: 0px;\"\n  *ngIf=\"isPrivateLocationAvailable\">\n<!--\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let location of locationNameList\">\n    <li (click)=\"setLocation(location)\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i>{{location.freightLocation.name}}<span (click)=\"setLocation(location)\"><i class=\"fa fa-star-o\" aria-hidden=\"true\" style=\"float: right\"></i></span></li>\n  </ul> -->\n\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let location of locationNameList\">\n      <li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i><span (click)=\"setLocation(location)\">{{location.freightLocation.name}}</span><span style=\"float: right\" (click)=\"setFavouriteLocation(location.freightLocation)\"><i [style.color]=\"(location.freightLocation.isStared)?'blue':'black'\" class=\"fa fa-star-o\" aria-hidden=\"true\" ></i></span></li>\n    </ul>\n\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\">\n    <li (click)=\"onAddLocation()\">+add new location</li>\n  </ul>\n</div>\n\n<div style=\" z-index: 9; overflow: visible; position: absolute; background-color: white; min-width: 100%; margin-top: 20px; margin-left: 0px;\"\n  *ngIf=\"isFavouriteLocationAvailable\">\n\n  <!-- <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let location of locationNameList\">\n    <li (click)=\"setLocation(location)\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i>{{location.favFreightLocation.name}}</li>\n  </ul> -->\n\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\" *ngFor=\"let location of locationNameList\">\n      <li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  style=\"margin-right: 8px; font-size: 15px\"></i><span (click)=\"setLocation(location)\">{{location.favFreightLocation.name}}</span><span style=\"float: right\" ><i [style.color]=\"(location.favFreightLocation.isStared)?'blue':'black'\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"removeFavouriteLocation(location)\"></i></span></li>\n    </ul>\n\n  <ul style=\"list-style-type: none; padding: 0; margin: 0;\">\n    <li (click)=\"onAddLocation()\">+add new location</li>\n  </ul>\n</div>\n\n\n<div *ngIf=\"isDialogOpen\" class=\"mycustomDialog-Location\" style=\"padding-top: 70px;\">\n  <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow: hidden;max-width: 560px;height: calc(100vh - 140px);\">\n    <div class=\"modal-header\">\n      <span class=\"close\" (click)=\"isDialogOpen=false; locationAvailable=false\">&times;</span>\n      <div>\n        <label>Location</label>\n      </div>\n    </div>\n\n    <div style=\"padding: 5px;font-size: 13px;overflow: auto;width: calc(99vw - 16px);height: auto;\">\n      <app-freight-location-creater [selectedValueFromParent]=\"selected_value\" (onLocationCreation)=\"getFreightLocationObject($event)\"></app-freight-location-creater>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
// import { FreightLocationServices } from "../../../services/freightLocation.service";
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var FreightLocationPickerComponent = (function () {
    function FreightLocationPickerComponent(http, localStorageService, _store) {
        var _this = this;
        this.http = http;
        this.localStorageService = localStorageService;
        this._store = _store;
        this.PATH = 'http://tracknet.fretron.com';
        this.FREIGHT = 'http://tracknet.fretron.com';
        this.defaultHeaders = new http_1.Headers();
        this.unSub_searchName = null;
        this.waitForLastResp = false;
        this.locationNameList = [];
        this.recentLocationList = [];
        this.isRecentAvailable = false;
        this.locationAvailable = false;
        this.isPrivateLocationAvailable = false;
        this.isSearchClicked = false;
        this.isFavouriteLocationAvailable = false;
        this.isHideList = true;
        this.clickFilter = "PUBLIC";
        this.addTripFreightLocation = new core_1.EventEmitter();
        this.publicFreightLocation = new core_1.EventEmitter();
        this.recentFreightLocation = new core_1.EventEmitter();
        this.privateFreightLocation = new core_1.EventEmitter();
        this.favouriteFreightLocation = new core_1.EventEmitter();
        this.addFavouriteLocation = new core_1.EventEmitter();
        this.removeFavouriteFLocation = new core_1.EventEmitter();
        this.isDialogOpen = false;
        this.unSub_customerDetails = null;
        this.onLocationPick = new core_1.EventEmitter();
        this.searchLocation = new core_1.EventEmitter();
        this.locationFromTemplate = new core_1.EventEmitter();
        this.token = this.localStorageService.get("AUTH_TOKEN");
        // this.orgId=this.localStorageService.get("ORGID");
        this.unSub_customerDetails = _store.select('customerDetails').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            // console.log("value['orgId']");
            // console.log(value['customer']['orgId']);
            // this._services.getVehicleList.emit(value['customer']['orgId']);
            _this.orgId = value['customer']['orgId'];
        });
        //console.log(this.locationType);
        this.searchLocation.subscribe(function (obj) {
            var path = environment_1.BASE_IP.FERIGHT_LOCATION + "/search?type=" + obj['type'] + "&name=" + obj['name'] + "&geofenceType=" + _this.selected_value['type'];
            // console.log(path);
            _this.searchLocationByName(path, name).subscribe(function (response) {
                console.log(response);
                _this.setLocationList(response);
            }, function (err) {
                console.log(err);
            });
        });
        this.addTripFreightLocation.subscribe(function (fretObj) {
            console.log(fretObj);
            var path = environment_1.BASE_IP.FERIGHT_LOCATION + "/locations/add";
            console.log(path);
            _this.addFretLocation(fretObj, path).subscribe(function (response) {
                // TODO
                console.log(response);
                if (response.status == 200) {
                }
            }, function (err) {
                console.log(err);
            });
        });
        this.publicFreightLocation.subscribe(function (name) {
            // console.log(path);
            _this.publicFreight().subscribe(function (response) {
                _this.locationNameList = response['value'];
                if (_this.locationNameList != null) {
                    console.log(_this.locationNameList);
                    for (var i = 0; i < _this.locationNameList.length; i++) {
                        _this.locationNameList[i]['isStared'] = false;
                    }
                }
                _this.locationAvailable = true;
                // this.isRecentAvailable = false;
                _this.isPrivateLocationAvailable = false;
                _this.isFavouriteLocationAvailable = false;
                console.log(_this.locationNameList);
            }, function (err) {
                console.log(err);
            });
            // this.recentFreight().subscribe(response =>{
            //   console.log(response['value']);
            // },err=>{
            //   console.log(err);
            // });
        });
        this.recentFreightLocation.subscribe(function (name) {
            // console.log(path);
            _this.recentFreight().subscribe(function (response) {
                _this.recentLocationList = response['value'];
                if (_this.recentLocationList != null) {
                    if (_this.recentLocationList.length > 0) {
                        // this.locationAvailable=true;
                        _this.isRecentAvailable = true;
                        _this.isPrivateLocationAvailable = false;
                        _this.isFavouriteLocationAvailable = false;
                    }
                }
                console.log(_this.recentLocationList);
            }, function (err) {
                console.log(err);
            });
        });
        this.privateFreightLocation.subscribe(function (name) {
            // console.log(path);
            _this.privateFreight().subscribe(function (response) {
                console.log(response['value']);
                _this.locationNameList = response['value'];
                if (_this.locationNameList != null) {
                    if (_this.locationNameList.length > 0) {
                        for (var i = 0; i < _this.locationNameList.length; i++) {
                            _this.locationNameList[i]['isStared'] = false;
                        }
                    }
                }
                _this.locationAvailable = false;
                _this.isRecentAvailable = false;
                _this.isPrivateLocationAvailable = true;
                _this.isFavouriteLocationAvailable = false;
            }, function (err) {
                console.log(err);
            });
        });
        this.favouriteFreightLocation.subscribe(function (name) {
            // console.log(path);
            _this.getFavouriteFreight().subscribe(function (response) {
                console.log(response['value']);
                _this.locationNameList = response['value'];
                _this.isFavouriteLocationAvailable = true;
                _this.locationAvailable = false;
                _this.isRecentAvailable = false;
                _this.isPrivateLocationAvailable = false;
            }, function (err) {
                console.log(err);
            });
        });
        this.addFavouriteLocation.subscribe(function (location) {
            _this.setFavouriteFreightLocation(location).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        });
        this.removeFavouriteFLocation.subscribe(function (location) {
            _this.removeFavouriteFreightLocation(location).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        });
    } //constructor close here
    FreightLocationPickerComponent.prototype.ngOnDestroy = function () {
    };
    FreightLocationPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.pickerLocationType);
        this.selected_value = this.pickerLocationType;
        var input = this.inputType;
        this.locationFromTemplate.subscribe(function (locationObj) {
            console.log(locationObj['source']);
            console.log(locationObj['destination']);
            console.log(_this.inputType);
            if (_this.inputType == 'origin') {
                _this.locationName = locationObj['source'];
            }
            if (_this.inputType == 'destination') {
                _this.locationName = locationObj['destination'];
            }
        });
    };
    FreightLocationPickerComponent.prototype.searchLocationByName = function (path, name) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                var obj = { "status": response.status,
                    "data": response.json()
                };
                return obj;
            }
            else {
                //   console.log("not 200");
                //   return {error:'X'};
            }
        });
    };
    FreightLocationPickerComponent.prototype.setLocationList = function (value) {
        console.log("setLocation");
        console.log(value['data']['list']);
        if (value == null) {
            return;
        }
        if (value['status'] == 200) {
            console.log(value);
            this.waitForLastResp = false;
            if (value['data']['list'].length > 0) {
                var locationList = [];
                for (var i = 0; i < value['data']['list'].length; i++) {
                    var obj = value['data']['list'][i];
                    locationList.push(obj);
                }
                this.locationNameList = locationList;
                console.log(this.locationNameList);
            }
        }
    };
    FreightLocationPickerComponent.prototype.setFavouriteFreightLocation = function (location) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // headers.set("orgUuid",this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: location
        });
        var path4 = environment_1.BASE_IP.FERIGHT_LOCATION + '/favourite/add';
        console.log(path4);
        return this.http.request(path4, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response.json());
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.removeFavouriteFreightLocation = function (location) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // headers.set('orguuid',this.orgId);
        // headers.set("orgUuid",this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        var path4 = environment_1.BASE_IP.FERIGHT_LOCATION + '/favourite/remove?uuid=' + location['favFreightLocation']['uuid'];
        console.log(path4);
        return this.http.request(path4, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response.json());
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.getFavouriteFreight = function () {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // headers.set("orgUuid",this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        var path4 = environment_1.BASE_IP.FERIGHT_LOCATION + '/get/favourite?geofenceType=' + this.selected_value['type'];
        console.log(path4);
        return this.http.request(path4, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response.json());
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.privateFreight = function () {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        // let headers = new Headers();
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // headers.set("orgUuid",this.orgId);
        console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        var path3 = environment_1.BASE_IP.FERIGHT_LOCATION + '/get/private?geofenceType=' + this.selected_value['type'];
        console.log(path3);
        return this.http.request(path3, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.recentFreight = function () {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        // headers.set("orgUuid",this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        var path2 = environment_1.BASE_IP.FERIGHT_LOCATION + '/get/recent?geofenceType=' + this.selected_value['type'];
        console.log(path2);
        return this.http.request(path2, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.publicFreight = function () {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        // headers.set("orgUuid",this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        var path = environment_1.BASE_IP.FERIGHT_LOCATION + '/get/public?geofenceType=' + this.selected_value['type'];
        console.log(path);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response.json());
            if (response.status == 200) {
                return response.json();
            }
            else { }
        });
    };
    FreightLocationPickerComponent.prototype.onFilterClick = function (button) {
        this.isSearchClicked = true;
        console.log(button);
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        headers.set("orgUuid", this.orgId);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        if (button === "PUBLIC") {
            this.clickFilter = "PUBLIC";
            this.recentFreightLocation.emit();
            this.publicFreightLocation.emit();
        }
        if (button == "MYLOCATIONS") {
            this.clickFilter = "MYLOCATIONS";
            this.privateFreightLocation.emit();
        }
        if (button == "FAVOURITES") {
            this.clickFilter = "FAVOURITES";
            this.favouriteFreightLocation.emit();
        }
    };
    FreightLocationPickerComponent.prototype.searchName = function (name) {
        console.log(name);
        // if (!this.waitForLastResp) {
        this.waitForLastResp = true;
        if (name.toString().length == 0) {
            this.waitForLastResp = false;
        }
        this.locationAvailable = true;
        var type = "public";
        if (this.isPrivateLocationAvailable) {
            type = "private";
        }
        if (this.isFavouriteLocationAvailable) {
            type = "fav";
        }
        if (name == '') {
            this.onFilterClick(this.clickFilter);
        }
        else {
            this.searchLocation.emit({ name: name, type: type });
        }
    };
    FreightLocationPickerComponent.prototype.getFreightLocationObject = function (value) {
        var type = "Public";
        if (this.isPrivateLocationAvailable) {
            type = "Private";
        }
        console.log(value);
        this.freightObject = JSON.parse(JSON.stringify(value));
        this.locationName = this.freightObject['name'];
        /**************manually added *****************/
        var obj = {
            "type": type,
            "address": this.freightObject['address'],
            "geofence": this.freightObject['geofence'],
            "material": [""],
            "name": this.freightObject['name']
        };
        console.log(obj);
        this.setLocation(obj);
        /**************************** end ***************************/
        this.addTripFreightLocation.emit(obj);
        this.isDialogOpen = false;
        this.locationAvailable = false;
    };
    FreightLocationPickerComponent.prototype.onAddLocation = function () {
        this.selected_value;
        this.isDialogOpen = true;
        this.isPrivateLocationAvailable = false;
        this.isSearchClicked = false;
        this.isFavouriteLocationAvailable = false;
    };
    FreightLocationPickerComponent.prototype.setLocation = function (location) {
        var obj1 = {};
        console.log(location);
        if (location['freightLocation'] != null || location['freightLocation'] != undefined) {
            console.log('contains location Obj source');
            obj1 = location['freightLocation'];
        }
        else {
            console.log('contains No freight location Obj source');
            obj1 = location;
        }
        console.log(obj1['name']);
        this.locationName = obj1['name'];
        var emiter = this.onLocationPick.emit(location);
        this.locationAvailable = false;
        this.isSearchClicked = false;
        this.isPrivateLocationAvailable = false;
        this.isFavouriteLocationAvailable = false;
        console.log(location);
    };
    FreightLocationPickerComponent.prototype.onSelection = function () {
        console.log(this.selected_value);
        // this.selection.emit(this.selected_value);
        this.isDialogOpen = true;
    };
    FreightLocationPickerComponent.prototype.hideList = function (isHideList) {
        this.isHideList = isHideList;
    };
    FreightLocationPickerComponent.prototype.hideDropdownMenu = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isHideList) {
                _this.isSearchClicked = false;
                _this.locationAvailable = false;
            }
        }, 200);
    };
    // *********************** add fret Location service  **********************
    FreightLocationPickerComponent.prototype.addFretLocation = function (fretObj, path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        console.log(fretObj);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: fretObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            if (response.status == 200) {
                return response.json(); //todo: Uncomment this code that returns the _id from request and comment the return obj
            }
        });
    };
    FreightLocationPickerComponent.prototype.setFavouriteLocation = function (location) {
        location['isStared'] = true;
        this.addFavouriteLocation.emit(location);
        console.log(location);
    };
    FreightLocationPickerComponent.prototype.removeFavouriteLocation = function (location) {
        this.removeFavouriteFLocation.emit(location);
        this.favouriteFreightLocation.emit();
        console.log(location);
    };
    return FreightLocationPickerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FreightLocationPickerComponent.prototype, "onLocationPick", void 0);
__decorate([
    core_1.ViewChild("searchOrigin"),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], FreightLocationPickerComponent.prototype, "searchOrigineElementRef", void 0);
__decorate([
    core_1.ViewChild("searchDestination"),
    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
], FreightLocationPickerComponent.prototype, "searchDestElementRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FreightLocationPickerComponent.prototype, "pickerLocationType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FreightLocationPickerComponent.prototype, "inputType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FreightLocationPickerComponent.prototype, "locationFromTemplate", void 0);
FreightLocationPickerComponent = __decorate([
    core_1.Component({
        selector: 'app-freight-location-picker',
        template: __webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/freight-location-components/freight-location-picker/freight-location-picker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object, typeof (_d = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _d || Object, typeof (_e = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _e || Object])
], FreightLocationPickerComponent);
exports.FreightLocationPickerComponent = FreightLocationPickerComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=freight-location-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-organisation/manage-organisation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-organisation/manage-organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card style=\"cursor: pointer\" (click)=\"goToShipmentGroupsManagement()\">\n  <md-card-content>\n    <div>\n      <label><b>Shipment Groups</b></label>\n    </div>\n  </md-card-content>\n</md-card>\n\n<md-card style=\"cursor: pointer\" (click)=\"goToUserManagement()\">\n  <md-card-content>\n    <div>\n      <label><b>Members</b></label>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage-organisation/manage-organisation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ManageOrganisationComponent = (function () {
    function ManageOrganisationComponent(_router) {
        this._router = _router;
    }
    ManageOrganisationComponent.prototype.ngOnInit = function () {
    };
    ManageOrganisationComponent.prototype.goToShipmentGroupsManagement = function () {
        this._router.navigate(['dashboard/shipmentManagementComponent']);
    };
    ManageOrganisationComponent.prototype.goToUserManagement = function () {
        // this._router.navigate(['dashboard/userManagementComponent']);
        this._router.navigate(['dashboard/userManagementConsole']);
    };
    return ManageOrganisationComponent;
}());
ManageOrganisationComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-organisation',
        template: __webpack_require__("../../../../../src/app/components/manage-organisation/manage-organisation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manage-organisation/manage-organisation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], ManageOrganisationComponent);
exports.ManageOrganisationComponent = ManageOrganisationComponent;
var _a;
//# sourceMappingURL=manage-organisation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-header{\n  background-color: #1976d2;\n  width: 100%;\n  padding-bottom: 3px;\n}\n\n\n.custom-button button{\n  height: 23px;\n  font-size: 11px;\n  line-height: 23px;\n  border-radius: 4px;\n  min-width: 5px;\n}\n\nmd-card{\n  padding: 9px;\n  min-width: 250px;\n}\n\ndiv {\n  font-family: Helvetica !important;\n  /*color: #46465f;*/\n}\n\n.confirm-location{\n  padding: 22px;\n  min-height: 100px;\n  max-height: 200px;\n  overflow: auto;\n  border: 1px solid #D1D1D1;\n  min-width:175px;\n}\n/* ****************** For Custom dialog show********************************************88*/\n.mycustomDialog {\n  position: fixed; /* Stay in place */\n  z-index: 990; /* Sit on top */\n  padding-top: 30%; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.mycustomDialog button{\n  /*background-color: #2B81AF;*/\n  /*min-width: 0px;*/\n  /*color:white;*/\n  /*padding: 0px 8px 2px 9px;*/\n  width: 10%;\n}\n\n\n.my-hr{\n  border-style:ridge;\n  border-width:1px;\n  margin-top: 6px;\n  min-width: 250px;\n  margin-bottom:3px;\n}\n/* time line css start here*/\n\n.timeline-icon{\n  top: 50px;\n  position: absolute;\n  left: 71px;\n}\n\n.timeline-image{\n  position: absolute;\n  left: 71px;\n}\n\n.wfl-imeline-image{\n  position: absolute;\n  left: 50px;\n  color: #428fd4;\n}\n\n.EFP_icon{\n  position: absolute;\n  height: 100%;\n  margin-left: 54px;\n}\n\n.EFP_timeline_icon{\n  position: absolute;\n  background-color: white;\n  left: 48px;\n  top: -3px;\n  font-size: 18px;\n}\n\n\n.cd-timeline {\n  position: relative;\n}\n.cd-timeline::before {\n  /* this is the vertical line */\n  /*top: 21px;*/\n  bottom: 37px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 85px;\n  height: 100%;\n  width: 1.40px;\n  background: #9b9b9b;\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n\n\n.wfl-timeline {\n  position: relative;\n}\n\n.wfl-timeline::before {\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 55px;\n  height: 100%;\n  width: 3.4px;\n  background: #428fd4;\n}\n.DP-timeline1 {\n  position: relative;\n}\n\n.DP-timeline1::before {\n  top: -17px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 53px;\n  height: 150%;\n  width: 3.4px;\n  background: #428fd4;\n}\n\n.DP-timeline {\n  position: relative;\n}\n\n.DP-timeline::before {\n  top: -17px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 53px;\n  height: 100%;\n  width: 3.4px;\n  background: #428fd4;\n}\n\n.DP_timeline-image{\n  /*position: absolute;*/\n  /*left: 53px;*/\n  margin-left: 41px;\n  color: #428fd4;\n  font-size: 20px;\n  /*margin-top: 10px;*/\n}\n\n\n.unvisited-timeline {\n  position: relative;\n}\n.unvisited-timeline::before {\n  /* this is the vertical line */\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n\n  left: 85px;\n  height: 100%;\n  border-left: 1.40px dashed #9b9b9b;\n  /*width: 1.40px;*/\n  /*background: #9b9b9b;*/\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n.EFP_unvisited-timeline {\n  position: relative;\n}\n.EFP_unvisited-timeline::before {\n  /* this is the vertical line */\n  top:15px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 55px;\n  height: 100%;\n  border-width: 6px;\n  border-left: dotted #D0D0D0;\n  /*width: 1.40px;*/\n  /*background: #9b9b9b;*/\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n.EFP_unvisited-timeline1 {\n  position: relative;\n}\n.EFP_unvisited-timeline1::before {\n  /* this is the vertical line */\n  top:15px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 55px;\n  height: 150%;\n  border-width: 6px;\n  border-left: dotted #D0D0D0;\n  /*width: 1.40px;*/\n  /*background: #9b9b9b;*/\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n\n\n.timeline-header{\n  text-align:center;\n  display: -ms-grid;\n  display: grid;\n  margin: -8px -8px 2px -8px;\n  box-shadow: 0px 1px 1px #999999;\n  padding: 10px;\n  display: list-item;\n}\n/* end here time line css*/\n\n/********** this will work when click on up-down button and div appear like a shutter  **************/\n.show-down-Slowly {\n  margin-top: 8px !important;\n  transition: margin-top .3s ;\n  -webkit-transition: margin-top .3s ;\n}\n.data-box {\n  /*margin-top: -2000px;*/\n  margin-left: 8px;\n  width:98%;\n  font-size: 11px;\n  color: #9b9b9b;\n}\n/****************************************************************************/\n\n/********** this will work when click on up-down button and div appear like a shutter  **************/\n.hide-up-Slowly{\n  /*margin-top: -2000px !important;*/\n  transition: margin-top .3s ;\n  -webkit-transition: margin-top .3s ;\n}\n\n/****************************************************************************/\n\n.vehicle-no{\n  font-size:20px;\n  color:rgba(255, 255, 255, 0.94);\n  margin-left:10px;\n}\n\n.vehicle-status{\n  padding: 4px;\n  text-align: center;\n  font-size: 16px;\n  background-color: #1d6be7;\n  color: white;\n}\n.vehicle-status1{\n  padding: 4px;\n  text-align: center;\n  font-size: 16px;\n  background-color: #6d6f74;\n  color: white;\n}\n\n.current-vehicle-card{\n  background-color:#dbdee2;\n  color: rgb(20, 5, 5);\n  padding-top: 15px;\n  padding-bottom: 10px;\n  /*margin-bottom:13px;*/\n}\n.current-vehicle-card1{\n  background-color:#acaeb3;\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  /*margin-bottom:13px;*/\n}\n\n.driver-name{\n  margin-left: auto;\n  font-size: 15px;\n  color:rgba(255, 255, 255, 0.87);\n  padding: 2px 8px;\n}\n\n.phone-icon{\n  margin-left: 8px;\n  color: white;\n  font-size: 16px;\n}\n\n.alert-box{\n  font-size: 13px;\n  line-height:1.67;\n  color:rgba(0, 0, 0, 0.54);\n}\n\n.disconnected{\n  background-color: #ff5252;\n  border: solid 1px #ff5252;\n  color: white;\n  font-size: 18px;\n  text-align: center;\n  padding: 3px;\n}\n\n.time{\n  color: #9b9b9b;\n  text-align: center;\n  display: -ms-grid;\n  display: grid;\n  font-size: 11px;\n  min-width: 50px;\n  max-width: 60px;\n  overflow: hidden;\n}\n\n.rotate{ /* IE 9 */\n  -webkit-transform: rotate(90deg); /* Safari */\n  transform: rotate(90deg);\n  font-size: 13px\n}\n\n.travling-time{\n  position: absolute;\n  margin-left: -133px;\n  display: -ms-grid;\n  display: grid;\n  text-align: center;\n  height: 100%;\n  /*margin-top : -34px;*/\n  min-width: 50px;\n  max-width: 68px;\n  margin-top: -15px;\n}\n\n.customExpansionPanel >>> .mat-expansion-panel-body{\n  padding: 0px !important;\n}\n.custom-modal-container {\n  padding: 15px;\n}\n\n.custom-modal-header {\n  background-color: #219161;\n  color: #fff;\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n  margin-top: -15px;\n  margin-bottom: 40px;\n}\n/* Modal Content */\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border-radius: 5px;\n  border: 1px solid #888;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.3);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;top: 0px;z-index:100;background-color: white;\" class=\"slow-down\">\n    <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n    <div>\n        <div>\n           <span class=\"driver-name-web\" >Driver</span>\n        </div>\n        <div>\n           <a class=\"driver-name-web\" href=\"tel:{{selectedShipment['currentShipment']?.mobileNo}}\" >\n             <i  class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;+91{{selectedShipment['currentShipment']?.mobileNo}}\n           </a>\n        </div>\n    </div>\n    <!--************************ confirm pickup dialog *********************************-->\n    <div *ngIf=\"isConfirmPickupDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;overflow:unset\">\n      <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow:unset;max-width: 560px;margin-top: 34px;height:60vh;\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"isConfirmPickupDialog=false;\" >&times;</span>\n          <div>\n            <label>{{forEditPlace}}</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 18px;font-size: 17px;margin-top:40px;overflow:unset;\" >\n          <div >\n            <span style=\"color:red;font-size: 13px;margin-left: 70px;\" >{{validationErrorMgs}}</span>\n            <div style=\"margin-left: 60px\" >\n              <label>Pickup Location&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label><span> {{pickupLocation}}</span>\n            </div>\n            <div style=\"margin-left: 60px;margin-top: 15px;\">\n              <label>Reporting Time&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>\n              <div fxFlex=\"48\" style=\"width:65%;\">\n                <owl-date-time [autoClose]=true placeholder=\"ReportingTime\" [(ngModel)]=\"reportingTime\" id=\"reportingTime\"  [dateFormat]=\"'DD-MM-YYYY hh:mm'\" (onFocus)=\"validationErrorMgs=null\" ></owl-date-time>\n              </div>\n              <!-- <md-input-container>\n                <input mdInput [(ngModel)]=\"reportingTime\" name=\"reportingTime\"   (focus)=\"changeTime1()\"\n                onkeydown=\"if(((event.keyCode<=65 &&  event.keyCode>=122)) && event.keyCode!=8 && event.keyCode!=13 )return false;\">\n              </md-input-container> -->\n            </div>\n            <div style=\"margin-left: 60px;margin-top: 15px;\">\n              <label>Departure Time&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </label>\n              <div fxFlex=\"48\" style=\"width:65%;\">                  \n                <owl-date-time [autoClose]=true placeholder=\"Deptature Time\" [(ngModel)]=\"deptatureTime\" id=\"deptatureTime\"  [dateFormat]=\"'DD-MM-YYYY hh:mm'\" (onFocus)=\"validationErrorMgs=null\"></owl-date-time>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 40px;\">\n              <button md-raised-button  style=\"margin-left: 120px;margin-top: 30px\" (click)=\"isConfirmPickupDialog=false;\" >Cancel</button>\n              <button md-raised-button  style=\"margin-left: 60px;margin-top: 30px;width: 30%\" (click)=\"confirmPickup()\" >Confirm Pickup</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- close edit trip dialog -->\n    <!--************************ confirm delivery dialog *********************************-->\n    <div *ngIf=\"isConfirmDeliveryDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;overflow:unset\">\n      <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow:unset;max-width: 560px;height:60vh;\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"isConfirmDeliveryDialog=false;\" >&times;</span>\n          <div>\n            <label>{{forEditPlace}}</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 18px;font-size: 17px;margin-top:40px ;\" >\n            <span style=\"color:red;font-size: 13px;margin-left: 70px;\" >{{validationErrorMgs}}</span>\n            <div style=\"margin-left: 60px\" >\n                <label>Delivery Location&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </label><span>{{deliveryLocation}}</span>\n              </div>\n            <div style=\"margin-left: 60px;margin-top: 15px;\">\n                <label>Reporting Time &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </label>\n                <div fxFlex=\"48\" style=\"width:65%;\">                 \n                  <owl-date-time [autoClose]=true placeholder=\"'DD-MM-YYYY hh:mm'\" [(ngModel)]=\"reportingTime\" id=\"reportingTime\"  [dateFormat]=\"'DD-MM-YYYY hh:mm'\"  (onFocus)=\"validationErrorMgs=null\"></owl-date-time>              \n                </div>\n            </div>\n            <div style=\"margin-left: 60px;margin-top: 15px;\">\n              <label>Departure Time&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>\n              <div fxFlex=\"48\" style=\"width:65%;overflow:unset\">                  \n               <owl-date-time [autoClose]=true placeholder=\"'DD-MM-YYYY hh:mm'\" [(ngModel)]=\"deptatureTime\" id=\"deptatureTime\"  [dateFormat]=\"'DD-MM-YYYY hh:mm'\" (onFocus)=\"validationErrorMgs=null\"></owl-date-time>              \n              </div>\n            </div>\n\n        </div>\n        <div style=\"margin-top: 40px;\">\n            <button md-raised-button  style=\"margin-left: 120px;margin-top: 30px\" (click)=\"isConfirmDeliveryDialog=false;\" >Cancel</button>\n            <button md-raised-button  style=\"margin-left: 60px;margin-top: 30px;width: 30%\" (click)=\"confirmDelivery()\" >Confirm Delivery</button>\n        </div>\n      </div>\n    </div>\n    <!-- close edit trip dialog -->\n\n    <!--************************ add loaction dialog *********************************-->\n    <div *ngIf=\"isConfirmUpdateLocationDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;overflow:unset\">\n      <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow: unset;max-width: 560px;height:60vh;\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"isConfirmUpdateLocationDialog=false;\" >&times;</span>\n          <div>\n            <label>{{forEditPlace}}</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 18px;font-size: 17px;margin-top:40px;overflow:unset;\" >\n            <span style=\"color:red;font-size: 13px\" >{{validationErrorMgs}}</span>            \n            <div style=\"margin-left: 60px\">\n                <label>Current Location &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </label>\n                <md-input-container>\n                  <input mdInput [(ngModel)]=\"currentLocationName\" name=\"currentLocationName\" id=\"currentLocationName\">\n                </md-input-container>\n            </div>\n            <div style=\"margin-left: 60px\">\n              <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>\n              <div fxFlex=\"48\" style=\"width:65%;\">\n                <owl-date-time [autoClose]=true placeholder=\"Update Time\" [(ngModel)]=\"updateTime\" id=\"updateTime\"  [dateFormat]=\"'DD-MM-YYYY hh:mm'\" (onFocus)=\"validationErrorMgs=null\"></owl-date-time>\n              </div>\n              <!-- <md-input-container>\n                <input  mdInput [(ngModel)]=\"updateTime\" name=\"updateTime\" id=\"updateTime\" (focus)=\"changeTime2()\"\n                onkeydown=\"if(((event.keyCode<=65 &&  event.keyCode>=122)) && event.keyCode!=8 && event.keyCode!=13 )return false;\">\n              </md-input-container> -->\n            </div>\n\n        </div>\n        <div style=\"margin-top: 30px\">\n            <button md-raised-button  style=\"margin-left: 120px;margin-top: 30px\" (click)=\"isConfirmUpdateLocationDialog=false;\" >Cancel</button>\n            <button md-raised-button  style=\"margin-left: 60px;margin-top: 30px;width: 30%\" (click)=\"addLocation()\" >Update Location</button>\n        </div>\n      </div>\n    </div>\n    <!-- close add location dialog -->\n\n    <!-- done    selected vahicle for Manually Shipment Tracking -->\n    <!-- done -->\n\n    <div *ngIf=\"vehicleStatus == 'EnrouteForPickUp'\" style=\"background-color: white\">\n      <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;border: 2px solid lightgrey;\">\n        <div style=\"overflow: hidden;font-size:12px\">\n          <div>\n            <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n              <span style=\"margin-left: 64px;\">Delivery</span>\n            </div>\n            <div class=\"EFP_unvisited-timeline\">\n              <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n              <div style=\"display:flex\">\n                <span style=\"margin-left: 75px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\n              </div>\n\n              <div class=\"fade-sub-header-text\" style=\"margin-left:60px;text-align:left;padding: 18px;font-size:11px;\">\n                <span>Transite Time :</span>\n                <span>{{selectedShipment?.currentShipment?._transiteTime}}</span>\n              </div>\n              <span class=\"custom-button\" style=\"float:right;margin-top:10px;\">\n                <button   md-raised-button style=\"background-color:#428fd4;color:rgba(255, 255, 255, 0.94);\"  (click)=\"goToConfirmPickupView()\">Confirm Pickup</button>\n                </span>\n            </div>\n          </div>\n\n\n          <i style=\"margin-left:48px;margin-top:15px;font-size: 18px;\" class=\"fa fa-circle-thin fade-sub-header-text\" aria-hidden=\"true\"></i>\n          <div style=\"display:flex;\" class=\"fade-sub-header-text\">\n            <span style=\"margin-left: 68px; margin-top:-30px\">Pickup</span>\n            <span style=\"margin-left: -30px;margin-top:-5px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\n          </div>\n\n          </div>\n        </div>\n      </div>\n\n\n    <!-- done -->\n    <div *ngIf=\"vehicleStatus == 'AtPickUpPoint'\" style=\"background-color: white\">\n      <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;border: 2px solid lightgrey;\">\n\n        <div style=\"overflow: hidden\">\n          <div class=\"fade-sub-header-text sub-header-text-size\" style=\"margin: 8px 5px 2px 5px;\">\n            <span style=\"margin-left: 64px;\">Delivery</span>\n          </div>\n          <div class=\"EFP_unvisited-timeline\">\n            <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n            <div style=\"display:flex;font-size:15px;font-weight: bold\">\n              <span class=\"fade-sub-header-text\" style=\"margin-left: 75px;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\n            </div>\n\n            <div class=\"fade-sub-header-text sub-header-text-size\" style=\"text-align:left;padding: 18px;padding-bottom:60px;\">\n              <span style=\"margin-left:50px\">Transit :1440 Km in {{selectedShipment?.currentShipment?._transiteTime}}</span>\n            </div>\n          </div>\n        </div>\n        <!-- **************** for in case of device disconnect ********************** -->\n        <div class=\"vehicle-status1\">\n          <span>At Pickup point</span>\n        </div>\n        <!--   ************************************  -->\n\n        <md-card fxLayout=\"row\" class=\"current-vehicle-card\">\n          <div style=\"margin-left: 31px;\">\n            <img style=\"height:30px;\" src=\"../../../images/trip-icons/Enroute.png\" alt=\"image\">\n          </div>\n          <div style=\"width: 100%\">\n            <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\" class=\"custom-button\">\n              <span style=\"line-height: 1.43\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\n              <button  md-raised-button color=\"primary\" style=\"background-color:#428fd4;color:rgba(255, 255, 255, 0.94);float:right\" (click)=\"goToConfirmPickupView()\">Confirm Pickup</button>\n            </div>\n\n            <div style=\"white-space: nowrap;margin-bottom: -10px;margin-left:15px\">\n              <span class=\"sub-header-text-size\">Since {{selectedShipment?.currentShipment?.startLocation?._sinceTime}}</span>\n            </div>\n          </div>\n        </md-card>\n      </div>\n    </div>\n\n    <!--done-->\n    <div *ngIf=\"vehicleStatus == 'EnrouteForDestination'\" style=\"background-color: white\">\n      <!-- *****************************     current trip start here *************************** -->\n      <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n        <div style=\"overflow: hidden;font-size:12px\">\n          <div>\n            <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n              <span style=\"margin-left: 64px;\">Delivery</span>\n              <span class=\"fade-sub-header-text sub-header-text-size\" style=\"float: right;\"> {{selectedShipment['currentShipment']['startLocation']['_endTime']}}</span>\n            </div>\n            <div class=\"EFP_unvisited-timeline\">\n              <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n              <div style=\"display:flex\" class=\"custom-button\">\n                <span style=\"margin-left: 75px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\n                <button   md-raised-button  style=\"font-size:14px;margin-left:auto;margin-right: -10px;\" (click)=\"goToConfirmDeliveryView()\">Confirm Delivery</button>\n              </div>\n\n              <div class=\"fade-sub-header-text\" style=\"text-align:right;padding: 15px;font-size:11px;\">\n                <!--<span>Transite Time :</span><span>16 hrs</span>-->\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"vehicle-status1\">\n          <span>Enroute for Delivery</span>\n        </div>\n\n        <div style=\"overflow: hidden;\">\n          <section class=\"DP-timeline\" style=\"padding: 5px;\">\n              <span class=\"custom-button\"> <button  md-raised-button color=\"primary\" style=\"margin-left:60px;margin-top:-10px;font-size:11px\" (click)=\"goToupdateLocationView()\">add Location</button></span>\n              <div style=\"margin-left:60px;margin-top:10px;font-size: 11px\" *ngIf=\"isShowLocation\">\n                <div fxLayout=\"row\" *ngIf=\"(movLegLength)>=1\" style=\"width:100%;color: #323232;\"><span fxFlex=35>{{movementLegs[0].endLocation.address}}</span>  <span  fxFlex=5></span> <span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[0]?._date}}</span></div><br>\n                <div fxLayout=\"row\"  *ngIf=\"movLegLength>=2\" style=\"width:100%;color: #323232;\"  ><span fxFlex=35 >{{movementLegs[1].endLocation.address}}</span><span  fxFlex=5></span> <span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[1]?._date}}</span></div>\n              </div>\n            <md-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:20px\" hideToggle=\"true\" >\n              <md-expansion-panel-header (click)=\"isExtended = !isExtended;isShowLocation=!isShowLocation\" style=\"margin-left: 61px;padding:0px;\" *ngIf=\"movLegLength-2>0\">\n                <!-- ******************* when extended == true ******************-->\n                <div *ngIf=\"isExtended\" style=\"width: 100%;\">\n                  <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                </div>\n                <!-- *******************close when extended == true ******************-->\n\n                <!-- ******************* when extended == false ******************-->\n                <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\n                  <div style=\"display: grid\">\n                    <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                  </div>\n                  <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\" >\n                    <span *ngIf=\"(movLegLength-2)>0\">{{movLegLength-2}} &nbsp;&nbsp;more Location</span>\n                  </div>\n                </div>\n                <!-- *******************close when extended == false ******************-->\n              </md-expansion-panel-header>\n\n              <!-- ******************* when extended == true  body containt******************-->\n              <div *ngFor=\"let movmentLeg of movementLegs\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\" >\n                <div style=\"margin-top: 5px\" fxLayout=\"row\">\n                 <span fxFlex=35>{{movmentLeg.endLocation.address}}</span><span  fxFlex=5></span><span fxFlex=60>{{movmentLeg?._date}}</span>\n               </div>\n              </div>\n              <!-- ******************* close when extended == true  expansion panel body******************-->\n            </md-expansion-panel>\n\n            <div>\n              <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\n            </div>\n          </section>\n          <div style=\"margin-left: 68px;margin-top: -20px;\">\n            <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\n              <span>Pickup</span>\n              <span style=\"margin-left: auto;\"> {{selectedShipment['currentShipment']['startLocation']['_dateTime']}}</span>\n            </div>\n            <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\n              <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment?.currentShipment?.startLocation?.freightLocation?.name}}</span>\n              <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration {{selectedShipment['currentShipment']['startLocation']['_loadTime']}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ************ close current trip ***** -->\n    </div>\n\n    <!--done-->\n    <div *ngIf=\"vehicleStatus == 'AtDestination' && tillTime==null\" style=\"background-color: white\">\n      <div style=\"padding: 5px;border:2px solid lightgrey;\">\n        <div class=\"vehicle-status1\" >\n          <span>At Delivery Point</span>\n        </div>\n\n        <md-card fxLayout=\"row\" class=\"current-vehicle-card\">\n          <div style=\"margin-left: 31px;\">\n            <i style=\"font-size: 38px;\" class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i>\n          </div>\n          <div style=\"width: 100%\">\n            <div class=\"custom-button\" style=\"font-size:16px;padding-left: 8px;padding-right: 5px;display: flex\">\n              <span style=\"line-height: 1.43;margin-right: 5px;margin-top:5px;font-size:13px\">{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n              <button  md-raised-button  color=\"primary\" style=\"margin-left:auto;margin-right: -10px;\" (click)=\"goToConfirmDeliveryView()\">Confirm Delivery</button>\n            </div>\n            <div style=\"margin-top: 8px;font-size: 11px;\">\n              <span>Since {{selectedShipment?.currentShipment?.endLocation?._sinceTime}}</span>\n            </div>\n          </div>\n        </md-card>\n\n        <div style=\"overflow: hidden;\">\n          <section class=\"DP-timeline\" style=\"padding: 5px;\">\n            <div style=\"margin-left:60px;margin-top:10px;font-size: 11px\" *ngIf=\"isShowLocation\">\n                <div fxLayout=\"row\" *ngIf=\"movLegLength>=1\"  style=\"width:100%;color: #323232;\"><span fxFlex=35>{{movementLegs[0]?.endLocation?.address}}</span>  <span  fxFlex=5></span> <span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[0]?._date}}</span></div><br>\n                <div fxLayout=\"row\"  *ngIf=\"movLegLength>=2\" style=\"width:100%;color: #323232;\"><span fxFlex=35 >{{movementLegs[1]?.endLocation?.address}}</span>  <span  fxFlex=5></span><span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[1]?._date}}</span></div>\n            </div>\n            <md-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:40px\" hideToggle=\"true\">\n              <md-expansion-panel-header (click)=\"isExtended = !isExtended;isShowLocation=!isShowLocation\" style=\"margin-left: 61px;padding:0px;\">\n                <!-- ******************* when extended == true ******************-->\n                <div *ngIf=\"isExtended\" style=\"width: 100%;\">\n                  <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                </div>\n                <!-- *******************close when extended == true ******************-->\n\n                <!-- ******************* when extended == false ******************-->\n                <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\n                  <div style=\"display: grid\">\n                    <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                  </div>\n                  <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\">\n                    <span *ngIf=\"movLegLength-2>0\">{{movLegLength-2}} more stops </span>\n                  </div>\n                </div>\n                <!-- *******************close when extended == false ******************-->\n              </md-expansion-panel-header>\n\n              <!-- ******************* when extended == true  body containt******************-->\n              <div *ngFor=\"let movmentLeg of movementLegs\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\">\n                  <div style=\"margin-top: 5px\" fxLayout=\"row\">\n                      <span fxFlex=35>{{movmentLeg.endLocation.address}}</span><span fxFlex=5></span><span fxFlex=60>{{movmentLeg?._date}}</span>\n                  </div>\n              </div>\n              <!-- ******************* close when extended == true  expansion panel body******************-->\n            </md-expansion-panel>\n\n            <div>\n              <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\n            </div>\n          </section>\n          <div style=\"margin-left: 68px;margin-top: -20px;\">\n            <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\n              <span>Pickup</span>\n              <span style=\"margin-left: auto;\">{{selectedShipment['currentShipment']['startLocation']['_dateTime']}}</span>\n            </div>\n            <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\n              <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\n              <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration {{selectedShipment['currentShipment']['startLocation']['_loadTime']}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--done-->\n    <div *ngIf=\"vehicleStatus == 'AtDestination' && tillTime!=null\" style=\"background-color: white\">\n        <div style=\"padding: 5px;border:2px solid lightgrey;\">\n\n          <div style=\"margin-top:10px\">\n                <i class=\"fa fa-circle DP_timeline-image\" style=\"padding: 5px;\" aria-hidden=\"true\"></i>\n                <section class=\"DP-timeline1\" style=\"padding: 5px;\">\n                  <div  style=\"margin-left: 68px;margin-top:-40px\">\n                      <div  style=\"display:flex;\" class=\" fade-sub-header-text sub-header-text-size\">\n                        <span >Delivery</span>\n                        <span style=\"margin-left: auto;\">{{selectedShipment['currentShipment']['endLocation']['_destDateTime']}}</span>              \n                      </div>\n                      <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\n                        <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\n                        <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Unloading duration {{selectedShipment['currentShipment']['endLocation']['_unLoadTime']}}</span>\n                      </div>\n                      <div>\n                        <span style=\"margin-left:-35px;margin-top:20px;font-size: 13px\"></span>\n                        <div  style=\"margin-top:10px;font-size: 11px;margin-left: 5px;\" *ngIf=\"isShowLocation\">\n                          <div fxLayout=\"row\" style=\"width:100%\"  *ngIf=\"movLegLength>1\"><span fxFlex=35 >{{movementLegs[0].endLocation.address}}</span> <span  fxFlex=5></span><span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[0]?._date}}</span></div><br>\n                          <div  fxLayout=\"row\" style=\"width:100%\" *ngIf=\"movLegLength>2\"> <span fxFlex=35 >{{movementLegs[1].endLocation.address}}</span>  <span  fxFlex=5></span><span  fxFlex=60 class=\"fade-sub-header-text sub-header-text-size\" >{{movementLegs[1]?._date}}</span></div>\n                        </div>\n\n                      </div>\n                  </div>\n                </section>\n          </div>\n\n          <div style=\"overflow: hidden;\">\n            <section class=\"DP-timeline\" style=\"padding: 5px; margin-top:-10px\">\n              <md-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:40px\" hideToggle=\"true\">\n                <md-expansion-panel-header (click)=\"isExtended = !isExtended;isShowLocation=!isShowLocation\" style=\"margin-left: 61px;padding:0px;\">\n                  <!-- ******************* when extended == true ******************-->\n                  <div *ngIf=\"isExtended\" style=\"width: 100%;\">\n                    <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                  </div>\n                  <!-- *******************close when extended == true ******************-->\n\n                  <!-- ******************* when extended == false ******************-->\n                  <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\n                    <div style=\"display: grid\">\n                      <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                      <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\n                    </div>\n                    <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\">\n                      <span *ngIf=\"movLegLength-2>0\">{{movLegLength-2}} more&nbsp;locations</span>\n                    </div>\n                  </div>\n                  <!-- *******************close when extended == false ******************-->\n                </md-expansion-panel-header>\n\n                <!-- ******************* when extended == true  body containt******************-->\n                <div *ngFor=\"let movmentLeg of movementLegs\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\">\n                    <div style=\"margin-top: 5px\" fxLayout=\"row\">\n                        <span fxFlex=35>{{movmentLeg?.endLocation?.address}}</span> <span  fxFlex=5></span><span fxFlex=60>{{movmentLeg?._date}}</span>\n                      </div> </div>\n                <!-- ******************* close when extended == true  expansion panel body******************-->\n              </md-expansion-panel>\n\n              <div>\n                <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\n              </div>\n            </section>\n            <div style=\"margin-left: 68px;margin-top: -20px;\">\n              <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\n                <span>Pickup</span>\n                <span style=\"margin-left: auto;\">{{selectedShipment['currentShipment']['startLocation']['_dateTime']}}</span>\n              </div>\n              <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\n                <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\n                <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration {{selectedShipment['currentShipment']['startLocation']['_loadTime']}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var manual_shipment_service_1 = __webpack_require__("../../../../../src/app/services/manual-shipment-service.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var ManualShipmentStatusComponent = (function () {
    function ManualShipmentStatusComponent(_router, dialog, shipmentServices, _store, manualShipment) {
        var _this = this;
        this._router = _router;
        this.dialog = dialog;
        this.shipmentServices = shipmentServices;
        this._store = _store;
        this.manualShipment = manualShipment;
        this.vehicleState = '';
        this.vehicleStatus = '';
        this.unSub_shipmentDetail = null;
        this.isExtended = false;
        this.selectedShipment = {};
        this.reportingTime = null;
        this.deptatureTime = null;
        this.isSpinner = true;
        this.movementLegs = [];
        this.isShowLocation = true;
        this.trackingType = "manual";
        this.isConfirmPickupDialog = false;
        this.isConfirmDeliveryDialog = false;
        this.isConfirmUpdateLocationDialog = false;
        this.validationErrorMgs = null;
        //TODO unsubscribe shipmentDetail
        this.unSub_shipmentDetail = this._store.select('shipmentDetail').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    _this.isShowLocation = true;
                    _this.isSpinner = false;
                    _this.selectedShipment = value['res'];
                    _this.tripId = _this.selectedShipment['vts']['tripId'];
                    _this.vehicleId = _this.selectedShipment['vts']['vehicleId'];
                    _this.vehicleStatus = _this.selectedShipment.vts.state;
                    _this.pickupLocation = _this.selectedShipment['currentShipment']['startLocation']['freightLocation']['name'];
                    _this.deliveryLocation = _this.selectedShipment['currentShipment']['endLocation']['freightLocation']['name'];
                    if (_this.selectedShipment.movementLegs != null) {
                        _this.movementLegs = _this.selectedShipment.movementLegs.reverse();
                        _this.movLegLength = _this.selectedShipment.movementLegs.length;
                        for (var i = 0; i < _this.movementLegs.length; i++) {
                            _this.movementLegs[i]['_date'] = _this.tsToDateTime(_this.movementLegs[i].startTime);
                        }
                        // console.log(this.movementLegs);
                    }
                    _this.tillTime = _this.selectedShipment.currentShipment.endLocation.tillTime;
                    if (_this.vehicleStatus == 'EnrouteForPickUp') {
                        _this.reportingTime = null;
                        _this.deptatureTime = null;
                    }
                    if (_this.vehicleStatus == 'AtPickUpPoint') {
                        _this.deptatureTime = null;
                        _this.selectedShipment['currentShipment']['startLocation']['_sinceTime'] = _this.msToTime(new Date().getTime() - _this.selectedShipment['currentShipment']['startLocation']['fromTime']);
                        _this.reportingTime = new Date(_this.selectedShipment['currentShipment']['startLocation']['fromTime']).toDateString() + ' ' + new Date(_this.selectedShipment['currentShipment']['startLocation']['fromTime']).toTimeString();
                    }
                    if (_this.vehicleStatus == 'EnrouteForDestination') {
                        _this.reportingTime = null;
                        _this.deptatureTime = null;
                        _this.selectedShipment['currentShipment']['startLocation']['_endTime'] = _this.tsToDateTime(_this.selectedShipment['currentShipment']['planedEndTime']);
                        _this.selectedShipment['currentShipment']['startLocation']['_loadTime'] = _this.msToTime(_this.selectedShipment['currentShipment']['startLocation']['tillTime'] - _this.selectedShipment['currentShipment']['startLocation']['fromTime']);
                        _this.selectedShipment['currentShipment']['startLocation']['_dateTime'] = _this.tsToDateTime(_this.selectedShipment['currentShipment']['startLocation']['fromTime']);
                    }
                    if (_this.vehicleStatus == 'AtDestination') {
                        _this.reportingTime = new Date(_this.selectedShipment['currentShipment']['endLocation']['fromTime']).toDateString() + ' ' + new Date(_this.selectedShipment['currentShipment']['endLocation']['fromTime']).toTimeString();
                        _this.selectedShipment['currentShipment']['endLocation']['_sinceTime'] = _this.msToTime(new Date().getTime() - _this.selectedShipment['currentShipment']['endLocation']['fromTime']);
                        _this.selectedShipment['currentShipment']['endLocation']['_unLoadTime'] = _this.msToTime(_this.selectedShipment['currentShipment']['endLocation']['tillTime'] - _this.selectedShipment['currentShipment']['endLocation']['fromTime']);
                        _this.selectedShipment['currentShipment']['startLocation']['_loadTime'] = _this.msToTime(_this.selectedShipment['currentShipment']['startLocation']['tillTime'] - _this.selectedShipment['currentShipment']['startLocation']['fromTime']);
                        _this.selectedShipment['currentShipment']['startLocation']['_dateTime'] = _this.tsToDateTime(_this.selectedShipment['currentShipment']['startLocation']['fromTime']);
                        if (_this.tillTime == null || _this.tillTime == undefined || _this.tillTime == "") {
                            _this.selectedShipment['currentShipment']['endLocation']['_destDateTime'] = _this.tsToDateTime(_this.selectedShipment['currentShipment']['planedEndTime']);
                        }
                        if (_this.tillTime != null || _this.tillTime != undefined || _this.tillTime != "") {
                            _this.selectedShipment['currentShipment']['endLocation']['_destDateTime'] = _this.tsToDateTime(_this.selectedShipment['currentShipment']['endLocation']['tillTime']);
                        }
                    }
                    if (_this.selectedShipment['currentShipment'] != null) {
                        _this.selectedShipment['currentShipment']['_transiteTime'] = _this.msToTime(_this.selectedShipment['currentShipment']['planedEndTime'] - _this.selectedShipment['currentShipment']['planedStartTime']);
                        console.log(_this.selectedShipment['currentShipment']['_transiteTime']);
                    }
                }
                else {
                }
            }
        });
    }
    ManualShipmentStatusComponent.prototype.ngOnInit = function () {
    };
    /********************************************************** */
    ManualShipmentStatusComponent.prototype.goToConfirmPickupView = function () {
        this.validationErrorMgs = null;
        this.forEditPlace = "Confirm Pickup";
        this.isConfirmPickupDialog = true;
    };
    ManualShipmentStatusComponent.prototype.confirmPickup = function () {
        var _this = this;
        if (this.vehicleStatus == 'EnrouteForPickUp') {
            if (!this.checkRepoValid()) {
                return;
            }
            if (this.deptatureTime != null) {
                if (!this.checkDepaValid()) {
                    return;
                }
            }
        }
        if (this.vehicleStatus == 'AtPickUpPoint') {
            if (!this.checkRepoValid()) {
                return;
            }
            if (!this.checkDepaValid()) {
                return;
            }
        }
        var repoTime;
        if (this.reportingTime == null || this.reportingTime == undefined || this.reportingTime == '') {
            repoTime = null;
        }
        else {
            repoTime = new Date(this.reportingTime).getTime();
        }
        var deptTime;
        if (this.deptatureTime == null || this.deptatureTime == undefined || this.deptatureTime == '') {
            deptTime = null;
        }
        else {
            deptTime = new Date(this.deptatureTime).getTime();
        }
        //console.log(this.depTime);
        var obj = {
            "vehicleId": this.vehicleId,
            "type": "user.add.missing.pickup",
            "tripId": this.tripId,
            "startTime": repoTime,
            "endTime": deptTime,
            "trackingType": this.trackingType,
            "deviceImei": null,
            "locationInfo": null,
            "vehicleStateInfo": null
        };
        console.log(obj);
        this.manualShipment.pickup.emit(obj);
        this.isConfirmPickupDialog = false;
        this.isSpinner = true;
        setTimeout(function () {
            _this.shipmentServices.getShipmentDetail.emit(_this.selectedShipment.currentShipment.shipmentId);
        }, 500);
    };
    ManualShipmentStatusComponent.prototype.goToConfirmDeliveryView = function () {
        this.validationErrorMgs = null;
        this.forEditPlace = "Confirm Delivery";
        this.isConfirmDeliveryDialog = true;
    };
    ManualShipmentStatusComponent.prototype.goToupdateLocationView = function () {
        this.forEditPlace = "Add Location";
        this.isConfirmUpdateLocationDialog = true;
    };
    ManualShipmentStatusComponent.prototype.addLocation = function () {
        var _this = this;
        if (this.updateTime == null) {
            this.validationErrorMgs = "Update Time should not be blank";
            return;
        }
        var todayDate = new Date().getTime();
        if (new Date(this.updateTime).getTime() > todayDate) {
            this.validationErrorMgs = "Update Time should not be greater then current date";
            return;
        }
        var obj = {
            "vehicleId": null,
            "type": "add.stop",
            "tripId": this.tripId,
            "startTime": new Date(this.updateTime).getTime(),
            "endTime": null,
            "deviceImei": null,
            "trackingType": this.trackingType,
            "locationInfo": {
                "latitude": 28.4592693,
                "longitude": 77.07241920000001,
                "speed": 0.0,
                "time": null,
                "imei": " ",
                "vehicleId": " ",
                "address": this.currentLocationName,
                "lngLat": [0.0]
            },
            "vehicleStateInfo": null
        };
        console.log(obj);
        this.manualShipment.addStop.emit(obj);
        this.isConfirmUpdateLocationDialog = false;
        this.isSpinner = true;
        setTimeout(function () {
            _this.shipmentServices.getShipmentDetail.emit(_this.selectedShipment.currentShipment.shipmentId);
        }, 500);
    };
    ManualShipmentStatusComponent.prototype.checkRepoValid = function () {
        if (this.reportingTime == null) {
            this.validationErrorMgs = "Reporting Time should not be blank";
            return false;
        }
        var todayDate = new Date().getTime();
        if (new Date(this.reportingTime).getTime() > todayDate) {
            this.validationErrorMgs = "Reporting Time should not be greater then current date";
            return false;
        }
        return true;
    }; // close ckeck valid
    ManualShipmentStatusComponent.prototype.checkDepaValid = function () {
        if (this.deptatureTime == null) {
            this.validationErrorMgs = "Departure Time should not be blank";
            return false;
        }
        if (new Date(this.deptatureTime).getTime() < new Date(this.reportingTime).getTime()) {
            this.validationErrorMgs = "Departure Time should not be less then Reporting Time";
            return false;
        }
        var todayDate = new Date().getTime();
        if (new Date(this.deptatureTime).getTime() > todayDate) {
            this.validationErrorMgs = "Departure Time should not be greater then current date";
            return false;
        }
        return true;
    };
    ManualShipmentStatusComponent.prototype.confirmDelivery = function () {
        var _this = this;
        if (this.vehicleStatus == 'EnrouteForDestination') {
            if (!this.checkRepoValid()) {
                return;
            }
            if (this.deptatureTime != null) {
                if (!this.checkDepaValid()) {
                    return;
                }
            }
        }
        if (this.vehicleStatus == 'AtDestination') {
            if (!this.checkRepoValid()) {
                return;
            }
            if (!this.checkDepaValid()) {
                return;
            }
        }
        var repoTime;
        if (this.reportingTime === null) {
            repoTime = null;
        }
        else {
            repoTime = new Date(this.reportingTime).getTime();
        }
        var deptTime;
        if (this.deptatureTime === null) {
            deptTime = null;
        }
        else {
            deptTime = new Date(this.deptatureTime).getTime();
        }
        //console.log(this.depTime);
        var obj = {
            "vehicleId": this.vehicleId,
            "type": "user.add.missing.delivery",
            "tripId": this.tripId,
            "startTime": repoTime,
            "endTime": deptTime,
            "trackingType": this.trackingType,
            "deviceImei": null,
            "locationInfo": null,
            "vehicleStateInfo": null
        };
        console.log(obj);
        this.manualShipment.delivery.emit(obj);
        this.isConfirmDeliveryDialog = false;
        this.isSpinner = true;
        setTimeout(function () {
            _this.shipmentServices.getShipmentDetail.emit(_this.selectedShipment.currentShipment.shipmentId);
        }, 1000);
    };
    ManualShipmentStatusComponent.prototype.tsToDate = function (timeStamp) {
        var date;
        date = new Date(timeStamp).toDateString();
        // Sun Jan 18 1970
        var dateTime = date.substr(8, 2) + '-' + date.substr(4, 3) + ' ' + date.substr(11, 4);
        console.log(dateTime);
        return dateTime;
    };
    ManualShipmentStatusComponent.prototype.tsToDateTime = function (timeStamp) {
        var date;
        var time;
        date = new Date(timeStamp).toDateString();
        time = new Date(timeStamp).toTimeString().substr(0, 5);
        var x;
        if (time.substr(0, 2) >= 12) {
            x = time.substr(0, 2) % 12 + time.substr(2, 3) + ' PM';
        }
        else {
            x = time.substr(0, 5) + ' AM';
        }
        // Sun Jan 18 1970
        var dateTime = date.substr(8, 2) + '-' + date.substr(4, 3) + ' ' + date.substr(11, 4) + ', at ' + x;
        console.log(dateTime);
        return dateTime;
    };
    ManualShipmentStatusComponent.prototype.msToTime = function (duration) {
        var x = duration / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        // console.log(days);
        var totalDuration = '';
        if (days > 0) {
            totalDuration = days + "d ";
        }
        if (hours > 0) {
            totalDuration = totalDuration + hours + "hr ";
        }
        if (days >= 1) {
            return totalDuration;
        }
        if (minutes > 0) {
            return totalDuration = totalDuration + minutes + "min";
        }
        if (seconds > 0 && totalDuration == '') {
            totalDuration = totalDuration + seconds + " sec";
        }
        if (totalDuration == '') {
            return '0 sec';
        }
        else {
            return totalDuration;
        }
    }; //close methods msToTime
    ManualShipmentStatusComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_shipmentDetail != 'undefined' && this.unSub_shipmentDetail != null && this.unSub_shipmentDetail != undefined)
            this.unSub_shipmentDetail.unsubscribe();
        // this.isShowLocation=true;
    };
    return ManualShipmentStatusComponent;
}());
ManualShipmentStatusComponent = __decorate([
    core_1.Component({
        selector: 'app-manual-shipment-status',
        template: __webpack_require__("../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _b || Object, typeof (_c = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _c || Object, typeof (_d = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _d || Object, typeof (_e = typeof manual_shipment_service_1.ManualShipmentServices !== "undefined" && manual_shipment_service_1.ManualShipmentServices) === "function" && _e || Object])
], ManualShipmentStatusComponent);
exports.ManualShipmentStatusComponent = ManualShipmentStatusComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=manual-shipment-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-shipment/new-shipment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n  font-family: Helvetica;\n}\n\n.stepperIcon{\n  position: relative;\n  border-radius: 50%;\n  padding: 11px;\n  color: #ffffff;\n  background-color: #3f51b5;\n  font-size: 13px;\n  height: 0px;\n}\n\n.change-mode-button{\n  background-color: #42d35d;\n  font-size: 12px;\n  line-height: 26px;\n  height: 25px;\n  border-radius: 13px;\n  color:#FFFFFF;\n}\n\n.element{\n  /*padding: 6px 6px;*/\n  height: 55px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-shipment/new-shipment.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"overflow: hidden;height: 100vh;\">\n      <div  fxLayout=\"row\" style=\"padding: 9px;\">\n        <div  fxFlex=\"33\" >\n          <div  style=\"display:flex;\" >\n            <label class=\"stepperIcon\" [style.background-color]=\"steperNo >= 1 ?'#3f51b5':'grey'\" >\n              <span style=\"position: absolute;margin-left: -4px;margin-top: -8px;\">1</span>\n            </label>\n            <!--<hr>-->\n            <span style=\"margin-left: 5px\">Enter Shipment Detail</span>\n          </div>\n        </div>\n        <div fxFlex=\"33\">\n          <div style=\"text-align: center;display: flex;\" >\n            <label class=\"stepperIcon\" [style.background-color]=\"steperNo >= 2 ?'#3f51b5':'grey'\" >\n              <span style=\"position: absolute;margin-left: -4px;margin-top: -8px;\">2</span>\n            </label>\n            <!--<hr>-->\n            <span style=\"margin-left: 5px\">Add Vehicle Tracking device</span>\n            <!--<span style=\"margin-left: 5px\">Tracking Configuration</span>-->\n          </div>\n        </div>\n\n        <div fxFlex=\"33\">\n          <div  style=\"display: flex;\" >\n            <label class=\"stepperIcon\" [style.background-color]=\"steperNo == 3 ?'#3f51b5':'grey'\" >\n              <span style=\"position: absolute;margin-left: -4px;margin-top: -8px;\">3</span>\n            </label>\n            <span style=\"margin-left: 5px\">Add Driver Details</span>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"overflow:hidden;height: calc(100vh - 80px);\">\n        <div *ngIf=\"steperNo == 1\" style=\"padding: 30px;font-size: 13px;\" >\n          \n          <div>\n            <label  class=\"fade-sub-header-text\">Consignor Name*</label>\n            <app-freight-location-picker [inputType]=\"'origin'\"    [locationFromTemplate]=\"selectedTemplateLocation\" [pickerLocationType]=\"typeOfLocationCreator\" (onLocationPick)='setOriginLocation($event)' ></app-freight-location-picker>\n          </div>\n          <!--(click)=\"tripOriginDialog()\"-->\n           \n          <div>\n              <label class=\"fade-sub-header-text\">Consignee Name*</label>              \n            <app-freight-location-picker [inputType]=\"'destination'\"  [locationFromTemplate]=\"selectedTemplateLocation\" [pickerLocationType]=\"typeOfLocationCreator\" (onLocationPick)='setDestinationLocation($event)' ></app-freight-location-picker>\n          </div>\n           <!--(click)=\"tripOriginDialog()\"-->\n            \n           \n\n\n          <div class=\"element\" >\n            <md-input-container style=\"width: 100%;\">\n              <input style=\"width: 100%;\" placeholder=\"Shipment Number\" mdInput [(ngModel)]=\"shipmentNumber\" name=\"shipmentNumber\" id=\"shipmentNumber\" >\n            </md-input-container>\n          </div>\n\n\n          <div class=\"element\" >\n            <md-input-container style=\"width: 100%;\">\n              <input style=\"width: 100%;\" placeholder=\"Consignment Number\" mdInput [(ngModel)]=\"consignmentNumber\" name=\"consignmentNumber\"\n                     id=\"consignmentNumber\">\n            </md-input-container>\n          </div>\n\n          <div fxLayout=\"row\" >\n            <div fxFlex=\"48\" style=\"margin-top: 12px;height:60px;top:281px;\">\n              <owl-date-time mdInput [autoClose]=true [(ngModel)]=\"plannedStartDate\" placeHolder=\"Planned Start Date\"></owl-date-time>\n            </div>\n            <div fxFlex=\"48\" style=\"margin-left:auto\">\n              <md-input-container style=\"width: 100%;\">\n                <input type=\"number\" placeholder=\"Transit Days\" mdInput  [(ngModel)]=\"transitDays\" name=\"transitDays\" id=\"transitDays\">\n              </md-input-container>\n            </div>\n          </div>\n\n          \n          <div fxLayout=\"row\" class=\"element\" ><!-- *ngFor=\"let item of itemList\" -->\n            <div fxFlex=\"48\" style=\"margin-top: 4px\">\n              <md-input-container style=\"width: 90%;\">\n                <input style=\"width: 100%;\" placeholder=\"Quantity\" mdInput  [(ngModel)]=\"quantity\" name=\"quantity\" id=\"quantity\">\n              </md-input-container>\n            </div>\n\n            <div fxFlex=\"48\" style=\"margin-top: 11px\">\n              <md-select  placeholder=\"Measurement Type\" style=\"width: 80%\" [(ngModel)]=\"mesurementType\" (change)=\"selectMesurementType()\" >\n                <md-option *ngFor=\"let mesurement of mesurements\" [value]=\"mesurement.name\" >\n                   {{mesurement.viewValue}}\n                </md-option>\n              </md-select>\n            </div>\n            <div fxFlex=\"48\" style=\"margin-top: 11px\" *ngIf=\"isShowUnits\">\n              <md-select  placeholder=\"Select Units\" style=\"width: 60%\" [(ngModel)]=\"selectedUnit\" floatPlaceholder=\"never\">\n                <md-option *ngFor=\"let unit of selectUnit\" [value]=\"unit\">\n                   {{unit}}\n                </md-option>\n              </md-select>\n            </div>\n            <div fxFlex=\"48\" style=\"margin-top: 7px\" *ngIf=\"isShowUnitInput\">\n                <md-input-container style=\"width: 90%;\">\n                    <input style=\"width: 60%;\" placeholder=\"No. Of Package\" mdInput  [(ngModel)]=\"selectedUnit\" >\n                  </md-input-container>\n            </div>\n          </div>\n          <!-- <div style=\"width: 100%;margin-top: 10px;text-align:right;\">\n            <button md-raised-button  class=\"change-mode-button\" style=\"background-color: #bebebe;\" (click)=\"addItem()\">+add</button>\n         </div> -->\n          \n\n\n          <div style=\"margin-top: 10px;\">\n            <md-input-container style=\"width: 100%;\">\n              <input style=\"width: 100%;\" placeholder=\"Vehicle Number\" mdInput [(ngModel)]=\"vehicleNumber\" name=\"vehicleNumber\" id=\"vehicleNumber\">\n            </md-input-container>\n          </div>\n\n          <div style=\"margin-top: 20px;text-align: right;\">\n            <button md-raised-button color=\"primary\" (click)=\"step2();convertTime();\">Next</button>\n            <!--<button md-raised-button>BACK</button>-->\n          </div>\n\n        </div>\n\n        <!-- step 2 ************************************-->\n        <div *ngIf=\"steperNo == 2\" style=\"margin-top:60px;text-align: center\" >\n        <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n          <div *ngIf=\"isShowTracknetEnable\"><span><u>Tracknet Enabled </u></span></div>\n          <div style=\"margin-top: 21px;\">\n             <button [style.background-color]=\"trackerType == 'Trip'?'green':'gray'\" md-raised-button  class=\"change-mode-button\"  (click)=\"setTrackType('Trip');isShowTracknetEnable=true\" *ngIf=\"isShowTrip\">Tracknet</button>              \n             <button [style.background-color]=\"trackerType == 'Tracker'?'green':'gray'\" md-raised-button  class=\"change-mode-button\" style=\"margin-left: 20px;\" (click)=\"setTrackType('Tracker');isShowTracknetEnable=false\">Tracker</button>\n             <button [style.background-color]=\"trackerType == 'Manual'?'green':'gray'\" md-raised-button style=\"margin-left: 20px;\" class=\"change-mode-button\" (click)=\"setTrackType('Manual');isShowTracknetEnable=false\">Manual mode</button>\n          </div>\n          <div style=\"margin-top: 15px\" *ngIf=\"trackerType == 'Tracker'\">\n            <md-input-container style=\"width: 250px;\" >\n              <input style=\"width: 100%;\" placeholder=\"Tracker IMEI\" mdInput [(ngModel)]=\"trackerIMEI\"  name=\"TrackerIMEI\" id=\"TrackerIMEI\" readonly (focus)=\"onClickIMEI()\">\n            </md-input-container>\n            <div *ngIf=\"showIMEI\" style=\"min-height: 90px;max-height: 190px;overflow-y: auto;width: 280px;margin-left:40%;margin-top: -22px;    background-color: rgb(236, 236, 241);\">\n              <ul style=\"list-style-type: none;\" *ngFor=\"let device of allDeviceList\">\n                <li  (click)=\"onSelectIMEI(device)\">{{device?.device?.imei}}</li><hr style=\"margin-left:-40px\">\n              </ul>\n            </div>\n          </div>\n\n          <div style=\"margin-top: 60px;\">\n\n            <button md-raised-button color=\"primary\" (click)=\"step1()\">Previous</button>\n\n            <button md-raised-button color=\"primary\" (click)=\"step3();\">Next</button>\n            <!--<button md-raised-button>BACK</button>-->\n          </div>\n        </div>\n\n        <div *ngIf=\"steperNo ==  3\" style=\"text-align: center;margin-top: 60px\">\n          <div  *ngIf=\"isShowchip\"style=\"margin-top: 15px;\">\n            <md-chip-list style=\"justify-content: center;display: flex;\">\n                <md-chip >{{driverName}}  {{mobileNo}} <i class=\"fa fa-times-circle\" mdChipRemove *ngIf=\"true\" (click)=\"isShowchip=false\"></i> </md-chip>\n            </md-chip-list>\n          </div>\n\n          <div style=\"margin-top: 15px \">\n             <button md-raised-button  class=\"change-mode-button\" style=\"background-color: #bebebe\" (click)=\"isAddDriverDetail=true\">+add Driver</button>\n          </div>\n          <div *ngIf=\"isAddDriverDetail\">\n            <md-input-container>\n              <input style=\"width: 100%;\" placeholder=\"Driver Name\" mdInput [(ngModel)]=\"driverName\"  name=\"driverName\" id=\"driverName\">\n            </md-input-container>\n            <md-input-container>\n              <input style=\"width: 100%;\" placeholder=\"Mobile No\" mdInput [(ngModel)]=\"mobileNo\"  name=\"mobileNo\" id=\"mobileNo\">\n            </md-input-container>\n          </div>\n          <div style=\"margin-top: 60px\">\n             <button md-raised-button color=\"primary\" (click)=\"step2()\">Previous</button>\n             <button md-raised-button color=\"primary\" (click)=\"createShipment()\">Done</button>\n          </div>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/new-shipment/new-shipment.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var device_services_1 = __webpack_require__("../../../../../src/app/services/device-services.ts");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var util_1 = __webpack_require__("../../../../util/util.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var NewShipment = (function () {
    function NewShipment(_router, deviceServices, shipmentServices, _store, service, snackBar) {
        var _this = this;
        this._router = _router;
        this.deviceServices = deviceServices;
        this.shipmentServices = shipmentServices;
        this._store = _store;
        this.service = service;
        this.snackBar = snackBar;
        this.steperNo = 1;
        this.mesurements = [
            { name: 'weight', viewValue: ' Weight', units: ["Kg", "Ton", "Pound"] },
            { name: 'volume', viewValue: ' Volume', units: ["cm3", "m3", "feet3"] },
            { name: 'package', viewValue: 'Package Count' }
        ];
        this.selectUnit = this.mesurements[0].units;
        this.shipmentNumber = '';
        this.consignmentNumber = null;
        this.mesurementType = 'weight';
        this.trackerType = "Tracker";
        this.trackerIMEI = null;
        this.driverName = 'md Asif';
        this.mobileNo = '854745869';
        this.isDevice = false;
        // *****************************************
        this.hours = [];
        this.minutes = [];
        this.locationSelect = "";
        this.durationTime = "";
        this.durationType = "";
        this.stopDurationTime = "";
        this.toHour = "";
        this.toMin = "";
        this.fromHour = "";
        this.fromMin = "";
        //unSubscribe variables
        this.unSub_allFreightList = null;
        this.unSub_allDeviceList = null;
        this.selectedTemplateLocation = new core_1.EventEmitter();
        //validation variables
        this.isEventSelected = false;
        this.isShowEvent = true;
        this.isStep1 = true;
        this.isShowchip = true;
        this.isShowConsigner = false;
        this.isShowConsignee = false;
        this.isShowFields = false;
        this.isShowActions = false;
        this.isFieldsFilled = false;
        this.isModalShown = false;
        this.isAddDriverDetail = false;
        this.showConsignerList = false;
        this.showConsigneeList = false;
        this.isAddQuantity = false;
        this.isShowUnits = true;
        this.isShowUnitInput = false;
        //location picker var
        this.typeOfLocationCreator = { type: "Polygon" };
        this.isShowLocationDialog = false;
        this.isShowOrigin = false;
        this.isShowDestination = false;
        //unsubscribe var
        this.unSub_newShipment = null;
        this.unSub_checkVehicle = null;
        this.unSub_checkDevice = null;
        this.isShowTrip = false;
        this.isShowTracknetEnable = false;
        this.isSpinner = true;
        this.allDeviceList = [];
        this.showIMEI = false;
        shipmentServices.initialize();
        this.unSub_newShipment = this._store.select('newShipment').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    _this.openSnackBar("Shipment Created Successfully");
                }
                else {
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
        this.deviceServices.allDevicesList.emit();
        this.isSpinner = true;
        this.unSub_allDeviceList = this._store.select('allDevicesList').subscribe(function (value) {
            console.log(value);
            if (value != null) {
                _this.isSpinner = false;
                if (value['error'] == '') {
                    //for Error Handaling
                    _this.allDeviceList = value['res'];
                    console.log(_this.allDeviceList);
                }
                else {
                    console.log(value['errorMsg']);
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
        this.unSub_checkVehicle = this._store.select('checkVehicle').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    if (value['res']['exist'] == true) {
                        _this.trackerType = "Trip";
                        _this.vehicleObj = value['res']['vehicle'];
                        _this.isShowTrip = true;
                        _this.isShowTracknetEnable = true;
                        _this.isSpinner = false;
                        console.log(_this.vehicleObj);
                    }
                    else {
                        _this.trackerType = "Tracker";
                        _this.isShowTrip = false;
                        _this.isSpinner = false;
                        _this.isShowTracknetEnable = false;
                    }
                }
                else {
                    _this.trackerType = "Tracker";
                    _this.isShowTrip = false;
                    _this.isSpinner = false;
                    _this.isShowTracknetEnable = false;
                }
            }
        });
    }
    ;
    NewShipment.prototype.ngOnInit = function () {
        // setTimeout(()=>{
        // this.selectedTemplateLocation.emit({source:'Consignor',destination:'Consignee'});            
        //   },100);
    };
    NewShipment.prototype.ngOnDestroy = function () {
        // if (typeof this.unSub_newShipment != 'undefined' && this.unSub_newShipment != null && this.unSub_newShipment != undefined)
        // this.unSub_newShipment.unsubscribe();
        if (typeof this.unSub_checkVehicle != 'undefined' && this.unSub_checkVehicle != null && this.unSub_checkVehicle != undefined)
            this.unSub_checkVehicle.unsubscribe();
    };
    NewShipment.prototype.createShipment = function () {
        var deviceImei;
        var obj;
        var vehicleId = null;
        if (this.trackerType == 'Trip') {
            vehicleId = this.vehicleObj['uuid'];
            console.log(vehicleId);
        }
        obj = {
            "deviceImei": this.trackerIMEI,
            "driverName": this.driverName,
            "endLocation": { "freightLocation": this.consignee },
            "mobileNo": this.mobileNo,
            "planedEndTime": this._transitDaysTimestamp,
            "planedStartTime": this._plannedStartDateTimestamp,
            "shipmentId": null,
            "vehicleId": vehicleId,
            "shipmentNo": null,
            "shipmentNoExtended": this.shipmentNumber,
            "shipmentState": "Created",
            "startLocation": { "freightLocation": this.consigner },
            "trackingType": this.trackerType,
            "vehicleRegistrationNo": this.vehicleNumber
        };
        console.log(obj);
        this.shipmentServices.createNewShipment.emit(obj);
        this._router.navigate(['dashboard/shipmentStatus']);
    };
    NewShipment.prototype.setOriginLocation = function (value) {
        console.log(value);
        var obj1 = {};
        if (value['freightLocation'] != null || value['freightLocation'] != undefined) {
            console.log('contains location Obj source');
            obj1 = value['freightLocation'];
            // console.log(obj1);
        }
        else {
            console.log('contains No freight location Obj source');
            obj1 = value;
        }
        if (util_1.isNullOrUndefined(obj1['address']) || obj1['address'] == "") {
            obj1['address'] = value['name'];
        }
        // console.log(obj1);
        this.consignerName = obj1['name'];
        // this.originTripAddress=obj1['name'];
        this.oLat = obj1["geofence"]["type"] == 'Proximity' ? obj1["geofence"]["circle"]["center"]["latitude"] : obj1["geofence"]["center"]["latitude"];
        this.oLng = obj1["geofence"]["type"] == 'Proximity' ? obj1["geofence"]["circle"]["center"]["longitude"] : obj1["geofence"]["center"]["longitude"];
        this.etaDistanceCalaculater(this.oLat, this.oLng, this.dLat, this.dLng);
        // this.showAddressList = false;
        this.consigner = obj1;
        console.log(this.consigner);
        this.isShowLocationDialog = false;
    };
    NewShipment.prototype.setDestinationLocation = function (value) {
        console.log(value);
        var obj = {};
        if (value['freightLocation'] != null || value['freightLocation'] != undefined) {
            console.log('contains location Obj Destination');
            obj = value['freightLocation'];
        }
        else {
            console.log('contains No freight location Obj Destination');
            obj = value;
        }
        if (util_1.isNullOrUndefined(obj['address']) || obj['address'] == "") {
            obj['address'] = value['name'];
        }
        this.consigneeName = obj['name'];
        // this.destinationTripAddress = obj['name'];
        // this.dLat = value["freightLocation"]["geofence"]["center"]["latitude"];
        this.dLat = obj["geofence"]["type"] == 'Proximity' ? obj["geofence"]["circle"]["center"]["latitude"] : obj["geofence"]["center"]["latitude"];
        // this.dLng =value["locObj"]["freightLocation"]["geofence"]["center"]["longitude"];
        this.dLng = obj["geofence"]["type"] == 'Proximity' ? obj["geofence"]["circle"]["center"]["longitude"] : obj["geofence"]["center"]["longitude"];
        this.etaDistanceCalaculater(this.oLat, this.oLng, this.dLat, this.dLng);
        // this.showDestAddressList = false;
        this.consignee = obj;
        console.log(this.consignee);
        this.isShowLocationDialog = false;
    };
    NewShipment.prototype.etaDistanceCalaculater = function (oLat, oLng, dLat, dLng) {
        if (dLng != null && dLat != null && oLat != null && oLng != null) {
            // this.eta_distance.path = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + this.oLat + "," + this.oLng + "&destinations=" + this.dLat + "," + this.dLng + "&key=AIzaSyCLN-Y6Ugg4D-kzS1l_keqhyJ4tam-TKiI";
            var obj = { "oLat": oLat, "oLng": oLng, "dLat": dLat, "dLng": dLng };
            //this.eta_distance.getEtaDistance.emit(obj);
        }
    };
    NewShipment.prototype.convertTime = function () {
        this._plannedStartDateTimestamp = new Date(this.plannedStartDate).getTime();
        this._transitDaysTimestamp = new Date(this.plannedStartDate).getTime() + ((this.transitDays * 60 * 60 * 24 * 1000));
    };
    NewShipment.prototype.setTrackType = function (type) {
        this.trackerType = type;
        this.showIMEI = false;
    };
    NewShipment.prototype.onClickIMEI = function () {
        this.showIMEI = true;
    };
    NewShipment.prototype.onSelectIMEI = function (device) {
        this.trackerIMEI = device['device']['imei'];
        this.showIMEI = false;
    };
    NewShipment.prototype.selectMesurementType = function () {
        if (this.mesurementType == 'weight') {
            this.isShowUnits = true;
            this.isShowUnitInput = false;
            this.selectUnit = this.mesurements[0].units;
        }
        if (this.mesurementType == 'volume') {
            this.isShowUnits = true;
            this.isShowUnitInput = false;
            this.selectUnit = this.mesurements[1].units;
        }
        if (this.mesurementType == 'package') {
            this.selectedUnit = '0';
            this.isShowUnits = false;
            this.isShowUnitInput = true;
        }
    };
    NewShipment.prototype.setTimeHours = function () {
        var time = "";
        time = this.fromHour + ":" + this.fromMin + " hrs to " + this.toHour + ":" + this.toMin + " hrs";
        this.durationTime = time;
        console.log(this.durationTime);
        this.isModalShown = false;
    };
    NewShipment.prototype.step1 = function () {
        var _this = this;
        setTimeout(function () {
            _this.selectedTemplateLocation.emit({ source: _this.consignerName, destination: _this.consigneeName });
        }, 100);
        // console.log(this.consignerName +this.consigneeName);
        this.steperNo = 1;
    };
    NewShipment.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'OK', { duration: 4000 });
    };
    NewShipment.prototype.step2 = function () {
        if (util_1.isNullOrUndefined(this.consigner) || this.consigner == "") {
            this.openSnackBar("Please fill Consigner");
            this.steperNo = 1;
        }
        else if (util_1.isNullOrUndefined(this.consignee) || this.consignee == "") {
            this.openSnackBar("Please fill Consinee");
            this.steperNo = 1;
        }
        else if (util_1.isNullOrUndefined(this.plannedStartDate) || this.plannedStartDate == "") {
            this.openSnackBar("Please fill Shipment start time");
            this.steperNo = 1;
        }
        else if (util_1.isNullOrUndefined(this.transitDays) || this.transitDays == "") {
            this.openSnackBar("Please fill Transite Days");
            this.steperNo = 1;
        }
        else if (util_1.isNullOrUndefined(this.vehicleNumber) || this.vehicleNumber == "") {
            this.openSnackBar("Please fill Vehicle No");
            this.steperNo = 1;
        }
        else {
            this.isAddDriverDetail = false;
            this.shipmentServices.checkVehicle.emit(this.vehicleNumber);
            this.steperNo = 2;
        }
    };
    NewShipment.prototype.step3 = function () {
        if (this.trackerType == 'Tracker' && (this.trackerIMEI == undefined || this.trackerIMEI == null)) {
            this.openSnackBar("Please fill IMEI No");
            // if(this.trackerIMEI!=null ||this.trackerIMEI!=undefined){
            //   setTimeout(()=>{
            //   this.shipmentServices.checkDevice.emit(this.trackerIMEI);
            //     },100);
            //   if(!this.isDevice){
            //     this.steperNo = 2;
            //   }
            //   else{
            //     this.isAddDriverDetail=false;
            //     this.steperNo = 3;
            //   }
            // }
            this.steperNo = 2;
        }
        else {
            this.isAddDriverDetail = false;
            this.steperNo = 3;
        }
    };
    NewShipment.prototype.goBack = function () {
        //this._store.dispatch(go(['/dashboard/configureAlerts']));
    };
    return NewShipment;
}());
NewShipment = __decorate([
    core_1.Component({
        selector: 'app-new-shipment',
        template: __webpack_require__("../../../../../src/app/components/new-shipment/new-shipment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new-shipment/new-shipment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof device_services_1.DeviceServices !== "undefined" && device_services_1.DeviceServices) === "function" && _b || Object, typeof (_c = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _c || Object, typeof (_d = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _d || Object, typeof (_e = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _e || Object, typeof (_f = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _f || Object])
], NewShipment);
exports.NewShipment = NewShipment;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=new-shipment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings-component/settings-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings-component/settings-component.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card style=\"cursor: pointer\" (click)=\"goToManageOrganisation()\">\n  <md-card-content>\n    <div style=\"padding: 15px\">\n      <label style=\"vertical-align: -6px;margin-right: 5px\">{{'Manage Organsation'}}</label>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings-component/settings-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var SettingsComponentComponent = (function () {
    function SettingsComponentComponent(_router) {
        this._router = _router;
    }
    SettingsComponentComponent.prototype.ngOnInit = function () {
    };
    SettingsComponentComponent.prototype.goToManageOrganisation = function () {
        this._router.navigate(['dashboard/manageOrganisation']);
    };
    return SettingsComponentComponent;
}());
SettingsComponentComponent = __decorate([
    core_1.Component({
        selector: 'app-settings-component',
        template: __webpack_require__("../../../../../src/app/components/settings-component/settings-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings-component/settings-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], SettingsComponentComponent);
exports.SettingsComponentComponent = SettingsComponentComponent;
var _a;
//# sourceMappingURL=settings-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shipment-management/shipment-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shipment-management/shipment-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <div *ngIf=\"isShowAddNewGroupDialog\"   class=\"mycustomDialog\" style=\"padding-top: 70px;\">\n    <div class=\"modal-content\" style=\"width:40%;min-width:250px;overflow: hidden;max-width: 400px;\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"isShowAddNewGroupDialog=false;\" >&times;</span>\n        <label>Create Group</label>\n      </div>\n      <div  style=\"padding: 10px;font-size: 13px;\">\n        <div style=\"padding: 5px;\" >\n          <div style=\"width: 100%;text-align:center\" >\n            <md-input-container style=\"width:85%\" >\n              <input placeholder=\"Group Name\"  mdInput required [(ngModel)]=\"groupName\" >\n            </md-input-container>\n          </div>\n          <div style=\"padding-top: 10px;text-align: center\" >\n            <button md-raised-button (click)=\"isShowAddNewGroupDialog=false\">CANCEL</button>\n            <button [disabled]=\"groupName ==''\" md-raised-button color=\"primary\" style=\"margin-left: 15%\" (click)=\"createNewGroup()\">SAVE</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"padding:14px;font-size:16px;color:#858585;font-weight:bold;\" >\n    <span>Shipment Groups</span>\n  </div>\n\n  <div style=\"height:calc(100vh - 95px);overflow:auto;padding:2px\" >\n   <md-card *ngFor=\"let shipment of shipmentGrpList\" >\n     <span style=\"margin-left: 12px;\">{{shipment['groupName']}}</span>\n   </md-card>\n  </div>\n\n   <button [disabled]=\"this.customerDetails['orgId'] ==null || this.customerDetails['orgId'] == undefined\" md-fab color=\"primary\" (click)=\"isShowAddNewGroupDialog =true\" style=\"position:absolute;bottom: 10px;right: 10px;\" >\n     <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\n   </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shipment-management/shipment-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var shipment_mgmt_services_1 = __webpack_require__("../../../../../src/app/services/shipment-mgmt-services.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var ShipmentManagementComponent = (function () {
    function ShipmentManagementComponent(_router, _store, snackBar, shipmentMgmtService) {
        var _this = this;
        this._router = _router;
        this._store = _store;
        this.snackBar = snackBar;
        this.shipmentMgmtService = shipmentMgmtService;
        this.unSub_customerDetails = null;
        this.isSpinner = false;
        this.unSub_shipmentGroupList = null;
        this.unSub_createGroupRes = null;
        this.isShowAddNewGroupDialog = false;
        this.shipmentGrpList = [];
        this.groupName = '';
        this.customerDetails = null;
        this.unSub_customerDetails = _store.select('customerDetails').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            console.log(value['customer']['orgId']);
            _this.customerDetails = value['customer'];
            _this.isSpinner = true;
            _this.shipmentMgmtService.getAllShipmentGroupsList.emit(value['customer']['orgId']);
        });
        this.unSub_shipmentGroupList = _store.select('shipmentGroupList').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            if (value['error'] == '') {
                console.log(value['res']);
                _this.shipmentGrpList = value['res'];
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
        // when new shipment group created
        this.unSub_createGroupRes = this._store.select('createGroupRes').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == '') {
                console.log(value['res']);
                _this.openSnackBar("Group created successfully");
                if (_this.customerDetails['orgId'] != null) {
                    _this.isSpinner = true;
                    _this.groupName = '';
                    _this.shipmentMgmtService.getAllShipmentGroupsList.emit(_this.customerDetails['orgId']);
                }
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
    } //constructor close
    ShipmentManagementComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined)
            this.unSub_customerDetails.unsubscribe();
        if (typeof this.unSub_shipmentGroupList != 'undefined' && this.unSub_shipmentGroupList != null && this.unSub_shipmentGroupList != undefined)
            this.unSub_shipmentGroupList.unsubscribe();
        if (typeof this.unSub_createGroupRes != 'undefined' && this.unSub_createGroupRes != null && this.unSub_createGroupRes != undefined)
            this.unSub_createGroupRes.unsubscribe();
    };
    ShipmentManagementComponent.prototype.ngOnInit = function () {
    };
    // goToGroupedShipmentList() {
    //   this._router.navigate(['dashboard/userManagementComponent']);
    // }
    ShipmentManagementComponent.prototype.createNewGroup = function () {
        if (this.checkValidation()) {
            this.isShowAddNewGroupDialog = false;
            var grpObj = {
                orgId: this.customerDetails['orgId'],
                groupName: this.groupName,
                groupType: "shipmentGroup"
            };
            console.log(grpObj);
            this.shipmentMgmtService.createNewShipmentGroup.emit(grpObj);
        }
    };
    ShipmentManagementComponent.prototype.checkValidation = function () {
        if (this.groupName == "") {
            this.openSnackBar("Please fill Group name");
            return false;
        }
        if (this.customerDetails['orgId'] == null) {
            this.openSnackBar("Please refresh page or login again");
            return false;
        }
        return true;
    };
    ShipmentManagementComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    return ShipmentManagementComponent;
}());
ShipmentManagementComponent = __decorate([
    core_1.Component({
        selector: 'app-shipment-management',
        template: __webpack_require__("../../../../../src/app/components/shipment-management/shipment-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shipment-management/shipment-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _c || Object, typeof (_d = typeof shipment_mgmt_services_1.ShipmentMgmtService !== "undefined" && shipment_mgmt_services_1.ShipmentMgmtService) === "function" && _d || Object])
], ShipmentManagementComponent);
exports.ShipmentManagementComponent = ShipmentManagementComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=shipment-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shipment-status/shipment-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container{*/\n  /*padding: 20px;*/\n  /*margin: 15px;*/\n  /*width: 100%;*/\n/*}*/\n\n/*.cards-toggle*/\n/*{*/\n  /*width: 15%;*/\n  /*float: left;*/\n/*}*/\n\n/*.cards-toggle:hover*/\n/*{*/\n  /*background-color: #1976d2;*/\n  /*color: white;*/\n  /*width: 15%;*/\n  /*float: left;*/\n/*}*/\n\n/*.cards-toggle:active*/\n/*{*/\n  /*background-color: #1976d2;*/\n  /*color: white;*/\n  /*width: 15%;*/\n  /*float: left;*/\n/*}*/\n\n/*.expand-search {*/\n  /*border: 1.5px solid #03a9f4;*/\n  /*font-size: 14px;*/\n  /*padding: 5px 26px 6px 12px;*/\n  /*display: inline-block;*/\n  /*!*border: 1.5px solid #ccc;*!*/\n  /*border-radius: 17px;*/\n  /*box-sizing: border-box;*/\n  /*outline: none;*/\n  /*}*/\n\n/*.overlay{*/\n/*position: relative;*/\n  /*display: none;*/\n  /*z-index: 10;*/\n  /*left: 137px;*/\n  /*top: 72px;*/\n  /*width: 0%;*/\n/*}*/\n\ndiv{\n  font-family: Helvetica;\n}\n\n.container{\n  padding: 5px 10px 5px 5px;\n  /*margin: 15px;*/\n  width: 100%;\n}\n\nmd-card{\n  /*min-width: 190px;*/\n  padding: 15px;\n  /*margin-top: 8px;*/\n  /*margin: 5px;*/\n  font-family: Helvetica;\n}\n\n.cards-toggle\n{\n  height: 30px;\n  font-size: 12px;\n  margin-left: 8px;\n  width: 13%;\n  /*width: 15%;*/\n  /*float: left;*/\n}\n\n.cards-toggle div{\n  text-align: center;\n}\n\n.cards-toggle:hover\n{\n  background-color: #5b89ff !important;\n  color: white;\n  cursor: pointer;\n  /*width: 15%;*/\n  /*float: left;*/\n}\n\n/*.cards-toggle:active*/\n/*{*/\n  /*background-color: #512da1;*/\n  /*color: white;*/\n  /*!*width: 15%;*!*/\n  /*!*float: left;*!*/\n/*}*/\n\n\n\n\n\n\n/*.expand-search {*/\n/*border: 1.5px solid #03a9f4;*/\n/*font-size: 14px;*/\n/*padding: 5px 26px 6px 12px;*/\n/*display: inline-block;*/\n/*!*border: 1.5px solid #ccc;*!*/\n/*border-radius: 17px;*/\n/*box-sizing: border-box;*/\n/*outline: none;*/\n/*}*/\n\n.overlay{\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: -ms-grid;\n  display: grid;\n}\n\n.doughnut-chart{\n  position: relative;\n  margin-top: -19px;\n  width: 196px;\n  margin-right: -43px;\n}\n\n.expand-search {\n  border: 1.5px solid #b0bcc1;\n  width: 100%;\n  font-size: 12px;\n  padding: 5px 26px 5px 12px;\n  display: inline-block;\n  /*border: 1.5px solid #ccc;*/\n  border-radius: 17px;\n  box-sizing: border-box;\n  outline: none;\n}\n\n/* search box*/\n.expand-search:focus{\n  outline: none;\n  border: 1.5px solid #03a9f4;\n}\n\n.doughnut-chart-label{\n  padding:0px 6px;font-size: 10px;margin-right:5px\n}\n\n.custome-button button{\n  height: 26px;\n  font-size: 13px;\n  line-height: 26px;\n  border-radius: 5px;\n}\n\n\ntable {\n  font-family: Helvetica;\n  color: #46465f;\n  font-size: 11px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  /*border: 1px solid #eee;*/\n  border-right: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n}\n.list-header1{\n  color: #46465f;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 8px;\n  width: 160%;\n}\n.list-body1 {\n  font-size: 12px;\n  padding: 8px;\n  /*margin-top: 5px;*/\n}\n\n.list-body1 span{\n  margin-left: 5px;\n}\n\n\n/*tr:nth-child(even) {*/\n  /*!*background-color: #f1faff;*!*/\n  /*!*background-color: #f6f9fd;*!*/\n  /*background-color: aliceblue;*/\n/*}*/\n\n.select-row:hover\n{\n  background-color: aliceblue;\n}\n\n\n.button-align button\n{\n  line-height:25px\n}\n\n.imgcontainer {\n  /*margin: 24px 0 20px 0;*/\n  padding-left: 20px;\n}\n\n.pagination-button{\n  line-height: 25px;\n  min-width: 0px;\n  padding: 0px 10px 0px 10px;\n  color: #46465f;\n  background-color:whitesmoke;\n}\n\n.pagination-text {\n  color: #828395;\n  text-align: center !important;\n  font-weight: bolder;\n  font-size: 14px;\n  padding: 0 5px;\n  width:200px;\n}\n\n.pagination-text span{\n  display: inline-block;\n  min-width: 30px;\n}\n\nmd-option{\n  height: 35px;\n  line-height: 35px;\n}\n\n.my-select {\n  width: 130px;\n  padding: 0px 16px;\n  vertical-align: 6px;\n}\n\n\n.add-button{\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n\n.customCheckBox >>> .mat-checkbox-inner-container{\n  height: 15px !important;\n  width: 15px !important;\n}\n\n.customePaginator >>> .mat-paginator-range-label{\n  min-width: 92px;\n}\n \n\n.my-download{\n  color:rgb(48, 2, 2);\n  cursor: pointer;\n}\n\n.my-download:hover,\n.my-download:focus {\n  color: rgba(193, 208, 234, 0.97);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.download-csv{\n  font-size: 14px;\n  vertical-align: 8px;\n  margin-left: 13px;\n}\n.change-mode-button{\n  background-color: #42d35d;\n  font-size: 12px;\n  line-height: 26px;\n  height: 25px;\n  border-radius: 13px;\n  color:#FFFFFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shipment-status/shipment-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-width: 700px;box-sizing: border-box;\">\n    <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>    \n  <div style=\"display:flex;padding:20px 5px 10px 12px;\" >\n    <md-card class=\"cards-toggle\" (click)=\"selectedFilter = '';changeFilterList('')\" [style.background-color]=\"selectedFilter == ''?'#1976d2':''\"  [style.color]=\"selectedFilter == ''?'#FFFFFF':''\">\n      <div ><span >{{length}}</span></div>\n      <div style=\"margin-top: 6px;\" ><span  >All Shipments</span></div>\n    </md-card>\n\n    <md-card class=\"cards-toggle\" (click)=\"selectedFilter = 'active';changeFilterList('active')\" [style.background-color]=\"selectedFilter == 'active'?'#1976d2':''\"  [style.color]=\"selectedFilter == 'active'?'#FFFFFF':''\" style=\"margin-left: 20px\" >\n      <div  ><span > {{active}}</span></div>\n      <div style=\"margin-top: 6px;\" ><span  >Active</span></div>\n    </md-card>\n\n    <md-card class=\"cards-toggle\" (click)=\"selectedFilter = 'deliverd';changeFilterList('deliverd')\" [style.background-color]=\"selectedFilter == 'deliverd'?'#1976d2':''\"  [style.color]=\"selectedFilter == 'deliverd'?'#FFFFFF':''\" style=\"margin-left: 20px\" >\n      <div  ><span >{{deliverd}}</span></div>\n      <div  style=\"margin-top: 6px;\"><span  >Delivered</span></div>\n    </md-card>\n\n    <div style=\"display: flex;margin-left: auto;margin-right: 45px;\" >\n      <div class=\"doughnut-chart\" >\n        <div class=\"overlay\">\n          <i style=\"color: #1976d2\" class=\"fa fa-wifi\" aria-hidden=\"true\"></i>\n          <i style=\"color: #1976d2\" class=\"fa fa-mobile\" style=\"margin-left:6px\" aria-hidden=\"true\"></i>\n        </div>\n        <canvas baseChart\n                [options]=\"doughnutChartOptions\"\n                [data]=\"doughnutChartData\"\n                [chartType]=\"doughnutChartType\"\n                [colors]=\"doughnutColor\">\n        </canvas>\n      </div>\n\n      <div  style=\"margin-top: -10px;\">\n        <span style=\"font-size: 14px\">Tracking Status</span>\n        <div >\n          <span class=\"doughnut-chart-label\" style=\"background-color:#71a2ec;\" ></span>\n          <span style=\"font-size: 11px;\" >{{doughnutChartData[0]}}: Tracknet</span>\n        </div>\n        <div style=\"margin-top: 5px;\">\n          <span class=\"doughnut-chart-label\" style=\"background-color:#a1f2f5;\"></span>\n          <span style=\"font-size: 11px;\" >{{doughnutChartData[1]}}: Trip Tracker</span>\n        </div>\n\n        <div style=\"margin-top: 5px;\">\n          <span class=\"doughnut-chart-label\" style=\"background-color:#d7d8df;\"></span>\n          <span style=\"font-size: 11px;\" >{{doughnutChartData[2]}}: Manual Mode</span>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n\n   \n  <div style=\"display: flex;padding: 5px 5px;margin-top: 10px\" >\n    <div class=\"custome-button\" >\n      <button md-button (click)=\"createNewShipment()\" >+Create New Shipment</button>\n      <button md-raised-button color=\"primary\" style=\"margin-left: 16px;\" >Import Shipment</button>\n    </div>\n    <div style=\"display: flex;padding: 5px 5px;margin-left: 13px;\">\n      <i   (click)=\"download()\" class=\"fa fa-download my-download\" aria-hidden=\"true\">\n        <span class=\"download-csv\">CSV</span>\n      </i>\n    </div>\n    \n    <div class=\"custome-button\" style=\"display: inline-flex;margin-left: auto;\" >\n      <button md-raised-button color=\"primary\" style=\"margin-right: 40px\">Share</button>\n      <div style=\"position:relative;margin-top: -1px;\" >\n        <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\n        <input myAutofocus  [(ngModel)]=\"search\" class=\"expand-search\"  placeholder=\"Search\">\n      </div>\n    </div>\n  </div>\n    \n   <!--************************ Switch Shipment dialog *********************************-->\n    <div *ngIf=\"isSwitchShipmentDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;overflow:unset\">\n      <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow:unset;max-width: 560px;height:60vh;\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"closeToggle()\" >&times;</span>\n          <div>\n            <label>Switch Shipment</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 18px;font-size: 17px;margin-top:10px;margin-left:150px\" >\n          <md-spinner *ngIf=\"isSpin\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n            <div *ngIf=\"isEnabled\"><span><u>Tracknet Enabled </u></span></div>\n            <div style=\"margin-top: 21px;\">\n               <button [style.background-color]=\"trackerType == 'Trip'?'green':'gray'\" md-raised-button  class=\"change-mode-button\"  (click)=\"setTrackType('Trip');isEnabled=true\" *ngIf=\"isShowTrip\">Tracknet</button>              \n               <button [style.background-color]=\"trackerType == 'Tracker'?'green':'gray'\" md-raised-button  class=\"change-mode-button\" style=\"margin-left: 20px;\" (click)=\"setTrackType('Tracker');isEnabled=false\">Tracker</button>\n            </div>\n            <div style=\"margin-top: 15px\" *ngIf=\"trackerType == 'Tracker'\">\n            <md-input-container style=\"width: 250px;\" >\n              <input style=\"width: 100%;\" placeholder=\"Tracker IMEI\" mdInput [(ngModel)]=\"trackerIMEI\"  name=\"TrackerIMEI\" id=\"TrackerIMEI\" readonly (focus)=\"onClickIMEI()\">\n            </md-input-container>\n            <div *ngIf=\"showIMEI\" style=\"min-height:50px;max-height: 100px;overflow-y: auto;width: 280px;margin-left:0%;margin-top: -22px;    background-color: rgb(236, 236, 241);\">\n              <ul style=\"list-style-type: none;\" *ngFor=\"let device of allDeviceList\">\n                <li  (click)=\"onSelectIMEI(device)\">{{device?.device?.imei}}</li><hr style=\"margin-left:-40px\">\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div style=\"margin-top: 25px;position:inherit\">\n            <button md-raised-button  style=\"margin-left: 120px;margin-top: 30px\" (click)=\"closeToggle()\" >Cancel</button>\n            <button md-raised-button  style=\"margin-left: 60px;margin-top: 30px;width: 30%\" (click)=\"confirmSwitchShipment()\" >Switch Shipment</button>\n        </div>\n      </div>\n    </div>\n  <!-- close Switch Shipment dialog -->\n\n  <div style=\"padding: 25px 5px 0px 20px;min-width: 700px\">\n    <div style=\"box-shadow: 0px 4px 19px darkgrey;\">\n      <table style=\"border: 1px solid #e1e6ef;\">\n        <tr style=\"height: 50px\">\n          <td style=\"font-size:17px;border:none;\" ><label>All Shipments</label></td>\n          <td colspan=\"4\" style=\"float: right;padding: 0px\">\n            <md-paginator class=\"customePaginator\" [length]=\"length\"\n                          [pageSize]=\"pageSize\"\n                          [pageSizeOptions]=\"pageSizeOptions\"\n                          (page)=\"pageEvent = $event;selectTableHeight()\" >\n            </md-paginator>\n          </td>\n        </tr>\n         \n        <div fxLayout=\"row\" class=\"list-header1\" [style.width]=\"(isShowDetails || this.previousSelectedVehicle['_isShowDetails'])?'calc(160% - 330px)':'160%'\">\n          <span fxFlex=3><md-checkbox class=\"customCheckBox\" [(ngModel)]=\"s\" (change)=\"allChecked()\" ></md-checkbox></span>\n          <span fxFlex=14 >Shipment No</span>\n          <span fxFlex=13 >Vehicle No</span>\n          <span fxFlex=16 >Shipment Status</span>\n          <span fxFlex=14  >Consignor</span>\n          <span fxFlex=14  >Consignee</span>\n          <span fxFlex=14 >Distance to go</span>\n          <span fxFlex=13  >Current Status</span>\n      </div>\n      </table>\n      <div  style=\"overflow:auto;max-height:calc(100vh - 340px);display:flex\" >\n        <div style=\"overflow-y:auto;overflow-x:hidden;max-height:calc(100vh - 340px); width: 100%;margin-right: -1px;\" >\n        <table  style=\"border-top: 1px solid #e1e6ef;border-bottom: 4px solid rgba(225, 230, 239, 0);\">\n          <div fxLayout=\"row\" *ngFor=\"let shipment of selectedVehicleList | searchFilter : ['vehicleRegistrationNumber','shipmentNo', search] | shipmentType: ['_shipmentStatus', selectedFilter] | orderBy:['plannedStartTime']\">\n            <div fxFlex=2 style=\"margin-top: 10px;margin-left: 10px;\">\n              <span> <md-checkbox class=\"customCheckBox\" [(ngModel)]=\"shipment.isChecked\" (change)=\"allTestChecked()\" ></md-checkbox></span>                \n            </div>\n            <div fxFlex=97 >\n              <md-card   (click)=\"isShowDetails = true;selectedShipmentDetail(shipment);changeBgColor(shipment)\"\n              [style.background-color]=\"shipment._isShowDetails?'aliceblue':''\" style=\"cursor: alias;padding: 12px;\"  fxLayout=\"row\" class=\"list-body1\" >      \n                <span fxFlex=13 *ngIf=\"shipment.shipmentNo!=null\">{{shipment.shipmentNo}}</span>\n                <span fxFlex=13 *ngIf=\"shipment.shipmentNoExtended!=null\">{{shipment.shipmentNoExtended}}</span>\n                \n                <span fxFlex=12 ><i   class=\"fa fa-truck\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{shipment.vehicleRegistrationNumber}}</span>\n                <span fxFlex=14 *ngIf=\"shipment.vts=='EnrouteForPickUp'\"><i   aria-hidden=\"true\">Enroute For Pickup</i></span>\n                <span fxFlex=14 *ngIf=\"shipment.vts=='AtPickUpPoint'\"><i   aria-hidden=\"true\">At Pickup Point</i></span>\n                <span fxFlex=14 *ngIf=\"shipment.vts=='EnrouteForDestination'\"><i   aria-hidden=\"true\">Enroute For Delivery</i></span>\n                <span  fxFlex=14 *ngIf=\"shipment.vts=='AtDestination' && shipment.shipmentState=='Started'\"><i   aria-hidden=\"true\">At Destination</i></span>\n                <span  fxFlex=14 *ngIf=\"shipment.vts=='AtDestination' && shipment.shipmentState=='Completed'\"><i   aria-hidden=\"true\">Delivered</i></span>\n                \n                <!-- <span style=\"margin-left: 45px\" *ngIf=\"shipment.vts=='AtDestination'\"><i   aria-hidden=\"true\">Enroute For Pickup</i></span>                    -->\n                <span  fxFlex=14><i  class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{shipment.startLocationName}} </span>\n                <span fxFlex=13 ><i   class=\"fa fa-circle\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{shipment.endLocationName}} </span>\n                <span fxFlex=14 ><i   *ngIf=false class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>&nbsp;&nbsp;</span>\n                <span fxFlex=14 *ngIf=\"shipment.trackingType=='Tracker'\"><i  style=\"color:rgb(27, 238, 245);\" class=\"fa fa fa-rss-square\" aria-hidden=\"true\"  ></i>&nbsp;&nbsp;{{shipment.currentLocationName}}</span>\n                <span fxFlex=14 *ngIf=\"shipment.trackingType=='Manual'\"> <i  style=\"color:#bfc0c5\" class=\"fa fa fa-square\" aria-hidden=\"true\"  ></i>&nbsp;&nbsp;{{shipment.currentLocationName}}</span>\n                <span fxFlex=14 *ngIf=\"shipment.trackingType=='Trip'\"> <i  style=\"color:rgb(27, 114, 245);\" class=\"fa fa fa-square\" aria-hidden=\"true\" ></i>&nbsp;&nbsp;{{shipment.currentLocationName}}</span>\n              </md-card>\n            </div>\n            <div fxFlex=1  class=\"custome-button\" style=\"margin-left: -45px;margin-top:8px\" *ngIf=\"shipment.trackingType=='Manual'\">\n                <md-slide-toggle [checked]=\"shipment['isToggle'] && switchShipment['isToggle']\" (change)=\"checkVehicle(shipment)\" ></md-slide-toggle>\n            </div>\n          </div>\n        </table>\n        </div>\n        <div *ngIf=\"isShowDetails\" style=\"background-color: aliceblue;padding: 8px 10px;width: 100%;max-width: 330px;margin-bottom: 10px;\" >\n          <i (click)=\"isShowDetails = false;closeDetails()\" style=\"float: right;margin-top: -7px;color: #9E9E9E;cursor:pointer\" class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n          <div *ngIf=\"trackingType=='Manual'\"><app-manual-shipment-status></app-manual-shipment-status></div>\n          <div *ngIf=\"trackingType=='Tracker'\"><app-tracker-shipment-status></app-tracker-shipment-status></div>\n          <div *ngIf=\"trackingType=='Trip'\"><app-tracker-shipment-status></app-tracker-shipment-status></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/shipment-status/shipment-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var device_services_1 = __webpack_require__("../../../../../src/app/services/device-services.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var ShipmentStatusComponent = (function () {
    //close for pagination
    function ShipmentStatusComponent(_router, shipmentServices, deviceServices, _store, localStorgeService, snackBar) {
        var _this = this;
        this._router = _router;
        this.shipmentServices = shipmentServices;
        this.deviceServices = deviceServices;
        this._store = _store;
        this.localStorgeService = localStorgeService;
        this.snackBar = snackBar;
        // public doughnutChartLabels:string[] = ['Tracknet', 'Trip Tracker'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.doughnutColor = [{ backgroundColor: ["#71a2ec", "#a1f2f5", "#d7d8df"] }];
        this.doughnutChartOptions = { cutoutPercentage: 65 };
        // unsubscribe variables
        this.unSub_allShipmentList = null;
        this.unSub_shipmentIdList = null;
        this.unSub_shipmentDetail = null;
        this.unSub_switchShipment = null;
        this.unSub_allDeviceList = null;
        this.isShowDetails = false;
        this.isSwitchShipmentDialog = false;
        this.selectedFilter = '';
        this.shipmentId = [];
        this.allShipment = [];
        this.selectedVehicleList = [];
        this.previousSelectedVehicle = { _isShowDetails: false };
        this.search = '';
        this.filterShipmentList = [];
        this.active = 0;
        this.deliverd = 0;
        this.isSpinner = true;
        this.allDeviceList = [];
        this.showIMEI = false;
        this.isEnabled = false;
        this.unSub_checkVehicle = null;
        this.trackerType = 'Tracker';
        this.isShowTrip = false;
        this.isSpin = true;
        this.switchShipment = { 'isToggle': false };
        //start for pagination
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.shipmentServices.getShipmentList.emit();
        this.unSub_allShipmentList = this._store.select('allShipmentList').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    _this.allShipment = value['res'];
                    _this.setChart(_this.allShipment);
                    _this.active = 0;
                    _this.deliverd = 0;
                    for (var i = 0; i < _this.allShipment.length; i++) {
                        _this.allShipment[i]['isToggle'] = false;
                        _this.allShipment[i]['isChecked'] = false;
                        if (_this.allShipment[i]['shipmentState'] == 'Created' || _this.allShipment[i]['shipmentState'] == 'Started') {
                            _this.active = _this.active + 1;
                            _this.allShipment[i]['_shipmentStatus'] = 'active';
                        }
                        if (_this.allShipment[i]['shipmentState'] == 'Completed') {
                            _this.deliverd = _this.deliverd + 1;
                            _this.allShipment[i]['_shipmentStatus'] = 'deliverd';
                        }
                    }
                    // this.countShipment(this.allShipment);
                    _this.changeFilterList('');
                    _this.isSpinner = false;
                }
                else {
                    _this.openSnackBar(value['errorMsg']);
                    _this.isSpinner = false;
                }
            }
            _this.length = _this.allShipment.length;
            console.log(_this.allShipment);
        });
        this.unSub_allDeviceList = this._store.select('allDevicesList').subscribe(function (value) {
            console.log(value);
            if (value != null) {
                _this.isSpinner = false;
                if (value['error'] == '') {
                    //for Error Handaling
                    _this.allDeviceList = value['res'];
                    console.log(_this.allDeviceList);
                }
                else {
                    console.log(value['errorMsg']);
                }
            }
        });
        this.unSub_checkVehicle = this._store.select('checkVehicle').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    if (value['res']['exist'] == true) {
                        _this.trackerType = "Trip";
                        _this.vehicleObj = value['res']['vehicle'];
                        _this.isShowTrip = true;
                        _this.isSpin = false;
                        _this.isEnabled = true;
                        console.log(_this.vehicleObj);
                    }
                    else {
                        _this.trackerType = "Tracker";
                        _this.isShowTrip = false;
                        _this.isSpin = false;
                    }
                }
                else {
                    _this.trackerType = "Tracker";
                    _this.isShowTrip = false;
                    _this.isSpin = false;
                }
            }
        });
        this.unSub_switchShipment = this._store.select('switchShipment').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == '') {
                    _this.isSpinner = false;
                }
                else {
                    _this.isSpinner = false;
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
    } //constructor
    // countShipment(value){
    //   this.active=0;
    //   this.deliverd=0;
    //   for(let i=0;i<value.length;i++){
    //     if(value[i]['shipmentState']=='Created' || value[i]['shipmentState']=='Started'){
    //       this.active= this.active+1;
    //       value[i]['_shipmentStatus']=='active';
    //     }
    //     if(value[i]['shipmentState']=='Completed'){
    //       this.deliverd= this.deliverd+1;
    //       value[i]['_shipmentStatus']=='deliverd';
    //     }
    //   }
    // }
    ShipmentStatusComponent.prototype.ngOnInit = function () {
    };
    ShipmentStatusComponent.prototype.onClickIMEI = function () {
        this.showIMEI = true;
    };
    ShipmentStatusComponent.prototype.setTrackType = function (type) {
        this.trackerType = type;
        this.showIMEI = false;
    };
    ShipmentStatusComponent.prototype.onSelectIMEI = function (device) {
        this.trackerIMEI = device['device']['imei'];
        this.showIMEI = false;
    };
    ShipmentStatusComponent.prototype.allTestChecked = function () {
        console.log("allTestChecked");
        var l = 0;
        for (var i = 0; i < this.filterShipmentList.length; i++) {
            if (this.filterShipmentList[i]['isChecked']) {
                l = l + 1;
            }
        }
        if (l == this.filterShipmentList.length) {
            this.s = true;
        }
        else
            this.s = false;
    };
    ShipmentStatusComponent.prototype.allChecked = function () {
        if (this.s == true) {
            for (var i = 0; i < this.filterShipmentList.length; i++) {
                this.filterShipmentList[i]['isChecked'] = true;
            }
        }
        if (this.s == false) {
            for (var i = 0; i < this.filterShipmentList.length; i++) {
                this.filterShipmentList[i]['isChecked'] = false;
            }
        }
    };
    ShipmentStatusComponent.prototype.changeFilterList = function (value) {
        this.s = false;
        this.filterShipmentList = [];
        for (var i = 0; i < this.allShipment.length; i++) {
            this.allShipment[i]['isChecked'] = false;
            if (value == '') {
                this.filterShipmentList.push(this.allShipment[i]);
            }
            if (this.allShipment[i]['_shipmentStatus'] == value) {
                this.filterShipmentList.push(this.allShipment[i]);
            }
        }
        this.selectedVehicleList = this.filterShipmentList.slice(0, this.pageSize);
        console.log(this.filterShipmentList);
    };
    ShipmentStatusComponent.prototype.confirmSwitchShipment = function () {
        var obj;
        if (this.trackerType == 'Trip') {
            obj = {
                "shipmentId": this.switchShipment.shipmentId,
                "trackingType": "Trip",
                // "deviceImei":this.vehicleObj.vtsDeviceId,
                "vehicleId": this.vehicleObj['uuid']
            };
        }
        if (this.trackerType == 'Tracker') {
            obj = {
                "shipmentId": this.switchShipment.shipmentId,
                "trackingType": "Tracker",
                "deviceImei": this.trackerIMEI,
            };
        }
        this.shipmentServices.switchShipmentDetail.emit(obj);
        this.isSwitchShipmentDialog = false;
    };
    ShipmentStatusComponent.prototype.closeToggle = function () {
        this.switchShipment['isToggle'] = false;
        this.isSwitchShipmentDialog = false;
        this.showIMEI = false;
    };
    ShipmentStatusComponent.prototype.checkVehicle = function (shipment) {
        var _this = this;
        shipment['isToggle'] = true;
        this.switchShipment = shipment;
        this.switchShipment['isToggle'] = true;
        this.shipmentServices.checkVehicle.emit(shipment.vehicleRegistrationNumber);
        this.deviceServices.allDevicesList.emit();
        this.isSpinner = true;
        this.isSpin = true;
        setTimeout(function () {
            _this.isSwitchShipmentDialog = true;
        }, 500);
        // console.log(value);
    };
    ShipmentStatusComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_allShipmentList != 'undefined' && this.unSub_allShipmentList != null && this.unSub_allShipmentList != undefined) {
            this.unSub_allShipmentList.unsubscribe();
        }
        if (typeof this.unSub_allDeviceList != 'undefined' && this.unSub_allDeviceList != null && this.unSub_allDeviceList != undefined) {
            this.unSub_allDeviceList.unsubscribe();
        }
        this._store.dispatch({ type: "All_DEVICES_LIST", payload: null });
    };
    ShipmentStatusComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'OK', { duration: 4000 });
    };
    // events
    ShipmentStatusComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ShipmentStatusComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ShipmentStatusComponent.prototype.changeBgColor = function (selectedVehicle) {
        console.log(selectedVehicle);
        if (selectedVehicle == this.previousSelectedVehicle) {
            return;
        }
        selectedVehicle._isShowDetails = true;
        this.previousSelectedVehicle['_isShowDetails'] = false;
        this.previousSelectedVehicle = selectedVehicle;
    };
    ShipmentStatusComponent.prototype.closeDetails = function () {
        this.previousSelectedVehicle['_isShowDetails'] = false;
    };
    ShipmentStatusComponent.prototype.selectTableHeight = function () {
        console.log(this.pageEvent['pageSize']);
        console.log(this.pageEvent['pageIndex']);
        this.selectedVehicleList = this.allShipment.slice((this.pageEvent['pageSize'] * this.pageEvent['pageIndex']), (this.pageEvent['pageSize'] * (this.pageEvent['pageIndex'] + 1)));
        this.previousSelectedVehicle['_isShowDetails'] = false;
        this.isShowDetails = false;
    };
    //TODO
    ShipmentStatusComponent.prototype.selectedShipmentDetail = function (shipment) {
        this.trackingType = shipment.trackingType;
        var id = shipment.shipmentId;
        this.shipmentServices.getShipmentDetail.emit(id);
    };
    ShipmentStatusComponent.prototype.setChart = function (value) {
        var trackerCount = 0;
        var tripCount = 0;
        var manualCount = 0;
        for (var i = 0; i < value.length; i++) {
            if (value[i]['trackingType'] == 'Tracker') {
                trackerCount = trackerCount + 1;
            }
            if (value[i]['trackingType'] == 'Trip') {
                tripCount = tripCount + 1;
            }
            if (value[i]['trackingType'] == 'Manual') {
                manualCount = manualCount + 1;
            }
        }
        var valueArray = [tripCount, trackerCount, manualCount];
        this.doughnutChartData = valueArray;
    };
    ShipmentStatusComponent.prototype.download = function () {
        var obj = [];
        //***** for details array  ****
        var consigner = '';
        var consignee = '';
        var status = '';
        var curLoc = '';
        var vehicleNo = '';
        var startTime;
        var endTime;
        var distance = 0;
        var shipmentNo = '';
        console.log("done");
        for (var i = 0; i < this.filterShipmentList.length; i++) {
            if (this.filterShipmentList[i]['isChecked'] == true) {
                consigner = this.filterShipmentList[i]['startLocationName'];
                consignee = this.filterShipmentList[i]['endLocationName'];
                shipmentNo = this.filterShipmentList[i]['shipmentNoExtended'];
                if (this.filterShipmentList[i]['vts'] == 'EnrouteForPickUp')
                    status = 'Enroute for Pickup';
                else if (this.filterShipmentList[i]['vts'] == 'AtPickUpPoint')
                    status = 'At Pickup Point';
                else if (this.filterShipmentList[i]['vts'] == 'EnrouteForDestination')
                    status = 'Enroute for Delivery';
                else if (this.filterShipmentList[i]['vts'] == 'AtDestination' && this.filterShipmentList[i]['shipmentState'] == 'Started')
                    status = 'At Delivery Point';
                else if (this.filterShipmentList[i]['vts'] == 'AtDestination' && this.filterShipmentList[i]['shipmentState'] == 'Completed')
                    status = 'Delivered';
                vehicleNo = this.filterShipmentList[i]['vehicleRegistrationNumber'];
                curLoc = this.filterShipmentList[i]['currentLocationName'];
                startTime = new Date(this.filterShipmentList[i]['plannedStartTime']);
                // endTime=this.allShipment[i];
                // distance=this.allShipment[i];
                var temp = {
                    'ShipmentNo': shipmentNo,
                    'Vehicle Number': vehicleNo,
                    'Shipment Status': status,
                    'Consigner': consigner,
                    'Consignee': consignee,
                    'Current Location': curLoc,
                    'Start Time': startTime.getDate() + " " + this.getMonthName(startTime.getMonth()) + " " + startTime.getFullYear() + " " + this.to12HourFormat(startTime),
                    // 'End Time':endTime.getDate()+" "+this.getMonthName(endTime.getMonth())+" "+endTime.getFullYear()+" "+this.to12HourFormat(endTime),
                    'Distance': (distance / 1000).toFixed(2) + " km",
                };
                obj.push(temp);
            }
        }
        var csvData = this.ConvertToCSV(obj);
        // console.log(csvData);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'shipment_list.csv';
        a.click();
    };
    ShipmentStatusComponent.prototype.ConvertToCSV = function (obj) {
        var array = obj;
        var str = '';
        var row = "";
        for (var index in obj[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += JSON.stringify(array[i][index]);
            }
            str += line + '\r\n';
        }
        return str;
    };
    ShipmentStatusComponent.prototype.getMonthName = function (month) {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][parseInt(month)];
    };
    ShipmentStatusComponent.prototype.msToTime = function (duration) {
        var x = duration / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        // console.log(days);
        var totalDuration = '';
        if (days > 0) {
            totalDuration = days + " d ";
        }
        if (hours > 0) {
            totalDuration = totalDuration + hours + " hr ";
        }
        if (days >= 1) {
            return totalDuration;
        }
        if (minutes > 0) {
            return totalDuration = totalDuration + minutes + " min";
        }
        if (seconds > 0 && totalDuration == '') {
            totalDuration = totalDuration + seconds + " sec";
        }
        if (totalDuration == '') {
            return '0 sec';
        }
        else {
            return totalDuration;
        }
    }; //close methods msToTime
    ShipmentStatusComponent.prototype.to12HourFormat = function (date) {
        var hours = ((date.getHours() + 11) % 12 + 1);
        var minutes = date.getMinutes();
        var meridian = (date.getHours() >= 12) ? 'PM' : 'AM';
        return hours + ":" + minutes + " " + meridian;
    };
    // refresh(){
    //   this.isShowDetails=false;
    //   let obj ={
    //     "shipmentIdList":this.shipmentId
    //   };
    //   // this.shipmentServices.getList(obj)
    //   this.shipmentServices.getShipmentList.emit(obj);
    //   this._router.navigate(['dashboard/shipmentStatus']);
    // }
    ShipmentStatusComponent.prototype.createNewShipment = function () {
        this._router.navigate(['dashboard/newShipment']);
    };
    return ShipmentStatusComponent;
}());
ShipmentStatusComponent = __decorate([
    core_1.Component({
        selector: 'app-shipment-status',
        template: __webpack_require__("../../../../../src/app/components/shipment-status/shipment-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shipment-status/shipment-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _b || Object, typeof (_c = typeof device_services_1.DeviceServices !== "undefined" && device_services_1.DeviceServices) === "function" && _c || Object, typeof (_d = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _d || Object, typeof (_e = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _e || Object, typeof (_f = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _f || Object])
], ShipmentStatusComponent);
exports.ShipmentStatusComponent = ShipmentStatusComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=shipment-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-header{\n  background-color: #3F51B5;\n  width: 100%;\n  padding-bottom: 3px;\n}\n\nmd-card{\n  padding: 9px;\n  min-width: 250px;\n}\n\ndiv {\n  font-family: Helvetica !important;\n  /*color: #46465f;*/\n}\n\n.confirm-location{\n  padding: 22px;\n  min-height: 100px;\n  max-height: 200px;\n  \n  border: 1px solid #D1D1D1;\n  min-width:175px;\n}\n\n\n\n.my-hr{\n  border-style:ridge;\n  border-width:1px;\n  margin-top: 6px;\n  min-width: 250px;\n  margin-bottom:3px;\n}\n/* time line css start here*/\n\n.timeline-icon{\n  top: 50px;\n  position: absolute;\n  left: 71px;\n}\n\n.timeline-image{\n  position: absolute;\n  left: 71px;\n}\n\n.wfl-imeline-image{\n  position: absolute;\n  left: 50px;\n  color: #428fd4;\n}\n\n.EFP_icon{\n  position: absolute;\n  height: 100%;\n  margin-left: 54px;\n}\n\n.EFP_timeline_icon{\n  position: absolute;\n  background-color: white;\n  left: 48px;\n  top: -6px;\n  font-size: 18px;\n}\n\n\n.cd-timeline {\n  position: relative;\n}\n.cd-timeline::before {\n  /* this is the vertical line */\n  /*top: 21px;*/\n  bottom: 37px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 85px;\n  height: 100%;\n  width: 1.40px;\n  background: #9b9b9b;\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n\n\n.wfl-timeline {\n  position: relative;\n}\n\n.wfl-timeline::before {\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 55px;\n  height: 100%;\n  width: 3.4px;\n  background: #428fd4;\n}\n\n\n.DP-timeline {\n  position: relative;\n}\n\n.DP-timeline::before {\n  top: -17px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 85px;\n  height: 100%;\n  width: 3.4px;\n  background: #428fd4;\n}\n\n.DP_timeline-image{\n  position: absolute;\n  left: 66px;\n  color: #428fd4;\n  font-size: 25px;\n  margin-top: 10px;\n}\n\n\n.unvisited-timeline {\n  position: relative;\n}\n.unvisited-timeline::before {\n  /* this is the vertical line */\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 85px;\n  height: 100%;\n  border-left: 1.40px dashed #9b9b9b;\n  /*width: 1.40px;*/\n  /*background: #9b9b9b;*/\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n.EFP_unvisited-timeline {\n  position: relative;\n}\n.EFP_unvisited-timeline::before {\n  /* this is the vertical line */\n  top:15px;\n  content: '';\n  position: absolute;\n  border-radius: 1px;\n  left: 55px;\n  height: 100%;\n  border-left: 1.40px dashed #D0D0D0;\n  /*width: 1.40px;*/\n  /*background: #9b9b9b;*/\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\n}\n\n\n\n.timeline-header{\n  text-align:center;\n  display: -ms-grid;\n  display: grid;\n  margin: -8px -8px 2px -8px;\n  box-shadow: 0px 1px 1px #999999;\n  padding: 10px;\n  display: list-item;\n}\n/* end here time line css*/\n\n/********** this will work when click on up-down button and div appear like a shutter  **************/\n.show-down-Slowly {\n  margin-top: 8px !important;\n  transition: margin-top .3s ;\n  -webkit-transition: margin-top .3s ;\n}\n.data-box {\n  /*margin-top: -2000px;*/\n  margin-left: 8px;\n  width:98%;\n  font-size: 11px;\n  color: #9b9b9b;\n}\n/****************************************************************************/\n\n/********** this will work when click on up-down button and div appear like a shutter  **************/\n.hide-up-Slowly{\n  /*margin-top: -2000px !important;*/\n  transition: margin-top .3s ;\n  -webkit-transition: margin-top .3s ;\n}\n\n/****************************************************************************/\n\n.vehicle-no{\n  font-size:20px;\n  color:rgba(255, 255, 255, 0.94);\n  margin-left:10px;\n}\n\n.vehicle-status-trip{\n  margin-top:10px;\n  padding: 4px;\n  text-align: center;\n  font-size: 18px;\n  background-color: #a1f2f5;\n  color: white;\n}\n.vehicle-status-tracker{\n  margin-top:10px;\n  padding: 4px;\n  text-align: center;\n  font-size: 18px;\n  background-color: #4a6ad8;\n  color: white;\n}\n\n.current-vehicle-card{\n  background-color:#8398ba;\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 19px;\n  margin-bottom:13px;\n}\n\n.driver-name{\n  margin-left: auto;\n  font-size: 15px;\n  color:rgba(255, 255, 255, 0.87);\n  padding: 2px 8px;\n}\n\n.driver-name-web{\n  /*margin-left: auto;*/\n  font-size: 13px;\n  /*color:rgba(255, 255, 255, 0.87);*/\n  padding: 2px 8px;\n}\n\n.phone-icon{\n  margin-left: 8px;\n  color: white;\n  font-size: 16px;\n}\n\n.alert-box{\n  font-size: 13px;\n  line-height:1.67;\n  color:rgba(0, 0, 0, 0.54);\n}\n\n.disconnected{\n  margin-top: 10px;\n  background-color: #ff5252;\n  border: solid 1px #ff5252;\n  color: white;\n  font-size: 18px;\n  text-align: center;\n  padding: 3px;\n  cursor: pointer;\n}\n\n\n.time{\n  color: #9b9b9b;\n  text-align: center;\n  display: -ms-grid;\n  display: grid;\n  font-size: 11px;\n  min-width: 50px;\n  max-width: 60px;\n  overflow: hidden;\n}\n\n.rotate{ /* IE 9 */\n  -webkit-transform: rotate(90deg); /* Safari */\n  transform: rotate(90deg);\n  font-size: 13px\n}\n\n.travling-time{\n  position: absolute;\n  margin-left: -133px;\n  display: -ms-grid;\n  display: grid;\n  text-align: center;\n  height: 100%;\n  /*margin-top : -34px;*/\n  min-width: 50px;\n  max-width: 68px;\n  margin-top: -15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;top: 0px;z-index:100;background-color: white;\" class=\"slow-down\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n\n  <!-- <div *ngIf=\"view !='web'\" class=\"top-header\" id=\"top-head\" >\n    <div fxLayout=\"row\" style=\"padding-left:8px;padding-bottom:9px;padding-top:5px\">\n      <span class=\"vehicle-no\"  >{{vehicleNo}}</span>\n      <label class=\"driver-name\">{{vehicleTripDetails['currentTrip']?.driverName}}\n                <a href=\"tel:{{vehicleTripDetails['currentTrip']?.driverMobNumber}}\" ><i  class=\"fa fa-phone phone-icon\" aria-hidden=\"true\"></i></a>\n     </label>\n    </div>\n  </div> -->\n\n  <div *ngIf=\"view =='web'\">\n    <div>\n      <div>\n        <span class=\"driver-name-web\" >Driver&nbsp;:{{selectedShipment['currentShipment']?.driverName}}</span>\n      </div>\n      <div>\n        <a class=\"driver-name-web\" href=\"tel:{{selectedShipment['currentShipment']?.mobileNo}}\" >\n          <i  class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;+91{{selectedShipment['currentShipment']?.mobileNo}}\n        </a>\n      </div>\n    </div>\n\n\n    <!--************************ edit trip dialog *********************************-->\n    <div *ngIf=\"isEditTripLocationDialog\"  class=\"mycustomDialog-editLocation\" style=\"padding-top: 70px;\">\n      <div class=\"modal-content\" style=\"width: 60%;min-width: 250px;overflow: hidden;max-width: 560px;height: calc(100vh - 140px);\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"isEditTripLocationDialog=false;\" >&times;</span>\n          <div>\n            <label>Edit {{forEditPlace}}</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 5px;font-size: 13px;overflow: auto;width: calc(100% - 12px);\" >\n          <app-edit-shipment-location></app-edit-shipment-location>\n        </div>\n      </div>\n    </div>\n    <!-- close edit trip dialog -->\n\n\n    <!--************************ disconnected dialog *********************************-->\n    <div *ngIf=\"isDisconnectDialog\"  class=\"mycustomDialog\" style=\"padding-top: 70px;\">\n      <div class=\"modal-content\" style=\"width:40%;min-width:250px;overflow:unset;max-width: 400px;\">\n        <div class=\"modal-header\">\n          <span class=\"close\" (click)=\"isDisconnectDialog=false;\" >&times;</span>\n          <div>\n            <label>Confirm {{forConfirmPlace}}</label>\n          </div>\n        </div>\n\n        <div  style=\"padding: 5px;font-size: 13px;\">\n          <div class=\"confirm-location\" style=\"text-align: center;overflow: unset;\">\n            <span style=\"color:red\" >{{validationErrorMgs}}</span>\n              <div>\n                <div *ngIf=\"forConfirmPlace == 'Pickup'\" style=\"display: grid\" >\n                  <span class=\"fade-sub-header-text\">{{forConfirmPlace}} Location</span>\n                  <span class=\"header-text\" style=\"margin-top: 6px;margin-left: 5px;\" >{{selectedShipment?.currentShipment?.startLocation?.freightLocation?.name}}</span>\n                </div>\n\n                <div *ngIf=\"forConfirmPlace == 'Destination'\"  style=\"display: grid\" >\n                  <span class=\"fade-sub-header-text\">{{forConfirmPlace}} Location</span>\n                  <span class=\"header-text\" style=\"margin-top: 6px;margin-left: 5px;\" >{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n                </div>\n\n                  <owl-date-time [disabled]=\"isStartTimeDisable\" [autoClose]=true placeholder=\"Start Time\" [(ngModel)]=\"startTime\" id=\"startTime\"  [dateFormat]=\"'YYYY/MM/DD hh:mm'\" \n                        ></owl-date-time>\n\n                  <owl-date-time placeholder=\"End Time\" [autoClose]=true [(ngModel)]=\"tillTime\" id=\"tillTime\" [dateFormat]=\"'YYYY/MM/DD hh:mm'\" \n                        ></owl-date-time>\n              </div>\n          </div>\n          <div style=\"padding: 5px;margin-top:5px;text-align: center\">\n            <button *ngIf=\"!isStartTimeDisable\" [style.background-color]=\"(startTime == null)?'grey':'#1E88E5'\" [disabled]=\"startTime == null\" md-raised-button style=\"width:auto;color:#ffffff\" (click)=\"confirmPlace()\" >Confirm</button>\n            <button  *ngIf=\"isStartTimeDisable\" [style.background-color]=\"(startTime == null || tillTime == null)?'grey':'#1E88E5'\" [disabled]=\"startTime == null || tillTime == null\" md-raised-button style=\"width:auto;color:#ffffff\" (click)=\"confirmPlace()\" >Confirm</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- disconnected dialog -->\n\n\n      <!--  -->\n      <div *ngIf=\"vehicleState == 'Enroute for Pickup'\">\n          <!-- <div *ngIf=\"view !='web'\" style=\"padding: 15px 15px 10px 25px;\">\n            <div>\n              <i class =\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              <span class=\"alert-box\">No Impediment</span>\n            </div>\n            <div>\n              <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n              <span class=\"alert-box\">No Alert</span>\n            </div>\n          </div> -->\n\n          <hr class=\"my-hr\">\n\n          <div  [style.height]=\"(view =='web')?'auto':'calc(100vh - 156px)'\" style=\"overflow: auto;\">\n\n            <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n              <div  >\n                <span style=\"font-size: 12px\">Current Shipment</span>\n              </div>\n              <div style=\"overflow: hidden\">\n                <div>\n                  <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n                    <span style=\"margin-left: 64px;\">Delivery</span>\n                  </div>\n                  <div class=\"EFP_unvisited-timeline\">\n                    <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n                    <!--<img class=\"EFP_icon\" src=\"../../../../images/trip-icons/at_pickup_point_timeline.png\" alt=\"image\" >-->\n                    <div style=\"display:flex\"  >\n                      <span class=\"fade-header\" (click)=\"goToEditTripPickupView('destination','CT')\"   style=\"margin-left: 75px;cursor: pointer\" >{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n                      <span  (click)=\"goToEditTripPickupView('destination','CT')\"  style=\"cursor: pointer;color: #9b9b9b;font-size: 11px;margin-left: auto\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                    </div>\n\n                    <div class=\"fade-sub-header-text\" style=\"width: 98%; margin-left : 80px; margin-top: 10px;\">\n                      <span>Transite Time :</span><span>{{selectedShipment?.currentShipment?._transiteTime}}</span><br>\n                      <span *ngIf = \"isDelayed\" style=\"color : red\"><span>(running late by</span><span style=\"margin-left:2px\">{{delayedBy}}</span><span>)</span></span>\n                    </div>\n                  </div>\n                </div>\n\n                <div>\n                  <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n                    <span style=\"margin-left: 64px;\">Pickup</span>\n                  </div>\n                  <div class=\"EFP_unvisited-timeline\">\n                    <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n                    <!--<img class=\"EFP_icon\" src=\"../../../../images/trip-icons/at_pickup_point_timeline.png\" alt=\"image\" >-->\n                    <div style=\"display:flex\"  >\n                      <span (click)=\"goToEditTripPickupView('pickup','CT')\"  class=\"fade-header\" style=\"margin-left: 75px;cursor: pointer\" >{{selectedShipment?.currentShipment?.startLocation?.freightLocation?.name}}</span>\n                      <span (click)=\"goToEditTripPickupView('pickup','CT')\"  style=\"cursor: pointer;color: #9b9b9b;font-size: 11px;margin-left: auto\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                    </div>\n\n                    <div class=\"fade-sub-header-text\" style=\"width: 98%; margin-left : 80px; margin-top: 10px;\">\n                      <!-- <span>ETA : {{vehicleTripDetails['currentTrip']?.plannedStartTime | date:'medium'}}</span> -->\n                      <span >ETA :</span><span> {{eta}}</span><br>\n                      <span >{{distanceToGo}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- **************** disconnected case **************************** -->\n              <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Trip'\"  class=\"vehicle-status-trip\">\n                <span >{{vehicleState}}</span>\n              </div>\n              <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Tracker'\"  class=\"vehicle-status-tracker\">\n                  <span >{{vehicleState}}</span>\n                </div>\n\n              <div (click)=\"openConfirmPointDialog('Pickup')\"  *ngIf=\"selectedShipment.latestGpsState?.state == 'Disconnected' ||  selectedShipment.latestGpsState?.state == null\"  class=\"disconnected\">\n                <span>{{vehicleState}}<span style=\"font-size:12px;color:#ffdead;\" *ngIf=\"selectedShipment.latestGpsState?.state == null\"> No GPS Found</span></span>\n                <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color:white;float:right;margin-top: 2px;\" ></i>\n              </div>\n              <!-- ******************************************* -->\n\n              <md-card fxLayout=\"row\" class=\"current-vehicle-card\">\n                <div>\n                  <img style=\"height:32px;\" src=\"../../../../images/trip-icons/truck_moving.png\" alt=\"location\" >\n                </div>\n                <div style=\"width: 100%\">\n                  <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\">\n                    <span style=\"line-height: 1.43\">{{(selectedShipment?.latestGpsState?.endLocation?.address)?selectedShipment?.latestGpsState?.endLocation?.address:'N/A'}}</span>\n                    <!--<span *ngIf=\"!vehicleTripDetails.movementLegs\" style=\"line-height: 1.43\"> Address Not Available !</span>-->\n                  </div>\n                  <!-- ************************* vehicle status **************************   -->\n                  <div  style=\"white-space: nowrap;margin-bottom: -10px;text-align: right\">\n                    <span style=\"font-size:12px\">Since {{selectedShipment['vts']?._stateDuration}}</span>\n                  </div>\n                </div>\n                \n              </md-card>\n            </div>\n  \n          </div>\n      </div>\n      <!--done-->\n      <div *ngIf=\"vehicleState == 'At Pickup Point'\">\n\n        <!-- <div *ngIf=\"view !='web'\"  style=\"padding: 15px 15px 10px 25px;\">\n          <div>\n            <i class =\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n            <span class=\"alert-box\">No Impediment</span>\n          </div>\n          <div>\n            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n            <span class=\"alert-box\">No Alert</span>\n          </div>\n        </div> -->\n\n        <hr class=\"my-hr\">\n\n        <div [style.height]=\"(view =='web')?'auto':'calc(100vh - 156px)'\"  style=\"overflow: auto;\">\n\n          <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n            <div  >\n              <span style=\"font-size: 12px\">Current Shipment</span>\n            </div>\n            <div style=\"overflow: hidden\">\n              <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n                <span style=\"margin-left: 64px;\">Delivery</span>\n              </div>\n              <div class=\"EFP_unvisited-timeline\">\n                <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n                <!--<img class=\"EFP_icon\" src=\"../../../../images/trip-icons/at_pickup_point_timeline.png\" alt=\"image\" >-->\n                <div style=\"display:flex\"  >\n                  <span (click)=\"goToEditTripPickupView('destination','CT')\" class=\"fade-header\" style=\"cursor: pointer;margin-left: 75px;\" >{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n                  <span (click)=\"goToEditTripPickupView('destination','CT')\" style=\"cursor: pointer;color: #9b9b9b;font-size: 11px;margin-left: auto\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                </div>\n\n                <div class=\"fade-sub-header-text\" style=\"width: 98%; margin-left : 80px; margin-top: 10px;\">\n                  <!-- <span>ETA : {{vehicleTripDetails['currentTrip']?.plannedEndTime | date:'medium'}}</span> -->\n                  <span>Transite Time :</span><span>{{selectedShipment?.currentShipment?._transiteTime}}</span><br>\n                </div>\n              </div>\n            </div>\n            <!-- **************** for in case of device disconnect ********************** -->\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Trip'\"  class=\"vehicle-status-trip\">\n                <span >{{vehicleState}}</span>\n              </div>\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Tracker'\"  class=\"vehicle-status-tracker\">\n                <span >{{vehicleState}}</span>\n            </div>\n            <div (click)=\"openConfirmPointDialog('Pickup')\" *ngIf=\"selectedShipment.latestGpsState?.state == 'Disconnected' ||  selectedShipment.latestGpsState?.state == null\"  class=\"disconnected\">\n              <span>{{vehicleState}}<span style=\"font-size:12px;color:#ffdead;\" *ngIf=\"selectedShipment.latestGpsState?.state == null\"> No GPS Found</span></span>\n              <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color:white;float:right;margin-top: 2px;\" ></i>\n            </div>\n          <!--   ************************************  -->\n\n            <md-card fxLayout=\"row\" (click)=\"goToEditTripPickupView('pickup','CT')\" class=\"current-vehicle-card\">\n              <div>\n                <img style=\"height:32px;\" src=\"../../../../images/trip-icons/stop_truck_white.png\" alt=\"location\" >\n              </div>\n              <div style=\"width: 100%\">\n                <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\">\n                  <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\">{{selectedShipment?.currentShipment?.startLocation?.freightLocation?.name}}</span>\n                  <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;float: right\"></i></span>\n                  <span  *ngIf=\"!selectedShipment.currentShipment\"  style=\"line-height: 1.43;font-size: 20px\" > N/A !</span>\n                </div>\n                <!-- ************************* vehicle status **************************   -->\n                <div  style=\"white-space: nowrap;margin-bottom: -10px;text-align: right\">\n                  <span style=\"font-size:12px\">Since {{selectedShipment['vts']?._stateDuration}}</span>\n                </div>\n              </div>\n              <!--<div style=\"white-space: nowrap;margin-top: auto;margin-left:auto;margin-bottom: -10px\">-->\n              <!--<i class=\"fa fa-stop-circle-o\" aria-hidden=\"true\"></i>-->\n              <!--<span style=\"font-size:14px\">Stop</span>-->\n              <!--</div>-->\n              <!-- **-->\n            </md-card>\n          </div>\n\n          <!-- <div style=\"overflow: hidden;margin-top: 15px\">\n            <section *ngIf=\"vehicleTripDetails.lastTrip\" style=\"margin:5px;padding:5px;border:2px solid lightgrey;position: relative\" >\n              <div style=\"font-size:12px;color:#9E9E9E;height: 28px\">\n                <span>Last Trip</span>\n                <span style=\"margin-left: 19px;vertical-align: -8px;\">Delivery</span>\n              </div>\n\n              <div style=\"margin-top: 7px;\" class=\"wfl-timeline\" >\n                <i style=\"margin-top: -13px;\" class=\"fa fa-circle wfl-imeline-image\" aria-hidden=\"true\"></i>\n                <div style=\"display:flex\"  >\n                  <span style=\"cursor: pointer;font-size: 13px;font-weight: bold;margin-left: 75px;color:#4a4a4a;\"\n                        (click)=\"goToEditTripPickupView('destination','LT')\" >{{selectedShipment?.lastTrip?.destination[0]?.freightLocation?.name}}</span>\n                  <span (click)=\"goToEditTripPickupView('destination','LT')\" style=\"cursor: pointer;color: #9b9b9b;font-size: 11px;margin-left: auto\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                </div>\n\n                <div class=\"sub-header-text\" style=\"text-align: center;margin-left: 40px;margin-top: 5px;margin-bottom: 20px;\">\n                  <span>unloading duration {{vehicleTripDetails['lastTrip']?.destination[0]['_unloadingDuration']}}</span>\n                </div>\n\n                <div class=\"sub-header-text\" style=\"text-align:right;font-size:11px\">\n                  <span>Trip Duration :{{vehicleTripDetails['lastTrip']?._tripCompletionDuration}}</span>\n                </div>\n\n                <div class=\"sub-header-text\" style=\"margin-left: 71px;    margin-top: 7px;\">\n                  <span>Pickup</span>\n                </div>\n\n                <div style=\"display:flex;position: relative;\" >\n                  <i class=\"fa fa-circle wfl-imeline-image\"  style=\"bottom: -2px;\" aria-hidden=\"true\"></i>\n                  <div class=\"time\" style=\"margin-top: 5px;\">\n                    <span >{{vehicleTripDetails['lastTrip'].origin[0]['fromTime'] | date :'d MMM'}}</span>\n                    <span style=\"white-space:nowrap\" >{{vehicleTripDetails['lastTrip'].origin[0]['fromTime'] | date :'jm'}}</span>\n                  </div>\n                  <span style=\"cursor: pointer;font-size: 13px;font-weight: bold;margin-left: 25px;color:#4a4a4a;margin-top:5px;\"\n                        (click)=\"goToEditTripPickupView('pickup','LT')\" >{{vehicleTripDetails?.lastTrip?.origin[0]?.freightLocation?.name}}</span>\n                  <div style=\"margin-left: auto;cursor: pointer\" (click)=\"goToEditTripPickupView('pickup','LT')\" >\n                    <span style=\"white-space: nowrap;color: #9b9b9b;font-size: 11px\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"sub-header-text\" style=\"text-align:center;margin-left: 22px;margin-top:-5px;font-size: 11px;\" >\n                <span>Loading Duration {{vehicleTripDetails['lastTrip']?.origin[0]['_loadingDuration']}}</span>\n              </div>\n            </section>\n\n            <div style=\"height: 50px\"></div>\n          </div> -->\n        </div>\n\n      </div>\n      <!--done-->\n      <div *ngIf=\"vehicleState == 'Enroute for Delivery'\">\n        <!-- <div *ngIf=\"view !='web'\" style=\"padding: 15px 15px 10px 25px;\">\n          <div>\n            <i class =\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n            <span class=\"alert-box\">No Impediment</span>\n          </div>\n          <div>\n            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n            <span class=\"alert-box\">No Alerts</span>\n          </div>\n        </div> -->\n\n        <hr class=\"my-hr\">\n\n        <div [style.height]=\"(view =='web')?'auto':'calc(100vh - 156px)'\"  style=\"overflow: auto;\">\n          \n          <!-- *****************************     current trip start here *************************** -->\n          <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n            <div  style=\"margin-bottom: 5px\">\n              <span style=\"font-size: 12px\">Current Shipment</span>\n            </div>\n\n          <!--delivery point of current trip -->\n            <div style=\"overflow: hidden\">\n              <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\n                <span style=\"margin-left: 64px;\">Delivery</span>\n              </div>\n              <div class=\"EFP_unvisited-timeline\" style=\"padding-bottom: 31px;\">\n                <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\n                <!--<img class=\"EFP_icon\" src=\"../../../../images/trip-icons/at_pickup_point_timeline.png\" alt=\"image\" >-->\n                <div style=\"display:flex\"  >\n                  <span (click)=\"goToEditTripPickupView('destination','CT')\"  class=\"fade-header\" style=\"margin-left: 75px;cursor: pointer\" >{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n                  <span (click)=\"goToEditTripPickupView('destination','CT')\"  style=\"color: #9b9b9b;font-size: 11px;margin-left: auto\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                </div>\n\n                <div class=\"fade-sub-header-text\" style=\"width: 98%; margin-left : 80px; margin-top: 10px;\">\n                  <span>ETA :{{selectedShipment?.currentShipment?.planedEndTime | date :'medium' }}</span><br>\n                  <div *ngIf = \"isDelayed\" style=\"margin-top: 2px; color : red\">\n                  <span>(running late by</span><span style=\"margin-left:2px\">{{delayedBy}}</span><span>)</span><br>\n                  </div>\n                  <div style=\"margin-top: 2px\">             \n                  <span>{{distanceToGo}}</span>\n                </div>\n                </div>\n              </div>\n            </div>\n          <!-- ************************** -->\n\n            <!-- *************** when disconnect *************************** -->\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Trip'\"  class=\"vehicle-status-trip\">\n                <span >{{vehicleState}}</span>\n              </div>\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Tracker'\"  class=\"vehicle-status-tracker\">\n                <span >{{vehicleState}}</span>\n            </div>\n            <div (click)=\"openConfirmPointDialog('Destination')\"   *ngIf=\"selectedShipment.latestGpsState?.state == 'Disconnected' ||  selectedShipment.latestGpsState?.state == null\"  class=\"disconnected\">\n              <span>{{vehicleState}}<span style=\"font-size:12px;color:#ffdead;\" *ngIf=\"selectedShipment.latestGpsState?.state == null\"> No GPS Found</span></span>\n              <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color:white;float:right;margin-top: 2px;\" ></i>\n            </div>\n            <!-- *********************************************************** -->\n\n            <md-card fxLayout=\"row\" class=\"current-vehicle-card\">\n              <div>\n                <img style=\"height:32px;\" src=\"../../../../images/trip-icons/truck_moving.png\" alt=\"location\" >\n              </div>\n              <div style=\"width: 100%\">\n                <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\">\n                  <span  style=\"line-height: 1.43\">{{(selectedShipment?.latestGpsState?.endLocation?.address)?selectedShipment?.latestGpsState?.endLocation?.address:'N/A'}}</span>\n                  <!--<span  *ngIf=\"!vehicleTripDetails.currentTrip\"  style=\"line-height: 1.43;font-size: 20px\" > N/A !</span>-->\n                </div>\n                <!-- ************************* vehicle status **************************   -->\n                <div  style=\"white-space: nowrap;margin-bottom: -10px;text-align: right;\">\n                  <span style=\"font-size:12px\">Since {{selectedShipment['vts']?._stateDuration}}</span>\n                </div>\n              </div>\n            </md-card>\n\n            <div style=\"overflow: hidden;margin-top: -13px;\">\n              <section class=\"DP-timeline\" style=\"padding: 5px;\" >\n                <div style=\"padding: 5px;margin-top: 5px;\">\n                  <!-- *************** for expand up-down arrow icon ************  -->\n                  <div style=\"overflow: hidden;margin-top: 20px;padding-bottom: 20px\" fxLayout=\"row\" >\n                    <!-- ******** total travling time **************** -->\n                    <div style=\"min-width: 43px\">\n                      <div *ngIf=\"!isExpand\" class=\"time\">\n                        <span class=\"rotate\" >&#8676;</span>\n                        <span name=\"totalTravelDistance\" style=\"white-space:nowrap;\">{{movementLogs?._totalTravlingDistance | number : '1.1-1'}} km</span>\n                        <span name=\"totalTravlingTime\" style=\"border-top: 1px solid;\" >{{movementLogs?._totalTravlingTime}}</span>\n                        <span class=\"rotate\">&#8677;</span>\n                      </div>\n                    </div>\n                    <!-- ********************************* -->\n\n                    <div *ngIf=\"!isExpand\" fxLayout=\"column\" (click)=\"isExpand = true\" style=\"margin-left:65px;    margin-top: 10px;\">\n                      <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                      <i  class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                    </div>\n                    <div *ngIf=\"isExpand\" fxLayout=\"column\" (click)=\"isExpand = false\" style=\"margin-left:65px;margin-top: -6px;\">\n                      <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                    </div>\n\n                    <div fxLayout=\"column\" style=\"margin-bottom: 30px;width:100%\">\n                      <!-- when not expanded -->\n                      <div *ngIf=\"!isExpand\" style=\"margin-left:8px;display:grid;margin-top: 15px;\" >\n                        <div style=\"display: grid\">\n                          <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;\">{{movementLogs?.stopped}} Stops</span>\n                          <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;margin-top:4px;\">{{movementLogs?.disconnected }} Disconnects</span>\n                        </div>\n                      </div>\n                      <!-- ******** this is show when log value expanded ********* -->\n\n                      <div [style.height]=\"isExpand?'auto':'0px'\"  class=\"data-box\" id=\"expandable-box\" [style.margin-top]=\"!isExpand?upSideHeight:'8px'\"  [class.hide-up-Slowly]=\"!isExpand\" [class.show-down-Slowly]=\"isExpand == true\"  fxLayout=\"column\"  >\n\n                        <!-- loop for movement logs / this data show when click to expand movement logs  -->\n                        <div  *ngFor=\"let movementleg of selectedShipment['movementLegs']\" style=\"margin-top:15px;padding:5px;margin-bottom:10px;position:relative\" >    <!--loop here-->\n                        <div *ngIf=\"isExpand\" >\n                          <div *ngIf=\"movementleg.state == 'Moving'\" class=\"travling-time\" > <!-- left side of time line-->\n                            <span  >{{movementleg?._totalDuration }}</span>\n                            <span  >{{movementleg?.totalDistance/1000 | number : '1.1-1'}} km</span>\n                          </div>\n                          <i *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\"  style=\"position: absolute;margin-left: -61px;background-color: white;\"\n                            [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i>\n                          <div *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\" [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" > <!-- right side of time line-->\n                            <span style=\"font-weight: bold;\">{{movementleg.endLocation?.address?movementleg.endLocation?.address:'N/A'}}</span>\n                            <div style=\"padding-top: 4px;float:right;text-align:right;display:grid;\" >\n                              <span style=\"white-space:nowrap;\">{{movementleg?._totalDuration }}</span>\n                              <span style=\"white-space:nowrap;\">{{movementleg?.startTime | date: 'dd MMM yy hh:mm a'}}</span>\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- ***************************close for expand up-down arrow icon **************************  -->\n                  <div style=\"display:flex;position: relative;\" >\n                    <i   class=\"fa fa-circle DP_timeline-image \" aria-hidden=\"true\"></i>\n                    <div class=\"time\" style=\"margin-top: 5px;\">\n                      <span >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'d MMM'}}</span>\n                      <span style=\"white-space:nowrap\" >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'jm'}}</span>\n                    </div>\n                    <div style=\"font-size: 13px;font-weight: bold;margin-left: 54px;color:#4a4a4a;display: grid\" >\n                      <span class=\"fade-sub-header-text\" style=\"margin-top: -13px;margin-left: -10px;\">Pickup</span>\n                      <span (click)=\"goToEditTripPickupView('pickup','CT')\"  >{{(selectedShipment?.currentShipment?.startLocation?.freightLocation?.name)?selectedShipment?.currentShipment?.startLocation?.freightLocation?.name:'N/A'}}</span>\n                    </div>\n                    <div (click)=\"goToEditTripPickupView('pickup','CT')\"  style=\"cursor: pointer;margin-left: auto;display: grid;text-align: center;\">\n                      <span style=\"white-space: nowrap;color: #9b9b9b;font-size: 11px\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"sub-header-text\" style=\"margin-left: 104px;margin-top: -5px;font-size: 11px\">\n                    <span>Loading Duration {{selectedShipment['currentShipment'].startLocation['_loadingDuration']}}</span>\n                  </div>\n                </div>\n              </section>\n\n            </div>\n          </div>\n          <!-- ************ close current trip *****8 -->\n          <div style=\"height: 50px\"></div>\n        </div>\n      </div>\n      <!--done-->\n      <div *ngIf=\"vehicleState == 'At Delivery Point' && tillTimeCheck==null\">\n        <hr class=\"my-hr\">\n\n        <div  [style.height]=\"(view =='web')?'auto':'calc(100vh - 156px)'\" style=\"overflow: auto;\">\n          \n\n          <!-- *****************************     current trip start here *************************** -->\n          <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n            <div  style=\"margin-bottom: 5px\">\n              <span style=\"font-size: 12px\">Current Shipment</span>\n            </div>\n\n            <!--   foor in case of disconnection -->\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Trip'\"  class=\"vehicle-status-trip\">\n                <span >{{vehicleState}}</span>\n              </div>\n            <div *ngIf=\"selectedShipment.latestGpsState?.state != 'Disconnected' && selectedShipment.latestGpsState?.state != null && selectedShipment.currentShipment?.trackingType=='Tracker'\"  class=\"vehicle-status-tracker\">\n                <span >{{vehicleState}}</span>\n            </div>\n            <div (click)=\"openConfirmPointDialog('Destination')\" *ngIf=\"selectedShipment.latestGpsState?.state == 'Disconnected' ||  selectedShipment.latestGpsState?.state == null\"  class=\"disconnected\">\n              <span>{{vehicleState}}<span style=\"font-size:12px;color:#ffdead;\" *ngIf=\"selectedShipment.latestGpsState?.state == null\"> No GPS Found</span></span>\n              <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color:white;float:right;margin-top: 2px;\" ></i>\n            </div>\n            <!-- ************************************************* -->\n\n            <md-card (click)=\"goToEditTripPickupView('destination','CT')\"  fxLayout=\"row\" class=\"current-vehicle-card\">\n              <div>\n                <img style=\"height:32px;\" src=\"../../../../images/trip-icons/stop_truck_white.png\" alt=\"location\" >\n              </div>\n              <div style=\"width: 100%\">\n              <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\">\n                <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\">{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n                <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\"><i  class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;float:right;\"></i></span>\n                <span  *ngIf=\"!selectedShipment.currentShipment\"  style=\"line-height: 1.43;font-size: 20px\" > N/A !</span>\n              </div>\n              <!-- ************************* vehicle status **************************   -->\n              <div  style=\"white-space: nowrap;margin-bottom: -10px;text-align: right;\">\n                <span style=\"font-size:12px\">Since {{selectedShipment['vts']?._stateDuration}}</span>\n              </div>\n              </div>\n            </md-card>\n\n            <div style=\"overflow: hidden;margin-top: -13px;\">\n              <section class=\"DP-timeline\" style=\"padding: 5px;\" >\n                <div style=\"padding: 5px;margin-top: 5px;\">\n                  <!-- *************** for expand up-down arrow icon ************  -->\n                  <div style=\"overflow: hidden;margin-top: 20px;padding-bottom: 20px\" fxLayout=\"row\" >\n                  <!-- ******** total travling time **************** -->\n                    <div style=\"min-width: 43px\">\n                      <div *ngIf=\"!isExpand\" class=\"time\">\n                        <span class=\"rotate\" >&#8676;</span>\n                        <span name=\"totalTravelDistance\" style=\"white-space:nowrap;\">{{movementLogs?._totalTravlingDistance | number : '1.1-1'}} km</span>\n                        <span name=\"totalTravlingTime\" style=\"border-top: 1px solid;\" >{{movementLogs?._totalTravlingTime}}</span>\n                        <span class=\"rotate\">&#8677;</span>\n                      </div>\n                    </div>\n                    <!-- ********************************* -->\n\n                    <div *ngIf=\"!isExpand\" fxLayout=\"column\" (click)=\"isExpand = true\" style=\"margin-left:65px;    margin-top: 10px;\">\n                      <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                      <i  class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                    </div>\n                    <div *ngIf=\"isExpand\" fxLayout=\"column\" (click)=\"isExpand = false\" style=\"margin-left:65px;margin-top: -6px;\">\n                      <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                    </div>\n\n                    <div fxLayout=\"column\" style=\"margin-bottom: 30px;width:100%\">\n                      <!-- when not expanded -->\n                      <div *ngIf=\"!isExpand\" style=\"margin-left:8px;display:grid;margin-top: 15px;\" >\n                        <div style=\"display: grid\">\n                          <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;\">{{movementLogs?.stopped}} Stops</span>\n                          <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;margin-top:4px;\">{{movementLogs?.disconnected }} Disconnects</span>\n                        </div>\n                      </div>\n                      <!-- ******** this is show when log value expanded ********* -->\n                      <div [style.height]=\"isExpand?'auto':'0px'\"  class=\"data-box\" id=\"expandable-box\" [style.margin-top]=\"!isExpand?upSideHeight:'8px'\"  [class.hide-up-Slowly]=\"!isExpand\" [class.show-down-Slowly]=\"isExpand == true\"  fxLayout=\"column\"  >\n\n                      <!-- loop for movement logs / this data show when click to expand movement logs  -->\n                        <div *ngFor=\"let movementleg of selectedShipment['movementLegs']\" style=\"margin-top:15px;padding:5px;margin-bottom:10px;position:relative\" >    <!--loop here-->\n                          <div *ngIf=\"isExpand\" >\n                          <div *ngIf=\"movementleg.state == 'Moving'\" class=\"travling-time\" > <!-- left side of time line-->\n                            <span  >{{movementleg?._totalDuration }}</span>\n                            <span  >{{movementleg?.totalDistance/1000 | number : '1.1-1'}} km</span>\n                          </div>\n                          <i *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\"  style=\"position: absolute;margin-left: -61px;background-color: white;\"\n                            [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i>\n                          <div *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\" [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" > <!-- right side of time line-->\n                            <span style=\"font-weight: bold;\">{{movementleg.endLocation?.address?movementleg.endLocation?.address:'N/A'}}</span>\n\n                            <div style=\"padding-top: 4px;float:right;text-align:right;display:grid;\" >\n                              <span  style=\"white-space:nowrap;\">{{movementleg?._totalDuration }}</span>\n                              <span style=\"white-space:nowrap;\">{{movementleg?.startTime | date: 'dd MMM yy hh:mm a'}}</span>\n                            </div>\n                          </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- ***************************close for expand up-down arrow icon **************************  -->\n                  <div style=\"display:flex;position: relative;\" >\n                    <i  class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\n                    <div class=\"time\" style=\"margin-top: 5px;\">\n                      <span >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'d MMM'}}</span>\n                      <span style=\"white-space:nowrap\" >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'jm'}}</span>\n                    </div>\n                    <div style=\"font-size: 13px;font-weight: bold;margin-left: 60px;color:#4a4a4a;display: grid\" >\n                      <span class=\"fade-sub-header-text\" style=\"margin-top: -13px;margin-left: -10px;\">Pickup</span>\n                      <span (click)=\"goToEditTripPickupView('pickup','CT')\"  >{{(selectedShipment?.currentShipment?.startLocation.freightLocation?.name)?selectedShipment?.currentShipment?.startLocation?.freightLocation?.name:'N/A'}}</span>\n                    </div>\n                    <div (click)=\"goToEditTripPickupView('pickup','CT')\"  style=\"margin-left: auto;display: grid;text-align: center;\">\n                      <span style=\"white-space: nowrap;color: #9b9b9b;font-size: 11px\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"sub-header-text\" style=\"margin-left: 90px;margin-top: -5px;font-size: 11px\">\n                      <span>Loading Duration {{selectedShipment['currentShipment'].startLocation['_loadingDuration']}}</span>\n                  </div>\n                </div>\n              </section>\n\n            </div>\n          </div>\n          <!-- ************ close current trip *****8 -->\n          <div style=\"height: 50px\"></div>\n        </div>\n      </div>\n      <!--done-->\n\n    <div *ngIf=\"vehicleState == 'At Delivery Point' && tillTimeCheck!=null\" style=\"background-color: white\">\n      <hr class=\"my-hr\">\n  \n      <div  [style.height]=\"(view =='web')?'auto':'calc(100vh - 156px)'\" style=\"overflow: auto;\">\n  \n          <!-- *****************************     current trip start here *************************** -->\n        <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\n          <div  style=\"margin-bottom: 5px\">\n            <span style=\"font-size: 12px\">Current Shipment</span>\n          </div>  \n          <div (click)=\"goToEditTripPickupView('destination','CT')\"  fxLayout=\"row\">\n            <div>\n              <img style=\"height:32px;\" src=\"../../../../images/trip-icons/stop_truck_white.png\" alt=\"location\" >\n            </div>\n            <div style=\"width: 100%\">\n            <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\">\n              <span style=\"margin-left: 25px;color: #428fd4;font-size: 25px;\"><i  class=\"fa fa-circle\" aria-hidden=\"true\"></i></span>\n              <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\" (click)=\"goToEditTripPickupView('destination','CT')\" >{{selectedShipment?.currentShipment?.endLocation?.freightLocation?.name}}</span>\n              <span *ngIf=\"selectedShipment.currentShipment\" style=\"line-height: 1.43\" (click)=\"goToEditTripPickupView('destination','CT')\" ><i  class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;float:right;\"></i></span>\n              <span  *ngIf=\"!selectedShipment.currentShipment\"  style=\"line-height: 1.43;font-size: 20px\" > N/A !</span>\n            </div>\n            <!-- ************************* vehicle status **************************   -->\n            <div  style=\"white-space: nowrap;margin-bottom: -10px;text-align: right;\">\n              <span style=\"font-size:12px\">Since {{selectedShipment['vts']?._stateDuration}}</span>\n            </div>\n            </div>\n          </div>\n  \n          <div style=\"overflow: hidden;margin-top: -13px;\">\n            <section class=\"DP-timeline\" style=\"padding: 5px;\" >\n              <div style=\"padding: 5px;margin-top: 5px;\">\n                <!-- *************** for expand up-down arrow icon ************  -->\n                <div style=\"overflow: hidden;margin-top: 20px;padding-bottom: 20px\" fxLayout=\"row\" >\n                <!-- ******** total travling time **************** -->\n                  <div style=\"min-width: 43px\">\n                    <div *ngIf=\"!isExpand\" class=\"time\">\n                      <span class=\"rotate\" >&#8676;</span>\n                      <span name=\"totalTravelDistance\" style=\"white-space:nowrap;\">{{movementLogs?._totalTravlingDistance | number : '1.1-1'}} km</span>\n                      <span name=\"totalTravlingTime\" style=\"border-top: 1px solid;\" >{{movementLogs?._totalTravlingTime}}</span>\n                      <span class=\"rotate\">&#8677;</span>\n                    </div>\n                  </div>\n                  <!-- ********************************* -->\n    \n                  <div *ngIf=\"!isExpand\" fxLayout=\"column\" (click)=\"isExpand = true\" style=\"margin-left:65px;    margin-top: 10px;\">\n                    <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                    <i  class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                  </div>\n                  <div *ngIf=\"isExpand\" fxLayout=\"column\" (click)=\"isExpand = false\" style=\"margin-left:65px;margin-top: -6px;\">\n                    <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\" ></i>\n                  </div>\n    \n                  <div fxLayout=\"column\" style=\"margin-bottom: 30px;width:100%\">\n                    <!-- when not expanded -->\n                    <div *ngIf=\"!isExpand\" style=\"margin-left:8px;display:grid;margin-top: 15px;\" >\n                      <div style=\"display: grid\">\n                        <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;\">{{movementLogs?.stopped}} Stops</span>\n                        <span style=\"font-size: 11px;color: #9b9b9b;white-space:nowrap;margin-top:4px;\">{{movementLogs?.disconnected }} Disconnects</span>\n                      </div>\n                    </div>\n                    <!-- ******** this is show when log value expanded ********* -->\n                    <div [style.height]=\"isExpand?'auto':'0px'\"  class=\"data-box\" id=\"expandable-box\" [style.margin-top]=\"!isExpand?upSideHeight:'8px'\"  [class.hide-up-Slowly]=\"!isExpand\" [class.show-down-Slowly]=\"isExpand == true\"  fxLayout=\"column\"  >\n    \n                    <!-- loop for movement logs / this data show when click to expand movement logs  -->\n                      <div *ngFor=\"let movementleg of selectedShipment['movementLegs']\" style=\"margin-top:15px;padding:5px;margin-bottom:10px;position:relative\" >    <!--loop here-->\n                        <div *ngIf=\"isExpand\" >\n                        <div *ngIf=\"movementleg.state == 'Moving'\" class=\"travling-time\" > <!-- left side of time line-->\n                          <span  >{{movementleg?._totalDuration }}</span>\n                          <span  >{{movementleg?.totalDistance/1000 | number : '1.1-1'}} km</span>\n                        </div>\n                        <i *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\"  style=\"position: absolute;margin-left: -61px;background-color: white;\"\n                          [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i>\n                        <div *ngIf=\"movementleg.state == 'Stopped' || movementleg.state == 'Disconnected'\" [style.color]=\"movementleg.state == 'Disconnected'?'red':'#858585'\" > <!-- right side of time line-->\n                          <span style=\"font-weight: bold;\">{{movementleg.endLocation?.address?movementleg.endLocation?.address:'N/A'}}</span>\n    \n                          <div style=\"padding-top: 4px;float:right;text-align:right;display:grid;\" >\n                            <span  style=\"white-space:nowrap;\">{{movementleg?._totalDuration }}</span>\n                            <span style=\"white-space:nowrap;\">{{movementleg?.startTime | date: 'dd MMM yy hh:mm a'}}</span>\n                          </div>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- ***************************close for expand up-down arrow icon **************************  -->\n                <div style=\"display:flex;position: relative;\" >\n                  <i  class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\n                  <div class=\"time\" style=\"margin-top: 5px;\">\n                    <span >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'d MMM'}}</span>\n                    <span style=\"white-space:nowrap\" >{{selectedShipment['currentShipment'].startLocation['fromTime'] | date :'jm'}}</span>\n                  </div>\n                  <div style=\"font-size: 13px;font-weight: bold;margin-left: 60px;color:#4a4a4a;display: grid\" >\n                    <span class=\"fade-sub-header-text\" style=\"margin-top: -13px;margin-left: -10px;\">Pickup</span>\n                    <span (click)=\"goToEditTripPickupView('pickup','CT')\"  >{{(selectedShipment?.currentShipment?.startLocation.freightLocation?.name)?selectedShipment?.currentShipment?.startLocation?.freightLocation?.name:'N/A'}}</span>\n                  </div>\n                  <div (click)=\"goToEditTripPickupView('pickup','CT')\"  style=\"margin-left: auto;display: grid;text-align: center;\">\n                    <span style=\"white-space: nowrap;color: #9b9b9b;font-size: 11px\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"color: #00b0ff;\"></i></span>\n                  </div>\n                </div>\n                <div class=\"sub-header-text\" style=\"margin-left: 90px;margin-top: -5px;font-size: 11px\">\n                    <span>Loading Duration {{selectedShipment['currentShipment'].startLocation['_loadingDuration']}}</span>\n                </div>\n              </div>\n            </section>\n    \n          </div>\n        </div>\n        <!-- ************ close current trip *****8 -->\n        <div style=\"height: 50px\"></div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
// import {Services} from "../../services/services";
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
var tracker_services_1 = __webpack_require__("../../../../../src/app/services/tracker-services.ts");
var TrackerShipmentStatusComponent = (function () {
    function TrackerShipmentStatusComponent(_router, localStorageService, snackBar, _store, shipmentServices, trackerService, route) {
        var _this = this;
        this._router = _router;
        this.localStorageService = localStorageService;
        this.snackBar = snackBar;
        this._store = _store;
        this.shipmentServices = shipmentServices;
        this.trackerService = trackerService;
        this.route = route;
        this.view = '';
        this.isSpinner = false;
        this.isExpand = false;
        this.isDisconnectDialog = false;
        this.isStartTimeDisable = false;
        this.isEditTripLocationDialog = false;
        this.movementLogs = {};
        this.tripView = "list";
        this.forConfirmPlace = "";
        this.validationErrorMgs = "";
        this.upSideHeight = '0px';
        this.unSub_vehicleTripDetails = null;
        //public selectedShipment : Object ={};
        //public vehicleTripDetailsClone : Object ={};
        this.selectedConfirmLocation = {};
        this.startTime = null;
        this.tillTime = null;
        this.tillTimeCheck = null;
        this.forEditPlace = '';
        this.unSub_customerDetails = null;
        this.unSub_closeDialog = null;
        this.isDelayed = false;
        //*** */
        //public vehicleState:any='';
        this.vehicleStatus = '';
        this.unSub_shipmentDetail = null;
        this.isExtended = false;
        this.selectedShipment = {};
        this.currentShipment = {};
        this.selectedShipmentClone = {};
        this.view = 'web';
        console.log(this.view);
        //********************** get trip details data *****************
        this.unSub_shipmentDetail = this._store.select('shipmentDetail').subscribe(function (value) {
            console.log(value);
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            //this.selectedShipment=value['data'];
            _this.selectedShipment = value['res']; // create new object
            console.log(_this.selectedShipment);
            _this.selectedShipmentClone = value['res']; // create new object
            console.log(_this.selectedShipmentClone);
            if (_this.selectedShipment != null) {
                if (_this.selectedShipment['vts'] != null) {
                    _this.selectedShipment['vts']['_stateDuration'] = _this.msToTime(_this.selectedShipment['vts']['endTime'] - _this.selectedShipment['vts']['startTime']);
                    if (_this.selectedShipment['currentShipment'] != null) {
                        _this.selectedShipment['currentShipment']['_transiteTime'] = _this.msToTime(_this.selectedShipment['currentShipment']['planedEndTime'] - _this.selectedShipment['currentShipment']['planedStartTime']);
                        console.log(_this.selectedShipment['currentShipment']['_transiteTime']);
                    }
                    if (_this.selectedShipment['vts']['state'] == 'EnrouteForPickUp') {
                        _this.vehicleState = 'Enroute for Pickup';
                    }
                    else if (_this.selectedShipment['vts']['state'] == 'AtPickUpPoint') {
                        _this.vehicleState = 'At Pickup Point';
                    }
                    else if (_this.selectedShipment['vts']['state'] == 'EnrouteForDestination') {
                        _this.vehicleState = 'Enroute for Delivery';
                        if (_this.selectedShipment['currentShipment'] != null) {
                            _this.selectedShipment['currentShipment'].startLocation['_loadingDuration'] = _this.msToTime(_this.selectedShipment['currentShipment'].startLocation['tillTime'] - _this.selectedShipment['currentShipment'].startLocation['fromTime']);
                        }
                        console.log(_this.selectedShipment['movementLegs']);
                        if (_this.selectedShipment['movementLegs'] != null) {
                            var totalTravlingDistance = 0;
                            var totalTravlingTime = 0;
                            var stopCount = 0;
                            var disconnectedCount = 0;
                            for (var i = 0; i < _this.selectedShipment['movementLegs'].length; i++) {
                                totalTravlingDistance = totalTravlingDistance + _this.selectedShipment['movementLegs'][i]['totalDistance'];
                                totalTravlingTime = totalTravlingTime + _this.selectedShipment['movementLegs'][i]['totalTime'];
                                _this.selectedShipment['movementLegs'][i]['_totalDuration'] = _this.msToTime(_this.selectedShipment['movementLegs'][i]['totalTime']);
                                if (_this.selectedShipment['movementLegs'][i]['state'] == 'Stopped') {
                                    stopCount++;
                                }
                                if (_this.selectedShipment['movementLegs'][i]['state'] == 'Disconnected') {
                                    disconnectedCount++;
                                }
                            }
                            _this.movementLogs.totalTravlingDistance = totalTravlingDistance;
                            _this.movementLogs._totalTravlingDistance = totalTravlingDistance / 1000;
                            _this.movementLogs.totalTravlingTime = totalTravlingTime;
                            _this.movementLogs._totalTravlingTime = _this.msToTime(totalTravlingTime);
                            _this.movementLogs.disconnected = disconnectedCount;
                            _this.movementLogs.stopped = stopCount;
                            console.log(_this.movementLogs);
                        }
                    }
                    else if (_this.selectedShipment['vts']['state'] == 'AtDestination') {
                        _this.vehicleState = 'At Delivery Point';
                        if (_this.selectedShipment['currentShipment'] != null) {
                            _this.selectedShipment['currentShipment'].startLocation['_loadingDuration'] = _this.msToTime(_this.selectedShipment['currentShipment'].startLocation['tillTime'] - _this.selectedShipment['currentShipment'].startLocation['fromTime']);
                            _this.tillTimeCheck = _this.selectedShipment['currentShipment'].endLocation['tillTime'];
                        }
                        if (_this.selectedShipment['movementLegs'] != null) {
                            var totalTravlingDistance = 0;
                            var totalTravlingTime = 0;
                            var stopCount = 0;
                            var disconnectedCount = 0;
                            for (var i = 0; i < _this.selectedShipment['movementLegs'].length; i++) {
                                totalTravlingDistance = totalTravlingDistance + _this.selectedShipment['movementLegs'][i]['totalDistance'];
                                totalTravlingTime = totalTravlingTime + _this.selectedShipment['movementLegs'][i]['totalTime'];
                                _this.selectedShipment['movementLegs'][i]['_totalDuration'] = _this.msToTime(_this.selectedShipment['movementLegs'][i]['totalTime']);
                                if (_this.selectedShipment['movementLegs'][i]['state'] == 'Stopped') {
                                    stopCount++;
                                }
                                if (_this.selectedShipment['movementLegs'][i]['state'] == 'Disconnected') {
                                    disconnectedCount++;
                                }
                            }
                            _this.movementLogs.totalTravlingDistance = totalTravlingDistance;
                            _this.movementLogs._totalTravlingDistance = totalTravlingDistance / 1000;
                            _this.movementLogs.totalTravlingTime = totalTravlingTime;
                            _this.movementLogs._totalTravlingTime = _this.msToTime(totalTravlingTime);
                            _this.movementLogs.disconnected = disconnectedCount;
                            _this.movementLogs.stopped = stopCount;
                            console.log(_this.movementLogs);
                        }
                    }
                    console.log(_this.selectedShipment);
                }
            }
        });
        this.unSub_closeDialog = _store.select('closeDialog').subscribe(function (value) {
            console.log(value);
            _this.isEditTripLocationDialog = value['isClose'];
        });
        // console.log(currentTripVehicle);
    } // constructor close
    //public tillTime:any;
    //*** */
    TrackerShipmentStatusComponent.prototype.ngAfterViewChecked = function () {
        var ref = document.getElementById("expandable-box");
        if (ref != null) {
            var mapOffset = ref.getBoundingClientRect();
            // console.log(mapOffset);
            this.upSideHeight = ((0 - (mapOffset.height + 150)) + 'px');
            // console.log(this.upSideHeight)
        }
        ;
    };
    TrackerShipmentStatusComponent.prototype.ngOnInit = function () {
    };
    TrackerShipmentStatusComponent.prototype.ngOnDestroy = function () {
        this._store.dispatch({ type: "IS_BACK", payload: { isBack: false, backToComponent: '' } });
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined) {
            this.unSub_customerDetails.unsubscribe();
        }
        if (typeof this.unSub_vehicleTripDetails != 'undefined' && this.unSub_vehicleTripDetails != null && this.unSub_vehicleTripDetails != undefined)
            this.unSub_vehicleTripDetails.unsubscribe();
        if (typeof this.unSub_closeDialog != 'undefined' && this.unSub_closeDialog != null && this.unSub_closeDialog != undefined)
            this.unSub_closeDialog.unsubscribe();
    };
    // back(){
    //   this._store.dispatch(go(['dashboard/trip/status']));
    // }
    TrackerShipmentStatusComponent.prototype.goToEditTripPickupView = function (forEditPlace, tripName) {
        var obj = { 'selectedShipment': this.selectedShipmentClone, 'forEditPlace': forEditPlace, 'tripName': tripName };
        this.localStorageService.set("SHIPMENT-TRIP-DETAIL-OBJ", obj);
        this.forEditPlace = forEditPlace;
        this.isEditTripLocationDialog = true;
        // if(this.view == 'web'){
        //   this.forEditPlace  =forEditPlace;
        // this.isEditTripLocationDialog =true;
        // }
        // else{
        //   this._store.dispatch(go(['/vtsdashboard/trip/status/details/editTripLocation']));
        // }
    };
    TrackerShipmentStatusComponent.prototype.msToTime = function (duration) {
        var x = duration / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        // console.log(days);
        var totalDuration = '';
        if (days > 0) {
            totalDuration = days + "d ";
        }
        if (hours > 0) {
            totalDuration = totalDuration + hours + "hr ";
        }
        if (days >= 1) {
            return totalDuration;
        }
        if (minutes > 0) {
            return totalDuration = totalDuration + minutes + "min";
        }
        if (seconds > 0 && totalDuration == '') {
            totalDuration = totalDuration + seconds + " sec";
        }
        if (totalDuration == '') {
            return '0 sec';
        }
        else {
            return totalDuration;
        }
    }; //close methods msToTime
    TrackerShipmentStatusComponent.prototype.openConfirmPointDialog = function (forConfirmPlace) {
        this.forConfirmPlace = forConfirmPlace;
        this.validationErrorMgs = "";
        console.log(forConfirmPlace);
        this.isDisconnectDialog = true;
        console.log(this.selectedShipment);
        if (this.selectedShipment['vts']['state'] == 'EnrouteForDestination' || this.selectedShipment['vts']['state'] == 'AtDestination') {
            // this.selectedConfirmLocation = this.selectedShipment ['currentShipment']['destination'][0];
            if (this.selectedShipment['currentShipment']['endLocation']['fromTime'] != null)
                this.startTime = new Date(this.selectedShipment['currentShipment']['endLocation']['fromTime']);
            if (this.selectedShipment['currentShipment']['endLocation']['tillTime'])
                this.tillTime = new Date(this.selectedShipment['currentShipment']['endLocation']['tillTime']);
        }
        else if (this.selectedShipment['vts']['state'] == 'EnrouteForPickUp' || this.selectedShipment['vts']['state'] == 'AtPickUpPoint') {
            // this.selectedConfirmLocation = this.selectedShipment ['currentShipment']['origin'][0];
            if (this.selectedShipment['currentShipment']['startLocation']['fromTime'] != null)
                this.startTime = new Date(this.selectedShipment['currentShipment']['startLocation']['fromTime']);
            console.log(this.startTime);
            if (this.selectedShipment['currentShipment']['startLocation']['tillTime'] != null)
                this.tillTime = new Date(this.selectedShipment['currentShipment']['startLocation']['tillTime']);
        }
        if (this.selectedShipment['vts']['state'] == 'EnrouteForDestination' || this.selectedShipment['vts']['state'] == 'EnrouteForPickUp') {
            this.isStartTimeDisable = false;
            this.startTime = null;
            this.tillTime = null;
        }
        else if (this.selectedShipment['vts']['state'] == 'AtDestination' || this.selectedShipment['vts']['state'] == 'AtPickUpPoint') {
            this.isStartTimeDisable = true;
        }
    };
    TrackerShipmentStatusComponent.prototype.confirmPlace = function () {
        var _this = this;
        if (this.checkValid()) {
            var eTime = null;
            if (this.tillTime != null) {
                eTime = new Date(this.tillTime).getTime();
                console.log(eTime);
                //@todo more set validation
                if (eTime < new Date(this.startTime).getTime()) {
                    // console.log("start Time should not be greater then end Time");
                    this.validationErrorMgs = "start Time should not be greater then end Time";
                    return;
                }
                var todayDate = new Date().getTime();
                if (eTime > todayDate) {
                    // console.log("start Time should not be greater then end Time");
                    this.validationErrorMgs = "End time should not be greater then current date";
                    return;
                }
            }
            this.isDisconnectDialog = false;
            var trackingType = void 0;
            if (this.selectedShipment['currentShipment']['trackingType'] == 'Tracker') {
                trackingType = 'tracker';
            }
            else
                trackingType = 'trip';
            console.log(this.startTime);
            var obj = { forConfirmPlace: this.forConfirmPlace,
                conObj: {
                    vehicleId: this.selectedShipment['currentShipment']['vehicleId'],
                    deviceImei: this.selectedShipment['currentShipment']['deviceImei'],
                    tripId: this.selectedShipment['vts']['tripId'],
                    trackingType: trackingType,
                    startTime: new Date(this.startTime).getTime(),
                    endTime: eTime
                } };
            console.log(obj);
            this.trackerService.confirmLocation.emit(obj); // after call it page data automatically  update by socket services.
            this.isSpinner = true;
            setTimeout(function () {
                _this.shipmentServices.getShipmentDetail.emit(_this.selectedShipment.currentShipment.shipmentId);
            }, 1000);
        }
    };
    TrackerShipmentStatusComponent.prototype.checkValid = function () {
        if (this.isStartTimeDisable) {
            console.log('in validate' + this.startTime);
            console.log(this.tillTime);
            if (this.startTime == null) {
                this.validationErrorMgs = "Start Time should not be blank";
                return false;
            }
            if (this.tillTime == null) {
                this.validationErrorMgs = "End Time should not be blank";
                return false;
            }
            var todayDate = new Date().getTime();
            if (new Date(this.startTime).getTime() > todayDate) {
                this.validationErrorMgs = "start time should not be greater then current date";
                return false;
            }
        }
        else {
            if (this.startTime == null) {
                this.validationErrorMgs = "start time should not be blank";
                return false;
            }
            var todayDate = new Date().getTime();
            if (new Date(this.startTime).getTime() > todayDate) {
                this.validationErrorMgs = "start time should not be greater then current date";
                return false;
            }
        }
        return true;
    }; // close ckeck valid
    return TrackerShipmentStatusComponent;
}());
TrackerShipmentStatusComponent = __decorate([
    core_1.Component({
        selector: 'app-tracker-shipment-status',
        template: __webpack_require__("../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tracker-shipment-status/tracker-shipment-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _b || Object, typeof (_c = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _c || Object, typeof (_d = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _d || Object, typeof (_e = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _e || Object, typeof (_f = typeof tracker_services_1.TrackerServices !== "undefined" && tracker_services_1.TrackerServices) === "function" && _f || Object, typeof (_g = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _g || Object])
], TrackerShipmentStatusComponent);
exports.TrackerShipmentStatusComponent = TrackerShipmentStatusComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=tracker-shipment-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/user-management-console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-header{\n  /*background-color: #1976d2;*/\n  width: 100%;\n  padding-bottom: 3px;\n  top: 0px;\n  z-index:100;\n  position: absolute;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/user-management-console.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Header to be shown in mobile view only -->\n\n<!--<div class=\"top-header\" id=\"top-head\" *ngIf=\"view!='web'\" >-->\n  <!--<div fxLayout=\"row\" style=\" background-color: #3F51B5; height: 48px;padding-top: 15px; padding-left: 12px;\">-->\n      <!--<span >-->\n        <!--<i style=\"color:white;\" (click)=\"goToManageOrganisationView()\" class=\"fa fa-arrow-left\" aria-hidden=\"true\" ></i>-->\n      <!--</span>-->\n    <!--<span>-->\n        <!--<label style=\"color:white;margin-left: 10px;margin-top: 4px;font-weight:bold;font-size:large;font-family: Gotham-Rounded-Medium, Sans-Serif\">User Management</label>-->\n      <!--</span>-->\n\n    <!--&lt;!&ndash;<span style=\"margin-left: auto;margin-right:45px;\" >&ndash;&gt;-->\n    <!--&lt;!&ndash;</span>&ndash;&gt;-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--Top header ends here-->\n\n<!--<app-usermanagement-web-view></app-usermanagement-web-view>-->\n<app-users-list></app-users-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/user-management-console.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var UserManagementConsoleComponent = (function () {
    function UserManagementConsoleComponent(_router) {
        this._router = _router;
        // this._store.dispatch({type: "TITLE",payload:'User Management'});// set the header name
    }
    UserManagementConsoleComponent.prototype.ngOnInit = function () {
    };
    return UserManagementConsoleComponent;
}());
UserManagementConsoleComponent = __decorate([
    core_1.Component({
        selector: 'app-user-management-console',
        template: __webpack_require__("../../../../../src/app/components/user-management-console/user-management-console.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-management-console/user-management-console.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], UserManagementConsoleComponent);
exports.UserManagementConsoleComponent = UserManagementConsoleComponent;
var _a;
//# sourceMappingURL=user-management-console.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card\n{\n  padding-top: 0px;\n}\n\n.align-center{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: -ms-grid;\n  display: grid;\n}\n\n\n.modal {\n  /*display: none; !* Hidden by default *!*/\n  position: fixed; /* Stay in place */\n  z-index: 99999; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n  /*top:20%*/\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n<div style=\"overflow: auto; height: calc( 100vh - 50px)\">\n  <div *ngFor=\"let users of allUsersList\" >\n<md-card>\n  <md-card-content>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\n    <div fxFlex=\"50\"><h3>{{users['user']['name']}}</h3></div>\n    <div fxFlex=\"40\"><h3>{{users['accessLevel']}}</h3></div>\n    <div fxFlex=\"10\">\n      <button md-icon-button (click)=\"deleteUserConfirmationBox(users)\">\n      <i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-size: large\" ></i>\n      </button>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\">\n    <div fxFlex=\"50\"><span><label><b>{{users['user']['email']}}</b></label></span></div>\n    <div fxFlex=\"40\"><span><label><b>{{users['user']['mobileNumber']}}</b></label></span></div>\n      <div fxFlex=\"10\">\n        <md-slide-toggle [checked]=\"users['accessLevel']== 'admin'\" (change)=\"changeUserStatus(users)\" ></md-slide-toggle>\n        <!--<md-slide-toggle [checked]=\"schedule['activeStatus']\" (change)=\"changeScheduleState(schedule)\" ></md-slide-toggle>-->\n      </div>\n  </div>\n\n    <!--<div fxLayout=\"row\">-->\n      <!--<div fxFlex=\"50\"><span><label><b>Active since </b>2 months</label></span></div>-->\n      <!--<div fxFlex=\"50\"></div>-->\n    <!--</div>-->\n\n  </md-card-content>\n</md-card>\n  </div>\n  <div style=\"height: 50px;width: 100%\"></div>\n</div>\n\n  <button md-fab color=\"primary\" style=\"position: absolute;bottom:10px;right: 10px\"  (click)=\"showInviteUser()\" >\n    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\n  </button>\n</div>\n\n<!--Invite User Modal  starts here-->\n<div  *ngIf=\"isShowInviteUser\" id=\"myParameterModal\" class=\"modal\">\n  <!--Invite User Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" (click)=\"isShowInviteUser=false\">&times;</span>\n    <h3 style=\"text-align: center\"> Add User</h3>\n\n    <md-tab-group>\n      <md-tab label=\"By Email\">\n        <div style=\"width: 100%\">\n          <md-input-container style=\"width:85%\" >\n            <input placeholder=\"Email Id\"  mdInput required [(ngModel)]=\"emailId\" >\n          </md-input-container>\n        </div>\n      </md-tab>\n      <md-tab label=\"By Mobile\">\n        <div style=\"width: 100%\">\n          <md-input-container style=\"width:85%\" >\n            <input placeholder=\"Mobile Number\"  mdInput required [(ngModel)]=\"mobileNo\" onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\" >\n          </md-input-container>\n        </div>\n      </md-tab>\n    </md-tab-group>\n\n    <div>\n      <button md-raised-button color=\"primary\" (click)=\"confirmAddUser()\">Add</button>\n      <button md-button (click)=\"isShowInviteUser=false\">Cancel</button>\n    </div>\n  </div>\n</div>\n<!--Invite user Modal ends here-->\n\n\n<!--Invite User Modal  starts here-->\n<div  *ngIf=\"isShowUserDetails\" id=\"userDetailsModal\" class=\"modal\">\n  <!--Invite User Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" (click)=\"isShowUserDetails=false\">&times;</span>\n    <h3 style=\"text-align: center\">User Details</h3>\n    <div>\n      <div style=\"width: 100%\" *ngIf=\"isShowExistingUserDetails\">\n        <label><b>Name : </b> {{existingUserName}} </label><br>\n        <label><b>Email : </b> {{existingUserEmail}} </label><br>\n        <label><b>Number : </b> {{existingUserMobile}} </label>\n      </div>\n\n      <div style=\"width: 100%\" *ngIf=\"!isShowExistingUserDetails\">\n        <h4>Invited User is not registered with FRETRON Platform. Kindly ask the user to sign up first.</h4>\n      </div>\n    </div>\n    <div style=\"margin-top: 2%\">\n      <button md-raised-button color=\"primary\" (click)=\"addUser()\">OK</button>\n      <button md-button (click)=\"isShowUserDetails=false\">Cancel</button>\n    </div>\n  </div>\n</div>\n<!--Invite user Modal ends here-->\n\n\n<!--Delete User Modal  starts here-->\n<div  *ngIf=\"isShowDeleteUserConfirmation\" id=\"deleteUserModal\" class=\"modal\">\n  <!--Invite User Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" (click)=\"isShowDeleteUserConfirmation=false\">&times;</span>\n    <h3 style=\"text-align: center\">Confirm Delete</h3>\n    <div>\n      <div style=\"width: 100%\">\n      <label>Are you sure to delete selected user?</label>\n      </div>\n    </div>\n    <div style=\"margin-top: 2%\">\n      <button md-raised-button color=\"primary\" (click)=\"deleteSelecetdUser()\" >YES</button>\n      <button md-button (click)=\"isShowDeleteUserConfirmation=false\">NO</button>\n    </div>\n  </div>\n</div>\n<!--Delete user Modal ends here-->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user-management-console/users-list/users-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var user_management_services_1 = __webpack_require__("../../../../../src/app/services/user-management-services.ts");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var UsersListComponent = (function () {
    function UsersListComponent(_store, userMgmntService, snackBar, _localStorageServices) {
        var _this = this;
        this._store = _store;
        this.userMgmntService = userMgmntService;
        this.snackBar = snackBar;
        this._localStorageServices = _localStorageServices;
        // public view ='';
        this.emailId = '';
        this.isSpinner = false;
        this.mobileNo = '';
        this.existingUserName = '';
        this.existingUserMobile = '';
        this.existingUserEmail = '';
        this.existingUserObj = {};
        this.selectedUserForDelete = {};
        this.orgId = '';
        this.isShowInviteUser = false;
        this.isShowUserDetails = false;
        this.isShowDeleteUserConfirmation = false;
        this.isShowExistingUserDetails = false;
        this.allUsersList = [];
        this.unSub_UsersList = null;
        this.unSub_DeleteUserResponse = null;
        this.unSub_UpdateUserResponse = null;
        this.unSub_getAddExistingUser = null;
        this.unSub_customerDetails = null;
        this.allUsersList = [];
        var _authToken = this._localStorageServices.get("AUTH_TOKEN");
        this.token = this._localStorageServices.get("AUTH_TOKEN");
        // this.token=_authToken['token'];
        console.log("this.token");
        console.log(this.token);
        this.unSub_customerDetails = _store.select('customerDetails').subscribe(function (value) {
            console.log(value);
            _this.allUsersList = [];
            if (value == null) {
                return;
            }
            _this.orgId = value['customer']['orgId'];
            _this.isSpinner = true;
            _this.userMgmntService.getAllUsersList.emit(_this.token);
        });
        this.unSub_UsersList = _store.select('getAllUserList').subscribe(function (value) {
            _this.allUsersList = [];
            if (value == null) {
                return;
            }
            console.log('all users list in component');
            console.log(value);
            _this.isSpinner = false;
            _this.allUsersList = value;
        });
        this.unSub_getAddExistingUser = _store.select('existingUserResponse').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['status'] == 400) {
                _this.isShowUserDetails = true;
                _this.isShowExistingUserDetails = false;
                return;
            }
            console.log('existing users details in component');
            console.log(value['status']);
            _this.isShowExistingUserDetails = true;
            _this.existingUserObj = value;
            _this.existingUserName = value['name'];
            _this.existingUserEmail = value['email'];
            _this.existingUserMobile = value['mobileNumber'];
            // this.existingUserName=
            _this.refreshListAfterInterval();
        });
        this.unSub_DeleteUserResponse = _store.select('deleteUserResponse').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log('all users list in component');
            console.log(value);
            _this.openSnackBar("User Deleted Successfully !");
            _this.userMgmntService.getAllUsersList.emit(_this.token);
            _this.refreshListAfterInterval();
        });
        this.unSub_UpdateUserResponse = _store.select('updateUserStatusResponse').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log('all users list in component');
            console.log(value);
            _this.openSnackBar("User Status Updated !");
            _this.isShowUserDetails = false;
            _this.userMgmntService.getAllUsersList.emit(_this.token);
            _this.refreshListAfterInterval();
        });
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_UsersList != 'undefined' && this.unSub_UsersList != null && this.unSub_UsersList != undefined)
            this.unSub_UsersList.unsubscribe();
        if (typeof this.unSub_UsersList != 'undefined' && this.unSub_UsersList != null && this.unSub_UsersList != undefined)
            this.unSub_UsersList.unsubscribe();
        if (typeof this.unSub_UpdateUserResponse != 'undefined' && this.unSub_UpdateUserResponse != null && this.unSub_UpdateUserResponse != undefined)
            this.unSub_UpdateUserResponse.unsubscribe();
        if (typeof this.unSub_getAddExistingUser != 'undefined' && this.unSub_getAddExistingUser != null && this.unSub_getAddExistingUser != undefined)
            this.unSub_getAddExistingUser.unsubscribe();
        if (typeof this.unSub_customerDetails != 'undefined' && this.unSub_customerDetails != null && this.unSub_customerDetails != undefined)
            this.unSub_customerDetails.unsubscribe();
    };
    UsersListComponent.prototype.showInviteUser = function () {
        this.isShowInviteUser = true;
    };
    UsersListComponent.prototype.confirmAddUser = function () {
        this.isShowInviteUser = false;
        this.isShowUserDetails = true;
        var obj = {
            email: this.emailId,
            mobile: this.mobileNo
        };
        this.userMgmntService.getUserIfExist.emit(obj);
    };
    UsersListComponent.prototype.addUser = function () {
        var obj = {
            "userUuid": this.existingUserObj['uuid'],
            "orgUuid": this.orgId,
            "accessLevel": "user"
        };
        console.log(obj);
        this.userMgmntService.addUserToGroup.emit(obj);
    };
    UsersListComponent.prototype.deleteUserConfirmationBox = function (selectedUser) {
        console.log("Delete user ??");
        console.log(selectedUser);
        var obj = {
            "userUuid": selectedUser['user']['uuid'],
            "orgUuid": this.orgId,
            "accessLevel": selectedUser['accessLevel']
        };
        this.selectedUserForDelete = obj;
        this.isShowDeleteUserConfirmation = true;
    };
    UsersListComponent.prototype.deleteSelecetdUser = function () {
        if (this.allUsersList.length > 1) {
            this.isShowDeleteUserConfirmation = false;
            this.userMgmntService.deleteUser.emit(this.selectedUserForDelete);
        }
        else {
            this.openSnackBar("Atleast one user is required.");
        }
    };
    UsersListComponent.prototype.changeUserStatus = function (userObj) {
        var acl = "";
        if (userObj['accessLevel'] == 'user') {
            acl = 'admin';
        }
        if (userObj['accessLevel'] == 'admin') {
            acl = 'user';
        }
        var obj = {
            "userUuid": userObj['user']['uuid'],
            "orgUuid": this.orgId,
            "accessLevel": acl
        };
        this.userMgmntService.changeUserType.emit(obj);
    };
    UsersListComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    UsersListComponent.prototype.refreshListAfterInterval = function () {
        var _this = this;
        setTimeout(function () {
            _this.userMgmntService.getAllUsersList.emit(_this.token);
        }, 3000);
        setTimeout(function () {
            _this.userMgmntService.getAllUsersList.emit(_this.token);
        }, 5000);
        setTimeout(function () {
            _this.userMgmntService.getAllUsersList.emit(_this.token);
        }, 10000);
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    core_1.Component({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/components/user-management-console/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-management-console/users-list/users-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof user_management_services_1.UserManagementService !== "undefined" && user_management_services_1.UserManagementService) === "function" && _b || Object, typeof (_c = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _c || Object, typeof (_d = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _d || Object])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-container {\n  position: relative;\n  height: 150px;\n  margin: -8px -9px 10px -6px;\n  background-image: url(" + __webpack_require__("../../../../../src/images/background-profile.png") + ");\n}\n\n.profile-container-desktop {\n  position: relative;\n  height: 150px;\n  width: 280px;\n  margin-top: -8px;\n  background-image: url(" + __webpack_require__("../../../../../src/images/background-profile.png") + ");\n}\n\n.logo{\n  padding: 2px;\n  background-color: darkgray;\n  width: 90%;\n  width: 27%;\n  float:right;\n}\n\n\n.org-list-element{\n  margin-bottom: 5px;\n  border-bottom: 1px solid aliceblue;\n  padding:7px;\n}\n\n\n.org-list-element:hover{\n  background-color: #dfe9ff;\n}\n\n\n.profile-pic{\n  position: absolute;\n  left:10px;\n  top: 18px;\n  background-size: cover;\n  height: 60px;\n  width: 60px;\n  background-color: whitesmoke;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n\n.user-org-details{\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n\n\n.org-list{\n  overflow: auto;\n  z-index: 1;\n  width: 95%;\n  height: calc(100vh - 160px);\n  background-color: white;\n  position: absolute;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"profile-container-desktop\" >\n    <img class=\"logo\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n    <img class=\"profile-pic\" src=\"../../../../images/default-profile.png\" alt=\"profile\"  >\n    <div style=\"display: grid;position: absolute;top:81px;left: 23px;color:white\">\n      <span style=\"font-size: 18px;margin-bottom: 3px;\">{{customerName}}</span>\n      <span style=\"font-size: 12px\">{{customerMobile}}</span>\n    </div>\n  </div>\n  <div style=\"margin: 10px 0px 10px 10px;overflow: auto;max-height: 250px;\" >\n    <div class=\"org-list-element\" *ngFor=\"let currentOrg of orgList\" (click)=\"switchOrg(currentOrg,false)\" >\n      <div  style=\"padding: 5px;\" [style.background-color]=\"(currentOrgId === currentOrg['uuid']? 'lightblue': 'white')\">\n        <span >{{currentOrg['organisationName']}}</span><br>\n        <span style=\"font-size: 11px\" >{{currentOrg['orgId']}}</span>        \n      </div>\n    </div>\n    <div *ngIf=\"isShowGodFeatures\">\n      <div class=\"org-list-element\" (click)=\"switchOrg({uuid:'FRETRON_GOD_TRANSPORTER',type:'TRANSPORTER'},true)\" >\n        <div  style=\"padding: 5px;\" [style.background-color]=\"(currentOrgId === 'FRETRON_GOD_TRANSPORTER'? 'lightblue': 'white')\">\n          <span >SUPER USER TRANSPORTER</span>\n        </div>\n      </div>\n  \n      <div class=\"org-list-element\" (click)=\"switchOrg({uuid:'FRETRON_GOD_FO',type:'FLEET_OWNER'},true)\" >\n        <div  style=\"padding: 5px;\" [style.background-color]=\"(currentOrgId === 'FRETRON_GOD_FO'? 'lightblue': 'white')\">\n          <span>SUPER USER FLEET OWNER</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-bottom: -8px;width: 95%;text-align: right;\" >\n    <button  (click)=\"goToAddOrganisation()\" md-button >Add Organisation</button>\n    <button  (click)=\"logout();\" md-button >Logout</button>\n  </div>\n</div>\n\n\n<!-- ************************ mobile view code start here *2* ************************************** -->\n<!--<div *ngIf=\"viewType =='mobile'\" class=\"profile-container\" >-->\n  <!--<img class=\"logo\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >-->\n  <!--<img class=\"profile-pic\" src=\"../../../../images/default-profile.png\" alt=\"profile\"  >-->\n  <!--<div style=\"display: grid;position: absolute;top:81px;left: 23px;color:white\">-->\n    <!--<span style=\"font-size: 18px;margin-bottom: 3px;\">{{customerName}}</span>-->\n    <!--<span style=\"font-size: 12px\">{{customerMobile}}</span>-->\n  <!--</div>-->\n  <!--<div class=\"user-org-details\" (click)=\"isOrgList =!isOrgList\">-->\n    <!--<button md-icon-button style=\"cursor: pointer;z-index: 1000;font-size:15px;color: #ffffff\"   >-->\n      <!--<span *ngIf=\"isOrgList\" >&#9650;</span>-->\n      <!--<span *ngIf=\"!isOrgList\">&#9660;</span>-->\n    <!--</button>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<div *ngIf=\"viewType =='mobile' && isOrgList\" class=\"org-list\">-->\n  <!--<div class=\"org-list-element\" *ngFor=\"let currentOrg of orgList\" (click)=\"switchOrg(currentOrg)\" >-->\n    <!--<span >{{currentOrg['organisationName']}}</span>-->\n  <!--</div>-->\n<!--</div>-->\n<!-- ************************ end mobile view code start here  ************************************** -->\n"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var logout_service_1 = __webpack_require__("../../../../../src/app/services/logout-service.ts");
var UserProfile = (function () {
    function UserProfile(zone, http, localStorageService, logoutService, _router, _store) {
        this.zone = zone;
        this.http = http;
        this.localStorageService = localStorageService;
        this.logoutService = logoutService;
        this._router = _router;
        this._store = _store;
        this.unSub_customerDetails = null;
        this.customerName = '';
        this.customerMobile = '';
        this.currentOrgId = '';
        this.userDetails = null;
        this.isShowGodFeatures = false;
        this.viewType = '';
        this.isOrgList = false;
        this.authToken = null;
        this.orgList = ['fretron traccar', 'Fretron vehicle Tracking'];
        this.defaultHeaders = new http_1.Headers();
        this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var auth_token = this.localStorageService.get("AUTH_TOKEN");
        console.log(auth_token);
        if (auth_token != null) {
            this.authToken = auth_token;
            this.refreshUser();
        }
    } // constructor close
    UserProfile.prototype.ngOnDestroy = function () {
    };
    UserProfile.prototype.refreshUser = function () {
        console.log(this.authToken);
        this.customerDetail(this.authToken);
        // this.organizationServices.getOrgList.emit(auth_token);
        this.getOrganization(this.authToken);
    };
    UserProfile.prototype.ngOnInit = function () {
        this.viewType = this.view;
        // console.log(this.view);
    };
    UserProfile.prototype.customerDetail = function (token) {
        var userDetails = {};
        this.userDetails = null;
        var base64Url = token.split('.')[0];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['userType'] = JSON.parse(window.atob(base64));
        base64Url = token.split('.')[1];
        base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['details'] = JSON.parse(window.atob(base64));
        userDetails['details']['id'] = userDetails['details']['userId'];
        this.userDetails = userDetails;
        this.customerName = userDetails['details']['name'];
        this.customerMobile = userDetails['details']['mobileNumber'];
        this.currentOrgId = userDetails['details']['orgId'];
        if (userDetails['details']['isGod'] != null || userDetails['details']['isGod'] != undefined) {
            console.log("isGod not null or undefined");
            console.log(userDetails['details']['isGod']);
            if (userDetails['details']['isGod'] == true) {
                this.isShowGodFeatures = true;
            }
        }
        this.localStorageService.set("ORGID", this.currentOrgId);
        console.log(this.userDetails);
        this._store.dispatch({ type: "CUSTOMER_DETAILS", payload: { customer: this.userDetails } });
    };
    UserProfile.prototype.logout = function () {
        this.logoutService.logout();
    };
    UserProfile.prototype.switchOrg = function (currentOrg, isGodOrg) {
        var _this = this;
        if (!isGodOrg) {
            console.log(currentOrg);
            console.log(this.userDetails);
            var path = environment_1.paths.SWITCH_ORG_PATH + currentOrg['uuid'];
            var headers = new http_1.Headers(this.defaultHeaders.toJSON());
            headers.set('Content-Type', 'application/json');
            var bearerToken = "Bearer " + this.authToken;
            headers.set('authorization', bearerToken);
            var requestOptions = new http_2.RequestOptions({
                method: http_2.RequestMethod.Get,
                headers: headers,
            });
            console.log(path);
            console.log(bearerToken);
            this.http.request(path, requestOptions).map(function (response) {
                // console.log(response.status);
                // console.log(response);
                return response.json();
            }).subscribe(function (response) {
                console.log(response);
                if (response['status'] >= 200 && response['status'] < 300) {
                    if (_this.userDetails['details']['orgType'] == currentOrg['type']) {
                        _this.localStorageService.clearAll();
                        _this.localStorageService.set("AUTH_TOKEN", response['token']);
                        _this.authToken = _this.localStorageService.get("AUTH_TOKEN");
                        _this.refreshUser();
                        _this.zone.runOutsideAngular(function () {
                            location.reload();
                        });
                    }
                    else {
                        _this.localStorageService.clearAll();
                        _this.localStorageService.set("AUTH_TOKEN", response['token']);
                        var path_1 = 'http://' + window.location.hostname + ':' + window.location.port;
                        console.log(path_1 + "/transporter");
                        if (currentOrg['type'] == 'TRANSPORTER') {
                            window.location.replace(path_1 + "/transporter");
                        }
                        else if (currentOrg['type'] == 'FLEET_OWNER') {
                            window.location.replace(path_1 + "/tracknet/vtsdashboard");
                        }
                        else if (currentOrg['type'] == 'FLEET_OWNER_AGENT') {
                            // window.location.replace(path+"/tracknet/vtsdashboard");
                        }
                        //@todo  add only if org type
                        // this.zone.runOutsideAngular(() => {
                        //   location.reload();
                        // });
                    }
                }
                else {
                    console.log("error");
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
            });
        }
        if (isGodOrg) {
            console.log("is God User user");
            console.log(currentOrg);
            console.log(this.userDetails);
            var path = environment_1.paths.SWITCH_ORG_PATH + currentOrg['uuid'];
            var headers = new http_1.Headers(this.defaultHeaders.toJSON());
            headers.set('Content-Type', 'application/json');
            var bearerToken = "Bearer " + this.authToken;
            headers.set('authorization', bearerToken);
            var requestOptions = new http_2.RequestOptions({
                method: http_2.RequestMethod.Get,
                headers: headers,
            });
            console.log(path);
            console.log(bearerToken);
            this.http.request(path, requestOptions).map(function (response) {
                // console.log(response.status);
                // console.log(response);
                return response.json();
            }).subscribe(function (response) {
                console.log(response);
                if (response['status'] >= 200 && response['status'] < 300) {
                    if (_this.userDetails['details']['orgType'] == currentOrg['type']) {
                        _this.localStorageService.clearAll();
                        _this.localStorageService.set("AUTH_TOKEN", response['token']);
                        _this.authToken = _this.localStorageService.get("AUTH_TOKEN");
                        _this.refreshUser();
                        _this.zone.runOutsideAngular(function () {
                            location.reload();
                        });
                    }
                    else {
                        _this.localStorageService.clearAll();
                        _this.localStorageService.set("AUTH_TOKEN", response['token']);
                        var path_2 = 'http://' + window.location.hostname + ':' + window.location.port;
                        console.log(path_2 + "/transporter");
                        if (currentOrg['type'] == 'TRANSPORTER') {
                            window.location.replace(path_2 + "/transporter");
                        }
                        else if (currentOrg['type'] == 'FLEET_OWNER') {
                            window.location.replace(path_2 + "/tracknet/vtsdashboard");
                        }
                        else if (currentOrg['type'] == 'FLEET_OWNER_AGENT') {
                            // window.location.replace(path+"/tracknet/vtsdashboard");
                        }
                        //@todo  add only if org type
                        // this.zone.runOutsideAngular(() => {
                        //   location.reload();
                        // });
                    }
                }
                else {
                    console.log("error");
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
            });
        }
    }; //close switch org
    //get organization
    UserProfile.prototype.getOrganization = function (token) {
        var _this = this;
        this.orgList = [];
        var path = environment_1.paths.ORGANIZATION_LIST_PATH;
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            // console.log(response);
            return response.json();
        }).subscribe(function (response) {
            console.log(response);
            if (response['status'] >= 200 && response['status'] < 300) {
                _this.orgList = response['list'];
                console.log(_this.orgList);
            }
            else {
                console.log(response['error']);
            }
        }, function (err) {
            console.log(err);
            console.log(err.json());
        });
    };
    UserProfile.prototype.goToAddOrganisation = function () {
        this._router.navigate(['dashboard/addOrganisation']);
    };
    return UserProfile;
}()); // class close
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserProfile.prototype, "view", void 0);
UserProfile = __decorate([
    core_1.Component({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object, typeof (_d = typeof logout_service_1.LogoutServices !== "undefined" && logout_service_1.LogoutServices) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _f || Object])
], UserProfile);
exports.UserProfile = UserProfile;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/filters/deviceFilter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DeviceFilter = (function () {
    function DeviceFilter() {
    }
    //TODO *****************************
    DeviceFilter.prototype.transform = function (input, config) {
        if (config === undefined || config[1] == undefined || config[0] == undefined)
            return [];
        if (!Array.isArray(input))
            return input;
        if (config[1] == '') {
            return input;
        }
        console.log(config);
        console.log(config);
        var list = input.filter(function (u) { return u['device'][config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1; });
        {
            return list;
        }
    };
    return DeviceFilter;
}());
DeviceFilter = __decorate([
    core_1.Pipe({ name: "deviceType", pure: true })
], DeviceFilter);
exports.DeviceFilter = DeviceFilter;
//# sourceMappingURL=deviceFilter.js.map

/***/ }),

/***/ "../../../../../src/app/filters/filter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (input, config) {
        if (config === undefined || config[2] === undefined || config[1] == undefined || config[0] == undefined)
            return [];
        if (!Array.isArray(input))
            return input;
        if (config[2] == '') {
            return input;
        }
        console.log(config);
        var list = input.filter(function (u) { return ("" + u[config[1]]).toUpperCase().indexOf(("" + config[2]).toUpperCase()) != -1 || ("" + u[config[0]]).toUpperCase().indexOf(("" + config[2]).toUpperCase()) != -1; });
        {
            console.log(list);
            return list;
        }
    };
    return SearchFilter;
}());
SearchFilter = __decorate([
    core_1.Pipe({ name: 'searchFilter', pure: true })
], SearchFilter);
exports.SearchFilter = SearchFilter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "../../../../../src/app/filters/searchDeviceFilter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchDeviceFilter = (function () {
    function SearchDeviceFilter() {
    }
    SearchDeviceFilter.prototype.transform = function (input, config) {
        if (config === undefined || config[1] == undefined || config[0] == undefined)
            return [];
        if (!Array.isArray(input))
            return input;
        if (config[2] == '') {
            return input;
        }
        var list = input.filter(function (u) { return ("" + u['device'][config[0]]).toUpperCase().indexOf(("" + config[1]).toUpperCase()) != -1; });
        {
            return list;
        }
    };
    return SearchDeviceFilter;
}());
SearchDeviceFilter = __decorate([
    core_1.Pipe({ name: 'searchDeviceFilter', pure: true })
], SearchDeviceFilter);
exports.SearchDeviceFilter = SearchDeviceFilter;
//# sourceMappingURL=searchDeviceFilter.js.map

/***/ }),

/***/ "../../../../../src/app/filters/shipmentFilter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ShipmentFilter = (function () {
    function ShipmentFilter() {
    }
    //TODO *****************************
    ShipmentFilter.prototype.transform = function (input, config) {
        if (config === undefined || config[1] == undefined || config[0] == undefined)
            return [];
        if (!Array.isArray(input))
            return input;
        if (config[1] == '') {
            return input;
        }
        console.log(input);
        console.log(config);
        var list = input.filter(function (u) { return u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1; });
        {
            return list;
        }
    };
    return ShipmentFilter;
}());
ShipmentFilter = __decorate([
    core_1.Pipe({ name: "shipmentType", pure: true })
], ShipmentFilter);
exports.ShipmentFilter = ShipmentFilter;
//# sourceMappingURL=shipmentFilter.js.map

/***/ }),

/***/ "../../../../../src/app/filters/sortFilter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SortFilter = (function () {
    function SortFilter() {
    }
    SortFilter.prototype.transform = function (input, config) {
        input.sort(function (a, b) {
            if (a[config] < b[config]) {
                return -1;
            }
            else if (a[config] > b[config]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return input;
    };
    return SortFilter;
}());
SortFilter = __decorate([
    core_1.Pipe({ name: 'orderBy', pure: false })
], SortFilter);
exports.SortFilter = SortFilter;
//# sourceMappingURL=sortFilter.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/info_store.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { RouterState } from '@ngrx/router-store';
// export const allShipmentList = 'allShipmentList';
function token(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'token':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.token = token;
function shipmentIdList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SHIPMENT_ID_LIST':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.shipmentIdList = shipmentIdList;
function allShipmentList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'All_SHIPMENT_LIST':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.allShipmentList = allShipmentList;
function shipmentDetail(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SHIPMENT_DETAIL':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.shipmentDetail = shipmentDetail;
function newShipment(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'NEW_SHIPMENT':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.newShipment = newShipment;
function allDevicesList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'All_DEVICES_LIST':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.allDevicesList = allDevicesList;
function checkVehicle(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CHECK_VEHICLE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.checkVehicle = checkVehicle;
function switchShipment(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SWITCH_SHIPMENT':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.switchShipment = switchShipment;
function deviceDetails(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'DEVICE_DETAILS':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.deviceDetails = deviceDetails;
function addDevice(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'ADD_DEVICE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.addDevice = addDevice;
function closeDialog(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case 'CLOSE_DIALOG':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
exports.closeDialog = closeDialog;
function createOrgRes(state, action) {
    console.log("In createOrgRes in Info store");
    switch (action.type) {
        case "CREATE_ORG_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.createOrgRes = createOrgRes;
function switchOrganisationResp(state, action) {
    console.log("In switchOrganisationResp in Info store");
    switch (action.type) {
        case "SWITCH_ORGANISATION_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.switchOrganisationResp = switchOrganisationResp;
function customerDetails(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "CUSTOMER_DETAILS": {
            console.log("customer Details value in store");
            return action.payload;
        }
        default:
            return state;
    }
}
exports.customerDetails = customerDetails;
function shipmentGroupList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "SHIPMENT_GRP_LIST": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.shipmentGroupList = shipmentGroupList;
function createGroupRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "CREATE_GROUP_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.createGroupRes = createGroupRes;
function authorization(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "AUTHORIZATION": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.authorization = authorization;
// export function checkDevice(state: any = null, action:Action) {
//   switch (action.type) {
//     case 'CHECK_DEVICE':
//     {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// }
// export function avilableDevicesList(state: any = null, action:Action) {
//   switch (action.type) {
//     case 'AVALABLE_DEVICE_LIST':
//     {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// }
// export function repairingDevicesList(state: any = null, action:Action) {
//   switch (action.type) {
//     case 'REPAIRING_DEVICE_LIST':
//     {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// }
//# sourceMappingURL=info_store.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/user-management-store.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deleteUserResponse(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "DELETE_USER_SERVICE_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.deleteUserResponse = deleteUserResponse;
function getAllUserList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "GET_ALL_USERS_LIST": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.getAllUserList = getAllUserList;
function updateUserStatusResponse(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "UPDATE_USER_STATUS_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.updateUserStatusResponse = updateUserStatusResponse;
function existingUserResponse(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "EXISTING_USER_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
exports.existingUserResponse = existingUserResponse;
// export function createOrganisationResponse(state: any = null, action:Action) {
//
//   switch (action.type) {
//     case "CREATE_ORGANISATION_RESPONSE" : {
//       return action.payload;
//     }
//
//     default:
//       return state;
//   }
//
// }
// export function switchOrgResp(state: any = null, action:Action) {
//
//   switch (action.type) {
//     case "SWITCH_ORG_RESPONSE" : {
//       return action.payload;
//     }
//
//     default:
//       return state;
//   }
//
// }
//
//# sourceMappingURL=user-management-store.js.map

/***/ }),

/***/ "../../../../../src/app/router-module/router-module-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var shipment_status_component_1 = __webpack_require__("../../../../../src/app/components/shipment-status/shipment-status.component.ts");
var device_dashboard_component_1 = __webpack_require__("../../../../../src/app/components/device-dashboard/device-dashboard.component.ts");
var new_shipment_component_1 = __webpack_require__("../../../../../src/app/components/new-shipment/new-shipment.component.ts");
var manual_shipment_status_component_1 = __webpack_require__("../../../../../src/app/components/manual-shipment-status/manual-shipment-status.component.ts");
var add_organisation_component_1 = __webpack_require__("../../../../../src/app/components/add-organisation/add-organisation.component.ts");
var settings_component_component_1 = __webpack_require__("../../../../../src/app/components/settings-component/settings-component.component.ts");
var manage_organisation_component_1 = __webpack_require__("../../../../../src/app/components/manage-organisation/manage-organisation.component.ts");
// import {UserManagementComponent} from "../components/user-management/user-management.component";
var shipment_management_component_1 = __webpack_require__("../../../../../src/app/components/shipment-management/shipment-management.component.ts");
// import {EditShipmentGroupsComponent} from "../components/shipment-management/edit-shipment-groups/edit-shipment-groups.component";
// import {ShipmentGroupsListComponent} from "../components/shipment-management/shipment-groups-list/shipment-groups-list.component";
// import {ShipmentListInGroupComponent} from "../components/shipment-management/shipment-list-in-group/shipment-list-in-group.component";
var user_management_console_component_1 = __webpack_require__("../../../../../src/app/components/user-management-console/user-management-console.component.ts");
var users_list_component_1 = __webpack_require__("../../../../../src/app/components/user-management-console/users-list/users-list.component.ts");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];
var childRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'shipmentStatus', pathMatch: 'full' },
            { path: 'shipmentStatus', component: shipment_status_component_1.ShipmentStatusComponent,
                children: [
                    // {path: '', redirectTo: 'shipmentTable', pathMatch: 'full'},
                    { path: 'selectedVehicle', component: manual_shipment_status_component_1.ManualShipmentStatusComponent }
                ] },
            // {path: 'shipmentDetails', component: ShipmentDetailsComponent}
            { path: 'deviceDashboard', component: device_dashboard_component_1.DeviceDashboard },
            { path: 'newShipment', component: new_shipment_component_1.NewShipment },
            { path: 'addOrganisation', component: add_organisation_component_1.AddOrganisationComponent },
            { path: 'settingsComponent', component: settings_component_component_1.SettingsComponentComponent },
            { path: 'manageOrganisation', component: manage_organisation_component_1.ManageOrganisationComponent },
            // {path: 'userManagementComponent', component: UserManagementComponent},
            { path: 'shipmentManagementComponent', component: shipment_management_component_1.ShipmentManagementComponent },
            // {path: 'shipmentGroupsList', component: ShipmentGroupsListComponent},
            // {path: 'editShipmentGroup', component: EditShipmentGroupsComponent},
            // {path: 'shipmentListInGroup', component: ShipmentListInGroupComponent},
            { path: 'userManagementConsole', component: user_management_console_component_1.UserManagementConsoleComponent },
            { path: 'usersList', component: users_list_component_1.UsersListComponent },
        ]
    }
];
var RouterModuleRoutingModule = (function () {
    function RouterModuleRoutingModule() {
    }
    return RouterModuleRoutingModule;
}());
RouterModuleRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes),
            router_1.RouterModule.forChild(childRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], RouterModuleRoutingModule);
exports.RouterModuleRoutingModule = RouterModuleRoutingModule;
//# sourceMappingURL=router-module-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/authorization-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var AuthorizationServices = (function () {
    function AuthorizationServices(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        // protected basePath = 'http://35.189.162.187:8080/command';
        this.defaultHeaders = new http_1.Headers();
        this.token = '';
        this.unSub_token = null;
        this.tokenAuthorization = new core_1.EventEmitter();
        this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        //************ login  ***************************************************
        this.tokenAuthorization.subscribe(function (token) {
            // const path =paths.PATH+':8094/authorize';
            // const path =paths.PATH+':8099/user/authorize';
            var path = environment_1.TEST_BASE_IP.IP + '/user/authorize';
            _this.checkTokenAuthorization(path, token).subscribe(function (response) {
                console.log(response);
                // console.log(response['error']);
                if (response['error'] == 'X') {
                    _this.localStorageService.remove("TOKEN");
                    _this.localStorageService.remove("AUTH_TOKEN");
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { valid: false, error: 'X', msg: "error occur" } });
                    return;
                }
                var res = response;
                if (res['status'] == 200) {
                    _this.localStorageService.set("TOKEN", token);
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { valid: true, error: '', msg: "User authorized" } });
                    var customer = _this.customerDetail(token);
                    console.log("this is token in after valid authorization");
                    console.log(customer);
                    _this._store.dispatch({ type: "CUSTOMER_DETAILS", payload: { error: '', customer: customer } });
                }
                else {
                    _this.localStorageService.remove("TOKEN");
                    _this.localStorageService.remove("AUTH_TOKEN");
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { valid: false, error: 'X', msg: "Unauthorised user in response" } });
                }
            }, function (err) {
                _this.localStorageService.remove("TOKEN");
                _this.localStorageService.remove("AUTH_TOKEN");
                _this._store.dispatch({ type: "AUTHORIZATION", payload: { valid: false, error: 'X', msg: err.json() } });
                // this.localStorageService.set("TOKEN",false);
                console.log(err);
                console.log(err.json());
            });
        });
    } // constructor close here
    AuthorizationServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  token authorization**********************
    AuthorizationServices.prototype.checkTokenAuthorization = function (path, token) {
        // let queryParameters = new URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + token;
        headers.set('authorization', bearerToken);
        console.log(path);
        // console.log(headers);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("not 200");
                return { error: 'X' };
            }
            // let resObj={
            //   name : "dummy response for test",
            //   status : 200,
            //   valid : true,
            //   error : ''
            // }
            // return resObj;
        });
    };
    AuthorizationServices.prototype.customerDetail = function (token) {
        // console.log(token);
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    return AuthorizationServices;
}()); // class close
AuthorizationServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], AuthorizationServices);
exports.AuthorizationServices = AuthorizationServices;
var _a, _b, _c;
//# sourceMappingURL=authorization-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/device-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
// import {PATH,DETAIL,CREATESHIPMENT} from "./path-services";
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
// import {KEY} from "./config-services"
var DeviceServices = (function () {
    function DeviceServices(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new http_1.Headers();
        this.token = '';
        this.allDevicesList = new core_1.EventEmitter();
        //   public allActiveDevicesList=new EventEmitter();
        //   public allAvalabileDevicesList=new EventEmitter();
        //   public allRepairingDevicesList=new EventEmitter();
        //   public deviceDetail=new EventEmitter();
        this.addDevice = new core_1.EventEmitter();
        this.token = this.localStorageService.get("AUTH_TOKEN");
        this.allDevicesList.subscribe(function () {
            // this.token ='eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI2NTU1NDksInVzZXJJZCI6IjdjYjQwYWQ2LWVmZjMtNGJiNS05MmE5LTA4ZDEwMWU4N2E2NSIsImVtYWlsIjoic3VuaWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDg1NDMyOTUxIiwib3JnSWQiOiI5ODJlNjczMy1lMTMyLTRhOWMtOTM4OC00ZmE0NzQ0Zjg3ODMiLCJuYW1lIjoiU3VuaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIifQ.ZUgT6OvjOtkMqzeXMEa9aCpH3QqJS_KnqSAMjWIXAes';
            // close remove it for testing purpose only
            console.log(_this.token);
            var path = environment_1.paths.DEVICE_LIST_PATH;
            // console.log(path);
            _this.getDevicesList(path).subscribe(function (response) {
                console.log(response);
                if (response['status'] >= 200 && response['status'] < 300) {
                    _this._store.dispatch({ type: "All_DEVICES_LIST", payload: { error: '', res: response['list'] } });
                }
                else {
                    _this._store.dispatch({ type: "All_DEVICES_LIST", payload: { error: 'X', errorMsg: "Server error " + response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "All_DEVICES_LIST", payload: { error: 'X', errorMsg: 'http error ' + err } });
            });
        });
        this.addDevice.subscribe(function (device) {
            var path = environment_1.paths.DEVICE_ADD_PATH;
            _this.addDeviceService(path, device).subscribe(function (response) {
                //  console.log(response);
                if (response['status'] >= 200 && response['status'] < 300) {
                    _this._store.dispatch({ type: "ADD_DEVICE", payload: { error: '', res: response } });
                    _this.allDevicesList.emit();
                }
                else {
                    _this._store.dispatch({ type: "ADD_DEVICE", payload: { error: 'X', errorMsg: "Server error " + response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "ADD_DEVICE", payload: { error: 'X', errorMsg: 'http error ' + err } });
            });
        });
        // this.deviceDetail.subscribe(()=> {
        //   //   let path ='';
        //   //  this.getDeviceDetail(path).subscribe(response =>{
        //   //   //  console.log(response);
        //   //    let res=response;
        //   //    this._store.dispatch({type: "DEVICE_DETAILS",payload:{error:'',data:res}});
        //   //  },err=>{
        //   //    console.log(err.json());
        //   //  });
        //  });
        //  this.allActiveDevicesList.subscribe(()=> {
        //     let path ='';
        //    this.getActiveDeviceList(path).subscribe(response =>{
        //     //  console.log(response);
        //      let res=response;
        //      this._store.dispatch({type: "ACTIVE_DEVICE_LIST",payload:{error:'',data:res}});
        //    },err=>{
        //      console.log(err.json());
        //    });
        //  });
        //  this.allAvalabileDevicesList.subscribe(()=> {
        //     let path ='';
        //    this.getAvailableDeviceList(path).subscribe(response =>{
        //     //  console.log(response);
        //      let res=response;
        //      this._store.dispatch({type: "AVALABLE_DEVICE_LIST",payload:{error:'',data:res}});
        //    },err=>{
        //      console.log(err.json());
        //    });
        //  });
        //  this.allRepairingDevicesList.subscribe(()=> {
        //     let path ='';
        //    this.getRepairingDeviceList(path).subscribe(response =>{
        //     //  console.log(response);
        //      let res=response;
        //      this._store.dispatch({type: "REPAIRING_DEVICE_LIST",payload:{error:'',data:res}});
        //    },err=>{
        //      console.log(err.json());
        //    });
        //  });
    } // constructor close here
    DeviceServices.prototype.ngOnDestroy = function () {
    };
    // ******************  all device list *******************h
    // public getDevicesList(path){
    //   console.log(path);
    //   let headers = new Headers(this.defaultHeaders.toJSON());
    //   headers.set('Content-Type', 'application/json');
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Get,
    //     headers:headers,
    //   });
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     console.log(response);
    //       return response.json();
    //   });
    // }
    //
    DeviceServices.prototype.getDevicesList = function (path) {
        var headers = new http_1.Headers();
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("not 200");
                return { error: 'X' };
            }
        });
    };
    DeviceServices.prototype.addDeviceService = function (path, device) {
        console.log(path);
        console.log(device);
        var headers = new http_1.Headers();
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: device,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("not 200");
                return { error: 'X' };
            }
        });
    };
    return DeviceServices;
}()); // class close
DeviceServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], DeviceServices);
exports.DeviceServices = DeviceServices;
var _a, _b, _c;
//# sourceMappingURL=device-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/logout-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var LogoutServices = (function () {
    function LogoutServices(localStorageService, _store) {
        this.localStorageService = localStorageService;
        this._store = _store;
    } // constructor close here
    LogoutServices.prototype.ngOnDestroy = function () {
    };
    LogoutServices.prototype.logout = function () {
        console.log(localStorage);
        // this.localStorageService.remove("TOKEN");
        // this.localStorageService.remove("USER-MOB-NO");
        // this.localStorageService.remove("COUNTRY-CODE");
        // this.localStorageService.remove("VEHICLE_TIMELINE_REQUEST_OBJ");
        // this.localStorageService.remove("VEHICLE-TRIP-DETAIL-OBJ"); //created in vehicle trip status details
        // this.localStorageService.remove("SELECTED-LOCATION-HIS-VEHICLE");
        // this._store.dispatch({type: "LOGOUT",payload:null});
        this.localStorageService.clearAll();
        this._store.dispatch({ type: "CUSTOMER_DETAILS", payload: null });
        // this._store.dispatch({type: "CURRENT_TRIP_VEHICLE", payload:null});
        // this._store.dispatch({type: "AUTHORIZATION", payload: null});
        // this._store.dispatch({type: "VEHICLE_LIST",payload:null});
        // this._store.dispatch({type: "TOKEN",payload:null});
        // this._store.dispatch({type: "AUTH_TOKEN",payload:null});
        var path = 'http://' + window.location.hostname + ':' + window.location.port;
        window.location.replace(path + "/fretron-auth/fretronLogin");
    };
    return LogoutServices;
}()); // class close
LogoutServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object])
], LogoutServices);
exports.LogoutServices = LogoutServices;
var _a, _b;
//# sourceMappingURL=logout-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/manage-organisation-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var ManageOrganisationService = (function () {
    function ManageOrganisationService(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.createOrg = new core_1.EventEmitter();
        this.switchOrganisations = new core_1.EventEmitter();
        this.createOrg.subscribe(function (addOrgObj) {
            _this.token = _this.localStorageService.get("AUTH_TOKEN");
            var path = environment_1.paths.CREATE_ORGANISATION_PATH;
            console.log(path);
            _this.createOrganisation(path, addOrgObj).subscribe(function (response) {
                console.log(response);
                if (response['status'] >= 200 && response['status'] < 300) {
                    console.log("IN IF");
                    _this._store.dispatch({ type: "CREATE_ORG_RESPONSE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "CREATE_ORG_RESPONSE", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "CREATE_ORG_RESPONSE", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        this.switchOrganisations.subscribe(function (orgId) {
            _this.token = _this.localStorageService.get("AUTH_TOKEN");
            var path = environment_1.paths.SWITCH_ORG_PATH + orgId;
            console.log(path);
            _this.switchOrganisation(path, orgId).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SWITCH_ORGANISATION_RESPONSE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "SWITCH_ORGANISATION_RESPONSE", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SWITCH_ORGANISATION_RESPONSE", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
    }
    ManageOrganisationService.prototype.ngOnDestroy = function () {
    };
    ManageOrganisationService.prototype.createOrganisation = function (path, addOrgObj) {
        var headers = new http_1.Headers();
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: addOrgObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("not 200");
                return { error: 'X' };
            }
        });
    };
    ManageOrganisationService.prototype.switchOrganisation = function (path, switchOrgId) {
        var headers = new http_1.Headers();
        console.log(this.token);
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("not 200");
                return { error: 'X' };
            }
        });
    };
    return ManageOrganisationService;
}());
ManageOrganisationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], ManageOrganisationService);
exports.ManageOrganisationService = ManageOrganisationService;
var _a, _b, _c;
//# sourceMappingURL=manage-organisation-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/manual-shipment-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
// import {ADDSTOP,PICKUP,DELIVERY} from "./path-services";
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var shipment_services_1 = __webpack_require__("../../../../../src/app/services/shipment-services.ts");
// import {KEY} from "./config-services"
var ManualShipmentServices = (function () {
    function ManualShipmentServices(http, _store, localStorgeService, shipmentServices) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorgeService = localStorgeService;
        this.shipmentServices = shipmentServices;
        this.defaultHeaders = new http_1.Headers();
        this.token = '';
        this.pickup = new core_1.EventEmitter();
        this.addStop = new core_1.EventEmitter();
        this.delivery = new core_1.EventEmitter();
        /***************get shipment list ***************/
        this.token = this.localStorgeService.get("AUTH_TOKEN");
        /***************set pickup ***************/
        this.pickup.subscribe(function (pickUp) {
            var path = environment_1.paths.SHIPMENT_PATH + '/missing/pickup';
            console.log(path);
            _this.setPickup(path, pickUp).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
        /***************set addStop ***************/
        this.addStop.subscribe(function (addstop) {
            var path = environment_1.paths.SHIPMENT_PATH + '/addstop';
            _this.setAddStop(path, addstop).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
        /***************set delivery ***************/
        this.delivery.subscribe(function (deliveryy) {
            var path = environment_1.paths.SHIPMENT_PATH + '/missing/delivery';
            _this.setDelivery(path, deliveryy).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
    } // constructor close here
    ManualShipmentServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  get shipmentId list **********************
    ManualShipmentServices.prototype.getIdList = function (path) {
        var _this = this;
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            _this.shipmentServices.getShipmentList.emit();
            return response.json();
        });
    };
    // ***********************  add Stop **********************
    ManualShipmentServices.prototype.setAddStop = function (path, value) {
        var _this = this;
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.shipmentServices.getShipmentList.emit();
            }, 1500);
            return response.json();
        });
    };
    // ***********************  pickUp **********************
    ManualShipmentServices.prototype.setPickup = function (path, value) {
        var _this = this;
        console.log(path);
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.shipmentServices.getShipmentList.emit();
            }, 1500);
            return response.json();
        });
    };
    // ***********************  delivery **********************
    ManualShipmentServices.prototype.setDelivery = function (path, value) {
        var _this = this;
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.shipmentServices.getShipmentList.emit();
            }, 1500);
            return response.json();
        });
    };
    return ManualShipmentServices;
}()); // class close
ManualShipmentServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object, typeof (_d = typeof shipment_services_1.ShipmentServices !== "undefined" && shipment_services_1.ShipmentServices) === "function" && _d || Object])
], ManualShipmentServices);
exports.ManualShipmentServices = ManualShipmentServices;
var _a, _b, _c, _d;
//# sourceMappingURL=manual-shipment-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shipment-mgmt-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by amit8.kumar on 06-12-2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var ShipmentMgmtService = (function () {
    function ShipmentMgmtService(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new http_1.Headers();
        // public deleteUser = new EventEmitter();
        this.getAllShipmentGroupsList = new core_1.EventEmitter();
        // public getAllVehiclesByGroup = new EventEmitter();
        // public getAllVehiclesByOrg = new EventEmitter();
        // public deleteGroup = new EventEmitter();
        // public editSelecetedVehicle = new EventEmitter();
        // public deleteSelecetedVehicle = new EventEmitter();
        this.createNewShipmentGroup = new core_1.EventEmitter();
        this.token = this.localStorageService.get("AUTH_TOKEN");
        //@todo handle error cases
        this.getAllShipmentGroupsList.subscribe(function (orgId) {
            // let path=paths.CONFIGURE_ALERTS_PATH+"/all?"+customerId;
            var path = environment_1.paths.MANAGE_VEHICLES_GRP_PATH + "/get";
            // console.log(path);
            _this.getAllShipmentGroup(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SHIPMENT_GRP_LIST", payload: { error: '', res: response['list'] } });
                }
                else {
                    _this._store.dispatch({ type: "SHIPMENT_GRP_LIST", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SHIPMENT_GRP_LIST", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        // this.getAllVehiclesByGroup.subscribe((groupId) => {
        //   // let path=paths.CONFIGURE_ALERTS_PATH+"/all?"+customerId;
        //   let path = paths.GET_VEHICLES_BY_GROUP_PATH + "/group/vehicle?groupId=" + groupId;
        //   console.log(path);
        //   this.getAllVehiclesByGroups(path).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "GET_ALL_VEHICLES_BY_GROUP", payload: response});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        // this.getAllVehiclesByOrg.subscribe((orgId) => {
        //   // let path=paths.CONFIGURE_ALERTS_PATH+"/all?"+customerId;
        //   let path = paths.GET_VEHICLES_BY_ORG_PATH + "/org/vehicle?orgId="+orgId;
        //   console.log(path);
        //   this.getAllVehicleListByOrg(path).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "GET_ALL_VEHICLES_BY_ORG", payload: response});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        //@todo handle error cases
        // this.deleteGroup.subscribe((groupObj) => {
        //   let path = paths.MANAGE_VEHICLES_GRP_PATH + "/delete";
        //   console.log(path);
        //   console.log(groupObj);
        //   this.deleteSelectedGroup(groupObj, path).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "DELETE_GROUP_RESPONSE", payload: response});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        //@todo handle error cases
        // this.editSelecetedVehicle.subscribe((vehicleObj) => {
        //   let path = paths.EDIT_VEHICLE_PATH + "/update";
        //   console.log(path);
        //   console.log(vehicleObj);
        //   this.editVehicleDetails(vehicleObj, path).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "EDIT_VEHICLE_RESPONSE", payload: response});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        this.createNewShipmentGroup.subscribe(function (groupObj) {
            var path = environment_1.paths.MANAGE_VEHICLES_GRP_PATH + "/create";
            console.log(path);
            console.log(groupObj);
            _this.createNewGroup(groupObj, path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "CREATE_GROUP_RESPONSE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "CREATE_GROUP_RESPONSE", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err);
                _this._store.dispatch({ type: "CREATE_GROUP_RESPONSE", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        // this.addVehiclesToGroup.subscribe((groupObj) => {
        //   let path = paths.EDIT_VEHICLE_PATH + "/addgroup";
        //   console.log(path);
        //   console.log(groupObj);
        //   this.addVehiclesinGroup(groupObj, path).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "ADD_VEHICLES_IN_GROUP", payload: response});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        //
        // this.deleteSelecetedVehicle.subscribe((vehicleGroupObj) => {
        //   // let path=paths.CONFIGURE_ALERTS_PATH+"/all?"+customerId;
        //   let path = paths.EDIT_VEHICLE_PATH + "/deletegroup";
        //   console.log(path);
        //   this.deleteSelectedVehicleFromGroup(path,vehicleGroupObj).subscribe(response => {
        //     console.log(response);
        //     this._store.dispatch({type: "DELETE_VEHICLES_FROM_GROUP_RESPONSE", payload: "Deleted"});
        //   }, err => {
        //     console.log(err);
        //   });
        // });
        //
        //
    } //constructor close
    ShipmentMgmtService.prototype.ngOnDestroy = function () {
    };
    ShipmentMgmtService.prototype.getAllShipmentGroup = function (path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    // public getAllVehiclesByGroups(path){
    //   let headers = new Headers(this.defaultHeaders.toJSON());
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Get,
    //     headers: headers,
    //   });
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     // console.log(response.status);
    //     console.log(response);
    //     if(response.status ==200) {
    //       return response.json();
    //     }
    //
    //   });
    // }
    // public getAllVehicleListByOrg(path){
    //   let headers = new Headers(this.defaultHeaders.toJSON());
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Get,
    //     headers: headers,
    //   });
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     // console.log(response.status);
    //     console.log(response);
    //     if(response.status ==200) {
    //       return response.json();
    //     }
    //
    //   });
    // }
    //
    // public deleteSelectedVehicleFromGroup(path,vehicleGroupObj){
    //   let headers = new Headers(this.defaultHeaders.toJSON());
    //
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Post,
    //     headers: headers,
    //     body: vehicleGroupObj,
    //   });
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     // console.log(response.status);
    //     console.log(response);
    //     if(response.status ==200) {
    //       return response.json();
    //     }
    //
    //   });
    // }
    //
    // public deleteSelectedGroup(groupObj,path){
    //   let headers = new Headers(this.defaultHeaders.toJSON());
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Post,
    //     headers: headers,
    //     body: groupObj,
    //   });
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     // console.log(response.status);
    //     console.log(response);
    //     if(response.status ==200) {
    //       return response.json();
    //     }
    //
    //   });
    // }
    ShipmentMgmtService.prototype.createNewGroup = function (vehicleObj, path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: vehicleObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    return ShipmentMgmtService;
}());
ShipmentMgmtService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], ShipmentMgmtService);
exports.ShipmentMgmtService = ShipmentMgmtService;
var _a, _b, _c;
//# sourceMappingURL=shipment-mgmt-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/shipment-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
// import {PATH,DETAIL,CREATESHIPMENT,ADDSTOP,PICKUP,DELIVERY} from "./path-services";
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
// import {KEY} from "./config-services"
var ShipmentServices = (function () {
    function ShipmentServices(http, _store, localStorgeService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorgeService = localStorgeService;
        this.defaultHeaders = new http_1.Headers();
        this.token = '';
        this.getShipmentList = new core_1.EventEmitter();
        this.getShipmentDetail = new core_1.EventEmitter();
        this.createNewShipment = new core_1.EventEmitter();
        this.checkVehicle = new core_1.EventEmitter();
        // public checkDevice=new EventEmitter();
        this.switchShipmentDetail = new core_1.EventEmitter();
        /***************get shipment list ***************/
        this.token = this.localStorgeService.get("AUTH_TOKEN");
        this.getShipmentList.subscribe(function () {
            var path = environment_1.paths.SHIPMENT_PATH + '/dashboard';
            console.log(path);
            _this.getList(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "All_SHIPMENT_LIST", payload: { error: '', res: response['list'] } });
                }
                else {
                    _this._store.dispatch({ type: "All_SHIPMENT_LIST", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "All_SHIPMENT_LIST", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        /************* get shipment details  *************/
        this.getShipmentDetail.subscribe(function (id) {
            var path = environment_1.paths.SHIPMENT_PATH + '/detail/' + id;
            console.log(path);
            _this.getDetails(path).subscribe(function (response) {
                console.log(response['detail']);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SHIPMENT_DETAIL", payload: { error: '', res: response['detail'] } });
                }
                else {
                    _this._store.dispatch({ type: "SHIPMENT_DETAIL", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SHIPMENT_DETAIL", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        /************* create shipment   *************/
        this.createNewShipment.subscribe(function (shipment) {
            var path = environment_1.paths.SHIPMENT_PATH + '/create';
            console.log(path);
            _this.createShipment(path, shipment).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "NEW_SHIPMENT", payload: { error: '', res: response } });
                    setTimeout(function () {
                        _this.getShipmentList.emit();
                    }, 1500);
                }
                else {
                    _this._store.dispatch({ type: "NEW_SHIPMENT", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "NEW_SHIPMENT", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        /************* get shipment details  *************/
        /************* switch shipment   *************/
        this.switchShipmentDetail.subscribe(function (shipment) {
            var path = environment_1.paths.SHIPMENT_PATH + '/switch/trackmode';
            console.log(path);
            _this.switchShipment(path, shipment).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SWITCH_SHIPMENT", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "SWITCH_SHIPMENT", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "SWITCH_SHIPMENT", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        /*************check vehicle details  *************/
        this.checkVehicle.subscribe(function (id) {
            var path = environment_1.paths.CHECK_VEHICLE + '?registrationNumber=' + id;
            console.log(path);
            _this.getVehicle(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "CHECK_VEHICLE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "CHECK_VEHICLE", payload: { error: 'X', errorMsg: 'server error...' } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "CHECK_VEHICLE", payload: { error: 'X', errorMsg: "error occur " + err } });
            });
        });
        /*************check Device details  *************/
        // this.checkDevice.subscribe((id)=> {
        //   let path = paths.CHECK_DEVICE+'?imei='+id;
        //   console.log(path);
        //   this.getVehicle(path).subscribe(response =>{
        //     console.log(response);
        //     if(response.status >=200 && response.status < 300){
        //       this._store.dispatch({type: "CHECK_DEVICE", payload: {error:'',res:response }});
        //     }else{
        //       this._store.dispatch({type: "CHECK_DEVICE", payload: {error:'X',errorMsg:'server error...'}});
        //     }
        //   }, err => {
        //     console.log(err);
        //     console.log(err.json());
        //     this._store.dispatch({type: "CHECK_VEHICLE", payload: {error:'X',errorMsg:"error occur "+err}});
        //   });
        // });
    } // constructor close here
    ShipmentServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  get shipment list **********************
    ShipmentServices.prototype.getList = function (path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        // console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  get vehicle list **********************
    ShipmentServices.prototype.getVehicle = function (path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        // console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  switch shipment **********************
    ShipmentServices.prototype.switchShipment = function (path, shipment) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: shipment
        });
        // console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ****************** get Vehicle Detail *******************
    ShipmentServices.prototype.getDetails = function (path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ****************** create Shipment *******************
    ShipmentServices.prototype.createShipment = function (path, shipment) {
        console.log(path);
        console.log(shipment);
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: shipment
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    ShipmentServices.prototype.initialize = function () {
        this._store.dispatch({ type: "NEW_SHIPMENT", payload: null });
    };
    return ShipmentServices;
}()); // class close
ShipmentServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], ShipmentServices);
exports.ShipmentServices = ShipmentServices;
var _a, _b, _c;
//# sourceMappingURL=shipment-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/tracker-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
// import {TRACKER_TRIP_DISCARD_PATH,TRACKER_TRIP_UPDATE_PATH,TRACKER_TRIP_UPDATE_FROM_STOP_PATH,TRACKER_TRIP_CONFIRM_LOCATION_PATH } from "./path-services";
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var TrackerServices = (function () {
    function TrackerServices(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        // protected basePath = 'http://35.189.162.187:8080/command';
        this.defaultHeaders = new http_1.Headers();
        this.discardTrackerTrip = new core_1.EventEmitter();
        this.updateTrackerTrip = new core_1.EventEmitter();
        this.updateTrackerTripFromStop = new core_1.EventEmitter();
        this.confirmLocation = new core_1.EventEmitter();
        this.token = '';
        //@todo handle error cases
        this.token = this.localStorageService.get("AUTH_TOKEN");
        this.discardTrackerTrip.subscribe(function (discard) {
            var path;
            if (discard['forEditPlace'] == 'destination') {
                path = environment_1.paths.SHIPMENT_PATH + "/discard/delivery";
            }
            else if (discard['forEditPlace'] == 'pickup') {
                path = environment_1.paths.SHIPMENT_PATH + "/discard/pickup";
            }
            console.log(path);
            console.log(discard['discardObj']);
            _this.doDiscardTrip(path, discard['discardObj']).subscribe(function (response) {
                // console.log(response);
            }, function (err) {
                console.log(err);
            });
        });
        //@todo handle error cases
        this.updateTrackerTrip.subscribe(function (updateTripObj) {
            var path = environment_1.paths.SHIPMENT_PATH + '/update';
            console.log(path);
            console.log(updateTripObj);
            _this.doUpdateTrip(path, updateTripObj).subscribe(function (response) {
                // console.log(response);
            }, function (err) {
                console.log(err);
            });
        });
        //@todo handle error cases
        this.updateTrackerTripFromStop.subscribe(function (tripObj) {
            var path;
            if (tripObj['forEditPlace'] == 'destination') {
                path = environment_1.paths.SHIPMENT_PATH + "/selectfromstop/delivery";
            }
            else if (tripObj['forEditPlace'] == 'pickup') {
                path = environment_1.paths.SHIPMENT_PATH + "/selectfromstop/pickup";
            }
            console.log(path);
            console.log(tripObj['movementObj']);
            _this.doUpdateTripFromStop(path, tripObj['movementObj']).subscribe(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });
        });
        //@todo handle error cases
        this.confirmLocation.subscribe(function (obj) {
            var path;
            if (obj['forConfirmPlace'] == 'Destination') {
                path = environment_1.paths.SHIPMENT_PATH + "/missing/delivery";
            }
            else if (obj['forConfirmPlace'] == 'Pickup') {
                path = environment_1.paths.SHIPMENT_PATH + "/missing/pickup";
            }
            console.log(path);
            console.log(obj['conObj']);
            _this.doConfirmLocation(path, obj['conObj']).subscribe(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });
        });
    } // constructor close here
    TrackerServices.prototype.ngOnDestroy = function () {
    };
    // *********************** discard Trip  **********************
    TrackerServices.prototype.doDiscardTrip = function (path, discardTrip) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: discardTrip,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            // if(response.status==200){
            return response.json();
            // }else{
            //   console.log("not 200");
            //   return {error:'X'};
            // }
        });
    };
    // *********************** update trip  **********************
    TrackerServices.prototype.doUpdateTrip = function (path, updateTrip) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: updateTrip,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            // console.log(response);
            // if(response.status==200){
            return response.json();
            // }else{
            //   console.log("not 200");
            //   return {error:'X'};
            // }
        });
    };
    // *********************** update trip  from stop/list of movement logs  **********************
    TrackerServices.prototype.doUpdateTripFromStop = function (path, updateTrip) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: updateTrip,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            // console.log(response);
            // if(response.status==200){
            return response.json();
            // }else{
            //   console.log("not 200");
            //   return {error:'X'};
            // }
        });
    };
    // *********************** update trip  from stop/list of movement logs  **********************
    TrackerServices.prototype.doConfirmLocation = function (path, obj) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + this.token;
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: obj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            // console.log(response);
            // if(response.status==200){
            return response.json();
            // }else{
            //   console.log("not 200");
            //   return {error:'X'};
            // }
        });
    };
    return TrackerServices;
}()); // class close
TrackerServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], TrackerServices);
exports.TrackerServices = TrackerServices;
var _a, _b, _c;
//# sourceMappingURL=tracker-services.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-management-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var UserManagementService = (function () {
    function UserManagementService(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new http_1.Headers();
        this.deleteUser = new core_1.EventEmitter();
        this.getAllUsersList = new core_1.EventEmitter();
        this.changeUserType = new core_1.EventEmitter();
        this.getUserIfExist = new core_1.EventEmitter();
        this.addUserToGroup = new core_1.EventEmitter();
        //@todo handle error cases
        this.getAllUsersList.subscribe(function (token) {
            _this.token = token;
            var path = environment_1.paths.MANAGE_USERS_PATH;
            console.log(path);
            _this.getAllUsers(path, token).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "GET_ALL_USERS_LIST", payload: response });
            }, function (err) {
                console.log(err);
            });
        });
        // this.createOrg.subscribe((addOrgObj)=> {
        //   this.token=this.localStorageService.get("AUTH_TOKEN");
        //   let path =paths.CREATE_ORGANISATION_PATH ;
        //   console.log(path);
        //   this.createOrganisation(path,addOrgObj).subscribe(response =>{
        //     console.log(response);
        //     if(response.status >=200 && response.status <300){
        //       this._store.dispatch({type: "CREATE_ORGANISATION_RESPONSE", payload:{error:'',res:response}});
        //     }else{
        //       this._store.dispatch({type: "CREATE_ORGANISATION_RESPONSE", payload:{error:'X',errorMsg:response.error}});
        //     }
        //   },err=>{
        //     console.log(err);
        //     console.log(err.json());
        //     this._store.dispatch({type: "CREATE_ORGANISATION_RESPONSE", payload:{error:'X',errorMsg:'http error'}});
        //   });
        // });
        // this.switchOrganisations.subscribe((orgId)=> {
        //   this.token=this.localStorageService.get("AUTH_TOKEN");
        //   let path =paths.SWITCH_ORG_PATH+orgId;
        //   console.log(path);
        //   this.switchOrganisation(path,orgId).subscribe(response =>{
        //     console.log(response);
        //     if(response.status >=200 && response.status <300){
        //       this._store.dispatch({type: "SWITCH_ORG_RESPONSE", payload:{error:'',res:response}});
        //     }else{
        //       this._store.dispatch({type: "SWITCH_ORG_RESPONSE", payload:{error:'X',errorMsg:response.error}});
        //     }
        //   },err=>{
        //     console.log(err);
        //     console.log(err.json());
        //     this._store.dispatch({type: "SWITCH_ORG_RESPONSE", payload:{error:'X',errorMsg:'http error'}});
        //   });
        // });
        //@todo handle error cases
        this.deleteUser.subscribe(function (userObj) {
            var path = environment_1.paths.DELETE_USERS_PATH + "/remove";
            console.log(path);
            console.log(userObj);
            _this.deleteSelectedUser(userObj, path).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "DELETE_USER_SERVICE_RESPONSE", payload: response });
            }, function (err) {
                console.log(err);
            });
        });
        this.changeUserType.subscribe(function (userObj) {
            var path = environment_1.paths.DELETE_USERS_PATH + "/add";
            console.log(path);
            console.log(userObj);
            _this.updateSelectedUser(userObj, path).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "UPDATE_USER_STATUS_RESPONSE", payload: response });
            }, function (err) {
                console.log(err);
            });
        });
        this.addUserToGroup.subscribe(function (userObj) {
            var path = environment_1.paths.DELETE_USERS_PATH + "/add";
            console.log(path);
            console.log(userObj);
            _this.updateSelectedUser(userObj, path).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "UPDATE_USER_STATUS_RESPONSE", payload: response });
            }, function (err) {
                console.log(err);
            });
        });
        this.getUserIfExist.subscribe(function (newUserObj) {
            var path = "";
            if (newUserObj['email'] != "") {
                path = environment_1.paths.ADD_EXISTING_USERS_PATH + "?email=" + newUserObj['email'];
            }
            if (newUserObj['mobile'] != "") {
                path = environment_1.paths.ADD_EXISTING_USERS_PATH + "?mobile=" + newUserObj['mobile'];
            }
            console.log(path);
            console.log(newUserObj);
            _this.checkExistingUser(path).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "EXISTING_USER_RESPONSE", payload: response });
            }, function (err) {
                console.log(err);
            });
        });
    }
    UserManagementService.prototype.ngOnDestroy = function () {
    };
    UserManagementService.prototype.deleteSelectedUser = function (userObj, path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: userObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    // public createOrganisation(path,addOrgObj){
    //   let headers = new Headers();
    //   console.log(this.token);
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Post,
    //     headers: headers,
    //     body: addOrgObj,
    //   });
    //
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     console.log(response);
    //     if(response.status==200){
    //       return response.json();
    //     }else{
    //       console.log("not 200");
    //       return {error:'X'};
    //     }
    //   });
    // }
    // public switchOrganisation(path,switchOrgId){
    //   let headers = new Headers();
    //   console.log(this.token);
    //   console.log(this.token);
    //   let bearerToken="Bearer "+this.token;
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('authorization', bearerToken);
    //
    //   let requestOptions: RequestOptionsArgs = new RequestOptions({
    //     method: RequestMethod.Get,
    //     headers: headers,
    //     // body: switchOrgId,
    //   });
    //
    //   return this.http.request(path, requestOptions).map((response: Response) => {
    //     console.log(response);
    //     if(response.status==200){
    //       return response.json();
    //     }else{
    //       console.log("not 200");
    //       return {error:'X'};
    //     }
    //   });
    // }
    UserManagementService.prototype.updateSelectedUser = function (userObj, path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: userObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    UserManagementService.prototype.getAllUsers = function (path, token) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    UserManagementService.prototype.checkExistingUser = function (path) {
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response.status);
            console.log(response);
            if (response.status == 200) {
                return response.json();
            }
        });
    };
    return UserManagementService;
}());
UserManagementService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof angular_2_local_storage_1.LocalStorageService !== "undefined" && angular_2_local_storage_1.LocalStorageService) === "function" && _c || Object])
], UserManagementService);
exports.UserManagementService = UserManagementService;
var _a, _b, _c;
//# sourceMappingURL=user-management-services.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
exports.TEST_BASE_IP = {
    IP: 'http://192.168.0.153',
};
exports.BASE_IP = {
    IP: 'http://192.168.0.153',
    // IP1 :'http://192.168.0.103:2124',
    // BETA_IP : 'http://192.168.0.149:8094',
    NODE_IP: 'http://tracknet.fretron.com',
    FERIGHT_LOCATION: exports.TEST_BASE_IP.IP + '/freight'
};
exports.paths = {
    // ********************* organization path *******************************
    ORGANIZATION_LIST_PATH: exports.BASE_IP.IP + "/organisation/organizations",
    MANAGE_USERS_PATH: exports.BASE_IP.IP + '/organisation/users',
    DELETE_USERS_PATH: exports.BASE_IP.IP + '/organisation',
    ADD_EXISTING_USERS_PATH: exports.BASE_IP.IP + '/user/getUser',
    // SWITCH_ORG_PATH:"http://192.168.0.103:8099/user/switchorg?orgId=",
    SWITCH_ORG_PATH: exports.BASE_IP.IP + "/user/switchorg?orgId=",
    CREATE_ORGANISATION_PATH: exports.BASE_IP.IP + '/organisation/create',
    MANAGE_VEHICLES_GRP_PATH: exports.BASE_IP.IP + '/group',
    SHIPMENT_PATH: exports.BASE_IP.IP + '/shipment',
    DEVICE_LIST_PATH: exports.BASE_IP.IP + "/shipment/device/dashboard",
    DEVICE_ADD_PATH: exports.BASE_IP.IP + '/registry/device/add',
    CHECK_VEHICLE: exports.BASE_IP.IP + '/registry/checkvehicle',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/images/background-profile.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-profile.82e0e4644bf995625d93.png";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
// if (environment.production) {
core_1.enableProdMode();
// }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map