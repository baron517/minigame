var l,aa=/(http:\/\/www|https:\/\/secure)\.internetdownloadmanager\.com\/(autoreg|fillregform)\.html\?d=/,ba=/:\/\/.+\/([^/]+?(?:\.([^./]+?))?)(?=[?#]|$)/,ca=/\.([^.\\/]*?)(?=(?:\.[0-9]+)*)$/,da=["object","xmlhttprequest","other"],ea={16:1,17:2,18:4,45:8,46:16},fa={http:1,https:129,ftp:2,ftps:130,rtmp:3,rtmpt:3,rtmpe:3,mms:4,idmreg:159},ga={"text/html":"HTML|HTM","text/css":"CSS","text/javascript":"JS|JSON","text/mspg-legacyinfo":"MSI|MSP","text/plain":"TXT","text/xml":"XML|F4M","text/x-javascript":"JS|JSON",
"text/x-json":"JSON","application/f4m+xml":"F4M","application/gzip":"GZ","application/javascript":"JS","application/json":"JSON","application/msword":"DOC|DOCX|DOT|DOTX","application/pdf":"PDF","application/ttaf+xml":"DFXP","application/vnd.apple.mpegurl":"M3U8","application/zip":"ZIP","application/x-aim":"PLJ","application/x-compress":"Z","application/x-compress-7z":"7Z","application/x-compressed":"ARJ","application/x-gtar":"TAR","application/x-gzip":"GZ","application/x-gzip-compressed":"GZ","application/x-javascript":"JS",
"application/x-mpegurl":"M3U8","application/x-msdos-program":"EXE|DLL","application/x-msi":"MSI","application/x-msp":"MSP","application/x-ole-storage":"MSI|MSP","application/x-rar":"RAR","application/x-rar-compressed":"RAR","application/x-sdlc":"EXE|SDLC","application/x-shockwave-flash":"SWF","application/x-silverlight-app":"XAP","application/x-tar":"TAR","application/x-zip":"ZIP","application/x-zip-compressed":"ZIP","video/3gpp":"3GP|3GPP","video/3gpp2":"3GP|3GPP","video/avi":"AVI","video/flv":"FLV",
"video/mp2t":"TS","video/mp4":"MP4|M4V","video/mpeg":"MPG|MPEG","video/mpg4":"MP4|M4V","video/msvideo":"AVI","video/quicktime":"MOV","video/webm":"WEBM","video/x-mp4":"MP4|M4V","video/x-mpg4":"MP4|M4V","video/x-ms-asf":"ASF","video/x-ms-wmv":"WMV","video/x-msvideo":"AVI","video/x-flash-video":"FLV","video/x-flv":"FLV","audio/3gpp":"3GP|3GPP","audio/3gpp2":"3GP|3GPP","audio/mp3":"MP3","audio/mp4":"M4A|MP4","audio/mp4a-latm":"M4A|MP4","audio/mpeg":"MP3","audio/mpeg4-generic":"M4A|MP4","audio/webm":"WEBM",
"audio/wav":"WAV","audio/x-mpeg":"MP3","audio/x-ms-wma":"WMA","audio/x-wav":"WAV","ilm/tm":"MP3","image/gif":"GIF|GFA","image/icon":"ICO|CUR","image/jpg":"JPG|JPEG","image/jpeg":"JPG|JPEG","image/png":"PNG|APNG","image/tiff":"TIF|TIFF","image/vnd.microsoft.icon":"ICO|CUR","image/webp":"WEBP","image/x-icon":"ICO|CUR","flv-application/octet-stream":"FLV"};function p(){this.b=this.constructor.prototype.d++}p.prototype.d=1;function s(a,c,b,d){this.id=a;this.port=c;this.b=b;this.url=d}s.prototype.a=0;
function ha(a,c,b){this.id=a;this.g=c||null;this.url=null;this.o=b}function v(a,c,b,d,e,f){if(a){b=["MSG#",a,"#",c,"#",b,"#",d];this.d=a;this.type=c;this.e=d;this.a=e||[];this.f=b;if(e)for(a=0;a<e.length;a++)b.push(":",e[a]||0);if(f)for(var g in f)if(e=f[g],null!=e)if(b.push(",",g,"="),"number"==typeof e)b.push(e);else{c=a=e.length;for(d=0;d<c;){var h=e.charCodeAt(d++);128<=h&&(2048<=h?(a+=2,h-55296&56320||d++):a++)}b.push(a,":",e)}}else this.c=new FileReader}
function ia(a){a.H||(a.f.push(";"),a.H=!0);return new Blob(a.f)}function w(a,c,b){a.H?a.k(a):(c.a=b||0,c.b=0,a.c.onload=a.Ba.bind(a,c),x(a,c,0,50))}l=v.prototype;
l.Ba=function(a){for(var c=this.c.result;;)switch(a.b){case 0:var b=c.split(",",2),d=b.shift().split(":",2),e=d.shift();if(!d.length){if(!b.length)return this.k(this);a.b=1}var f=e.length+1,d=e.split("#",6);if(5!=d.length||"MSG"!=d[0])return this.k(this);this.d=parseInt(d[1]);this.type=parseInt(d[2]);this.e=parseInt(d[4]);c=c.slice(f);a.a+=f;a.b++;break;case 1:d=c.split(",",2);e=d.shift();if(!d.length){d=c.split(";",2);if(2>d.length)return x(this,a,c.length,100);a.b=4}f=e.length+1;this.a=d=e.split(":");
for(e=0;e<d.length;e++)b=d[e],d[e]=0>b.indexOf(".")?parseInt(b):parseFloat(b);c=c.slice(f);a.a+=f;a.b++;break;case 2:b=c.split(",",2);2>b.length&&(b=c.split(";",2));var d=b.shift().split(":",2),g=d.shift(),f=g.length,e=!1;if(d.length)f++;else{if(!b.length)return x(this,a,c.length,25);e=!0}d=g.split("=",3);if(2!=d.length)return this.k(this);b=parseInt(d[0]);d=parseInt(d[1]);a.a+=f;a.b++;if(e){this[b]=d;c=c.slice(f);a.b++;break}a.d=b;a.c=d;c=a.c;f=a.a;a=a.slice(f,f+c);a.size==c?this.c.readAsText(a):
this.k(this);return;case 3:return this[a.d]=c,a.a+=a.c,a.b++,x(this,a,0,21);case 4:switch(c[0]){case ",":a.b=2;c=c.slice(1);break;case ";":a.b++;break;default:return this.k(this)}a.a++;break;case 5:this.H=!0;this.A(this);a.size>a.a&&(c=new v,c.A=this.A,c.k=this.k,w(c,a,a.a));return}};function x(a,c,b,d){var e=c.a;b=e+b;c.size>b?a.c.readAsBinaryString(c.slice(e,b+d)):a.k(a)}l.h=null;l.A=null;l.k=null;l.H=!1;
function y(){var a=this.constructor.prototype,c;for(c in a)this[c]=a[c].bind(this);if(a=navigator.userAgent.match(/(\bChrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)\b)(?:.*?(\b(?!Safari\/)\w+\/[\d\.]+\b))?/))this.qa=a[2]<<24|a[3]<<22|a[4]<<8|a[5],this.ua=a[1],this.sa=a[6]||a[1],this.na=[],this.F=!1,this.b={},this.i={},this.a={},this.c={},this.g={},this.d={},this.e={},this.s={},this.O="",this.t=null,this.Q=!0,this.pa=this.va=1,this.f=null,this.K=1,this.m=!1,this.u=this.oa=0,this.la=null,this.L=this.ka=!1,chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_link"),
contexts:["link"],onclick:this.wa}),chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_all"),contexts:["page"],onclick:this.X}),this.ta=chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_selected"),contexts:["selection"],onclick:this.X}),chrome.windows.onCreated.addListener(this.fa),chrome.windows.onRemoved.addListener(this.ga),chrome.windows.onFocusChanged.addListener(this.Ma),chrome.tabs.onActivated.addListener(this.Ha),chrome.tabs.onUpdated.addListener(this.Ja),
chrome.tabs.onAttached.addListener(this.Ia),this.W(),chrome.windows.getAll(null,this.za)}function z(a,c,b,d,e){var f=a.d[c];return f?f:a.d[c]=new s(c,b,d,e)}function A(a,c){var b=a.g[c];b&&delete a.g[c];return b}l=y.prototype;l.W=function(){var a=new WebSocket("ws://127.0.0.1:1001/","plugin.v3.internetdownloadmanager.com");this.V=a;a.onopen=this.ba;a.onclose=this.M;a.onmessage=this.Ga;1==a.readyState?this.ba():3==a.readyState&&this.M()};
l.ba=function(){this.m=!0;this.oa=0;this.pa=1;var a={};a[112]=this.sa;a[113]=this.ua;a[114]="Chrome_RenderWidgetHostHWND";B(this,2,0,[3,1,7,0],a)};l.M=function(){this.V=null;if(this.m){this.m=!1;this.s={};for(var a;a=this.na.shift();){var c=a.shift();c.removeListener.apply(c,a)}this.F=!1}this.Q&&this.I();10>++this.oa&&window.setTimeout(this.W,6E4)};l.Ga=function(a){var c=new v;c.A=this.Da;c.k=this.M;w(c,a.data)};
function B(a,c,b,d,e){if(!a.m)return!1;var f=a.pa++;c=new v(f,c,1,b,d,e);a.V.send(ia(c));b&1&&(a.s[f]=c);return!0}
function C(a,c){var b=a.e;if(c.a){var d=c.a[6],e=d&&b[d];if(e){var f=e.type;return!f||"image"==f||e.B?(c.h=e.port.id,c.g=d,!0):!1}}var g=a.a,h=a.d,k=c[6],m=c[17],n=c[50],t=c[7],r,q;for(d in b){var e=b[d],u=e.url;if(u==k||u==m)if(f=e.type,!f||"image"==f||e.B)return c.h=e.port.id,c.g=parseInt(d),!0;u==n&&(q=e.port.id)}for(d in h){b=h[d];u=b.url;if(u==k||u==m||u==n)if(e=b.port,t&&(f=g[e.tabId])&&f.url!=t&&(e=null),e)return c.h=e.id,!0;u==t&&(r=b.port.id)}return q||r?(c.h=q||r,!0):!1}
l.Y=function(a,c,b){if(b){if(b=(c=b.shift())&&this.a[c.id])a.h=b.id}else if(!a.h){if(a.a){var d=a.a[7];if(d&&this.i[d]){a.h=d;return}}if(!C(this,a)){var e=this.i,f=a[50],g=a[7];for(d in e){b=e[d];if(b.url==f){a.h=d;break}a.h||b.url!=g||(a.h=d)}!a.h&&g&&chrome.tabs.query({url:g},D(this,a,c))}}};
l.J=function(a,c,b){if(void 0===c)0<a.tabId&&(a.a||!a.url?a.postMessage([11,a.tabId,null,null,!a.url]):chrome.webNavigation.getAllFrames({tabId:a.tabId},D(this,a,!0)));else if(b)for(c=b.length-1;0<=c;c--){var d=b[c];if(!d.Oa&&d.url==a.url){b=a.tabId;c=d.frameId;d=d.parentFrameId;if(0<c){var e=b+"."+c;this.a[e]=a;a.frameId=c;a.i=e}0<=d&&(a.d=d?b+"."+d:b);if(e=this.a[b])if(e=e.b[c]){var f=e.o,d=e.g;f&&a.url!=f&&(a.o=f);0<=d&&null==a.d&&(a.d=d?b+"."+d:b)}a.postMessage([11,b,c,d,!1]);break}}};
l.R=function(a,c,b,d){var e=E(a,!0);if(!e)return 0;if(1==e&&void 0===d)return chrome.cookies.getAll({url:a},D(this,a,c,b)),-1;"object"==typeof d&&(d=F(d));var e=[e],f={};f[6]=a;f[8]=b;f[51]=d;f[54]=navigator.userAgent;f[7]=c;B(this,14,0,e,f);return 3};
l.ma=function(a,c,b,d,e){if(!d){if(!a||!a.length)return;b||(b={});var f=new G(this,a,c,b,!0);b.ra&&!b.ia&&chrome.cookies.getAll({url:b.ra},H(f,4));for(var g=0;g<a.length;g++)chrome.cookies.getAll({url:a[g][0]},H(f,g+5));if(f.c())return}e&&(b.ia=F(e));for(g=0;g<a.length;g++)a[g][4]=F(arguments[g+5]);var f=0,g=[a.length],h={8:4};h[54]=navigator.userAgent;h[7]=b.ra;h[110]=b.p;h[111]=b.ia;1<a.length&&(B(this,15,f,g,h),f=16,h={});for(var g=[0],k;k=a.shift();)h[6]=k[0],h[102]=k[2],h[50]=k[3],h[51]=k[4],
B(this,14,f,g,h)};function I(a,c,b,d){(c=c[b])?(c=d?c.replace(/\./g,"\\.").replace(/\?/g,".").replace(/\*/g,".*").replace(/~/g,"(?:.*\\.)?"):c.replace(/\?/g,".").replace(/\*/g,".*"),c="^(?:"+c+")$"):c="(?!)";a.b[b]=new RegExp(c,"i")}
function J(a,c,b,d,e,f,g,h){if(!d||a.b[-8]){var k=a.a[c];if(k){var m;m=new p;m=a.g[m.b]=m;var n=m.b;m.tabId=c;m.port=k;m.i=b;m.c=0;m.m=[];if(k=d&&!!e)m.u=!0,m.s=e,m.f=f,m.g=g,m.zoom=h,e.a||K(a,e);e="^(?:http|https|ftp|ftps|rtmp|rtmpt|rtmpe|mms)://";d&&(d=a.b[12])&&(d=d.replace(/\./g,"\\."),d=d.replace(/\*/g,".*"),d=d.replace(/\~/g,"(?:.*\\.)?"),e=e+"(?:[^\\/]*@)?(?:"+d,e+=")(?::\\d+)?(?:\\W|$)");m.e=L(a,c,[12,n,b,k,e]);m.t=0;m.e||A(a,n)}}}
function M(a,c){var b=c.C,d=c.statusCode,e=c.B;if(!e&&!a.b[-9]||!b&&200!=d&&206!=d)return 1;var f=N(c.responseHeaders,"Content-Type"),g=N(c.responseHeaders,"Content-Disposition"),h=O(f).toLowerCase(),d="attachment"==O(g).toLowerCase();if(!b&&!d&&"text/html"==h)return 1;var k=c.url,f=P(g,"filename")||P(f,"name"),m=!1,g=!1;f?m=g=!0:f=Q(k);var n=R(f).toUpperCase(),t=b,r=!1;if(!b){if(!m){var q=ga[h];if(q)if(q=q.split("|"),n&&0<=q.indexOf(n))m=!0;else if(e||!n)n=q.shift(),m=!0;if(!n)if(e&&(q=N(c.responseHeaders,
"Server"))&&"gvs"==q.toLowerCase().split(" ",1).shift()&&"videoplayback"==f)r=!0;else return 1;!n||m||!d&&h&&a.b[10].test(h)}if(e&&"ASF"==n){if((h=N(c.responseHeaders,"Content-Length"))&&102400>=parseInt(h))return 1;q=N(c.responseHeaders,"Server");if("DCLK-AdSvr"==q)return 1}e&&a.b[3].test(n)?r=!0:a.b[1].test(n)&&(t=e?!(a.b[-4]||a.b[4].test(n)):!0)}if(!t&&!r)return 1;h=r?a.b[11]:b?null:a.b[9];k=new URL(k);if(h&&h.test(k.hostname))return 1;c.ya=n;c.fileName=g?f:null;return a.sendRequest(c,t?2:4,b?
2052:(g||d?16:8)|(r?256:e?4096:0))?t?3:2:0}
l.sendRequest=function(a,c,b){var d=a.requestHeaders,e=a.responseHeaders,f=a.ha,g=a.timeStamp,h=4>c?1:0;c=[parseInt(a.requestId),a.port&&a.port.id,Math.floor(g/1E3),Math.floor(g%1E3*1E3),a.P&31,c];g={};g[6]=S(a.url);g[17]=a.o;g[4]=a.ya;g[100]=a.fileName;g[8]=b|("POST"==a.method?512:0);g[11]=T(d);g[13]=T(e);g[18]=T(f);a.G&&(g[14]=U(a.G,N(d,"Content-Type")));a.N&&(g[19]=U(a.N,N(f,"Content-Type")));if(a=this.a[a.tabId])g[7]=a.url,g[110]=a.title;return B(this,13,h,c,g)};
function V(a,c){delete a.e[c]}function W(a){if(a.m)return!0;a.t?window.confirm(chrome.i18n.getMessage("confirm_idm_not_detected"))&&chrome.tabs.create({url:a.t}):window.alert(chrome.i18n.getMessage("alert_idm_not_detected"));return!1}l.r=function(a,c,b){if(4294967295==a)this.f=null,b=!0;else{var d=this.d[a];if(d){b=d.a;if(!b)return;if(c)switch(b){case 3:return;case 2:break;default:d.a=3;window.setTimeout(this.r.bind(null,a,!1,!0),1E3);return}d.a=0;b=!0}}b&&B(this,8,32,[a])};
function X(a,c,b,d){var e=a.d[c],f=256;2==e.a&&(d?(f|=128,e.a=1):f|=64);var g,h,k,m,n;b&&(g=b.left,h=b.top,k=b.right||g+1,m=b.bottom||h+1,n=b.zoom,b=e.port.c)&&(g+=b.left,h+=b.top,k=Math.min(k+b.left,b.right),m=Math.min(m+b.top,b.bottom));B(a,9,f,[c,g,h,k,m,n])}
l.v=function(a){var c=this.c,b=[];if(a)(a=c[a])&&(a.n||a.q||b.push(a.l));else for(var d in c)a=c[d],a.n||a.q||b.push(a.l);if(b.length){c=[15,null,null];a={};var e=this.d;for(d in e){var f=e[d];f.a&&0<=b.indexOf(f.port.tabId)&&(f.b?(f=f.port,f.a||K(this,f,null,a),c[2]=d,f.postMessage(c)):X(this,d,null,!0))}}};function Y(a,c,b){if((c=a.c[c])&&!c.q){c=c.l;var d=b?0:2;b=b?32:64;var e=a.d,f;for(f in e){var g=e[f];g.a&&g.port.tabId==c&&g.a!=d&&(g.a=d,B(a,8,b,[f]))}}}
function Z(a,c,b,d){var e=a.u,f=(e&c)!=((b?63:32)&c);a.u=b?e|=c:e&=~c;f&&(b=a.b[-1],c=a.b[-2],b=a.ka=0!=b&&(e&b)==b,e=a.L=0!=c&&(e&c)==c,a.la=(b||e)&&d||null)}l.Na=function(a,c){var b=this.c[a];b&&(b.q=null,c&&(chrome.windows.get(a,null,this.w),chrome.tabs.query({windowId:a,active:!0},this.w)),this.v(a))};
l.w=function(a){a instanceof Array&&(a=a.shift());if(a&&(!a.url||"chrome:"!=a.url.substr(0,7))){var c=a.windowId||a.id,b=this.c[c];if(b){if(a.windowId)b.l=a.id,a.width&&(b.T=a.width),a.height&&(b.S=a.height);else{var d="fullscreen"==a.state,e=d!=b.n;b.width=a.width;b.height=a.height;b.left=a.left;b.top=a.top;b.Aa="maximized"==a.state;b.n="fullscreen"==a.state;e&&(d?Y(this,c):this.v(c))}a=b.scale;d=(b.width-b.T)/2;e=b.height-b.S-d;b.border=Math.round(d*a);150>=e&&(b.U=Math.round(e*a));(b=this.c[c])&&
b.D&&(a=b.border,d=b.scale,B(this,7,0,[c,a,b.U,Math.round(b.width*d)-a,Math.round(b.height*d)-a]))}}};function K(a,c,b,d){a=a.a;b=[16,b];for(var e=[c],f;f=a[c.d];c=f){if(d)if(d[c.id])break;else d[c.id]=!0;e.push(f)}for(f=e.pop();c=e.pop();f=c)d=c.xa,b[2]=d,b[3]=c.frameId,b[4]=d?null:c.url,b[5]=d?null:c.o,f.postMessage(b)}function L(a,c,b){a=a.a;var d=0,e;for(e in a)parseInt(e)==c&&(a[e].postMessage(b),d++);return d}
l.Z=function(a){var c={file:"content.js",runAt:"document_start",allFrames:!0};620756992<this.qa&&(c.matchAboutBlank=!0);if(a instanceof Array)for(;a.length;)try{chrome.tabs.executeScript(a.shift().id,c)}catch(b){}else try{chrome.tabs.executeScript(a.id||a,c)}catch(d){}};function ja(a,c){var b=a.c[c];b&&null==b.D&&B(a,6,17,[c,0,b.width,b.height,b.left,b.top,b.scale])}l.za=function(a){for(;a.length;)this.fa(a.shift(),!0)};l.wa=function(a){W(this)&&this.R(a.linkUrl,a.pageUrl,4)};
l.X=function(a,c){var b=a.menuItemId==this.ta;W(this)&&J(this,c.id,b)};l.Ea=function(a){var c=a.sender.tab;if(c){var b=a.m||this.va++,d=c.id,e="top"==a.name;a.id=b;a.tabId=d;a.windowId=c.windowId;a.e=!0;a.f=!1;a.a=e;a.frameId=e?0:null;a.i=e?d:null;a.url=a.sender.url||e&&c.url||null;a.o=null;e&&(a.b={});this.i[b]=a;e&&(this.a[d]=a);a.onMessage.addListener(this.Fa.bind(this,a));a.onDisconnect.addListener(this.aa);this.J(a)}};
l.aa=function(a){if(a.e){a.e=!1;var c=this.d,b=this.e,d=this.g,e;for(e in c)c[e].port===a&&(c[e].a&&this.r(e),delete c[e]);for(e in b)b[e].port===a&&delete b[e];for(e in d)d[e].port===a&&delete d[e];delete this.a[a.i];delete this.i[a.id];this.la===a&&Z(this,63,!1)}};
l.Fa=function(a,c){switch(c[0]){case 21:var b=c[1];b&&(a.url=b,null==a.frameId&&this.J(a));break;case 22:var d=this.a,e=d[a.tabId+"."+c[2]],b=c[4];e.xa=c[3];e.c=b;if(d=d[e.g])if(d=d.c)b.left+=d.left,b.top+=d.top,b.right=Math.min(b.right+d.left,d.right),b.bottom=Math.min(b.bottom+d.top,d.bottom);break;case 23:var b=a.windowId,f=a.tabId,g=c[1],d=c[2]||f,e=c[4],h=this.c[b];if(g){if(g=A(this,g)){f=f==h.l&&!h.n;if(h=c[7])g.a&&g.p&&g.a!=g.p||(g.a=h),g.p=h;var k=z(this,d,a,c[5],c[6]),m=f&&!k.a;k.a=f?1:2;
g instanceof v&&$(this,g,2,b,d,h);X(this,d,e);m&&window.setTimeout(this.v.bind(null,b),3E3)}}else c[3]?(this.r(d,!0),delete this.d[d]):e&&f==h.l&&!h.n&&X(this,d,e,!0);break;case 24:b=c[2];(d=this.g[c[1]])&&b&&(d.a&&d.p&&d.a!=d.p||(d.a=b),d.p=b);break;case 25:z(this,c[1],a,c[2],c[3]);break;case 26:J(this,a.tabId,!0,!0,a,c[1],c[2],c[3]);break;case 27:if(b=this.g[c[1]]){d=b.m;if(e=c[4])if("string"==typeof e&&(e=JSON.parse(e)),e instanceof Array){if(g=c[5])for(f=0;f<e.length;f++)e[f][3]=g;Array.prototype.push.apply(d,
e)}c[3]&&(b.c+=c[3]);c[6]&&(b.pageUrl=c[6]);c[7]&&(b.p=c[7]);++b.t<b.e||(A(this,b.b),b.u?(d=this.c[b.port.windowId])&&d.l==b.tabId&&b.c&&(b.frame=b.s.c,e=b.zoom,B(this,10,0,[4294967295,d.id,Math.round(b.f*e)+d.border,Math.round(b.g*e)+d.U,0,b.c]),this.f=b.tabId,L(this,b.tabId,[13,!0])):d.length?this.ma(d,b.i,b.F):window.alert(chrome.i18n.getMessage("cannot_find_links")))}break;case 28:this.r(4294967295);break;case 29:ka(this,a.windowId,a.tabId);break;case 30:ka(this,a.windowId,a.tabId,c[1],c[2]);
break;case 31:(b=ea[c[1]])&&Z(this,b,c[2],a);break;case 32:0==c[1]&&Z(this,32,c[2],a);break;case 33:Z(this,63,!1)}};
l.Da=function(a){var c=a.type,b=a.e,d=a.a,e;if(1==c){var f=d[0];if(e=this.s[f])c=e.type,delete this.s[f]}switch(c){case 3:if(b=d[4]){var b=b/96,g=this.qa;this.K=620756992>g?1:620756992<g&&621284967>g?b:637534208<g&&638078312>g?b:1.25<b?b:1;var b=this.c,g=this.K,h;for(h in b){var k=b[h],k=[h,k.D,k.width,k.height,k.left,k.top,k.scale=g];B(this,6,17,k)}}this.O=a[13]||"m"+d[2];this.Q&&this.I();break;case 4:h=this.b;h[-9]=0<(b&64);h[-8]=0<(b&32);h[-4]=0<(b&2);h[-1]=d[0];h[-2]=d[1];h[12]=a[12];I(this,a,
1);I(this,a,2);I(this,a,3);I(this,a,4);I(this,a,10);I(this,a,9,!0);I(this,a,11,!0);if(a=a[13])this.O=a;this.F||(this.F=!0,this.j(chrome.extension.onConnect,this.Ea),this.j(chrome.webNavigation.onCommitted,this.$),this.j(chrome.webNavigation.onHistoryStateUpdated,this.Ca),this.j(chrome.webRequest.onBeforeRequest,this.ca,{urls:["http://*/*"],types:["main_frame","sub_frame"]},["blocking"]),this.j(chrome.webRequest.onBeforeRequest,this.ca,{urls:["https://*/*"],types:["main_frame","sub_frame"]},["blocking",
"requestBody"]),this.j(chrome.webRequest.onBeforeSendHeaders,this.da,{urls:["http://*/*"],types:"object image main_frame sub_frame xmlhttprequest other".split(" ")},["requestHeaders"]),this.j(chrome.webRequest.onBeforeSendHeaders,this.da,{urls:["https://*/*"],types:"object image main_frame sub_frame xmlhttprequest other".split(" ")},["blocking","requestHeaders"]),this.j(chrome.webRequest.onHeadersReceived,this.ea,{urls:["http://*/*"],types:["image"]},["responseHeaders"]),this.j(chrome.webRequest.onHeadersReceived,
this.ea,{urls:["https://*/*"],types:"object image main_frame sub_frame xmlhttprequest other".split(" ")},["blocking","responseHeaders"]),this.j(chrome.webRequest.onResponseStarted,this.La,{urls:["<all_urls>"],types:"object image main_frame sub_frame xmlhttprequest other".split(" ")}),this.j(chrome.webRequest.onErrorOccurred,this.Ka,{urls:["<all_urls>"],types:"object image main_frame sub_frame xmlhttprequest other".split(" ")}));break;case 5:a=d[0];(d=this.c[a])?(h=0!=(b&128),d.n!=h&&(d.n=h)&&Y(this,
a)):this.ga(a);break;case 6:a=e.a[0];d=d[1];if(a=this.c[a])a.D=d;break;case 8:a=d[0];d=b&32;if(4294967295==a)L(this,this.f,[13,!1]),this.f=null;else if(a=this.d[a])a.a=d?0:2;break;case 11:a=d[0];4294967295==a&&(J(this,this.f,!0,!0),this.f=null);break;case 12:try{g=a.a[5];k=a[4];d=4==g?2:3;if((1==g||2==g)&&C(this,a)){if(this.b[3].test(k))1==g?d=4:g=4;else if(this.b[-4]||this.b[4].test(k))d=4;a[8]|=256}if(4==g){switch(a.a[4]){case 1:a[7]||(a[7]=a[50]);break;case 3:a[7]||(a[7]=a[32]),a[50]||(a[50]=a[31])}this.ja(a)}else $(this,
a,d)}catch(m){$(this,a,0)}break;case 1:break;default:!e&&b&1&&B(this,1,0,[a.d,0,0,0])}};l.ja=function(a,c){try{if(!c&&!a.h){var b=new G(this,a,!0);this.Y(a,b);if(b.c())return}var d=this.i[a.h];if(!d)return $(this,a,0);var e;var f=a.b;f||(f=p.prototype.d++,a.b=f,this.g[f]=a);e=f;if(!d.a){var g=this.a[d.tabId];g&&g.postMessage([14,e])}var h=[15,e,null,a[6],a[17],a[50],a[31]];d.a||K(this,d,e);d.postMessage(h)}catch(k){$(this,a,0)}};
function $(a,c,b,d,e,f){-1!=b&&(d=[c.d,b,d,e],e={},e[8]=c[8],f&&(e[110]=f),B(a,1,0!=b?2:4,d,e))}l.$=function(a,c){var b=a.tabId,d=a.frameId;0<d&&(d=b+"."+d);!(d=this.a[d||b])||c&&a.url==d.url||(d.disconnect(),this.aa(d),this.Z(b))};l.Ca=function(a){return this.$(a,!0)};
l.fa=function(a,c){var b=a.id;this.c[b]={id:b,width:a.width,height:a.height,left:a.left,top:a.top,scale:this.K,border:8,U:73,Aa:"maximized"==a.state,n:"fullscreen"==a.state,S:0,T:0,l:0,D:null,q:null};chrome.tabs.query({windowId:b,active:!0},this.w);chrome.tabs.query({windowId:b},this.Z);c&&ja(this,b)};l.ga=function(a){B(this,5,32,[a]);delete this.c[a]};l.Ma=function(a){ja(this,a)};
l.Ja=function(a,c,b){var d=b.windowId,e=this.c[d];e&&!e.l&&this.w(b);"complete"==c.status&&(a=this.a[a])&&!a.f&&(a.f=!0,this.v(d))};l.Ha=function(a){this.u=0;this.f&&this.r(4294967295);var c=a.windowId;a=a.tabId;var b=this.c[c];b&&(Y(this,c),b.l=a,chrome.tabs.get(a,this.w),this.v(c))};l.Ia=function(a,c){var b=c.Qa,d=this.i,e;for(e in d)(port=d[e])&&port.tabId==a&&(port.windowId=b);Y(this,b,!0)};
function ka(a,c,b,d,e){a.f&&a.r(4294967295);var f=a.c[c];f&&f.l==b&&(d&&(f.T=d),e&&(f.S=e),Y(a,c),f.q&&window.clearTimeout(f.q),f.q=window.setTimeout(a.Na.bind(null,c,d||e),250))}
l.ca=function(a){var c=a.tabId;if(!(0>c)){var b=a.url,d=E(b);if(aa.test(b))return a=this.a[c],this.R("idmreg"+b.substr(b.indexOf(":")),a&&a.url),{redirectUrl:chrome.extension.getURL("captured.html")};if("sub_frame"==a.type){var c=this.a[c],e=a.frameId;c&&0<e&&!c.b[e]&&(c.b[e]=new ha(e,a.parentFrameId,b))}if(!this.L&&d&128&&"POST"==a.method&&a.requestBody){b=a.requestId;d=a.requestBody;if(c=d.raw)for(e=0;e<c.length&&(c[e].bytes||(c=null));e++);if(c||d.formData)(c=this.e[b])?c.requestBody=d:this.e[b]=
a}}};
l.da=function(a){var c=a.tabId;if(0<c){var b=a.requestId,d=a.url,e=a.method,f=E(d);if(!f||"GET"!=e&&"POST"!=e)return V(this,b);a.C=this.ka;a.a=this.L;var g=this.e[b];g&&(a.port=g.port,a.G=g.requestBody,g.P&&(a.o=g.o||g.url,a.ha=g.ha||g.requestHeaders,a.N=g.N||g.G,a.C=g.C,a.a=g.a));var g=a.C,h=a.type,k="main_frame"==h||"sub_frame"==h;if(!a.port){var m=0<a.frameId?c+"."+a.frameId:0;if(!(a.port=m&&this.a[m]||this.a[c])&&!k)return V(this,b)}if("POST"==e&&f&128&&!a.G||!g&&k&&0>d.indexOf("?")&&(c=Q(d),
(c=R(c).toUpperCase())&&this.b[2].test(c)))return V(this,b);0<=d.indexOf("#")&&(a.url=S(d));a.P=f;a.B=0<=da.indexOf(h);this.e[b]=a;if(g&&f&128&&3==M(this,a))return{cancel:!0}}};
l.ea=function(a){var c=a.requestId,b=this.e[c];if(b){if("image"==b.type){var d=N(a.responseHeaders,"Content-Type");if(d&&"image/"==d.substr(0,6).toLowerCase())return V(this,c)}if(!b.a&&b.P&128&&(c=parseInt(a.statusLine.split(" ",2).pop()),b.statusCode=c,b.statusLine=a.statusLine,b.responseHeaders=a.responseHeaders,3==M(this,b)))return{responseHeaders:[{name:"Connection",value:"close"},{name:"Content-Type",value:"multipart/related"},{name:"Content-Length",value:"0"}]}}};
l.La=function(a){a=a.requestId;var c=this.e[a];if(c){if("sub_frame"==c.type){var b=this.a[c.tabId];if(b=b&&b.b[c.frameId])b.url=c.url}c.B?this.e[a]={url:c.url,port:c.port}:V(this,a)}};l.Ka=function(a){V(this,a.requestId)};
l.I=function(a,c,b,d,e){if(void 0===e&&(this.Q=!1,e=new G(this),chrome.app?a=chrome.app.getDetails():chrome.management.get(chrome.i18n.getMessage("@@extension_id"),H(e,0)),chrome.storage?chrome.storage.local.get("version",H(e,1)):window.localStorage&&(c=window.localStorage.getItem("version")||""),chrome.extension.isAllowedIncognitoAccess(H(e,2)),chrome.management.get("jeaohhlajejodfjadcponpnjgkiikocn",H(e,3)),e.c(a,c,b,d,!0)))return;"object"==typeof a&&(this.t=a.Pa||a.homepageUrl,a=a.version||"");
"object"==typeof d&&(d=d.enabled&&d.version||"");d&&chrome.management.setEnabled("jeaohhlajejodfjadcponpnjgkiikocn",!1);"object"==typeof c&&(c=c.version||"");a&&a!=c&&null!=c&&(chrome.storage?chrome.storage.local.set({version:a}):window.localStorage.setItem("version",a),d=this.O,d&&c||(a="current="+a,c&&(a+="&previous="+c),b&&(a+="&incognito=1"),d&&(a+="&manager="+d),chrome.tabs.create({url:chrome.extension.getURL("welcome.html?"+a)})))};
l.j=function(a){var c=Array.prototype.slice.call(arguments);this.na.push(c);a.addListener.apply(a,c.slice(1))};function G(a){this.caller=arguments.callee.caller;this.d=a;this.b=Array.prototype.slice.call(arguments,1);this.a=0}function H(a,c){a.a++;return a.f.bind(a,c)}G.prototype.c=function(){return this.a?(arguments.length&&(this.b=Array.prototype.slice.call(arguments)),!0):!1};G.prototype.f=function(a,c){this.b[a]=c;0==--this.a&&this.caller.apply(this.d,this.b)};
G.prototype.e=function(a,c,b){var d=Array.prototype.slice.call(arguments,3);b&&(d=b.concat(d));a.apply(c,d);this&&0==--this.a&&this.caller.apply(this.d,this.b)};function D(a){var c=Array.prototype.slice.call(arguments,1),b=c[c.length-1];b instanceof G?b.a++:b=null;return G.prototype.e.bind(b,arguments.callee.caller,a,c)}function S(a){var c=a.lastIndexOf("#");return 0>c||c<a.indexOf("?")?a:a.substr(0,c)}function F(a){var c="",b;for(b in a)c&&(c+="; "),c+=a[b].name,c+="=",c+=a[b].value;return c}
function T(a){if(!a||!a.length)return null;for(var c="",b=0;b<a.length;b++)c+=a[b].name,c+=": ",c+=a[b].value,c+="\n";return c}function N(a,c){if(!a)return null;c=c.toLowerCase();for(var b in a)if(a[b].name.toLowerCase()==c)return a[b].value;return null}
function P(a,c){if(!a)return null;c=c.toLowerCase();var b=a.split(";");b.shift();for(var d in b){var e=b[d],f=e.indexOf("=");if(0<f){var g=e.substr(0,f).trim().toLowerCase(),h="*"==g[g.length-1];h&&(g=g.substr(0,g.length-1).trimRight());if(g==c)return b=e.substr(f+1).trim(),d=b.length-1,'"'==b[0]&&'"'==b[d]&&(b=b.substring(1,d)),h&&(b=b.split("'",3).pop()),unescape(b)}else if(0>f&&e.trim().toLowerCase()==c)return""}return null}function O(a){return a&&unescape(a.split(";",1).shift().trim())||""}
function U(a,c){if(!a)return null;var b=a.raw;if(b){for(var d=String.fromCharCode,e="",f=0;f<b.length;f++){var g=b[f].bytes;if(!g)return null;for(var g=new Uint8Array(g),h=g.length,k=0;k<h;k++)e+=d(g[k])}return e}b=a.formData;if(!b)return null;f=O(c).toLowerCase();e=[];if("application/x-www-form-urlencoded"==f)for(d in b)for(g=b[d],d=d.split(" ").map(encodeURIComponent).join("+"),f=0;f<g.length;f++)e.length&&e.push("&"),e.push(d,"=",g[f].split(" ").map(encodeURIComponent).join("+"));else if("multipart/form-data"==
f){(h=P(c,"boundary"))||(h="----WebKitFormBoundary"+Math.random().toString(36).substr(2));for(d in b)for(g=b[d],f=0;f<g.length;f++)e.push("--",h,'\r\nContent-Disposition: form-data; name="',d,'"\r\n\r\n',g[f],"\r\n");e.push("--",h,"--\r\n")}else return null;return e.join("")}function R(a){return(a=ca.exec(a))?a[1]:""}function E(a,c){var b=a.split("://",1).shift().toLowerCase(),b=fa[b]||0;return c?b&31:b}function Q(a){return(a=ba.exec(a))?a[1]:""}new y;