// const ERROR_LIST: [] = [];
import Qs from 'qs';
import { isError } from "util";
const NOW_DATE = Date.now();

// const ADD_DATA: object = {};

// window.Performance = Performance;

// Performance.addError = function (err: IError) {
//   err = {
//     method: 'GET',
//     n: 'js',
//     message: err.message,
//     data: {
//       col: err.col,
//       line: err.line,
//       resUrl: err.resUrl
//     }
//   }
//   ERROR_LIST.push(err)
// }
// Performance.addData = function (fn: Function) {
//   fn && fn(ADD_DATA)
// }

class PerformanceIext implements Performance {
  navigation!: PerformanceNavigation;
  onresourcetimingbufferfull!: ((this: Performance, ev: Event) => any) | null;
  timeOrigin!: number;
  timing!: PerformanceTiming;
  clearMarks(markName?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  clearMeasures(measureName?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  clearResourceTimings(): void {
    throw new Error("Method not implemented.");
  }
  getEntries(): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  getEntriesByName(name: string, type?: string | undefined): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  getEntriesByType(type: string): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  mark(markName: string): void {
    throw new Error("Method not implemented.");
  }
  measure(measureName: string, startMark?: string | undefined, endMark?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  now(): number {
    throw new Error("Method not implemented.");
  }
  setResourceTimingBufferSize(maxSize: number): void {
    throw new Error("Method not implemented.");
  }
  toJSON() {
    throw new Error("Method not implemented.");
  }
  addEventListener<K extends "resourcetimingbufferfull">(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
  addEventListener(type: any, listener: any, options?: any) {
    throw new Error("Method not implemented.");
  }
  removeEventListener<K extends "resourcetimingbufferfull">(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
  removeEventListener(type: any, listener: any, options?: any) {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
}

const PERFORMANCE_REPORT: number = 1;
const REQUEST_REPORT: number = 2;
const ERROR_REPORT: number = 3;

const LAST_TIMESTAMP = new Date().setHours(23, 59, 59, 999);
const NOT_AJAX_ARR = ['fetch', 'xmlhttprequest'];

/**
 * @desc new Monitor(opts, fn)
 */
export default class Monitor extends PerformanceIext {
  options: any;
  fn: Function;
  initConf: {
    // 资源列表
    resourceList: object[];
    // 页面信息
    performance: {};
    // 是否捕获error
    isError: boolean;
    // 错误列表
    errorList: object[];
    // referrer 来源
    lastURI: string;
    // 当前页面
    currentPage: string;
    // fetch数量
    fetchCount: Number;
    // ajax onload数量
    loadCount: Number;
    // 页面ajax数量
    ajaxCount: Number;
    // 页面fetch总数量
    fetchAmount: Number;
    // 页面ajax信息
    ajaxMsg: {};
    // ajax成功执行函数
    ajaxSuccess: string;
    // 是否有ajax
    hasAjax: boolean;
    // 是否有fetch
    hasFetch: boolean
  };
  constructor(options: any, fn: Function) {
    super();
    this.options = options;
    this.fn = fn;
    this.initConf = {
      resourceList: [],
      performance: {},
      isError: true,
      errorList: [],
      lastURI: document.referrer && document.referrer !== window.location.href ? document.referrer : '',
      fetchCount: 0,
      loadCount: 0,
      ajaxCount: 0,
      fetchAmount: 0,
      ajaxMsg: {},
      ajaxSuccess: '',
      hasAjax: true,
      hasFetch: true,
      currentPage: ''
    }
  }

  private getOptions() {
    let opts = Object.assign({
      // 上报地址
      domain: 'https://localhost:8888/t.gif',
      // 脚本延迟上报时间
      outTime: 300,
      // ajax请求时需要过滤的url信息
      filterUrl: [],
      // 是否上报页面性能数据
      isPage: true,
      // 是否上报ajax性能数据
      isAjax: true,
      // 是否上报页面资源数据
      isResource: true,
      // 是否上报错误信息
      isError: true,
      // 提交参数
      add: {},
    }, this.options);

    const initError = {
      t: '',
      n: 'js',
      msg: '',
      data: {}
    }
    return {
      opts,
      initError
    }
  }

  private get params() {
    return this.getOptions();
  }

  /**
   * @desc 异常捕获与拦截
   * js运行时错误
   */
  private captureError() {
    // 捕获script,css,img etc.
    window.addEventListener('error', (e: any) => {
      const errInfo = Object.assign({ ...this.params.initError }, {
        t: NOW_DATE,
        n: 'resource',
        msg: `${e.target.localName || e.target.nodeName} is load error!`,
        method: 'GET',
        data: {
          errPath: e.path.reduce((prev, cur) => {
            const currentBase = `${prev}>${cur.localName || cur.nodeName}`
            
            return !cur.className ? currentBase : `${currentBase}.${cur.className || ''}`
          }, ''),
          target: e.target.localName || e.target.nodeName,
          type: e.type,
          resourceUrl: e.target.currentSrc || e.target.tagName
        }
      });
      e.target !== window && this.initConf.errorList.push(errInfo)
    }, true)
    // 捕获 jsruntime error
    window.onerror = (msg,  url,  row, col, error) => {
      setTimeout(() => {
        const errorRunTime = Object.assign({ ...this.params.initError }, {
          col: col || window.event || 0,
          msg: error && error.stack ? error.stack.toString() : msg,
          t: NOW_DATE,
          data: {
            resourceUrl: url,
            row: row,
            col: col
          }
        })
        this.initConf.errorList.push(errorRunTime)
      }, 0)
    }
    // promise
    window.addEventListener('unhandledrejection', (e) => {
      let resourceUrl
      const formatStack = e.reason.stack.match(/\(.+?\)/)[0]
      const formatStackRowCol = formatStack.replace(/\w.+[js|html]/g, $1 => { resourceUrl = $1; return ''; }) || ''
      const colRow = formatStackRowCol.split(':') || []

      const errorPromise = Object.assign({ ...this.params.initError }, {
        msg: e.reason.message || '',
        stack: e.reason.stack || '',
        t: NOW_DATE,
        type: e.type,
        data: {
          resourceUrl,
          col: colRow[1],
          row: colRow[2]
        }
      })
      this.initConf.errorList.push(errorPromise)
    }, false)
  }

  // 页面性能信息
  public performancePage() {
    if (!window.performance) return;
    const timing = performance.timing;
    this.initConf = {
      ...this.initConf,
      performance: {
        // dns 解析
        dnsTiming: timing.domainLookupEnd - timing.domainLookupStart || 0,
        // tcp 建立
        tcpTiming: timing.connectEnd- timing.connectStart || 0,
        // request
        reqTiming: timing.responseEnd - timing.requestStart || 0,
        // 白屏
        whiteTiming: timing.responseStart - timing.navigationStart || 0,
        // dom 渲染
        domTiming: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart || 0,
        // dom 解析耗时
        domInteractive: timing.domComplete - timing.domInteractive || 0,
        // onload
        onloadTiming: timing.loadEventEnd- timing.loadEventStart || 0,
        // ready
        readyTiming: timing.fetchStart - timing.navigationStart || 0,
      }
    }
  }
  // 页面资源信息
  public performanceSource() {
    if (!window?.performance?.getEntries) return false;
    const resources = window.performance.getEntriesByType('resource');
    if (!resources || !resources?.length) return [];
    const {
      isAjax,
      isResource
    } = this.params.opts;
    this.initConf = {
      ...this.initConf,
      resourceList: resources.map((item: PerformanceEntry) => {
        const resourceData = item.toJSON();
        if (!isAjax && (NOT_AJAX_ARR.includes(resourceData.initiatorType))) return {};
        if (!isResource && (resourceData.initiatorType !== 'xmlhttprequest' && resourceData.initiatorType !== 'fetchrequest')) return {};
        const midData = {
          name: resourceData.name,
          method: 'GET',
          type: resourceData.entryType,
          initiatorType: resourceData.initiatorType || '',
          nextHopPortocol: resourceData.nextHopProtocol || '',
          duration: resourceData.duration.toFixed(2) || 0,
          decodedBodySize: resourceData.decodedBodySize || 0,
        }
        const name = midData.name ? midData?.name?.split('?')[0] : '';
        const ajaxMsg = this.initConf.ajaxMsg[name] || ''
        if (ajaxMsg) {
          return Object.assign({ ...midData }, {
            method: ajaxMsg.method || 'GET',
            type: ajaxMsg.type || midData.type,
            decodedBodySize: midData.decodedBodySize || ajaxMsg.decodedBodySize
          })
        }
        return midData;
      })
    }
  }

  // 上报
  public reportData(reportType?: number) {
    const {
      isPage,
      outTime,
      isError,
      domain
    } = this.params.opts;
    console.log(domain)
    if (isError) this.captureError()
    setTimeout(() => {
      if (isPage) this.performancePage()
      this.performanceSource()
      const data: any = Qs.stringify(this.initConf)
      if (!window.XMLHttpRequest)
        return;
      const xhr = new XMLHttpRequest()

      console.log(data)
      xhr.open('POST', 'http://127.0.0.1:80/t.gif')
      xhr.send(data)
      // navigator.sendBeacon('http://localhost/t.gif', data)
    }, outTime)
  }
}
