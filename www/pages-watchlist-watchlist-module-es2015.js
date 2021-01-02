(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-watchlist-watchlist-module"],{

/***/ "122F":
/*!*****************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.module.ts ***!
  \*****************************************************/
/*! exports provided: WatchlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPageModule", function() { return WatchlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watchlist-routing.module */ "SAOK");
/* harmony import */ var _watchlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watchlist.page */ "5svm");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buy-sell/buy-sell.page */ "aY2Y");
/* harmony import */ var _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./double-tap.directive */ "9gIM");











let WatchlistPageModule = class WatchlistPageModule {
};
WatchlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchlistPageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_watchlist_page__WEBPACK_IMPORTED_MODULE_6__["WatchlistPage"], _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__["BuySellPage"], _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__["DoubleTapDirective"]]
    })
], WatchlistPageModule);



/***/ }),

/***/ "5svm":
/*!***************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.page.ts ***!
  \***************************************************/
/*! exports provided: WatchlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPage", function() { return WatchlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./watchlist.page.html */ "Zd3G");
/* harmony import */ var _watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchlist.page.scss */ "IVAw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component */ "lNYK");
/* harmony import */ var src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component */ "rdK+");
/* harmony import */ var src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component */ "1r9f");
/* harmony import */ var src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/modal-watchlist/modal-watchlist.component */ "Nbj3");
/* harmony import */ var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/stock.service */ "8hSh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");












