import{_ as n,c as a,a2 as p,o as t}from"./chunks/framework.DPDg7N6I.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/tools/Vscode debug ts.md","filePath":"pages/tools/Vscode debug ts.md"}'),e={name:"pages/tools/Vscode debug ts.md"};function o(l,s,i,c,u,d){return t(),a("div",null,s[0]||(s[0]=[p(`<h2 id="vscode-调试-ts" tabindex="-1">Vscode 调试 Ts <a class="header-anchor" href="#vscode-调试-ts" aria-label="Permalink to &quot;Vscode 调试 Ts&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init</span></span>
<span class="line"><span>npm install typescript --save-dev</span></span>
<span class="line"><span>npm install ts-node --save-dev</span></span>
<span class="line"><span>tsc --init</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>      &quot;module&quot;: &quot;commonjs&quot;,</span></span>
<span class="line"><span>      &quot;target&quot;: &quot;es5&quot;,</span></span>
<span class="line"><span>      &quot;noImplicitAny&quot;: true,</span></span>
<span class="line"><span>      &quot;outDir&quot;: &quot;./dist&quot;,</span></span>
<span class="line"><span>      &quot;sourceMap&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;include&quot;: [</span></span>
<span class="line"><span>      &quot;src/**/*&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="配置-launch-json" tabindex="-1">配置 launch.json <a class="header-anchor" href="#配置-launch-json" aria-label="Permalink to &quot;配置 launch.json&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;0.2.0&quot;,</span></span>
<span class="line"><span>    &quot;configurations&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;Current TS File&quot;,</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;node&quot;,</span></span>
<span class="line"><span>            &quot;request&quot;: &quot;launch&quot;,</span></span>
<span class="line"><span>            &quot;program&quot;: &quot;\${workspaceRoot}/node_modules/ts-node/dist/bin.js&quot;,</span></span>
<span class="line"><span>            &quot;args&quot;: [</span></span>
<span class="line"><span>                &quot;\${relativeFile}&quot;</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;cwd&quot;: &quot;\${workspaceRoot}&quot;,</span></span>
<span class="line"><span>            &quot;protocol&quot;: &quot;inspector&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>F5 对应的文件就可以调试了</p></blockquote>`,6)]))}const h=n(e,[["render",o]]);export{r as __pageData,h as default};
