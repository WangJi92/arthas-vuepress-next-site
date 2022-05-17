import{_ as c,r as n,o as i,c as r,a as e,b as s,w as a,F as u,d as o,e as d}from"./app.1edb3735.js";const h={},_=e("h1",{id:"log-command-outputs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#log-command-outputs","aria-hidden":"true"},"#"),o(" Log command outputs")],-1),p={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=case-save-log",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Log command outputs",-1),b=o(" online tutorial"),g=d(`<blockquote><p>Log command outputs for later analysis</p></blockquote><ul><li><p>By default, this behavior is turned off. To enable it, execute the command below:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ options save-result true
 NAME         BEFORE-VALUE  AFTER-VALUE
----------------------------------------
save-result  false         true
Affect(row-cnt:1) cost in 3 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If the message above is output on the console, then this behavior is enabled successfully.</p></li><li><p>Log file path</p><p>The command execution result will be save in <code>{user.home}/logs/arthas-cache/result.log</code>. Pls. clean it up regularly to save disk space.</p></li></ul><h3 id="use-asynchronous-job-to-log" tabindex="-1"><a class="header-anchor" href="#use-asynchronous-job-to-log" aria-hidden="true">#</a> Use asynchronous job to log</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace Test t &gt;&gt;  &amp;
job id  : 2
cache location  : /Users/zhuyong/logs/arthas-cache/28198/2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>By doing this, the command will run at background asynchronously, and output the execution result into <code>~/logs/arthas-cache/{PID}/{JobId}</code>:</p>`,5),f=o("The background job will continue to run even if the current session is disconnected. The default job timeout value is 1 day, use global '"),v=o("options"),y=o("' command to alternate it."),x=o("The execution result will be output into the file asynchronously. Pls. note the behavior of this command is not controlled by "),k=e("code",null,"save-result",-1),w=o(" option from global "),L=o("options"),E=o(". No matter "),T=e("code",null,"save-result",-1),I=o(" is set to "),j=e("code",null,"true",-1),B=o(" or not, this command will write into "),N=e("code",null,"~/logs/arthas-cache/{PID}/{JobId}",-1),V=o(" anyway, instead of into "),A=e("code",null,"~/logs/arthas-cache/result.log",-1),F=o(".");function P(R,U){const l=n("ExternalLinkIcon"),t=n("RouterLink");return i(),r(u,null,[_,e("p",null,[e("a",p,[m,b,s(l)])]),g,e("ul",null,[e("li",null,[f,s(t,{to:"/en/doc/options.html"},{default:a(()=>[v]),_:1}),y]),e("li",null,[x,k,w,s(t,{to:"/en/doc/options.html"},{default:a(()=>[L]),_:1}),E,T,I,j,B,N,V,A,F])])],64)}var C=c(h,[["render",P],["__file","save-log.html.vue"]]);export{C as default};
