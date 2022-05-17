import{_ as n,r as s,o as r,c as i,a,b as t,F as l,e as c,d as p}from"./app.1edb3735.js";const o={},d=c(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="use-jdk-in-docker" tabindex="-1"><a class="header-anchor" href="#use-jdk-in-docker" aria-hidden="true">#</a> Use JDK in Docker</h2><p>Many times, the problem that arthas can&#39;t work with the application in docker is because the docker does not install JDK, but installs JRE. If only JRE is installed, many JAVA command line tools and class libraries will be missing, and Arthas will not work properly. Here are two common ways to use JDK in Docker.</p><h3 id="use-public-jdk-image" tabindex="-1"><a class="header-anchor" href="#use-public-jdk-image" aria-hidden="true">#</a> Use public JDK image</h3><ul><li>https://hub.docker.com/_/openjdk/</li></ul><p>such as:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="install-via-package-management-software" tabindex="-1"><a class="header-anchor" href="#install-via-package-management-software" aria-hidden="true">#</a> Install via package management software</h3><p>such as:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># Install OpenJDK-8
RUN apt-get update &amp;&amp; \\
    apt-get install -y openjdk-8-jdk &amp;&amp; \\
    apt-get install -y ant &amp;&amp; \\
    apt-get clean;

# Fix certificate issues
RUN apt-get update &amp;&amp; \\
    apt-get install ca-certificates-java &amp;&amp; \\
    apt-get clean &amp;&amp; \\
    update-ca-certificates -f;

# Setup JAVA_HOME - useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>or:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RUN yum install -y \\
   java-1.8.0-openjdk \\
   java-1.8.0-openjdk-devel

ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk/
RUN export JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="quick-start-with-docker" tabindex="-1"><a class="header-anchor" href="#quick-start-with-docker" aria-hidden="true">#</a> Quick start with Docker</h2><ol><li><p>Delete the existing <code>math-game</code> docker container (not necessary)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker stop math-game || true &amp;&amp; docker rm math-game || true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Start <code>math-game</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker run --name math-game -it hengyunabc/arthas:latest /bin/sh -c &quot;java -jar /opt/arthas/math-game.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Start <code>arthas-boot</code> for diagnosis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker exec -it math-game /bin/sh -c &quot;java -jar /opt/arthas/arthas-boot.jar&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li></ol><h2 id="diagnose-the-java-process-in-docker" tabindex="-1"><a class="header-anchor" href="#diagnose-the-java-process-in-docker" aria-hidden="true">#</a> Diagnose the Java process in Docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker exec -it  \${containerId} /bin/bash -c &quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="diagnose-the-java-process-in-the-container-in-k8s" tabindex="-1"><a class="header-anchor" href="#diagnose-the-java-process-in-the-container-in-k8s" aria-hidden="true">#</a> Diagnose the Java process in the container in k8s</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl exec -it \${pod} --container \${containerId} -- /bin/bash -c &quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="install-arthas-into-the-base-docker-image" tabindex="-1"><a class="header-anchor" href="#install-arthas-into-the-base-docker-image" aria-hidden="true">#</a> Install Arthas into the base Docker image</h2><p>It&#39;s easy to install Arthas into your Docker image.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine

# copy arthas
COPY --from=hengyunabc/arthas:latest /opt/arthas /opt/arthas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If you want to specify a version, you can view all the tags:</p>`,24),b={href:"https://hub.docker.com/r/hengyunabc/arthas/tags",target:"_blank",rel:"noopener noreferrer"},u=p("https://hub.docker.com/r/hengyunabc/arthas/tags");function h(m,g){const e=s("ExternalLinkIcon");return r(),i(l,null,[d,a("p",null,[a("a",b,[u,t(e)])])],64)}var k=n(o,[["render",h],["__file","docker.html.vue"]]);export{k as default};
