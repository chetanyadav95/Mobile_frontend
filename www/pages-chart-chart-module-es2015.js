(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chart-chart-module"],{

/***/ "5v4I":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/watchlist\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Chart</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"app-tv-chart-container\" id=\"tv_chart_container\"></div>\n</ion-content>\n");

/***/ }),

/***/ "FvzE":
/*!*********************************************!*\
  !*** ./src/app/pages/chart/chart.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-chart-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnQvY2hhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnQvY2hhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jaGFydC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "GDyY":
/*!*******************************************!*\
  !*** ./src/app/pages/chart/chart.page.ts ***!
  \*******************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPage", function() { return ChartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart.page.html */ "5v4I");
/* harmony import */ var _chart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.page.scss */ "FvzE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_charting_library_charting_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/charting_library/charting_library */ "eLIq");
/* harmony import */ var _assets_charting_library_charting_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charting_library_charting_library__WEBPACK_IMPORTED_MODULE_4__);





let ChartPage = class ChartPage {
    constructor() {
        this._symbol = 'AAPL';
        this._interval = 'D';
        // BEWARE: no trailing slash is expected in feed URL
        this._datafeedUrl = 'https://demo_feed.tradingview.com';
        this._libraryPath = '/assets/charting_library/';
        this._chartsStorageUrl = 'https://saveload.tradingview.com';
        this._chartsStorageApiVersion = '1.1';
        this._clientId = 'tradingview.com';
        this._userId = 'public_user_id';
        this._fullscreen = false;
        this._autosize = true;
        this._containerId = 'tv_chart_container';
        this._tvWidget = null;
    }
    set symbol(symbol) {
        this._symbol = symbol || this._symbol;
    }
    set interval(interval) {
        this._interval = interval || this._interval;
    }
    set datafeedUrl(datafeedUrl) {
        this._datafeedUrl = datafeedUrl || this._datafeedUrl;
    }
    set libraryPath(libraryPath) {
        this._libraryPath = libraryPath || this._libraryPath;
    }
    set chartsStorageUrl(chartsStorageUrl) {
        this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
    }
    set chartsStorageApiVersion(chartsStorageApiVersion) {
        this._chartsStorageApiVersion =
            chartsStorageApiVersion || this._chartsStorageApiVersion;
    }
    set clientId(clientId) {
        this._clientId = clientId || this._clientId;
    }
    set userId(userId) {
        this._userId = userId || this._userId;
    }
    set fullscreen(fullscreen) {
        this._fullscreen = fullscreen || this._fullscreen;
    }
    set autosize(autosize) {
        this._autosize = autosize || this._autosize;
    }
    set containerId(containerId) {
        this._containerId = containerId || this._containerId;
    }
    ngOnInit() {
        function getLanguageFromURL() {
            const regex = new RegExp('[\\?&]lang=([^&#]*)');
            const results = regex.exec(location.search);
            return results === null
                ? null
                : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
        const widgetOptions = {
            symbol: this._symbol,
            datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this._datafeedUrl),
            interval: this._interval,
            container_id: this._containerId,
            library_path: this._libraryPath,
            locale: getLanguageFromURL() || 'en',
            disabled_features: ['use_localstorage_for_settings'],
            enabled_features: ['study_templates'],
            charts_storage_url: this._chartsStorageUrl,
            charts_storage_api_version: this._chartsStorageApiVersion,
            client_id: this._clientId,
            user_id: this._userId,
            fullscreen: this._fullscreen,
            autosize: this._autosize,
        };
        const tvWidget = new _assets_charting_library_charting_library__WEBPACK_IMPORTED_MODULE_4__["widget"](widgetOptions);
        this._tvWidget = tvWidget;
        tvWidget.onChartReady(() => {
            tvWidget.headerReady().then(() => {
                const button = tvWidget.createButton();
                button.setAttribute('title', 'Click to show a notification popup');
                button.classList.add('apply-common-tooltip');
                button.addEventListener('click', () => tvWidget.showNoticeDialog({
                    title: 'Notification',
                    body: 'TradingView Charting Library API works correctly',
                    callback: () => {
                        console.log('Noticed!');
                    },
                }));
                button.innerHTML = 'Check API';
            });
        });
    }
    ngOnDestroy() {
        if (this._tvWidget !== null) {
            this._tvWidget.remove();
            this._tvWidget = null;
        }
    }
};
ChartPage.propDecorators = {
    symbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    datafeedUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    libraryPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    chartsStorageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    chartsStorageApiVersion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clientId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    autosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    containerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chart',
        template: _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChartPage);



