import{_ as p,r as t,o as b,c,a as s,b as a,w as l,F as m,e,d as n}from"./app.1edb3735.js";const u={},o=e(`<h1 id="\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u5FEB\u901F\u5165\u95E8</h1><h2 id="_1-\u542F\u52A8math-game" tabindex="-1"><a class="header-anchor" href="#_1-\u542F\u52A8math-game" aria-hidden="true">#</a> 1. \u542F\u52A8math-game</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -O https://arthas.aliyun.com/math-game.jar
java -jar math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>math-game</code>\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u7A0B\u5E8F\uFF0C\u6BCF\u9694\u4E00\u79D2\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u518D\u6267\u884C\u8D28\u56E0\u6570\u5206\u89E3\uFF0C\u5E76\u6253\u5370\u51FA\u5206\u89E3\u7ED3\u679C\u3002</p>`,4),d=s("code",null,"math-game",-1),h=n("\u6E90\u4EE3\u7801\uFF1A"),g={href:"https://github.com/alibaba/arthas/blob/master/math-game/src/main/java/demo/MathGame.java",target:"_blank",rel:"noopener noreferrer"},_=n("\u67E5\u770B"),v=e(`<h2 id="_2-\u542F\u52A8arthas" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u52A8arthas" aria-hidden="true">#</a> 2. \u542F\u52A8arthas</h2><p>\u5728\u547D\u4EE4\u884C\u4E0B\u9762\u6267\u884C\uFF08\u4F7F\u7528\u548C\u76EE\u6807\u8FDB\u7A0B\u4E00\u81F4\u7684\u7528\u6237\u542F\u52A8\uFF0C\u5426\u5219\u53EF\u80FDattach\u5931\u8D25\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6267\u884C\u8BE5\u7A0B\u5E8F\u7684\u7528\u6237\u9700\u8981\u548C\u76EE\u6807\u8FDB\u7A0B\u5177\u6709\u76F8\u540C\u7684\u6743\u9650\u3002\u6BD4\u5982\u4EE5<code>admin</code>\u7528\u6237\u6765\u6267\u884C\uFF1A<code>sudo su admin &amp;&amp; java -jar arthas-boot.jar</code> \u6216 <code>sudo -u admin -EH java -jar arthas-boot.jar</code>\u3002</li><li>\u5982\u679Cattach\u4E0D\u4E0A\u76EE\u6807\u8FDB\u7A0B\uFF0C\u53EF\u4EE5\u67E5\u770B<code>~/logs/arthas/</code> \u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u3002</li><li>\u5982\u679C\u4E0B\u8F7D\u901F\u5EA6\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528aliyun\u7684\u955C\u50CF\uFF1A<code>java -jar arthas-boot.jar --repo-mirror aliyun --use-http</code></li><li><code>java -jar arthas-boot.jar -h</code> \u6253\u5370\u66F4\u591A\u53C2\u6570\u4FE1\u606F\u3002</li></ul><p>\u9009\u62E9\u5E94\u7528java\u8FDB\u7A0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ $ java -jar arthas-boot.jar
* [1]: 35542
  [2]: 71560 math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>math-game</code>\u8FDB\u7A0B\u662F\u7B2C2\u4E2A\uFF0C\u5219\u8F93\u51652\uFF0C\u518D\u8F93\u5165<code>\u56DE\u8F66/enter</code>\u3002Arthas\u4F1Aattach\u5230\u76EE\u6807\u8FDB\u7A0B\u4E0A\uFF0C\u5E76\u8F93\u51FA\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[INFO] Try to attach process 71560
[INFO] Attach process 71560 success.
[INFO] arthas-client connect 127.0.0.1 3658
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  \\ |  .--. &#39;&#39;--.  .--&#39;|  &#39;--&#39;  | /  O  \\ &#39;   .-&#39;
|  .-.  ||  &#39;--&#39;.&#39;   |  |   |  .--.  ||  .-.  |\`.  \`-.
|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-&#39;    |
\`--&#39; \`--&#39;\`--&#39; &#39;--&#39;   \`--&#39;   \`--&#39;  \`--&#39;\`--&#39; \`--&#39;\`-----&#39;


wiki: https://arthas.aliyun.com/doc
version: 3.0.5.20181127201536
pid: 71560
time: 2018-11-28 19:16:24

$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_3-\u67E5\u770Bdashboard" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u770Bdashboard" aria-hidden="true">#</a> 3. \u67E5\u770Bdashboard</h2>`,9),f=n("\u8F93\u5165"),I=n("dashboard"),j=n("\uFF0C\u6309"),M=s("code",null,"\u56DE\u8F66/enter",-1),A=n("\uFF0C\u4F1A\u5C55\u793A\u5F53\u524D\u8FDB\u7A0B\u7684\u4FE1\u606F\uFF0C\u6309"),x=s("code",null,"ctrl+c",-1),y=n("\u53EF\u4EE5\u4E2D\u65AD\u6267\u884C\u3002"),N=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dashboard
ID     NAME                   GROUP          PRIORI STATE  %CPU    TIME   INTERRU DAEMON
17     pool-2-thread-1        system         5      WAITIN 67      0:0    false   false
27     Timer-for-arthas-dashb system         10     RUNNAB 32      0:0    false   true
11     AsyncAppender-Worker-a system         9      WAITIN 0       0:0    false   true
9      Attach Listener        system         9      RUNNAB 0       0:0    false   true
3      Finalizer              system         8      WAITIN 0       0:0    false   true
2      Reference Handler      system         10     WAITIN 0       0:0    false   true
4      Signal Dispatcher      system         9      RUNNAB 0       0:0    false   true
26     as-command-execute-dae system         10     TIMED_ 0       0:0    false   true
13     job-timeout            system         9      TIMED_ 0       0:0    false   true
1      main                   main           5      TIMED_ 0       0:0    false   false
14     nioEventLoopGroup-2-1  system         10     RUNNAB 0       0:0    false   false
18     nioEventLoopGroup-2-2  system         10     RUNNAB 0       0:0    false   false
23     nioEventLoopGroup-2-3  system         10     RUNNAB 0       0:0    false   false
15     nioEventLoopGroup-3-1  system         10     RUNNAB 0       0:0    false   false
Memory             used   total max    usage GC
heap               32M    155M  1820M  1.77% gc.ps_scavenge.count  4
ps_eden_space      14M    65M   672M   2.21% gc.ps_scavenge.time(m 166
ps_survivor_space  4M     5M    5M           s)
ps_old_gen         12M    85M   1365M  0.91% gc.ps_marksweep.count 0
nonheap            20M    23M   -1           gc.ps_marksweep.time( 0
code_cache         3M     5M    240M   1.32% ms)
Runtime
os.name                Mac OS X
os.version             10.13.4
java.version           1.8.0_162
java.home              /Library/Java/JavaVir
                       tualMachines/jdk1.8.0
                       _162.jdk/Contents/Hom
                       e/jre
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="_4-\u901A\u8FC7thread\u547D\u4EE4\u6765\u83B7\u53D6\u5230math-game\u8FDB\u7A0B\u7684main-class" tabindex="-1"><a class="header-anchor" href="#_4-\u901A\u8FC7thread\u547D\u4EE4\u6765\u83B7\u53D6\u5230math-game\u8FDB\u7A0B\u7684main-class" aria-hidden="true">#</a> 4. \u901A\u8FC7thread\u547D\u4EE4\u6765\u83B7\u53D6\u5230<code>math-game</code>\u8FDB\u7A0B\u7684Main Class</h2><p><code>thread 1</code>\u4F1A\u6253\u5370\u7EBF\u7A0BID 1\u7684\u6808\uFF0C\u901A\u5E38\u662Fmain\u51FD\u6570\u7684\u7EBF\u7A0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread 1 | grep &#39;main(&#39;
    at demo.MathGame.main(MathGame.java:17)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_5-\u901A\u8FC7jad\u6765\u53CD\u7F16\u8BD1main-class" tabindex="-1"><a class="header-anchor" href="#_5-\u901A\u8FC7jad\u6765\u53CD\u7F16\u8BD1main-class" aria-hidden="true">#</a> 5. \u901A\u8FC7jad\u6765\u53CD\u7F16\u8BD1Main Class</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame

ClassLoader:
+-sun.misc.Launcher$AppClassLoader@3d4eac69
  +-sun.misc.Launcher$ExtClassLoader@66350f69

Location:
/tmp/math-game.jar

/*
 * Decompiled with CFR 0_132.
 */
package demo;

import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class MathGame {
    private static Random random = new Random();
    private int illegalArgumentCount = 0;

    public static void main(String[] args) throws InterruptedException {
        MathGame game = new MathGame();
        do {
            game.run();
            TimeUnit.SECONDS.sleep(1L);
        } while (true);
    }

    public void run() throws InterruptedException {
        try {
            int number = random.nextInt();
            List&lt;Integer&gt; primeFactors = this.primeFactors(number);
            MathGame.print(number, primeFactors);
        }
        catch (Exception e) {
            System.out.println(String.format(&quot;illegalArgumentCount:%3d, &quot;, this.illegalArgumentCount) + e.getMessage());
        }
    }

    public static void print(int number, List&lt;Integer&gt; primeFactors) {
        StringBuffer sb = new StringBuffer(&quot;&quot; + number + &quot;=&quot;);
        Iterator&lt;Integer&gt; iterator = primeFactors.iterator();
        while (iterator.hasNext()) {
            int factor = iterator.next();
            sb.append(factor).append(&#39;*&#39;);
        }
        if (sb.charAt(sb.length() - 1) == &#39;*&#39;) {
            sb.deleteCharAt(sb.length() - 1);
        }
        System.out.println(sb);
    }

    public List&lt;Integer&gt; primeFactors(int number) {
        if (number &lt; 2) {
            ++this.illegalArgumentCount;
            throw new IllegalArgumentException(&quot;number is: &quot; + number + &quot;, need &gt;= 2&quot;);
        }
        ArrayList&lt;Integer&gt; result = new ArrayList&lt;Integer&gt;();
        int i = 2;
        while (i &lt;= number) {
            if (number % i == 0) {
                result.add(i);
                number /= i;
                i = 2;
                continue;
            }
            ++i;
        }
        return result;
    }
}

Affect(row-cnt:1) cost in 970 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="_6-watch" tabindex="-1"><a class="header-anchor" href="#_6-watch" aria-hidden="true">#</a> 6. watch</h2>`,7),L=n("\u901A\u8FC7"),w=n("watch"),E=n("\u547D\u4EE4\u6765\u67E5\u770B"),R=s("code",null,"demo.MathGame#primeFactors",-1),C=n("\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF1A"),k=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors returnObj
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 107 ms.
ts=2018-11-28 19:22:30; [cost=1.715367ms] result=null
ts=2018-11-28 19:22:31; [cost=0.185203ms] result=null
ts=2018-11-28 19:22:32; [cost=19.012416ms] result=@ArrayList[
    @Integer[5],
    @Integer[47],
    @Integer[2675531],
]
ts=2018-11-28 19:22:33; [cost=0.311395ms] result=@ArrayList[
    @Integer[2],
    @Integer[5],
    @Integer[317],
    @Integer[503],
    @Integer[887],
]
ts=2018-11-28 19:22:34; [cost=10.136007ms] result=@ArrayList[
    @Integer[2],
    @Integer[2],
    @Integer[3],
    @Integer[3],
    @Integer[31],
    @Integer[717593],
]
ts=2018-11-28 19:22:35; [cost=29.969732ms] result=@ArrayList[
    @Integer[5],
    @Integer[29],
    @Integer[7651739],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,1),G=n("\u66F4\u591A\u7684\u529F\u80FD\u53EF\u4EE5\u67E5\u770B"),T=n("\u8FDB\u9636\u4F7F\u7528"),F=n("\u3002"),S=s("h2",{id:"_7-\u9000\u51FAarthas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_7-\u9000\u51FAarthas","aria-hidden":"true"},"#"),n(" 7. \u9000\u51FAarthas")],-1),q=s("p",null,[n("\u5982\u679C\u53EA\u662F\u9000\u51FA\u5F53\u524D\u7684\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u7528"),s("code",null,"quit"),n("\u6216\u8005"),s("code",null,"exit"),n("\u547D\u4EE4\u3002Attach\u5230\u76EE\u6807\u8FDB\u7A0B\u4E0A\u7684arthas\u8FD8\u4F1A\u7EE7\u7EED\u8FD0\u884C\uFF0C\u7AEF\u53E3\u4F1A\u4FDD\u6301\u5F00\u653E\uFF0C\u4E0B\u6B21\u8FDE\u63A5\u65F6\u53EF\u4EE5\u76F4\u63A5\u8FDE\u63A5\u4E0A\u3002")],-1),O=s("p",null,[n("\u5982\u679C\u60F3\u5B8C\u5168\u9000\u51FAarthas\uFF0C\u53EF\u4EE5\u6267\u884C"),s("code",null,"stop"),n("\u547D\u4EE4\u3002")],-1);function B(U,D){const i=t("ExternalLinkIcon"),r=t("RouterLink");return b(),c(m,null,[o,s("p",null,[d,h,s("a",g,[_,a(i)])]),v,s("p",null,[f,a(r,{to:"/doc/dashboard.html"},{default:l(()=>[I]),_:1}),j,M,A,x,y]),N,s("p",null,[L,a(r,{to:"/doc/watch.html"},{default:l(()=>[w]),_:1}),E,R,C]),k,s("p",null,[G,a(r,{to:"/doc/advanced-use.html"},{default:l(()=>[T]),_:1}),F]),S,q,O],64)}var P=p(u,[["render",B],["__file","quick-start.html.vue"]]);export{P as default};
