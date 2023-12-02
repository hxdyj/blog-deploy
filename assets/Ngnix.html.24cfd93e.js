import{e as n}from"./app.dc3b6072.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var e="/img/Nginx\u540C\u4E00\u7AEF\u53E3\u4E0B\u90E8\u7F72\u591A\u4E2AVue3\u9879\u76EE.png";const a={},r=n(`<h2 id="nginx-\u914D\u7F6E\u5730\u5740\u8F6C\u53D1\u5230-tomcat" tabindex="-1"><a class="header-anchor" href="#nginx-\u914D\u7F6E\u5730\u5740\u8F6C\u53D1\u5230-tomcat" aria-hidden="true">#</a> nginx \u914D\u7F6E\u5730\u5740\u8F6C\u53D1\u5230 tomcat</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	try_files $uri $uri/ /index.html; //https://www.cnblogs.com/boundless-sky/p/9459775.html\u4ECB\u7ECD\u8FD9\u4E2A\u5C5E\u6027\u7684


	location /prod-api/{
  		proxy_set_header Host $http_host;
  		proxy_set_header X-Real-IP $remote_addr;
  		proxy_set_header REMOTE-HOST $remote_addr;
  		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  		proxy_pass http://localhost:8080/atwr-park-manage-prod-api/;
  	}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="host-\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#host-\u8BE6\u89E3" aria-hidden="true">#</a> $host \u8BE6\u89E3</h2><p>nginx \u4E3A\u4E86\u5B9E\u73B0\u53CD\u5411\u4EE3\u7406\u7684\u9700\u6C42\u800C\u589E\u52A0\u4E86\u4E00\u4E2A ngx_http_proxy_module \u6A21\u5757\u3002\u5176\u4E2D proxy_set_header \u6307\u4EE4\u5C31\u662F\u8BE5\u6A21\u5757\u9700\u8981\u8BFB\u53D6\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u5728\u8FD9\u91CC\uFF0C\u6240\u6709\u8BBE\u7F6E\u7684\u503C\u7684\u542B\u4E49\u548C http \u8BF7\u6C42\u540C\u4E2D\u7684\u542B\u4E49\u5B8C\u5168\u76F8\u540C\uFF0C\u9664\u4E86 Host \u5916\u8FD8\u6709 X-Forward-For\u3002</p><p>Host \u7684\u542B\u4E49\u662F\u8868\u660E\u8BF7\u6C42\u7684\u4E3B\u673A\u540D\uFF0C\u56E0\u4E3A nginx \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u4F7F\u7528\uFF0C\u800C\u5982\u679C\u540E\u7AEF\u771F\u662F\u7684\u670D\u52A1\u5668\u8BBE\u7F6E\u6709\u7C7B\u4F3C\u9632\u76D7\u94FE\u6216\u8005\u6839\u636E http \u8BF7\u6C42\u5934\u4E2D\u7684 host \u5B57\u6BB5\u6765\u8FDB\u884C\u8DEF\u7531\u6216\u5224\u65AD\u529F\u80FD\u7684\u8BDD\uFF0C\u5982\u679C\u53CD\u5411\u4EE3\u7406\u5C42\u7684 nginx \u4E0D\u91CD\u5199\u8BF7\u6C42\u5934\u4E2D\u7684 host \u5B57\u6BB5\uFF0C\u5C06\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u5931\u8D25\u3010\u9ED8\u8BA4\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u4F1A\u5411\u540E\u7AEF\u771F\u5B9E\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u5E76\u4E14\u8BF7\u6C42\u5934\u4E2D\u7684 host \u5B57\u6BB5\u5E94\u4E3A proxy_pass \u6307\u4EE4\u8BBE\u7F6E\u7684\u670D\u52A1\u5668\u3011\u3002</p><p>\u540C\u7406\uFF0CX_Forward_For \u5B57\u6BB5\u8868\u793A\u8BE5\u6761 http \u8BF7\u6C42\u662F\u6709\u8C01\u53D1\u8D77\u7684\uFF1F\u5982\u679C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u4E0D\u91CD\u5199\u8BE5\u8BF7\u6C42\u5934\u7684\u8BDD\uFF0C\u90A3\u4E48\u540E\u7AEF\u771F\u5B9E\u670D\u52A1\u5668\u5728\u5904\u7406\u65F6\u4F1A\u8BA4\u4E3A\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u6765\u5728\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u6709\u9632\u653B\u51FB\u7B56\u7565\u7684\u8BDD\uFF0C\u90A3\u4E48\u673A\u5668\u5C31\u88AB\u5C01\u6389\u4E86\u3002\u56E0\u6B64\uFF0C\u5728\u914D\u7F6E\u7528\u4F5C\u53CD\u5411\u4EE3\u7406\u7684 nginx \u4E2D\u4E00\u822C\u4F1A\u589E\u52A0\u4E24\u6761\u914D\u7F6E\uFF0C\u4FEE\u6539 http \u7684\u8BF7\u6C42\u5934\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>proxy_set_header Host $http_host;
