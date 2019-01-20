!function(e){function t(t){for(var a,o,c=t[0],u=t[1],i=t[2],d=0,s=[];d<c.length;d++)o=c[d],r[o]&&s.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(f&&f(t);s.length;)s.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={7:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=u;l.push([151,0]),n()}({151:function(e,t,n){"use strict";var a=o(n(0)),r=n(3),l=o(n(152));function o(e){return e&&e.__esModule?e:{default:e}}n(6),n(153),(0,r.render)(a.default.createElement(l.default,null),document.getElementById("root"))},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),o=(a=l)&&a.__esModule?a:{default:a},c=(n(4),n(1));var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={disabled:!1,loading:!1,value:"value"},n.handleFocus=n.handleFocus.bind(n),n.onChange=n.onChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(sessionStorage.getItem("library"));e.forEach(function(e){e.children.forEach(function(e){"SearchBar"===e.name&&e.finished&&(e.check=!0)})}),sessionStorage.setItem("library",JSON.stringify(e))}},{key:"handleFocus",value:function(){this.searchBarRef.focus()}},{key:"onChange",value:function(e){console.log("onChange: "+e),this.setState({value:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.disabled,a=t.loading,r=t.value;return o.default.createElement(o.default.Fragment,null,o.default.createElement(c.NavBar,{leftContent:o.default.createElement("a",{href:"index.html",style:{lineHeight:"0"}},o.default.createElement(c.Icon,{type:"left"}))},"SearchBar"),o.default.createElement(c.List,{headerText:"Normal"},o.default.createElement(c.SearchBar,null)),o.default.createElement(c.List,{headerText:"Placeholder"},o.default.createElement(c.SearchBar,{placeholder:"placeholder"})),o.default.createElement(c.List,{headerText:"DefaultValue"},o.default.createElement(c.SearchBar,{defaultValue:"defaultValue"})),o.default.createElement(c.List,{headerText:"AutoFocus"},o.default.createElement(c.SearchBar,{autoFocus:!0})),o.default.createElement(c.List,{headerText:"ManualFocus"},o.default.createElement(c.SearchBar,{ref:function(t){return e.searchBarRef=t}}),o.default.createElement(c.WingBlank,null,o.default.createElement(c.Button,{onClick:this.handleFocus},"Click to Focus")),o.default.createElement(c.WhiteSpace,{size:"sm"})),o.default.createElement(c.List,{headerText:"ShowCancel"},o.default.createElement(c.SearchBar,{showCancel:!0})),o.default.createElement(c.List,{headerText:"CancelText"},o.default.createElement(c.SearchBar,{showCancel:!0,cancelText:"cancelText"})),o.default.createElement(c.List,{headerText:"CancelColor"},o.default.createElement(c.SearchBar,{showCancel:!0,cancelColor:"#D4A95B"})),o.default.createElement(c.List,{headerText:"MaxLength: 8"},o.default.createElement(c.SearchBar,{maxLength:8})),o.default.createElement(c.List,{headerText:"Loading"},o.default.createElement(c.List.Item,{extra:o.default.createElement(c.Switch,{checked:a,onChange:function(){e.setState({loading:!a})}})},"Loading: "+a),o.default.createElement(c.SearchBar,{loading:a})),o.default.createElement(c.List,{headerText:"Disabled"},o.default.createElement(c.List.Item,{extra:o.default.createElement(c.Switch,{checked:n,onChange:function(){e.setState({disabled:!n})}})},"Disabled: "+n),o.default.createElement(c.SearchBar,{disabled:n})),o.default.createElement(c.List,{headerText:"Callback",footerText:" "},o.default.createElement(c.SearchBar,{value:r,onChange:this.onChange,onFocus:function(){console.log("onFocus")},onBlur:function(){console.log("onBlur")},onClear:function(){console.log("onClear")},onCancel:function(){console.log("onCancel")},onSubmit:function(e){console.log("onSubmit: "+e)}})))}}]),t}();t.default=u},153:function(e,t){e.exports='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n<div id="root"></div>\r\n</body>\r\n</html>'}});
//# sourceMappingURL=search-bar-1.0.js.map