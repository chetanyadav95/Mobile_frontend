(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funds-funds-module"], {
    /***/
    "Y9lb":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/funds/funds.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y9lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Funds</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-header class=\"ion-text-center ion-padding-bottom\">\n\t\t\t<ion-card-subtitle>Available margin (Cash + Collateral)</ion-card-subtitle>\n\t\t\t<ion-card-title color=\"tertiary\"><h2 class=\"ion-no-margin\">${{user.balance.openBal}}</h2></ion-card-title>\n\t\t</ion-card-header>\n\t</ion-card>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-center\">\n\t\t\t\t<ion-button color=\"success\" (click)=\"openWithdrawAddFundsModal(true)\">\n\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\tAdd funds\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-text><p class=\"subtitle-text\">Available cash</p></ion-text>\n\t\t\t\t<ion-text><p class=\"cash-text\">${{user.balance.openBal}}</p> </ion-text>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-center\">\n\t\t\t\t<ion-button (click)=\"openWithdrawAddFundsModal(false)\">\n\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\tWithdraw\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-text><p class=\"subtitle-text\">Used margin</p></ion-text>\n\t\t\t\t<ion-text><p class=\"cash-text\">0</p> </ion-text>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<hr>\n</ion-content>\n";
      /***/
    },

    /***/
    "fz24":
    /*!*****************************************************!*\
      !*** ./src/app/pages/account/funds/funds.module.ts ***!
      \*****************************************************/

    /*! exports provided: FundsPageModule */

    /***/
    function fz24(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FundsPageModule", function () {
        return FundsPageModule;
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


      var _funds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./funds-routing.module */
      "rcmQ");
      /* harmony import */


      var _funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./funds.page */
      "oI9U");

      var FundsPageModule = function FundsPageModule() {
        _classCallCheck(this, FundsPageModule);
      };

      FundsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _funds_routing_module__WEBPACK_IMPORTED_MODULE_5__["FundsPageRoutingModule"]],
        declarations: [_funds_page__WEBPACK_IMPORTED_MODULE_6__["FundsPage"]]
      })], FundsPageModule);
      /***/
    },

    /***/
    "lq2L":
    /*!*****************************************************!*\
      !*** ./src/app/pages/account/funds/funds.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function lq2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  width: 100%;\n  height: 50px;\n}\n\n.subtitle-text {\n  padding: 0;\n  color: #737373;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.cash-text {\n  margin-top: 5px;\n  padding: 0;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-top: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  .subtitle-text {\n    color: #949494;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9mdW5kcy9mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJO0lBQ0ksY0FBQTtFQUtOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2Z1bmRzL2Z1bmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLnN1YnRpdGxlLXRleHR7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXNoLXRleHR7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTY3LCAxNjcsIDE2NywgMC41KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOjA7XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAuc3VidGl0bGUtdGV4dHtcbiAgICAgICAgY29sb3I6ICM5NDk0OTQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "oI9U":
    /*!***************************************************!*\
      !*** ./src/app/pages/account/funds/funds.page.ts ***!
      \***************************************************/

    /*! exports provided: FundsPage */

    /***/
    function oI9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FundsPage", function () {
        return FundsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_funds_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./funds.page.html */
      "Y9lb");
      /* harmony import */


      var _funds_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./funds.page.scss */
      "lq2L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component */
      "whIa");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var FundsPage = /*#__PURE__*/function () {
        function FundsPage(router, modalController, userService) {
          _classCallCheck(this, FundsPage);

          this.router = router;
          this.modalController = modalController;
          this.userService = userService;
        }

        _createClass(FundsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.user.subscribe(function (u) {
              return _this.user = u;
            });
          }
        }, {
          key: "navigateToAccount",
          value: function navigateToAccount() {
            this.router.navigate(['home', 'account']);
          }
        }, {
          key: "openWithdrawAddFundsModal",
          value: function openWithdrawAddFundsModal(isAdd) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_6__["ModalWithdrawAddFundsComponent"],
                        componentProps: {
                          isAdd: isAdd
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return FundsPage;
      }();

      FundsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }];
      };

      FundsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-funds',
        template: _raw_loader_funds_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_funds_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FundsPage);
      /***/
    },

    /***/
    "rcmQ":
    /*!*************************************************************!*\
      !*** ./src/app/pages/account/funds/funds-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FundsPageRoutingModule */

    /***/
    function rcmQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FundsPageRoutingModule", function () {
        return FundsPageRoutingModule;
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


      var _funds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./funds.page */
      "oI9U");

      var routes = [{
        path: '',
        component: _funds_page__WEBPACK_IMPORTED_MODULE_3__["FundsPage"]
      }];

      var FundsPageRoutingModule = function FundsPageRoutingModule() {
        _classCallCheck(this, FundsPageRoutingModule);
      };

      FundsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FundsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=funds-funds-module-es5.js.map