"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","144e51b8ebde8ec84a4d960725736818"],["/static/css/main.0b71d999.css","57d920d784b3095b63957f651b0b6893"],["/static/js/main.3e0813f4.js","ab7082fdac00a6d69c8ed39565514c9e"],["/static/media/App.3413b8a4.sass","3413b8a4c50dec0cf011bf8fe040ebb3"],["/static/media/Header.module.6f0d873d.sass","6f0d873ddf686a8b4ea83b2b464ef427"],["/static/media/MetaEdit.module.80cc286c.sass","80cc286c8e27c3a57cfc192ef792ba19"],["/static/media/Player.module.ec2041a4.sass","ec2041a4a6864f8a27e16d2f3f21ede5"],["/static/media/Processing.module.b495e738.sass","b495e738e3f7b45026e2bd3c3b33fc2b"],["/static/media/Settings.module.e6bee341.sass","e6bee341890d900d9da4d4a1e5204e34"],["/static/media/Timeline.module.7eb15719.sass","7eb15719fb8b5013080c1f4305b9b2f3"],["/static/media/addNodeIcon.a1a2d01b.png","a1a2d01bcd034270a3bc92176edfb66c"],["/static/media/backIcon.dd0baa69.png","dd0baa69a69937600dc3bf035f3873c4"],["/static/media/connectIcon.d5267b8d.png","d5267b8db2498e44bd567bd12e07576b"],["/static/media/cross.260c9c65.png","260c9c6535065674bb5e59a73f894abb"],["/static/media/deleteIcon.02d321ed.png","02d321edc6e03aea1675001899d8f479"],["/static/media/editIcon.d5422321.png","d5422321c4f6feed4081891051f9a6b2"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});