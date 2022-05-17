import{_ as s,r as t,o as r,c as l,a as e,b as o,F as i,d as n,e as p}from"./app.1edb3735.js";const c={},d=e("h1",{id:"tee",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tee","aria-hidden":"true"},"#"),n(" tee")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-tee",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"tee",-1),m=n(" online tutorial"),h=p(`<blockquote><p>Similar to the traditional <code>tee</code> command, it is used to read standard input data and output its contents into a file.</p></blockquote><blockquote><p><code>tee</code> will read data from standard input device, output its content to standard output device, and save it as a file.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> USAGE:
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3);function _(f,g){const a=t("ExternalLinkIcon");return r(),l(i,null,[d,e("p",null,[e("a",u,[b,m,o(a)])]),h],64)}var x=s(c,[["render",_],["__file","tee.html.vue"]]);export{x as default};