proxy_set_header X-Forward-For $remote_addr;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u91CC\u7684$http_host \u548C$remote_addr \u90FD\u662F nginx \u7684\u5BFC\u51FA\u53D8\u91CF\uFF0C\u53EF\u4EE5\u518D\u914D\u7F6E\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u3002\u5982\u679C Host \u8BF7\u6C42\u5934\u90E8\u6CA1\u6709\u51FA\u73B0\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u5219$http_host \u503C\u4E3A\u7A7A\uFF0C\u4F46\u662F$host \u503C\u4E3A\u4E3B\u57DF\u540D\u3002\u56E0\u6B64\uFF0C\u4E00\u822C\u800C\u8A00\uFF0C\u4F1A\u7528$host \u4EE3\u66FF$http_host \u53D8\u91CF\uFF0C\u4ECE\u800C\u907F\u514D http \u8BF7\u6C42\u4E2D\u4E22\u5931 Host \u5934\u90E8\u7684\u60C5\u51B5\u4E0B Host \u4E0D\u88AB\u91CD\u5199\u7684\u5931\u8BEF\u3002</p><h3 id="x-forwarded-for" tabindex="-1"><a class="header-anchor" href="#x-forwarded-for" aria-hidden="true">#</a> X-Forwarded-For</h3><p>X-Forwarded-For:\u7B80\u79F0 XFF \u5934\uFF0C\u5B83\u4EE3\u8868\u5BA2\u6237\u7AEF\uFF0C\u4E5F\u5C31\u662F HTTP \u7684\u8BF7\u6C42\u7AEF\u771F\u5B9E\u7684 IP\uFF0C\u53EA\u6709\u5728\u901A\u8FC7\u4E86 HTTP \u4EE3\u7406\u6216\u8005\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u65F6\u624D\u4F1A\u6DFB\u52A0\u8BE5\u9879\u3002 \u5B83\u4E0D\u662F RFC \u4E2D\u5B9A\u4E49\u7684\u6807\u51C6\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u5728 squid \u7F13\u5B58\u4EE3\u7406\u670D\u52A1\u5668\u5F00\u53D1\u6587\u6863\u4E2D\u53EF\u4EE5\u627E\u5230\u8BE5\u9879\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u3002\u6807\u51C6\u683C\u5F0F\u5982\u4E0B\uFF1AX-Forwarded-For: client1, proxy1, proxy2\u3002</p><p>\u8FD9\u4E00 HTTP \u5934\u4E00\u822C\u683C\u5F0F\u5982\u4E0B:</p><p><code>X-Forwarded-For: client1, proxy1, proxy2</code></p><p>\u5176\u4E2D\u7684\u503C\u901A\u8FC7\u4E00\u4E2A \u9017\u53F7+\u7A7A\u683C \u628A\u591A\u4E2A IP \u5730\u5740\u533A\u5206\u5F00, \u6700\u5DE6\u8FB9(client1)\u662F\u6700\u539F\u59CB\u5BA2\u6237\u7AEF\u7684 IP \u5730\u5740, \u4EE3\u7406\u670D\u52A1\u5668\u6BCF\u6210\u529F\u6536\u5230\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5C31\u628A \u8BF7\u6C42\u6765\u6E90 IP \u5730\u5740\u6DFB\u52A0\u5230\u53F3\u8FB9\u3002 \u5728\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u6210\u529F\u901A\u8FC7\u4E86\u4E09\u53F0\u4EE3\u7406\u670D\u52A1\u5668\uFF1Aproxy1, proxy2 \u53CA proxy3\u3002\u8BF7\u6C42\u7531 client1 \u53D1\u51FA\uFF0C\u5230\u8FBE\u4E86 proxy3(proxy3 \u53EF\u80FD\u662F\u8BF7\u6C42\u7684\u7EC8\u70B9)\u3002\u8BF7\u6C42\u521A\u4ECE client1 \u4E2D\u53D1\u51FA\u65F6\uFF0CXFF \u662F\u7A7A\u7684\uFF0C\u8BF7\u6C42\u88AB\u53D1\u5F80 proxy1\uFF1B\u901A\u8FC7 proxy1 \u7684\u65F6\u5019\uFF0Cclient1 \u88AB\u6DFB\u52A0\u5230 XFF \u4E2D\uFF0C\u4E4B\u540E\u8BF7\u6C42\u88AB\u53D1\u5F80 proxy2;\u901A\u8FC7 proxy2 \u7684\u65F6\u5019\uFF0Cproxy1 \u88AB\u6DFB\u52A0\u5230 XFF \u4E2D\uFF0C\u4E4B\u540E\u8BF7\u6C42\u88AB\u53D1\u5F80 proxy3\uFF1B\u901A\u8FC7 proxy3 \u65F6\uFF0Cproxy2 \u88AB\u6DFB\u52A0\u5230 XFF \u4E2D\uFF0C\u4E4B\u540E\u8BF7\u6C42\u7684\u7684\u53BB\u5411\u4E0D\u660E\uFF0C\u5982\u679C proxy3 \u4E0D\u662F\u8BF7\u6C42\u7EC8\u70B9\uFF0C\u8BF7\u6C42\u4F1A\u88AB\u7EE7\u7EED\u8F6C\u53D1\u3002</p><p>\u9274\u4E8E\u4F2A\u9020\u8FD9\u4E00\u5B57\u6BB5\u975E\u5E38\u5BB9\u6613\uFF0C\u5E94\u8BE5\u8C28\u614E\u4F7F\u7528 X-Forwarded-For \u5B57\u6BB5\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B XFF \u4E2D\u6700\u540E\u4E00\u4E2A IP \u5730\u5740\u662F\u6700\u540E\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\u7684 IP \u5730\u5740, \u8FD9\u901A\u5E38\u662F\u4E00\u4E2A\u6BD4\u8F83\u53EF\u9760\u7684\u4FE1\u606F\u6765\u6E90\u3002</p><h3 id="host-\u53D8\u91CF\u7684\u503C\u6309\u7167\u5982\u4E0B\u4F18\u5148\u7EA7\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#host-\u53D8\u91CF\u7684\u503C\u6309\u7167\u5982\u4E0B\u4F18\u5148\u7EA7\u83B7\u5F97" aria-hidden="true">#</a> host \u53D8\u91CF\u7684\u503C\u6309\u7167\u5982\u4E0B\u4F18\u5148\u7EA7\u83B7\u5F97\uFF1A</h3><ol><li>\u8BF7\u6C42\u884C\u4E2D\u7684 host.</li><li>\u8BF7\u6C42\u5934\u4E2D\u7684 Host \u5934\u90E8.</li><li>\u4E0E\u4E00\u6761\u8BF7\u6C42\u5339\u914D\u7684 server name.</li></ol><h4 id="\u4EC0\u4E48\u662F\u8BF7\u6C42\u884C\u4E2D\u7684-host" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u8BF7\u6C42\u884C\u4E2D\u7684-host" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u8BF7\u6C42\u884C\u4E2D\u7684 host</h4><p>\u6211\u4EEC\u77E5\u9053\uFF0CHTTP \u662F\u4E00\u4E2A\u6587\u672C\u534F\u8BAE\uFF0C\u5EFA\u7ACB\u5728\u4E00\u4E2A\u53EF\u9760\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\u4E4B\u4E0A\u3002\u8FD9\u4E2A\u4F20\u8F93\u5C42\u534F\u8BAE\u8981\u662F\u53EF\u9760\u7684\uFF0C\u9762\u5411\u8FDE\u63A5\u7684\u3002\u7531\u4E8E TCP \u7684\u666E\u53CA\u7A0B\u5EA6\uFF0C\u8BA9\u5B83\u6210\u4E86 HTTP \u4E0B\u5C42\u534F\u8BAE\u4E8B\u73B0\u4E0A\u7684\u6807\u51C6\u3002\u4F46\u6211\u4EEC\u8981\u77E5\u9053\uFF0CHTTP \u5E76\u4E0D\u4EC5\u9650\u4E8E\u5EFA\u7ACB\u5728 TCP \u4E4B\u4E0A\u3002\u53EA\u8981\u662F\u53EF\u9760\u7684\uFF0C\u9762\u5411\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u90FD\u53EF\u4EE5\u7528\u6765\u4F20\u8F93 HTTP\u3002\u4E0B\u9762\u6240\u8BF4\u7684 HTTP\uFF0C\u90FD\u662F\u6307\u642D\u8F7D\u5728 TCP \u4E4B\u4E0A\u7684 HTTP\u3002</p><p>\u4E00\u4E2A HTTP \u8BF7\u6C42\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF0C\u5BA2\u6237\u7AEF\u5148\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8D77 TCP \u8FDE\u63A5\uFF0C\u7136\u540E\u518D\u4E0E\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u8BF7\u6C42\u548C\u56DE\u590D\u7684\u6536\u53D1\u3002\u8BF7\u6C42\u5305\u542B\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u4F53\uFF0C\u5176\u4E2D\uFF0C\u6839\u636E\u8BF7\u6C42\u65B9\u6CD5\u7684\u4E0D\u540C\uFF0C\u8BF7\u6C42\u4F53\u662F\u53EF\u9009\u7684\u3002</p><p>\u5728\u53D1\u9001\u8BF7\u6C42\u884C\u4E4B\u524D\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u8FDE\u63A5\u3002\u6240\u4EE5\u6B64\u65F6\u8BF7\u6C42\u884C\u4E2D\u5E76\u4E0D\u9700\u8981\u6709\u670D\u52A1\u5668\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u7528 telnet \u6D4B\u8BD5, \u4F8B\u5982:</p><p><code>GET /index.php HTTP/1.1</code></p><p>\u8FD9\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 HTTP \u8BF7\u6C42\u884C\u3002\u867D\u7136\u8BF7\u6C42\u884C\u4E2D\u4E0D\u9700\u8981\u6709\u670D\u52A1\u5668\u7684\u4FE1\u606F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u5728\u8BF7\u6C42\u884C\u4E2D\u5305\u542B\u670D\u52A1\u5668\u7684\u4FE1\u606F\u3002\u4F8B\u5982\uFF1A</p><p><code>GET www.test.info/index.php HTTP/1.1</code></p><p>\u4E24\u8005\u4E00\u6BD4\u8F83\uFF0C\u5C31\u5F88\u5BB9\u6613\u7406\u89E3\u4EC0\u4E48\u53EB\u8BF7\u6C42\u884C\u4E2D\u7684 host \u4E86\u3002\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u884C\u4E2D\uFF0C\u5C31\u6CA1\u6709 host\uFF0C\u7B2C\u4E8C\u79CD\u8BF7\u6C42\u884C\u4E2D\uFF0C\u5C31\u5E26\u4E86 host\uFF0C\u4E3Awww.test.info\u3002</p><h4 id="host-\u8BF7\u6C42\u5934\u4E0E-http-1-0\u3001http-1-1" tabindex="-1"><a class="header-anchor" href="#host-\u8BF7\u6C42\u5934\u4E0E-http-1-0\u3001http-1-1" aria-hidden="true">#</a> Host \u8BF7\u6C42\u5934\u4E0E HTTP/1.0\u3001HTTP/1.1</h4><p>\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u884C\u4E0B\u9762\u5C31\u662F\u4E00\u4E9B\u5217\u7684\u8BF7\u6C42\u5934\u3002\u8FD9\u4E9B\u8BF7\u6C42\u5934\uFF0C\u5728 HTTP/1.0 \u4E2D\uFF0C\u90FD\u662F\u53EF\u9009\u7684\uFF0C\u4E14 HTTP/1.0 \u4E0D\u652F\u6301 Host \u8BF7\u6C42\u5934\uFF1B\u800C\u5728 HTTP/1.1 \u4E2D\uFF0CHost \u8BF7\u6C42\u5934\u90E8\u5FC5\u987B\u5B58\u5728,\u5426\u5219\u4F1A\u8FD4\u56DE 400 Bad Request \u6211\u4EEC\u770B\u4E2A\u4F8B\u5B50, \u4F7F\u7528 telnet \u8FDE\u63A5:</p><p><code>GET /index.php HTTP/1.1 HTTP/1.1 400 Bad Request Server: nginx/1.4.6 (Ubuntu)</code></p><p>\u4F46\u662F HTTP/1.0 \u662F\u4E0D\u652F\u6301 Host \u5934\u90E8\u7684,\u6240\u4EE5\u8BF7\u6C42,\u4E0D\u9700\u8981\u5E26\u8FD9\u4E2A Host,\u6211\u4EEC\u4E5F\u6D4B\u8BD5\u4E00\u4E0B:</p><p><code>HEAD /rec/app/detail/youxidaren.html HTTP/1.0 HTTP/1.1 404 NOT FOUND Server: nginx/1.4.6 (Ubuntu)</code></p><p>\u53EF\u4EE5\u770B\u5230\u6CA1\u6709\u8FD4\u56DE 400\uFF0C \u800C\u662F\u8FD4\u56DE\u4E86 404\uFF0C\u8BF4\u660E\u8FD9\u4E2A\u8BF7\u6C42\u8FD8\u662F\u6765\u5230 nginx \u5904\u7406\uFF0C\u547D\u4E2D\u4E86\u5176\u4E2D\u4E00\u4E2A\u914D\u7F6E\u7684&quot;\u865A\u62DF\u4E3B\u673A&quot;, \u6211\u5230 nginx \u4E0B\u9762\u770B access_log\uFF0C\u770B\u5230\u65E5\u5FD7\u5199\u5728\u4E86\u7B2C\u4E00\u4E2A\u7684 nginx \u865A\u62DF\u4E3B\u673A\u914D\u7F6E\u7684\u65E5\u5FD7\u6587\u4EF6\u4E0B\u9762\uFF0C\u8BF4\u660E http1.0 \u60C5\u51B5\u4E0B\uFF0C\u6CA1\u6709\u5E26 host \u5934\u90E8\uFF0C\u8BF7\u6C42\u9ED8\u8BA4\u6765\u5230\u4E86 nginx \u7B2C\u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\u4E0B\u5904\u7406\u3002</p><h4 id="\u4EC0\u4E48\u662F\u4E0E\u8BF7\u6C42\u5339\u914D\u7684-server-name" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4E0E\u8BF7\u6C42\u5339\u914D\u7684-server-name" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u4E0E\u8BF7\u6C42\u5339\u914D\u7684 server name</h4><p>server name \u662F\u6307\u5728 Nginx \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5728 server \u5757\u4E2D\uFF0C\u7528 server_name \u6307\u4EE4\u8BBE\u7F6E\u7684\u503C\u3002\u4E00\u4E2A server \u53EF\u4EE5\u591A\u6B21\u4F7F\u7528 server_name \u6307\u4EE4\uFF0C\u6765\u5B9E\u73B0\u4FD7\u79F0\u7684\u201C\u865A\u62DF\u4E3B\u673A\u201D\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server { listen 80; server_name example.org www.example.org; ... }

