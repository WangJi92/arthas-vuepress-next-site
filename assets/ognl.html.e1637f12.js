import{_ as l,r as o,o as t,c as i,a as n,b as s,F as p,d as e,e as r}from"./app.1edb3735.js";const c={},d=n("h1",{id:"ognl",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ognl","aria-hidden":"true"},"#"),e(" ognl")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-ognl",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"ognl",-1),u=e("\u5728\u7EBF\u6559\u7A0B"),m=r('<blockquote><p>\u6267\u884Cognl\u8868\u8FBE\u5F0F</p></blockquote><p>\u4ECE3.0.5\u7248\u672C\u589E\u52A0</p><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>express</em></td><td style="text-align:left;">\u6267\u884C\u7684\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 hashcode\uFF0C\u9ED8\u8BA4\u503C\u662FSystemClassLoader</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">\u6307\u5B9A\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 class name</td></tr><tr><td style="text-align:right;">[x]</td><td style="text-align:left;">\u7ED3\u679C\u5BF9\u8C61\u7684\u5C55\u5F00\u5C42\u6B21\uFF0C\u9ED8\u8BA4\u503C1</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3>',5),h=e("OGNL\u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),L={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},f=e("https://github.com/alibaba/arthas/issues/71"),_=e("OGNL\u8868\u8FBE\u5F0F\u5B98\u65B9\u6307\u5357\uFF1A"),v={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},x=e("https://commons.apache.org/proper/commons-ognl/language-guide.html"),S=r(`<p>\u8C03\u7528\u9759\u6001\u51FD\u6570\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;@java.lang.System@out.println(&quot;hello&quot;)&#39;
null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u83B7\u53D6\u9759\u6001\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;@demo.MathGame@random&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u901A\u8FC7hashcode\u6307\u5B9AClassLoader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ classloader -t
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6CE8\u610Fhashcode\u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684ClassLoader\u4FE1\u606F\uFF0C\u63D0\u53D6\u5BF9\u5E94ClassLoader\u7684hashcode\u3002</p><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684ClassLoader\u53EF\u4EE5\u901A\u8FC7class name\u6307\u5B9A\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl --classLoaderClass org.springframework.boot.loader.LaunchedURLClassLoader  @org.springframework.boot.SpringApplication@logger
@Slf4jLocationAwareLog[
    FQCN=@String[org.apache.commons.logging.LogAdapter$Slf4jLocationAwareLog],
    name=@String[org.springframework.boot.SpringApplication],
    logger=@Logger[Logger[org.springframework.boot.SpringApplication]],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6267\u884C\u591A\u884C\u8868\u8FBE\u5F0F\uFF0C\u8D4B\u503C\u7ED9\u4E34\u65F6\u53D8\u91CF\uFF0C\u8FD4\u56DE\u4E00\u4E2AList\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ognl &#39;#value1=@System@getProperty(&quot;java.home&quot;), #value2=@System@getProperty(&quot;java.runtime.name&quot;), {#value1, #value2}&#39;
@ArrayList[
    @String[/opt/java/8.0.181-zulu/jre],
    @String[OpenJDK Runtime Environment],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11);function y(k,C){const a=o("ExternalLinkIcon");return t(),i(p,null,[d,n("p",null,[n("a",b,[g,u,s(a)])]),m,n("ul",null,[n("li",null,[h,n("a",L,[f,s(a)])]),n("li",null,[_,n("a",v,[x,s(a)])])]),S],64)}var j=l(c,[["render",y],["__file","ognl.html.vue"]]);export{j as default};
