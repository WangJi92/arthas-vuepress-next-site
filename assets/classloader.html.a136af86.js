import{_ as n,r,o as l,c as t,a as s,b as i,F as c,d as a,e as d}from"./app.1edb3735.js";const o={},b=s("h1",{id:"classloader",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classloader","aria-hidden":"true"},"#"),a(" classloader")],-1),p={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-classloader",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"classloader",-1),h=a(" online tutorial"),m=d(`<p>View hierarchy, urls and classes-loading info for the class-loaders.</p><p><code>classloader</code> can search and print out the URLs for a specified resource from one particular classloader. It is quite handy when analyzing <code>ResourceNotFoundException</code>.</p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;">[l]</td><td style="text-align:left;">list all classloader instances</td></tr><tr><td style="text-align:right;">[t]</td><td style="text-align:left;">print classloader&#39;s hierarchy</td></tr><tr><td style="text-align:right;">[a]</td><td style="text-align:left;">list all the classes loaded by all the classloaders (use it with great caution since the output can be huge)</td></tr><tr><td style="text-align:right;">[c:]</td><td style="text-align:left;">print classloader&#39;s hashcode</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr><tr><td style="text-align:right;"><code>[c: r:]</code></td><td style="text-align:left;">using ClassLoader to search resource</td></tr><tr><td style="text-align:right;"><code>[c: load:]</code></td><td style="text-align:left;">using ClassLoader to load class</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="view-statistics-categorized-by-class-type" tabindex="-1"><a class="header-anchor" href="#view-statistics-categorized-by-class-type" aria-hidden="true">#</a> View statistics categorized by class type</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader
 name                                       numberOfInstances  loadedCountTotal
 com.taobao.arthas.agent.ArthasClassloader  1                  2115
 BootstrapClassLoader                       1                  1861
 sun.reflect.DelegatingClassLoader          5                  5
 sun.misc.Launcher$AppClassLoader           1                  4
 sun.misc.Launcher$ExtClassLoader           1                  1
Affect(row-cnt:5) cost in 3 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="view-statistics-categorized-by-loaded-classes-number" tabindex="-1"><a class="header-anchor" href="#view-statistics-categorized-by-loaded-classes-number" aria-hidden="true">#</a> View statistics categorized by loaded classes number</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -l
 name                                                loadedCount  hash      parent
 BootstrapClassLoader                                1861         null      null
 com.taobao.arthas.agent.ArthasClassloader@68b31f0a  2115         68b31f0a  sun.misc.Launcher$ExtClassLoader@66350f69
 sun.misc.Launcher$AppClassLoader@3d4eac69           4            3d4eac69  sun.misc.Launcher$ExtClassLoader@66350f69
 sun.misc.Launcher$ExtClassLoader@66350f69           1            66350f69  null
Affect(row-cnt:4) cost in 2 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="view-class-loaders-hierarchy" tabindex="-1"><a class="header-anchor" href="#view-class-loaders-hierarchy" aria-hidden="true">#</a> View class-loaders hierarchy</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -t
+-BootstrapClassLoader
+-sun.misc.Launcher$ExtClassLoader@66350f69
  +-com.taobao.arthas.agent.ArthasClassloader@68b31f0a
  +-sun.misc.Launcher$AppClassLoader@3d4eac69
Affect(row-cnt:4) cost in 3 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="show-the-urls-of-the-urlclassloader" tabindex="-1"><a class="header-anchor" href="#show-the-urls-of-the-urlclassloader" aria-hidden="true">#</a> Show the URLs of the URLClassLoader</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -c 3d4eac69
file:/private/tmp/math-game.jar
file:/Users/hengyunabc/.arthas/lib/3.0.5/arthas/arthas-agent.jar

Affect(row-cnt:9) cost in 3 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note that the hashcode changes, you need to check the current ClassLoader information first, and extract the hashcode corresponding to the ClassLoader.</p><p>For ClassLoader with only unique instance, it can be specified by class name, which is more convenient to use:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader --classLoaderClass sun.misc.Launcher$AppClassLoader
file:/private/tmp/math-game.jar
file:/Users/hengyunabc/.arthas/lib/3.0.5/arthas/arthas-agent.jar

Affect(row-cnt:9) cost in 3 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="use-the-classloader-to-load-resource" tabindex="-1"><a class="header-anchor" href="#use-the-classloader-to-load-resource" aria-hidden="true">#</a> Use the classloader to load resource</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -c 3d4eac69  -r META-INF/MANIFEST.MF
 jar:file:/System/Library/Java/Extensions/MRJToolkit.jar!/META-INF/MANIFEST.MF
 jar:file:/private/tmp/math-game.jar!/META-INF/MANIFEST.MF
 jar:file:/Users/hengyunabc/.arthas/lib/3.0.5/arthas/arthas-agent.jar!/META-INF/MANIFEST.MF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Use the classloader to load <code>.class</code> resource</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -c 1b6d3586 -r java/lang/String.class
 jar:file:/Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home/jre/lib/rt.jar!/java/lang/String.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="use-the-classloader-to-load-class" tabindex="-1"><a class="header-anchor" href="#use-the-classloader-to-load-class" aria-hidden="true">#</a> Use the classloader to load class</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -c 3d4eac69 --load demo.MathGame
load class success.
 class-info        demo.MathGame
 code-source       /private/tmp/math-game.jar
 name              demo.MathGame
 isInterface       false
 isAnnotation      false
 isEnum            false
 isAnonymousClass  false
 isArray           false
 isLocalClass      false
 isMemberClass     false
 isPrimitive       false
 isSynthetic       false
 simple-name       MathGame
 modifier          public
 annotation
 interfaces
 super-class       +-java.lang.Object
 class-loader      +-sun.misc.Launcher$AppClassLoader@3d4eac69
                     +-sun.misc.Launcher$ExtClassLoader@66350f69
 classLoaderHash   3d4eac69
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="statistics-classloader-actually-used-urls-and-unused-urls" tabindex="-1"><a class="header-anchor" href="#statistics-classloader-actually-used-urls-and-unused-urls" aria-hidden="true">#</a> Statistics ClassLoader actually used URLs and unused URLs</h4><blockquote><p>Note that statistics are based on all classes currently loaded by the JVM. Does not mean that <code>Unused URLs</code> can be removed from the application. Because it may be necessary to load classes from <code>Unused URLs</code> in the future, or to load <code>resources</code>.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ classloader --url-stat
 com.taobao.arthas.agent.ArthasClassloader@3c41660, hash:3c41660
 Used URLs:
 file:/Users/admin/.arthas/lib/3.5.6/arthas/arthas-core.jar
 Unused URLs:

 sun.misc.Launcher$AppClassLoader@75b84c92, hash:75b84c92
 Used URLs:
 file:/Users/admin/code/java/arthas/math-game/target/math-game.jar
 file:/Users/admin/.arthas/lib/3.5.6/arthas/arthas-agent.jar
 Unused URLs:

 sun.misc.Launcher$ExtClassLoader@7f31245a, hash:7f31245a
 Used URLs:
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/sunec.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/sunjce_provider.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/localedata.jar
 Unused URLs:
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/nashorn.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/cldrdata.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/legacy8ujsse.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/jfxrt.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/dnsns.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/openjsse.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/sunpkcs11.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/jaccess.jar
 file:/tmp/jdk1.8/Contents/Home/jre/lib/ext/zipfs.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,25);function g(f,x){const e=r("ExternalLinkIcon");return l(),t(c,null,[b,s("p",null,[s("a",p,[u,h,i(e)])]),m],64)}var v=n(o,[["render",g],["__file","classloader.html.vue"]]);export{v as default};