let WatchlistPage = class WatchlistPage {
    constructor(modalController, watchlistService, actionSheetController, stockService, userService) {
        this.modalController = modalController;
        this.watchlistService = watchlistService;
        this.actionSheetController = actionSheetController;
        this.stockService = stockService;
        this.userService = userService;
        this.watchlists = [];
        this.subscribedSockets = [];
    }
    ngOnInit() {
        this.selectedWatchlist = 0;
        this.dataLoaded = false;
    }
    ionViewDidEnter() {
        this.getWatchlists();
        this.updateLtp();
    }
    getWatchlists() {
        this.watchlists = [];
        this.dataLoaded = false;
        this.userService.getSettings().subscribe((r) => {
            const datatype = r.data.datatype;
            if (datatype == 'simulated')
                this.watchlistService.getSimulatedWatchlists().subscribe((r) => {
                    r.data.forEach(w => {
                        if (w != null)
                            this.watchlists.push(w);
                    });
                    this.moveInArray();
                    this.updateLtp();
                }, () => { }, () => {
                    setTimeout(() => {
                        this.dataLoaded = true;
                    }, 500);
                });
            if (datatype == 'realtime')
                this.watchlistService.getRealtimeWatchlists().subscribe((r) => {
                    r.data.forEach(w => {
                        if (w != null)
                            this.watchlists.push(w);
                    });
                    this.moveInArray();
                    this.updateLtp();
                }, () => { }, () => {
                    setTimeout(() => {
                        this.dataLoaded = true;
                    }, 500);
                });
        });
    }
    updateLtp() {
        this.unsubscribeFromSockets();
        this.watchlists.forEach(w => {
            w.stockIds.forEach(s => {
                const socketSub = this.stockService.listen(s.id).subscribe((res) => {
                    // console.log(res)
                    s.ltp = res[0].price;
                    // this.dataLoaded = true
                });
                this.subscribedSockets.push(socketSub);
            });
        });
    }
    unsubscribeFromSockets() {
        this.subscribedSockets.forEach(s => {
            s.unsubscribe();
        });
        this.subscribedSockets.splice(0, this.subscribedSockets.length);
    }
    openCompaniesModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_8__["ModalWatchlistComponent"],
                componentProps: { selectedWatchlist: id }
            });
            modal.onDidDismiss().then(d => {
                d == true && this.getWatchlists();
            });
            return yield modal.present();
        });
    }
    openWatchlistModal(isEdit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_7__["ModalWatchlistCeComponent"],
                componentProps: { isEdit, selectedWatchlist: this.watchlists[this.selectedWatchlist] }
            });
            modal.onDidDismiss().then(d => {
                d == true && this.getWatchlists();
            });
            return yield modal.present();
        });
    }
    openBuySellModal(stock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_5__["BuySellModalPopupComponent"],
                componentProps: { selectedStock: stock }
            });
            return yield modal.present();
        });
    }
    openManageWatchlists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditWatchlistsComponent"],
            });
            modal.onDidDismiss().then(d => {
                d == true && this.getWatchlists();
            });
            return yield modal.present();
        });
    }
    onWatchlistTabClick() {
        this.watchlistEditActionSheet();
    }
    onWatchlistTitleClick() {
        this.watchlistTitleActionSheet();
    }
    watchlistTitleActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Watchlist control panel',
                buttons: [
                    {
                        text: 'Manage',
                        icon: 'cog',
                        handler: () => {
                            this.openManageWatchlists();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    watchlistEditActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Watchlist manage panel',
                buttons: [
                    {
                        text: 'Edit',
                        icon: 'create-outline',
                        handler: () => {
                            this.openWatchlistModal(true);
                        }
                    }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash-outline',
                        handler: () => {
                            // this.removeWatchlist('')
                            this.watchlistService.deleteWatchlist(this.watchlists[this.selectedWatchlist]._id).subscribe(r => console.log('delete', r));
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    removeWatchlist(id) {
        this.watchlistService.deleteWatchlist(id);
    }
    tabIndex(tab) {
        if (typeof (tab) == 'number')
            this.selectedWatchlist = tab;
        else
            this.selectedWatchlist = tab.detail;
        this.updateLtp();
    }
    moveInArray() {
        this.watchlists.sort(this.sortByPosition);
        for (let i = 0; i < this.watchlists.length; i++) {
            this.watchlists[i].stockIds.sort(this.sortByPosition);
        }
    }
    sortByPosition(a, b) {
        if (a.position < b.position)
            return -1;
        if (a.position > b.position)
            return 1;
        return 0;
    }
    ionViewDidLeave() {
        this.unsubscribeFromSockets();
    }
    ngOnDestroy() {
        this.unsubscribeFromSockets();
    }
};
WatchlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_11__["WatchlistService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_9__["StockService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
WatchlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-watchlist',
        template: _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WatchlistPage);



/***/ }),

/***/ "9gIM":
/*!*********************************************************!*\
  !*** ./src/app/pages/watchlist/double-tap.directive.ts ***!
  \*********************************************************/
/*! exports provided: DoubleTapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleTapDirective", function() { return DoubleTapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let DoubleTapDirective = class DoubleTapDirective {
    constructor(gestureCtrl, el) {
        this.gestureCtrl = gestureCtrl;
        this.el = el;
        this.eventHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastOnStart = 0;
        this.DOUBLE_CLICK_THRESHOLD = 500;
    }
    ngOnInit() {
        const gesture = this.gestureCtrl.create({
            gestureName: 'double-tap',
            el: this.el.nativeElement,
            threshold: 0,
            onStart: () => { this.onStart(); }
        });
        gesture.enable();
    }
    onStart() {
        const now = Date.now();
        if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
            this.eventHandler.emit({ eventType: 'render' });
            this.lastOnStart = 0;
        }
        else {
            this.lastOnStart = now;
        }
    }
};
DoubleTapDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
DoubleTapDirective.propDecorators = {
    eventHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
DoubleTapDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDoubleTap]'
    })
], DoubleTapDirective);



/***/ }),

