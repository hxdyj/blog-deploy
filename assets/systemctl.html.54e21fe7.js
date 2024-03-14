import{e}from"./app.24627d88.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h2 id="\u6CE8\u518C\u7CFB\u7EDF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u7CFB\u7EDF\u670D\u52A1" aria-hidden="true">#</a> \u6CE8\u518C\u7CFB\u7EDF\u670D\u52A1</h2><p>/usr/lib/systemd/system/code-server.service</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=Vs Code Server
After=network.target

[Service]
Type=exec
ExecStart=/root/Software/code-server-3.6.2-linux-arm64/code-server
Restart=always
User=root

[Install]
WantedBy=default.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3);function r(t,l){return a}var i=s(n,[["render",r]]);export{i as default};
