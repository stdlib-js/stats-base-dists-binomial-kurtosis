// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var a=function(a){return r(a)===a&&a>=0};var n=function(r){return r!=r},t=Number.POSITIVE_INFINITY,u=a,e=n,o=t;var f=function(r,a){var n;return e(r)||e(a)||a<0||a>1||!u(r)||r===o?NaN:(1-6*(n=a*(1-a)))/(r*n)};export{f as default};
//# sourceMappingURL=mod.js.map
