(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"], {
    /***/
    "8veL":
    /*!*******************************************************!*\
      !*** ./src/app/pages/orders/orders-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function veL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "Ep+G");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "Ep+G":
    /*!*********************************************!*\
      !*** ./src/app/pages/orders/orders.page.ts ***!
      \*********************************************/

    /*! exports provided: OrdersPage */

    /***/
    function EpG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders.page.html */
      "iVDW");
      /* harmony import */


      var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orders.page.scss */
      "F6Pd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/order.service */
      "kVqo");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/modal-edit-order/modal-edit-order.component */
      "LX2U");
      /* harmony import */


      var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/stock.service */
      "8hSh");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(orderService, modalCtrl, actionSheetController, stockService) {
          _classCallCheck(this, OrdersPage);

          this.orderService = orderService;
          this.modalCtrl = modalCtrl;
          this.actionSheetController = actionSheetController;
          this.stockService = stockService;
          this.subscribedPositionSockets = [];
          this.subscribedPendingSockets = [];
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataLoaded = false;
            this.pageIndex = 0;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this = this;

            this.dataLoaded = false;
            this.pending = [];
            this.position = [];
            this.completed = [];
            this.orderService.getAllUserOrders().subscribe(function (res) {
              res.data.forEach(function (o) {
                var order = {
                  id: o._id,
                  stockId: o.stockId,
                  orderCategory: o.orderCategory,
                  name: o.companyName,
                  price: o.price,
                  quantity: o.volume
                };

                _this.orderPlacement(o.transactionOne.status, order, o.transactionOne.price);

                _this.orderPlacement(o.transactionTwo.stoplossStatus, order, o.stoploss, 'stoploss', o.orderCategory);

                _this.orderPlacement(o.transactionTwo.targetStatus, order, o.target, 'target', o.orderCategory);

                if (o.status == 'positioned' && o.transactionOne.status == 'completed') {
                  order.stoploss = o.stoploss;
                  order.target = o.target;

                  _this.position.push(Object.assign({}, order));
                } else if (o.status == 'completed' && o.transactionTwo.stoplossStatus == 'notFilled' && o.transactionTwo.targetStatus == 'notFilled') {
                  var _o = Object.assign({}, order);

                  _o['status'] = 'completed';
                  _o.orderCategory = order.orderCategory == 'buy' ? 'sell' : 'buy';

                  _this.completed.push(_o);
                }
              });

              _this.updateLtp(); // this.totalPandL = this.orderService.totalPandL()

            });
          } // checkIfOrderIsCompleted(complete: Order){
          //   if(complete.transactionOne.status == "completed"){
          //     this.completed.push(complete)
          //   }
          //   else if(complete.transactionOne.status == "pending"){
          //     this.pending.push(complete)
          //   }
          //   if(complete.transactionTwo.status == "pending"){
          //     if(complete.stoploss){
          //       let order = Object.assign({},complete)
          //       order['isStopLoss'] = true
          //       this.pending.push(order)
          //     }
          //     if(complete.target){
          //       let order = Object.assign({},complete)
          //       order['isStopLoss'] = false
          //       this.pending.push(order)
          //     }
          //   }
          // }

        }, {
          key: "orderPlacement",
          value: function orderPlacement(status, order, price, key, orderCategory) {
            var o = Object.assign({}, order);

            switch (status) {
              case 'completed':
                if (orderCategory != null) o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy';else o.orderCategory = order.orderCategory;
                o.price = price;
                o['status'] = status;
                this.completed.push(o);
                break;

              case 'pending':
                if (orderCategory != null) o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy';else o.orderCategory = order.orderCategory;
                key != null ? o.key = key : o.key = 'price';
                console.log('key not recognized as target nor stoploss');
                this.pending.push(o);
                break;

              case 'notFilled':
                if (orderCategory != null) o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy';else o.orderCategory = order.orderCategory;
                o.price = price;
                o['status'] = 'cancelled';
                this.completed.push(o);
                break;

              default:
                break;
            }
          }
        }, {
          key: "updateLtp",
          value: function updateLtp() {
            var _this2 = this;

            this.unsubscribeFromSockets();
            this.position.forEach(function (s) {
              var stockSub = _this2.stockService.listen(s.stockId).subscribe(function (res) {
                s.ltp = res[0].price;
                _this2.dataLoaded = true;
              });

              _this2.subscribedPositionSockets.push(stockSub);
            });
            this.pending.forEach(function (s) {
              var stockSub = _this2.stockService.listen(s.stockId).subscribe(function (res) {
                s.ltp = res[0].price;
                _this2.dataLoaded = true;
              });

              _this2.subscribedPendingSockets.push(stockSub);
            });
            if (this.position.length == 0 && this.pending.length == 0 && this.completed.length == 0 || this.completed.length > 0) this.dataLoaded = true;
          }
        }, {
          key: "ordersActionSheet",
          value: function ordersActionSheet(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Order control panel',
                        buttons: [{
                          text: 'Manage',
                          icon: 'cog',
                          handler: function handler() {
                            if (_this3.pageIndex == 0) _this3.openModalEditOrderPosition(order);else if (_this3.pageIndex == 2) _this3.openModalEditOrderPending(order);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openModalEditOrderPosition",
          value: function openModalEditOrderPosition(position) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"],
                        componentProps: {
                          position: position
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data == true) _this4.getOrders();
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openModalEditOrderPending",
          value: function openModalEditOrderPending(pending) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"],
                        componentProps: {
                          pending: pending
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data == true) _this5.getOrders();
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "unsubscribeFromSockets",
          value: function unsubscribeFromSockets() {
            this.subscribedPendingSockets.forEach(function (s) {
              s.unsubscribe();
            });
            this.subscribedPendingSockets.splice(0, this.subscribedPendingSockets.length);
            this.subscribedPositionSockets.forEach(function (s) {
              s.unsubscribe();
            });
            this.subscribedPositionSockets.splice(0, this.subscribedPositionSockets.length);
          }
        }, {
          key: "tabIndex",
          value: function tabIndex(tab) {
            if (typeof tab == 'number') this.pageIndex = tab;else this.pageIndex = tab.detail.index;
            this.updateLtp();
          }
        }, {
          key: "filterPosition",
          value: function filterPosition(e) {
            this.filteredPosition = this.position.filter(function (p) {
              return p.name.toLowerCase().includes(e.detail.value.toLowerCase());
            });
          }
        }, {
          key: "filterCompleted",
          value: function filterCompleted(e) {
            this.filteredCompleted = this.completed.filter(function (p) {
              return p.name.toLowerCase().includes(e.detail.value.toLowerCase());
            });
          }
        }, {
          key: "filterPending",
          value: function filterPending(e) {
            this.filteredPending = this.pending.filter(function (p) {
              return p.name.toLowerCase().includes(e.detail.value.toLowerCase());
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.unsubscribeFromSockets();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeFromSockets();
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrdersPage);
      /***/
    },

    /***/
    "F6Pd":
    /*!***********************************************!*\
      !*** ./src/app/pages/orders/orders.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function F6Pd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\n.skeleton-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\nsuper-tab-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\n.failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\ntable p {\n  padding-bottom: 0;\n  margin-bottom: 0%;\n  padding-left: 10px;\n}\n\n.column-centralise-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n\nion-card ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-list ion-grid {\n  padding-right: 0;\n}\n\nion-list ion-grid ion-col {\n  padding-right: 0;\n}\n\nion-item .success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\nion-item .failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\nion-item p {\n  font-size: 13px;\n}\n\nion-item span {\n  color: #747474;\n}\n\nion-item .sell {\n  background-color: #ffa8a880;\n  color: #ff0000;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .buy {\n  background-color: #7474ff80;\n  color: #0008ff;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .cancelled {\n  background-color: #e3e3e380;\n  color: #4b4b4b;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .complete {\n  background-color: #4dff4d80;\n  color: #078f00;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .padding-hor {\n  padding: 0 7px;\n}\n\nion-item .padding-strt {\n  padding-left: 7px;\n}\n\n@media (prefers-color-scheme: dark) {\n  .logo {\n    height: 40px;\n    width: 40px;\n    padding-right: 10px;\n  }\n\n  ion-item span {\n    color: #949494;\n  }\n  ion-item .sell {\n    background-color: #ff747459;\n    color: #ffaaaa;\n  }\n  ion-item .buy {\n    background-color: #7474ff59;\n    color: #aaadff;\n  }\n  ion-item .cancelled {\n    background-color: #6a6a6a80;\n    color: #ffffff;\n  }\n  ion-item .complete {\n    background-color: #1fe41f80;\n    color: #4dff43;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, h3, p {\n    font-size: 13px !important;\n  }\n\n  ion-card-subtitle {\n    font-size: 13px !important;\n  }\n\n  ion-card-title {\n    font-size: 14px !important;\n  }\n\n  ion-searchbar {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUVI7O0FBTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVFKOztBQVBJO0VBQ0ksZ0JBQUE7QUFTUjs7QUFSUTtFQUNJLGdCQUFBO0FBVVo7O0FBTEk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFRUjs7QUFOSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVFSOztBQU5JO0VBQ0ksZUFBQTtBQVFSOztBQU5JO0VBQ0ksY0FBQTtBQVFSOztBQU5JO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksY0FBQTtBQVFSOztBQU5JO0VBQ0ksaUJBQUE7QUFRUjs7QUFMQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQVFOOztFQUxNO0lBQ0ksY0FBQTtFQVFWO0VBTk07SUFDSSwyQkFBQTtJQUNBLGNBQUE7RUFRVjtFQU5NO0lBQ0ksMkJBQUE7SUFDQSxjQUFBO0VBUVY7RUFOTTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQVFWO0VBTk07SUFDSSwyQkFBQTtJQUNBLGNBQUE7RUFRVjtBQUNGOztBQUxBO0VBQ0k7SUFDRSwwQkFBQTtFQU9KOztFQUxFO0lBQ0UsMEJBQUE7RUFRSjs7RUFORTtJQUNJLDBCQUFBO0VBU047O0VBUEU7SUFDSSwwQkFBQTtFQVVOOztFQVJFO0lBQ0ksMEJBQUE7RUFXTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5za2VsZXRvbi1yb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuc3VwZXItdGFiLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3VjY2Vzc3tcbiAgICBjb2xvcjojN2ZkMzAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZmFpbHVyZXtcbiAgICBjb2xvcjojZDIwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50YWJsZSBwe1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jb2x1bW4tY2VudHJhbGlzZS10ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5pb24tY2FyZHtcbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5pb24tbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLWdyaWR7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgLnN1Y2Nlc3N7XG4gICAgICAgIGNvbG9yOiM3ZmQzMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5mYWlsdXJle1xuICAgICAgICBjb2xvcjojZDIwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiM3NDc0NzQ7XG4gICAgfVxuICAgIC5zZWxse1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOGE4ODA7XG4gICAgICAgIGNvbG9yOiNmZjAwMDA7XG4gICAgICAgIHBhZGRpbmc6M3B4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmJ1eXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjgwO1xuICAgICAgICBjb2xvcjojMDAwOGZmO1xuICAgICAgICBwYWRkaW5nOjNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jYW5jZWxsZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM4MDtcbiAgICAgICAgY29sb3I6IzRiNGI0YjtcbiAgICAgICAgcGFkZGluZzozcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY29tcGxldGV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGZmNGQ4MDtcbiAgICAgICAgY29sb3I6IzA3OGYwMDtcbiAgICAgICAgcGFkZGluZzozcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAucGFkZGluZy1ob3J7XG4gICAgICAgIHBhZGRpbmc6MCA3cHg7XG4gICAgfVxuICAgIC5wYWRkaW5nLXN0cnR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5sb2dve1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiM5NDk0OTQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NDc0NTk7XG4gICAgICAgICAgICBjb2xvcjojZmZhYWFhO1xuICAgICAgICB9XG4gICAgICAgIC5idXl7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3NGZmNTk7XG4gICAgICAgICAgICBjb2xvcjojYWFhZGZmO1xuICAgICAgICB9XG4gICAgICAgIC5jYW5jZWxsZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2YTZhODA7XG4gICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wbGV0ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmU0MWY4MDtcbiAgICAgICAgICAgIGNvbG9yOiM0ZGZmNDM7XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaDMsIHB7XG4gICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1zZWFyY2hiYXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "Xlj8":
    /*!***********************************************!*\
      !*** ./src/app/pages/orders/orders.module.ts ***!
      \***********************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function Xlj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "8veL");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "Ep+G");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "iVDW":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function iVDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header #header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Orders</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<super-tabs *ngIf=\"!dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Position</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Completed</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Pending</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\t\t\t\t<ion-card>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-card-subtitle class=\"skeleton-row\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t\t</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title class=\"skeleton-row\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n\t\t\t\t\t\t</ion-card-title>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let item of [].constructor(6)\">\n\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 25%;margin-right: 10px;\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<!-- <span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 25%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-end\">\n\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<!-- <span style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<super-tabs (tabChange)=\"tabIndex($event)\" *ngIf=\"dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button (click)=\"tabIndex(0)\">\n\t\t\t\t<ion-label>Position</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button (click)=\"tabIndex(1)\">\n\t\t\t\t<ion-label>Completed</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button (click)=\"tabIndex(2)\">\n\t\t\t\t<ion-label>Pending</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container (activeTabIndexChange)=\"tabIndex($event)\">\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterPosition($event)\"></ion-searchbar>\n\t\t\t\t<!-- <ion-card>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-card-subtitle>Total P&L</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title [ngClass]=\"{'success': totalPandL > 0, 'failure': totalPandL < 0}\">\n\t\t\t\t\t\t\t{{totalPandL > 0 ? '+' : ''}}{{totalPandL}}\n\t\t\t\t\t\t</ion-card-title>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card> -->\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let p of filteredPosition || position\" (click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': p.orderCategory == 'buy', 'sell': p.orderCategory == 'sell'}\"> {{p.name}} </span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Price: {{p.price}}</p>\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{p?.orderCategory == 'sell' ? '-' : '+'}}{{p.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right ion-no-padding\">\n\t\t\t\t\t\t\t\t\t<!-- todo : CENTRALIZE -->\n\t\t\t\t\t\t\t\t\t<table class=\"ion-float-right\">\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>P&L</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-text [color]=\"+p.ltp - p.price >= 0 ? 'success' : 'danger'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{+p.ltp - p.price > 0 ? ' +' : ' '}}{{+(p.ltp - p.price)*p.quantity | number:'1.2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>LTP</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{p.ltp}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>SL</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{p.stoploss}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterCompleted($event)\"></ion-searchbar>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let c of filteredCompleted || completed\">\n\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': c.orderCategory == 'buy', 'sell': c.orderCategory == 'sell'}\"> {{c.name}} </span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<!-- <p>Price: {{c.price}}</p> -->\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{c?.orderCategory == 'sell' ? '-' : '+'}}{{c.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'cancelled': c.status == 'cancelled', 'complete': c.status == 'completed'}\">\n\t\t\t\t\t\t\t\t\t\t\t{{c.status | uppercase}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<strong>Price</strong>\n\t\t\t\t\t\t\t\t\t\t{{c.price}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<!-- <p>\n\t\t\t\t\t\t\t\t\t\t<strong>P&L</strong>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'success': c.pAndL > 0, 'failure':c.pAndL < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t{{c.pAndL > 0 ? ' +' : ' '}}{{c.pAndL}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>\n\t\t\t\t\t\t\t\t\t\t<strong>Exit Price</strong>\n\t\t\t\t\t\t\t\t\t\t{{c.exitPrice}}\n\t\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterPending($event)\"></ion-searchbar>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let p of filteredPending || pending\" (click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': p.orderCategory == 'buy', 'sell': p.orderCategory == 'sell'}\"> {{p.name}} </span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{p?.orderCategory == 'sell' ? '-' : '+'}}{{p.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right column-centralise-text\">\n\t\t\t\t\t\t\t\t\t<p style=\"margin-bottom:0px\"><strong>LTP</strong> {{p.ltp}}</p>\n\t\t\t\t\t\t\t\t\t<p><strong>{{p.key | titlecase}}</strong> {{p.price}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-orders-orders-module-es5.js.map