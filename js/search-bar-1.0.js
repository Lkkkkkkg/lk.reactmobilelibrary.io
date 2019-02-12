!function(e){function t(t){for(var a,o,u=t[0],c=t[1],i=t[2],s=0,f=[];s<u.length;s++)o=u[s],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={9:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=c;l.push([170,0]),n()}({170:function(e,t,n){"use strict";var a=o(n(0)),r=n(4),l=o(n(171));function o(e){return e&&e.__esModule?e:{default:e}}n(6),n(172),(0,r.render)(a.default.createElement(l.default,null),document.getElementById("root"))},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),o=(a=l)&&a.__esModule?a:{default:a},u=(n(5),n(1));var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!0,disabled:!0,value:"value"},n.handleFocus=n.handleFocus.bind(n),n.changeLoading=n.changeLoading.bind(n),n.changeDisabled=n.changeDisabled.bind(n),n.onChange=n.onChange.bind(n),n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n.onClear=n.onClear.bind(n),n.onCancel=n.onCancel.bind(n),n.onSubmit=n.onSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"handleFocus",value:function(){this.searchBarRef.focus()}},{key:"changeLoading",value:function(){this.setState({loading:!this.state.loading})}},{key:"changeDisabled",value:function(){this.setState({disabled:!this.state.disabled})}},{key:"onChange",value:function(e){console.log("onChange: "+e),this.setState({value:e})}},{key:"onFocus",value:function(){console.log("onFocus")}},{key:"onBlur",value:function(){console.log("onBlur")}},{key:"onClear",value:function(){console.log("onClear")}},{key:"onCancel",value:function(){console.log("onCancel")}},{key:"onSubmit",value:function(e){console.log("onSubmit: "+e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.disabled,a=t.loading,r=t.value;return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.NavBar,{leftContent:o.default.createElement("a",{href:"index.html",style:{lineHeight:"0"}},o.default.createElement(u.Icon,{type:"left"}))},"SearchBar"),o.default.createElement(u.List,{headerText:"Normal"},o.default.createElement(u.SearchBar,null)),o.default.createElement(u.List,{headerText:"Placeholder"},o.default.createElement(u.SearchBar,{placeholder:"placeholder"})),o.default.createElement(u.List,{headerText:"DefaultValue"},o.default.createElement(u.SearchBar,{defaultValue:"defaultValue"})),o.default.createElement(u.List,{headerText:"AutoFocus"},o.default.createElement(u.SearchBar,{autoFocus:!0})),o.default.createElement(u.List,{headerText:"ManualFocus"},o.default.createElement(u.SearchBar,{ref:function(t){return e.searchBarRef=t}}),o.default.createElement(u.WingBlank,null,o.default.createElement(u.Button,{onClick:this.handleFocus},"Click to Focus")),o.default.createElement(u.WhiteSpace,{size:"sm"})),o.default.createElement(u.List,{headerText:"ShowCancel"},o.default.createElement(u.SearchBar,{showCancel:!0})),o.default.createElement(u.List,{headerText:"CancelText"},o.default.createElement(u.SearchBar,{showCancel:!0,cancelText:"CancelText"})),o.default.createElement(u.List,{headerText:"CancelColor"},o.default.createElement(u.SearchBar,{showCancel:!0,cancelColor:"#D4A95B"})),o.default.createElement(u.List,{headerText:"MaxLength: 8"},o.default.createElement(u.SearchBar,{maxLength:8})),o.default.createElement(u.List,{headerText:"Loading"},o.default.createElement(u.List.Item,{extra:o.default.createElement(u.Switch,{checked:a,onChange:this.changeLoading})},"Loading: "+a),o.default.createElement(u.SearchBar,{loading:a})),o.default.createElement(u.List,{headerText:"Disabled"},o.default.createElement(u.List.Item,{extra:o.default.createElement(u.Switch,{checked:n,onChange:this.changeDisabled})},"Disabled: "+n),o.default.createElement(u.SearchBar,{disabled:n})),o.default.createElement(u.List,{headerText:"Callback",footerText:" "},o.default.createElement(u.SearchBar,{value:r,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onClear:this.onClear,onCancel:this.onCancel,onSubmit:this.onSubmit})))}}]),t}();t.default=c},172:function(e,t){e.exports='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover">\r\n    <title>Mobile Library</title>\r\n</head>\r\n<body>\r\n<div id="root"></div>\r\n</body>\r\n</html>'}});
//# sourceMappingURL=search-bar-1.0.js.map