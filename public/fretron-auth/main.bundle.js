webpackJsonp([2,5],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_social_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_google_auth_services__ = __webpack_require__(133);
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









var FretronLogin = (function () {
    function FretronLogin(_gAuth, _auth, media, snackBar, _store, localStorageService) {
        // let token = this.localStorageService.get("TOKEN");
        // console.log(token);
        // if(token!=null && token !=undefined){
        //   this._store.dispatch(go(['/vtsdashboard']));
        // }
        var _this = this;
        this._gAuth = _gAuth;
        this._auth = _auth;
        this.media = media;
        this.snackBar = snackBar;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.googleClientID = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["b" /* config */].GOOGLE_AUTH_ID;
        this.isSpinner = false;
        this.mobileNo = '';
        this.countryCode = '+91';
        this.countryCodeList = [{ countryID: 'IND', countryCode: '+91' }];
        this.selectedLanguage = 'en';
        this.unSub_userInfo = null;
        this.supportedLangs = [{ name: 'English', code: 'en' }, { name: 'हिंदी', code: 'hi' }
        ];
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                return;
            }
            console.log(value);
            if (value['error'] == '') {
                _this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/fretronSignup']));
            }
            // this.customerName=value['customer']['name'];
            // this.customerMobile=value['customer']['mobileNumber'];
        });
    }
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
    FretronLogin.prototype.checkExistingUser = function () {
        this._store.dispatch({ type: "OTP_GENERATION", payload: null });
        if (this.fieldsValidation()) {
            // this.isSpinner=true;
            // let parent = this;
            // let user=this.mobileNo;
            // this.localStorageService.set("USER-MOB-NO",this.mobileNo);
            // console.log(this.mobileNo);
            // console.log(this.countryCode);
            // this._loginServices.sendOTP.emit({mobileNo:this.mobileNo,countryCode:this.countryCode});
            // this.openSnackBar("OTP sent to your Mobile Number");
            // this.localStorageService.set("USER-MOB-NO",this.mobileNo); // set mobile no in local storage
            // this.localStorageService.set("COUNTRY-CODE",this.countryCode); // set mobile no in local storage
            // this._store.dispatch(go(['/fretronSignup']));
            var reqObj = {
                mob: this.mobileNo,
                loginType: 'mobile'
            };
            console.log(reqObj);
            this._gAuth.getUserInfo.emit(reqObj); // call api for checking user existing or not
        }
        else {
            console.log('Required parameter not blank.');
            return;
        }
    }; // login methods close
    FretronLogin.prototype.fieldsValidation = function () {
        if (this.mobileNo == '' || this.mobileNo == undefined) {
            console.log("please fill mobile no");
            return false;
        }
        // if(this.countryCode==''  ||this.countryCode==undefined){
        //   console.log("please fill country code");
        //   return false;
        // }
        return true;
    };
    FretronLogin.prototype.loginWithGoogle = function () {
        var _this = this;
        console.log("google auth");
        this.isSpinner = true;
        this._auth.login('google').subscribe(function (data) {
            _this.isSpinner = false;
            console.log(data);
            //user data
            //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn),
            // idToken(only for google)
            var reqObj = {
                name: data['name'],
                email: data['email'],
                token: data['token'],
                loginType: 'google'
            };
            console.log(reqObj);
            _this._gAuth.getUserInfo.emit(reqObj); // call api for checking user existing or not
        }, function (err) {
            _this.isSpinner = false;
            console.log(err);
        });
    };
    return FretronLogin;
}()); // class close
FretronLogin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fretron-login',
        template: __webpack_require__(274),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_google_auth_services__["a" /* GoogleAuthServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_google_auth_services__["a" /* GoogleAuthServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_social_login__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object])
], FretronLogin);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=fretron-login.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
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
    function FretronSignup(localStorageService, _store, _router) {
        // let mob =this.localStorageService.get("USER-MOB-NO");
        // this.mobileNo =""+mob;
        // this.startTimer(300);
        var _this = this;
        this.localStorageService = localStorageService;
        this._store = _store;
        this._router = _router;
        this.name = '';
        this.email = '';
        this.mobileNo = '';
        this.isResend = false;
        this.loginType = '';
        this.min = 5;
        this.sec = 0;
        this.unSub_userInfo = null;
        this.unSub_userInfo = this._store.select('userInfo').subscribe(function (value) {
            if (value == null) {
                _this.cancel();
                return;
            }
            _this.isUserExist = value['customer']['isUserExist'];
            console.log(value);
            if (value['error'] == '' && _this.isUserExist == false) {
                _this.loginType = value['customer']['loginType'];
                if (_this.loginType == 'google') {
                    _this.email = value['customer']['email'];
                    _this.name = value['customer']['name'];
                }
                else if (_this.loginType == 'mobile') {
                    _this.mobileNo = value['customer']['mob'];
                }
            }
            else if (value['error'] == '' && _this.isUserExist == true) {
                _this.loginType = value['customer']['loginType'];
                if (_this.loginType == 'google') {
                    _this.email = value['customer']['email'];
                    _this.name = value['customer']['name'];
                    _this.mobileNo = value['customer']['mob'];
                }
                else if (_this.loginType == 'mobile') {
                    _this.startTimer(300);
                    _this.mobileNo = value['customer']['mob'];
                    _this.email = (value['customer']['email'] == undefined) ? '' : (value['customer']['email']);
                    _this.name = value['customer']['name'];
                }
            }
            console.log(_this.email);
            console.log(_this.name);
            console.log(_this.mobileNo);
        });
    } // close constructor
    FretronSignup.prototype.ngOnDestroy = function () {
        if (typeof this.unSub_userInfo != 'undefined' && this.unSub_userInfo != null && this.unSub_userInfo != undefined)
            this.unSub_userInfo.unsubscribe();
    };
    FretronSignup.prototype.ngOnInit = function () {
    };
    FretronSignup.prototype.startTimer = function (timeInSec) {
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
    FretronSignup.prototype.sendOTP = function () {
        if (this.fieldsValidation()) {
            this.startTimer(300);
            console.log('send otp');
            this.isUserExist = true;
            console.log({ otp: '956668' });
        }
    };
    FretronSignup.prototype.fieldsValidation = function () {
        if (this.name == '' || this.name == undefined) {
            console.log("please fill Name");
            return false;
        }
        if (this.mobileNo == '' || this.mobileNo == undefined) {
            console.log("please fill Mobile No");
            return false;
        }
        // if(this.countryCode==''  ||this.countryCode==undefined){
        //   console.log("please fill country code");
        //   return false;
        // }
        return true;
    };
    FretronSignup.prototype.cancel = function () {
        this._store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* go */])(['/fretronLogin']));
    };
    FretronSignup.prototype.login = function () {
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImFkbWluIjp0cnVlfQ.eyJpZCI6IjkxZDgwNzAwLTNkYzgtNDdmYS1iOTdjLTExYWE3MGRkZmY1MCIsImVtYWlsIjoic3VuaWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDg1NDMyOTUxIiwibmFtZSI6IlN1bmlsIiwiaWF0IjoxNTA5MzQ3MDI3fQ.P1-58MzIy39eR9kddIOgkvQy6JQDFP5MutB2i4eulMI';
        this.localStorageService.set("TOKEN", token);
        console.log(this._router.url);
        // this._router.navigate(['/Quetions', {id: 1234, pageid: 0}]);
        // console.log(this.localStorageService.get("TOKEN"));
        window.location.replace("http://localhost:4200/vtsdashboard");
    };
    FretronSignup.prototype.resendOTP = function () {
        console.log("resend");
        this.startTimer(300);
        // this._store.dispatch({type: "OTP_GENERATION",payload:null});
        // this._loginServices.sendOTP.emit({mobileNo:this.mobNo,countryCode:this.countryCode});
        // this._store.dispatch(back());
    };
    return FretronSignup;
}()); //class close
FretronSignup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fretron-signup',
        template: __webpack_require__(275),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], FretronSignup);