/***/ "IVAw":
/*!*****************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\nion-content div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-label, h3, p {\n    font-size: 12px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L3dhdGNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFFRjs7RUFBQTtJQUNFLDBCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsWUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YXRjaGxpc3Qvd2F0Y2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaW9uLXRpdGxle1xuICBjb2xvcjpibGFjaztcbn1cbmlvbi1jb250ZW50IHtcbiAgZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxhYmVsLCBoMywgcHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi10aXRsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "O+E9":
/*!*************************************************************!*\
  !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\nbody {\n  font-family: Roboto;\n}\nion-card-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-card-title {\n  font-size: 15px;\n}\nion-card-subtitle {\n  margin-top: 0;\n  font-size: 14px;\n  color: #ababab;\n}\n.card-input {\n  border: 1px solid rgba(184, 184, 184, 0.69);\n  color: black;\n  padding: 11px 0;\n  font-size: 18px;\n}\n.bs-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.radios {\n  list-style-type: none;\n  margin: 25px 0 0 0;\n  padding: 0;\n}\n.bs-radio-group h5 {\n  margin: 0 5px;\n}\nul {\n  margin: 0 !important;\n}\n.radios li {\n  float: right;\n  text-align: center;\n  width: 90px;\n  height: 30px;\n  position: relative;\n}\n.radios label, .radios input[type=radio] {\n  display: block;\n  position: absolute;\n  margin-left: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.radios input[type=radio] {\n  opacity: 0.011;\n  z-index: 100;\n  margin-left: 10px;\n}\n.radios input[type=radio]:checked + label {\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: 5px;\n  margin-left: 10px;\n  color: white;\n}\n.radios input[type=radio].red:checked + label {\n  background-color: #EB455A;\n}\n.radios input[type=radio].blue:checked + label {\n  background-color: #5360fc;\n}\n.radios label {\n  padding: 5px !important;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n  font-size: 14px;\n  z-index: 90;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.footer-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nion-button.footer-button {\n  width: 100%;\n}\n.disabled-input {\n  background-color: #dedede;\n  color: #353535;\n}\n@media (prefers-color-scheme: dark) {\n  ion-input {\n    color: white;\n  }\n\n  .disabled-input {\n    background-color: #484848;\n    color: #bdbdbd;\n  }\n\n  ion-title {\n    color: white;\n  }\n}\n@media screen and (max-width: 360px) {\n  ion-title, ion-card-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-card-subtitle, ion-select-option, ion-select, p, h5 {\n    font-size: 13px !important;\n  }\n\n  .radios label {\n    padding: 5px !important;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUNSO0VBQ0ksbUJBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0FBR0o7QUFEQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlKO0FBRkE7RUFDSSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTUo7QUFKQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7QUFRSjtBQU5BO0VBQ0ksb0JBQUE7QUFTSjtBQVBBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFXSjtBQVRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlKO0FBVkE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBYUo7QUFYQTtFQUNJLHlCQUFBO0FBY0o7QUFaQTtFQUNJLHlCQUFBO0FBZUo7QUFiQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZ0JKO0FBWEE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQWNKO0FBWkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0FBZ0JKO0FBZEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFpQko7QUFmQTtFQUNJO0lBQ0ksWUFBQTtFQWtCTjs7RUFmRTtJQUNJLHlCQUFBO0lBQ0EsY0FBQTtFQWtCTjs7RUFoQkU7SUFDSSxZQUFBO0VBbUJOO0FBQ0Y7QUFqQkE7RUFDSTtJQUNFLDBCQUFBO0VBbUJKOztFQWpCRTtJQUNFLDBCQUFBO0VBb0JKOztFQWxCRTtJQUNJLHVCQUFBO0lBQ0EsZUFBQTtFQXFCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiNhYmFiYWI7XG59XG4uY2FyZC1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCwgMC42OSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDExcHggMDtcbiAgICBmb250LXNpemU6MThweDtcbn1cbi5icy1yYWRpby1ncm91cHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yYWRpb3N7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgbWFyZ2luOjI1cHggMCAwIDA7XG4gICAgcGFkZGluZzowO1xufVxuLmJzLXJhZGlvLWdyb3VwIGg1e1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG51bHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5yYWRpb3MgbGkge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDo5MHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnJhZGlvcyBsYWJlbCwgLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgYm90dG9tOjA7XG59XG4ucmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBvcGFjaXR5OjAuMDExO1xuICAgIHotaW5kZXg6MTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdLnJlZDpjaGVja2VkICsgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjQ1NUE7XG59XG4ucmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXS5ibHVlOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTM2MGZjO1xufVxuLnJhZGlvcyBsYWJlbCB7ICAgIFxuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI0NDQzsgXG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgei1pbmRleDo5MDtcbn1cbi8vIC5yYWRpb3MgbGFiZWw6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQ6I0RERDtcbi8vIH1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWJ1dHRvbi5mb290ZXItYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRpc2FibGVkLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2RlZGVkZTtcbiAgICBjb2xvcjogIzM1MzUzNTtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZGlzYWJsZWQtaW5wdXR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ4NDg0ODtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGUsIGlvbi1jYXJkLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tY2FyZC1zdWJ0aXRsZSwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1zZWxlY3QsIHAsIGg1e1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yYWRpb3MgbGFiZWwgeyAgICBcbiAgICAgICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        exports: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "SAOK":
/*!*************************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPageRoutingModule", function() { return WatchlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-sell/buy-sell.page */ "aY2Y");
/* harmony import */ var _watchlist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watchlist.page */ "5svm");





const routes = [
    {
        path: '',
        component: _watchlist_page__WEBPACK_IMPORTED_MODULE_4__["WatchlistPage"],
        children: []
    },
    {
        path: 'buy-sell/:id',
        component: _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__["BuySellPage"]
    }
];
let WatchlistPageRoutingModule = class WatchlistPageRoutingModule {
};
WatchlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WatchlistPageRoutingModule);



