import{_ as c,r as i,o,c as d,a as e,b as n,w as r,F as p,d as a,e as s}from"./app.1edb3735.js";const h={},m=e("h1",{id:"tt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tt","aria-hidden":"true"},"#"),a(" tt")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-tt",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"tt",-1),f=a(" online tutorial"),g=s('<p>Check the <code>parameters</code>, <code>return values</code> and <code>exceptions</code> of the methods at different times.</p><p><code>watch</code> is a powerful command but due to its feasibility and complexity, it&#39;s quite hard to locate the issue effectively.</p><p>In such difficulties, <code>tt</code> comes into play.</p><p>With the help of <code>tt</code> (<em>TimeTunnel</em>), you can check the contexts of the methods at different times in execution history.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="start-demo" tabindex="-1"><a class="header-anchor" href="#start-demo" aria-hidden="true">#</a> Start Demo</h4>',6),_=a("Start "),x=e("code",null,"math-game",-1),T=a(" in "),E=a("Quick Start"),v=a("."),M=s(`<h4 id="record-method-calls" tabindex="-1"><a class="header-anchor" href="#record-method-calls" aria-hidden="true">#</a> Record method calls</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt -t demo.MathGame primeFactors
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 66 ms.
 INDEX   TIMESTAMP            COST(ms)  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 1000    2018-12-04 11:15:38  1.096236  false   true     0x4b67cf4d     MathGame                       primeFactors
 1001    2018-12-04 11:15:39  0.191848  false   true     0x4b67cf4d     MathGame                       primeFactors
 1002    2018-12-04 11:15:40  0.069523  false   true     0x4b67cf4d     MathGame                       primeFactors
 1003    2018-12-04 11:15:41  0.186073  false   true     0x4b67cf4d     MathGame                       primeFactors
 1004    2018-12-04 11:15:42  17.76437  true    false    0x4b67cf4d     MathGame                       primeFactors
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p><code>-t</code></p><p>record the calling context of the method <code>demo.MathGame primeFactors</code></p></li><li><p><code>-n 3</code></p><p>limit the number of the records (avoid overflow for too many records; with <code>-n</code> option, Arthas can automatically stop recording once the records reach the specified limit)</p></li><li><p>Property</p></li></ul><table><thead><tr><th>Name</th><th>Specification</th></tr></thead><tbody><tr><td>INDEX</td><td>the index for each call based on time</td></tr><tr><td>TIMESTAMP</td><td>time to invoke the method</td></tr><tr><td>COST(ms)</td><td>time cost of the method call</td></tr><tr><td>IS-RET</td><td>whether method exits with normal return</td></tr><tr><td>IS-EXP</td><td>whether method failed with exceptions</td></tr><tr><td>OBJECT</td><td><code>hashCode()</code> of the object invoking the method</td></tr><tr><td>CLASS</td><td>class name of the object invoking the method</td></tr><tr><td>METHOD</td><td>method being invoked</td></tr></tbody></table><ul><li>Condition expression</li></ul><p>Tips:</p><ol><li><code>tt -t *Test print params.length==1</code> with different amounts of parameters;</li><li><code>tt -t *Test print &#39;params[1] instanceof Integer&#39;</code> with different types of parameters;</li><li><code>tt -t *Test print params[0].mobile==&quot;13989838402&quot;</code> with specified parameter.</li></ol><p>Advanced:</p>`,8),S=a("Critical fields in expression"),I={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},C=a("Special usage"),A={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},G=a("OGNL official guide"),y=s(`<h4 id="list-all-records" tabindex="-1"><a class="header-anchor" href="#list-all-records" aria-hidden="true">#</a> List all records</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt -l
 INDEX   TIMESTAMP            COST(ms)  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 1000    2018-12-04 11:15:38  1.096236  false   true     0x4b67cf4d     MathGame                       primeFactors
 1001    2018-12-04 11:15:39  0.191848  false   true     0x4b67cf4d     MathGame                       primeFactors
 1002    2018-12-04 11:15:40  0.069523  false   true     0x4b67cf4d     MathGame                       primeFactors
 1003    2018-12-04 11:15:41  0.186073  false   true     0x4b67cf4d     MathGame                       primeFactors
 1004    2018-12-04 11:15:42  17.76437  true    false    0x4b67cf4d     MathGame                       primeFactors
                              9
 1005    2018-12-04 11:15:43  0.4776    false   true     0x4b67cf4d     MathGame                       primeFactors
Affect(row-cnt:6) cost in 4 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="searching-for-records" tabindex="-1"><a class="header-anchor" href="#searching-for-records" aria-hidden="true">#</a> Searching for records</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt -s &#39;method.name==&quot;primeFactors&quot;&#39;
 INDEX   TIMESTAMP            COST(ms)  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 1000    2018-12-04 11:15:38  1.096236  false   true     0x4b67cf4d     MathGame                       primeFactors
 1001    2018-12-04 11:15:39  0.191848  false   true     0x4b67cf4d     MathGame                       primeFactors
 1002    2018-12-04 11:15:40  0.069523  false   true     0x4b67cf4d     MathGame                       primeFactors
 1003    2018-12-04 11:15:41  0.186073  false   true     0x4b67cf4d     MathGame                       primeFactors
 1004    2018-12-04 11:15:42  17.76437  true    false    0x4b67cf4d     MathGame                       primeFactors
                              9
 1005    2018-12-04 11:15:43  0.4776    false   true     0x4b67cf4d     MathGame                       primeFactors
