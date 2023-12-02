import{e as n}from"./app.dc3b6072.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register <span class="token punctuation">\\</span>
  --non-interactive <span class="token punctuation">\\</span>
  --executor <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>
  --docker-image node:latest <span class="token punctuation">\\</span>
  --url <span class="token string">&quot;http://xxxxxx/&quot;</span> <span class="token punctuation">\\</span>
  --registration-token <span class="token string">&quot;xxxxxx&quot;</span> <span class="token punctuation">\\</span>
  --description <span class="token string">&quot;sentry-server-runner&quot;</span> <span class="token punctuation">\\</span>
  --tag-list <span class="token string">&quot;sentry&quot;</span> <span class="token punctuation">\\</span>
  --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>
  --locked<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>
  --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,2);function t(p,r){return e}var l=s(a,[["render",t]]);export{l as default};
