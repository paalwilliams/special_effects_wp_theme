!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.jQuery},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";n.r(t);var r=n(2),u=n.n(r),o=n(0),c=n(1),i=n.n(c),l=wp.element,a=l.render,f=(l.useState,l.Fragment);i()("#webTicker").webTicker(u()({height:"75px",duplicate:!0,rssfrequency:0,startEmpty:!1,hoverpause:!1,speed:20},"height","50px")),i()(window).resize((function(){i()("#webTicker").webTicker("stop"),clearTimeout(window.resizedFinished),window.resizedFinished=setTimeout((function(){i()("#webTicker").webTicker("cont")}),250)})),a(Object(o.createElement)((function(){var e=new Date,t=e.getDate(),n=(e.getDay(),e.getMonth()),r=e.getFullYear(),u="Today is ".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ").concat(t,", ").concat(r).toUpperCase();return Object(o.createElement)(f,null,Object(o.createElement)("p",null,u))}),null),document.getElementById("current-date")),a(Object(o.createElement)((function(){return Object(o.createElement)(f,null,Object(o.createElement)("p",null,"GREETINGS, GUEST!"))}),null),document.getElementById("greeting-text"))}]);