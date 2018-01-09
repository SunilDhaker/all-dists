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

/***/ "../../../../../src/app/HMEL-admin/add-location/add-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trip-header{\r\n    background-color: #3F51B5;\r\n    width: 30%;\r\n    /*padding-bottom: 3px;*/\r\n    padding: 8px;\r\n    height: 40px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #ffffff;\r\n  }\r\n\r\n  mat-card{\r\n    padding: 9px;\r\n    min-width: 250px;\r\n  }\r\n\r\n  div {\r\n    font-family: Helvetica !important;\r\n    /*color: #46465f;*/\r\n  }\r\n\r\n  .my-hr{\r\n    border-style:ridge;\r\n    border-width:1px;\r\n    margin-top: 6px;\r\n    min-width: 250px;\r\n    margin-bottom:3px;\r\n  }\r\n\r\n  .my-map-search{\r\n    left: 0%;\r\n    width: 73%;\r\n    position: relative;\r\n    z-index: 10;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .my-toggle >>> .mat-button-toggle-label-content {\r\n    line-height: 23px;\r\n    padding: 0px 10px;\r\n  }\r\n\r\n  .radio-button {\r\n    margin-left: 20px;\r\n    padding: 20px\r\n  }\r\n\r\n  .status-button{\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float : right;\r\n    margin-left: 10px;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n    -ms-flex-item-align: right;\r\n        -ms-grid-row-align: right;\r\n        align-self: right;\r\n  }\r\n\r\n  .status-button:hover\r\n  {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n  }\r\n  /*button {*/\r\n  /*color:#ffffff;*/\r\n  /*background-color:#1E88E5;*/\r\n  /*}*/\r\n\r\n  /* search box*/\r\n.search {\r\n  width: 67%;\r\n  font-size: 14px;\r\n  padding: 5px 26px 6px 12px;\r\n  display: inline-block;\r\n  border: 1.5px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  }\r\n  .search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n  box-shadow: 0px 0px 5px #03a9f4;\r\n  }\r\n\r\n  /* ******************/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/add-location/add-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slow-down\">\r\n  <!-- <div class=\"trip-header\"   fxLayout=\"row\">\r\n          <span  (click)=\"back()\" >\r\n            <i style=\"width: 40px\" class=\"fa fa-arrow-left\" aria-hidden=\"true\" ></i>\r\n          </span>\r\n          <span style=\"font-weight: bold\">Pickup Point</span>\r\n        </div> -->\r\n\r\n  <div>\r\n    <section class=\"my-map-search\">\r\n      <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\r\n      <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 210px; margin-top: 7px;font-size: 15px; position: absolute\"></i>\r\n      <input id=\"pac-input\" type=\"text\" class=\"search\" matTooltip=\"search Here\" placeholder=\"'Search'\">\r\n    </section>\r\n\r\n    <!-- ************************ map start here  ******************************************** -->\r\n    <div style=\"display:flex\">\r\n      <div>\r\n        <section style=\"z-index:10; left:5px; margin-top : 30px;\">\r\n          <mat-button-toggle-group class=\"my-toggle\" #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapType\">\r\n            <mat-button-toggle value=\"hybrid\">\r\n              <span>'Satellite'</span>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;opacity: .6;\">\r\n              <span>'Map'</span>\r\n            </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n        </section>\r\n\r\n        <agm-map [mapTypeId]=\"mapType\" style=\"height: 40vh; width : 60vh\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"5\">\r\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n\r\n      <div style=\"margin-top: 35px; margin-left: 20px;\">\r\n\r\n\r\n        <div>\r\n          <div style=\"display: flex\">\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <input matInput [(ngModel)]=\"freight_location\" placeholder=\"Freight Location Name\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <mat-select [(ngModel)]=\"type\" placeholder=\"Type\">\r\n                <mat-option value=\"plant\">Plant</mat-option>\r\n                <mat-option value=\"factory\">Factory</mat-option>\r\n                <mat-option value=\"warehouse\">Warehouse</mat-option>\r\n                <mat-option value=\"constructionsite\">construction Site</mat-option>\r\n                <mat-option value=\"mine\">Mine</mat-option>\r\n                <mat-option value=\"port\">Port</mat-option>\r\n                <mat-option value=\"railyard\">Railyard</mat-option>\r\n                <mat-option value=\"ict\">ICT</mat-option>\r\n                <mat-option value=\"other\">Other</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div style=\"display: flex\">\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <input matInput [(ngModel)]=\"address\" placeholder=\"Address\">\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n                      <input matInput [(ngModel)]=\"source\" placeholder=\"source\">\r\n                    </mat-form-field> -->\r\n\r\n            <!-- <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <input matInput [(ngModel)]=\"zone_1\" placeholder=\"Zone 1\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <mat-select [(ngModel)]=\"zone_1\" placeholder=\"Zone 1\">\r\n                <mat-option *ngFor=\"let data of freightZones\" [value]=data.name>{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div style=\"display: flex\">\r\n\r\n            <!-- <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <input matInput [(ngModel)]=\"zone_2\" placeholder=\"Zone 2\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <mat-select [(ngModel)]=\"zone_2\" placeholder=\"Zone 2\">\r\n                <mat-option *ngFor=\"let data of freightZones\" [value]=data.name>{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field style=\"margin-left : 5px; width:50%s\">\r\n              <input matInput [(ngModel)]=\"zone_3\" placeholder=\"Zone 3\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field style=\"margin-left : 5px; width:50%\">\r\n              <mat-select [(ngModel)]=\"zone_3\" placeholder=\"Zone 3\">\r\n                <mat-option *ngFor=\"let data of freightZones\" [value]=data.name>{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <!-- <div style= \"display: flex\">\r\n                  <mat-form-field  style=\"margin-left : 5px\">\r\n                      <input matInput [(ngModel)]=\"status\" placeholder=\"Status\">\r\n                    </mat-form-field>\r\n\r\n                  <mat-form-field style=\"margin-left : 20px\">\r\n                      <mat-select [(ngModel)]=\"accessLevel\" placeholder=\"Access Level\">\r\n                        <mat-option value=\"admin\">Admin</mat-option>\r\n                        <mat-option value=\"Organization User\">Organization User</mat-option>\r\n                        <mat-option value=\"Transporter Vendor\">Transporter Vendor</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n              </div> -->\r\n        <div *ngIf=\"divVisivle\">\r\n          <div style=\"margin-left: -41px\">\r\n            <mat-radio-group name=\"group\">\r\n              <mat-radio-button class=\"radio-button\" value=\"Add Boundary\" (click)=\"onAddLocation()\">\r\n                Add Boundary\r\n              </mat-radio-button>\r\n              <mat-radio-button class=\"radio-button\" value=\"Select Proximity\" (click)=\"onAddProximity()\">\r\n                Select Proximity\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <div *ngIf=\"isVisible\" style=\"display: flex; align-content: center;\">\r\n            <mat-form-field>\r\n              <input matInput [(ngModel)]=\"input\" placeholder=\"Enter Number\" (keyup)=\"eventFunction($event)\">\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-select style=\"display: flex; margin-left: 29px; width: 44px; margin-top: 28px;\" [(ngModel)]='selectedValue_Two'>\r\n              <mat-option selected=\"selectedValue_Two\" value=\"KM\">KM</mat-option>\r\n              <mat-option value=\"M\">M</mat-option>\r\n            </mat-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- ************************ map end here  ******************************************** -->\r\n\r\n    <div style=\"display : flex\"></div>\r\n\r\n    <div>\r\n      <button mat-raised-button class=\"status-button\" (click)=\"cancelEvent()\">Cancel</button>\r\n      <button mat-raised-button class=\"status-button\" (click)=\"saveLocation()\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/add-location/add-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__ = __webpack_require__("../../../../../src/service/create-freigth-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_update_freight_location_service__ = __webpack_require__("../../../../../src/service/update-freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__ = __webpack_require__("../../../../../src/service/freight-zone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {geoCodeServices} from "../../services/geoCode-services";




var AddLocationComponent = (function () {
    function AddLocationComponent(mapApiWrapper, snackBar, _store, createFreightLocation, upadateFreightLocation, freightZoneServices) {
        var _this = this;
        this.mapApiWrapper = mapApiWrapper;
        this.snackBar = snackBar;
        this._store = _store;
        this.createFreightLocation = createFreightLocation;
        this.upadateFreightLocation = upadateFreightLocation;
        this.freightZoneServices = freightZoneServices;
        this.latitude = null;
        this.longitude = null;
        this.zoom = 5;
        this.isMarkerDragable = false;
        this.isPolygonEditable = false;
        this.mapType = 'roadmap';
        this.markers = [];
        this.locationAddress = "";
        this.unSub_formattedAddress = null;
        this.unSub_freightDetailsLocation = null;
        this.unSub_selectedTripAddressType = null;
        this.isAddressSelected = false;
        this.showSpinner = false;
        this.uuid = null;
        this.name = "";
        this.freightObj = {};
        this.isVisible = false;
        this.divVisivle = false;
        this.circle = null;
        this.freightZones = [];
        this.latitude = null;
        this.longitude = null;
        console.log(this.latitude);
        this.zoom = 14;
        this.selectedValue_Two = "KM";
        this.radio_selected_Value = "Add Boundary";
        console.log("constructor");
        this._store.select("latlngStore").subscribe(function (res_1) {
            console.log(res_1);
            if (res_1 != null) {
                _this.res = res_1;
                _this.latitude = res_1['data']["centre"]["latitude"];
                _this.longitude = res_1['data']['centre']["longitude"];
                _this.address = res_1['data']['address'];
                _this.freight_location = res_1['data']['name'];
                _this.type = res_1['data']['type'];
                _this.zone_1 = res_1['data']['zone1'];
                _this.zone_2 = res_1['data']['zone2'];
                _this.zone_3 = res_1['data']['zone3'];
                _this.id = res_1["data"]["id"];
                console.log(_this.id);
                _this.isCircle = false;
                _this._store.dispatch({ type: "IDSTORE", payload: _this.id });
                _this.divVisivle = true;
            }
        });
        this.freightZoneServices.freightZoneAll.emit();
        this._store.select("freightZoneAll").subscribe(function (res) {
            console.log(res);
            if (res == null)
                return;
            _this.freightZones = res['data'];
        });
        this._store.dispatch({ type: "LATLNG", payload: null });
    } // constructor close
    AddLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in on init");
        console.log("oninit");
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            // let points = this.getNPointsCircularPolygone({lat : this.latitude , lng : this.longitude} , 0.5 , 6);
            var points = [];
            console.log(points);
            _this.polygon = _this.addPolygone(_this.map, points, false, '#858585', '#353535');
            _this.editLocation();
        });
        // }
    };
    AddLocationComponent.prototype.ngOnDestroy = function () {
        // if (typeof this.unSub_selectedTripAddressType != 'undefined' && this.unSub_selectedTripAddressType != null && this.unSub_selectedTripAddressType != undefined)
        // {
        //   // console.log(" unSub_sourceAddress");
        //   this.unSub_selectedTripAddressType.unsubscribe();
        // }
        // this.address=null;
    };
    AddLocationComponent.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor) {
        var myPolygon = new google.maps.Polygon({
            paths: points,
            editable: editable,
            strokeColor: strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35
        });
        myPolygon.setMap(map);
        return myPolygon;
    };
    AddLocationComponent.prototype.getNPointsCircularPolygone = function (center, dist, n) {
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
    AddLocationComponent.prototype.editLocation = function () {
        // this.isMarkerDragable=true;
        // this.polygon.setMap(null);//
        this.isPolygonEditable = true;
        this.polygon.setEditable(true);
        this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
        this.placesServices();
    };
    AddLocationComponent.prototype.back = function () {
        this._store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* back */])());
    };
    AddLocationComponent.prototype.placesServices = function () {
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
                _this.divVisivle = true;
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
    AddLocationComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    AddLocationComponent.prototype.onAddProximity = function () {
        this.geoTagType = "proximity";
        this.isVisible = true;
        this.isCircle = true;
        var dis;
        if (this.selectedValue_Two == "KM") {
            dis = (Number)(this.input) * 1000;
        }
    };
    AddLocationComponent.prototype.drawCircel = function (radius) {
        this.radius = radius;
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
    AddLocationComponent.prototype.onAddLocation = function () {
        this.isCircle = false;
        this.geoTagType = "geofence";
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
    AddLocationComponent.prototype.eventFunction = function (event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8) {
            if (this.selectedValue_Two == "KM") {
                var dis = (Number)(this.input) * 1000;
                this.drawCircel(dis);
            }
            if (this.selectedValue_Two == "M") {
                this.drawCircel((Number)(this.input));
            }
        }
    };
    AddLocationComponent.prototype.saveLocation = function () {
        var obj = null;
        if (this.isCircle == false) {
            var vertices = this.polygon.getPath();
            var polygonPoints = [];
            for (var i = 0; i < vertices.getLength(); i++) {
                var xy = vertices.getAt(i);
                polygonPoints.push({ latitude: xy.lat(), longitude: xy.lng() });
                // console.log(xy.lat()+"     "+xy.lng());
            }
            if (this.id == null) {
                obj = {
                    "name": this.freight_location,
                    "address": this.address,
                    "geoTagType": this.geoTagType,
                    "source": "manual",
                    "zone1": this.zone_1,
                    "zone2": this.zone_2,
                    "zone3": this.zone_3,
                    "boundary": polygonPoints,
                    "centre": { "latitude": this.latitude, "longitude": this.longitude },
                    "type": this.type
                };
                console.log(this.id);
                console.log(obj);
                this.createFreightLocation.getData.emit(obj);
            }
            else {
                obj = {
                    "name": this.freight_location,
                    "address": this.address,
                    "geoTagType": this.geoTagType,
                    "source": "manual",
                    "zone1": this.zone_1,
                    "zone2": this.zone_2,
                    "zone3": this.zone_3,
                    "boundary": polygonPoints,
                    "centre": { "latitude": this.latitude, "longitude": this.longitude },
                    "type": this.type
                };
                console.log(this.id);
                this.upadateFreightLocation.getData.emit(obj);
            }
            this._store.dispatch({ type: "DIALOG", payload: { ref: false } });
        }
        else {
            if (this.id == null) {
                obj = {
                    "name": this.freight_location,
                    "address": this.address,
                    "source": "manual",
                    "geoTagType": this.geoTagType,
                    "zone1": this.zone_1,
                    "zone2": this.zone_2,
                    "zone3": this.zone_3,
                    "centre": { "latitude": this.latitude, "longitude": this.longitude },
                    "type": this.type,
                    "radius": this.radius
                };
                console.log(this.id);
                this.createFreightLocation.getData.emit(obj);
            }
            else {
                obj = {
                    "name": this.freight_location,
                    "address": this.address,
                    "geoTagType": this.geoTagType,
                    "source": "manual",
                    "zone1": this.zone_1,
                    "zone2": this.zone_2,
                    "zone3": this.zone_3,
                    "centre": { "latitude": this.latitude, "longitude": this.longitude },
                    "type": this.type,
                    "radius": this.radius
                };
                console.log(obj);
                this.upadateFreightLocation.getData.emit(obj);
            }
            this._store.dispatch({ type: "DIALOG", payload: { ref: false } });
        }
        console.log(obj);
    };
    AddLocationComponent.prototype.cancelEvent = function () {
        this._store.dispatch({ type: "DIALOG", payload: { ref: false } });
    };
    return AddLocationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", Object)
], AddLocationComponent.prototype, "agmMap", void 0);
AddLocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-location',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/add-location/add-location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/add-location/add-location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* GoogleMapsAPIWrapper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__["a" /* CreateFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__["a" /* CreateFreightLocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_update_freight_location_service__["a" /* UpdateFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_update_freight_location_service__["a" /* UpdateFreightLocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__["a" /* FreightZoneServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__["a" /* FreightZoneServices */]) === "function" && _f || Object])
], AddLocationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  font-family: Helvetica !important;\r\n}\r\n\r\n.my-map-search{\r\n  /*left: 0%;*/\r\n  /*width: 73%;*/\r\n  position: relative;\r\n  z-index: 10;\r\n  /*margin-top: 10px;*/\r\n}\r\n\r\n.my-toggle{\r\n  position: absolute;\r\n  z-index: 11;\r\n  left: 10px;\r\n  top: 33px;\r\n  height: 20px;\r\n  font-size: 12px;\r\n}\r\n\r\n.my-toggle >>> .mat-button-toggle-label-content {\r\n  line-height: 23px;\r\n  padding: 0px 10px;\r\n  color: black;\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  padding: 5px 26px 6px 12px;\r\n  display: inline-block;\r\n  border: 1.5px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n}\r\n.search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n  box-shadow: 0px 0px 5px #03a9f4;\r\n}\r\n\r\n.contact-detail{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding: 5px 10px;\r\n  margin: 0px 10px;\r\n  border: 1px solid antiquewhite;\r\n}\r\n\r\n.card {\r\n  height: 0px; \r\n  padding-top: 10px;\r\n  margin-top: -20px;\r\n}\r\nmat-spinner.small-spinner svg { width: 40px !important; height: 40px !important; }\r\n/* .spinner { */\r\n  /* mat-spinner.small-spinner svg { width: 40px !important; height: 40px !important; }\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" style=\"position: absolute;\" class=\"spinner\"></mat-spinner>\r\n<div (keyup.Enter)=\"addFreightLocation()\">\r\n  <div style=\"font-size:21px;color:#8a8c8e;padding: 5px;\" >\r\n    <span>Add Business Partner</span>\r\n  </div>\r\n\r\n  <div>\r\n    <div  style=\"display:flex;flex-wrap: wrap;\">\r\n      <div  style=\"min-width: 200px;position: relative;padding: 10px;margin-top: 5px;width: 60%;\" >\r\n        <div style=\"position: relative;\" >\r\n          <div style=\"width:95%; margin-left: auto; margin-right: auto;margin-bottom: -31px;\">\r\n            <div class=\"my-map-search\">\r\n              <input [disabled]=\"type !='customer'\" id=\"pac-input\" type=\"text\" class=\"search\" matTooltip=\"Address search Here\" placeholder=\"Address Search Here\" >\r\n              <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 10px;top: 7px;font-size: 15px;position: absolute;\"></i>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-button-toggle-group [disabled] =\"type != 'customer'\"  class=\"my-toggle\" #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapType\">\r\n            <mat-button-toggle value=\"hybrid\">\r\n              <span>Satellite</span>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;\" [style.opacity]=\"(mapType =='roadmap')?'.8':'.6'\">\r\n              <span>Map</span>\r\n            </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n\r\n          <agm-map [streetViewControl]=\"mapOption.streetViewControl\" [zoomControl]=\"mapOption.zoomControl\" [mapDraggable]=\"mapOption.isMapDraggable\" [disableDefaultUI]=\"mapOption.disableDefaultUI\" [scrollwheel]=\"mapOption.scrollwheel\" [clickableIcons]=\"mapOption.clickableIcons\"\r\n                   [mapTypeId]=\"mapType\" style=\"height: 50vh;\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"5\">\r\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            </agm-marker>\r\n          </agm-map>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex style=\"padding: 5px\" >\r\n        <mat-form-field style=\"width: 100%\">\r\n          <mat-select [disabled]=\"isClicked ==true\" [(ngModel)]='type' placeholder=\"Type\" (change)=\"disableMap(); checkFRN()\" required>\r\n            <mat-option value=\"customer\">Customer</mat-option>\r\n            <mat-option value=\"transporter\">Transporter</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div>\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input matInput [disabled]=\"isClicked ==true\"   [style.color]=\"isFRNValid?'black':'red'\" [(ngModel)]=\"fretronRefNo\" placeholder=\"Fretron Reference No\" (keyup)=\"checkFretronReferenceNumber(fretronRefNo)\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"businessPartnerName\" placeholder=\"Business Partner Name\" required>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input [disabled]=\"isClicked ==true\"  matInput [(ngModel)]=\"address\" placeholder=\"Address\">\r\n          </mat-form-field>\r\n\r\n          <div style=\"display: flex;flex-wrap: wrap;\" >\r\n            <mat-form-field style=\"margin-right: auto\" >\r\n              <input [disabled]=\"isClicked ==true\"  matInput  [(ngModel)]=\"state\" placeholder=\"State\" >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"margin-left: 2px\" >\r\n              <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"zip\" placeholder=\"PIN/ZIP\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contact-detail\">\r\n      <mat-form-field style=\"margin-right: 10px;width: 30%;min-width: 200px;\">\r\n        <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"contactPersonName\" placeholder=\"Contact Person Name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=\"margin-right :10px;margin-left :10px;width: 30%;min-width: 200px;\" >\r\n        <input [disabled]=\"isClicked ==true\"  matInput type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\"\r\n               pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" >\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=\"margin-left :10px;width: 30%;min-width: 200px;\">\r\n        <input [disabled]=\"isClicked ==true\"  matInput type=\"number\" [(ngModel)]=\"mobileNo\" placeholder=\"MobileNo\" onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\r\n               pattern=\"[0-9]{10}\" >\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"text-align: right;padding: 12px;\" >\r\n    <button matTooltip=\"CANCEL / BACK\"  mat-raised-button (click)=\"cancel()\" class=\"status-button\" >Cancel</button>\r\n    <button [disabled]=\"businessPartnerName =='' || isClicked ==true\" matTooltip=\"Add New Business Partner\" color=\"primary\"  mat-raised-button (click)=\"addFreightLocation()\" class=\"status-button\" >Add Business Partner</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBusinessPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_create_freigth_location_service__ = __webpack_require__("../../../../../src/service/create-freigth-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_businessPartnerService__ = __webpack_require__("../../../../../src/service/businessPartnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddBusinessPartnerComponent = (function () {
    function AddBusinessPartnerComponent(router, businessPartnerService, createFreightLocation, dialog, store, matSnackBar) {
        var _this = this;
        this.router = router;
        this.businessPartnerService = businessPartnerService;
        this.createFreightLocation = createFreightLocation;
        this.dialog = dialog;
        this.store = store;
        this.matSnackBar = matSnackBar;
        this.isSpinner = false;
        this.type = 'customer';
        this.mapOption = { isMapDraggable: true, disableDefaultUI: true,
            scrollwheel: true, clickableIcons: true, zoomControl: true, streetViewControl: true };
        this.mapType = 'roadmap';
        this.fretronRefNo = '';
        this.businessPartnerName = '';
        this.address = '';
        this.state = '';
        this.zip = '';
        this.contactPersonName = '';
        this.email = '';
        this.mobileNo = '';
        this.freightLocation = '';
        this.polygon = null;
        this.isPolygonEditable = false;
        this.latitude = null;
        this.longitude = null;
        this.freightLocUuid = '';
        this.isClicked = false;
        this.unSub_createFreightLocRes = null;
        this.unSub_addBusinessPartRes = null;
        this.unSub_checkFretronReferenceNumber = null;
        this.orgId = null;
        this.fretronReferenceNoUuid = null;
        this.isFRNValid = true;
        this.orgType = '';
        this.fretronReferenceNumberPath = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["b" /* path */].CHECK_FRETRON_REFERECE_NUMBER;
        console.log("constructor");
        // dispatched from create freight location services
        this.unSub_createFreightLocRes = this.store.select('createFreightLocRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            _this.freightLocUuid = '';
            if (value['error'] == '') {
                _this.freightLocUuid = value['data']['data']['uuid'];
                console.log(_this.freightLocUuid);
                if (_this.freightLocUuid == '' || _this.freightLocUuid == null) {
                    _this.openSnackBar('error please try again');
                    return;
                }
                else {
                    _this.addBusinessPartner();
                }
            }
            else {
                _this.isSpinner = false;
                _this.isClicked = false;
                _this.openSnackBar(value['errorMsg'] + ' please try again');
            }
        });
        this.unSub_addBusinessPartRes = this.store.select('addBusinessPartRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            _this.isSpinner = false;
            _this.isClicked = false;
            if (value['error'] == '') {
                _this.openSnackBar("Created Succesfully");
                _this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
            }
            else {
                _this.openSnackBar(value['errorMsg'] + ' please try again');
            }
        });
        this.unSub_checkFretronReferenceNumber = this.store.select('fretronReferenceNumber').subscribe(function (res) {
            console.log(res);
            if (res == null)
                return;
            if (res['status'] == 200 && res['organisation'] != undefined) {
                _this.orgType = res['organisation']['type'];
                _this.fretronReferenceNoUuid = res['organisation']['uuid'];
                _this.isFRNValid = true;
            }
            else {
                _this.orgType = null;
                _this.fretronReferenceNoUuid = null;
                _this.isFRNValid = false;
            }
            if (_this.orgType != null) {
                if (_this.type.toUpperCase() == "TRANSPORTER") {
                    if (_this.type.toUpperCase() == _this.orgType)
                        _this.isFRNValid = true;
                    else
                        _this.isFRNValid = false;
                }
                else {
                    if (_this.orgType == "TRANSPORTER")
                        _this.isFRNValid = false;
                    else
                        _this.isFRNValid = true;
                }
            }
            if (_this.fretronRefNo == undefined || _this.fretronRefNo.length == 0)
                _this.isFRNValid = true;
        });
    } // close constructor
    AddBusinessPartnerComponent.prototype.ngOnDestroy = function () {
        if (this.unSub_createFreightLocRes != null && this.unSub_createFreightLocRes != undefined)
            this.unSub_createFreightLocRes.unsubscribe();
        if (this.unSub_addBusinessPartRes != null && this.unSub_addBusinessPartRes != undefined)
            this.unSub_addBusinessPartRes.unsubscribe();
        if (this.unSub_checkFretronReferenceNumber != null && this.unSub_checkFretronReferenceNumber != undefined)
            this.unSub_checkFretronReferenceNumber.unsubscribe();
        this.store.dispatch({ type: "FRETRON_REFERENCE_NUMBER", payload: null });
        this.store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: null });
        this.store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: null });
    };
    AddBusinessPartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oninit");
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            // let points = this.getNPointsCircularPolygone({lat : this.latitude , lng : this.longitude} , 0.5 , 6);
            var points = [];
            console.log(points);
            _this.polygon = _this.addPolygone(_this.map, points, false, '#858585', '#353535');
            _this.editLocation();
        });
    };
    AddBusinessPartnerComponent.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor) {
        var myPolygon = new google.maps.Polygon({
            paths: points,
            editable: editable,
            strokeColor: strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35
        });
        myPolygon.setMap(map);
        return myPolygon;
    };
    AddBusinessPartnerComponent.prototype.getNPointsCircularPolygone = function (center, dist, n) {
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
    AddBusinessPartnerComponent.prototype.editLocation = function () {
        this.isPolygonEditable = true;
        this.polygon.setEditable(true);
        this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
        this.placesServices();
    };
    AddBusinessPartnerComponent.prototype.disableMap = function () {
        console.log("disable unit");
        if (this.type == 'customer') {
            this.polygon.setEditable(true);
            this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
            this.mapOption.isMapDraggable = true;
            this.mapOption.disableDefaultUI = true;
            this.mapOption.scrollwheel = true;
            this.mapOption.clickableIcons = true;
            this.mapOption.zoomControl = true;
            this.mapOption.streetViewControl = true;
        }
        else {
            this.polygon.setEditable(false);
            this.polygon.setOptions({ fillColor: '#858585', strokeColor: '#353535' });
            this.mapOption.isMapDraggable = false;
            this.mapOption.disableDefaultUI = false;
            this.mapOption.scrollwheel = false;
            this.mapOption.clickableIcons = false;
            this.mapOption.zoomControl = false;
            this.mapOption.streetViewControl = false;
        }
    };
    AddBusinessPartnerComponent.prototype.placesServices = function () {
        var _this = this;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        console.log(input);
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.addListener('bounds_changed', function () {
            searchBox.setBounds(_this.map.getBounds());
        });
        // this.markers = [];
        // if (this.res != null) {
        // console.log(this.res["data"]["radius"])
        // let points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        // this.polygon.setPath(points);
        // this.polygon.setMap(this.map);
        // }
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            console.log(places);
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            // this.markers.forEach((marker) => {
            //   marker.setMap(null);
            // });
            // this.markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            // places.forEach((place) => {
            if (!places[0].geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: places[0].icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            // Create a marker for each place.
            var currentMarker = new google.maps.Marker({
                // map: this.map,
                // icon: icon,
                title: places[0].formatted_address,
                position: places[0].geometry.location
            });
            // console.log(places[0].geometry.location);
            _this.latitude = currentMarker['position'].lat();
            _this.longitude = currentMarker['position'].lng();
            console.log(_this.latitude + " " + _this.longitude);
            _this.address = '';
            _this.state = '';
            _this.address = places[0].formatted_address;
            if (places[0].address_components != undefined) {
                for (var i = 0; i < places[0].address_components.length; i++) {
                    if (places[0].address_components[i]['types'][0] == 'administrative_area_level_1') {
                        console.log(places[0].address_components[i]['long_name']);
                        _this.state = places[0].address_components[i]['long_name'];
                    }
                }
            }
            //  this.polygon.setMap(this.map);
            console.log(places[0].formatted_address);
            // this.markers.push(currentMarker);
            // ********** for show marker according to screen ********
            if (places[0].geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(places[0].geometry.viewport);
            }
            else {
                bounds.extend(places[0].geometry.location);
            }
            // ****** for show marker accoeding to screen  ************
            // });
            _this.map.fitBounds(bounds);
            _this.onAddLocation();
        });
    }; // close placesServices
    // Add location boundary on map
    AddBusinessPartnerComponent.prototype.onAddLocation = function () {
        var obj = { latitude: this.latitude, longitude: this.longitude };
        console.log('Set New Location Obj');
        console.log(obj);
        if (this.polygon != null)
            this.polygon.setMap(null);
        var points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        this.polygon.setPath(points);
        this.polygon.setMap(this.map);
        this.map.setZoom(14);
    };
    AddBusinessPartnerComponent.prototype.addFreightLocation = function () {
        if (this.isFRNValid) {
            if (this.type == 'transporter') {
                if (this.checkValidation()) {
                    this.isClicked = true;
                    this.isSpinner = true;
                    this.addBusinessPartner();
                }
            }
            else {
                //  for create organization first we create freight location and then create organization
                var obj = null;
                var vertices = this.polygon.getPath();
                if (vertices == undefined || vertices == null) {
                    this.openSnackBar("Please select Location on Map.");
                    return false;
                }
                var polygonPoints = [];
                for (var i = 0; i < vertices.getLength(); i++) {
                    var xy = vertices.getAt(i);
                    polygonPoints.push({ latitude: xy.lat(), longitude: xy.lng() });
                    // console.log(xy.lat()+"     "+xy.lng());
                }
                if (polygonPoints.length <= 0) {
                    this.openSnackBar("Please select Location on map");
                    return;
                }
                if (this.checkValidation()) {
                    obj = {
                        "name": this.businessPartnerName,
                        "address": this.address,
                        "geoTagType": 'geofence',
                        "source": "manual",
                        "zone1": null,
                        "zone2": null,
                        "zone3": null,
                        "boundary": polygonPoints,
                        "centre": { "latitude": this.latitude, "longitude": this.longitude },
                        "type": 'plant'
                    };
                    console.log(obj);
                    this.isClicked = true;
                    this.isSpinner = true;
                    this.store.dispatch({ type: "ADD_ORG_RESPONSE", payload: null });
                    this.store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: null });
                    this.createFreightLocation.createFreightLoc.emit(obj); // response will get in constructor
                }
            }
        }
        else {
            this.openSnackBar("Fretron reference number doesn't exist");
        }
    }; // close methods add freight location
    AddBusinessPartnerComponent.prototype.checkValidation = function () {
        if (this.type == '' || this.type == undefined || this.type == null) {
            this.openSnackBar("Please Select Type");
            return false;
        }
        if (this.businessPartnerName == '' || this.businessPartnerName == undefined || this.businessPartnerName == null) {
            this.openSnackBar("Please fill Business Partner Name");
            return false;
        }
        var isEmailValid = true;
        if (this.email != '') {
            isEmailValid = this.emailValidation();
        }
        console.log("all valiation true");
        return (true && isEmailValid);
    };
    AddBusinessPartnerComponent.prototype.emailValidation = function () {
        var patt = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");
        var isEmailValid = patt.test(this.email);
        if (isEmailValid == false) {
            this.openSnackBar("Please fill valid Email ID or Leave Empty");
            return false;
        }
        return true;
    };
    AddBusinessPartnerComponent.prototype.addBusinessPartner = function () {
        var obj = {
            type: this.type,
            partnerName: this.businessPartnerName,
            address: this.address,
            state: this.state,
            zip: this.zip,
            contactPersonName: this.contactPersonName,
            emailId: this.email,
            mobileNo: this.mobileNo,
            'fretronReferenceNoUuid': this.fretronReferenceNoUuid
        };
        if (this.fretronReferenceNoUuid == null) {
            obj['fretronReferenceNo'] = null;
        }
        if (this.fretronRefNo != '') {
            obj['fretronReferenceNo'] = this.fretronRefNo;
        }
        if (this.type == 'customer') {
            obj['freightLocation'] = this.freightLocUuid;
        }
        console.log(obj);
        this.businessPartnerService.addBusinessPartner.emit(obj);
    }; //close addBusinessPartner
    AddBusinessPartnerComponent.prototype.cancel = function () {
        console.log("nothing done");
        this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
    };
    AddBusinessPartnerComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    //method to check existance of fretron reference number
    AddBusinessPartnerComponent.prototype.checkFretronReferenceNumber = function (fretronReferenceNumber) {
        if (fretronReferenceNumber != null || fretronReferenceNumber != undefined || fretronReferenceNumber != '') {
            var frPath = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["b" /* path */].CHECK_FRETRON_REFERECE_NUMBER + '?fretronReferenceNumber=' + fretronReferenceNumber;
            this.businessPartnerService.getFretronReferenceNumber.emit(frPath);
        }
    };
    AddBusinessPartnerComponent.prototype.checkFRN = function () {
        var frPath = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["b" /* path */].CHECK_FRETRON_REFERECE_NUMBER + '?fretronReferenceNumber=' + this.fretronRefNo;
        if (this.fretronRefNo != '' || this.fretronRefNo != null || this.fretronRefNo != undefined)
            this.businessPartnerService.getFretronReferenceNumber.emit(frPath);
    };
    return AddBusinessPartnerComponent;
}()); //close class
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", Object)
], AddBusinessPartnerComponent.prototype, "agmMap", void 0);
AddBusinessPartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-business-partner',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_businessPartnerService__["a" /* BusinessPartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_businessPartnerService__["a" /* BusinessPartnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_create_freigth_location_service__["a" /* CreateFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_create_freigth_location_service__["a" /* CreateFreightLocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]) === "function" && _f || Object])
], AddBusinessPartnerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-business-partner.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-basic3 {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n}\r\n\r\n.button-basic3:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n\r\n.div {\r\n  border: 100% solid black;\r\n}\r\n\r\n.table1 {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  color : black;\r\n  border-top : 1px solid #ddd;\r\n  border-left: 1px solid #ddd;\r\n  border-right: 1px solid #ddd;\r\n}\r\n\r\ntd {\r\n  width: 150px;\r\n  height: 25px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #ddd;\r\n  color : black;\r\n  font-size: 12px;\r\n}\r\n\r\n.expand-search {\r\n  border: 1.5px solid #b0bcc1;\r\n  font-size: 12px;\r\n  padding: 5px 26px 5px 12px;\r\n  display: inline-block;\r\n  border-radius: 17px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  min-width: 250px;\r\n}\r\n\r\n\r\n.header-span span{\r\n  padding: 8px 4px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.table-body-span{\r\n  text-align: center;\r\n}\r\n\r\n\r\n.search-icon{\r\n  right:7px;\r\n  margin-top:7px;\r\n  position:absolute;\r\n  font-size:13px;\r\n  color:black;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-icon:active{\r\n  color: #6459a1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style=\"display: flex;padding: 10px;\">\r\n    <div style=\"font-size:21px;color:#8a8c8e;\" >\r\n      <span>Business Partner</span>\r\n    </div>\r\n\r\n    <div style=\"position:relative;position: relative;margin-left: auto;\" >\r\n      <i  class=\"fa fa-search search-icon\"  aria-hidden=\"true\"  (click)=\"searchPartner()\"></i>\r\n      <input #location class=\"expand-search\" [(ngModel)]=\"search\" (keyup.Enter)=\"searchPartner()\"  placeholder=\"Search\" >\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-paginator [length]=totalRecord\r\n                   [pageSize]=this.pageSize\r\n                   [pageSizeOptions]=[5,10,20,50]\r\n                   (page)=\"fetchRecords($event)\" >\r\n    </mat-paginator>\r\n    <div class=\"header-span\" style=\"padding :3px 3px;box-shadow: 0px 2px 5px grey;margin-bottom: 1px; background-color: #f5f2f26b; margin-left: 10px; margin-right: 10px; font-size: 12px\" fxLayout=\"row\">\r\n      <span fxFlex >Business Partner Name</span>\r\n      <span fxFlex>Type</span>\r\n      <span fxFlex>Fretron Ref No</span>\r\n      <span fxFlex>Contact Person Name</span>\r\n      <span fxFlex>State</span>\r\n      <span fxFlex>Email ID</span>\r\n      <span fxFlex>Mobile No</span>\r\n      <span fxFlex>Edit</span>\r\n      <span fxFlex>Delete</span>\r\n    </div>\r\n    <div  style=\"margin-left: 10px; margin-right: 10px;height: calc(100vh - 244px);overflow: auto\" >\r\n      <mat-card class=\"table-body-span\" *ngFor=\"let businessPartner of businesPartList\" fxLayout=\"row\" style=\"font-size: 12px; height: auto;padding: 2px;\">\r\n        <span fxFlex style=\"margin-top: 10px\" >{{businessPartner?.partnerName?businessPartner?.partnerName:'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{businessPartner?.type?businessPartner?.type:'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{businessPartner?.type?businessPartner?.fretronReferenceNo:'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{(businessPartner?.contactPersonName)?(businessPartner?.contactPersonName):'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{(businessPartner?.contactPersonName)?(businessPartner?.state):'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{businessPartner?.emailId?businessPartner?.emailId:'N/A'}}</span>\r\n        <span fxFlex style=\"margin-top: 10px\" >{{businessPartner?.mobileNo?businessPartner?.mobileNo:'N/A'}}</span>\r\n        <span fxFlex><button mat-button (click)=\"updateBusinessPartner(businessPartner)\" ><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></span>\r\n        <span fxFlex><button mat-button (click)=\"openDeleteConfirmationDialog(businessPartner)\" ><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></span>\r\n      </mat-card>\r\n      <div style=\"height: 50px\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <button [matTooltipPosition]=\"'left'\" matTooltip=\"Create Business partner\" mat-fab color=\"primary\" name=\"createShipment\" (click)=\"goToaddBusinessPartner()\"style=\"position:absolute;bottom:10px;right:10px\" >\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 24px;line-height: 24px;color: white;\"></i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_businessPartnerService__ = __webpack_require__("../../../../../src/service/businessPartnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_business_partner_dialog_delete_business_partner_dialog_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BusinessPartnerComponent = (function () {
    function BusinessPartnerComponent(localStorageService, businessPartnerService, router, dialog, store, matSnackBar) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.businessPartnerService = businessPartnerService;
        this.router = router;
        this.dialog = dialog;
        this.store = store;
        this.matSnackBar = matSnackBar;
        this.businesPartList = [];
        this.pageSize = 5;
        this.pageIndex = 1;
        this.totalRecord = 0;
        this.search = '';
        this.unSub_businessPartnerList = null;
        this.unSub_deleteBusinessPartner = null;
        this.getBusinesPart();
        this.unSub_businessPartnerList = this.store.select('businessPartnerList').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            if (value['error'] == '') {
                _this.businesPartList = JSON.parse(JSON.stringify(value['data']['data']));
                _this.totalRecord = value['data']['rowCount'];
            }
            else {
                _this.openSnackBar(value['data']['errorMsg'] + ' please try again');
            }
        });
        this.unSub_deleteBusinessPartner = this.store.select('deleteBusinessPartner').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            if (value['error'] == '') {
                _this.openSnackBar("Deleted Successfully");
                _this.businesPartList = [];
                _this.getBusinesPart();
            }
            else {
                _this.openSnackBar(value['errorMsg'] + ' please try again');
            }
        });
    } // close constructor
    BusinessPartnerComponent.prototype.ngOnDestroy = function () {
        if (this.unSub_businessPartnerList != null && this.unSub_businessPartnerList != undefined)
            this.unSub_businessPartnerList.unsubscribe();
        if (this.unSub_deleteBusinessPartner != null && this.unSub_deleteBusinessPartner != undefined)
            this.unSub_deleteBusinessPartner.unsubscribe();
        this.store.dispatch({ type: "DELETE_BUSINESS_PART", payload: null });
    };
    BusinessPartnerComponent.prototype.ngOnInit = function () {
    };
    BusinessPartnerComponent.prototype.fetchRecords = function (event) {
        console.log(event);
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex + 1;
        console.log(this.pageSize, this.pageIndex);
        this.getBusinesPart();
    };
    BusinessPartnerComponent.prototype.searchPartner = function () {
        if (this.search != '' && this.search != undefined) {
            this.getBusinesPart();
        }
    };
    BusinessPartnerComponent.prototype.getBusinesPart = function () {
        console.log('get partner');
        this.businessPartnerService.getBusinessPartnerList.emit({ pageId: this.pageIndex, pageSize: this.pageSize, searchLike: '' });
    };
    BusinessPartnerComponent.prototype.goToaddBusinessPartner = function () {
        console.log("add partner");
        this.store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: null });
        this.store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: null });
        this.router.navigate(["mainDashboard/dashboard/addBusinessPartner"]);
    };
    BusinessPartnerComponent.prototype.openDeleteConfirmationDialog = function (businessPartner) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_business_partner_dialog_delete_business_partner_dialog_component__["a" /* DeleteBusinessPartnerDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined || result == null) {
                // console.log(result);
                return;
            }
            console.log(result);
            if (result.isDelete == "Y") {
                _this.deleteBusinessPartner(businessPartner);
            }
        });
    };
    BusinessPartnerComponent.prototype.deleteBusinessPartner = function (businessPartner) {
        console.log(businessPartner);
        var deleteObj = {
            uuid: businessPartner.uuid,
            orgId: businessPartner.orgId
        };
        this.businessPartnerService.deleteBusinessPartner.emit(deleteObj);
    };
    BusinessPartnerComponent.prototype.updateBusinessPartner = function (businessPartner) {
        this.store.dispatch({ type: "SELECTED_BUSINESS_PART_OBJ", payload: null });
        this.store.dispatch({ type: "SELECTED_BUSINESS_PART_OBJ", payload: businessPartner });
        this.store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: null });
        this.store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: null });
        if (businessPartner.type == 'customer' && businessPartner.freightLocation != null && businessPartner.freightLocation != '') {
            this.businessPartnerService.getSelFreightLocation.emit(businessPartner.freightLocation);
        }
        this.router.navigate(["mainDashboard/dashboard/updateBusinessPartner"]);
    };
    BusinessPartnerComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    return BusinessPartnerComponent;
}()); //close class
BusinessPartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-partner',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_businessPartnerService__["a" /* BusinessPartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_businessPartnerService__["a" /* BusinessPartnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]) === "function" && _f || Object])
], BusinessPartnerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=business-partner.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div {\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.weeklyButton {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n}\r\n\r\n.weeklyButton_S {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n    background: red;\r\n}\r\n\r\n\r\n.weeklyButton_S:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.weeklyButton:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n  }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <div style=\"text-align: center\">\r\n    <span class=\"header-text\">Are You Sure ?</span>\r\n  </div>\r\n\r\n  <div  style=\"padding: 10px;margin-top:15px;\" >\r\n    <button mat-raised-button (click)=\"cancel()\">NO</button>\r\n    <button style=\"margin-left: 10px\" mat-raised-button (click)=\"delete()\">YES</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBusinessPartnerDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by amit8.kumar on 12-12-2017.
 */


var DeleteBusinessPartnerDialog = (function () {
    function DeleteBusinessPartnerDialog(matDialogRef) {
        this.matDialogRef = matDialogRef;
    } //close constructor
    DeleteBusinessPartnerDialog.prototype.ngOnDestroy = function () {
    };
    DeleteBusinessPartnerDialog.prototype.delete = function () {
        this.matDialogRef.close({ isDelete: 'Y' });
    }; //close dialog addFeightUnit
    DeleteBusinessPartnerDialog.prototype.cancel = function () {
        this.matDialogRef.close({ isDelete: 'N' });
    };
    return DeleteBusinessPartnerDialog;
}());
DeleteBusinessPartnerDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-business-partner-dialog.component',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]) === "function" && _a || Object])
], DeleteBusinessPartnerDialog);

var _a;
//# sourceMappingURL=delete-business-partner-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    font-family: Helvetica;\r\n  }\r\n\r\n  .logo{\r\n    width: 100px;\r\n    padding: 2px;\r\n    height: 19px;\r\n  }\r\n\r\n  .service-name{\r\n    white-space: nowrap;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    margin-top:6px;\r\n    top: 28px;\r\n    left: 45px;\r\n    font-family: Helvetica;\r\n  }\r\n\r\n  .header{\r\n    padding:5px 0px 4px 15px;\r\n    background-color: #3F51B5;\r\n    color: white;\r\n    height: 45px;\r\n    box-shadow: 0px 0px 6px darkgrey;\r\n  }\r\n\r\n  .setting-button{\r\n    margin-left: auto;\r\n    padding: 11px;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .menu-button{\r\n    color: white;\r\n  }\r\n\r\n  .menu-button >>> .mat-button-focus-overlay{\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n\r\n  .menu-button:hover{\r\n    color: white !important;\r\n  }\r\n\r\n  .button-basic1 {\r\n    background-color: #3F51B5;\r\n    border: none;\r\n    font-size: 12px;\r\n    color: white;\r\n    margin-left:20px\r\n  }\r\n\r\n  .button-basic2 {\r\n    background-color: white;\r\n    border: none;\r\n    font-size: 12px;\r\n    /*margin-bottom:16px;*/\r\n    color:gray;\r\n    margin-left:20px;\r\n  }\r\n\r\n  .div-class {\r\n      /*margin-top:14px; */\r\n      border-bottom: 1px solid gray;\r\n  }\r\n\r\n  .button-basic2:focus {\r\n    background-color:#5b89ff !important;\r\n    color: white;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: calc(100vh - 55px);overflow: hidden;\" >\r\n    <!-- <div class=\"header\" fxLayout=\"row\" >\r\n      <img class=\"logo\" src=\"logo-light.png\" alt=\"Fretron Logo\"  >\r\n      <span class=\"service-name\" >Shipper Portal</span>\r\n      <button *ngFor = \"let button of headerButtons\" mat-button class=\"button-basic1\">\r\n             {{button}}\r\n        </button>   -->\r\n\r\n  <div mat-button class=\"div-class\">\r\n  <button *ngFor=\"let button of buttons\"   mat-button class=\"button-basic2\" (click)='onClick(button)'>\r\n    {{button}}\r\n  </button>\r\n</div>\r\n  <div>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n     <!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashBoardComponent = (function () {
    function DashBoardComponent(router) {
        this.router = router;
        // public headerButtons : any[] = [
        //     "FTL Orders",
        //     "LR Tracking",
        //     " Payment Status",
        //     "Statement of Accounts"
        // ]
        this.buttons = [
            "Users",
            "Business Partner",
        ];
    }
    DashBoardComponent.prototype.onClick = function (value) {
        if (value === "Users")
            this.router.navigate(["mainDashboard/dashboard/user"]);
        if (value == "Business Partner")
            this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
        if (value == "Freight Cluster")
            this.router.navigate(["mainDashboard/dashboard/freightClusterStatus"]);
        if (value == "Freight Locations")
            this.router.navigate(["mainDashboard/dashboard/freight_location"]);
        if (value == "Freight Zones")
            this.router.navigate(["mainDashboard/dashboard/freight_zones"]);
        if (value == "Transporter Volume Quota")
            this.router.navigate(['mainDashboard/dashboard/transporter']);
        if (value == "Freight Routes")
            this.router.navigate(['mainDashboard/dashboard/freight_routes']);
        if (value == "Load Allocation Polices")
            this.router.navigate(["mainDashboard/dashboard/load_allocation_polices"]);
    };
    return DashBoardComponent;
}());
DashBoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-component',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DashBoardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  font-family: Helvetica !important;\r\n}\r\n\r\n.my-map-search{\r\n  /*left: 0%;*/\r\n  /*width: 73%;*/\r\n  position: relative;\r\n  z-index: 10;\r\n  /*margin-top: 10px;*/\r\n}\r\n\r\n.my-toggle{\r\n  position: absolute;\r\n  z-index: 11;\r\n  left: 10px;\r\n  top: 33px;\r\n  height: 20px;\r\n  font-size: 12px;\r\n}\r\n\r\n.my-toggle >>> .mat-button-toggle-label-content {\r\n  line-height: 23px;\r\n  padding: 0px 10px;\r\n  color: black;\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  padding: 5px 26px 6px 12px;\r\n  display: inline-block;\r\n  border: 1.5px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n}\r\n.search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n  box-shadow: 0px 0px 5px #03a9f4;\r\n}\r\n\r\n.contact-detail{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding: 5px 10px;\r\n  margin: 0px 10px;\r\n  border: 1px solid antiquewhite;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" style=\"position: absolute;\" class=\"spinner\"></mat-spinner>\r\n<div (keyup.Enter)=\"updateBusinesPart()\">\r\n  <div style=\"font-size:21px;color:#8a8c8e;padding: 5px;\" >\r\n    <span>Update Business Partner</span>\r\n  </div>\r\n\r\n  <div>\r\n    <div  style=\"display:flex;flex-wrap: wrap;\">\r\n      <div  style=\"min-width: 200px;position: relative;padding: 10px;margin-top: 5px;width: 60%;\" >\r\n        <div style=\"position: relative;\" >\r\n\r\n          <div style=\"width:95%; margin-left: auto; margin-right: auto;margin-bottom: -31px;\">\r\n            <div class=\"my-map-search\">\r\n              <input [disabled]=\"businesPartnerObject.type != 'customer'\" id=\"pac-input\" type=\"text\" class=\"search\" matTooltip=\"Address search Here\" placeholder=\"Address Search Here\" >\r\n              <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 10px;top: 7px;font-size: 15px;position: absolute;\"></i>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-button-toggle-group [disabled] =\"businesPartnerObject.type != 'customer'\"  class=\"my-toggle\" #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapType\">\r\n            <mat-button-toggle value=\"hybrid\">\r\n              <span>Satellite</span>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;\" [style.opacity]=\"(mapType =='roadmap')?'.8':'.6'\">\r\n              <span>Map</span>\r\n            </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n\r\n          <agm-map  [mapTypeId]=\"mapType\" style=\"height: 50vh;\" >\r\n              <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex style=\"padding: 5px\" >\r\n        <mat-form-field style=\"width: 100%\">\r\n          <input matInput [disabled]=true  [value]=\"businesPartnerObject.type\" placeholder=\"Type\">\r\n        </mat-form-field>\r\n\r\n        <div>\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input matInput [disabled]=\"isClicked ==true\" [style.color]=\"isFRNValid?'black':'red'\" [(ngModel)]=\"fretronReferenceNo\" placeholder=\"Fretron Reference No\" (keyup)=\"checkFretronReferenceNumber(fretronReferenceNo)\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"businesPartnerObject.partnerName\" placeholder=\"Business Partner Name\" required>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input [disabled]=\"isClicked ==true\"  matInput [(ngModel)]=\"businesPartnerObject.address\" placeholder=\"Address\">\r\n          </mat-form-field>\r\n\r\n          <div style=\"display: flex;flex-wrap: wrap;\" >\r\n            <mat-form-field style=\"margin-right: auto\" >\r\n              <input [disabled]=\"isClicked ==true\"  matInput  [(ngModel)]=\"businesPartnerObject.state\" placeholder=\"State\" >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"margin-left: 2px\" >\r\n              <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"businesPartnerObject.zip\" placeholder=\"PIN/ZIP\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contact-detail\">\r\n      <mat-form-field style=\"margin-right: 10px;width: 30%;min-width: 200px;\">\r\n        <input matInput [disabled]=\"isClicked ==true\"  [(ngModel)]=\"businesPartnerObject.contactPersonName\" placeholder=\"Contact Person Name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=\"margin-right :10px;margin-left :10px;width: 30%;min-width: 200px;\" >\r\n        <input [disabled]=\"isClicked ==true\"  matInput type=\"email\" [(ngModel)]=\"businesPartnerObject.emailId\" placeholder=\"Email\"\r\n               pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" >\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=\"margin-left :10px;width: 30%;min-width: 200px;\">\r\n        <input [disabled]=\"isClicked ==true\"  matInput type=\"number\" [(ngModel)]=\"businesPartnerObject.mobileNo\" placeholder=\"MobileNo\" onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\r\n               pattern=\"[0-9]{10}\" >\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"text-align: right;padding: 12px;\" >\r\n    <button matTooltip=\"CANCEL / BACK\"  mat-raised-button (click)=\"cancel()\" class=\"status-button\" >Cancel</button>\r\n    <button [disabled]=\"businesPartnerObject.partnerName =='' || isClicked ==true\" matTooltip=\"Add New Business Partner\" color=\"primary\"  mat-raised-button (click)=\"updateBusinesPart()\" class=\"status-button\" >Update</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateBusinessPartner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__ = __webpack_require__("../../../../../src/service/create-freigth-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_businessPartnerService__ = __webpack_require__("../../../../../src/service/businessPartnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UpdateBusinessPartner = (function () {
    function UpdateBusinessPartner(localStorageService, router, businessPartnerService, createFreightLocation, dialog, store, matSnackBar) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.router = router;
        this.businessPartnerService = businessPartnerService;
        this.createFreightLocation = createFreightLocation;
        this.dialog = dialog;
        this.store = store;
        this.matSnackBar = matSnackBar;
        this.isSpinner = false;
        // public mapOption={isMapDraggable:true,disableDefaultUI:true,
        //                    scrollwheel:true,clickableIcons:true,zoomControl:true,streetViewControl:true
        //                   };
        this.mapType = 'roadmap';
        this.fretronReferenceNo = '';
        this.businesPartnerObject = {
            uuid: '',
            orgId: '',
            type: '',
            partnerName: '',
            freightLocation: '',
            address: '',
            state: '',
            zip: '',
            contactPersonName: '',
            emailId: '',
            mobileNo: ''
        };
        this.fretronReferenceNoUuid = null;
        this.polygon = null;
        this.oldPolyBoundry = null;
        this.latitude = null;
        this.longitude = null;
        this.isClicked = false;
        this.unSub_selectedBusinessPartnerObj = null;
        this.unSub_selectedfreightLoc = null;
        this.unSub_updateBusinessPartner = null;
        this.unSub_checkFretronReferenceNumber = null;
        this.isFRNValid = true;
        this.orgType = '';
        this.unSub_selectedBusinessPartnerObj = this.store.select('selectedBusinessPartnerObj').subscribe(function (value) {
            if (value == null) {
                _this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
            }
            else {
                console.log(value);
                _this.businesPartnerObject.uuid = value['uuid'],
                    _this.businesPartnerObject.orgId = value['orgId'],
                    _this.businesPartnerObject.type = value['type'],
                    _this.businesPartnerObject.partnerName = value['partnerName'],
                    _this.fretronReferenceNo = value['fretronReferenceNo'],
                    _this.businesPartnerObject.freightLocation = value['freightLocation'],
                    _this.businesPartnerObject.address = value['address'],
                    _this.businesPartnerObject.state = value['state'],
                    _this.businesPartnerObject.zip = value['zip'],
                    _this.businesPartnerObject.contactPersonName = value['contactPersonName'],
                    _this.businesPartnerObject.emailId = value['emailId'],
                    _this.businesPartnerObject.mobileNo = value['mobileNo'];
            }
        });
        this.unSub_updateBusinessPartner = this.store.select('updateBusinessPartner').subscribe(function (value) {
            if (value == null) {
                return;
            }
            else {
                console.log(value);
                _this.isClicked = false;
                if (value['error'] == '') {
                    _this.openSnackBar("successfully Updated");
                    _this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
                }
                else {
                    console.log(value['errorMsg']);
                    _this.openSnackBar(value['errorMsg']);
                }
            }
        });
        this.unSub_checkFretronReferenceNumber = this.store.select('fretronReferenceNumber').subscribe(function (res) {
            console.log(res);
            console.log(res);
            if (res == null)
                return;
            if (res['status'] == 200 && res['organisation'] != undefined) {
                _this.orgType = res['organisation']['type'];
                _this.fretronReferenceNoUuid = res['organisation']['uuid'];
                _this.isFRNValid = true;
            }
            else {
                _this.orgType = null;
                _this.fretronReferenceNoUuid = null;
                _this.isFRNValid = false;
            }
            if (_this.orgType != null) {
                if (_this.businesPartnerObject['type'].toUpperCase() == "TRANSPORTER") {
                    if (_this.businesPartnerObject['type'].toUpperCase() == _this.orgType)
                        _this.isFRNValid = true;
                    else
                        _this.isFRNValid = false;
                }
                else {
                    if (_this.orgType == "TRANSPORTER")
                        _this.isFRNValid = false;
                    else
                        _this.isFRNValid = true;
                }
            }
            if (_this.fretronReferenceNo == undefined || _this.fretronReferenceNo.length == 0)
                _this.isFRNValid = true;
        });
    } // close constructor
    UpdateBusinessPartner.prototype.ngOnInit = function () {
        var _this = this;
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            var points = [];
            console.log(points);
            _this.unSub_selectedfreightLoc = _this.store.select('selectedFreightLoc').subscribe(function (value) {
                if (value == null) {
                    return;
                }
                else {
                    if (value['error'] == '') {
                        _this.oldPolyBoundry = value['data']['data']['boundary'];
                        for (var i = 0; i < value['data']['data']['boundary'].length; i++) {
                            points.push({ lat: value['data']['data']['boundary'][i]['latitude'], lng: value['data']['data']['boundary'][i]['longitude'] });
                        }
                        console.log(points);
                        _this.polygon = _this.addPolygone(_this.map, points, true, '#FF0000', '#FF0000', value['data']['data']['centre']);
                        _this.placesServices();
                    }
                    else {
                        console.log(value['errorMsg']);
                    }
                }
            }); // store close
        });
    };
    UpdateBusinessPartner.prototype.ngOnDestroy = function () {
        if (this.unSub_selectedBusinessPartnerObj != null && this.unSub_selectedBusinessPartnerObj != undefined)
            this.unSub_selectedBusinessPartnerObj.unsubscribe();
        if (this.unSub_selectedfreightLoc != null && this.unSub_selectedfreightLoc != undefined)
            this.unSub_selectedfreightLoc.unsubscribe();
        if (this.unSub_updateBusinessPartner != null && this.unSub_updateBusinessPartner != undefined)
            this.unSub_updateBusinessPartner.unsubscribe();
        if (this.unSub_checkFretronReferenceNumber != null && this.unSub_checkFretronReferenceNumber != undefined)
            this.unSub_checkFretronReferenceNumber.unsubscribe();
        this.store.dispatch({ type: "SELECTED_BUSINESS_PART_OBJ", payload: null });
        this.store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: null });
        this.store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: null });
        this.store.dispatch({ type: "FRETRON_REFERENCE_NUMBER", payload: null });
    };
    UpdateBusinessPartner.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor, centre) {
        console.log(centre);
        // this.latitude =centre.latitude;
        // this.longitude =centre.longitude;
        var myPolygon = new google.maps.Polygon({
            paths: points,
            editable: editable,
            strokeColor: strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35,
        });
        myPolygon.setMap(map);
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
            //  And increase the bounds to take this point
            bounds.extend(points[i]);
        }
        this.map.fitBounds(bounds);
        return myPolygon;
    };
    UpdateBusinessPartner.prototype.disableMap = function () {
        console.log("disable unit");
        // myPolygon.setOptions({fillColor: '#858585', strokeColor: '#353535' });
        // this.map.isMapDraggable =false;
        // this.map.disableDefaultUI =false;
        // this.map.scrollwheel =false;
        // this.map.clickableIcons =false;
        // this.map.zoomControl =false;
        // this.map.streetViewControl =false;
    };
    UpdateBusinessPartner.prototype.updateBusinesPart = function () {
        if (this.isFRNValid) {
            var businessPart = JSON.parse(JSON.stringify(this.businesPartnerObject));
            if (businessPart.type == 'customer') {
                var obj = null;
                var vertices = this.polygon.getPath();
                if (vertices == undefined || vertices == null) {
                    this.openSnackBar("Please select Location on Map.");
                    return false;
                }
                var polygonPoints = [];
                for (var i = 0; i < vertices.getLength(); i++) {
                    var xy = vertices.getAt(i);
                    polygonPoints.push({ latitude: xy.lat(), longitude: xy.lng() });
                    // console.log(xy.lat()+"     "+xy.lng());
                }
                if (polygonPoints.length <= 0) {
                    this.openSnackBar("Please select Location on map");
                    return;
                }
                if (JSON.stringify(this.oldPolyBoundry) != JSON.stringify(polygonPoints)) {
                    businessPart['boundary'] = polygonPoints;
                }
            }
            if (this.fretronReferenceNoUuid == null || this.fretronReferenceNoUuid == null) {
                businessPart.fretronReferenceNo = null;
            }
            if (this.fretronReferenceNo != '') {
                businessPart.fretronReferenceNo = this.fretronReferenceNo;
                businessPart['fretronReferenceNoUuid'] = this.fretronReferenceNoUuid;
            }
            console.log(businessPart);
            if (this.checkValidation()) {
                this.isClicked = true;
                this.businessPartnerService.updateBusinessPartner.emit(businessPart);
            }
        }
        else {
            this.openSnackBar("Fretron reference number doesn't exist");
        }
    }; // close methods add freight location
    UpdateBusinessPartner.prototype.checkValidation = function () {
        if (this.businesPartnerObject.partnerName == '' || this.businesPartnerObject.partnerName == undefined || this.businesPartnerObject.partnerName == null) {
            this.openSnackBar("Please fill Business Partner Name");
            return false;
        }
        var isEmailValid = true;
        if (this.businesPartnerObject.emailId != '') {
            isEmailValid = this.emailValidation();
        }
        console.log("all valiation true");
        return (true && isEmailValid);
    };
    UpdateBusinessPartner.prototype.emailValidation = function () {
        var patt = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");
        var isEmailValid = patt.test(this.businesPartnerObject.emailId);
        if (isEmailValid == false) {
            this.openSnackBar("Please fill valid Email ID or Leave Empty");
            return false;
        }
        return true;
    };
    UpdateBusinessPartner.prototype.placesServices = function () {
        var _this = this;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        console.log(input);
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.addListener('bounds_changed', function () {
            searchBox.setBounds(_this.map.getBounds());
        });
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            // places.forEach((place) => {
            if (!places[0].geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: places[0].icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            // Create a marker for each place.
            var currentMarker = new google.maps.Marker({
                // map: this.map,
                // icon: icon,
                title: places[0].formatted_address,
                position: places[0].geometry.location
            });
            // console.log(places[0].geometry.location);
            _this.latitude = currentMarker['position'].lat();
            _this.longitude = currentMarker['position'].lng();
            console.log(_this.latitude + " " + _this.longitude);
            _this.businesPartnerObject.address = '';
            _this.businesPartnerObject.state = '';
            _this.businesPartnerObject.address = places[0].formatted_address;
            if (places[0].address_components != undefined) {
                for (var i = 0; i < places[0].address_components.length; i++) {
                    if (places[0].address_components[i]['types'][0] == 'administrative_area_level_1') {
                        console.log(places[0].address_components[i]['long_name']);
                        _this.businesPartnerObject.state = places[0].address_components[i]['long_name'];
                    }
                }
            }
            //  this.polygon.setMap(this.map);
            console.log(places[0].formatted_address);
            // this.markers.push(currentMarker);
            // ********** for show marker according to screen ********
            if (places[0].geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(places[0].geometry.viewport);
            }
            else {
                bounds.extend(places[0].geometry.location);
            }
            // ****** for show marker accoeding to screen  ************
            // });
            _this.map.fitBounds(bounds);
            _this.onAddLocation();
        });
    }; // close placesServices
    UpdateBusinessPartner.prototype.onAddLocation = function () {
        var obj = { latitude: this.latitude, longitude: this.longitude };
        console.log('Set New Location Obj');
        console.log(obj);
        if (this.polygon != null)
            this.polygon.setMap(null);
        var points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        this.polygon.setPath(points);
        this.polygon.setMap(this.map);
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
            //  And increase the bounds to take this point
            bounds.extend(points[i]);
        }
        this.map.fitBounds(bounds);
        // this.map.setZoom(14);
    };
    UpdateBusinessPartner.prototype.getNPointsCircularPolygone = function (center, dist, n) {
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
    }; //close methods getNPointsCircularPolygone
    UpdateBusinessPartner.prototype.cancel = function () {
        console.log("nothing done");
        this.router.navigate(["mainDashboard/dashboard/businessPartner"]);
    };
    UpdateBusinessPartner.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    UpdateBusinessPartner.prototype.checkFretronReferenceNumber = function (fretronReferenceNumber) {
        if (fretronReferenceNumber != null || fretronReferenceNumber != undefined || fretronReferenceNumber != '') {
            var frPath = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["b" /* path */].CHECK_FRETRON_REFERECE_NUMBER + '?fretronReferenceNumber=' + fretronReferenceNumber;
            this.businessPartnerService.getFretronReferenceNumber.emit(frPath);
        }
    };
    UpdateBusinessPartner.prototype.checkFRN = function () {
        var frPath = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["b" /* path */].CHECK_FRETRON_REFERECE_NUMBER + '?fretronReferenceNumber=' + this.fretronReferenceNo;
        if (this.fretronReferenceNo != '' || this.fretronReferenceNo != null || this.fretronReferenceNo != undefined)
            this.businessPartnerService.getFretronReferenceNumber.emit(frPath);
    };
    return UpdateBusinessPartner;
}()); //close class
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", Object)
], UpdateBusinessPartner.prototype, "agmMap", void 0);
UpdateBusinessPartner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-update-business-partner',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_businessPartnerService__["a" /* BusinessPartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_businessPartnerService__["a" /* BusinessPartnerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__["a" /* CreateFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_create_freigth_location_service__["a" /* CreateFreightLocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]) === "function" && _g || Object])
], UpdateBusinessPartner);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=update-business-partner.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expand-search {\r\n    border: 1.5px solid #b0bcc1;\r\n    width: 100%;\r\n    font-size: 12px;\r\n    padding: 5px 26px 5px 12px;\r\n    display: inline-block;\r\n    /*border: 1.5px solid #ccc;*/\r\n    border-radius: 17px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-width: 600px;box-sizing: border-box\">\r\n    <div *ngIf=\"isSpinner\" style=\"margin-left: 500px\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n  <!--show create freight cluster Dialog -->\r\n  <div *ngIf=\"isShowCreateDialog\" class=\"mycustomDialog\">\r\n    <div class=\"modal-content-create\">\r\n        <div style=\"text-align:center;height:30px;padding: 8px; background-color: rgb(57, 146, 247);color: white;\">\r\n            <label style=\"font-size: 20px\">Add New Freight Cluster</label><br><br>            \r\n        </div>\r\n        \r\n        <div class=\"form-container\">\r\n          \r\n            <mat-form-field style=\"width:100%\">\r\n              <input matInput [(ngModel)]=\"name\" placeholder=\"Freight Cluster Name\" required>\r\n            </mat-form-field>\r\n          \r\n            <mat-form-field style=\"width:45%\">\r\n                <input matInput [(ngModel)]=\"level\" placeholder=\"Level\" required>\r\n            </mat-form-field>\r\n            <!-- <mat-form-field style=\"width:47%;margin-left:60px\">\r\n                <input matInput [(ngModel)]=\"source\" placeholder=\"Source\" required>\r\n            </mat-form-field> -->\r\n            <mat-form-field style=\"width:100%;\">\r\n                <input matInput [(ngModel)]=\"state\" placeholder=\"State\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:100%\">\r\n                <input matInput [(ngModel)]=\"country\" placeholder=\"Country\" required>\r\n            </mat-form-field>\r\n            \r\n            <!-- <mat-form-field style=\"width:100%\">\r\n                <input matInput [(ngModel)]=\"orgId\" placeholder=\"Organisation Id\">\r\n            </mat-form-field>          -->\r\n        </div>\r\n        <div style=\"margin-left: 250px;margin-top:30px\">\r\n          <button mat-raised-button class=\"button\" (click)=\"cancel()\" style=\"margin-left:80px\">Cancel</button>\r\n          <button mat-raised-button class=\"button\" (click)=\"addFreightCluster()\">Save</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--end create freight cluster Dialog -->\r\n<!--show edit freight cluster Dialog -->\r\n<div *ngIf=\"isShowEditDialog\" class=\"mycustomDialog\">\r\n    <div class=\"modal-content-edit\">\r\n        <div style=\"text-align:center;height:25px;padding: 8px; background-color: rgb(57, 146, 247);color: white;\">\r\n            <label style=\"font-size: 20px;\">Edit Freight Cluster</label><br><br>            \r\n        </div>\r\n        \r\n        <div class=\"form-container\">\r\n          \r\n            <mat-form-field style=\"width:100%\">\r\n              <input matInput [(ngModel)]=\"name\" placeholder=\"Freight Cluster Name\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:100%;\">\r\n                    <input matInput [(ngModel)]=\"level\" placeholder=\"Level\" required>\r\n                </mat-form-field>\r\n            <mat-form-field style=\"width:45%\">\r\n                <input matInput [(ngModel)]=\"state\" placeholder=\"State\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:47%;margin-left:45px\">\r\n                <input matInput [(ngModel)]=\"country\" placeholder=\"Country\" required>\r\n            </mat-form-field>      \r\n        </div>\r\n        <div style=\"margin-left: 250px;margin-top:90px\">\r\n          <button mat-raised-button class=\"button\" (click)=\"cancelEdit()\" style=\"margin-left:80px\">Cancel</button>\r\n          <button mat-raised-button class=\"button\" (click)=\"okEdit()\">Save</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--end edit freight cluster Dialog -->\r\n  <!-- *****************search freight cluster**************************** -->\r\n  <div style=\"position:relative;margin-top: -1px;margin-left:69%;width:250px\" >\r\n    <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n    <input #searchcluster [(ngModel)]=\"searchCluster\" class=\"expand-search\" (keyup)=\"isavailableList=true;searchClusterName(searchcluster.value);\" placeholder=\"Search\">\r\n  </div>\r\n  <!-- todo -->\r\n  <!-- <div *ngIf=\"isFreightCluster\" style=\"z-index: 5;overflow-y:auto; position: absolute;background-color: rgba(245,245,245,1);width:249px;margin-top:0px;margin-left:68%\" >\r\n    <ul style=\"list-style: none;margin-left: -32px;\"  *ngFor=\"let cluster of clusterName\">\r\n        <li (click)=\"setCluster(cluster)\"  >{{cluster?.name}}<hr></li>\r\n    </ul>            \r\n  </div>  -->\r\n  <!-- end --> \r\n\r\n    <div>\r\n        <div style=\"box-shadow: 0px 4px 12px darkgray;margin-left: 40px;height: 40px; margin-right: 40px;margin-top:10px; font-size: 12px\" fxLayout=\"row\">\r\n          <span fxFlex ><h4>&nbsp;&nbsp;Cluster Id</h4></span>\r\n          <span fxFlex ><h4>&nbsp;&nbsp;&nbsp;&nbsp;Name</h4></span>\r\n          <span fxFlex ><h4>Level</h4></span>\r\n          <span fxFlex ><h4>Source</h4></span>\r\n          <span fxFlex ><h4>&nbsp;&nbsp;&nbsp;State</h4></span>\r\n          <span fxFlex ><h4>&nbsp;&nbsp;&nbsp;Country</h4></span>\r\n          <span fxFlex ></span>\r\n          <span fxFlex ></span>          \r\n        </div>\r\n\r\n        <div  *ngIf=\"isavailableList\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px;margin-top:1px; overflow-y: auto; height: 400px\">        \r\n            <mat-card *ngFor=\"let freight of freightClusterNameList\" fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n            <span fxFlex>{{freight.id}}</span>\r\n            <span fxFlex>{{freight.name}}</span>\r\n            <span fxFlex>{{freight.level}}</span>\r\n            <span fxFlex> &nbsp;&nbsp;&nbsp;{{freight.source}}</span>\r\n            <span fxFlex style=\"margin-left:30px\">{{freight.state}}</span>\r\n            <span fxFlex style=\"margin-left:15px\">{{freight.country}}</span>\r\n            <span fxFlex>\r\n              <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editFreightCluster(freight)\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </span>\r\n            <span fxFlex>\r\n            <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteFreightCluster(freight)\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </span>\r\n          </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-fab color=\"primary\" style=\"position: absolute; top: 90%;left:90%\" (click)=\"addFreightClusterView()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\r\n    </button>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightClusterStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_freight_cluster_services__ = __webpack_require__("../../../../../src/service/freight-cluster-services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FreightClusterStatusComponent = (function () {
    function FreightClusterStatusComponent(clusterService, _store, router, snackBar) {
        var _this = this;
        this.clusterService = clusterService;
        this._store = _store;
        this.router = router;
        this.snackBar = snackBar;
        this.freightClusterList = [];
        this.freightClusterNameList = [];
        this.unSub_freightClusterList = null;
        this.unSub_createFreightCluster = null;
        this.unSub_updateFreightCluster = null;
        this.unSub_deleteFreightCluster = null;
        this.isFreightCluster = false;
        this.isavailable = false;
        this.isavailableList = false;
        this.isSpinner = true;
        this.isStoreLoaded = false;
        this.isShowCreateDialog = false;
        this.isShowEditDialog = false;
        this.clusterName = [];
        this.clusterService.initialize();
        this.clusterService.freightClusterList.emit();
        this.unSub_freightClusterList = this._store.select('freightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.isSpinner = false;
                _this.isavailableList = true;
                _this.freightClusterList = value['data']['data'];
                _this.freightClusterNameList = _this.freightClusterList;
                console.log(_this.freightClusterList);
                //console.log(obj);
            }
        });
        this.unSub_createFreightCluster = this._store.select('createfreightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight Cluster created successfully";
                _this.openSnackBar(_this.message);
                _this.isShowCreateDialog = false;
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
        this.unSub_updateFreightCluster = this._store.select('updatefreightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight Cluster updated successfully";
                _this.openSnackBar(_this.message);
                _this.isShowCreateDialog = false;
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
        this.unSub_deleteFreightCluster = this._store.select('deletefreightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight Cluster deleted successfully";
                _this.openSnackBar(_this.message);
                _this.isShowCreateDialog = false;
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
    }
    FreightClusterStatusComponent.prototype.addFreightClusterView = function () {
        this.name = null;
        this.level = null;
        this.source = null;
        this.state = null;
        this.country = null;
        this.orgId = null; //value['']
        this.isShowCreateDialog = true;
        // this.router.navigate(["dashboard/createFreightCluster"]);
    };
    FreightClusterStatusComponent.prototype.addFreightCluster = function () {
        if (this.name == null || this.name == undefined || this.name == "") {
            this.openSnackBar("Please fill Cluster Name");
            return;
        }
        if (this.level == null || this.level == undefined || this.level == "") {
            this.openSnackBar("Please fill Lelel");
            return;
        }
        // if (this.source==null ||this.source==undefined || this.source == "" ) {
        //   this.openSnackBar("Please fill source");
        //   return;
        // }
        if (this.state == null || this.state == undefined || this.state == "") {
            this.openSnackBar("Please fill State");
            return;
        }
        if (this.country == null || this.country == undefined || this.country == "") {
            this.openSnackBar("Please fill Country");
            return;
        }
        // if (this.orgId==null ||this.orgId==undefined || this.orgId == "" ) {
        //   this.openSnackBar("Please fill source");
        //   return;
        // }
        var obj = {
            "name": this.name,
            "level": this.level,
            "source": "manual",
            "state": this.state,
            "country": this.country,
            "orgId": this.orgId
        };
        console.log(obj);
        this.clusterService.createFreightCluster.emit(obj);
        this.clusterService.freightClusterList.emit();
    };
    FreightClusterStatusComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'OK', { duration: 4000 });
    };
    FreightClusterStatusComponent.prototype.cancel = function () {
        this.isShowCreateDialog = false;
        // this.router.navigate(["dashboard/freightClusterStatus"]);
    };
    FreightClusterStatusComponent.prototype.searchClusterName = function (value) {
        this.clusterName = [];
        if (value != '') {
            for (var i = 0; i < this.freightClusterList.length; i++) {
                var str = this.freightClusterList[i]['name'].toLowerCase();
                if (str.includes(value.toLowerCase())) {
                    this.clusterName.push(this.freightClusterList[i]);
                }
            }
            this.freightClusterNameList = this.clusterName;
            return;
        }
        this.freightClusterNameList = this.freightClusterList;
    };
    FreightClusterStatusComponent.prototype.setCluster = function (cluster) {
        this.clusterObj = cluster;
        this.isavailable = true;
        this.searchCluster = null;
        this.isavailableList = false;
        this.isFreightCluster = false;
        console.log(cluster);
    };
    FreightClusterStatusComponent.prototype.okEdit = function () {
        var obj = {
            "name": this.name,
            "level": this.level,
            "state": this.state,
            "country": this.country,
            "cluster_uuid": this.clusterUuid
        };
        console.log(obj);
        this.clusterService.updateFreightCluster.emit(obj);
        this.isShowEditDialog = false;
    };
    FreightClusterStatusComponent.prototype.cancelEdit = function () {
        this.isShowEditDialog = false;
    };
    FreightClusterStatusComponent.prototype.editFreightCluster = function (value) {
        this.name = value['name'];
        this.level = value['level'];
        this.clusterUuid = value['cluster_uuid'],
            this.source = value['source'];
        this.state = value['state'];
        this.country = value['country'];
        this.orgId = null; //value['']
        this.isShowEditDialog = true;
    };
    FreightClusterStatusComponent.prototype.deleteFreightCluster = function (value) {
        var obj = {
            "name": value['name']
        };
        this.clusterService.deleteFreightCluster.emit(obj);
    };
    FreightClusterStatusComponent.prototype.ngOnInit = function () {
    };
    FreightClusterStatusComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_freightClusterList != 'undefined' && this.unSub_freightClusterList != null && this.unSub_freightClusterList != undefined) {
            // console.log(" unSub_destinationAddress");
            this.unSub_freightClusterList.unsubscribe();
        }
        if (typeof this.unSub_createFreightCluster != 'undefined' && this.unSub_createFreightCluster != null && this.unSub_createFreightCluster != undefined) {
            this.unSub_createFreightCluster.unsubscribe();
        }
        if (typeof this.unSub_deleteFreightCluster != 'undefined' && this.unSub_deleteFreightCluster != null && this.unSub_deleteFreightCluster != undefined) {
            this.unSub_deleteFreightCluster.unsubscribe();
        }
        if (typeof this.unSub_updateFreightCluster != 'undefined' && this.unSub_updateFreightCluster != null && this.unSub_updateFreightCluster != undefined) {
            this.unSub_updateFreightCluster.unsubscribe();
        }
    };
    return FreightClusterStatusComponent;
}());
FreightClusterStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-freight-cluster',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_freight_cluster_services__["a" /* FreightClusterServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_freight_cluster_services__["a" /* FreightClusterServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _d || Object])
], FreightClusterStatusComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=freight-cluster-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* div{\r\n    font-family: Helvetica;\r\n  }\r\n  \r\n  .container{\r\n    padding: 5px 10px 5px 5px;\r\n    width: 100%;\r\n  }\r\n  \r\n  md-card{\r\n    padding: 15px;\r\n    font-family: Helvetica;\r\n  }\r\n  \r\n  .custome-button {\r\n    height: 26px;\r\n    font-size: 13px;\r\n    line-height: 26px;\r\n    border-radius: 5px;\r\n  } */\r\n  \r\n  .status-button{\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float : right;\r\n    margin-left: 10px;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n  \r\n  .status-button:hover\r\n  {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n  }\r\n  \r\n  /* .current-status-button{\r\n    background-color: #FFB75A;\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    color:#FFFFFF;\r\n  }\r\n  \r\n  .expand-search {\r\n    border: 1.5px solid #b0bcc1;\r\n    width: 100%;\r\n    font-size: 12px;\r\n    padding: 5px 26px 5px 12px;\r\n    display: inline-block;\r\n    border-radius: 17px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n  }\r\n  \r\n  /* search box*/\r\n  /* .expand-search:focus{\r\n    outline: none;\r\n    border: 1.5px solid #03a9f4;\r\n  }\r\n  \r\n  .margins span{\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .custome-circle i{\r\n    font-size: 8px;\r\n    margin-top: 35%;\r\n    margin-left: -30%;\r\n    position: absolute;\r\n  }\r\n  \r\n  .custome-circle{\r\n    font-size: 9px;\r\n    padding: 1px 6px;\r\n    border: 1px solid;\r\n    position: relative;\r\n    border-radius: 50%;\r\n  } */\r\n  td {\r\n    width: 150px;\r\n    height: 25px;\r\n    /* text-align: center; */\r\n    border-bottom: 1px solid #ddd;\r\n    color : black;\r\n    font-size: 12px;\r\n    padding-top: 5px;\r\n    padding-left: 40px; \r\n  }\r\n\r\n    .table1 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n      border-top : 1px solid #ddd;\r\n      border-left: 1px solid #ddd;\r\n      border-right: 1px solid #ddd;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n    }\r\n\r\n    .table2 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n    }\r\n\r\n    .expand-search {\r\n      border: 1.5px solid #b0bcc1;\r\n      width: 18%;\r\n      font-size: 12px;\r\n      padding: 5px 26px 5px 12px;\r\n      display: inline-block;\r\n      border-radius: 17px;\r\n      box-sizing: border-box;\r\n      outline: none;\r\n      margin-left: 900px;\r\n    }\r\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-width: 700px;box-sizing: border-box\">\r\n  <!-- <div style=\"display:flex;padding:7px\" > -->\r\n      \r\n       \r\n\r\n      \r\n      \r\n  <div style=\"align-items: right; margin-right: 40px\">\r\n    <!-- <input #input matInput placeholder=\"Search here\" style=\"margin-left: 38px; border-radius: 8px; color:black\" (keyup)=\"search(input.value)\"> -->\r\n\r\n    <div style=\"position:relative;margin-top: -1px;\" >\r\n        <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 141px;position: absolute;font-size: 13px;color: black;\"></i>\r\n        <input #location [(ngModel)]=\"input\" class=\"expand-search\"  placeholder=\"Search\" (keyup)=\"search(location.value)\">\r\n      </div>\r\n\r\n    <!-- <div *ngIf=\"fl.length>0 && searchedClick\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:0px;margin-left:38px\" >\r\n         <ul style=\"list-style: none;margin-left: -32px;\"  *ngFor = \"let data of fl\">\r\n            <li (click)=\"onSearchClick(data)\">{{data?.name}}<hr></li>\r\n        </ul>\r\n    </div> -->\r\n    <!-- <button mat-raised-button class=\"status-button\" (click)=\"openDialog()\">Add New Freight Location</button> -->\r\n    <!-- <button  mat-raised-button class=\"status-button\" (click)=\"editEvent()\">Demo buuton</button> -->\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n  <div>\r\n  <div style=\"margin-left: 50px; margin-right: 40px; font-size: 12px\" fxLayout=\"row\">\r\n    <span fxFlex><h4>Freight Location</h4></span>\r\n    <!-- <span fxFlex><h4>Type</h4></span> -->\r\n    <span style=\"margin-right: 50px\">\r\n        <mat-form-field style=\"width:80px\">\r\n            <mat-select [(ngModel)]=\"filterBy\" placeholder=\"Type\" (change)=\"onFilter()\">\r\n              <mat-option value=\"plant\">Plant</mat-option>\r\n              <mat-option value=\"factory\">Factory</mat-option>\r\n              <mat-option value=\"warehouse\">Warehouse</mat-option>\r\n              <mat-option value=\"constructionsite\">construction Site</mat-option>\r\n              <mat-option value=\"mine\">Mine</mat-option>\r\n              <mat-option value=\"port\">Port</mat-option>\r\n              <mat-option value=\"railyard\">Railyard</mat-option>\r\n              <mat-option value=\"ict\">ICT</mat-option>\r\n              <mat-option value=\"other\">Other</mat-option>\r\n              <mat-option value=\"all\">All</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n    </span>\r\n    <span fxFlex><h4>Address</h4></span>\r\n    <span fxFlex><h4>source</h4></span>\r\n    <span fxFlex><h4>Zone 1</h4></span>\r\n    <span fxFlex><h4>Zone 2</h4></span>\r\n    <span fxFlex><h4>Zone 3</h4></span>\r\n    <span fxFlex></span>\r\n    <span fxFlex></span>\r\n  </div>\r\n\r\n  <div *ngIf=\"isFiltered?false:true && fl.length>0?false:true\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px; overflow-y: auto; height: 300px\">\r\n    <mat-card *ngFor=\"let value of data.data\" fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n      <span fxFlex>{{value.name}}</span>\r\n      <span fxFlex>{{value.type}}</span>\r\n      <span fxFlex style=\"margin-left: -5px\">{{value.address}}</span>\r\n      <span fxFlex>{{value.source}}</span>\r\n      <span fxFlex>{{value.zone1}}</span>\r\n      <span fxFlex>{{value.zone2}}</span>\r\n      <span fxFlex>{{value.zone3}}</span>\r\n      <span fxFlex>\r\n        <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editEvent(value)\">\r\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </span>\r\n      <span fxFlex>\r\n        <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteEvent(value.id)\">\r\n          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </span>\r\n    </mat-card>\r\n    <!-- <div>name</div> -->\r\n  </div>\r\n\r\n  <div *ngIf=\"isFiltered\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px; overflow-y: auto; height: 300px\">\r\n      <mat-card *ngFor=\"let value of filteredLocations\" fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n        <span fxFlex>{{value.name}}</span>\r\n        <span fxFlex>{{value.type}}</span>\r\n        <span fxFlex style=\"margin-left: -5px\">{{value.address}}</span>\r\n        <span fxFlex>{{value.source}}</span>\r\n        <span fxFlex>{{value.zone1}}</span>\r\n        <span fxFlex>{{value.zone2}}</span>\r\n        <span fxFlex>{{value.zone3}}</span>\r\n        <span fxFlex>\r\n          <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editEvent(value)\">\r\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </span>\r\n        <span fxFlex>\r\n          <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteEvent(value.id)\">\r\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </span>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"fl.length>0\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px; overflow-y: auto; height: 300px\">\r\n      <mat-card *ngFor=\"let value of fl\" fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n        <span fxFlex>{{value?.name}}</span>\r\n        <span fxFlex>{{value?.type}}</span>\r\n        <span fxFlex style=\"margin-left: -5px\">{{value?.address}}</span>\r\n        <span fxFlex>{{value?.source}}</span>\r\n        <span fxFlex>{{value?.zone1}}</span>\r\n        <span fxFlex>{{value?.zone2}}</span>\r\n        <span fxFlex>{{value?.zone3}}</span>\r\n        <span fxFlex>\r\n          <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editEvent(value)\">\r\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </span>\r\n        <span fxFlex>\r\n          <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteEvent(value.id)\">\r\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </span>\r\n      </mat-card> \r\n     </div>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" style=\"position: absolute; top: 90%;left:90%\" (click)=\"openDialog()\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightLocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_HMEL_admin_add_location_add_location_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/add-location/add-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_location_service__ = __webpack_require__("../../../../../src/service/delete-freight-location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FreightLocationsComponent = (function () {
    function FreightLocationsComponent(fetchFreightLocation, store, dialog, deleteFreightLocation, addLocationComponent, matSnackBar) {
        var _this = this;
        this.fetchFreightLocation = fetchFreightLocation;
        this.store = store;
        this.dialog = dialog;
        this.deleteFreightLocation = deleteFreightLocation;
        this.addLocationComponent = addLocationComponent;
        this.matSnackBar = matSnackBar;
        this.data = [];
        this.isVisible = false;
        this.dialogRef = null;
        this.isValuesLoaded = true;
        this.isStoreLoaded = false;
        this.searchedClick = true;
        this.fl = [];
        this.filteredLocations = [];
        this.isFiltered = false;
        store.dispatch({ type: "COMMAND", payload: null });
        this.fetchFreightLocation.getData.emit();
        console.log(this.fl.length > 0 ? false : true + " " + this.isFiltered);
        this.store.select("freightLocationStore").subscribe(function (res) {
            if (res == null)
                return;
            _this.data = res['data'];
            _this.isValuesLoaded = false;
            _this.isStoreLoaded = true;
            console.log(_this.data);
        });
        this.store.select("command").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            if (res['data']['status'] == 200)
                _this.openSnackBar("successfully executed");
            else
                _this.openSnackBar(res['data']['errorMessage']);
        });
        this.store.select("dialogRefStore").subscribe(function (res) {
            console.log(res);
            if (res != null) {
                if (_this.dialogRef != null)
                    _this.dialogRef.close();
            }
        });
    }
    FreightLocationsComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    FreightLocationsComponent.prototype.openDialog = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__app_HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */], {
            width: '900px',
            height: '500px'
        });
        // this.store.dispatch({type:"DIAthis._store.dispatch({type:"DIALOG",payload:{ref:false}});LOG",payload:{ref:this.dialogRef}});
    };
    FreightLocationsComponent.prototype.ngOnInit = function () {
    };
    FreightLocationsComponent.prototype.onButtonPress = function () {
        this.isVisible = true;
    };
    FreightLocationsComponent.prototype.deleteEvent = function (value) {
        console.log(value);
        this.deleteFreightLocation.pathURL = this.deleteFreightLocation.pathURL + value;
        console.log(this.deleteFreightLocation.pathURL);
        this.deleteFreightLocation.getData.emit();
    };
    FreightLocationsComponent.prototype.editEvent = function (value) {
        this.store.dispatch({ type: "LATLNG", payload: { data: value } });
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__app_HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */], {
            width: '900px',
            height: '500px'
        });
    };
    FreightLocationsComponent.prototype.search = function (value) {
        console.log(value);
        this.fl = [];
        this.searchedClick = true;
        this.isFiltered = false;
        for (var i = 0; i < this.data['data'].length; i++) {
            // console.log(this.data['data'][i]['name'])
            var str = this.data['data'][i]['name'].toUpperCase();
            if (str.includes(value.toUpperCase())) {
                this.fl.push(this.data['data'][i]);
                console.log(this.fl);
            }
        }
        console.log(this.fl);
    };
    FreightLocationsComponent.prototype.onSearchClick = function (value) {
        this.searchedClick = false;
    };
    FreightLocationsComponent.prototype.onFilter = function () {
        console.log(this.filterBy);
        this.isFiltered = true;
        if (this.filterBy == "all")
            this.isFiltered = false;
        this.fl = [];
        this.filteredLocations = [];
        this.searchedClick = false;
        console.log(this.data['data'][0]['type']);
        for (var i = 0; i < this.data['data'].length; i++) {
            // console.log(this.data['data'][i]['name'])
            if (this.data['data'][i]['type'].includes(this.filterBy)) {
                this.filteredLocations.push(this.data['data'][i]);
                console.log(this.filteredLocations);
            }
        }
        console.log(this.filteredLocations);
    };
    return FreightLocationsComponent;
}());
FreightLocationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-freight-locations',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_freight_location_service__["a" /* FetchFreightLocationData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_freight_location_service__["a" /* FetchFreightLocationData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_location_service__["a" /* DeleteFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_location_service__["a" /* DeleteFreightLocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _f || Object])
], FreightLocationsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=freight-locations.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .table1 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    /* border-top : 1px solid #ddd;\r\n    border-left: 1px solid #ddd;\r\n    border-right: 1px solid #ddd; \r\n  }\r\n\r\n  .table2 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    border-top : 1px solid #ddd;\r\n    border-bottom:   1px solid #ddd;\r\n  }\r\n\r\n  td {\r\n    width: 150px;\r\n    height: 25px;\r\n    /* text-align: center; */\r\n    /* border-bottom: 1px solid #ddd; \r\n    color : black;\r\n    font-size: 12px;\r\n    padding-top: 5px;\r\n    padding-left: 40px; \r\n  } */\r\n  \r\n  td {\r\n    width: 150px;\r\n    height: 25px;\r\n    /* text-align: center; */\r\n    border-bottom: 1px solid #ddd;\r\n    color : black;\r\n    font-size: 12px;\r\n    padding-top: 5px;\r\n    padding-left: 40px; \r\n  }\r\n\r\n    .table1 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n      border-top : 1px solid #ddd;\r\n      border-left: 1px solid #ddd;\r\n      border-right: 1px solid #ddd;\r\n    }\r\n\r\n    .table2 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n    }\r\n\r\n.button-basic3 {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n  margin-right: 40px\r\n}\r\n\r\n.button-basic3:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.html":
/***/ (function(module, exports) {

module.exports = "  <div>\r\n      <!-- <button mat-raised-button class=\"button-basic3\" (click)='openDialog()'>Add New Freight Route</button><br><br> -->\r\n  \r\n    <div style=\"margin-left: 50px; margin-right: 40px; font-size: 12px\" fxLayout=\"row\">          \r\n        <span fxFlex><h4>Freight Route</h4></span>\r\n        <span fxFlex><h4>Source Cluster</h4></span>\r\n        <span fxFlex><h4>Destination Cluster</h4></span>\r\n        <span fxFlex><h4>Source Zone</h4></span>\r\n        <span fxFlex><h4>Destination Zone</h4></span>\r\n        <span fxFlex><h4>Type</h4></span>\r\n        <span fxFlex><h4>Distance</h4></span>\r\n        <span fxFlex><h4>Transit Days</h4></span>\r\n        <span fxFlex></span> \r\n        <span fxFlex></span>   \r\n  </div>\r\n\r\n    <div style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px\">\r\n        <mat-card *ngFor = \"let value of freightLaneData.data\" fxLayout=\"row\" style=\"font-size: 12px; height: 15px\">\r\n         <span fxFlex>{{value.name}}</span>\r\n         <span fxFlex>{{value.sourceCluster}}</span>\r\n         <span fxFlex>{{value.destinationCluster}}</span>\r\n         <span fxFlex>{{value.sourceZone}}</span>\r\n         <span fxFlex>{{value.destinationZone}}</span>\r\n         <span fxFlex>{{value.type}}</span>\r\n         <span fxFlex>{{value.distance}}</span>\r\n         <span fxFlex>{{value.transitDays}}</span>\r\n         <span fxFlex><button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"onEditEvent(value)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></span>\r\n         <span fxFlex><button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"ondeleteEvent(value.id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></span>\r\n        </mat-card>\r\n      </div>\r\n\r\n      <button mat-fab color=\"primary\" style=\"position: absolute; top: 90%;left:90%\" (click)=\"openDialog()\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\r\n          </button>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FreightLanesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightLane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_create_lane_service__ = __webpack_require__("../../../../../src/service/create-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_lane_service__ = __webpack_require__("../../../../../src/service/delete-freight-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_update_freight_lane_service__ = __webpack_require__("../../../../../src/service/update-freight-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__ = __webpack_require__("../../../../../src/service/freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_freight_cluster_services__ = __webpack_require__("../../../../../src/service/freight-cluster-services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FreightLanesComponent = (function () {
    function FreightLanesComponent(_store, fetchFrieghtLaneData, dialog, deleteFreightLane, matSnackBar) {
        var _this = this;
        this._store = _store;
        this.fetchFrieghtLaneData = fetchFrieghtLaneData;
        this.dialog = dialog;
        this.deleteFreightLane = deleteFreightLane;
        this.matSnackBar = matSnackBar;
        this.freightLaneData = [];
        _store.dispatch({ type: "COMMAND", payload: null });
        this.fetchFrieghtLaneData.getData.emit();
        this.unSub = this._store.select("freightLaneStore").subscribe(function (res) {
            if (res == null)
                return;
            _this.freightLaneData = res["data"];
            console.log(_this.freightLaneData);
        });
        this._store.select("command").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            if (res['data']['status'] == 200)
                _this.openSnackBar("successfully executed");
            else
                _this.openSnackBar(res['data']['errorMessage']);
        });
    }
    FreightLanesComponent.prototype.ngOnInit = function () {
    };
    FreightLanesComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    FreightLanesComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub != undefined || this.unSub != null)
            this.unSub.unsubscribe();
    };
    FreightLanesComponent.prototype.openDialog = function () {
        this._store.dispatch({ "type": "COMMON", payload: null });
        var dialogRef = this.dialog.open(FreightLane, {
            width: '452px',
            height: '429px'
        });
    };
    FreightLanesComponent.prototype.ondeleteEvent = function (id) {
        console.log(id);
        this.deleteFreightLane.pathURL = this.deleteFreightLane.pathURL + id;
        this.deleteFreightLane.getData.emit();
    };
    FreightLanesComponent.prototype.onEditEvent = function (value) {
        this._store.dispatch({ "type": "COMMON", payload: value });
        var dialogRef = this.dialog.open(FreightLane, {
            width: '452px',
            height: '429px'
        });
    };
    return FreightLanesComponent;
}());
FreightLanesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-freight-lanes',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_lane_service__["a" /* DeleteFreightLane */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_delete_freight_lane_service__["a" /* DeleteFreightLane */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]) === "function" && _e || Object])
], FreightLanesComponent);

var FreightLane = (function () {
    function FreightLane(updateFreightLane, zoneService, _store, createFreightLane, matDialogRef, clusterService) {
        var _this = this;
        this.updateFreightLane = updateFreightLane;
        this.zoneService = zoneService;
        this._store = _store;
        this.createFreightLane = createFreightLane;
        this.matDialogRef = matDialogRef;
        this.clusterService = clusterService;
        this.data = [];
        this.freightLanes = [];
        this.id = null;
        this.isFrechZoneLoaded = false;
        this.isUpdaterLoaded = false;
        this.isFreightLanesLoaded = false;
        this.freightClusterList = [];
        this.freightZoneList = [];
        this.freightZoneListOne = [];
        this.freightZoneListTwo = [];
        this.showSourceCluster = false;
        this.showSourceZone = false;
        this.showDestinationCluster = false;
        this.showDestinationZone = false;
        this.clusterService.freightClusterList.emit();
        this.unSub_freightClusterList = this._store.select('freightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.freightClusterList = value['data']['data'];
                console.log(_this.freightClusterList);
                //console.log(obj);
            }
        });
        this.unSub_freightZoneList = this._store.select('freightZoneStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.freightZoneList = value['data']['data'];
                console.log(_this.sc != null && _this.freightZoneList.length > 0);
                console.log(_this.sc);
                if (_this.sc != null && _this.freightZoneList.length > 0) {
                    if (_this.cluster_id == _this.freightZoneList[0]['cluster_id'])
                        _this.freightZoneListOne = _this.freightZoneList;
                    // this.sc = null;
                    console.log(_this.freightZoneListOne);
                }
                else {
                    // this.freightZoneListOne = [];
                }
                if (_this.dc != null && _this.freightZoneList.length > 0) {
                    if (_this.dCluster_id == _this.freightZoneList[0]['cluster_id'])
                        _this.freightZoneListTwo = _this.freightZoneList;
                    // this.dc = null;
                    console.log(_this.freightZoneListTwo);
                }
                else {
                    // this.freightZoneListTwo = [];
                }
                //console.log(obj);
            }
        });
        this._store.select("updaterStore").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            //  this.updaterValue = res;
            //  this.setSourceCluster();
            //  this.setDestinationCluster();
            //  this.setSourceZone();
            //  this.setDestinationZone();
            _this.sc = res['sourceCluster'];
            _this.sourceClusterName = res['sourceCluster'];
            _this.dc = res['destinationCluster'];
            _this.destinationClusterName = res['destinationCluster'];
            _this.sz = res['sourceZone'];
            _this.sourceZoneName = res['sourceZone'];
            _this.dz = res['destinationZone'];
            _this.destinationZoneName = res['destinationZone'];
            _this.name = res["name"];
            _this.type = res["type"];
            _this.distance = res["distance"];
            _this.td = res["transitDays"];
            _this.id = res["id"];
        });
    }
    FreightLane.prototype.onCreate = function () {
        var obj = {
            "sourceCluster": this.sourceClusterName,
            "destinationCluster": this.destinationClusterName,
            "sourceZone": this.sourceZoneName,
            "destinationZone": this.destinationZoneName,
            "name": this.name,
            "type": this.type,
            "transitDays": this.td,
            "distance": this.distance,
            "orgId": this.orgId
        };
        console.log(obj);
        if (this.id == null) {
            this.createFreightLane.getData.emit(obj);
        }
        else {
            this.updateFreightLane.pathURL = this.updateFreightLane.pathURL + this.id;
            this.updateFreightLane.getData.emit(obj);
        }
        this.matDialogRef.close();
    };
    FreightLane.prototype.onSelectOfSourceCluster = function (value) {
        this.sourceClusterName = value['name'];
        this.sc = value['name'];
        console.log(value);
        this.cluster_id = value['id'];
        this.zoneService.freightZoneList.emit(value['id']);
        this.showSourceCluster = false;
    };
    FreightLane.prototype.onSelectOfDestinationCluster = function (value) {
        this.destinationClusterName = value['name'];
        this.dc = value['name'];
        this.dCluster_id = value['id'];
        this.zoneService.freightZoneList.emit(value['id']);
        this.showDestinationCluster = false;
    };
    FreightLane.prototype.onSelectOfSourceZone = function (value) {
        console.log(value);
        this.sz = value['name'];
        this.sourceZoneName = value['name'];
        this.showSourceZone = false;
    };
    FreightLane.prototype.onSelectOfDestinationZone = function (value) {
        console.log(value);
        this.dz = value['name'];
        this.destinationZoneName = value['name'];
        this.showDestinationZone = false;
    };
    FreightLane.prototype.onCancel = function () {
        this.matDialogRef.close();
    };
    FreightLane.prototype.onSourceClusterClick = function () {
        this.showSourceCluster = true;
    };
    FreightLane.prototype.onSourceZoneClick = function () {
        this.showSourceZone = true;
    };
    FreightLane.prototype.onDestinationClick = function () {
        this.showDestinationCluster = true;
    };
    FreightLane.prototype.onDestinationZoneClick = function () {
        this.showDestinationZone = true;
    };
    return FreightLane;
}());
FreightLane = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'freight-lanes',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_update_freight_lane_service__["a" /* UpdateFreightLane */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_update_freight_lane_service__["a" /* UpdateFreightLane */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__["a" /* FreightZoneServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_freight_zone_service__["a" /* FreightZoneServices */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__service_create_lane_service__["a" /* CreateFreightLane */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_create_lane_service__["a" /* CreateFreightLane */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__service_freight_cluster_services__["a" /* FreightClusterServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_freight_cluster_services__["a" /* FreightClusterServices */]) === "function" && _l || Object])
], FreightLane);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=freight-routes.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-routes/freight-routes.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div {\r\n    color : black;\r\n    width: 300px;\r\n    border: 1px solid #111111;\r\n    border-radius: 5px;\r\n    padding-bottom: 15px;\r\n    height: 200px;\r\n    overflow-y:auto;\r\n}\r\n\r\nh5 {\r\n    color : black\r\n}\r\n\r\n.check {\r\n    font-size: 14px;\r\n    margin-left:10px;\r\n}\r\n\r\n.button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n\r\n.button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n\r\n.example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n  .example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-routes/freight-routes.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"name\" placeholder=\"Name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select [(ngModel)]=\"type\" placeholder=\"Type\">\r\n                <mat-option value=\"Inward\">Inward</mat-option>\r\n                <mat-option value=\"Outbound\">Outbound</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"sc\" placeholder=\"Source Cluster\" (click)=\"onSourceClusterClick()\">\r\n        </mat-form-field>\r\n\r\n        <div *ngIf=\"showSourceCluster\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:0px\" >\r\n            <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of freightClusterList\">\r\n               <li (click)=\"onSelectOfSourceCluster(data)\">{{data?.name}}<hr></li>\r\n           </ul>\r\n       </div>\r\n\r\n        <!-- <mat-form-field>\r\n                <mat-select [(ngModel)]=\"sc\" placeholder=\"Source Cluster\" (change)=\"onSelectOfSourceCluster()\">\r\n                    <mat-option  *ngFor=\"let data of freightClusterList\" [value]=data>{{data.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"sz\" placeholder=\"Source Zone\" (click)=\"onSourceZoneClick() \">\r\n        </mat-form-field>\r\n\r\n        <div *ngIf=\"showSourceZone\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:214px\" >\r\n            <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of freightZoneListOne\">\r\n               <li (click)=\"onSelectOfSourceZone(data)\">{{data?.name}}<hr></li>\r\n           </ul>\r\n       </div>\r\n      \r\n\r\n        <!-- <mat-form-field>\r\n                <mat-select [(ngModel)]=\"sz\" placeholder=\"Source Zone\" (change)=\"onSelectOfSourceZone()\">\r\n                    <mat-option  *ngFor=\"let data of freightZoneListOne\" [value]=data>{{data.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n\r\n    </div>\r\n\r\n    <div>\r\n\r\n            <!-- <mat-form-field>\r\n                <mat-select [(ngModel)]=\"dc\" placeholder=\"Destination Cluster\"  (change)=\"onSelectOfDestinationCluster()\">\r\n                    <mat-option  *ngFor=\"let data of freightClusterList\" [value]=data >{{data.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"dc\" placeholder=\"Destination Cluster\" (click)=\"onDestinationClick()\">\r\n        </mat-form-field>\r\n\r\n        <div *ngIf=\"showDestinationCluster\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:0px\" >\r\n            <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of freightClusterList\">\r\n               <li (click)=\"onSelectOfDestinationCluster(data)\">{{data?.name}}<hr></li>\r\n           </ul>\r\n       </div>\r\n\r\n        <!-- <mat-form-field>\r\n                <mat-select [(ngModel)]=\"dz\" placeholder=\"Destination Zone\" (change)=\"onSelectOfDestinationZone()\">\r\n                    <mat-option  *ngFor=\"let data of freightZoneListTwo\" [value]=data>{{data.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field>\r\n                <input matInput [(ngModel)]=\"dz\" placeholder=\"Destination Zone\" (click)=\"onDestinationZoneClick()\">\r\n            </mat-form-field>\r\n\r\n            <div *ngIf=\"showDestinationZone\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:214px\" >\r\n                <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of freightZoneListTwo\">\r\n                   <li (click)=\"onSelectOfDestinationZone(data)\">{{data?.name}}<hr></li>\r\n               </ul>\r\n           </div>\r\n\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"td\" placeholder=\"Transit Days\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"distance\" placeholder=\"Distance\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <button mat-raised-button class=\"button\" style=\"margin-left:10px\" (click)=\"onCancel()\">Cancel</button>\r\n        <button mat-raised-button class=\"button\" (click)=\"onCreate()\">Save</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* .table1 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    /* border-top : 1px solid #ddd;\r\n    border-left: 1px solid #ddd;\r\n    border-right: 1px solid #ddd; \r\n  }\r\n\r\n  .table2 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    border-top : 1px solid #ddd;\r\n    border-bottom:   1px solid #ddd;\r\n  }\r\n\r\n  td {\r\n    width: 150px;\r\n    height: 25px;\r\n    /* text-align: center; */\r\n    /* border-bottom: 1px solid #ddd; \r\n    color : black;\r\n    font-size: 12px;\r\n    padding-top: 5px;\r\n    padding-left: 40px; \r\n  } */\r\n  \r\n  /* td {\r\n    width: 150px;\r\n    height: 25px;\r\n    border-bottom: 1px solid #ddd;\r\n    color : black;\r\n    font-size: 12px;\r\n    padding-top: 5px;\r\n    padding-left: 40px; \r\n  }\r\n\r\n    .table1 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n      border-top : 1px solid #ddd;\r\n      border-left: 1px solid #ddd;\r\n      border-right: 1px solid #ddd;\r\n    }\r\n\r\n    .table2 {\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n      color : black;\r\n    }\r\n\r\n.button-basic3 {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n  margin-right: 40px\r\n}\r\n\r\n.button-basic3:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n} */\r\n.expand-search {\r\n  border: 1.5px solid #b0bcc1;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  padding: 5px 26px 5px 12px;\r\n  display: inline-block;\r\n  /*border: 1.5px solid #ccc;*/\r\n  border-radius: 17px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-width: 600px;box-sizing: border-box\">\r\n    <!-- <div *ngIf=\"isSpinner\" style=\"margin-left: 500px\">\r\n        <mat-spinner></mat-spinner>\r\n    </div> -->\r\n\r\n  <!--show create freight cluster Dialog -->\r\n  <div *ngIf=\"isShowCreateDialog\" class=\"mycustomDialog\">\r\n    <div class=\"modal-content-create\">\r\n        <div style=\"text-align:center;height:30px;padding: 8px; background-color: rgb(57, 146, 247);color: white;\">\r\n            <label style=\"font-size: 20px\">Add New Freight Zone</label><br><br>            \r\n        </div>\r\n        \r\n        <div class=\"form-container\">\r\n          \r\n            <mat-form-field style=\"width:100%\">\r\n              <input matInput [(ngModel)]=\"name\" placeholder=\"Freight Zone Name\" required>\r\n            </mat-form-field>\r\n          \r\n            <!-- <mat-form-field style=\"width:100%\">\r\n                <input matInput [(ngModel)]=\"clusterId\" placeholder=\"Cluster Name\" required>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Cluster Name\" [(ngModel)]=\"clusterId\">\r\n                    <mat-option *ngFor=\"let data of freightClusterList\" [value]=data.id>{{data.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field><br>\r\n\r\n            <mat-form-field style=\"width:45%;\">\r\n                <input matInput [(ngModel)]=\"city\" placeholder=\"City\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:47%;margin-left:60px\">\r\n                <input matInput [(ngModel)]=\"state\" placeholder=\"State\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:45%\">\r\n                <input matInput [(ngModel)]=\"country\" placeholder=\"Country\" required>\r\n            </mat-form-field>\r\n            <!-- <mat-form-field style=\"width:47%;margin-left:60px\">\r\n                <input matInput [(ngModel)]=\"source\" placeholder=\"Source\" required>\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field style=\"width:100%\">\r\n                <input matInput [(ngModel)]=\"orgId\" placeholder=\"Organisation Id\">\r\n            </mat-form-field>          -->\r\n        </div>\r\n        <div style=\"margin-left: 250px;margin-top:30px\">\r\n          <button mat-raised-button class=\"button\" (click)=\"cancel()\" style=\"margin-left:80px\">Cancel</button>\r\n          <button mat-raised-button class=\"button\" (click)=\"addFreightZone()\">Save</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--end create freight cluster Dialog -->\r\n<!--show edit freight cluster Dialog -->\r\n<div *ngIf=\"isShowEditDialog\" class=\"mycustomDialog\">\r\n    <div class=\"modal-content-edit\">\r\n        <div style=\"text-align:center;height:25px;padding: 8px; background-color: rgb(57, 146, 247);color: white;\">\r\n            <label style=\"font-size: 20px;\">Edit Freight Zone</label><br><br>            \r\n        </div>\r\n        \r\n        <div class=\"form-container\">\r\n          \r\n            <mat-form-field style=\"width:100%\">\r\n              <input matInput [(ngModel)]=\"name\" placeholder=\"Freight Zone Name\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:45%;\">\r\n                <input matInput [(ngModel)]=\"city\" placeholder=\"City\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:47%;margin-left:45px\">\r\n                <input matInput [(ngModel)]=\"state\" placeholder=\"State\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:100%\">\r\n                <input matInput [(ngModel)]=\"country\" placeholder=\"Country\" required>\r\n            </mat-form-field>\r\n                    \r\n        </div>\r\n        <div style=\"margin-left: 250px;margin-top:70px\">\r\n          <button mat-raised-button class=\"button\" (click)=\"cancelEdit()\" style=\"margin-left:80px\">Cancel</button>\r\n          <button mat-raised-button class=\"button\" (click)=\"okEdit()\">Save</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ********************** search dialig ***************** -->\r\n    <div *ngIf=\"isFreightCluster\" style=\"z-index: 5;overflow-y:auto; position: absolute;background-color: rgba(245,245,245,1);width:154px;margin-top:61px;margin-left:69%\" >\r\n        <div style=\"position:relative;margin-top: -1px;\" >\r\n            <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n            <input #searchcluster [(ngModel)]=\"clusterSearch\" class=\"expand-search\" (keyup)=\"searchClusterName(searchcluster.value)\" placeholder=\"Search\">\r\n        </div>\r\n        <ul style=\"list-style: none;margin-left: -32px;\"  *ngFor=\"let cluster of clusterNameList\">\r\n            <li (click)=\"setCluster(cluster)\"  >{{cluster?.name}}<hr></li>\r\n        </ul>            \r\n    </div>\r\n     \r\n    <div *ngIf=\"isFreightLocation\" style=\"z-index: 5;overflow-y:auto; position: absolute;background-color: rgba(245,245,245,1);width:154px;margin-top:61px;margin-left:82%\" >\r\n        <div style=\"position:relative;margin-top: -1px;\" >\r\n            <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n            <input #searchlocation [(ngModel)]=\"locationSearch\" class=\"expand-search\" (keyup)=\"searchLocationName(searchlocation.value)\" placeholder=\"Search\">\r\n        </div>\r\n        <ul style=\"list-style: none;margin-left: -32px;\"  *ngFor=\"let location of locationNameList\">\r\n            <li (click)=\"setLocation(location)\"  >{{location}}<hr></li>\r\n        </ul>\r\n    </div>\r\n  <!--end edit freight cluster Dialog   *ngIf=\"isStoreLoaded\"-->\r\n  <!-- *****************search freight zone**************************** -->\r\n  <div style=\"position:relative;margin-top: -1px;margin-left:69%;width:250px\" >\r\n    <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n    <input #searchzone [(ngModel)]=\"searchZone\" class=\"expand-search\" (keyup)=\"isFreightZone=true;isZoneList=true;searchZoneName(searchzone.value);\" placeholder=\"Search\">\r\n  </div>\r\n  <!-- todo -->\r\n  <div *ngIf=\"isFreightZone\" style=\"z-index: 5;overflow-y:auto; position: absolute;background-color: rgba(245,245,245,1);width:249px;margin-top:0px;margin-left:68%\" >\r\n    <ul style=\"list-style: none;margin-left: -32px;\"  *ngFor=\"let zone of zoneNameList\">\r\n        <li (click)=\"setZone(zone)\"  >{{zone?.name}}<hr></li>\r\n    </ul>            \r\n  </div> \r\n  <!-- end --> \r\n\r\n    <div>\r\n        <div style=\"box-shadow: 0px 4px 12px darkgray;margin-left: 40px;height: 36px; margin-right: 40px;margin-top:10px; font-size: 12px\" fxLayout=\"row\">\r\n          <span fxFlex><h4>&nbsp;&nbsp;Name</h4></span>\r\n          <span fxFlex><h4>City</h4></span>          \r\n          <span fxFlex><h4> State</h4></span>\r\n          <span fxFlex><h4> Country</h4></span>\r\n          <span fxFlex><h4>Source</h4></span>\r\n          <span fxFlex><h4><mat-card style=\"padding: 8px;margin-top: -14px;width: 120px;\" (click)=\"isFreightCluster=true;isFreightLocation=false\">{{freightCluster}}<i class=\"fa fa-caret-down\" aria-hidden=\"true\" style=\"font-size:15px;float:right\" ></i></mat-card></h4></span>          \r\n          <span fxFlex><h4><mat-card style=\"padding: 8px;margin-top: -14px;width: 120px;\" (click)=\"isFreightLocation=true;isFreightCluster=false\">{{freightLocation}}<i class=\"fa fa-caret-down\" aria-hidden=\"true\" style=\"font-size:15px;float:right\" ></i></mat-card></h4></span>          \r\n        </div>\r\n        \r\n        <div   *ngIf=\"isZone\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px;margin-top:1px; overflow-y: auto; height: 400px\">\r\n            <mat-card  fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n              <span fxFlex>{{zoneObj .name}}</span>\r\n              <span fxFlex>{{zoneObj .city}}</span>\r\n              <span fxFlex>{{zoneObj .state}}</span>\r\n              <span fxFlex>{{zoneObj .country}}</span>\r\n              <span fxFlex>{{zoneObj .source}}</span>\r\n              <span fxFlex>\r\n                <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editFreightZone(zoneObj)\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </span>\r\n              <span fxFlex>\r\n              <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteFreightZone(zoneObj)\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </span>\r\n            </mat-card>\r\n        </div>\r\n        <div   *ngIf=\"isZoneList\" style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px;margin-top:1px; overflow-y: auto; height: 400px\">\r\n          <mat-card *ngFor=\"let zone of freightZoneList\" fxLayout=\"row\" style=\"font-size: 12px; height: auto; padding: 24px; \">\r\n            <span fxFlex>{{zone .name}}</span>\r\n            <span fxFlex>{{zone .city}}</span>\r\n            <span fxFlex>{{zone .state}}</span>\r\n            <span fxFlex>{{zone .country}}</span>\r\n            <span fxFlex>{{zone .source}}</span>\r\n            <span fxFlex>\r\n              <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editFreightZone(zone)\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </span>\r\n            <span fxFlex>\r\n            <button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"deleteFreightZone(zone)\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </span>\r\n          </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-fab color=\"primary\" style=\"position: absolute; top: 90%;left:90%\" (click)=\"addFreightZoneView()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\r\n    </button>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightZoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_freight_zone_service__ = __webpack_require__("../../../../../src/service/freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_freight_cluster_services__ = __webpack_require__("../../../../../src/service/freight-cluster-services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FreightZoneComponent = (function () {
    function FreightZoneComponent(zoneService, clusterService, _store, router, snackBar) {
        var _this = this;
        this.zoneService = zoneService;
        this.clusterService = clusterService;
        this._store = _store;
        this.router = router;
        this.snackBar = snackBar;
        this.freightZoneList = [];
        this.unSub_freightZoneList = null;
        this.unSub_createFreightZone = null;
        this.unSub_updateFreightZone = null;
        this.unSub_deleteFreightZone = null;
        this.unSub_freightClusterList = null;
        this.isSpinner = true;
        this.isStoreLoaded = false;
        this.isShowCreateDialog = false;
        this.isShowEditDialog = false;
        this.isFreightCluster = false;
        this.isFreightZone = false;
        this.isFreightLocation = false;
        this.isZone = false;
        this.isZoneList = false;
        this.freightClusterList = [];
        this.clusterNameList = [];
        this.zoneNameList = [];
        this.locationNameList = [];
        this.freightCluster = "Cluster Name";
        this.freightLocation = "Location Name";
        this.zoneService.initialize();
        this.clusterService.freightClusterList.emit();
        this.unSub_freightClusterList = this._store.select('freightClusterStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.isSpinner = false;
                _this.isStoreLoaded = true;
                _this.freightClusterList = value['data']['data'];
                console.log(_this.freightClusterList);
                //console.log(obj);
            }
        });
        this.unSub_freightZoneList = this._store.select('freightZoneStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.isSpinner = false;
                _this.isZoneList = true;
                _this.freightZoneList = value['data']['data'];
                console.log(_this.freightZoneList);
                //console.log(obj);
            }
        });
        this.unSub_createFreightZone = this._store.select('createfreightZoneStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight zone created successfully";
                _this.openSnackBar(_this.message);
                _this.isShowCreateDialog = false;
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
        this.unSub_updateFreightZone = this._store.select('updatefreightZoneStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight Zone updated successfully";
                _this.openSnackBar(_this.message);
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
        this.unSub_deleteFreightZone = this._store.select('deletefreightZoneStore').subscribe(function (value) {
            // console.log(value);
            if (value == null) {
                return;
            }
            if (value['status'] == 200) {
                _this.message = "Freight Zone deleted successfully";
                _this.openSnackBar(_this.message);
            }
            else if (value['status'] == 500) {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
            else {
                _this.message = value['errorMessage'];
                _this.openSnackBar(_this.message);
            }
        });
    }
    FreightZoneComponent.prototype.addFreightZoneView = function () {
        this.name = null;
        this.clusterId = null;
        this.source = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.orgId = null; //value['']
        this.isShowCreateDialog = true;
        this.isFreightCluster = false;
        this.isFreightLocation = false;
        // this.router.navigate(["dashboard/createFreightzone"]);
    };
    FreightZoneComponent.prototype.addFreightZone = function () {
        if (this.name == null || this.name == undefined || this.name == "") {
            this.openSnackBar("Please fill zone Name");
            return;
        }
        if (this.clusterId == null || this.clusterId == undefined || this.clusterId == "") {
            this.openSnackBar("Please fill Lelel");
            return;
        }
        // if (this.source==null ||this.source==undefined || this.source == "" ) {
        //   this.openSnackBar("Please fill source");
        //   return;
        // }
        if (this.city == null || this.city == undefined || this.city == "") {
            this.openSnackBar("Please fill City");
            return;
        }
        if (this.state == null || this.state == undefined || this.state == "") {
            this.openSnackBar("Please fill State");
            return;
        }
        if (this.country == null || this.country == undefined || this.country == "") {
            this.openSnackBar("Please fill Country");
            return;
        }
        // if (this.orgId==null ||this.orgId==undefined || this.orgId == "" ) {
        //   this.openSnackBar("Please fill source");
        //   return;
        // }
        var obj = {
            "name": this.name,
            "cluster_id": this.clusterId,
            "source": "manual",
            "city": this.city,
            "state": this.state,
            "country": this.country,
            "orgId": this.orgId
        };
        console.log(obj);
        this.zoneService.createFreightZone.emit(obj);
    };
    FreightZoneComponent.prototype.setCluster = function (cluster) {
        console.log(cluster['cluster_id']);
        this.freightCluster = cluster['name'];
        this.zoneService.freightZoneList.emit(cluster['id']);
        this.clusterSearch = null;
        this.clusterNameList = [];
        this.isFreightCluster = false;
    };
    FreightZoneComponent.prototype.setLocation = function (location) {
        //todo
    };
    FreightZoneComponent.prototype.setZone = function (zone) {
        this.zoneObj = zone;
        this.searchZone = null;
        this.isZone = true;
        this.zoneNameList = [];
        this.isZoneList = false;
        this.isFreightZone = false;
    };
    FreightZoneComponent.prototype.searchClusterName = function (value) {
        this.isZone = false;
        this.clusterNameList = [];
        if (value != '') {
            for (var i = 0; i < this.freightClusterList.length; i++) {
                var str = this.freightClusterList[i]['name'].toLowerCase();
                if (str.includes(value.toLowerCase())) {
                    this.clusterNameList.push(this.freightClusterList[i]);
                }
            }
        }
    };
    FreightZoneComponent.prototype.searchLocationName = function (value) {
        this.clusterNameList = [];
        if (value != '') {
            for (var i = 0; i < this.freightClusterList.length; i++) {
                var str = this.freightClusterList[i]['name'].toLowerCase();
                if (str.includes(value.toLowerCase())) {
                    this.clusterNameList.push(this.freightClusterList[i]);
                }
            }
        }
    };
    FreightZoneComponent.prototype.searchZoneName = function (value) {
        this.isZone = false;
        this.zoneNameList = [];
        if (value != '') {
            for (var i = 0; i < this.freightZoneList.length; i++) {
                var str = this.freightZoneList[i]['name'].toLowerCase();
                if (str.includes(value.toLowerCase())) {
                    this.zoneNameList.push(this.freightZoneList[i]);
                }
            }
        }
    };
    FreightZoneComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'OK', { duration: 4000 });
    };
    FreightZoneComponent.prototype.cancel = function () {
        this.isShowCreateDialog = false;
    };
    FreightZoneComponent.prototype.okEdit = function () {
        var obj = {
            "name": this.name,
            "city": this.city,
            "state": this.state,
            "uuid": this.zoneUuid,
            "country": this.country,
        };
        console.log(obj);
        this.zoneService.updateFreightZone.emit(obj);
        this.isShowEditDialog = false;
    };
    FreightZoneComponent.prototype.cancelEdit = function () {
        this.isShowEditDialog = false;
    };
    FreightZoneComponent.prototype.editFreightZone = function (value) {
        this.name = value['name'];
        this.source = value['source'];
        this.city = value['city'];
        this.state = value['state'];
        this.country = value['country'];
        this.zoneUuid = value['uuid'];
        this.isShowEditDialog = true;
    };
    FreightZoneComponent.prototype.deleteFreightZone = function (value) {
        var obj = {
            "uuid": value['uuid']
        };
        this.zoneService.deleteFreightZone.emit(obj);
    };
    FreightZoneComponent.prototype.ngOnInit = function () {
    };
    FreightZoneComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_freightZoneList != 'undefined' && this.unSub_freightZoneList != null && this.unSub_freightZoneList != undefined) {
            this.unSub_freightZoneList.unsubscribe();
        }
        if (typeof this.unSub_createFreightZone != 'undefined' && this.unSub_createFreightZone != null && this.unSub_createFreightZone != undefined) {
            this.unSub_createFreightZone.unsubscribe();
        }
        if (typeof this.unSub_deleteFreightZone != 'undefined' && this.unSub_deleteFreightZone != null && this.unSub_deleteFreightZone != undefined) {
            this.unSub_deleteFreightZone.unsubscribe();
        }
        if (typeof this.unSub_updateFreightZone != 'undefined' && this.unSub_updateFreightZone != null && this.unSub_updateFreightZone != undefined) {
            this.unSub_updateFreightZone.unsubscribe();
        }
    };
    return FreightZoneComponent;
}());
FreightZoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-freight-zone',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_freight_zone_service__["a" /* FreightZoneServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_freight_zone_service__["a" /* FreightZoneServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_freight_cluster_services__["a" /* FreightClusterServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_freight_cluster_services__["a" /* FreightClusterServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _e || Object])
], FreightZoneComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=freight-zones.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div_1 {\r\n    /* border: 1px solid gray; */\r\n    width : 15%;\r\n}\r\n\r\n.div_2 {\r\n    border-left: 1px solid gray; \r\n    width : 80%;\r\n    height : 490px\r\n}\r\n\r\n.button-basic2 {\r\n    background-color: white;\r\n    border: none;\r\n    font-size: 14px;\r\n    display: list-item;\r\n    color:gray;\r\n    /* padding: 10px; */\r\n    margin-left : 20px;\r\n    margin-top: 10px \r\n  }\r\n\r\n  /* .button-basic2:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\r\n\r\n\r\n<div class=\"div_1\">\r\n  <button *ngFor=\"let button of buttons\"  mat-button class=\"button-basic2\" (click)=\"onLoadPlan(button)\">\r\n    {{button}}\r\n  </button>\r\n</div>\r\n\r\n<div class=\"div_2\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadAllocationPolicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadAllocationPolicesComponent = (function () {
    function LoadAllocationPolicesComponent(router) {
        this.router = router;
        this.buttons = [
            "Load Clubbing",
            "Planned Load",
            "Free Load"
        ];
    }
    LoadAllocationPolicesComponent.prototype.ngOnInit = function () {
    };
    LoadAllocationPolicesComponent.prototype.onLoadPlan = function (value) {
        if (value == "Planned Load")
            this.router.navigate(['mainDashboard/dashboard/load_allocation_polices/planned_load']);
    };
    return LoadAllocationPolicesComponent;
}());
LoadAllocationPolicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-load-allocation-polices',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoadAllocationPolicesComponent);

var _a;
//# sourceMappingURL=load-allocation-polices.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/planned-load/planned-load-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div {\r\n    margin-top: 20px; \r\n    margin-left: 10px;\r\n}\r\n\r\n.weeklyButton {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n}\r\n\r\n.weeklyButton_S {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n    background: red;\r\n}\r\n\r\n\r\n.weeklyButton_S:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.weeklyButton:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n  \r\n  .button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/planned-load/planned-load-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<label style=\"font: 16px\">Add new Allocation Schedule</label>\r\n<div class=\"div\">\r\n    <div>\r\n        <mat-form-field style=\"width:100%\">\r\n            <mat-select placeholder=\"Frequency\" [(ngModel)]=\"frequency\" (change)=\"onSelection()\">\r\n                <mat-option *ngFor=\"let frequency of frequencies\" [value]=\"frequency\">\r\n                    {{frequency}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n    <div *ngIf=\"isWeekly\">\r\n        <button mat-raised-button class=\"weeklyButton_S\" (click)=\"weekbuttonsEvent(su)\">Su</button>\r\n        <button mat-raised-button class=\"weeklyButton\" *ngFor=\"let button of weekButtons\" (click)=\"weekbuttonsEvent(button)\">{{button}}</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"isMonthly\">\r\n        <mat-form-field style=\"width : 72%\"><input matInput [(ngModel)]=\"monthlyDay\" placeholder=\"Day\"></mat-form-field>\r\n        <label> : Of Every Month</label>\r\n    </div>\r\n\r\n    <div *ngIf=\"isPeriodical\">\r\n        <label style=\"font: 20px\">Every :</label>\r\n        <mat-form-field style=\"width:100%\"><input matInput [(ngModel)]=\"periodicalDay\" placeholder=\"Day\"></mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field style=\"width:79%\"><input matInput [(ngModel)]=\"scheduleTime\" placeholder=\"Sehedule Time\"></mat-form-field>\r\n        <mat-form-field style=\"width:20%\">\r\n            <mat-select [(ngModel)]='timePrefix'>\r\n                <mat-option selected=\"timePrefix\" value=\"AM\">AM</mat-option>\r\n                <mat-option value=\"PM\">PM</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field style=\"width:90%\"><input matInput [(ngModel)]=\"rejectionTime\" placeholder=\"Rejection Time\"></mat-form-field>\r\n        <label style=\"margin-left: 5px\">Hrs.</label>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field style=\"width:90%\"><input matInput [(ngModel)]=\"freeTime\" placeholder=\"Free Time\"></mat-form-field>\r\n        <label style=\"margin-left: 5px\">Hrs.</label>\r\n    </div>\r\n    <div>\r\n        <button mat-raised-button class=\"button\" style=\"margin-left:10px\" (click)=\"onCancel()\">Cancel</button>\r\n        <button mat-raised-button class=\"button\" (click)=\"onSvae()\">Save</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/planned-load/planned-load.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-basic3 {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n  \r\n  .button-basic3:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/planned-load/planned-load.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label style=\"margin-left : 20px; color : gray\">Allocation Engine Schedule</label>\r\n  <button mat-raised-button class=\"button-basic3\" (click)='onAddSchedule()'>Add New Allocation Schedule</button><br><br>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/planned-load/planned-load.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannedLoadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlannedLoadDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlannedLoadComponent = (function () {
    function PlannedLoadComponent(dialog) {
        this.dialog = dialog;
    }
    PlannedLoadComponent.prototype.ngOnInit = function () {
    };
    PlannedLoadComponent.prototype.onAddSchedule = function () {
        this.dialog.open(PlannedLoadDialogComponent, {
            width: "500px",
            height: "490px"
        });
    };
    return PlannedLoadComponent;
}());
PlannedLoadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-planned-load',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]) === "function" && _a || Object])
], PlannedLoadComponent);

var PlannedLoadDialogComponent = (function () {
    function PlannedLoadDialogComponent(matDialogRef) {
        this.matDialogRef = matDialogRef;
        this.su = "Su";
        this.isWeekly = false;
        this.isMonthly = false;
        this.isPeriodical = false;
        this.timePrefix = "AM";
        this.weeklyButtonValue = [];
        this.frequencies = [
            "Daily",
            "Weekly",
            "Monthly",
            "Periodic"
        ];
        this.weekButtons = [
            "M", "Tu", "W", "T", "F", "S"
        ];
    }
    PlannedLoadDialogComponent.prototype.weekbuttonsEvent = function (name) {
        switch (name) {
            case "Su":
                this.weeklyButtonValue.push("Sunday");
                console.log(this.weeklyButtonValue);
                break;
            case "M":
                this.weeklyButtonValue.push("Monday");
                console.log(this.weeklyButtonValue);
                break;
            case "Tu":
                this.weeklyButtonValue.push("Tuesday");
                console.log(this.weeklyButtonValue);
                break;
            case "W":
                this.weeklyButtonValue.push("Wednesday");
                console.log(this.weeklyButtonValue);
                break;
            case "T":
                this.weeklyButtonValue.push("Thursday");
                console.log(this.weeklyButtonValue);
                break;
            case "F":
                this.weeklyButtonValue.push("Friday");
                console.log(this.weeklyButtonValue);
                break;
            case "S":
                this.weeklyButtonValue.push("Saturday");
                console.log(this.weeklyButtonValue);
                break;
            default: break;
        }
    };
    PlannedLoadDialogComponent.prototype.onSelection = function () {
        console.log(this.frequency);
        if (this.frequency == "Weekly") {
            this.isMonthly = false;
            this.isPeriodical = false;
            this.isWeekly = true;
        }
        if (this.frequency == "Monthly") {
            this.isMonthly = true;
            this.isPeriodical = false;
            this.isWeekly = false;
        }
        if (this.frequency == "Periodic") {
            this.isMonthly = false;
            this.isPeriodical = true;
            this.isWeekly = false;
        }
        if (this.frequency == "Daily") {
            this.isMonthly = false;
            this.isPeriodical = false;
            this.isWeekly = false;
        }
    };
    PlannedLoadDialogComponent.prototype.onSvae = function () {
        console.log(" fre : " + this.frequency + "\n" +
            "weekly : " + this.weeklyButtonValue + "\n" +
            "monthly : " + this.monthlyDay + "\n" +
            "perdic : " + this.periodicalDay + "\n" +
            "rejt : " + this.rejectionTime + "\n" +
            "freet : " + this.freeTime + "\n" +
            "timesu : " + this.timePrefix);
        this.matDialogRef.close();
    };
    PlannedLoadDialogComponent.prototype.onCancel = function () {
        this.matDialogRef.close();
    };
    return PlannedLoadDialogComponent;
}());
PlannedLoadDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-planned-load-dialog',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]) === "function" && _b || Object])
], PlannedLoadDialogComponent);

var _a, _b;
//# sourceMappingURL=planned-load.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-header{\r\n  background-color: #1976d2;\r\n  width: 100%;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n\r\n.custom-button button{\r\n  height: 23px;\r\n  font-size: 11px;\r\n  line-height: 23px;\r\n  border-radius: 4px;\r\n  min-width: 5px;\r\n}\r\n\r\nmd-card{\r\n  padding: 9px;\r\n  min-width: 250px;\r\n}\r\n\r\ndiv {\r\n  font-family: Helvetica !important;\r\n  /*color: #46465f;*/\r\n}\r\n\r\n.confirm-location{\r\n  padding: 22px;\r\n  min-height: 100px;\r\n  max-height: 200px;\r\n  overflow: auto;\r\n  border: 1px solid #D1D1D1;\r\n  min-width:175px;\r\n}\r\n\r\n\r\n\r\n.my-hr{\r\n  border-style:ridge;\r\n  border-width:1px;\r\n  margin-top: 6px;\r\n  min-width: 250px;\r\n  margin-bottom:3px;\r\n}\r\n/* time line css start here*/\r\n\r\n.timeline-icon{\r\n  top: 50px;\r\n  position: absolute;\r\n  left: 71px;\r\n}\r\n\r\n.timeline-image{\r\n  position: absolute;\r\n  left: 71px;\r\n}\r\n\r\n.wfl-imeline-image{\r\n  position: absolute;\r\n  left: 50px;\r\n  color: #428fd4;\r\n}\r\n\r\n.EFP_icon{\r\n  position: absolute;\r\n  height: 100%;\r\n  margin-left: 54px;\r\n}\r\n\r\n.EFP_timeline_icon{\r\n  position: absolute;\r\n  background-color: white;\r\n  left: 48px;\r\n  top: -3px;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.cd-timeline {\r\n  position: relative;\r\n}\r\n.cd-timeline::before {\r\n  /* this is the vertical line */\r\n  /*top: 21px;*/\r\n  bottom: 37px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 85px;\r\n  height: 100%;\r\n  width: 1.40px;\r\n  background: #9b9b9b;\r\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\r\n}\r\n\r\n\r\n\r\n.wfl-timeline {\r\n  position: relative;\r\n}\r\n\r\n.wfl-timeline::before {\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 55px;\r\n  height: 100%;\r\n  width: 3.4px;\r\n  background: #428fd4;\r\n}\r\n.DP-timeline1 {\r\n  position: relative;\r\n}\r\n\r\n.DP-timeline1::before {\r\n  top: -17px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 53px;\r\n  height: 150%;\r\n  width: 3.4px;\r\n  background: #428fd4;\r\n}\r\n\r\n.DP-timeline {\r\n  position: relative;\r\n}\r\n\r\n.DP-timeline::before {\r\n  top: -17px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 53px;\r\n  height: 100%;\r\n  width: 3.4px;\r\n  background: #428fd4;\r\n}\r\n\r\n.DP_timeline-image{\r\n  /*position: absolute;*/\r\n  /*left: 53px;*/\r\n  margin-left: 41px;\r\n  color: #428fd4;\r\n  font-size: 20px;\r\n  /*margin-top: 10px;*/\r\n}\r\n\r\n\r\n.unvisited-timeline {\r\n  position: relative;\r\n}\r\n.unvisited-timeline::before {\r\n  /* this is the vertical line */\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n\r\n  left: 85px;\r\n  height: 100%;\r\n  border-left: 1.40px dashed #9b9b9b;\r\n  /*width: 1.40px;*/\r\n  /*background: #9b9b9b;*/\r\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\r\n}\r\n\r\n.EFP_unvisited-timeline {\r\n  position: relative;\r\n}\r\n.EFP_unvisited-timeline::before {\r\n  /* this is the vertical line */\r\n  top:15px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 55px;\r\n  height: 100%;\r\n  border-width: 6px;\r\n  border-left: dotted #D0D0D0;\r\n  /*width: 1.40px;*/\r\n  /*background: #9b9b9b;*/\r\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\r\n}\r\n.EFP_unvisited-timeline1 {\r\n  position: relative;\r\n}\r\n.EFP_unvisited-timeline1::before {\r\n  /* this is the vertical line */\r\n  top:15px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 1px;\r\n  left: 55px;\r\n  height: 150%;\r\n  border-width: 6px;\r\n  border-left: dotted #D0D0D0;\r\n  /*width: 1.40px;*/\r\n  /*background: #9b9b9b;*/\r\n  /*box-shadow: 0px 0px 10px lightsteelblue;*/\r\n}\r\n\r\n\r\n\r\n.timeline-header{\r\n  text-align:center;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: -8px -8px 2px -8px;\r\n  box-shadow: 0px 1px 1px #999999;\r\n  padding: 10px;\r\n  display: list-item;\r\n}\r\n/* end here time line css*/\r\n\r\n/********** this will work when click on up-down button and div appear like a shutter  **************/\r\n.show-down-Slowly {\r\n  margin-top: 8px !important;\r\n  transition: margin-top .3s ;\r\n  -webkit-transition: margin-top .3s ;\r\n}\r\n.data-box {\r\n  /*margin-top: -2000px;*/\r\n  margin-left: 8px;\r\n  width:98%;\r\n  font-size: 11px;\r\n  color: #9b9b9b;\r\n}\r\n/****************************************************************************/\r\n\r\n/********** this will work when click on up-down button and div appear like a shutter  **************/\r\n.hide-up-Slowly{\r\n  /*margin-top: -2000px !important;*/\r\n  transition: margin-top .3s ;\r\n  -webkit-transition: margin-top .3s ;\r\n}\r\n\r\n/****************************************************************************/\r\n\r\n.vehicle-no{\r\n  font-size:20px;\r\n  color:rgba(255, 255, 255, 0.94);\r\n  margin-left:10px;\r\n}\r\n\r\n.vehicle-status{\r\n  padding: 4px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  background-color: #1d6be7;\r\n  color: white;\r\n}\r\n.vehicle-status1{\r\n  padding: 4px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  background-color: #6d6f74;\r\n  color: white;\r\n}\r\n\r\n.current-vehicle-card{\r\n  background-color:#dbdee2;\r\n  color: rgb(20, 5, 5);\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n  /*margin-bottom:13px;*/\r\n}\r\n.current-vehicle-card1{\r\n  background-color:#acaeb3;\r\n  color: white;\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n  /*margin-bottom:13px;*/\r\n}\r\n\r\n.driver-name{\r\n  margin-left: auto;\r\n  font-size: 15px;\r\n  color:rgba(255, 255, 255, 0.87);\r\n  padding: 2px 8px;\r\n}\r\n\r\n.phone-icon{\r\n  margin-left: 8px;\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\n\r\n.alert-box{\r\n  font-size: 13px;\r\n  line-height:1.67;\r\n  color:rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.disconnected{\r\n  background-color: #ff5252;\r\n  border: solid 1px #ff5252;\r\n  color: white;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding: 3px;\r\n}\r\n\r\n.time{\r\n  color: #9b9b9b;\r\n  text-align: center;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  font-size: 11px;\r\n  min-width: 50px;\r\n  max-width: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n.rotate{ /* IE 9 */\r\n  -webkit-transform: rotate(90deg); /* Safari */\r\n  transform: rotate(90deg);\r\n  font-size: 13px\r\n}\r\n\r\n.travling-time{\r\n  position: absolute;\r\n  margin-left: -133px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  text-align: center;\r\n  height: 100%;\r\n  /*margin-top : -34px;*/\r\n  min-width: 50px;\r\n  max-width: 68px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.customExpansionPanel >>> .mat-expansion-panel-body{\r\n  padding: 0px !important;\r\n}\r\n.custom-modal-container {\r\n  padding: 15px;\r\n}\r\n\r\n.custom-modal-header {\r\n  background-color: #219161;\r\n  color: #fff;\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\r\n  margin-top: -15px;\r\n  margin-bottom: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div>\r\n        <div>\r\n           <span class=\"driver-name-web\" >Driver</span>\r\n        </div>\r\n        <div>\r\n           <a class=\"driver-name-web\" href=\"tel:{{selectedShipment['currentShipment']?.mobileNo}}\" >\r\n             <i  class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;+91{{selectedShipment['currentShipment']?.mobileNo}}\r\n           </a>\r\n        </div>\r\n      </div>\r\n  \r\n\r\n<!-- done    selected vahicle for Manually Shipment Tracking -->\r\n<!-- done -->\r\n \r\n<div *ngIf=\"vehicleState == 'EnrouteForPickUp'\" style=\"background-color: white\">\r\n  <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;border: 2px solid lightgrey;\">\r\n    <div style=\"overflow: hidden;font-size:12px\">\r\n      <div>\r\n        <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\r\n          <span style=\"margin-left: 64px;\">Delivery</span>\r\n        </div>\r\n        <div class=\"EFP_unvisited-timeline\">\r\n          <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\r\n          <div style=\"display:flex\">\r\n            <span style=\"margin-left: 75px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\r\n          </div>\r\n\r\n          <div class=\"fade-sub-header-text\" style=\"margin-left:60px;text-align:left;padding: 18px;font-size:11px;\">\r\n            <span>Transite Time :</span>\r\n            <span>16 hrs</span>\r\n          </div>\r\n          <span class=\"custom-button\" style=\"float:right;margin-top:10px;\">\r\n            <button  *ngIf=false mat-raised-button style=\"background-color:#428fd4;color:rgba(255, 255, 255, 0.94);\"  (click)=\"openDialog1()\">Confirm Pickup</button>\r\n            </span>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <i style=\"margin-left:48px;margin-top:15px;font-size: 18px;\" class=\"fa fa-circle-thin fade-sub-header-text\" aria-hidden=\"true\"></i>\r\n      <div style=\"display:flex;\" class=\"fade-sub-header-text\">\r\n        <span style=\"margin-left: 68px; margin-top:-30px\">Pickup</span>\r\n        <span style=\"margin-left: -30px;margin-top:-5px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\r\n      </div>\r\n     \r\n      </div>\r\n    </div> \r\n  </div>\r\n \r\n\r\n<!-- done -->\r\n<div *ngIf=\"vehicleState == 'AtPickUpPoint'\" style=\"background-color: white\">\r\n  <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;border: 2px solid lightgrey;\">\r\n\r\n    <div style=\"overflow: hidden\">\r\n      <div class=\"fade-sub-header-text sub-header-text-size\" style=\"margin: 8px 5px 2px 5px;\">\r\n        <span style=\"margin-left: 64px;\">Delivery</span>\r\n      </div>\r\n      <div class=\"EFP_unvisited-timeline\">\r\n        <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\r\n        <div style=\"display:flex;font-size:15px;font-weight: bold\">\r\n          <span class=\"fade-sub-header-text\" style=\"margin-left: 75px;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\r\n        </div>\r\n\r\n        <div class=\"fade-sub-header-text sub-header-text-size\" style=\"text-align:left;padding: 18px;padding-bottom:60px;\">\r\n          <span style=\"margin-left:50px\">Transit :1440 Km in 6 Day</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- **************** for in case of device disconnect ********************** -->\r\n    <div class=\"vehicle-status1\">\r\n      <span>At Pickup point</span>\r\n    </div>\r\n    <!--   ************************************  -->\r\n\r\n    <mat-card fxLayout=\"row\" class=\"current-vehicle-card\">\r\n      <div style=\"margin-left: 31px;\">\r\n        <img style=\"height:30px;\" src=\"../../../images/trip-icons/Enroute.png\" alt=\"image\">\r\n      </div>\r\n      <div style=\"width: 100%\">\r\n        <div style=\"font-size:14px;padding-left: 8px;padding-right: 5px;\" class=\"custom-button\">\r\n          <span style=\"line-height: 1.43\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\r\n          <button *ngIf=false mat-raised-button color=\"primary\" style=\"background-color:#428fd4;color:rgba(255, 255, 255, 0.94);float:right\" (click)=\"openDialog2()\">Confirm Pickup</button>\r\n        </div>\r\n\r\n        <div style=\"white-space: nowrap;margin-bottom: -10px;margin-left:15px\">\r\n          <span class=\"sub-header-text-size\">Since 3 hr</span>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!--done-->\r\n<div *ngIf=\"vehicleState == 'EnrouteForDestination'\" style=\"background-color: white\">\r\n  <!-- *****************************     current trip start here *************************** -->\r\n  <div style=\"color:rgba(0, 0, 0, 0.54);padding: 5px;margin: 5px;border: 2px solid lightgrey;\">\r\n    <div style=\"overflow: hidden;font-size:12px\">\r\n      <div>\r\n        <div class=\"fade-sub-header-text\" style=\"margin: 8px 5px;\">\r\n          <span style=\"margin-left: 64px;\">Delivery</span>\r\n          <span class=\"fade-sub-header-text sub-header-text-size\" style=\"float: right;\">4 oct 2017</span>\r\n        </div>\r\n        <div class=\"EFP_unvisited-timeline\">\r\n          <i style=\"color: #D0D0D0\" class=\"fa fa-circle-thin  EFP_timeline_icon\" aria-hidden=\"true\"></i>\r\n          <div style=\"display:flex\" class=\"custom-button\">\r\n            <span style=\"margin-left: 75px;font-weight: bold;color:#7d7d86;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\r\n            <button  *ngIf=false mat-raised-button  style=\"font-size:14px;margin-left:auto;margin-right: -10px;\" (click)=\"openDialog4()\">Confirm Delivery</button>\r\n          </div>\r\n\r\n          <div class=\"fade-sub-header-text\" style=\"text-align:right;padding: 15px;font-size:11px;\">\r\n            <!--<span>Transite Time :</span><span>16 hrs</span>-->\r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"vehicle-status1\">\r\n      <span>Enroute for Delivery</span>\r\n    </div>\r\n    \r\n    <div style=\"overflow: hidden;\">\r\n      <section class=\"DP-timeline\" style=\"padding: 5px;\">\r\n          <span class=\"custom-button\"> <button *ngIf=false mat-raised-button color=\"primary\" style=\"margin-left:60px;margin-top:-10px;font-size:11px\" (click)=\"openDialog3()\">add Location</button></span>\r\n          <div style=\"margin-left:60px;margin-top:10px;font-size: 11px\">\r\n            <div fxLayout=\"row\" ><span fxFlex style=\"width:100%;color: #323232;\" *ngIf=\"firstUpdateLocation !=null\" >{{firstUpdateLocation}}</span>  <span  fxFlex class=\"fade-sub-header-text sub-header-text-size\" >Yesterday at 3pm</span></div><br>\r\n            <div fxLayout=\"row\" style=\"width:100%;color: #323232;\"><span fxFlex  *ngIf=\"secondUpdateLocation !=null\">{{secondUpdateLocation}}</span> <span  fxFlex class=\"fade-sub-header-text sub-header-text-size\" >30 OCT 17,at 7pm</span></div>\r\n          </div>\r\n        <mat-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:20px\" hideToggle=\"true\" >\r\n          <mat-expansion-panel-header (click)=\"isExtended = !isExtended\" style=\"margin-left: 61px;padding:0px;\">\r\n            <!-- ******************* when extended == true ******************-->\r\n            <div *ngIf=\"isExtended\" style=\"width: 100%;\">\r\n              <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n            </div>\r\n            <!-- *******************close when extended == true ******************-->\r\n\r\n            <!-- ******************* when extended == false ******************-->\r\n            <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\r\n              <div style=\"display: grid\">\r\n                <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n                <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n              </div>\r\n              <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\" >\r\n                <span>{{movLegLength-2}} &nbsp;&nbsp;more Location</span> \r\n              </div>\r\n            </div>\r\n            <!-- *******************close when extended == false ******************-->\r\n          </mat-expansion-panel-header>\r\n\r\n          <!-- ******************* when extended == true  body containt******************-->\r\n          <div *ngFor=\"let movmentLeg of selectedShipment.movementLegs.reverse()\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\">\r\n            <span style=\"margin-top: 5px\">{{movmentLeg.endLocation.address}}&nbsp;&nbsp;{{movmentLeg.state}}</span>\r\n          </div>\r\n          <!-- ******************* close when extended == true  expansion panel body******************-->\r\n        </mat-expansion-panel>\r\n\r\n        <div>\r\n          <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </section>\r\n      <div style=\"margin-left: 68px;margin-top: -20px;\">\r\n        <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\r\n          <span>Pickup</span>\r\n          <span style=\"margin-left: auto;\">15 sep 2017 3:30 pm</span>\r\n        </div>\r\n        <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\r\n          <span class=\"fade-header-text\" style=\"font-size: 13px\">IOCL panipath</span>\r\n          <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration 15 hr</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- ************ close current trip ***** -->\r\n</div>\r\n\r\n<!--done-->\r\n<div *ngIf=\"vehicleState == 'AtDestination' && tillTime==null\" style=\"background-color: white\">\r\n  <div style=\"padding: 5px;border:2px solid lightgrey;\">\r\n    <div class=\"vehicle-status1\" >\r\n      <span>At Delivery Point</span>\r\n    </div>\r\n\r\n    <mat-card fxLayout=\"row\" class=\"current-vehicle-card\">\r\n      <div style=\"margin-left: 31px;\">\r\n        <i style=\"font-size: 38px;\" class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div style=\"width: 100%\">\r\n        <div class=\"custom-button\" style=\"font-size:16px;padding-left: 8px;padding-right: 5px;display: flex\">\r\n          <span style=\"line-height: 1.43;margin-right: 5px;margin-top:5px;\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\r\n          <button *ngIf=false mat-raised-button  color=\"primary\" style=\"margin-left:auto;margin-right: -10px;\" (click)=\"openDialog5()\">Confirm Delivery</button>\r\n        </div>\r\n        <div style=\"margin-top: 8px;font-size: 11px;\">\r\n          <span style=\"float: right\">Since 1 d</span>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <div style=\"overflow: hidden;\">\r\n      <section class=\"DP-timeline\" style=\"padding: 5px;\">\r\n        <mat-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:40px\" hideToggle=\"true\">\r\n          <mat-expansion-panel-header (click)=\"isExtended = !isExtended\" style=\"margin-left: 61px;padding:0px;\">\r\n            <!-- ******************* when extended == true ******************-->\r\n            <div *ngIf=\"isExtended\" style=\"width: 100%;\">\r\n              <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n            </div>\r\n            <!-- *******************close when extended == true ******************-->\r\n\r\n            <!-- ******************* when extended == false ******************-->\r\n            <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\r\n              <div style=\"display: grid\">\r\n                <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n                <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n              </div>\r\n              <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\">\r\n                <span>{{movLegLength}} stops &nbsp;&nbsp;&nbsp;&nbsp;12 hr</span>\r\n                <span style=\"float: right\">899 km in 12 d</span>\r\n              </div>\r\n            </div>\r\n            <!-- *******************close when extended == false ******************-->\r\n          </mat-expansion-panel-header>\r\n\r\n          <!-- ******************* when extended == true  body containt******************-->\r\n          <div *ngFor=\"let movmentLeg of selectedShipment.movementLegs.reverse()\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\">\r\n            <span style=\"margin-top: 5px\">{{movmentLeg.endLocation.address}}&nbsp;&nbsp;{{movmentLeg.state}}</span>\r\n          </div>\r\n          <!-- ******************* close when extended == true  expansion panel body******************-->\r\n        </mat-expansion-panel>\r\n\r\n        <div>\r\n          <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </section>\r\n      <div style=\"margin-left: 68px;margin-top: -20px;\">\r\n        <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\r\n          <span>Pickup</span>\r\n          <span style=\"margin-left: auto;\">15 sep 2017 3:30 pm</span>\r\n        </div>\r\n        <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\r\n          <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\r\n          <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration 15 hr</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--done-->\r\n<div *ngIf=\"vehicleState == 'AtDestination' && tillTime!=null\" style=\"background-color: white\">\r\n    <div style=\"padding: 5px;border:2px solid lightgrey;\">\r\n          \r\n      <div style=\"margin-top:10px\">\r\n            <i class=\"fa fa-circle DP_timeline-image\" style=\"padding: 5px;\" aria-hidden=\"true\"></i>\r\n            <section class=\"DP-timeline1\" style=\"padding: 5px;\">\r\n            <div  style=\"margin-left: 68px;margin-top:-40px\">\r\n                <div  style=\"display:flex;\">\r\n                  <span class=\" fade-sub-header-text sub-header-text-size\">Delivery</span>\r\n                  <span style=\"margin-left:-35px;margin-top:20px;font-size: 13px\">{{selectedShipment.currentShipment.endLocation.freightLocation.name}}</span>\r\n                  <div  style=\"margin-top:50px;font-size: 11px;margin-left: -50px;\">\r\n                   <div fxLayout=\"row\" ><span fxFlex style=\"width:100%\" *ngIf=\"firstUpdateLocation !=null\" >{{firstUpdateLocation}}</span>  <span  fxFlex class=\"fade-sub-header-text sub-header-text-size\" >Yesterday at 3pm</span></div><br>\r\n                   <div fxLayout=\"row\" style=\"width:100%\"><span fxFlex  *ngIf=\"secondUpdateLocation !=null\">{{secondUpdateLocation}}</span> <span  fxFlex class=\"fade-sub-header-text sub-header-text-size\" >30 OCT 17,at 7pm</span></div>\r\n                  </div> \r\n                </div>\r\n            </div>\r\n          </section>\r\n      </div> \r\n  \r\n      <div style=\"overflow: hidden;\">\r\n        <section class=\"DP-timeline\" style=\"padding: 5px; margin-top:-10px\">\r\n          <mat-expansion-panel class=\"customExpansionPanel\" style=\"box-shadow:none;margin-bottom:40px\" hideToggle=\"true\">\r\n            <mat-expansion-panel-header (click)=\"isExtended = !isExtended\" style=\"margin-left: 61px;padding:0px;\">\r\n              <!-- ******************* when extended == true ******************-->\r\n              <div *ngIf=\"isExtended\" style=\"width: 100%;\">\r\n                <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n              </div>\r\n              <!-- *******************close when extended == true ******************-->\r\n  \r\n              <!-- ******************* when extended == false ******************-->\r\n              <div *ngIf=\"!isExtended\" style=\"display: flex;width: 100%;\" class=\"fade-sub-header-text sub-header-text-size\">\r\n                <div style=\"display: grid\">\r\n                  <i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n                  <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:18px;font-weight:bold;color:#d8d8d8;\"></i>\r\n                </div>\r\n                <div style=\"margin-left: 5px;margin-top: 10px;width: 100%;\">\r\n                  <span>{{movLegLength-2}} more&nbsp;locations</span>\r\n                </div>\r\n              </div>\r\n              <!-- *******************close when extended == false ******************-->\r\n            </mat-expansion-panel-header>\r\n  \r\n            <!-- ******************* when extended == true  body containt******************-->\r\n            <div *ngFor=\"let movmentLeg of selectedShipment.movementLegs.reverse()\" style=\"margin-left: 70px;display:grid\" class=\"fade-sub-header-text sub-header-text-size\">\r\n              <span style=\"margin-top: 5px\">{{movmentLeg.endLocation.address}}&nbsp;&nbsp;{{movmentLeg.state}}</span>\r\n            </div>\r\n            <!-- ******************* close when extended == true  expansion panel body******************-->\r\n          </mat-expansion-panel>\r\n  \r\n          <div>\r\n            <i class=\"fa fa-circle DP_timeline-image\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </section>\r\n        <div style=\"margin-left: 68px;margin-top: -20px;\">\r\n          <div class=\"fade-sub-header-text sub-header-text-size\" style=\"display:flex;\">\r\n            <span>Pickup</span>\r\n            <span style=\"margin-left: auto;\">15 sep 2017 3:30 pm</span>\r\n          </div>\r\n          <div style=\"display: grid;margin-left: 5px;margin-top: 4px;\">\r\n            <span class=\"fade-header-text\" style=\"font-size: 13px\">{{selectedShipment.currentShipment.startLocation.freightLocation.name}}</span>\r\n            <span style=\"margin-top: 3px;\" class=\"fade-sub-header-text sub-header-text-size\">Loading duration 15 hr</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedVehicleStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shipment_services__ = __webpack_require__("../../../../../src/service/shipment-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ConfirmPickupDialog1Component} from "../../components/dialog/confirm-pickup-dialog1/confirm-pickup-dialog1.component";
// import {ConfirmPickupDialog2Component} from "../../components/dialog/confirm-pickup-dialog2/confirm-pickup-dialog2.component";
// import {UpdateLocationDialogComponent} from "../../components/dialog/update-location-dialog/update-location-dialog.component";
// import {ConfirMateliveryDialog1Component} from "../../components/dialog/confirm-delivery-dialog1/confirm-delivery-dialog1.component";
// import {ConfirMateliveryDialog2Component} from "../../components/dialog/confirm-delivery-dialog2/confirm-delivery-dialog2.component";
// import { EditPickupLocationComponent } from '../../components/dialog/edit-pickup-location/edit-pickup-location.component';
// import { EditDeliveryLocationComponent } from '../../components/dialog/edit-delivery-location/edit-delivery-location.component';


var SelectedVehicleStatusComponent = (function () {
    function SelectedVehicleStatusComponent(_router, dialog, shipmentServices, _store) {
        var _this = this;
        this._router = _router;
        this.dialog = dialog;
        this.shipmentServices = shipmentServices;
        this._store = _store;
        this.vehicleState = '';
        this.vehicleStatus = '';
        this.unSub_shipmentDetail = null;
        this.isExtended = false;
        this.selectedShipment = {};
        //TODO unsubscribe shipmentDetail
        this.unSub_shipmentDetail = this._store.select('shipmentDetail').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling     
                }
                else {
                    _this.selectedShipment = value['data'];
                    _this.vehicleState = _this.selectedShipment.vts.state;
                    _this.vehicleStatus = _this.selectedShipment.currentShipment.trackingType;
                    _this.movLegLength = _this.selectedShipment.movementLegs.length;
                    _this.tillTime = _this.selectedShipment.currentShipment.endLocation.tillTime;
                    if (_this.movLegLength === 1) {
                        _this.firstUpdateLocation = _this.selectedShipment.movementLegs[_this.movLegLength - 1].endLocation.name;
                        _this.secondUpdateLocation = null;
                    }
                    else if (_this.movLegLength > 1) {
                        _this.firstUpdateLocation = _this.selectedShipment.movementLegs[_this.movLegLength - 1].endLocation.address;
                        _this.secondUpdateLocation = _this.selectedShipment.movementLegs[_this.movLegLength - 2].endLocation.address;
                    }
                    else {
                        _this.firstUpdateLocation = null;
                        _this.secondUpdateLocation = null;
                    }
                    console.log(_this.firstUpdateLocation);
                    console.log(_this.movLegLength);
                    console.log(_this.secondUpdateLocation);
                }
            }
        });
    }
    SelectedVehicleStatusComponent.prototype.ngOnInit = function () {
    };
    // openDialog1(): void {
    //   let dialogRef = this.dialog.open(ConfirmPickupDialog1Component, {
    //     height: '400px',width: '450px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //      this.shipmentServices.pickup.emit(result);
    //      console.log(result);
    //   });
    // }
    // openDialog2(): void {
    //   let dialogRef = this.dialog.open(ConfirmPickupDialog2Component, {
    //     height: '400px',width: '500px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //   this.shipmentServices.pickup.emit(result);
    //      console.log(result);
    //   });
    // }
    // openDialog3(): void {
    //   let dialogRef = this.dialog.open(UpdateLocationDialogComponent, {
    //     height: '400px',width: '500px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.shipmentServices.addStop.emit(result);
    //     console.log(result);
    //   });
    // }
    // openDialog4(): void {
    //   let dialogRef = this.dialog.open(ConfirMateliveryDialog1Component, {
    //     height: '400px',width: '500px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.shipmentServices.delivery.emit(result);
    //     console.log(result);
    //   });
    // }
    // openDialog5(): void {
    //   let dialogRef = this.dialog.open(ConfirMateliveryDialog2Component, {
    //     height: '400px',width: '500px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.shipmentServices.delivery.emit(result);
    //     console.log(result);
    //   });
    // }
    // openEditPickup(): void {
    //   let dialogRef = this.dialog.open(EditPickupLocationComponent, {
    //     height: '530px',width: '450px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     //this.shipmentServices.addStop.emit(result);
    //     console.log(`${result}`);
    //   });
    // }
    // openEditDelivery(): void {
    //   let dialogRef = this.dialog.open(EditDeliveryLocationComponent, {
    //     height: '530px',width: '450px'      
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     //this.shipmentServices.addStop.emit(result);
    //     console.log(`${result}`);
    //   });
    // }
    SelectedVehicleStatusComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_shipmentDetail != 'undefined' && this.unSub_shipmentDetail != null && this.unSub_shipmentDetail != undefined)
            this.unSub_shipmentDetail.unsubscribe();
    };
    return SelectedVehicleStatusComponent;
}());
SelectedVehicleStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selected-vehicle-status',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_shipment_services__["a" /* ShipmentServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shipment_services__["a" /* ShipmentServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], SelectedVehicleStatusComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=selected-vehicle-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  font-family: Helvetica !important;\r\n}\r\n\r\n\r\n.card-span span{\r\n  margin-right: 50px;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n  line-height: 2;\r\n}\r\n\r\n.card-sub-span{\r\n  margin-left: 10px;\r\n  border-bottom: 1px solid aliceblue;\r\n  margin-top: 5px;\r\n  padding-bottom: 10px;\r\n  color: #6f6a6a;\r\n}\r\n\r\n.card-sub-span span{\r\n  /*margin-right: 70px;*/\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n  line-height: 1.7;\r\n}\r\n\r\n .my-expansion-panel-body >>> .mat-expansion-panel-body{\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n .shipment-tracking-state{\r\n   color: blue;\r\n   border-radius: 10px;\r\n   padding: 3px 10px;\r\n   background-color: #ece8e8;\r\n }\r\n\r\n\r\n.expand-search {\r\n  border: 1.5px solid #b0bcc1;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  padding: 5px 26px 5px 12px;\r\n  display: inline-block;\r\n  border-radius: 17px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\n/* search box*/\r\n.expand-search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n}\r\n\r\n\r\n.status-button{\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  height: 33px;\r\n  width: 19%;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n}\r\n\r\n.status-button:hover\r\n{\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden\"  >\r\n  <div style=\"display:flex;padding:7px\" >\r\n    <div style=\"display:flex;padding-top: 7px;\">\r\n      <button (click)=\"selectedFilter = '';filterValue()\" mat-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == ''?'#1976d2':''\"  [style.color]=\"selectedFilter == ''?'#FFFFFF':''\">{{countFilterData['all']}} <span>All</span></button>\r\n      <button (click)=\"selectedFilter = 'active';filterValue()\" mat-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == 'active'?'#1976d2':''\" [style.color]=\"selectedFilter == 'active'?'#FFFFFF':''\" style=\"margin-left: 15px\">{{countFilterData['active']}} <span>Active</span></button>\r\n      <button (click)=\"selectedFilter = 'completed';filterValue()\" mat-raised-button class=\"status-button\" [style.background-color]=\"selectedFilter == 'completed'?'#1976d2':''\" [style.color]=\"selectedFilter == 'completed'?'#FFFFFF':''\" style=\"margin-left: 15px\">{{countFilterData['completed']}} <span>Completed</span></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top:15px;text-align:center;font-size:18px;color:#e27560;\" *ngIf=\"isSpinner ==false\" >\r\n       <span>{{msg}}</span>\r\n  </div>\r\n  <mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></mat-spinner>\r\n  <div id=\"mainDiv\" style=\"margin-top: 10px;overflow: auto;height: calc(100vh - 125px);\" >\r\n    <!-- [expanded]=true  means close by default-->\r\n    <mat-expansion-panel  [expanded]=true class=\"my-expansion-panel-body\" style=\"margin-top: 10px;padding: 12px\" *ngFor=\"let shipmentOrder of shipmentOrders;let ind=index\" id=\"{{ind}}\">\r\n      <mat-expansion-panel-header style=\"padding-left: 0px;\">\r\n        <div class=\"card-span\" >\r\n          <span ><b>Shipment Order Number :</b> {{(shipmentOrder?.shipmentOrderNumber)?(shipmentOrder?.shipmentOrderNumber):'N/A'}}</span>\r\n          <span><b>Shipment Order Creation Time :</b> {{(shipmentOrder?.shipmentOrderCreateDate)?(shipmentOrder?.shipmentOrderCreateDate | date:'dd-MMM-yyyy'):'N/A'}}</span>\r\n          <span><b>Shipment Order Type :</b> {{(shipmentOrder?.shipmentType)?(shipmentOrder?.shipmentType):'N/A'}}</span>\r\n          <span><b>Vehicle No :</b> {{(shipmentOrder?.vehicleRegistrationNumber)?(shipmentOrder?.vehicleRegistrationNumber):'N/A'}}</span>\r\n          <span><b>Transporter Name :</b> {{(shipmentOrder?.transporterName)?(shipmentOrder?.transporterName):'N/A'}}</span>\r\n          <span><b>Orgnization ID :</b> {{(shipmentOrder?.orgId)?(shipmentOrder?.orgId):'N/A'}}</span>\r\n          <span><b>Distance :</b> {{(shipmentOrder?.distance)?(shipmentOrder?.distance/1000):'N/A'}} KM</span>\r\n        </div>\r\n      </mat-expansion-panel-header>\r\n      <div style=\"margin-top: 10px\">\r\n        <div style=\"font-size: 14px;color: #7d7a7a;\"><b>Freight Unit:</b></div>\r\n        <div class=\"card-sub-span\"  *ngFor=\"let freightUnit of shipmentOrder?.freightUnits\" >\r\n          <div style=\"margin-bottom: 2px;display: flex;flex-wrap: wrap;justify-content: space-between;\" >\r\n            <span ><b>Freight Unit Number : </b>{{(freightUnit?.freightUnitNumber)?(freightUnit?.freightUnitNumber):'N/A'}}</span>\r\n            <span ><b>State : </b><span class=\"shipment-tracking-state\">{{(freightUnit?.shipmentState?.state)?(freightUnit?.shipmentState?.state):'N/A'}}</span></span>\r\n            <span ><b>Last Known Location : </b><span class=\"shipment-tracking-state\">{{(freightUnit?.shipmentState?.address)?(freightUnit?.shipmentState?.address):'N/A'}}</span></span>\r\n          </div>\r\n          <div style=\"display: flex;flex-wrap: wrap;justify-content: space-between;\">\r\n            <span><b>Consignor : </b>{{(freightUnit?.consignerName)?(freightUnit?.consignerName):'N/A'}}</span>\r\n            <span><b>Consignee : </b>{{(freightUnit?.consigneeName)?(freightUnit?.consigneeName):'N/A'}}</span>\r\n            <span><b>Material : </b>{{(freightUnit?.material)?(freightUnit?.material):'N/A'}}</span>\r\n            <span><b>Quantity : </b>{{(freightUnit?.quantity != 'null')?(freightUnit?.quantity):'N/A'}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <div style=\"height: 50px\"></div>\r\n  </div>\r\n\r\n  <button [matTooltipPosition]=\"'left'\" matTooltip=\"Add new Shipment Order\" mat-fab color=\"primary\" name=\"createShipment\" (click)=\"createShipmentOrder()\" style=\"position:absolute;bottom:10px;right:10px\" >\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 24px;line-height: 24px;color: white;\"></i>\r\n  </button>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseShipment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__ = __webpack_require__("../../../../../src/service/shipment-order-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrowseShipment = (function () {
    function BrowseShipment(router, shipmentOrderService, snackBar, _store) {
        var _this = this;
        this.router = router;
        this.shipmentOrderService = shipmentOrderService;
        this.snackBar = snackBar;
        this._store = _store;
        this.unSub_shipmentOrders = null;
        this.orderList = []; // array which contains res value
        this.shipmentOrders = []; //array which contains filtered value
        this.isSpinner = false;
        this.msg = '';
        this.selectedFilter = '';
        this.countFilterData = { all: 0, active: 0, completed: 0 };
        this.pageNo = 1;
        this.records = 5;
        this.totalFetchRecords = 5;
        this.shipmentOrderService.getShipmentOrderList.emit({ pageNo: this.pageNo, records: this.records });
        this.isSpinner = true;
        console.log("browse shipment component");
        this.unSub_shipmentOrders = this._store.select('shipmentOrders').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.msg = '';
            _this.isSpinner = false;
            if (value['error'] == "") {
                console.log(value['data']);
                // this.orderList =JSON.parse(JSON.stringify(value['data']));
                (_a = _this.orderList).push.apply(_a, value['data']);
                _this.filterValue();
                if (_this.shipmentOrders.length == 0) {
                    _this.msg = 'No Record Found';
                }
                _this.countFilter();
            }
            else {
                console.log(value['errorMsg']);
                _this.openSnackBar(value['errorMsg']);
                _this.msg = value['errorMsg'];
            }
            var _a;
        });
    } // close constructor
    BrowseShipment.prototype.ngOnDestroy = function () {
        console.log("add freight dialog close");
        if (this.unSub_shipmentOrders != null && this.unSub_shipmentOrders != undefined) {
            this.unSub_shipmentOrders.unsubscribe(this.shipmentOrders.length - 1);
        }
        this._store.dispatch({ type: "SHIPMENT_ORDERS", payload: null });
    };
    BrowseShipment.prototype.ngOnInit = function () {
        var _this = this;
        var container = screen.height;
        document.getElementById("mainDiv").addEventListener("scroll", function () {
            var selElement = document.getElementById(_this.shipmentOrders.length - 1 + "").getBoundingClientRect().bottom;
            if (selElement - 50 < container && selElement > 50) {
                if (_this.shipmentOrders.length > _this.totalFetchRecords - 1) {
                    console.log(selElement);
                    _this.totalFetchRecords = _this.totalFetchRecords + _this.records;
                    _this.pageNo = _this.pageNo + 1;
                    _this.shipmentOrderService.getShipmentOrderList.emit({ pageNo: _this.pageNo, records: _this.records });
                }
            }
        });
    };
    BrowseShipment.prototype.filterValue = function () {
        var _this = this;
        console.log("call filter");
        if (this.selectedFilter == '') {
            this.shipmentOrders = this.orderList;
        }
        if (this.selectedFilter == 'completed') {
            var list = this.orderList.filter(function (u) {
                if (u['freightUnits'][0]['shipmentState'] == undefined || u['freightUnits'][0]['shipmentState'] == null) {
                    return false;
                }
                return (u['freightUnits'][0]['shipmentState']['state'].toUpperCase().indexOf(_this.selectedFilter.toUpperCase()) != -1);
            });
            console.log("not call");
            console.log(list);
            {
                this.shipmentOrders = list;
            }
        }
        if (this.selectedFilter == 'active') {
            var list = this.orderList.filter(function (u) {
                if (u['freightUnits'][0]['shipmentState'] == undefined || u['freightUnits'][0]['shipmentState'] == null) {
                    return false;
                }
                else if (u['freightUnits'][0]['shipmentState']['state'] == 'EnrouteForPickUp' ||
                    u['freightUnits'][0]['shipmentState']['state'] == 'AtPickUpPoint' ||
                    u['freightUnits'][0]['shipmentState']['state'] == 'EnrouteForDestination' ||
                    u['freightUnits'][0]['shipmentState']['state'] == 'AtDestination') {
                    return true;
                }
                return false;
            });
            console.log(list);
            {
                this.shipmentOrders = list;
            }
        }
    }; //close filterValue methods
    BrowseShipment.prototype.countFilter = function () {
        this.countFilterData = { all: 0, active: 0, completed: 0 };
        this.countFilterData.all = this.shipmentOrders.length;
        for (var i = 0; i < this.shipmentOrders.length; i++) {
            if (this.shipmentOrders[i].freightUnits[0]['shipmentState'] != undefined) {
                // console.log(this.shipmentOrders[i].freightUnits[0]['shipmentState']['state']);
                if (this.shipmentOrders[i].freightUnits[0]['shipmentState']['state'] == 'completed') {
                    this.countFilterData.completed = this.countFilterData.completed + 1;
                }
                if (this.shipmentOrders[i].freightUnits[0]['shipmentState']['state'] == 'EnrouteForPickUp' ||
                    this.shipmentOrders[i].freightUnits[0]['shipmentState']['state'] == 'AtPickUpPoint' ||
                    this.shipmentOrders[i].freightUnits[0]['shipmentState']['state'] == 'EnrouteForDestination' ||
                    this.shipmentOrders[i].freightUnits[0]['shipmentState']['state'] == 'AtDestination') {
                    this.countFilterData.active = this.countFilterData.active + 1;
                }
            }
        }
        // freightUnits?.shipmentState?.state
    }; //close count filter
    BrowseShipment.prototype.createShipmentOrder = function () {
        this._store.dispatch({ type: "CREATE_SHIPMENT_RES", payload: null });
        this.router.navigate(["mainDashboard/createShipmentOrder"]);
    };
    BrowseShipment.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    return BrowseShipment;
}());
BrowseShipment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse-shipment',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__["a" /* ShipmentOrderServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__["a" /* ShipmentOrderServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], BrowseShipment);

var _a, _b, _c, _d;
//# sourceMappingURL=browse-shipment.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div {\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.weeklyButton {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n}\r\n\r\n.weeklyButton_S {\r\n    border: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: 0px 8px;\r\n    cursor: pointer;\r\n    min-width:20px;\r\n    line-height: 30px;\r\n    background: red;\r\n}\r\n\r\n\r\n.weeklyButton_S:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.weeklyButton:hover {\r\n    background-color: #5b89ff !important;\r\n    color: white;\r\n}\r\n\r\n.button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n  }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <div>\r\n    <span class=\"header-text\">Add Freight Unit</span>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 16px;\">\r\n    <div fxLayout>\r\n      <mat-form-field fxFlex  style=\"margin-right: 10px\">\r\n        <input matInput [(ngModel)]=\"freightUnitNumber\" placeholder=\"Freight Unit Number\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 10px\">\r\n        <mat-select [(ngModel)]=\"consignor\" placeholder=\" Select Consignor\" required >\r\n          <mat-option *ngFor=\"let selConsignor of consignorList\" value=\"{{selConsignor.uuid}}\" >{{selConsignor.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex >\r\n        <mat-select [(ngModel)]=\"consignee\" placeholder=\"Consignee\" required >\r\n          <mat-option *ngFor=\"let selConsignee of consigneeList\" value=\"{{selConsignee.uuid}}\" (click)=\"consigneeObj =selConsignee\">{{selConsignee.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout>\r\n      <mat-form-field fxFlex style=\"margin-right: 10px;\">\r\n        <input matInput  [(ngModel)]=\"material\" placeholder=\"Material\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 10px\" >\r\n        <input matInput type=\"number\" [(ngModel)]=\"quantity\" placeholder=\"Quantity\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex  >\r\n        <mat-select [(ngModel)]=\"UOM\" placeholder=\"Quantity UOM\">\r\n          <mat-option value=\"tonne\">Tonne</mat-option>\r\n          <mat-option value=\"pieces\">Pieces</mat-option>\r\n          <mat-option value=\"packets\">Packets</mat-option>\r\n          <mat-option value=\"litres\">Litres</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout>\r\n      <div fxFlex style=\"margin-right: 10px;margin-top: 23px;\" >\r\n        <owl-date-time matInput [autoClose]=\"true\" [(ngModel)]=\"freightUnitCreationDate\" placeHolder=\"Freight Unit Creation Date\"></owl-date-time>\r\n      </div>\r\n\r\n      <mat-form-field fxFlex  >\r\n        <input matInput type=\"number\" [(ngModel)]=\"distance\" placeholder=\"Distance\">\r\n      </mat-form-field> <span style=\"margin-top: 22px;\"> km</span>\r\n    </div>\r\n\r\n    <div fxLayout style=\"margin-top: 16px\" >\r\n      <div fxFlex style=\"margin-right: 10px;\" >\r\n        <owl-date-time matInput [autoClose]=\"true\" [(ngModel)]=\"actualStartTime\" placeHolder=\"Actual Start Time\"></owl-date-time>\r\n      </div>\r\n\r\n      <div fxFlex>\r\n        <owl-date-time matInput [autoClose]=\"true\" [(ngModel)]=\"actualEndTime\" placeHolder=\"Actual End Time\"></owl-date-time>\r\n      </div>\r\n    </div>\r\n\r\n      <div  style=\"margin-top: 10px;text-align: right;padding: 10px 10px\" >\r\n        <button mat-raised-button style=\"margin-right: 15px\" (click)=\"cancel()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"addFreightUnit()\">Add</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFreightUnitDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__ = __webpack_require__("../../../../../src/service/shipment-order-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by amit8.kumar on 12-12-2017.
 */




var AddFreightUnitDialog = (function () {
    function AddFreightUnitDialog(snackBar, _store, matDialogRef, shipmentOderService) {
        var _this = this;
        this.snackBar = snackBar;
        this._store = _store;
        this.matDialogRef = matDialogRef;
        this.shipmentOderService = shipmentOderService;
        this.freightUnitNumber = '';
        this.consigneeObj = null;
        this.consignorList = [];
        this.consignor = '';
        this.consignee = '';
        this.consigneeList = [];
        this.material = '';
        this.UOM = 'tonne';
        this.quantity = null;
        this.distance = null;
        this.consignorList.push({ uuid: '9ee8e724-96b9-4ec2-9b27-7fd0104b2327', name: 'Jindal saw limited' });
        this.unSub_freightLocation = this._store.select('freightLocation').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                _this.consigneeList = value['data'];
                console.log(_this.consigneeList);
            }
            else {
                console.log(value['errorMsg']);
            }
        });
    } //close constructor
    AddFreightUnitDialog.prototype.ngOnDestroy = function () {
        console.log("add freight dialog close");
        if (typeof this.unSub_freightLocation != 'undefined' && this.unSub_freightLocation != null && this.unSub_freightLocation != undefined) {
            this.unSub_freightLocation.unsubscribe();
        }
    };
    AddFreightUnitDialog.prototype.addFreightUnit = function () {
        if (this.checkValidation2()) {
            var obj = {
                "consigner": this.consignor,
                "consignee": this.consignee,
                "material": this.material,
                "quantity": this.quantity,
                "plannedStartTime": null,
                "plannedEndTime": null,
                "actualStartTime": (this.actualStartTime == undefined) ? null : this.actualStartTime.getTime(),
                "actualEndTime": (this.actualEndTime == undefined) ? null : this.actualEndTime.getTime(),
                "distance": (this.distance * 1000),
                "quantityUmo": this.UOM,
                "freightUnitNumber": this.freightUnitNumber,
                "freightUnitCreationDate": (this.freightUnitCreationDate == undefined) ? null : this.freightUnitCreationDate.getTime(),
            };
            this.matDialogRef.close({ FU: obj, consigneeObj: this.consigneeObj });
        }
    }; //close dialog addFeightUnit
    AddFreightUnitDialog.prototype.checkValidation2 = function () {
        if (this.freightUnitNumber == '' || this.freightUnitNumber == null) {
            this.openSnackBar("Please fill Freight Unit Number");
            return false;
        }
        if (this.consignor == '' || this.consignor == null) {
            this.openSnackBar("Please select Consignor");
            return false;
        }
        if (this.consignee == '' || this.consignee == null) {
            this.openSnackBar("Please select Consignee");
            return false;
        }
        return true;
    };
    AddFreightUnitDialog.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    AddFreightUnitDialog.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    return AddFreightUnitDialog;
}());
AddFreightUnitDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-freight-unit-dialog',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__["a" /* ShipmentOrderServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shipment_order_service__["a" /* ShipmentOrderServices */]) === "function" && _d || Object])
], AddFreightUnitDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=add-freight-unit-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-box{\r\n  padding: 15px;\r\n  border: 1px solid #d2cfcd;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*.mat-dialog-container{*/\r\n  /*overflow: unset !important;*/\r\n/*}*/\r\n\r\n.close-chips{\r\n  font-size: 22px;\r\n  border-radius: 50%;\r\n  padding: 0px 3px;\r\n  background-color: aliceblue;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\" style=\"position: absolute;\"></mat-spinner>\r\n\r\n<div style=\"padding: 15px;height: calc(100vh - 91px);overflow:auto\">\r\n  <div>\r\n    <span class=\"header-text\">Create Shipment Order</span>\r\n  </div>\r\n\r\n  <div class=\"form-box\">\r\n    <div style=\"margin-top: 20px\" fxLayout=\"row\">\r\n      <mat-form-field fxFlex style=\"margin-right: 15px\">\r\n        <input matInput [(ngModel)]=\"shipmentOrderNo\" placeholder=\"Shipment Order No\" required>\r\n      </mat-form-field>\r\n\r\n      <div fxFlex style=\"margin-right: 5px;\" [style.margin-top]=\"(shipmentOrderDate ==null)?'22px':'0px'\">\r\n        <div *ngIf=\"shipmentOrderDate !=null\" style=\"margin-bottom: 4px;\">\r\n          <span style=\"white-space: nowrap;font-size:12px\">\r\n            <b>Order Date</b>\r\n          </span>\r\n        </div>\r\n        <owl-date-time matInput hourFormat='12' [autoClose]=\"false\" dateFormat=\"DD/MMM/YYYY hh:mm a\" [(ngModel)]=\"shipmentOrderDate\"\r\n          placeHolder=\"Select Order Date\" required></owl-date-time>\r\n      </div>\r\n\r\n      <mat-form-field fxFlex>\r\n        <mat-select [(ngModel)]=\"shipmentOrderType\" placeholder=\"Shipment Order Type\">\r\n          <mat-option value=\"Inbound\">Inbound</mat-option>\r\n          <mat-option value=\"Outbound\">Outbound</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 10px\" fxLayout=\"row\">\r\n        <mat-form-field fxFlex style=\"margin-right: 15px\">\r\n            <mat-select [(ngModel)]=\"TBPName\" placeholder=\"Transport business partner name\" required>\r\n              <!--<mat-option value=\"\">select</mat-option>-->\r\n              <mat-option *ngFor=\"let trBusinessPart of trBusinessPartners\" value=\"{{trBusinessPart['uuid']}}\">{{trBusinessPart['partnerName']}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 10px\">\r\n        <mat-select [(ngModel)]=\"consignor\" placeholder=\" Select Consignor\" required>\r\n          <mat-option *ngFor=\"let selConsignor of consignorList\" value=\"{{selConsignor.freightLocationId}}\">{{selConsignor.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex>\r\n        <mat-select [(ngModel)]=\"consignee\" placeholder=\"Consignee\" required>\r\n          <mat-option *ngFor=\"let selConsignee of consigneeList\" value=\"{{selConsignee.freightLocation}}\" (click)=\"consigneeObj =selConsignee\">{{selConsignee.partnerName}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 10px\" fxLayout=\"row\">\r\n        <mat-form-field fxFlex style=\"margin-right: 15px;\">\r\n            <input matInput [(ngModel)]=\"material\" placeholder=\"Material\">\r\n          </mat-form-field>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 15px\">\r\n        <input matInput type=\"number\" [(ngModel)]=\"quantity\" placeholder=\"Quantity\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex>\r\n        <mat-select [(ngModel)]=\"UOM\" placeholder=\"Quantity UOM\">\r\n          <mat-option value=\"tonne\">Tonne</mat-option>\r\n          <mat-option value=\"pieces\">Pieces</mat-option>\r\n          <mat-option value=\"packets\">Packets</mat-option>\r\n          <mat-option value=\"litres\">Litres</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 10px\" fxLayout=\"row\">\r\n\r\n        <div fxFlex style=\"margin-right: 15px; margin-top: 22px;\">\r\n            <owl-date-time matInput [autoClose]=\"true\" hourFormat='12' dateFormat=\"DD/MMM/YYYY hh:mm a\" [(ngModel)]=\"plannedStartTime\"\r\n              placeHolder=\"Planned Start Time\" required></owl-date-time>\r\n          </div>\r\n\r\n      <div fxFlex style=\"margin-right:15px; margin-top: 22px;\">\r\n        <owl-date-time matInput [autoClose]=\"true\" hourFormat='12' dateFormat=\"DD/MMM/YYYY hh:mm a\" [(ngModel)]=\"plannedEndTime\"\r\n          placeHolder=\"Planned End Time\"></owl-date-time>\r\n      </div>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 15px;\">\r\n          <input matInput style='text-transform:uppercase' (blur)=\"checkVehicleRegNoExist()\" [(ngModel)]=\"vehicleRegNo\" placeholder=\"vehicle reg No\"\r\n            required>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div style=\"margin-top: 10px\" fxLayout=\"row\">\r\n      <div style=\"margin-right: 15px;\" fxFlex>\r\n        <mat-form-field style=\"width: calc(100% - 22px);\">\r\n          <input type=\"number\" matInput [(ngModel)]=\"distance\" placeholder=\"distance\">\r\n        </mat-form-field>\r\n        <span style=\"font-size:12px\"> km</span>\r\n      </div>\r\n\r\n      <mat-form-field fxFlex style=\"margin-right: 15px\">\r\n        <mat-select [(ngModel)]=\"trackMode\" placeholder=\"Select Track Mode\" required>\r\n          <mat-option value=\"Manual\">Manual</mat-option>\r\n          <mat-option value=\"Tracker\">Tracker</mat-option>\r\n          <mat-option *ngIf=\"isVehicleExist\" value=\"Trip\">Tracknet</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div fxFlex style=\"margin-left: 15px;\">\r\n        <mat-form-field *ngIf=\"trackMode =='Tracker'\" style=\"width:100%;\">\r\n          <input matInput [(ngModel)]=\"imei\" placeholder=\"IMEI\" required>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 10px;text-align: right;padding: 10px 10px\">\r\n      <button mat-raised-button style=\"margin-right: 15px\" (click)=\"cancel()\">Cancel</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"createShipmentOrder()\">Create</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"left: 16px;position: absolute;width: calc(100% - 29px);bottom: 8px;\" >\r\n  <button style=\"text-align: left;line-height: 1.9;background-color: #e1cfe4;margin-left: 5px\" *ngFor=\"let recentShimentOrder of recentShimentOrders\" mat-raised-button\r\n          (click)=\"setValueFromHistory(recentShimentOrder)\"\r\n  ><b>To:</b>{{recentShimentOrder['selectedConsignee']['partnerName']}} <br> <b>By:</b>{{recentShimentOrder['selectedBusinessPartner']['partnerName']}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShipmentOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_freight_unit_dialog_add_freight_unit_dialog_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_shipment_order_service__ = __webpack_require__("../../../../../src/service/shipment-order-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_businessPartnerService__ = __webpack_require__("../../../../../src/service/businessPartnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateShipmentOrder = (function () {
    function CreateShipmentOrder(localStorageService, snackBar, _store, router, dialog, shipmentOderService, businessPartnerService) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.snackBar = snackBar;
        this._store = _store;
        this.router = router;
        this.dialog = dialog;
        this.shipmentOderService = shipmentOderService;
        this.businessPartnerService = businessPartnerService;
        this.shipmentOrderNo = '';
        this.isSpinner = false;
        this.shipmentOrderType = "Inbound";
        this.TBPName = "";
        this.distance = null;
        this.vehicleRegNo = "";
        this.trBusinessPartners = [];
        this.freightUnits = [];
        this.trackMode = '';
        this.isVehicleExist = false;
        this.imei = '';
        this.consignor = '';
        this.consignee = '';
        this.material = '';
        this.quantity = '';
        this.UOM = 'tonne';
        this.consigneeList = [];
        this.consignorList = [];
        // public selectedBusinessPartner: any;
        // public consigneeObj: any;
        this.unSub_trBusinessPartners = null;
        this.unSub_createShipmentRes = null;
        this.unSub_checkVehicleNoExist = null;
        this.unSub_businessPartnerList = null;
        this.unSub_CustomerDetails = null;
        this.unSub_Organisation = null;
        this.unSub_CustomerDetails = this._store.select('customerDetails').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.uuid = value['customer']['orgId'];
        });
        this.shipmentOderService.getFreightLocationList.emit();
        this.businessPartnerService.getAllBusinessPartners.emit();
        this.businessPartnerService.getOrganisation.emit(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["b" /* path */].GET_ORGANISATION + '?uuid=' + this.uuid);
        console.log(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["b" /* path */].GET_ORGANISATION + '?uuid=' + this.uuid);
        this.unSub_createShipmentRes = this._store.select('createShipmentRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            if (value['error'] == "") {
                console.log(value['successMsg']);
                _this.openSnackBar(value['successMsg']);
                _this.router.navigate(["mainDashboard/browseShipment"]);
            }
            else {
                console.log(value['errorMsg']);
                _this.openSnackBar(value['errorMsg']);
            }
        });
        this.unSub_checkVehicleNoExist = this._store.select('checkVehicleNoExist').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            if (value['error'] == "") {
                _this.isVehicleExist = value['data']['exist'];
                console.log(value);
            }
            else {
                console.log(value['errorMsg']);
                _this.openSnackBar(value['errorMsg']);
            }
        });
        this.unSub_businessPartnerList = this._store.select('allBusinessPartners').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.consigneeList = [];
            _this.trBusinessPartners = [];
            console.log(value);
            for (var i = 0; i < value['data'].length; i++) {
                if (value['data'][i]['type'] == 'customer') {
                    _this.consigneeList.push(value['data'][i]);
                }
                else {
                    _this.trBusinessPartners.push(value['data'][i]);
                }
            }
        });
        this.unSub_Organisation = this._store.select('organisationStore').subscribe(function (response) {
            if (response == null)
                return;
            console.log(response);
            _this.consignorList = [];
            _this.consignorList.push(response['data']);
        });
        this.shipmentOrderDate = new Date();
    } //constructor close
    CreateShipmentOrder.prototype.ngOnDestroy = function () {
        console.log("add freight dialog close");
        if (this.unSub_trBusinessPartners != null && this.unSub_trBusinessPartners != undefined) {
            this.unSub_trBusinessPartners.unsubscribe();
        }
        if (this.unSub_createShipmentRes != null && this.unSub_createShipmentRes != undefined) {
            this.unSub_createShipmentRes.unsubscribe();
        }
        if (this.unSub_checkVehicleNoExist != null && this.unSub_checkVehicleNoExist != undefined) {
            this.unSub_checkVehicleNoExist.unsubscribe();
        }
        if (this.unSub_businessPartnerList != null && this.unSub_businessPartnerList != undefined) {
            this.unSub_businessPartnerList.unsubscribe();
        }
        if (this.unSub_CustomerDetails != null && this.unSub_CustomerDetails != undefined) {
            this.unSub_CustomerDetails.unsubscribe();
        }
        if (this.unSub_Organisation != null && this.unSub_Organisation != undefined) {
            this.unSub_Organisation.unsubscribe();
        }
    };
    CreateShipmentOrder.prototype.ngOnInit = function () {
        this.recentShimentOrders = this.localStorageService.get('RECENT_SHO');
        var shoNo = this.localStorageService.get('PREVIOUS_SHO_NO');
        if (shoNo != null) {
            this.shipmentOrderNo = "" + shoNo;
        }
        console.log(this.recentShimentOrders);
    };
    //this method use for : take data from localstorage and show at the bottom of page
    CreateShipmentOrder.prototype.setValueFromHistory = function (value) {
        console.log(value);
        var isConsigneeAvaiable = false;
        var isTBPAvaiable = false;
        var isConsignorAvaiable = false;
        for (var i = 0; i < this.consigneeList.length; i++) {
            if (value['selectedConsignee']['freightLocation'] == this.consigneeList[i]['freightLocation']) {
                isConsigneeAvaiable = true;
            }
        }
        for (var i = 0; i < this.trBusinessPartners.length; i++) {
            if (value['selectedBusinessPartner']['uuid'] == this.trBusinessPartners[i]['uuid']) {
                isTBPAvaiable = true;
            }
        }
        for (var i = 0; i < this.consignorList.length; i++) {
            if (value['freightUnits'][0]['consigner'] == this.consignorList[i]['freightLocationId']) {
                isConsignorAvaiable = true;
            }
        }
        this.consignee = (isConsigneeAvaiable) ? value['selectedConsignee']['freightLocation'] : '';
        this.consignor = (isConsignorAvaiable) ? value['freightUnits'][0]['consigner'] : '';
        this.TBPName = (isTBPAvaiable) ? value['selectedBusinessPartner']['uuid'] : '';
        this.material = value['freightUnits'][0]['material'];
        this.distance = ((value['freightUnits'][0]['distance']) / 1000);
        this.shipmentOrderType = value['shipmentType'];
    };
    // **************************************************************************************************
    CreateShipmentOrder.prototype.checkVehicleRegNoExist = function () {
        this.isSpinner = true;
        var vehicleNo = this.vehicleRegNo.trim().toUpperCase();
        this.isVehicleExist = false;
        this.trackMode = '';
        this._store.dispatch({ type: "CHECK_VEHICLE_NO_EXIST", payload: null });
        this.shipmentOderService.checkVehicleNoExist.emit(vehicleNo);
    }; // close methods checkVehicleRegNoExist
    CreateShipmentOrder.prototype.openFreightUnitDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_freight_unit_dialog_add_freight_unit_dialog_component__["a" /* AddFreightUnitDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined || result == null) {
                // console.log(result);
                return;
            }
            console.log(result);
            _this.freightUnits.push(result);
            console.log(_this.freightUnits);
        });
    };
    CreateShipmentOrder.prototype.createShipmentOrder = function () {
        if (this.checkValidation()) {
            var freightUnit = {
                "consigner": this.consignor,
                "consignee": this.consignee,
                "material": this.material,
                "quantity": this.quantity,
                "plannedStartTime": (this.plannedStartTime == undefined) ? null : this.plannedStartTime.getTime(),
                "plannedEndTime": (this.plannedStartTime == undefined) ? null : this.plannedEndTime.getTime(),
                "actualStartTime": (this.plannedStartTime == undefined) ? null : this.plannedStartTime.getTime(),
                "actualEndTime": (this.plannedStartTime == undefined) ? null : this.plannedStartTime.getTime(),
                "distance": (this.distance * 1000),
                "quantityUmo": this.UOM,
                "freightUnitNumber": this.shipmentOrderNo,
                "freightUnitCreationDate": (this.shipmentOrderDate == undefined) ? null : this.shipmentOrderDate.getTime(),
            };
            console.log(this.shipmentOrderDate);
            var freightUnits = [];
            freightUnits.push(freightUnit);
            console.log(freightUnits);
            var shipmentOrderObj = {
                orgId: null,
                shipmentOrderNumber: this.shipmentOrderNo,
                shipmentOrderCreateDate: (this.shipmentOrderDate == undefined) ? null : this.shipmentOrderDate.getTime(),
                freightUnits: freightUnits,
                shipmentType: this.shipmentOrderType,
                transporterId: this.TBPName,
                plannedStartTime: (this.plannedStartTime == undefined) ? null : this.plannedStartTime.getTime(),
                plannedEndTime: (this.plannedEndTime == undefined) ? null : this.plannedEndTime.getTime(),
                actualStartTime: (this.plannedStartTime == undefined) ? null : this.plannedStartTime.getTime(),
                actualEndTime: (this.plannedEndTime == undefined) ? null : this.plannedEndTime.getTime(),
                distance: (this.distance * 1000),
                shipmentStages: null,
                vehicleRegistrationNumber: this.vehicleRegNo.toUpperCase(),
                vehicleId: null,
                type: this.trackMode,
                imei: null
            };
            if (this.trackMode == 'Tracker') {
                shipmentOrderObj.imei = this.imei;
            }
            this.isSpinner = true;
            console.log(shipmentOrderObj);
            this.recentSho(freightUnit, shipmentOrderObj);
            this.shipmentOderService.createShipmentOrder.emit(shipmentOrderObj);
        }
    }; // close methods createShipmentOrder
    CreateShipmentOrder.prototype.recentSho = function (freightUnit, shipmentOrderObj) {
        var recentSho = JSON.parse(JSON.stringify(shipmentOrderObj));
        for (var i = 0; i < this.consigneeList.length; i++) {
            if (this.consignee == this.consigneeList[i]['freightLocation']) {
                recentSho['selectedConsignee'] = this.consigneeList[i];
                break;
            }
        }
        for (var i = 0; i < this.trBusinessPartners.length; i++) {
            if (this.TBPName == this.trBusinessPartners[i]['uuid']) {
                recentSho['selectedBusinessPartner'] = this.trBusinessPartners[i];
                break;
            }
        }
        recentSho['unicKey'] = freightUnit['consigner'] + '_' + recentSho['selectedConsignee']['freightLocation'] + '_' + recentSho['selectedBusinessPartner']['uuid'];
        var recentSHO_LIST = this.localStorageService.get('RECENT_SHO');
        console.log(recentSHO_LIST);
        if (recentSHO_LIST != undefined && recentSHO_LIST != null) {
            recentSHO_LIST.splice(0, 0, recentSho);
            for (var i = 1; i < recentSHO_LIST.length;) {
                console.log(recentSho.unicKey);
                console.log(recentSHO_LIST[i].unicKey);
                if (recentSho.unicKey == recentSHO_LIST[i].unicKey) {
                    recentSHO_LIST.splice(i, 1);
                    console.log(recentSHO_LIST);
                }
                else {
                    i++;
                }
            }
            var recentSHO_LIST2 = recentSHO_LIST.slice(0, 5);
            this.localStorageService.set('RECENT_SHO', recentSHO_LIST2);
            // console.log(recentSHO_LIST);
        }
        else {
            var shoList = [];
            shoList.push(recentSho);
            this.localStorageService.set('RECENT_SHO', shoList);
        }
        this.localStorageService.set('PREVIOUS_SHO_NO', this.shipmentOrderNo);
    }; //close recentSho methods
    CreateShipmentOrder.prototype.checkValidation = function () {
        if (this.shipmentOrderNo == '' || this.shipmentOrderNo == null) {
            this.openSnackBar("Please fill Shipment order Number");
            return false;
        }
        if (this.consignor == '' || this.consignor == null) {
            this.openSnackBar("Please select Consignor");
            return false;
        }
        if (this.consignee == '' || this.consignee == null) {
            this.openSnackBar("Please select Consignee");
            return false;
        }
        if (this.plannedStartTime == '' || this.plannedStartTime == null) {
            this.openSnackBar("Please fill planned start time");
            return false;
        }
        if (this.plannedEndTime == '' || this.plannedEndTime == null) {
            this.openSnackBar("Please fill planned end time");
            return false;
        }
        if (this.shipmentOrderDate == '' || this.shipmentOrderDate == null || this.shipmentOrderDate == undefined) {
            this.openSnackBar("Please select shipment Order Date");
            return false;
        }
        if (this.TBPName == '' || this.TBPName == null || this.TBPName == undefined) {
            this.openSnackBar("Please select Tranporter");
            return false;
        }
        if (this.vehicleRegNo == '' || this.vehicleRegNo == null || this.vehicleRegNo == undefined) {
            this.openSnackBar("Please fill vehicle Reg No");
            return false;
        }
        if (this.trackMode == '' || this.trackMode == null || this.trackMode == undefined) {
            this.openSnackBar("Please Select Track Mode");
            return false;
        }
        if (this.trackMode == 'Tracker' && this.imei == '' || this.imei == null || this.imei == undefined) {
            this.openSnackBar("Please fill IMEI");
            return false;
        }
        return true;
    };
    // checkUnicFreightUnit(freightUnits) {
    //   if (freightUnits.length == 0) {
    //     this.openSnackBar("please Add Freight Unit Number");
    //     return false;
    //   }
    //
    //   for (let i = 0; i < (freightUnits.length - 1); i++) {
    //     for (let j = i + 1; j < freightUnits.length; j++) {
    //       if (freightUnits[i]['freightUnitNumber'] == freightUnits[j]['freightUnitNumber']) {
    //         this.openSnackBar("Freight Unit Number should be Unic");
    //         return false;
    //       }
    //     }
    //   }
    //   return true;
    // }
    CreateShipmentOrder.prototype.remove = function (selFreightUnit) {
        var index = this.freightUnits.indexOf(selFreightUnit);
        if (index >= 0) {
            this.freightUnits.splice(index, 1);
        }
    };
    CreateShipmentOrder.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    CreateShipmentOrder.prototype.cancel = function () {
        this.router.navigate(["mainDashboard/browseShipment"]);
    };
    return CreateShipmentOrder;
}()); // close class
CreateShipmentOrder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-shipment-order',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_shipment_order_service__["a" /* ShipmentOrderServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_shipment_order_service__["a" /* ShipmentOrderServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__service_businessPartnerService__["a" /* BusinessPartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_businessPartnerService__["a" /* BusinessPartnerService */]) === "function" && _g || Object])
], CreateShipmentOrder);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create-shipment-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container{*/\r\n  /*padding: 20px;*/\r\n  /*margin: 15px;*/\r\n  /*width: 100%;*/\r\n/*}*/\r\n\r\n/*.cards-toggle*/\r\n/*{*/\r\n  /*width: 15%;*/\r\n  /*float: left;*/\r\n/*}*/\r\n\r\n/*.cards-toggle:hover*/\r\n/*{*/\r\n  /*background-color: #1976d2;*/\r\n  /*color: white;*/\r\n  /*width: 15%;*/\r\n  /*float: left;*/\r\n/*}*/\r\n\r\n/*.cards-toggle:active*/\r\n/*{*/\r\n  /*background-color: #1976d2;*/\r\n  /*color: white;*/\r\n  /*width: 15%;*/\r\n  /*float: left;*/\r\n/*}*/\r\n\r\n/*.expand-search {*/\r\n  /*border: 1.5px solid #03a9f4;*/\r\n  /*font-size: 14px;*/\r\n  /*padding: 5px 26px 6px 12px;*/\r\n  /*display: inline-block;*/\r\n  /*!*border: 1.5px solid #ccc;*!*/\r\n  /*border-radius: 17px;*/\r\n  /*box-sizing: border-box;*/\r\n  /*outline: none;*/\r\n  /*}*/\r\n\r\n/*.overlay{*/\r\n/*position: relative;*/\r\n  /*display: none;*/\r\n  /*z-index: 10;*/\r\n  /*left: 137px;*/\r\n  /*top: 72px;*/\r\n  /*width: 0%;*/\r\n/*}*/\r\n\r\ndiv{\r\n  font-family: Helvetica;\r\n}\r\n\r\n.container{\r\n  padding: 5px 10px 5px 5px;\r\n  /*margin: 15px;*/\r\n  width: 100%;\r\n}\r\n\r\nmd-card{\r\n  /*min-width: 190px;*/\r\n  padding: 15px;\r\n  /*margin-top: 8px;*/\r\n  /*margin: 5px;*/\r\n  font-family: Helvetica;\r\n}\r\n\r\n.cards-toggle\r\n{\r\n  height: 30px;\r\n  font-size: 12px;\r\n  margin-left: 8px;\r\n  width: 13%;\r\n  /*width: 15%;*/\r\n  /*float: left;*/\r\n}\r\n\r\n.cards-toggle div{\r\n  text-align: center;\r\n}\r\n\r\n.cards-toggle:hover\r\n{\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n  cursor: pointer;\r\n  /*width: 15%;*/\r\n  /*float: left;*/\r\n}\r\n\r\n/*.cards-toggle:active*/\r\n/*{*/\r\n  /*background-color: #512da1;*/\r\n  /*color: white;*/\r\n  /*!*width: 15%;*!*/\r\n  /*!*float: left;*!*/\r\n/*}*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*.expand-search {*/\r\n/*border: 1.5px solid #03a9f4;*/\r\n/*font-size: 14px;*/\r\n/*padding: 5px 26px 6px 12px;*/\r\n/*display: inline-block;*/\r\n/*!*border: 1.5px solid #ccc;*!*/\r\n/*border-radius: 17px;*/\r\n/*box-sizing: border-box;*/\r\n/*outline: none;*/\r\n/*}*/\r\n\r\n.overlay{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.doughnut-chart{\r\n  position: relative;\r\n  margin-top: -19px;\r\n  width: 196px;\r\n  margin-right: -43px;\r\n}\r\n\r\n.expand-search {\r\n  border: 1.5px solid #b0bcc1;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  padding: 5px 26px 5px 12px;\r\n  display: inline-block;\r\n  /*border: 1.5px solid #ccc;*/\r\n  border-radius: 17px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\n/* search box*/\r\n.expand-search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n}\r\n\r\n.doughnut-chart-label{\r\n  padding:0px 6px;font-size: 10px;margin-right:5px\r\n}\r\n\r\n.custome-button button{\r\n  height: 26px;\r\n  font-size: 13px;\r\n  line-height: 26px;\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\ntable {\r\n  font-family: Helvetica;\r\n  color: #46465f;\r\n  font-size: 11px;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  /*border: 1px solid #eee;*/\r\n  border-right: 1px solid #eee;\r\n  text-align: center;\r\n  padding: 8px;\r\n}\r\n.list-header1{\r\n  color: #46465f;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  padding: 8px;\r\n  width: 160%;\r\n}\r\n.list-body1 {\r\n  font-size: 12px;\r\n  padding: 8px;\r\n  /*margin-top: 5px;*/\r\n}\r\n\r\n.list-body1 span{\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n/*tr:nth-child(even) {*/\r\n  /*!*background-color: #f1faff;*!*/\r\n  /*!*background-color: #f6f9fd;*!*/\r\n  /*background-color: aliceblue;*/\r\n/*}*/\r\n\r\n.select-row:hover\r\n{\r\n  background-color: aliceblue;\r\n}\r\n\r\n\r\n.button-align button\r\n{\r\n  line-height:25px\r\n}\r\n\r\n.imgcontainer {\r\n  /*margin: 24px 0 20px 0;*/\r\n  padding-left: 20px;\r\n}\r\n\r\n.pagination-button{\r\n  line-height: 25px;\r\n  min-width: 0px;\r\n  padding: 0px 10px 0px 10px;\r\n  color: #46465f;\r\n  background-color:whitesmoke;\r\n}\r\n\r\n.pagination-text {\r\n  color: #828395;\r\n  text-align: center !important;\r\n  font-weight: bolder;\r\n  font-size: 14px;\r\n  padding: 0 5px;\r\n  width:200px;\r\n}\r\n\r\n.pagination-text span{\r\n  display: inline-block;\r\n  min-width: 30px;\r\n}\r\n\r\nmd-option{\r\n  height: 35px;\r\n  line-height: 35px;\r\n}\r\n\r\n.my-select {\r\n  width: 130px;\r\n  padding: 0px 16px;\r\n  vertical-align: 6px;\r\n}\r\n\r\n\r\n.add-button{\r\n  width: 22px;\r\n  height: 22px;\r\n  line-height: 22px;\r\n}\r\n\r\n.customCheckBox >>> .mat-checkbox-inner-container{\r\n  height: 15px !important;\r\n  width: 15px !important;\r\n}\r\n\r\n.customePaginator >>> .mat-paginator-range-label{\r\n  min-width: 92px;\r\n}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- abhinav code -->\r\n\r\n<!--<div class=\"container\">-->\r\n<!--<mat-card class=\"cards-toggle\">-->\r\n  <!--<mat-card-content>-->\r\n    <!--<div style=\"width: 100%; \"><span style=\"position: relative;left: 40%; font-weight: bold\">120</span></div>-->\r\n    <!--<div style=\"width: 100%\"><span  style=\"position: relative;left: 24%;font-weight: bold\">All Shipments</span></div>-->\r\n  <!--</mat-card-content>-->\r\n<!--</mat-card>-->\r\n\r\n  <!--<mat-card class=\"cards-toggle\" style=\"margin-left: 3%;\">-->\r\n    <!--<mat-card-content>-->\r\n      <!--<div style=\"width: 100%; \"><span style=\"position: relative;left: 40%; font-weight: bold\">79</span></div>-->\r\n      <!--<div style=\"width: 100%\"><span  style=\"position: relative;left: 33%;font-weight: bold\">Active</span></div>-->\r\n    <!--</mat-card-content>-->\r\n  <!--</mat-card>-->\r\n\r\n  <!--<mat-card class=\"cards-toggle\" style=\";margin-left: 3%;\">-->\r\n    <!--<mat-card-content>-->\r\n      <!--<div style=\"width: 100%; \"><span style=\"position: relative;left: 40%; font-weight: bold\">41</span></div>-->\r\n      <!--<div style=\"width: 100%\"><span  style=\"position: relative;left: 28%;font-weight: bold\">Delivered</span></div>-->\r\n    <!--</mat-card-content>-->\r\n  <!--</mat-card>-->\r\n\r\n  <!--<div fxLayout=\"column\" class=\"overlay\">-->\r\n    <!--<div fxFlex=\"50\" style=\"color: #1976d2\"><i class=\"fa fa-wifi\" aria-hidden=\"true\"></i></div>-->\r\n    <!--<div fxFlex=\"50\" style=\"color: #1976d2\"><i class=\"fa fa-mobile\" style=\"margin-left:6px\" aria-hidden=\"true\"></i></div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div style=\"float: left; margin-left: 3%\">-->\r\n    <!--<div style=\"max-height: 200px;max-width: 200px;width: 100%;\">-->\r\n      <!--<div style=\"display: block;\">-->\r\n        <!--&lt;!&ndash;[labels]=\"doughnutChartLabels\"&ndash;&gt;-->\r\n        <!--<canvas baseChart-->\r\n                <!--[options]=\"doughnutChartOptions\"-->\r\n                 <!--[data]=\"doughnutChartData\"-->\r\n                <!--[chartType]=\"doughnutChartType\"-->\r\n                <!--[colors]=\"doughnutColor\">-->\r\n                <!--&lt;!&ndash;(chartClick)=\"chartClicked($event)\"&ndash;&gt;-->\r\n        <!--</canvas>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div style=\"font-family:Arial;float: left;margin-left: -3%;\">-->\r\n    <!--<span style=\"font-family: Arial; font-weight: bold; font-size: medium\">Tracking Status:</span>-->\r\n    <!--<div style=\"margin-top: 2%\">-->\r\n      <!--<div style=\"width: 15px; height: 15px; background-color: #ead923\"></div>-->\r\n      <!--<div style=\"margin-left: 19%; margin-top:-13%;float: left; font-size: small\">Tracknet</div><br>-->\r\n      <!--<div><div style=\"width: 15px; height: 15px; background-color: #add160\"></div>-->\r\n        <!--<div style=\"margin-left: 19%; margin-top:-13%;float: left; font-size: small \">Trip Tracker</div>-->\r\n      <!--</div><br>-->\r\n      <!--<div><div style=\"width: 15px; height: 15px; background-color: #a7a9b2\"></div>-->\r\n        <!--<div style=\"margin-left: 19%; margin-top:-13%;float: left; font-size: small \">Manual mode</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--<div fxLayout=\"row\" style=\" width: 100%;margin-top: 7%\">-->\r\n  <!--<div fxFlex=\"20\" style=\"padding-top: 9px;\" ><span style=\" font-family: 'Helvetica'; font-weight: bold; cursor: pointer;margin-left: 15%; margin-top: 2%\">+Create New  Shipment</span></div>-->\r\n  <!--<div fxFlex=\"20\"><button mat-raised-button style=\"background-color: #1976d2; color: white; margin-left: 4%\">Import Shipment</button></div>-->\r\n  <!--<div fxFlex=\"25\"></div>-->\r\n  <!--<div fxFlex=\"10\"><button mat-raised-button style=\"background-color: #1976d2; color: white;\">Share</button></div>-->\r\n  <!--<div fxFlex=\"25\" fxFlexAlign=\"center\">-->\r\n    <!--<i (click)=\"isSearch=true\" class=\"fa fa-search\"  aria-hidden=\"true\" style=\"left:53%;position: relative;font-size: 15px;color: black\"></i>-->\r\n    <!--&lt;!&ndash;<div style=\"width: 93%;margin-top: 0px;margin-bottom: -3px;\">&ndash;&gt;-->\r\n    <!--<input myAutofocus (blur)=\"isSearch=false\" class=\"expand-search\"   placeholder=\"{{'Search'}}\">-->\r\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<router-outlet></router-outlet>-->\r\n\r\n<!-- abhinav code above-->\r\n\r\n\r\n\r\n<div class=\"container\" style=\"min-width: 700px;box-sizing: border-box;\">\r\n  \r\n  <div style=\"display:flex;padding:20px 5px 10px 12px;\" >\r\n    <mat-card class=\"cards-toggle\" (click)=\"selectedFilter = 'all'\" [style.background-color]=\"selectedFilter == 'all'?'#1976d2':''\"  [style.color]=\"selectedFilter == 'all'?'#FFFFFF':''\">\r\n      <div ><span >{{length}}</span></div>\r\n      <div style=\"margin-top: 6px;\" ><span  >All Shipments</span></div>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"cards-toggle\" (click)=\"selectedFilter = 'active'\" [style.background-color]=\"selectedFilter == 'active'?'#1976d2':''\"  [style.color]=\"selectedFilter == 'active'?'#FFFFFF':''\" style=\"margin-left: 20px\" >\r\n      <div  ><span >15</span></div>\r\n      <div style=\"margin-top: 6px;\" ><span  >Active</span></div>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"cards-toggle\" (click)=\"selectedFilter = 'delivered'\" [style.background-color]=\"selectedFilter == 'delivered'?'#1976d2':''\"  [style.color]=\"selectedFilter == 'delivered'?'#FFFFFF':''\" style=\"margin-left: 20px\" >\r\n      <div  ><span >20</span></div>\r\n      <div  style=\"margin-top: 6px;\"><span  >Delivered</span></div>\r\n    </mat-card>\r\n\r\n    <!-- <div style=\"display: flex;margin-left: auto;margin-right: 45px;\" >\r\n      <div class=\"doughnut-chart\" >\r\n        <div class=\"overlay\">\r\n          <i style=\"color: #1976d2\" class=\"fa fa-wifi\" aria-hidden=\"true\"></i>\r\n          <i style=\"color: #1976d2\" class=\"fa fa-mobile\" style=\"margin-left:6px\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <canvas baseChart\r\n                [options]=\"doughnutChartOptions\"\r\n                [data]=\"doughnutChartData\"\r\n                [chartType]=\"doughnutChartType\"\r\n                [colors]=\"doughnutColor\">\r\n        </canvas>\r\n      </div>\r\n\r\n      <div  style=\"margin-top: -10px;\">\r\n        <span style=\"font-size: 14px\">Tracking Status</span>\r\n        <div >\r\n          <span class=\"doughnut-chart-label\" style=\"background-color:#71a2ec;\" ></span>\r\n          <span style=\"font-size: 11px;\" >94: Tracknet</span>\r\n        </div>\r\n        <div style=\"margin-top: 5px;\">\r\n          <span class=\"doughnut-chart-label\" style=\"background-color:#a1f2f5;\"></span>\r\n          <span style=\"font-size: 11px;\" >11: Trip Tracker</span>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 5px;\">\r\n          <span class=\"doughnut-chart-label\" style=\"background-color:#d7d8df;\"></span>\r\n          <span style=\"font-size: 11px;\" >13: Manual Mode</span>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"custome-button\" style=\"display: inline-flex;margin-left: auto;\" >\r\n      <button mat-raised-button color=\"primary\" style=\"margin-right: 40px\" (click)=\"refresh()\" >Share</button>\r\n      <div style=\"position:relative;margin-top: -1px;\" >\r\n        <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n        <input myAutofocus  [(ngModel)]=\"search\" class=\"expand-search\"  placeholder=\"Search\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"custome-button\" >\r\n    <button mat-button (click)=\"createNewShipment()\" >+Create New Shipment</button>\r\n    <button mat-raised-button color=\"primary\" style=\"margin-left: 16px;\" >Import Shipment</button>\r\n  </div> -->\r\n  <!-- <div style=\"display: flex;padding: 5px 5px;margin-top: 10px\" >\r\n    <div class=\"custome-button\" >\r\n      <button mat-button (click)=\"createNewShipment()\" >+Create New Shipment</button>\r\n      <button mat-raised-button color=\"primary\" style=\"margin-left: 16px;\" >Import Shipment</button>\r\n    </div>\r\n    <div class=\"custome-button\" style=\"display: inline-flex;margin-left: auto;\" >\r\n      <button mat-raised-button color=\"primary\" style=\"margin-right: 40px\" (click)=\"refresh()\" >Share</button>\r\n      <div style=\"position:relative;margin-top: -1px;\" >\r\n        <i  class=\"fa fa-search \"  aria-hidden=\"true\" style=\"margin-top: 7px;right: 7px;position: absolute;font-size: 13px;color: black;\"></i>\r\n        <input myAutofocus  [(ngModel)]=\"search\" class=\"expand-search\"  placeholder=\"Search\">\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <div style=\"padding: 25px 5px 0px 20px;min-width: 700px\">\r\n    <div style=\"box-shadow: 0px 4px 19px darkgrey;\">\r\n      <table style=\"border: 1px solid #e1e6ef;\">\r\n        <tr style=\"height: 50px\">\r\n          <td style=\"font-size:17px;border:none;\" ><label>All Shipments</label></td>\r\n          <td colspan=\"4\" style=\"float: right;padding: 0px\">\r\n            <mat-paginator class=\"customePaginator\" [length]=\"length\"\r\n                          [pageSize]=\"pageSize\"\r\n                          [pageSizeOptions]=\"pageSizeOptions\"\r\n                          (page)=\"pageEvent = $event;selectTableHeight()\" >\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        <!-- <tr fxLayout=\"row\" class=\"list-header\">\r\n          <td style=\"width: 30px\">Shipment No</td>\r\n          <td fxFlex>Vehicle No</td>\r\n          <td fxFlex>Shipment Status</td>\r\n          <td fxFlex>Consigner</td>\r\n          <td fxFlex>Consignee</td>\r\n          <td fxFlex>Distance to go</td>\r\n          <td fxFlex>Current Status</td>\r\n        </tr> -->\r\n        <div fxLayout=\"row\" class=\"list-header1\" [style.width]=\"(isShowDetails || this.previousSelectedVehicle['_isShowDetails'])?'calc(160% - 360px)':'160%'\">\r\n          <span style=\"width: 25px;\"></span>\r\n          <span fxFlex >Shipment No</span>\r\n          <span fxFlex >Transporter</span>          \r\n          <span fxFlex >Vehicle No</span>\r\n          <span fxFlex   >Shipment Status</span>\r\n          <span fxFlex  >Consignor</span>\r\n          <span fxFlex  >Consignee</span>\r\n          <span fxFlex  >Distance to go</span>\r\n          <span fxFlex  >Current Status</span>\r\n      </div>\r\n      </table>\r\n      <div  style=\"overflow:auto;max-height:calc(100vh - 295px);display:flex\" >\r\n        <div style=\"overflow:auto;max-height:calc(100vh - 295px);display:flex;width: 100%;margin-right: -1px;\" >\r\n        <table  style=\"border-top: 1px solid #e1e6ef;border-bottom: 4px solid rgba(225, 230, 239, 0);\">\r\n          <mat-card *ngFor=\"let vehicle of selectedVehicleList\" (click)=\"isShowDetails = true;selectedShipmentDetail(vehicle);changeBgColor(vehicle)\"\r\n              [style.background-color]=\"vehicle._isShowDetails?'aliceblue':''\" style=\"cursor: alias;\"  fxLayout=\"row\" class=\"list-body1\" >\r\n              \r\n               \r\n                  <span> <mat-checkbox class=\"customCheckBox\" [(ngModel)]=\"vehicle.isChecked\" ></mat-checkbox></span><span fxFlex>{{vehicle.shipmentNo}}</span>\r\n                  <span fxFlex>CJ DARCL</span>\r\n                  <span fxFlex ><i   class=\"fa fa-truck\" aria-hidden=\"true\"></i> {{vehicle.vehicleRegistrationNumber}}</span>\r\n                  <span fxFlex *ngIf=\"vehicle.vts=='EnrouteForPickUp'\"><i   aria-hidden=\"true\">Enroute For Pickup</i></span> \r\n                  <span fxFlex *ngIf=\"vehicle.vts=='AtPickUpPoint'\"><i   aria-hidden=\"true\">At Pickup Point</i></span> \r\n                  <span fxFlex *ngIf=\"vehicle.vts=='EnrouteForDestination'\"><i   aria-hidden=\"true\">Enroute For Delivery</i></span> \r\n                  <span  fxFlex *ngIf=\"vehicle.vts=='AtDestination'\"><i   aria-hidden=\"true\">At Destination</i></span> \r\n                  <!-- <span style=\"margin-left: 45px\" *ngIf=\"vehicle.vts=='AtDestination'\"><i   aria-hidden=\"true\">Enroute For Pickup</i></span>                    -->\r\n                  <span  fxFlex><i  class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>{{vehicle.startLocationName}} </span>\r\n                  <span fxFlex ><i   class=\"fa fa-circle\" aria-hidden=\"true\"></i>{{vehicle.endLocationName}} </span>\r\n                  <span fxFlex ><i   class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>1400 Km in 3day 10 hour</span>\r\n                  <span fxFlex >\r\n                      <span *ngIf=\"vehicle.trackingType=='Tracker'\"><i  style=\"color:rgb(27, 114, 245);\" class=\"fa fa fa-square\" aria-hidden=\"true\"></i>Kkalpana Ind.</span>\r\n                      <span *ngIf=\"vehicle.trackingType=='Manual'\"> <i  style=\"color:rgb(27, 114, 245);\" class=\"fa fa fa-rss-square\" aria-hidden=\"true\"></i>Kkalpana Ind.</span>\r\n                      <span *ngIf=\"vehicle.trackingType=='Trip'\"> <i  style=\"color:rgb(27, 238, 245);\" class=\"fa fa fa-square\" aria-hidden=\"true\"></i>Kkalpana Ind.</span>                    \r\n                  </span>\r\n               \r\n          </mat-card>\r\n        </table>\r\n        </div>\r\n        <div *ngIf=\"isShowDetails\" style=\"background-color: aliceblue;padding: 8px 10px;width: 100%;max-width: 330px;margin-bottom: 10px;\" >\r\n          <i (click)=\"isShowDetails = false;closeDetails()\" style=\"float: right;margin-top: -7px;color: #9E9E9E;cursor:pointer\" class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\r\n          <!-- <div style=\"display: flex;padding: 5px 8px;font-size: 13px;margin-top: 8px\" >\r\n            <span><i style=\"font-size: 16px;margin-right: 4px;\" class=\"fa fa-user-o\" aria-hidden=\"true\"></i>{{driverDetail._driverName}}</span>\r\n            <span style=\"margin-left:auto;\" >\r\n              <i style=\"font-size: 16px;\" class=\"fa fa-phone\" aria-hidden=\"true\"></i> +91  {{driverDetail._mobileNo}}</span>\r\n          </div> -->\r\n          <div *ngIf=\"trackingType=='Tracker'\"><app-selected-vehicle-status></app-selected-vehicle-status></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shipment_services__ = __webpack_require__("../../../../../src/service/shipment-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipmentStatusComponent = (function () {
    //close for pagination
    function ShipmentStatusComponent(_router, shipmentServices, _store) {
        var _this = this;
        this._router = _router;
        this.shipmentServices = shipmentServices;
        this._store = _store;
        // public doughnutChartLabels:string[] = ['Tracknet', 'Trip Tracker'];
        this.doughnutChartData = [94, 11, 13];
        this.doughnutChartType = 'doughnut';
        this.doughnutColor = [{ backgroundColor: ["#71a2ec", "#a1f2f5", "#d7d8df"] }];
        this.doughnutChartOptions = { cutoutPercentage: 65 };
        // unsubscribe variables
        this.unSub_allShipmentList = null;
        this.unSub_shipmentIdList = null;
        this.unSub_shipmentDetail = null;
        this.isShowDetails = false;
        this.selectedFilter = 'all';
        this.shipmentId = [];
        this.allShipment = [];
        this.selectedVehicleList = [];
        this.previousSelectedVehicle = { _isShowDetails: false };
        this.search = '';
        this.driverDetail = { _driverName: '', _mobileNo: '' };
        //start for pagination
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        // this.shipmentServices.getList(obj)
        this.shipmentServices.getShipmentIdList.emit();
        this.unSub_shipmentIdList = this._store.select('shipmentIdList').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling
                }
                else {
                    _this.shipmentId = value['data'];
                }
            }
        });
        var obj = {
            "shipmentIdList": this.shipmentId
        };
        // this.shipmentServices.getList(obj)
        this.shipmentServices.getShipmentList.emit(obj);
        this.unSub_allShipmentList = this._store.select('allShipmentList').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling
                }
                else {
                    _this.allShipment = value['data'];
                }
            }
            _this.selectedVehicleList = _this.allShipment.slice(0, _this.pageSize);
            _this.length = _this.allShipment.length;
            //console.log(this.allVehicles);
            //console.log(this.selectedVehicleList);
        });
        this.unSub_shipmentDetail = this._store.select('shipmentDetail').subscribe(function (value) {
            if (value != null) {
                if (value['error'] == null) {
                    //for Error Handaling
                }
                else {
                    _this.driverDetail._driverName = value['data'].currentShipment.driverName;
                    console.log(_this.driverDetail._driverName);
                    _this.driverDetail._mobileNo = value['data'].currentShipment.mobileNo;
                }
            }
        });
    }
    ShipmentStatusComponent.prototype.ngOnInit = function () {
    };
    ShipmentStatusComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_allShipmentList != 'undefined' && this.unSub_allShipmentList != null && this.unSub_allShipmentList != undefined)
            this.unSub_allShipmentList.unsubscribe();
        if (typeof this.unSub_shipmentDetail != 'undefined' && this.unSub_shipmentDetail != null && this.unSub_shipmentDetail != undefined)
            this.unSub_shipmentDetail.unsubscribe();
        if (typeof this.unSub_shipmentIdList != 'undefined' && this.unSub_shipmentIdList != null && this.unSub_shipmentIdList != undefined)
            this.unSub_shipmentIdList.unsubscribe();
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
    ShipmentStatusComponent.prototype.selectedShipmentDetail = function (vehicle) {
        this.trackingType = vehicle.trackingType;
        var id = vehicle.shipmentId;
        this.shipmentServices.getShipmentDetail.emit(id);
    };
    ShipmentStatusComponent.prototype.refresh = function () {
        this.isShowDetails = false;
        var obj = {
            "shipmentIdList": this.shipmentId
        };
        // this.shipmentServices.getList(obj)
        this.shipmentServices.getShipmentList.emit(obj);
        this._router.navigate(['mainDashboard/dashboard/shipmentStatus']);
    };
    ShipmentStatusComponent.prototype.createNewShipment = function () {
        this._router.navigate(['mainDashboard/dashboard/newShipment']);
    };
    return ShipmentStatusComponent;
}());
ShipmentStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shipment-status',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shipment_services__["a" /* ShipmentServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shipment_services__["a" /* ShipmentServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], ShipmentStatusComponent);

var _a, _b, _c;
//# sourceMappingURL=shipment-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/transpoter/transpoter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .table1 {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  color : black;\r\n  /* border-top : 1px solid #ddd;\r\n  border-left: 1px solid #ddd;\r\n  border-right: 1px solid #ddd; \r\n}\r\n\r\n.table2 {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  color : black;\r\n  border-top : 1px solid #ddd;\r\n  border-bottom:   1px solid #ddd;\r\n}\r\n\r\ntd {\r\n  width: 150px;\r\n  height: 25px;\r\n  /* text-align: center; */\r\n  /* border-bottom: 1px solid #ddd; \r\n  color : black;\r\n  font-size: 12px;\r\n  padding-top: 5px;\r\n  padding-left: 40px; \r\n} */\r\n\r\ntd {\r\n  width: 150px;\r\n  height: 25px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #ddd;\r\n  color : black;\r\n  font-size: 12px;\r\n  padding-top: 5px;\r\n  padding-left: 40px; \r\n}\r\n\r\n  .table1 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    border-top : 1px solid #ddd;\r\n    border-left: 1px solid #ddd;\r\n    border-right: 1px solid #ddd;\r\n  }\r\n\r\n  .table2 {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n  }\r\n\r\n.button-basic3 {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n  margin-right: 40px\r\n}\r\n\r\n.button-basic3:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/transpoter/transpoter.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <button mat-raised-button class=\"button-basic3\" (click)='openDialog()'>Allocate Transporter Quota</button><br><br> -->\r\n          <!-- <div style=\"margin-top: 20px\"><table class=\"table2\">\r\n              <td><h4>Transporter Name</h4></td>\r\n              <td><h4>Freight Lane Group</h4></td>\r\n              <td><h4>Volume Quota</h4></td>\r\n              <td><h4>Valid From</h4></td>\r\n              <td><h4>Valid To</h4></td>\r\n              <td></td>\r\n              <td></td>\r\n            </table></div> -->\r\n            <div style=\"margin-left: 50px; margin-right: 40px; font-size: 12px\" fxLayout=\"row\">          \r\n                <span fxFlex><h4>Transporter Name</h4></span>\r\n                <span fxFlex><h4>Freight Route</h4></span>\r\n                <span fxFlex><h4>Volume Quota</h4></span>\r\n                <!-- <span fxFlex><h4>Valid From</h4></span>\r\n                <span fxFlex><h4>Valid To</h4></span> -->\r\n                <span fxFlex></span>\r\n                <span fxFlex></span>    \r\n          </div>\r\n        \r\n            <div style=\"box-shadow: 0px 4px 19px darkgray; margin-left: 40px; margin-right: 40px\">\r\n                <mat-card *ngFor = \"let value of data\" fxLayout=\"row\" style=\"font-size: 12px; height: 10px\">\r\n                 <span fxFlex>{{value.transporterName}}</span>\r\n                 <span fxFlex>{{value.routeName}}</span>\r\n                 <span fxFlex>{{value.volumeQuota}}</span>\r\n                 <!-- <span fxFlex>{{value.validFrom}}</span>\r\n                 <span fxFlex>{{value.validTo}}</span> -->\r\n                 <span fxFlex><button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"editEvent(value)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></span>\r\n                 <span fxFlex><button mat-button style=\"align-content: right; margin-right: 2px; margin-top: -12px\" (click)=\"ondeleteEvent(value.id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></span>\r\n                </mat-card>\r\n              </div>\r\n              <button mat-fab color=\"primary\" style=\"position: absolute; top: 90%;left:90%\"  (click)='openDialog()'>\r\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 20px;color: white \"></i>\r\n                </button>\r\n     \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/transpoter/transpoter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranspoterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transporter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_fetch_freight_lane_group_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-group-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_fetch_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/fetch-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_create_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/create-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_delete_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/delete.transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_update_transporter_service__ = __webpack_require__("../../../../../src/service/update-transporter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_service__ = __webpack_require__("../../../../../src/service/service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TranspoterComponent = (function () {
    function TranspoterComponent(dialog, deleteFreightLocation, fetchTranporterVolumeQuotaDataServices, store, matSnackBar) {
        var _this = this;
        this.dialog = dialog;
        this.deleteFreightLocation = deleteFreightLocation;
        this.fetchTranporterVolumeQuotaDataServices = fetchTranporterVolumeQuotaDataServices;
        this.store = store;
        this.matSnackBar = matSnackBar;
        this.data = [];
        this.unSub_trasVolQuota = null;
        store.dispatch({ type: "COMMAND", payload: null });
        this.fetchTranporterVolumeQuotaDataServices.getData.emit();
        this.unSub_trasVolQuota = this.store.select("transporterVolumeQuota").subscribe(function (res) {
            console.log(res);
            _this.data = [];
            if (res == null)
                return;
            if (res != null) {
                _this.data = res["data"]["data"];
            }
            console.log(_this.data);
        });
        this.store.select("command").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            if (res['data']['status'] == 200)
                _this.openSnackBar("successfully executed");
            else
                _this.openSnackBar(res['data']['errorMessage']);
        });
    }
    TranspoterComponent.prototype.ngOnInit = function () {
    };
    TranspoterComponent.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_trasVolQuota != 'undefined' && this.unSub_trasVolQuota != null && this.unSub_trasVolQuota != undefined) {
            console.log("unSub_tVQ");
            this.unSub_trasVolQuota.unsubscribe();
        }
    };
    TranspoterComponent.prototype.openDialog = function () {
        this.store.dispatch({ type: "COMMON", payload: null });
        var dialogRef = this.dialog.open(Transporter, {
            width: '461px',
            height: '327px'
        });
    };
    TranspoterComponent.prototype.ondeleteEvent = function (id) {
        this.deleteFreightLocation.pathURL = this.deleteFreightLocation.pathURL + id;
        this.deleteFreightLocation.getData.emit();
    };
    TranspoterComponent.prototype.editEvent = function (value) {
        this.store.dispatch({ type: "COMMON", payload: { data: value } });
        var dialogRef = this.dialog.open(Transporter, {
            width: '461px',
            height: '327px'
        });
    };
    TranspoterComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    return TranspoterComponent;
}());
TranspoterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transpoter',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_delete_transporter_volume_quota_service__["a" /* DeleteTransporterVolumeQuota */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_delete_transporter_volume_quota_service__["a" /* DeleteTransporterVolumeQuota */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]) === "function" && _e || Object])
], TranspoterComponent);

var Transporter = (function () {
    function Transporter(updateTVQ, matDialog, fetchFreightGroupDataServices, createTrasporterVolumeQuota, store, services, fetchFrieghtLaneData) {
        var _this = this;
        this.updateTVQ = updateTVQ;
        this.matDialog = matDialog;
        this.fetchFreightGroupDataServices = fetchFreightGroupDataServices;
        this.createTrasporterVolumeQuota = createTrasporterVolumeQuota;
        this.store = store;
        this.services = services;
        this.fetchFrieghtLaneData = fetchFrieghtLaneData;
        this.transporterData = [];
        this.groupData = [];
        this.id = null;
        this.unSub_transporterStore = null;
        this.unSub_freightLaneGroupStore = null;
        this.unSub_UpdaterStore = null;
        this.total = 100;
        this.updater = [];
        this.showTransporter = false;
        this.showRoutes = false;
        this.services.getUser.emit();
        this.fetchFrieghtLaneData.getData.emit();
        this.unSub_transporterStore = this.store.select("userStore").subscribe(function (res) {
            console.log(res);
            if (res == null)
                return;
            _this.transporterData = res["data"]["data"];
            console.log(_this.transporterData);
            _this.setTransportervalues();
        });
        this.unSub_freightLaneGroupStore = this.store.select("freightLaneStore").subscribe(function (res) {
            console.log(res);
            if (res == null)
                return;
            _this.groupData = res["data"]["data"];
            _this.setRouteValues();
            console.log(_this.groupData);
        });
        this.unSub_UpdaterStore = this.store.select("updaterStore").subscribe(function (res) {
            if (res == null)
                return;
            _this.updater = res["data"];
            console.log(res);
            _this.id = _this.updater["id"];
            _this.value_quota = _this.updater["volumeQuota"];
            console.log(_this.value_quota);
            _this.setTransportervalues();
            _this.setRouteValues();
        });
    }
    Transporter.prototype.ngOnInit = function () {
    };
    Transporter.prototype.setTransportervalues = function () {
        if (this.transporterData != null && this.updater != null) {
            for (var i = 0; i < this.transporterData.length; i++) {
                if (this.updater['transporterId'] == this.transporterData[i]['id']) {
                    this.transporter = this.transporterData[i]['organisationName'];
                    this.transporterid = this.transporterData[i]['id'];
                    console.log(this.transporter);
                }
            }
        }
    };
    Transporter.prototype.setRouteValues = function () {
        if (this.groupData != null && this.updater != null) {
            for (var i = 0; i < this.groupData.length; i++) {
                if (this.updater['routeId'] == this.groupData[i]['id']) {
                    this.route_detail = this.groupData[i]['name'];
                    this.routeName = this.groupData[i]['name'];
                    this.routeId = this.groupData[i]['id'];
                    console.log(this.route_detail);
                }
            }
        }
    };
    Transporter.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_transporterStore != 'undefined' && this.unSub_transporterStore != null && this.unSub_transporterStore != undefined) {
            console.log("unSub_FLS");
            this.unSub_transporterStore.unsubscribe();
        }
        if (typeof this.unSub_freightLaneGroupStore != 'undefined' && this.unSub_freightLaneGroupStore != null && this.unSub_freightLaneGroupStore != undefined) {
            console.log("unSub_LGS");
            this.unSub_freightLaneGroupStore.unsubscribe();
        }
        if (typeof this.unSub_UpdaterStore != 'undefined' && this.unSub_UpdaterStore != null && this.unSub_UpdaterStore != undefined) {
            console.log("unSub_tVQ");
            this.unSub_UpdaterStore.unsubscribe();
        }
    };
    Transporter.prototype.onCreate = function () {
        if (this.id == null) {
            var obj = {
                "transporterName": this.transporterName,
                "transporterId": this.transporterid,
                "routeName": this.routeName,
                "routeId": this.routeId,
                "volumeQuota": this.value_quota
            };
            console.log(obj);
            this.createTrasporterVolumeQuota.getData.emit(obj);
        }
        else {
            var obj = {
                "transporterId": this.transporterid,
                "routeName": this.routeName,
                "routeId": this.routeId,
                "volumeQuota": this.value_quota
            };
            console.log(obj);
            this.updateTVQ.pathURL = this.updateTVQ.pathURL + this.id;
            this.updateTVQ.getData.emit(obj);
            this.store.dispatch({ "type": "IDSTORE", payload: null });
        }
        this.matDialog.close();
    };
    Transporter.prototype.onCancel = function () {
        this.matDialog.close();
    };
    Transporter.prototype.onTransporterSelect = function (value) {
        console.log(value);
        this.transporter = value['organisationName'];
        console.log(this.transporter);
        this.transporterName = value["organisationName"];
        this.transporterid = value["id"];
        this.showTransporter = false;
    };
    Transporter.prototype.onRouteSelect = function (value) {
        this.route_detail = value['name'];
        this.routeName = value["name"];
        this.routeId = value["id"];
        this.showRoutes = false;
    };
    Transporter.prototype.isTClick = function () {
        this.showTransporter = true;
    };
    Transporter.prototype.isRClick = function () {
        this.showRoutes = true;
    };
    return Transporter;
}());
Transporter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transpoter',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__service_update_transporter_service__["a" /* UpdateTVQ */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_update_transporter_service__["a" /* UpdateTVQ */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__service_fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__service_create_transporter_volume_quota_service__["a" /* CreateTrasporterVolumeQuota */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_create_transporter_volume_quota_service__["a" /* CreateTrasporterVolumeQuota */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__service_service__["a" /* Services */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_service__["a" /* Services */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__service_fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */]) === "function" && _m || Object])
], Transporter);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=transpoter.component.js.map

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/transpoter/transpoter.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n}\r\n\r\n.button:hover {\r\nbackground-color: #5b89ff !important;\r\ncolor: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/transpoter/transpoter.html":
/***/ (function(module, exports) {

module.exports = "<label> Add New Transporter Volume Quota</label>\r\n<div>\r\n  <!-- <mat-form-field style=\"width : 100%\">\r\n    <mat-select [(ngModel)]=\"transporter\" placeholder=\"Transporter Name\" (change)=\"onTransporterSelect($event)\">\r\n       <mat-option  [value]=\"test\">test</mat-option> -->\r\n      <!-- <mat-option *ngFor=\"let data of transporterData\" [value]=data>{{data.organisationName}}</mat-option> -->\r\n      \r\n    <!-- </mat-select> --> \r\n  <!-- </mat-form-field> -->\r\n\r\n  <mat-form-field style=\"width : 100%\" (click)=\"isTClick()\">\r\n    <input matInput [(ngModel)]=\"transporter\" placeholder=\"Transporter Name\" style=\"color:black\" required>\r\n  </mat-form-field>\r\n <div *ngIf=\"showTransporter\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:0px\" >\r\n         <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of transporterData\">\r\n            <li (click)=\"onTransporterSelect(data)\">{{data?.organisationName}}<hr></li>\r\n        </ul>\r\n    </div>\r\n\r\n  <!-- <mat-form-field style=\"width : 100%\">\r\n    <mat-select [(ngModel)]=\"route_detail\" placeholder=\"Freight Route\" (change)=\"onRouteSelect()\">\r\n      <mat-option *ngFor=\"let value of groupData\" [value]=\"value\">{{value.name}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field> -->\r\n\r\n  <mat-form-field style=\"width : 100%\" (click)=\"isRClick()\">\r\n    <input matInput [(ngModel)]=\"route_detail\" placeholder=\"Freight Route\" style=\"color:black\" required>\r\n  </mat-form-field>\r\n <div *ngIf=\"showRoutes\" style=\"z-index: 5;overflow-y:auto; position: fixed;background-color: rgba(245,245,245,1);width:18%;margin-top:-21px;margin-left:0px\" >\r\n         <ul style=\"list-style: none;margin-left: -32px;\" *ngFor=\"let data of groupData\">\r\n            <li (click)=\"onRouteSelect(data)\">{{data?.name}}<hr></li>\r\n        </ul>\r\n    </div>\r\n\r\n  <mat-form-field style=\"width : 100%\" >\r\n    <input matInput [(ngModel)]=\"value_quota\" placeholder=\"Value Quota\" style=\"color:black\" required>\r\n  </mat-form-field>\r\n\r\n  <div style=\"margin-top: 30px\">\r\n    <button mat-raised-button class=\"button\" style=\"margin-left:10px\" (click)=\"onCancel()\">Cancel</button>\r\n    <button mat-raised-button class=\"button\" (click)=\"onCreate()\">Save</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/deleteDialog.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n\r\n.button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/deleteDialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h5 style=\"text-align: center; font-size: 16px; color: gray\">Are you sure you want to revoke access for <span>{{name}}</span>?</h5>\r\n<div style=\"display: flex\">\r\n    <button mat-raised-button class=\"button\" style=\"float:left; margin-left: 40px\"  (click)=\"onCancel()\">No</button>\r\n    <button mat-raised-button class=\"button\" style=\"margin-left: 120px;\"  (click)=\"onDelete()\">Yes</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\r\n    /* display: flex; */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .form-container > * {\r\n    width: 100%;\r\n    height: 25%;\r\n  }\r\n\r\n  .button {\r\n    font-size: 12px;\r\n    line-height: 26px;\r\n    color: black;\r\n    height: 33px;\r\n    width: 19%;\r\n    float: right;\r\n    /* overflow: hidden; */\r\n    line-height: 1.2;\r\n    white-space: initial;\r\n    border-radius: 2px;\r\n  }\r\n\r\n.button:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-size:21px;color:#8a8c8e;\" >\r\n        <span>Add New User</span>\r\n      </div>\r\n\r\n<div class=\"form-container\">\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"name\" placeholder=\"Name\" required (keyup)=\"validateName()\" (focusout)=\"showErrorMessage('name')\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" [disabled]=\"isUserAdmin\" required (keyup)=\"validateEmail()\" (focusout)=\"showErrorMessage('email')\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"contactPersonNumber\" [maxlength]=\"10\"placeholder=\"Mobile\" (keyup)=\"validateMobile()\" (focusout)=\"showErrorMessage('mobile')\">\r\n    </mat-form-field>\r\n</div>\r\n<div>\r\n    <button mat-raised-button class=\"button\" [disabled]=\"isNameValid || isEmailValid || isMobileNumberValid\" (click)=\"submitted()\">Save</button>\r\n    <button mat-raised-button class=\"button\" (click)=\"onCancel()\" style=\"margin-right:10px\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-basic3 {\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  float: right;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n}\r\n\r\n.button-basic3:hover {\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n\r\n.div {\r\n  border: 100% solid black;\r\n}\r\n\r\n.table1 {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  color : black;\r\n  border-top : 1px solid #ddd;\r\n  border-left: 1px solid #ddd;\r\n  border-right: 1px solid #ddd;\r\n}\r\n\r\ntd {\r\n  width: 150px;\r\n  height: 25px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #ddd;\r\n  color : black;\r\n  font-size: 12px;\r\n}\r\n\r\n.expand-search {\r\n  border: 1.5px solid #b0bcc1;\r\n  font-size: 12px;\r\n  padding: 5px 26px 5px 12px;\r\n  display: inline-block;\r\n  border-radius: 17px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  min-width: 250px;\r\n}\r\n\r\n.header-span span{\r\n  padding: 8px 4px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div style=\"display: flex;padding: 10px;\">\r\n                <div style=\"font-size:21px;color:#8a8c8e;\" >\r\n                  <span>Users</span>\r\n                </div>\r\n\r\n                <div style=\"position:relative;position: relative;margin-left: auto;\" >\r\n                  <i  class=\"fa fa-search\" aria-hidden=\"true\" style=\"right:7px;margin-top:7px;position:absolute;font-size:13px;color:black;\" ></i>\r\n                  <input #user class=\"expand-search\"  placeholder=\"Search\" (keyup)=\"search(user.value)\">\r\n                </div>\r\n              </div>\r\n\r\n           <div>\r\n                <mat-paginator [length]=\"pageLength\"\r\n                [pageSize]=\"pageSize\"\r\n                [pageSizeOptions]=\"pageSizeoptions\"\r\n                (page)=\"pageEvent = $event;selectTableHeight()\">\r\n                </mat-paginator>\r\n           </div>\r\n\r\n           <div class=\"header-span\" style=\"padding :3px 3px;box-shadow: 0px 2px 5px grey;margin-bottom: 1px; background-color: #f5f2f26b; margin-left: 10px; margin-right: 10px; font-size: 12px\" fxLayout=\"row\">\r\n                <span fxFlex=20>Name</span>\r\n                <span fxFlex=20>Email ID</span>\r\n                <span fxFlex=20>Mobile No</span>\r\n                <span fxFlex=20 style=\"text-align: center\">Edit</span>\r\n                <span fxFlex=20 style=\"text-align: center\">Delete</span>\r\n           </div>\r\n\r\n           <div style=\"margin-left: 10px; margin-right: 10px;height: calc(100vh - 244px);overflow: auto\" >\r\n                <mat-card class=\"table-body-span\" *ngFor=\"let user of selectedUsers\" fxLayout=\"row\" style=\"font-size: 12px; height: auto;padding: 2px;\">\r\n                  <span fxFlex=20 style=\"margin-top: 10px\" >{{user?.name}}</span>\r\n                  <span fxFlex=20 style=\"margin-top: 10px\" >{{user?.email}}</span>\r\n                  <span fxFlex=20 style=\"margin-top: 10px\" >{{(user.contactPersonNumber)?user?.contactPersonNumber:'N/A'}}</span>\r\n                  <span fxFlex=20 style=\"text-align: center\"><button mat-button (click)=\"editEvent(user)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></span>\r\n                  <span *ngIf=\"user?.googleToken == undefined?true:false\" fxFlex=20 style=\"text-align: center\"><button mat-button (click)=\"deleteEvent(user)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></span>\r\n                </mat-card>\r\n                <div style=\"height: 50px\"></div>\r\n           </div>\r\n  <button [matTooltipPosition]=\"'left'\" matTooltip=\"Create User\" mat-fab color=\"primary\" name=\"createUser\" (click)=\"openDialog()\"style=\"position:absolute;bottom:10px;right:10px\" >\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 24px;line-height: 24px;color: white;\"></i>\r\n      </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/HMEL-admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__("../../../../../src/service/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_fetch_data_service__ = __webpack_require__("../../../../../src/service/fetch-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(dialog, fetchDataService, store, service, matSnackBar) {
        var _this = this;
        this.dialog = dialog;
        this.fetchDataService = fetchDataService;
        this.store = store;
        this.service = service;
        this.matSnackBar = matSnackBar;
        this.users = [];
        this.isValuesLoaded = true;
        this.isStoreLoaded = false;
        this.searchedUser = [];
        this.type = "type";
        this.isSearched = false;
        this.pageLength = 0;
        this.pageSize = 10;
        this.pageSizeoptions = [5, 10, 25, 100];
        this.selectedUsers = [];
        store.dispatch({ type: "COMMAND", payload: null });
        this.service.getUser.emit();
        this.storeVariable = store.select("userStore").subscribe(function (res) {
            if (res == null)
                return;
            _this.users = res['data'];
            if (_this.users['data'] != null) {
                _this.pageLength = _this.users['data'].length;
                _this.selectedUsers = _this.users['data'].slice(0, _this.pageSize);
                _this.isValuesLoaded = false;
                _this.isStoreLoaded = true;
                console.log(_this.users);
            }
        });
        this.commandVariable = this.store.select("command").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            if (res['data']['status'] == 200)
                _this.openSnackBar(res['message']);
            else
                _this.openSnackBar(res['data']['error']);
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.openDialog = function () {
        this.store.dispatch({ "type": "COMMON", payload: null });
        var dialogRef = this.dialog.open(UserFormComponent, {
            width: '526px',
            height: '336px'
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        if (typeof this.storeVariable != 'undefined' && this.storeVariable != null && this.storeVariable != undefined)
            this.storeVariable.unsubscribe();
        if (typeof this.commandVariable != 'undefined' && this.commandVariable != null && this.commandVariable != undefined)
            this.commandVariable.unsubscribe();
        console.log("user store unsubscribed");
    };
    UserComponent.prototype.deleteEvent = function (id) {
        this.store.dispatch({ "type": "COMMON", payload: id });
        var dialogRef = this.dialog.open(DeleteDialog);
    };
    UserComponent.prototype.editEvent = function (value) {
        // this.searchedClick = false;
        this.store.dispatch({ "type": "COMMON", payload: value });
        var dialogRef = this.dialog.open(UserFormComponent, {
            width: '526px',
            height: '336px'
        });
    };
    UserComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    UserComponent.prototype.search = function (value) {
        console.log(value);
        this.searchedUser = [];
        this.isSearched = true;
        console.log(this.users);
        for (var i = 0; i < this.users['data'].length; i++) {
            var str = this.users['data'][i]['name'].toUpperCase();
            if (str.includes(value.toUpperCase())) {
                this.searchedUser.push(this.users['data'][i]);
            }
        }
        this.selectedUsers = this.searchedUser.slice(0, this.pageSize);
        console.log(this.searchedUser);
    };
    UserComponent.prototype.selectTableHeight = function () {
        this.pageSize = this.pageEvent['pageSize'];
        console.log(this.pageEvent['pageIndex']);
        this.selectedUsers = this.users['data'].slice((this.pageEvent['pageSize'] * this.pageEvent['pageIndex']), (this.pageEvent['pageSize'] * (this.pageEvent['pageIndex'] + 1)));
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-component',
        template: __webpack_require__("../../../../../src/app/HMEL-admin/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_fetch_data_service__["a" /* FetchDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_fetch_data_service__["a" /* FetchDataServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]) === "function" && _e || Object])
], UserComponent);

var UserFormComponent = (function () {
    function UserFormComponent(dialogRef, service, store, fetchDataService, matSnackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.service = service;
        this.store = store;
        this.fetchDataService = fetchDataService;
        this.matSnackBar = matSnackBar;
        this.contactPersonNumber = null;
        this.id = null;
        this.isOrgUser = true;
        this.isTranspoter = false;
        this.isTransporterSelected = true;
        this.isNameValid = true;
        this.isEmailValid = true;
        this.isMobileNumberValid = false;
        this.un_SubStore = null;
        this.isUserAdmin = false;
        this.un_SubStore = store.select("updaterStore").subscribe(function (res) {
            if (res == null)
                return;
            console.log(res);
            _this.email = res["email"],
                _this.name = res["name"],
                _this.contactPersonNumber = res["contactPersonNumber"],
                _this.id = res['id'];
            if (res["googleToken"] != null) {
                _this.isUserAdmin = true;
            }
        });
        this.validateName();
        this.validateEmail();
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.submitted = function () {
        var obj;
        if (this.contactPersonNumber == null) {
            obj = {
                "name": this.name,
                "email": this.email
            };
        }
        else {
            obj = {
                "name": this.name,
                "email": this.email,
                "contactPersonNumber": this.contactPersonNumber
            };
        }
        console.log(obj);
        if (this.id == null) {
            this.service.createUser.emit(obj);
        }
        else {
            //  this.updateUser.path = this.updateUser.path+this.id;
            obj['id'] = this.id;
            this.service.updateUser.emit(obj);
        }
        this.dialogRef.close();
    };
    UserFormComponent.prototype.ngOnDestroy = function () {
        if (typeof this.un_SubStore != 'undefined' && this.un_SubStore != null && this.un_SubStore != undefined)
            this.un_SubStore.unsubscribe();
    };
    UserFormComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    UserFormComponent.prototype.openSnackBar = function (message) {
        this.matSnackBar.open(message, "OK", { duration: 4000 });
    };
    UserFormComponent.prototype.validateName = function () {
        console.log("name");
        var nameRegex = /^[a-zA-Z ]{2,30}$/;
        if (nameRegex.test(this.name)) {
            this.isNameValid = false;
        }
        else {
            this.isNameValid = true;
        }
    };
    UserFormComponent.prototype.validateEmail = function () {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(this.email)) {
            this.isEmailValid = false;
        }
        else {
            this.isEmailValid = true;
        }
    };
    UserFormComponent.prototype.validateMobile = function () {
        this.isMobileNumberValid = true;
        var mobileRegex = /^(\+91-|\+91|0)?\d{10}$/;
        if (mobileRegex.test(this.contactPersonNumber)) {
            this.isMobileNumberValid = false;
        }
        else {
            this.isMobileNumberValid = true;
        }
    };
    UserFormComponent.prototype.showErrorMessage = function (type) {
        if (type == 'name') {
            if (this.isNameValid)
                this.openSnackBar("please enter a vaild name");
        }
        if (type == 'email') {
            if (this.isEmailValid)
                this.openSnackBar("please enter a vaild email");
        }
        if (type == 'mobile') {
            if (this.isEmailValid)
                this.openSnackBar("please enter a valid mobile number");
        }
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "user-form",
        template: __webpack_require__("../../../../../src/app/HMEL-admin/user/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/user/user-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__service_fetch_data_service__["a" /* FetchDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_fetch_data_service__["a" /* FetchDataServices */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]) === "function" && _k || Object])
], UserFormComponent);

var DeleteDialog = (function () {
    function DeleteDialog(store, service, dialogRef) {
        var _this = this;
        this.store = store;
        this.service = service;
        this.dialogRef = dialogRef;
        this.un_SubStore = null;
        this.un_SubStore = this.store.select("updaterStore").subscribe(function (res) {
            console.log(res);
            if (res == null)
                return;
            _this.id = res['id'];
            _this.name = res['name'].toUpperCase();
        });
    }
    DeleteDialog.prototype.ngOnInit = function () {
    };
    DeleteDialog.prototype.onDelete = function () {
        this.service.deleteUser.emit(this.id);
        this.store.dispatch({ "type": "COMMON", payload: null });
        this.dialogRef.close();
    };
    DeleteDialog.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    DeleteDialog.prototype.ngOnDestroy = function () {
        if (typeof this.un_SubStore != 'undefined' && this.un_SubStore != null && this.un_SubStore != undefined)
            this.un_SubStore.unsubscribe();
    };
    return DeleteDialog;
}());
DeleteDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "delete-dialog",
        template: __webpack_require__("../../../../../src/app/HMEL-admin/user/deleteDialog.html"),
        styles: [__webpack_require__("../../../../../src/app/HMEL-admin/user/deleteDialog.css")]
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Services */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]) === "function" && _o || Object])
], DeleteDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-organisation/add-organisation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*md-card*/\r\n/*{*/\r\n  /*margin: 10%;*/\r\n/*}*/\r\n\r\n.main{\r\n  min-width: 200px;\r\n  /*max-width: 390px;*/\r\n  /*margin: 50px auto;*/\r\n  padding: 8px\r\n}\r\n\r\n/*button:hover {*/\r\n  /*opacity: 0.7;*/\r\n/*}*/\r\n\r\n.imgcontainer {\r\n  /*text-align: center;*/\r\n  margin: 8px 0px 30px 8px;\r\n}\r\n\r\n\r\n\r\n.trip-header{\r\n  background-color: #3F51B5;\r\n  width: 30%;\r\n  /*padding-bottom: 3px;*/\r\n  padding: 8px;\r\n  height: 40px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #ffffff;\r\n}\r\n\r\nmat-card{\r\n  padding: 9px;\r\n  min-width: 250px;\r\n}\r\n\r\ndiv {\r\n  font-family: Helvetica !important;\r\n  /*color: #46465f;*/\r\n}\r\n\r\n.my-hr{\r\n  border-style:ridge;\r\n  border-width:1px;\r\n  margin-top: 6px;\r\n  min-width: 250px;\r\n  margin-bottom:3px;\r\n}\r\n\r\n.my-map-search{\r\n  /*left: 0%;*/\r\n  /*width: 73%;*/\r\n  position: relative;\r\n  z-index: 10;\r\n  /*margin-top: 10px;*/\r\n}\r\n\r\n.my-toggle{\r\n  position: absolute;\r\n  z-index: 11;\r\n  left: 10px;\r\n  top: 10px;\r\n  height: 21px;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\n.my-toggle >>> .mat-button-toggle-label-content {\r\n  line-height: 23px;\r\n  padding: 0px 10px;\r\n  color: black;\r\n}\r\n\r\n.radio-button {\r\n  margin-left: 20px;\r\n  padding: 20px\r\n}\r\n\r\n.status-button{\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n  color: black;\r\n  height: 33px;\r\n  width: 19%;\r\n  margin-left: 10px;\r\n  /* overflow: hidden; */\r\n  line-height: 1.2;\r\n  white-space: initial;\r\n  border-radius: 2px;\r\n  -ms-flex-item-align: right;\r\n      -ms-grid-row-align: right;\r\n      align-self: right;\r\n}\r\n\r\n.status-button:hover\r\n{\r\n  background-color: #5b89ff !important;\r\n  color: white;\r\n}\r\n/*button {*/\r\n/*color:#ffffff;*/\r\n/*background-color:#1E88E5;*/\r\n/*}*/\r\n\r\n/* search box*/\r\n.search {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  padding: 5px 26px 6px 12px;\r\n  display: inline-block;\r\n  border: 1.5px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n}\r\n.search:focus{\r\n  outline: none;\r\n  border: 1.5px solid #03a9f4;\r\n  box-shadow: 0px 0px 5px #03a9f4;\r\n}\r\n\r\n/* ******************/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-organisation/add-organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"height: calc(100vh - 18px);\" >\r\n  <div class=\"imgcontainer\" >\r\n    <div>\r\n      <img style=\"padding: 5px;background-color: darkgray;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  ></div>\r\n    <div style=\"text-align: center;\">\r\n      <span><b>You don't have any organisation yet.</b><br> Kindly register any your organisation here: </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" >\r\n    <div style=\"min-width: 200px\" fxFlex=\"60\">\r\n      <!--<div style=\"width: 95%;margin-left: auto; margin-right: auto;margin-bottom: -33px;\">-->\r\n        <!--<div class=\"my-map-search\">-->\r\n          <!--<input id=\"pac-input\" type=\"text\" class=\"search\" matTooltip=\"search Here\" placeholder=\"'Search'\">-->\r\n          <!--<i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 10px;top: 7px;font-size: 15px;position: absolute;\"></i>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n\r\n        <div style=\"position: relative;\">\r\n            <mat-button-toggle-group class=\"my-toggle\" #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapType\">\r\n              <mat-button-toggle value=\"hybrid\">\r\n                <span>Satellite</span>\r\n              </mat-button-toggle>\r\n              <mat-button-toggle value=\"roadmap\" style=\"background-color:floralwhite;\" [style.opacity]=\"(mapType =='roadmap')?'.8':'.6'\">\r\n                <span>Map</span>\r\n              </mat-button-toggle>\r\n            </mat-button-toggle-group>\r\n\r\n          <agm-map [mapTypeId]=\"mapType\" style=\"height: calc(100vh - 200px);\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"5\">\r\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            </agm-marker>\r\n          </agm-map>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"40\" style=\"padding-top:20px;\" >\r\n      <div style=\"padding: 20px;\">\r\n        <mat-form-field style=\"width: 100%\" >\r\n          <input matInput [disabled]=\"isClicked\" [(ngModel)]=\"orgName\" placeholder=\"Organization Name\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 100%\" >\r\n          <input matInput [disabled]=\"isClicked\"  [(ngModel)]=\"organizationId\" placeholder=\"Organization Id\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 100%\" >\r\n          <input matInput [disabled]=\"isClicked\"  id=\"pac-input\" [(ngModel)]=\"address\" matTooltip=\"Address Search Here\" placeholder=\"Address Search Here\">\r\n          <!--<i class=\"fa fa-search\" aria-hidden=\"true\" style=\"right: 10px;top: 7px;font-size: 15px;position: absolute;\"></i>-->\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"isAuthorized\" style=\"text-align: center;padding-top: 20px;\">\r\n        <button matTooltip=\"logout\"  mat-raised-button (click)=\"logout()\" class=\"status-button\" >Logout</button>\r\n        <!--//  for create organization first we create freight location and then create organization-->\r\n        <button [disabled]=\"isClicked\"  matTooltip=\"Create organization\"  mat-raised-button class=\"status-button\" (click)=\"addFreightLocation()\">Create</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/add-organisation/add-organisation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_services__ = __webpack_require__("../../../../../src/service/login-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_create_freigth_location_service__ = __webpack_require__("../../../../../src/service/create-freigth-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_authorization_service_service__ = __webpack_require__("../../../../../src/service/authorization-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddOrganizationComponent = (function () {
    function AddOrganizationComponent(authorizationService, createFreightLocation, mapApiWrapper, router, _store, _loginServices, localStorageService, snackBar) {
        var _this = this;
        this.authorizationService = authorizationService;
        this.createFreightLocation = createFreightLocation;
        this.mapApiWrapper = mapApiWrapper;
        this.router = router;
        this._store = _store;
        this._loginServices = _loginServices;
        this.localStorageService = localStorageService;
        this.snackBar = snackBar;
        this.latitude = null;
        this.longitude = null;
        this.isPolygonEditable = false;
        this.polygon = null;
        this.mapType = 'roadmap';
        this.input = 0;
        this.orgName = '';
        this.organizationId = '';
        this.address = '';
        this.isAuthorized = false;
        this.isClicked = false; // for disabled all input when user click for create org
        this.freightLocUuid = '';
        this.unSub_createFreightLocRes = null;
        this.unSub_authorization = null;
        this.unSub_addOrgRes = null;
        this.token = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        if (this.token == null || this.token == undefined) {
            this.logout();
        }
        var isAlreadyAuthorized = false;
        this.unSub_authorization = this._store.select('authorization').subscribe(function (value) {
            if (value == null) {
                return;
            }
            isAlreadyAuthorized = true; // for checking request a;ready send or not
            if (value['error'] == "") {
                console.log(value);
                _this.isAuthorized = true;
            }
            else {
                console.log(value['errorMsg']);
                _this.logout();
                _this.openSnackBar(value['errorMsg']);
            }
        });
        // call for check authorization
        if (isAlreadyAuthorized == false) {
            console.log("user come directly");
            this.authorizationService.authorizedToken.emit(this.token);
        }
        //close call for check authorization
        console.log("constructor");
        // dispatched from create freight location services
        this.unSub_createFreightLocRes = this._store.select('createFreightLocRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            _this.freightLocUuid = '';
            if (value['error'] == '') {
                _this.freightLocUuid = value['data']['data']['uuid'];
                console.log(_this.freightLocUuid);
                if (_this.freightLocUuid == '' || _this.freightLocUuid == null) {
                    _this.openSnackBar('error please try again');
                    _this.isClicked = false;
                    return;
                }
                else {
                    _this.createOrganization();
                }
            }
            else {
                _this.isClicked = false;
                _this.openSnackBar(value['errorMsg'] + ' please try again');
            }
        });
        this.unSub_addOrgRes = this._store.select('addOrgRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isClicked = false;
            console.log(value);
            if (value['error'] == '') {
                _this.openSnackBar('Organization created succesfully');
                _this._store.dispatch({ type: "AUTHORIZATION", payload: null }); // use for re authorization in mainDashboard component
                _this.router.navigate(["mainDashboard"]);
            }
            else {
                _this.openSnackBar(value['errorMsg'] + ' please try again');
            }
        });
    } // constructor close
    AddOrganizationComponent.prototype.ngOnDestroy = function () {
        if (this.unSub_createFreightLocRes != null && this.unSub_createFreightLocRes != undefined)
            this.unSub_createFreightLocRes.unsubscribe();
        if (this.unSub_authorization != null && this.unSub_authorization != undefined) {
            this.unSub_authorization.unsubscribe();
        }
        if (this.unSub_addOrgRes != null && this.unSub_addOrgRes != undefined) {
            this.unSub_addOrgRes.unsubscribe();
        }
    };
    AddOrganizationComponent.prototype.createOrganization = function () {
        var obj = {
            orgId: this.organizationId,
            name: this.orgName,
            type: 'shipper',
            freightLocationId: this.freightLocUuid
        };
        console.log(obj);
        this._loginServices.createOrg.emit(obj);
    }; //close createOrganization
    AddOrganizationComponent.prototype.logout = function () {
        this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
        this.localStorageService.clearAll();
        this._store.dispatch({ type: "USER_INFO", payload: null });
        this._store.dispatch({ type: "SIGNUP_RES", payload: null });
        this._store.dispatch({ type: "AUTHORIZATION", payload: null });
        console.log(this.localStorageService.get('AUTH_TOKEN_SHIPPER'));
        this.router.navigate(['login']);
    };
    AddOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in on init");
        console.log("oninit");
        this.agmMap.mapReady.subscribe(function (map) {
            _this.map = map;
            // let points = this.getNPointsCircularPolygone({lat : this.latitude , lng : this.longitude} , 0.5 , 6);
            var points = [];
            console.log(points);
            _this.polygon = _this.addPolygone(_this.map, points, false, '#858585', '#353535');
            _this.editLocation();
        });
        // }
    };
    AddOrganizationComponent.prototype.addPolygone = function (map, points, editable, fillColor, strokeColor) {
        var myPolygon = new google.maps.Polygon({
            paths: points,
            editable: editable,
            strokeColor: strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35
        });
        myPolygon.setMap(map);
        return myPolygon;
    };
    AddOrganizationComponent.prototype.getNPointsCircularPolygone = function (center, dist, n) {
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
    AddOrganizationComponent.prototype.editLocation = function () {
        // this.isMarkerDragable=true;
        // this.polygon.setMap(null);//
        this.isPolygonEditable = true;
        this.polygon.setEditable(true);
        this.polygon.setOptions({ fillColor: '#FF0000', strokeColor: '#FF0000' });
        this.placesServices();
    };
    AddOrganizationComponent.prototype.placesServices = function () {
        var _this = this;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        console.log(input);
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.addListener('bounds_changed', function () {
            searchBox.setBounds(_this.map.getBounds());
        });
        // this.markers = [];
        // if (this.res != null) {
        // console.log(this.res["data"]["radius"])
        // let points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        // this.polygon.setPath(points);
        // this.polygon.setMap(this.map);
        // }
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            console.log(places.length);
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            // this.markers.forEach((marker) => {
            //   marker.setMap(null);
            // });
            // this.markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            // places.forEach((place) => {
            if (!places[0].geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: places[0].icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            // Create a marker for each place.
            var currentMarker = new google.maps.Marker({
                // map: this.map,
                // icon: icon,
                title: places[0].formatted_address,
                position: places[0].geometry.location
            });
            // console.log(places[0].geometry.location);
            _this.latitude = currentMarker['position'].lat();
            _this.longitude = currentMarker['position'].lng();
            console.log(_this.latitude + " " + _this.longitude);
            _this.address = places[0].formatted_address;
            //  this.polygon.setMap(this.map);
            console.log(places[0].formatted_address);
            // this.markers.push(currentMarker);
            // ********** for show marker according to screen ********
            if (places[0].geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(places[0].geometry.viewport);
            }
            else {
                bounds.extend(places[0].geometry.location);
            }
            // ****** for show marker accoeding to screen  ************
            // });
            _this.map.fitBounds(bounds);
            _this.onAddLocation();
        });
    }; // close placesServices
    // Add location boundary on map
    AddOrganizationComponent.prototype.onAddLocation = function () {
        var obj = { latitude: this.latitude, longitude: this.longitude };
        console.log('Set New Location Obj');
        console.log(obj);
        if (this.polygon != null)
            this.polygon.setMap(null);
        var points = this.getNPointsCircularPolygone({ latitude: this.latitude, longitude: this.longitude }, 0.5, 5);
        this.polygon.setPath(points);
        this.polygon.setMap(this.map);
        this.map.setZoom(14);
    };
    AddOrganizationComponent.prototype.addFreightLocation = function () {
        //  for create organization first we create freight location and then create organization
        var obj = null;
        var vertices = this.polygon.getPath();
        if (vertices == undefined || vertices == null) {
            this.openSnackBar("Please select Location On Map");
            return false;
        }
        var polygonPoints = [];
        for (var i = 0; i < vertices.getLength(); i++) {
            var xy = vertices.getAt(i);
            polygonPoints.push({ latitude: xy.lat(), longitude: xy.lng() });
            // console.log(xy.lat()+"     "+xy.lng());
        }
        if (this.checkValidation(polygonPoints)) {
            obj = {
                "name": this.orgName,
                "address": this.address,
                "geoTagType": 'geofence',
                "source": "manual",
                "zone1": null,
                "zone2": null,
                "zone3": null,
                "boundary": polygonPoints,
                "centre": { "latitude": this.latitude, "longitude": this.longitude },
                "type": 'plant'
            };
            console.log(obj);
            this.isClicked = true;
            this._store.dispatch({ type: "ADD_ORG_RESPONSE", payload: null });
            this._store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: null });
            this.createFreightLocation.createFreightLoc.emit(obj); // response get in constructor
        }
    };
    AddOrganizationComponent.prototype.checkValidation = function (polygonPoints) {
        if (this.orgName == '') {
            this.openSnackBar("Please fill Organization Name");
            return false;
        }
        if (this.organizationId == '') {
            this.openSnackBar("Please fill Organization Id");
            return false;
        }
        if (polygonPoints.length <= 0) {
            this.openSnackBar("Please select Location on map");
            return false;
        }
        if (this.address == '' || this.address == null) {
            this.openSnackBar("Please select Address");
            return false;
        }
        return true;
    };
    AddOrganizationComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return AddOrganizationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", Object)
], AddOrganizationComponent.prototype, "agmMap", void 0);
AddOrganizationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-organisation',
        template: __webpack_require__("../../../../../src/app/add-organisation/add-organisation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-organisation/add-organisation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__service_authorization_service_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_authorization_service_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_create_freigth_location_service__["a" /* CreateFreightLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_create_freigth_location_service__["a" /* CreateFreightLocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["c" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["c" /* GoogleMapsAPIWrapper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_login_services__["a" /* LoginServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _h || Object])
], AddOrganizationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-organisation.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    font-family: Helvetica;\r\n  }\r\n  .logo{\r\n    width: 100px;\r\n    padding: 2px;\r\n    height: 19px;\r\n  }\r\n\r\n  .service-name{\r\n    white-space: nowrap;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    margin-top:6px;\r\n    top: 28px;\r\n    left: 45px;\r\n    font-family: Helvetica;\r\n  }\r\n\r\n  .header{\r\n    padding:5px 0px 4px 15px;\r\n    background-color: #3F51B5;\r\n    color: white;\r\n    height: 45px;\r\n    box-shadow: 0px 0px 6px darkgrey;\r\n  }\r\n\r\n  .setting-button{\r\n    margin-left: auto;\r\n    padding: 11px;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .menu-button{\r\n    color: white;\r\n  }\r\n\r\n  .menu-button >>> .mat-button-focus-overlay{\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n\r\n  .menu-button:hover{\r\n    color: white !important;\r\n  }\r\n\r\n  .button-basic1 {\r\n    background-color: #3F51B5;\r\n    border: none;\r\n    font-size: 16px;\r\n    color: #e0dcdc;\r\n    margin-left:20px\r\n  }\r\n\r\n.button-basic1:hover {\r\n  color: white !important;\r\n}\r\n\r\n\r\n  .button-basic2 {\r\n    background-color: white;\r\n    border: none;\r\n    font-size: 16px;\r\n    margin-bottom:16px;\r\n    color:gray;\r\n    margin-left:20px;\r\n  }\r\n\r\n  .button-basic3 {\r\n      background-color: #3F51B5;\r\n      color: white;\r\n      font-size: 16px;\r\n      border-radius: 5px;\r\n      border: none;\r\n      float: right;\r\n      margin-top : 16px;\r\n  }\r\n\r\n  .div-class {\r\n      margin-top:16px;\r\n      border-bottom: 1px solid gray;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--<div class=\"header\" fxLayout=\"row\" style=\"min-width: 768px;\">-->\r\n    <!--<img class=\"logo\" src=\"logo-light.png\" alt=\"Fretron Logo\" >-->\r\n    <!--<span class=\"service-name\" >Shipper Portal</span>-->\r\n    <!--<button  mat-button class=\"button-basic1\" (click)=\"goToFTL_OrdersView()\">FTL Orders</button>-->\r\n    <!--<button  mat-button class=\"button-basic1\" (click)=\"goToLR_TrackingView()\">LR Tracking</button>-->\r\n    <!--<button  mat-button class=\"button-basic1\" >Payment Status</button>-->\r\n    <!--<button  mat-button class=\"button-basic1\" >Statement of Accounts</button>-->\r\n\r\n    <!--<button mat-button class=\"button-basic1 fa fa-cog\" style=\"margin-left:auto;\"  (click)=\"goToSettingView()\"></button>-->\r\n\r\n    <!--<button mat-button [matMenuTriggerFor]=\"menu\" style=\"cursor: pointer;z-index: 1000;margin-left: auto;\" >-->\r\n      <!--<i  class=\"fa fa-user-o\" aria-hidden=\"true\" >&#9662;</i>-->\r\n    <!--</button>-->\r\n    <!--<mat-menu #menu=\"matMenu\">-->\r\n      <!--<app-user-profile></app-user-profile>-->\r\n    <!--</mat-menu>-->\r\n  <!--</div>-->\r\n<!--<div style=\"width:100%;\">-->\r\n  <router-outlet></router-outlet>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(localStorageService, router, snackBar) {
        // this.localStorageService.set('AUTH_TOKEN_SHIPPER','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTQyOTMzMDcsInVzZXJJZCI6ImNjZmRmMzljLWZiY2YtNDg0OC1iNmYwLTM2ODMwZDI2MDQ5ZiIsImVtYWlsIjoiYW1pdC5rdW1hckBmcmV0cm9uLmNvbSIsIm5hbWUiOiJBbWl0IEt1bWFyIn0.o5qVe1zjZ3V6SqyxNz_xVklu0QQT4OazEa3oZBsV7hY');
        this.localStorageService = localStorageService;
        this.router = router;
        this.snackBar = snackBar;
        var token = this.localStorageService.get('AUTH_TOKEN_SHIPPER');
        console.log(token);
        if (token == undefined || token == null) {
            this.openSnackBar("Please Login First !!!");
            this.router.navigate(["login"]);
        }
        console.log("app component");
    } // close constructor
    AppComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 4000 });
    };
    return AppComponent;
}()); // class close
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_service_routing_service_component__ = __webpack_require__("../../../../../src/app/routing-service/routing-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_HMEL_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_service__ = __webpack_require__("../../../../../src/service/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_create_freigth_location_service__ = __webpack_require__("../../../../../src/service/create-freigth-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_update_freight_location_service__ = __webpack_require__("../../../../../src/service/update-freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_delete_freight_location_service__ = __webpack_require__("../../../../../src/service/delete-freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_create_lane_service__ = __webpack_require__("../../../../../src/service/create-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_update_freight_zone_service__ = __webpack_require__("../../../../../src/service/update-freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_delete_freight_lane_service__ = __webpack_require__("../../../../../src/service/delete-freight-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_delete_freight_lane_group_service__ = __webpack_require__("../../../../../src/service/delete-freight-lane-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_fetch_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/fetch-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_create_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/create-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_delete_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/delete.transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_Fetch_transporter_service__ = __webpack_require__("../../../../../src/service/Fetch-transporter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_fetch_load_allocation_data_service__ = __webpack_require__("../../../../../src/service/fetch-load-allocation-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_update_transporter_service__ = __webpack_require__("../../../../../src/service/update-transporter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_update_freight_lane_service__ = __webpack_require__("../../../../../src/service/update-freight-lane.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_updat_freight_lane_groups_service__ = __webpack_require__("../../../../../src/service/updat-freight-lane-groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__ = __webpack_require__("../../../../../src/reducer/info_store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_fetch_data_service__ = __webpack_require__("../../../../../src/service/fetch-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_freight_zone_service__ = __webpack_require__("../../../../../src/service/freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_fetch_freight_lane_group_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-group-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_create_freight_lane_group_service__ = __webpack_require__("../../../../../src/service/create-freight-lane-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_delete_freight_zone_service__ = __webpack_require__("../../../../../src/service/delete-freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__HMEL_admin_freight_locations_freight_locations_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__service_freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__service_fetch_freight_zone_service__ = __webpack_require__("../../../../../src/service/fetch-freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__HMEL_admin_add_location_add_location_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/add-location/add-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__HMEL_admin_freight_zones_freight_zones_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__HMEL_admin_transpoter_transpoter_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__HMEL_admin_freight_routes_freight_routes_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log_in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__load_allocation_load_allocation_component__ = __webpack_require__("../../../../../src/app/load-allocation/load-allocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__HMEL_admin_load_allocation_polices_load_allocation_polices_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__HMEL_admin_planned_load_planned_load_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__HMEL_admin_selected_vehicle_status_selected_vehicle_status_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/selected-vehicle-status/selected-vehicle-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__HMEL_admin_shipment_status_shipment_status_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__service_shipment_services__ = __webpack_require__("../../../../../src/service/shipment-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__service_freight_cluster_services__ = __webpack_require__("../../../../../src/service/freight-cluster-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__HMEL_admin_freight_cluster_freight_cluster_status_freight_cluster_status_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__HMEL_admin_shipment_orders_browse_shipment_browse_shipment_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__HMEL_admin_shipment_orders_create_shipment_order_create_shipment_order_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_pick_datetime_picker_module__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_pick_datetime_picker_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_ng_pick_datetime_picker_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__HMEL_admin_shipment_orders_create_shipment_order_add_freight_unit_dialog_add_freight_unit_dialog_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/add-freight-unit-dialog/add-freight-unit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__service_shipment_order_service__ = __webpack_require__("../../../../../src/service/shipment-order-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__ = __webpack_require__("../../../../../src/reducer/shipment-order-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__main_dashboard_main_dashboard_component__ = __webpack_require__("../../../../../src/app/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__service_login_services__ = __webpack_require__("../../../../../src/service/login-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__ = __webpack_require__("../../../../../src/reducer/login-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__service_authorization_service_service__ = __webpack_require__("../../../../../src/service/authorization-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__add_organisation_add_organisation_component__ = __webpack_require__("../../../../../src/app/add-organisation/add-organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__HMEL_admin_dashboard_business_partner_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__HMEL_admin_dashboard_add_business_partner_add_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__HMEL_admin_dashboard_business_partner_delete_business_partner_dialog_delete_business_partner_dialog_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/delete-business-partner-dialog/delete-business-partner-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__ = __webpack_require__("../../../../../src/reducer/busines-partner-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__service_businessPartnerService__ = __webpack_require__("../../../../../src/service/businessPartnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__HMEL_admin_dashboard_update_business_partner_update_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { DeleteUser } from "../service/delete-user.service";
// import { UpdateUser } from "../service/update-user.service";
// import { DeleteFreightZone } from "../service/delete-freight-zone.service";



























// import { FreightLaneGroupComponent,FreightLaneGroup } from './HMEL-admin/freight-lane-group/freight-lane-group.component';


































// import "hammer-timejs";
var store = {
    userStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["x" /* userStore */], freightLocationStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["k" /* freightLocationStore */], dialogRefStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["g" /* dialogRefStore */],
    transporter: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["s" /* transporter */], freightLaneGroupStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["i" /* freightLaneGroupStore */], latlngStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["o" /* latlngStore */],
    idStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["n" /* idStore */], freightLaneStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["j" /* freightLaneStore */], updaterStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["w" /* updaterStore */],
    allShipmentList: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["a" /* allShipmentList */], shipmentDetail: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["q" /* shipmentDetail */], shipmentIdList: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["r" /* shipmentIdList */],
    transporterVolumeQuota: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["t" /* transporterVolumeQuota */], loadAllocation: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["p" /* loadAllocation */],
    freightClusterStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["h" /* freightClusterStore */], createfreightClusterStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["c" /* createfreightClusterStore */],
    freightZoneStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["m" /* freightZoneStore */], createfreightZoneStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["d" /* createfreightZoneStore */], updatefreightZoneStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["v" /* updatefreightZoneStore */],
    deletefreightZoneStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["f" /* deletefreightZoneStore */], updatefreightClusterStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["u" /* updatefreightClusterStore */],
    deletefreightClusterStore: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["e" /* deletefreightClusterStore */], command: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["b" /* command */], freightZoneAll: __WEBPACK_IMPORTED_MODULE_28__reducer_info_store__["l" /* freightZoneAll */],
    freightLocation: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["d" /* freightLocation */], transportBusinessPartners: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["g" /* transportBusinessPartners */],
    createShipmentRes: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["c" /* createShipmentRes */], shipmentOrders: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["f" /* shipmentOrders */],
    checkVehicleNoExist: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["b" /* checkVehicleNoExist */], userInfo: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["f" /* userInfo */], signupRes: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["e" /* signupRes */], authorization: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["b" /* authorization */], customerDetails: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["d" /* customerDetails */],
    createFreightLocRes: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["c" /* createFreightLocRes */], addOrgRes: __WEBPACK_IMPORTED_MODULE_67__reducer_login_store__["a" /* addOrgRes */], addBusinessPartRes: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["a" /* addBusinessPartRes */], businessPartnerList: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["b" /* businessPartnerList */],
    deleteBusinessPartner: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["c" /* deleteBusinessPartner */], selectedBusinessPartnerObj: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["e" /* selectedBusinessPartnerObj */],
    selectedFreightLoc: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["f" /* selectedFreightLoc */], updateBusinessPartner: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["g" /* updateBusinessPartner */], organisationStore: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["e" /* organisationStore */], allBusinessPartners: __WEBPACK_IMPORTED_MODULE_59__reducer_shipment_order_store__["a" /* allBusinessPartners */], fretronReferenceNumber: __WEBPACK_IMPORTED_MODULE_73__reducer_busines_partner_store__["d" /* fretronReferenceNumber */]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_HMEL_admin_dashboard_dashboard_component__["a" /* DashBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__["b" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__["c" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__["a" /* DeleteDialog */],
            __WEBPACK_IMPORTED_MODULE_36__HMEL_admin_freight_locations_freight_locations_component__["a" /* FreightLocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_39__HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_41__HMEL_admin_freight_zones_freight_zones_component__["a" /* FreightZoneComponent */],
            __WEBPACK_IMPORTED_MODULE_42__HMEL_admin_transpoter_transpoter_component__["b" /* TranspoterComponent */],
            __WEBPACK_IMPORTED_MODULE_43__HMEL_admin_freight_routes_freight_routes_component__["b" /* FreightLanesComponent */],
            __WEBPACK_IMPORTED_MODULE_43__HMEL_admin_freight_routes_freight_routes_component__["a" /* FreightLane */],
            __WEBPACK_IMPORTED_MODULE_42__HMEL_admin_transpoter_transpoter_component__["a" /* Transporter */],
            __WEBPACK_IMPORTED_MODULE_44__log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_66__signup_signup_component__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_45__load_allocation_load_allocation_component__["a" /* LoadAllocationComponent */],
            __WEBPACK_IMPORTED_MODULE_46__HMEL_admin_load_allocation_polices_load_allocation_polices_component__["a" /* LoadAllocationPolicesComponent */],
            __WEBPACK_IMPORTED_MODULE_47__HMEL_admin_planned_load_planned_load_component__["a" /* PlannedLoadComponent */],
            __WEBPACK_IMPORTED_MODULE_47__HMEL_admin_planned_load_planned_load_component__["b" /* PlannedLoadDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_49__HMEL_admin_shipment_status_shipment_status_component__["a" /* ShipmentStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_48__HMEL_admin_selected_vehicle_status_selected_vehicle_status_component__["a" /* SelectedVehicleStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_53__HMEL_admin_freight_cluster_freight_cluster_status_freight_cluster_status_component__["a" /* FreightClusterStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_54__HMEL_admin_shipment_orders_browse_shipment_browse_shipment_component__["a" /* BrowseShipment */],
            __WEBPACK_IMPORTED_MODULE_55__HMEL_admin_shipment_orders_create_shipment_order_create_shipment_order_component__["a" /* CreateShipmentOrder */],
            __WEBPACK_IMPORTED_MODULE_57__HMEL_admin_shipment_orders_create_shipment_order_add_freight_unit_dialog_add_freight_unit_dialog_component__["a" /* AddFreightUnitDialog */],
            __WEBPACK_IMPORTED_MODULE_60__user_profile_user_profile_component__["a" /* UserProfile */],
            __WEBPACK_IMPORTED_MODULE_62__main_dashboard_main_dashboard_component__["a" /* MainDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_69__add_organisation_add_organisation_component__["a" /* AddOrganizationComponent */],
            __WEBPACK_IMPORTED_MODULE_70__HMEL_admin_dashboard_business_partner_business_partner_component__["a" /* BusinessPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_71__HMEL_admin_dashboard_add_business_partner_add_business_partner_component__["a" /* AddBusinessPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_72__HMEL_admin_dashboard_business_partner_delete_business_partner_dialog_delete_business_partner_dialog_component__["a" /* DeleteBusinessPartnerDialog */],
            __WEBPACK_IMPORTED_MODULE_75__HMEL_admin_dashboard_update_business_partner_update_business_partner_component__["a" /* UpdateBusinessPartner */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__["c" /* UserFormComponent */], __WEBPACK_IMPORTED_MODULE_39__HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */], __WEBPACK_IMPORTED_MODULE_43__HMEL_admin_freight_routes_freight_routes_component__["a" /* FreightLane */], __WEBPACK_IMPORTED_MODULE_42__HMEL_admin_transpoter_transpoter_component__["a" /* Transporter */], __WEBPACK_IMPORTED_MODULE_47__HMEL_admin_planned_load_planned_load_component__["b" /* PlannedLoadDialogComponent */], __WEBPACK_IMPORTED_MODULE_57__HMEL_admin_shipment_orders_create_shipment_order_add_freight_unit_dialog_add_freight_unit_dialog_component__["a" /* AddFreightUnitDialog */], __WEBPACK_IMPORTED_MODULE_3__app_HMEL_admin_user_user_component__["a" /* DeleteDialog */], __WEBPACK_IMPORTED_MODULE_72__HMEL_admin_dashboard_business_partner_delete_business_partner_dialog_delete_business_partner_dialog_component__["a" /* DeleteBusinessPartnerDialog */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_61_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: "my-app",
                storageType: "localStorage"
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_service_routing_service_component__["a" /* AppRoutingService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_51__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["c" /* StoreModule */].provideStore(store),
            __WEBPACK_IMPORTED_MODULE_56_ng_pick_datetime_picker_module__["DateTimePickerModule"], __WEBPACK_IMPORTED_MODULE_64_angular2_social_login__["a" /* Angular2SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_40__agm_core__["a" /* AgmCoreModule */].forRoot({
                // apiKey: 'AIzaSyD2ufpAUX67jwbWByvEeWX4Iee44MZhuR0'
                apiKey: 'AIzaSyBCRowVqghQTO8iJDgOc4QY-GlFwsn85_I',
                libraries: ["places"]
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["NgModel"], __WEBPACK_IMPORTED_MODULE_12__service_service__["a" /* Services */], __WEBPACK_IMPORTED_MODULE_22__service_delete_transporter_volume_quota_service__["a" /* DeleteTransporterVolumeQuota */], __WEBPACK_IMPORTED_MODULE_21__service_create_transporter_volume_quota_service__["a" /* CreateTrasporterVolumeQuota */], __WEBPACK_IMPORTED_MODULE_20__service_fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */], __WEBPACK_IMPORTED_MODULE_29__service_fetch_data_service__["a" /* FetchDataServices */], __WEBPACK_IMPORTED_MODULE_37__service_freight_location_service__["a" /* FetchFreightLocationData */], __WEBPACK_IMPORTED_MODULE_40__agm_core__["c" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_13__service_create_freigth_location_service__["a" /* CreateFreightLocation */], __WEBPACK_IMPORTED_MODULE_15__service_delete_freight_location_service__["a" /* DeleteFreightLocation */], __WEBPACK_IMPORTED_MODULE_39__HMEL_admin_add_location_add_location_component__["a" /* AddLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__service_update_freight_location_service__["a" /* UpdateFreightLocation */], __WEBPACK_IMPORTED_MODULE_34__service_delete_freight_zone_service__["a" /* DeleteFreightZone */], __WEBPACK_IMPORTED_MODULE_27__service_updat_freight_lane_groups_service__["a" /* UpdateFreightLaneGroup */],
            __WEBPACK_IMPORTED_MODULE_26__service_update_freight_lane_service__["a" /* UpdateFreightLane */], __WEBPACK_IMPORTED_MODULE_25__service_update_transporter_service__["a" /* UpdateTVQ */], __WEBPACK_IMPORTED_MODULE_24__service_fetch_load_allocation_data_service__["a" /* FetchLoadAllocationData */], __WEBPACK_IMPORTED_MODULE_19__service_delete_freight_lane_group_service__["a" /* DeleteFreightLaneGroup */],
            __WEBPACK_IMPORTED_MODULE_18__service_delete_freight_lane_service__["a" /* DeleteFreightLane */], __WEBPACK_IMPORTED_MODULE_32__service_fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */], __WEBPACK_IMPORTED_MODULE_23__service_Fetch_transporter_service__["a" /* FetchTranporterDataServices */],
            __WEBPACK_IMPORTED_MODULE_33__service_create_freight_lane_group_service__["a" /* CreateFreightLaneGroup */], __WEBPACK_IMPORTED_MODULE_31__service_freight_zone_service__["a" /* FreightZoneServices */], __WEBPACK_IMPORTED_MODULE_38__service_fetch_freight_zone_service__["a" /* FetchFreightZone */], __WEBPACK_IMPORTED_MODULE_16__service_create_lane_service__["a" /* CreateFreightLane */],
            __WEBPACK_IMPORTED_MODULE_30__service_fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */], __WEBPACK_IMPORTED_MODULE_17__service_update_freight_zone_service__["a" /* UpdateFreightZone */], __WEBPACK_IMPORTED_MODULE_50__service_shipment_services__["a" /* ShipmentServices */],
            __WEBPACK_IMPORTED_MODULE_52__service_freight_cluster_services__["a" /* FreightClusterServices */], __WEBPACK_IMPORTED_MODULE_58__service_shipment_order_service__["a" /* ShipmentOrderServices */], __WEBPACK_IMPORTED_MODULE_65__service_login_services__["a" /* LoginServices */], __WEBPACK_IMPORTED_MODULE_68__service_authorization_service_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_74__service_businessPartnerService__["a" /* BusinessPartnerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

__WEBPACK_IMPORTED_MODULE_64_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(__WEBPACK_IMPORTED_MODULE_63__environments_environment__["a" /* GOOGLE_PROVIDERS */]);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/load-allocation/load-allocation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    color : black;\r\n    border-top : 1px solid #ddd;\r\n    border-left: 1px solid #ddd;\r\n    border-right: 1px solid #ddd;\r\n  }\r\n  \r\n  td {\r\n    width: 150px;\r\n    height: 25px;\r\n    text-align: center;\r\n    border-bottom: 1px solid #ddd;\r\n    color : black;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .div {\r\n    border: 100% solid black;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/load-allocation/load-allocation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div\">\r\n  <div >\r\n    <table>\r\n      <tr>\r\n        <td><label >Date</label><br>\r\n          <label>Temp No</label></td>\r\n\r\n          <td><label>Polymer</label><br>\r\n            <label>21</label></td>\r\n\r\n            <td><label><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">BHMEL BHATINDA</label></label><br>\r\n              <label><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">Veer Polymer</label></label></td>\r\n\r\n              <td><label><i class=\"fa fa-truck\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">HR 33 A 5678</label></label><br>\r\n                <label><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">1110012</label></label></td>\r\n\r\n                <td><label><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">Anil Kumar</label></label><br>\r\n                 <label><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><label style=\"margin-left:5px\">989632514</label></label></td>   \r\n \r\n                 <td><label>Vehicle gated in</label></td>\r\n              </tr>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/load-allocation/load-allocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadAllocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoadAllocationComponent = (function () {
    function LoadAllocationComponent() {
    }
    LoadAllocationComponent.prototype.ngOnInit = function () {
    };
    return LoadAllocationComponent;
}());
LoadAllocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-load-allocation',
        template: __webpack_require__("../../../../../src/app/load-allocation/load-allocation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/load-allocation/load-allocation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadAllocationComponent);

//# sourceMappingURL=load-allocation.component.js.map

/***/ }),

/***/ "../../../../../src/app/log_in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.div {*/\r\n    /*width : 20%;*/\r\n    /*height : 100%;*/\r\n/*}*/\r\n\r\n/*.button {*/\r\n    /*font-size: 12px;*/\r\n    /*line-height: 26px;*/\r\n    /*color: black;*/\r\n    /*height: 33px;*/\r\n    /*width: 19%;*/\r\n    /*float: right;*/\r\n    /*!* overflow: hidden; *!*/\r\n    /*line-height: 1.2;*/\r\n    /*white-space: initial;*/\r\n    /*border-radius: 2px;*/\r\n    /*margin-right: 50px;*/\r\n  /*}*/\r\n\r\n/*.button:hover {*/\r\n  /*background-color: #5b89ff !important;*/\r\n  /*color: white;*/\r\n/*}*/\r\n\r\n\r\n\r\n.main{\r\n  height: calc(100vh - 18px);\r\n}\r\n\r\n.login-card{\r\n  min-width: 100px;\r\n  max-width: 300px;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 50px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log_in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" style=\"position: absolute;\" class=\"spinner\"></mat-spinner>\r\n<div class=\"main\" >\r\n    <!--<div style=\"text-align: center\">-->\r\n      <!--<label>LOGIN</label>-->\r\n    <!--</div>-->\r\n    <mat-card class=\"login-card\">\r\n      <div class=\"imgcontainer\" >\r\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\r\n      </div>\r\n      <div fxLayout=\"row\" >\r\n        <button (click)=\"loginWithGoogle()\" color=\"primary\" style=\"width: 100%;margin-bottom: 10px\" mat-raised-button >\r\n          Login with Google\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/log_in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_login_services__ = __webpack_require__("../../../../../src/service/login-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_authorization_service_service__ = __webpack_require__("../../../../../src/service/authorization-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LogInComponent = (function () {
    function LogInComponent(authorizationService, _loginServices, router, _auth, snackBar, _store, localStorageService) {
        var _this = this;
        this.authorizationService = authorizationService;
        this._loginServices = _loginServices;
        this.router = router;
        this._auth = _auth;
        this.snackBar = snackBar;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.isSpinner = false;
        this.un_subGoogleLogin = null;
        this.unSub_userInfo = null;
        this.unSub_authorization = null;
        var authToken = this.localStorageService.get('AUTH_TOKEN_SHIPPER');
        if (authToken != null && authToken != undefined) {
            this.router.navigate(["mainDashboard"]);
        }
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['error'] == "") {
                console.log(value);
                if (value['data']['isExist'] == true) {
                    _this.authorizationService.authorizedToken.emit(value['data']['token']);
                }
                else if (value['data']['isExist'] == false) {
                    _this.isSpinner = false;
                    _this.openSnackBar("user not Registered Please Signup");
                    _this.router.navigate(["signup"]);
                }
            }
            else {
                _this.isSpinner = false;
                console.log(value['errorMsg']);
                _this.openSnackBar(value['errorMsg']);
            }
        });
        this.unSub_authorization = this._store.select('authorization').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            if (value['error'] == "") {
                console.log(value);
                _this.router.navigate(["/mainDashboard"]);
            }
            else {
                console.log(value['errorMsg']);
                _this._store.dispatch({ type: "USER_INFO", payload: null });
                _this.openSnackBar(value['errorMsg']);
            }
        });
    } // constructor close
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.ngOnDestroy = function () {
        if (this.unSub_userInfo != null && this.unSub_userInfo != undefined) {
            this.unSub_userInfo.unsubscribe();
        }
        if (this.unSub_authorization != null && this.unSub_authorization != undefined) {
            this.unSub_authorization.unsubscribe();
        }
        if (this.un_subGoogleLogin != null && this.un_subGoogleLogin != undefined) {
            this.un_subGoogleLogin.unsubscribe();
        }
    };
    LogInComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        console.log("google auth");
        this.isSpinner = true;
        this.un_subGoogleLogin = this._auth.login('google').subscribe(function (data) {
            _this.isSpinner = false;
            console.log(data);
            //user data
            //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn),
            // idToken(only for google)
            var reqObj = {
                "loginType": "google",
                "authToken": {
                    "token": data['token'],
                    "email": data['email'],
                    "name": data['name']
                }
            };
            console.log(reqObj);
            _this.isSpinner = true;
            _this._store.dispatch({ type: "USER_INFO", payload: null });
            _this._store.dispatch({ type: "AUTHORIZATION", payload: null });
            _this._loginServices.login.emit(reqObj); // call api for checking user existing or not
        }, function (err) {
            _this.isSpinner = false;
            console.log(err);
        });
    }; // close loginWithGoogle
    LogInComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return LogInComponent;
}()); // class close
LogInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/log_in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log_in/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_authorization_service_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_authorization_service_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_login_services__["a" /* LoginServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _g || Object])
], LogInComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-dashboard/main-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n  font-family: Helvetica;\r\n}\r\n.logo{\r\n  width: 100px;\r\n  padding: 2px;\r\n  height: 19px;\r\n}\r\n\r\n.service-name{\r\n  white-space: nowrap;\r\n  font-size: 12px;\r\n  position: absolute;\r\n  top: 28px;\r\n  left: 45px;\r\n  font-family: Helvetica;\r\n}\r\n\r\n.header{\r\n  padding:5px 0px 4px 15px;\r\n  background-color: #3F51B5;\r\n  color: white;\r\n  height: 45px;\r\n  box-shadow: 0px 0px 6px darkgrey;\r\n}\r\n\r\n.setting-button{\r\n  margin-left: auto;\r\n  padding: 11px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.menu-button{\r\n  color: white;\r\n}\r\n\r\n.menu-button >>> .mat-button-focus-overlay{\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.menu-button:hover{\r\n  color: white !important;\r\n}\r\n\r\n.button-basic1 {\r\n  background-color: #3F51B5;\r\n  border: none;\r\n  font-size: 16px;\r\n  color: #e0dcdc;\r\n  margin-left:20px\r\n}\r\n\r\n.button-basic1:hover {\r\n  color: white !important;\r\n}\r\n\r\n\r\n.button-basic2 {\r\n  background-color: white;\r\n  border: none;\r\n  font-size: 16px;\r\n  margin-bottom:16px;\r\n  color:gray;\r\n  margin-left:20px;\r\n}\r\n\r\n.button-basic3 {\r\n  background-color: #3F51B5;\r\n  color: white;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  float: right;\r\n  margin-top : 16px;\r\n}\r\n\r\n.div-class {\r\n  margin-top:16px;\r\n  border-bottom: 1px solid gray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-dashboard/main-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUserAuthorized ==false\" style=\"height:100vh;background-color: #1f2021;opacity: .3;\">\n  <label style=\"font-size: 21px;color: #e8dbdb; position: absolute;top: 36%;left: 50%;transform: translate(-50%,-50%);\">{{loginMsg}}</label>\n  <label style=\"color: red;color: #ff000a !important;position: absolute;left: 50%;top: 17%;transform: translate(-50%,-50%);font-size: 20px;font-weight: bold;\">{{errorMsg}}</label>\n</div>\n\n<mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\" style=\"position: absolute\"></mat-spinner>\n\n<div *ngIf=\"isUserAuthorized\" class=\"header\" fxLayout=\"row\" style=\"min-width: 768px;\" >\n  <img class=\"logo\" src=\"logo-light.png\" alt=\"Fretron Logo\" >\n  <span class=\"service-name\" >Shipper Portal</span>\n  <button  mat-button class=\"button-basic1\" (click)=\"goToShipment_OrdersView()\" >Shipment Orders</button>\n  <!--<button  mat-button class=\"button-basic1\" (click)=\"goToLR_TrackingView()\">LR Tracking</button>-->\n  <!--<button  mat-button class=\"button-basic1\" >Payment Status</button>-->\n  <!--<button  mat-button class=\"button-basic1\" >Statement of Accounts</button>-->\n\n  <button mat-button class=\"button-basic1 fa fa-cog\" style=\"margin-left:auto;\"  (click)=\"goToSettingView()\"></button>\n\n  <button mat-button [matMenuTriggerFor]=\"menu\" style=\"cursor: pointer;z-index: 1000;\" >\n    <i  class=\"fa fa-user-o\" aria-hidden=\"true\" >&#9662;</i>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <app-user-profile></app-user-profile>\n  </mat-menu>\n</div>\n<div *ngIf=\"isUserAuthorized\" style=\"padding: 5px\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-dashboard/main-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authorization_service_service__ = __webpack_require__("../../../../../src/service/authorization-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainDashboardComponent = (function () {
    function MainDashboardComponent(authorizationService, router, _store, snackBar, localStorageService) {
        var _this = this;
        this.authorizationService = authorizationService;
        this.router = router;
        this._store = _store;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this.unSub_authorization = null;
        this.isUserAuthorized = false;
        this.isSpinner = false;
        this.loginMsg = 'LOGIN...';
        this.errorMsg = '';
        console.log("main dashboard");
        // let currentPath='http://'+window.location.hostname+':'+window.location.port;
        // window.location.replace(currentPath);
        // console.log(currentPath);
        var authToken = this.localStorageService.get('AUTH_TOKEN_SHIPPER'); // if token not found then it will check in app.component.
        var isAlreadyAuthorized = false;
        this.unSub_authorization = this._store.select('authorization').subscribe(function (value) {
            if (value == null) {
                return;
            }
            isAlreadyAuthorized = true; // for checking request a;ready send or not
            _this.isSpinner = false;
            _this.errorMsg = '';
            if (value['error'] == "") {
                console.log(value);
                var token = _this.localStorageService.get('AUTH_TOKEN_SHIPPER');
                var customerDetails = _this.customerDetail(token);
                console.log(customerDetails);
                if (customerDetails['orgId'] == undefined || customerDetails['orgId'] == null) {
                    _this.router.navigate(["addOrganization"]);
                }
                else {
                    _this.isUserAuthorized = true;
                    _this.openSnackBar("You Are Logged In");
                }
            }
            else if (value['error'] == "XX") {
                console.log(value['errorMsg']);
                _this.errorMsg = value['errorMsg'];
                _this.loginMsg = 'LOGIN Failed !!!   Try Again.';
                _this.openSnackBar(value['errorMsg']);
            }
            else {
                console.log(value['errorMsg']);
                _this._store.dispatch({ type: "USER_INFO", payload: null });
                _this._store.dispatch({ type: "SIGNUP_RES", payload: null });
                _this._store.dispatch({ type: "AUTHORIZATION", payload: null });
                _this.router.navigate(["login"]);
                _this.openSnackBar(value['errorMsg']);
            }
        });
        if (authToken != null && authToken != undefined && isAlreadyAuthorized == false) {
            this.isSpinner = true;
            this.authorizationService.authorizedToken.emit("" + authToken);
            console.log(authToken);
        }
    } // close constructor
    MainDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.unSub_authorization != null && this.unSub_authorization != undefined) {
            this.unSub_authorization.unsubscribe();
        }
    };
    MainDashboardComponent.prototype.customerDetail = function (token) {
        var customerDetails = {};
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        customerDetails = JSON.parse(window.atob(base64));
        // userDetails['id'] =userDetails['userId'];
        return customerDetails;
    };
    MainDashboardComponent.prototype.ngOnInit = function () {
    };
    MainDashboardComponent.prototype.goToShipment_OrdersView = function () {
        console.log("methods call");
        this.router.navigate(["mainDashboard/browseShipment"]);
    };
    MainDashboardComponent.prototype.goToLR_TrackingView = function () {
        this.router.navigate(["mainDashboard/shipment_status"]);
    };
    MainDashboardComponent.prototype.goToSettingView = function () {
        this.router.navigate(["mainDashboard/dashboard"]);
    };
    MainDashboardComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return MainDashboardComponent;
}());
MainDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-dashboard',
        template: __webpack_require__("../../../../../src/app/main-dashboard/main-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-dashboard/main-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_authorization_service_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_authorization_service_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object])
], MainDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing-service/routing-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HMEL_admin_user_user_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HMEL_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HMEL_admin_freight_locations_freight_locations_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-locations/freight-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HMEL_admin_freight_zones_freight_zones_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-zones/freight-zones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HMEL_admin_transpoter_transpoter_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/transpoter/transpoter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HMEL_admin_freight_routes_freight_routes_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-routes/freight-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log_in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__load_allocation_load_allocation_component__ = __webpack_require__("../../../../../src/app/load-allocation/load-allocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__HMEL_admin_load_allocation_polices_load_allocation_polices_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/load-allocation-polices/load-allocation-polices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__HMEL_admin_planned_load_planned_load_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/planned-load/planned-load.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__HMEL_admin_shipment_status_shipment_status_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-status/shipment-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__HMEL_admin_freight_cluster_freight_cluster_status_freight_cluster_status_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/freight-cluster/freight-cluster-status/freight-cluster-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__HMEL_admin_shipment_orders_browse_shipment_browse_shipment_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/browse-shipment/browse-shipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__HMEL_admin_shipment_orders_create_shipment_order_create_shipment_order_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/shipment-orders/create-shipment-order/create-shipment-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_dashboard_main_dashboard_component__ = __webpack_require__("../../../../../src/app/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_organisation_add_organisation_component__ = __webpack_require__("../../../../../src/app/add-organisation/add-organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__HMEL_admin_dashboard_business_partner_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/business-partner/business-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__HMEL_admin_dashboard_add_business_partner_add_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/add-business-partner/add-business-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__HMEL_admin_dashboard_update_business_partner_update_business_partner_component__ = __webpack_require__("../../../../../src/app/HMEL-admin/dashboard/update-business-partner/update-business-partner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* Signup */] },
    { path: 'addOrganization', component: __WEBPACK_IMPORTED_MODULE_18__add_organisation_add_organisation_component__["a" /* AddOrganizationComponent */] },
    { path: 'mainDashboard', component: __WEBPACK_IMPORTED_MODULE_16__main_dashboard_main_dashboard_component__["a" /* MainDashboardComponent */],
        children: [
            { path: '', redirectTo: 'browseShipment', pathMatch: 'full' },
            { path: 'shipment_status', component: __WEBPACK_IMPORTED_MODULE_12__HMEL_admin_shipment_status_shipment_status_component__["a" /* ShipmentStatusComponent */] },
            { path: 'browseShipment', component: __WEBPACK_IMPORTED_MODULE_14__HMEL_admin_shipment_orders_browse_shipment_browse_shipment_component__["a" /* BrowseShipment */] },
            { path: 'createShipmentOrder', component: __WEBPACK_IMPORTED_MODULE_15__HMEL_admin_shipment_orders_create_shipment_order_create_shipment_order_component__["a" /* CreateShipmentOrder */] },
            {
                path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__HMEL_admin_dashboard_dashboard_component__["a" /* DashBoardComponent */],
                children: [
                    { path: '', redirectTo: 'user', pathMatch: 'full' },
                    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__HMEL_admin_user_user_component__["b" /* UserComponent */] },
                    { path: 'businessPartner', component: __WEBPACK_IMPORTED_MODULE_19__HMEL_admin_dashboard_business_partner_business_partner_component__["a" /* BusinessPartnerComponent */] },
                    { path: 'addBusinessPartner', component: __WEBPACK_IMPORTED_MODULE_20__HMEL_admin_dashboard_add_business_partner_add_business_partner_component__["a" /* AddBusinessPartnerComponent */] },
                    { path: 'updateBusinessPartner', component: __WEBPACK_IMPORTED_MODULE_21__HMEL_admin_dashboard_update_business_partner_update_business_partner_component__["a" /* UpdateBusinessPartner */] },
                    { path: 'freightClusterStatus', component: __WEBPACK_IMPORTED_MODULE_13__HMEL_admin_freight_cluster_freight_cluster_status_freight_cluster_status_component__["a" /* FreightClusterStatusComponent */] },
                    { path: 'freight_location', component: __WEBPACK_IMPORTED_MODULE_4__HMEL_admin_freight_locations_freight_locations_component__["a" /* FreightLocationsComponent */] },
                    { path: 'freight_zones', component: __WEBPACK_IMPORTED_MODULE_5__HMEL_admin_freight_zones_freight_zones_component__["a" /* FreightZoneComponent */] },
                    { path: 'transporter', component: __WEBPACK_IMPORTED_MODULE_6__HMEL_admin_transpoter_transpoter_component__["b" /* TranspoterComponent */] },
                    { path: 'freight_routes', component: __WEBPACK_IMPORTED_MODULE_7__HMEL_admin_freight_routes_freight_routes_component__["b" /* FreightLanesComponent */] },
                    {
                        path: 'load_allocation_polices', component: __WEBPACK_IMPORTED_MODULE_10__HMEL_admin_load_allocation_polices_load_allocation_polices_component__["a" /* LoadAllocationPolicesComponent */],
                        children: [
                            { path: 'planned_load', component: __WEBPACK_IMPORTED_MODULE_11__HMEL_admin_planned_load_planned_load_component__["a" /* PlannedLoadComponent */] }
                        ]
                    }
                ]
            }
        ] },
    { path: 'load_allocation', component: __WEBPACK_IMPORTED_MODULE_9__load_allocation_load_allocation_component__["a" /* LoadAllocationComponent */] }
];
var AppRoutingService = (function () {
    function AppRoutingService() {
    }
    return AppRoutingService;
}());
AppRoutingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingService);

//# sourceMappingURL=routing-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\r\n  min-width: 200px;\r\n  max-width: 300px;\r\n  margin: 50px auto;\r\n  padding: 8px\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 20px 0;\r\n}\r\n\r\n/*button {*/\r\n/*color:#ffffff;*/\r\n/*background-color:#1E88E5;*/\r\n/*}*/\r\n\r\n\r\n.label-quote{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n  margin-bottom: 30px;\r\n  color:cadetblue;\r\n}\r\n\r\n.add-button{\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  padding: 0px;\r\n  min-width: 0px;\r\n  font-size: 18px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 4px 17px darkslategrey;\r\n}\r\n\r\n.language{\r\n  margin-right: 1px;\r\n}\r\n\r\n.language  >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n\r\n.my-select {\r\n  margin-top: 11px;\r\n  margin-right: 5px;\r\n}\r\n/*  */\r\n.my-select >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n\r\n.resend-otp-button{\r\n  width: 33px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  padding: 0px;\r\n  min-width: 0px;\r\n  font-size: 18px;\r\n  border-radius: 15px;\r\n  box-shadow: 1px 2px 9px darkslategrey;\r\n  color: #46465f;\r\n  background-color:whitesmoke;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <mat-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></mat-spinner>\n  <mat-card >\n    <form (ngSubmit)=\"userSignup()\" #signupForm=\"ngForm\" >\n      <div class=\"imgcontainer\" >\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n      </div>\n\n      <div>\n        <div class=\"fade-header\" style=\"text-align: center;margin-bottom: 30px\" >\n          <span>Create New Account</span>\n        </div>\n\n        <div fxLayout=\"row\" >\n          <mat-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input  matTooltip=\"{{'This field is required'}}\" value=\" \" matInput [(ngModel)]=\"name\" placeholder=\"Enter Name\" disabled name=\"name\" id=\"name\" required>\n          </mat-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <mat-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input  matTooltip=\"{{'This field is required'}}\" value=\" \" matInput [(ngModel)]=\"email\" placeholder=\"Enter Email\" disabled name=\"email\" id=\"email\">\n          </mat-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <mat-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input type=\"number\" min=\"0\" matTooltip=\"{{'This field is required'}}\"  matInput [(ngModel)]=\"mobileNo\"\n                   onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\n                   pattern=\"[0-9]{10}\" placeholder=\"{{'Enter Mobile Number'}}\" name=\"mobileNo\" id=\"mobileNo\" >\n          </mat-input-container>\n        </div>\n        <div fxLayout=\"row\" style=\"margin-top:15px;\" >\n          <button style=\"margin-left: auto\" name=\"cancel\" type=\"reset\"  (click)=\"cancel()\"  matTooltip=\"{{'cancel'}}\"  mat-button >\n            cancel\n          </button>\n          <button  name=\"ok\"  type=\"submit\"  matTooltip=\"{{'ok'}}\"  mat-button  [disabled]=\"!signupForm.form.valid || isClicked ==true\" >\n            Signup\n          </button>\n        </div>\n      </div>\n    </form>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_login_services__ = __webpack_require__("../../../../../src/service/login-services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_authorization_service_service__ = __webpack_require__("../../../../../src/service/authorization-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Signup = (function () {
    function Signup(_loginServices, snackBar, localStorageService, _store, router, authorizationService) {
        var _this = this;
        this._loginServices = _loginServices;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this._store = _store;
        this.router = router;
        this.authorizationService = authorizationService;
        this.name = ' ';
        this.email = ' ';
        this.mobileNo = '';
        this.isClicked = false;
        this.isSpinner = false;
        this.unSub_userInfo = null;
        this.unSub_signupRes = null;
        this.unSub_authorization = null;
        var authToken = this.localStorageService.get('AUTH_TOKEN_SHIPPER');
        if (authToken != null && authToken != undefined) {
            this.router.navigate(["mainDashboard"]);
        }
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                _this.cancel();
                return;
            }
            console.log(value);
            if (value['error'] == '') {
                _this.userInfo = value['data'];
                _this.email = value['data']['email'];
                _this.name = value['data']['name'];
            }
        });
        this.unSub_signupRes = this._store.select('signupRes').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            _this.isClicked = false;
            if (value['error'] == '') {
                _this.authorizationService.authorizedToken.emit(value['data']['token']);
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
        this.unSub_authorization = this._store.select('authorization').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            if (value['error'] == "") {
                console.log(value);
                var token = _this.localStorageService.get('AUTH_TOKEN_SHIPPER');
                var customerDetails = _this.customerDetail(token);
                console.log(customerDetails);
                if (customerDetails['orgId'] == undefined || customerDetails['orgId'] == null) {
                    _this.router.navigate(["addOrganization"]);
                }
                else {
                    _this.router.navigate(["mainDashboard"]);
                }
            }
            else {
                console.log(value['errorMsg']);
                _this._store.dispatch({ type: "USER_INFO", payload: null });
                _this._store.dispatch({ type: "SIGNUP_RES", payload: null });
                _this.openSnackBar(value['errorMsg']);
            }
        });
    } // close constructor
    Signup.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_userInfo != 'undefined' && this.unSub_userInfo != null && this.unSub_userInfo != undefined) {
            this.unSub_userInfo.unsubscribe();
        }
        if (this.unSub_signupRes != null && this.unSub_signupRes != undefined) {
            this.unSub_signupRes.unsubscribe();
        }
        if (this.unSub_authorization != null && this.unSub_authorization != undefined) {
            this.unSub_authorization.unsubscribe();
        }
    };
    Signup.prototype.ngOnInit = function () {
    };
    Signup.prototype.customerDetail = function (token) {
        var customerDetails = {};
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        customerDetails = JSON.parse(window.atob(base64));
        // userDetails['id'] =userDetails['userId'];
        return customerDetails;
    };
    Signup.prototype.userSignup = function () {
        console.log("sign up");
        if (this.fieldsValidation()) {
            var obj = {
                token: this.userInfo['_googleToken'],
                email: this.email,
                name: this.name,
            };
            if (this.mobileNo != '' && this.mobileNo != null) {
                obj['mobileNumber'] = "" + this.mobileNo;
            }
            this.isClicked = true;
            this._loginServices.signup.emit(obj);
            console.log(obj);
        }
    };
    Signup.prototype.fieldsValidation = function () {
        if (this.name.trim() == '' || this.name == undefined) {
            console.log("please fill Name");
            return false;
        }
        if (this.email.trim() == '' || this.email == undefined) {
            console.log("please fill Email");
            return false;
        }
        return true;
    };
    Signup.prototype.cancel = function () {
        this._store.dispatch({ type: "USER_INFO", payload: null });
        this._store.dispatch({ type: "SIGNUP_RES", payload: null });
        this.router.navigate(["login"]);
    };
    Signup.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return Signup;
}()); //class close
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_login_services__["a" /* LoginServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_authorization_service_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_authorization_service_service__["a" /* AuthorizationService */]) === "function" && _f || Object])
], Signup);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-container {\r\n  position: relative;\r\n  height: 150px;\r\n  margin: -8px -9px 10px -6px;\r\n  background-image: url(" + __webpack_require__("../../../../../src/images/background-profile.png") + ");\r\n}\r\n\r\n.profile-container-desktop {\r\n  position: relative;\r\n  height: 150px;\r\n  width: 280px;\r\n  margin-top: -8px;\r\n  background-image: url(" + __webpack_require__("../../../../../src/images/background-profile.png") + ");\r\n}\r\n\r\n.logo{\r\n  padding: 2px;\r\n  background-color: darkgray;\r\n  width: 90%;\r\n  width: 27%;\r\n  float:right;\r\n}\r\n\r\n\r\n.org-list-element{\r\n  margin-bottom: 5px;\r\n  border-bottom: 1px solid aliceblue;\r\n  padding:7px;\r\n}\r\n\r\n\r\n.org-list-element:hover{\r\n  background-color: #dfe9ff;\r\n}\r\n\r\n\r\n.profile-pic{\r\n  position: absolute;\r\n  left:10px;\r\n  top: 18px;\r\n  background-size: cover;\r\n  height: 60px;\r\n  width: 60px;\r\n  background-color: whitesmoke;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n}\r\n\r\n.user-org-details{\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n\r\n.org-list{\r\n  overflow: auto;\r\n  z-index: 1;\r\n  width: 95%;\r\n  height: calc(100vh - 160px);\r\n  background-color: white;\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"profile-container-desktop\" >\r\n    <img class=\"logo\" src=\"../../images/fretron_logo.png\" alt=\"Avatar\"  >\r\n    <img class=\"profile-pic\" src=\"../../images/default-profile.png\" alt=\"profile\"  >\r\n    <div style=\"display: grid;position: absolute;top:81px;left: 23px;color:white\">\r\n      <span style=\"font-size: 18px;margin-bottom: 3px;\">{{customerName}}</span>\r\n      <span style=\"font-size: 12px\">{{customerMobile}}</span>\r\n      <span style=\"font-size: 12px\">{{userDetails?.email}}</span>\r\n    </div>\r\n  </div>\r\n  <!--<div style=\"margin: 10px 0px 10px 10px;overflow: auto;max-height: 250px;\" >-->\r\n    <!--<div class=\"org-list-element\" *ngFor=\"let currentOrg of orgList\" (click)=\"switchOrg(currentOrg)\" >-->\r\n      <!--<div  style=\"padding: 5px;\" [style.background-color]=\"(currentOrgId === currentOrg['uuid']? 'lightblue': 'white')\">-->\r\n        <!--<span >{{currentOrg['organisationName']}}</span>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <div style=\"width: 95%;text-align: right;\" >\r\n    <!--<button  (click)=\"goToAddOrganisation()\" mat-button >Add Organisation</button>-->\r\n    <button  (click)=\"logout();\" mat-button >Logout</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfile = (function () {
    function UserProfile(http, localStorageService, _router, _store) {
        this.http = http;
        this.localStorageService = localStorageService;
        this._router = _router;
        this._store = _store;
        this.unSub_customerDetails = null;
        this.customerName = '';
        this.customerMobile = '';
        this.currentOrgId = '';
        this.userDetails = null;
        this.viewType = '';
        this.isOrgList = false;
        this.authToken = null;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var auth_token = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        console.log("user profile");
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
        // this.getOrganization(this.authToken);
    };
    UserProfile.prototype.ngOnInit = function () {
        this.viewType = this.view;
        // console.log(this.view);
    };
    UserProfile.prototype.customerDetail = function (token) {
        var userDetails = {};
        this.userDetails = null;
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails = JSON.parse(window.atob(base64));
        userDetails['id'] = userDetails['userId'];
        this.userDetails = userDetails;
        this.customerName = userDetails['name'];
        this.customerMobile = userDetails['mobileNumber'];
        this.currentOrgId = userDetails['orgId'];
        console.log(this.userDetails);
        this._store.dispatch({ type: "CUSTOMER_DETAILS", payload: { customer: this.userDetails } });
    };
    UserProfile.prototype.logout = function () {
        this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
        // this.localStorageService.clearAll();
        this._store.dispatch({ type: "USER_INFO", payload: null });
        this._store.dispatch({ type: "SIGNUP_RES", payload: null });
        this._store.dispatch({ type: "AUTHORIZATION", payload: null });
        this._router.navigate(['login']);
    };
    UserProfile.prototype.goToAddOrganisation = function () {
        // this._router.navigate(['dashboard/addOrganisation']);
    };
    return UserProfile;
}()); // class close
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserProfile.prototype, "view", void 0);
UserProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], UserProfile);

var _a, _b, _c, _d;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOOGLE_PROVIDERS; });
/* unused harmony export BASE_IP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return path; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
var GOOGLE_PROVIDERS = {
    "google": {
        "clientId": '192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
    }
};
var BASE_IP = {
    // BASE:'https://shippermanagementg2963f8fc.jp1.hana.ondemand.com/ShipperManagement/api',
    // BASE:'http://192.168.0.91:2122',
    BASE: 'http://192.168.0.153',
    IP: 'http://apis.fretron.com',
    ORG_MANAGER: 'http://apis.fretron.com/organisation',
};
var path = {
    LOGIN_PATH: BASE_IP.BASE + '/shipper/login',
    AUTHORIZATION_PATH: BASE_IP.BASE + '/shipper/authorize',
    SIGNUP_PATH: BASE_IP.BASE + '/shipper/signUp',
    CREATE_ORGANISATION_PATH: BASE_IP.BASE + '/shipper/organisation/create',
    GET_FREIGHT_LOCATION: BASE_IP.BASE + '/shipper/freightLocation',
    GET_TRANSPORT_BUSINESS_PARTNER_PATH: BASE_IP.BASE + '/shipper/user',
    SHIPMENT_ORDER_PATH: BASE_IP.BASE + '/shipper/shipment/order/create',
    GET_SHIPMENT_ORDER_PATH: BASE_IP.BASE + '/shipper/shipment/order/get',
    CHECK_VEHICLE_EXIST_PATH: BASE_IP.BASE + '/shipper/shipment/validateVehicle?vehicleRegistrattionNumber=',
    // SWITCH_ORG_PATH: BASE_IP.IP+"/user/switchorg?orgId=",
    // ORGANIZATION_LIST_PATH: BASE_IP.ORG_MANAGER+"/organizations",
    CHECK_FRETRON_REFERECE_NUMBER: BASE_IP.BASE + "/shipper/check/fretron/reference/number",
    PATH: BASE_IP.BASE + '/shipper/user',
    DUPATH: BASE_IP.BASE + '/shipper/user/delete/',
    UUPATH: BASE_IP.BASE + '/shipper/user/update/',
    FPATH: BASE_IP.BASE + '/shipper/user',
    FLPATH: BASE_IP.BASE + '/shipper/freightLocation',
    DFLPATH: BASE_IP.BASE + "/shipper/freightlocation/delete/",
    UFLPATH: BASE_IP.BASE + "/shipper/freightLocation/update/",
    FZPATH: "",
    FFZPATH: "",
    DFZPATH: "",
    UFZPATH: "",
    FLAPATH: BASE_IP.BASE + "/shipper/route",
    DFLAPATH: BASE_IP.BASE + "/shipper/route/delete/",
    UFLAPATH: BASE_IP.BASE + "/shipper/route/update/",
    FLGPATH: "",
    DFLGPATH: "",
    UFLGPATH: "",
    TGPATH: BASE_IP.BASE + "/shipper/volume",
    TVQPATH: BASE_IP.BASE + "/shipper/volume",
    DTVQPATH: BASE_IP.BASE + "/shipper/volume/delete/",
    UTVQPATH: BASE_IP.BASE + "/shipper/volume/update/",
    FREIGHT_CLUSTER: BASE_IP.BASE + '/shipper/freight/cluster',
    FREIGHT_ZONE: BASE_IP.BASE + '/shipper/freight/zone',
    ADD_BUSINESS_PARTNER: BASE_IP.BASE + '/shipper/businessPartner/add',
    GET_BUSINESS_PARTNER: BASE_IP.BASE + '/shipper/businessPartner/get',
    DELETE_BUSINESS_PARTNER: BASE_IP.BASE + '/shipper/businessPartner/delete',
    GET_SELECTED_FREIGHT_LOCATION: BASE_IP.BASE + '/shipper/freightLocation/get?uuid=',
    UPDATE_BUSINESS_PARTNER: BASE_IP.BASE + '/shipper/businessPartner/update',
    GET_ORGANISATION: BASE_IP.BASE + '/shipper/organisation/get',
    CREATESHIPMENT: 'http://192.168.0.103:8094/shipment/create',
    PATH1: 'http://192.168.0.149:2124/shipment/latest/status',
    DETAIL: 'http://192.168.0.149:2124/shipment/detail/',
    ADDSTOP: 'http://192.168.0.103:8094/shipment/addstop',
    PICKUP: 'http://192.168.0.103:8094/shipment/missing/pickup',
    DELIVERY: 'http://192.168.0.103:8094/shipment/missing/delivery',
    TRACKER_TRIP_DISCARD_PATH: 'http://192.168.0.103:8094/shipment/discard/',
    TRACKER_TRIP_UPDATE_PATH: 'http://192.168.0.103:8094/shipment/update',
    TRACKER_TRIP_UPDATE_FROM_STOP_PATH: 'http://192.168.0.103:8094/shipment/selectfromstop/',
    TRACKER_TRIP_CONFIRM_LOCATION_PATH: 'http://192.168.0.103:8094/shipment/missing/',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/images/background-profile.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-profile.82e0e4644bf995625d93.png";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
// }
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/reducer/busines-partner-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addBusinessPartRes;
/* harmony export (immutable) */ __webpack_exports__["b"] = businessPartnerList;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteBusinessPartner;
/* harmony export (immutable) */ __webpack_exports__["e"] = selectedBusinessPartnerObj;
/* harmony export (immutable) */ __webpack_exports__["f"] = selectedFreightLoc;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateBusinessPartner;
/* harmony export (immutable) */ __webpack_exports__["d"] = fretronReferenceNumber;
function addBusinessPartRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'ADD_BUSINESS_PART_RES':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function businessPartnerList(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'BUSINESS_PART_LIST':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function deleteBusinessPartner(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'DELETE_BUSINESS_PART':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function selectedBusinessPartnerObj(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SELECTED_BUSINESS_PART_OBJ':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function selectedFreightLoc(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'GET_SEL_FREIGHT_LOC':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function updateBusinessPartner(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'UPDATE_BUSINESS_PART_RES':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function fretronReferenceNumber(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FRETRON_REFERENCE_NUMBER':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
//# sourceMappingURL=busines-partner-store.js.map

/***/ }),

/***/ "../../../../../src/reducer/info_store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["x"] = userStore;
/* harmony export (immutable) */ __webpack_exports__["k"] = freightLocationStore;
/* harmony export (immutable) */ __webpack_exports__["g"] = dialogRefStore;
/* harmony export (immutable) */ __webpack_exports__["o"] = latlngStore;
/* harmony export (immutable) */ __webpack_exports__["n"] = idStore;
/* harmony export (immutable) */ __webpack_exports__["j"] = freightLaneStore;
/* harmony export (immutable) */ __webpack_exports__["w"] = updaterStore;
/* harmony export (immutable) */ __webpack_exports__["i"] = freightLaneGroupStore;
/* harmony export (immutable) */ __webpack_exports__["t"] = transporterVolumeQuota;
/* harmony export (immutable) */ __webpack_exports__["s"] = transporter;
/* harmony export (immutable) */ __webpack_exports__["p"] = loadAllocation;
/* harmony export (immutable) */ __webpack_exports__["r"] = shipmentIdList;
/* harmony export (immutable) */ __webpack_exports__["a"] = allShipmentList;
/* harmony export (immutable) */ __webpack_exports__["q"] = shipmentDetail;
/* harmony export (immutable) */ __webpack_exports__["h"] = freightClusterStore;
/* harmony export (immutable) */ __webpack_exports__["c"] = createfreightClusterStore;
/* harmony export (immutable) */ __webpack_exports__["u"] = updatefreightClusterStore;
/* harmony export (immutable) */ __webpack_exports__["e"] = deletefreightClusterStore;
/* harmony export (immutable) */ __webpack_exports__["m"] = freightZoneStore;
/* harmony export (immutable) */ __webpack_exports__["d"] = createfreightZoneStore;
/* harmony export (immutable) */ __webpack_exports__["v"] = updatefreightZoneStore;
/* harmony export (immutable) */ __webpack_exports__["f"] = deletefreightZoneStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = command;
/* harmony export (immutable) */ __webpack_exports__["l"] = freightZoneAll;
// import { RouterState } from '@ngrx/router-store';
// export const allShipmentList = 'allShipmentList';
function userStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'USER STORE':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function freightLocationStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT LOCATION':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function dialogRefStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'DIALOG':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function latlngStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'LATLNG':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function idStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'IDSTORE':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function freightLaneStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT LANE':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function updaterStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'COMMON':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function freightLaneGroupStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT LANE GROUP':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function transporterVolumeQuota(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'TRANSPORTER VOLUME QUOTA':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function transporter(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'TRANSPORTER':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
function loadAllocation(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'LOAD ALLOCATION':
            {
                console.log('tital reducer');
                return action.payload;
            }
        default:
            return state;
    }
}
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
/*********************************************************freight cluster store */
function freightClusterStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT_CLUSTER':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function createfreightClusterStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CREATE_FREIGHT_CLUSTER':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function updatefreightClusterStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'UPDATE_FREIGHT_CLUSTER':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function deletefreightClusterStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'DELETE_FREIGHT_CLUSTER':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function freightZoneStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT_ZONE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function createfreightZoneStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CREATE_FREIGHT_ZONE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function updatefreightZoneStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'UPDATE_FREIGHT_ZONE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function deletefreightZoneStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'DELETE_FREIGHT_ZONE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function command(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'COMMAND':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function freightZoneAll(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT_ZONE_ALL':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
//# sourceMappingURL=info_store.js.map

/***/ }),

/***/ "../../../../../src/reducer/login-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = userInfo;
/* harmony export (immutable) */ __webpack_exports__["e"] = signupRes;
/* harmony export (immutable) */ __webpack_exports__["b"] = authorization;
/* harmony export (immutable) */ __webpack_exports__["d"] = customerDetails;
/* harmony export (immutable) */ __webpack_exports__["c"] = createFreightLocRes;
/* harmony export (immutable) */ __webpack_exports__["a"] = addOrgRes;
// store logging information when user want to login
function userInfo(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'USER_INFO':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
// user signin information
function signupRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SIGNUP_RES':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function authorization(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'AUTHORIZATION':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function customerDetails(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CUSTOMER_DETAILS':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function createFreightLocRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CREATE_FREIGHT_LOCATION_RES':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function addOrgRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'ADD_ORG_RESPONSE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
//# sourceMappingURL=login-store.js.map

/***/ }),

/***/ "../../../../../src/reducer/shipment-order-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = freightLocation;
/* harmony export (immutable) */ __webpack_exports__["g"] = transportBusinessPartners;
/* harmony export (immutable) */ __webpack_exports__["c"] = createShipmentRes;
/* harmony export (immutable) */ __webpack_exports__["f"] = shipmentOrders;
/* harmony export (immutable) */ __webpack_exports__["b"] = checkVehicleNoExist;
/* harmony export (immutable) */ __webpack_exports__["a"] = allBusinessPartners;
/* harmony export (immutable) */ __webpack_exports__["e"] = organisationStore;
function freightLocation(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'FREIGHT_LOCATION':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function transportBusinessPartners(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'TRANSPORT_BUSINESS_PARTNERS':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function createShipmentRes(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CREATE_SHIPMENT_RES':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function shipmentOrders(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'SHIPMENT_ORDERS':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function checkVehicleNoExist(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'CHECK_VEHICLE_NO_EXIST':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function allBusinessPartners(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'ALL_BUSINESS_PARTNERS':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
function organisationStore(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case 'ORGANISATION_STORE':
            {
                return action.payload;
            }
        default:
            return state;
    }
}
//# sourceMappingURL=shipment-order-store.js.map

/***/ }),

/***/ "../../../../../src/service/Fetch-transporter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchTranporterDataServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchTranporterDataServices = (function () {
    function FetchTranporterDataServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (transporter) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].TGPATH;
            _this.sendRequest(pathURL, transporter).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "TRANSPORTER", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchTranporterDataServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchTranporterDataServices.prototype.sendRequest = function (path, transporter) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchTranporterDataServices;
}()); // class close
FetchTranporterDataServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchTranporterDataServices);

var _a, _b, _c;
//# sourceMappingURL=Fetch-transporter.service.js.map

/***/ }),

/***/ "../../../../../src/service/authorization-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthorizationService = (function () {
    function AuthorizationService(http, _store, localStorageService) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.authorizedToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.token=this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        //************login ***************************************************
        this.authorizedToken.subscribe(function (authToken) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].AUTHORIZATION_PATH;
            console.log(pathURL);
            _this.checkAuthorizedToken(pathURL, authToken).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
                    // this.localStorageService.clearAll();
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { error: 'X', errorMsg: 'server response with null' } });
                }
                else if (res.status >= 200 && res.status < 300 && res['isValid'] == true) {
                    // let customer=this.customerDetail(authToken);
                    _this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
                    // this.localStorageService.clearAll();
                    if (res['refreshToken'] == '') {
                        _this.localStorageService.set('AUTH_TOKEN_SHIPPER', authToken);
                    }
                    else {
                        _this.localStorageService.set('AUTH_TOKEN_SHIPPER', res['refreshToken']);
                    }
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { error: '', isValid: res } });
                }
                else {
                    _this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
                    // this.localStorageService.clearAll();
                    _this._store.dispatch({ type: "AUTHORIZATION", payload: { error: 'X', errorMsg: res.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "AUTHORIZATION", payload: { error: 'XX', errorMsg: 'Network error : ' + err } });
            });
        });
    } // constructor close here
    AuthorizationService.prototype.ngOnDestroy = function () {
    };
    // ***********************  token authorization  **********************
    AuthorizationService.prototype.checkAuthorizedToken = function (path, authToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    AuthorizationService.prototype.customerDetail = function (token) {
        // console.log(token);
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    return AuthorizationService;
}()); // class close
AuthorizationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], AuthorizationService);

var _a, _b, _c;
//# sourceMappingURL=authorization-service.service.js.map

/***/ }),

/***/ "../../../../../src/service/businessPartnerService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPartnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/**
 * Created by amit8.kumar on 12-12-2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BusinessPartnerService = (function () {
    function BusinessPartnerService(localStorageService, http, _store) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.addBusinessPartner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getBusinessPartnerList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteBusinessPartner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getSelFreightLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateBusinessPartner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getAllBusinessPartners = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getOrganisation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getFretronReferenceNumber = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /************* add Business Partner   *************/
        this.addBusinessPartner.subscribe(function (obj) {
            _this.addNewBusinessPartner(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].ADD_BUSINESS_PARTNER, obj).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: "server error" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "ADD_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        /************* update/edit Business Partner   *************/
        this.updateBusinessPartner.subscribe(function (obj) {
            _this.addNewBusinessPartner(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].UPDATE_BUSINESS_PARTNER, obj).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: "server error" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "UPDATE_BUSINESS_PART_RES", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        /************* get Business Partner List  *************/
        this.getBusinessPartnerList.subscribe(function (reqObj) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_BUSINESS_PARTNER + '?pageId=' + reqObj.pageId + '&pageSize=' + reqObj.pageSize;
            if (reqObj.searchLike != '' && reqObj.searchLike != null) {
                pathURL = pathURL + '&searchLike=' + reqObj.searchLike;
            }
            console.log(pathURL);
            _this.getBusinessPartner(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "BUSINESS_PART_LIST", payload: { error: 'X', errorMsg: "server error" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "BUSINESS_PART_LIST", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "BUSINESS_PART_LIST", payload: { error: 'X', errorMsg: res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "BUSINESS_PART_LIST", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        /************* delete business partner   *************/
        this.deleteBusinessPartner.subscribe(function (reqObj) {
            _this.deleteBusinessPart(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].DELETE_BUSINESS_PARTNER, reqObj).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "DELETE_BUSINESS_PART", payload: { error: 'X', errorMsg: "server error" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "DELETE_BUSINESS_PART", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "DELETE_BUSINESS_PART", payload: { error: 'X', errorMsg: res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "DELETE_BUSINESS_PART", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        /************* delete business partner   *************/
        this.getSelFreightLocation.subscribe(function (uuid) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_SELECTED_FREIGHT_LOCATION + uuid;
            _this.getBusinessPartner(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: { error: 'X', errorMsg: "server error" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: { error: 'X', errorMsg: res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "GET_SEL_FREIGHT_LOC", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        /**********get all business partner ********/
        this.getAllBusinessPartners.subscribe(function () {
            _this.getBusinessPartnerAll(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_BUSINESS_PARTNER + '/').subscribe(function (response) {
                if (response == null)
                    return;
                console.log(response);
                _this._store.dispatch({ type: "ALL_BUSINESS_PARTNERS", payload: response });
            });
        });
        /***********get organisation */
        this.getOrganisation.subscribe(function (path) {
            _this.requestGetOrganisation(path).subscribe(function (res) {
                if (res == null)
                    return;
                console.log(res);
                _this._store.dispatch({ type: "ORGANISATION_STORE", payload: res });
            });
        });
        /******get fretron reference number ****/
        this.getFretronReferenceNumber.subscribe(function (path) {
            _this.checkFretronReferenceNumber(path).subscribe(function (res) {
                if (res == null)
                    return;
                _this._store.dispatch({ type: "FRETRON_REFERENCE_NUMBER", payload: res });
            });
        });
    } // constructor close here
    BusinessPartnerService.prototype.ngOnDestroy = function () {
    };
    // get freight location & update business partner
    BusinessPartnerService.prototype.addNewBusinessPartner = function (path, obj) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: obj
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // get business partner & get freight location
    BusinessPartnerService.prototype.getBusinessPartner = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // get business partner
    BusinessPartnerService.prototype.deleteBusinessPart = function (path, obj) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: obj
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // get business partner all
    BusinessPartnerService.prototype.getBusinessPartnerAll = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    BusinessPartnerService.prototype.requestGetOrganisation = function (path) {
        console.log("organisation getter method requested");
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    BusinessPartnerService.prototype.checkFretronReferenceNumber = function (path) {
        console.log("organisation getter method requested");
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    return BusinessPartnerService;
}()); // class close
BusinessPartnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], BusinessPartnerService);

var _a, _b, _c;
//# sourceMappingURL=businessPartnerService.js.map

/***/ }),

/***/ "../../../../../src/service/create-freight-lane-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFreightLaneGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-group-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateFreightLaneGroup = (function () {
    function CreateFreightLaneGroup(localStorageService, http, _store, fetchFreightLaneGroup) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLaneGroup = fetchFreightLaneGroup;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLaneGroup) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLGPATH;
            _this.sendRequest(pathURL, freightLaneGroup).subscribe(function (response) {
                console.log(response);
                _this.fetchFreightLaneGroup.sendRequest(pathURL).subscribe(function (res) {
                    _this._store.dispatch({ type: "FREIGHT LANE GROUP", payload: { error: '', data: res } });
                });
            });
        });
    } // constructor close here
    CreateFreightLaneGroup.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    CreateFreightLaneGroup.prototype.sendRequest = function (path, freightLaneGroup) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // let headers = new Headers(this.defaultHeaders.toJSON());
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLaneGroup
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return CreateFreightLaneGroup;
}()); // class close
CreateFreightLaneGroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */]) === "function" && _d || Object])
], CreateFreightLaneGroup);

var _a, _b, _c, _d;
//# sourceMappingURL=create-freight-lane-group.service.js.map

/***/ }),

/***/ "../../../../../src/service/create-freigth-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFreightLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateFreightLocation = (function () {
    function CreateFreightLocation(localStorageService, http, _store, fetchFreightLocationData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLocationData = fetchFreightLocationData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.authToken = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createFreightLoc = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.authToken = this.localStorageService.get('AUTH_TOKEN_SHIPPER');
        this.getData.subscribe(function (freightLocation) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLPATH;
            _this.sendRequest(pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['status'] == 200) {
                    _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                    fetchFreightLocationData.sendRequest(pathURL, freightLocation).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LOCATION", payload: { error: '', data: res } });
                    });
                }
            });
        });
        this.createFreightLoc.subscribe(function (freightLocation) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLPATH;
            _this.sendRequest(pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: { error: 'X', errorMsg: "server error with null value" } });
                }
                else if (res.status >= 200 && res.status < 300) {
                    _this._store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: { error: 'X', errorMsg: res.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "CREATE_FREIGHT_LOCATION_RES", payload: { error: 'X', errorMsg: 'error : ' + err } });
            });
        });
    } // constructor close here
    CreateFreightLocation.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    CreateFreightLocation.prototype.sendRequest = function (path, freightLocation) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLocation
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return CreateFreightLocation;
}()); // class close
CreateFreightLocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__freight_location_service__["a" /* FetchFreightLocationData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__freight_location_service__["a" /* FetchFreightLocationData */]) === "function" && _d || Object])
], CreateFreightLocation);

var _a, _b, _c, _d;
//# sourceMappingURL=create-freigth-location.service.js.map

/***/ }),

/***/ "../../../../../src/service/create-lane.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFreightLane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateFreightLane = (function () {
    function CreateFreightLane(localStorageService, http, _store, fetchFreightLane) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLane = fetchFreightLane;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLane) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLAPATH;
            _this.sendRequest(pathURL, freightLane).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: response } });
                fetchFreightLane.sendRequest(pathURL).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "FREIGHT LANE", payload: { error: '', data: res } });
                });
            });
        });
    } // constructor close here
    CreateFreightLane.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    CreateFreightLane.prototype.sendRequest = function (path, freightLane) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLane
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return CreateFreightLane;
}()); // class close
CreateFreightLane = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */]) === "function" && _d || Object])
], CreateFreightLane);

var _a, _b, _c, _d;
//# sourceMappingURL=create-lane.service.js.map

/***/ }),

/***/ "../../../../../src/service/create-transporter-volume-quota.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrasporterVolumeQuota; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/fetch-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTrasporterVolumeQuota = (function () {
    function CreateTrasporterVolumeQuota(localStorageService, http, _store, fetchTransporterVolumeQuota) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchTransporterVolumeQuota = fetchTransporterVolumeQuota;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (transporterVolumeQuota) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].TVQPATH;
            _this.sendRequest(pathURL, transporterVolumeQuota).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                fetchTransporterVolumeQuota.sendRequest(pathURL).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "TRANSPORTER VOLUME QUOTA", payload: { error: '', data: res } });
                });
            });
        });
    } // constructor close here
    CreateTrasporterVolumeQuota.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    CreateTrasporterVolumeQuota.prototype.sendRequest = function (path, transporterVolumeQuota) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: transporterVolumeQuota
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return CreateTrasporterVolumeQuota;
}()); // class close
CreateTrasporterVolumeQuota = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */]) === "function" && _d || Object])
], CreateTrasporterVolumeQuota);

var _a, _b, _c, _d;
//# sourceMappingURL=create-transporter-volume-quota.service.js.map

/***/ }),

/***/ "../../../../../src/service/delete-freight-lane-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteFreightLaneGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-group-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteFreightLaneGroup = (function () {
    function DeleteFreightLaneGroup(localStorageService, http, _store, fetchFreightLaneGroupData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLaneGroupData = fetchFreightLaneGroupData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DFLGPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLaneGroup) {
            _this.sendRequest(_this.pathURL, freightLaneGroup).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['statusCode'] = 200) {
                    fetchFreightLaneGroupData.sendRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLGPATH).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LANE GROUP", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DFLGPATH;
            });
        });
    } // constructor close here
    DeleteFreightLaneGroup.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    DeleteFreightLaneGroup.prototype.sendRequest = function (path, freightLaneGroup) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLaneGroup
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return DeleteFreightLaneGroup;
}());
DeleteFreightLaneGroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */]) === "function" && _d || Object])
], DeleteFreightLaneGroup);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-freight-lane-group.service.js.map

/***/ }),

/***/ "../../../../../src/service/delete-freight-lane.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteFreightLane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteFreightLane = (function () {
    function DeleteFreightLane(localStorageService, http, _store, fetchFreightLaneData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLaneData = fetchFreightLaneData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DFLAPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLane) {
            _this.sendRequest(_this.pathURL, freightLane).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                if (res['status'] = 200) {
                    fetchFreightLaneData.sendRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLAPATH).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LANE", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DFLAPATH;
            });
        });
    } // constructor close here
    DeleteFreightLane.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    DeleteFreightLane.prototype.sendRequest = function (path, freightLane) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLane
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return DeleteFreightLane;
}());
DeleteFreightLane = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */]) === "function" && _d || Object])
], DeleteFreightLane);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-freight-lane.service.js.map

/***/ }),

/***/ "../../../../../src/service/delete-freight-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteFreightLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteFreightLocation = (function () {
    function DeleteFreightLocation(localStorageService, http, _store, fetchFreightLocationData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLocationData = fetchFreightLocationData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].DFLPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLocation) {
            _this.sendRequest(_this.pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FLPATH;
                if (res['statusCode'] = 200) {
                    fetchFreightLocationData.sendRequest(_this.pathURL, freightLocation).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LOCATION", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].DFLPATH;
            });
        });
    } // constructor close here
    DeleteFreightLocation.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    DeleteFreightLocation.prototype.sendRequest = function (path, freightLocation) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLocation
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return DeleteFreightLocation;
}());
DeleteFreightLocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__freight_location_service__["a" /* FetchFreightLocationData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__freight_location_service__["a" /* FetchFreightLocationData */]) === "function" && _d || Object])
], DeleteFreightLocation);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-freight-location.service.js.map

/***/ }),

/***/ "../../../../../src/service/delete-freight-zone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteFreightZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteFreightZone = (function () {
    function DeleteFreightZone(localStorageService, http, _store, fetchFreightLocationData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLocationData = fetchFreightLocationData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].DFZPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightZone) {
            _this.sendRequest(_this.pathURL, freightZone).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FFZPATH;
                if (res['statusCode'] = 200) {
                    fetchFreightLocationData.sendRequest(_this.pathURL, freightZone).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT ZONE", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].DFZPATH;
            });
        });
    } // constructor close here
    DeleteFreightZone.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    DeleteFreightZone.prototype.sendRequest = function (path, freightZone) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightZone
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return DeleteFreightZone;
}());
DeleteFreightZone = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__freight_location_service__["a" /* FetchFreightLocationData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__freight_location_service__["a" /* FetchFreightLocationData */]) === "function" && _d || Object])
], DeleteFreightZone);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-freight-zone.service.js.map

/***/ }),

/***/ "../../../../../src/service/delete.transporter-volume-quota.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteTransporterVolumeQuota; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/fetch-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteTransporterVolumeQuota = (function () {
    function DeleteTransporterVolumeQuota(localStorageService, http, _store, fetchTranporterVolumeQuotaDataServices) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchTranporterVolumeQuotaDataServices = fetchTranporterVolumeQuotaDataServices;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DTVQPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLocation) {
            _this.sendRequest(_this.pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                fetchTranporterVolumeQuotaDataServices.sendRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].TVQPATH).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "TRANSPORTER VOLUME QUOTA", payload: { error: '', data: res } });
                });
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DTVQPATH;
            });
        });
    } // constructor close here
    DeleteTransporterVolumeQuota.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    DeleteTransporterVolumeQuota.prototype.sendRequest = function (path, freightLocation) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLocation
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return DeleteTransporterVolumeQuota;
}());
DeleteTransporterVolumeQuota = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */]) === "function" && _d || Object])
], DeleteTransporterVolumeQuota);

var _a, _b, _c, _d;
//# sourceMappingURL=delete.transporter-volume-quota.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchDataServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchDataServices = (function () {
    function FetchDataServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (user) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FPATH;
            _this.sendRequest(pathURL, user).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "USER STORE", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchDataServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchDataServices.prototype.sendRequest = function (path, user) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchDataServices;
}()); // class close
FetchDataServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchDataServices);

var _a, _b, _c;
//# sourceMappingURL=fetch-data.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-freight-lane-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchFreightLaneDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchFreightLaneDataService = (function () {
    function FetchFreightLaneDataService(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLane) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FLAPATH;
            _this.sendRequest(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "FREIGHT LANE", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchFreightLaneDataService.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchFreightLaneDataService.prototype.sendRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchFreightLaneDataService;
}()); // class close
FetchFreightLaneDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchFreightLaneDataService);

var _a, _b, _c;
//# sourceMappingURL=fetch-freight-lane-data.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-freight-lane-group-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchFreightGroupDataServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchFreightGroupDataServices = (function () {
    function FetchFreightGroupDataServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLaneGroup) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FLGPATH;
            _this.sendRequest(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "FREIGHT LANE GROUP", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchFreightGroupDataServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchFreightGroupDataServices.prototype.sendRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchFreightGroupDataServices;
}()); // class close
FetchFreightGroupDataServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchFreightGroupDataServices);

var _a, _b, _c;
//# sourceMappingURL=fetch-freight-lane-group-data.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-freight-zone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchFreightZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchFreightZone = (function () {
    function FetchFreightZone(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightZone) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FFZPATH;
            _this.sendRequest(pathURL, freightZone).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "FREIGHT ZONE", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchFreightZone.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchFreightZone.prototype.sendRequest = function (path, freightZone) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchFreightZone;
}()); // class close
FetchFreightZone = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchFreightZone);

var _a, _b, _c;
//# sourceMappingURL=fetch-freight-zone.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-load-allocation-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchLoadAllocationData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchLoadAllocationData = (function () {
    function FetchLoadAllocationData(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (loadAllocation) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FFZPATH;
            _this.sendRequest(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "LOAD ALLOCATION", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchLoadAllocationData.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchLoadAllocationData.prototype.sendRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchLoadAllocationData;
}()); // class close
FetchLoadAllocationData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchLoadAllocationData);

var _a, _b, _c;
//# sourceMappingURL=fetch-load-allocation-data.service.js.map

/***/ }),

/***/ "../../../../../src/service/fetch-transporter-volume-quota.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchTranporterVolumeQuotaDataServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchTranporterVolumeQuotaDataServices = (function () {
    function FetchTranporterVolumeQuotaDataServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (transporterVol) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].TVQPATH;
            _this.sendRequest(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "TRANSPORTER VOLUME QUOTA", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchTranporterVolumeQuotaDataServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchTranporterVolumeQuotaDataServices.prototype.sendRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchTranporterVolumeQuotaDataServices;
}()); // class close
FetchTranporterVolumeQuotaDataServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchTranporterVolumeQuotaDataServices);

var _a, _b, _c;
//# sourceMappingURL=fetch-transporter-volume-quota.service.js.map

/***/ }),

/***/ "../../../../../src/service/freight-cluster-services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightClusterServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FreightClusterServices = (function () {
    function FreightClusterServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.freightClusterList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createFreightCluster = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateFreightCluster = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteFreightCluster = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //@todo error handling
        this.freightClusterList.subscribe(function () {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_CLUSTER + '/get';
            console.log(pathURL);
            _this.getAllFreightCluster(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "FREIGHT_CLUSTER", payload: { error: '', data: res } });
            });
        });
        //@todo error handling
        this.createFreightCluster.subscribe(function (clusterData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_CLUSTER + '/create';
            console.log(pathURL);
            console.log(clusterData);
            //@todo error handling
            _this.createFreightClusterService(clusterData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "CREATE_FREIGHT_CLUSTER", payload: response });
                _this.freightClusterList.emit();
            }, function (err) {
                _this._store.dispatch({ type: "CREATE_FREIGHT_CLUSTER", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
        this.updateFreightCluster.subscribe(function (clusterData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_CLUSTER + '/update';
            console.log(pathURL);
            console.log(clusterData);
            //@todo error handling
            _this.updateFreightClusterService(clusterData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "UPDATE_FREIGHT_CLUSTER", payload: response });
                _this.freightClusterList.emit();
            }, function (err) {
                _this._store.dispatch({ type: "UPDATE_FREIGHT_CLUSTER", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
        this.deleteFreightCluster.subscribe(function (clusterData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_CLUSTER + '/delete';
            console.log(pathURL);
            console.log(clusterData);
            //@todo error handling
            _this.deleteFreightClusterService(clusterData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "DELETE_FREIGHT_CLUSTER", payload: response });
                _this.freightClusterList.emit();
            }, function (err) {
                _this._store.dispatch({ type: "DELETE_FREIGHT_CLUSTER", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
    } // constructor close here
    FreightClusterServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FreightClusterServices.prototype.getAllFreightCluster = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log("in service :" + path);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response);
            return response.json();
            //     if(response.status==200){
            //     return response.json();
            //   }else{
            //     console.log("not 201");
            //     return {error:'X'};
            //   }
        });
    };
    // *********************** create Trip service  **********************
    FreightClusterServices.prototype.createFreightClusterService = function (clusterData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: clusterData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightClusterServices.prototype.updateFreightClusterService = function (clusterData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: clusterData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightClusterServices.prototype.deleteFreightClusterService = function (clusterData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: clusterData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightClusterServices.prototype.initialize = function () {
        this._store.dispatch({ type: "FREIGHT_CLUSTER", payload: null });
        this._store.dispatch({ type: "CREATE_FREIGHT_CLUSTER", payload: null });
        this._store.dispatch({ type: "UPDATE_FREIGHT_CLUSTER", payload: null });
        this._store.dispatch({ type: "DELETE_FREIGHT_CLUSTER", payload: null });
    };
    return FreightClusterServices;
}()); // class close
FreightClusterServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FreightClusterServices);

var _a, _b, _c;
//# sourceMappingURL=freight-cluster-services.js.map

/***/ }),

/***/ "../../../../../src/service/freight-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchFreightLocationData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FetchFreightLocationData = (function () {
    function FetchFreightLocationData(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightLocation) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FLPATH;
            _this.sendRequest(pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "FREIGHT LOCATION", payload: { error: '', data: res } });
            });
        });
    } // constructor close here
    FetchFreightLocationData.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FetchFreightLocationData.prototype.sendRequest = function (path, freightLocation) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return FetchFreightLocationData;
}()); // class close
FetchFreightLocationData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FetchFreightLocationData);

var _a, _b, _c;
//# sourceMappingURL=freight-location.service.js.map

/***/ }),

/***/ "../../../../../src/service/freight-zone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreightZoneServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FreightZoneServices = (function () {
    function FreightZoneServices(localStorageService, http, _store) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.freightZoneList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.freightClusterNameList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createFreightZone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateFreightZone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteFreightZone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.freightZoneAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //@todo error handling
        this.freightZoneList.subscribe(function (id) {
            _this.id = id;
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_ZONE + '/get' + '?cluster_id=' + id;
            console.log(pathURL);
            _this.getAllFreightZone(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _store.dispatch({ type: "FREIGHT_ZONE", payload: { error: '', data: res } });
            });
        });
        this.freightZoneAll.subscribe(function () {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_ZONE + '/get/all';
            console.log(pathURL);
            _this.getAllFreightZone(pathURL).subscribe(function (response) {
                console.log(response);
                _store.dispatch({ type: "FREIGHT_ZONE_ALL", payload: response });
            });
        });
        //@todo error handling
        this.createFreightZone.subscribe(function (zoneData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_ZONE + '/create';
            console.log(pathURL);
            console.log(zoneData);
            //@todo error handling
            _this.createFreightZoneService(zoneData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "CREATE_FREIGHT_ZONE", payload: response });
                _this.freightZoneList.emit(_this.id);
            }, function (err) {
                _this._store.dispatch({ type: "CREATE_FREIGHT_ZONE", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
        this.updateFreightZone.subscribe(function (zoneData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_ZONE + '/update';
            console.log(pathURL);
            console.log(zoneData);
            //@todo error handling
            _this.updateFreightZoneService(zoneData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "UPDATE_FREIGHT_ZONE", payload: response });
                _this.freightZoneList.emit(_this.id);
            }, function (err) {
                _this._store.dispatch({ type: "UPDATE_FREIGHT_ZONE", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
        this.deleteFreightZone.subscribe(function (zoneData) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].FREIGHT_ZONE + '/delete';
            console.log(pathURL);
            console.log(zoneData);
            //@todo error handling
            _this.deleteFreightZoneService(zoneData, pathURL).subscribe(function (response) {
                console.log(response);
                _this._store.dispatch({ type: "DELETE_FREIGHT_ZONE", payload: response });
                _this.freightZoneList.emit(_this.id);
            }, function (err) {
                _this._store.dispatch({ type: "DELETE_FREIGHT_ZONE", payload: { "status": 500, "errorMessage": 'Internal Server Error' } });
                console.log(err);
            });
        });
    } // constructor close here
    FreightZoneServices.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    FreightZoneServices.prototype.getAllFreightZone = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log("in service :" + path);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response.status);
            console.log(response);
            return response.json();
            //     if(response.status==200){
            //     return response.json();
            //   }else{
            //     console.log("not 201");
            //     return {error:'X'};
            //   }
        });
    };
    // *********************** create Trip service  **********************
    FreightZoneServices.prototype.createFreightZoneService = function (zoneData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: zoneData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightZoneServices.prototype.updateFreightZoneService = function (zoneData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: zoneData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightZoneServices.prototype.deleteFreightZoneService = function (zoneData, path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: zoneData,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            return response.json();
        });
    };
    FreightZoneServices.prototype.initialize = function () {
        this._store.dispatch({ type: "FREIGHT_ZONE", payload: null });
        this._store.dispatch({ type: "CREATE_FREIGHT_ZONE", payload: null });
        this._store.dispatch({ type: "UPDATE_FREIGHT_ZONE", payload: null });
        this._store.dispatch({ type: "DELETE_FREIGHT_ZONE", payload: null });
    };
    return FreightZoneServices;
}()); // class close
FreightZoneServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], FreightZoneServices);

var _a, _b, _c;
//# sourceMappingURL=freight-zone.service.js.map

/***/ }),

/***/ "../../../../../src/service/login-services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginServices = (function () {
    function LoginServices(http, _store, localStorageService) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.signup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.login = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addUserOrganisation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createOrg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.switchOrganisations = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.token=this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        //************login ***************************************************
        this.login.subscribe(function (reqObj) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].LOGIN_PATH;
            console.log(pathURL);
            console.log(reqObj);
            _this.userLogin(pathURL, reqObj).subscribe(function (response) {
                // this.localStorageService.clearAll();
                _this.localStorageService.remove('AUTH_TOKEN_SHIPPER');
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "USER_INFO", payload: { error: 'X', errorMsg: "server error with null value" } });
                }
                else if (res.status >= 200 && res.status < 300) {
                    if (res['isExist'] == false) {
                        res['_googleToken'] = reqObj['authToken']['token'];
                    }
                    _this._store.dispatch({ type: "USER_INFO", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "USER_INFO", payload: { error: 'X', errorMsg: res.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "USER_INFO", payload: { error: 'X', errorMsg: 'error : ' + err } });
            });
        });
        // ************ signup ***************************************************
        this.signup.subscribe(function (obj) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].SIGNUP_PATH;
            console.log(pathURL);
            _this.userSignup(pathURL, obj).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SIGNUP_RES", payload: { error: '', data: response } });
                }
                else {
                    _this._store.dispatch({ type: "SIGNUP_RES", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SIGNUP_RES", payload: { error: 'X', errorMsg: 'http error' + err } });
            });
        });
        //************ create Organisation ***************************************************
        this.createOrg.subscribe(function (addOrgObj) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].CREATE_ORGANISATION_PATH;
            console.log(pathURL);
            _this.createOrganisation(pathURL, addOrgObj).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "ADD_ORG_RESPONSE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "ADD_ORG_RESPONSE", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "ADD_ORG_RESPONSE", payload: { error: 'X', errorMsg: 'http error ' + err } });
            });
        });
    } // constructor close here
    // public token;
    LoginServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  token authorization  **********************
    LoginServices.prototype.userLogin = function (path, reqObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: reqObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  token authorization  **********************
    LoginServices.prototype.userSignup = function (path, reqObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: reqObj,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    LoginServices.prototype.createOrganisation = function (path, addOrgObj) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
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
    return LoginServices;
}()); // class close
LoginServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], LoginServices);

var _a, _b, _c;
//# sourceMappingURL=login-services.js.map

/***/ }),

/***/ "../../../../../src/service/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_data_service__ = __webpack_require__("../../../../../src/service/fetch-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Services = (function () {
    function Services(localStorageService, http, _store, fetchData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchData = fetchData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.createUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.createUser.subscribe(function (user) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].PATH;
            _this.createUserRequest(pathURL, user).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { message: 'User created', error: '', data: res } });
                _this.getUserDataRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FPATH).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "USER STORE", payload: { error: '', data: res } });
                });
            });
        });
        this.getUser.subscribe(function () {
            console.log("call user list");
            _this.getUserDataRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FPATH).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "USER STORE", payload: { error: '', data: res } });
            });
        });
        this.deleteUser.subscribe(function (id) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].DUPATH + id;
            _this.deleteUserRequest(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { message: 'User deleted', error: '', data: res } });
                _this.getUserDataRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FPATH).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "USER STORE", payload: { error: '', data: res } });
                });
            });
        });
        this.updateUser.subscribe(function (user) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].UUPATH + user['id'];
            _this.updateUserRequest(pathURL, user).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { message: 'User updated', error: '', data: res } });
                _this.getUserDataRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FPATH).subscribe(function (response) {
                    console.log(response);
                    var res = response;
                    _this._store.dispatch({ type: "USER STORE", payload: { error: '', data: res } });
                });
            });
        });
    } // constructor close here
    Services.prototype.ngOnDestroy = function () {
    };
    //********************* send Request to create User*****/
    Services.prototype.createUserRequest = function (path, user) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: user
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    //********************* send Request to get User*****/
    Services.prototype.getUserDataRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    /********send request to delete user ****/
    Services.prototype.deleteUserRequest = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    /********send request to update user********/
    Services.prototype.updateUserRequest = function (path, user) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: user
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return Services;
}()); // class close
Services = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_data_service__["a" /* FetchDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_data_service__["a" /* FetchDataServices */]) === "function" && _d || Object])
], Services);

var _a, _b, _c, _d;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "../../../../../src/service/shipment-order-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentOrderServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/**
 * Created by amit8.kumar on 12-12-2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShipmentOrderServices = (function () {
    function ShipmentOrderServices(localStorageService, http, _store) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getFreightLocationList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTransportBusinessPartnerList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createShipmentOrder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getShipmentOrderList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checkVehicleNoExist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /************* get Freight Location List   *************/
        this.getFreightLocationList.subscribe(function () {
            _this.getFreightLocation(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_FREIGHT_LOCATION).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['status'] == 200) {
                    _this._store.dispatch({ type: "FREIGHT_LOCATION", payload: { error: '', data: res['data'] } });
                }
                else {
                    _this._store.dispatch({ type: "FREIGHT_LOCATION", payload: { error: 'X', errorMsg: "server error " + res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "FREIGHT_LOCATION", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        //********************************************************************
        //called from brouse-shipment
        this.getShipmentOrderList.subscribe(function (obj) {
            var urlPath = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_SHIPMENT_ORDER_PATH + '?pageId=' + obj.pageNo + '&records=' + obj.records;
            _this.getShipmentOrders(urlPath).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['status'] == 200) {
                    _this._store.dispatch({ type: "SHIPMENT_ORDERS", payload: { error: '', data: res['data'] } });
                }
                else {
                    _this._store.dispatch({ type: "SHIPMENT_ORDERS", payload: { error: 'X', errorMsg: "server error " + res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "SHIPMENT_ORDERS", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        //****************************************************************************************************************
        this.getTransportBusinessPartnerList.subscribe(function () {
            _this.getTransportBusinessPartner(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].GET_TRANSPORT_BUSINESS_PARTNER_PATH).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['status'] == 200) {
                    _this._store.dispatch({ type: "TRANSPORT_BUSINESS_PARTNERS", payload: { error: '', data: res['data'] } });
                }
                else {
                    _this._store.dispatch({ type: "TRANSPORT_BUSINESS_PARTNERS", payload: { error: 'X', errorMsg: "server error " + res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "TRANSPORT_BUSINESS_PARTNERS", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        //****************************************************************************************************************
        this.createShipmentOrder.subscribe(function (shipmentObj) {
            _this.createNewShipmentOrder(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].SHIPMENT_ORDER_PATH, shipmentObj).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "CREATE_SHIPMENT_RES", payload: { error: 'X', errorMsg: "server error with null value" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "CREATE_SHIPMENT_RES", payload: { error: '', successMsg: "succesfully created" } });
                }
                else {
                    _this._store.dispatch({ type: "CREATE_SHIPMENT_RES", payload: { error: 'X', errorMsg: "server error " + res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "CREATE_SHIPMENT_RES", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
        //*********************************  CHECK_VEHICLE_EXIST_PATH*******************************************************************************
        this.checkVehicleNoExist.subscribe(function (vehicleNo) {
            var pathUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].CHECK_VEHICLE_EXIST_PATH + vehicleNo;
            console.log(pathUrl);
            _this.checkVehicleExist(pathUrl).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res == null) {
                    _this._store.dispatch({ type: "CHECK_VEHICLE_NO_EXIST", payload: { error: 'X', errorMsg: "server error with null value" } });
                }
                else if (res['status'] == 200) {
                    _this._store.dispatch({ type: "CHECK_VEHICLE_NO_EXIST", payload: { error: '', data: res } });
                }
                else {
                    _this._store.dispatch({ type: "CHECK_VEHICLE_NO_EXIST", payload: { error: 'X', errorMsg: "error occur " + res['error'] } });
                }
            }, function (err) {
                console.log(err.json());
                _this._store.dispatch({ type: "CHECK_VEHICLE_NO_EXIST", payload: { error: 'X', errorMsg: "Network error " + err } });
            });
        });
    } // constructor close here
    ShipmentOrderServices.prototype.ngOnDestroy = function () {
    };
    // get freight location
    ShipmentOrderServices.prototype.getFreightLocation = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    ShipmentOrderServices.prototype.getShipmentOrders = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        console.log(authToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // get Transport Business Partner
    ShipmentOrderServices.prototype.getTransportBusinessPartner = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // get Transport Business Partner
    ShipmentOrderServices.prototype.checkVehicleExist = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        return this.http.request(path, requestOptions).map(function (response) {
            // console.log(response);
            return response.json();
        });
    };
    // create New Shipment Order
    ShipmentOrderServices.prototype.createNewShipmentOrder = function (path, shipmentReqObj) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: shipmentReqObj
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return ShipmentOrderServices;
}()); // class close
ShipmentOrderServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], ShipmentOrderServices);

var _a, _b, _c;
//# sourceMappingURL=shipment-order-service.js.map

/***/ }),

/***/ "../../../../../src/service/shipment-services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShipmentServices = (function () {
    function ShipmentServices(localStorageService, http, _store) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.shipmentIdList = ["S01", "S02", "S03", "S04"]; //["f50e50b5-f2d8-4c31-8ed5-7e196f86e630","16d5cd23-2772-4fff-ae70-80cc7837f842"];
        this.getShipmentIdList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getShipmentList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getShipmentDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createNewShipment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pickup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /***************get shipment list ***************/
        this.getShipmentIdList.subscribe(function () {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].PATH1;
            var res = _this.shipmentIdList;
            _this._store.dispatch({ type: "SHIPMENT_ID_LIST", payload: { error: '', data: res } });
            // this.getIdList(pathURL).subscribe(response =>{
            //   console.log(response);
            //   let res=response;
            //   this._store.dispatch({type: "SHIPMENT_ID_LIST",payload:{error:'',data:res}});
            // },err=>{
            //   console.log(err.json());
            // });
        });
        /***************get shipment list ***************/
        this.getShipmentList.subscribe(function (shipmentReqArray) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].PATH1;
            console.log(pathURL);
            console.log(shipmentReqArray);
            _this.getList(pathURL, shipmentReqArray).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "All_SHIPMENT_LIST", payload: { error: '', data: res } });
            }, function (err) {
                console.log(err.json());
            });
        });
        /***************set pickup ***************/
        this.pickup.subscribe(function (pickUp) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].PICKUP;
            console.log(pathURL);
            _this.setPickup(pathURL, pickUp).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
        /***************set addStop ***************/
        this.addStop.subscribe(function (addstop) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].ADDSTOP;
            _this.setAddStop(pathURL, addstop).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
        /***************set delivery ***************/
        this.delivery.subscribe(function (deliveryy) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].DELIVERY;
            _this.setDelivery(pathURL, deliveryy).subscribe(function (response) {
                console.log(response);
                var res = response;
            }, function (err) {
                console.log(err.json());
            });
        });
        /************* get shipment details  *************/
        this.getShipmentDetail.subscribe(function (id) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].DETAIL + "" + id;
            console.log(pathURL);
            _this.getDetails(pathURL).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "SHIPMENT_DETAIL", payload: { error: '', data: res } });
            }, function (err) {
                console.log(err.json());
            });
        });
        /************* create shipment   *************/
        this.createNewShipment.subscribe(function (shipment) {
            var pathURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* path */].CREATESHIPMENT;
            console.log(pathURL);
            _this.createShipment(pathURL, shipment).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "NEW_SHIPMENT", payload: { error: '', data: res } });
            }, function (err) {
                console.log(err.json());
            });
        });
    } // constructor close here
    ShipmentServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  get shipmentId list **********************
    ShipmentServices.prototype.getIdList = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  add Stop **********************
    ShipmentServices.prototype.setAddStop = function (path, value) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  pickUp **********************
    ShipmentServices.prototype.setPickup = function (path, value) {
        console.log(path);
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  delivery **********************
    ShipmentServices.prototype.setDelivery = function (path, value) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: value
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ***********************  get vehicle list **********************
    ShipmentServices.prototype.getList = function (path, shipmentReqArray) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: shipmentReqArray,
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    // ****************** get Vehicle Detail *******************
    ShipmentServices.prototype.getDetails = function (path) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
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
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: shipment
        });
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return ShipmentServices;
}()); // class close
ShipmentServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], ShipmentServices);

var _a, _b, _c;
//# sourceMappingURL=shipment-services.js.map

/***/ }),

/***/ "../../../../../src/service/updat-freight-lane-groups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFreightLaneGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-group-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateFreightLaneGroup = (function () {
    function UpdateFreightLaneGroup(localStorageService, http, _store, fetchFreightGroupDataServices) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightGroupDataServices = fetchFreightGroupDataServices;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].UFLGPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getData.subscribe(function (freightlaneGroup) {
            _this.sendRequest(_this.pathURL, freightlaneGroup).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['statusCode'] = 200) {
                    fetchFreightGroupDataServices.sendRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLGPATH).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LANE GROUP", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].UFLGPATH;
            });
        });
    } // constructor close here
    UpdateFreightLaneGroup.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    UpdateFreightLaneGroup.prototype.sendRequest = function (path, freightLaneGoup) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLaneGoup
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return UpdateFreightLaneGroup;
}()); // class close
UpdateFreightLaneGroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fetch_freight_lane_group_data_service__["a" /* FetchFreightGroupDataServices */]) === "function" && _d || Object])
], UpdateFreightLaneGroup);

var _a, _b, _c, _d;
//# sourceMappingURL=updat-freight-lane-groups.service.js.map

/***/ }),

/***/ "../../../../../src/service/update-freight-lane.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFreightLane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch_freight_lane_data_service__ = __webpack_require__("../../../../../src/service/fetch-freight-lane-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateFreightLane = (function () {
    function UpdateFreightLane(localStorageService, http, _store, fetchFreightLaneDataService) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLaneDataService = fetchFreightLaneDataService;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UFLAPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightlane) {
            _this.sendRequest(_this.pathURL, freightlane).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                if (res['statusCode'] = 200) {
                    fetchFreightLaneDataService.sendRequest(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FLAPATH).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LANE", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UFLAPATH;
            });
        });
    } // constructor close here
    UpdateFreightLane.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    UpdateFreightLane.prototype.sendRequest = function (path, freightLane) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLane
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return UpdateFreightLane;
}()); // class close
UpdateFreightLane = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__fetch_freight_lane_data_service__["a" /* FetchFreightLaneDataService */]) === "function" && _d || Object])
], UpdateFreightLane);

var _a, _b, _c, _d;
//# sourceMappingURL=update-freight-lane.service.js.map

/***/ }),

/***/ "../../../../../src/service/update-freight-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFreightLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__freight_location_service__ = __webpack_require__("../../../../../src/service/freight-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateFreightLocation = (function () {
    function UpdateFreightLocation(localStorageService, http, _store, fetchFreightLocationData) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchFreightLocationData = fetchFreightLocationData;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this._store.select("idStore").subscribe(function (res) {
            _this.pathURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].UFLPATH + res;
        });
        this.getData.subscribe(function (freightLocation) {
            _this.sendRequest(_this.pathURL, freightLocation).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                if (res['statusCode'] = 200) {
                    fetchFreightLocationData.sendRequest(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* path */].FLPATH, freightLocation).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT LOCATION", payload: { error: '', data: res } });
                    });
                }
            });
        });
    } // constructor close here
    UpdateFreightLocation.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    UpdateFreightLocation.prototype.sendRequest = function (path, freightLocation) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightLocation
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return UpdateFreightLocation;
}()); // class close
UpdateFreightLocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__freight_location_service__["a" /* FetchFreightLocationData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__freight_location_service__["a" /* FetchFreightLocationData */]) === "function" && _d || Object])
], UpdateFreightLocation);

var _a, _b, _c, _d;
//# sourceMappingURL=update-freight-location.service.js.map

/***/ }),

/***/ "../../../../../src/service/update-freight-zone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFreightZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch_freight_zone_service__ = __webpack_require__("../../../../../src/service/fetch-freight-zone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateFreightZone = (function () {
    function UpdateFreightZone(localStorageService, http, _store, FetchFreightZone) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.FetchFreightZone = FetchFreightZone;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UFZPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (freightZone) {
            _this.sendRequest(_this.pathURL, freightZone).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res['statusCode'] = 200) {
                    FetchFreightZone.sendRequest(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].FFZPATH, freightZone).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "FREIGHT ZONE", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UFZPATH;
            });
        });
    } // constructor close here
    UpdateFreightZone.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    UpdateFreightZone.prototype.sendRequest = function (path, freightZone) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: freightZone
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return UpdateFreightZone;
}()); // class close
UpdateFreightZone = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__fetch_freight_zone_service__["a" /* FetchFreightZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__fetch_freight_zone_service__["a" /* FetchFreightZone */]) === "function" && _d || Object])
], UpdateFreightZone);

var _a, _b, _c, _d;
//# sourceMappingURL=update-freight-zone.service.js.map

/***/ }),

/***/ "../../../../../src/service/update-transporter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTVQ; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch_transporter_volume_quota_service__ = __webpack_require__("../../../../../src/service/fetch-transporter-volume-quota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateTVQ = (function () {
    function UpdateTVQ(localStorageService, http, _store, fetchTranporterVolumeQuotaDataServices) {
        // this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        // this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        var _this = this;
        this.localStorageService = localStorageService;
        this.http = http;
        this._store = _store;
        this.fetchTranporterVolumeQuotaDataServices = fetchTranporterVolumeQuotaDataServices;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.token = '';
        this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UTVQPATH;
        this.getData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  this.defaultHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.getData.subscribe(function (data) {
            _this.sendRequest(_this.pathURL, data).subscribe(function (response) {
                console.log(response);
                var res = response;
                _this._store.dispatch({ type: "COMMAND", payload: { error: '', data: res } });
                if (res['status'] = 200) {
                    fetchTranporterVolumeQuotaDataServices.sendRequest(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].TVQPATH).subscribe(function (response) {
                        console.log(response);
                        var res = response;
                        _this._store.dispatch({ type: "TRANSPORTER VOLUME QUOTA", payload: { error: '', data: res } });
                    });
                }
                _this.pathURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* path */].UTVQPATH;
            });
        });
    } // constructor close here
    UpdateTVQ.prototype.ngOnDestroy = function () {
    };
    //********************* send Request *****/
    UpdateTVQ.prototype.sendRequest = function (path, data) {
        var authToken = this.localStorageService.get("AUTH_TOKEN_SHIPPER");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var bearerToken = "Bearer " + authToken;
        headers.set('authorization', bearerToken);
        // headers.set('Content-Type','application/json');
        console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: data
        });
        console.log(this.http);
        return this.http.request(path, requestOptions).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    return UpdateTVQ;
}()); // class close
UpdateTVQ = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__fetch_transporter_volume_quota_service__["a" /* FetchTranporterVolumeQuotaDataServices */]) === "function" && _d || Object])
], UpdateTVQ);

var _a, _b, _c, _d;
//# sourceMappingURL=update-transporter.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map