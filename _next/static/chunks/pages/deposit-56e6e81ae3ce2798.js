(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9563],{89989:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=u.default,o={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e));var l=(o=r({},o,t)).loader;return(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?n(r({},o,{loader:function(){return null!=l?l().then(a):Promise.resolve(a(function(){return null}))}})):(delete o.webpack,delete o.modules,i(n,o))},t.noSSR=i;var r=n(6495).Z,o=n(92648).Z,u=(o(n(67294)),o(n(65686)));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},65686:function(e,t,n){"use strict";var r=n(33227),o=n(88361);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=(0,n(92648).Z)(n(67294)),l=n(5933),s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new p(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!c){var a=n.webpack?n.webpack():n.modules;a&&d.push(function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(e){n.e(e)}finally{n.f()}})}function s(e,t){o(),(u=i.default.useContext(l.LoadableContext))&&Array.isArray(n.modules)&&n.modules.forEach(function(e){u(e)});var u,a=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),i.default.useMemo(function(){var t;return a.loading||a.error?i.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?i.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return s.preload=function(){return o()},s.displayName="LoadableComponent",i.default.forwardRef(s)}(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return y(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){y(s).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return c=!0,t()};y(d,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},16566:function(e,t,n){"use strict";n.r(t);var r=n(5152),o=n.n(r),u=n(11163),a=n(67294),i=n(67421),l=n(2664),s=n(67709),d=n(79681),c=n(4543),f=n(57479),p=n(85893),h=o()(function(){return n.e(5074).then(n.bind(n,15074))},{loadableGenerated:{webpack:function(){return[15074]}}}),y=function(){var e=(0,i.$G)().t,t=(0,u.useRouter)().replace,n=(0,l.v9)(c.fN);return((0,a.useEffect)(function(){n&&t("/profile/deposit")},[n]),n)?(0,p.jsx)(d.Z,{}):(0,p.jsx)(s.Z,{title:e("deposit"),children:(0,p.jsx)(h,{activePage:"deposit"})})};(0,f.l)(y),t.default=y},57479:function(e,t,n){"use strict";n.d(t,{l:function(){return a}});var r=n(50029),o=n(87794),u=n.n(o),a=function(e){var t;e.getInitialProps=(t=(0,r.Z)(u().mark(function e(t){var n,r,o;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=Boolean(null==(r=(n=t.req)?n.headers["user-agent"]:navigator.userAgent)?void 0:r.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)),e.abrupt("return",{isMobileDevice:o});case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})}},96201:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit",function(){return n(16566)}])},5152:function(e,t,n){e.exports=n(89989)}},function(e){e.O(0,[2678,7499,7085,9322,3297,9016,4368,1345,5748,9774,2888,179],function(){return e(e.s=96201)}),_N_E=e.O()}]);