import{_ as a,c as n,a2 as e,o as p}from"./chunks/framework.DPDg7N6I.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/linux/express domain https.md","filePath":"pages/linux/express domain https.md"}'),t={name:"pages/linux/express domain https.md"};function l(r,s,i,c,o,h){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="生成-csr" tabindex="-1">生成 csr <a class="header-anchor" href="#生成-csr" aria-label="Permalink to &quot;生成 csr&quot;">​</a></h2><p>首先去 <a href="https://www.chinassl.net/ssltools/generator-csr.html" title="csr" target="_blank" rel="noreferrer">csr</a> 在线生成网站生成自己的 csr</p><h2 id="申请证书" tabindex="-1">申请证书 <a class="header-anchor" href="#申请证书" aria-label="Permalink to &quot;申请证书&quot;">​</a></h2><p>输入邮箱以后 RSA DNS 验证 我有自己的 CSR</p><h2 id="将-key-和-pem-放入项目上传到服务器" tabindex="-1">将 key 和 pem 放入项目上传到服务器 <a class="header-anchor" href="#将-key-和-pem-放入项目上传到服务器" aria-label="Permalink to &quot;将 key 和 pem 放入项目上传到服务器&quot;">​</a></h2><h2 id="配置-nginx" tabindex="-1">配置 nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to &quot;配置 nginx&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>   listen 80;</span></span>
<span class="line"><span>   listen 443 ssl http2; //宝塔必须有这个</span></span>
<span class="line"><span>   server_name  xxx;</span></span>
<span class="line"><span>   # 开启 ssl</span></span>
<span class="line"><span>   ssl on;</span></span>
<span class="line"><span>   # 指定 ssl 证书路径</span></span>
<span class="line"><span>   ssl_certificate /www/wwwroot/xxx/xxx/https/server.pem;</span></span>
<span class="line"><span>   # 指定私钥文件路径</span></span>
<span class="line"><span>   ssl_certificate_key /www/wwwroot/xxx/xxx/https/server.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   location / {</span></span>
<span class="line"><span>       proxy_pass      https://127.0.0.1:3000;//指定反向代理</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   }</span></span></code></pre></div>`,7)]))}const m=a(t,[["render",l]]);export{x as __pageData,m as default};
