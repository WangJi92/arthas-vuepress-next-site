import{_ as n,r as s,o as r,c as l,a,b as i,F as c,e as t,d as p}from"./app.1edb3735.js";const d={},b=t(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="\u5728docker\u91CC\u4F7F\u7528jdk" tabindex="-1"><a class="header-anchor" href="#\u5728docker\u91CC\u4F7F\u7528jdk" aria-hidden="true">#</a> \u5728Docker\u91CC\u4F7F\u7528JDK</h2><p>\u5F88\u591A\u65F6\u5019\uFF0C\u5E94\u7528\u5728docker\u91CC\u51FA\u73B0arthas\u65E0\u6CD5\u5DE5\u4F5C\u7684\u95EE\u9898\uFF0C\u662F\u56E0\u4E3A\u5E94\u7528\u6CA1\u6709\u5B89\u88C5 JDK \uFF0C\u800C\u662F\u5B89\u88C5\u4E86 JRE \u3002\u5982\u679C\u53EA\u5B89\u88C5\u4E86 JRE\uFF0C\u5219\u4F1A\u7F3A\u5C11\u5F88\u591AJAVA\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u548C\u7C7B\u5E93\uFF0CArthas\u4E5F\u6CA1\u529E\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E24\u79CD\u5E38\u89C1\u7684\u5728Docker\u91CC\u4F7F\u7528JDK\u7684\u65B9\u5F0F\u3002</p><h3 id="\u4F7F\u7528\u516C\u5F00\u7684jdk\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u516C\u5F00\u7684jdk\u955C\u50CF" aria-hidden="true">#</a> \u4F7F\u7528\u516C\u5F00\u7684JDK\u955C\b\u50CF</h3><ul><li>https://hub.docker.com/_/openjdk/</li></ul><p>\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6216\u8005\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u901A\u8FC7\u5305\u7BA1\u7406\u8F6F\u4EF6\u6765\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5305\u7BA1\u7406\u8F6F\u4EF6\u6765\u5B89\u88C5" aria-hidden="true">#</a> \u901A\u8FC7\u5305\u7BA1\u7406\u8F6F\u4EF6\u6765\u5B89\u88C5</h3><p>\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># Install OpenJDK-8
RUN apt-get update &amp;&amp; \\
    apt-get install -y openjdk-8-jdk &amp;&amp; \\
    apt-get install -y ant &amp;&amp; \\
    apt-get clean;

# Fix certificate issues
RUN apt-get update &amp;&amp; \\
    apt-get install ca-certificates-java &amp;&amp; \\
    apt-get clean &amp;&amp; \\
    update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6216\u8005\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RUN yum install -y \\
   java-1.8.0-openjdk \\
   java-1.8.0-openjdk-devel

ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk/
RUN export JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u901A\u8FC7docker\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7docker\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u901A\u8FC7Docker\u5FEB\u901F\u5165\u95E8</h2><ol><li><p>\u5220\u9664\u672C\u5730\u5DF2\u6709\u7684<code>math-game</code> docker container\uFF08\u975E\u5FC5\u8981\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker stop math-game || true &amp;&amp; docker rm math-game || true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u542F\u52A8<code>math-game</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker run --name math-game -it hengyunabc/arthas:latest /bin/sh -c &quot;java -jar /opt/arthas/math-game.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u542F\u52A8<code>arthas-boot</code>\u6765\u8FDB\u884C\u8BCA\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker exec -it math-game /bin/sh -c &quot;java -jar /opt/arthas/arthas-boot.jar&quot;
* [1]: 9 jar

[INFO] arthas home: /opt/arthas
[INFO] Try to attach process 9
[INFO] Attach process 9 success.
[INFO] arthas-client connect 127.0.0.1 3658
,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
/  O  \\ |  .--. &#39;&#39;--.  .--&#39;|  &#39;--&#39;  | /  O  \\ &#39;   .-&#39;
|  .-.  ||  &#39;--&#39;.&#39;   |  |   |  .--.  ||  .-.  |\`.  \`-.
|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-&#39;    |
\`--&#39; \`--&#39;\`--&#39; &#39;--&#39;   \`--&#39;   \`--&#39;  \`--&#39;\`--&#39; \`--&#39;\`-----&#39;


wiki: https://arthas.aliyun.com/doc
version: 3.0.5
pid: 9
time: 2018-12-18 11:30:36
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li></ol><h2 id="\u8BCA\u65ADdocker\u91CC\u7684java\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65ADdocker\u91CC\u7684java\u8FDB\u7A0B" aria-hidden="true">#</a> \u8BCA\u65ADDocker\u91CC\u7684Java\u8FDB\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker exec -it  \${containerId} /bin/bash -c &quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u8BCA\u65ADk8s\u91CC\u5BB9\u5668\u91CC\u7684java\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65ADk8s\u91CC\u5BB9\u5668\u91CC\u7684java\u8FDB\u7A0B" aria-hidden="true">#</a> \u8BCA\u65ADk8s\u91CC\u5BB9\u5668\u91CC\u7684Java\u8FDB\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl exec -it \${pod} --container \${containerId} -- /bin/bash -c &quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u628Aarthas\u5B89\u88C5\u5230\u57FA\u7840\u955C\u50CF\u91CC" tabindex="-1"><a class="header-anchor" href="#\u628Aarthas\u5B89\u88C5\u5230\u57FA\u7840\u955C\u50CF\u91CC" aria-hidden="true">#</a> \u628AArthas\u5B89\u88C5\u5230\u57FA\u7840\u955C\u50CF\u91CC</h2><p>\u53EF\u4EE5\u5F88\u7B80\u5355\u628AArthas\u5B89\u88C5\u5230\u4F60\u7684Docker\u955C\u50CF\u91CC\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine

# copy arthas
COPY --from=hengyunabc/arthas:latest /opt/arthas /opt/arthas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u60F3\u6307\u5B9A\u7248\u672C\uFF0C\u53EF\u4EE5\u67E5\u770B\u5177\u4F53\u7684tags\uFF1A</p>`,24),o={href:"https://hub.docker.com/r/hengyunabc/arthas/tags",target:"_blank",rel:"noopener noreferrer"},u=p("https://hub.docker.com/r/hengyunabc/arthas/tags");function h(m,g){const e=s("ExternalLinkIcon");return r(),l(c,null,[b,a("p",null,[a("a",o,[u,i(e)])])],64)}var k=n(d,[["render",h],["__file","docker.html.vue"]]);export{k as default};