Affect(row-cnt:6) cost in 607 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Advanced:</p>`,5),w=a("Critical fields in expression"),O=s(`<h4 id="check-context-of-the-call" tabindex="-1"><a class="header-anchor" href="#check-context-of-the-call" aria-hidden="true">#</a> Check context of the call</h4><p>Using <code>tt -i &lt;index&gt;</code> to check a specific calling details.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt -i 1003
 INDEX            1003
 GMT-CREATE       2018-12-04 11:15:41
 COST(ms)         0.186073
 OBJECT           0x4b67cf4d
 CLASS            demo.MathGame
 METHOD           primeFactors
 IS-RETURN        false
 IS-EXCEPTION     true
 PARAMETERS[0]    @Integer[-564322413]
 THROW-EXCEPTION  java.lang.IllegalArgumentException: number is: -564322413, need &gt;= 2
                    at demo.MathGame.primeFactors(MathGame.java:46)
                    at demo.MathGame.run(MathGame.java:24)
                    at demo.MathGame.main(MathGame.java:16)

Affect(row-cnt:1) cost in 11 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="replay-record" tabindex="-1"><a class="header-anchor" href="#replay-record" aria-hidden="true">#</a> Replay record</h4><p>Since Arthas stores the context of the call, you can even <em>replay</em> the method calling afterwards with extra option <code>-p</code> to replay the issue for advanced troubleshooting, option <code>--replay-times</code> define the replay execution times, option <code>--replay-interval</code> define the interval(unit in ms,with default value 1000) of replays</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt -i 1004 -p
 RE-INDEX       1004
 GMT-REPLAY     2018-12-04 11:26:00
 OBJECT         0x4b67cf4d
 CLASS          demo.MathGame
 METHOD         primeFactors
 PARAMETERS[0]  @Integer[946738738]
 IS-RETURN      true
 IS-EXCEPTION   false
 RETURN-OBJ     @ArrayList[
                    @Integer[2],
                    @Integer[11],
                    @Integer[17],
                    @Integer[2531387],
                ]
Time fragment[1004] successfully replayed.
Affect(row-cnt:1) cost in 14 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="watch-express" tabindex="-1"><a class="header-anchor" href="#watch-express" aria-hidden="true">#</a> Watch express</h4><p><code>-w, --watch-express</code> watch the time fragment by ognl express.</p>`,8),F=a("You can used all variables in "),R=a("fundamental fields in expressions"),k=a(" for the watch express\u3002"),P=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@10718]$ tt -t demo.MathGame run -n 5 
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 56 ms, listenerId: 1
 INDEX      TIMESTAMP                   COST(ms)     IS-RET     IS-EXP      OBJECT              CLASS                                     METHOD
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1000       2021-01-08 21:54:17         0.901091     true       false       0x7699a589          MathGame                                  run
[arthas@10718]$ tt -w &#39;target.illegalArgumentCount&#39;  -x 1 -i 1000
@Integer[60]
Affect(row-cnt:1) cost in 7 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>Get a static field and calling a static method</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@10718]$ tt -t demo.MathGame run -n 5
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 56 ms, listenerId: 1
 INDEX      TIMESTAMP                   COST(ms)     IS-RET     IS-EXP      OBJECT              CLASS                                     METHOD
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1000       2021-01-08 21:54:17         0.901091     true       false       0x7699a589          MathGame                                  run
[arthas@10718]$ tt -w &#39;@demo.MathGame@random.nextInt(100)&#39;  -x 1 -i 1000
@Integer[46]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,3),N=a("Note that "),L=e("code",null,"com.taobao.arthas.core.advisor.Advice#getLoader",-1),D=a(" is used here, and that it is better to use the exact "),X=e("code",null,"classloader",-1),B=a(),H=a("ognl"),J=a("."),$=a("Advanced usage "),j={href:"https://github.com/alibaba/arthas/issues/482",target:"_blank",rel:"noopener noreferrer"},q=a("get spring context to call the bean method"),U=s("<p>F.Y.I</p><ol><li><p><strong>Loss</strong> of the <code>ThreadLocal</code></p><p>Arthas save params into an array, then invoke the method with the params again. The method execute in another thread, so the <code>ThreadLocal</code> <strong>lost</strong>.</p></li><li><p>params may be modified</p><p>Arthas save params into an array, they are object references. The Objects may be modified by other code.</p></li></ol>",2);function V(Q,W){const l=i("ExternalLinkIcon"),t=i("RouterLink");return o(),d(p,null,[m,e("p",null,[e("a",b,[u,f,n(l)])]),g,e("p",null,[_,x,T,n(t,{to:"/en/doc/quick-start.html"},{default:r(()=>[E]),_:1}),v]),M,e("ul",null,[e("li",null,[n(t,{to:"/en/doc/advice-class.html"},{default:r(()=>[S]),_:1})]),e("li",null,[e("a",I,[C,n(l)])]),e("li",null,[e("a",A,[G,n(l)])])]),y,e("ul",null,[e("li",null,[n(t,{to:"/en/doc/advice-class.html"},{default:r(()=>[w]),_:1})])]),O,e("ul",null,[e("li",null,[F,n(t,{to:"/en/doc/advice-class.html"},{default:r(()=>[R]),_:1}),k])]),P,e("p",null,[N,L,D,X,B,n(t,{to:"/en/doc/ognl.html"},{default:r(()=>[H]),_:1}),J]),e("p",null,[$,e("a",j,[q,n(l)])]),U],64)}var z=c(h,[["render",V],["__file","tt.html.vue"]]);export{z as default};
