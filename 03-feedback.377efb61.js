!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o="Expected a function",r=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=f.test(e);return o||u.test(e)?l(e.slice(2),o?2:8):a.test(e)?r:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(o);function h(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function S(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||m&&o>=a}function j(){var e,n,o,r=p();if(S(r))return O(r);u=setTimeout(j,(e=r-l,n=r-c,o=t-e,m?v(o,a-n):o))}function O(e){return(u=void 0,d&&r)?h(e):(r=i=void 0,f)}function T(){var e,n=p(),o=S(n);if(r=arguments,i=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(j,t),s?h(e):f;if(m)return u=setTimeout(j,t),h(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?g(y(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?f:O(p())},T}(e,t,{leading:r,maxWait:t,trailing:i})};let h={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},S="feedback-form-state",j=JSON.parse(localStorage.getItem(S))||{};h.form.addEventListener("submit",function(e){e.preventDefault(),0===h.email.value.trim().length||0===h.message.value.trim().length?alert("Fill out the form before sending"):(console.log("formData:",j),e.currentTarget.reset(),localStorage.removeItem(S),j={})}),h.form.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){j[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(j))},500)),function(){let e=JSON.parse(localStorage.getItem(S));e&&(h.email.value=e.email||"",h.message.value=e.message||"")}()}();
//# sourceMappingURL=03-feedback.377efb61.js.map
