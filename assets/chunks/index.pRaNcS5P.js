var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m=window.device,e={},s=[];window.device=e;var r=window.document.documentElement,v=window.navigator.userAgent.toLowerCase(),f=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];e.macos=function(){return o("mac")};e.ios=function(){return e.iphone()||e.ipod()||e.ipad()};e.iphone=function(){return!e.windows()&&o("iphone")};e.ipod=function(){return o("ipod")};e.ipad=function(){var n=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return o("ipad")||n};e.android=function(){return!e.windows()&&o("android")};e.androidPhone=function(){return e.android()&&o("mobile")};e.androidTablet=function(){return e.android()&&!o("mobile")};e.blackberry=function(){return o("blackberry")||o("bb10")};e.blackberryPhone=function(){return e.blackberry()&&!o("tablet")};e.blackberryTablet=function(){return e.blackberry()&&o("tablet")};e.windows=function(){return o("windows")};e.windowsPhone=function(){return e.windows()&&o("phone")};e.windowsTablet=function(){return e.windows()&&o("touch")&&!e.windowsPhone()};e.fxos=function(){return(o("(mobile")||o("(tablet"))&&o(" rv:")};e.fxosPhone=function(){return e.fxos()&&o("mobile")};e.fxosTablet=function(){return e.fxos()&&o("tablet")};e.meego=function(){return o("meego")};e.cordova=function(){return window.cordova&&location.protocol==="file:"};e.nodeWebkit=function(){return h(window.process)==="object"};e.mobile=function(){return e.androidPhone()||e.iphone()||e.ipod()||e.windowsPhone()||e.blackberryPhone()||e.fxosPhone()||e.meego()};e.tablet=function(){return e.ipad()||e.androidTablet()||e.blackberryTablet()||e.windowsTablet()||e.fxosTablet()};e.desktop=function(){return!e.tablet()&&!e.mobile()};e.television=function(){for(var n=0;n<f.length;){if(o(f[n]))return!0;n++}return!1};e.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?d(screen.orientation.type,"portrait"):e.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1};e.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?d(screen.orientation.type,"landscape"):e.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1};e.noConflict=function(){return window.device=m,this};function d(n,i){return n.indexOf(i)!==-1}function o(n){return d(v,n)}function b(n){return r.className.match(new RegExp(n,"i"))}function t(n){var i=null;b(n)||(i=r.className.replace(/^\s+|\s+$/g,""),r.className=i+" "+n)}function u(n){b(n)&&(r.className=r.className.replace(" "+n,""))}e.ios()?e.ipad()?t("ios ipad tablet"):e.iphone()?t("ios iphone mobile"):e.ipod()&&t("ios ipod mobile"):e.macos()?t("macos desktop"):e.android()?e.androidTablet()?t("android tablet"):t("android mobile"):e.blackberry()?e.blackberryTablet()?t("blackberry tablet"):t("blackberry mobile"):e.windows()?e.windowsTablet()?t("windows tablet"):e.windowsPhone()?t("windows mobile"):t("windows desktop"):e.fxos()?e.fxosTablet()?t("fxos tablet"):t("fxos mobile"):e.meego()?t("meego mobile"):e.nodeWebkit()?t("node-webkit"):e.television()?t("television"):e.desktop()&&t("desktop");e.cordova()&&t("cordova");function a(){e.landscape()?(u("portrait"),t("landscape"),w("landscape")):(u("landscape"),t("portrait"),w("portrait")),p()}function w(n){for(var i=0;i<s.length;i++)s[i](n)}e.onChangeOrientation=function(n){typeof n=="function"&&s.push(n)};var l="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(l="orientationchange");window.addEventListener?window.addEventListener(l,a,!1):window.attachEvent?window.attachEvent(l,a):window[l]=a;a();function c(n){for(var i=0;i<n.length;i++)if(e[n[i]]())return n[i];return"unknown"}e.type=c(["mobile","tablet","desktop"]);e.os=c(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function p(){e.orientation=c(["portrait","landscape"])}p();export{e as default};