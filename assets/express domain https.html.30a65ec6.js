import{r as a,a as r,c as t,f as e,b as c,F as l,g as s,e as i}from"./app.dc3b6072.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const o={},d=e("h2",{id:"\u751F\u6210-csr",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u751F\u6210-csr","aria-hidden":"true"},"#"),s(" \u751F\u6210 csr")],-1),h=s("\u9996\u5148\u53BB "),b={href:"https://www.chinassl.net/ssltools/generator-csr.html",title:"csr",target:"_blank",rel:"noopener noreferrer"},m=s("csr"),x=s(" \u5728\u7EBF\u751F\u6210\u7F51\u7AD9\u751F\u6210\u81EA\u5DF1\u7684 csr"),_=i(`<h2 id="\u7533\u8BF7\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u7533\u8BF7\u8BC1\u4E66" aria-hidden="true">#</a> \u7533\u8BF7\u8BC1\u4E66</h2><p>\u8F93\u5165\u90AE\u7BB1\u4EE5\u540E RSA DNS \u9A8C\u8BC1 \u6211\u6709\u81EA\u5DF1\u7684 CSR</p><h2 id="\u5C06-key-\u548C-pem-\u653E\u5165\u9879\u76EE\u4E0A\u4F20\u5230\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5C06-key-\u548C-pem-\u653E\u5165\u9879\u76EE\u4E0A\u4F20\u5230\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5C06 key \u548C pem \u653E\u5165\u9879\u76EE\u4E0A\u4F20\u5230\u670D\u52A1\u5668</h2><h2 id="\u914D\u7F6E-nginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-nginx" aria-hidden="true">#</a> \u914D\u7F6E nginx</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
   listen 80;
   listen 443 ssl http2; //\u5B9D\u5854\u5FC5\u987B\u6709\u8FD9\u4E2A
   server_name  xxx;
   # \u5F00\u542F ssl
   ssl on;
   # \u6307\u5B9A ssl \u8BC1\u4E66\u8DEF\u5F84
   ssl_certificate /www/wwwroot/xxx/xxx/https/server.pem;
   # \u6307\u5B9A\u79C1\u94A5\u6587\u4EF6\u8DEF\u5F84
   ssl_certificate_key /www/wwwroot/xxx/xxx/https/server.key;

   location / {
       proxy_pass      https://127.0.0.1:3000;//\u6307\u5B9A\u53CD\u5411\u4EE3\u7406
       }
   }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5);function u(f,w){const n=a("ExternalLinkIcon");return r(),t(l,null,[d,e("p",null,[h,e("a",b,[m,c(n)]),x]),_],64)}var k=p(o,[["render",u]]);export{k as default};
