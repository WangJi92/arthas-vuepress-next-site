import{_ as p,r as l,o as c,c as b,a as s,b as a,w as t,F as m,e,d as n}from"./app.1edb3735.js";const o={},u=e(`<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><h2 id="_1-start-math-game" tabindex="-1"><a class="header-anchor" href="#_1-start-math-game" aria-hidden="true">#</a> 1. Start math-game</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -O https://arthas.aliyun.com/math-game.jar
java -jar math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>math-game</code> is a simple program that generates a random number every second, then it finds all prime factors of that number.</p>`,4),d=n("The source code of "),h=s("code",null,"math-game",-1),g=n(": "),_={href:"https://github.com/alibaba/arthas/blob/master/math-game/src/main/java/demo/MathGame.java",target:"_blank",rel:"noopener noreferrer"},v=n("View"),f=e(`<h2 id="_2-start-arthas" tabindex="-1"><a class="header-anchor" href="#_2-start-arthas" aria-hidden="true">#</a> 2. Start Arthas</h2><h3 id="linux-unix-mac" tabindex="-1"><a class="header-anchor" href="#linux-unix-mac" aria-hidden="true">#</a> Linux/Unix/Mac</h3><p>Execute the following command in the command line:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>The user to run this command <em>MUST</em> have the same privilege as the owner of the target process, as a simple example you can try the following command if the target process is managed by user <code>admin</code>: <code>sudo su admin &amp;&amp; java -jar arthas-boot.jar</code> or <code>sudo -u admin -EH java -jar arthas-boot.jar</code></li><li>If you cannot be able to attach to the target process, please check the logs under <code>~/logs/arthas</code> for troubleshooting.</li><li><code>java -jar arthas-boot.jar -h</code> print usage.</li></ul><p>Select the target Java process to attach:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ $ java -jar arthas-boot.jar
* [1]: 35542
  [2]: 71560 math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The <code>math-game</code> process is the second as shown above, press &#39;2&#39; then &#39;Enter&#39;. Arthas will attach to the target process, and start to output:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[INFO] Try to attach process 71560
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_3-check-the-dashboard" tabindex="-1"><a class="header-anchor" href="#_3-check-the-dashboard" aria-hidden="true">#</a> 3. Check the Dashboard</h2>`,10),I=n("Type '"),j=n("dashboard"),x=n("' and hit 'ENTER', a brief report on the current process will be shown as below, pls. "),w=s("code",null,"Ctrl+C",-1),M=n(" to stop:"),A=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dashboard
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
code_cache         3M     5M    240M   1.32% ms )
Runtime
os.name                Mac OS X
os.version             10.13.4
java.version           1.8.0_162
java.home              /Library/Java/JavaVir
                       tualMachines/jdk1.8.0
                       _162.jdk/Contents/Hom
                       e/jre
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="_4-get-the-main-class-of-the-math-game-process-with-the-thread-command" tabindex="-1"><a class="header-anchor" href="#_4-get-the-main-class-of-the-math-game-process-with-the-thread-command" aria-hidden="true">#</a> 4. Get the Main Class of the <code>math-game</code> process with the thread command</h2><p><code>thread 1</code> will print the stack of the thread with ID 1, which usually the main function thread.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread 1 | grep &#39;main(&#39;
    at demo.MathGame.main(MathGame.java:17)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_5-decompile-main-class-with-jad-command" tabindex="-1"><a class="header-anchor" href="#_5-decompile-main-class-with-jad-command" aria-hidden="true">#</a> 5. Decompile Main Class with jad command</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="_6-watch" tabindex="-1"><a class="header-anchor" href="#_6-watch" aria-hidden="true">#</a> 6. watch</h2>`,7),y=n("Use '"),N=n("watch"),L=n("' to view the return object of "),E=s("code",null,"demo.MathGame#primeFactors",-1),k=n(":"),T=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ watch demo.MathGame primeFactors returnObj
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,1),C=n("Pls. refer to "),R=n("advanced usages"),S=n(" for more information."),G=s("h2",{id:"_7-exit-arthas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_7-exit-arthas","aria-hidden":"true"},"#"),n(" 7. Exit Arthas")],-1),U=s("p",null,[n("Use "),s("code",null,"quit"),n(" or "),s("code",null,"exit"),n(" to disconnect from the current process. The Arthas instance attached to the target process continues to live inside the process, and its port is standby for further connection.")],-1),q=s("p",null,[n("Use "),s("code",null,"stop"),n(" command to have Arthas completely quit from the target process.")],-1);function F(O,B){const i=l("ExternalLinkIcon"),r=l("RouterLink");return c(),b(m,null,[u,s("p",null,[d,h,g,s("a",_,[v,a(i)])]),f,s("p",null,[I,a(r,{to:"/en/doc/dashboard.html"},{default:t(()=>[j]),_:1}),x,w,M]),A,s("p",null,[y,a(r,{to:"/en/doc/watch.html"},{default:t(()=>[N]),_:1}),L,E,k]),T,s("p",null,[C,a(r,{to:"/en/doc/advanced-use.html"},{default:t(()=>[R]),_:1}),S]),G,U,q],64)}var $=p(o,[["render",F],["__file","quick-start.html.vue"]]);export{$ as default};
