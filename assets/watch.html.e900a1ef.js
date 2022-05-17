import{_ as i,r as c,o,c as p,a as e,b as s,w as l,F as b,d as n,e as a}from"./app.1edb3735.js";const d={},m=e("h1",{id:"watch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#watch","aria-hidden":"true"},"#"),n(" watch")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-watch",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"watch",-1),g=n("\u5728\u7EBF\u6559\u7A0B"),x=a('<blockquote><p>\u51FD\u6570\u6267\u884C\u6570\u636E\u89C2\u6D4B</p></blockquote><p>\u8BA9\u4F60\u80FD\u65B9\u4FBF\u7684\u89C2\u5BDF\u5230\u6307\u5B9A\u51FD\u6570\u7684\u8C03\u7528\u60C5\u51B5\u3002\u80FD\u89C2\u5BDF\u5230\u7684\u8303\u56F4\u4E3A\uFF1A<code>\u8FD4\u56DE\u503C</code>\u3001<code>\u629B\u51FA\u5F02\u5E38</code>\u3001<code>\u5165\u53C2</code>\uFF0C\u901A\u8FC7\u7F16\u5199 \bOGNL \u8868\u8FBE\u5F0F\u8FDB\u884C\u5BF9\u5E94\u53D8\u91CF\u7684\u67E5\u770B\u3002</p><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>watch \u7684\u53C2\u6570\u6BD4\u8F83\u591A\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u5B83\u80FD\u5728 4 \u4E2A\u4E0D\u540C\u7684\u573A\u666F\u89C2\u5BDF\u5BF9\u8C61</p><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">\u51FD\u6570\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>express</em></td><td style="text-align:left;">\u89C2\u5BDF\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u503C\uFF1A<code>{params, target, returnObj}</code></td></tr><tr><td style="text-align:right;"><em>condition-express</em></td><td style="text-align:left;">\u6761\u4EF6\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:right;">[b]</td><td style="text-align:left;">\u5728<strong>\u51FD\u6570\u8C03\u7528\u4E4B\u524D</strong>\u89C2\u5BDF</td></tr><tr><td style="text-align:right;">[e]</td><td style="text-align:left;">\u5728<strong>\u51FD\u6570\u5F02\u5E38\u4E4B\u540E</strong>\u89C2\u5BDF</td></tr><tr><td style="text-align:right;">[s]</td><td style="text-align:left;">\u5728<strong>\u51FD\u6570\u8FD4\u56DE\u4E4B\u540E</strong>\u89C2\u5BDF</td></tr><tr><td style="text-align:right;">[f]</td><td style="text-align:left;">\u5728<strong>\u51FD\u6570\u7ED3\u675F\u4E4B\u540E</strong>(\u6B63\u5E38\u8FD4\u56DE\u548C\u5F02\u5E38\u8FD4\u56DE)\u89C2\u5BDF</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr><tr><td style="text-align:right;">[x:]</td><td style="text-align:left;">\u6307\u5B9A\u8F93\u51FA\u7ED3\u679C\u7684\u5C5E\u6027\u904D\u5386\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 1\uFF0C\u6700\u5927\u503C\u662F4</td></tr></tbody></table><p>\u8FD9\u91CC\u91CD\u70B9\u8981\u8BF4\u660E\u7684\u662F\u89C2\u5BDF\u8868\u8FBE\u5F0F\uFF0C\u89C2\u5BDF\u8868\u8FBE\u5F0F\u7684\u6784\u6210\u4E3B\u8981\u7531 \bognl \u8868\u8FBE\u5F0F\u7EC4\u6210\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u8FD9\u6837\u5199<code>&quot;{params,returnObj}&quot;</code>\uFF0C\u53EA\u8981\u662F\u4E00\u4E2A\u5408\u6CD5\u7684 ognl \u8868\u8FBE\u5F0F\uFF0C\u90FD\u80FD\u88AB\u6B63\u5E38\u652F\u6301\u3002</p>',6),_=n("\u89C2\u5BDF\u7684\u7EF4\u5EA6\u4E5F\u6BD4\u8F83\u591A\uFF0C\u4E3B\u8981\u4F53\u73B0\u5728\u53C2\u6570 "),f=e("code",null,"advice",-1),v=n(" \u7684\u6570\u636E\u7ED3\u6784\u4E0A\u3002"),I=e("code",null,"Advice",-1),A=n(" \u53C2\u6570\u6700\u4E3B\u8981\u662F\u5C01\u88C5\u4E86\u901A\u77E5\u8282\u70B9\u7684\u6240\u6709\u4FE1\u606F\u3002\u8BF7\u53C2\u8003"),y=n("\u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF"),C=n("\u4E2D\u5173\u4E8E\u8BE5\u8282\u70B9\u7684\u63CF\u8FF0\u3002"),G=n("\u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),L={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},w=n("https://github.com/alibaba/arthas/issues/71"),M=n("OGNL\u8868\u8FBE\u5F0F\u5B98\u7F51\uFF1A"),j={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},q=n("https://commons.apache.org/proper/commons-ognl/language-guide.html"),O=a('<p><strong>\u7279\u522B\u8BF4\u660E</strong>\uFF1A</p><ul><li>watch \u547D\u4EE4\u5B9A\u4E49\u4E864\u4E2A\u89C2\u5BDF\u4E8B\u4EF6\u70B9\uFF0C\u5373 <code>-b</code> \u51FD\u6570\u8C03\u7528\u524D\uFF0C<code>-e</code> \u51FD\u6570\u5F02\u5E38\u540E\uFF0C<code>-s</code> \u51FD\u6570\u8FD4\u56DE\u540E\uFF0C<code>-f</code> \u51FD\u6570\u7ED3\u675F\u540E</li><li>4\u4E2A\u89C2\u5BDF\u4E8B\u4EF6\u70B9 <code>-b</code>\u3001<code>-e</code>\u3001<code>-s</code> \u9ED8\u8BA4\u5173\u95ED\uFF0C<code>-f</code> \u9ED8\u8BA4\u6253\u5F00\uFF0C\u5F53\u6307\u5B9A\u89C2\u5BDF\u70B9\u88AB\u6253\u5F00\u540E\uFF0C\u5728\u76F8\u5E94\u4E8B\u4EF6\u70B9\u4F1A\u5BF9\u89C2\u5BDF\u8868\u8FBE\u5F0F\u8FDB\u884C\u6C42\u503C\u5E76\u8F93\u51FA</li><li>\u8FD9\u91CC\u8981\u6CE8\u610F<code>\u51FD\u6570\u5165\u53C2</code>\u548C<code>\u51FD\u6570\u51FA\u53C2</code>\u7684\u533A\u522B\uFF0C\u6709\u53EF\u80FD\u5728\u4E2D\u95F4\u88AB\u4FEE\u6539\u5BFC\u81F4\u524D\u540E\u4E0D\u4E00\u81F4\uFF0C\u9664\u4E86 <code>-b</code> \u4E8B\u4EF6\u70B9 <code>params</code> \u4EE3\u8868\u51FD\u6570\u5165\u53C2\u5916\uFF0C\u5176\u4F59\u4E8B\u4EF6\u90FD\u4EE3\u8868\u51FD\u6570\u51FA\u53C2</li><li>\u5F53\u4F7F\u7528 <code>-b</code> \u65F6\uFF0C\u7531\u4E8E\u89C2\u5BDF\u4E8B\u4EF6\u70B9\u662F\u5728\u51FD\u6570\u8C03\u7528\u524D\uFF0C\u6B64\u65F6\u8FD4\u56DE\u503C\u6216\u5F02\u5E38\u5747\u4E0D\u5B58\u5728</li><li>\u5728watch\u547D\u4EE4\u7684\u7ED3\u679C\u91CC\uFF0C\u4F1A\u6253\u5370\u51FA<code>location</code>\u4FE1\u606F\u3002<code>location</code>\u6709\u4E09\u79CD\u53EF\u80FD\u503C\uFF1A<code>AtEnter</code>\uFF0C<code>AtExit</code>\uFF0C<code>AtExceptionExit</code>\u3002\u5BF9\u5E94\u51FD\u6570\u5165\u53E3\uFF0C\u51FD\u6570\u6B63\u5E38return\uFF0C\u51FD\u6570\u629B\u51FA\u5F02\u5E38\u3002</li></ul><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><h4 id="\u542F\u52A8-demo" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-demo" aria-hidden="true">#</a> \u542F\u52A8 Demo</h4>',4),k=n("\u542F\u52A8"),E=n("\u5FEB\u901F\u5165\u95E8"),F=n("\u91CC\u7684"),R=e("code",null,"math-game",-1),P=n("\u3002"),$=a(`<h4 id="\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u8FD4\u56DE\u65F6\u7684\u53C2\u6570\u3001this\u5BF9\u8C61\u548C\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u8FD4\u56DE\u65F6\u7684\u53C2\u6570\u3001this\u5BF9\u8C61\u548C\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u8FD4\u56DE\u65F6\u7684\u53C2\u6570\u3001this\u5BF9\u8C61\u548C\u8FD4\u56DE\u503C</h4><blockquote><p>\u89C2\u5BDF\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u662F<code>{params, target, returnObj}</code></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors -x 2
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li>\u4E0A\u9762\u7684\u7ED3\u679C\u91CC\uFF0C\u8BF4\u660E\u51FD\u6570\u88AB\u6267\u884C\u4E86\u4E24\u6B21\uFF0C\u7B2C\u4E00\u6B21\u7ED3\u679C\u662F<code>location=AtExceptionExit</code>\uFF0C\u8BF4\u660E\u51FD\u6570\u629B\u51FA\u5F02\u5E38\u4E86\uFF0C\u56E0\u6B64<code>returnObj</code>\u662Fnull</li><li>\u5728\u7B2C\u4E8C\u6B21\u7ED3\u679C\u91CC\u662F<code>location=AtExit</code>\uFF0C\u8BF4\u660E\u51FD\u6570\u6B63\u5E38\u8FD4\u56DE\uFF0C\u56E0\u6B64\u53EF\u4EE5\u770B\u5230<code>returnObj</code>\u7ED3\u679C\u662F\u4E00\u4E2AArrayList</li></ul><h4 id="\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u5165\u53E3\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u5165\u53E3\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u5165\u53E3\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,returnObj}&quot; -x 2 -b
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 50 ms.
ts=2018-12-03 19:23:23; [cost=0.0353ms] result=@ArrayList[
    @Object[][
        @Integer[-1077465243],
    ],
    null,
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5BF9\u6BD4\u524D\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u8FD4\u56DE\u503C\u4E3A\u7A7A\uFF08\u4E8B\u4EF6\u70B9\u4E3A\u51FD\u6570\u6267\u884C\u524D\uFF0C\u56E0\u6B64\u83B7\u53D6\u4E0D\u5230\u8FD4\u56DE\u503C\uFF09</li></ul><h4 id="\u540C\u65F6\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u524D\u548C\u51FD\u6570\u8FD4\u56DE\u540E" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u524D\u548C\u51FD\u6570\u8FD4\u56DE\u540E" aria-hidden="true">#</a> \u540C\u65F6\u89C2\u5BDF\u51FD\u6570\u8C03\u7528\u524D\u548C\u51FD\u6570\u8FD4\u56DE\u540E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,target,returnObj}&quot; -x 2 -b -s -n 2
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li><p>\u53C2\u6570\u91CC<code>-n 2</code>\uFF0C\u8868\u793A\u53EA\u6267\u884C\u4E24\u6B21</p></li><li><p>\u8FD9\u91CC\u8F93\u51FA\u7ED3\u679C\u4E2D\uFF0C\u7B2C\u4E00\u6B21\u8F93\u51FA\u7684\u662F\u51FD\u6570\u8C03\u7528\u524D\u7684\u89C2\u5BDF\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\uFF0C\u7B2C\u4E8C\u6B21\u8F93\u51FA\u7684\u662F\u51FD\u6570\u8FD4\u56DE\u540E\u7684\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C</p></li><li><p>\u7ED3\u679C\u7684\u8F93\u51FA\u987A\u5E8F\u548C\u4E8B\u4EF6\u53D1\u751F\u7684\u5148\u540E\u987A\u5E8F\u4E00\u81F4\uFF0C\u548C\u547D\u4EE4\u4E2D <code>-s -b</code> \u7684\u987A\u5E8F\u65E0\u5173</p></li></ul><h4 id="\u8C03\u6574-x\u7684\u503C-\u89C2\u5BDF\u5177\u4F53\u7684\u51FD\u6570\u53C2\u6570\u503C" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574-x\u7684\u503C-\u89C2\u5BDF\u5177\u4F53\u7684\u51FD\u6570\u53C2\u6570\u503C" aria-hidden="true">#</a> \u8C03\u6574<code>-x</code>\u7684\u503C\uFF0C\u89C2\u5BDF\u5177\u4F53\u7684\u51FD\u6570\u53C2\u6570\u503C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params,target}&quot; -x 3
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li><code>-x</code>\u8868\u793A\u904D\u5386\u6DF1\u5EA6\uFF0C\u53EF\u4EE5\u8C03\u6574\u6765\u6253\u5370\u5177\u4F53\u7684\u53C2\u6570\u548C\u7ED3\u679C\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662F1\u3002</li><li><code>-x</code>\u6700\u5927\u503C\u662F4\uFF0C\u9632\u6B62\u5C55\u5F00\u7ED3\u679C\u5360\u7528\u592A\u591A\u5185\u5B58\u3002\u7528\u6237\u53EF\u4EE5\u5728<code>ognl</code>\u8868\u8FBE\u5F0F\u91CC\u6307\u5B9A\u66F4\u5177\u4F53\u7684field\u3002</li></ul><h4 id="\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u4F8B\u5B50</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params[0],target}&quot; &quot;params[0]&lt;0&quot;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 68 ms.
ts=2018-12-03 19:36:04; [cost=0.530255ms] result=@ArrayList[
    @Integer[-18178089],
    @MathGame[demo.MathGame@41cf53f9],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u53EA\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684\u8C03\u7528\uFF0C\u624D\u4F1A\u6709\u54CD\u5E94\u3002</li></ul><h4 id="\u89C2\u5BDF\u5F02\u5E38\u4FE1\u606F\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u5F02\u5E38\u4FE1\u606F\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u89C2\u5BDF\u5F02\u5E38\u4FE1\u606F\u7684\u4F8B\u5B50</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &quot;{params[0],throwExp}&quot; -e -x 2
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><code>-e</code>\b\u8868\u793A\u629B\u51FA\u5F02\u5E38\u65F6\u624D\u89E6\u53D1</li><li>express\u4E2D\uFF0C\u8868\u793A\u5F02\u5E38\u4FE1\u606F\u7684\u53D8\u91CF\u662F<code>throwExp</code></li></ul><h4 id="\u6309\u7167\u8017\u65F6\u8FDB\u884C\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u8017\u65F6\u8FDB\u884C\u8FC7\u6EE4" aria-hidden="true">#</a> \u6309\u7167\u8017\u65F6\u8FDB\u884C\u8FC7\u6EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;{params, returnObj}&#39; &#39;#cost&gt;200&#39; -x 2
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><code>#cost&gt;200</code>(\u5355\u4F4D\u662F<code>ms</code>)\u8868\u793A\u53EA\u6709\u5F53\u8017\u65F6\u5927\u4E8E200ms\u65F6\u624D\u4F1A\u8F93\u51FA\uFF0C\u8FC7\u6EE4\u6389\u6267\u884C\u65F6\u95F4\u5C0F\u4E8E200ms\u7684\u8C03\u7528</li></ul><h4 id="\u89C2\u5BDF\u5F53\u524D\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u5F53\u524D\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u89C2\u5BDF\u5F53\u524D\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027</h4><p>\u5982\u679C\u60F3\u67E5\u770B\u51FD\u6570\u8FD0\u884C\u524D\u540E\uFF0C\u5F53\u524D\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>target</code>\u5173\u952E\u5B57\uFF0C\u4EE3\u8868\u5F53\u524D\u5BF9\u8C61</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;target&#39;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 52 ms.
ts=2018-12-03 19:41:52; [cost=0.477882ms] result=@MathGame[
    random=@Random[java.util.Random@522b408a],
    illegalArgumentCount=@Integer[13355],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\u4F7F\u7528<code>target.field_name</code>\u8BBF\u95EE\u5F53\u524D\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors &#39;target.illegalArgumentCount&#39;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 67 ms.
ts=2018-12-03 20:04:34; [cost=131.303498ms] result=@Integer[8]
ts=2018-12-03 20:04:35; [cost=0.961441ms] result=@Integer[8]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u83B7\u53D6\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\u3001\u8C03\u7528\u7C7B\u7684\u9759\u6001\u51FD\u6570\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\u3001\u8C03\u7528\u7C7B\u7684\u9759\u6001\u51FD\u6570\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u83B7\u53D6\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\u3001\u8C03\u7528\u7C7B\u7684\u9759\u6001\u51FD\u6570\u7684\u4F8B\u5B50</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>watch demo.MathGame * &#39;{params,@demo.MathGame@random.nextInt(100)}&#39; -v -n 1 -x 2
[arthas@6527]$ watch demo.MathGame * &#39;{params,@demo.MathGame@random.nextInt(100)}&#39; -n 1 -x 2
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 5) cost in 34 ms, listenerId: 3
ts=2021-01-05 21:35:20; [cost=0.173966ms] result=@ArrayList[
    @Object[][
        @Integer[-138282],
    ],
    @Integer[89],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,29),N=n("\u6CE8\u610F\u8FD9\u91CC\u4F7F\u7528 "),B=e("code",null,"Thread.currentThread().getContextClassLoader()",-1),S=n(" \u52A0\u8F7D,\u4F7F\u7528\u7CBE\u786E"),U=e("code",null,"classloader",-1),D=n(),T=n("ognl"),V=n("\u66F4\u597D\u3002"),z=a(`<h4 id="\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B" aria-hidden="true">#</a> \u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B</h4><blockquote><p>watch/trace/monitor/stack/tt \u547D\u4EE4\u90FD\u652F\u6301 <code>--exclude-class-pattern</code> \u53C2\u6570</p></blockquote><p>\u4F7F\u7528 <code>--exclude-class-pattern</code> \u53C2\u6570\u53EF\u4EE5\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>watch javax.servlet.Filter * --exclude-class-pattern com.demo.TestFilter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u4E0D\u5339\u914D\u5B50\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5339\u914D\u5B50\u7C7B" aria-hidden="true">#</a> \u4E0D\u5339\u914D\u5B50\u7C7B</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B watch/trace/monitor/stack/tt \u547D\u4EE4\u90FD\u4F1A\u5339\u914D\u5B50\u7C7B\u3002\u5982\u679C\u60F3\u4E0D\u5339\u914D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u53C2\u6570\u5173\u6389\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options disable-sub-class true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u4F7F\u7528-v-\u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-v-\u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F" aria-hidden="true">#</a> \u4F7F\u7528 -v \u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F</h4><blockquote><p>watch/trace/monitor/stack/tt \u547D\u4EE4\u90FD\u652F\u6301 <code>-v</code> \u53C2\u6570</p></blockquote><p>\u5F53\u547D\u4EE4\u6267\u884C\u4E4B\u540E\uFF0C\u6CA1\u6709\u8F93\u51FA\u7ED3\u679C\u3002\u6709\u4E24\u79CD\u53EF\u80FD\uFF1A</p><ol><li>\u5339\u914D\u5230\u7684\u51FD\u6570\u6CA1\u6709\u88AB\u6267\u884C</li><li>\u6761\u4EF6\u8868\u8FBE\u5F0F\u7ED3\u679C\u662F false</li></ol><p>\u4F46\u7528\u6237\u533A\u5206\u4E0D\u51FA\u662F\u54EA\u79CD\u60C5\u51B5\u3002</p><p>\u4F7F\u7528 <code>-v</code>\u9009\u9879\uFF0C\u5219\u4F1A\u6253\u5370<code>Condition express</code>\u7684\u5177\u4F53\u503C\u548C\u6267\u884C\u7ED3\u679C\uFF0C\u65B9\u4FBF\u786E\u8BA4\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ watch -v -x 2 demo.MathGame print &#39;params&#39; &#39;params[0] &gt; 100000&#39;
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 29 ms, listenerId: 11
Condition express: params[0] &gt; 100000 , result: false
Condition express: params[0] &gt; 100000 , result: false
Condition express: params[0] &gt; 100000 , result: true
ts=2020-12-02 22:38:56; [cost=0.060843ms] result=@Object[][
    @Integer[200033],
    @ArrayList[
        @Integer[200033],
    ],
]
Condition express: params[0] &gt; 100000 , result: true
ts=2020-12-02 22:38:57; [cost=0.052877ms] result=@Object[][
    @Integer[123047],
    @ArrayList[
        @Integer[29],
        @Integer[4243],
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,15);function Q(H,J){const r=c("ExternalLinkIcon"),t=c("RouterLink");return o(),p(b,null,[m,e("p",null,[e("a",u,[h,g,s(r)])]),x,e("p",null,[_,f,v,I,A,s(t,{to:"/doc/advice-class.html"},{default:l(()=>[y]),_:1}),C]),e("ul",null,[e("li",null,[G,e("a",L,[w,s(r)])]),e("li",null,[M,e("a",j,[q,s(r)])])]),O,e("p",null,[k,s(t,{to:"/doc/quick-start.html"},{default:l(()=>[E]),_:1}),F,R,P]),$,e("ul",null,[e("li",null,[N,B,S,U,D,s(t,{to:"/doc/ognl.html"},{default:l(()=>[T]),_:1}),V])]),z],64)}var W=i(d,[["render",Q],["__file","watch.html.vue"]]);export{W as default};
