import{_ as a,c as n,a2 as e,o as p}from"./chunks/framework.DPDg7N6I.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/linux/systemctl.md","filePath":"pages/linux/systemctl.md"}'),t={name:"pages/linux/systemctl.md"};function l(r,s,i,c,o,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="注册系统服务" tabindex="-1">注册系统服务 <a class="header-anchor" href="#注册系统服务" aria-label="Permalink to &quot;注册系统服务&quot;">​</a></h2><p>/usr/lib/systemd/system/code-server.service</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Vs Code Server</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=exec</span></span>
<span class="line"><span>ExecStart=/root/Software/code-server-3.6.2-linux-arm64/code-server</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>User=root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=default.target</span></span></code></pre></div>`,3)]))}const h=a(t,[["render",l]]);export{u as __pageData,h as default};
