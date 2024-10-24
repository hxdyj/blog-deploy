import{_ as a,c as i,a2 as e,o as l}from"./chunks/framework.DPDg7N6I.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/react/ReactNative.md","filePath":"pages/react/ReactNative.md"}'),n={name:"pages/react/ReactNative.md"};function t(p,s,h,d,o,k){return l(),i("div",null,s[0]||(s[0]=[e(`<h2 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h2><ol><li>下载 rbenv</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rbenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init -)&quot;</span></span></code></pre></div><ol start="2"><li>rbenv install ruby 3.3.0 &amp; set 3.3.0 global</li><li>workspace 下</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. install js dependencies</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or yarn install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. pod install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不要使用cd ios &amp; pod install 这种安装兼容性没有包管理工具安装的好</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-install</span></span></code></pre></div><p>Or</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用pnpm安装依赖，这种安装有个弊端：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># andriod/settings.gradle includeBuild(&#39;../node_modules/@react-native/gradle-plugin&#39;) node_modules目录需要修正成../node_modules/.pnpm/.../xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-install</span></span></code></pre></div><h2 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;Debug&quot;">​</a></h2><p>选用工具：<a href="https://github.com/jhen0409/react-native-debugger" target="_blank" rel="noreferrer">react-native-debugger</a> 打开调试：</p><ol><li>运行后在 <code>Metro Cli</code> 中按 <code>D</code> 键打开调试弹窗，点击 <code>Start Debug</code></li><li>如果未出现这个项</li></ol><ul><li>IOS: 在 <code>Podfile</code> 文件中关闭 <code>hermes</code></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hermes_enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span></code></pre></div><h2 id="qa" tabindex="-1">QA <a class="header-anchor" href="#qa" aria-label="Permalink to &quot;QA&quot;">​</a></h2><p>Q: ios 运行项目后改动代码没有热重载 A: 查看 <code>ios/.../[projectName].xcscheme</code>， 将 <code>buildConfiguration</code> 改为 <code>Debug</code></p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LaunchAction</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  buildConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LaunchAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,15)]))}const g=a(n,[["render",t]]);export{c as __pageData,g as default};