var _a, _b, _c;
//# sourceMappingURL=fretron-signup.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAuthServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoogleAuthServices = (function () {
    function GoogleAuthServices(http, _store, localStorageService) {
        var _this = this;
        this.http = http;
        this._store = _store;
        this.localStorageService = localStorageService;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.token = '';
        this.getUserInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultHeaders.append('Access-Control-Allow-Origin', '*');
        this.defaultHeaders.append('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
        //************ login  ***************************************************
        this.getUserInfo.subscribe(function (reqObj) {
            reqObj['isUserExist'] = false;
            //@todo for testing only
            _this._store.dispatch({ type: "USER_INFO", payload: { error: '', customer: reqObj } });
            return;
            //close for testing only
            // const path =paths.PATH+':8094/authorize';
            // this.checkTokenAuthorization(path,reqObj.token).subscribe(response =>{
            //   console.log(response);
            //   // console.log(response['error']);
            //
            //   if(response['error']=='X'){
            //     // this.localStorageService.remove("TOKEN");
            //     // this._store.dispatch({type: "AUTHORIZATION",payload:{valid:false,error:'X',msg:"error occur"}});
            //     return;
            //   }
            //   let res=response;
            //   if(res['valid']==true){
            //     // this.localStorageService.set("TOKEN",token);
            //     // this._store.dispatch({type: "AUTHORIZATION", payload: {valid:res['valid'],error:'',msg:"User authorized"}});
            //     // let customer=this.customerDetail(token);
            //     // this._store.dispatch({type: "CUSTOMER_DETAILS", payload:{error:'',customer:customer}});
            //   }
            //
            // },err=>{
            //   // this.localStorageService.remove("TOKEN");
            //   // this._store.dispatch({type: "AUTHORIZATION",payload:{valid:false,error:'X',msg:err.json()}});
            //   // this.localStorageService.set("TOKEN",false);
            //   console.log(err);
            //   console.log(err.json());
            // });
        });
    } // constructor close here
    GoogleAuthServices.prototype.ngOnDestroy = function () {
    };
    // ***********************  token authorization**********************
    GoogleAuthServices.prototype.checkTokenAuthorization = function (path, token) {
        // let queryParameters = new URLSearchParams();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */](this.defaultHeaders.toJSON());
        headers.set('Content-Type', 'application/json');
        var bearerToken = "Bearer " + token;
        headers.set('authorization', bearerToken);
        // console.log(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
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
        });
    };
    return GoogleAuthServices;
}()); // class close
GoogleAuthServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], GoogleAuthServices);

