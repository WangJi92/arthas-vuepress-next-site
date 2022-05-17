import{_ as a,r,o as t,c as l,a as e,b as c,F as i,d as s,e as p}from"./app.1edb3735.js";const d={},b=e("h1",{id:"reset",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reset","aria-hidden":"true"},"#"),s(" reset")],-1),o={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-reset",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"reset",-1),u=s(" online tutorial"),h=p(`<blockquote><p>Reset all classes that have been enhanced by Arthas. These enhanced classes will also be reset when Arthas server is <code>stop</code>.</p></blockquote><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ reset -h
 USAGE:
   reset [-h] [-E] [class-pattern]

 SUMMARY:
   Reset all the enhanced classes

 EXAMPLES:
   reset
   reset *List
   reset -E .*List

 OPTIONS:
 -h, --help                                                         this help
 -E, --regex                                                        Enable regular expression to match (wildcard matching by default)
 &lt;class-pattern&gt;                                                    Path and classname of Pattern Matching
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="reset-specified-class" tabindex="-1"><a class="header-anchor" href="#reset-specified-class" aria-hidden="true">#</a> Reset specified class</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ trace Test test
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 57 ms.
\`---ts=2017-10-26 17:10:33;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@14dad5dc
    \`---[0.590102ms] Test:test()

\`---ts=2017-10-26 17:10:34;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@14dad5dc
    \`---[0.068692ms] Test:test()

$ reset Test
Affect(class-cnt:1 , method-cnt:0) cost in 11 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="reset-all-classes" tabindex="-1"><a class="header-anchor" href="#reset-all-classes" aria-hidden="true">#</a> Reset all classes</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ trace Test test
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 15 ms.
\`---ts=2017-10-26 17:12:06;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@14dad5dc
    \`---[0.128518ms] Test:test()

$ reset
Affect(class-cnt:1 , method-cnt:0) cost in 9 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,7);function _(f,g){const n=r("ExternalLinkIcon");return t(),l(i,null,[b,e("p",null,[e("a",o,[m,u,c(n)])]),h],64)}var v=a(d,[["render",_],["__file","reset.html.vue"]]);export{v as default};
