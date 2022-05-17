import{_ as e,r as l,o as t,c as r,a as s,b as i,F as c,d as a,e as d}from"./app.1edb3735.js";const p={},b=s("h1",{id:"sc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sc","aria-hidden":"true"},"#"),a(" sc")],-1),o={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-sc",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"sc",-1),u=a("\u5728\u7EBF\u6559\u7A0B"),h=d(`<blockquote><p>\u67E5\u770BJVM\u5DF2\u52A0\u8F7D\u7684\u7C7B\u4FE1\u606F</p></blockquote><p>\u201CSearch-Class\u201D \u7684\u7B80\u5199\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u80FD\u641C\u7D22\u51FA\u6240\u6709\u5DF2\u7ECF\u52A0\u8F7D\u5230 JVM \u4E2D\u7684 Class \u4FE1\u606F\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u652F\u6301\u7684\u53C2\u6570\u6709 <code>[d]</code>\u3001<code>[E]</code>\u3001<code>[f]</code> \u548C <code>[x:]</code>\u3002</p><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><h3 id="\u53C2\u6570\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-1" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">\u65B9\u6CD5\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;">[d]</td><td style="text-align:left;">\u8F93\u51FA\u5F53\u524D\u7C7B\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u8FD9\u4E2A\u7C7B\u6240\u52A0\u8F7D\u7684\u539F\u59CB\u6587\u4EF6\u6765\u6E90\u3001\u7C7B\u7684\u58F0\u660E\u3001\u52A0\u8F7D\u7684ClassLoader\u7B49\u8BE6\u7EC6\u4FE1\u606F\u3002<br>\u5982\u679C\u4E00\u4E2A\u7C7B\u88AB\u591A\u4E2AClassLoader\u6240\u52A0\u8F7D\uFF0C\u5219\u4F1A\u51FA\u73B0\u591A\u6B21</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr><tr><td style="text-align:right;">[f]</td><td style="text-align:left;">\u8F93\u51FA\u5F53\u524D\u7C7B\u7684\u6210\u5458\u53D8\u91CF\u4FE1\u606F\uFF08\u9700\u8981\u914D\u5408\u53C2\u6570-d\u4E00\u8D77\u4F7F\u7528\uFF09</td></tr><tr><td style="text-align:right;">[x:]</td><td style="text-align:left;">\u6307\u5B9A\u8F93\u51FA\u9759\u6001\u53D8\u91CF\u65F6\u5C5E\u6027\u7684\u904D\u5386\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u76F4\u63A5\u4F7F\u7528 <code>toString</code> \u8F93\u51FA</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u6307\u5B9Aclass\u7684 ClassLoader \u7684 hashcode</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">\u6307\u5B9A\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 class name</td></tr><tr><td style="text-align:right;"><code>[n:]</code></td><td style="text-align:left;">\u5177\u6709\u8BE6\u7EC6\u4FE1\u606F\u7684\u5339\u914D\u7C7B\u7684\u6700\u5927\u6570\u91CF\uFF08\u9ED8\u8BA4\u4E3A100\uFF09</td></tr></tbody></table><blockquote><p>class-pattern\u652F\u6301\u5168\u9650\u5B9A\u540D\uFF0C\u5982com.taobao.test.AAA\uFF0C\u4E5F\u652F\u6301com/taobao/test/AAA\u8FD9\u6837\u7684\u683C\u5F0F\uFF0C\u8FD9\u6837\uFF0C\u6211\u4EEC\u4ECE\u5F02\u5E38\u5806\u6808\u91CC\u9762\u628A\u7C7B\u540D\u62F7\u8D1D\u8FC7\u6765\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u5728\u624B\u52A8\u628A<code>/</code>\u66FF\u6362\u4E3A<code>.</code>\u5566\u3002</p></blockquote><blockquote><p>sc \u9ED8\u8BA4\u5F00\u542F\u4E86\u5B50\u7C7B\u5339\u914D\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6240\u6709\u5F53\u524D\u7C7B\u7684\u5B50\u7C7B\u4E5F\u4F1A\u88AB\u641C\u7D22\u51FA\u6765\uFF0C\u60F3\u8981\u7CBE\u786E\u7684\u5339\u914D\uFF0C\u8BF7\u6253\u5F00<code>options disable-sub-class true</code>\u5F00\u5173</p></blockquote><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><ul><li><p>\u6A21\u7CCA\u641C\u7D22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc demo.*
demo.MathGame
Affect(row-cnt:1) cost in 55 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u6253\u5370\u7C7B\u7684\u8BE6\u7EC6\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc -d demo.MathGame
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p>\u6253\u5370\u51FA\u7C7B\u7684Field\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc -d -f demo.MathGame
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></li></ul>`,9);function f(g,x){const n=l("ExternalLinkIcon");return t(),r(c,null,[b,s("p",null,[s("a",o,[m,u,i(n)])]),h],64)}var v=e(p,[["render",f],["__file","sc.html.vue"]]);export{v as default};
