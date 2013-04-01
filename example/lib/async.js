(function(){var e={},t=this,n=t.async;e.noConflict=function(){return t.async=n,e};var r=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n+=1)t(e[n],n,e)},i=function(e,t){if(e.map)return e.map(t);var n=[];return r(e,function(e,r,i){n.push(t(e,r,i))}),n},s=function(e,t,n){return e.reduce?e.reduce(t,n):(r(e,function(e,r,i){n=t(n,e,r,i)}),n)},o=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t};typeof process=="undefined"||!process.nextTick?e.nextTick=function(e){setTimeout(e,0)}:e.nextTick=process.nextTick,e.forEach=function(e,t,n){n=n||function(){};if(!e.length)return n();var i=0;r(e,function(r){t(r,function(t){t?(n(t),n=function(){}):(i+=1,i===e.length&&n(null))})})},e.forEachSeries=function(e,t,n){n=n||function(){};if(!e.length)return n();var r=0,i=function(){t(e[r],function(t){t?(n(t),n=function(){}):(r+=1,r===e.length?n(null):i())})};i()},e.forEachLimit=function(e,t,n,r){r=r||function(){};if(!e.length||t<=0)return r();var i=0,s=0,o=0;(function u(){if(i===e.length)return r();while(o<t&&s<e.length)s+=1,o+=1,n(e[s-1],function(t){t?(r(t),r=function(){}):(i+=1,o-=1,i===e.length?r():u())})})()};var u=function(t){return function(){var n=Array.prototype.slice.call(arguments);return t.apply(null,[e.forEach].concat(n))}},a=function(t){return function(){var n=Array.prototype.slice.call(arguments);return t.apply(null,[e.forEachSeries].concat(n))}},f=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n,r){s[e.index]=r,t(n)})},function(e){r(e,s)})};e.map=u(f),e.mapSeries=a(f),e.reduce=function(t,n,r,i){e.forEachSeries(t,function(e,t){r(n,e,function(e,r){n=r,t(e)})},function(e){i(e,n)})},e.inject=e.reduce,e.foldl=e.reduce,e.reduceRight=function(t,n,r,s){var o=i(t,function(e){return e}).reverse();e.reduce(o,n,r,s)},e.foldr=e.reduceRight;var l=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n&&s.push(e),t()})},function(e){r(i(s.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};e.filter=u(l),e.filterSeries=a(l),e.select=e.filter,e.selectSeries=e.filterSeries;var c=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n||s.push(e),t()})},function(e){r(i(s.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};e.reject=u(c),e.rejectSeries=a(c);var h=function(e,t,n,r){e(t,function(e,t){n(e,function(n){n?(r(e),r=function(){}):t()})},function(e){r()})};e.detect=u(h),e.detectSeries=a(h),e.some=function(t,n,r){e.forEach(t,function(e,t){n(e,function(e){e&&(r(!0),r=function(){}),t()})},function(e){r(!1)})},e.any=e.some,e.every=function(t,n,r){e.forEach(t,function(e,t){n(e,function(e){e||(r(!1),r=function(){}),t()})},function(e){r(!0)})},e.all=e.every,e.sortBy=function(t,n,r){e.map(t,function(e,t){n(e,function(n,r){n?t(n):t(null,{value:e,criteria:r})})},function(e,t){if(e)return r(e);var n=function(e,t){var n=e.criteria,r=t.criteria;return n<r?-1:n>r?1:0};r(null,i(t.sort(n),function(e){return e.value}))})},e.auto=function(e,t){t=t||function(){};var n=o(e);if(!n.length)return t(null);var i={},u=[],a=function(e){u.unshift(e)},f=function(e){for(var t=0;t<u.length;t+=1)if(u[t]===e){u.splice(t,1);return}},l=function(){r(u.slice(0),function(e){e()})};a(function(){o(i).length===n.length&&(t(null,i),t=function(){})}),r(n,function(n){var r=e[n]instanceof Function?[e[n]]:e[n],o=function(e){if(e)t(e),t=function(){};else{var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),i[n]=r,l()}},u=r.slice(0,Math.abs(r.length-1))||[],c=function(){return s(u,function(e,t){return e&&i.hasOwnProperty(t)},!0)&&!i.hasOwnProperty(n)};if(c())r[r.length-1](o,i);else{var h=function(){c()&&(f(h),r[r.length-1](o,i))};a(h)}})},e.waterfall=function(t,n){n=n||function(){};if(!t.length)return n();var r=function(t){return function(i){if(i)n(i),n=function(){};else{var s=Array.prototype.slice.call(arguments,1),o=t.next();o?s.push(r(o)):s.push(n),e.nextTick(function(){t.apply(null,s)})}}};r(e.iterator(t))()},e.parallel=function(t,n){n=n||function(){};if(t.constructor===Array)e.map(t,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n)})},n);else{var r={};e.forEach(o(t),function(e,n){t[e](function(t){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[e]=i,n(t)})},function(e){n(e,r)})}},e.series=function(t,n){n=n||function(){};if(t.constructor===Array)e.mapSeries(t,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n)})},n);else{var r={};e.forEachSeries(o(t),function(e,n){t[e](function(t){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[e]=i,n(t)})},function(e){n(e,r)})}},e.iterator=function(e){var t=function(n){var r=function(){return e.length&&e[n].apply(null,arguments),r.next()};return r.next=function(){return n<e.length-1?t(n+1):null},r};return t(0)},e.apply=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var p=function(e,t,n,r){var i=[];e(t,function(e,t){n(e,function(e,n){i=i.concat(n||[]),t(e)})},function(e){r(e,i)})};e.concat=u(p),e.concatSeries=a(p),e.whilst=function(t,n,r){t()?n(function(i){if(i)return r(i);e.whilst(t,n,r)}):r()},e.until=function(t,n,r){t()?r():n(function(i){if(i)return r(i);e.until(t,n,r)})},e.queue=function(t,n){var i=0,s={tasks:[],concurrency:n,saturated:null,empty:null,drain:null,push:function(t,i){t.constructor!==Array&&(t=[t]),r(t,function(t){s.tasks.push({data:t,callback:typeof i=="function"?i:null}),s.saturated&&s.tasks.length==n&&s.saturated(),e.nextTick(s.process)})},process:function(){if(i<s.concurrency&&s.tasks.length){var e=s.tasks.shift();s.empty&&s.tasks.length==0&&s.empty(),i+=1,t(e.data,function(){i-=1,e.callback&&e.callback.apply(e,arguments),s.drain&&s.tasks.length+i==0&&s.drain(),s.process()})}},length:function(){return s.tasks.length},running:function(){return i}};return s};var d=function(e){return function(t){var n=Array.prototype.slice.call(arguments,1);t.apply(null,n.concat([function(t){var n=Array.prototype.slice.call(arguments,1);typeof console!="undefined"&&(t?console.error&&console.error(t):console[e]&&r(n,function(t){console[e](t)}))}]))}};e.log=d("log"),e.dir=d("dir"),e.memoize=function(e,t){var n={},r={};t=t||function(e){return e};var i=function(){var i=Array.prototype.slice.call(arguments),s=i.pop(),o=t.apply(null,i);o in n?s.apply(null,n[o]):o in r?r[o].push(s):(r[o]=[s],e.apply(null,i.concat([function(){n[o]=arguments;var e=r[o];delete r[o];for(var t=0,i=e.length;t<i;t++)e[t].apply(null,arguments)}])))};return i.unmemoized=e,i},e.unmemoize=function(e){return function(){return(e.unmemoized||e).apply(null,arguments)}},typeof define!="undefined"&&define.amd?define("async",[],function(){return e}):typeof module!="undefined"&&module.exports?module.exports=e:t.async=e})();