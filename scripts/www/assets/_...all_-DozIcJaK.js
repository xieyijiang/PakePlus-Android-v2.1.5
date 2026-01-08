
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as i,M as u,E as d,N as p,O as m,_ as f,s as x,o as v,p as r,x as a,G as w,w as N,L as g,F as B,H as b}from"./index-oMllnZjX.js";const k=i({__name:"[...all]",setup(l,{expose:t}){t();const n=u(),e=d({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),m(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){n.push("/")}const s={router:n,data:e,goBack:o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),I={class:"min-h-screen flex flex-col items-center justify-center"},h={class:"flex flex-col items-center gap-4"};function y(l,t,n,e,o,s){const c=w,_=g;return v(),x("div",I,[r(c,{name:"404",class:"text-[300px] -mt-9xl"}),a("div",h,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),r(_,{onClick:e.goBack},{default:N(()=>[B(b(e.data.countdown)+" 秒后，返回首页 ",1)]),_:1})])])}const F=f(k,[["render",y],["__file","/Users/crab7/develop/basic/src/views/[...all].vue"]]);export{F as default};
