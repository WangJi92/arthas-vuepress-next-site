import{_ as t,r as n,o as r,c as l,a,b as i,F as m,d as s,e as c}from"./app.1edb3735.js";const p={},o=a("h1",{id:"monitor",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#monitor","aria-hidden":"true"},"#"),s(" monitor")],-1),d={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-monitor",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"monitor",-1),h=s("\u5728\u7EBF\u6559\u7A0B"),u=c(`<blockquote><p>\u65B9\u6CD5\u6267\u884C\u76D1\u63A7</p></blockquote><p>\u5BF9\u5339\u914D <code>class-pattern</code>\uFF0F<code>method-pattern</code>\uFF0F<code>condition-express</code>\u7684\u7C7B\u3001\u65B9\u6CD5\u7684\u8C03\u7528\u8FDB\u884C\u76D1\u63A7\u3002</p><p><code>monitor</code> \u547D\u4EE4\u662F\u4E00\u4E2A\u975E\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4.</p><p>\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4\u662F\u8F93\u5165\u4E4B\u540E\u7ACB\u5373\u8FD4\u56DE\uFF0C\u800C\u975E\u5B9E\u65F6\u8FD4\u56DE\u7684\u547D\u4EE4\uFF0C\u5219\u662F\u4E0D\u65AD\u7684\u7B49\u5F85\u76EE\u6807 Java \u8FDB\u7A0B\u8FD4\u56DE\u4FE1\u606F\uFF0C\u76F4\u5230\u7528\u6237\u8F93\u5165 <code>Ctrl+C</code> \u4E3A\u6B62\u3002</p><p>\u670D\u52A1\u7AEF\u662F\u4EE5\u4EFB\u52A1\u7684\u5F62\u5F0F\u5728\u540E\u53F0\u8DD1\u4EFB\u52A1\uFF0C\u690D\u5165\u7684\u4EE3\u7801\u968F\u7740\u4EFB\u52A1\u7684\u4E2D\u6B62\u800C\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u6240\u4EE5\u4EFB\u52A1\u5173\u95ED\u540E\uFF0C\u4E0D\u4F1A\u5BF9\u539F\u6709\u6027\u80FD\u4EA7\u751F\u592A\u5927\u5F71\u54CD\uFF0C\u800C\u4E14\u539F\u5219\u4E0A\uFF0C\u4EFB\u4F55Arthas\u547D\u4EE4\u4E0D\u4F1A\u5F15\u8D77\u539F\u6709\u4E1A\u52A1\u903B\u8F91\u7684\u6539\u53D8\u3002</p><h3 id="\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" aria-hidden="true">#</a> \u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u76D1\u63A7\u9879</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;">timestamp</td><td style="text-align:left;">\u65F6\u95F4\u6233</td></tr><tr><td style="text-align:right;">class</td><td style="text-align:left;">Java\u7C7B</td></tr><tr><td style="text-align:right;">method</td><td style="text-align:left;">\u65B9\u6CD5\uFF08\u6784\u9020\u65B9\u6CD5\u3001\u666E\u901A\u65B9\u6CD5\uFF09</td></tr><tr><td style="text-align:right;">total</td><td style="text-align:left;">\u8C03\u7528\u6B21\u6570</td></tr><tr><td style="text-align:right;">success</td><td style="text-align:left;">\u6210\u529F\u6B21\u6570</td></tr><tr><td style="text-align:right;">fail</td><td style="text-align:left;">\u5931\u8D25\u6B21\u6570</td></tr><tr><td style="text-align:right;">rt</td><td style="text-align:left;">\u5E73\u5747RT</td></tr><tr><td style="text-align:right;">fail-rate</td><td style="text-align:left;">\u5931\u8D25\u7387</td></tr></tbody></table><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>\u65B9\u6CD5\u62E5\u6709\u4E00\u4E2A\u547D\u540D\u53C2\u6570 <code>[c:]</code>\uFF0C\u610F\u601D\u662F\u7EDF\u8BA1\u5468\u671F\uFF08cycle of output\uFF09\uFF0C\u62E5\u6709\u4E00\u4E2A\u6574\u578B\u7684\u53C2\u6570\u503C</p><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">\u65B9\u6CD5\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>condition-express</em></td><td style="text-align:left;">\u6761\u4EF6\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u7EDF\u8BA1\u5468\u671F\uFF0C\u9ED8\u8BA4\u503C\u4E3A120\u79D2</td></tr><tr><td style="text-align:right;">[b]</td><td style="text-align:left;">\u5728<strong>\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D</strong>\u8BA1\u7B97condition-express</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ monitor -c 5 demo.MathGame primeFactors
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 94 ms.
 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:06:38  demo.MathGame  primeFactors  5      1        4     1.15        80.00%

 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:06:43  demo.MathGame  primeFactors  5      3        2     42.29       40.00%

 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:06:48  demo.MathGame  primeFactors  5      3        2     67.92       40.00%

 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:06:53  demo.MathGame  primeFactors  5      2        3     0.25        60.00%

 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:06:58  demo.MathGame  primeFactors  1      1        0     0.45        0.00%

 timestamp            class          method        total  success  fail  avg-rt(ms)  fail-rate
-----------------------------------------------------------------------------------------------
 2018-12-03 19:07:03  demo.MathGame  primeFactors  2      2        0     3182.72     0.00%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E" aria-hidden="true">#</a> \u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C(\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -c 5 demo.MathGame primeFactors &quot;params[0] &lt;= 2&quot;
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 19 ms, listenerId: 5
 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
-----------------------------------------------------------------------------------------------
 2020-09-02 09:42:36  demo.MathGame  primeFactors    5       3       2      0.09       40.00%           

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:41  demo.MathGame  primeFactors    5       2       3      0.11       60.00%           

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:46  demo.MathGame  primeFactors    5       1       4      0.06       80.00%           

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:51  demo.MathGame  primeFactors    5       1       4      0.12       80.00%           

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:56  demo.MathGame  primeFactors    5       3       2      0.15       40.00%           
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D" aria-hidden="true">#</a> \u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C(\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -b -c 5 com.test.testes.MathGame primeFactors &quot;params[0] &lt;= 2&quot;
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 21 ms, listenerId: 4
 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:41:57  demo.MathGame  primeFactors    1       0        1      0.10      100.00%          

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:02  demo.MathGame  primeFactors    3       0        3      0.06      100.00%  

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:07  demo.MathGame  primeFactors    2       0        2      0.06      100.00% 

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:12  demo.MathGame  primeFactors    1       0        1      0.05      100.00% 

 timestamp            class          method         total  success  fail  avg-rt(ms)  fail-rate        
----------------------------------------------------------------------------------------------
 2020-09-02 09:42:17  demo.MathGame  primeFactors    2       0        2      0.10      100.00% 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,16);function g(f,x){const e=n("ExternalLinkIcon");return r(),l(m,null,[o,a("p",null,[a("a",d,[b,h,i(e)])]),u],64)}var v=t(p,[["render",g],["__file","monitor.html.vue"]]);export{v as default};
