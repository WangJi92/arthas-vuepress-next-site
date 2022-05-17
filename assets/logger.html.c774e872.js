import{_ as n,r as l,o as r,c,a as s,b as p,F as o,d as a,e as i}from"./app.1edb3735.js";const b={},d=s("h1",{id:"logger",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#logger","aria-hidden":"true"},"#"),a(" logger")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-logger",target:"_blank",rel:"noopener noreferrer"},t=s("code",null,"logger",-1),g=a("\u5728\u7EBF\u6559\u7A0B"),m=i(`<blockquote><p>\u67E5\u770Blogger\u4FE1\u606F\uFF0C\u66F4\u65B0logger level</p></blockquote><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><h4 id="\u67E5\u770B\u6240\u6709logger\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709logger\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709logger\u4FE1\u606F</h4><p>\u4EE5\u4E0B\u9762\u7684<code>logback.xml</code>\u4E3A\u4F8B\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u4F7F\u7528<code>logger</code>\u547D\u4EE4\u6253\u5370\u7684\u7ED3\u679C\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4ECE<code>appenders</code>\u7684\u4FE1\u606F\u91CC\uFF0C\u53EF\u4EE5\u770B\u5230</p><ul><li><code>CONSOLE</code> logger\u7684target\u662F<code>System.out</code></li><li><code>APPLICATION</code> logger\u662F<code>RollingFileAppender</code>\uFF0C\u5B83\u7684file\u662F<code>app.log</code></li><li><code>ASYNC</code>\u5B83\u7684<code>appenderRef</code>\u662F<code>APPLICATION</code>\uFF0C\u5373\u5F02\u6B65\u8F93\u51FA\u5230\u6587\u4EF6\u91CC</li></ul><h4 id="\u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684logger\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684logger\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684logger\u4FE1\u606F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -n org.springframework.web
 name                                   org.springframework.web
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher$AppClassLoader@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         INFO
 additivity                             true
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u67E5\u770B\u6307\u5B9Aclassloader\u7684logger\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9Aclassloader\u7684logger\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9Aclassloader\u7684logger\u4FE1\u606F</h4><p>\u6CE8\u610Fhashcode\u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684ClassLoader\u4FE1\u606F\uFF0C\u63D0\u53D6\u5BF9\u5E94ClassLoader\u7684hashcode\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528<code>-c</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u8F93\u5165hashcode\uFF1A<code>-c &lt;hashcode&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -c 2a139a55
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684ClassLoader\u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9Aclass name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><p><code>logger --classLoaderClass sun.misc.Launcher$AppClassLoader</code></p><ul><li>\u6CE8: \u8FD9\u91CCclassLoaderClass \u5728 java 8 \u662F sun.misc.Launcher$AppClassLoader\uFF0C\u800Cjava 11\u7684classloader\u662Fjdk.internal.loader.ClassLoaders$AppClassLoader\u3002</li></ul><p><code>--classLoaderClass</code> \u7684\u503C\u662FClassLoader\u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684ClassLoader\u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p><h4 id="\u66F4\u65B0logger-level" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0logger-level" aria-hidden="true">#</a> \u66F4\u65B0logger level</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger --name ROOT --level debug
update logger level success.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u6307\u5B9Aclassloader\u66F4\u65B0-logger-level" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9Aclassloader\u66F4\u65B0-logger-level" aria-hidden="true">#</a> \u6307\u5B9Aclassloader\u66F4\u65B0 logger level</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Clogger\u547D\u4EE4\u4F1A\u5728SystemClassloader\u4E0B\u6267\u884C\uFF0C\u5982\u679C\u5E94\u7528\u662F\u4F20\u7EDF\u7684<code>war</code>\u5E94\u7528\uFF0C\u6216\u8005spring boot fat jar\u542F\u52A8\u7684\u5E94\u7528\uFF0C\u90A3\u4E48\u9700\u8981\u6307\u5B9Aclassloader\u3002</p><p>\u53EF\u4EE5\u5148\u7528 <code>sc -d yourClassName</code> \u6765\u67E5\u770B\u5177\u4F53\u7684 classloader hashcode\uFF0C\u7136\u540E\u5728\u66F4\u65B0level\u65F6\u6307\u5B9Aclassloader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger -c 2a139a55 --name ROOT --level debug
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u770B\u6CA1\u6709appender\u7684logger\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6CA1\u6709appender\u7684logger\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6CA1\u6709appender\u7684logger\u7684\u4FE1\u606F</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>logger</code>\u547D\u4EE4\u53EA\u6253\u5370\u6709appender\u7684logger\u7684\u4FE1\u606F\u3002\u5982\u679C\u60F3\u67E5\u770B\u6CA1\u6709<code>appender</code>\u7684logger\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u53C2\u6570<code>--include-no-appender</code>\u3002</p><p>\u6CE8\u610F\uFF0C\u901A\u5E38\u8F93\u51FA\u7ED3\u679C\u4F1A\u5F88\u957F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@2062]$ logger --include-no-appender
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,29);function h(L,v){const e=l("ExternalLinkIcon");return r(),c(o,null,[d,s("p",null,[s("a",u,[t,g,p(e)])]),m],64)}var f=n(b,[["render",h],["__file","logger.html.vue"]]);export{f as default};
