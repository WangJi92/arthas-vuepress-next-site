import{_ as r,r as i,o as l,c as d,a as e,b as n,F as o,d as a,e as s}from"./app.1edb3735.js";const c={},h=e("h1",{id:"mbean",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mbean","aria-hidden":"true"},"#"),a(" mbean")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-mbean",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"mbean",-1),u=a(" online tutorial"),g=s(`<blockquote><p>show Mbean information</p></blockquote><p>This command can show or monitor Mbean attribute information.</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>name-pattern</em></td><td style="text-align:left;">pattern for the Mbean name</td></tr><tr><td style="text-align:right;"><em>attribute-pattern</em></td><td style="text-align:left;">pattern for the attribute name</td></tr><tr><td style="text-align:right;">[m]</td><td style="text-align:left;">show meta information</td></tr><tr><td style="text-align:right;">[i:]</td><td style="text-align:left;">specify the interval to refresh attribute value (ms)</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">execution times</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">turn on regex matching while the default mode is wildcard matching. Only effect on the attribute name</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>show all Mbean names:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>show meta data of Mbean:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean -m java.lang:type=Threading
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>show attributes of Mbean:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean java.lang:type=Threading 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Mbean name support wildcard matcher:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean java.lang:type=Th*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),p=a("Notes\uFF1AObjectName matching rules differ from normal wildcards, Reference resources\uFF1A"),v={href:"https://docs.oracle.com/javase/8/docs/api/javax/management/ObjectName.html?is-external=true",target:"_blank",rel:"noopener noreferrer"},f=a("javax.management.ObjectName"),x=s(`<p>Wildcards match specific attributes:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean java.lang:type=Threading *Count
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Switch to regular matching using the <code>-E</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean -E java.lang:type=Threading PeakThreadCount|ThreadCount|DaemonThreadCount
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Real-time monitoring using <code>-i</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mbean -i 1000 java.lang:type=Threading *Count
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6);function _(y,j){const t=i("ExternalLinkIcon");return l(),d(o,null,[h,e("p",null,[e("a",m,[b,u,n(t)])]),g,e("blockquote",null,[e("p",null,[p,e("a",v,[f,n(t)])])]),x],64)}var T=r(c,[["render",_],["__file","mbean.html.vue"]]);export{T as default};
