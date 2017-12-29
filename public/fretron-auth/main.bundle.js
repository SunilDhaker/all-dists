webpackJsonp([1,5],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_services__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logout_services__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrganisationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddOrganisationComponent = (function () {
    function AddOrganisationComponent(_store, _loginServices, localStorageService, snackBar, logoutService) {
        var _this = this;
        this._store = _store;
        this._loginServices = _loginServices;
        this.localStorageService = localStorageService;
        this.snackBar = snackBar;
        this.logoutService = logoutService;
        this.unsub_createOrgResponse = null;
        this.unsub_switchOrgToUserResponse = null;
        this.token = this.localStorageService.get("AUTH_TOKEN");
        this.unsub_createOrgResponse = _store.select('addOrgResponse').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log('create organisation response in component');
            console.log(value);
            if (value['error'] === '') {
                console.log('create organisation response in component');
                console.log(value);
                _this.orgUuid = value['res']['organisation.created']['uuid'];
                _this._loginServices.switchOrganisations.emit(_this.orgUuid);
            }
            else {
                _this.openSnackBar("Unable to add Organisation." + value['errorMsg']);
            }
        });
        this.unsub_switchOrgToUserResponse = _store.select('switchOrgResponse').subscribe(function (value) {
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
        if (typeof this.unsub_createOrgResponse != 'undefined' && this.unsub_createOrgResponse != null && this.unsub_createOrgResponse != undefined)
            this.unsub_createOrgResponse.unsubscribe();
        if (typeof this.unsub_switchOrgToUserResponse != 'undefined' && this.unsub_switchOrgToUserResponse != null && this.unsub_switchOrgToUserResponse != undefined)
            this.unsub_switchOrgToUserResponse.unsubscribe();
    };
    AddOrganisationComponent.prototype.addOrganisationToUser = function () {
        var obj = {
            orgId: this.userOrgId,
            organisationName: this.orgName,
            type: this.orgType
        };
        console.log(obj);
        this._loginServices.createOrg.emit(obj);
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
    AddOrganisationComponent.prototype.Logout = function () {
        this.logoutService.logout();
    };
    AddOrganisationComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return AddOrganisationComponent;
}());
AddOrganisationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-organisation',
        template: __webpack_require__(280),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_services__["a" /* LoginServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_logout_services__["a" /* LogoutServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_logout_services__["a" /* LogoutServices */]) === "function" && _e || Object])
], AddOrganisationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-organisation.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_social_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FretronLogin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {config} from "../../../../environments/environment";



