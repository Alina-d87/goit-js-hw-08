!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a,l=o("1WSnx"),u=document.querySelector(".feedback-form"),i=document.querySelector("input"),c=document.querySelector("textarea"),d="feedback-form-state";function f(){a={email:"".concat(i.value),message:"".concat(c.value)},localStorage.setItem(d,JSON.stringify(a))}function s(){var e=localStorage.getItem(d)||"";try{var t=JSON.parse(e);console.log(t),e&&(i.value=t.email||"",c.value=t.message||"",a={email:i.value,message:c.value})}catch(e){}}s(),i.addEventListener("input",e(l)(f,500)),c.addEventListener("input",e(l)(f,500)),u.addEventListener("submit",(function(e){e.preventDefault(),s(),localStorage.removeItem(d),u.reset()}))}();
//# sourceMappingURL=03-feedback.93c4478a.js.map
