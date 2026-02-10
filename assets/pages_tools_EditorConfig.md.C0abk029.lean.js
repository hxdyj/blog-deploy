import{_ as s,c as a,a2 as p,o as e}from"./chunks/framework.DPDg7N6I.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/tools/EditorConfig.md","filePath":"pages/tools/EditorConfig.md"}'),t={name:"pages/tools/EditorConfig.md"};function l(i,n,o,r,c,d){return e(),a("div",null,n[0]||(n[0]=[p(`<p><a href="http://editorconfig.org/logo.png" target="_blank" rel="noreferrer"><img src="http://editorconfig.org/logo.png" alt=""></a></p><blockquote><p><a href="https://segmentfault.com/a/1190000007599845" target="_blank" rel="noreferrer">参考地址</a></p></blockquote><h2 id="editorconfig" tabindex="-1">.editorconfig <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;.editorconfig&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 表明是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span># 换行符的类型。lf, cr, crlf三种</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># indent_style 缩进使用tab或者space</span></span>
<span class="line"><span>indent_style = tab</span></span>
<span class="line"><span># 缩进为tab时，缩进的宽度</span></span>
<span class="line"><span>tab_width = 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否使文件以一个空白行结尾</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 文件的charset。有以下几种类型：latin1, utf-8, utf-8-bom, utf-16be, utf-16le</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span># 是否将行尾空格自动删除</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># md行尾空格自动删除false</span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span>
<span class="line"><span>[*.json]</span></span>
<span class="line"><span>indent_style = tab</span></span>
<span class="line"><span>tab_width = 4</span></span></code></pre></div>`,4)]))}const h=s(t,[["render",l]]);export{g as __pageData,h as default};
