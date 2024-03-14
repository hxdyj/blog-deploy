import{e as n}from"./app.24627d88.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6811" aria-hidden="true">#</a> \u6587\u4EF6\u6811</h1><h2 id="vue3-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue3-\u9879\u76EE" aria-hidden="true">#</a> Vue3 \u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/workspace/project
\u251C\u2500\u2500 .husky                                        //\u89C4\u8303 git commit msg
\u251C\u2500\u2500 .vscode                                       //\u7EDF\u4E00 vscode config
|  \u2514\u2500\u2500 .settings.json
\u251C\u2500\u2500 env                                           //\u533A\u5206\u73AF\u5883\u53D8\u91CF
|  \u251C\u2500\u2500 .env
|  \u251C\u2500\u2500 .env.development
|  \u251C\u2500\u2500 .env.production
|  \u2514\u2500\u2500 .env.staging
\u251C\u2500\u2500 patches                                       //\u9B54\u6539\u7B2C\u4E09\u65B9\u5E93
|  \u2514\u2500\u2500 pdf-to-printer+5.1.1.patch
\u251C\u2500\u2500 public                                        //\u516C\u5171\u6587\u4EF6
|  \u251C\u2500\u2500 favicon.ico
\u251C\u2500\u2500 scripts                                       //\u811A\u672C
\u251C\u2500\u2500 src
|  \u251C\u2500\u2500 api.ts                                     //\u6240\u6709\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4EE5\u53CA\u63A5\u53E3\u63A5\u6536\u53CA\u8FD4\u56DEts\u7C7B\u578B\u5747\u5728\u6B64\u6587\u4EF6\u5B9A\u4E49\u3002\u63A5\u53E3\u63A5\u6536\u53CA\u8FD4\u56DEtype\u5B9A\u4E49\u5E94\u8BE5\u5728\u6B64\u63A5\u53E3\u51FD\u6570\u4E0A\u65B9
|  \u251C\u2500\u2500 App.vue
|  \u251C\u2500\u2500 assets                                     //\u516C\u5171\u8D44\u6E90\u76EE\u5F55
|  |  \u251C\u2500\u2500 logo.png
|  \u251C\u2500\u2500 components                                 //\u516C\u5171\u7EC4\u4EF6\u76EE\u5F55
|  |  \u251C\u2500\u2500 BaseButton.vue
|  \u251C\u2500\u2500 config                                     //\u5168\u5C40\u914D\u7F6E\u76EE\u5F55
|  |  \u251C\u2500\u2500 nodeEnv.ts
|  |  \u251C\u2500\u2500 config.ts
|  |  \u2514\u2500\u2500 enum.ts
|  \u251C\u2500\u2500 extend.ts                                  //\u62D3\u5C55\u539F\u751F\u6587\u4EF6
|  \u251C\u2500\u2500 main.ts                                    //vue \u5165\u53E3
|  \u251C\u2500\u2500 router                                     //\u8DEF\u7531
|  |  \u2514\u2500\u2500 index.ts
|  \u251C\u2500\u2500 store                                      //vuex\u6587\u4EF6\u5939
|  |  \u251C\u2500\u2500 index.ts
|  |  \u2514\u2500\u2500 vuexEnum.ts                             //vuex\u5404\u9879\u64CD\u4F5C\uFF08state, action, getter\uFF09enum
|  \u251C\u2500\u2500 styles                                     //\u516C\u5171\u6837\u5F0F\u76EE\u5F55
|  |  \u251C\u2500\u2500 index.scss
|  \u251C\u2500\u2500 utils                                      //\u516C\u5171\u5DE5\u5177\u76EE\u5F55
|  |  \u251C\u2500\u2500 dom.ts
|  |  \u251C\u2500\u2500 download.ts
|  |  \u251C\u2500\u2500 http.ts
|  \u251C\u2500\u2500 views                                      //\u9875\u9762\u76EE\u5F55
|  |  \u251C\u2500\u2500 Home.vue
|  |  \u251C\u2500\u2500 Login
|  |  |  \u251C\u2500\u2500 Login.vue
|  |  |  \u2514\u2500\u2500 img
|  |  |     \u251C\u2500\u2500 background.jpg
\u251C\u2500\u2500 tsconfig.json
\u251C\u2500\u2500 types                                       //\u516C\u5171ts\u7C7B\u578B\u58F0\u660E\u76EE\u5F55
|  \u2514\u2500\u2500 UserInfo.ts
\u251C\u2500\u2500 typings                                       //.d.ts \u58F0\u660E\u76EE\u5F55
|  \u251C\u2500\u2500 env.d.ts
|  \u251C\u2500\u2500 shims-vue.d.ts
|  \u2514\u2500\u2500 vite-env.d.ts
\u251C\u2500\u2500 vite.config.ts                                //vite \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 babel.config.js
\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 postcss.config.js
\u251C\u2500\u2500 .gitignore
\u251C\u2500\u2500 .editorconfig
\u251C\u2500\u2500 .eslintignore
\u251C\u2500\u2500 .eslintrc.js
\u251C\u2500\u2500 .prettierrc
\u251C\u2500\u2500 TODO.md                                       //\u5F85\u5B8C\u6210\u6E05\u5355
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 CHANGELOG.md                                  //\u66F4\u65B0\u65E5\u5FD7
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div>`,3);function r(p,l){return e}var c=s(a,[["render",r]]);export{c as default};
