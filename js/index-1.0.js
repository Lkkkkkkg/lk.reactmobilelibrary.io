!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,h=[];f<c.length;f++)i=c[f],a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);h.length;)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={4:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([140,0]),n()}({140:function(e,t,n){"use strict";var r=i(n(0)),a=n(3),o=i(n(141));function i(e){return e&&e.__esModule?e:{default:e}}n(6),n(143),(0,a.render)(r.default.createElement(o.default,null),document.getElementById("root"))},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=(n(4),n(1));n(142);var l=[{name:"Layout",children:[{name:"WingBlank",finished:!0,check:!1},{name:"WhiteSpace",finished:!0,check:!1}]},{name:"Navigation",children:[{name:"NavBar",finished:!0,check:!1}]},{name:"DataEntry",children:[{name:"Button",finished:!0,check:!1},{name:"SearchBar",finished:!0,check:!1},{name:"Switch",finished:!0,check:!1}]},{name:"DataDisplay",children:[{name:"Icon",finished:!0,check:!1},{name:"List",finished:!0,check:!1},{name:"Badge",finished:!0,check:!1}]}],u=document.body||document.documentElement,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=0;return sessionStorage.library?l=JSON.parse(sessionStorage.library):sessionStorage.setItem("library",JSON.stringify(l)),l.forEach(function(e){e.children.forEach(function(e){r+=!e.check&&e.finished?1:0})}),sessionStorage.setItem("library",JSON.stringify(l)),n.state={library:l,focus:!1,resultShow:!1,unCheckNum:r},n.onChange=n.onChange.bind(n),n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n.onCancel=n.onCancel.bind(n),n.doExit=n.doExit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"onChange",value:function(e){var t=this.state.library;t.showNum=0,t.forEach(function(n){n.showNum=0,n.children.forEach(function(r){r.show=-1!==r.name.search(new RegExp(e,"i")),t.showNum+=n.showNum+=r.show?1:0})}),this.setState({resultShow:!!(e&&e.length>0),library:t})}},{key:"onFocus",value:function(){this.setState({focus:!0}),u.className="body-fix"}},{key:"onBlur",value:function(e){e&&e.length>0||this.doExit()}},{key:"onCancel",value:function(){this.doExit()}},{key:"doExit",value:function(){u.className="",this.setState({focus:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.library,r=t.focus,a=t.resultShow,o=t.unCheckNum;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:r?"head head-up":"head"},i.default.createElement(c.NavBar,{leftContent:" "},i.default.createElement("span",null,"Library"),i.default.createElement(c.Badge,{count:o})),i.default.createElement(c.SearchBar,{className:r?"search-bar-up":"",ref:function(t){e.searchBarRef=t},placeholder:"search",onFocus:this.onFocus,onBlur:this.onBlur,onCancel:this.onCancel,onChange:this.onChange})),i.default.createElement("div",{className:r?"body body-down":"body"},n.map(function(e,t){return i.default.createElement(c.List,{key:t,headerText:e.name,footerText:t===n.length-1?" ":""},e.children.map(function(e,t){var n=e.name.replace(/([A-Z])/g,"-$1").toLowerCase().substr(1)+".html";return i.default.createElement(c.List.Item,{key:t,arrow:"right",thumb:i.default.createElement(c.Icon,{type:e.finished?"check-circle":"loading1",color:e.finished?"green":"#ea4e3d"}),extra:!e.check&&e.finished&&i.default.createElement(c.Badge,{dot:!0}),href:e.finished?n:null},e.name)}))})),i.default.createElement("div",{className:a?"result-wrapper":"result-wrapper result-wrapper-hide"},i.default.createElement("div",{className:"result"},n.showNum?n.map(function(e,t){return!!e.showNum&&i.default.createElement(c.List,{key:t,headerText:e.name,footerText:t===n.length-1?" ":""},e.children.map(function(e,t){var n=e.name.replace(/([A-Z])/g,"-$1").toLowerCase().substr(1)+".html";return e.show&&i.default.createElement(c.List.Item,{key:t,arrow:"right",thumb:i.default.createElement(c.Icon,{type:e.finished?"check-circle-o":"loading1",size:"xs"}),extra:!e.check&&i.default.createElement(c.Badge,{dot:!0}),href:e.finished?n:null},e.name)}))}):i.default.createElement("div",{className:"result-tips"},"Not Found"))),i.default.createElement("div",{className:r?"mask mask-show":"mask"}))}}]),t}();t.default=s},142:function(e,t,n){},143:function(e,t){e.exports='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n<div id="root"></div>\r\n</body>\r\n</html>'}});
//# sourceMappingURL=index-1.0.js.map