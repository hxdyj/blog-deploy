import{r as a,a as p,c as t,f as n,b as e,F as o,e as r,g as l}from"./app.dc3b6072.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=r(`<h2 id="\u5982\u4F55\u7528-css3-\u505A\u73AF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7528-css3-\u505A\u73AF\u56FE" aria-hidden="true">#</a> \u5982\u4F55\u7528 CSS3 \u505A\u73AF\u56FE</h2><p>\u4EE3\u7801\u5730\u5740 <a href="/files/css3%E7%8E%AF%E5%9B%BE.zip">css3 \u73AF\u56FE.zip</a> \u5C0F\u7A0B\u5E8F\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">getStyleByObj</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">computedRate</span><span class="token punctuation">(</span><span class="token parameter">accuracy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>accuracy <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">computedColor</span><span class="token punctuation">(</span><span class="token parameter">rate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rate <span class="token operator">=</span> rate <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> green <span class="token operator">=</span> <span class="token string">&quot;#0FD36C&quot;</span><span class="token punctuation">,</span>
    blue <span class="token operator">=</span> <span class="token string">&quot;#0089FF&quot;</span><span class="token punctuation">,</span>
    yellow <span class="token operator">=</span> <span class="token string">&quot;#FFCB00&quot;</span><span class="token punctuation">,</span>
    red <span class="token operator">=</span> <span class="token string">&quot;#FE5F69&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;=</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> rate <span class="token operator">&lt;</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> rate <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">addGlobalClass</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">percent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> rate <span class="token operator">=</span> <span class="token function">computedRate</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          rate<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token function">computedColor</span><span class="token punctuation">(</span>rate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* \u8D85\u8FC7\u8FB9\u754C */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;</span> <span class="token number">50</span> <span class="token operator">&amp;&amp;</span> rate <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> deg <span class="token operator">=</span> <span class="token punctuation">(</span>rate <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3.6</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rotate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>deg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">deg)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">==</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> rate <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> deg <span class="token operator">=</span> rate <span class="token operator">*</span> <span class="token number">3.6</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rotate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>deg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">deg)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>rate <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">[</span><span class="token string">&quot;border-color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bgColor<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          color<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&quot;#EDEFF3&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chartStyle</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">beforeStyle</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">afterStyle</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progressStyle</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chart</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">float</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;relative&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;text-align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clip</span><span class="token operator">:</span> <span class="token string">&quot;rect(0,auto,auto,40px)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clip</span><span class="token operator">:</span> <span class="token string">&quot;rect(0,auto,auto,40px)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">initVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">chart</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">float</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;relative&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;text-align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clip</span><span class="token operator">:</span> <span class="token string">&quot;rect(0,auto,auto,40px)&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&quot;6px solid&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clip</span><span class="token operator">:</span> <span class="token string">&quot;rect(0,auto,auto,40px)&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">chartStyle</span><span class="token operator">:</span> <span class="token function">getStyleByObj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>chart<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">beforeStyle</span><span class="token operator">:</span> <span class="token function">getStyleByObj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>before<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">afterStyle</span><span class="token operator">:</span> <span class="token function">getStyleByObj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>after<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">progressStyle</span><span class="token operator">:</span> <span class="token function">getStyleByObj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>progress<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br></div></div><div class="language-wxml ext-wxml line-numbers-mode"><pre class="language-wxml"><code>&lt;view style=&quot;corlor:red;{{chartStyle}}&quot;&gt;
  &lt;view style=&quot;{{beforeStyle}}&quot;&gt;&lt;/view&gt;
  &lt;view style=&quot;{{progressStyle}}&quot;&gt;&lt;/view&gt;
  &lt;view class=&quot;component-rate-panel&quot;&gt;
    &lt;view class=&quot;rate&quot; style=&quot;color:{{color}};&quot;&gt;{{rate}}%&lt;/view&gt;
    &lt;view class=&quot;text&quot;&gt;\u6B63\u786E\u7387&lt;/view&gt;
  &lt;/view&gt;
  &lt;view style=&quot;{{afterStyle}}&quot;&gt;&lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-wxss ext-wxss line-numbers-mode"><pre class="language-wxss"><code>.component-rate-panel {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0rpx;
  top: 0rpx;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.component-rate-panel .rate {
  font-family: PingFangSC-Semibold;
  font-size: 35rpx;
  color: #0089ff;
  letter-spacing: 0.16rpx;
  position: relative;
  left: 3rpx;
}

.component-rate-panel .text {
  font-family: PingFangSC-Regular;
  font-size: 18rpx;
  color: #9ea7b7;
  margin-top: 1rpx;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="canvas-\u753B\u4E00\u4E2A\u534A\u5706" tabindex="-1"><a class="header-anchor" href="#canvas-\u753B\u4E00\u4E2A\u534A\u5706" aria-hidden="true">#</a> Canvas \u753B\u4E00\u4E2A\u534A\u5706</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function drawScreen(myCanvas, r, lw, lr, rr, g) {
	// x,y =&gt; \u5706\u5FC3\u5750\u6807\u70B9
	// r =&gt; \u5706\u5F27\u534A\u5F84
	var arc = {
		x: myCanvas.width / 2,
		y: myCanvas.height / 2 + 16,
		r: (myCanvas.height - r) / 2
	}
	var ctx = myCanvas.getContext(&#39;2d&#39;)
	ctx.save()
	ctx.lineWidth = lw

	if (g) {
		//\u8BA1\u7B97\u6E10\u53D8\u8D77\u59CB\u5750\u6807
		let L = Math.sqrt(Math.pow(arc.r, 2) / 2)
		let gx0 = arc.x - L
		let gy0 = arc.y + L
		/* \u6307\u5B9A\u6E10\u53D8\u533A\u57DF */
		var grad = ctx.createLinearGradient(
			arc.x - L,
			arc.y + L,
			arc.x - L,
			arc.y
		)
		grad.addColorStop(1, &#39;#FEE891&#39;)
		grad.addColorStop(0, &#39;#FEB832&#39;)
		ctx.strokeStyle = grad
	} else {
		ctx.strokeStyle = &#39;#F2F3F8&#39;
	}

	// \u987A\u65F6\u9488\u65CB\u8F6C
	ctx.beginPath()
	ctx.arc(arc.x, arc.y, arc.r, getRads(lr), getRads(rr))
	ctx.stroke()
}
function getRads(degrees) {
	return Math.PI * degrees / 180
}
function getDegrees(rads) {
	return rads * 180 / Math.PI
}
export default {
	mounted: () =&gt; {
		//\u83B7\u53D6\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u8BA1\u7B97rem
		let fontSize = document.documentElement.style.fontSize
		CONST.fontSize = parseInt(fontSize.substring(0, fontSize.length - 2))
		CONST.width = document.body.clientWidth
		CONST.widthRem = CONST.width / CONST.fontSize
		drawScreen(document.getElementById(&#39;circle&#39;), 0, 6, 135, 45) //\u7ED8\u5236\u5916\u5C42\u7070\u8272
		drawScreen(document.getElementById(&#39;circle&#39;), 36, 1.5, 132, 48) //\u7ED8\u5236\u5185\u5C42\u7070\u8272
		drawScreen(document.getElementById(&#39;circle&#39;), 0, 6, 135, 200, true) //\u7ED8\u5236\u6E10\u53D8
	}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="flex-\u6A2A\u5411-margin-right-\u6700\u540E\u4E00\u4E2A\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#flex-\u6A2A\u5411-margin-right-\u6700\u540E\u4E00\u4E2A\u4E0D\u751F\u6548" aria-hidden="true">#</a> flex \u6A2A\u5411 margin-right \u6700\u540E\u4E00\u4E2A\u4E0D\u751F\u6548</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;relation-reason-item-panel&quot;&gt;
				&lt;div class=&quot;relation-reason-item&quot; v-for=&quot;&quot;&gt;
					&lt;div class=&quot;top&quot;&gt;
						&lt;img :src=&quot;$_img + &#39;page_book_detail_v2_icon_question.png&#39;&quot; alt class=&quot;icon&quot; /&gt;
						&lt;div class=&quot;question-title&quot;&gt;&lt;/div&gt;
					&lt;/div&gt;
					&lt;div class=&quot;nums&quot;&gt;234\u4E2A\u65B9\u6848 \xB7 \u8D852345\u4EBA\u5DF2\u9605\u8BFB\u8FC7&lt;/div&gt;
					&lt;img :src=&quot;$_img + &#39;page_book_detail_v2_bg_question.png&#39;&quot; alt class=&quot;bg&quot; /&gt;
				&lt;/div&gt;

				&lt;div style=&quot;width:0.1vw;flex-shrink:0&quot;&gt;&lt;/div&gt;
			&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u6700\u540E\u52A0\u4E00\u4E2A div shrink\uFF1A0 width \u6709\u4E00\u70B9\u5C31\u597D\u4E86</p><h2 id="flip\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#flip\u52A8\u753B" aria-hidden="true">#</a> flip\u52A8\u753B</h2>`,12),k={href:"https://aerotwist.com/blog/flip-your-animations/",target:"_blank",rel:"noopener noreferrer"},b=l("link");function m(y,d){const s=a("ExternalLinkIcon");return p(),t(o,null,[i,n("p",null,[n("a",k,[b,e(s)])])],64)}var f=c(u,[["render",m]]);export{f as default};
