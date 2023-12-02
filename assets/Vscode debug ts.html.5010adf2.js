import{e as n}from"./app.dc3b6072.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h2 id="vscode-\u8C03\u8BD5-ts" tabindex="-1"><a class="header-anchor" href="#vscode-\u8C03\u8BD5-ts" aria-hidden="true">#</a> Vscode \u8C03\u8BD5 Ts</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init
npm install typescript --save-dev
npm install ts-node --save-dev
tsc --init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
      &quot;module&quot;: &quot;commonjs&quot;,
      &quot;target&quot;: &quot;es5&quot;,
      &quot;noImplicitAny&quot;: true,
      &quot;outDir&quot;: &quot;./dist&quot;,
      &quot;sourceMap&quot;: true
  },
  &quot;include&quot;: [
      &quot;src/**/*&quot;
  ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u914D\u7F6E-launch-json" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-launch-json" aria-hidden="true">#</a> \u914D\u7F6E launch.json</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;version&quot;: &quot;0.2.0&quot;,
    &quot;configurations&quot;: [
        {
            &quot;name&quot;: &quot;Current TS File&quot;,
            &quot;type&quot;: &quot;node&quot;,
            &quot;request&quot;: &quot;launch&quot;,
            &quot;program&quot;: &quot;\${workspaceRoot}/node_modules/ts-node/dist/bin.js&quot;,
            &quot;args&quot;: [
                &quot;\${relativeFile}&quot;
            ],
            &quot;cwd&quot;: &quot;\${workspaceRoot}&quot;,
            &quot;protocol&quot;: &quot;inspector&quot;
        }
    ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>F5 \u5BF9\u5E94\u7684\u6587\u4EF6\u5C31\u53EF\u4EE5\u8C03\u8BD5\u4E86</p></blockquote>`,6);function t(u,r){return a}var p=s(e,[["render",t]]);export{p as default};
