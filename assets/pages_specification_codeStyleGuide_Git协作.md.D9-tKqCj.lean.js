import{_ as s,c as e,a2 as i,o as t}from"./chunks/framework.DPDg7N6I.js";const o="/img/GitFlow.drawio.png",g=JSON.parse('{"title":"Git 协作","description":"","frontmatter":{},"headers":[],"relativePath":"pages/specification/codeStyleGuide/Git协作.md","filePath":"pages/specification/codeStyleGuide/Git协作.md"}'),n={name:"pages/specification/codeStyleGuide/Git协作.md"};function d(l,a,p,h,c,r){return t(),e("div",null,a[0]||(a[0]=[i('<h1 id="git-协作" tabindex="-1">Git 协作 <a class="header-anchor" href="#git-协作" aria-label="Permalink to &quot;Git 协作&quot;">​</a></h1><h2 id="分支命名" tabindex="-1">分支命名 <a class="header-anchor" href="#分支命名" aria-label="Permalink to &quot;分支命名&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>命名</th></tr></thead><tbody><tr><td>上线</td><td><code>master</code></td></tr><tr><td>开发</td><td><code>dev</code></td></tr><tr><td>功能</td><td><code>feat/[姓名]/[时间]/[补充名]</code></td></tr><tr><td>修复</td><td><code>fix/[姓名]/[时间]/[补充名]</code></td></tr><tr><td>rebase</td><td><code>rebase/[其他分支名称]</code> 或者 <code>rebase/[姓名]/[时间]/[补充名]</code></td></tr></tbody></table><h3 id="补充名" tabindex="-1">补充名 <a class="header-anchor" href="#补充名" aria-label="Permalink to &quot;补充名&quot;">​</a></h3><p>补充名为可选，名称为标识作用，如 <code>spring32</code></p><h3 id="姓名格式" tabindex="-1">姓名格式 <a class="header-anchor" href="#姓名格式" aria-label="Permalink to &quot;姓名格式&quot;">​</a></h3><p>姓名声母小写，例 <code>张三</code> =&gt; <code>zhs</code></p><h3 id="时间格式" tabindex="-1">时间格式 <a class="header-anchor" href="#时间格式" aria-label="Permalink to &quot;时间格式&quot;">​</a></h3><p>年份后两位+日+月，日月不足两位补全两位，例 <code>211202</code>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><ol><li><p><code>feat</code>分支时间使用迭代周期开始时间。</p></li><li><p><code>fix</code>分支使用当前时间。</p></li></ol><p>假设 迭代：【211213-211224 期】; 当前时间为：211220 ; 开发人为张三;</p><p>分支名称示例：<code>feat/zhs/211213</code>,<strong><em><code>fix/zhs/211220</code></em></strong></p><ol start="3"><li><p><code>rebase</code>分支命名注意事项</p><ul><li><p><code>rebase</code>的分支打算合并到<code>master</code>分支发布版本时： 使用<code>rebase/[姓名]/[时间]/[补充名]</code>格式命名，时间为迭代开始时间，例<code>rebase/zhs/211213</code></p></li><li><p>其他分支 rebase 时：使用<code>rebase/[其他分支名称]</code>格式命名，例<code>rebase/dev</code>,<code>rebase/feat/zhs/211213</code>,<strong><em><code>rebase-fix-zhs-211220</code></em></strong></p></li></ul></li></ol></div><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h2><p><img src="'+o+`" alt=""></p><h2 id="commit-message-规范" tabindex="-1">Commit Message 规范 <a class="header-anchor" href="#commit-message-规范" aria-label="Permalink to &quot;Commit Message 规范&quot;">​</a></h2><h3 id="消息格式" tabindex="-1">消息格式 <a class="header-anchor" href="#消息格式" aria-label="Permalink to &quot;消息格式&quot;">​</a></h3><p>消息必须匹配以下正则表达式:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(revert: )</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(feat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">fix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">docs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">dx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">refactor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">perf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">workflow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">build</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ci</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">chore</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">wip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">release</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">deps)(</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\)</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,50}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span></code></pre></div><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>出现在<code>Features</code>标题下，<code>dev</code>子标题下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>feat(dev): add &#39;comments&#39; option</span></span></code></pre></div><p>出现在<code>Bug Fixes</code>标题下，<code>dev</code>子标题下，带有禅道问题<code>#28</code> 的链接:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fix(dev): fix dev error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>close #28</span></span></code></pre></div><p>出现在“性能改进”标题下，并在“重大更改”下给出重大更改解释:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>perf(build): remove &#39;foo&#39; option</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BREAKING CHANGE: The &#39;foo&#39; option has been removed.</span></span></code></pre></div><p>以下提交和<code>667ecc1</code>不会出现在更改日志中，如果它们是在同一个版本下。如果没有，恢复提交将出现在<code>revert</code>标头下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>revert: feat(compiler): add &#39;comments&#39; option</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This reverts commit 667ecc1654a317a13331b17617d973392f415f02.</span></span></code></pre></div><h3 id="完整的消息格式" tabindex="-1">完整的消息格式 <a class="header-anchor" href="#完整的消息格式" aria-label="Permalink to &quot;完整的消息格式&quot;">​</a></h3><p>一个提交消息包括一个<strong>header</strong>，<strong>body</strong>和<strong>footer</strong>。头文件有<strong>type</strong>，<strong>scope</strong>和<strong>subject</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;footer&gt;</span></span></code></pre></div><p><strong>header</strong> 是必须的, <strong>scope</strong> 是可选的</p><h3 id="revert" tabindex="-1">Revert <a class="header-anchor" href="#revert" aria-label="Permalink to &quot;Revert&quot;">​</a></h3><p>如果提交恢复了之前的提交，它应该以 <code>revert:</code>开头，后面跟着被恢复的提交的头部。在 <code>body</code> 中，它应该说: <code>This revert commit &lt;hash&gt;</code>。其中的哈希值是被还原的提交的哈希。</p><h3 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;Type&quot;">​</a></h3><p>如果前缀是<code>feat</code>， <code>fix</code>或<code>perf</code>，它将出现在 <code>changelog</code> 中。然而，如果有任何<a href="#footer">BREAKING CHANGE</a>，提交将始终出现在 <code>changelog</code> 中。</p><p>其他前缀由您自行决定。建议使用<code>docs</code>、<code>chore</code>、<code>style</code>、<code>refactor</code>和<code>test</code>作为非变更日志相关任务的前缀。</p><h3 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h3><p>范围可以是任何指定提交更改位置的内容。例如 <code>dev</code>, <code>build</code>, <code>workflow</code>, <code>cli</code> 等等...</p><h3 id="subject" tabindex="-1">Subject <a class="header-anchor" href="#subject" aria-label="Permalink to &quot;Subject&quot;">​</a></h3><p>主题包含了对变化的简要描述:</p><ul><li>使用祈使句，现在时: &quot;change&quot;而不是&quot;changed&quot;或&quot;changes&quot;</li><li>不要把第一个字母大写</li><li>末尾没有点(.)</li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><p>和 <strong>subject</strong> 一样, 使用祈使句，现在时: &quot;change&quot;而不是&quot;changed&quot;或&quot;changes&quot;，</p><p>正文应该包括改变的动机，并将其与之前的行为进行对比。</p><p>如果上线<code>rebase</code>分支提交信息，需要包含迭代周期信息。如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>release: 1.0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【211213-211220】期：</span></span>
<span class="line"><span>- feat: xxx</span></span>
<span class="line"><span>- fix: xxx</span></span></code></pre></div><h3 id="footer" tabindex="-1">Footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;Footer&quot;">​</a></h3><p>页脚应该包含任何关于<strong>BREAKING CHANGE</strong>的信息，或者是写关于禅道问题关闭的地方。</p><p><strong>Breaking Changes</strong> 应该以 <code>BREAKING CHANGE:</code> + 一个空格 + 两个换行开头，其余和完整消息格式一致。</p><h2 id="版本号" tabindex="-1">版本号 <a class="header-anchor" href="#版本号" aria-label="Permalink to &quot;版本号&quot;">​</a></h2><h3 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h3><p><code>[主版本号].[副版本号].[修复版本号]</code></p><p>例如： <code>1.0.1</code></p><h3 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h3><ul><li>巨大改动，主版本号 +1</li><li>功能迭代，副版本号 +1</li><li>修复问题，修复版本号 +1</li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>每次发布上线，只能更改其中一个版本号, 某个版本号变动后，其后边的版本号归零。</p><p>如当前版本为<code>1.0.1</code>，进行了一次功能迭代，版本号变动为<code>1.1.0</code></p></div>`,54)]))}const b=s(n,[["render",d]]);export{g as __pageData,b as default};
