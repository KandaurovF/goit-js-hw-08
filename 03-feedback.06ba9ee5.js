var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):i.test(e)?o:+e}t=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return p(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),function(e,t,o){var r,i,a,f,u,l,c=0,s=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function S(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||m&&o>=a}function j(){var e,n,o,r=v();if(S(r))return O(r);u=setTimeout(j,(e=r-l,n=r-c,o=t-e,m?g(o,a-n):o))}function O(e){return(u=void 0,y&&r)?h(e):(r=i=void 0,f)}function T(){var e,n=v(),o=S(n);if(r=arguments,i=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(j,t),s?h(e):f;if(m)return u=setTimeout(j,t),h(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=b(t)||0,p(o)&&(s=!!o.leading,a=(m="maxWait"in o)?d(b(o.maxWait)||0,t):a,y="trailing"in o?!!o.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?f:O(v())},T}(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},h="feedback-form-state";let S=JSON.parse(localStorage.getItem(h))||{};y.form.addEventListener("submit",function(e){e.preventDefault(),0===y.email.value.trim().length||0===y.message.value.trim().length?alert("Fill out the form before sending"):(console.log("formData:",S),e.currentTarget.reset(),localStorage.removeItem(h),S={})}),y.form.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){S[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(S))},500)),function(){let e=JSON.parse(localStorage.getItem(h));e&&(y.email.value=e.email||"",y.message.value=e.message||"")}();
//# sourceMappingURL=03-feedback.06ba9ee5.js.map