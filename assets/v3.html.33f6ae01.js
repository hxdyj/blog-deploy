import{e}from"./app.24627d88.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h1 id="vue3-0-\u6E90\u7801\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#vue3-0-\u6E90\u7801\u9605\u8BFB" aria-hidden="true">#</a> Vue3.0 \u6E90\u7801\u9605\u8BFB</h1><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2><h3 id="effectstack" tabindex="-1"><a class="header-anchor" href="#effectstack" aria-hidden="true">#</a> effectStack</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let vr = VueReactivity;
let counter = vr.reactive({ num: 0 });
let counter1 = vr.reactive({ num: 0 });
const numSpy = () =&gt; {
counter.num = counter1.num + 1;
};
const numSpy1 = () =&gt; {
counter1.num = counter.num + 1;
};
vr.effect(numSpy);
vr.effect(numSpy1);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u53BB\u6389 effectStack</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u5C31\u4F1A loops</p></div>`,5);function r(t,c){return s}var l=n(a,[["render",r]]);export{l as default};
