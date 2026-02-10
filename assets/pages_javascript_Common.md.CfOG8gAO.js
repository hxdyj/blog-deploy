import{_ as n,c as s,a2 as e,o as t}from"./chunks/framework.DPDg7N6I.js";const l="/img/cavas%E4%B8%AD%E5%BF%83%E6%94%BE%E5%A4%A7%E7%BC%A9%E5%B0%8F%E7%90%86%E8%A7%A3.jpg",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/javascript/Common.md","filePath":"pages/javascript/Common.md"}'),p={name:"pages/javascript/Common.md"};function i(o,a,c,r,h,d){return t(),s("div",null,a[0]||(a[0]=[e('<h2 id="获取元素距离顶部的距离" tabindex="-1">获取元素距离顶部的距离 <a class="header-anchor" href="#获取元素距离顶部的距离" aria-label="Permalink to &quot;获取元素距离顶部的距离&quot;">​</a></h2><ul><li>MDN <code>Element.getBoundingClentRect()</code></li></ul><h2 id="ios-时间" tabindex="-1">IOS 时间 <a class="header-anchor" href="#ios-时间" aria-label="Permalink to &quot;IOS 时间&quot;">​</a></h2><ul><li>不支持 new Date(&#39;2018-07-06 15:32:24&#39;)</li><li>new Date(&#39;2019-07&#39;)也不支持</li><li>只支持 new Date(&#39;2018-07-06&#39;)</li></ul><h2 id="canvas-双指缩小放大以手指中心点的理解" tabindex="-1">canvas 双指缩小放大以手指中心点的理解 <a class="header-anchor" href="#canvas-双指缩小放大以手指中心点的理解" aria-label="Permalink to &quot;canvas 双指缩小放大以手指中心点的理解&quot;">​</a></h2><p><a href="https://github.com/hxdyj/Code-Bundle/blob/master/web/html/zoom-in-on-a-point-using-scale-and-translate.html" title="实现的源码" target="_blank" rel="noreferrer">实现的源码</a></p><p><img src="'+l+`" alt=""></p><h2 id="js-scroll-to-view-scrollintoview" tabindex="-1">JS scroll to view (scrollIntoView) <a class="header-anchor" href="#js-scroll-to-view-scrollintoview" aria-label="Permalink to &quot;JS scroll to view (scrollIntoView)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.getElementById(&quot;nn&quot;).scrollIntoView(true);</span></span></code></pre></div><h2 id="监听浏览器-history-back" tabindex="-1">监听浏览器 history back <a class="header-anchor" href="#监听浏览器-history-back" aria-label="Permalink to &quot;监听浏览器 history back&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function pushHistory() {</span></span>
<span class="line"><span>			var state = {</span></span>
<span class="line"><span>				title: &quot;pay&quot;,</span></span>
<span class="line"><span>				url: &quot;#pay&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			window.history.pushState(state, &quot;pay&quot;, &quot;#pay&quot;);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		pushHistory()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		window.addEventListener(&quot;popstate&quot;, function () {</span></span>
<span class="line"><span>			history.go(-2)</span></span>
<span class="line"><span>		}, false)</span></span></code></pre></div><h2 id="clientwidth-offsetheight-等属性详解-参考" tabindex="-1">clientWidth , offsetHeight 等属性详解 <a href="http://caibaojian.com/getelementposition.html" target="_blank" rel="noreferrer">参考</a> <a class="header-anchor" href="#clientwidth-offsetheight-等属性详解-参考" aria-label="Permalink to &quot;clientWidth , offsetHeight 等属性详解 [参考](http://caibaojian.com/getelementposition.html)&quot;">​</a></h2><h2 id="获取元素最终-css-属性值" tabindex="-1">获取元素最终 CSS 属性值 <a class="header-anchor" href="#获取元素最终-css-属性值" aria-label="Permalink to &quot;获取元素最终 CSS 属性值&quot;">​</a></h2><ul><li><p><strong>window.getComputedStyle(&quot;元素&quot;, &quot;伪类&quot;);</strong> 可以获取当前元素所有最终使用的 CSS 属性值。</p></li><li><p>示例:</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let end_style = window.getComputedStyle(document.getElementByID(&#39;test&#39;))</span></span>
<span class="line"><span>alert(end_style.marginTop)</span></span></code></pre></div><h2 id="鼠标滚轮横向滚动" tabindex="-1">鼠标滚轮横向滚动 <a class="header-anchor" href="#鼠标滚轮横向滚动" aria-label="Permalink to &quot;鼠标滚轮横向滚动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>            let ScrollEle = document.querySelector(&#39;.scroll-task-main&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            function MouseWheel(e) {</span></span>
<span class="line"><span>                e = e || window.event;</span></span>
<span class="line"><span>                if (e.stopPropagation) {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    e.cancelBubble = true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (e.preventDefault) {</span></span>
<span class="line"><span>                    e.preventDefault();</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    e.returnValue = false;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (e.wheelDelta &gt; 0) {</span></span>
<span class="line"><span>                    ScrollEle.scrollLeft -= 60</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    ScrollEle.scrollLeft += 60</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            ScrollEle.onmousewheel = MouseWheel</span></span></code></pre></div><h2 id="textarea-自动增高并隐藏滚动条" tabindex="-1">textarea 自动增高并隐藏滚动条 <a class="header-anchor" href="#textarea-自动增高并隐藏滚动条" aria-label="Permalink to &quot;textarea 自动增高并隐藏滚动条&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;textarea id=&quot;tValue&quot; style=&quot;overflow-y:hidden; height:20px;&quot; onpropertychange=&quot;this.style.height=this.scrollHeight + &#39;px&#39;&quot; oninput=&quot;this.style.height=this.scrollHeight + &#39;px&#39;&quot;&gt;&lt;/textarea&gt;</span></span></code></pre></div><h2 id="textarea-高度自适应-参考-1参考-2" tabindex="-1">textarea 高度自适应 <a href="http://blog.csdn.net/tianyitianyi1/article/details/49923069" target="_blank" rel="noreferrer">参考 1</a><a href="http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/" target="_blank" rel="noreferrer">参考 2</a> <a class="header-anchor" href="#textarea-高度自适应-参考-1参考-2" aria-label="Permalink to &quot;textarea 高度自适应 [参考 1](http://blog.csdn.net/tianyitianyi1/article/details/49923069)[参考 2](http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/)&quot;">​</a></h2><h2 id="input、textarea、div-contenteditable-true-光标定位到最后-参考-1" tabindex="-1">input、textarea、div(contenteditable=true)光标定位到最后 <a href="http://www.cnblogs.com/duhongyu216/articles/3560548.html" target="_blank" rel="noreferrer">参考 1</a> <a class="header-anchor" href="#input、textarea、div-contenteditable-true-光标定位到最后-参考-1" aria-label="Permalink to &quot;input、textarea、div(contenteditable=true)光标定位到最后 [参考 1](http://www.cnblogs.com/duhongyu216/articles/3560548.html)&quot;">​</a></h2><h2 id="手机端点击其他组件调起-select" tabindex="-1">手机端点击其他组件调起 select <a class="header-anchor" href="#手机端点击其他组件调起-select" aria-label="Permalink to &quot;手机端点击其他组件调起 select&quot;">​</a></h2><p>将 select 透明，然后通过定位将组件放到 select 位置</p><h3 id="判断多个或者单个图片是否加载完成" tabindex="-1">判断多个或者单个图片是否加载完成 <a class="header-anchor" href="#判断多个或者单个图片是否加载完成" aria-label="Permalink to &quot;判断多个或者单个图片是否加载完成&quot;">​</a></h3><blockquote><p>在 Google 浏览器图片加载以后就不会调起 onload 方法,所以需要通过 complete 去判断</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let btnPromises = []</span></span>
<span class="line"><span>        btnPromises.push(new Promise((res, rej) =&gt; {</span></span>
<span class="line"><span>            let ele = document.getElementById(&#39;down-ios-img&#39;)</span></span>
<span class="line"><span>            if (!ele.complete) {</span></span>
<span class="line"><span>                ele.onload = () =&gt; {</span></span>
<span class="line"><span>                    res()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                res()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }))</span></span>
<span class="line"><span>        btnPromises.push(new Promise((res, rej) =&gt; {</span></span>
<span class="line"><span>            let ele = document.getElementById(&#39;down-andriod-img&#39;)</span></span>
<span class="line"><span>            if (!ele.complete) {</span></span>
<span class="line"><span>                ele.onload = () =&gt; {</span></span>
<span class="line"><span>                    res()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                res()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }))</span></span>
<span class="line"><span>        Promise.all(btnPromises).then(() =&gt; {</span></span>
<span class="line"><span>            let ele = document.getElementById(&#39;btn-animate&#39;)</span></span>
<span class="line"><span>            ele.velocity({ left: &#39;0px&#39;, opacity: 1 }, { duration: 1000 });</span></span>
<span class="line"><span>        })</span></span></code></pre></div><h2 id="微信支付浏览器-url-传参只能传一个" tabindex="-1">微信支付浏览器 url 传参只能传一个 <a class="header-anchor" href="#微信支付浏览器-url-传参只能传一个" aria-label="Permalink to &quot;微信支付浏览器 url 传参只能传一个&quot;">​</a></h2><blockquote><p>使用 encodeURIComponent 包装一层,使用 encodeURI 只会对中文转码,&amp;和/不会转码</p></blockquote><p>encodeURI 和 encodeURIComponent 的区别在于前者被设计来用于对完整 URL 进行 URL Encode，于是 URL 中的功能字符，比如&amp;, ?, /, =等等这些并不会被转义；而后者被设计来对一个 URL 中的值进行转义，会把这些功能字符也进行转义。</p>`,29)]))}const g=n(p,[["render",i]]);export{m as __pageData,g as default};
