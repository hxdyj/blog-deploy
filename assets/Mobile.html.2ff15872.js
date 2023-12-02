import{e as n}from"./app.dc3b6072.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<blockquote><p>note some js code in mobile</p></blockquote><h2 id="scroll-smooth" tabindex="-1"><a class="header-anchor" href="#scroll-smooth" aria-hidden="true">#</a> scroll smooth</h2><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// scrollSmooth.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> startY<span class="token punctuation">,</span> endY<span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> endTime
  <span class="token keyword">var</span> speedDecay <span class="token operator">=</span> <span class="token number">0.02</span> <span class="token comment">//\u901F\u5EA6\u8870\u51CF\u91CF</span>
  <span class="token keyword">var</span> lastMoveTime<span class="token punctuation">,</span> secondLastMoveTime <span class="token comment">//\u6700\u540E\u6B21\u624B\u6307\u505C\u6B62\u79FB\u52A8\u7684\u65F6\u95F4\u548C\u5012\u6570\u7B2C\u4E8C\u6B21\u624B\u6307\u505C\u6B62\u79FB\u52A8\u7684\u65F6\u95F4\uFF08\u6D4B\u8BD5\u7684\u65F6\u53D1\u73B0\u6709\u65F6\u5019\u6700\u540E\u4E00\u6B21\u79FB\u52A8\u65F6\u95F4\u4E0D\u51C6\u786E\uFF0C\u6545\u800C\u9009\u7528\u5012\u6570\u7B2C\u4E8C\u6B21\u505C\u6B62\u79FB\u52A8\u7684\u65F6\u95F4\uFF09</span>
  <span class="token keyword">var</span> stopMoveInterval <span class="token comment">//\u624B\u6307\u505C\u6B62\u6ED1\u52A8\u7684\u65F6\u95F4</span>

  <span class="token keyword">var</span> stopInertiaMove <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//\u505C\u6B62\u60EF\u6027\u6EDA\u52A8\u7684\u6807\u8BC6\u4F4D</span>

  <span class="token keyword">var</span> oldPageY <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">var</span> oldScrollTop <span class="token operator">=</span> <span class="token keyword">null</span>
  elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    oldScrollTop <span class="token operator">=</span> elem<span class="token punctuation">.</span>scrollTop
    stopInertiaMove <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//\u5F53\u60EF\u6027\u6ED1\u52A8\u8FC7\u7A0B\u4E2D\u518D\u6B21\u89E6\u78B0\u5230\u5C4F\u5E55\u7684\u65F6\u5019\u5E94\u8BE5\u7ACB\u5373\u505C\u6B62\u60EF\u6027\u6ED1\u52A8</span>
    startY <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY
    startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u4E2A\u4E8B\u4EF6\u4E3B\u8981\u7528\u6765\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u505C\u6B62\u6ED1\u52A8\u7684\u65F6\u95F4\uFF0C\u5F53\u505C\u6B62\u6ED1\u52A8\u65F6\u95F4\u8D85\u8FC7\u4E00\u5B9A\u91CF\u5C31\u4E0D\u6267\u884C\u60EF\u6027\u6ED1\u52A8</span>
    secondLastMoveTime <span class="token operator">=</span> lastMoveTime
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldPageY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6B63\u5E38\u901F\u5EA6\u6EDA\u52A8</span>
      <span class="token keyword">let</span> top <span class="token operator">=</span> oldScrollTop <span class="token operator">+</span> <span class="token punctuation">(</span>oldPageY <span class="token operator">-</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY<span class="token punctuation">)</span>
      elem<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> top
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldPageY<span class="token punctuation">)</span> oldPageY <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY

    lastMoveTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    oldPageY <span class="token operator">=</span> <span class="token keyword">null</span>
    endY <span class="token operator">=</span> e<span class="token punctuation">.</span>changedTouches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY
    endTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>secondLastMoveTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stopMoveInterval <span class="token operator">=</span> endTime <span class="token operator">-</span> secondLastMoveTime
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      stopMoveInterval <span class="token operator">=</span> endTime <span class="token operator">-</span> lastMoveTime
    <span class="token punctuation">}</span>

    <span class="token comment">//\u8BA1\u7B97\u901F\u5EA6\uFF0C\u8DDD\u79BB\u9664\u4EE5\u65F6\u95F4</span>
    <span class="token keyword">var</span> speed <span class="token operator">=</span> <span class="token punctuation">(</span>endY <span class="token operator">-</span> startY<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span>
    <span class="token keyword">var</span> speedAbs <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>speed<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * \u60EF\u6027\u79FB\u52A8\u7684\u9012\u5F52\u65B9\u6CD5
     */</span>
    <span class="token keyword">function</span> <span class="token function">inertiaMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>speedAbs <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> stopInertiaMove<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5982\u679C\u901F\u5EA6\u7EDD\u5BF9\u503C\u5C0F\u4E8E0\u4E86\uFF0C\u5219\u7ED3\u675F\u60EF\u6027\u6EDA\u52A8</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//\u8BBE\u7F6E\u6BCF\u6B21\u60EF\u6027\u6ED1\u52A8\u65F6\u95F4\u4E3A20\u6BEB\u79D2</span>
      <span class="token keyword">var</span> distance <span class="token operator">=</span> speedAbs <span class="token operator">*</span> <span class="token number">20</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>speed <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5982\u679C\u901F\u5EA6\u662F\u8D1F\u6570\uFF0C\u5219\u662F\u624B\u6307\u5411\u4E0A\u6ED1\u52A8\u3002\u7EE7\u7EED\u60EF\u6027\u6EDA\u52A8\uFF0C\u5219scrollTop\u7684\u503C\u4F1A\u589E\u52A0</span>
        elem<span class="token punctuation">.</span>scrollTop <span class="token operator">+=</span> distance
        <span class="token comment">//console.log(&#39;\u5411\u4E0A\u60EF\u6027\u6EDA\u52A8&#39; + distance);</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5982\u679C\u901F\u5EA6\u662F\u6B63\u6570\uFF0C\u5219\u662F\u624B\u6307\u5411\u4E0B\u6ED1\u52A8\u3002\u7EE7\u7EED\u60EF\u6027\u6EDA\u52A8\uFF0C\u5219scrollTop\u7684\u503C\u4F1A\u51CF\u5C11</span>
        elem<span class="token punctuation">.</span>scrollTop <span class="token operator">-=</span> distance
        <span class="token comment">//console.log(&#39;\u5411\u4E0B\u60EF\u6027\u6EDA\u52A8&#39; + distance);</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//\u901F\u5EA6\u8870\u51CF</span>
      speedAbs <span class="token operator">-=</span> speedDecay

      <span class="token function">setTimeout</span><span class="token punctuation">(</span>inertiaMove<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stopMoveInterval <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u624B\u6307\u505C\u6B62\u6ED1\u52A8\u8D85\u8FC70.1\u79D2\u7684\u5C31\u4E0D\u6267\u884C\u60EF\u6027\u6ED1\u52A8\u4E86</span>
      stopInertiaMove <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token function">inertiaMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import MyScroll from &#39;./util/scrollSmooth&#39;
let ele = document.getElelmetById(&#39;xxx&#39;)
MyScroll(ele)
~~~

## ban wechat and browser body default scroll pull
### code
~~~
document.addEventListener(&#39;touchmove&#39;, function (e) {
    e.preventDefault();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
