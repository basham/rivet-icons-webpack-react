(()=>{"use strict";var e={178:(e,t,r)=>{e.exports=r.p+"assets/rivet-icons.js"},612:(e,t,r)=>{e.exports=r.p+"assets/react-dom.production.min.js"},249:(e,t,r)=>{e.exports=r.p+"assets/react.production.min.js"},22:(e,t,r)=>{e.exports=r.p+"assets/rivet.min.css"},97:(e,t,r)=>{e.exports=r.p+"assets/rivet-icon-element.js"},467:(e,t,r)=>{e.exports=r.p+"assets/rivet-icons.css"},138:e=>{e.exports='<svg aria-hidden="true" viewBox="0 0 16 16">\n  <path fill="currentColor" d="M12.9,6.6A1,1,0,0,0,12,6H8.6l2.3-4.6A1,1,0,0,0,10.5.1,1.1,1.1,0,0,0,9.2.4l-6,8a.9.9,0,0,0-.1,1A1,1,0,0,0,4,10H7.4L5.1,14.6a1,1,0,0,0,.4,1.3H6a.9.9,0,0,0,.8-.4l6-8A.9.9,0,0,0,12.9,6.6Z"/>\n</svg>\n'},678:(e,t,r)=>{e.exports=r.p+"index.html"},162:(e,t,r)=>{e.exports=r.p+"styles.css"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r(249),r(612),r(22),r(97),r(467),r(178),r(678),r(162);const e=React;var t=r.n(e);const n=ReactDOM;var a=r(138);function o(e){var r=e.exampleNumber;return t().createElement(t().Fragment,null,t().createElement("h2",{class:"rvt-ts-sm rvt-m-top-md"},t().createElement("span",{class:"rvt-text-bold"},"Example ",r,":")," Inline icon"),t().createElement("p",null,"Render inline an icon from a ",t().createElement("code",null,"rvt-icon-*.html")," file, without SVG symbols."),t().createElement(l,{html:a}))}function l(e){var r=e.html;return t().createElement("span",{className:"rvt-icon",dangerouslySetInnerHTML:{__html:r}})}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(r){var n,a,o=r.exampleNumber,l=(n=(0,e.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(n,a)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],i=l[1];return t().createElement(t().Fragment,null,t().createElement("h2",{class:"rvt-ts-sm rvt-m-top-md"},t().createElement("span",{class:"rvt-text-bold"},"Example ",o,":")," Toggle icon with CSS"),t().createElement("p",null,"Toggle the value of ",t().createElement("code",null,"aria-pressed"),". Use CSS to change the icon."),t().createElement("button",{"aria-pressed":s,class:"rvt-button rvt-button--secondary favorite",onClick:function(){return i(!s)}},t().createElement("rvt-icon",{class:"favorite__icon rvt-m-right-xs"}),"Favorite"))}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(r){var n,a,o=r.exampleNumber,l=(n=(0,e.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(n,a)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1],u=c?"heart-solid":"heart";return t().createElement(t().Fragment,null,t().createElement("h2",{class:"rvt-ts-sm rvt-m-top-md"},t().createElement("span",{class:"rvt-text-bold"},"Example ",o,":")," Toggle icon with React"),t().createElement("p",null,"Toggle the value of ",t().createElement("code",null,"aria-pressed"),". Use React to change the icon."),t().createElement("button",{"aria-pressed":c,class:"rvt-button rvt-button--secondary",onClick:function(){return s(!c)}},t().createElement("rvt-icon",{class:"rvt-m-right-xs",name:u}),"Favorite"))}function m(){return t().createElement(t().Fragment,null,t().createElement(s,{exampleNumber:"1"}),t().createElement(u,{exampleNumber:"2"}),t().createElement(o,{exampleNumber:"3"}))}(0,n.render)(t().createElement(m,null),document.getElementById("app"))})()})();