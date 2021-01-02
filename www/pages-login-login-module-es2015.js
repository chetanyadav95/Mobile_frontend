(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "Como":
/*!*******************************!*\
  !*** ./capacitor.config.json ***!
  \*******************************/
/*! exports provided: appId, appName, webDir, npmClient, plugins, cordova, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"appId\":\"com.empuraanTradingApp.app\",\"appName\":\"Empuraan Trading App\",\"webDir\":\"www\",\"npmClient\":\"npm\",\"plugins\":{\"SplashScreen\":{\"launchShowDuration\":0},\"GoogleAuth\":{\"scopes\":[\"profile\",\"email\"],\"serverClientId\":\"946184960632-f8auts9jv84qr05sijh3tki2608u5sef.apps.googleusercontent.com\",\"forceCodeForRefreshToken\":true}},\"cordova\":{\"preferences\":{\"ScrollEnabled\":\"true\",\"BackupWebStorage\":\"none\",\"SplashMaintainAspectRatio\":\"true\",\"FadeSplashScreenDuration\":\"300\",\"SplashShowOnlyFirstTime\":\"false\",\"SplashScreen\":\"screen\",\"SplashScreenDelay\":\"3000\"}}}");

/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.logo {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  padding-top: 10px;\n}\n\nform {\n  margin-top: 5%;\n}\n\n.button-col {\n  width: 100%;\n}\n\n.button {\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 5px;\n  height: 45px;\n  font-size: 14px;\n}\n\n.login-button {\n  background-color: #2879cf;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.google-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #ee1b1b;\n  color: white;\n}\n\n.google-button span {\n  padding-left: 10px;\n}\n\n.new-user-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #dedede;\n  color: black;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\n.or-line {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.or-line span {\n  position: absolute;\n  background-color: #d2d2d2;\n  border-radius: 50%;\n  font-size: 14px;\n  padding: 10px;\n}\n\n.or-line hr {\n  position: absolute;\n  border-bottom: 1px solid rgba(167, 167, 167, 0.5) !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .login-button {\n    width: 100%;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFPSjs7QUFOSTtFQUNJLGtCQUFBO0FBUVI7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFWSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBWVI7O0FBVkk7RUFDSSxrQkFBQTtFQUNBLDREQUFBO0VBRUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFXUjs7QUFQQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBVUo7O0FBUkE7RUFDSTtJQUNFLGVBQUE7RUFXSjs7RUFURTtJQUNFLDBCQUFBO0VBWUo7O0VBVkU7SUFDSSxlQUFBO0VBYU47O0VBWEU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQWNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ297XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5mb3Jte1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuLmJ1dHRvbi1jb2x7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3OWNmO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdvb2dsZS1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMWIxYjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBzcGFue1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuLm5ldy11c2VyLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmxpbmstYnV0dG9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5saW5rcy1ibG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub3ItbGluZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBzcGFue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBociB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY3LCAxNjcsIDE2NywgMC41KSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB9XG59XG5oMSxoMntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGgxLGgye1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi10ZXh0LCBwLCBoNSwgaW9uLWJ1dHRvbiwgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICAubG9naW4tYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "OTqH":
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "npad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuth"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #loginForm=\"ngForm\">\n    <!-- <ion-title class=\"ion-text-center ion-margin-vertical\" color=\"warning\"><h1>Welcome to Empuraan</h1></ion-title> -->\n    <ion-title class=\"ion-text-center ion-margin-vertical\"><h2>Login</h2></ion-title>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">E-mail</ion-label>\n            <ion-input type=\"email\" required ngModel name=\"email\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" required ngModel name=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"button-col\">\n          <button class=\"button login-button\" type=\"submit\" (click)=\"login(loginForm)\">Login</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button class=\"button google-button\" color=\"danger\" (click)=\"google()\">\n            <ion-icon name=\"logo-google\"></ion-icon>\n            <span>Login with Google</span> \n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"or-line\">\n            <hr>\n            <span>OR</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"links-block\" size=12>\n          <button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"button new-user-button\" routerLink=\"/home/sign-up\">\n            Create new account\n          </button>\n          <button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"link-button ion-float-right\" (click)=\"forgotPassword(loginForm)\">\n            Forgot password?\n          </button>\n          <!-- {{ userInfo | json}} -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "OTqH");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");









let LoginPage = class LoginPage {
    constructor(router, userService, googlePlus) {
        this.router = router;
        this.userService = userService;
        this.googlePlus = googlePlus;
    }
    ngOnInit() {
        this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
    }
    login(form) {
        this.userService.logIn(form.value).subscribe(() => { }, () => { }, () => {
            form.resetForm();
            this.router.navigate(['home', 'dashboard']);
            this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');
        });
    }
    google() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].GoogleAuth.signIn();
            // this.userService.googleAuth().subscribe()
        });
    }
    forgotPassword(form) {
        const email = form.value.email;
        this.userService.emailExists(email).subscribe(r => console.log(r));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "npad":
/*!*****************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
  \*****************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return GoogleAuthWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return GoogleAuth; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../capacitor.config.json */ "Como");
