// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n&&n>=0};var t=function(r){return r!=r},a=Number.POSITIVE_INFINITY;function u(r,u){var e;return t(r)||t(u)||u<0||u>1||!n(r)||r===a?NaN:(1-6*(e=u*(1-u)))/(r*e)}export{u as default};
//# sourceMappingURL=mod.js.map