var _a, _b, _c;
//# sourceMappingURL=google-auth-services.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOOGLE_PROVIDERS; });
/* unused harmony export paths */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
var config = {
    IS_ENABLE_ETA: false,
    //this is geocode key
    KEY: 'AIzaSyBCRowVqghQTO8iJDgOc4QY-GlFwsn85_I',
    MAX_RANGE_DAYS: 15,
    SUSPENDED_TIME: 1000 * 60 * 60 * 24,
    GOOGLE_AUTH_ID: '192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
};
var GOOGLE_PROVIDERS = {
    "google": {
        "clientId": '192715049224-7pgm76g34ae6d4l5hr9edbso93oda5fg.apps.googleusercontent.com'
    }
};
var paths = {
    VEHICLE_LIST_SOCKET_PATH: 'http://tracknet.fretron.com/dashboard',
    TRIP_LIST_SOCKET_PATH: 'http://tracknet.fretron.com/trip/dashboard',
    TRIP_DASH_SOCKET_PATH: 'http://tracknet.fretron.com/trip_detail',
    PATHv2: 'http://tracknet.fretron.com',
    PATH: 'http://tracknet.fretron.com',
    SEND_OTP_PATH: 'http://tracknet.fretron.com:8094/login/forany?mobileNumber=',
    SIGNUP_PATH: 'http://tracknet.fretron.com',
    GEOCODE_PATH: 'https://maps.googleapis.com/maps/api/geocode',
    TRIP_PATH: 'http://tracknet.fretron.com/v2/dashboard/trip',
    TRIP_STATUS_DETAILS_PATH: 'http://tracknet.fretron.com/trip/detail/',
    TRIP_DISCARD_PATH: 'http://tracknet.fretron.com/trip/discard/',
    TRIP_UPDATE_PATH: 'http://tracknet.fretron.com/trip/update',
    TRIP_UPDATE_FROM_STOP_PATH: 'http://tracknet.fretron.com/trip/selectfromstop/',
    TRIP_CONFIRM_LOCATION_PATH: 'http://tracknet.fretron.com/trip/missing/',
    TRIP_CREATE_UPDATE_PATH: 'http://tracknet.fretron.com',
    // ***************  schedule report list ********************
    GET_SCHEDULE_REPORTS_PATH: 'http://tracknet.fretron.com/schedule',
    CREATE_SCHEDULE_REPORTS_PATH: 'http://tracknet.fretron.com/schedule/create',
    CHANGE_SCHEDULE_STATE_PATH: 'http://tracknet.fretron.com/schedule/status?scheduleId=',
    // **********************************************************
    //****************eta path */
    ETA_PATH: "http://tracknet.fretron.com/address/distance?",
    // *********************** configure alert path ***************************
    CONFIGURE_ALERTS_PATH: 'http://192.168.0.149:2124/alerts',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 167;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(204);



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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(21);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammer_timejs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammer_timejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammer_timejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__router_module_app_router_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_router_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reducers_main_store__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_social_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_login_fretron_login_fretron_login_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_login_fretron_signup_fretron_signup_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_google_auth_services__ = __webpack_require__(133);
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
            __WEBPACK_IMPORTED_MODULE_17__components_user_login_fretron_login_fretron_login_component__["a" /* FretronLogin */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_login_fretron_signup_fretron_signup_component__["a" /* FretronSignup */]
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
            __WEBPACK_IMPORTED_MODULE_11__agm_core__["b" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_20__services_google_auth_services__["a" /* GoogleAuthServices */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//FOR google auth // (login with google)
__WEBPACK_IMPORTED_MODULE_16_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(__WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* GOOGLE_PROVIDERS */]);
//close google auth // (login with google)
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userInfo;
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
//# sourceMappingURL=google-auth-store.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_auth_store__ = __webpack_require__(205);
/* unused harmony export reducers */
/* unused harmony export rootReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = mainReducer;



var reducers = {
    userInfo: __WEBPACK_IMPORTED_MODULE_2__google_auth_store__["a" /* userInfo */]
};
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_core__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* combineReducers */])(reducers);
function mainReducer(state, action) {
    return rootReducer(state, action);
}
//# sourceMappingURL=main-store.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_fretron_login_fretron_login_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_fretron_signup_fretron_signup_component__ = __webpack_require__(132);
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
    { path: 'fretronLogin', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_fretron_login_fretron_login_component__["a" /* FretronLogin */] },
    { path: 'fretronSignup', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_fretron_signup_fretron_signup_component__["a" /* FretronSignup */] },
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".main{\r\n  min-width: 200px;\r\n  max-width: 300px;\r\n  margin: 50px auto;\r\n  padding: 8px\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 20px 0;\r\n}\r\n\r\n/*button {*/\r\n  /*color:#ffffff;*/\r\n  /*background-color:#1E88E5;*/\r\n/*}*/\r\n\r\n\r\n.label-quote{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n  margin-bottom: 30px;\r\n  color:cadetblue;\r\n}\r\n\r\n.add-button{\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  padding: 0px;\r\n  min-width: 0px;\r\n  font-size: 18px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 4px 17px darkslategrey;\r\n}\r\n\r\n.language{\r\n  margin-right: 1px;\r\n}\r\n\r\n.language  >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n\r\n.my-select {\r\n  margin-top: 11px;\r\n  margin-right: 5px;\r\n}\r\n/*  */\r\n.my-select >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n.my-hr{\r\n  width: 28px;\r\n  border-style: ridge;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".main{\r\n  min-width: 200px;\r\n  max-width: 300px;\r\n  margin: 50px auto;\r\n  padding: 8px\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 20px 0;\r\n}\r\n\r\n/*button {*/\r\n/*color:#ffffff;*/\r\n/*background-color:#1E88E5;*/\r\n/*}*/\r\n\r\n\r\n.label-quote{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n  margin-bottom: 30px;\r\n  color:cadetblue;\r\n}\r\n\r\n.add-button{\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  padding: 0px;\r\n  min-width: 0px;\r\n  font-size: 18px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 4px 17px darkslategrey;\r\n}\r\n\r\n.language{\r\n  margin-right: 1px;\r\n}\r\n\r\n.language  >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n\r\n.my-select {\r\n  margin-top: 11px;\r\n  margin-right: 5px;\r\n}\r\n/*  */\r\n.my-select >>> .mat-select-trigger{\r\n  min-width: 68px !important;\r\n  font-size: 13px;\r\n  height: 28px;\r\n}\r\n\r\n\r\n.resend-otp-button{\r\n  width: 33px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  padding: 0px;\r\n  min-width: 0px;\r\n  font-size: 18px;\r\n  border-radius: 15px;\r\n  box-shadow: 1px 2px 9px darkslategrey;\r\n  color: #46465f;\r\n  background-color:whitesmoke;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <md-card >\n    <div class=\"imgcontainer\" >\n      <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n    </div>\n\n    <div fxLayout=\"row\" >\n      <button (click)=\"loginWithGoogle()\" style=\"width: 100%;background-color:#f3eded75;\" md-button>\n        Login with Google\n      </button>\n    </div>\n\n    <form (ngSubmit)=\"checkExistingUser()\" #loginForm=\"ngForm\">\n\n      <div>\n        <div style=\"padding:20px 10px 0px 20px;text-align:center\" fxLayout=\"row\" >\n          <hr class=\"my-hr\" >\n            <span class=\"fade-sub-header-text\" >OR</span>\n          <hr class=\"my-hr\" >\n        </div>\n        <div fxLayout=\"row\" >\n          <md-input-container style=\"width: 100%\" >\n            <input type=\"number\" min=\"0\" mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"mobileNo\"\n                   onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\n                   pattern=\"[0-9]{10}\" placeholder=\"{{'Enter Mobile Number'}}\" name=\"mobileNo\" id=\"mobileNo\" required>\n          </md-input-container>\n        </div>\n        <div style=\"text-align: center;padding: 15px;\">\n          <!--<button mdTooltip=\"Register here\"  style=\"margin-top: 20px;width: 100%;\" md-raised-button  (click)=\"login()\">LOGIN</button>-->\n          <button style=\"width: 45%;\" name=\"go\"  type=\"submit\"  mdTooltip=\"{{'send OTP'}}\"  md-raised-button  [disabled]=\"!loginForm.form.valid\">\n            Next\n          </button>\n        </div>\n      </div>\n    </form>\n  </md-card>\n</div>\n<div class=\"footer-text\">\n  <!--<a href=\"#\">{{'Help' | translate }}</a>-->\n</div>\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <md-spinner *ngIf=\"isSpinner\" mode=\"indeterminate\" class=\"spinner\"></md-spinner>\n  <md-card *ngIf=\"!isUserExist\">\n    <form (ngSubmit)=\"sendOTP()\" #sendOTPForm=\"ngForm\">\n      <div class=\"imgcontainer\" >\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n      </div>\n\n      <div>\n        <div class=\"fade-header\" style=\"text-align: center;margin-bottom: 30px\" >\n          <span>Create New Account</span>\n        </div>\n\n        <div fxLayout=\"row\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input [disabled]=\"loginType =='google'\"  mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"name\" placeholder=\"{{'Enter Name'}}\" name=\"name\" id=\"name\" required>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input [disabled]=\"loginType =='google'\"   mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"email\" placeholder=\"{{'Enter Email'}}\" name=\"email\" id=\"email\">\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container class=\"login-text-color\" style=\"width: 100%\" >\n            <input [disabled]=\"loginType =='mobile'\" type=\"number\" min=\"0\" mdTooltip=\"{{'This field is required'}}\"  mdInput [(ngModel)]=\"mobileNo\"\n                   onkeydown=\"if(event.target.value.length>=10 && event.keyCode!=8 && event.keyCode!=13 )return false;\"\n                   pattern=\"[0-9]{10}\" placeholder=\"{{'Enter Mobile Number'}}\" name=\"mobileNo\" id=\"mobileNo\" required>\n          </md-input-container>\n        </div>\n        <div fxLayout=\"row\" style=\"margin-top:15px;\" >\n          <button style=\"margin-left: auto\" name=\"cancel\" type=\"reset\"  (click)=\"cancel()\"  mdTooltip=\"{{'cancel'}}\"  md-button >\n            cancel\n          </button>\n          <button *ngIf=\"!(loginType ==undefined ||loginType =='' || loginType ==null)\" name=\"ok\"  type=\"submit\"  mdTooltip=\"{{'ok'}}\"  md-button  [disabled]=\"!sendOTPForm.form.valid\">\n            ok\n          </button>\n        </div>\n      </div>\n\n    </form>\n  </md-card>\n\n  <md-card *ngIf=\"isUserExist\" >\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <div class=\"imgcontainer\" >\n        <img style=\"padding: 5px;background-color: darkgray; width: 60%;\" src=\"../../../../images/fretron_logo.png\" alt=\"Avatar\"  >\n      </div>\n\n      <div>\n        <div style=\"text-align: center;margin-bottom: 30px;display:grid\" >\n          <span  class=\"fade-header\">Please Enter OTP</span>\n          <span style=\"color: #D0D0D0;font-size: 15px;margin-top: 5px\" >+91 {{mobileNo}}</span>\n        </div>\n        <div fxLayout=\"row\" style=\"margin-top: 5px\" >\n          <md-input-container  class=\"login-text-color\" style=\"width: 100%\"  >\n            <input autocomplete=\"off\"  mdTooltip=\"{{'This field is required'}}\" mdInput [(ngModel)]=\"otp\"  placeholder=\"{{'Enter OTP'}}\" name=\"OTP\" required>\n          </md-input-container>\n\n          <button *ngIf=\"isResend && mobileNo != null\" (click)=\"resendOTP()\"  style=\"margin-left:auto\"   class=\"resend-otp-button\"  mdTooltip=\"{{'Resend OTP'}}\" md-raised-button  >\n            <i class=\"fa fa-rotate-right\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div style=\"display: flex;height: 20px\" >\n          <span *ngIf=\"!isResend\" style=\"margin-right:auto\" class=\"sub-header-text\" ><b>Resend OTP in Next</b>- {{min}} min:{{sec}} sec</span>\n        </div>\n        <div style=\"margin-top:15px;text-align: center\" >\n          <button  name=\"login\"  type=\"submit\"  mdTooltip=\"{{'Login'}}\"  md-raised-button  [disabled]=\"!loginForm.form.valid || mobileNo == null\">\n            Login\n          </button>\n        </div>\n      </div>\n    </form>\n  </md-card>\n\n</div>\n<div class=\"footer-text\">\n  <!--<a href=\"#\">{{'Help' }}</a>-->\n</div>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(168);


/***/ })

},[331]);
//# sourceMappingURL=main.bundle.js.map