/***/ }),

/***/ "Zd3G":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/watchlist.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title (click)=\"onWatchlistTitleClick()\">Watchlist</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<super-tabs *ngIf=\"!dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label\n\t\t\t\t\tstyle=\"width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center\"\n\t\t\t\t>\n\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item *ngFor=\"let item of [].constructor(9)\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label class=\"ion-padding-start\" style=\"display: flex; flex-direction: column; align-items: flex-start\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-label style=\"display: flex; flex-direction: column; align-items: flex-end\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t<ion-label style=\"display: flex; flex-direction: row; justify-content: flex-end; width: 100%\">\n\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%; margin-right: 10px\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<super-tabs *ngIf=\"watchlists.length > 0 && dataLoaded\">\n\t\t<super-tabs-toolbar\n\t\t\tslot=\"top\"\n\t\t\tcolor=\"translucent\"\n\t\t\t[scrollable]=\"watchlists.length > 4\"\n\t\t\t[scrollablePadding]=\"watchlists.length < 3\"\n\t\t>\n\t\t\t<super-tab-button\n\t\t\t\t*ngFor=\"let w of watchlists; let i = index\"\n\t\t\t\t(click)=\"tabIndex(i)\"\n\t\t\t\tappDoubleTap\n\t\t\t\t(eventHandler)=\"onWatchlistTabClick()\"\n\t\t\t>\n\t\t\t\t<ion-label>{{w.name.length > 8 ? w.name.substring(0,8) + '...' : w.name}}</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container (activeTabIndexChange)=\"tabIndex($event)\">\n\t\t\t<super-tab *ngFor=\"let w of watchlists\">\n\t\t\t\t<ion-list>\n\t\t\t\t\t<div *ngFor=\"let c of w.stockIds\" (click)=\"openBuySellModal(c)\" class=\"ion-no-padding\" style=\"width: 100%;\">\n\t\t\t\t\t\t<ion-item *ngIf=\"c != undefined\" style=\"width: 100%;\" class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-label class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t<h3>{{c.name}}</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"+c.ltp - +c.ldp >= 0\">\n\t\t\t\t\t\t\t\t<ion-text color=\"success\"><h3>{{c.ltp | number:'1.1-2'}}</h3></ion-text>\n\t\t\t\t\t\t\t\t<p>+{{+c.ltp - +c.ldp | number:'1.1-2'}} (+{{(+c.ltp - +c.ldp) / +c.ldp | percent:'1.1-2'}})</p>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"+c.ltp - +c.ldp < 0\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"><h3>{{c.ltp | number:'1.1-2'}}</h3></ion-text>\n\t\t\t\t\t\t\t\t<p>-{{+c.ltp - +c.ldp | number:'1.1-2'}} (-{{(+c.ltp - +c.ldp) / +c.ldp | percent:'1.1-2'}})</p>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-fab horizontal=\"end\" vertical=\"bottom\" *ngIf=\"w.name != 'Trending'\">\n\t\t\t\t\t<ion-fab-button (click)=\"openCompaniesModal(w._id)\">\n\t\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t\t\t</ion-fab-button>\n\t\t\t\t</ion-fab>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<ion-content padding *ngIf=\"watchlists.length == 0 && dataLoaded\">\n\t\t<div>\n\t\t\t<h6 class=\"gray\">\n\t\t\t\tGo on and create your personal watchlist <br />\n\t\t\t\tby pressing 'Watchlist' in the toolbar\n\t\t\t</h6>\n\t\t</div>\n\t</ion-content>\n</ion-content>\n");

/***/ }),

/***/ "aY2Y":
/*!***********************************************************!*\
  !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.ts ***!
  \***********************************************************/
/*! exports provided: BuySellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellPage", function() { return BuySellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buy-sell.page.html */ "fj9w");
/* harmony import */ var _buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-sell.page.scss */ "O+E9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/stock.service */ "8hSh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");








