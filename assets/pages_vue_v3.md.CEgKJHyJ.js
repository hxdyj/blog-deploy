import{_ as e,c as s,a2 as n,o as t}from"./chunks/framework.DPDg7N6I.js";const v=JSON.parse('{"title":"Vue3.0 源码阅读","description":"","frontmatter":{},"headers":[],"relativePath":"pages/vue/v3.md","filePath":"pages/vue/v3.md"}'),p={name:"pages/vue/v3.md"};function c(l,a,i,r,o,u){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="vue3-0-源码阅读" tabindex="-1">Vue3.0 源码阅读 <a class="header-anchor" href="#vue3-0-源码阅读" aria-label="Permalink to &quot;Vue3.0 源码阅读&quot;">​</a></h1><h2 id="reactive" tabindex="-1">reactive <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive&quot;">​</a></h2><h3 id="effectstack" tabindex="-1">effectStack <a class="header-anchor" href="#effectstack" aria-label="Permalink to &quot;effectStack&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let vr = VueReactivity;</span></span>
<span class="line"><span>let counter = vr.reactive({ num: 0 });</span></span>
<span class="line"><span>let counter1 = vr.reactive({ num: 0 });</span></span>
<span class="line"><span>const numSpy = () =&gt; {</span></span>
<span class="line"><span>counter.num = counter1.num + 1;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const numSpy1 = () =&gt; {</span></span>
<span class="line"><span>counter1.num = counter.num + 1;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>vr.effect(numSpy);</span></span>
<span class="line"><span>vr.effect(numSpy1);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">去掉 effectStack</p><p>这个例子就会 loops</p></div>`,5)]))}const m=e(p,[["render",c]]);export{v as __pageData,m as default};
