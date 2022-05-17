import{_ as r,r as l,o,c as i,a as e,b as n,F as c,d as s,e as t}from"./app.1edb3735.js";const d={},p=e("h1",{id:"getstatic",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getstatic","aria-hidden":"true"},"#"),s(" getstatic")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-getstatic",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"getstatic",-1),b=s(" online tutorial"),h=t(`<ul><li>It is recommended to use the [OGNL] (ognl.md) command, which will be more flexible.</li></ul><p>Check the static fields of classes conveniently, the usage is <code>getstatic class_name field_name</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic demo.MathGame random
field: random
@Random[
    serialVersionUID=@Long[3905348978240129619],
    seed=@AtomicLong[120955813885284],
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
    unsafe=@Unsafe[sun.misc.Unsafe@2eaa1027],
    seedOffset=@Long[24],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>Specify classLoader</li></ul><p>Note that the hashcode changes, you need to check the current ClassLoader information first, and extract the hashcode corresponding to the ClassLoader using <code>sc -d &lt;ClassName&gt;</code>.</p><p>if you use<code>-c</code>, you have to manually type hashcode by <code>-c &lt;hashcode&gt;</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic -c 3d4eac69 demo.MathGame random
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>For classloader with only one instance, it can be specified by <code>--classLoaderClass</code> using class name, which is more convenient to use.</p><p><code>getstatic --classLoaderClass demo.MathGame random</code></p><ul><li>PS: Here the classLoaderClass in java 8 is sun.misc.Launcher$AppClassLoader, while in java 11 it&#39;s jdk.internal.loader.ClassLoaders$AppClassLoader. Currently katacoda using java 8.</li></ul><p>The value of <code>--classloaderclass</code> is the class name of classloader. It can only work when it matches a unique classloader instance. The purpose is to facilitate the input of general commands. However, <code>-c &lt;hashcode&gt;</code> is dynamic.</p>`,11),g=s("Tip: if the static field is a complex class, you can even use "),f={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"OGNL",-1),v=s(" to traverse, filter and access the inner properties of this class."),y={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},L=s("OGNL official guide"),k={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},x=s("Special usages"),N=t(`<p>E.g. suppose <code>n</code> is a <code>Map</code> and its key is a <code>Enum</code>, then you can achieve this if you want to pick the key with a specific <code>Enum</code> value:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic com.alibaba.arthas.Test n &#39;entrySet().iterator.{? #this.key.name()==&quot;STOP&quot;}&#39;
field: n
@ArrayList[
    @Node[STOP=bbb],
]
Affect(row-cnt:1) cost in 68 ms.


$ getstatic com.alibaba.arthas.Test m &#39;entrySet().iterator.{? #this.key==&quot;a&quot;}&#39;
field: m
@ArrayList[
    @Node[a=aaa],
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,2);function S(C,w){const a=l("ExternalLinkIcon");return o(),i(c,null,[p,e("p",null,[e("a",u,[m,b,n(a)])]),h,e("p",null,[g,e("a",f,[_,n(a)]),v]),e("ul",null,[e("li",null,[e("a",y,[L,n(a)])]),e("li",null,[e("a",k,[x,n(a)])])]),N],64)}var E=r(d,[["render",S],["__file","getstatic.html.vue"]]);export{E as default};
