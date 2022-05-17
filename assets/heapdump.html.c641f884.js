import{_ as s,r,o as d,c as p,a as e,b as t,F as i,d as a,e as l}from"./app.1edb3735.js";const o={},h=e("h1",{id:"heapdump",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heapdump","aria-hidden":"true"},"#"),a(" heapdump")],-1),c={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-heapdump",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"heapdump",-1),m=a(" online tutorial"),b=l(`<blockquote><p>dump java heap in hprof binary format, like <code>jmap</code>.</p></blockquote><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="dump-to-file" tabindex="-1"><a class="header-anchor" href="#dump-to-file" aria-hidden="true">#</a> Dump to file</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@58205]$ heapdump /tmp/dump.hprof
Dumping heap to /tmp/dump.hprof...
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="dump-only-live-objects" tabindex="-1"><a class="header-anchor" href="#dump-only-live-objects" aria-hidden="true">#</a> Dump only live objects</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@58205]$ heapdump --live /tmp/dump.hprof
Dumping heap to /tmp/dump.hprof...
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="dump-to-tmp-file" tabindex="-1"><a class="header-anchor" href="#dump-to-tmp-file" aria-hidden="true">#</a> Dump to tmp file</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@58205]$ heapdump
Dumping heap to /var/folders/my/wy7c9w9j5732xbkcyt1mb4g40000gp/T/heapdump2019-09-03-16-385121018449645518991.hprof...
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8);function f(_,g){const n=r("ExternalLinkIcon");return d(),p(i,null,[h,e("p",null,[e("a",c,[u,m,t(n)])]),b],64)}var x=s(o,[["render",f],["__file","heapdump.html.vue"]]);export{x as default};