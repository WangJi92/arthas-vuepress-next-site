import{_ as s,r as n,o as r,c as l,a as e,b as i,F as o,d as t,e as m}from"./app.1edb3735.js";const c={},d=e("h1",{id:"monitor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitor","aria-hidden":"true"},"#"),t(" monitor")],-1),p={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-monitor",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"monitor",-1),h=t(" online tutorial"),u=m(`<blockquote><p>Monitor method invocation.</p></blockquote><p>Monitor invocation for the method matched with <code>class-pattern</code> and <code>method-pattern</code> and filter by <code>condition-expression</code>.</p><p><code>monitor</code> is not a command returning immediately.</p><p>A command returning immediately is a command immediately returns with the result after the command is input, while a non-immediate returning command will keep outputting the information from the target JVM process until user presses <code>Ctrl+C</code>.</p><p>On Arthas&#39;s server side, the command is running as a background job, but the weaved code will not take further effect once the job is terminated, therefore, it will not impact the performance after the job quits. Furthermore, Arthas is designed to have no side effect to the business logic.</p><h3 id="items-to-monitor" tabindex="-1"><a class="header-anchor" href="#items-to-monitor" aria-hidden="true">#</a> Items to monitor</h3><table><thead><tr><th style="text-align:right;">Item</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;">timestamp</td><td style="text-align:left;">timestamp</td></tr><tr><td style="text-align:right;">class</td><td style="text-align:left;">Java class</td></tr><tr><td style="text-align:right;">method</td><td style="text-align:left;">method (constructor and regular methods)</td></tr><tr><td style="text-align:right;">total</td><td style="text-align:left;">calling times</td></tr><tr><td style="text-align:right;">success</td><td style="text-align:left;">success count</td></tr><tr><td style="text-align:right;">fail</td><td style="text-align:left;">failure count</td></tr><tr><td style="text-align:right;">rt</td><td style="text-align:left;">average RT</td></tr><tr><td style="text-align:right;">fail-rate</td><td style="text-align:left;">failure ratio</td></tr></tbody></table><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>Parameter <code>[c:]</code> stands for cycles of statistics. Its value is an integer value in seconds.</p><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">pattern for the class name</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">pattern for the method name</td></tr><tr><td style="text-align:right;"><em>condition-expression</em></td><td style="text-align:left;">condition expression for filtering method calls</td></tr><tr><td style="text-align:right;"><code>[E]</code></td><td style="text-align:left;">turn on regex matching while the default is wildcard matching</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">cycle of statistics, the default value: <code>120</code>s</td></tr><tr><td style="text-align:right;"><code>[b]</code></td><td style="text-align:left;">evaluate the condition-expression before method invoke</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ monitor -c 5 demo.MathGame primeFactors
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="evaluate-condition-express-to-filter-method-after-method-call" tabindex="-1"><a class="header-anchor" href="#evaluate-condition-express-to-filter-method-after-method-call" aria-hidden="true">#</a> Evaluate condition-express to filter method (after method call)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -c 5 demo.MathGame primeFactors &quot;params[0] &lt;= 2&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="evaluate-condition-express-to-filter-method-before-method-call" tabindex="-1"><a class="header-anchor" href="#evaluate-condition-express-to-filter-method-before-method-call" aria-hidden="true">#</a> Evaluate condition-express to filter method (before method call)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -b -c 5 com.test.testes.MathGame primeFactors &quot;params[0] &lt;= 2&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,16);function f(g,x){const a=n("ExternalLinkIcon");return r(),l(o,null,[d,e("p",null,[e("a",p,[b,h,i(a)])]),u],64)}var y=s(c,[["render",f],["__file","monitor.html.vue"]]);export{y as default};