/***/ }),

/***/ "ThXp":
/*!*********************************************!*\
  !*** ./src/app/pages/chart/chart.module.ts ***!
  \*********************************************/
/*! exports provided: ChartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-routing.module */ "w9TJ");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart.page */ "GDyY");







let ChartPageModule = class ChartPageModule {
};
ChartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartPageRoutingModule"]
        ],
        declarations: [
            _chart_page__WEBPACK_IMPORTED_MODULE_6__["ChartPage"],
        ]
    })
], ChartPageModule);



/***/ }),

/***/ "eLIq":
/*!*********************************************************!*\
  !*** ./src/assets/charting_library/charting_library.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,(function(t){"use strict";var e=function(){return(e=Object.assign||function(t){for(var e,o=arguments,n=1,i=arguments.length;n<i;n++)for(var r in e=o[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(t,n){var i=e({},t);for(var r in n)"object"!=typeof t[r]||null===t[r]||Array.isArray(t[r])?void 0!==n[r]&&(i[r]=n[r]):i[r]=o(t[r],n[r]);return i}var n={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},i={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function r(){return"CL v17.025 (internal id 2f0c4150 @ 2020-11-19T09:50:09.264Z)"}var s=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=o(i,t),t.preset){var e=n[t.preset];e?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(e.disabled_features):this._options.disabled_features=e.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(e.enabled_features):this._options.enabled_features=e.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.headerReady=function(){var t=this;return this._innerWindowLoaded.then((function(){return t._innerWindow().headerReady()}))},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.getLanguage=function(){return this._options.locale},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e,o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o){this._innerAPI().saveChartToServer(t,e,o)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=o(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype.layoutName=function(){return this._innerAPI().layoutName()},t.prototype.changeTheme=function(t,e){this._innerWindow().changeTheme(t,e)},t.prototype.getTheme=function(){return this._innerWindow().getTheme()},t.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},t.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},t.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},t.prototype.drawOnAllCharts=function(t){this._innerAPI().drawOnAllCharts(t)},t.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},t.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},t.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},t.prototype.setIntervalLinkingEnabled=function(t){this._innerAPI().setIntervalLinkingEnabled(t)},t.prototype.setTimeFrame=function(t){this._innerAPI().setTimeFrame(t)},t.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},t.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},t.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},t.prototype.timeSync=function(){return this._innerAPI().timeSync()},t.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},t.prototype.takeClientScreenshot=function(){return this._innerAPI().takeClientScreenshot()},t.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},t.prototype._innerWindow=function(){return this._iFrame.contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e,this._iFrame=o.querySelector("#"+this._id);var n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(t){var e=function(){n.removeEventListener("load",e,!1),t()};n.addEventListener("load",e,!1)})),this._innerWindowLoaded.then((function(){t._innerWindow().widgetReady((function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){var n=o[e];try{n.call(t)}catch(i){console.error(i)}}t._innerWindow().initializationFinished()}))}))},t.prototype._render=function(){var t=window;if(t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)t[this._id].chartContent={json:this._options.saved_data};else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var e=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.2f0c4150.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}();window.TradingView=window.TradingView||{},window.TradingView.version=r,t.version=r,t.widget=s,Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ "w9TJ":
/*!*****************************************************!*\
  !*** ./src/app/pages/chart/chart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageRoutingModule", function() { return ChartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.page */ "GDyY");




const routes = [
    {
        path: '',
        component: _chart_page__WEBPACK_IMPORTED_MODULE_3__["ChartPage"]
    },
];
let ChartPageRoutingModule = class ChartPageRoutingModule {
};
ChartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChartPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-chart-chart-module-es2015.js.map