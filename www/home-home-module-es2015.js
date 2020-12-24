(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/auth-guard.guard */ "1eeg");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "zpKS");





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        children: [
            {
                path: 'watchlist',
                canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-watchlist-watchlist-module */ "pages-watchlist-watchlist-module").then(__webpack_require__.bind(null, /*! ../pages/watchlist/watchlist.module */ "122F")).then(m => m.WatchlistPageModule)
            },
            {
                path: 'account',
                canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-account-account-module */ "pages-account-account-module").then(__webpack_require__.bind(null, /*! ../pages/account/account.module */ "4+IK")).then(m => m.AccountPageModule)
            },
            {
                path: 'dashboard',
                canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardPageModule)
            },
            {
                path: 'orders',
                canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-orders-orders-module */ "pages-orders-orders-module").then(__webpack_require__.bind(null, /*! ../pages/orders/orders.module */ "Xlj8")).then(m => m.OrdersPageModule)
            },
            // {
            //   path: 'chart',
            //   canActivate: [AuthGuard],
            //   loadChildren: () => import('../pages/chart/chart.module').then( m => m.ChartPageModule)
            // },
            {
                path: 'learning',
                canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-learning-module */ "pages-learning-learning-module").then(__webpack_require__.bind(null, /*! ../pages/learning/learning.module */ "hxX9")).then(m => m.LearningPageModule)
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ../pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-sign-up-sign-up-module */ "pages-sign-up-sign-up-module").then(__webpack_require__.bind(null, /*! ../pages/sign-up/sign-up.module */ "J606")).then(m => m.SignUpPageModule)
            },
        ],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\t<div [ngClass]=\"{'d-none': isLoginOrSignUp}\">\n\t\t<ion-tab-bar slot=\"bottom\">\n\t\t\t<ion-tab-button tab=\"watchlist\">\n\t\t\t\t<ion-icon name=\"bookmark-outline\"></ion-icon>\n\t\t\t\t<ion-label class=\"route-label\">Watchlist</ion-label>\n\t\t\t</ion-tab-button>\n\t\n\t\t\t<ion-tab-button tab=\"orders\">\n\t\t\t\t<ion-icon name=\"cube-outline\"></ion-icon>\n\t\t\t\t<ion-label class=\"route-label\">Orders</ion-label>\n\t\t\t</ion-tab-button>\n\t\n\t\t\t<ion-tab-button tab=\"dashboard\">\n\t\t\t\t<ion-icon name=\"grid-outline\"></ion-icon>\n\t\t\t\t<ion-label class=\"route-label\">Dashboard</ion-label>\n\t\t\t</ion-tab-button>\n\t\n\t\t\t<ion-tab-button tab=\"learning\">\n\t\t\t\t<ion-icon name=\"book-outline\"></ion-icon>\n\t\t\t\t<ion-label class=\"route-label\">Marubozu</ion-label>\n\t\t\t</ion-tab-button>\n\t\n\t\t\t<ion-tab-button tab=\"account\">\n\t\t\t\t<ion-icon name=\"person-circle-outline\"></ion-icon>\n\t\t\t\t<ion-label class=\"route-label\">TE8123</ion-label>\n\t\t\t</ion-tab-button>\n\t\t</ion-tab-bar>\n\t</div>\n</ion-tabs>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-none {\n  display: none;\n}\n\n@media screen and (max-width: 360px) {\n  ion-label {\n    font-size: 10px;\n  }\n\n  ion-icon {\n    font-size: 19px;\n  }\n\n  ion-tab-button {\n    widows: 69px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUVGOztFQUFBO0lBQ0UsZUFBQTtFQUdGOztFQURBO0lBQ0UsWUFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtbm9uZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIGlvbi10YWItYnV0dG9ue1xuICAgIHdpZG93czogNjlweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





let HomePage = class HomePage {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.isOnLoginOrSignUpPage.subscribe(b => this.isLoginOrSignUp = b);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map