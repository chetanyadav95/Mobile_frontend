import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { TradeHistoryService } from 'src/app/services/trade-history.service';
import {
  widget,
  IChartingLibraryWidget,
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  IBasicDataFeed,
  Timezone,
  HistoryDepth,
  ResolutionBackValues,
  SeriesFormat,
} from '../../../assets/charting_library/charting_library';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit, OnDestroy {
  private _symbol: ChartingLibraryWidgetOptions['symbol'] = '5fe2f6a0c47d337472943107';
  private _interval: ChartingLibraryWidgetOptions['interval'] = '1' as ResolutionString;
  // BEWARE: no trailing slash is expected in feed URL
  // private _datafeedUrl = 'https://demo_feed.tradingview.com';
  private _libraryPath: ChartingLibraryWidgetOptions['library_path'] =
    '/assets/charting_library/';
  private _chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'] =
    'https://saveload.tradingview.com';
  private _chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'] =
    '1.1';
  private _clientId: ChartingLibraryWidgetOptions['client_id'] =
    'tradingview.com';
  private _userId: ChartingLibraryWidgetOptions['user_id'] = 'public_user_id';
  private _fullscreen: ChartingLibraryWidgetOptions['fullscreen'] = false;
  private _autosize: ChartingLibraryWidgetOptions['autosize'] = true;
  private _containerId: ChartingLibraryWidgetOptions['container_id'] =
    'tv_chart_container';
  private _tvWidget: IChartingLibraryWidget | null = null;

  @Input()
  set symbol(symbol: ChartingLibraryWidgetOptions['symbol']) {
    this._symbol = symbol || this._symbol;
  }

  @Input()
  set interval(interval: ChartingLibraryWidgetOptions['interval']) {
    this._interval = interval || this._interval;
  }

  // @Input()
  // set datafeedUrl(datafeedUrl: string) {
  //   this._datafeedUrl = datafeedUrl || this._datafeedUrl;
  // }

  @Input()
  set libraryPath(libraryPath: ChartingLibraryWidgetOptions['library_path']) {
    this._libraryPath = libraryPath || this._libraryPath;
  }

  @Input()
  set chartsStorageUrl(
    chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url']
  ) {
    this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
  }

  @Input()
  set chartsStorageApiVersion(
    chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version']
  ) {
    this._chartsStorageApiVersion =
      chartsStorageApiVersion || this._chartsStorageApiVersion;
  }

  @Input()
  set clientId(clientId: ChartingLibraryWidgetOptions['client_id']) {
    this._clientId = clientId || this._clientId;
  }

  @Input()
  set userId(userId: ChartingLibraryWidgetOptions['user_id']) {
    this._userId = userId || this._userId;
  }

  @Input()
  set fullscreen(fullscreen: ChartingLibraryWidgetOptions['fullscreen']) {
    this._fullscreen = fullscreen || this._fullscreen;
  }

  @Input()
  set autosize(autosize: ChartingLibraryWidgetOptions['autosize']) {
    this._autosize = autosize || this._autosize;
  }

  @Input()
  set containerId(containerId: ChartingLibraryWidgetOptions['container_id']) {
    this._containerId = containerId || this._containerId;
  }
  
  constructor(public tradeHistory: TradeHistoryService, public socketService: SocketService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.symbol = data['id'];
      this.loadTradingViewData();
          const widgetOptions: ChartingLibraryWidgetOptions = {
              symbol: this._symbol,
              datafeed: this.Datafeed,
              interval: this._interval,
              container_id: this._containerId,
              library_path: this._libraryPath,
              locale: this.getLanguageFromURL() || 'en',
              disabled_features: ['use_localstorage_for_settings'],
              enabled_features: ['study_templates'],
              charts_storage_url: this._chartsStorageUrl,
              charts_storage_api_version: this._chartsStorageApiVersion,
              client_id: this._clientId,
              user_id: this._userId,
              fullscreen: this._fullscreen,
              autosize: this._autosize,
              overrides: {
          "mainSeriesProperties.showCountdown": true,
          "paneProperties.background": "#131722",
          "paneProperties.vertGridProperties.color": "#363c4e",
          "paneProperties.horzGridProperties.color": "#363c4e",
          "symbolWatermarkProperties.transparency": 90,
          "scalesProperties.textColor" : "#AAA",
          "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
          "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
        }
          };
  
      const tvWidget = new widget(widgetOptions);
      this._tvWidget = tvWidget;
  
      tvWidget.onChartReady(() => {
        tvWidget.headerReady().then(() => {
          const button = tvWidget.createButton();
          button.setAttribute('title', 'Click to show a notification popup');
          button.classList.add('apply-common-tooltip');
          button.addEventListener('click', () =>
            tvWidget.showNoticeDialog({
              title: 'Notification',
              body: 'TradingView Charting Library API works correctly',
              callback: () => {
                console.log('Noticed!');
              },
            })
          );
          button.innerHTML = 'Check API';
        });
      });
    })

  }

  Datafeed:IBasicDataFeed;
  timezone:Timezone='Asia/Kolkata';
  supportedResolutions:ResolutionString[] = [
    "1" as ResolutionString,
    "5" as ResolutionString,
    "15" as ResolutionString,
    "60" as ResolutionString,
    "D" as ResolutionString
  ];
  historyDepthReturn:HistoryDepth;
  config = {
      supported_resolutions: this.supportedResolutions
  };

  loadTradingViewData(){
    this.Datafeed = 
    {
      
      onReady: cb => {
        console.log('Inside on ready');
        setTimeout(() => cb(this.config), 0);
          
      },
      searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
        console.log('Search Symbols running', userInput, exchange, symbolType);
        // const symbols = await getAllSymbols();
        // const newSymbols = symbols.filter(symbol => {
        // const isExchangeValid = exchange === '' || symbol.exchange === exchange;
        // const isFullSymbolContainsInput = symbol.full_name
        //     .toLowerCase()
        //     .indexOf(userInput.toLowerCase()) !== -1;
        // return isExchangeValid && isFullSymbolContainsInput;
        // });
        // onResultReadyCallback(newSymbols);
      },
      resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        
        console.log('ResolveSymbol running');
        
        // var split_data = symbolName.split(/[:/]/);
        
        var symbol_stub = {
          name: symbolName,
          description: symbolName,
          type: 'stock',
          session: '0915-1530',
          timezone: this.timezone,
          ticker: symbolName,
          exchange: '',
          minmov: 1,
          pricescale: 100,
          has_intraday: true,
          intraday_multipliers: ['1','5', '15', '60', 'D'],
          has_daily: true,
          has_weekly_and_monthly: false,
          supported_resolutions:  this.supportedResolutions,
          volume_precision: 0,
          // data_status: 'streaming',
          full_name:'full_name',
          listed_exchange:'listed_exchange',
          format: 'price' as SeriesFormat
        }
        
        setTimeout(function() {
          onSymbolResolvedCallback(symbol_stub)
          console.log('Resolved Symbol ', JSON.stringify(symbol_stub));
        }, 0)
        
    
      },
      getBars: (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        console.log('getBars method running');
        console.log('symbolinfo '+JSON.stringify(symbolInfo) + ' resolution '+ resolution + ' from '+ from + ' to '+ to);
        // console.log('function args',arguments)
        // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
        var split_symbol = symbolInfo.name.split(/[:/]/)
        if(resolution=='1D'){
          resolution='1440' as ResolutionString;
        }
        if(resolution=='3D'){
          resolution='4320' as ResolutionString;
        }
        //sending 2000 default limit
        this.tradeHistory.getBars(symbolInfo,resolution,from,to, firstDataRequest,2000).subscribe((res) => {
          console.log({res})
          if (res.message && res.message === 'failed') {
            console.log('CryptoCompare data fetching error :',res.message)
            onHistoryCallback([], {noData: true})
          }
          if (res.data.historyData['1month'].length) {
            var bars = res.data.historyData['1month'].map(el => {
              return {
                time: el.date, 
                low: el.low,
                high: el.high,
                open: el.open,
                close: el.close,
                volume: el.volume
              }
            })
              if (firstDataRequest) {
                var lastBar = bars[bars.length - 1]
                history[symbolInfo.name] = {lastBar: lastBar}
              }
              if (bars.length) {
                onHistoryCallback(bars, {noData: false})
              } else {
                onHistoryCallback([], {noData: true})
              }
          } else {
            onHistoryCallback([], {noData: true})
          }
        })
        
    
      },
      subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        console.log('subscribeBars Runnning')
        this.socketService.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback,history)
      },
      unsubscribeBars: subscriberUID => {
        console.log('unsubscribeBars Running')
    
        this.socketService.unsubscribeBars(subscriberUID)
      },
      calculateHistoryDepth:(resolution: ResolutionString, resolutionBack: ResolutionBackValues, intervalBack: number): HistoryDepth | undefined =>{
        console.log('calculate History depth is running ');
        console.log('resolution '+ resolution);
        if (resolution === "1D") {
          return {
              resolutionBack: 'M',
              intervalBack: 6
          };
        }
        if(resolution=='3D'){
          return {
            resolutionBack: 'M',
            intervalBack: 6
          };
        }
        if(parseInt(resolution) < 60 ){
          //this.historyDepthReturn.resolutionBack = 'D';
          //this.historyDepthReturn.intervalBack = 1;
          return {resolutionBack: 'D', intervalBack: 1};
        }
        else{
          return undefined;
        }
        
        
      },
      getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
        console.log('getMarks Running')
      },
      getTimescaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
        console.log('getTimeScaleMarks Running')
      },
      getServerTime: cb => {
        console.log('getServerTime Running')
      }
    }
  }

  getLanguageFromURL(): LanguageCode | null {
    const regex = new RegExp('[\\?&]lang=([^&#]*)');
    const results = regex.exec(location.search);

    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' ')) as LanguageCode;
  }

  ngOnDestroy() {
    if (this._tvWidget !== null) {
      this._tvWidget.remove();
      this._tvWidget = null;
    }
  }
}