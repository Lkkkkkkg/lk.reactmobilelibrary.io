!function(e){function t(t){for(var r,o,l=t[0],i=t[1],u=t[2],d=0,s=[];d<l.length;d++)o=l[d],a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);s.length;)s.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={8:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=i;c.push([154,0]),n()}({154:function(e,t,n){"use strict";var r=o(n(0)),a=n(3),c=o(n(155));function o(e){return e&&e.__esModule?e:{default:e}}n(6),n(156),(0,a.render)(r.default.createElement(c.default,null),document.getElementById("root"))},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),o=(r=c)&&r.__esModule?r:{default:r},l=(n(4),n(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={checked1:!1,checked2:!1,checked3:!0,checked4:!1,checked5:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),a(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(sessionStorage.getItem("library"));e.forEach(function(e){e.children.forEach(function(e){"Switch"===e.name&&e.finished&&(e.check=!0)})}),sessionStorage.setItem("library",JSON.stringify(e))}},{key:"render",value:function(){var e=this,t=this.state,n=t.checked1,r=t.checked2,a=t.checked3,c=t.checked4,i=t.checked5,u=t.disabled;return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.NavBar,{leftContent:o.default.createElement("a",{href:"index.html",style:{lineHeight:"0"}},o.default.createElement(l.Icon,{type:"left"}))},"Switch"),o.default.createElement(l.List,{headerText:"Normal"},o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:n,onChange:function(){e.setState({checked1:!n})}})}," ")),o.default.createElement(l.List,{headerText:"DefaultChecked"},o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:r,onChange:function(){e.setState({checked2:!r})}})},"Off"),o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:a,onChange:function(){e.setState({checked3:!a})}})},"On")),o.default.createElement(l.List,{headerText:"Color"},o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:c,onChange:function(){e.setState({checked4:!c})},color:"#D4A95B"})},"#D4A95B")),o.default.createElement(l.List,{headerText:"Disabled"},o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:u,onChange:function(){e.setState({disabled:!u})}})},"Disabled: "+u),o.default.createElement(l.List.Item,{extra:o.default.createElement(l.Switch,{checked:i,onChange:function(){e.setState({checked5:!i})},disabled:u})}," ")))}}]),t}();t.default=i},156:function(e,t){e.exports='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n<div id="root"></div>\r\n</body>\r\n</html>'}});
//# sourceMappingURL=switch-1.0.js.map