server { listen 80; server_name example.net www.example.net; ... }

server { listen 80; server_name example.com www.example.com; ... }

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5173\u4E8E\u865A\u62DF\u4E3B\u673A\u7684\u786E\u5B9A\u65B9\u6CD5\uFF0C\u8FD8\u662F\u5F15\u7528 Nginx \u7684\u5B98\u65B9\u6587\u6863\uFF1A</p><p>\u5728\u8FD9\u4E2A\u914D\u7F6E\u4E2D\uFF0Cnginx \u4EC5\u4EC5\u68C0\u67E5\u8BF7\u6C42\u7684\u201CHost\u201D\u5934\u4EE5\u51B3\u5B9A\u8BE5\u8BF7\u6C42\u5E94\u7531\u54EA\u4E2A\u865A\u62DF\u4E3B\u673A\u6765\u5904\u7406\u3002\u5982\u679C Host \u5934\u6CA1\u6709\u5339\u914D\u4EFB\u610F\u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\uFF0C\u6216\u8005\u8BF7\u6C42\u4E2D\u6839\u672C\u6CA1\u6709\u5305\u542B Host \u5934\uFF0C\u90A3 nginx \u4F1A\u5C06\u8BF7\u6C42\u5206\u53D1\u5230\u5B9A\u4E49\u5728\u6B64\u7AEF\u53E3\u4E0A\u7684\u9ED8\u8BA4\u865A\u62DF\u4E3B\u673A\u3002\u5728\u4EE5\u4E0A\u914D\u7F6E\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u88AB\u5217\u51FA\u7684\u865A\u62DF\u4E3B\u673A\u5373 nginx \u7684\u9ED8\u8BA4\u865A\u62DF\u4E3B\u673A\u2014\u2014\u8FD9\u662F nginx \u7684\u9ED8\u8BA4\u884C\u4E3A\u3002\u800C\u4E14\uFF0C\u53EF\u4EE5\u663E\u5F0F\u5730\u8BBE\u7F6E\u67D0\u4E2A\u4E3B\u673A\u4E3A\u9ED8\u8BA4\u865A\u62DF\u4E3B\u673A\uFF0C\u5373\u5728\u201Dlisten\u201D\u6307\u4EE4\u4E2D\u8BBE\u7F6E\u201Ddefault_server\u201D\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
listen 80 default_server;
server_name example.net www.example.net;
\u2026
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u5C31\u89E3\u91CA\u4E86\u4E0A\u9762\u7684 HTTP1.0 \u8BF7\u6C42\uFF0C\u4E0D\u5E26 Host \u5934\uFF0C\u9ED8\u8BA4\u6765\u5230\u4E86\u7B2C\u4E00\u4E2A\u914D\u7F6E\u7684 server \u5904\u7406\u4E86\u3002 \u7136\u540E\u6211\u6D4B\u8BD5\u4E00\u4E0B\u628Awww.test.info\u8FD9\u4E2A\u57DF\u540D\u8BBE\u6210\u9ED8\u8BA4\u7684\u4E3B\u673Adefault_server\uFF0C\u770B\u8BF7\u6C42\u80FD\u4E0D\u80FD\u6B63\u5E38\u6765\u5230www.test.info\u8FD9\u4E2Aserver\u6765\u5904\u7406\u3002</p><p>nginx \u914D\u7F6E\u4FEE\u6539\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server { listen 80 default_server; server_name www.test.info }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u518D\u6B21\u8BF7\u6C42\uFF1A</p><p>HEAD /index.php HTTP/1.0 HTTP/1.1 200 OK Server: nginx/1.4.6 (Ubuntu) \u5B9E\u9645\u6D4B\u8BD5\uFF0C\u6B63\u5E38\uFF0Cdefault_server \u786E\u5B9E\u8D77\u4F5C\u7528\u4E86\u3002</p><h2 id="nginx-\u914D\u7F6E\u9879\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#nginx-\u914D\u7F6E\u9879\u8BE6\u89E3" aria-hidden="true">#</a> nginx \u914D\u7F6E\u9879\u8BE6\u89E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u5B89\u5168\u95EE\u9898\uFF0C\u5EFA\u8BAE\u7528nobody,\u4E0D\u8981\u7528root.
#user  nobody;

