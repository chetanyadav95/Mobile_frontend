(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {
    /***/
    "Dk72":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dk72(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<!-- \n\t123 pg, pitanja activity 6\n\t105 pg tekst, pitanja sa strane, roze kockice\n\n -->\n<ion-content>\n\t<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUp(signUpForm)\">\n\t\t<!-- <ion-title class=\"ion-text-center ion-margin-vertical\" color=\"warning\"><h1>Welcome to Empuraan</h1></ion-title> -->\n\t\t<ion-title class=\"ion-text-center ion-margin-vertical\"><h2>Sign Up</h2></ion-title>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t\t\t<ion-input required ngModel name=\"username\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\n\t\t\t\t\t\t<ion-input type=\"email\" required ngModel name=\"email\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" required ngModel name=\"password\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" required ngModel name=\"confirmPassword\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<button type=\"submit\" class=\"button sign-up-button\">Sign Up</button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<button\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"small\"\n\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\tclass=\"ion-float-left link-button\"\n\t\t\t\t\t\trouterLink=\"/home/login\"\n\t\t\t\t\t>\n\t\t\t\t\t\tAlready have an account?\n\t\t\t\t\t</button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "J606":
    /*!*************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
      \*************************************************/

    /*! exports provided: SignUpPageModule */

    /***/
    function J606(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
        return SignUpPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-up-routing.module */
      "Z4dq");
      /* harmony import */


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sign-up.page */
      "yntF");

      var SignUpPageModule = function SignUpPageModule() {
        _classCallCheck(this, SignUpPageModule);
      };

      SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
      })], SignUpPageModule);
      /***/
    },

    /***/
    "Z4dq":
    /*!*********************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SignUpPageRoutingModule */

    /***/
    function Z4dq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
        return SignUpPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up.page */
      "yntF");

      var routes = [{
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
      }];

      var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
        _classCallCheck(this, SignUpPageRoutingModule);
      };

      SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignUpPageRoutingModule);
      /***/
    },

    /***/
    "sWnx":
    /*!*************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function sWnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  outline: none;\n}\n\n.logo {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  padding-top: 10px;\n}\n\n.button {\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 5px;\n  height: 45px;\n  font-size: 14px;\n}\n\n.sign-up-button {\n  background-color: #2879cf;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  margin-top: 5%;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .sign-up-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBUUo7O0FBTkE7RUFDSTtJQUNFLGVBQUE7RUFTSjs7RUFQRTtJQUNFLDBCQUFBO0VBVUo7O0VBUkU7SUFDSSxlQUFBO0VBV047O0VBVEU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uc2lnbi11cC1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzljZjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saW5rLWJ1dHRvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGlua3MtYmxvY2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9ybXtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbmgxLGgye1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaDEsaDJ7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaW9uLXRleHQsIHAsIGg1LCBpb24tYnV0dG9uLCBzcGFue1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIC5zaWduLXVwLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "yntF":
    /*!***********************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
      \***********************************************/

    /*! exports provided: SignUpPage */

    /***/
    function yntF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
        return SignUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "Dk72");
      /* harmony import */


      var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up.page.scss */
      "sWnx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var SignUpPage = /*#__PURE__*/function () {
        function SignUpPage(router, userService) {
          _classCallCheck(this, SignUpPage);

          this.router = router;
          this.userService = userService;
        }

        _createClass(SignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
          }
        }, {
          key: "signUp",
          value: function signUp(form) {
            var _this = this;

            if (this.checkIfPasswordsMatch(form.value.password, form.value.confirmPassword)) {
              delete form.value.confirmPassword;
              this.userService.signUp(form.value).subscribe(function (res) {
                _this.generateUser(res);

                form.resetForm();

                _this.router.navigate(['home', 'login']);

                _this.userService.checkIfIsOnLoginOrSignUpPage('/home/login');
              });
            }
          }
        }, {
          key: "generateUser",
          value: function generateUser(res) {
            var _this2 = this;

            var user = {
              email: res.user.email,
              username: res.user.username,
              balance: {
                availableBal: 0,
                openBal: 0
              }
            };
            this.userService.accountDetails().subscribe(function (res) {
              user.balance.availableBal = res.account.initialValue;
              user.balance.openBal = parseFloat(res.account.currentBalance);
              user.balance.currency = res.account.currency;
            }, function () {}, function () {
              return _this2.userService.user.next(user);
            });
          }
        }, {
          key: "checkIfPasswordsMatch",
          value: function checkIfPasswordsMatch(password, confirmPassword) {
            if (password === confirmPassword) return true;else return false;
          }
        }]);

        return SignUpPage;
      }();

      SignUpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      };

      SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map