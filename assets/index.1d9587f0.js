import{$ as y,d as h,r as p,w as S,o as l,c as d,a as B,v as I,u as f,b as v,i as T,e as x,f as E,t as u,n as j,g as A,h as k,p as z,j as L,k as N,l as w,m as M}from"./vendor.0897c7fe.js";const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}};O();const V="huli.li",q="1.3.1",D={name:"Orangii|\u6A59\u6893",email:"me@orangii.cn",url:"https://orangii.cn/"},J="T2DBZ-JTO3F-2G7JB-NXUR7-SNY3O-7TBAM",$="ed95368f5ed4427f9ad8594d5b1a6850",P=async()=>await y.ajax({type:"get",url:`https://apis.map.qq.com/ws/location/v1/ip?key=${J}&output=jsonp`,dataType:"jsonp",jsonpCallback:"callback"}),G=async({lat:a,lng:s})=>{var i;const e=new Date,r=e.getFullYear(),t=e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1,o=e.getDate()<10?`0${e.getDate()}`:e.getDate(),n=await y.ajax({type:"get",url:"https://devapi.qweather.com/v7/astronomy/sun",data:{key:$,location:`${s},${a}`,date:`${r}${t}${o}`}});return n.refer.sources&&n.refer.sources.length>0&&console.log(`\u65E5\u51FA\u65E5\u843D\u4FE1\u606F\u6765\u6E90\uFF1A${n.refer.sources.join(",")}\uFF0C\u8BB8\u53EF\u6216\u7248\u6743\u58F0\u660E\uFF1A${(((i=n.refer)==null?void 0:i.license)||[]).join(",")}`),n},R=async({lat:a,lng:s})=>{var r;const e=await y.ajax({type:"get",url:"https://devapi.qweather.com/v7/weather/now",data:{key:$,location:`${s},${a}`}});return e.refer.sources&&e.refer.sources.length>0&&console.log(`\u5929\u6C14\u4FE1\u606F\u6765\u6E90\uFF1A${e.refer.sources.join(",")}\uFF0C\u8BB8\u53EF\u6216\u7248\u6743\u58F0\u660E\uFF1A${(((r=e.refer)==null?void 0:r.license)||["\u65E0"]).join(",")}`),e};var m=(a,s)=>{const e=a.__vccOpts||a;for(const[r,t]of s)e[r]=t;return e};const Y={class:"the-container"},K=x('<label for="toggle" data-v-538b1fa8></label><div class="day-night-cont" data-v-538b1fa8><span class="the-sun" data-v-538b1fa8></span><div class="the-moon" data-v-538b1fa8><span class="moon-inside" data-v-538b1fa8></span></div></div><div class="switch" data-v-538b1fa8><div class="button" data-v-538b1fa8><div class="b-inside" data-v-538b1fa8></div></div></div><div class="c-window" data-v-538b1fa8><span class="the-sun" data-v-538b1fa8></span><span class="the-moon" data-v-538b1fa8></span><div class="the-fox" data-v-538b1fa8><div class="fox-face" data-v-538b1fa8><section class="eyes left" data-v-538b1fa8></section><section class="eyes right" data-v-538b1fa8></section><span class="nose" data-v-538b1fa8></span><div class="white-part" data-v-538b1fa8><span class="mouth" data-v-538b1fa8></span></div></div></div></div><p class="copyright" data-v-538b1fa8>\u4E00\u53EA\u72D0\u72F8\u72F8\u7684\u5C0F\u7A9D\uFF0C\u5B83\u4F1A\u544A\u8BC9\u4F60\u5929\u6C14\u7684\u54E6~</p><p class="copyright" style="opacity:.25;" data-v-538b1fa8>\u53E6\u5916\uFF0C\u672C\u57DF\u540D\u53EF\u51FA\u552E\uFF0C\u559C\u6B22\u72D0\u72F8\u72F8\u7684\u670B\u53CB\u53EF\u4EE5\u90AE\u4EF6\u8054\u7CFB\u6211\u54E6\uFF1A<a href="mailto:me@orangii.cn" data-v-538b1fa8>me@orangii.cn</a></p>',6),U=h({props:{isDaytime:{type:Boolean,default:!0}},setup(a){const s=a;let e=p(!s.isDaytime);return S(s,r=>e.value=!r.isDaytime),console.log("%cFox - CSS Switch - Day and Night%chttps://codepen.io/AngelaVelasquez/pen/cihEG","color: rgba(255,255,255,.8); background: #222; border-radius: 5px 0 0 5px; margin: 0; border: #222 1px solid; padding: .5em; font-weight: bold;","color: #222; border: 1px #222 solid; border-radius: 0 5px 5px 0; padding: .5em;"),(r,t)=>(l(),d("div",Y,[B(v("input",{type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=o=>T(e)?e.value=o:e=o)},null,512),[[I,f(e)]]),K]))}});var W=m(U,[["__scopeId","data-v-538b1fa8"]]);const H=a=>(z("data-v-37b6f5fc"),a=a(),L(),a),Q={id:"clock"},X={class:"time"},Z={key:0,class:"text"},ee={key:1,class:"text"},ae=H(()=>v("i",{class:"fas fa-sun",style:{"margin-right":".5em"}},null,-1)),te=h({props:{weather:null,sun:null},setup(a){let s=p("");const e=(o,n)=>{let i="";for(let g=0;g<n;g++)i+="0";return(i+o).slice(-n)},r=()=>{let o=new Date;s.value=`${e(o.getHours(),2)}:${e(o.getMinutes(),2)}:${e(o.getSeconds(),2)}`};r();const t=setInterval(r,1e3);return E(()=>clearInterval(t)),console.log("%cClock - Digital Clock with Vue.js%chttps://codepen.io/gau/pen/LjQwGp","color: rgba(255,255,255,.8); background: #222; border-radius: 5px 0 0 5px; margin: 0; border: #222 1px solid; padding: .5em; font-weight: bold;","color: #222; border: 1px #222 solid; border-radius: 0 5px 5px 0; padding: .5em;"),(o,n)=>{var i;return l(),d("div",Q,[v("p",X,u(f(s)),1),a.weather?(l(),d("p",Z,[v("i",{class:j({["qi-"+((i=a.weather)==null?void 0:i.now.icon)]:!0}),style:{"margin-right":".5em"}},null,2),A(u(a.weather.now.text)+", "+u(a.weather.now.temp)+"\u2103\uFF08\u4F53\u611F\u6E29\u5EA6"+u(a.weather.now.feelsLike)+"\u2103\uFF09,"+u(a.weather.now.windDir)+u(a.weather.now.windScale)+"\u7EA7\uFF0C\u76F8\u5BF9\u6E7F\u5EA6"+u(a.weather.now.humidity)+"% ",1)])):k("",!0),a.sun?(l(),d("p",ee,[ae,A("\u65E5\u51FA\uFF1A"+u(new Date(a.sun.sunrise).toLocaleTimeString())+" - \u65E5\u843D\uFF1A"+u(new Date(a.sun.sunset).toLocaleTimeString()),1)])):k("",!0)])}}});var oe=m(te,[["__scopeId","data-v-37b6f5fc"]]);const se={class:"footer"},re=x('<a href="https://orangii.cn" target="_blank" rel="noopener" style="color:#e4a240;" data-v-247c23fe>\xA9 Orangii</a><a href="https://myssl.com/huli.li" target="_blank" rel="noopener noreferrer" style="color:#66c18c;" data-v-247c23fe><i class="fas fa-lock" data-v-247c23fe>\xA0Safe</i></a><a href="https://orangii.cn/friends/" target="_blank" style="color:#e4a240;" data-v-247c23fe><i class="fas fa-link" data-v-247c23fe></i>\xA0\u53CB\u60C5\u8FDE\u63A5</a><a href="https://icp.gov.moe/?keyword=20225511" target="_blank" rel="noopener" style="color:#ee4866;" data-v-247c23fe><i class="moe-icp" data-v-247c23fe></i>\xA0\u840CICP\u590720225511\u53F7</a><a href="https://github.com/Jiaocz/huli.li" target="_blank" rel="noopener noreferrer" data-v-247c23fe><img src="https://img.shields.io/github/stars/Jiaocz/huli.li?style=social" alt="Github Star" data-v-247c23fe></a>',5),ne=[re],ie=h({setup(a){return(s,e)=>(l(),d("footer",se,ne))}});var ce=m(ie,[["__scopeId","data-v-247c23fe"]]);const ue={class:"container"},le=h({setup(a){let s=p(),e=p(!0),r=p(),t,o,n,i;const g=async()=>{await C(),i=new Date().getDay(),await F(),o=setInterval(F,60*60*1e3),await b(),await _(),n=setInterval(_,45*1e3)},C=async()=>{t=(await P()).result.location},F=async()=>{const c=await R(t);r.value=c},b=async()=>{const c=await G(t);s.value=c},_=async()=>{if(s.value){const c=new Date;c.getDay()!=i&&await b(),e.value=new Date(s.value.sunrise).getTime()<c.getTime()&&new Date(s.value.sunset).getTime()>c.getTime()}else b(),_()};return N(g),E(()=>{clearInterval(o),clearInterval(n)}),(c,pe)=>(l(),d("div",ue,[w(oe,{weather:f(r),sun:f(s)},null,8,["weather","sun"]),w(W,{"is-daytime":f(e)},null,8,["is-daytime"]),w(ce)]))}});var de=m(le,[["__scopeId","data-v-c7dbe2e2"]]);console.log(`%c${V}%chttps://huli.li/%chttps://github.com/Jiaocz/huli.li`,"color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .5em; font-weight: bold;","color: #e4a240; border: 1px #e4a240 solid; border-radius: 0; padding: .5em;","color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .5em;");console.log(`%cAuthor%c${D.name}%c${D.url}`,"color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .2em .4em; font-weight: bold; font-size: 12px;","color: #e4a240; border: 1px #e4a240 solid; border-radius: 0; margin: 0; padding: .2em .4em; font-size: 12px;","color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .2em .4em; margin: 0; font-size: 12px;");console.log(`%cVersion: %c${q}`,"color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .2em .4em; font-weight: bold; font-size: 12px;","color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .2em .4em; font-size: 12px;");M(de).mount("#app");
