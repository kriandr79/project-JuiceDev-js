!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("lJq6c",(function(e,t){})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function g(){}function m(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(k=b);var _=m.prototype=y.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return g.prototype=m,u(_,"constructor",m),u(m,"constructor",g),g.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("18VO4",(function(e,t){var n=a("d6S5l");document.querySelector("#fundsList").insertAdjacentHTML("beforeend",n.funds.map((function(e,t){var n=String(t+1).padStart(2,"0");return'\n      <div class="funds__carousel-item">\n        <span class="funds__carousel-item-number">'.concat(n,"</span>\n        <a class='funds__carousel-item-link' href=\"").concat(e.url,'" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="').concat(e.title,'">\n          <img class="funds__carousel-item-img" src="').concat(e.img,'" alt="').concat(e.title,'" loading="lazy" height="32">\n        </a>\n      </div>\n    ')})).join("")),$(".slider-item").each((function(e){var t=$(e);t.data("slider-length",t.children().length)})).slick({infinite:!0,slidesToShow:6,slidesToScroll:1,arrows:!0,vertical:!0,centerPadding:0,mobileFirst:!1,responsive:[{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1}}]}).on("afterChange",(function(e,t){$(e.target).data("current-slide",t)})).on("wheel",(function(e){var t=e.originalEvent.deltaY,n=$(e.currentTarget),r=n.data("current-slide")||0;if(t<0&&0==r||t>0&&r==n.data("slider-length")-1)return;e.preventDefault(),e.originalEvent.deltaY<0?n.slick("slickPrev"):n.slick("slickNext")}))})),a.register("d6S5l",(function(n,r){e(n.exports,"funds",(function(){return v}));var i=a("2UUp2"),o=a("iPbHu"),s=a("jQCbD"),u=a("4mu97"),c=a("gW8JU"),l=a("7SqV0"),h=a("01CLy"),f=a("aTcOz"),d=a("fnDD9"),v=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(i)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(o)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(s)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(u)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(c)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(l)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(h)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(f)},{title:"Medicins Sans   Frontieres",url:"https://www.msf.org/ukraine",img:t(d)}]})),a.register("2UUp2",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("i3GEQ")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("iPbHu",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("eUZBv")})),a.register("jQCbD",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("mwjoM")})),a.register("4mu97",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("934x9")})),a.register("gW8JU",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("eGRjf")})),a.register("7SqV0",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("4i4Qg")})),a.register("01CLy",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("ayDgw")})),a.register("aTcOz",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("7MItH")})),a.register("fnDD9",(function(e,t){e.exports=a("aNJCr").getBundleURL("7Lh2N")+a("iE7OH").resolve("dhEp1")})),a.register("bqxOg",(function(e,t){var n=document.getElementById("themeToggle"),r=document.body;function i(e){e.classList.add("dark-theme")}function a(e){e.classList.remove("dark-theme")}function o(){return localStorage.getItem("theme")}function s(e){var t=document.querySelectorAll("*");"dark"===e?(n.checked=!0,i(r),t.forEach(i)):(n.checked=!1,a(r),t.forEach(a))}n.addEventListener("change",(function(){var e=n.checked?"dark":"light";!function(e){localStorage.setItem("theme",e)}(e),s(e)})),s(o()),new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&function(e,t){e.forEach((function(e){e.nodeType===Node.ELEMENT_NODE&&("dark"===t?i(e):a(e))}))}(Array.from(e.addedNodes),o())}))})).observe(r,{childList:!0,subtree:!0})})),a.register("1sliS",(function(e,t){var n=document.querySelector(".btn-top");window.addEventListener("scroll",(function(){var e=window.scrollY,t=document.documentElement.clientHeight;e>t&&n.classList.add("btn-top--visible");e<t&&n.classList.remove("btn-top--visible")})),n.addEventListener("click",(function(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}))})),a.register("i8Q71",(function(e,t){var n=window.location.pathname.slice(1).split("/")[1],r="current",i=document.querySelector(".header-nav-list");"index.html"===n?i.children[0].classList.toggle(r):"shoppinglist.html"===n&&i.children[1].classList.toggle(r)})),a.register("hb9V3",(function(e,t){var n=a("9lidz"),r=document.querySelector(".login-btn"),i=document.querySelector(".authorization-modal__btn-close"),o=document.querySelector('[data-action="sign-up"]'),s=document.querySelector('[data-action="sign-in"]'),u=document.querySelector("#sign-in"),c=document.querySelector("#sign-up"),l=document.querySelector(".authorization-modal__btn-submit");o.disabled=!0,s.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("active-link"),o.classList.add("inactive-link"),s.classList.remove("inactive-link"),s.classList.add("active-link"),l.textContent="Sign in",u.classList.remove("hide-form"),c.classList.add("hide-form"),o.disabled=!1,s.disabled=!0})),o.addEventListener("click",(function(e){e.preventDefault(),o.classList.add("active-link"),o.classList.remove("inactive-link"),s.classList.add("inactive-link"),s.classList.remove("active-link"),l.textContent="Sign up",u.classList.add("hide-form"),c.classList.remove("hide-form"),o.disabled=!0,s.disabled=!1})),r.addEventListener("click",(function(){n.authorizationModal.classList.remove("is-hidden")})),i.addEventListener("click",(function(){n.authorizationModal.classList.add("is-hidden")})),n.userBtn.addEventListener("click",(function(){n.logoutBtn.classList.toggle("is-hidden")}))})),a.register("9lidz",(function(n,r){e(n.exports,"userBtn",(function(){return v})),e(n.exports,"logoutBtn",(function(){return y})),e(n.exports,"authorizationModal",(function(){return g})),e(n.exports,"firebaseRegistration",(function(){return m})),e(n.exports,"firebaseAuthorization",(function(){return w}));var i=a("bpxeT"),o=a("2TvXO");a("fkNhc");var s=a("MjY8E");a("6m2hf");var u=a("221Dt");a("gQOBw");var c=a("gUfF6"),l=(0,s.initializeApp)({apiKey:"AIzaSyD6y87qpAaTmo8ySNzJXmc9V4SbIIZw8Cg",authDomain:"project-juicedev-js.firebaseapp.com",projectId:"project-juicedev-js",storageBucket:"project-juicedev-js.appspot.com",messagingSenderId:"829149765123",appId:"1:829149765123:web:764b4955f69bea51d43836"}),h=(0,c.o)(l),f=(0,u.getFirestore)(l),d=document.querySelector(".login-btn"),v=document.querySelector(".user-btn"),p=document.querySelector(".user-btn-name"),y=document.querySelector(".logout-btn"),g=document.querySelector(".authorization-modal");function m(e,t,n,r){return k.apply(this,arguments)}function k(){return k=t(i)(t(o).mark((function e(n,r,a,s){var l,d;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){var e=t(i)(t(o).mark((function e(){var r,i;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,u.collection)(f,"Users"),i=(0,u.doc)(r,a),(0,u.setDoc)(i,{email:n,nickname:a,theme:s}).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,(0,c.a9)(h,n,r);case 4:return d=e.sent,e.next=7,(0,c.aj)(d.user,{displayName:a}).then((function(){p.innerHTML=h.currentUser.displayName}));case 7:return e.next=9,l();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),"auth/email-already-in-use"===e.t0.code?console.log("Этот Email уже используется."):console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),k.apply(this,arguments)}function w(e,t){h.currentUser?console.error("The user is already logged in!"):(0,c.aa)(h,e,t).then((function(){!function(e){b.apply(this,arguments)}(h.currentUser.displayName)})).catch((function(e){switch(e.code){case"auth/user-not-found":console.log("User with this email was not found");break;case"auth/wrong-password":console.log("Incorrect password");break;case"auth/invalid-email":console.log("Incorrect email");break;default:console.error(e)}}))}function b(){return(b=t(i)(t(o).mark((function e(n){var r;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,u.collection)(f,n),e.next=3,(0,u.getDocs)(r);case 3:e.sent.forEach((function(e){var t={id:e.id,data:e.data()};localStorage.setItem(t.id,JSON.stringify(t.data))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,c.y)(h,(function(e){null==e?(v.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.dataset.status=!1,p.innerHTML=""):(p.innerHTML=h.currentUser.displayName,d.dataset.status=!0,g.classList.add("is-hidden"),v.classList.remove("is-hidden"),d.classList.add("is-hidden"))})),y.addEventListener("click",(function(){(0,c.C)(h).then((function(){return localStorage.clear()})).catch((function(e){return console.log(e)})),y.classList.toggle("is-hidden")}))})),a.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","10.3.1","app")})),a.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return T})),e(n.exports,"_getProvider",(function(){return S})),e(n.exports,"_removeServiceInstance",(function(){return C})),e(n.exports,"SDK_VERSION",(function(){return O})),e(n.exports,"initializeApp",(function(){return R})),e(n.exports,"getApp",(function(){return P})),e(n.exports,"registerVersion",(function(){return L}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),h=a("6ExWU"),f=a("kZfxc"),d=a("2xDiJ"),v=a("ajgRO"),p=(d=a("2xDiJ"),function(){"use strict";function e(n){t(o)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var y,g,m="@firebase/app",k="0.9.18",w=new(0,f.Logger)("@firebase/app"),b="[DEFAULT]",_=(y={},t(u)(y,m,"fire-core"),t(u)(y,"@firebase/app-compat","fire-core-compat"),t(u)(y,"@firebase/analytics","fire-analytics"),t(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(y,"@firebase/app-check","fire-app-check"),t(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(y,"@firebase/auth","fire-auth"),t(u)(y,"@firebase/auth-compat","fire-auth-compat"),t(u)(y,"@firebase/database","fire-rtdb"),t(u)(y,"@firebase/database-compat","fire-rtdb-compat"),t(u)(y,"@firebase/functions","fire-fn"),t(u)(y,"@firebase/functions-compat","fire-fn-compat"),t(u)(y,"@firebase/installations","fire-iid"),t(u)(y,"@firebase/installations-compat","fire-iid-compat"),t(u)(y,"@firebase/messaging","fire-fcm"),t(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(y,"@firebase/performance","fire-perf"),t(u)(y,"@firebase/performance-compat","fire-perf-compat"),t(u)(y,"@firebase/remote-config","fire-rc"),t(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(y,"@firebase/storage","fire-gcs"),t(u)(y,"@firebase/storage-compat","fire-gcs-compat"),t(u)(y,"@firebase/firestore","fire-fst"),t(u)(y,"@firebase/firestore-compat","fire-fst-compat"),t(u)(y,"fire-js","fire-js"),t(u)(y,"firebase","fire-js-all"),y),x=new Map,E=new Map;function I(e,t){try{e.container.addComponent(t)}catch(n){w.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(E.has(t))return w.debug("There were multiple attempts to register component ".concat(t,".")),!1;E.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=x.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){I(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;S(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var A=(g={},t(u)(g,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),t(u)(g,"bad-app-name","Illegal App name: '{$appName}"),t(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),t(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),N=new(0,d.ErrorFactory)("app","Firebase",A),D=function(){"use strict";function e(n,r,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return a}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}]),e}(),O="10.3.1";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw N.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw N.create("no-options");var o=x.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw N.create("duplicate-app",{appName:a})}var s=new(0,h.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var f,v=E.values()[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==v.return||v.return()}finally{if(c)throw l}}var y=new D(n,i,s);return x.set(a,y),y}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=x.get(e);if(!t&&e===b&&(0,d.getDefaultAppConfig)())return R();if(!t)throw N.create("no-app",{appName:e});return t}function L(e,t,n){var r,i=null!==(r=_[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void w.warn(s.join(" "))}T(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M="firebase-heartbeat-store",U=null;function F(){return U||(U=(0,v.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw N.create("idb-open",{originalErrorMessage:e.message})}))),U}function V(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(l).mark((function e(n){var r,i,a;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.next=6,r.transaction(M).objectStore(M).get(z(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(a=N.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(a.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function B(e,t){return q.apply(this,arguments)}function q(){return(q=t(i)(t(l).mark((function e(n,r){var i,a,o,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,z(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(s=N.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(s.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function z(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=K(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a,o,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=K(),i=G(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function K(){return(new Date).toISOString().substring(0,10)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Y(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Y(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var W,Q=function(){"use strict";function e(n){t(o)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,V(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Y(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W="",T(new(0,h.Component)("platform-logger",(function(e){return new p(e)}),"PRIVATE")),T(new(0,h.Component)("heartbeat",(function(e){return new H(e)}),"PRIVATE")),L(m,k,W),L(m,k,"esm2017"),L("fire-js","")})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return f})),e(n.exports,"ComponentContainer",(function(){return p}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),h=a("2xDiJ"),f=function(){"use strict";function e(n,r,i){t(o)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",v=function(){"use strict";function e(n,r){t(o)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=t(u)(l.value,2),d=f[0],v=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&v.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var p=function(){"use strict";function e(n){t(o)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("2xDiJ",(function(r,i){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return g})),e(r.exports,"base64Decode",(function(){return m})),e(r.exports,"getDefaultEmulatorHost",(function(){return b})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return _})),e(r.exports,"getDefaultAppConfig",(function(){return x})),e(r.exports,"getExperimentalSetting",(function(){return E})),e(r.exports,"Deferred",(function(){return I})),e(r.exports,"createMockUserToken",(function(){return T})),e(r.exports,"getUA",(function(){return S})),e(r.exports,"isMobileCordova",(function(){return C})),e(r.exports,"isBrowserExtension",(function(){return A})),e(r.exports,"isReactNative",(function(){return N})),e(r.exports,"isIE",(function(){return D})),e(r.exports,"isSafari",(function(){return O})),e(r.exports,"isIndexedDBAvailable",(function(){return R})),e(r.exports,"validateIndexedDBOpenable",(function(){return P})),e(r.exports,"FirebaseError",(function(){return L})),e(r.exports,"ErrorFactory",(function(){return M})),e(r.exports,"isEmpty",(function(){return V})),e(r.exports,"deepEqual",(function(){return j})),e(r.exports,"querystring",(function(){return q})),e(r.exports,"querystringDecode",(function(){return z})),e(r.exports,"extractQuerystring",(function(){return H})),e(r.exports,"createSubscribe",(function(){return K})),e(r.exports,"getModularInstance",(function(){return Q}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),h=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=a("6qd2L"),v=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new y;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(h)(Error)),g=function(e){return function(e){var t=v(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},m=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var k=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},w=function(){try{return k()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&m(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},b=function(e){var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},_=function(e){var t=b(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},x=function(){var e;return null===(e=w())||void 0===e?void 0:e.config},E=function(e){var t;return null===(t=w())||void 0===t?void 0:t["_".concat(e)]},I=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[g(JSON.stringify({alg:"none",type:"JWT"})),g(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function C(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function A(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function D(){var e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!function(){var e,t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}function P(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var L=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i,a){var u;return t(s)(this,r),(u=n.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(t(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(o)(u),M.prototype.create),u}return r}(t(h)(Error)),M=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?U(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new L(a,u,i);return c}}]),e}();function U(e,t){return e.replace(F,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(B(l)&&B(h)){if(!j(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var g=p.value;if(!n.includes(g))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function B(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function z(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function H(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){var n=new G(e,t);return n.subscribe.bind(n)}var G=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return g})),e(n.exports,"setLogLevel",(function(){return m})),e(n.exports,"setUserLogHandler",(function(){return k}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),h=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},v=i.INFO,p=(f={},t(c)(f,i.DEBUG,"log"),t(c)(f,i.VERBOSE,"log"),t(c)(f,i.INFO,"info"),t(c)(f,i.WARN,"warn"),t(c)(f,i.ERROR,"error"),f),y=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=p[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=v,this._logHandler=y,this._userLogHandler=null,h.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function m(e){h.forEach((function(t){t.setLogLevel(e)}))}function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=h[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function v(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=f.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||h.includes(r))){var c,l=(c=t(i)(t(u).mark((function e(n){var i,c,l,h,f,d,v=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=v.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=v[l];return f=this.transaction(n,o?"readwrite":"readonly"),d=f.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(h=d)[r].apply(h,t(s)(c)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,n,r){return v(t,n)||e.get(t,n,r)},has:function(t,n){return!!v(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return g})),e(n.exports,"r",(function(){return v}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){d=e(d)}function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(m(this),n),g(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(m(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[m(this),n].concat(t(s)(i)));return l.set(u,n.sort?n.sort():[n]),g(u)}}function y(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=y(e);return r!==e&&(h.set(e,r),f.set(r,e)),r}var m=function(e){return f.get(e)}})),a.register("6m2hf",(function(t,n){e(t.exports,"getFirestore",(function(){return a("221Dt").getFirestore})),e(t.exports,"collection",(function(){return a("221Dt").collection})),e(t.exports,"doc",(function(){return a("221Dt").doc})),e(t.exports,"setDoc",(function(){return a("221Dt").setDoc})),e(t.exports,"deleteDoc",(function(){return a("221Dt").deleteDoc})),e(t.exports,"getDocs",(function(){return a("221Dt").getDocs})),a("221Dt")})),a.register("221Dt",(function(n,r){e(n.exports,"collection",(function(){return us})),e(n.exports,"doc",(function(){return cs})),e(n.exports,"getFirestore",(function(){return fs})),e(n.exports,"getDocs",(function(){return Ws})),e(n.exports,"setDoc",(function(){return Qs})),e(n.exports,"deleteDoc",(function(){return Ys}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("jmhxu"),d=a("1t1Wn"),v=a("8nrFW"),p=(a("l5bVx"),a("4c7YB")),y=a("2MbLg"),g=a("2TvXO"),m=a("MjY8E"),k=a("6ExWU"),w=a("kZfxc"),b=a("2xDiJ"),_=a("aSES4"),x=(a("6qd2L"),"@firebase/firestore"),E=function(){"use strict";function e(n){t(o)(this,e),this.uid=n}return t(u)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var I="10.3.1",T=new(0,w.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return T.logLevel}function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.DEBUG){var a,o=r.map(D);(a=T).debug.apply(a,["Firestore (".concat(I,"): ").concat(e)].concat(t(v)(o)))}}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.ERROR){var a,o=r.map(D);(a=T).error.apply(a,["Firestore (".concat(I,"): ").concat(e)].concat(t(v)(o)))}}function N(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.WARN){var a,o=r.map(D);(a=T).warn.apply(a,["Firestore (".concat(I,"): ").concat(e)].concat(t(v)(o)))}}function D(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return t=e,JSON.stringify(t)}catch(t){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(I,") INTERNAL ASSERTION FAILED: ")+e;throw A(t),new Error(t)}function R(e,t){e||O()}function P(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},M=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(f)(a)}return r}(b.FirebaseError),U=function e(){"use strict";var n=this;t(o)(this,e),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},F=function e(n,r){"use strict";t(o)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},V=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),j=function(){"use strict";function e(n){t(o)(this,e),this.token=n,this.changeListener=null}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),B=function(){"use strict";function e(n){t(o)(this,e),this.t=n,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return t(u)(e,[{key:"start",value:function(e,n){var r=this,a=this.i,o=function(e){return r.i!==a?(a=r.i,n(e)):Promise.resolve()},s=new U;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new U,e.enqueueRetryable((function(){return o(t.currentUser)}))};var u=function(){var n=s,a=r;e.enqueueRetryable(t(i)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(a.currentUser);case 4:case"end":return e.stop()}}),e)}))))},c=function(e){C("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return c(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?c(e):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new U)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(R("string"==typeof n.accessToken),new F(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e),new E(e)}}]),e}(),q=function(){"use strict";function e(n,r,i){t(o)(this,e),this.l=n,this.h=r,this.P=i,this.type="FirstParty",this.user=E.FIRST_PARTY,this.I=new Map}return t(u)(e,[{key:"T",value:function(){return this.P?this.P():null}},{key:"headers",get:function(){this.I.set("X-Goog-AuthUser",this.l);var e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}]),e}(),z=function(){"use strict";function e(n,r,i){t(o)(this,e),this.l=n,this.h=r,this.P=i}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(new q(this.l,this.h,this.P))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),H=function e(n){"use strict";t(o)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},K=function(){"use strict";function e(n){t(o)(this,e),this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null}return t(u)(e,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&C("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.R;return n.R=e.token,C("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){C("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.A.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.A.getImmediate({optional:!0});e?r(e):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(R("string"==typeof t.token),e.R=t.token,new H(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,null,[{key:"V",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=G(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function Q(e,t){return e<t?-1:e>t?1:0}function Y(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var J=function(){"use strict";function e(n,r){if(t(o)(this,e),this.seconds=n,this.nanoseconds=r,r<0)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return t(u)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}(),X=function(){"use strict";function e(n){t(o)(this,e),this.timestamp=n}return t(u)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new J(0,0))}},{key:"max",value:function(){return new e(new J(253402300799,999999999))}}]),e}(),$=function(){"use strict";function e(n,r,i){t(o)(this,e),void 0===r?r=0:r>n.length&&O(),void 0===i?i=n.length-r:i>n.length-r&&O(),this.segments=n,this.offset=r,this.len=i}return t(u)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),Z=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new M(L.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,t(v)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ee=/^[_a-zA-Z][_a-zA-Z0-9]*$/,te=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ee.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new M(L.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new M(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new M(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new M(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ne=function(){"use strict";function e(n){t(o)(this,e),this.path=n}return t(u)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===Z.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(Z.fromString(t))}},{key:"fromName",value:function(t){return new e(Z.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(Z.emptyPath())}},{key:"comparator",value:function(e,t){return Z.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new Z(t.slice()))}}]),e}(),re=function e(n,r,i,a){"use strict";t(o)(this,e),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.UNKNOWN_ID=-1;function ie(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(1e9===r?new J(n+1,0):new J(n,r));return new oe(i,ne.empty(),t)}function ae(e){return new oe(e.readTime,e.key,-1)}var oe=function(){"use strict";function e(n,r,i){t(o)(this,e),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return t(u)(e,null,[{key:"min",value:function(){return new e(X.min(),ne.empty(),-1)}},{key:"max",value:function(){return new e(X.max(),ne.empty(),-1)}}]),e}();function se(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ne.comparator(e.documentKey,t.documentKey))?n:Q(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ce=function(){"use strict";function e(){t(o)(this,e),this.onCommittedListeners=[]}return t(u)(e,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),e}();function le(e){return he.apply(this,arguments)}function he(){return(he=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===L.FAILED_PRECONDITION&&n.message===ue){e.next=2;break}throw n;case 2:C("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return t(u)(e,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(t,n){var r=this;return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((function(e,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(t,n).next(e,i)},r.catchCallback=function(t){a.wrapFailure(n,t).next(e,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(t){try{var n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}},{key:"wrapSuccess",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.resolve(n)}},{key:"wrapFailure",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.reject(n)}}],[{key:"resolve",value:function(t){return new e((function(e,n){e(t)}))}},{key:"reject",value:function(t){return new e((function(e,n){n(t)}))}},{key:"waitFor",value:function(t){return new e((function(e,n){var r=0,i=0,a=!1;t.forEach((function(t){++r,t.next((function(){++i,a&&i===r&&e()}),(function(e){return n(e)}))})),a=!0,i===r&&e()}))}},{key:"or",value:function(t){var n=e.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=r.value;n=n.next((function(t){return t?e.resolve(t):i()}))},u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(t,n){return new e((function(e,r){for(var i=function(i){var u=i;n(t[u]).next((function(t){o[u]=t,++s===a&&e(o)}),(function(e){return r(e)}))},a=t.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(t,n){return new e((function(e,r){var i=function(){!0===t()?n().next((function(){i()}),r):e()};i()}))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return"IndexedDbTransactionError"===e.name}var ve=function(){"use strict";function e(n,r){var i=this;t(o)(this,e),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.oe(e)},this._e=function(e){return r.writeSequenceNumber(e)})}return t(u)(e,[{key:"oe",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this._e&&this._e(e),e}}]),e}();function pe(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function ge(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.ae=-1;var me=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ke=(t(v)(me).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),we=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t(v)(we).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _e(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function e(n,r){t(o)(this,e),this.comparator=n,this.root=r||Te.EMPTY}return t(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Ie(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Ie(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!0)}}]),e}(),Ie=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(u)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),Te=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(u)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();var e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}]),e}();Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new(function(){"use strict";function e(){t(o)(this,e),this.size=0}return t(u)(e,[{key:"key",get:function(){throw O()}},{key:"value",get:function(){throw O()}},{key:"color",get:function(){throw O()}},{key:"left",get:function(){throw O()}},{key:"right",get:function(){throw O()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Te(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n,this.data=new Ee(this.comparator)}return t(u)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Ce(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Ce(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),Ce=function(){"use strict";function e(n){t(o)(this,e),this.iter=n}return t(u)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ae=function(){"use strict";function e(n){t(o)(this,e),this.fields=n,n.sort(te.comparator)}return t(u)(e,[{key:"unionWith",value:function(t){var n=new Se(te.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=t[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Y(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),Ne=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){var e;return t(o)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",t(f)(e)}return r}(t(p)(Error));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De=Symbol.iterator,Oe=function(){"use strict";function e(n){t(o)(this,e),this.binaryString=n}return t(u)(e,[{key:De,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){return e=this.binaryString,btoa(e);var e}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Q(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ne("Invalid base64 string: "+e):e}}(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.EMPTY_BYTE_STRING=new Oe("");var Re=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(e){if(R(!!e),"string"==typeof e){var t=0,n=Re.exec(e);if(R(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Le(e.seconds),nanos:Le(e.nanos)}}function Le(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?Oe.fromBase64String(e):Oe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fe(e){var t=e.mapValue.fields.__previous_value__;return Ue(t)?Fe(t):t}function Ve(e){var t=Pe(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function e(n,r,i,a,s,u,c,l,h){"use strict";t(o)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h},Be=function(){"use strict";function e(n,r){t(o)(this,e),this.projectId=n,this.database=r||"(default)"}return t(u)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}(),qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ue(e)?4:nt(e)?9007199254740991:10:O()}function He(e,t){if(e===t)return!0;var n,r=ze(e);if(r!==ze(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Pe(e.timestampValue),r=Pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Me(e.bytesValue).isEqual(Me(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Le(e.geoPointValue.latitude)===Le(t.geoPointValue.latitude)&&Le(e.geoPointValue.longitude)===Le(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Le(e.integerValue)===Le(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Le(e.doubleValue),r=Le(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Y(e.arrayValue.values||[],t.arrayValue.values||[],He);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(be(n)!==be(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!He(n[i],r[i])))return!1;return!0}(e,t);default:return O()}}function Ke(e,t){return void 0!==(e.values||[]).find((function(e){return He(e,t)}))}function Ge(e,t){if(e===t)return 0;var n,r,i,a,o=ze(e),s=ze(t);if(o!==s)return Q(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return r=t,i=Le((n=e).integerValue||n.doubleValue),a=Le(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return We(e.timestampValue,t.timestampValue);case 4:return We(Ve(e),Ve(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Me(e),r=Me(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Q(n[i],r[i]);if(0!==a)return a}return Q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Q(Le(e.latitude),Le(t.latitude));return 0!==n?n:Q(Le(e.longitude),Le(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ge(n[i],r[i]);if(a)return a}return Q(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qe.mapValue&&t===qe.mapValue)return 0;if(e===qe.mapValue)return 1;if(t===qe.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Q(r[o],a[o]);if(0!==s)return s;var u=Ge(n[r[o]],i[a[o]]);if(0!==u)return u}return Q(r.length,a.length)}(e.mapValue,t.mapValue);default:throw O()}}function We(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Q(e,t);var n=Pe(e),r=Pe(t),i=Q(n.seconds,r.seconds);return 0!==i?i:Q(n.nanos,r.nanos)}function Qe(e){return Ye(e)}function Ye(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(t=e.timestampValue,n=Pe(t),"time(".concat(n.seconds,",").concat(n.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Me(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ne.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return"geo(".concat(e.latitude,",").concat(e.longitude,")")}(e.geoPointValue):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Ye(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Ye(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):O();var t,n}function Je(e){return!!e&&"integerValue"in e}function Xe(e){return!!e&&"arrayValue"in e}function $e(e){return!!e&&"nullValue"in e}function Ze(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function et(e){return!!e&&"mapValue"in e}function tt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return _e(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=tt(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=tt(e.arrayValue.values[r]);return n}return Object.assign({},e)}function nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rt=function(){"use strict";function e(n){t(o)(this,e),this.value=n}return t(u)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!et(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tt(t)}},{key:"setAll",value:function(e){var t=this,n=te.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=tt(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());et(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return He(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];et(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){_e(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(tt(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}();function it(e){var t=[];return _e(e.fields,(function(e,n){var r=new te([e]);if(et(n)){var i=it(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new Ae(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var at=function(){"use strict";function e(n,r,i,a,s,u,c){t(o)(this,e),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return t(u)(e,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(X.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=X.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,X.min(),X.min(),X.min(),rt.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r,i){return new e(t,1,n,X.min(),r,i,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,X.min(),X.min(),rt.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,X.min(),X.min(),rt.empty(),2)}}]),e}(),ot=function e(n,r){"use strict";t(o)(this,e),this.position=n,this.inclusive=r};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?ne.comparator(ne.fromName(o.referenceValue),n.key):Ge(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ut(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!He(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";t(o)(this,e),this.field=n,this.dir=r};function lt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht=function e(){"use strict";t(o)(this,e)},ft=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this)).field=e,s.op=i,s.value=a,t(f)(s)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ge(t,this.value)):null!==t&&ze(this.value)===ze(t)&&this.matchesComparison(Ge(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new wt(e,t,n):"array-contains"===t?new Et(e,n):"in"===t?new It(e,n):"not-in"===t?new Tt(e,n):"array-contains-any"===t?new St(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new bt(e,n):new _t(e,n)}}]),r}(ht),dt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).filters=e,a.op=i,a.ce=null,t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return vt(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ce||(this.ce=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ce}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.le((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"le",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(ht);function vt(e){return"and"===e.op}function pt(e){return yt(e)&&vt(e)}function yt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof dt)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function gt(e){if(e instanceof ft)return e.field.canonicalString()+e.op.toString()+Qe(e.value);if(pt(e))return e.filters.map((function(e){return gt(e)})).join(",");var t=e.filters.map((function(e){return gt(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function mt(e,t){return e instanceof ft?(n=e,(r=t)instanceof ft&&n.op===r.op&&n.field.isEqual(r.field)&&He(n.value,r.value)):e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&mt(n,t.filters[r])}),!0)}(e,t):void O();var n,r}function kt(e){return e instanceof ft?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Qe(t.value)):e instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(kt).join(" ,")+"}"}(e):"Filter";var t}var wt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this,e,i,a)).key=ne.fromName(a.referenceValue),t(f)(s)}return t(u)(r,[{key:"matches",value:function(e){var t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(ft),bt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"in",i)).keys=xt("in",i),t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft),_t=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"not-in",i)).keys=xt("not-in",i),t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft);function xt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return ne.fromName(e.referenceValue)}))}var Et=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains",i)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Xe(t)&&Ke(t.arrayValue,this.value)}}]),r}(ft),It=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"in",i)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&Ke(this.value.arrayValue,t)}}]),r}(ft),Tt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"not-in",i)}return t(u)(r,[{key:"matches",value:function(e){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!Ke(this.value.arrayValue,t)}}]),r}(ft),St=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains-any",i)}return t(u)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Xe(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return Ke(t.value.arrayValue,e)}))}}]),r}(ft),Ct=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.he=null};function At(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Ct(e,t,n,r,i,a,o)}function Nt(e){var t=P(e);if(null===t.he){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return gt(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),pe(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),t.he=n}return t.he}function Dt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!lt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!mt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ut(e.startAt,t.startAt)&&ut(e.endAt,t.endAt)}function Ot(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt};function Pt(e,t,n,r,i,a,o,s){return new Rt(e,t,n,r,i,a,o,s)}function Lt(e){return new Rt(e)}function Mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ut(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ft(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Vt(e){return null!==e.collectionGroup}function jt(e){var t=P(e);if(null===t.Pe){t.Pe=[];var n=Ft(t),r=Ut(t);if(null!==n&&null===r)n.isKeyField()||t.Pe.push(new ct(n)),t.Pe.push(new ct(te.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.Pe.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new ct(te.keyField(),h))}}}return t.Pe}function Bt(e){var t=P(e);return t.Ie||(t.Ie=qt(t,jt(e))),t.Ie}function qt(e,t){if("F"===e.limitType)return At(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);t=t.map((function(e){var t="desc"===e.dir?"asc":"desc";return new ct(e.field,t)}));var n=e.endAt?new ot(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ot(e.startAt.position,e.startAt.inclusive):null;return At(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}function zt(e,t,n){return new Rt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ht(e,t){return Dt(Bt(e),Bt(t))&&e.limitType===t.limitType}function Kt(e){return"".concat(Nt(Bt(e)),"|lt:").concat(e.limitType)}function Gt(e){return"Query(target=".concat((t=Bt(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return kt(e)})).join(", "),"]")),pe(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Wt(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ne.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=jt(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,jt(n),r)||n.endAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,jt(n),r)));var n,r,i,a,o}function Qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Yt(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=jt(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Jt(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Jt(e,t,n){var r,i,a,o,s=e.field.isKeyField()?ne.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ge(a,o):O());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt=function(){"use strict";function e(n,r){t(o)(this,e),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return t(u)(e,[{key:"get",value:function(e){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=t(d)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,e))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(e){_e(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=t(d)(s.value,2),l=c[0],h=c[1];e(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return xe(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),e}(),$t=new Ee(ne.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return $t}var en=new Ee(ne.comparator);function tn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=en,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function nn(e){var t=en;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function rn(){return on()}function an(){return on()}function on(){return new Xt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var sn=new Ee(ne.comparator),un=new Se(ne.comparator);function cn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=un,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var ln=new Se(Q);function hn(){return ln}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function dn(e){return{integerValue:""+e}}function vn(e,t){return ge(t)?dn(t):fn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn=function e(){"use strict";t(o)(this,e),this._=void 0};function yn(e,t,n){return e instanceof kn?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&Ue(i)&&(i=Fe(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof wn?bn(e,t):e instanceof _n?xn(e,t):function(e,t){var n=mn(e,t),r=In(n)+In(e.Te);return Je(n)&&Je(e.Te)?dn(r):fn(e.serializer,r)}(e,t);var r,i,a}function gn(e,t,n){return e instanceof wn?bn(e,t):e instanceof _n?xn(e,t):n}function mn(e,t){return e instanceof En?Je(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}var kn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return r}(pn),wn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(f)(i)}return r}(pn);function bn(e,t){var n=Tn(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return He(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var _n=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(f)(i)}return r}(pn);function xn(e,t){var n=Tn(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!He(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var En=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).serializer=e,a.Te=i,t(f)(a)}return r}(pn);function In(e){return Le(e.integerValue||e.doubleValue)}function Tn(e){return Xe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=function e(n,r){"use strict";t(o)(this,e),this.version=n,this.transformResults=r},Cn=function(){"use strict";function e(n,r){t(o)(this,e),this.updateTime=n,this.exists=r}return t(u)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}();function An(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var Nn=function e(){"use strict";t(o)(this,e)};function Dn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zn(e.key,Cn.none()):new Mn(e.key,e.data,Cn.none());var n=e.data,r=rt.empty(),i=new Se(te.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Un(e.key,r,new Ae(i.toArray()),Cn.none())}function On(e,t,n){var r,i,a,o,s;e instanceof Mn?(i=t,a=n,o=(r=e).value.clone(),s=Vn(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Un?function(e,t,n){if(An(e.precondition,t)){var r=Vn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Rn(e,t,n,r){return e instanceof Mn?function(e,t,n,r){if(!An(e.precondition,t))return n;var i=e.value.clone(),a=jn(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Un?function(e,t,n,r){if(!An(e.precondition,t))return n;var i=jn(e.fieldTransforms,r,t),a=t.data;return a.setAll(Fn(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,An(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Pn(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=mn(u.transform,c||null);null!=l&&(null===n&&(n=rt.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Ln(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Y(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof wn&&r instanceof wn||n instanceof _n&&r instanceof _n?Y(n.elements,r.elements,He):n instanceof En&&r instanceof En?He(n.Te,r.Te):n instanceof kn&&r instanceof kn);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Mn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t(o)(this,r),(s=n.call(this)).key=e,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,t(f)(s)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Nn),Un=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return t(o)(this,r),(u=n.call(this)).key=e,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,t(f)(u)}return t(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Nn);function Fn(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Vn(e,t,n){var r=new Map;R(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,gn(o,s,n[i]))}return r}function jn(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,yn(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Bn,qn,zn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],t(f)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Nn),Hn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],t(f)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Nn),Kn=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return t(u)(e,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&On(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=Rn(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=Rn(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=an();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Dn(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),cn())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&Y(this.mutations,e.mutations,(function(e,t){return Ln(e,t)}))&&Y(this.baseMutations,e.baseMutations,(function(e,t){return Ln(e,t)}))}}]),e}(),Gn=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return t(u)(e,null,[{key:"from",value:function(t,n,r){R(t.mutations.length===r.length);for(var i=sn,a=t.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new e(t,n,r,i)}}]),e}(),Wn=function(){"use strict";function e(n,r){t(o)(this,e),this.largestBatchId=n,this.mutation=r}return t(u)(e,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),e}(),Qn=function e(n,r){"use strict";t(o)(this,e),this.count=n,this.unchangedNames=r};function Yn(e){switch(e){default:return O();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Jn(e){if(void 0===e)return A("GRPC error has no .code"),L.UNKNOWN;switch(e){case Bn.OK:return L.OK;case Bn.CANCELLED:return L.CANCELLED;case Bn.UNKNOWN:return L.UNKNOWN;case Bn.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Bn.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Bn.INTERNAL:return L.INTERNAL;case Bn.UNAVAILABLE:return L.UNAVAILABLE;case Bn.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Bn.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Bn.NOT_FOUND:return L.NOT_FOUND;case Bn.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Bn.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Bn.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Bn.ABORTED:return L.ABORTED;case Bn.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Bn.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Bn.DATA_LOSS:return L.DATA_LOSS;default:return O()}}(qn=Bn||(Bn={}))[qn.OK=0]="OK",qn[qn.CANCELLED=1]="CANCELLED",qn[qn.UNKNOWN=2]="UNKNOWN",qn[qn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qn[qn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qn[qn.NOT_FOUND=5]="NOT_FOUND",qn[qn.ALREADY_EXISTS=6]="ALREADY_EXISTS",qn[qn.PERMISSION_DENIED=7]="PERMISSION_DENIED",qn[qn.UNAUTHENTICATED=16]="UNAUTHENTICATED",qn[qn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qn[qn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qn[qn.ABORTED=10]="ABORTED",qn[qn.OUT_OF_RANGE=11]="OUT_OF_RANGE",qn[qn.UNIMPLEMENTED=12]="UNIMPLEMENTED",qn[qn.INTERNAL=13]="INTERNAL",qn[qn.UNAVAILABLE=14]="UNAVAILABLE",qn[qn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn=new(0,_.Integer)([4294967295,4294967295],0);function er(e){var t=$n().encode(e),n=new(0,_.Md5);return n.update(t),new Uint8Array(n.digest())}function tr(e){var t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new(0,_.Integer)([n,r],0),new(0,_.Integer)([i,a],0)]}var nr=function(){"use strict";function e(n,r,i){if(t(o)(this,e),this.bitmap=n,this.padding=r,this.hashCount=i,r<0||r>=8)throw new rr("Invalid padding: ".concat(r));if(i<0)throw new rr("Invalid hash count: ".concat(i));if(n.length>0&&0===this.hashCount)throw new rr("Invalid hash count: ".concat(i));if(0===n.length&&0!==r)throw new rr("Invalid padding when bitmap length is 0: ".concat(r));this.Ae=8*n.length-r,this.Re=_.Integer.fromNumber(this.Ae)}return t(u)(e,[{key:"Ve",value:function(e,t,n){var r=e.add(t.multiply(_.Integer.fromNumber(n)));return 1===r.compare(Zn)&&(r=new(0,_.Integer)([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}},{key:"me",value:function(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}},{key:"mightContain",value:function(e){if(0===this.Ae)return!1;for(var n=er(e),r=t(d)(tr(n),2),i=r[0],a=r[1],o=0;o<this.hashCount;o++){var s=this.Ve(i,a,o);if(!this.me(s))return!1}return!0}},{key:"insert",value:function(e){if(0!==this.Ae)for(var n=er(e),r=t(d)(tr(n),2),i=r[0],a=r[1],o=0;o<this.hashCount;o++){var s=this.Ve(i,a,o);this.fe(s)}}},{key:"fe",value:function(e){var t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}],[{key:"create",value:function(t,n,r){var i=t%8==0?0:8-t%8,a=new e(new Uint8Array(Math.ceil(t/8)),i,n);return r.forEach((function(e){return a.insert(e)})),a}}]),e}(),rr=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){var e;return t(o)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="BloomFilterError",t(f)(e)}return r}(t(p)(Error)),ir=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=s}return t(u)(e,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(t,n,r){var i=new Map;return i.set(t,ar.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(X.min(),i,new Ee(Q),Zt(),cn())}}]),e}(),ar=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=s}return t(u)(e,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(t,n,r){return new e(r,n,cn(),cn(),cn())}}]),e}(),or=function e(n,r,i,a){"use strict";t(o)(this,e),this.ge=n,this.removedTargetIds=r,this.key=i,this.pe=a},sr=function e(n,r){"use strict";t(o)(this,e),this.targetId=n,this.ye=r},ur=function e(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Oe.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t(o)(this,e),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},cr=function(){"use strict";function e(){t(o)(this,e),this.we=0,this.Se=fr(),this.be=Oe.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}return t(u)(e,[{key:"current",get:function(){return this.De}},{key:"resumeToken",get:function(){return this.be}},{key:"ve",get:function(){return 0!==this.we}},{key:"Fe",get:function(){return this.Ce}},{key:"Me",value:function(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}},{key:"xe",value:function(){var e=cn(),t=cn(),n=cn();return this.Se.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:O()}})),new ar(this.be,this.De,e,t,n)}},{key:"Oe",value:function(){this.Ce=!1,this.Se=fr()}},{key:"Ne",value:function(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}},{key:"Be",value:function(e){this.Ce=!0,this.Se=this.Se.remove(e)}},{key:"Le",value:function(){this.we+=1}},{key:"ke",value:function(){this.we-=1}},{key:"qe",value:function(){this.Ce=!0,this.De=!0}}]),e}(),lr=function(){"use strict";function e(n){t(o)(this,e),this.Qe=n,this.Ke=new Map,this.$e=Zt(),this.Ue=hr(),this.We=new Ee(Q)}return t(u)(e,[{key:"Ge",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.ge[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.pe&&e.pe.isFoundDocument()?this.ze(o,e.pe):this.je(o,e.key,e.pe)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.je(f,e.key,e.pe)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"He",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.Je(n);switch(e.state){case 0:t.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||t.removeTarget(n);break;case 3:t.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:t.Ye(n)&&(t.Ze(n),r.Me(e.resumeToken));break;default:O()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((function(e,r){n.Ye(r)&&t(r)}))}},{key:"Xe",value:function(e){var t,n,r,i,a,o,s,u,c,l,h,f,d,v=e.targetId,p=e.ye.count,y=this.et(v);if(y){var g=y.target;if(Ot(g))if(0===p){var m=new ne(g.path);this.je(v,m,at.newNoDocument(m,X.min()))}else R(1===p);else{var k=this.tt(v);if(k!==p){var w=this.nt(e),b=w?this.rt(w,e,k):1;if(0!==b){this.Ze(v);var _=2===b?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(v,_)}null==Xn||Xn.it((t=k,n=e.ye,r=this.Qe.st(),i=w,a=b,f={localCacheCount:t,existenceFilterCount:n.count,databaseId:r.database,projectId:r.projectId},(d=n.unchangedNames)&&(f.bloomFilter={applied:0===a,hashCount:null!==(o=null==d?void 0:d.hashCount)&&void 0!==o?o:0,bitmapLength:null!==(c=null===(u=null===(s=null==d?void 0:d.bits)||void 0===s?void 0:s.bitmap)||void 0===u?void 0:u.length)&&void 0!==c?c:0,padding:null!==(h=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==h?h:0,mightContain:function(e){var t;return null!==(t=null==i?void 0:i.mightContain(e))&&void 0!==t&&t}}),f))}}}}},{key:"nt",value:function(e){var t=e.ye.unchangedNames;if(!t||!t.bits)return null;var n,r,i=t.bits,a=i.bitmap,o=void 0===a?"":a,s=i.padding,u=void 0===s?0:s,c=t.hashCount,l=void 0===c?0:c;try{n=Me(o).toUint8Array()}catch(e){if(e instanceof Ne)return N("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new nr(n,u,l)}catch(e){return N(e instanceof rr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}},{key:"rt",value:function(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}},{key:"ot",value:function(e,t){var n=this,r=this.Qe.getRemoteKeysForTarget(t),i=0;return r.forEach((function(r){var a=n.Qe.st(),o="projects/".concat(a.projectId,"/databases/").concat(a.database,"/documents/").concat(r.path.canonicalString());e.mightContain(o)||(n.je(t,r,null),i++)})),i}},{key:"_t",value:function(e){var t=this,n=new Map;this.Ke.forEach((function(r,i){var a=t.et(i);if(a){if(r.current&&Ot(a.target)){var o=new ne(a.target.path);null!==t.$e.get(o)||t.ut(i,o)||t.je(i,o,at.newNoDocument(o,e))}r.Fe&&(n.set(i,r.xe()),r.Oe())}}));var r=cn();this.Ue.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.$e.forEach((function(t,n){return n.setReadTime(e)}));var i=new ir(e,n,this.We,this.$e,r);return this.$e=Zt(),this.Ue=hr(),this.We=new Ee(Q),i}},{key:"ze",value:function(e,t){if(this.Ye(e)){var n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}}},{key:"je",value:function(e,t,n){if(this.Ye(e)){var r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Ke.delete(e)}},{key:"tt",value:function(e){var t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Le",value:function(e){this.Je(e).Le()}},{key:"Je",value:function(e){var t=this.Ke.get(e);return t||(t=new cr,this.Ke.set(e,t)),t}},{key:"ct",value:function(e){var t=this.Ue.get(e);return t||(t=new Se(Q),this.Ue=this.Ue.insert(e,t)),t}},{key:"Ye",value:function(e){var t=null!==this.et(e);return t||C("WatchChangeAggregator","Detected inactive target",e),t}},{key:"et",value:function(e){var t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}},{key:"Ze",value:function(e){var t=this;this.Ke.set(e,new cr),this.Qe.getRemoteKeysForTarget(e).forEach((function(n){t.je(e,n,null)}))}},{key:"ut",value:function(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}]),e}();function hr(){return new Ee(ne.comparator)}function fr(){return new Ee(ne.comparator)}var dr={asc:"ASCENDING",desc:"DESCENDING"},vr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pr={and:"AND",or:"OR"},yr=function e(n,r){"use strict";t(o)(this,e),this.databaseId=n,this.useProto3Json=r};function gr(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function mr(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function kr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wr(e,t){return mr(e,t.toTimestamp())}function br(e){return R(!!e),X.fromTimestamp((t=Pe(e),new J(t.seconds,t.nanos)));var t}function _r(e,t){return(n=e,new Z(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function xr(e){var t=Z.fromString(e);return R(Br(t)),t}function Er(e,t){return _r(e.databaseId,t.path)}function Ir(e,t){var n=xr(t);if(n.get(1)!==e.databaseId.projectId)throw new M(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new M(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(Ar(n))}function Tr(e,t){return _r(e.databaseId,t)}function Sr(e){var t=xr(e);return 4===t.length?Z.emptyPath():Ar(t)}function Cr(e){return new Z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ar(e){return R(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Nr(e,t,n){return{name:Er(e,t),fields:n.value.mapValue.fields}}function Dr(e,t){var n,r,i;if(t instanceof Mn)n={update:Nr(e,t.key,t.value)};else if(t instanceof zn)n={delete:Er(e,t.key)};else if(t instanceof Un)n={update:Nr(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Hn))return O();n={verify:Er(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof kn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _n)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof En)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw O()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:O()}(e,t.precondition)),n}function Or(e,t){return{documents:[Tr(e,t.path)]}}function Rr(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Tr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Tr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return jr(dt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Fr((t=e).field),direction:Mr(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s=gr(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(o=t.startAt).inclusive,values:o.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Pr(e){var t=Sr(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){R(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=Lr(o))instanceof dt&&pt(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new ct(Vr((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return pe(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new ot(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new ot(n,t)}(n.endAt)),Pt(t,i,c,u,l,"F",h,f)}function Lr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=Vr(e.unaryFilter.field);return ft.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=Vr(e.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=Vr(e.unaryFilter.field);return ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=Vr(e.unaryFilter.field);return ft.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?(n=e,ft.create(Vr(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,dt.create(t.compositeFilter.filters.map((function(e){return Lr(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))):O();var t,n}function Mr(e){return dr[e]}function Ur(e){return vr[e]}function Fr(e){return{fieldPath:e.canonicalString()}}function Vr(e){return te.fromServerFormat(e.fieldPath)}function jr(e){return e instanceof ft?function(e){if("=="===e.op){if(Ze(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NAN"}};if($e(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ze(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NAN"}};if($e(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(e.field),op:Ur(e.op),value:e.value}}}(e):e instanceof dt?(r=(t=e).getFilters().map((function(e){return jr(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,pr[n]),filters:r}}):O();var t,n,r}function Br(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr=function(){"use strict";function e(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:X.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:X.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Oe.EMPTY_BYTE_STRING,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(o)(this,e),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=l}return t(u)(e,[{key:"withSequenceNumber",value:function(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}},{key:"withResumeToken",value:function(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}},{key:"withExpectedCount",value:function(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}},{key:"withLastLimboFreeSnapshotVersion",value:function(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}]),e}(),zr=function e(n){"use strict";t(o)(this,e),this.ht=n};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){var t=Pr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"dt",value:function(e,t){this.Tt(e,t),t.Et()}},{key:"Tt",value:function(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(Le(e.integerValue));else if("doubleValue"in e){var n=Le(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),ye(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){var r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt("".concat(r.seconds||"")),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(Me(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.At(t,45),t.Rt(i.latitude||0),t.Rt(i.longitude||0)}else"mapValue"in e?nt(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):O()}},{key:"ft",value:function(e,t){this.At(t,25),this.Dt(e,t)}},{key:"Dt",value:function(e,t){t.Vt(e)}},{key:"St",value:function(e,t){var n=e.fields||{};this.At(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ft(u,t),this.Tt(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"bt",value:function(e,t){var n=e.values||[];this.At(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.Tt(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"wt",value:function(e,t){var n=this;this.At(t,37),ne.fromName(e).path.forEach((function(e){n.At(t,60),n.Dt(e,t)}))}},{key:"At",value:function(e,t){e.Rt(t)}},{key:"gt",value:function(e){e.Rt(2)}}]),e}();Kr.Ct=new Kr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gr=function(){"use strict";function e(){t(o)(this,e),this.an=new Wr}return t(u)(e,[{key:"addToCollectionParentIndex",value:function(e,t){return this.an.add(t),fe.resolve()}},{key:"getCollectionParents",value:function(e,t){return fe.resolve(this.an.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return fe.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return fe.resolve()}},{key:"deleteAllFieldIndexes",value:function(e){return fe.resolve()}},{key:"createTargetIndexes",value:function(e,t){return fe.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return fe.resolve(null)}},{key:"getIndexType",value:function(e,t){return fe.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return fe.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return fe.resolve(null)}},{key:"getMinOffset",value:function(e,t){return fe.resolve(oe.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return fe.resolve(oe.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return fe.resolve()}},{key:"updateIndexEntries",value:function(e,t){return fe.resolve()}}]),e}(),Wr=function(){"use strict";function e(){t(o)(this,e),this.index={}}return t(u)(e,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Se(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Se(Z.comparator)).toArray()}}]),e}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qr=function(){"use strict";function e(n,r,i){t(o)(this,e),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return t(u)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr.DEFAULT_COLLECTION_PERCENTILE=10,Qr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qr.DEFAULT=new Qr(41943040,Qr.DEFAULT_COLLECTION_PERCENTILE,Qr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qr.DISABLED=new Qr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yr=function(){"use strict";function e(n){t(o)(this,e),this.Nn=n}return t(u)(e,[{key:"next",value:function(){return this.Nn+=2,this.Nn}}],[{key:"Bn",value:function(){return new e(0)}},{key:"Ln",value:function(){return new e(-1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jr=function(){"use strict";function e(){t(o)(this,e),this.changes=new Xt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return t(u)(e,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?fe.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xr=function e(n,r){"use strict";t(o)(this,e),this.overlayedDocument=n,this.mutatedFields=r},$r=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return t(u)(e,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&Rn(r.mutation,e,Ae.empty(),J.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,cn()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:cn(),r=this,i=rn();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=tn();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=rn();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,cn())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=Zt(),a=on(),o=on();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Un)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),Rn(o.mutation,t,o.mutation.getFieldMask(),J.now())):a.set(t.key,Ae.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new Xr(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=on(),i=new Ee((function(e,t){return e-t})),a=cn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||Ae.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||cn()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=an();l.forEach((function(e){if(!a.has(e)){var n=Dn(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return fe.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){return i=t,ne.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Vt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):fe.resolve(rn()),u=-1,c=a;return s.next((function(t){return fe.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?fe.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,cn())})).next((function(e){return{batchId:u,changes:nn(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new ne(t)).next((function(e){var t=tn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n,r){var i=this,a=t.collectionGroup,o=tn();return this.indexManager.getCollectionParents(e,a).next((function(s){return fe.forEach(s,(function(s){var u,c,l=(u=t,c=s.child(a),new Rt(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt));return i.getDocumentsMatchingCollectionQuery(e,l,n,r).next((function(e){e.forEach((function(e,t){o=o.insert(e,t)}))}))})).next((function(){return o}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n,r){var i,a=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(o){return i=o,a.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)})).next((function(e){i.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,at.newInvalidDocument(r)))}));var n=tn();return e.forEach((function(e,r){var a=i.get(e);void 0!==a&&Rn(a.mutation,r,Ae.empty(),J.now()),Wt(t,r)&&(n=n.insert(e,r))})),n}))}}]),e}(),Zr=function(){"use strict";function e(n){t(o)(this,e),this.serializer=n,this.lr=new Map,this.hr=new Map}return t(u)(e,[{key:"getBundleMetadata",value:function(e,t){return fe.resolve(this.lr.get(t))}},{key:"saveBundleMetadata",value:function(e,t){return this.lr.set(t.id,{id:(n=t).id,version:n.version,createTime:br(n.createTime)}),fe.resolve();var n}},{key:"getNamedQuery",value:function(e,t){return fe.resolve(this.hr.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.hr.set(t.name,{name:(n=t).name,query:Hr(n.bundledQuery),readTime:br(n.readTime)}),fe.resolve();var n}}]),e}(),ei=function(){"use strict";function e(){t(o)(this,e),this.overlays=new Ee(ne.comparator),this.Pr=new Map}return t(u)(e,[{key:"getOverlay",value:function(e,t){return fe.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=rn();return fe.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.It(e,t,i)})),fe.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.Pr.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.Pr.delete(n)),fe.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=rn(),i=t.length+1,a=new ne(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return fe.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new Ee((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=rn(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=rn(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return fe.resolve(u)}},{key:"It",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Wn(t,n));var a=this.Pr.get(t);void 0===a&&(a=cn(),this.Pr.set(t,a)),this.Pr.set(t,a.add(n.key))}}]),e}(),ti=function(){"use strict";function e(){t(o)(this,e),this.Ir=new Se(ni.dr),this.Tr=new Se(ni.Er)}return t(u)(e,[{key:"isEmpty",value:function(){return this.Ir.isEmpty()}},{key:"addReference",value:function(e,t){var n=new ni(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}},{key:"Ar",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.Rr(new ni(e,t))}},{key:"Vr",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"mr",value:function(e){var t=this,n=new ne(new Z([])),r=new ni(n,e),i=new ni(n,e+1),a=[];return this.Tr.forEachInRange([r,i],(function(e){t.Rr(e),a.push(e.key)})),a}},{key:"gr",value:function(){var e=this;this.Ir.forEach((function(t){return e.Rr(t)}))}},{key:"Rr",value:function(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}},{key:"pr",value:function(e){var t=new ne(new Z([])),n=new ni(t,e),r=new ni(t,e+1),i=cn();return this.Tr.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new ni(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),e}(),ni=function(){"use strict";function e(n,r){t(o)(this,e),this.key=n,this.yr=r}return t(u)(e,null,[{key:"dr",value:function(e,t){return ne.comparator(e.key,t.key)||Q(e.yr,t.yr)}},{key:"Er",value:function(e,t){return Q(e.yr,t.yr)||ne.comparator(e.key,t.key)}}]),e}(),ri=function(){"use strict";function e(n,r){t(o)(this,e),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.wr=1,this.Sr=new Se(ni.dr)}return t(u)(e,[{key:"checkEmpty",value:function(e){return fe.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new Kn(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.Sr=this.Sr.add(new ni(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return fe.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return fe.resolve(this.br(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.Dr(n),i=r<0?0:r;return fe.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return fe.resolve(0===this.mutationQueue.length?-1:this.wr-1)}},{key:"getAllMutationBatches",value:function(e){return fe.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new ni(t,0),i=new ni(t,Number.POSITIVE_INFINITY),a=[];return this.Sr.forEachInRange([r,i],(function(e){var t=n.br(e.yr);a.push(t)})),fe.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Se(Q);return t.forEach((function(e){var t=new ni(e,0),i=new ni(e,Number.POSITIVE_INFINITY);n.Sr.forEachInRange([t,i],(function(e){r=r.add(e.yr)}))})),fe.resolve(this.Cr(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;ne.isDocumentKey(i)||(i=i.child(""));var a=new ni(new ne(i),0),o=new Se(Q);return this.Sr.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)}),a),fe.resolve(this.Cr(o))}},{key:"Cr",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.br(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;R(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();var r=this.Sr;return fe.forEach(t.mutations,(function(i){var a=new ni(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.Sr=r}))}},{key:"xn",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new ni(t,0),r=this.Sr.firstAfterOrEqual(n);return fe.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,fe.resolve()}},{key:"vr",value:function(e,t){return this.Dr(e)}},{key:"Dr",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"br",value:function(e){var t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),e}(),ii=function(){"use strict";function e(n){t(o)(this,e),this.Fr=n,this.docs=new Ee(ne.comparator),this.size=0}return t(u)(e,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return fe.resolve(n?n.document.mutableCopy():at.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=Zt();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():at.newInvalidDocument(e))})),fe.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=Zt(),a=t.path,o=new ne(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||se(ae(l),n)<=0||(r.has(l.key)||Wt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return fe.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){O()}},{key:"Mr",value:function(e,t){return fe.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new ai(this)}},{key:"getSize",value:function(e){return fe.resolve(this.size)}}]),e}(),ai=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).ur=e,t(f)(i)}return t(u)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.ur.addEntry(e,i)):t.ur.removeEntry(r)})),fe.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.ur.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.ur.getEntries(e,t)}}]),r}(Jr),oi=function(){"use strict";function e(n){t(o)(this,e),this.persistence=n,this.Or=new Xt((function(e){return Nt(e)}),Dt),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Nr=0,this.Br=new ti,this.targetCount=0,this.Lr=Yr.Bn()}return t(u)(e,[{key:"forEachTarget",value:function(e,t){return this.Or.forEach((function(e,n){return t(n)})),fe.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return fe.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return fe.resolve(this.Nr)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.Lr.next(),fe.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),fe.resolve()}},{key:"Qn",value:function(e){this.Or.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.Lr=new Yr(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Qn(t),this.targetCount+=1,fe.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Qn(t),fe.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,fe.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Or.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Or.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),fe.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return fe.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Or.get(t)||null;return fe.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Br.Ar(t,n),fe.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Br.Vr(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),fe.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Br.mr(t),fe.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Br.pr(t);return fe.resolve(n)}},{key:"containsKey",value:function(e,t){return fe.resolve(this.Br.containsKey(t))}}]),e}(),si=function(){"use strict";function e(n,r){var i=this;t(o)(this,e),this.kr={},this.overlays={},this.qr=new ve(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=n(this),this.Kr=new oi(this),this.indexManager=new Gr,this.remoteDocumentCache=new ii((function(e){return i.referenceDelegate.$r(e)})),this.serializer=new zr(r),this.Ur=new Zr(this.serializer)}return t(u)(e,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Qr=!1,Promise.resolve()}},{key:"started",get:function(){return this.Qr}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new ei,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.kr[e.toKey()];return n||(n=new ri(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Kr}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ur}},{key:"runTransaction",value:function(e,t,n){var r=this;C("MemoryPersistence","Starting transaction:",e);var i=new ui(this.qr.next());return this.referenceDelegate.Wr(),n(i).next((function(e){return r.referenceDelegate.Gr(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"zr",value:function(e,t){return fe.or(Object.values(this.kr).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),e}(),ui=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).currentSequenceNumber=e,t(f)(i)}return r}(ce),ci=function(){"use strict";function e(n){t(o)(this,e),this.persistence=n,this.jr=new ti,this.Hr=null}return t(u)(e,[{key:"Yr",get:function(){if(this.Hr)return this.Hr;throw O()}},{key:"addReference",value:function(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),fe.resolve()}},{key:"removeReference",value:function(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),fe.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Yr.add(t.toString()),fe.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.jr.mr(t.targetId).forEach((function(e){return n.Yr.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Yr.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Wr",value:function(){this.Hr=new Set}},{key:"Gr",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fe.forEach(this.Yr,(function(r){var i=ne.fromPath(r);return t.Zr(e,i).next((function(e){e||n.removeEntry(i,X.min())}))})).next((function(){return t.Hr=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.Zr(e,t).next((function(e){e?n.Yr.delete(t.toString()):n.Yr.add(t.toString())}))}},{key:"$r",value:function(e){return 0}},{key:"Zr",value:function(e,t){var n=this;return fe.or([function(){return fe.resolve(n.jr.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.zr(e,t)}])}}],[{key:"Jr",value:function(t){return new e(t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var li=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.targetId=n,this.fromCache=r,this.Qi=i,this.Ki=a}return t(u)(e,null,[{key:"$i",value:function(t,n){var r=cn(),i=cn(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new e(t,n.fromCache,r,i)}}]),e}(),hi=function(){"use strict";function e(){t(o)(this,e),this._documentReadCount=0}return t(u)(e,[{key:"documentReadCount",get:function(){return this._documentReadCount}},{key:"incrementDocumentReadCount",value:function(e){this._documentReadCount+=e}}]),e}(),fi=function(){"use strict";function e(){t(o)(this,e),this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}return t(u)(e,[{key:"initialize",value:function(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this,a={result:null};return this.Hi(e,t).next((function(e){a.result=e})).next((function(){if(!a.result)return i.Ji(e,t,r,n).next((function(e){a.result=e}))})).next((function(){var n=i;if(!a.result){var r=new hi;return i.Yi(e,t,r).next((function(i){if(a.result=i,n.Wi)return n.Zi(e,t,r,i.size)}))}})).next((function(){return a.result}))}},{key:"Zi",value:function(e,t,n,r){return n.documentReadCount<this.Gi?(S()<=w.LogLevel.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),fe.resolve()):(S()<=w.LogLevel.DEBUG&&C("QueryEngine","Query:",Gt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(S()<=w.LogLevel.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bt(t))):fe.resolve())}},{key:"Hi",value:function(e,n){var r=this;if(Mt(n))return fe.resolve(null);var i=Bt(n);return this.indexManager.getIndexType(e,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=zt(n,null,"F"),i=Bt(n)),r.indexManager.getDocumentsMatchingTarget(e,i).next((function(a){var o=r,s=cn.apply(void 0,t(v)(a));return r.ji.getDocuments(e,s).next((function(t){return o.indexManager.getMinOffset(e,i).next((function(r){var i=o.Xi(n,t);return o.es(n,i,s,r.readTime)?o.Hi(e,zt(n,null,"F")):o.ts(e,i,n,r)}))}))})))}))}},{key:"Ji",value:function(e,t,n,r){var i=this;return Mt(t)||r.isEqual(X.min())?fe.resolve(null):this.ji.getDocuments(e,n).next((function(a){var o=i.Xi(t,a);return i.es(t,o,n,r)?fe.resolve(null):(S()<=w.LogLevel.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),i.ts(e,o,t,ie(r,-1)).next((function(e){return e})))}))}},{key:"Xi",value:function(e,t){var n=new Se(Yt(e));return t.forEach((function(t,r){Wt(e,r)&&(n=n.add(r))})),n}},{key:"es",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Yi",value:function(e,t,n){return S()<=w.LogLevel.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.ji.getDocumentsMatchingQuery(e,t,oe.min(),n)}},{key:"ts",value:function(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),e}(),di=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.persistence=n,this.ns=r,this.serializer=a,this.rs=new Ee(Q),this.ss=new Xt((function(e){return Nt(e)}),Dt),this.os=new Map,this._s=n.getRemoteDocumentCache(),this.Kr=n.getTargetCache(),this.Ur=n.getBundleCache(),this.us(i)}return t(u)(e,[{key:"us",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $r(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.rs)}))}}]),e}();
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e,t,n,r){return new di(e,t,n,r)}function pi(e,t){return yi.apply(this,arguments)}function yi(){return(yi=t(i)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.us(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=cn(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,g=f.mutations[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var m=y.value;o=o.add(m.key)}}catch(e){v=!0,p=e}finally{try{d||null==g.return||g.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var _,x=n[Symbol.iterator]();!(k=(_=x.next()).done);k=!0){var E=_.value;a.push(E.batchId);var I=!0,T=!1,S=void 0;try{for(var C,A=E.mutations[Symbol.iterator]();!(I=(C=A.next()).done);I=!0){var N=C.value;o=o.add(N.key)}}catch(e){T=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(T)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==x.return||x.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{cs:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gi(e,t){var n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n._s.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=fe.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);R(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=cn(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function mi(e){var t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Kr.getLastRemoteSnapshotVersion(e)}))}function ki(e,t){var n=P(e),r=t.snapshotVersion,i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Kr.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Kr.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Kr.updateTargetData(e,f))}}));var s=Zt(),u=cn();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(wi(e,a,t.documentUpdates).next((function(e){s=e.ls,u=e.hs}))),!r.isEqual(X.min())){var c=n.Kr.getLastRemoteSnapshotVersion(e).next((function(t){return n.Kr.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return fe.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.rs=i,e}))}function wi(e,t,n){var r=cn(),i=cn();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=Zt();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(X.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):C("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{ls:r,hs:i}}))}function bi(e,t){var n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function _i(e,t){var n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Kr.getTargetData(e,t).next((function(i){return i?(r=i,fe.resolve(r)):n.Kr.allocateTargetId(e).next((function(i){return r=new qr(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Kr.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.rs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(t,e.targetId)),e}))}function xi(e,t,n){return Ei.apply(this,arguments)}function Ei(){return(Ei=t(i)(t(g).mark((function e(n,r,i){var a,o,s;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=P(n),o=a.rs.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),de(e.t1)){e.next=12;break}throw e.t1;case 12:C("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.rs=a.rs.remove(r),a.ss.delete(o.target);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Ii(e,t,n){var r=P(e),i=X.min(),a=cn();return r.persistence.runTransaction("Execute query","readwrite",(function(e){return(o=r,s=e,u=Bt(t),c=P(o),l=c.ss.get(u),void 0!==l?fe.resolve(c.rs.get(l)):c.Kr.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.ns.getDocumentsMatchingQuery(e,t,n?i:X.min(),n?a:cn())})).next((function(e){return Ti(r,Qt(t),e),{documents:e,Ps:a}}));var o,s,u,c,l}))}function Ti(e,t,n){var r=e.os.get(t)||X.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.os.set(t,r)}var Si=function(){"use strict";function e(){t(o)(this,e),this.activeTargetIds=hn()}return t(u)(e,[{key:"Rs",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"Vs",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"As",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),e}(),Ci=function(){"use strict";function e(){t(o)(this,e),this.ro=new Si,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t(u)(e,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.ro.Rs(e),this.io[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.io[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.ro.Vs(e)}},{key:"isLocalQueryTarget",value:function(e){return this.ro.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.io[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.ro.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.ro.activeTargetIds.has(e)}},{key:"start",value:function(){return this.ro=new Si,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),e}(),Ai=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"so",value:function(e){}},{key:"shutdown",value:function(){}}]),e}(),Ni=function(){"use strict";function e(){var n=this;t(o)(this,e),this.oo=function(){return n._o()},this.ao=function(){return n.uo()},this.co=[],this.lo()}return t(u)(e,[{key:"so",value:function(e){this.co.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}},{key:"lo",value:function(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}},{key:"_o",value:function(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.co[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"uo",value:function(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.co[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),e}(),Di=null;function Oi(){return null===Di?Di=268435456+Math.round(2147483648*Math.random()):Di++,"0x"+Di.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Ri={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Pi=function(){"use strict";function e(n){t(o)(this,e),this.ho=n.ho,this.Po=n.Po}return t(u)(e,[{key:"Io",value:function(e){this.To=e}},{key:"Eo",value:function(e){this.Ao=e}},{key:"onMessage",value:function(e){this.Ro=e}},{key:"close",value:function(){this.Po()}},{key:"send",value:function(e){this.ho(e)}},{key:"Vo",value:function(){this.To()}},{key:"mo",value:function(e){this.Ao(e)}},{key:"fo",value:function(e){this.Ro(e)}}]),e}(),Li="WebChannelConnection",Mi=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this,e)).forceLongPolling=e.forceLongPolling,i.autoDetectLongPolling=e.autoDetectLongPolling,i.useFetchStreams=e.useFetchStreams,i.longPollingOptions=e.longPollingOptions,t(f)(i)}return t(u)(r,[{key:"vo",value:function(e,t,n,r){var i=Oi();return new Promise((function(a,o){var s=new(0,_.XhrIo);s.setWithCredentials(!0),s.listenOnce(_.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case _.ErrorCode.NO_ERROR:var t=s.getResponseJson();C(Li,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),a(t);break;case _.ErrorCode.TIMEOUT:C(Li,"RPC '".concat(e,"' ").concat(i," timed out")),o(new M(L.DEADLINE_EXCEEDED,"Request time out"));break;case _.ErrorCode.HTTP_ERROR:var n=s.getStatus();if(C(Li,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson();Array.isArray(r)&&(r=r[0]);var u=null==r?void 0:r.error;if(u&&u.status&&u.message){var c=(l=u.status,h=l.toLowerCase().replace(/_/g,"-"),Object.values(L).indexOf(h)>=0?h:L.UNKNOWN);o(new M(c,u.message))}else o(new M(L.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new M(L.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Li,"RPC '".concat(e,"' ").concat(i," completed."))}var l,h}));var u=JSON.stringify(r);C(Li,"RPC '".concat(e,"' ").concat(i," sending request:"),r),s.send(t,"POST",u,n,15)}))}},{key:"Mo",value:function(e,t,n){var r=Oi(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,_.createWebChannelTransport)(),o=(0,_.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(s.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Co(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;var c=i.join("");C(Li,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(c),s);var l=a.createWebChannel(c,s),h=!1,f=!1,d=new Pi({ho:function(t){f?C(Li,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),t):(h||(C(Li,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),l.open(),h=!0),C(Li,"RPC '".concat(e,"' stream ").concat(r," sending:"),t),l.send(t))},Po:function(){return l.close()}}),v=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return v(l,_.WebChannel.EventType.OPEN,(function(){f||C(Li,"RPC '".concat(e,"' stream ").concat(r," transport opened."))})),v(l,_.WebChannel.EventType.CLOSE,(function(){f||(f=!0,C(Li,"RPC '".concat(e,"' stream ").concat(r," transport closed")),d.mo())})),v(l,_.WebChannel.EventType.ERROR,(function(t){f||(f=!0,N(Li,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),t),d.mo(new M(L.UNAVAILABLE,"The operation could not be completed")))})),v(l,_.WebChannel.EventType.MESSAGE,(function(t){var n;if(!f){var i=t.data[0];R(!!i);var a=i,o=a.error||(null===(n=a[0])||void 0===n?void 0:n.error);if(o){C(Li,"RPC '".concat(e,"' stream ").concat(r," received error:"),o);var s=o.status,u=function(e){var t=Bn[e];if(void 0!==t)return Jn(t)}(s),c=o.message;void 0===u&&(u=L.INTERNAL,c="Unknown error status: "+s+" with message "+o.message),f=!0,d.mo(new M(u,c)),l.close()}else C(Li,"RPC '".concat(e,"' stream ").concat(r," received:"),i),d.fo(i)}})),v(o,_.Event.STAT_EVENT,(function(t){t.stat===_.Stat.PROXY?C(Li,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):t.stat===_.Stat.NOPROXY&&C(Li,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))})),setTimeout((function(){d.Vo()}),0),d}}]),r}(function(){"use strict";function e(n){t(o)(this,e),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo="projects/".concat(i,"/databases/").concat(a),this.wo="(default)"===this.databaseId.database?"project_id=".concat(i):"project_id=".concat(i,"&database_id=").concat(a)}return t(u)(e,[{key:"So",get:function(){return!1}},{key:"bo",value:function(e,t,n,r,i){var a=Oi(),o=this.Do(e,t);C("RestConnection","Sending RPC '".concat(e,"' ").concat(a,":"),o,n);var s={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(s,r,i),this.vo(e,o,s,n).then((function(t){return C("RestConnection","Received RPC '".concat(e,"' ").concat(a,": "),t),t}),(function(t){throw N("RestConnection","RPC '".concat(e,"' ").concat(a," failed with error: "),t,"url: ",o,"request:",n),t}))}},{key:"Fo",value:function(e,t,n,r,i,a){return this.bo(e,t,n,r,i)}},{key:"Co",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+I,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"Do",value:function(e,t){var n=Ri[e];return"".concat(this.po,"/v1/").concat(t,":").concat(n)}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return new yr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vi=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;t(o)(this,e),this._i=n,this.timerId=r,this.xo=i,this.Oo=a,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}return t(u)(e,[{key:"reset",value:function(){this.Bo=0}},{key:"qo",value:function(){this.Bo=this.No}},{key:"Qo",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Bo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,(function(){return t.ko=Date.now(),e()})),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}},{key:"$o",value:function(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}},{key:"cancel",value:function(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}},{key:"Ko",value:function(){return(Math.random()-.5)*this.Bo}}]),e}(),ji=function(){"use strict";function e(n,r,i,a,s,u,c,l){t(o)(this,e),this._i=n,this.Uo=i,this.Wo=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Vi(n,r)}return t(u)(e,[{key:"Jo",value:function(){return 1===this.state||5===this.state||this.Yo()}},{key:"Yo",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Zo()}},{key:"stop",value:function(){var e=this;return t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.Jo(),!t.t0){t.next=4;break}return t.next=4,e.close(0);case 4:case"end":return t.stop()}}),n)})))()}},{key:"Xo",value:function(){this.state=0,this.Ho.reset()}},{key:"e_",value:function(){var e=this;this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(function(){return e.t_()})))}},{key:"n_",value:function(e){this.r_(),this.stream.send(e)}},{key:"t_",value:function(){var e=this;return t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.Yo()){t.next=2;break}return t.abrupt("return",e.close(0));case 2:case"end":return t.stop()}}),n)})))()}},{key:"r_",value:function(){this.zo&&(this.zo.cancel(),this.zo=null)}},{key:"i_",value:function(){this.jo&&(this.jo.cancel(),this.jo=null)}},{key:"close",value:function(e,n){var r=this;return t(i)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.r_(),r.i_(),r.Ho.cancel(),r.Go++,4!==e?r.Ho.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(A(n.toString()),A("Using maximum backoff delay to prevent overloading the backend."),r.Ho.qo()):n&&n.code===L.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.s_(),r.stream.close(),r.stream=null),r.state=e,t.next=9,r.listener.Eo(n);case 9:case"end":return t.stop()}}),i)})))()}},{key:"s_",value:function(){}},{key:"auth",value:function(){var e=this;this.state=1;var n=this.o_(this.Go),r=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=t(d)(n,2),a=i[0],o=i[1];e.Go===r&&e.__(a,o)}),(function(t){var r=e;n((function(){var e=new M(L.UNKNOWN,"Fetching auth token failed: "+t.message);return r.a_(e)}))}))}},{key:"__",value:function(e,t){var n=this,r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io((function(){var e=n;r((function(){return e.state=2,e.jo=e._i.enqueueAfterDelay(e.Wo,1e4,(function(){return e.Yo()&&(e.state=3),Promise.resolve()})),e.listener.Io()}))})),this.stream.Eo((function(e){var t=n;r((function(){return t.a_(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Zo",value:function(){var e=this;this.state=5,this.Ho.Qo(t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state=0,e.start();case 1:case"end":return t.stop()}}),n)}))))}},{key:"a_",value:function(e){return C("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"o_",value:function(e){var t=this;return function(n){var r=t;t._i.enqueueAndForget((function(){return r.Go===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),e}(),Bi=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,t(f)(l)}return t(u)(r,[{key:"u_",value:function(e,t){return this.connection.Mo("Listen",e,t)}},{key:"onMessage",value:function(e){this.Ho.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:O(),a=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(R(void 0===t||"string"==typeof t),Oe.fromBase64String(t||"")):(R(void 0===t||t instanceof Uint8Array),Oe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?L.UNKNOWN:Jn(e.code);return new M(t,e.message||"")}(s);n=new ur(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=Ir(e,c.document.name),h=br(c.document.updateTime),f=c.document.createTime?br(c.document.createTime):X.min(),d=new rt({mapValue:{fields:c.document.fields}}),v=at.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new or(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var g=t.documentDelete;g.document;var m=Ir(e,g.document),k=g.readTime?br(g.readTime):X.min(),w=at.newNoDocument(m,k),b=g.removedTargetIds||[];n=new or([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var _=t.documentRemove;_.document;var x=Ir(e,_.document),E=_.removedTargetIds||[];n=new or([],E,x,null)}else{if(!("filter"in t))return O();t.filter;var I=t.filter;I.targetId;var T=I.count,S=void 0===T?0:T,C=I.unchangedNames,A=new Qn(S,C),N=I.targetId;n=new sr(N,A)}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return X.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?X.min():t.readTime?br(t.readTime):X.min()}(e);return this.listener.c_(t,n)}},{key:"l_",value:function(e){var t={};t.database=Cr(this.serializer),t.addTarget=function(e,t){var n,r=t.target;if((n=Ot(r)?{documents:Or(e,r)}:{query:Rr(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=kr(e,t.resumeToken);var i=gr(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(X.min())>0){n.readTime=mr(e,t.snapshotVersion.toTimestamp());var a=gr(e,t.expectedCount);null!==a&&(n.expectedCount=a)}return n}(this.serializer,e);var n,r=(this.serializer,null==(n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose))?null:{"goog-listen-tags":n});r&&(t.labels=r),this.n_(t)}},{key:"h_",value:function(e){var t={};t.database=Cr(this.serializer),t.removeTarget=e,this.n_(t)}}]),r}(ji),qi=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,l.P_=!1,t(f)(l)}return t(u)(r,[{key:"I_",get:function(){return this.P_}},{key:"start",value:function(){this.P_=!1,this.lastStreamToken=void 0,t(c)(t(l)(r.prototype),"start",this).call(this)}},{key:"s_",value:function(){this.P_&&this.d_([])}},{key:"u_",value:function(e,t){return this.connection.Mo("Write",e,t)}},{key:"onMessage",value:function(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(R(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?br(t.updateTime):br(n)).isEqual(X.min())&&(r=br(n)),new Sn(r,t.transformResults||[]);var t,n,r}))):[]),n=br(e.commitTime);return this.listener.T_(n,t)}var r,i;return R(!e.writeResults||0===e.writeResults.length),this.P_=!0,this.listener.E_()}},{key:"A_",value:function(){var e={};e.database=Cr(this.serializer),this.n_(e)}},{key:"d_",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return Dr(t.serializer,e)}))};this.n_(n)}}]),r}(ji),zi=function(e){"use strict";t(h)(r,(function e(){t(o)(this,e)}));var n=t(y)(r);function r(e,i,a,s){var u;return t(o)(this,r),(u=n.call(this)).authCredentials=e,u.appCheckCredentials=i,u.connection=a,u.serializer=s,u.R_=!1,t(f)(u)}return t(u)(r,[{key:"V_",value:function(){if(this.R_)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"bo",value:function(e,n,r){var i=this;return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=t(d)(a,2),s=o[0],u=o[1];return i.connection.bo(e,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new M(L.UNKNOWN,e.toString())}))}},{key:"Fo",value:function(e,n,r,i){var a=this;return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=t(d)(o,2),u=s[0],c=s[1];return a.connection.Fo(e,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new M(L.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.R_=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi=function(){"use strict";function e(n,r){t(o)(this,e),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}return t(u)(e,[{key:"y_",value:function(){var e=this;0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.g_=null,e.S_("Backend didn't respond within 10 seconds."),e.w_("Offline"),Promise.resolve()})))}},{key:"b_",value:function(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.w_("Offline")))}},{key:"set",value:function(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}},{key:"w_",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"S_",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.p_?(A(t),this.p_=!1):C("OnlineStateTracker",t)}},{key:"D_",value:function(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}]),e}(),Ki=function e(n,r,a,s,u){"use strict";var c=this;t(o)(this,e),this.localStore=n,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=u,this.x_.so((function(e){var n=c;a.enqueueAndForget(t(i)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=na(n),!e.t0){e.next=5;break}return C("RemoteStore","Restarting streams for network reachability change."),e.next=5,function(){var e=t(i)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=P(n)).F_.add(4),e.next=4,Qi(r);case 4:return r.O_.set("Unknown"),r.F_.delete(4),e.next=8,Gi(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n);case 5:case"end":return e.stop()}}),e)}))))})),this.O_=new Hi(a,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){return Wi.apply(this,arguments)}function Wi(){return(Wi=t(i)(t(g).mark((function e(n){var r,i,a,o,s,u;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!na(n)){e.next=25;break}e.prev=2,o=n.M_[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Qi(e){return Yi.apply(this,arguments)}function Yi(){return(Yi=t(i)(t(g).mark((function e(n){var r,i,a,o,s,u;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.M_[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),e,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function Ji(e,t){var n=P(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),ta(n)?ea(n):Da(n).Yo()&&$i(n,t))}function Xi(e,t){var n=P(e),r=Da(n);n.v_.delete(t),r.Yo()&&Zi(n,t),0===n.v_.size&&(r.Yo()?r.e_():na(n)&&n.O_.set("Unknown"))}function $i(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){var n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Da(e).l_(t)}function Zi(e,t){e.N_.Le(t),Da(e).h_(t)}function ea(e){e.N_=new lr({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},lt:function(t){return e.v_.get(t)||null},st:function(){return e.datastore.serializer.databaseId}}),Da(e).start(),e.O_.y_()}function ta(e){return na(e)&&!Da(e).Jo()&&e.v_.size>0}function na(e){return 0===P(e).F_.size}function ra(e){e.N_=void 0}function ia(e){return aa.apply(this,arguments)}function aa(){return(aa=t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.v_.forEach((function(e,t){$i(n,e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oa(e,t){return sa.apply(this,arguments)}function sa(){return(sa=t(i)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ra(n),ta(n)?(n.O_.b_(r),ea(n)):n.O_.set("Unknown");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ua(e,t,n){return ca.apply(this,arguments)}function ca(){return ca=t(i)(t(g).mark((function e(n,r,a){var o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.O_.set("Online"),!(r instanceof ur&&2===r.state&&r.cause)){e.next=13;break}return e.prev=1,e.next=4,function(){var e=t(i)(t(g).mark((function e(n,r){var i,a,o,s,u,c,l;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,u=r.targetIds[Symbol.iterator]();case 4:if(a=(c=u.next()).done){e.next=15;break}if(l=c.value,e.t0=n.v_.has(l),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(l,i);case 10:n.v_.delete(l),n.N_.removeTarget(l);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),e,null,[[2,17,21,29],[22,,24,28]])})));return function(t,n){return e.apply(this,arguments)}}()(n,r);case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),C("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),e.t0),e.next=11,la(n,e.t0);case 11:case 22:e.next=29;break;case 13:if(r instanceof or?n.N_.Ge(r):r instanceof sr?n.N_.Xe(r):n.N_.He(r),a.isEqual(X.min())){e.next=29;break}return e.prev=14,e.next=17,mi(n.localStore);case 17:if(o=e.sent,e.t1=a.compareTo(o)>=0,!e.t1){e.next=22;break}return e.next=22,function(e,t){var n=e.N_._t(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.v_.get(r);i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t,n){var r=e.v_.get(t);if(r){e.v_.set(t,r.withResumeToken(Oe.EMPTY_BYTE_STRING,r.snapshotVersion)),Zi(e,t);var i=new qr(r.target,t,n,r.sequenceNumber);$i(e,i)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,a);case 24:return e.prev=24,e.t2=e.catch(14),C("RemoteStore","Failed to raise snapshot:",e.t2),e.next=29,la(n,e.t2);case 29:case"end":return e.stop()}}),e,null,[[1,6],[14,24]])}))),ca.apply(this,arguments)}function la(e,t,n){return ha.apply(this,arguments)}function ha(){return(ha=t(i)(t(g).mark((function e(n,r,a){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de(r)){e.next=2;break}throw r;case 2:return n.F_.add(1),e.next=5,Qi(n);case 5:n.O_.set("Offline"),a||(a=function(){return mi(n.localStore)}),n.asyncQueue.enqueueRetryable(t(i)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("RemoteStore","Retrying IndexedDB access"),e.next=3,a();case 3:return n.F_.delete(1),e.next=6,Gi(n);case 6:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fa(e,t){return t().catch((function(n){return la(e,n,t)}))}function da(e){return va.apply(this,arguments)}function va(){return(va=t(i)(t(g).mark((function e(n){var r,i,a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=P(n),i=Oa(r),a=r.C_.length>0?r.C_[r.C_.length-1].batchId:-1;case 2:if(!pa(r)){e.next=19;break}return e.prev=3,e.next=6,bi(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.C_.length&&i.e_(),e.abrupt("break",19);case 10:a=o.batchId,ya(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,la(r,e.t0);case 17:e.next=2;break;case 19:ga(r)&&ma(r);case 20:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function pa(e){return na(e)&&e.C_.length<10}function ya(e,t){e.C_.push(t);var n=Oa(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function ga(e){return na(e)&&!Oa(e).Jo()&&e.C_.length>0}function ma(e){Oa(e).start()}function ka(e){return wa.apply(this,arguments)}function wa(){return(wa=t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Oa(n).A_();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ba(e){return _a.apply(this,arguments)}function _a(){return(_a=t(i)(t(g).mark((function e(n){var r,i,a,o,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=Oa(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.C_[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c=u.value,r.d_(c.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function xa(e,t,n){return Ea.apply(this,arguments)}function Ea(){return(Ea=t(i)(t(g).mark((function e(n,r,i){var a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.C_.shift(),o=Gn.from(a,r,i),e.next=3,fa(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,da(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ia(e,t){return Ta.apply(this,arguments)}function Ta(){return Ta=t(i)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r&&Oa(n).I_,!e.t0){e.next=4;break}return e.next=4,function(){var e=t(i)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Yn(t=r.code)||t===L.ABORTED){e.next=7;break}return i=n.C_.shift(),Oa(n).Xo(),e.next=5,fa(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,da(n);case 7:case"end":return e.stop()}var t}),e)})));return function(t,n){return e.apply(this,arguments)}}()(n,r);case 4:ga(n)&&ma(n);case 5:case"end":return e.stop()}}),e)}))),Ta.apply(this,arguments)}function Sa(e,t){return Ca.apply(this,arguments)}function Ca(){return(Ca=t(i)(t(g).mark((function e(n,r){var i,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=P(n)).asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials"),a=na(i),i.F_.add(3),e.next=6,Qi(i);case 6:return a&&i.O_.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.F_.delete(3),e.next=12,Gi(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Aa(e,t){return Na.apply(this,arguments)}function Na(){return(Na=t(i)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=P(n),!r){e.next=7;break}return i.F_.delete(2),e.next=5,Gi(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.F_.add(2),e.next=12,Qi(i);case 12:i.O_.set("Unknown");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Da(e){return e.B_||(e.B_=(r=e.datastore,a=e.asyncQueue,o={Io:ia.bind(null,e),Eo:oa.bind(null,e),c_:ua.bind(null,e)},(s=P(r)).V_(),new Bi(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),e.M_.push((n=t(i)(t(g).mark((function n(r){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}e.B_.Xo(),ta(e)?ea(e):e.O_.set("Unknown"),t.next=7;break;case 4:return t.next=6,e.B_.stop();case 6:ra(e);case 7:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),e.B_;var n,r,a,o,s}function Oa(e){return e.L_||(e.L_=(r=e.datastore,a=e.asyncQueue,o={Io:ka.bind(null,e),Eo:Ia.bind(null,e),E_:ba.bind(null,e),T_:xa.bind(null,e)},(s=P(r)).V_(),new qi(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),e.M_.push((n=t(i)(t(g).mark((function n(r){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return e.L_.Xo(),t.next=4,da(e);case 4:t.next=9;break;case 6:return t.next=8,e.L_.stop();case 8:e.C_.length>0&&(C("RemoteStore","Stopping write stream with ".concat(e.C_.length," pending writes")),e.C_=[]);case 9:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),e.L_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,a,o,s}var Ra=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new U,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return t(u)(e,[{key:"promise",get:function(){return this.deferred.promise}},{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var o=new e(t,n,Date.now()+r,i,a);return o.start(r),o}}]),e}();function Pa(e,t){if(A("AsyncQueue","".concat(t,": ").concat(e)),de(e))return new M(L.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var La=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n?function(e,t){return n(e,t)||ne.comparator(e.key,t.key)}:function(e,t){return ne.comparator(e.key,t.key)},this.keyedMap=tn(),this.sortedSet=new Ee(this.comparator)}return t(u)(e,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(t,n){var r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}],[{key:"emptySet",value:function(t){return new e(t.comparator)}}]),e}(),Ma=function(){"use strict";function e(){t(o)(this,e),this.k_=new Ee(ne.comparator)}return t(u)(e,[{key:"track",value:function(e){var t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):O():this.k_=this.k_.insert(t,e)}},{key:"q_",value:function(){var e=[];return this.k_.inorderTraversal((function(t,n){e.push(n)})),e}}]),e}(),Ua=function(){"use strict";function e(n,r,i,a,s,u,c,l,h){t(o)(this,e),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=s,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return t(u)(e,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ht(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(t,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new e(t,n,La.emptySet(n),o,r,i,!0,!1,a)}}]),e}(),Fa=function e(){"use strict";t(o)(this,e),this.Q_=void 0,this.listeners=[]},Va=function e(){"use strict";t(o)(this,e),this.queries=new Xt((function(e){return Kt(e)}),Ht),this.onlineState="Unknown",this.K_=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t){return Ba.apply(this,arguments)}function Ba(){return(Ba=t(i)(t(g).mark((function e(n,r){var i,a,o,s,u;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=P(n),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new Fa),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Q_=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),u=Pa(e.t0,"Initialization of query '".concat(Gt(r.query),"' failed")),e.abrupt("return",void r.onError(u));case 13:i.queries.set(a,s),s.listeners.push(r),r.U_(i.onlineState),s.Q_&&r.W_(s.Q_)&&Ga(i);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function qa(e,t){return za.apply(this,arguments)}function za(){return(za=t(i)(t(g).mark((function e(n,r){var i,a,o,s,u;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=P(n),a=r.query,o=!1,(s=i.queries.get(a))&&(u=s.listeners.indexOf(r))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ha(e,t){var n=P(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.W_(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Q_=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Ga(n)}function Ka(e,t,n){var r=P(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Ga(e){e.K_.forEach((function(e){e.next()}))}var Wa=function(){"use strict";function e(n,r,i){t(o)(this,e),this.query=n,this.G_=r,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=i||{}}return t(u)(e,[{key:"W_",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new Ua(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.z_?this.H_(e)&&(this.G_.next(e),u=!0):this.J_(e,this.onlineState)&&(this.Y_(e),u=!0),this.j_=e,u}},{key:"onError",value:function(e){this.G_.error(e)}},{key:"U_",value:function(e){this.onlineState=e;var t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}},{key:"J_",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"H_",value:function(e){if(e.docChanges.length>0)return!0;var t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"Y_",value:function(e){e=Ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qa=function e(n){"use strict";t(o)(this,e),this.key=n},Ya=function e(n){"use strict";t(o)(this,e),this.key=n},Ja=function(){"use strict";function e(n,r){t(o)(this,e),this.query=n,this.oa=r,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=cn(),this.mutatedKeys=cn(),this.ua=Yt(n),this.ca=new La(this.ua)}return t(u)(e,[{key:"la",get:function(){return this.oa}},{key:"ha",value:function(e,t){var n=this,r=t?t.Pa:new Ma,i=t?t.ca:this.ca,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=Wt(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.Ia(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.ua(h,u)>0||c&&n.ua(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,es:s,mutatedKeys:a}}},{key:"Ia",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;var a=e.Pa.q_();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}})(n)-a(i)||r.ua(e.doc,t.doc);var n,i,a})),this.da(n);var o=t?this.Ta():[],s=0===this.aa.size&&this.current?1:0,u=s!==this._a;return this._a=s,0!==a.length||u?{snapshot:new Ua(this.query,e.ca,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}},{key:"U_",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ma,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}},{key:"Aa",value:function(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}},{key:"da",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.oa=t.oa.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.oa=t.oa.delete(e)})),this.current=e.current)}},{key:"Ta",value:function(){var e=this;if(!this.current)return[];var t=this.aa;this.aa=cn(),this.ca.forEach((function(t){e.Aa(t.key)&&(e.aa=e.aa.add(t.key))}));var n=[];return t.forEach((function(t){e.aa.has(t)||n.push(new Ya(t))})),this.aa.forEach((function(e){t.has(e)||n.push(new Qa(e))})),n}},{key:"Ra",value:function(e){this.oa=e.Ps,this.aa=cn();var t=this.ha(e.documents);return this.applyChanges(t,!0)}},{key:"Va",value:function(){return Ua.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}]),e}(),Xa=function e(n,r,i){"use strict";t(o)(this,e),this.query=n,this.targetId=r,this.view=i},$a=function e(n){"use strict";t(o)(this,e),this.key=n,this.ma=!1},Za=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.fa={},this.ga=new Xt((function(e){return Kt(e)}),Ht),this.pa=new Map,this.ya=new Set,this.wa=new Ee(ne.comparator),this.Sa=new Map,this.ba=new ti,this.Da={},this.Ca=new Map,this.va=Yr.Ln(),this.onlineState="Unknown",this.Fa=void 0}return t(u)(e,[{key:"isPrimaryClient",get:function(){return!0===this.Fa}}]),e}();function eo(e,t){return to.apply(this,arguments)}function to(){return(to=t(i)(t(g).mark((function e(n,r){var i,a,o,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=No(n),!(s=i.ga.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.Va(),e.next=16;break;case 7:return e.next=9,_i(i.localStore,Bt(r));case 9:return u=e.sent,c=i.sharedClientState.addLocalQueryTarget(u.targetId),a=u.targetId,e.next=14,no(i,r,a,"current"===c,u.resumeToken);case 14:o=e.sent,i.isPrimaryClient&&Ji(i.remoteStore,u);case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function no(e,t,n,r,i){return ro.apply(this,arguments)}function ro(){return ro=t(i)(t(g).mark((function e(n,r,a,o,s){var u,c,l,h,f,d;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.Ma=function(e,r,a){return(o=t(i)(t(g).mark((function e(n,r,i,a){var o,s,u;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.ha(i),e.t0=o.es,!e.t0){e.next=6;break}return e.next=5,Ii(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.ha(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),u=r.view.applyChanges(o,n.isPrimaryClient,s),e.abrupt("return",(_o(n,r.targetId,u.Ea),u.snapshot));case 8:case"end":return e.stop()}}),e)}))),function(e,t,n,r){return o.apply(this,arguments)})(n,e,r,a);var o},e.next=3,Ii(n.localStore,r,!0);case 3:return u=e.sent,c=new Ja(r,u.Ps),l=c.ha(u.documents),h=ar.createSynthesizedTargetChangeForCurrentChange(a,o&&"Offline"!==n.onlineState,s),f=c.applyChanges(l,n.isPrimaryClient,h),_o(n,a,f.Ea),d=new Xa(r,a,c),e.abrupt("return",(n.ga.set(r,d),n.pa.has(a)?n.pa.get(a).push(r):n.pa.set(a,[r]),f.snapshot));case 11:case"end":return e.stop()}}),e)}))),ro.apply(this,arguments)}function io(e,t){return ao.apply(this,arguments)}function ao(){return(ao=t(i)(t(g).mark((function e(n,r){var i,a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=P(n),a=i.ga.get(r),!((o=i.pa.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.pa.set(a.targetId,o.filter((function(e){return!Ht(e,r)}))),void i.ga.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,xi(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),Xi(i.remoteStore,a.targetId),wo(i,a.targetId)})).catch(le);case 9:e.next=14;break;case 11:return wo(i,a.targetId),e.next=14,xi(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oo(e,t,n){return so.apply(this,arguments)}function so(){return(so=t(i)(t(g).mark((function e(n,r,i){var a,o,s;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Do(n),e.prev=1,e.next=4,function(e,t){var n,r,i=P(e),a=J.now(),o=t.reduce((function(e,t){return e.add(t.key)}),cn());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=Zt(),u=cn();return i._s.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=Pn(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new Un(f.key,d,it(d.value.mapValue),Cn.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:nn(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.Da[t.currentUser.toKey()])||(l=new Ee(Q)),l=l.insert(u,c),t.Da[t.currentUser.toKey()]=l,e.next=9,Io(a,o.changes);case 9:return e.next=11,da(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Pa(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),e,null,[[1,13]])})))).apply(this,arguments)}function uo(e,t){return co.apply(this,arguments)}function co(){return(co=t(i)(t(g).mark((function e(n,r){var i,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.prev=1,e.next=4,ki(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.Sa.get(t);n&&(R(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.ma=!0:e.modifiedDocuments.size>0?R(n.ma):e.removedDocuments.size>0&&(R(n.ma),n.ma=!1))})),e.next=8,Io(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,le(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function lo(e,t,n){var r=P(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ga.forEach((function(e,n){var r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=P(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.U_(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Ga(n)}(r.eventManager,t),i.length&&r.fa.c_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function ho(e,t,n){return fo.apply(this,arguments)}function fo(){return(fo=t(i)(t(g).mark((function e(n,r,i){var a,o,s,u,c,l;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=P(n)).sharedClientState.updateQueryState(r,"rejected",i),o=a.Sa.get(r),!(s=o&&o.key)){e.next=14;break}return u=(u=new Ee(ne.comparator)).insert(s,at.newNoDocument(s,X.min())),c=cn().add(s),l=new ir(X.min(),new Map,new Ee(Q),u,c),e.next=9,uo(a,l);case 9:a.wa=a.wa.remove(s),a.Sa.delete(r),Eo(a),e.next=16;break;case 14:return e.next=16,xi(a.localStore,r,!1).then((function(){return wo(a,r,i)})).catch(le);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vo(e,t){return po.apply(this,arguments)}function po(){return(po=t(i)(t(g).mark((function e(n,r){var i,a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),a=r.batch.batchId,e.prev=1,e.next=4,gi(i.localStore,r);case 4:return o=e.sent,ko(i,a,null),mo(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,Io(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function yo(e,t,n){return go.apply(this,arguments)}function go(){return(go=t(i)(t(g).mark((function e(n,r,i){var a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(n),e.prev=1,e.next=4,function(e,t){var n=P(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return R(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,ko(a,r,i),mo(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,Io(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function mo(e,t){(e.Ca.get(t)||[]).forEach((function(e){e.resolve()})),e.Ca.delete(t)}function ko(e,t,n){var r=P(e),i=r.Da[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function wo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.pa.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.ga.delete(u),n&&e.fa.xa(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach((function(t){e.ba.containsKey(t)||bo(e,t)}))}function bo(e,t){e.ya.delete(t.path.canonicalString());var n=e.wa.get(t);null!==n&&(Xi(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Eo(e))}function _o(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof Qa?(e.ba.addReference(u.key,t),xo(e,u)):u instanceof Ya?(C("SyncEngine","Document no longer in limbo: "+u.key),e.ba.removeReference(u.key,t),e.ba.containsKey(u.key)||bo(e,u.key)):O()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function xo(e,t){var n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(C("SyncEngine","New document in limbo: "+n),e.ya.add(r),Eo(e))}function Eo(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t=e.ya.values().next().value;e.ya.delete(t);var n=new ne(Z.fromString(t)),r=e.va.next();e.Sa.set(r,new $a(n)),e.wa=e.wa.insert(n,r),Ji(e.remoteStore,new qr(Bt(Lt(n.path)),r,"TargetPurposeLimboResolution",ve.ae))}}function Io(e,t,n){return To.apply(this,arguments)}function To(){return To=t(i)(t(g).mark((function e(n,r,a){var o,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=P(n),s=[],u=[],c=[],e.t0=o.ga.isEmpty(),e.t0){e.next=9;break}return o.ga.forEach((function(e,t){c.push(o.Ma(t,r,a).then((function(e){if((e||a)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=li.$i(t.targetId,e);u.push(n)}})))})),e.next=6,Promise.all(c);case 6:return o.fa.c_(s),e.next=9,function(){var e=t(i)(t(g).mark((function e(n,r){var i,a,o,s,u,c,l,h,f,d,v;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return fe.forEach(r,(function(t){return fe.forEach(t.Qi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return fe.forEach(t.Ki,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),de(e.t0)){e.next=10;break}throw e.t0;case 10:C("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l=c.value,h=l.targetId,l.fromCache||(f=i.rs.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d),i.rs=i.rs.insert(h,v));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(t,n){return e.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return e.stop()}}),e)}))),To.apply(this,arguments)}function So(e,t){return Co.apply(this,arguments)}function Co(){return(Co=t(i)(t(g).mark((function e(n,r){var i,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=P(n)).currentUser.isEqual(r)){e.next=11;break}return C("SyncEngine","User change. New user:",r.toKey()),e.next=5,pi(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,function(e,t){e.Ca.forEach((function(e){e.forEach((function(e){e.reject(new M(L.CANCELLED,t))}))})),e.Ca.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,Io(i,a.cs);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ao(e,t){var n=P(e),r=n.Sa.get(t);if(r&&r.ma)return cn().add(r.key);var i=cn(),a=n.pa.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.ga.get(h);i=i.unionWith(f.view.la)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function No(e){var t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ao.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ho.bind(null,t),t.fa.c_=Ha.bind(null,t.eventManager),t.fa.xa=Ka.bind(null,t.eventManager),t}function Do(e){var t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yo.bind(null,t),t}var Oo=function(){"use strict";function e(){t(o)(this,e),this.synchronizeTabs=!1}return t(u)(e,[{key:"initialize",value:function(e){var n=this;return t(i)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.serializer=Fi(e.databaseInfo.databaseId),n.sharedClientState=n.createSharedClientState(e),n.persistence=n.createPersistence(e),t.next=5,n.persistence.start();case 5:n.localStore=n.createLocalStore(e),n.gcScheduler=n.createGarbageCollectionScheduler(e,n.localStore),n.indexBackfillerScheduler=n.createIndexBackfillerScheduler(e,n.localStore);case 8:case"end":return t.stop()}}),r)})))()}},{key:"createGarbageCollectionScheduler",value:function(e,t){return null}},{key:"createIndexBackfillerScheduler",value:function(e,t){return null}},{key:"createLocalStore",value:function(e){return vi(this.persistence,new fi,e.initialUser,this.serializer)}},{key:"createPersistence",value:function(e){return new si(ci.Jr,this.serializer)}},{key:"createSharedClientState",value:function(e){return new Ci}},{key:"terminate",value:function(){var e=this;return t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.gcScheduler&&e.gcScheduler.stop(),t.next=3,e.sharedClientState.shutdown();case 3:return t.next=5,e.persistence.shutdown();case 5:case"end":return t.stop()}}),n)})))()}}]),e}(),Ro=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"initialize",value:function(e,n){var r=this;return t(i)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r.localStore,t.t0){t.next=12;break}return r.localStore=e.localStore,r.sharedClientState=e.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!e.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return lo(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=So.bind(null,r.syncEngine),t.next=12,Aa(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return t.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Va}},{key:"createDatastore",value:function(e){var t,n=Fi(e.databaseInfo.databaseId),r=(t=e.databaseInfo,new Mi(t));return function(e,t,n,r){return new zi(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,r,n)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return lo(o.syncEngine,e,0)},a=Ni.C()?new Ni:new Ai,new Ki(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Za(n,r,i,a,o,s),u&&(c.Fa=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(e=t(i)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P(n),C("RemoteStore","RemoteStore shutting down."),r.F_.add(5),e.next=5,Qi(r);case 5:r.x_.shutdown(),r.O_.set("Unknown");case 7:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})(this.remoteStore);var e}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Po=function(){"use strict";function e(n){t(o)(this,e),this.observer=n,this.muted=!1}return t(u)(e,[{key:"next",value:function(e){this.observer.next&&this.Ba(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.Ba(this.observer.error,e):A("Uncaught Error in snapshot listener:",e.toString())}},{key:"La",value:function(){this.muted=!0}},{key:"Ba",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),e}(),Lo=function(){"use strict";function e(n,r,a,s){var u=this;t(o)(this,e);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=s,this.user=E.UNAUTHENTICATED,this.clientId=W.V(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(a,(c=t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(a,(function(e){return C("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return t(u)(e,[{key:"getConfiguration",value:function(){var e=this;return t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new U,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(t(i)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=n._onlineComponents,!t.t0){t.next=5;break}return t.next=5,n._onlineComponents.terminate();case 5:if(t.t1=n._offlineComponents,!t.t1){t.next=9;break}return t.next=9,n._offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),e.resolve(),t.next=18;break;case 14:t.prev=14,t.t2=t.catch(0),i=Pa(t.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return t.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t){return Uo.apply(this,arguments)}function Uo(){return Uo=t(i)(t(g).mark((function e(n,r){var a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider"),e.next=3,n.getConfiguration();case 3:return a=e.sent,e.next=6,r.initialize(a);case 6:o=a.initialUser,n.setCredentialChangeListener(function(){var e=t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(n),e.t0){e.next=5;break}return e.next=4,pi(r.localStore,n);case 4:o=n;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n._offlineComponents=r;case 8:case"end":return e.stop()}}),e)}))),Uo.apply(this,arguments)}function Fo(e,t){return Vo.apply(this,arguments)}function Vo(){return(Vo=t(i)(t(g).mark((function e(n,r){var i,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Bo(n);case 3:return i=e.sent,C("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return Sa(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return Sa(r.remoteStore,t)})),n._onlineComponents=r;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jo(e){return"FirebaseError"===e.name?e.code===L.FAILED_PRECONDITION||e.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}function Bo(e){return qo.apply(this,arguments)}function qo(){return(qo=t(i)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._offlineComponents){e.next=21;break}if(!n._uninitializedComponentsProvider){e.next=18;break}return C("FirestoreClient","Using user provided OfflineComponentProvider"),e.prev=3,e.next=6,Mo(n,n._uninitializedComponentsProvider._offline);case 6:e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(3),jo(r=e.t0)){e.next=13;break}throw r;case 13:return N("Error using user provided cache. Falling back to memory cache: "+r),e.next=16,Mo(n,new Oo);case 16:e.next=21;break;case 18:return C("FirestoreClient","Using default OfflineComponentProvider"),e.next=21,Mo(n,new Oo);case 21:return e.abrupt("return",n._offlineComponents);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}function zo(e){return Ho.apply(this,arguments)}function Ho(){return(Ho=t(i)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n._onlineComponents,e.t0){e.next=11;break}if(!n._uninitializedComponentsProvider){e.next=8;break}return C("FirestoreClient","Using user provided OnlineComponentProvider"),e.next=6,Fo(n,n._uninitializedComponentsProvider._online);case 6:e.next=11;break;case 8:return C("FirestoreClient","Using default OnlineComponentProvider"),e.next=11,Fo(n,new Ro);case 11:return e.abrupt("return",(e.t0,n._onlineComponents));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ko(e){return zo(e).then((function(e){return e.syncEngine}))}function Go(e){return Wo.apply(this,arguments)}function Wo(){return(Wo=t(i)(t(g).mark((function e(n){var r,i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zo(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=eo.bind(null,r.syncEngine),i.onUnlisten=io.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qo(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new U;return e.asyncQueue.enqueueAndForget(t(i)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=function(e,t,n,r,i){var a=new Po({next:function(n){t.enqueueAndForget((function(){return qa(e,o)})),n.fromCache&&"server"===r.source?i.reject(new M(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:function(e){return i.reject(e)}}),o=new Wa(n,a,{includeMetadataChanges:!0,Z_:!0});return ja(e,o)},t.next=3,Go(e);case 3:return t.t1=t.sent,t.t2=e.asyncQueue,t.t3=n,t.t4=r,t.t5=a,t.abrupt("return",(0,t.t0)(t.t1,t.t2,t.t3,t.t4,t.t5));case 9:case"end":return t.stop()}}),i)})))),a.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yo(e){var t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Jo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e,t,n){if(!n)throw new M(L.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function $o(e){if(!ne.isDocumentKey(e))throw new M(L.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function Zo(e){if(ne.isDocumentKey(e))throw new M(L.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function es(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":O()}function ts(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new M(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=es(e);throw new M(L.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns=function(){"use strict";function e(n){var r,i;if(t(o)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new M(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new M(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new M(L.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===n.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yo(null!==(i=n.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}return t(u)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}]),e}(),rs=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ns({}),this._settingsFrozen=!1}return t(u)(e,[{key:"app",get:function(){if(!this._app)throw new M(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new M(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ns(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new z(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new M(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Jo.get(e))&&(C("ComponentProvider","Removing Datastore"),Jo.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();function is(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=ts(e,rs))._getSettings(),o="".concat(t,":").concat(n);if("firestore.googleapis.com"!==a.host&&a.host!==o&&N("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},a),{host:o,ssl:!1})),i.mockUserToken){var s,u;if("string"==typeof i.mockUserToken)s=i.mockUserToken,u=E.MOCK_USER;else{s=(0,b.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new M(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new E(c)}e._authCredentials=new j(new F(s,u))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=n}return t(u)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),os=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=n}return t(u)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new ss(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),ss=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this,e,i,Lt(a)))._path=a,s.type="collection",t(f)(s)}return t(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new os(this.firestore,null,new ne(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(as);function us(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,b.getModularInstance)(e),Xo("collection","path",n),e instanceof rs){var o,s=(o=Z).fromString.apply(o,[n].concat(t(v)(i)));return Zo(s),new ss(e,null,s)}var u;if(!(e instanceof os||e instanceof ss))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=Z).fromString.apply(u,[n].concat(t(v)(i))));return Zo(c),new ss(e.firestore,null,c)}function cs(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,b.getModularInstance)(e),1===arguments.length&&(n=W.V()),Xo("doc","path",n),e instanceof rs){var o,s=(o=Z).fromString.apply(o,[n].concat(t(v)(i)));return $o(s),new os(e,null,new ne(s))}var u;if(!(e instanceof os||e instanceof ss))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=Z).fromString.apply(u,[n].concat(t(v)(i))));return $o(c),new os(e.firestore,e instanceof ss?e.converter:null,new ne(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ls=function(){"use strict";function e(){var n=this;t(o)(this,e),this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Vi(this,"async_queue_retry"),this.ou=function(){var e=Ui();e&&C("AsyncQueue","Visibility state changed to "+e.visibilityState),n.Ho.$o()};var r=Ui();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.ou)}return t(u)(e,[{key:"isShuttingDown",get:function(){return this.eu}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this._u(),this.au(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.eu){this.eu=!0,this.iu=e||!1;var t=Ui();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}},{key:"enqueue",value:function(e){var t=this;if(this._u(),this.eu)return new Promise((function(){}));var n=new U;return this.au((function(){return t.eu&&t.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Xa.push(e),t.uu()}))}},{key:"uu",value:function(){var e=this;return t(i)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.Xa.length){t.next=14;break}return t.prev=1,t.next=4,e.Xa[0]();case 4:e.Xa.shift(),e.Ho.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),de(t.t0)){t.next=12;break}throw t.t0;case 12:C("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.Xa.length>0&&e.Ho.Qo((function(){return e.uu()}));case 14:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"au",value:function(e){var t=this,n=this.Za.then((function(){return t.ru=!0,e().catch((function(e){var n,r;throw t.nu=e,t.ru=!1,A("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.ru=!1,e}))}));return this.Za=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this._u(),this.su.indexOf(e)>-1&&(t=0);var i=Ra.createAndSchedule(this,e,t,n,(function(e){return r.cu(e)}));return this.tu.push(i),i}},{key:"_u",value:function(){this.nu&&O()}},{key:"verifyOperationInProgress",value:function(){}},{key:"lu",value:function(){var e=this;return t(i)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Za,t.next=4,r;case 4:if(r!==e.Za){t.next=1;break}case 5:case"end":return t.stop()}}),n)})))()}},{key:"hu",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.tu[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Pu",value:function(e){var t=this;return this.lu().then((function(){t.tu.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.tu[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.lu()}))}},{key:"Iu",value:function(e){this.su.push(e)}},{key:"cu",value:function(e){var t=this.tu.indexOf(e);this.tu.splice(t,1)}}]),e}();var hs=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s){var u;return t(o)(this,r),(u=n.call(this,e,i,a,s)).type="firestore",u._queue=new ls,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",t(f)(u)}return t(u)(r,[{key:"_terminate",value:function(){return this._firestoreClient||vs(this),this._firestoreClient.terminate()}}]),r}(rs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,n){var r="object"==typeof e?e:(0,m.getApp)(),i="string"==typeof e?e:n||"(default)",a=(0,m._getProvider)(r,"firestore").getImmediate({identifier:i});if(!a._initialized){var o=(0,b.getDefaultEmulatorHostnameAndPort)("firestore");o&&is.apply(void 0,[a].concat(t(v)(o)))}return a}function ds(e){return e._firestoreClient||vs(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vs(e){var t,n,r,i,a,o,s,u=e._freezeSettings(),c=(i=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new je(i,a,o,(s=u).host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Yo(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new Lo(e._authCredentials,e._appCheckCredentials,e._queue,c),(null===(n=u.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=u.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:u.localCache.kind,_offline:u.localCache._offlineComponentProvider,_online:u.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ps=function(){"use strict";function e(n){t(o)(this,e),this._byteString=n}return t(u)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Oe.fromBase64String(t))}catch(e){throw new M(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Oe.fromUint8Array(t))}}]),e}(),ys=function(){"use strict";function e(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t(o)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new M(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(r)}return t(u)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gs=function e(n){"use strict";t(o)(this,e),this._methodName=n},ms=function(){"use strict";function e(n,r){if(t(o)(this,e),!isFinite(n)||n<-90||n>90)throw new M(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new M(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return t(u)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}]),e}(),ks=/^__.*__$/,ws=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(u)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Un(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mn(e,this.data,t,this.fieldTransforms)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}var _s=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.settings=n,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=a,void 0===s&&this.du(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return t(u)(e,[{key:"path",get:function(){return this.settings.path}},{key:"Tu",get:function(){return this.settings.Tu}},{key:"Eu",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"Au",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}},{key:"mu",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}},{key:"fu",value:function(e){return this.Eu({path:void 0,Ru:!0})}},{key:"gu",value:function(e){return Rs(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"du",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}},{key:"Vu",value:function(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(bs(this.Tu)&&ks.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}]),e}(),xs=function(){"use strict";function e(n,r,i){t(o)(this,e),this.databaseId=n,this.ignoreUndefinedProperties=r,this.serializer=i||Fi(n)}return t(u)(e,[{key:"wu",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new _s({Tu:e,methodName:t,yu:n,path:te.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}]),e}();function Es(e){var t=e._freezeSettings(),n=Fi(e._databaseId);return new xs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Is(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.wu(a.merge||a.mergeFields?2:0,t,n,i);As("Data must be an object, but it was:",o,r);var s,u,c=Ss(r,o);if(a.merge)s=new Ae(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,g=Ns(t,y,n);if(!o.contains(g))throw new M(L.INVALID_ARGUMENT,"Field '".concat(g,"' is specified in your field mask but missing from your input data."));Ps(l,g)||l.push(g)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new Ae(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new ws(new rt(c),s,u)}function Ts(e,t){if(Cs(e=(0,b.getModularInstance)(e)))return As("Unsupported field value:",t,e),Ss(e,t);if(e instanceof gs)return function(e,t){if(!bs(t.Tu))throw t.gu("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.gu("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=Ts(s.value,t.fu(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,b.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return vn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=J.fromDate(e);return{timestampValue:mr(t.serializer,n)}}if(e instanceof J){var r=new J(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mr(t.serializer,r)}}if(e instanceof ms)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ps)return{bytesValue:kr(t.serializer,e._byteString)};if(e instanceof os){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.gu("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:_r(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu("Unsupported field value: ".concat(es(e)))}(e,t)}function Ss(e,t){var n={};return xe(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(e,(function(e,r){var i=Ts(r,t.Au(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Cs(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof J||e instanceof ms||e instanceof ps||e instanceof os||e instanceof gs)}function As(e,t,n){if(!Cs(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=es(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}var i}function Ns(e,t,n){if((t=(0,b.getModularInstance)(t))instanceof ys)return t._internalPath;if("string"==typeof t)return Os(e,t);throw Rs("Field path arguments must be of type string or ",e,!1,void 0,n)}var Ds=new RegExp("[~\\*/\\[\\]]");function Os(e,n,r){if(n.search(Ds)>=0)throw Rs("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return t(s)(ys,t(v)(n.split(".")))._internalPath}catch(t){throw Rs("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function Rs(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new M(L.INVALID_ARGUMENT,s+e+u)}function Ps(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ls=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return t(u)(e,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new os(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Ms(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Us("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),e}(),Ms=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"data",value:function(){return t(c)(t(l)(r.prototype),"data",this).call(this)}}]),r}(Ls);function Us(e,t){return"string"==typeof t?Os(e,t):t instanceof ys?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new M(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Vs=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ze(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}},{key:"convertObject",value:function(e,t){return this.convertObjectMap(e.fields,t)}},{key:"convertObjectMap",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n=this,r={};return _e(e,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new ms(Le(e.latitude),Le(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Fe(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ve(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Pe(e);return new J(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=Z.fromString(e);R(Br(n));var r=new Be(n.get(1),n.get(3)),i=new ne(n.popFirst(5));return r.isEqual(t)||A("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bs=function(){"use strict";function e(n,r){t(o)(this,e),this.hasPendingWrites=n,this.fromCache=r}return t(u)(e,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),e}(),qs=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,i,a,s,c))._firestore=e,l._firestoreImpl=e,l.metadata=u,t(f)(l)}return t(u)(r,[{key:"exists",value:function(){return t(c)(t(l)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(Us("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(Ls),zs=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(c)(t(l)(r.prototype),"data",this).call(this,e)}}]),r}(qs),Hs=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this._firestore=n,this._userDataWriter=r,this._snapshot=a,this.metadata=new Bs(a.hasPendingWrites,a.fromCache),this.query=i}return t(u)(e,[{key:"docs",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"size",get:function(){return this._snapshot.docs.size}},{key:"empty",get:function(){return 0===this.size}},{key:"forEach",value:function(e,t){var n=this;this._snapshot.docs.forEach((function(r){e.call(t,new zs(n._firestore,n._userDataWriter,r.key,r,new Bs(n._snapshot.mutatedKeys.has(r.key),n._snapshot.fromCache),n.query.converter))}))}},{key:"docChanges",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){var n=0;return e._snapshot.docChanges.map((function(t){var r=new zs(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Bs(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}}))}var r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((function(e){return t||3!==e.type})).map((function(t){var n=new zs(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Bs(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(a=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:Ks(t.type),doc:n,oldIndex:i,newIndex:a}}))}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}]),e}();function Ks(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}var Gs=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).firestore=e,t(f)(i)}return t(u)(r,[{key:"convertBytes",value:function(e){return new ps(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new os(this.firestore,null,t)}}]),r}(Vs);function Ws(e){e=ts(e,as);var t=ts(e.firestore,hs),n=ds(t),r=new Gs(t);return Fs(e._query),Qo(n,e._query).then((function(n){return new Hs(t,r,e,n)}))}function Qs(e,t,n){e=ts(e,os);var r=ts(e.firestore,hs),i=js(e.converter,t,n);return Js(r,[Is(Es(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Cn.none())])}function Ys(e){return Js(ts(e.firestore,hs),[new zn(e._key,Cn.none())])}function Js(e,n){return r=ds(e),a=n,o=new U,r.asyncQueue.enqueueAndForget(t(i)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oo,e.next=3,Ko(r);case 3:return e.t1=e.sent,e.t2=a,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))),o.promise;var r,a,o}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=m.SDK_VERSION,I=t,(0,m._registerComponent)(new(0,k.Component)("firestore",(function(e,t){var r=t.instanceIdentifier,i=t.options,a=e.getProvider("app").getImmediate(),o=new hs(new B(e.getProvider("auth-internal")),new K(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new M(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)(x,"4.1.3",e),(0,m.registerVersion)(x,"4.1.3","esm2017")}()})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("aSES4",(function(r,i){e(r.exports,"createWebChannelTransport",(function(){return Tr})),e(r.exports,"getStatEventTarget",(function(){return Sr})),e(r.exports,"ErrorCode",(function(){return Cr})),e(r.exports,"EventType",(function(){return Ar})),e(r.exports,"Event",(function(){return Nr})),e(r.exports,"Stat",(function(){return Dr})),e(r.exports,"WebChannel",(function(){return Or})),e(r.exports,"XhrIo",(function(){return Rr})),e(r.exports,"Md5",(function(){return Pr})),e(r.exports,"Integer",(function(){return Lr}));var o,s=a("8MBJY"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("1t1Wn"),d=a("l5bVx"),v=a("2MbLg"),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},y={},g=g||{},m=p||self;function k(e){var n=void 0===e?"undefined":t(d)(e);return"array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length}function w(e){var n=void 0===e?"undefined":t(d)(e);return"object"==n&&null!=e||"function"==n}var b="closure_uid_"+(1e9*Math.random()>>>0),_=0;function x(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function I(e,t,n){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x:E).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,b)&&e[b]||(e[b]=++_))},C.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function N(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function D(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(k(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{m.addEventListener("test",(function(){}),t),m.removeEventListener("test",(function(){}),t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}function L(){var e=m.navigator;return e&&(e=e.userAgent)?e:""}function M(e){return-1!=L().indexOf(e)}function U(e){return U[" "](e),e}U[" "]=function(){};var F,V,j,B=M("Opera"),q=M("Trident")||M("MSIE"),z=M("Edge"),H=z||q,K=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),G=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function W(){var e=m.document;return e?e.documentMode:void 0}e:{var Q="",Y=(V=L(),K?/rv:([^\);]+)(\)|;)/.exec(V):z?/Edge\/([\d\.]+)/.exec(V):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(V):G?/WebKit\/(\S+)/.exec(V):B?/(?:Version)[ \/]?(\S+)/.exec(V):void 0);if(Y&&(Q=Y?Y[1]:""),q){var J=W();if(null!=J&&J>parseFloat(Q)){F=String(J);break e}}F=Q}if(m.document&&q){var X=W();j=X||(parseInt(F,10)||void 0)}else j=void 0;var $=j;function Z(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(K){e:{try{U(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}S(Z,O);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ne,this.fa=this.ia=!1}function ie(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ae(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function oe(e){var t={};for(var n in e)t[n]=e[n];return t}var se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<se.length;a++)n=se[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=A(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.fa&&a.listener==t&&a.capture==!!n&&a.la==r)return i}return-1}ce.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new re(t,this.src,a,!!r,i)).ia=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),de={};function ve(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)ve(e,t[a],n,r,i);return null}return n=xe(n),e&&e[te]?e.O(t,n,w(r)?!!r.capture:!!r,i):pe(e,t,n,!1,r,i)}function pe(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=w(i)?!!i.capture:!!i,s=be(e);if(s||(e[fe]=s=new ce(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=we;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)ye(e,t[a],n,r,i);return null}return n=xe(n),e&&e[te]?e.P(t,n,w(r)?!!r.capture:!!r,i):pe(e,t,n,!0,r,i)}function ge(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)ge(e,t[a],n,r,i);else r=w(r)?!!r.capture:!!r,n=xe(n),e&&e[te]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=he(a=e.g[t],n,r,i))&&(ie(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=be(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=be(t))?(le(n,e),0==n.h&&(n.src=null,t[fe]=null)):ie(e)}}}function ke(e){return e in de?de[e]:de[e]="on"+e}function we(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&me(e),e=n.call(r,t)}return e}function be(e){return(e=e[fe])instanceof ce?e:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(e){return"function"==typeof e?e:(e[_e]||(e[_e]=function(t){return e.handleEvent(t)}),e[_e])}function Ee(){C.call(this),this.i=new ce(this),this.S=this,this.J=null}function Ie(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;ue(t=new O(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Te(o,r,!0,t)&&i}if(i=Te(o=t.g=e,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Te(o=t.g=n[a],r,!1,t)&&i}function Te(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.fa&&o.capture==n){var s=o.listener,u=o.la||o.src;o.ia&&le(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}S(Ee,C),Ee.prototype[te]=!0,Ee.prototype.removeEventListener=function(e,t,n,r){ge(this,e,t,n,r)},Ee.prototype.N=function(){if(Ee.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.J=null},Ee.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ee.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=m.JSON.stringify,Ce=function(){"use strict";function e(n,r){t(s)(this,e),this.i=n,this.j=r,this.h=0,this.g=null}return t(u)(e,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),e}();function Ae(){var e=Ue,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ne=function(){"use strict";function e(){t(s)(this,e),this.h=this.g=null}return t(u)(e,[{key:"add",value:function(e,t){var n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),De=new Ce((function(){return new Oe}),(function(e){return e.reset()})),Oe=function(){"use strict";function e(){t(s)(this,e),this.next=this.g=this.h=null}return t(u)(e,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function Re(e){var t=1;e=e.split(":");for(var n=[];0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Pe(e){m.setTimeout((function(){throw e}),0)}var Le,Me=!1,Ue=new Ne,Fe=function(){var e=m.Promise.resolve(void 0);Le=function(){e.then(Ve)}},Ve=function(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(e){Pe(e)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1};function je(e,t){Ee.call(this),this.h=e||1,this.g=t||m,this.j=I(this.qb,this),this.l=Date.now()}function Be(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function qe(e,t,n){if("function"==typeof e)n&&(e=I(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=I(e.handleEvent,e)}return 2147483647<Number(t)?-1:m.setTimeout(e,t||0)}function ze(e){e.g=qe((function(){e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}S(je,Ee),(o=je.prototype).ga=!1,o.T=null,o.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ie(this,"tick"),this.ga&&(Be(this),this.start()))}},o.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.N=function(){je.$.N.call(this),Be(this),delete this.g};var He=function(e){"use strict";t(h)(r,e);var n=t(v)(r);function r(e,i){var a;return t(s)(this,r),(a=n.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return t(u)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:ze(this)}},{key:"N",value:function(){t(c)(t(l)(r.prototype),"N",this).call(this),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(C);function Ke(e){C.call(this),this.h=e,this.g={}}S(Ke,C);var Ge=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ge[0]=n.toString()),n=Ge);for(var i=0;i<n.length;i++){var a=ve(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Qe(e){ae(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ke.prototype.N=function(){Ke.$.N.call(this),Qe(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Ea=function(){this.g=!1},Ye.prototype.info=function(){};var Xe={},$e=null;function Ze(){return $e=$e||new Ee}function et(e){O.call(this,Xe.Ta,e)}function tt(e){var t=Ze();Ie(t,new et(t))}function nt(e,t){O.call(this,Xe.STAT_EVENT,e),this.stat=t}function rt(e){var t=Ze();Ie(t,new nt(t,e))}function it(e,t){O.call(this,Xe.Ua,e),this.size=t}function at(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return m.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",S(et,O),Xe.STAT_EVENT="statevent",S(nt,O),Xe.Ua="timingevent",S(it,O);var ot={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},st={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function ct(e){return e.h||(e.h=e.i())}function lt(){}ut.prototype.h=null;var ht,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dt(){O.call(this,"d")}function vt(){O.call(this,"c")}function pt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ke(this),this.P=mt,e=H?125:void 0,this.V=new je(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}S(dt,O),S(vt,O),S(pt,ut),pt.prototype.g=function(){return new XMLHttpRequest},pt.prototype.i=function(){return{}},ht=new pt;var mt=45e3,kt={},wt={};function bt(e,t,n){e.L=1,e.v=jt(Lt(t)),e.s=n,e.S=!0,_t(e,null)}function _t(e,t){e.G=Date.now(),Tt(e),e.A=Lt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Zt(n.i,"t",r),e.C=0,n=e.l.J,e.h=new gt,e.g=er(e.l,n?t:null,!e.s),0<e.O&&(e.M=new He(I(e.Pa,e,e.g),e.O)),We(e.U,e.g,"readystatechange",e.nb),t=e.I?oe(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),tt(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Et(e,t,n){for(var r,i=!0;!e.J&&e.C<n.length;){if((r=It(e,n))==wt){4==t&&(e.o=4,rt(14),i=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(r==kt){e.o=4,rt(15),Je(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Je(e.j,e.m,r,null),Dt(e,r)}xt(e)&&r!=wt&&r!=kt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,rt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gn(t),t.M=!0,rt(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),At(e))}function It(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?wt:(n=Number(t.substring(n,r)),isNaN(n)?kt:(r+=1)+n>t.length?wt:(t=t.slice(r,r+n),e.C=r+n,t))}function Tt(e){e.Y=Date.now()+e.P,St(e,e.P)}function St(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(I(e.lb,e),t)}function Ct(e){e.B&&(m.clearTimeout(e.B),e.B=null)}function At(e){0==e.l.H||e.J||Yn(e.l,e)}function Nt(e){Ct(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Be(e.V),Qe(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Dt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||sn(n.i,e)))if(!e.K&&sn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Qn(n),Fn(n)}Kn(n),rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(I(n.ib,n),6e3));if(1>=on(n.i)&&n.oa){try{n.oa()}catch(a){}n.oa=void 0}}else Xn(n,11)}else if((e.K||n.g==e)&&Qn(n),!P(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.V=a[0],a=a[1],2==n.H)if("c"==a[0]){n.K=a[1],n.pa=a[2];var o=a[3];null!=o&&(n.ra=o,n.l.info("VER="+n.ra));var s=a[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(un(h,h.h),h.h=null))}if(r.F){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.Da=f,Vt(r.I,r.F,f))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var d=e;if((r=n).wa=Zn(r,r.J?r.pa:null,r.Y),d.K){cn(r.i,d);var v=d,p=r.L;p&&v.setTimeout(p),v.B&&(Ct(v),Tt(v)),r.g=d}else Hn(r);0<n.j.length&&jn(n)}else"stop"!=a[0]&&"close"!=a[0]||Xn(n,7);else 3==n.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Xn(n,7):Un(n):"noop"!=a[0]&&n.h&&n.h.Aa(a),n.A=0)}tt()}catch(a){}}function Ot(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(k(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(k(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(k(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(o=yt.prototype).setTimeout=function(e){this.P=e},o.nb=function(e){e=e.target;var t=this.M;t&&3==Dn(e)?t.l():this.Pa(e)},o.Pa=function(e){try{if(e==this.g)e:{var t=Dn(this.g),n=this.g.Ia();this.g.da();if(!(3>t)&&(3!=t||H||this.g&&(this.h.h||this.g.ja()||On(this.g)))){this.J||4!=t||7==n||tt(),Ct(this);var r=this.g.da();this.ca=r;t:if(xt(this)){var i=On(this.g);e="";var a=i.length,o=4==Dn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Nt(this),At(this);var s="";break t}this.h.i=new m.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.W,t,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,rt(12),Nt(this),At(this);break e}Je(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dt(this,r)}this.S?(Et(this,t,s),H&&this.i&&3==t&&(We(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,s,null),Dt(this,s)),4==t&&Nt(this),this.i&&!this.J&&(4==t?Yn(this.l,this):(this.i=!1,Tt(this)))}else(function(e){var t={};e=(e.g&&2<=Dn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(var n=0;n<e.length;n++)if(!P(e[n])){var r=Re(e[n]),i=r[0];if("string"==typeof(r=r[1])){r=r.trim();var a=t[i]||[];t[i]=a,a.push(r)}}!function(e,t){for(var n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==r&&0<s.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Nt(this),At(this)}}}catch(t){}},o.mb=function(){if(this.g){var e=Dn(this.g),t=this.g.ja();this.C<t.length&&(Ct(this),Et(this,e,t),this.i&&4!=e&&Tt(this))}},o.cancel=function(){this.J=!0,Nt(this)},o.lb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(tt(),rt(17)),Nt(this),this.o=2,At(this)):St(this,this.Y-e)};var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Pt){this.h=e.h,Mt(this,e.j),this.s=e.s,this.g=e.g,Ut(this,e.m),this.l=e.l;var t=e.i,n=new Yt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ft(this,n),this.o=e.o}else e&&(t=String(e).match(Rt))?(this.h=!1,Mt(this,t[1]||"",!0),this.s=Bt(t[2]||""),this.g=Bt(t[3]||"",!0),Ut(this,t[4]),this.l=Bt(t[5]||"",!0),Ft(this,t[6]||"",!0),this.o=Bt(t[7]||"")):(this.h=!1,this.i=new Yt(null,this.h))}function Lt(e){return new Pt(e)}function Mt(e,t,n){e.j=n?Bt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ft(e,t,n){t instanceof Yt?(e.i=t,function(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Xt(this,t),Zt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=qt(t,Wt)),e.i=new Yt(t,e.h))}function Vt(e,t,n){e.i.set(t,n)}function jt(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,zt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Pt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(qt(t,Ht,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(qt(t,Ht,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(qt(n,"/"==n.charAt(0)?Gt:Kt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",qt(n,Qt)),e.join("")};var Ht=/[#\/\?@]/g,Kt=/[#\?:]/g,Gt=/[#\?]/g,Wt=/[#\?@]/g,Qt=/#/g;function Yt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Xt(e,t){Jt(e),t=en(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $t(e,t){return Jt(e),t=en(e,t),e.g.has(t)}function Zt(e,t,n){Xt(e,t),0<n.length&&(e.i=null,e.g.set(en(e,t),N(n)),e.h+=n.length)}function en(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=Yt.prototype).add=function(e,t){Jt(this),this.i=null,e=en(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Jt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},o.ta=function(){Jt(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},o.Z=function(e){Jt(this);var t=[];if("string"==typeof e)$t(this,e)&&(t=t.concat(this.g.get(en(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},o.set=function(e,t){return Jt(this),this.i=null,$t(this,e=en(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var tn=function e(n,r){"use strict";t(s)(this,e),this.g=n,this.map=r};function nn(e){this.l=e||rn,m.PerformanceNavigationTiming?e=0<(e=m.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(m.g&&m.g.Ka&&m.g.Ka()&&m.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rn=10;function an(e){return!!e.h||!!e.g&&e.g.size>=e.j}function on(e){return e.h?1:e.g?e.g.size:0}function sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function un(e,t){e.g?e.g.add(t):e.h=t}function cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ln(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.F)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return N(e.i)}nn.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}};var hn=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"stringify",value:function(e){return m.JSON.stringify(e,void 0)}},{key:"parse",value:function(e){return m.JSON.parse(e,void 0)}}]),e}();function fn(){this.g=new hn}function dn(e,t,n){var r=n||"";try{Ot(e,(function(e,n){var i=e;w(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function vn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function pn(e){this.l=e.fc||null,this.j=e.ob||!1}function yn(e,t){Ee.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=gn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}S(pn,ut),pn.prototype.g=function(){return new yn(this.l,this.j)},pn.prototype.i=function(e){return function(){return e}}({}),S(yn,Ee);var gn=0;function mn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=yn.prototype).open=function(e,t){if(this.readyState!=gn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||m).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=gn},o.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==m.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},o.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kn(this):wn(this),3==this.readyState&&mn(this)}},o.Za=function(e){this.g&&(this.response=this.responseText=e,kn(this))},o.Ya=function(e){this.g&&(this.response=e,kn(this))},o.ka=function(){this.g&&kn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var bn=m.JSON.parse;function _n(e){Ee.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xn,this.L=this.M=!1}S(_n,Ee);var xn="",En=/^https?$/i,In=["POST","PUT"];function Tn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sn(e),An(e)}function Sn(e){e.F||(e.F=!0,Ie(e,"complete"),Ie(e,"error"))}function Cn(e){if(e.h&&void 0!==g&&(!e.C[1]||4!=Dn(e)||2!=e.da()))if(e.v&&4==Dn(e))qe(e.La,0,e);else if(Ie(e,"readystatechange"),4==Dn(e)){e.h=!1;try{var t,n=e.da();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.I).match(Rt)[1]||null;!a&&m.self&&m.self.location&&(a=m.self.location.protocol.slice(0,-1)),i=!En.test(a?a.toLowerCase():"")}t=i}if(t)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<Dn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",Sn(e)}}finally{An(e)}}}function An(e,t){if(e.g){Nn(e);var n=e.g,r=e.C[0]?function(){}:null;e.g=null,e.C=null,t||Ie(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Nn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(m.clearTimeout(e.A),e.A=null)}function Dn(e){return e.g?e.g.readyState:0}function On(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case xn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Rn(e){var t="";return ae(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Pn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function Ln(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Mn(e){this.Ga=0,this.j=[],this.l=new Ye,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ln("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ln("baseRetryDelayMs",5e3,e),this.hb=Ln("retryDelaySeedMs",1e4,e),this.eb=Ln("forwardChannelMaxRetries",2,e),this.xa=Ln("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new nn(e&&e.concurrentRequestLimit),this.Ja=new fn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Un(e){if(Vn(e),3==e.H){var t=e.W++,n=Lt(e.I);if(Vt(n,"SID",e.K),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),qn(e,n),(t=new yt(e,e.l,t)).L=2,t.v=jt(Lt(n)),n=!1,m.navigator&&m.navigator.sendBeacon)try{n=m.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&m.Image&&((new Image).src=t.v,n=!0),n||(t.g=er(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Tt(t)}$n(e)}function Fn(e){e.g&&(Gn(e),e.g.cancel(),e.g=null)}function Vn(e){Fn(e),e.u&&(m.clearTimeout(e.u),e.u=null),Qn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&m.clearTimeout(e.m),e.m=null)}function jn(e){if(!an(e.i)&&!e.m){e.m=!0;var t=e.Na;Le||Fe(),Me||(Le(),Me=!0),Ue.add(t,e),e.C=0}}function Bn(e,t){var n;n=t?t.m:e.W++;var r=Lt(e.I);Vt(r,"SID",e.K),Vt(r,"RID",n),Vt(r,"AID",e.V),qn(e,r),e.o&&e.s&&Pn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),un(e.i,n),bt(n,r,t)}function qn(e,t){e.na&&ae(e.na,(function(e,n){Vt(t,n,e)})),e.h&&Ot({},(function(e,n){Vt(t,n,e)}))}function zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?I(e.h.Va,e.h,e):null;e:for(var i=e.j,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].g,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].g,l=i[u].map;if(0>(c-=a))a=Math.max(0,i[u].g-100),s=!1;else try{dn(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.j.splice(0,n),t.F=e,r}function Hn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Le||Fe(),Me||(Le(),Me=!0),Ue.add(t,e),e.A=0}}function Kn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(I(e.Ma,e),Jn(e,e.A)),e.A++,!0)}function Gn(e){null!=e.B&&(m.clearTimeout(e.B),e.B=null)}function Wn(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Lt(e.wa);Vt(t,"RID","rpc"),Vt(t,"SID",e.K),Vt(t,"AID",e.V),Vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Vt(t,"TO",e.qa),Vt(t,"TYPE","xmlhttp"),qn(e,t),e.o&&e.s&&Pn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=jt(Lt(t)),n.s=null,n.S=!0,_t(n,e)}function Qn(e){null!=e.v&&(m.clearTimeout(e.v),e.v=null)}function Yn(e,t){var n=null;if(e.g==t){Qn(e),Gn(e),e.g=null;var r=2}else{if(!sn(e.i,t))return;n=t.F,cn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;Ie(r=Ze(),new it(r,n)),jn(e)}else Hn(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(on(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=at(I(e.Na,e,t),Jn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Kn(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Xn(e,5);break;case 4:Xn(e,10);break;case 3:Xn(e,6);break;default:Xn(e,2)}}function Jn(e,t){var n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Xn(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=I(e.pb,e);n||(n=new Pt("//www.google.com/images/cleardot.gif"),m.location&&"http"==m.location.protocol||Mt(n,"https"),jt(n)),function(e,t){var n=new Ye;if(m.Image){var r=new Image;r.onload=T(vn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(vn,n,r,"TestLoadImage: error",!1,t),r.onabort=T(vn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(vn,n,r,"TestLoadImage: timeout",!1,t),m.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),$n(e),Vn(e)}function $n(e){if(e.H=0,e.ma=[],e.h){var t=ln(e.i);0==t.length&&0==e.j.length||(D(e.ma,t),D(e.ma,e.j),e.i.i.length=0,N(e.j),e.j.length=0),e.h.ya()}}function Zn(e,t,n){var r=n instanceof Pt?Lt(n):new Pt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Ut(r,r.m);else{var i=m.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Pt(null);r&&Mt(a,r),t&&(a.g=t),i&&Ut(a,i),n&&(a.l=n),r=a}return n=e.F,t=e.Da,n&&t&&Vt(r,n,t),Vt(r,"VER",e.ra),qn(e,r),r}function er(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new _n(new pn({ob:!0})):new _n(e.va)).Oa(e.J),t}function tr(){}function nr(){if(q&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function rr(e,t){Ee.call(this),this.g=new Mn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new or(this)}function ir(e){dt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ar(){vt.call(this),this.status=1}function or(e){this.g=e}function sr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ur(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var a=e.g[3],o=t+(a^n&(i^a))+r[0]+3614090360&4294967295;o=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=n+(o<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^a&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^a)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~a))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((a=(t=n+((o=t+(i^(n|~a))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=a+((o=i+(t^(a|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}function cr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}(o=_n.prototype).Oa=function(e){this.M=e},o.ha=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);n=n?n.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ht.g(),this.C=this.u?ct(this.u):ct(ht),this.g.onreadystatechange=I(this.La,this);try{this.G=!0,this.g.open(n,String(e),!0),this.G=!1}catch(e){return void Tn(this,e)}if(e=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=m.FormData&&e instanceof m.FormData,!(0<=A(In,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,v=!1,p=void 0;try{for(var y,g=r[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var k=t(f)(y.value,2),w=k[0],b=k[1];this.g.setRequestHeader(w,b)}}catch(e){v=!0,p=e}finally{try{d||null==g.return||g.return()}finally{if(v)throw p}}this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nn(this),0<this.B&&((this.L=function(e){return q&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.ua,this)):this.A=qe(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Tn(this,e)}},o.ua=function(){void 0!==g&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),An(this))},o.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),_n.$.N.call(this)},o.La=function(){this.s||(this.G||this.v||this.l?Cn(this):this.kb())},o.kb=function(){Cn(this)},o.isActive=function(){return!!this.g},o.da=function(){try{return 2<Dn(this)?this.g.status:-1}catch(e){return-1}},o.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),bn(t)}},o.Ia=function(){return this.m},o.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Mn.prototype).ra=8,o.H=1,o.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;var t=new yt(this,this.l,e),n=this.s;if(this.U&&(n?ue(n=oe(n),this.U):n=this.U),null!==this.o||this.O||(t.I=n,n=null),this.P)e:{for(var r=0,i=0;i<this.j.length;i++){var a=this.j[i];if(void 0===(a="__data__"in a.map&&"string"==typeof(a=a.map.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.j.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=zn(this,t,r),Vt(i=Lt(this.I),"RID",e),Vt(i,"CVER",22),this.F&&Vt(i,"X-HTTP-Session-Id",this.F),qn(this,i),n&&(this.O?r="headers="+encodeURIComponent(String(Rn(n)))+"&"+r:this.o&&Pn(i,this.o,n)),un(this.i,t),this.bb&&Vt(i,"TYPE","init"),this.P?(Vt(i,"$req",r),Vt(i,"SID","null"),t.aa=!0,bt(t,i,null)):bt(t,i,r),this.H=2}}else 3==this.H&&(e?Bn(this,e):0==this.j.length||an(this.i)||Bn(this))},o.Ma=function(){if(this.u=null,Wn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(I(this.jb,this),e)}},o.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Fn(this),Wn(this))},o.ib=function(){null!=this.v&&(this.v=null,Fn(this),Kn(this),rt(19))},o.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))},o.isActive=function(){return!!this.h&&this.h.isActive(this)},(o=tr.prototype).Ba=function(){},o.Aa=function(){},o.za=function(){},o.ya=function(){},o.isActive=function(){return!0},o.Va=function(){},nr.prototype.g=function(e,t){return new rr(e,t)},S(rr,Ee),rr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Zn(e,null,e.Y),jn(e)},rr.prototype.close=function(){Un(this.g)},rr.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Se(e),e=n);t.j.push(new tn(t.fb++,e)),3==t.H&&jn(t)},rr.prototype.N=function(){this.g.h=null,delete this.j,Un(this.g),delete this.g,rr.$.N.call(this)},S(ir,dt),S(ar,vt),S(or,tr),or.prototype.Ba=function(){Ie(this.g,"a")},or.prototype.Aa=function(e){Ie(this.g,new ir(e))},or.prototype.za=function(e){Ie(this.g,new ar)},or.prototype.ya=function(){Ie(this.g,"b")},S(sr,(function(){this.blockSize=-1})),sr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},sr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,a=0;a<t;){if(0==i)for(;a<=n;)ur(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(r[i++]=e.charCodeAt(a++),i==this.blockSize){ur(this,r),i=0;break}}else for(;a<t;)if(r[i++]=e[a++],i==this.blockSize){ur(this,r),i=0;break}}this.h=i,this.i+=t},sr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var lr={};function hr(e){return-128<=e&&128>e?function(e,t){var n=lr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new cr([0|e],0>e?-1:0)})):new cr([0|e],0>e?-1:0)}function fr(e){if(isNaN(e)||!isFinite(e))return vr;if(0>e)return kr(fr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=dr;return new cr(t,0)}var dr=4294967296,vr=hr(0),pr=hr(1),yr=hr(16777216);function gr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function mr(e){return-1==e.h}function kr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new cr(n,~e.h).add(pr)}function wr(e,t){return e.add(kr(t))}function br(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _r(e,t){this.g=e,this.h=t}function xr(e,t){if(gr(t))throw Error("division by zero");if(gr(e))return new _r(vr,vr);if(mr(e))return t=xr(kr(e),t),new _r(kr(t.g),kr(t.h));if(mr(t))return t=xr(e,kr(t)),new _r(kr(t.g),t.h);if(30<e.g.length){if(mr(e)||mr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=pr,r=t;0>=r.X(e);)n=Er(n),r=Er(r);var i=Ir(n,1),a=Ir(r,1);for(r=Ir(r,2),n=Ir(n,2);!gr(r);){var o=a.add(r);0>=o.X(e)&&(i=i.add(n),a=o),r=Ir(r,1),n=Ir(n,1)}return t=wr(e,i.R(t)),new _r(i,t)}for(i=vr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(a=fr(n)).R(t);mr(o)||0<o.X(e);)o=(a=fr(n-=r)).R(t);gr(a)&&(a=pr),i=i.add(a),e=wr(e,o)}return new _r(i,e)}function Er(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new cr(n,e.h)}function Ir(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],a=0;a<r;a++)i[a]=0<t?e.D(a+n)>>>t|e.D(a+n+1)<<32-t:e.D(a+n);return new cr(i,e.h)}(o=cr.prototype).ea=function(){if(mr(this))return-kr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:dr+r)*t,t*=dr}return e},o.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(gr(this))return"0";if(mr(this))return"-"+kr(this).toString(e);for(var t=fr(Math.pow(e,6)),n=this,r="";;){var i=xr(n,t).g,a=((0<(n=wr(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(gr(n=i))return a+r;for(;6>a.length;)a="0"+a;r=a+r}},o.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},o.X=function(e){return mr(e=wr(this,e))?-1:gr(e)?0:1},o.abs=function(){return mr(this)?kr(this):this},o.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var a=r+(65535&this.D(i))+(65535&e.D(i)),o=(a>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,a&=65535,o&=65535,n[i]=o<<16|a}return new cr(n,-2147483648&n[n.length-1]?-1:0)},o.R=function(e){if(gr(this)||gr(e))return vr;if(mr(this))return mr(e)?kr(this).R(kr(e)):kr(kr(this).R(e));if(mr(e))return kr(this.R(kr(e)));if(0>this.X(yr)&&0>e.X(yr))return fr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var a=this.D(r)>>>16,o=65535&this.D(r),s=e.D(i)>>>16,u=65535&e.D(i);n[2*r+2*i]+=o*u,br(n,2*r+2*i),n[2*r+2*i+1]+=a*u,br(n,2*r+2*i+1),n[2*r+2*i+1]+=o*s,br(n,2*r+2*i+1),n[2*r+2*i+2]+=a*s,br(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new cr(n,0)},o.gb=function(e){return xr(this,e).h},o.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new cr(n,this.h&e.h)},o.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new cr(n,this.h|e.h)},o.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new cr(n,this.h^e.h)},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ot.NO_ERROR=0,ot.TIMEOUT=8,ot.HTTP_ERROR=6,st.COMPLETE="complete",lt.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",Ee.prototype.listen=Ee.prototype.O,_n.prototype.listenOnce=_n.prototype.P,_n.prototype.getLastError=_n.prototype.Sa,_n.prototype.getLastErrorCode=_n.prototype.Ia,_n.prototype.getStatus=_n.prototype.da,_n.prototype.getResponseJson=_n.prototype.Wa,_n.prototype.getResponseText=_n.prototype.ja,_n.prototype.send=_n.prototype.ha,_n.prototype.setWithCredentials=_n.prototype.Oa,sr.prototype.digest=sr.prototype.l,sr.prototype.reset=sr.prototype.reset,sr.prototype.update=sr.prototype.j,cr.prototype.add=cr.prototype.add,cr.prototype.multiply=cr.prototype.R,cr.prototype.modulo=cr.prototype.gb,cr.prototype.compare=cr.prototype.X,cr.prototype.toNumber=cr.prototype.ea,cr.prototype.toString=cr.prototype.toString,cr.prototype.getBits=cr.prototype.D,cr.fromNumber=fr,cr.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return kr(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=fr(Math.pow(n,8)),i=vr,a=0;a<t.length;a+=8){var o=Math.min(8,t.length-a),s=parseInt(t.substring(a,a+o),n);8>o?(o=fr(Math.pow(n,o)),i=i.R(o).add(fr(s))):i=(i=i.R(r)).add(fr(s))}return i};var Tr=y.createWebChannelTransport=function(){return new nr},Sr=y.getStatEventTarget=function(){return Ze()},Cr=y.ErrorCode=ot,Ar=y.EventType=st,Nr=y.Event=Xe,Dr=y.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Or=(y.FetchXmlHttpFactory=pn,y.WebChannel=lt),Rr=y.XhrIo=_n,Pr=y.Md5=sr,Lr=y.Integer=cr})),a.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return a("gUfF6").o})),e(t.exports,"onAuthStateChanged",(function(){return a("gUfF6").y})),e(t.exports,"signOut",(function(){return a("gUfF6").C})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("gUfF6").a9})),e(t.exports,"updateProfile",(function(){return a("gUfF6").aj})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("gUfF6").aa})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return a("gUfF6").a9})),e(t.exports,"getAuth",(function(){return a("gUfF6").o})),e(t.exports,"onAuthStateChanged",(function(){return a("gUfF6").y})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("gUfF6").aa})),e(t.exports,"signOut",(function(){return a("gUfF6").C})),e(t.exports,"updateProfile",(function(){return a("gUfF6").aj})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("gUfF6")})),a.register("gUfF6",(function(n,r){e(n.exports,"a9",(function(){return en})),e(n.exports,"aa",(function(){return nn})),e(n.exports,"aj",(function(){return on})),e(n.exports,"y",(function(){return ln})),e(n.exports,"C",(function(){return hn})),e(n.exports,"o",(function(){return ri}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),h=a("fVNic"),f=a("eYQtU"),d=a("1t1Wn"),v=a("8nrFW"),p=a("2MbLg"),y=a("2TvXO"),g=a("2xDiJ"),m=a("MjY8E"),k=a("kZfxc"),w=a("4tSb9"),b=a("6ExWU");function _(e){return void 0!==e&&void 0!==e.enterprise}var x=function e(n){"use strict";if(t(s)(this,e),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=E,T=new(0,g.ErrorFactory)("auth","Firebase",E()),S=new(0,k.Logger)("@firebase/auth");function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;S.logLevel<=k.LogLevel.WARN&&(a=S).warn.apply(a,["Auth (".concat(m.SDK_VERSION,"): ").concat(e)].concat(t(v)(r)))}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;S.logLevel<=k.LogLevel.ERROR&&(a=S).error.apply(a,["Auth (".concat(m.SDK_VERSION,"): ").concat(e)].concat(t(v)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw R.apply(void 0,[e].concat(t(v)(r)))}function D(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return R.apply(void 0,[e].concat(t(v)(r)))}function O(e,n,r){var i=Object.assign(Object.assign({},I()),t(c)({},n,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function R(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(v)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(v)(u)))}return(a=T).create.apply(a,[e].concat(t(v)(r)))}function P(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw R.apply(void 0,[n].concat(t(v)(i)))}function L(e){var t="INTERNAL ASSERTION FAILED: "+e;throw A(t),new Error(t)}function M(e,t){e||L(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function F(){return"http:"===V()||"https:"===V()}function V(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,M(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(F()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){M(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,z=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),H=(q={},t(c)(q,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(q,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(q,"INVALID_IDENTIFIER","invalid-email"),t(c)(q,"MISSING_CONTINUE_URI","internal-error"),t(c)(q,"INVALID_PASSWORD","wrong-password"),t(c)(q,"MISSING_PASSWORD","missing-password"),t(c)(q,"EMAIL_EXISTS","email-already-in-use"),t(c)(q,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(q,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(q,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(q,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(q,"MISSING_REQ_TYPE","internal-error"),t(c)(q,"EMAIL_NOT_FOUND","user-not-found"),t(c)(q,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(q,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(q,"INVALID_OOB_CODE","invalid-action-code"),t(c)(q,"MISSING_OOB_CODE","internal-error"),t(c)(q,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(q,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(q,"TOKEN_EXPIRED","user-token-expired"),t(c)(q,"USER_NOT_FOUND","user-token-expired"),t(c)(q,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(q,"PASSWORD_DOES_NOT_MEET_REQUIREMENTS","password-does-not-meet-requirements"),t(c)(q,"INVALID_CODE","invalid-verification-code"),t(c)(q,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(q,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(q,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(q,"SESSION_EXPIRED","code-expired"),t(c)(q,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(q,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(q,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(q,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(q,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(q,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(q,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(q,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(q,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(q,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(q,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),t(c)(q,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),t(c)(q,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),t(c)(q,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),t(c)(q,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),t(c)(q,"MISSING_CLIENT_TYPE","missing-client-type"),t(c)(q,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),t(c)(q,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),t(c)(q,"INVALID_REQ_TYPE","invalid-req-type"),q),K=new j(3e4,6e4);function G(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function W(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=t(o)(t(y).mark((function e(n,r,i,a){var s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Y(n,s,t(o)(t(y).mark((function e(){var o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",z.fetch()(Z(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function Y(e,t,n){return J.apply(this,arguments)}function J(){return(J=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,f,v;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},H),r),e.prev=2,o=new ee(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw te(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(d)(c.split(" : "),2),h=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw te(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw te(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw te(n,"user-disabled",u);case 29:if(v=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw O(n,v,f);case 34:N(n,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:N(n,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function X(e,t,n,r){return $.apply(this,arguments)}function $(){return $=t(o)(t(y).mark((function e(n,r,i,a){var o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,W(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&N(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function Z(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?B(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(D(n.auth,"network-request-failed"))}),K.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function te(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=D(e,t,r);return i.customData._tokenResponse=n,i}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"GET","/v2/recaptchaConfig",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return ae.apply(this,arguments)}function ae(){return(ae=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return ce=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,P((o=he(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ue(le(o.auth_time)),issuedAtTime:ue(le(o.iat)),expirationTime:ue(le(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function le(e){return 1e3*Number(e)}function he(e){var n=t(d)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return A("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,g.base64Decode)(i);return o?JSON.parse(o):(A("Failed to decode base64 JWT payload"),null)}catch(e){return A("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function fe(e,t){return de.apply(this,arguments)}function de(){return de=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&ve(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),de.apply(this,arguments)}function ve(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),ye=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ue(this.lastLoginAt),this.creationTime=ue(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c,l,h,f,d;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,fe(n,oe(i,{idToken:a}));case 7:P(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?be(s.providerUserInfo):[],c=we(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ye(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){return(ke=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(n),e.next=3,ge(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(v)(r).concat(t(v)(n))}function be(e){return e.map((function(e){var t=e.providerId,n=(0,w.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function _e(e,t){return xe.apply(this,arguments)}function xe(){return(xe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(n,{},t(o)(t(y).mark((function e(){var i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Z(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",z.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){P(e.idToken,"internal-error"),P(void 0!==e.idToken,"internal-error"),P(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,P(n=he(t),"internal-error"),P(void 0!==n.exp,"internal-error"),P(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(P(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a,o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return L("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(P("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(P("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(P("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){P("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Te=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,w.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(v)(o.providerData):[],this.metadata=new ye(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(P(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ce.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ke.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,ge(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,fe(e,ie(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,m=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,_=n.providerData,x=n.stsTokenManager;P(k&&x,t,"internal-error");var E=Ee.fromJSON(this.name,x);P("string"==typeof k,t,"internal-error"),Ie(h,t.name),Ie(f,t.name),P("boolean"==typeof w,t,"internal-error"),P("boolean"==typeof b,t,"internal-error"),Ie(d,t.name),Ie(v,t.name),Ie(p,t.name),Ie(y,t.name),Ie(g,t.name),Ie(m,t.name);var I=new e({uid:k,auth:t,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:m});return _&&Array.isArray(_)&&(I.providerData=_.map((function(e){return Object.assign({},e)}))),y&&(I._redirectEventId=y),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(y).mark((function a(){var o,s;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new Ee).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,ge(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Se=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){M(e instanceof Function,"Expected a class definition");var t=Se.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Se.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();Ae.type="NONE";var Ne=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Oe=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=De(this.userKey,o.apiKey,u),this.fullPersistenceKey=De("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Te._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(y).mark((function a(){var s,u,c,l,h,f,d,v,p,g,m,k,w;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(Ce(Ne),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||Ce(Ne),c=De(i,n.config.apiKey,n.name),l=null,h=!0,f=!1,d=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(h=(p=v.next()).done){a.next=29;break}return g=p.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(m=a.sent)){a.next=22;break}return k=Te._fromJSON(n,m),g!==u&&(l=k),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=w[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ue(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ve(t))return"Blackberry";if(je(t))return"Webos";if(Le(t))return"Safari";if((t.includes("chrome/")||Me(t))&&!t.includes("edge/"))return"Chrome";if(Fe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Be(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ze(){return(0,g.isIE)()&&10===document.documentMode}function He(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Be(e)||Fe(e)||je(e)||Ve(e)||/windows phone/i.test(e)||Ue(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Re((0,g.getUA)());break;case"Worker":t="".concat(Re((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(m.SDK_VERSION,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l,h,f,d,v,p,g;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),h=!0,f=!1,d=void 0,t.prev=35,v=i[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){g=p.value;try{g()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),f=!0,d=t.t2;case 43:t.prev=43,t.prev=44,h||null==v.return||v.return();case 46:if(t.prev=46,!f){t.next=49;break}throw d;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}();function We(e){return Qe.apply(this,arguments)}function Qe(){return Qe=
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",W(n,"GET","/v2/passwordPolicy",G(n,r)));case 2:case"end":return e.stop()}}),e)}))),Qe.apply(this,arguments)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye=function(){"use strict";function e(n){var r,i,a,o;t(s)(this,e);var u=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(r=u.minPasswordLength)&&void 0!==r?r:6,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),void 0!==u.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),void 0!==u.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),void 0!==u.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),void 0!==u.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(a=null===(i=n.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==a?a:"",this.forceUpgradeOnSignin=null!==(o=n.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=n.schemaVersion}return t(u)(e,[{key:"validatePassword",value:function(e){var t,n,r,i,a,o,s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s}},{key:"validatePasswordLengthOptions",value:function(e,t){var n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}},{key:"validatePasswordCharacterOptions",value:function(e,t){var n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}},{key:"updatePasswordCharacterOptionsStatuses",value:function(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}]),e}(),Je=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.beforeStateQueue=new Ge(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=Ce(n));var r=this;return this._initializationPromise=this.queue(t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Oe.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return P(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ge(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&P(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&P(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(Ce(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"validatePassword",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n._getPasswordPolicyInternal()){t.next=3;break}return t.next=3,n._updatePasswordPolicy();case 3:if((i=n._getPasswordPolicyInternal()).schemaVersion===n.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION){t.next=6;break}return t.abrupt("return",Promise.reject(n._errorFactory.create("unsupported-password-policy-schema-version",{})));case 6:return t.abrupt("return",i.validatePassword(e));case 7:case"end":return t.stop()}}),r)})))()}},{key:"_getPasswordPolicyInternal",value:function(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}},{key:"_updatePasswordPolicy",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,We(e);case 2:r=t.sent,i=new Ye(r),null===e.tenantId?e._projectPasswordPolicy=i:e._tenantPasswordPolicies[e.tenantId]=i;case 5:case"end":return t.stop()}}),n)})))()}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"authStateReady",value:function(){var e=this;return new Promise((function(t,n){if(e.currentUser)t();else var r=e.onAuthStateChanged((function(){r(),t()}),n)}))}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return P(i=e&&Ce(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Oe.create(n,[Ce(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(s,this,"internal-error"),s.then((function(){o||a(i.currentUser)})),"function"==typeof t){var u=e.addObserver(t,n,r);return function(){o=!0,u()}}var c=e.addObserver(t);return function(){o=!0,c()}}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ke(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a,o;return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,e._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,null===(r=e.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=t.sent)?void 0:i.error)&&C("Error while retrieving App Check token: ".concat(i.error)),t.abrupt("return",null==i?void 0:i.token);case 6:case"end":return t.stop()}}),n)})))()}}]),e}();function Xe(e){return(0,g.getModularInstance)(e)}var $e=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return t(u)(e,[{key:"next",get:function(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=D("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function et(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var tt="https://www.google.com/recaptcha/enterprise.js?render=",nt="NO_RECAPTCHA",rt=function(){"use strict";function e(n){t(s)(this,e),this.type="recaptcha-enterprise",this.auth=Xe(n)}return t(u)(e,[{key:"verify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){var a,s,u;return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return s.apply(this,arguments)},s=function(){return s=t(o)(t(y).mark((function e(r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){e.next=5;break}return e.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(function(){var e=t(o)(t(y).mark((function e(n,i){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new x(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)},u=function(t,n,r){var i=window.grecaptcha;_(i)?i.enterprise.ready((function(){i.enterprise.execute(t,{action:e}).then((function(e){n(e)})).catch((function(){n(nt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&_(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ze(tt+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),e}();function it(e,t,n){return at.apply(this,arguments)}function at(){return at=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]&&c[3],o=new rt(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),a?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),e,null,[[3,9]])}))),at.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(e,t){var n=(0,m._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;N(r,"already-initialized")}return n.initialize({options:t})}function st(e,n,r){var i=Xe(e);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=ut(n),s=function(e){var n=ut(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ct(i.substr(o.length+1))}}var s=t(d)(i.split(":"),2);return{host:s[0],port:ct(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ut(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ct(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var lt=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return L("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return L("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return L("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return L("not implemented")}}]),e}();function ht(e,t){return ft.apply(this,arguments)}function ft(){return(ft=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(e,t){return vt.apply(this,arguments)}function vt(){return(vt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPassword",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithEmailLink",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gt(e,t){return mt.apply(this,arguments)}function mt(){return(mt=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithEmailLink",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,s;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,it(e,a,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",dt(e,s));case 12:return r.abrupt("return",dt(e,a).catch(function(){var n=t(o)(t(y).mark((function n(r){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("auth/missing-recaptcha-token"!==r.code){t.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),t.next=4,it(e,a,"signInWithPassword");case 4:return i=t.sent,t.abrupt("return",dt(e,i));case 8:return t.abrupt("return",Promise.reject(r));case 9:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",pt(e,{email:n._email,oobCode:n._password}));case 14:N(e,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ht(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",gt(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:N(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(lt);function wt(e,t){return bt.apply(this,arguments)}function bt(){return(bt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithIdp",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return wt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,wt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,wt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):N("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,w.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(lt);function xt(e,t){return Et.apply(this,arguments)}function Et(){return(Et=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:sendVerificationCode",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function It(){return(It=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tt(){return(Tt=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var St=t(c)({},"USER_NOT_FOUND","user-not-found");function Ct(){return(Ct=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,i),St));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return It.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Tt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ct.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(lt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt=function(){"use strict";function e(n){var r,i,a,o,u,c;t(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);P(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dt=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return kt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Nt.parseLink(t);return P(n,"argument-error"),kt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Dt.PROVIDER_ID="password",Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Rt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(v)(this.scopes)}}]),r}(Ot),Pt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Rt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Rt);Lt.GOOGLE_SIGN_IN_METHOD="google.com",Lt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Rt);Mt.GITHUB_SIGN_IN_METHOD="github.com",Mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ut=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Rt);function Ft(e,t){return Vt.apply(this,arguments)}function Vt(){return(Vt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signUp",G(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.TWITTER_SIGN_IN_METHOD="twitter.com",Ut.PROVIDER_ID="twitter.com";var jt=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(y).mark((function o(){var s,u,c;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Te._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=Bt(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Bt(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function Bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qt=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e,a,o,u){var c,l;return t(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(t(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function zt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw qt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return Kt.apply(this,arguments)}function Kt(){return Kt=t(o)(t(y).mark((function e(n,r){var i,a,o=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=fe,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",jt._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Kt.apply(this,arguments)}function Gt(e,t){return Wt.apply(this,arguments)}function Wt(){return Wt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,fe(n,zt(a,o,r,n),i);case 6:return P((s=e.sent).idToken,a,"internal-error"),P(u=he(s.idToken),a,"internal-error"),c=u.sub,P(n.uid===c,a,"user-mismatch"),e.abrupt("return",jt._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&N(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Wt.apply(this,arguments)}function Qt(e,t){return Yt.apply(this,arguments)}function Yt(){return Yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,zt(n,a,r);case 4:return o=e.sent,e.next=7,jt._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Yt.apply(this,arguments)}function Jt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qt(Xe(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $t(e){return Zt.apply(this,arguments)}function Zt(){return(Zt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Xe(n))._getPasswordPolicyInternal()){e.next=4;break}return e.next=4,r._updatePasswordPolicy();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function en(e,t,n){return tn.apply(this,arguments)}function tn(){return tn=t(o)(t(y).mark((function e(n,r,i){var a,s,u,c,l,h,f;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=Xe(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=s._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){e.next=11;break}return e.next=7,it(s,u,"signUpPassword");case 7:l=e.sent,c=Ft(s,l),e.next=12;break;case 11:c=Ft(s,u).catch(function(){var e=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=6;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,it(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Ft(s,r));case 6:throw n;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return e.next=14,c.catch((function(e){throw"auth/password-does-not-meet-requirements"===e.code&&$t(n),e}));case 14:return h=e.sent,e.next=17,jt._fromIdTokenResponse(s,"signIn",h);case 17:return f=e.sent,e.next=20,s._updateCurrentUser(f.user);case 20:return e.abrupt("return",f);case 21:case"end":return e.stop()}}),e)}))),tn.apply(this,arguments)}function nn(e,n,r){return Jt((0,g.getModularInstance)(e),Dt.credential(n,r)).catch((i=t(o)(t(y).mark((function n(r){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw"auth/password-does-not-meet-requirements"===r.code&&$t(e),r;case 2:case"end":return t.stop()}}),n)}))),function(e){return i.apply(this,arguments)}));var i}function rn(e,t){return an.apply(this,arguments)}function an(){return(an=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function on(e,t){return sn.apply(this,arguments)}function sn(){return(sn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c,l;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,g.getModularInstance)(n),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,fe(o,rn(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function un(e,t,n,r){return(0,g.getModularInstance)(e).onIdTokenChanged(t,n,r)}function cn(e,t,n){return(0,g.getModularInstance)(e).beforeAuthStateChanged(t,n)}function ln(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function hn(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:start",G(e,t))}function dn(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}new WeakMap;var vn="__sak",pn=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(vn,"1"),this.storage.removeItem(vn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Le(i=(0,g.getUA)())||Be(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=He(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);ze()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(h)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(pn);yn.type="LOCAL";var gn=yn,mn=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(pn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.type="SESSION";var kn=mn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){return Promise.all(e.map((n=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,s,u,c,l,h,f;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,wn(h);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _n(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.receivers=[];var xn=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(y).mark((function a(){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=_n("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function In(e){En().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return void 0!==En().WorkerGlobalScope&&"function"==typeof En().importScripts}function Sn(){return Cn.apply(this,arguments)}function Cn(){return(Cn=t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var An="firebaseLocalStorageDb",Nn="firebaseLocalStorage",Dn="fbase_key",On=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Rn(e,t){return e.transaction([Nn],t?"readwrite":"readonly").objectStore(Nn)}function Pn(){var e=indexedDB.deleteDatabase(An);return new On(e).toPromise()}function Ln(){var e=indexedDB.open(An,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Nn,{keyPath:Dn})}catch(e){r(e)}})),e.addEventListener("success",t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Nn)){t.next=12;break}return i.close(),t.next=5,Pn();case 5:return t.t0=n,t.next=8,Ln();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Mn(e,t,n){return Un.apply(this,arguments)}function Un(){return(Un=t(o)(t(y).mark((function e(n,r,i){var a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Rn(n,!0).put((a={},t(c)(a,Dn,r),t(c)(a,"value",i),a)),e.abrupt("return",new On(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fn(e,t){return Vn.apply(this,arguments)}function Vn(){return(Vn=t(o)(t(y).mark((function e(n,r){var i,a;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Rn(n,!1).get(r),e.next=3,new On(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jn(e,t){var n=Rn(e,!0).delete(t);return new On(n).toPromise()}var Bn=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ln();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Tn()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=bn._getInstance(Tn()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(o)(t(y).mark((function n(r,i){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Sn();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new xn(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ln();case 5:return n=e.sent,e.next=8,Mn(n,vn,"1");case 8:return e.next=10,jn(n,vn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Mn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Fn(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return jn(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a,o,s,u,c,l,h,f,d,v,p,g,m,k,w;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Rn(e,!1).getAll();return new On(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,f=h.fbase_key,d=h.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,p=!1,g=void 0,t.prev=27,m=Object.keys(e.localCache)[Symbol.iterator]();!(v=(k=m.next()).done);v=!0)w=k.value,e.localCache[w]&&!a.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),p=!0,g=t.t1;case 35:t.prev=35,t.prev=36,v||null==m.return||m.return();case 38:if(t.prev=38,!p){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Bn.type="LOCAL";var qn=Bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:start",G(e,t))}function Hn(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et("rcb"),new j(3e4,6e4);var Kn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e,t,n){return Wn.apply(this,arguments)}function Wn(){return(Wn=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,f;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,P("string"==typeof o,n,"argument-error"),P(i.type===Kn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return P("enroll"===u.type,n,"internal-error"),e.next=15,fn(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return P("signin"===u.type,n,"internal-error"),P(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,zn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,xt(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qn=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Xe(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Gn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return At._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?At._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(e,t){return t?Ce(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn.PROVIDER_ID="phone",Qn.PHONE_SIGN_IN_METHOD="phone";var Jn=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return wt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return wt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return wt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(lt);function Xn(e){return Qt(e.auth,new Jn(e),e.bypassAuthState)}function $n(e){var t=e.auth,n=e.user;return P(n,t,"internal-error"),Gt(n,new Jn(e),e.bypassAuthState)}function Zn(e){return er.apply(this,arguments)}function er(){return(er=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,P(i=n.user,r,"internal-error"),e.abrupt("return",Ht(i,new Jn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(o)(t(y).mark((function e(r,i){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xn;case"linkViaPopup":case"linkViaRedirect":return Zn;case"reauthViaPopup":case"reauthViaRedirect":return $n;default:N(this.auth,"internal-error")}}},{key:"resolve",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),nr=new j(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rr=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e,a,o,u,c){var l;return t(s)(this,r),(l=n.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(i)(l),l}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return P(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(1===e.filter.length,"Popup operations only handle one event"),r=_n(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(D(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(D(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(D(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,nr.get())};t()}}]),r}(tr);rr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ir=new Map,ar=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ir.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,or(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(h)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ir.set(n.auth._key(),a);case 21:return n.bypassAuthState||ir.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(l)(t(h)(r.prototype),"onAuthEvent",n)};return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(tr);function or(e,t){return sr.apply(this,arguments)}function sr(){return(sr=t(o)(t(y).mark((function e(n,r){var i,a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=lr(r),a=cr(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ur(e,t){ir.set(e._key(),t)}function cr(e){return Ce(e._redirectPersistence)}function lr(e){return De("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){return fr.apply(this,arguments)}function fr(){return fr=t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Xe(n),o=Yn(a,r),s=new ar(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),fr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!pr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(D(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(vr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(vr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function vr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function pr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function yr(e){return gr.apply(this,arguments)}function gr(){return gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",W(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),gr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kr=/^https?/;function wr(){return(wr=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,yr(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!br(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:N(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function br(e){var t=U(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!kr.test(r))return!1;if(mr.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _r=new j(3e4,6e4);function xr(){var e=En().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(v)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Er=null;function Ir(e){return Er=Er||function(e){return new Promise((function(t,n){var r,i,a;function o(){xr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){xr(),n(D(e,"network-request-failed"))},timeout:_r.get()})}if(null===(i=null===(r=En().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=En().gapi)||void 0===a?void 0:a.load)){var s=et("iframefcb");return En()[s]=function(){gapi.load?o():n(D(e,"network-request-failed"))},Ze("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Er=null,e}))}(e),Er}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr=new j(5e3,15e3),Sr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ar(e){var t=e.config;P(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?B(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:m.SDK_VERSION},i=Cr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function Nr(e){return Dr.apply(this,arguments)}function Dr(){return Dr=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ir(n);case 2:return r=e.sent,P(i=En().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Ar(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sr,dontclear:!0},(function(e){return new Promise((r=t(o)(t(y).mark((function r(i,a){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){En().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=D(n,"network-request-failed"),s=En().setTimeout((function(){a(o)}),Tr.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Dr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rr="_blank",Pr="http://localhost",Lr=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Mr(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Or),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();r&&(u=Me(l)?Rr:r),Pe(l)&&(n=n||Pr,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,n){var r=t(d)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(qe(l)&&"_self"!==u)return Ur(n||"",u),new Lr(null);var f=window.open(n||"",u,h);P(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Lr(f)}function Ur(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr=encodeURIComponent("fac");function Vr(e,t,n,r,i,a){return jr.apply(this,arguments)}function jr(){return(jr=t(o)(t(y).mark((function e(n,r,i,a,o,s){var u,c,l,h,f,v,p,k,w,b,_,x,E,I,T,S,C,A,N;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:m.SDK_VERSION,eventId:o},!(r instanceof Ot)){e.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,g.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,h=void 0,e.prev=8,f=Object.entries(s||{})[Symbol.iterator]();!(c=(v=f.next()).done);c=!0)p=t(d)(v.value,2),k=p[0],w=p[1],u[k]=w;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),l=!0,h=e.t0;case 16:e.prev=16,e.prev=17,c||null==f.return||f.return();case 19:if(e.prev=19,!l){e.next=22;break}throw h;case 22:return e.finish(19);case 23:return e.finish(16);case 24:for(r instanceof Rt&&(b=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=b.join(",")),n.tenantId&&(u.tid=n.tenantId),_=u,x=!0,E=!1,I=void 0,e.prev=28,T=Object.keys(_)[Symbol.iterator]();!(x=(S=T.next()).done);x=!0)C=S.value,void 0===_[C]&&delete _[C];e.next=36;break;case 32:e.prev=32,e.t1=e.catch(28),E=!0,I=e.t1;case 36:e.prev=36,e.prev=37,x||null==T.return||T.return();case 39:if(e.prev=39,!E){e.next=42;break}throw I;case 42:return e.finish(39);case 43:return e.finish(36);case 44:return e.next=46,n._getAppCheckToken();case 46:return A=e.sent,N=A?"#".concat(Fr,"=").concat(encodeURIComponent(A)):"",e.abrupt("return","".concat(Br(n),"?").concat((0,g.querystring)(_).slice(1)).concat(N));case 49:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function Br(e){var t=e.config;return t.emulator?B(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr="webStorageSupport",zr=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kn,this._completeRedirectFn=hr,this._overrideRedirectResult=ur}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){var s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),t.next=4,Vr(e,n,r,U(),i);case 4:return u=t.sent,t.abrupt("return",Mr(e,u,_n()));case 6:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return t.next=4,Vr(e,n,r,U(),i);case 4:return In(t.sent),t.abrupt("return",new Promise((function(){})));case 7:case"end":return t.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(M(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nr(e);case 2:return i=t.sent,a=new dr(e),i.register("authEvent",(function(t){return P(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(qr,{type:qr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),N(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return wr.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return He()||Le()||Be()}}]),e}(),Hr=zr,Kr=function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return L("unexpected MultiFactorSessionType")}}}]),e}(),Gr=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Kr);(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return Gr._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Wr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Wr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return t(o)(t(y).mark((function n(){var r,i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(void 0!==(null===(r=(i=e).user)||void 0===r?void 0:r.auth),"internal-error"),t.next=5,n=i.user.auth,o={idToken:i.credential,totpEnrollmentInfo:{}},W(n,"POST","/v2/accounts/mfaEnrollment:start",G(n,o));case 5:return a=t.sent,t.abrupt("return",Qr._fromStartTotpMfaEnrollmentResponse(a,i.user.auth));case 7:case"end":return t.stop()}var n,o}),n)})))()}}]),e}()).FACTOR_ID="totp";var Wr=function(e){"use strict";t(f)(r,e);var n=t(p)(r);function r(e,i,a){var o;return t(s)(this,r),(o=n.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,n,r){var i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(void 0!==i.secret,e,"argument-error"),t.abrupt("return",dn(e,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return t.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(void 0!==r.enrollmentId&&void 0!==r.otp,e,"argument-error"),a={verificationCode:r.otp},t.abrupt("return",Hn(e,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return t.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Kr),Qr=function(){"use strict";function e(n,r,i,a,o,u,c){t(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return t(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Yr(e)||Yr(t))&&(r=!0),r&&(Yr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Yr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}}]),e}();function Yr(e){return void 0===e||0===(null==e?void 0:e.length)}var Jr="@firebase/auth",Xr="1.3.0",$r=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zr,ei=(0,g.getExperimentalSetting)("authIdTokenMaxAge")||300,ti=null,ni=function(e){return n=t(o)(t(y).mark((function n(r){var i,a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>ei)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,ti!==o){t.next=12;break}return t.abrupt("return");case 12:return ti=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function ri(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getApp)(),t=(0,m._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=ot(e,{popupRedirectResolver:Hr,persistence:[qn,gn,kn]}),r=(0,g.getExperimentalSetting)("authTokenSyncURL");if(r){var i=ni(r);cn(n,i,(function(){return i(n.currentUser)})),un(n,(function(e){return i(e)}))}var a=(0,g.getDefaultEmulatorHost)("auth");return a&&st(n,"http://".concat(a)),n}Zr="Browser",(0,m._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Zr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ke(Zr)},l=new Je(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ce);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,m._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=Xe(e.getProvider("auth").getImmediate());return new $r(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,m.registerVersion)(Jr,Xr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zr)),(0,m.registerVersion)(Jr,Xr,"esm2017")})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("4hI0Y",(function(e,n){var r,i=a("bpxeT"),o=a("2TvXO"),s=a("9lidz"),u=document.getElementById("sign-up"),c=document.getElementById("sign-in");u.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.target),n=t.get("name"),r=t.get("email"),i=t.get("password"),a=localStorage.getItem("theme");(0,s.firebaseRegistration)(r,i,n,a)})),c.addEventListener("submit",(r=t(i)(t(o).mark((function e(n){var r,i,a;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=new FormData(n.target),i=r.get("email"),a=r.get("password"),(0,s.firebaseAuthorization)(i,a);case 5:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}))})),a("iE7OH").register(JSON.parse('{"7Lh2N":"index.41af28eb.js","i3GEQ":"foundation-1.60510847.png","eUZBv":"foundation-2.ca1470b9.png","mwjoM":"foundation-3.eb46b36a.png","934x9":"foundation-4.f28ed76b.png","eGRjf":"foundation-5.ee2ee4c4.png","4i4Qg":"foundation-6.7545e455.png","ayDgw":"foundation-7.120110b5.png","7MItH":"foundation-8.16ff1d18.png","dhEp1":"foundation-9.0f9c49b7.png"}'))}();
//# sourceMappingURL=index.41af28eb.js.map
