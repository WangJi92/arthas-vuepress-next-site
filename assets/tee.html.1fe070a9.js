import{_ as s,r as t,o as r,c as l,a as e,b as p,F as o,d as n,e as c}from"./app.1edb3735.js";const i={},b=e("h1",{id:"tee",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tee","aria-hidden":"true"},"#"),n(" tee")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-tee",target:"_blank",rel:"noopener noreferrer"},d=e("code",null,"tee",-1),m=n("\u5728\u7EBF\u6559\u7A0B"),h=c(`<blockquote><p>\u7C7B\u4F3C\u4F20\u7EDF\u7684<code>tee</code>\u547D\u4EE4, \u7528\u4E8E\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u5176\u5185\u5BB9\u8F93\u51FA\u6210\u6587\u4EF6\u3002</p></blockquote><blockquote><p>tee\u6307\u4EE4\u4F1A\u4ECE\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u8BFB\u53D6\u6570\u636E\uFF0C\u5C06\u5176\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF0C\u540C\u65F6\u4FDD\u5B58\u6210\u6587\u4EF6\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> USAGE:
   tee [-a] [-h] [file]

 SUMMARY:
   tee command for pipes.

 EXAMPLES:
  sysprop | tee /path/to/logfile | grep java
  sysprop | tee -a /path/to/logfile | grep java

 WIKI:
   https://arthas.aliyun.com/doc/tee

 OPTIONS:
 -a, --append                              Append to file
 -h, --help                                this help
 &lt;file&gt;                                    File path
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3);function _(f,g){const a=t("ExternalLinkIcon");return r(),l(o,null,[b,e("p",null,[e("a",u,[d,m,p(a)])]),h],64)}var k=s(i,[["render",_],["__file","tee.html.vue"]]);export{k as default};