var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../capacitor.config.json */ "Como", 1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// @ts-ignore

class GoogleAuthWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    get webConfigured() {
        return document.getElementsByName('google-signin-client_id').length > 0;
    }
    constructor() {
        super({
            name: 'GoogleAuth',
            platforms: ['web']
        });
        if (!this.webConfigured)
            return;
        this.gapiLoaded = new Promise(resolve => {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;
            this.initialize();
        });
        this.addUserChangeListener();
    }
    initialize() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        script.onload = this.platformJsLoaded;
        script.src = 'https://apis.google.com/js/platform.js';
        head.appendChild(script);
    }
    platformJsLoaded() {
        gapi.load('auth2', () => {
            const clientConfig = {
                client_id: document.getElementsByName('google-signin-client_id')[0].content
            };
            if (_capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth != null && _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes != null) {
                clientConfig.scope = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes.join(' ');
            }
            gapi.auth2.init(clientConfig);
            window.gapiResolve();
        });
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    var serverAuthCode;
                    var needsOfflineAccess = false;
                    try {
                        needsOfflineAccess = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.serverClientId != null;
                    }
                    catch (_a) {
                    }
                    if (needsOfflineAccess) {
                        const offlineAccessResponse = yield gapi.auth2.getAuthInstance().grantOfflineAccess();
                        serverAuthCode = offlineAccessResponse.code;
                    }
                    else {
                        yield gapi.auth2.getAuthInstance().signIn();
                    }
                    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                    if (needsOfflineAccess) {
                        // HACK: AuthResponse is null if we don't do this when using grantOfflineAccess
                        yield googleUser.reloadAuthResponse();
                    }
                    const user = this.getUserFrom(googleUser);
                    user.serverAuthCode = serverAuthCode;
                    resolve(user);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            const authResponse = yield gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
            return {
                accessToken: authResponse.access_token,
                idToken: authResponse.id_token
            };
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            return gapi.auth2.getAuthInstance().signOut();
        });
    }
    addUserChangeListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gapiLoaded;
            gapi.auth2.getAuthInstance().currentUser.listen(googleUser => {
                this.notifyListeners("userChange", googleUser.isSignedIn() ? this.getUserFrom(googleUser) : null);
            });
        });
    }
    getUserFrom(googleUser) {
        const user = {};
        const profile = googleUser.getBasicProfile();
        user.email = profile.getEmail();
        user.familyName = profile.getFamilyName();
        user.givenName = profile.getGivenName();
        user.id = profile.getId();
        user.imageUrl = profile.getImageUrl();
        user.name = profile.getName();
        const authResponse = googleUser.getAuthResponse(true);
        user.authentication = {
            accessToken: authResponse.access_token,
            idToken: authResponse.id_token
        };
        return user;
    }
}
const GoogleAuth = new GoogleAuthWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(GoogleAuth);
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map