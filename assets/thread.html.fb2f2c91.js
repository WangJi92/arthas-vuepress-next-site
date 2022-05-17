import{_ as i,r as o,o as c,c as d,a,b as n,w as l,F as h,d as e,e as t}from"./app.1edb3735.js";const p={},m=a("h1",{id:"thread",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#thread","aria-hidden":"true"},"#"),e(" thread")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-thread",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"thread",-1),v=e(" online tutorial"),g=t('<blockquote><p>Check the basic info and stack trace of the target thread.</p></blockquote><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>id</em></td><td style="text-align:left;">thread id in JVM</td></tr><tr><td style="text-align:right;"><code>[n:]</code></td><td style="text-align:left;">the top n busiest threads with stack traces printed</td></tr><tr><td style="text-align:right;"><code>[b]</code></td><td style="text-align:left;">locate the thread blocking the others</td></tr><tr><td style="text-align:right;">[i <code>&lt;value&gt;</code>]</td><td style="text-align:left;">specify the interval to collect data to compute CPU ratios (ms)</td></tr><tr><td style="text-align:right;">[--all]</td><td style="text-align:left;">Show all matching threads</td></tr></tbody></table><h3 id="how-the-cpu-ratios-are-calculated" tabindex="-1"><a class="header-anchor" href="#how-the-cpu-ratios-are-calculated" aria-hidden="true">#</a> How the CPU ratios are calculated?</h3><p>The cpu ratios here is similar to the thread <code>%CPU</code> of the linux command <code>top -H -p &lt;pid&gt;</code>. During a sampling interval, the ratio of the incremental cpu time of each thread in the current JVM to the sampling interval time.</p><blockquote><p>Working principle description:</p></blockquote><ul><li>Do the first sampling, get the CPU time of all threads ( by calling <code>java.lang.management.ThreadMXBean#getThreadCpuTime()</code> and <code>sun.management.HotspotThreadMBean.getInternalThreadCpuTimes()</code> )</li><li>Sleep and wait for an interval (the default is 200ms, the interval can be specified by <code>-i</code>)</li><li>Do the second sampling, get the CPU time of all threads, compare the two sampling data, and calculate the incremental CPU time of each thread</li><li><code>Thread CPU usage ratio</code> = <code>Thread increment CPU time</code> / <code>Sampling interval time</code> * 100%</li></ul><blockquote><p>Note: this operation consumes CPU time too (<code>getThreadCpuTime</code> is time-consuming), therefore it is possible to observe Arthas&#39;s thread appears in the list. To avoid this, try to increase sample interval, for example: 5000 ms.<br></p></blockquote>',8),T=e("Another way to view the thread cpu usage of the Java process, "),f={href:"https://github.com/oldratlee/useful-scripts/blob/master/docs/java.md#-show-busy-java-threads",target:"_blank",rel:"noopener noreferrer"},j=e("show-busy-java-threads"),I=e(" can come to help."),A=t(`<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="list-the-top-n-busiest-threads-with-detailed-stack-trace" tabindex="-1"><a class="header-anchor" href="#list-the-top-n-busiest-threads-with-detailed-stack-trace" aria-hidden="true">#</a> List the top n busiest threads with detailed stack trace</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread -n 3
&quot;C1 CompilerThread0&quot; [Internal] cpuUsage=1.63% deltaTime=3ms time=1170ms


&quot;arthas-command-execute&quot; Id=23 cpuUsage=0.11% deltaTime=0ms time=401ms RUNNABLE
    at java.management@11.0.7/sun.management.ThreadImpl.dumpThreads0(Native Method)
    at java.management@11.0.7/sun.management.ThreadImpl.getThreadInfo(ThreadImpl.java:466)
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.processTopBusyThreads(ThreadCommand.java:199)
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.process(ThreadCommand.java:122)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.process(AnnotatedCommandImpl.java:82)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.access$100(AnnotatedCommandImpl.java:18)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl$ProcessHandler.handle(AnnotatedCommandImpl.java:111)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl$ProcessHandler.handle(AnnotatedCommandImpl.java:108)
    at com.taobao.arthas.core.shell.system.impl.ProcessImpl$CommandProcessTask.run(ProcessImpl.java:385)
    at java.base@11.0.7/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
    at java.base@11.0.7/java.util.concurrent.FutureTask.run(FutureTask.java:264)
    at java.base@11.0.7/java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:304)
    at java.base@11.0.7/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
    at java.base@11.0.7/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
    at java.base@11.0.7/java.lang.Thread.run(Thread.java:834)


&quot;VM Periodic Task Thread&quot; [Internal] cpuUsage=0.07% deltaTime=0ms time=584ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,3),C=e("Without thread ID, including "),k=a("code",null,"[Internal]",-1),y=e(" means JVM internal thread, refer to the introduction of "),x=e("dashboard"),E=e(" command."),_=a("code",null,"cpuUsage",-1),N=e(" is the CPU usage of the thread during the sampling interval, consistent with the data of the "),P=e("dashboard"),w=e(" command."),S=a("li",null,[a("code",null,"deltaTime"),e(" is the incremental CPU time of the thread during the sampling interval. If it is less than 1ms, it will be rounded and displayed as 0ms.")],-1),F=a("li",null,[a("code",null,"time"),e(" The total CPU time of thread.")],-1),U=t(`<p><strong>Note:</strong> The thread stack is acquired at the end of the second sampling, which does not indicate that the thread is processing the same task during the sampling interval. It is recommended that the interval time should not be too long. The larger the interval time, the more inaccurate.</p><p>You can try to specify different intervals according to the specific situation and observe the output results.</p><h4 id="list-first-page-threads-info-when-no-options-provided" tabindex="-1"><a class="header-anchor" href="#list-first-page-threads-info-when-no-options-provided" aria-hidden="true">#</a> List first page threads&#39; info when no options provided</h4><p>By default, they are arranged in descending order of CPU increment time, and only the first page of data is displayed.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread
Threads Total: 33, NEW: 0, RUNNABLE: 9, BLOCKED: 0, WAITING: 3, TIMED_WAITING: 4, TERMINATED: 0, Internal threads: 17
ID   NAME                           GROUP          PRIORITY  STATE     %CPU      DELTA_TIME TIME      INTERRUPT DAEMON
-1   C2 CompilerThread0             -              -1        -         5.06      0.010      0:0.973   false     true
-1   C1 CompilerThread0             -              -1        -         0.95      0.001      0:0.603   false     true
23   arthas-command-execute         system         5         RUNNABLE  0.17      0.000      0:0.226   false     true
-1   VM Periodic Task Thread        -              -1        -         0.05      0.000      0:0.094   false     true
-1   Sweeper thread                 -              -1        -         0.04      0.000      0:0.011   false     true
-1   G1 Young RemSet Sampling       -              -1        -         0.02      0.000      0:0.025   false     true
12   Attach Listener                system         9         RUNNABLE  0.0       0.000      0:0.022   false     true
11   Common-Cleaner                 InnocuousThrea 8         TIMED_WAI 0.0       0.000      0:0.000   false     true
3    Finalizer                      system         8         WAITING   0.0       0.000      0:0.000   false     true
2    Reference Handler              system         10        RUNNABLE  0.0       0.000      0:0.000   false     true
4    Signal Dispatcher              system         9         RUNNABLE  0.0       0.000      0:0.000   false     true
15   arthas-NettyHttpTelnetBootstra system         5         RUNNABLE  0.0       0.000      0:0.029   false     true
22   arthas-NettyHttpTelnetBootstra system         5         RUNNABLE  0.0       0.000      0:0.196   false     true
24   arthas-NettyHttpTelnetBootstra system         5         RUNNABLE  0.0       0.000      0:0.038   false     true
16   arthas-NettyWebsocketTtyBootst system         5         RUNNABLE  0.0       0.000      0:0.001   false     true
17   arthas-NettyWebsocketTtyBootst system         5         RUNNABLE  0.0       0.000      0:0.001   false     true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="thread-all-show-all-matching-threads" tabindex="-1"><a class="header-anchor" href="#thread-all-show-all-matching-threads" aria-hidden="true">#</a> thread --all, show all matching threads</h4><p>Display all matching threads. Sometimes it is necessary to obtain all the thread data of the JVM for analysis.</p><h4 id="thread-id-show-the-running-stack-for-the-target-thread" tabindex="-1"><a class="header-anchor" href="#thread-id-show-the-running-stack-for-the-target-thread" aria-hidden="true">#</a> thread id, show the running stack for the target thread</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread 1
&quot;main&quot; Id=1 WAITING on java.util.concurrent.CountDownLatch$Sync@29fafb28
    at sun.misc.Unsafe.park(Native Method)
    -  waiting on java.util.concurrent.CountDownLatch$Sync@29fafb28
    at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.parkAndCheckInterrupt(AbstractQueuedSynchronizer.java:836)
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.doAcquireSharedInterruptibly(AbstractQueuedSynchronizer.java:997)
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.acquireSharedInterruptibly(AbstractQueuedSynchronizer.java:1304)
    at java.util.concurrent.CountDownLatch.await(CountDownLatch.java:231)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="thread-b-locate-the-thread-bocking-the-others" tabindex="-1"><a class="header-anchor" href="#thread-b-locate-the-thread-bocking-the-others" aria-hidden="true">#</a> thread -b, locate the thread bocking the others</h4><p>In some occasions, we experience the whole application is stuck because there&#39;s one particular thread hold one lock that other threads are relying on. To diagnose such an issue, Arthas provides <code>thread -b</code> to find the problematic thread in one single command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread -b
&quot;http-bio-8080-exec-4&quot; Id=27 TIMED_WAITING
    at java.lang.Thread.sleep(Native Method)
    at test.arthas.TestThreadBlocking.doGet(TestThreadBlocking.java:22)
    -  locked java.lang.Object@725be470 &lt;---- but blocks 4 other threads!
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:624)
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:731)
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)
    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
    at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
    at test.filter.TestDurexFilter.doFilter(TestDurexFilter.java:46)
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
    at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)
    at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)
    at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:505)
    at com.taobao.tomcat.valves.ContextLoadFilterValve$FilterChainAdapter.doFilter(ContextLoadFilterValve.java:191)
    at com.taobao.eagleeye.EagleEyeFilter.doFilter(EagleEyeFilter.java:81)
    at com.taobao.tomcat.valves.ContextLoadFilterValve.invoke(ContextLoadFilterValve.java:150)
    at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)
    at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:103)
    at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)
    at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:429)
    at org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1085)
    at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:625)
    at org.apache.tomcat.util.net.JIoEndpoint$SocketProcessor.run(JIoEndpoint.java:318)
    -  locked org.apache.tomcat.util.net.SocketWrapper@7127ee12
    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
    at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
    at java.lang.Thread.run(Thread.java:745)

    Number of locked synchronizers = 1
    - java.util.concurrent.ThreadPoolExecutor$Worker@31a6493e
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><blockquote><p>Note: By now Arthas only supports to locate the thread blocked by <code>synchronzied</code>, while <code>java.util.concurrent.Lock</code> is not supported yet.</p></blockquote><h4 id="thread-i-specify-the-sampling-interval" tabindex="-1"><a class="header-anchor" href="#thread-i-specify-the-sampling-interval" aria-hidden="true">#</a> thread -i, specify the sampling interval</h4><ul><li><p><code>thread -i 1000</code>: Count the thread cpu time of the last 1000ms.</p></li><li><p><code>thread -n 3 -i 1000</code>: List the 3 busiest thread stacks in 1000ms</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread -n 3 -i 1000
&quot;as-command-execute-daemon&quot; Id=4759 cpuUsage=23% RUNNABLE
    at sun.management.ThreadImpl.dumpThreads0(Native Method)
    at sun.management.ThreadImpl.getThreadInfo(ThreadImpl.java:440)
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.processTopBusyThreads(ThreadCommand.java:133)
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.process(ThreadCommand.java:79)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.process(AnnotatedCommandImpl.java:96)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.access$100(AnnotatedCommandImpl.java:27)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl$ProcessHandler.handle(AnnotatedCommandImpl.java:125)
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl$ProcessHandler.handle(AnnotatedCommandImpl.java:122)
    at com.taobao.arthas.core.shell.system.impl.ProcessImpl$CommandProcessTask.run(ProcessImpl.java:332)
    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
    at java.lang.Thread.run(Thread.java:756)

    Number of locked synchronizers = 1
    - java.util.concurrent.ThreadPoolExecutor$Worker@546aeec1
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="thread-state-view-the-special-state-theads" tabindex="-1"><a class="header-anchor" href="#thread-state-view-the-special-state-theads" aria-hidden="true">#</a> thread --state , view the special state theads</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@28114]$ thread --state WAITING
Threads Total: 16, NEW: 0, RUNNABLE: 9, BLOCKED: 0, WAITING: 3, TIMED_WAITING: 4, TERMINATED: 0
ID   NAME                           GROUP           PRIORITY   STATE     %CPU      DELTA_TIME TIME      INTERRUPTE DAEMON
3    Finalizer                      system          8          WAITING   0.0       0.000      0:0.000   false      true
20   arthas-UserStat                system          9          WAITING   0.0       0.000      0:0.001   false      true
14   arthas-timer                   system          9          WAITING   0.0       0.000      0:0.000   false      true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,18);function L(B,R){const s=o("ExternalLinkIcon"),r=o("RouterLink");return c(),d(h,null,[m,a("p",null,[a("a",u,[b,v,n(s)])]),g,a("blockquote",null,[a("p",null,[T,a("a",f,[j,n(s)]),I])]),A,a("ul",null,[a("li",null,[C,k,y,n(r,{to:"/en/doc/dashboard.html"},{default:l(()=>[x]),_:1}),E]),a("li",null,[_,N,n(r,{to:"/en/doc/dashboard.html"},{default:l(()=>[P]),_:1}),w]),S,F]),U],64)}var D=i(p,[["render",L],["__file","thread.html.vue"]]);export{D as default};