#worker\u6570\u548C\u670D\u52A1\u5668\u7684cpu\u6570\u76F8\u7B49\u662F\u6700\u4E3A\u9002\u5B9C
worker_processes  2;

#work\u7ED1\u5B9Acpu(4 work\u7ED1\u5B9A4cpu)
worker_cpu_affinity 0001 0010 0100 1000

#work\u7ED1\u5B9Acpu (4 work\u7ED1\u5B9A8cpu\u4E2D\u76844\u4E2A) \u3002
worker_cpu_affinity 0000001 00000010 00000100 00001000



#error_log path(\u5B58\u653E\u8DEF\u5F84) level(\u65E5\u5FD7\u7B49\u7EA7)\vpath\u8868\u793A\u65E5\u5FD7\u8DEF\u5F84\uFF0Clevel\u8868\u793A\u65E5\u5FD7\u7B49\u7EA7\uFF0C
#\u5177\u4F53\u5982\u4E0B\uFF1A\v[ debug | info | notice | warn | error | crit ]
#\u4ECE\u5DE6\u81F3\u53F3\uFF0C\u65E5\u5FD7\u8BE6\u7EC6\u7A0B\u5EA6\u9010\u7EA7\u9012\u51CF\uFF0C\u5373debug\u6700\u8BE6\u7EC6\uFF0Ccrit\u6700\u5C11\uFF0C\u9ED8\u8BA4\u4E3Acrit\u3002

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    #\u8FD9\u4E2A\u503C\u662F\u8868\u793A\u6BCF\u4E2Aworker\u8FDB\u7A0B\u6240\u80FD\u5EFA\u7ACB\u8FDE\u63A5\u7684\u6700\u5927\u503C\uFF0C\u6240\u4EE5\uFF0C\u4E00\u4E2Anginx\u80FD\u5EFA\u7ACB\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u5E94\u8BE5\u662Fworker_connections * worker_processes\u3002
    #\u5F53\u7136\uFF0C\u8FD9\u91CC\u8BF4\u7684\u662F\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u5BF9\u4E8EHTTP\u8BF7\u6C42\u672C\u5730\u8D44\u6E90\u6765\u8BF4\uFF0C\u80FD\u591F\u652F\u6301\u7684\u6700\u5927\u5E76\u53D1\u6570\u91CF\u662Fworker_connections * worker_processes\uFF0C
    #\u5982\u679C\u662F\u652F\u6301http1.1\u7684\u6D4F\u89C8\u5668\u6BCF\u6B21\u8BBF\u95EE\u8981\u5360\u4E24\u4E2A\u8FDE\u63A5\uFF0C
    #\u6240\u4EE5\u666E\u901A\u7684\u9759\u6001\u8BBF\u95EE\u6700\u5927\u5E76\u53D1\u6570\u662F\uFF1A worker_connections * worker_processes /2\uFF0C
    #\u800C\u5982\u679C\u662FHTTP\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u6765\u8BF4\uFF0C\u6700\u5927\u5E76\u53D1\u6570\u91CF\u5E94\u8BE5\u662Fworker_connections * worker_processes/4\u3002
    #\u56E0\u4E3A\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u6BCF\u4E2A\u5E76\u53D1\u4F1A\u5EFA\u7ACB\u4E0E\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u548C\u4E0E\u540E\u7AEF\u670D\u52A1\u7684\u8FDE\u63A5\uFF0C\u4F1A\u5360\u7528\u4E24\u4E2A\u8FDE\u63A5\u3002

    worker_connections  1024;

    #\u8FD9\u4E2A\u503C\u662F\u8868\u793Anginx\u8981\u652F\u6301\u54EA\u79CD\u591A\u8DEFio\u590D\u7528\u3002
    #\u4E00\u822C\u7684Linux\u9009\u62E9epoll, \u5982\u679C\u662F(*BSD)\u7CFB\u5217\u7684Linux\u4F7F\u7528kquene\u3002
    #windows\u7248\u672C\u7684nginx\u4E0D\u652F\u6301\u591A\u8DEFIO\u590D\u7528\uFF0C\u8FD9\u4E2A\u503C\u4E0D\u7528\u914D\u3002
    use epoll;

    # \u5F53\u4E00\u4E2Aworker\u62A2\u5360\u5230\u4E00\u4E2A\u94FE\u63A5\u65F6\uFF0C\u662F\u5426\u5C3D\u53EF\u80FD\u7684\u8BA9\u5176\u83B7\u5F97\u66F4\u591A\u7684\u8FDE\u63A5,\u9ED8\u8BA4\u662Foff \u3002
    multi_accept on;

    # \u9ED8\u8BA4\u662Fon ,\u5F00\u542Fnginx\u7684\u62A2\u5360\u9501\u673A\u5236\u3002
    accept_mutex  on;
}


