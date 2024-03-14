import{e}from"./app.24627d88.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h2 id="mac-ip-\u626B\u63CF" tabindex="-1"><a class="header-anchor" href="#mac-ip-\u626B\u63CF" aria-hidden="true">#</a> Mac Ip \u626B\u63CF</h2><p>mac\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install arp-scan
unbuntu:
sudo apt-get arp-scan

arp-scan --interface en0 --localnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="mac-\u5B89\u88C5\u591A\u4E2A-python-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5\u591A\u4E2A-python-\u7248\u672C" aria-hidden="true">#</a> Mac \u5B89\u88C5\u591A\u4E2A Python \u7248\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ brew install pyenv
$ pyenv -v
pyenv 1.2.6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u67E5\u770B\u6240\u6709\u7684-python-\u7248\u672C-pyenv-\u7BA1\u7406\u7684\u6240\u6709\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7684-python-\u7248\u672C-pyenv-\u7BA1\u7406\u7684\u6240\u6709\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u7684 python \u7248\u672C\uFF08pyenv \u7BA1\u7406\u7684\u6240\u6709\u7248\u672C\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv versions
* system (set by /Users/xxx/.pyenv/version)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>* \u8868\u793A\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u7248\u672C\uFF0Csystem \u8868\u793A\u7528\u7684\u662F\u7CFB\u7EDF python \u7248\u672C</li></ul><h3 id="\u67E5\u770B\u53EF\u5B89\u88C5-python-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u53EF\u5B89\u88C5-python-\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u53EF\u5B89\u88C5 python \u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv install --list
Available versions:
  2.1.3
  2.2.3
  2.3.7
  ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u9009\u62E9\u7248\u672C\u8FDB\u884C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u7248\u672C\u8FDB\u884C\u5B89\u88C5" aria-hidden="true">#</a> \u9009\u62E9\u7248\u672C\u8FDB\u884C\u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv install 3.5.5
python-build: use openssl from homebrew
python-build: use readline from homebrew
Downloading Python-3.5.5.tar.xz...
-&gt; https://www.python.org/ftp/python/3.5.5/Python-3.5.5.tar.xz
Installing Python-3.5.5...
python-build: use readline from homebrew
Installed Python-3.5.5 to /Users/xxx/.pyenv/versions/3.5.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><p>\u5899\u5185\u73AF\u5883\uFF0C\u4F1A\u5361\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5F00\u4EE3\u7406\uFF0C\u6216\u8005\u4F7F\u7528\u56FD\u5185\u955C\u50CF\u3002</p></li><li><p>\u4F7F\u7528\u56FD\u5185\u955C\u50CF\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v=3.5.5|wget http://mirrors.sohu.com/python/$v/Python-$v.tar.xz -P ~/.pyenv/cache/;pyenv install $v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>###\u67E5\u770B\u6240\u6709\u5B89\u88C5\u7684\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv versions
* system (set by /Users/xxx/.pyenv/version)
  3.5.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>###\u5207\u6362\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv global 3.5.5 # \u5168\u5C40\u5207\u6362
$ python -V # \u9A8C\u8BC1\u4E00\u4E0B\u662F\u5426\u5207\u6362\u6210\u529F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6B64\u5904\u7528\u4E5F\u53EF\u7528 local\uFF0C\u53EA\u5BF9\u5F53\u524D\u76EE\u5F55\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv local 3.5.5 # \u5F53\u524D\u76EE\u5F55\u53CA\u5176\u76EE\u5F55\u5207\u6362
$ python -V # \u9A8C\u8BC1\u4E00\u4E0B\u662F\u5426\u5207\u6362\u6210\u529F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>\u6B64\u5904\u6709\u5751\uFF01</p></li><li><p>\u7528 pyenv versions \u67E5\u770B\uFF0C\u660E\u660E\u5DF2\u7ECF\u5207\u6362\u6210\u529F\uFF0C\u4F46\u662F\u7528 python -V \u5374\u8FD8\u662F\u7CFB\u7EDF\u7248\u672C\u3002\u539F\u56E0\u662F pyenv \u6CA1\u6709\u52A0\u5230$PATH \u73AF\u5883\u53D8\u91CF\u91CC\u53BB\uFF0C\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export PYENV_ROOT=~/.pyenv
export PATH=$PYENV_ROOT/shims:$PATH
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>\u6B64\u65F6\uFF0C\u518D\u6B21\u67E5\u770B python -V\uFF0C\u5DF2\u7ECF\u6210\u529F\u5207\u6362\u5230 pyenv \u6307\u5B9A\u7684\u7248\u672C\u3002</p></li><li><p>\u53EF\u4EE5\u628A\u4E0A\u8FB9\u4E24\u53E5\u52A0\u5230~/.bash_profile \u91CC\u53BB\uFF0C\u6C38\u4E45\u751F\u6548\u3002</p></li><li><p>\u6709\u65F6\u8BBE\u7F6E\u4E86 pyenv local \u7248\u672C\u540E\uFF0C\u518D\u8BBE\u7F6E global \u4F1A\u53D1\u73B0\u6CA1\u6709\u751F\u6548\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pyenv local --unset
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>\u89E3\u9664 local \u8BBE\u7F6E\u3002</p></li><li><p>\u8981\u5207\u6362\u56DE\u7CFB\u7EDF\u7248\u672C\uFF0C\u7528\u540C\u6837\u547D\u4EE4\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyevn global system
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5378\u8F7D-python-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D-python-\u7248\u672C" aria-hidden="true">#</a> \u5378\u8F7D python \u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> pyenv uninstall 3.5.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>###\u67E5\u770B pyenv \u6307\u4EE4\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pyenv commands
--version
commands
completions
exec
global
help
hooks
init
install
local
prefix
realpath.dylib
rehash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="mac-\u975E\u82F9\u679C\u9F20\u6807\u84DD\u7259\u8FDE\u63A5\u4E0D\u5230\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#mac-\u975E\u82F9\u679C\u9F20\u6807\u84DD\u7259\u8FDE\u63A5\u4E0D\u5230\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> Mac \u975E\u82F9\u679C\u9F20\u6807\u84DD\u7259\u8FDE\u63A5\u4E0D\u5230\u89E3\u51B3\u529E\u6CD5</h2><blockquote><p>\u975E\u82F9\u679C\u9F20\u6807\u8FDE\u63A5\u5176\u4ED6\u8BBE\u5907\u4EE5\u540E\uFF0C\u5728\u8FD9\u53F0\u82F9\u679C\u7535\u8111\u5C31\u4E0D\u4F1A\u81EA\u52A8\u8FDE\u63A5</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo rm /Library/Preferences/com.apple.Bluetooth.plist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u53EA\u4F1A\u91CD\u65B0\u8FDE\u63A5\u7684\u65F6\u5019</p><p>\u6309 <strong><em>\u7A7A\u683C</em></strong> \u8FDB\u884C\u8FDE\u63A5</p>`,35);function l(r,p){return a}var c=n(s,[["render",l]]);export{c as default};
