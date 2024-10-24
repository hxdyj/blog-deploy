import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.DPDg7N6I.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/other/npm.md","filePath":"pages/other/npm.md"}'),i={name:"pages/other/npm.md"};function l(c,s,o,t,d,h){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="npm-package-开发指南-包内容篇" tabindex="-1">npm package 开发指南-包内容篇 <a class="header-anchor" href="#npm-package-开发指南-包内容篇" aria-label="Permalink to &quot;npm package 开发指南-包内容篇&quot;">​</a></h2><p>假设我们要开发一个 npm 库，名字叫 lib-dev-tutorial，那么需要包含哪些内容？我们下面就来列举下，初始化目录结构如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><h3 id="package-包含的内容" tabindex="-1">package 包含的内容 <a class="header-anchor" href="#package-包含的内容" aria-label="Permalink to &quot;package 包含的内容&quot;">​</a></h3><p>库的使用者使用的文件</p><p>如果开发人员安装了你的库，那么引入的时候找哪个文件？编译源码生成 dist/index.js，并在 package.json 中增加一个 main 字段指向这个文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── dist</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;dist/index.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>npm 始于 <code>node</code>，所以这个文件应该符合 <code>commonjs</code> 的模块规范。</p><h3 id="符合-es-module-的文件" tabindex="-1">符合 <code>ES Module</code> 的文件 <a class="header-anchor" href="#符合-es-module-的文件" aria-label="Permalink to &quot;符合 \`ES Module\` 的文件&quot;">​</a></h3><p>现在支持运行原生 <code>ES Module</code> 的环境在变多，如果开发人员使用 <code>ES Module</code> 来编写程序。那么我们直接提供一个符合 <code>ES Module</code> 规范的文件，就不需要再把上一步中 <code>commonjs</code> 规范文件转成 <code>ES Module</code> 了。通过编译工具编译出使用 <code>ES Module</code> 规范的文件 <code>es/index.js</code>，并在 <code>package.json</code> 中增加一个 <code>module</code> 字段指向这个文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── dist</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>很多库为了把上述两步的文件语义化区分，会把 <code>dist</code> 目录改成 <code>lib</code>，我们也遵循这个习惯：</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── lib</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;lib/index.js&quot;,</span></span>
<span class="line"><span>  &quot;module&quot;: &quot;es/index.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="通过-script-引用的文件" tabindex="-1">通过 <code>script</code> 引用的文件 <a class="header-anchor" href="#通过-script-引用的文件" aria-label="Permalink to &quot;通过 \`script\` 引用的文件&quot;">​</a></h3><p>如果你希望自己的库健壮点，还可以提供 <code>umd 模式</code>的文件，让你的库可以直接在 html 上通过 script 标签引用。通过编译工具编译出文件 <code>umd/index.js</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── umd</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── lib</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><p><code>umd/index.js</code> 要不要压缩按自己需求来决定。</p><h3 id="类型声明文件" tabindex="-1">类型声明文件 <a class="header-anchor" href="#类型声明文件" aria-label="Permalink to &quot;类型声明文件&quot;">​</a></h3><p><code>TypeScript</code> 的使用已经异常广泛了，我们也增加一个自己库的类型声明文件。方法有三种：</p><p>把类型声明文件放到某一个目录下（譬如：<code>typings/index.d.ts</code>），并在 <code>package.json</code> 中增加 types 字段指向这个文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── umd</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── lib</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── typings</span></span>
<span class="line"><span>  |    └── index.d.ts</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;lib/index.js&quot;,</span></span>
<span class="line"><span>  &quot;module&quot;: &quot;es/index.js&quot;,</span></span>
<span class="line"><span>  &quot;types&quot;: &quot;typings/index.d.ts&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注：<code>package.json</code> 中字段 <code>types</code> 也可以写成 <code>typings</code>，两者是等价的。</p></div><p>在库的根目录下直接放一个 <code>index.d.ts</code>，这个文件原则上不需要在 <code>package.json</code> 指定。但是推荐所有情况都在 <code>package.json</code> 指明类型声明文件的位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── umd</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── lib</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── index.d.ts -- 原则上无需在 package.json 声明文件位置</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  └── package.json</span></span></code></pre></div><p>单独编写类型声明文件，发布到 npm 上的 <code>@types organization</code> 下 <code>@types/lib-dev-tutorial</code>，这种方式开发者需要单独安装类型声明文件 <code>npm install --save @types/lib-dev-tutorial</code> 文档</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>READMD.md - 这个是作为你的库在 npm 网站上的主页。</span></span>
<span class="line"><span>CHANGELOG.md</span></span>
<span class="line"><span>LICENSE</span></span>
<span class="line"><span>lib-dev-tutorial</span></span>
<span class="line"><span>  ├── umd</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── es</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── lib</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── src -- 源码目录</span></span>
<span class="line"><span>  |    └── index.js</span></span>
<span class="line"><span>  ├── typings</span></span>
<span class="line"><span>  |    └── index.d.ts</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  ├── .gitignore</span></span>
<span class="line"><span>  ├── package.json</span></span>
<span class="line"><span>  ├── README.md</span></span>
<span class="line"><span>  ├── CHANGELOG.md</span></span>
<span class="line"><span>  └── LICENSE</span></span></code></pre></div><h3 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package.json字段</span></span>
<span class="line"><span>以下是和发布到 npm 有密切关系的字段(但不仅限于这些字段)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>name：库的名字。</span></span>
<span class="line"><span>version：库的版本号，发布的时候读取的就是这个字段。</span></span>
<span class="line"><span>author：库作者，会在 npm 网站库首页显示。</span></span>
<span class="line"><span>license：开源证书，会在 npm 网站库首页显示。</span></span>
<span class="line"><span>repository：代码库地址，会在 npm 网站库首页显示。</span></span>
<span class="line"><span>homepage：库的主页地址，会在 npm 网站库首页显示。</span></span>
<span class="line"><span>dependencies：你的库依赖的其他库，在开发者 install 你的库的时候会一并下载。</span></span></code></pre></div><h4 id="scoped-库" tabindex="-1">scoped 库 <a class="header-anchor" href="#scoped-库" aria-label="Permalink to &quot;scoped 库&quot;">​</a></h4><p>如果你的库是公开库，则直接 <code>npm publish</code> 就可以了（对了 publish 前记得 login 噢~）。</p><p>如果你的库名是 <code>@name/subname</code>，说明你的库是 <code>scoped</code>，那么你还要做这些事情：</p><ol><li><p>登录到 npm 网站，建立一个 @name 的组织：<a href="https://www.npmjs.com/org/create" target="_blank" rel="noreferrer">https://www.npmjs.com/org/create</a> （填写 organization name 的时候 @ 符号不用填），付费还是公开按需自己的需要。首次发布，如果不先建立，是发不上去的，会报 Scope not found。</p></li><li><p>如果你的库名是 <code>@name/subname</code>，且按公开库发布，在运行 npm 发布命令时要加参数：<code>npm publis --access public</code></p></li><li><p>第二步中如果不加参数，请在 <code>package.json</code> 中加上如下字段：</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>      &quot;publishConfig&quot;: {</span></span>
<span class="line"><span>        &quot;access&quot;: &quot;public&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>和 package 无关 最后稍微说下你会在代码库中还会包含点什么文件。</p><h4 id="持续集成" tabindex="-1">持续集成 <a class="header-anchor" href="#持续集成" aria-label="Permalink to &quot;持续集成&quot;">​</a></h4><p>使用持续集成服务，譬如 <code>travis</code>，你会有配置文件 <code>.travis.yml</code></p><h4 id="github" tabindex="-1">github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;github&quot;">​</a></h4><p>会有 <code>.github</code> 文件夹，下面会有些访问 <code>github</code> 如何展示 <code>issue</code> 等页面的配置文件。</p><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><p>各种 <code>ignore</code> 文件，各种工程化配置文件。各种 <code>demo/example</code>，各种测试相关文件，等等等等。</p><hr><h3 id="npm-安装-发布-更新-撤销发布包" tabindex="-1">npm 安装 发布/更新/撤销发布包 <a class="header-anchor" href="#npm-安装-发布-更新-撤销发布包" aria-label="Permalink to &quot;npm 安装 发布/更新/撤销发布包&quot;">​</a></h3><p>发布包之前你首先要有一个 npm 的账号</p><p>第一次发布包： 在终端输入 <code>npm adduser</code>，提示输入账号，密码和邮箱，然后将提示创建成功</p><p>非第一次发布包： 在终端输入 <code>npm login</code>，然后输入你创建的账号和密码，和邮箱，登陆</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ol><li><code>npm adduser</code> 成功的时候默认你已经登陆了，所以不需要再接着 <code>npm login</code>.</li><li>不能和已有的包的名字重名！</li><li>还有一点要注意的是 npm 对包名的限制：不能有大写字母/空格/下滑线!</li><li>你的项目里有部分私密的代码不想发布到 npm 上？ 将它写入<code>.gitignore</code> 或<code>.npmignore</code> 中，上传就会被忽略了</li></ol></div><h3 id="撤销发布包" tabindex="-1">撤销发布包 <a class="header-anchor" href="#撤销发布包" aria-label="Permalink to &quot;撤销发布包&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unpblish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [xxx] --force</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>没有 xxx 默认撤销这个版本</p></div><ol><li>根据规范，只有在发包的 24 小时内才允许撤销发布的包（ unpublish is only allowed with versions published in the last 24 hours）</li><li>即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了（即不能名称相同，版本相同，因为这两者构成的唯一标识已经被“占用”了）</li></ol><h3 id="npm-更新发布后的包" tabindex="-1">npm 更新发布后的包： <a class="header-anchor" href="#npm-更新发布后的包" aria-label="Permalink to &quot;npm 更新发布后的包：&quot;">​</a></h3><p>事实上 npm 更新包和发布包的命令是一样的，都是 npm publish,不同之处在于，你需要修改包的版本</p><p>所以步骤是：</p><ol><li><p>修改包的版本（package.json 里的 version 字段）</p></li><li><p>npm publish</p></li></ol><h3 id="修改版本的细节" tabindex="-1">修改版本的细节： <a class="header-anchor" href="#修改版本的细节" aria-label="Permalink to &quot;修改版本的细节：&quot;">​</a></h3><p>npm 有一套自己的版本控制标准——Semantic versioning（语义化版本）</p><p>在我们的<code>package.json</code>里面有一个 <code>version</code>字段。那么，怎么在项目不断构建的过程中调整版本呢？</p><p>具体体现为：</p><p><strong>对于 <code>version:x.y.z</code></strong></p><ol><li>修复 bug,小改动，增加 z</li><li>增加了新特性，但仍能向后兼容，增加 y</li><li>有很大的改动，无法向后兼容,增加 x</li></ol><p>例如：我原本的项目是 <code>1.0.0</code> 版本的话</p><p>若是 1 中情况，变为 <code>1.0.1</code></p><p>若是 2 中情况，变为 <code>1.1.0</code></p><p>若是 3 中情况，变为 <code>2.0.0</code></p><p>通过 <code>npm version &lt;update_type&gt;</code>自动改变版本</p><p><code>update_type</code> 为 <code>patch</code>, <code>minor</code>, or <code>major</code> 其中之一，分别表示补丁，小改，大改</p><h2 id="scripts-使用-source-命令" tabindex="-1">scripts 使用 source 命令 <a class="header-anchor" href="#scripts-使用-source-命令" aria-label="Permalink to &quot;scripts 使用 source 命令&quot;">​</a></h2><p>在 package.json 中，通过 npm run 执行的脚本会在不同的 shell 中运行，这就导致在第一个 shell 中激活的虚拟环境在第二个 shell 中不可用。为了在同一个 shell 中执行所有命令，您可以使用 bash -c 来确保在同一个 Bash 环境中运行所有命令。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bash -c &#39;source ./.venv/bin/activate &amp;&amp; sanic main:app --host=0.0.0.0 --port=8001&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,72)]))}const g=a(i,[["render",l]]);export{u as __pageData,g as default};
