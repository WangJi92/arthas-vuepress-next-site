import{_ as c,r as i,o,c as d,a as e,b as s,w as r,F as p,d as n,e as l}from"./app.1edb3735.js";const m={},b=e("h1",{id:"watch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#watch","aria-hidden":"true"},"#"),n(" watch")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-watch",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"watch",-1),g=n(" online tutorial"),f=e("p",null,[n("Monitor methods in data aspect including "),e("code",null,"return values"),n(", "),e("code",null,"exceptions"),n(" and "),e("code",null,"parameters"),n(".")],-1),x=n("With the help of "),v={href:"https://commons.apache.org/proper/commons-ognl/index.html",target:"_blank",rel:"noopener noreferrer"},_=n("OGNL"),y=n(", you can easily check the details of variables when methods being invoked."),w=l('<h3 id="parameters-options" tabindex="-1"><a class="header-anchor" href="#parameters-options" aria-hidden="true">#</a> Parameters &amp; Options</h3><p>There are four different scenarios for <code>watch</code> command, which makes it rather complicated.</p><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">pattern for the class name</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">pattern for the method name</td></tr><tr><td style="text-align:right;"><em>expression</em></td><td style="text-align:left;">expression to watch, default value <code>{params, target, returnObj}</code></td></tr><tr><td style="text-align:right;"><em>condition-expression</em></td><td style="text-align:left;">condition expression to filter</td></tr><tr><td style="text-align:right;">[b]</td><td style="text-align:left;">before method being invoked</td></tr><tr><td style="text-align:right;">[e]</td><td style="text-align:left;">when method encountering exceptions</td></tr><tr><td style="text-align:right;">[s]</td><td style="text-align:left;">when method exits normally</td></tr><tr><td style="text-align:right;">[f]</td><td style="text-align:left;">when method exits (either succeed or fail with exceptions)</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">turn on regex matching while the default is wildcard matching</td></tr><tr><td style="text-align:right;">[x:]</td><td style="text-align:left;">the depth to print the specified property with default value: 1, the max value is 4</td></tr></tbody></table><p>F.Y.I</p><ol><li>any valid OGNL expression as <code>&quot;{params,returnObj}&quot;</code> supported</li><li>there are four <em>watching</em> points: <code>-b</code>, <code>-e</code>, <code>-s</code> and <code>-f</code> (the first three are off in default while <code>-f</code> on);</li><li>at the <em>watching</em> point, Arthas will use the <em>expression</em> to evaluate the variables and print them out;</li><li><code>in parameters</code> and <code>out parameters</code> are different since they can be modified within the invoked methods; <code>params</code> stands for <code>in parameters</code> in <code>-b</code>while <code>out parameters</code> in other <em>watching</em> points;</li><li>there are no <code>return values</code> and <code>exceptions</code> when using <code>-b</code>.</li><li>In the result of the watch command, the <code>location</code> information will be printed. There are three possible values for <code>location</code>: <code>AtEnter</code>, <code>AtExit</code>, and <code>AtExceptionExit</code>. Corresponding to the method entry, the method returns normally, and the method throws an exception.</li></ol><p>Advanced:</p>',6),I=n("Critical fields in "),k=e("em",null,"expression",-1),A={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},C=n("Special usages"),j={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},G=n("OGNL official guide"),L=e("h3",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),M=e("h4",{id:"start-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#start-demo","aria-hidden":"true"},"#"),n(" Start Demo")],-1),O=n("Start "),q=e("code",null,"math-game",-1),E=n(" in "),F=n("Quick Start"),T=n("."),R=l(`<h4 id="check-the-out-parameters-this-and-return-value" tabindex="-1"><a class="header-anchor" href="#check-the-out-parameters-this-and-return-value" aria-hidden="true">#</a> Check the <code>out parameters</code>, <code>this</code> and <code>return value</code></h4><blockquote><p>The expression to watch, default value <code>{params, target, returnObj}</code></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors -x 2
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 32 ms, listenerId: 5
method=demo.MathGame.primeFactors location=AtExceptionExit
ts=2021-08-31 15:22:57; [cost=0.220625ms] result=@ArrayList[
    @Object[][
        @Integer[-179173],
    ],
    @MathGame[
        random=@Random[java.util.Random@31cefde0],
        illegalArgumentCount=@Integer[44],
    ],
    null,
]
method=demo.MathGame.primeFactors location=AtExit
ts=2021-08-31 15:22:58; [cost=1.020982ms] result=@ArrayList[
    @Object[][
        @Integer[1],
    ],
    @MathGame[
        random=@Random[java.util.Random@31cefde0],
        illegalArgumentCount=@Integer[44],
    ],
    @ArrayList[
        @Integer[2],
        @Integer[2],
        @Integer[26947],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li>In the above result, the method is executed twice, the first result is <code>location=AtExceptionExit</code>, indicating that the method throws an exception, so <code>returnObj</code> is null</li><li>In the second result is <code>location=AtExit</code>, indicating that the method returns normally, so you can see that the result of <code>returnObj</code> is an ArrayList</li></ul><h4 id="check-in-parameters" tabindex="-1"><a class="header-anchor" href="#check-in-parameters" aria-hidden="true">#</a> Check <code>in parameters</code></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,returnObj}&quot; -x 2 -b
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 50 ms.
ts=2018-12-03 19:23:23; [cost=0.0353ms] result=@ArrayList[
    @Object[][
        @Integer[-1077465243],
    ],
    null,
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Compared to the previous <em>check</em>:</p><ul><li><code>return value</code> is <code>null</code> since it&#39;s <code>-b</code>.</li></ul><h4 id="check-before-and-after-at-the-same-time" tabindex="-1"><a class="header-anchor" href="#check-before-and-after-at-the-same-time" aria-hidden="true">#</a> Check <em>before</em> and <em>after</em> at the same time</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,target,returnObj}&quot; -x 2 -b -s -n 2
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 46 ms.
ts=2018-12-03 19:29:54; [cost=0.01696ms] result=@ArrayList[
    @Object[][
        @Integer[1],
    ],
    @MathGame[
        random=@Random[java.util.Random@522b408a],
        illegalArgumentCount=@Integer[13038],
    ],
    null,
]
ts=2018-12-03 19:29:54; [cost=4.277392ms] result=@ArrayList[
    @Object[][
        @Integer[1],
    ],
    @MathGame[
        random=@Random[java.util.Random@522b408a],
        illegalArgumentCount=@Integer[13038],
    ],
    @ArrayList[
        @Integer[2],
        @Integer[2],
        @Integer[2],
        @Integer[5],
        @Integer[5],
        @Integer[73],
        @Integer[241],
        @Integer[439],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>F.Y.I</p><ul><li><code>-n 2</code>: threshold of execution times is 2.</li><li>the first block of output is the <em>before watching</em> point;</li><li>*the order of the output determined by the <em>watching</em> order itself (nothing to do with the order of the options <code>-b -s</code>).</li></ul><h4 id="use-x-to-check-more-details" tabindex="-1"><a class="header-anchor" href="#use-x-to-check-more-details" aria-hidden="true">#</a> Use <code>-x</code> to check more details</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,target}&quot; -x 3
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 58 ms.
ts=2018-12-03 19:34:19; [cost=0.587833ms] result=@ArrayList[
    @Object[][
        @Integer[1],
    ],
    @MathGame[
        random=@Random[
            serialVersionUID=@Long[3905348978240129619],
            seed=@AtomicLong[3133719055989],
            multiplier=@Long[25214903917],
            addend=@Long[11],
            mask=@Long[281474976710655],
            DOUBLE_UNIT=@Double[1.1102230246251565E-16],
            BadBound=@String[bound must be positive],
            BadRange=@String[bound must be greater than origin],
            BadSize=@String[size must be non-negative],
            seedUniquifier=@AtomicLong[-3282039941672302964],
            nextNextGaussian=@Double[0.0],
            haveNextNextGaussian=@Boolean[false],
            serialPersistentFields=@ObjectStreamField[][isEmpty=false;size=3],
            unsafe=@Unsafe[sun.misc.Unsafe@2eaa1027],
            seedOffset=@Long[24],
        ],
        illegalArgumentCount=@Integer[13159],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li><code>-x</code>: Expand level of object (1 by default)</li><li>The max value of <code>-x</code> is 4, to prevent the expansion result taking up too much memory. Users can specify the field in the <code>ognl</code> expression.</li></ul><h4 id="use-condition-expressions-to-locate-specific-call" tabindex="-1"><a class="header-anchor" href="#use-condition-expressions-to-locate-specific-call" aria-hidden="true">#</a> Use condition expressions to locate specific call</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params[0],target}&quot; &quot;params[0]&lt;0&quot;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 68 ms.
ts=2018-12-03 19:36:04; [cost=0.530255ms] result=@ArrayList[
    @Integer[-18178089],
    @MathGame[demo.MathGame@41cf53f9],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="check-exceptions" tabindex="-1"><a class="header-anchor" href="#check-exceptions" aria-hidden="true">#</a> Check <code>exceptions</code></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params[0],throwExp}&quot; -e -x 2
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 62 ms.
ts=2018-12-03 19:38:00; [cost=1.414993ms] result=@ArrayList[
    @Integer[-1120397038],
    java.lang.IllegalArgumentException: number is: -1120397038, need &gt;= 2
	at demo.MathGame.primeFactors(MathGame.java:46)
	at demo.MathGame.run(MathGame.java:24)
	at demo.MathGame.main(MathGame.java:16)
,
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><code>-e</code>\b: Trigger when an exception is thrown</li><li><code>throwExp</code>: the exception object</li></ul><h4 id="filter-by-time-cost" tabindex="-1"><a class="header-anchor" href="#filter-by-time-cost" aria-hidden="true">#</a> Filter by time cost</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;{params, returnObj}&#39; &#39;#cost&gt;200&#39; -x 2
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 66 ms.
ts=2018-12-03 19:40:28; [cost=2112.168897ms] result=@ArrayList[
    @Object[][
        @Integer[1],
    ],
    @ArrayList[
        @Integer[5],
        @Integer[428379493],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><code>#cost&gt;200</code> (<code>ms</code>) filter out all invokings that take less than <code>200ms</code>.</li></ul><h4 id="check-the-field-of-the-target-object" tabindex="-1"><a class="header-anchor" href="#check-the-field-of-the-target-object" aria-hidden="true">#</a> Check the field of the target object</h4><ul><li><code>target</code> is the <code>this</code> object in java.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;target&#39;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 52 ms.
ts=2018-12-03 19:41:52; [cost=0.477882ms] result=@MathGame[
    random=@Random[java.util.Random@522b408a],
    illegalArgumentCount=@Integer[13355],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>target.field_name</code>: the field of the current object.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;target.illegalArgumentCount&#39;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 67 ms.
ts=2018-12-03 20:04:34; [cost=131.303498ms] result=@Integer[8]
ts=2018-12-03 20:04:35; [cost=0.961441ms] result=@Integer[8]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="get-a-static-field-and-calling-a-static-method" tabindex="-1"><a class="header-anchor" href="#get-a-static-field-and-calling-a-static-method" aria-hidden="true">#</a> Get a static field and calling a static method</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>watch demo.MathGame * &#39;{params,@demo.MathGame@random.nextInt(100)}&#39; -v -n 1 -x 2
[arthas@6527]$ watch demo.MathGame * &#39;{params,@demo.MathGame@random.nextInt(100)}&#39; -n 1 -x 2
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 5) cost in 34 ms, listenerId: 3
ts=2021-01-05 21:35:20; [cost=0.173966ms] result=@ArrayList[
    @Object[][
        @Integer[-138282],
    ],
    @Integer[89],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,30),N=n("Note that here you use "),P=e("code",null,"Thread.currentThread().getContextClassLoader()",-1),U=n(" to load, and it is better to use the exact "),B=e("code",null,"classloader",-1),S=n(),$=n("ognl"),D=n("."),V=l(`<h4 id="exclude-the-specified-class" tabindex="-1"><a class="header-anchor" href="#exclude-the-specified-class" aria-hidden="true">#</a> Exclude the specified class</h4><blockquote><p>The watch/trace/monitor/stack/tt commands all support the <code>--exclude-class-pattern</code> parameter</p></blockquote><p>Use the <code>--exclude-class-pattern</code> parameter to exclude the specified class, for example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>watch javax.servlet.Filter * --exclude-class-pattern com.demo.TestFilter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="does-not-match-subclass" tabindex="-1"><a class="header-anchor" href="#does-not-match-subclass" aria-hidden="true">#</a> Does not match subclass</h4><p>By default, the watch/trace/monitor/stack/tt commands will match subclass. If you don&#39;t want to match, you can turn it off.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options disable-sub-class true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="use-the-v-parameter-to-print-more-information" tabindex="-1"><a class="header-anchor" href="#use-the-v-parameter-to-print-more-information" aria-hidden="true">#</a> Use the -v parameter to print more information</h4><blockquote><p>The watch/trace/monitor/stack/tt commands all support the <code>-v</code> parameter.</p></blockquote><p>When the command is executed, there is no output result. There are two possibilities:</p><ol><li>The matched function is not executed</li><li>The result of the conditional expression is false</li></ol><p>But the user cannot tell which situation is.</p><p>Using the <code>-v</code> option, the specific value and execution result of <code>Condition express</code> will be printed for easy confirmation.</p><p>such as:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ watch -v -x 2 demo.MathGame print &#39;params&#39; &#39;params[0] &gt; 100000&#39;
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 29 ms, listenerId: 11
Condition express: params[0] &gt; 100000 , result: false
Condition express: params[0] &gt; 100000 , result: false
Condition express: params[0] &gt; 100000 , result: true
ts=2020-12-02 22:38:56; [cost=0.060843ms] result=@Object[][
    @Integer[1],
    @ArrayList[
        @Integer[200033],
    ],
]
Condition express: params[0] &gt; 100000 , result: true
ts=2020-12-02 22:38:57; [cost=0.052877ms] result=@Object[][
    @Integer[1],
    @ArrayList[
        @Integer[29],
        @Integer[4243],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,15);function Q(z,W){const a=i("ExternalLinkIcon"),t=i("RouterLink");return o(),d(p,null,[b,e("p",null,[e("a",u,[h,g,s(a)])]),f,e("p",null,[x,e("a",v,[_,s(a)]),y]),w,e("ul",null,[e("li",null,[s(t,{to:"/en/doc/advice-class.html"},{default:r(()=>[I,k]),_:1})]),e("li",null,[e("a",A,[C,s(a)])]),e("li",null,[e("a",j,[G,s(a)])])]),L,M,e("p",null,[O,q,E,s(t,{to:"/en/doc/quick-start.html"},{default:r(()=>[F]),_:1}),T]),R,e("ul",null,[e("li",null,[N,P,U,B,S,s(t,{to:"/en/doc/ognl.html"},{default:r(()=>[$]),_:1}),D])]),V],64)}var H=c(m,[["render",Q],["__file","watch.html.vue"]]);export{H as default};
