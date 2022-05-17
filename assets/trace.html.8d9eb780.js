import{_ as c,r as t,o,c as d,a as e,b as n,w as l,F as m,d as a,e as i}from"./app.1edb3735.js";const p={},u=e("h1",{id:"trace",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#trace","aria-hidden":"true"},"#"),a(" trace")],-1),h={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-trace",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"trace",-1),g=a("\u5728\u7EBF\u6559\u7A0B"),_=i('<blockquote><p>\u65B9\u6CD5\u5185\u90E8\u8C03\u7528\u8DEF\u5F84\uFF0C\u5E76\u8F93\u51FA\u65B9\u6CD5\u8DEF\u5F84\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u8017\u65F6</p></blockquote><p><code>trace</code> \u547D\u4EE4\u80FD\u4E3B\u52A8\u641C\u7D22 <code>class-pattern</code>\uFF0F<code>method-pattern</code> \u5BF9\u5E94\u7684\u65B9\u6CD5\u8C03\u7528\u8DEF\u5F84\uFF0C\u6E32\u67D3\u548C\u7EDF\u8BA1\u6574\u4E2A\u8C03\u7528\u94FE\u8DEF\u4E0A\u7684\u6240\u6709\u6027\u80FD\u5F00\u9500\u548C\u8FFD\u8E2A\u8C03\u7528\u94FE\u8DEF\u3002</p><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">\u65B9\u6CD5\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>condition-express</em></td><td style="text-align:left;">\u6761\u4EF6\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr><tr><td style="text-align:right;"><code>[n:]</code></td><td style="text-align:left;">\u547D\u4EE4\u6267\u884C\u6B21\u6570</td></tr><tr><td style="text-align:right;"><code>#cost</code></td><td style="text-align:left;">\u65B9\u6CD5\u6267\u884C\u8017\u65F6</td></tr></tbody></table><p>\u8FD9\u91CC\u91CD\u70B9\u8981\u8BF4\u660E\u7684\u662F\u89C2\u5BDF\u8868\u8FBE\u5F0F\uFF0C\u89C2\u5BDF\u8868\u8FBE\u5F0F\u7684\u6784\u6210\u4E3B\u8981\u7531 \bognl \u8868\u8FBE\u5F0F\u7EC4\u6210\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u8FD9\u6837\u5199<code>&quot;{params,returnObj}&quot;</code>\uFF0C\u53EA\u8981\u662F\u4E00\u4E2A\u5408\u6CD5\u7684 ognl \u8868\u8FBE\u5F0F\uFF0C\u90FD\u80FD\u88AB\u6B63\u5E38\u652F\u6301\u3002</p><p>\u89C2\u5BDF\u7684\u7EF4\u5EA6\u4E5F\u6BD4\u8F83\u591A\uFF0C\u4E3B\u8981\u4F53\u73B0\u5728\u53C2\u6570 <code>advice</code> \u7684\u6570\u636E\u7ED3\u6784\u4E0A\u3002<code>Advice</code> \u53C2\u6570\u6700\u4E3B\u8981\u662F\u5C01\u88C5\u4E86\u901A\u77E5\u8282\u70B9\u7684\u6240\u6709\u4FE1\u606F\u3002</p>',6),v=a("\u8BF7\u53C2\u8003"),f=a("\u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF"),x=a("\u4E2D\u5173\u4E8E\u8BE5\u8282\u70B9\u7684\u63CF\u8FF0\u3002"),C=a("\u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),M={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},G=a("https://github.com/alibaba/arthas/issues/71"),L=a("OGNL\u8868\u8FBE\u5F0F\u5B98\u7F51\uFF1A"),k={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},j=a("https://commons.apache.org/proper/commons-ognl/language-guide.html"),y=e("p",null,[a("\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u53EA\u60F3\u770B\u5230\u67D0\u4E2A\u65B9\u6CD5\u7684rt\u5927\u4E8E\u67D0\u4E2A\u65F6\u95F4\u4E4B\u540E\u7684trace\u7ED3\u679C\uFF0C\u73B0\u5728Arthas\u53EF\u4EE5\u6309\u7167\u65B9\u6CD5\u6267\u884C\u7684\u8017\u65F6\u6765\u8FDB\u884C\u8FC7\u6EE4\u4E86\uFF0C\u4F8B\u5982"),e("code",null,"trace *StringUtils isBlank '#cost>100'"),a("\u8868\u793A\u5F53\u6267\u884C\u65F6\u95F4\u8D85\u8FC7100ms\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u8F93\u51FAtrace\u7684\u7ED3\u679C\u3002")],-1),A=e("blockquote",null,[e("p",null,[a("watch/stack/trace\u8FD9\u4E2A\u4E09\u4E2A\u547D\u4EE4\u90FD\u652F\u6301"),e("code",null,"#cost")])],-1),F=e("h3",{id:"\u6CE8\u610F\u4E8B\u9879",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6CE8\u610F\u4E8B\u9879","aria-hidden":"true"},"#"),a(" \u6CE8\u610F\u4E8B\u9879")],-1),S=e("p",null,[e("code",null,"trace"),a(" \u80FD\u65B9\u4FBF\u7684\u5E2E\u52A9\u4F60\u5B9A\u4F4D\u548C\u53D1\u73B0\u56E0 RT \u9AD8\u800C\u5BFC\u81F4\u7684\u6027\u80FD\u95EE\u9898\u7F3A\u9677\uFF0C\u4F46\u5176\u6BCF\u6B21\u53EA\u80FD\u8DDF\u8E2A\u4E00\u7EA7\u65B9\u6CD5\u7684\u8C03\u7528\u94FE\u8DEF\u3002")],-1),$=a("\u53C2\u8003\uFF1A"),E={href:"https://github.com/alibaba/arthas/issues/597",target:"_blank",rel:"noopener noreferrer"},T=a("Trace\u547D\u4EE4\u7684\u5B9E\u73B0\u539F\u7406"),w=e("li",null,[e("p",null,"3.3.0 \u7248\u672C\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u52A8\u6001Trace\u529F\u80FD\uFF0C\u4E0D\u65AD\u589E\u52A0\u65B0\u7684\u5339\u914D\u7C7B\uFF0C\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\u3002")],-1),I=a("\u76EE\u524D\u4E0D\u652F\u6301 "),q=e("code",null,"trace java.lang.Thread getName",-1),B=a("\uFF0C\u53C2\u8003issue: "),P={href:"https://github.com/alibaba/arthas/issues/1610",target:"_blank",rel:"noopener noreferrer"},J=a("#1610"),Q=a(" \uFF0C\u8003\u8651\u5230\u4E0D\u662F\u975E\u5E38\u5FC5\u8981\u573A\u666F\uFF0C\u4E14\u4FEE\u590D\u6709\u4E00\u5B9A\u96BE\u5EA6\uFF0C\u56E0\u6B64\u5F53\u524D\u6682\u4E0D\u4FEE\u590D"),R=e("h3",{id:"\u4F7F\u7528\u53C2\u8003",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F7F\u7528\u53C2\u8003","aria-hidden":"true"},"#"),a(" \u4F7F\u7528\u53C2\u8003")],-1),D=e("h4",{id:"\u542F\u52A8-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u542F\u52A8-demo","aria-hidden":"true"},"#"),a(" \u542F\u52A8 Demo")],-1),N=a("\u542F\u52A8"),K=a("\u5FEB\u901F\u5165\u95E8"),V=a("\u91CC\u7684"),O=e("code",null,"math-game",-1),U=a("\u3002"),Y=i(`<h4 id="trace\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#trace\u51FD\u6570" aria-hidden="true">#</a> trace\u51FD\u6570</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace demo.MathGame run
Press Q or Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 28 ms.
\`---ts=2019-12-04 00:45:08;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[0.617465ms] demo.MathGame:run()
        \`---[0.078946ms] demo.MathGame:primeFactors() #24 [throws Exception]

\`---ts=2019-12-04 00:45:09;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[1.276874ms] demo.MathGame:run()
        \`---[0.03752ms] demo.MathGame:primeFactors() #24 [throws Exception]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u7ED3\u679C\u91CC\u7684 <code>#24</code>\uFF0C\u8868\u793A\u5728run\u51FD\u6570\u91CC\uFF0C\u5728\u6E90\u6587\u4EF6\u7684\u7B2C<code>24</code>\u884C\u8C03\u7528\u4E86<code>primeFactors()</code>\u51FD\u6570\u3002</p></blockquote><h4 id="trace\u6B21\u6570\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#trace\u6B21\u6570\u9650\u5236" aria-hidden="true">#</a> trace\u6B21\u6570\u9650\u5236</h4><p>\u5982\u679C\u65B9\u6CD5\u8C03\u7528\u7684\u6B21\u6570\u5F88\u591A\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528<code>-n</code>\u53C2\u6570\u6307\u5B9A\u6355\u6349\u7ED3\u679C\u7684\u6B21\u6570\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u6355\u6349\u5230\u4E00\u6B21\u8C03\u7528\u5C31\u9000\u51FA\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace demo.MathGame run -n 1
Press Q or Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 20 ms.
\`---ts=2019-12-04 00:45:53;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[0.549379ms] demo.MathGame:run()
        +---[0.059839ms] demo.MathGame:primeFactors() #24
        \`---[0.232887ms] demo.MathGame:print() #25

Command execution times exceed limit: 1, so command will exit. You can set it with -n option.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u5305\u542Bjdk\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5305\u542Bjdk\u7684\u51FD\u6570" aria-hidden="true">#</a> \u5305\u542Bjdk\u7684\u51FD\u6570</h4><ul><li><code>--skipJDKMethod &lt;value&gt; </code> skip jdk method trace, default value true.</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Ctrace\u4E0D\u4F1A\u5305\u542Bjdk\u91CC\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u5982\u679C\u5E0C\u671Btrace jdk\u91CC\u7684\u51FD\u6570\uFF0C\u9700\u8981\u663E\u5F0F\u8BBE\u7F6E<code>--skipJDKMethod false</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace --skipJDKMethod false demo.MathGame run
Press Q or Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 60 ms.
\`---ts=2019-12-04 00:44:41;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[1.357742ms] demo.MathGame:run()
        +---[0.028624ms] java.util.Random:nextInt() #23
        +---[0.045534ms] demo.MathGame:primeFactors() #24 [throws Exception]
        +---[0.005372ms] java.lang.StringBuilder:&lt;init&gt;() #28
        +---[0.012257ms] java.lang.Integer:valueOf() #28
        +---[0.234537ms] java.lang.String:format() #28
        +---[min=0.004539ms,max=0.005778ms,total=0.010317ms,count=2] java.lang.StringBuilder:append() #28
        +---[0.013777ms] java.lang.Exception:getMessage() #28
        +---[0.004935ms] java.lang.StringBuilder:toString() #28
        \`---[0.06941ms] java.io.PrintStream:println() #28

\`---ts=2019-12-04 00:44:42;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[3.030432ms] demo.MathGame:run()
        +---[0.010473ms] java.util.Random:nextInt() #23
        +---[0.023715ms] demo.MathGame:primeFactors() #24 [throws Exception]
        +---[0.005198ms] java.lang.StringBuilder:&lt;init&gt;() #28
        +---[0.006405ms] java.lang.Integer:valueOf() #28
        +---[0.178583ms] java.lang.String:format() #28
        +---[min=0.011636ms,max=0.838077ms,total=0.849713ms,count=2] java.lang.StringBuilder:append() #28
        +---[0.008747ms] java.lang.Exception:getMessage() #28
        +---[0.019768ms] java.lang.StringBuilder:toString() #28
        \`---[0.076457ms] java.io.PrintStream:println() #28
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="\u636E\u8C03\u7528\u8017\u65F6\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u636E\u8C03\u7528\u8017\u65F6\u8FC7\u6EE4" aria-hidden="true">#</a> \u636E\u8C03\u7528\u8017\u65F6\u8FC7\u6EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace demo.MathGame run &#39;#cost &gt; 10&#39;
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 41 ms.
\`---ts=2018-12-04 01:12:02;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[12.033735ms] demo.MathGame:run()
        +---[0.006783ms] java.util.Random:nextInt()
        +---[11.852594ms] demo.MathGame:primeFactors()
        \`---[0.05447ms] demo.MathGame:print()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u53EA\u4F1A\u5C55\u793A\u8017\u65F6\u5927\u4E8E10ms\u7684\u8C03\u7528\u8DEF\u5F84\uFF0C\u6709\u52A9\u4E8E\u5728\u6392\u67E5\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EA\u5173\u6CE8\u5F02\u5E38\u60C5\u51B5</p></blockquote><ul><li>\u662F\u4E0D\u662F\u5F88\u773C\u719F\uFF0C\u6CA1\u9519\uFF0C\u5728 JProfiler \u7B49\u6536\u8D39\u8F6F\u4EF6\u4E2D\u4F60\u66FE\u7ECF\u89C1\u8BC6\u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u8FD9\u91CC\u4F60\u5C06\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u5C31\u80FD\u6253\u5370\u51FA\u6307\u5B9A\u8C03\u7528\u8DEF\u5F84\u3002 \u53CB\u60C5\u63D0\u9192\u4E0B\uFF0C<code>trace</code> \u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u672C\u8EAB\u662F\u4F1A\u6709\u4E00\u5B9A\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u5728\u7EDF\u8BA1\u7684\u62A5\u544A\u4E2D\u5E76\u672A\u50CF JProfiler \u4E00\u6837\u9884\u5148\u51CF\u53BB\u5176\u81EA\u8EAB\u7684\u7EDF\u8BA1\u5F00\u9500\u3002\u6240\u4EE5\u8FD9\u7EDF\u8BA1\u51FA\u6765\u6709\u4E9B\u8BB8\u7684\u4E0D\u51C6\uFF0C\u6E32\u67D3\u8DEF\u5F84\u4E0A\u8C03\u7528\u7684\u7C7B\u3001\u65B9\u6CD5\u8D8A\u591A\uFF0C\u6027\u80FD\u504F\u5DEE\u8D8A\u5927\u3002\u4F46\u8FD8\u662F\u80FD\u8BA9\u4F60\u770B\u6E05\u4E00\u4E9B\u4E8B\u60C5\u7684\u3002</li><li>[12.033735ms] \u7684\u542B\u4E49\uFF0C<code>12.033735</code> \u7684\u542B\u4E49\u662F\uFF1A\u5F53\u524D\u8282\u70B9\u5728\u5F53\u524D\u6B65\u9AA4\u7684\u8017\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</li><li>[0,0,0ms,11]xxx:yyy() [throws Exception]\uFF0C\u5BF9\u8BE5\u65B9\u6CD5\u4E2D\u76F8\u540C\u7684\u65B9\u6CD5\u8C03\u7528\u8FDB\u884C\u4E86\u5408\u5E76\uFF0C<code>0,0,0ms,11</code> \u8868\u793A\u65B9\u6CD5\u8C03\u7528\u8017\u65F6\uFF0C<code>min,max,total,count</code>\uFF1B<code>throws Exception</code> \u8868\u660E\u8BE5\u65B9\u6CD5\u8C03\u7528\u4E2D\u5B58\u5728\u5F02\u5E38\u8FD4\u56DE</li><li>\u8FD9\u91CC\u5B58\u5728\u4E00\u4E2A\u7EDF\u8BA1\u4E0D\u51C6\u786E\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u6240\u6709\u65B9\u6CD5\u8017\u65F6\u52A0\u8D77\u6765\u53EF\u80FD\u4F1A\u5C0F\u4E8E\u8BE5\u76D1\u6D4B\u65B9\u6CD5\u7684\u603B\u8017\u65F6\uFF0C\u8FD9\u4E2A\u662F\u7531\u4E8E Arthas \u672C\u8EAB\u7684\u903B\u8F91\u4F1A\u6709\u4E00\u5B9A\u7684\u8017\u65F6</li></ul><h4 id="trace\u591A\u4E2A\u7C7B\u6216\u8005\u591A\u4E2A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#trace\u591A\u4E2A\u7C7B\u6216\u8005\u591A\u4E2A\u51FD\u6570" aria-hidden="true">#</a> trace\u591A\u4E2A\u7C7B\u6216\u8005\u591A\u4E2A\u51FD\u6570</h4><p>trace\u547D\u4EE4\u53EA\u4F1Atrace\u5339\u914D\u5230\u7684\u51FD\u6570\u91CC\u7684\u5B50\u8C03\u7528\uFF0C\u5E76\u4E0D\u4F1A\u5411\u4E0Btrace\u591A\u5C42\u3002\u56E0\u4E3Atrace\u662F\u4EE3\u4EF7\u6BD4\u8F83\u8D35\u7684\uFF0C\u591A\u5C42trace\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6700\u7EC8\u8981trace\u7684\u7C7B\u548C\u51FD\u6570\u975E\u5E38\u591A\u3002</p><p>\u53EF\u4EE5\u7528\u6B63\u5219\u8868\u5339\u914D\u8DEF\u5F84\u4E0A\u7684\u591A\u4E2A\u7C7B\u548C\u51FD\u6570\uFF0C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u8FBE\u5230\u591A\u5C42trace\u7684\u6548\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace -E com.test.ClassA|org.test.ClassB method1|method2|method3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B" aria-hidden="true">#</a> \u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B</h4><p>\u4F7F\u7528 <code>--exclude-class-pattern</code> \u53C2\u6570\u53EF\u4EE5\u6392\u9664\u6389\u6307\u5B9A\u7684\u7C7B\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace javax.servlet.Filter * --exclude-class-pattern com.demo.TestFilter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u52A8\u6001trace" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001trace" aria-hidden="true">#</a> \u52A8\u6001trace</h3><blockquote><p>3.3.0 \u7248\u672C\u540E\u652F\u6301\u3002</p></blockquote><p>\u6253\u5F00\u7EC8\u7AEF1\uFF0Ctrace\u4E0A\u9762demo\u91CC\u7684<code>run</code>\u51FD\u6570\uFF0C\u53EF\u4EE5\u770B\u5230\u6253\u5370\u51FA <code>listenerId: 1</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@59161]$ trace demo.MathGame run
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 112 ms, listenerId: 1
\`---ts=2020-07-09 16:48:11;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[1.389634ms] demo.MathGame:run()
        \`---[0.123934ms] demo.MathGame:primeFactors() #24 [throws Exception]

\`---ts=2020-07-09 16:48:12;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[3.716391ms] demo.MathGame:run()
        +---[3.182813ms] demo.MathGame:primeFactors() #24
        \`---[0.167786ms] demo.MathGame:print() #25
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u73B0\u5728\u60F3\u8981\u6DF1\u5165\u5B50\u51FD\u6570<code>primeFactors</code>\uFF0C\u53EF\u4EE5\u6253\u5F00\u4E00\u4E2A\u65B0\u7EC8\u7AEF2\uFF0C\u4F7F\u7528<code>telnet localhost 3658</code>\u8FDE\u63A5\u4E0Aarthas\uFF0C\u518Dtrace <code>primeFactors</code>\u65F6\uFF0C\u6307\u5B9A<code>listenerId</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@59161]$ trace demo.MathGame primeFactors --listenerId 1
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 34 ms, listenerId: 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u65F6\u7EC8\u7AEF2\u6253\u5370\u7684\u7ED3\u679C\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u589E\u5F3A\u4E86\u4E00\u4E2A\u51FD\u6570\uFF1A<code>Affect(class count: 1 , method count: 1)</code>\uFF0C\u4F46\u4E0D\u518D\u6253\u5370\u66F4\u591A\u7684\u7ED3\u679C\u3002</p><p>\u518D\u67E5\u770B\u7EC8\u7AEF1\uFF0C\u53EF\u4EE5\u53D1\u73B0trace\u7684\u7ED3\u679C\u589E\u52A0\u4E86\u4E00\u5C42\uFF0C\u6253\u5370\u4E86<code>primeFactors</code>\u51FD\u6570\u91CC\u7684\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\`---ts=2020-07-09 16:49:29;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[0.492551ms] demo.MathGame:run()
        \`---[0.113929ms] demo.MathGame:primeFactors() #24 [throws Exception]
            \`---[0.061462ms] demo.MathGame:primeFactors()
                \`---[0.001018ms] throw:java.lang.IllegalArgumentException() #46

\`---ts=2020-07-09 16:49:30;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@3d4eac69
    \`---[0.409446ms] demo.MathGame:run()
        +---[0.232606ms] demo.MathGame:primeFactors() #24
        |   \`---[0.1294ms] demo.MathGame:primeFactors()
        \`---[0.084025ms] demo.MathGame:print() #25
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u901A\u8FC7\u6307\u5B9A<code>listenerId</code>\u7684\u65B9\u5F0F\u52A8\u6001trace\uFF0C\u53EF\u4EE5\u4E0D\u65AD\u6DF1\u5165\u3002\u53E6\u5916 <code>watch</code>/<code>tt</code>/<code>monitor</code>\u7B49\u547D\u4EE4\u4E5F\u652F\u6301\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p><h3 id="trace\u7ED3\u679C\u65F6\u95F4\u4E0D\u51C6\u786E\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#trace\u7ED3\u679C\u65F6\u95F4\u4E0D\u51C6\u786E\u95EE\u9898" aria-hidden="true">#</a> trace\u7ED3\u679C\u65F6\u95F4\u4E0D\u51C6\u786E\u95EE\u9898</h3><p>\u6BD4\u5982\u4E0B\u9762\u7684\u7ED3\u679C\u91CC\uFF1A<code>0.705196 &gt; (0.152743 + 0.145825)</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace demo.MathGame run -n 1
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 66 ms, listenerId: 1
\`---ts=2021-02-08 11:27:36;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@232204a1
    \`---[0.705196ms] demo.MathGame:run()
        +---[0.152743ms] demo.MathGame:primeFactors() #24
        \`---[0.145825ms] demo.MathGame:print() #25
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u90A3\u4E48\u5176\u5B83\u7684\u65F6\u95F4\u6D88\u8017\u5728\u54EA\u4E9B\u5730\u65B9\uFF1F</p><ol><li><p>\u6CA1\u6709\u88ABtrace\u5230\u7684\u51FD\u6570\u3002\u6BD4\u5982<code>java.*</code> \u4E0B\u7684\u51FD\u6570\u8C03\u7528\u9ED8\u8BA4\u4F1A\u5FFD\u7565\u6389\u3002\u901A\u8FC7\u589E\u52A0<code>--skipJDKMethod false</code>\u53C2\u6570\u53EF\u4EE5\u6253\u5370\u51FA\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace demo.MathGame run --skipJDKMethod false
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 35 ms, listenerId: 2
\`---ts=2021-02-08 11:27:48;thread_name=main;id=1;is_daemon=false;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@232204a1
    \`---[0.810591ms] demo.MathGame:run()
        +---[0.034568ms] java.util.Random:nextInt() #23
        +---[0.119367ms] demo.MathGame:primeFactors() #24 [throws Exception]
        +---[0.017407ms] java.lang.StringBuilder:&lt;init&gt;() #28
        +---[0.127922ms] java.lang.String:format() #57
        +---[min=0.01419ms,max=0.020221ms,total=0.034411ms,count=2] java.lang.StringBuilder:append() #57
        +---[0.021911ms] java.lang.Exception:getMessage() #57
        +---[0.015643ms] java.lang.StringBuilder:toString() #57
        \`---[0.086622ms] java.io.PrintStream:println() #57
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p>\u975E\u51FD\u6570\u8C03\u7528\u7684\u6307\u4EE4\u6D88\u8017\u3002\u6BD4\u5982 <code>i++</code>, <code>getfield</code>\u7B49\u6307\u4EE4\u3002</p></li><li><p>\u5728\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0CJVM\u53EF\u80FD\u51FA\u73B0\u505C\u987F\uFF0C\u6BD4\u5982GC\uFF0C\u8FDB\u5165\u540C\u6B65\u5757\u7B49\u3002</p></li></ol><h4 id="\u4F7F\u7528-v-\u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-v-\u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F" aria-hidden="true">#</a> \u4F7F\u7528 -v \u53C2\u6570\u6253\u5370\u66F4\u591A\u4FE1\u606F</h4><blockquote><p>watch/trace/monitor/stack/tt \u547D\u4EE4\u90FD\u652F\u6301 <code>-v</code> \u53C2\u6570</p></blockquote><p>\u5F53\u547D\u4EE4\u6267\u884C\u4E4B\u540E\uFF0C\u6CA1\u6709\u8F93\u51FA\u7ED3\u679C\u3002\u6709\u4E24\u79CD\u53EF\u80FD\uFF1A</p><ol><li>\u5339\u914D\u5230\u7684\u51FD\u6570\u6CA1\u6709\u88AB\u6267\u884C</li><li>\u6761\u4EF6\u8868\u8FBE\u5F0F\u7ED3\u679C\u662F false</li></ol><p>\u4F46\u7528\u6237\u533A\u5206\u4E0D\u51FA\u662F\u54EA\u79CD\u60C5\u51B5\u3002</p><p>\u4F7F\u7528 <code>-v</code>\u9009\u9879\uFF0C\u5219\u4F1A\u6253\u5370<code>Condition express</code>\u7684\u5177\u4F53\u503C\u548C\u6267\u884C\u7ED3\u679C\uFF0C\u65B9\u4FBF\u786E\u8BA4\u3002</p>`,42);function z(H,W){const s=t("ExternalLinkIcon"),r=t("RouterLink");return o(),d(m,null,[u,e("p",null,[e("a",h,[b,g,n(s)])]),_,e("p",null,[v,n(r,{to:"/doc/advice-class.html"},{default:l(()=>[f]),_:1}),x]),e("ul",null,[e("li",null,[C,e("a",M,[G,n(s)])]),e("li",null,[L,e("a",k,[j,n(s)])])]),y,A,F,e("ul",null,[e("li",null,[S,e("p",null,[$,e("a",E,[T,n(s)])])]),w,e("li",null,[e("p",null,[I,q,B,e("a",P,[J,n(s)]),Q])])]),R,D,e("p",null,[N,n(r,{to:"/doc/quick-start.html"},{default:l(()=>[K]),_:1}),V,O,U]),Y],64)}var Z=c(p,[["render",z],["__file","trace.html.vue"]]);export{Z as default};