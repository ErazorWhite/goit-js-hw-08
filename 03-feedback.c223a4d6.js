function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function w(e){return l=e,u=setTimeout(j,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=m();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,i-(e-l)):n}(e))}function S(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=m(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,y(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:S(m())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};var b={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const{save:w,load:h}=b,j=document.querySelector("form"),S=document.querySelector("[name=email]"),O=document.querySelector("[name=message]");window.onload=()=>{const{email:e,message:t}=h("feedback-form-state");e&&(S.value=e),t&&(O.value=t)},j.addEventListener("keydown",e(t)((function(){w("feedback-form-state",{email:S.value,message:O.value})}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:S.value,message:O.value}),S.value="",O.value="",w("feedback-form-state",{email:S.value,message:O.value})}));
//# sourceMappingURL=03-feedback.c223a4d6.js.map