import{_ as a,c as o,a2 as r,o as e}from"./chunks/framework.DPDg7N6I.js";const i="/img/InternetProtocolFrame.png",l="/img/InternetProtocolBroadcast.png",p="/img/InternetProtocolIpv4.png",P="/img/InternetProtocolIpData.png",u="/img/InternetProtocolTCPUDPdata.png",n="/img/InternetProtocolAppdata.png",s="/img/InternetProtocolDHCPdata.png",d="/img/tcpServer.gif",c="/img/tcpTransportData.gif",h="/img/tcpClose.gif",T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/concepts/InternetProtocol.md","filePath":"pages/concepts/InternetProtocol.md"}'),q={name:"pages/concepts/InternetProtocol.md"};function b(I,t,m,C,k,g){return e(),o("div",null,t[0]||(t[0]=[r('<h2 id="互联网协议" tabindex="-1">互联网协议 <a class="header-anchor" href="#互联网协议" aria-label="Permalink to &quot;互联网协议&quot;">​</a></h2><p>互联网的核心是一系列协议，总称为&quot;互联网协议&quot;（Internet Protocol Suite）。它们对电脑如何连接和组网，做出了详尽的规定。理解了这些协议，就理解了互联网的原理。</p><h2 id="osi-7-层模型与-tcp-ip-协议-5-层模型" tabindex="-1">OSI 7 层模型与 TCP/IP 协议 5 层模型 <a class="header-anchor" href="#osi-7-层模型与-tcp-ip-协议-5-层模型" aria-label="Permalink to &quot;OSI 7 层模型与 TCP/IP 协议 5 层模型&quot;">​</a></h2><table tabindex="0"><thead><tr><th>OSI 七层网络模型</th><th>TCP/IP 四层概念模型</th><th>对应网络协议</th><th>OSI 各层解释</th></tr></thead><tbody><tr><td>应用层（Application）</td><td>应用层</td><td>HTTP、TFTP, FTP, NFS, WAIS、SMTP</td><td>为应用程序提供功能</td></tr><tr><td>表示层（Presentation）</td><td>应用层</td><td>Telnet, Rlogin, SNMP, Gopher</td><td>数据格式化、数据加密</td></tr><tr><td>会话层（Session）</td><td>应用层</td><td>SMTP, DNS</td><td>建立、管理、维护会话</td></tr><tr><td>传输层（Transport）</td><td>传输层</td><td>TCP, UDP</td><td>建立、管理和维护端到端的连接</td></tr><tr><td>网络层（Network）</td><td>网络层</td><td>IP, ICMP, ARP, RARP, AKP, UUCP</td><td>IP 选址及路由选择</td></tr><tr><td>数据链路层（Data Link）</td><td>数据链路层</td><td>FDDI, Ethernet, Arpanet, PDN, SLIP, PPP</td><td>提供介质访问和链路管理</td></tr><tr><td>物理层（Physical）</td><td>数据链路层</td><td>IEEE 802.1A, IEEE 802.2 到 IEEE 802.11</td><td>物理层</td></tr></tbody></table><h3 id="物理层" tabindex="-1">物理层 <a class="header-anchor" href="#物理层" aria-label="Permalink to &quot;物理层&quot;">​</a></h3><p>把电脑连接起来的物理手段。它主要规定了网络的一些电气特性，作用是负责传送 0 和 1 的电信号。</p><h3 id="数据链路层" tabindex="-1">数据链路层 <a class="header-anchor" href="#数据链路层" aria-label="Permalink to &quot;数据链路层&quot;">​</a></h3><p>Q：单纯的 0 和 1 没有任何意义，必须规定解读方式：多少个电信号算一组？每个信号位有何意义？</p><p>A： 确定了 0 和 1 的分组方式。</p><h4 id="以太网协议-ethernet" tabindex="-1">以太网协议 Ethernet <a class="header-anchor" href="#以太网协议-ethernet" aria-label="Permalink to &quot;以太网协议 Ethernet&quot;">​</a></h4><p>早期的时候，每家公司都有自己的电信号分组方式。逐渐地，一种叫做&quot;以太网&quot;（Ethernet）的协议，占据了主导地位。 <br>以太网规定，一组电信号构成一个数据包，叫做&quot;帧&quot;（Frame）。每一帧分成两个部分：标头（Head）和数据（Data）。</p><p><img src="'+i+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">Ethernet Prototal</p><p>&quot;标头&quot;包含数据包的一些说明项，比如发送者、接受者、数据类型等等；&quot;数据&quot;则是数据包的具体内容。</p><p>&quot;标头&quot;的长度，固定为 18 字节。&quot;数据&quot;的长度，最短为 46 字节，最长为 1500 字节。<br>因此，整个&quot;帧&quot;最短为 64 字节，最长为 1518 字节。如果数据很长，就必须分割成多个帧进行发送。</p></div><h4 id="mac-地址" tabindex="-1">MAC 地址 <a class="header-anchor" href="#mac-地址" aria-label="Permalink to &quot;MAC 地址&quot;">​</a></h4><p><strong>Q：以太网数据包的&quot;标头&quot;，包含了发送者和接受者的信息。那么，发送者和接受者是如何标识呢？</strong><br><br> A：以太网规定，连入网络的所有设备，都必须具有&quot;网卡&quot;接口。数据包必须是从一块网卡，传送到另一块网卡。网卡的地址，就是数据包的发送地址和接收地址，这叫做 MAC 地址。<br> 有了 MAC 地址，就可以定位网卡和数据包的路径了。<br></p><h4 id="广播" tabindex="-1">广播 <a class="header-anchor" href="#广播" aria-label="Permalink to &quot;广播&quot;">​</a></h4><p>定义地址只是第一步，后面还有更多的步骤。<br></p><p><strong>Q：首先，一块网卡怎么会知道另一块网卡的 MAC 地址？</strong><strong>其次，就算有了 MAC 地址，系统怎样才能把数据包准确送到接收方？</strong><br><br> A：以太网采用了一种很&quot;原始&quot;的方式，它不是把数据包准确送到接收方，而是向本网络内所有计算机发送，让每台计算机自己判断，是否为接收方。</p><p><img src="'+l+'" alt=""></p><p>都会收到这个包。它们读取这个包的&quot;标头&quot;，找到接收方的 MAC 地址，然后与自身的 MAC 地址相比较，如果两者相同，就接受这个包，做进一步处理，否则就丢弃这个包。这种发送方式就叫做<strong>广播（broadcasting）</strong>。<br><br> 有了数据包的定义、网卡的 MAC 地址、广播的发送方式，&quot;链接层&quot;就可以在多台计算机之间传送数据了。</p><h3 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h3><ul><li>建立&quot;主机到主机&quot;的通信</li></ul><p>以太网协议，依靠 MAC 地址发送数据。理论上，单单依靠 MAC 地址，上海的网卡就可以找到洛杉矶的网卡了。<br><br> 但是以太网采用广播方式发送数据包，所有成员人手一&quot;包&quot;，不仅效率低，而且局限在发送者所在的子网络。也就是说，如果两台计算机不在同一个子网络，广播是传不过去的。<br> 这种设计是合理的，否则互联网上每一台计算机都会收到所有包，那会引起灾难。</p><p>须找到一种方法，能够区分哪些 MAC 地址属于同一个子网络，哪些不是。<br><strong>这就导致了&quot;网络层&quot;的诞生。它的作用是引进一套新的地址，使得我们能够区分不同的计算机是否属于同一个子网络。这套地址就叫做&quot;网络地址&quot;，简称&quot;网址&quot;。</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>网络地址帮助我们确定计算机所在的子网络，MAC 地址则将数据包送到该子网络中的目标网卡。</p></div><h4 id="_1-ip-协议" tabindex="-1">1. IP 协议 <a class="header-anchor" href="#_1-ip-协议" aria-label="Permalink to &quot;1. IP 协议&quot;">​</a></h4><p>规定网络地址的协议，叫做 IP 协议。它所定义的地址，就被称为 IP 地址。<br></p><p><strong>作用:</strong></p><ul><li>一个是为每一台计算机分配 IP 地址</li><li>另一个是确定哪些地址在同一个子网络</li></ul><p>目前，广泛采用的是 IP 协议第四版，简称 IPv4。这个版本规定，网络地址由 32 个二进制位组成。</p><p><img src="'+p+'" alt=""></p><p>习惯上，我们用分成四段的十进制数表示 IP 地址，从 0.0.0.0 一直到 255.255.255.255。<br><br></p><p><strong>IP 地址两个部分 前一部分代表网络，后一部分代表主机</strong><br> 单从 IP 地址，我们无法判断网络部分</p><h5 id="子网掩码-subnet-mask" tabindex="-1">子网掩码（subnet mask） <a class="header-anchor" href="#子网掩码-subnet-mask" aria-label="Permalink to &quot;子网掩码（subnet mask）&quot;">​</a></h5><blockquote><p>形式上等同于 IP 地址，也是一个 32 位二进制数字<br>它的网络部分全部为 1，主机部分全部为 0。</p></blockquote><p>IP 地址 172.16.254.1，如果已知网络部分是前 24 位，主机部分是后 8 位，那么子网络掩码写成十进制就是 255.255.255.0。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>知道<strong>子网掩码</strong>就能判断任意两个 IP 地址是否处在同一个子网络。方法是将两个 IP 地址与子网掩码分别进行 AND 运算（两个数位都为 1，运算结果为 1，否则为 0），然后比较结果是否相同，如果是的话，就表明它们在同一个子网络中，否则就不是。</p></div><h4 id="_2-ip-数据包" tabindex="-1">2. IP 数据包 <a class="header-anchor" href="#_2-ip-数据包" aria-label="Permalink to &quot;2. IP 数据包&quot;">​</a></h4><p>根据 IP 协议发送的数据，就叫做 IP 数据包。<br> &quot;标头&quot;部分主要包括版本、长度、IP 地址等信息，&quot;数据&quot;部分则是 IP 数据包的具体内容。它放进以太网数据包后，以太网数据包就变成了下面这样。</p><p><img src="'+P+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>IP 数据包的&quot;标头&quot;部分的长度为 20 到 60 字节，整个数据包的总长度最大为 65,535 字节。因此，理论上，一个 IP 数据包的&quot;数据&quot;部分，最长为 65,515 字节。<br>前面说过，以太网数据包的&quot;数据&quot;部分，最长只有 1500 字节。因此，如果 IP 数据包超过了 1500 字节，它就需要分割成几个以太网数据包，分开发送了。</p></div><h4 id="arp-协议" tabindex="-1">ARP 协议 <a class="header-anchor" href="#arp-协议" aria-label="Permalink to &quot;ARP 协议&quot;">​</a></h4><p>IP 数据包是放在以太网数据包里发送的，所以我们必须同时知道两个地址，一个是对方的 MAC 地址，另一个是对方的 IP 地址。通常情况下，对方的 IP 地址是已知的（静态 IP 地址或 DHCP），但是我们不知道它的 MAC 地址。<br><br></p><p>所以，我们需要一种机制，能够从 IP 地址得到 MAC 地址。<br><br></p><p>这里又可以分成两种情况。第一种情况，如果两台主机不在同一个子网络，那么事实上没有办法得到对方的 MAC 地址，只能把数据包传送到两个子网络连接处的&quot;网关&quot;（gateway），让网关去处理。<br><br></p><p>第二种情况，如果两台主机在同一个子网络，那么我们可以用 ARP 协议，得到对方的 MAC 地址。ARP 协议也是发出一个数据包（包含在以太网数据包中），其中包含它所要查询主机的 IP 地址，在对方的 MAC 地址这一栏，填的是 FF:FF:FF:FF:FF:FF，表示这是一个&quot;广播&quot;地址。它所在子网络的每一台主机，都会收到这个数据包，从中取出 IP 地址，与自身的 IP 地址进行比较。如果两者相同，都做出回复，向对方报告自己的 MAC 地址，否则就丢弃这个包。<br><br></p><p>总之，有了 ARP 协议之后，我们就可以得到同一个子网络内的主机 MAC 地址，可以把数据包发送到任意一台主机之上了。</p><h3 id="传输层" tabindex="-1">传输层 <a class="header-anchor" href="#传输层" aria-label="Permalink to &quot;传输层&quot;">​</a></h3><ul><li>建立&quot;端口到端口&quot;的通信</li></ul><blockquote><p>有了 MAC 地址和 IP 地址，我们已经可以在互联网上任意两台主机上建立通信。</p></blockquote><p><strong>Q：接下来的问题是，同一台主机上有许多程序都需要用到网络，比如，你一边浏览网页，一边与朋友在线聊天。当一个数据包从互联网上发来的时候，你怎么知道，它是表示网页的内容，还是表示在线聊天的内容？</strong></p><p>A：我们还需要一个参数，表示这个数据包到底供哪个程序（进程）使用。这个参数就叫做&quot;端口&quot;（port），它其实是每一个使用网卡的程序的编号。每个数据包都发到主机的特定端口，所以不同的程序就能取到自己所需要的数据。<br><br></p><p>&quot;端口&quot;是 0 到 65535 之间的一个整数，正好 16 个二进制位。0 到 1023 的端口被系统占用，用户只能选用大于 1023 的端口。不管是浏览网页还是在线聊天，应用程序会随机选用一个端口，然后与服务器的相应端口联系。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Unix 系统就把主机+端口，叫做&quot;套接字&quot;（socket）</p></div><h4 id="tcp-udp-协议" tabindex="-1">TCP/UDP 协议 <a class="header-anchor" href="#tcp-udp-协议" aria-label="Permalink to &quot;TCP/UDP 协议&quot;">​</a></h4><p>数据包，也是由&quot;标头&quot;和&quot;数据&quot;两部分组成。<br><br> &quot;标头&quot;部分主要定义了发出端口和接收端口，&quot;数据&quot;部分就是具体的内容。然后，把整个数据包放入 IP 数据包的&quot;数据&quot;部分，而前面说过，IP 数据包又是放在以太网数据包之中的，所以整个以太网数据包现在变成了下面这样：</p><p><img src="'+u+'" alt=""></p><ul><li>UDP 数据包非常简单，&quot;标头&quot;部分一共只有 8 个字节，总长度不超过 65,535 字节，正好放进一个 IP 数据包。</li><li>TCP 数据包和 UDP 数据包一样，都是内嵌在 IP 数据包的&quot;数据&quot;部分。TCP 数据包没有长度限制，理论上可以无限长，但是为了保证网络的效率，通常 TCP 数据包的长度不会超过 IP 数据包的长度，以确保单个 TCP 数据包不必再分割。</li></ul><h3 id="应用层" tabindex="-1">应用层 <a class="header-anchor" href="#应用层" aria-label="Permalink to &quot;应用层&quot;">​</a></h3><ul><li>规定应用程序的数据格式。</li></ul><p>应用程序收到&quot;传输层&quot;的数据，接下来就要进行解读。由于互联网是开放架构，数据来源五花八门，必须事先规定好格式，否则根本无法解读。<br><br></p><p>举例来说，TCP 协议可以为各种各样的程序传递数据，比如 Email、WWW、FTP 等等。那么，必须有不同协议规定电子邮件、网页、FTP 数据的格式，这些应用程序协议就构成了&quot;应用层&quot;。<br><br></p><p>这是最高的一层，直接面对用户。它的数据就放在 TCP 数据包的&quot;数据&quot;部分。因此，现在的以太网的数据包就变成下面这样。</p><p><img src="'+n+'" alt=""></p><h3 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h3><h4 id="用户的上网设置" tabindex="-1">用户的上网设置 <a class="header-anchor" href="#用户的上网设置" aria-label="Permalink to &quot;用户的上网设置&quot;">​</a></h4><ul><li>本机的 IP 地址</li><li>子网掩码</li><li>网关的 IP 地址</li><li>DNS 的 IP 地址</li></ul><p>四个缺一不可</p><h4 id="静态-ip-地址" tabindex="-1">静态 IP 地址 <a class="header-anchor" href="#静态-ip-地址" aria-label="Permalink to &quot;静态 IP 地址&quot;">​</a></h4><p>计算机每次开机，都会分到同样的 IP 地址，所以这种情况被称作&quot;静态 IP 地址&quot;上网<br> 但是，这样的设置很专业，普通用户望而生畏，而且如果一台电脑的 IP 地址保持不变，其他电脑就不能使用这个地址，不够灵活。出于这两个原因，大多数用户使用&quot;动态 IP 地址上网&quot;。</p><h4 id="动态-ip-地址-dhcp-协议" tabindex="-1">动态 IP 地址（DHCP 协议） <a class="header-anchor" href="#动态-ip-地址-dhcp-协议" aria-label="Permalink to &quot;动态 IP 地址（DHCP 协议）&quot;">​</a></h4><p>这个协议规定，每一个子网络中，有一台计算机负责管理本网络的所有 IP 地址，它叫做&quot;DHCP 服务器&quot;。新的计算机加入网络，必须向&quot;DHCP 服务器&quot;发送一个&quot;DHCP 请求&quot;数据包，申请 IP 地址和相关的网络参数。<br><br></p><p><strong>Q：前面说过，如果两台计算机在同一个子网络，必须知道对方的 MAC 地址和 IP 地址，才能发送数据包。但是，新加入的计算机不知道这两个地址，怎么发送数据包呢？</strong><br><br></p><p>DHCP 协议做了一些巧妙的规定。<br></p><p>首先，它是一种应用层协议，建立在 UDP 协议之上，所以整个数据包是这样的：</p><p><img src="'+s+'" alt=""></p><p>（1）最前面的&quot;以太网标头&quot;，设置发出方（本机）的 MAC 地址和接收方（DHCP 服务器）的 MAC 地址。前者就是本机网卡的 MAC 地址，后者这时不知道，就填入一个广播地址：FF-FF-FF-FF-FF-FF。<br></p><p>（2）后面的&quot;IP 标头&quot;，设置发出方的 IP 地址和接收方的 IP 地址。这时，对于这两者，本机都不知道。于是，发出方的 IP 地址就设为 0.0.0.0，接收方的 IP 地址设为 255.255.255.255。<br></p><p>（3）最后的&quot;UDP 标头&quot;，设置发出方的端口和接收方的端口。这一部分是 DHCP 协议规定好的，发出方是 68 端口，接收方是 67 端口。<br><br></p><p>这个数据包构造完成后，就可以发出了。以太网是广播发送，同一个子网络的每台计算机都收到了这个包。因为接收方的 MAC 地址是 FF-FF-FF-FF-FF-FF，看不出是发给谁的，所以每台收到这个包的计算机，还必须分析这个包的 IP 地址，才能确定是不是发给自己的。当看到发出方 IP 地址是 0.0.0.0，接收方是 255.255.255.255，于是 DHCP 服务器知道&quot;这个包是发给我的&quot;，而其他计算机就可以丢弃这个包。<br><br></p><p>接下来，DHCP 服务器读出这个包的数据内容，分配好 IP 地址，发送回去一个&quot;DHCP 响应&quot;数据包。这个响应包的结构也是类似的，以太网标头的 MAC 地址是双方的网卡地址，IP 标头的 IP 地址是 DHCP 服务器的 IP 地址（发出方）和 255.255.255.255（接收方），UDP 标头的端口是 67（发出方）和 68（接收方），分配给请求端的 IP 地址和本网络的具体参数则包含在 Data 部分。<br><br></p><p>新加入的计算机收到这个响应包，于是就知道了自己的 IP 地址、子网掩码、网关地址、DNS 服务器等等参数。<br><br></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>MAC 地址可不是世界上独一无二的，只是其散列足够大，使得在同一个子网中 MAC 地址碰巧相同的两块网卡几率很小很小而已。使用网络 15 年来，已经碰到过两次网卡 MAC 相同的事了。</p><p>而且 MAC 相同有两个方法解决： 1、网卡厂商提供有配置程序，可以直接改硬件 MAC。如果使用二层网络系统就只能用此法解决， 2、各种操作系统也都提供伪造 MAC 地址的方式来解决三层系统中 MAC 冲突的问题。</p></div><h2 id="osi-模型和-tcp-ip-协议簇关系和区别" tabindex="-1">OSI 模型和 TCP/IP 协议簇关系和区别 <a class="header-anchor" href="#osi-模型和-tcp-ip-协议簇关系和区别" aria-label="Permalink to &quot;OSI 模型和 TCP/IP 协议簇关系和区别&quot;">​</a></h2><ol><li>OSI 引入了服务、接口、协议、分层的概念，TCP/IP 借鉴了 OSI 的这些概念建立 TCP/IP 模型。</li><li>OSI 先有模型，后有协议，先有标准，后进行实践；而 TCP/IP 则相反，先有协议和应用再提出了模型，且是参照的 OSI 模型。</li><li>OSI 是一种理论下的模型，而 TCP/IP 已被广泛使用，成为网络互联事实上的标准。</li></ol><ul><li>TCP/IP 他是一个协议簇；而 OSI（开放系统互联）则是一个模型，且 TCP/IP 的开发时间在 OSI 之前。</li><li>TCP/IP 是由一些交互性的模块做成的分层次的协议，其中每个模块提供特定的功能；OSi 则指定了哪个功能是属于哪一层的。</li><li>分层不同</li></ul><h2 id="tcp-ip-协议" tabindex="-1">TCP/IP 协议 <a class="header-anchor" href="#tcp-ip-协议" aria-label="Permalink to &quot;TCP/IP 协议&quot;">​</a></h2><p>TCP/IP 协议是一个协议集，里面包括很多协议的，TCP、UDP、TLS 等只是其中的协议。<br><br> TCP/IP 协议集包括应用层，传输层，网络层，网络访问层。<br><br></p><h3 id="应用层包括" tabindex="-1">应用层包括： <a class="header-anchor" href="#应用层包括" aria-label="Permalink to &quot;应用层包括：&quot;">​</a></h3><ul><li>超文本传输协议(HTTP)：万维网的基本协议；</li><li>文件传输(TFTP 简单文件传输协议)；</li><li>远程登录(Telnet)，提供远程访问其它主机功能，它允许用户登录；</li><li>internet 主机，并在这台主机上执行命令；</li><li>网络管理(SNMP 简单网络管理协议)，该协议提供了监控网络设备的方法，以及配置管理,统计信息收集，性能管理及安全管理等；</li><li>域名系统(DNS)，该系统用于在 internet 中将域名及其公共广播的网络节点转换成 IP 地址。</li></ul><h3 id="传输层包括" tabindex="-1">传输层包括： <a class="header-anchor" href="#传输层包括" aria-label="Permalink to &quot;传输层包括：&quot;">​</a></h3><ul><li>TLS，也即 SSL(Secure Sockets Layer，安全套接字层)协议，后来 IETF 在标准化 SSL 协议时，将其改名为 Transport Layer Security（TLS，传输层安全）。</li></ul><h3 id="网络层包括" tabindex="-1">网络层包括： <a class="header-anchor" href="#网络层包括" aria-label="Permalink to &quot;网络层包括：&quot;">​</a></h3><ul><li>Internet 协议(IP)</li><li>Internet 控制信息协议(ICMP)</li><li>地址解析协议(ARP)</li><li>反向地址解析协议(RARP)</li></ul><h3 id="网络访问层" tabindex="-1">网络访问层： <a class="header-anchor" href="#网络访问层" aria-label="Permalink to &quot;网络访问层：&quot;">​</a></h3><ul><li>网络访问层又称作主机到网络层(host-to-network)。网络访问层的功能包括 IP 地址与物理地址硬件的映射，以及将 IP 封装成帧。基于不同硬件类型的网络接口，网络访问层定义了和物理介质的连接。</li></ul><h2 id="tcp-三次握手和四次挥手" tabindex="-1">TCP 三次握手和四次挥手 <a class="header-anchor" href="#tcp-三次握手和四次挥手" aria-label="Permalink to &quot;TCP 三次握手和四次挥手&quot;">​</a></h2><h3 id="建立连接" tabindex="-1">建立连接 <a class="header-anchor" href="#建立连接" aria-label="Permalink to &quot;建立连接&quot;">​</a></h3><p><img src="'+d+'" alt=""></p><h3 id="传输数据" tabindex="-1">传输数据 <a class="header-anchor" href="#传输数据" aria-label="Permalink to &quot;传输数据&quot;">​</a></h3><blockquote><p>tcp 链接是「双工的」，双方都可以主动发起数据传输。不过无论是哪方喊话，都需要收到对方的确认才能认为对方收到了自己的喊话。 张三可能是个高射炮，一说连说了八句话，这时候李四可以不用一句一句回复，而是连续听了这八句话之后，一起向对方回复说前面你说的八句话我都听见了，这就是批量 ack。但是张三也不能一次性说了太多话，李四的脑子短时间可能无法消化太多，两人之间需要有协商好的合适的发送和接受速率，这个就是「TCP 窗口大小」。 网络环境的数据交互同人类之间的对话还要复杂一些，它存在数据包乱序的现象。同一个来源发出来的不同数据包在「网际路由」上可能会走过不同的路径，最终达到同一个地方时，顺序就不一样了。操作系统的网络内核模块会负责对数据包进行排序，到用户层时顺序就已经完全一致了。</p></blockquote><p><img src="'+c+'" alt=""></p><h3 id="关闭连接" tabindex="-1">关闭连接 <a class="header-anchor" href="#关闭连接" aria-label="Permalink to &quot;关闭连接&quot;">​</a></h3><p><img src="'+h+'" alt=""></p>',104)]))}const F=a(q,[["render",b]]);export{T as __pageData,F as default};