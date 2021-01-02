(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "1ntl":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/account/profile/profile-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function ntl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "2IrM");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "2IrM":
    /*!*******************************************************!*\
      !*** ./src/app/pages/account/profile/profile.page.ts ***!
      \*******************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function IrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "HXu1");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "R05P");
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


      var src_app_modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/modal-change-password/modal-change-password.component */
      "K2jm");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, modalController, userService) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.modalController = modalController;
          this.userService = userService;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.authenticated.subscribe(function (u) {
              return _this.user = u.user;
            });
          }
        }, {
          key: "navigateToAccount",
          value: function navigateToAccount() {
            this.router.navigate(['home', 'account']);
          }
        }, {
          key: "openCompaniesModal",
          value: function openCompaniesModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalChangePasswordComponent"]
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
        }, {
          key: "hasNoImgUrl",
          value: function hasNoImgUrl() {
            if (this.user.imgUrl.length == 2) return true;else return false;
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "8V8a":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/profile/profile.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function V8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "1ntl");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "2IrM");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "HXu1":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function HXu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"ion-padding profile-header\">\n\t\t<div>\n\t\t\t<ion-text><h5>{{user.username}}</h5></ion-text>\n\t\t\t<ion-text><p>{{user.email}}</p></ion-text>\n\t\t</div>\n\t\t<div class=\"ion-float-right account-img\">\n\t\t\t<span>{{user.username[0]+user.username[1]}}</span>\n\t\t</div>\n\t</div>\n\t<hr />\n\t<ion-grid>\n\t\t<ion-row class=\"ion-margin-bottom\">\n\t\t\t<ion-col size=\"6\" class=\"ion-text-left subtitle\">PAN</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">*233H</ion-col>\n\t\t</ion-row>\n\t\t<ion-row class=\"ion-margin-bottom\">\n\t\t\t<ion-col size=\"6\" class=\"ion-text-left subtitle\">Demat (BO)</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">1234567875434567</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" (click)=\"openCompaniesModal()\">\n\t\t<ion-text>Change password</ion-text>\n\t\t<ion-icon name=\"sync-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n</ion-content>\n";
      /***/
    },

    /***/
    "R05P":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/profile/profile.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function R05P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-header {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.profile-header div {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.profile-header h5 {\n  margin-bottom: 0px;\n}\n.profile-header p {\n  margin-top: 5px;\n}\n.profile-header .account-img {\n  height: 85px;\n  width: 85px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ffff7f;\n}\n.profile-header .account-img span {\n  text-align: center;\n  font-size: 45px;\n  color: black;\n  text-transform: capitalize;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.account-card-link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.account-card-link .icon {\n  font-size: 25px;\n}\n.subtitle {\n  color: #737373;\n}\n@media (prefers-color-scheme: dark) {\n  .subtitle {\n    color: #949494;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQ1o7QUFHQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFDQTtFQUNJO0lBQ0ksY0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkZXJ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgfVxuICAgIFxuICAgIC5hY2NvdW50LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA4NXB4OyBcbiAgICAgICAgd2lkdGg6IDg1cHg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjdmO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmFjY291bnQtY2FyZC1saW5re1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5pY29ue1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxufVxuLnN1YnRpdGxle1xuICAgIGNvbG9yOiM3MzczNzM7XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAuc3VidGl0bGV7XG4gICAgICAgIGNvbG9yOiM5NDk0OTQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map