let BuySellPage = class BuySellPage {
    constructor(route, stockService, orderService, router, userService) {
        this.route = route;
        this.stockService = stockService;
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
        this.price = 0;
        this.quantity = 0;
        this.capitalAtRisk = 0;
        this.limitVal = 0;
        this.approxMargin = 0;
    }
    ngOnInit() {
        this.userService.accountDetails().subscribe((res) => {
            this.availableBalance = res.account.currentBalance;
        });
        this.route.queryParams.subscribe(data => {
            data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false;
        });
        this.route.params.subscribe(data => this.stockService.getStock(data["id"]).subscribe((c) => {
            this.company = c.data;
            this.updateLtp();
        }));
    }
    ngAfterViewInit() {
        this.buySellForm.valueChanges.subscribe(data => {
            this.approxMargin = data.price * data.quantity;
            this.capitalAtRisk = this.approxMargin / this.availableBalance;
            if ((data.quantity == 0 && data.price == 0) || data.quantity == null || data.price == null) {
                this.capitalAtRisk = 0;
                this.approxMargin = 0;
            }
        });
    }
    updateLtp() {
        var _a;
        this.stockService.listen((_a = this.company) === null || _a === void 0 ? void 0 : _a._id).subscribe((res) => {
            this.company.ltp = res[0].price;
        });
    }
    navigateToWatchlist() {
        this.router.navigate(['home', 'watchlist']);
    }
    changeType(event) {
        event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false;
    }
    onSubmit() {
        const quantity = this.buySellForm.value.quantity;
        const price = this.buySellForm.value.price;
        const order = this.buySellForm.value.order;
        const stopLoss = this.buySellForm.value.stopLoss;
        const target = this.buySellForm.value.target;
        if (quantity != '' && order != '' && price != '' && quantity > 0) {
            if (order == 'limit' && price > 0) {
                this.isBuy
                    ? this.orderService.buy(this.company._id, quantity, stopLoss, target, order, price)
                    : this.orderService.sell(this.company._id, quantity, stopLoss, target, order, price);
                this.router.navigate(['home', 'orders']);
            }
            else {
                this.isBuy
                    ? this.orderService.buy(this.company._id, quantity, stopLoss, target, order, this.company.ltp)
                    : this.orderService.sell(this.company._id, quantity, stopLoss, target, order, this.company.ltp);
                this.router.navigate(['home', 'orders']);
            }
        }
    }
};
BuySellPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
BuySellPage.propDecorators = {
    buySellForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['buySellForm',] }],
    marketRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['marketRadio',] }]
};
BuySellPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buy-sell',
        template: _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuySellPage);



/***/ }),

/***/ "fj9w":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/buy-sell/buy-sell.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"['home','watchlist']\" (click)=\"navigateToWatchlist()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{company?.companyName}}</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-select\n\t\t\t\t\tok-text=\"Okay\"\n\t\t\t\t\tcancel-text=\"Cancel\"\n\t\t\t\t\tvalue=\"{{isBuy ? 'true' : 'false'}}\"\n\t\t\t\t\t(ionChange)=\"changeType($event)\"\n\t\t\t\t>\n\t\t\t\t\t<ion-select-option value=\"true\">Buy</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"false\">Sell</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<form #buySellForm=\"ngForm\" id=\"buySellForm\" form-directive>\n\t\t<ion-card>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Quantity</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Lot: 1</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\t\tname=\"quantity\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"quantity\"\n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Price</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Tick: 0.05</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\t\tname=\"price\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"marketRadio.checked ? company?.ltp : limitVal\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled-input':marketRadio.checked}\"\n\t\t\t\t\t\t\t\t[required]=\"!marketRadio.checked\"\n\t\t\t\t\t\t\t\t[disabled]=\"marketRadio.checked\"\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Stop-loss</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"stopLoss\" ngModel required min=\"0\"></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Target</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"target\" ngModel required min=\"0\"></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr />\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"bs-radio-group\">\n\t\t\t\t\t<ion-text><h5>Order</h5></ion-text>\n\t\t\t\t\t<ul class=\"radios\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t#marketRadio\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"market\"\n\t\t\t\t\t\t\t\tid=\"radio-market\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tchecked\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-market\">MARKET</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"limit\"\n\t\t\t\t\t\t\t\tid=\"radio-limit\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-limit\">LIMIT</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr />\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-text-left\">\n\t\t\t\t\t<ion-text><p>Approx. Margin:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Available Balance:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Capital at Risk:</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">\n\t\t\t\t\t<ion-text><p>{{approxMargin}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{availableBalance}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{capitalAtRisk | percent:'1.1'}}</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"tertiary\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm buy\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"!isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"danger\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm Sell\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-watchlist-watchlist-module-es2015.js.map