var FretronLogin = (function () {
    function FretronLogin(_loginServices, _auth, media, snackBar, _store, localStorageService) {
        var _this = this;
        this._loginServices = _loginServices;
        this._auth = _auth;
        this.media = media;
        this.snackBar = snackBar;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.googleClientID = __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__["a" /* GOOGLE_PROVIDERS */].google.clientId;
        this.isSpinner = false;
        this.mobileNo = '';
        this.countryCode = '+91';
        this.countryCodeList = [{ countryID: 'IND', countryCode: '+91' }];
        this.selectedLanguage = 'en';
        this.unSub_userInfo = null;
        this.supportedLangs = [{ name: 'English', code: 'en' }, { name: 'हिंदी', code: 'hi' }
        ];
        // dispatched from login-services
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                return;
            }
            _this.isSpinner = false;
            console.log(value);
            if (value['error'] == '') {
                if (value['res']['userType'] == 'new') {
                    _this._store.dispatch({ type: "SIGNUP_INFO", payload: null });
                    _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/fretronSignup']));
                }
                else if (value['res']['userType'] == 'existing') {
                    _this._store.dispatch({ type: "SIGNUP_INFO", payload: null });
                    if (value['res']['loginType'] == 'fretron') {
                        _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/validateOTP']));
                    }
                    else if (value['res']['loginType'] == 'google') {
                        var token = value['res']['token'];
                        console.log(token);
                        _this.localStorageService.clearAll();
                        _this.localStorageService.set("AUTH_TOKEN", "" + value['res']['token']);
                        var user = _this.customerDetail(value['res']['token']);
                        var path = 'http://' + window.location.hostname + ':' + window.location.port;
                        console.log(path + "/transporter");
                        if (user['details']['orgType'] == 'TRANSPORTER') {
                            window.location.replace(path + "/transporter");
                        }
                        else if (user['details']['orgType'] == 'FLEET_OWNER') {
                            window.location.replace(path + "/tracknet/vtsdashboard");
                        }
                        else if (user['details']['orgType'] == 'FLEET_OWNER_AGENT') {
                        }
                        else if ((user['details']['orgType'] == undefined) || (user['details']['orgType'] == null)) {
                            _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/addOrganisation'])); // window.location.replace("http://localhost:8080/tracknet/vtsdashboard");
                        }
                    }
                }
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
        });
    } //constructor close
    FretronLogin.prototype.ngOnInit = function () {
        // this.selectedLanguage= (this.localStorageService.get("LANGUAGE"))?(""+this.localStorageService.get("LANGUAGE")):'en';
        // this.selectLang();
        // console.log(this.googleClientID);
        // AppGlobals.GOOGLE_CLIENT_ID = this.googleClientID;
    };
    FretronLogin.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_userInfo != 'undefined' && this.unSub_userInfo != null && this.unSub_userInfo != undefined)
            this.unSub_userInfo.unsubscribe();
    };
    FretronLogin.prototype.selectLang = function () {
        // this._translate.use(this.selectedLanguage);
    };
    FretronLogin.prototype.customerDetail = function (token) {
        var userDetails = {};
        var base64Url = token.split('.')[0];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['userType'] = JSON.parse(window.atob(base64));
        base64Url = token.split('.')[1];
        base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['details'] = JSON.parse(window.atob(base64));
        userDetails['details']['id'] = userDetails['details']['userId'];
        console.log(userDetails);
        return userDetails;
    };
    FretronLogin.prototype.checkExistingUser = function () {
        if (this.fieldsValidation()) {
            var reqObj = {
                loginType: "fretron",
                mobileNumber: "" + this.mobileNo
            };
            console.log(reqObj);
            this._loginServices.getUserInfo.emit(reqObj); // call api for checking user existing or not
        }
    }; // login methods close
    FretronLogin.prototype.fieldsValidation = function () {
        if (this.mobileNo == '' || this.mobileNo == undefined) {
            console.log("please fill mobile no");
            this.openSnackBar("please fill mobile no");
            return false;
        }
        return true;
    };
    FretronLogin.prototype.loginWithGoogle = function () {
        var _this = this;
        console.log("google auth");
        // this.isSpinner=true;
        this._auth.login('google').subscribe(function (data) {
            // this.isSpinner=false;
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
            _this._loginServices.getUserInfo.emit(reqObj); // call api for checking user existing or not
        }, function (err) {
            _this.isSpinner = false;
            console.log(err);
        });
    };
    FretronLogin.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return FretronLogin;
}()); // class close
FretronLogin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fretron-login',
        template: __webpack_require__(281),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_login_services__["a" /* LoginServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_social_login__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object])
], FretronLogin);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=fretron-login.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FretronSignup; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FretronSignup = (function () {
    function FretronSignup(_loginServices, snackBar, localStorageService, _store, _router) {
        // let mob =this.localStorageService.get("USER-MOB-NO");
        // this.mobileNo =""+mob;
        // this.startTimer(300);
        var _this = this;
        this._loginServices = _loginServices;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this._store = _store;
        this._router = _router;
        this.name = '';
        this.email = '';
        this.mobileNo = '';
        this.userType = '';
        this.isResend = false;
        this.isSpinner = false;
        this.loginType = '';
        this.min = 5;
        this.sec = 0;
        this.unSub_userInfo = null;
        this.unSub_signupInfo = null;
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                _this.cancel();
                return;
            }
            console.log(value);
            if (value['error'] == '' && value['res']['userType'] == 'new') {
                _this.openSnackBar("Please Signup first");
                _this.loginType = value['res']['loginType'];
                if (_this.loginType == 'google') {
                    _this.email = value['res']['email'];
                    _this.name = value['res']['name'];
                }
                else if (_this.loginType == 'fretron') {
                    _this.mobileNo = value['res']['mobileNumber'];
                }
            }
            // this.userType =value['res']['userType'];
        });
        this.unSub_signupInfo = this._store.select('signupInfo').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['error'] == '') {
                _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/validateOTP']));
            }
        });
    } // close constructor
    FretronSignup.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_userInfo != 'undefined' && this.unSub_userInfo != null && this.unSub_userInfo != undefined)
            this.unSub_userInfo.unsubscribe();
        if (typeof this.unSub_signupInfo != 'undefined' && this.unSub_signupInfo != null && this.unSub_signupInfo != undefined)
            this.unSub_signupInfo.unsubscribe();
    };
    FretronSignup.prototype.ngOnInit = function () {
    };
    FretronSignup.prototype.userSignup = function () {
        console.log("sign up");
        if (this.fieldsValidation()) {
            var obj = {
                "onBoardingType": this.loginType,
                "email": this.email,
                "mobileNumber": this.mobileNo,
                "name": this.name,
                "otpType": 'signup'
            };
            // this._store.dispatch({type: "SIGNUP", payload:obj});
            this._loginServices.getSignupOTP.emit(obj); // call api for checking user existing or not
            console.log(obj);
        }
    };
    FretronSignup.prototype.fieldsValidation = function () {
        if (this.name == '' || this.name == undefined) {
            console.log("please fill Name");
            return false;
        }
        if ((this.email == '' || this.email == undefined) && this.loginType == 'google') {
            console.log("please fill Email");
            return false;
        }
        if (this.mobileNo == '' || this.mobileNo == undefined) {
            console.log("please fill Mobile No");
            return false;
        }
        return true;
    };
    FretronSignup.prototype.cancel = function () {
        this._store.dispatch({ type: "USER_INFO", payload: null });
        this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/fretronLogin']));
    };
    FretronSignup.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return FretronSignup;
}()); //class close
FretronSignup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fretron-signup',
        template: __webpack_require__(282),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_login_services__["a" /* LoginServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], FretronSignup);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=fretron-signup.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateOTP; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValidateOTP = (function () {
    function ValidateOTP(_loginServices, snackBar, localStorageService, _store, _router) {
        // let mob =this.localStorageService.get("USER-MOB-NO");
        // this.mobileNo =""+mob;
        // this.startTimer(300);
        var _this = this;
        this._loginServices = _loginServices;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this._store = _store;
        this._router = _router;
        this.otp = '';
        this.userInfo = {};
        this.signupInfo = {};
        this.isResend = false;
        this.isSpinner = false;
        this.min = 5;
        this.sec = 0;
        this.unSub_userInfo = null;
        this.unSub_signupInfo = null;
        this.unSub_resendOTP = null;
        this.unSub_token = null;
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                _this._store.dispatch({ type: "USER_INFO", payload: null });
                _this._store.dispatch({ type: "SIGNUP_INFO", payload: null });
                _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/fretronLogin']));
                return;
            }
            // console.log(value);
            if (value['error'] == '') {
                _this.startTimer(300);
                _this.openSnackBar("OTP send to your Mobile Number");
                _this.userInfo = value['res'];
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
            console.log(_this.userInfo);
        });
        this.unSub_signupInfo = this._store.select('signupInfo').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['error'] == '') {
                _this.signupInfo = value['res'];
                if (_this.userInfo['loginType'] == 'google') {
                    _this.userInfo['mobileNumber'] = "" + _this.signupInfo['mobileNumber'];
                }
                else {
                    _this.openSnackBar(value['errorMsg']);
                }
                _this.openSnackBar('OTP send to your mobile');
                console.log(_this.signupInfo);
            }
        });
        this.unSub_resendOTP = this._store.select('resendOTP').subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value['error'] == '') {
                _this.openSnackBar('OTP send to your mobile');
            }
            else {
                _this.openSnackBar('OTP not send to your mobile');
            }
        });
        this.unSub_token = this._store.select('token').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value['res']);
            if (value['error'] == '') {
                console.log(value['res']['token']);
                _this.localStorageService.set("AUTH_TOKEN", "" + value['res']['token']);
                var user = _this.customerDetail(value['res']['token']);
                console.log(user);
                console.log("ORG TYPE ===> ");
                console.log(user['details']['orgType']);
                console.log(window.location.hostname);
                console.log(window.location.protocol);
                console.log(window.location.href);
                console.log(window.location.port);
                var path = 'http://' + window.location.hostname + ':' + window.location.port;
                console.log(path + "/transporter");
                if (user['details']['orgType'] == 'TRANSPORTER') {
                    window.location.replace(path + "/transporter");
                }
                else if (user['details']['orgType'] == 'FLEET_OWNER') {
                    window.location.replace(path + "/tracknet/vtsdashboard");
                }
                else if (user['details']['orgType'] == 'FLEET_OWNER_AGENT') {
                }
                else if ((user['details']['orgType'] == undefined) || (user['details']['orgType'] == null)) {
                    _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/addOrganisation'])); // window.location.replace("http://localhost:8080/tracknet/vtsdashboard");
                }
            }
            else {
                _this.openSnackBar(value['errorMsg']);
            }
            // console.log(this.userInfo);
        });
    } // close constructor
    ValidateOTP.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_userInfo != 'undefined' && this.unSub_userInfo != null && this.unSub_userInfo != undefined)
            this.unSub_userInfo.unsubscribe();
        if (typeof this.unSub_signupInfo != 'undefined' && this.unSub_signupInfo != null && this.unSub_signupInfo != undefined)
            this.unSub_signupInfo.unsubscribe();
        if (typeof this.unSub_resendOTP != 'undefined' && this.unSub_resendOTP != null && this.unSub_resendOTP != undefined)
            this.unSub_resendOTP.unsubscribe();
        if (typeof this.unSub_token != 'undefined' && this.unSub_token != null && this.unSub_token != undefined)
            this.unSub_token.unsubscribe();
    };
    ValidateOTP.prototype.ngOnInit = function () {
    };
    ValidateOTP.prototype.customerDetail = function (token) {
        var userDetails = {};
        var base64Url = token.split('.')[0];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['userType'] = JSON.parse(window.atob(base64));
        base64Url = token.split('.')[1];
        base64 = base64Url.replace('-', '+').replace('_', '/');
        userDetails['details'] = JSON.parse(window.atob(base64));
        userDetails['details']['id'] = userDetails['details']['userId'];
        console.log(userDetails);
        return userDetails;
    };
    ValidateOTP.prototype.startTimer = function (timeInSec) {
        var _this = this;
        this.isResend = false;
        var tempTime = timeInSec - 1;
        this.min = Math.floor(tempTime / 60);
        this.sec = Math.floor(tempTime % 60);
        this.stopOtpTimer = setInterval(function () {
            tempTime = tempTime - 1;
            _this.min = Math.floor(tempTime / 60);
            _this.sec = Math.floor(tempTime % 60);
            if (tempTime == 0) {
                clearInterval(_this.stopOtpTimer);
                _this.isResend = true;
            }
        }, 1000);
    };
    ValidateOTP.prototype.fieldsValidation = function () {
        if (this.userInfo['mobileNumber'] == '' || this.userInfo['mobileNumber'] == undefined) {
            console.log("please fill Mobile No");
            this.openSnackBar("please fill Mobile No");
            return false;
        }
        if (this.otp == '' || this.otp == undefined) {
            this.openSnackBar('OTP fill OTP');
            return false;
        }
        return true;
    };
    ValidateOTP.prototype.cancel = function () {
        // this._store.dispatch({type: "USER_INFO", payload:null});
        // this._store.dispatch(go(['/fretronLogin']));
    };
    ValidateOTP.prototype.login = function () {
        // let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImFkbWluIjp0cnVlfQ.eyJpZCI6IjkxZDgwNzAwLTNkYzgtNDdmYS1iOTdjLTExYWE3MGRkZmY1MCIsImVtYWlsIjoic3VuaWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDg1NDMyOTUxIiwibmFtZSI6IlN1bmlsIiwiaWF0IjoxNTA5MzQ3MDI3fQ.P1-58MzIy39eR9kddIOgkvQy6JQDFP5MutB2i4eulMI';
        // this.localStorageService.set("TOKEN",token);
        // console.log(this._router.url);
        // window.location.replace("http://localhost:8080/tracknet/vtsdashboard");
        if (this.userInfo['userType'] == 'new') {
            if (this.signupInfo != null) {
                var signupObj = {
                    "onBoardingType": this.signupInfo['onBoardingType'],
                    "mobileNumber": "" + this.signupInfo['mobileNumber'],
                    "name": this.signupInfo['name'],
                    "otp": this.otp
                };
                if (this.signupInfo['email'] != '') {
                    signupObj["email"] = this.signupInfo['email'];
                }
                console.log(signupObj);
                this._loginServices.signup.emit(signupObj); // user signup
            }
        }
        else if (this.userInfo['userType'] == 'existing') {
            if (this.fieldsValidation) {
                var loginObj = {
                    mobileNumber: this.userInfo['mobileNumber'],
                    otp: this.otp,
                };
                this._loginServices.login.emit(loginObj); // user login
            }
        }
    }; // close login
    ValidateOTP.prototype.resendOTP = function () {
        console.log("resend");
        if (this.userInfo['mobileNumber'] == '' || this.userInfo['mobileNumber'] == undefined) {
            console.log("please fill Mobile No");
            return false;
        }
        this.startTimer(300);
        var otpType = '';
        if (this.userInfo['userType'] == 'new') {
            otpType = 'signup';
        }
        else if (this.userInfo['userType'] == 'existing') {
            otpType = 'login';
        }
        var obj = {
            mobileNumber: this.userInfo['mobileNumber'],
            otpType: otpType,
        };
        this._loginServices.resendOtp.emit(obj); // call api for checking user existing or not
    }; // close resend otp
    ValidateOTP.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 3000 });
    };
    return ValidateOTP;
}());
ValidateOTP = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validate-otp',
        template: __webpack_require__(283),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_login_services__["a" /* LoginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_login_services__["a" /* LoginServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ValidateOTP);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=validate-otp.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutServices = (function () {
    function LogoutServices(localStorageService, _store) {
        this.localStorageService = localStorageService;
        this._store = _store;
    } // constructor close here
    LogoutServices.prototype.ngOnDestroy = function () {
    };
    LogoutServices.prototype.logout = function () {
        console.log(localStorage);
        this.localStorageService.clearAll();
        // this._store.dispatch({type: "CUSTOMER_DETAILS", payload:null});
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], LogoutServices);

var _a, _b;
//# sourceMappingURL=logout-services.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOOGLE_PROVIDERS; });
/* unused harmony export BASE_IP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paths; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
// export const config = {
//     GOOGLE_AUTH_ID :'192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
// };
var GOOGLE_PROVIDERS = {
    "google": {
        "clientId": '192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
    }
};
var BASE_IP = {
    IP: 'http://apis.fretron.com',
    ROHIT_IP: 'http://192.168.0.103',
    TEST_IP: 'http://192.168.0.153',
};
// export const paths = {
//   "LOGIN_PATH" :"http://192.168.0.103:8099/user/login/forany",
//   "SIGN_OTP_PATH" :"http://192.168.0.103:8099/user/sendotp/forany?mobileNumber=",
//   "SIGNUP_PATH" :"http://192.168.0.103:8099/user/create",
//   "CONFIRM_LOGIN_PATH" :"http://192.168.0.103:8099/user/authentication?mobileNumber=",
//   "CREATE_ORGANISATION_PATH" :"http://192.168.0.103:8086/organisation/create",
//   "SWITCH_ORG_PATH":"http://192.168.0.103:8099/user/switchorg?orgId=",
// };
// export const paths = {
//   "LOGIN_PATH" :BASE_IP.IP+"/user/login/forany",
//   // "LOGIN_PATH" :BASE_IP.IP+"/user/login",
//   "SIGN_OTP_PATH" :BASE_IP.IP+"/user/sendotp?mobileNumber=",
//   "SIGNUP_PATH" : BASE_IP.IP+"/user/create",
//   "CONFIRM_LOGIN_PATH" : BASE_IP.IP+"/user/authentication?mobileNumber=",
//   "CREATE_ORGANISATION_PATH" : BASE_IP.IP+"/organisation/create",
//   "SWITCH_ORG_PATH": BASE_IP.IP+"/user/switchorg?orgId=",
// };
var paths = {
    "LOGIN_PATH": BASE_IP.TEST_IP + "/user/login/forany",
    "SIGN_OTP_PATH": BASE_IP.TEST_IP + "/user/sendotp?mobileNumber=",
    "SIGNUP_PATH": BASE_IP.TEST_IP + "/user/create",
    "CONFIRM_LOGIN_PATH": BASE_IP.TEST_IP + "/user/authentication?mobileNumber=",
    "CREATE_ORGANISATION_PATH": BASE_IP.TEST_IP + "/organisation/create",
    "SWITCH_ORG_PATH": BASE_IP.TEST_IP + "/user/switchorg?orgId=",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 170;


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(207);



// if (environment.production) {
//   enableProdMode();
// }
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(() => {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('worker-basic.min.js');
//     }
//   })
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router, _store) {
        this.router = router;
        this._store = _store;
        // this._store.select('router').subscribe(value => {
        //   // console.log(value);
        //
        //   this.actionService.addAction(value);
        //
        // });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammer_timejs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammer_timejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammer_timejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__router_module_app_router_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_router_store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reducers_main_store__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_social_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fretron_login_fretron_login_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_fretron_signup_fretron_signup_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_login_services__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_validate_otp_validate_otp_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_add_organisation_add_organisation_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_logout_services__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_fretron_login_fretron_login_component__["a" /* FretronLogin */],
            __WEBPACK_IMPORTED_MODULE_19__components_fretron_signup_fretron_signup_component__["a" /* FretronSignup */],
            __WEBPACK_IMPORTED_MODULE_21__components_validate_otp_validate_otp_component__["a" /* ValidateOTP */],
            __WEBPACK_IMPORTED_MODULE_22__components_add_organisation_add_organisation_component__["a" /* AddOrganisationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__router_module_app_router_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            // MaterialModule,
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_15__reducers_main_store__["a" /* mainReducer */]),
            __WEBPACK_IMPORTED_MODULE_14__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                // apiKey: 'AIzaSyD2ufpAUX67jwbWByvEeWX4Iee44MZhuR0'
                apiKey: 'AIzaSyBCRowVqghQTO8iJDgOc4QY-GlFwsn85_I',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_16_angular2_social_login__["a" /* Angular2SocialLoginModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MdIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */],
            // MdInputModule,
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MdInputContainer */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // AuthenticationServices,
            // DeviceServices,
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MdProgressSpinner */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MdProgressBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MdTab */],
            __WEBPACK_IMPORTED_MODULE_11__agm_core__["b" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_20__services_login_services__["a" /* LoginServices */],
            __WEBPACK_IMPORTED_MODULE_23__services_logout_services__["a" /* LogoutServices */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//FOR google auth // (login with google)
__WEBPACK_IMPORTED_MODULE_16_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(__WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* GOOGLE_PROVIDERS */]);
//close google auth // (login with google)
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userInfo;
/* harmony export (immutable) */ __webpack_exports__["b"] = signupInfo;
/* harmony export (immutable) */ __webpack_exports__["c"] = resendOTP;
/* harmony export (immutable) */ __webpack_exports__["d"] = token;
/* harmony export (immutable) */ __webpack_exports__["e"] = addOrgResponse;
/* harmony export (immutable) */ __webpack_exports__["f"] = switchOrgResponse;
function userInfo(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "USER_INFO": {
            return action.payload;
        }
        default:
            return state;
    }
}
function signupInfo(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "SIGNUP_INFO": {
            return action.payload;
        }
        default:
            return state;
    }
}
function resendOTP(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "RESENDOTP_INFO": {
            return action.payload;
        }
        default:
            return state;
    }
}
function token(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "TOKEN": {
            return action.payload;
        }
        default:
            return state;
    }
}
function addOrgResponse(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "ADD_ORG_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
function switchOrgResponse(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "SWITCH_ORG_RESPONSE": {
            return action.payload;
        }
        default:
            return state;
    }
}
//# sourceMappingURL=google-auth-store.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_auth_store__ = __webpack_require__(208);
/* unused harmony export reducers */
/* unused harmony export rootReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = mainReducer;



var reducers = {
    userInfo: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["a" /* userInfo */],
    signupInfo: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["b" /* signupInfo */],
    resendOTP: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["c" /* resendOTP */],
    token: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["d" /* token */],
    addOrgResponse: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["e" /* addOrgResponse */],
    switchOrgResponse: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["f" /* switchOrgResponse */]
};
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_core__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* combineReducers */])(reducers);
function mainReducer(state, action) {
    return rootReducer(state, action);
}
//# sourceMappingURL=main-store.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fretron_login_fretron_login_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fretron_signup_fretron_signup_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_validate_otp_validate_otp_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_organisation_add_organisation_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', redirectTo: 'fretronLogin', pathMatch: 'full' },
    { path: 'fretronLogin', component: __WEBPACK_IMPORTED_MODULE_2__components_fretron_login_fretron_login_component__["a" /* FretronLogin */] },
    { path: 'fretronSignup', component: __WEBPACK_IMPORTED_MODULE_3__components_fretron_signup_fretron_signup_component__["a" /* FretronSignup */] },
    { path: 'validateOTP', component: __WEBPACK_IMPORTED_MODULE_4__components_validate_otp_validate_otp_component__["a" /* ValidateOTP */] },
    { path: 'addOrganisation', component: __WEBPACK_IMPORTED_MODULE_5__components_add_organisation_add_organisation_component__["a" /* AddOrganisationComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOOGLE_PROVIDERS; });
/* unused harmony export BASE_IP */
/* unused harmony export paths */
var environment = {
    production: false,
};
// export const config = {
//     GOOGLE_AUTH_ID :'192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
// };
var GOOGLE_PROVIDERS = {
    "google": {
        "clientId": '192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
    }
};
var BASE_IP = {
    IP: 'http://apis.fretron.com',
};
var paths = {
    "LOGIN_PATH": BASE_IP.IP + "/user/login",
    "SIGN_OTP_PATH": BASE_IP.IP + "/user/sendotp?mobileNumber=",
    "SIGNUP_PATH": BASE_IP.IP + "/user/create",
    "CONFIRM_LOGIN_PATH": BASE_IP.IP + "/user/authentication?mobileNumber=",
    "CREATE_ORGANISATION_PATH": BASE_IP.IP + "/organisation/create",
    "SWITCH_ORG_PATH": BASE_IP.IP + "/user/switchorg?orgId=",
};
// export const paths = {
//   "LOGIN_PATH" :BASE_IP.TEST_IP+"/user/login/forany",
//   "SIGN_OTP_PATH" :BASE_IP.TEST_IP+"/user/sendotp?mobileNumber=",
//   "SIGNUP_PATH" : BASE_IP.TEST_IP+"/user/create",
//   "CONFIRM_LOGIN_PATH" : BASE_IP.TEST_IP+"/user/authentication?mobileNumber=",
//   "CREATE_ORGANISATION_PATH" : BASE_IP.TEST_IP+"/organisation/create",
//   "SWITCH_ORG_PATH": BASE_IP.TEST_IP+"/user/switchorg?orgId=",
// };
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "md-card\n{\n  margin: 10%;\n}\n\n.main{\n  min-width: 200px;\n  max-width: 390px;\n  margin: 50px auto;\n  padding: 8px\n}\n\nbutton:hover {\n  opacity: 0.7;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 20px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".main{\n  min-width: 200px;\n  max-width: 300px;\n  margin: 50px auto;\n  padding: 8px\n}\n\nbutton:hover {\n  opacity: 0.7;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 20px 0;\n}\n\n/*button {*/\n  /*color:#ffffff;*/\n  /*background-color:#1E88E5;*/\n/*}*/\n\n\n.label-quote{\n  width: 100%;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  color:cadetblue;\n}\n\n.add-button{\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0px;\n  min-width: 0px;\n  font-size: 18px;\n  border-radius: 30px;\n  box-shadow: 1px 4px 17px darkslategrey;\n}\n\n.language{\n  margin-right: 1px;\n}\n\n.language  >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n\n.my-select {\n  margin-top: 11px;\n  margin-right: 5px;\n}\n/*  */\n.my-select >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n.my-hr{\n  width: 28px;\n  border-style: ridge;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".main{\n  min-width: 200px;\n  max-width: 300px;\n  margin: 50px auto;\n  padding: 8px\n}\n\nbutton:hover {\n  opacity: 0.7;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 20px 0;\n}\n\n/*button {*/\n/*color:#ffffff;*/\n/*background-color:#1E88E5;*/\n/*}*/\n\n\n.label-quote{\n  width: 100%;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  color:cadetblue;\n}\n\n.add-button{\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0px;\n  min-width: 0px;\n  font-size: 18px;\n  border-radius: 30px;\n  box-shadow: 1px 4px 17px darkslategrey;\n}\n\n.language{\n  margin-right: 1px;\n}\n\n.language  >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n\n.my-select {\n  margin-top: 11px;\n  margin-right: 5px;\n}\n/*  */\n.my-select >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n\n.resend-otp-button{\n  width: 33px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0px;\n  min-width: 0px;\n  font-size: 18px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 9px darkslategrey;\n  color: #46465f;\n  background-color:whitesmoke;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".main{\n  min-width: 200px;\n  max-width: 300px;\n  margin: 50px auto;\n  padding: 8px\n}\n\nbutton:hover {\n  opacity: 0.7;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 20px 0;\n}\n\n/*button {*/\n/*color:#ffffff;*/\n/*background-color:#1E88E5;*/\n/*}*/\n\n\n.label-quote{\n  width: 100%;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  color:cadetblue;\n}\n\n.add-button{\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0px;\n  min-width: 0px;\n  font-size: 18px;\n  border-radius: 30px;\n  box-shadow: 1px 4px 17px darkslategrey;\n}\n\n.language{\n  margin-right: 1px;\n}\n\n.language  >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n\n.my-select {\n  margin-top: 11px;\n  margin-right: 5px;\n}\n/*  */\n.my-select >>> .mat-select-trigger{\n  min-width: 68px !important;\n  font-size: 13px;\n  height: 28px;\n}\n\n\n.resend-otp-button{\n  width: 33px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0px;\n  min-width: 0px;\n  font-size: 18px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 9px darkslategrey;\n  color: #46465f;\n  background-color:whitesmoke;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<md-card>\n  <md-card-content>\n    <div class=\"imgcontainer\"  style=\"text-align: center\">\n      <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n    </div>\n    <span><b>You don't have any organisation yet.</b><br> Kindly register any your organisation here: </span>\n\n    <!--<form (ngSubmit)=\"addOrganisationToUser()\" #addOgForm=\"ngForm\">-->\n\n      <div>\n        <div fxLayout=\"row\" >\n          <div fxFlex=\"100\">\n          <md-input-container style=\"width: 100%\" >\n            <input type=\"text\" value=\" \" name=\"orgName\" placeholder=\"Organisation Name\"  mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"orgName\" required>\n          </md-input-container>\n          </div>\n        </div>\n\n        <div fxLayout=\"row\" >\n          <div fxFlex=\"100\">\n          <md-input-container style=\"width: 100%\" >\n            <input type=\"text\" value=\" \" name=\"OrganisationId\" placeholder=\"Organisation Id\"  mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"userOrgId\" required>\n          </md-input-container>\n          </div>\n        </div>\n\n        <div fxLayout=\"row\" >\n          <div fxFlex=\"100\">\n          <md-select [(ngModel)]=\"orgType\" value=\" \" style=\"width: 100%\" name=\"OrganisationType\">\n            <md-option value=\"TRANSPORTER\">TRANSPORTER</md-option>\n            <md-option value=\"FLEET_OWNER\">FLEET OWNER</md-option>\n            <md-option value=\"FLEET_OWNER_AGENT\">FLEET OWNER AGENT</md-option>\n          </md-select>\n        </div>\n        </div>\n        <div style=\"text-align: center;padding: 15px;\">\n\n          <button style=\"width: 45%;\" mdTooltip= \"{{'Logout'}}\"  md-raised-button color=\"primary\" (click)=\"Logout()\" >\n            Logout\n          </button>\n          <!--<button mdTooltip=\"Register here\"  style=\"margin-top: 20px;width: 100%;\" md-raised-button  (click)=\"logout()\">Logout</button>-->\n          <button style=\"width: 45%;\" name=\"add\"  type=\"submit\" color=\"primary\"  mdTooltip=\"{{'Add Organisation'}}\"  md-raised-button  (click)=\"addOrganisationToUser()\" >\n            Add\n          </button>\n\n\n        </div>\n      </div>\n     </md-card-content>\n</md-card>\n</div>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <md-card >\n    <div class=\"imgcontainer\" >\n      <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n    </div>\n\n    <div fxLayout=\"row\" >\n      <button (click)=\"loginWithGoogle()\" style=\"width: 100%;background-color:#f3eded75;\" md-button>\n        Login with Google\n      </button>\n    </div>\n\n    <form (ngSubmit)=\"checkExistingUser()\" #loginForm=\"ngForm\">\n\n      <div>\n        <div style=\"padding:20px 10px 0px 20px;text-align:center\" fxLayout=\"row\" >\n          <hr class=\"my-hr\" >\n            <span class=\"fade-sub-header-text\" >OR</span>\n          <hr class=\"my-hr\" >\n        </div>\n        <div fxLayout=\"row\" >\n          <md-input-container style=\"width: 100%\" >\n            <input type=\"number\" min=\"0\" mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"mobileNo\"\n                   onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\n                   pattern=\"[0-9]{10}\" placeholder=\"{{'Enter Mobile Number'}}\" name=\"mobileNo\" id=\"mobileNo\" required>\n          </md-input-container>\n        </div>\n        <div style=\"text-align: center;padding: 15px;\">\n          <!--<button mdTooltip=\"Register here\"  style=\"margin-top: 20px;width: 100%;\" md-raised-button  (click)=\"login()\">LOGIN</button>-->\n          <button style=\"width: 45%;\" name=\"go\"  type=\"submit\"  mdTooltip=\"{{'send OTP'}}\"  md-raised-button  [disabled]=\"!loginForm.form.valid\">\n            Next\n          </button>\n        </div>\n      </div>\n    </form>\n  </md-card>\n</div>\n<div class=\"footer-text\">\n  <!--<a href=\"#\">{{'Help' | translate }}</a>-->\n</div>\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <md-card >\n    <form (ngSubmit)=\"userSignup()\" #signupForm=\"ngForm\" >\n      <div class=\"imgcontainer\" >\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n      </div>\n\n      <div>\n        <div class=\"fade-header\" style=\"text-align: center;margin-bottom: 30px\" >\n          <span>Create New Account</span>\n        </div>\n\n        <div fxLayout=\"row\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input  mdTooltip=\"{{'This field is required'}}\" value=\" \" mdInput [(ngModel)]=\"name\" placeholder=\"{{'Enter Name'}}\" [disabled]=\"loginType =='google'\"  name=\"name\" id=\"name\" required>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input  mdTooltip=\"{{'This field is required'}}\" value=\" \" mdInput [(ngModel)]=\"email\" placeholder=\"{{'Enter Email'}}\" [disabled]=\"loginType =='google'\" name=\"email\" id=\"email\">\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input [disabled]=\"loginType =='fretron'\" type=\"number\" min=\"0\" mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"mobileNo\"\n                   onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\n                   pattern=\"[0-9]{10}\" placeholder=\"{{'Enter Mobile Number'}}\" name=\"mobileNo\" id=\"mobileNo\" required>\n          </md-input-container>\n        </div>\n        <div fxLayout=\"row\" style=\"margin-top:15px;\" >\n          <button style=\"margin-left: auto\" name=\"cancel\" type=\"reset\"  (click)=\"cancel()\"  mdTooltip=\"{{'cancel'}}\"  md-button >\n            cancel\n          </button>\n          <button *ngIf=\"!(loginType ==undefined ||loginType =='' || loginType ==null)\" name=\"ok\"  type=\"submit\"  mdTooltip=\"{{'ok'}}\"  md-button  [disabled]=\"!signupForm.form.valid\">\n            Signup\n          </button>\n        </div>\n      </div>\n    </form>\n  </md-card>\n</div>\n\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <!-- ******************* if user already exist *************************************-->\n  <md-card >\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <div class=\"imgcontainer\" >\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n      </div>\n\n      <div>\n        <div style=\"text-align: center;margin-bottom: 30px;display:grid\" >\n          <span  class=\"fade-header\">Please Enter OTP</span>\n          <span style=\"color: #D0D0D0;font-size: 15px;margin-top: 5px\" >+91 {{userInfo['mobileNumber']}}</span>\n        </div>\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container  class=\"login-text-color\" style=\"width: 100%\"  >\n            <input autocomplete=\"off\"  mdTooltip=\"{{'This field is required'}}\" mdInput [(ngModel)]=\"otp\"  placeholder=\"{{'Enter OTP'}}\" name=\"OTP\" required>\n          </md-input-container>\n\n          <button *ngIf=\"isResend && (userInfo['mobileNumber'] != null)\" (click)=\"resendOTP()\"  style=\"margin-left:auto\"   class=\"resend-otp-button\"  mdTooltip=\"{{'Resend OTP'}}\" md-raised-button  >\n            <i class=\"fa fa-rotate-right\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div style=\"display: flex;height: 20px\" >\n          <span *ngIf=\"!isResend\" style=\"margin-right:auto\" class=\"sub-header-text\" ><b>Resend OTP in Next</b>- {{min}} min:{{sec}} sec</span>\n        </div>\n        <div style=\"margin-top:15px;text-align: center\" >\n          <button  name=\"login\"  type=\"submit\"  mdTooltip=\"{{'Login'}}\"  md-raised-button  [disabled]=\"!loginForm.form.valid || userInfo['mobileNumber']  == null\">\n            Login\n          </button>\n        </div>\n      </div>\n    </form>\n  </md-card>\n  <!-- ******************* close if user already exist *************************************-->\n\n</div>\n\n<div class=\"footer-text\">\n  <!--<a href=\"#\">{{'Help' }}</a>-->\n</div>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServices; });
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
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.getUserInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getSignupOTP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.resendOtp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.signup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.login = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addUserOrganisation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createOrg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.switchOrganisations = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.token = this.localStorageService.get("AUTH_TOKEN");
        //************ get user info ,check user is exix=st or not ***************************************************
        this.getUserInfo.subscribe(function (reqObj) {
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].LOGIN_PATH;
            _this.getUser(path, reqObj).subscribe(function (response) {
                console.log(response);
                var res = response;
                if (res.status >= 200 && res.status < 300) {
                    _this._store.dispatch({ type: "USER_INFO", payload: { error: '', res: res } });
                }
                else {
                    _this._store.dispatch({ type: "USER_INFO", payload: { error: 'X', errorMsg: res.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "USER_INFO", payload: { error: 'X', errorMsg: 'error' } });
            });
        });
        //************ signup ***************************************************
        this.getSignupOTP.subscribe(function (signupObj) {
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].SIGN_OTP_PATH + signupObj['mobileNumber'] + "&otpType=" + signupObj['otpType'];
            console.log(path);
            _this.getOTPForSignup(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SIGNUP_INFO", payload: { error: '', res: signupObj } });
                }
                else {
                    _this._store.dispatch({ type: "SIGNUP_INFO", payload: { error: 'X', errorMsg: "error " + response['error'] } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SIGNUP_INFO", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        //************ resend ***************************************************
        this.resendOtp.subscribe(function (resendObj) {
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].SIGN_OTP_PATH + resendObj['mobileNumber'] + "&otpType=" + resendObj['otpType'];
            console.log(path);
            _this.getOTPForSignup(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "RESENDOTP_INFO", payload: { error: '' } });
                }
                else {
                    _this._store.dispatch({ type: "RESENDOTP_INFO", payload: { error: 'X', errorMsg: "error " + response['error'] } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "RESENDOTP_INFO", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        //************ signup ***************************************************
        this.signup.subscribe(function (signupObj) {
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].SIGNUP_PATH;
            console.log(path);
            _this.userSignup(path, signupObj).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "TOKEN", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "TOKEN", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "TOKEN", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        //************ login ***************************************************
        this.login.subscribe(function (loginObj) {
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].CONFIRM_LOGIN_PATH + loginObj['mobileNumber'] + "&otp=" + loginObj['otp'];
            ;
            console.log(path);
            _this.userLogin(path).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "TOKEN", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "TOKEN", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "TOKEN", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        //************ create Organisation ***************************************************
        this.createOrg.subscribe(function (addOrgObj) {
            _this.token = _this.localStorageService.get("AUTH_TOKEN");
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].CREATE_ORGANISATION_PATH;
            console.log(path);
            _this.createOrganisation(path, addOrgObj).subscribe(function (response) {
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
                _this._store.dispatch({ type: "ADD_ORG_RESPONSE", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
        //************ add Organisation to user ***************************************************
        this.switchOrganisations.subscribe(function (orgId) {
            _this.token = _this.localStorageService.get("AUTH_TOKEN");
            var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* paths */].SWITCH_ORG_PATH + orgId;
            console.log(path);
            _this.switchOrganisation(path, orgId).subscribe(function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    _this._store.dispatch({ type: "SWITCH_ORG_RESPONSE", payload: { error: '', res: response } });
                }
                else {
                    _this._store.dispatch({ type: "SWITCH_ORG_RESPONSE", payload: { error: 'X', errorMsg: response.error } });
                }
            }, function (err) {
                console.log(err);
                console.log(err.json());
                _this._store.dispatch({ type: "SWITCH_ORG_RESPONSE", payload: { error: 'X', errorMsg: 'http error' } });
            });
        });
    } // constructor close here
    LoginServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  token authorization  **********************
    LoginServices.prototype.getUser = function (path, reqObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: reqObj,
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
    // ***********************  token authorization  **********************
    LoginServices.prototype.userSignup = function (path, reqObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: reqObj,
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
    LoginServices.prototype.createOrganisation = function (path, addOrgObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
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
    LoginServices.prototype.switchOrganisation = function (path, switchOrgId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        console.log(this.token);
        console.log(this.token);
        var bearerToken = "Bearer " + this.token;
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', bearerToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
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
    // *********************** send otp when user signup********** caled by signupOTP and resend otp************
    LoginServices.prototype.getOTPForSignup = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
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
    // *********************** login when user exist************
    LoginServices.prototype.userLogin = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
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
    return LoginServices;
}()); // class close
LoginServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], LoginServices);

var _a, _b, _c;
//# sourceMappingURL=login-services.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.bundle.js.map