"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(c,s){
var n=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/constants-float64-pinf/dist');function o(e,r){var i;return t(e)||t(r)||r<0||r>1||!n(e)||e===v?NaN:(i=r*(1-r),(1-6*i)/(e*i))}s.exports=o
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
