import{_ as l,r as t,o,c as i,a as e,b as s,F as p,d as n,e as r}from"./app.1edb3735.js";const c={},d=e("h1",{id:"ognl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ognl","aria-hidden":"true"},"#"),n(" ognl")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-ognl",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"ognl",-1),g=n(" online tutorial"),m=r('<blockquote><p>Execute ognl expression.</p></blockquote><p>Since 3.0.5.</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>express</em></td><td style="text-align:left;">expression to be executed</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">The hashcode of the ClassLoader that executes the expression, default ClassLoader is SystemClassLoader.</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr><tr><td style="text-align:right;">[x]</td><td style="text-align:left;">Expand level of object (1 by default).</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3>',5),h={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},f=n("Special usages"),L={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},x=n("OGNL official guide"),_=r(`<p>Call static method:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;@java.lang.System@out.println(&quot;hello&quot;)&#39;
null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Get static field:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;@demo.MathGame@random&#39;
@Random[
    serialVersionUID=@Long[3905348978240129619],
    seed=@AtomicLong[125451474443703],
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
    unsafe=@Unsafe[sun.misc.Unsafe@28ea5898],
    seedOffset=@Long[24],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Specify ClassLoader by hashcode:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -t
+-BootstrapClassLoader                                                                                                                                                                          
+-jdk.internal.loader.ClassLoaders$PlatformClassLoader@301ec38b                                                                                                                                 
  +-com.taobao.arthas.agent.ArthasClassloader@472067c7                                                                                                                                          
  +-jdk.internal.loader.ClassLoaders$AppClassLoader@4b85612c                                                                                                                                    
    +-org.springframework.boot.loader.LaunchedURLClassLoader@7f9a81e8 

$ ognl -c 7f9a81e8 @org.springframework.boot.SpringApplication@logger
@Slf4jLocationAwareLog[
    FQCN=@String[org.apache.commons.logging.LogAdapter$Slf4jLocationAwareLog],
    name=@String[org.springframework.boot.SpringApplication],
    logger=@Logger[Logger[org.springframework.boot.SpringApplication]],
]
$ 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Note that the hashcode changes, you need to check the current ClassLoader information first, and extract the hashcode corresponding to the ClassLoader.</p><p>For ClassLoader with only unique instance, it can be specified by class name, which is more convenient to use:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl --classLoaderClass org.springframework.boot.loader.LaunchedURLClassLoader  @org.springframework.boot.SpringApplication@logger
@Slf4jLocationAwareLog[
    FQCN=@String[org.apache.commons.logging.LogAdapter$Slf4jLocationAwareLog],
    name=@String[org.springframework.boot.SpringApplication],
    logger=@Logger[Logger[org.springframework.boot.SpringApplication]],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Execute a multi-line expression, and return a list:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;#value1=@System@getProperty(&quot;java.home&quot;), #value2=@System@getProperty(&quot;java.runtime.name&quot;), {#value1, #value2}&#39;
@ArrayList[
    @String[/opt/java/8.0.181-zulu/jre],
    @String[OpenJDK Runtime Environment],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11);function v(S,y){const a=t("ExternalLinkIcon");return o(),i(p,null,[d,e("p",null,[e("a",b,[u,g,s(a)])]),m,e("ul",null,[e("li",null,[e("a",h,[f,s(a)])]),e("li",null,[e("a",L,[x,s(a)])])]),_],64)}var k=l(c,[["render",v],["__file","ognl.html.vue"]]);export{k as default};
