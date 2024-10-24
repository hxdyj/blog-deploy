import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.DPDg7N6I.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/tools/Gitlab.md","filePath":"pages/tools/Gitlab.md"}'),l={name:"pages/tools/Gitlab.md"};function e(h,s,k,p,r,F){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="ci-cd" tabindex="-1">CI/CD <a class="header-anchor" href="#ci-cd" aria-label="Permalink to &quot;CI/CD&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /srv/gitlab-runner/config:/etc/gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab/gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> register</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --non-interactive</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --executor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;docker&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --docker-image</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node:latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://xxxxxx/&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --registration-token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxxxxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --description</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sentry-server-runner&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --tag-list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sentry&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --run-untagged=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --locked=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --access-level=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;not_protected&quot;</span></span></code></pre></div>`,2)]))}const o=i(l,[["render",e]]);export{C as __pageData,o as default};
