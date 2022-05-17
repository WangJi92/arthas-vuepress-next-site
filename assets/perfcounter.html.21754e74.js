import{_ as s,r,o as t,c as l,a as e,b as o,F as i,d as a,e as c}from"./app.1edb3735.js";const d={},p=e("h1",{id:"perfcounter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#perfcounter","aria-hidden":"true"},"#"),a(" perfcounter")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-perfcounter",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"perfcounter",-1),m=a(" online tutorial"),v=c(`<blockquote><p>Check the current JVM Perf Counter information.</p></blockquote><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ perfcounter
 java.ci.totalTime                            2325637411
 java.cls.loadedClasses                       3403
 java.cls.sharedLoadedClasses                 0
 java.cls.sharedUnloadedClasses               0
 java.cls.unloadedClasses                     0
 java.property.java.version                   11.0.4
 java.property.java.vm.info                   mixed mode
 java.property.java.vm.name                   OpenJDK 64-Bit Server VM
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Print more information with the <code>-d</code> option:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ perfcounter -d
 Name                                   Variability   Units        Value
---------------------------------------------------------------------------------
 java.ci.totalTime                      Monotonic     Ticks        3242526906
 java.cls.loadedClasses                 Monotonic     Events       3404
 java.cls.sharedLoadedClasses           Monotonic     Events       0
 java.cls.sharedUnloadedClasses         Monotonic     Events       0
 java.cls.unloadedClasses               Monotonic     Events       0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="jvm-above-jdk9" tabindex="-1"><a class="header-anchor" href="#jvm-above-jdk9" aria-hidden="true">#</a> JVM above JDK9</h3><p>If the information is not printed, when the application starts, add the following parameters:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--add-opens java.base/jdk.internal.perf=ALL-UNNAMED --add-exports java.base/jdk.internal.perf=ALL-UNNAMED
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8);function h(f,_){const n=r("ExternalLinkIcon");return t(),l(i,null,[p,e("p",null,[e("a",u,[b,m,o(n)])]),v],64)}var x=s(d,[["render",h],["__file","perfcounter.html.vue"]]);export{x as default};
