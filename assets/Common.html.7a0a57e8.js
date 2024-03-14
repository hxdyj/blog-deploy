import{r,a as l,c as i,f as e,b as a,F as o,e as t,g as n}from"./app.24627d88.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var p="/img/cavas\u4E2D\u5FC3\u653E\u5927\u7F29\u5C0F\u7406\u89E3.jpg";const d={},u=t('<h2 id="\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB" aria-hidden="true">#</a> \u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB</h2><ul><li>MDN <code>Element.getBoundingClentRect()</code></li></ul><h2 id="ios-\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#ios-\u65F6\u95F4" aria-hidden="true">#</a> IOS \u65F6\u95F4</h2><ul><li>\u4E0D\u652F\u6301 new Date(&#39;2018-07-06 15:32:24&#39;)</li><li>new Date(&#39;2019-07&#39;)\u4E5F\u4E0D\u652F\u6301</li><li>\u53EA\u652F\u6301 new Date(&#39;2018-07-06&#39;)</li></ul><h2 id="canvas-\u53CC\u6307\u7F29\u5C0F\u653E\u5927\u4EE5\u624B\u6307\u4E2D\u5FC3\u70B9\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#canvas-\u53CC\u6307\u7F29\u5C0F\u653E\u5927\u4EE5\u624B\u6307\u4E2D\u5FC3\u70B9\u7684\u7406\u89E3" aria-hidden="true">#</a> canvas \u53CC\u6307\u7F29\u5C0F\u653E\u5927\u4EE5\u624B\u6307\u4E2D\u5FC3\u70B9\u7684\u7406\u89E3</h2>',5),b={href:"https://github.com/hxdyj/Code-Bundle/blob/master/web/html/zoom-in-on-a-point-using-scale-and-translate.html",title:"\u5B9E\u73B0\u7684\u6E90\u7801",target:"_blank",rel:"noopener noreferrer"},h=n("\u5B9E\u73B0\u7684\u6E90\u7801"),m=t('<p><img src="'+p+`" alt=""></p><h2 id="js-scroll-to-view-scrollintoview" tabindex="-1"><a class="header-anchor" href="#js-scroll-to-view-scrollintoview" aria-hidden="true">#</a> JS scroll to view (scrollIntoView)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.getElementById(&quot;nn&quot;).scrollIntoView(true);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u76D1\u542C\u6D4F\u89C8\u5668-history-back" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u6D4F\u89C8\u5668-history-back" aria-hidden="true">#</a> \u76D1\u542C\u6D4F\u89C8\u5668 history back</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function pushHistory() {
			var state = {
				title: &quot;pay&quot;,
				url: &quot;#pay&quot;
			}
			window.history.pushState(state, &quot;pay&quot;, &quot;#pay&quot;);
		}
		pushHistory()

		window.addEventListener(&quot;popstate&quot;, function () {
			history.go(-2)
		}, false)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,5),g={id:"clientwidth-offsetheight-\u7B49\u5C5E\u6027\u8BE6\u89E3-\u53C2\u8003",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#clientwidth-offsetheight-\u7B49\u5C5E\u6027\u8BE6\u89E3-\u53C2\u8003","aria-hidden":"true"},"#",-1),x=n(" clientWidth , offsetHeight \u7B49\u5C5E\u6027\u8BE6\u89E3 "),f={href:"http://caibaojian.com/getelementposition.html",target:"_blank",rel:"noopener noreferrer"},v=n("\u53C2\u8003"),w=t(`<h2 id="\u83B7\u53D6\u5143\u7D20\u6700\u7EC8-css-\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5143\u7D20\u6700\u7EC8-css-\u5C5E\u6027\u503C" aria-hidden="true">#</a> \u83B7\u53D6\u5143\u7D20\u6700\u7EC8 CSS \u5C5E\u6027\u503C</h2><ul><li><p><strong>window.getComputedStyle(&quot;\u5143\u7D20&quot;, &quot;\u4F2A\u7C7B&quot;);</strong> \u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u5143\u7D20\u6240\u6709\u6700\u7EC8\u4F7F\u7528\u7684 CSS \u5C5E\u6027\u503C\u3002</p></li><li><p>\u793A\u4F8B:</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let end_style = window.getComputedStyle(document.getElementByID(&#39;test&#39;))
alert(end_style.marginTop)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u9F20\u6807\u6EDA\u8F6E\u6A2A\u5411\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u6EDA\u8F6E\u6A2A\u5411\u6EDA\u52A8" aria-hidden="true">#</a> \u9F20\u6807\u6EDA\u8F6E\u6A2A\u5411\u6EDA\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            let ScrollEle = document.querySelector(&#39;.scroll-task-main&#39;)

            function MouseWheel(e) {
                e = e || window.event;
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }

                if (e.wheelDelta &gt; 0) {
                    ScrollEle.scrollLeft -= 60
                } else {
                    ScrollEle.scrollLeft += 60
                }

            }
            ScrollEle.onmousewheel = MouseWheel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="textarea-\u81EA\u52A8\u589E\u9AD8\u5E76\u9690\u85CF\u6EDA\u52A8\u6761" tabindex="-1"><a class="header-anchor" href="#textarea-\u81EA\u52A8\u589E\u9AD8\u5E76\u9690\u85CF\u6EDA\u52A8\u6761" aria-hidden="true">#</a> textarea \u81EA\u52A8\u589E\u9AD8\u5E76\u9690\u85CF\u6EDA\u52A8\u6761</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;textarea id=&quot;tValue&quot; style=&quot;overflow-y:hidden; height:20px;&quot; onpropertychange=&quot;this.style.height=this.scrollHeight + &#39;px&#39;&quot; oninput=&quot;this.style.height=this.scrollHeight + &#39;px&#39;&quot;&gt;&lt;/textarea&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,7),y={id:"textarea-\u9AD8\u5EA6\u81EA\u9002\u5E94-\u53C2\u8003-1\u53C2\u8003-2",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#textarea-\u9AD8\u5EA6\u81EA\u9002\u5E94-\u53C2\u8003-1\u53C2\u8003-2","aria-hidden":"true"},"#",-1),k=n(" textarea \u9AD8\u5EA6\u81EA\u9002\u5E94 "),E={href:"http://blog.csdn.net/tianyitianyi1/article/details/49923069",target:"_blank",rel:"noopener noreferrer"},S=n("\u53C2\u8003 1"),I={href:"http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/",target:"_blank",rel:"noopener noreferrer"},B=n("\u53C2\u8003 2"),C={id:"input\u3001textarea\u3001div-contenteditable-true-\u5149\u6807\u5B9A\u4F4D\u5230\u6700\u540E-\u53C2\u8003-1",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#input\u3001textarea\u3001div-contenteditable-true-\u5149\u6807\u5B9A\u4F4D\u5230\u6700\u540E-\u53C2\u8003-1","aria-hidden":"true"},"#",-1),L=n(" input\u3001textarea\u3001div(contenteditable=true)\u5149\u6807\u5B9A\u4F4D\u5230\u6700\u540E "),P={href:"http://www.cnblogs.com/duhongyu216/articles/3560548.html",target:"_blank",rel:"noopener noreferrer"},R=n("\u53C2\u8003 1"),D=t(`<h2 id="\u624B\u673A\u7AEF\u70B9\u51FB\u5176\u4ED6\u7EC4\u4EF6\u8C03\u8D77-select" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u7AEF\u70B9\u51FB\u5176\u4ED6\u7EC4\u4EF6\u8C03\u8D77-select" aria-hidden="true">#</a> \u624B\u673A\u7AEF\u70B9\u51FB\u5176\u4ED6\u7EC4\u4EF6\u8C03\u8D77 select</h2><p>\u5C06 select \u900F\u660E\uFF0C\u7136\u540E\u901A\u8FC7\u5B9A\u4F4D\u5C06\u7EC4\u4EF6\u653E\u5230 select \u4F4D\u7F6E</p><h3 id="\u5224\u65AD\u591A\u4E2A\u6216\u8005\u5355\u4E2A\u56FE\u7247\u662F\u5426\u52A0\u8F7D\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u591A\u4E2A\u6216\u8005\u5355\u4E2A\u56FE\u7247\u662F\u5426\u52A0\u8F7D\u5B8C\u6210" aria-hidden="true">#</a> \u5224\u65AD\u591A\u4E2A\u6216\u8005\u5355\u4E2A\u56FE\u7247\u662F\u5426\u52A0\u8F7D\u5B8C\u6210</h3><blockquote><p>\u5728 Google \u6D4F\u89C8\u5668\u56FE\u7247\u52A0\u8F7D\u4EE5\u540E\u5C31\u4E0D\u4F1A\u8C03\u8D77 onload \u65B9\u6CD5,\u6240\u4EE5\u9700\u8981\u901A\u8FC7 complete \u53BB\u5224\u65AD</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let btnPromises = []
        btnPromises.push(new Promise((res, rej) =&gt; {
            let ele = document.getElementById(&#39;down-ios-img&#39;)
            if (!ele.complete) {
                ele.onload = () =&gt; {
                    res()
                }
            } else {
                res()
            }

        }))
        btnPromises.push(new Promise((res, rej) =&gt; {
            let ele = document.getElementById(&#39;down-andriod-img&#39;)
            if (!ele.complete) {
                ele.onload = () =&gt; {
                    res()
                }
            } else {
                res()
            }
        }))
        Promise.all(btnPromises).then(() =&gt; {
            let ele = document.getElementById(&#39;btn-animate&#39;)
            ele.velocity({ left: &#39;0px&#39;, opacity: 1 }, { duration: 1000 });
        })
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u5FAE\u4FE1\u652F\u4ED8\u6D4F\u89C8\u5668-url-\u4F20\u53C2\u53EA\u80FD\u4F20\u4E00\u4E2A" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u652F\u4ED8\u6D4F\u89C8\u5668-url-\u4F20\u53C2\u53EA\u80FD\u4F20\u4E00\u4E2A" aria-hidden="true">#</a> \u5FAE\u4FE1\u652F\u4ED8\u6D4F\u89C8\u5668 url \u4F20\u53C2\u53EA\u80FD\u4F20\u4E00\u4E2A</h2><blockquote><p>\u4F7F\u7528 encodeURIComponent \u5305\u88C5\u4E00\u5C42,\u4F7F\u7528 encodeURI \u53EA\u4F1A\u5BF9\u4E2D\u6587\u8F6C\u7801,&amp;\u548C/\u4E0D\u4F1A\u8F6C\u7801</p></blockquote><p>encodeURI \u548C encodeURIComponent \u7684\u533A\u522B\u5728\u4E8E\u524D\u8005\u88AB\u8BBE\u8BA1\u6765\u7528\u4E8E\u5BF9\u5B8C\u6574 URL \u8FDB\u884C URL Encode\uFF0C\u4E8E\u662F URL \u4E2D\u7684\u529F\u80FD\u5B57\u7B26\uFF0C\u6BD4\u5982&amp;, ?, /, =\u7B49\u7B49\u8FD9\u4E9B\u5E76\u4E0D\u4F1A\u88AB\u8F6C\u4E49\uFF1B\u800C\u540E\u8005\u88AB\u8BBE\u8BA1\u6765\u5BF9\u4E00\u4E2A URL \u4E2D\u7684\u503C\u8FDB\u884C\u8F6C\u4E49\uFF0C\u4F1A\u628A\u8FD9\u4E9B\u529F\u80FD\u5B57\u7B26\u4E5F\u8FDB\u884C\u8F6C\u4E49\u3002</p>`,8);function U(V,H){const s=r("ExternalLinkIcon");return l(),i(o,null,[u,e("p",null,[e("a",b,[h,a(s)])]),m,e("h2",g,[_,x,e("a",f,[v,a(s)])]),w,e("h2",y,[q,k,e("a",E,[S,a(s)]),e("a",I,[B,a(s)])]),e("h2",C,[j,L,e("a",P,[R,a(s)])]),D],64)}var W=c(d,[["render",U]]);export{W as default};
