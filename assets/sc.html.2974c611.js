import{_ as n,r as t,o as l,c as r,a as s,b as i,F as c,d as e,e as o}from"./app.1edb3735.js";const d={},p=s("h1",{id:"sc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sc","aria-hidden":"true"},"#"),e(" sc")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-sc",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"sc",-1),u=e(" online tutorial"),h=o(`<blockquote><p>Search classes loaded by JVM.</p></blockquote><p><code>sc</code> stands for search class. This command can search all possible classes loaded by JVM and show their information. The supported options are: <code>[d]</code>\u3001<code>[E]</code>\u3001<code>[f]</code> and <code>[x:]</code>.</p><h3 id="supported-options" tabindex="-1"><a class="header-anchor" href="#supported-options" aria-hidden="true">#</a> Supported Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">pattern for the class name</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">pattern for the method name</td></tr><tr><td style="text-align:right;"><code>[d]</code></td><td style="text-align:left;">print the details of the current class, including its code source, class specification, its class loader and so on.<br>If a class is loaded by more than one class loader, then the class details will be printed several times</td></tr><tr><td style="text-align:right;"><code>[E]</code></td><td style="text-align:left;">turn on regex match, the default behavior is wildcards match</td></tr><tr><td style="text-align:right;"><code>[f]</code></td><td style="text-align:left;">print the fields info of the current class, MUST be used with <code>-d</code> together</td></tr><tr><td style="text-align:right;"><code>[x:]</code></td><td style="text-align:left;">specify the depth of recursive traverse the static fields, the default value is &#39;0&#39; - equivalent to use <code>toString</code> to output</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">The hash code of the special class&#39;s classLoader</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr><tr><td style="text-align:right;"><code>[n:]</code></td><td style="text-align:left;">Maximum number of matching classes with details (100 by default)</td></tr></tbody></table><blockquote><p><em>class-patten</em> supports full qualified class name, e.g. com.taobao.test.AAA and com/taobao/test/AAA. It also supports the format of &#39;com/taobao/test/AAA&#39;, so that it is convenient to directly copy class name from the exception stack trace without replacing &#39;/&#39; to &#39;.&#39;. <br><br><code>sc</code> turns on matching sub-class match by default, that is, <code>sc</code> will also search the sub classes of the target class too. If exact-match is desired, pls. use <code>options disable-sub-class true</code>.</p></blockquote><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ul><li><p>Wildcards match search</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc demo.*
demo.MathGame
Affect(row-cnt:1) cost in 55 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>View class details</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc -d demo.MathGame
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

Affect(row-cnt:1) cost in 875 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p>View class fields</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc -d -f demo.MathGame
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
fields            modifierprivate,static
                  type    java.util.Random
                  name    random
                  value   java.util.Random@522b4
                          08a

                  modifierprivate
                  type    int
                  name    illegalArgumentCount


Affect(row-cnt:1) cost in 19 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></li></ul>`,7);function f(g,x){const a=t("ExternalLinkIcon");return l(),r(c,null,[p,s("p",null,[s("a",b,[m,u,i(a)])]),h],64)}var v=n(d,[["render",f],["__file","sc.html.vue"]]);export{v as default};
