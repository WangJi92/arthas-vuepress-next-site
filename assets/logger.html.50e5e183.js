import{_ as n,r as l,o as r,c,a,b as o,F as p,d as e,e as i}from"./app.1edb3735.js";const t={},b=a("h1",{id:"logger",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#logger","aria-hidden":"true"},"#"),e(" logger")],-1),d={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-logger",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"logger",-1),m=e(" online tutorial"),g=i(`<blockquote><p>Print the logger information, update the logger level</p></blockquote><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="print-the-logger-information" tabindex="-1"><a class="header-anchor" href="#print-the-logger-information" aria-hidden="true">#</a> Print the logger information</h4><p>Take the following <code>logback.xml</code> as an example:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration&gt;
    &lt;appender name=&quot;APPLICATION&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;app.log&lt;/file&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;mylog-%d{yyyy-MM-dd}.%i.txt&lt;/fileNamePattern&gt;
            &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;maxHistory&gt;60&lt;/maxHistory&gt;
            &lt;totalSizeCap&gt;2GB&lt;/totalSizeCap&gt;
        &lt;/rollingPolicy&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%logger{35} - %msg%n&lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;ASYNC&quot; class=&quot;ch.qos.logback.classic.AsyncAppender&quot;&gt;
        &lt;appender-ref ref=&quot;APPLICATION&quot; /&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%-4relative [%thread] %-5level %logger{35} - %msg %n
            &lt;/pattern&gt;
            &lt;charset&gt;utf8&lt;/charset&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;root level=&quot;INFO&quot;&gt;
        &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;
        &lt;appender-ref ref=&quot;ASYNC&quot; /&gt;
    &lt;/root&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>The result of the <code>logger</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  INFO
 effectiveLevel                         INFO
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        file            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     [APPLICATION]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>In the <code>appenders</code> section:</p><ul><li>The target of <code>CONSOLE</code> logger is <code>System.out</code></li><li><code>APPLICATION</code> logger is <code>RollingFileAppender</code>, the file is <code>app.log</code></li><li><code>ASYNC</code> its <code>appenderRef</code> is <code>APPLICATION</code>, which means asynchronous output to the file</li></ul><h4 id="view-logger-information-for-the-special-name" tabindex="-1"><a class="header-anchor" href="#view-logger-information-for-the-special-name" aria-hidden="true">#</a> View logger information for the special name</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -n org.springframework.web
 name                                   org.springframework.web
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         INFO
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="view-logger-information-for-the-special-classloader" tabindex="-1"><a class="header-anchor" href="#view-logger-information-for-the-special-classloader" aria-hidden="true">#</a> View logger information for the special classloader</h4><p>Note that the hashcode changes, you need to check the current ClassLoader information first, and extract the hashcode corresponding to the ClassLoader.</p><p>if you use<code>-c</code>, you have to manually type hashcode by <code>-c &lt;hashcode&gt;</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -c 2a139a55
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  DEBUG
 effectiveLevel                         DEBUG
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        file            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     [APPLICATION]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>For classloader with only one instance, it can be specified by <code>--classLoaderClass</code> using class name, which is more convenient to use.</p><p><code>logger --classLoaderClass sun.misc.Launcher$AppClassLoader</code></p><ul><li>PS: Here the classLoaderClass in java 8 is sun.misc.Launcher$AppClassLoader, while in java 11 it&#39;s jdk.internal.loader.ClassLoaders$AppClassLoader.</li></ul><p>The value of <code>--classloaderclass</code> is the class name of classloader. It can only work when it matches a unique classloader instance. The purpose is to facilitate the input of general commands. However, <code>-c &lt;hashcode&gt;</code> is dynamic.</p><h4 id="update-logger-level" tabindex="-1"><a class="header-anchor" href="#update-logger-level" aria-hidden="true">#</a> Update logger level</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger --name ROOT --level debug
update logger level success.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="speecify-classloader-to-update-logger-level" tabindex="-1"><a class="header-anchor" href="#speecify-classloader-to-update-logger-level" aria-hidden="true">#</a> Speecify classloader to update logger level</h4><p>By default\uFF0Clogger command will be executed under SystemClassloader, if the application is a traditional <code>war</code>, or using spring boot fat jar, then it needs to specify classloader\u3002</p><p>You can first use <code>sc -d yourClassName</code> to check specified classloader hashcode\uFF0Cthen specify classloader when updating logger level:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -c 2a139a55 --name ROOT --level debug
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="view-the-logger-information-without-appenders" tabindex="-1"><a class="header-anchor" href="#view-the-logger-information-without-appenders" aria-hidden="true">#</a> View the logger information without appenders</h4><p>By default, the <code>logger</code> command only prints information about the logger with appenders. If you want to see information about loggers without <code>appender</code>, you can use the parameter <code>--include-no-appender</code>.</p><p>Note that the output will usually be very long.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger --include-no-appender
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  DEBUG
 effectiveLevel                         DEBUG
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        file            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher$AppClassLoader@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     [APPLICATION]

 name                                   com
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         DEBUG
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar

 name                                   com.alibaba
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         DEBUG
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,29);function h(f,L){const s=l("ExternalLinkIcon");return r(),c(p,null,[b,a("p",null,[a("a",d,[u,m,o(s)])]),g],64)}var y=n(t,[["render",h],["__file","logger.html.vue"]]);export{y as default};