http {
    #\u5F53web\u670D\u52A1\u5668\u6536\u5230\u9759\u6001\u7684\u8D44\u6E90\u6587\u4EF6\u8BF7\u6C42\u65F6\uFF0C\u4F9D\u636E\u8BF7\u6C42\u6587\u4EF6\u7684\u540E\u7F00\u540D\u5728\u670D\u52A1\u5668\u7684MIME\u914D\u7F6E\u6587\u4EF6\u4E2D\u627E\u5230\u5BF9\u5E94\u7684MIME Type\uFF0C\u518D\u6839\u636EMIME Type\u8BBE\u7F6EHTTP Response\u7684Content-Type\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u6839\u636EContent-Type\u7684\u503C\u5904\u7406\u6587\u4EF6\u3002

    include       mime.types;

    #\u5982\u679C \u4E0D\u80FD\u4ECEmime.types\u627E\u5230\u6620\u5C04\u7684\u8BDD\uFF0C\u7528\u4EE5\u4E0B\u4F5C\u4E3A\u9ED8\u8BA4\u503C
    default_type  application/octet-stream;



     #\u65E5\u5FD7\u4F4D\u7F6E
     access_log  logs/host.access.log  main;

     #\u4E00\u6761\u5178\u578B\u7684accesslog\uFF1A
     #101.226.166.254 - - [21/Oct/2013:20:34:28 +0800] &quot;GET /movie_cat.php?year=2013 HTTP/1.1&quot; 200 5209 &quot;http://www.baidu.com&quot; &quot;Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDR; .NET4.0C; .NET4.0E; .NET CLR 1.1.4322; Tablet PC 2.0); 360Spider&quot;

     #1\uFF09101.226.166.254:(\u7528\u6237IP)
     #2\uFF09[21/Oct/2013:20:34:28 +0800]\uFF1A(\u8BBF\u95EE\u65F6\u95F4)
     #3\uFF09GET\uFF1Ahttp\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u6709GET\u548CPOST\u4E24\u79CD
     #4\uFF09/movie_cat.php?year=2013\uFF1A\u5F53\u524D\u8BBF\u95EE\u7684\u7F51\u9875\u662F\u52A8\u6001\u7F51\u9875\uFF0Cmovie_cat.php\u5373\u8BF7\u6C42\u7684\u540E\u53F0\u63A5\u53E3\uFF0Cyear=2013\u4E3A\u5177\u4F53\u63A5\u53E3\u7684\u53C2\u6570
     #5\uFF09200\uFF1A\u670D\u52A1\u72B6\u6001\uFF0C200\u8868\u793A\u6B63\u5E38\uFF0C\u5E38\u89C1\u7684\u8FD8\u6709\uFF0C301\u6C38\u4E45\u91CD\u5B9A\u5411\u30014XX\u8868\u793A\u8BF7\u6C42\u51FA\u9519\u30015XX\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF
     #6\uFF095209\uFF1A\u4F20\u9001\u5B57\u8282\u6570\u4E3A5209\uFF0C\u5355\u4F4D\u4E3Abyte
     #7\uFF09&quot;http://www.baidu.com&quot;\uFF1Arefer:\u5373\u5F53\u524D\u9875\u9762\u7684\u4E0A\u4E00\u4E2A\u7F51\u9875
     #8\uFF09&quot;Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; #.NET CLR 3.0.30729; Media Center PC 6.0; MDDR; .NET4.0C; .NET4.0E; .NET CLR 1.1.4322; Tablet PC 2.0); 360Spider&quot;\uFF1A agent\u5B57\u6BB5\uFF1A\u901A\u5E38\u7528\u6765\u8BB0\u5F55\u64CD\u4F5C\u7CFB\u7EDF\u3001\u6D4F\u89C8\u5668\u7248\u672C\u3001\u6D4F\u89C8\u5668\u5185\u6838\u7B49\u4FE1\u606F

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                       &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;



    #\u5F00\u542F\u4ECE\u78C1\u76D8\u76F4\u63A5\u5230\u7F51\u7EDC\u7684\u6587\u4EF6\u4F20\u8F93\uFF0C\u9002\u7528\u4E8E\u6709\u5927\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D\u7684\u60C5\u51B5\uFF0C\u63D0\u9AD8IO\u6548\u7387\u3002
    sendfile        on;


    #\u4E00\u4E2A\u8BF7\u6C42\u5B8C\u6210\u4E4B\u540E\u8FD8\u8981\u4FDD\u6301\u8FDE\u63A5\u591A\u4E45, \u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5B8C\u6210\u8BF7\u6C42\u540E\u76F4\u63A5\u5173\u95ED\u8FDE\u63A5\u3002
    #keepalive_timeout  0;
    keepalive_timeout  65;



    #\u5F00\u542F\u6216\u8005\u5173\u95EDgzip\u6A21\u5757
    #gzip  on ;

    #\u8BBE\u7F6E\u5141\u8BB8\u538B\u7F29\u7684\u9875\u9762\u6700\u5C0F\u5B57\u8282\u6570\uFF0C\u9875\u9762\u5B57\u8282\u6570\u4ECEheader\u5934\u4E2D\u7684Content-Length\u4E2D\u8FDB\u884C\u83B7\u53D6\u3002
    #gzip_min_lenth 1k;

    # gzip\u538B\u7F29\u6BD4\uFF0C1 \u538B\u7F29\u6BD4\u6700\u5C0F\u5904\u7406\u901F\u5EA6\u6700\u5FEB\uFF0C9 \u538B\u7F29\u6BD4\u6700\u5927\u4F46\u5904\u7406\u6700\u6162\uFF08\u4F20\u8F93\u5FEB\u4F46\u6BD4\u8F83\u6D88\u8017cpu\uFF09
    #gzip_comp_level 4;

    #\u5339\u914DMIME\u7C7B\u578B\u8FDB\u884C\u538B\u7F29\uFF0C\uFF08\u65E0\u8BBA\u662F\u5426\u6307\u5B9A\uFF09&quot;text/html&quot;\u7C7B\u578B\u603B\u662F\u4F1A\u88AB\u538B\u7F29\u7684\u3002
    #gzip_types types text/plain text/css application/json  application/x-javascript text/xml



    #\u52A8\u9759\u5206\u79BB
    #\u670D\u52A1\u5668\u7AEF\u9759\u6001\u8D44\u6E90\u7F13\u5B58\uFF0C\u6700\u5927\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\u7684\u6587\u4EF6\uFF0C\u4E0D\u6D3B\u8DC3\u671F\u9650
    open_file_cache max=655350 inactive=20s;

    #\u6D3B\u8DC3\u671F\u9650\u5185\u6700\u5C11\u4F7F\u7528\u7684\u6B21\u6570\uFF0C\u5426\u5219\u89C6\u4E3A\u4E0D\u6D3B\u8DC3\u3002
    open_file_cache_min_uses 2;

    #\u9A8C\u8BC1\u7F13\u5B58\u662F\u5426\u6D3B\u8DC3\u7684\u65F6\u95F4\u95F4\u9694
    open_file_cache_valid 30s;



    upstream myserver{

    # 1\u3001\u8F6E\u8BE2\uFF08\u9ED8\u8BA4\uFF09
    # \u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668down\u6389\uFF0C\u80FD\u81EA\u52A8\u5254\u9664\u3002
    # 2\u3001\u6307\u5B9A\u6743\u91CD
    # \u6307\u5B9A\u8F6E\u8BE2\u51E0\u7387\uFF0Cweight\u548C\u8BBF\u95EE\u6BD4\u7387\u6210\u6B63\u6BD4\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5668\u6027\u80FD\u4E0D\u5747\u7684\u60C5\u51B5\u3002
    #3\u3001IP\u7ED1\u5B9A ip_hash
    # \u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEip\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u89E3\u51B3session\u7684\u95EE\u9898\u3002
    #4\u3001\u5907\u673A\u65B9\u5F0F backup
    # \u6B63\u5E38\u60C5\u51B5\u4E0D\u8BBF\u95EE\u8BBE\u5B9A\u4E3Abackup\u7684\u5907\u673A\uFF0C\u53EA\u6709\u5F53\u6240\u6709\u975E\u5907\u673A\u5168\u90FD\u5B95\u673A\u7684\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u624D\u4F1A\u8FDB\u5907\u673A\u3002
    #5\u3001fair\uFF08\u7B2C\u4E09\u65B9\uFF09
    #\u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D\u3002
    #6\u3001url_hash\uFF08\u7B2C\u4E09\u65B9\uFF09
    #\u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u4E3A\u7F13\u5B58\u65F6\u6BD4\u8F83\u6709\u6548\u3002


      # ip_hash;
             server 192.168.161.132:8080 weight=1;
             server 192.168.161.132:8081 weight=1;

      #fair

      #hash $request_uri
      #hash_method crc32

      }

    server {
        #\u76D1\u542C\u7AEF\u53E3\u53F7
        listen       80;

        #\u670D\u52A1\u540D
        server_name  192.168.161.130;

        #\u5B57\u7B26\u96C6
        #charset utf-8;




	#location [=|~|~*|^~] /uri/ { \u2026 }
	# = \u7CBE\u786E\u5339\u914D
	# ~ \u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199
	# ~* \u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199
	# ^~  \u5173\u95ED\u6B63\u5219\u5339\u914D

	#\u5339\u914D\u539F\u5219\uFF1A

	# 1\u3001\u6240\u6709\u5339\u914D\u5206\u4E24\u4E2A\u9636\u6BB5\uFF0C\u7B2C\u4E00\u4E2A\u53EB\u666E\u901A\u5339\u914D\uFF0C\u7B2C\u4E8C\u4E2A\u53EB\u6B63\u5219\u5339\u914D\u3002
	# 2\u3001\u666E\u901A\u5339\u914D\uFF0C\u9996\u5148\u901A\u8FC7\u201C=\u201D\u6765\u5339\u914D\u5B8C\u5168\u7CBE\u786E\u7684location
        #   2.1\u3001 \u5982\u679C\u6CA1\u6709\u7CBE\u786E\u5339\u914D\u5230\uFF0C \u90A3\u4E48\u6309\u7167\u6700\u5927\u524D\u7F00\u5339\u914D\u7684\u539F\u5219\uFF0C\u6765\u5339\u914Dlocation
        #   2.2\u3001 \u5982\u679C\u5339\u914D\u5230\u7684location\u6709^~,\u5219\u4EE5\u6B64location\u4E3A\u5339\u914D\u6700\u7EC8\u7ED3\u679C\uFF0C\u5982\u679C\u6CA1\u6709\u90A3\u4E48\u4F1A\u628A\u5339\u914D\u7684\u7ED3\u679C\u6682\u5B58\uFF0C\u7EE7\u7EED\u8FDB\u884C\u6B63\u5219\u5339\u914D\u3002
        # 3\u3001\u6B63\u5219\u5339\u914D\uFF0C\u4F9D\u6B21\u4ECE\u4E0A\u5230\u4E0B\u5339\u914D\u524D\u7F00\u662F~\u6216~*\u7684location, \u4E00\u65E6\u5339\u914D\u6210\u529F\u4E00\u6B21\uFF0C\u5219\u7ACB\u523B\u4EE5\u6B64location\u4E3A\u51C6\uFF0C\u4E0D\u518D\u5411\u4E0B\u7EE7\u7EED\u8FDB\u884C\u6B63\u5219\u5339\u914D\u3002
        # 4\u3001\u5982\u679C\u6B63\u5219\u5339\u914D\u90FD\u4E0D\u6210\u529F\uFF0C\u5219\u7EE7\u7EED\u4F7F\u7528\u4E4B\u524D\u6682\u5B58\u7684\u666E\u901A\u5339\u914D\u6210\u529F\u7684location.


        location / {   # \u5339\u914D\u4EFB\u4F55\u67E5\u8BE2\uFF0C\u56E0\u4E3A\u6240\u6709\u8BF7\u6C42\u90FD\u5DF2 / \u5F00\u5934\u3002\u4F46\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u89C4\u5219\u548C\u957F\u7684\u5757\u89C4\u5219\u5C06\u88AB\u4F18\u5148\u548C\u67E5\u8BE2\u5339\u914D\u3002

	    #\u5B9A\u4E49\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7F51\u7AD9\u6839\u76EE\u5F55\u4F4D\u7F6E
            root   html;

	    #\u9ED8\u8BA4\u8BBF\u95EE\u9996\u9875\u7D22\u5F15\u6587\u4EF6\u7684\u540D\u79F0
	    index  index.html index.htm;

	    #\u53CD\u5411\u4EE3\u7406\u8DEF\u5F84
            proxy_pass http://myserver;
            #host upstream\u65F6\u5019\u8FD9\u4E2A\u9700\u8981\u914D\u7F6E\uFF0C\u4E0D\u7136\u4F1A\u5305400\u3002\u4F5C\u7528\u662F\u628A\u539Fhttp\u8BF7\u6C42\u7684Header\u4E2D\u7684Host\u5B57\u6BB5\u4E5F\u653E\u5230\u8F6C\u53D1\u7684\u8BF7\u6C42\u91CC\u3002\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5F97\u5230\u7684\u662F\u4EE3\u7406\u670D\u52A1\uFF08ngnix\uFF09\u7684ip\uFF0C\u8FD9\u6837\u5BF9\u4E8E\u52A8\u6001\u62FC\u63A5\u7684url,\u540E\u7AEF\u670D\u52A1\u5668\u80FD\u5728\u9875\u9762\u91CC\u8FD4\u56DE\u6B63\u786E\u7684url
            proxy_set_header Host $host;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            #\u53CD\u5411\u4EE3\u7406\u7684\u8D85\u65F6\u65F6\u95F4
            proxy_connect_timeout 60;
            proxy_read_timeout 600;
            proxy_send_timeout 600;

         }

         location  /images/ {
	    root images ;
	 }

	 location ^~ /images/jpg/ {  # \u5339\u914D\u4EFB\u4F55\u5DF2 /images/jpg/ \u5F00\u5934\u7684\u4EFB\u4F55\u67E5\u8BE2\u5E76\u4E14\u505C\u6B62\u641C\u7D22\u3002\u4EFB\u4F55\u6B63\u5219\u8868\u8FBE\u5F0F\u5C06\u4E0D\u4F1A\u88AB\u6D4B\u8BD5\u3002
	    root images/jpg/ ;


	 }
         location ~*.(gif|jpg|jpeg)$ {

	      #\u6240\u6709\u9759\u6001\u6587\u4EF6\u76F4\u63A5\u8BFB\u53D6\u786C\u76D8
              root pic ;

	      #expires\u5B9A\u4E49\u7528\u6237\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u65F6\u95F4\u4E3A3\u5929\uFF0C\u5982\u679C\u9759\u6001\u9875\u9762\u4E0D\u5E38\u66F4\u65B0\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u66F4\u957F\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8282\u7701\u5E26\u5BBD\u548C\u7F13\u89E3\u670D\u52A1\u5668\u7684\u538B\u529B
              expires 3d; #\u7F13\u5B583\u5929
         }


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }



}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br></div></div><h2 id="nginx-\u540C\u4E00\u7AEF\u53E3\u4E0B\u90E8\u7F72\u591A\u4E2A-vue3-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#nginx-\u540C\u4E00\u7AEF\u53E3\u4E0B\u90E8\u7F72\u591A\u4E2A-vue3-\u9879\u76EE" aria-hidden="true">#</a> Nginx \u540C\u4E00\u7AEF\u53E3\u4E0B\u90E8\u7F72\u591A\u4E2A Vue3 \u9879\u76EE</h2><p><img src="`+e+'" alt=""></p>',45);function p(l,b){return r}var c=s(a,[["render",p]]);export{c as default};
