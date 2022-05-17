import{_ as o,r as t,o as c,c as i,a as s,b as a,w as d,F as p,d as e,e as r}from"./app.1edb3735.js";const u={},m=s("h1",{id:"getstatic",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getstatic","aria-hidden":"true"},"#"),e(" getstatic")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-getstatic",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"getstatic",-1),g=e("\u5728\u7EBF\u6559\u7A0B"),_=e("\u63A8\u8350\u76F4\u63A5\u4F7F\u7528"),L=e("ognl"),f=e("\u547D\u4EE4\uFF0C\u66F4\u52A0\u7075\u6D3B\u3002"),v=r(`<p>\u901A\u8FC7getstatic\u547D\u4EE4\u53EF\u4EE5\u65B9\u4FBF\u7684\u67E5\u770B\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u3002\u4F7F\u7528\u65B9\u6CD5\u4E3A<code>getstatic class_name field_name</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic demo.MathGame random
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>\u6307\u5B9AclassLoader</li></ul><p>\u6CE8\u610Fhashcode\u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684ClassLoader\u4FE1\u606F\uFF0C\u4F7F\u7528<code>sc -d &lt;ClassName&gt;</code>\u63D0\u53D6\u5BF9\u5E94ClassLoader\u7684hashcode\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528<code>-c</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u8F93\u5165hashcode\uFF1A<code>-c &lt;hashcode&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic -c 3d4eac69 demo.MathGame random
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684ClassLoader\u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9Aclass name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><p><code>getstatic --classLoaderClass sun.misc.Launcher$AppClassLoader demo.MathGame random</code></p><ul><li>\u6CE8: \u8FD9\u91CCclassLoaderClass \u5728 java 8 \u662F sun.misc.Launcher$AppClassLoader\uFF0C\u800Cjava 11\u7684classloader\u662Fjdk.internal.loader.ClassLoaders$AppClassLoader\uFF0Ckatacoda\u76EE\u524D\u73AF\u5883\u662Fjava8\u3002</li></ul><p><code>--classLoaderClass</code> \u7684\u503C\u662FClassLoader\u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684ClassLoader\u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p><p>\u5982\u679C\u8BE5\u9759\u6001\u5C5E\u6027\u662F\u4E00\u4E2A\u590D\u6742\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u652F\u6301\u5728\u8BE5\u5C5E\u6027\u4E0A\u901A\u8FC7ognl\u8868\u793A\u8FDB\u884C\u904D\u5386\uFF0C\u8FC7\u6EE4\uFF0C\u8BBF\u95EE\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027\u7B49\u64CD\u4F5C\u3002</p>`,11),x=e("OGNL\u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),C={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},k=e("https://github.com/alibaba/arthas/issues/71"),N=e("OGNL\u8868\u8FBE\u5F0F\u5B98\u65B9\u6307\u5357\uFF1A"),y={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},S=e("https://commons.apache.org/proper/commons-ognl/language-guide.html"),B=r(`<p>\u4F8B\u5982\uFF0C\u5047\u8BBEn\u662F\u4E00\u4E2AMap\uFF0CMap\u7684Key\u662F\u4E00\u4E2AEnum\uFF0C\u6211\u4EEC\u60F3\u8FC7\u6EE4\u51FAMap\u4E2DKey\u4E3A\u67D0\u4E2AEnum\u7684\u503C\uFF0C\u53EF\u4EE5\u5199\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ getstatic com.alibaba.arthas.Test n &#39;entrySet().iterator.{? #this.key.name()==&quot;STOP&quot;}&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,2);function A(E,G){const n=t("ExternalLinkIcon"),l=t("RouterLink");return c(),i(p,null,[m,s("p",null,[s("a",b,[h,g,a(n)])]),s("ul",null,[s("li",null,[_,a(l,{to:"/doc/ognl.html"},{default:d(()=>[L]),_:1}),f])]),v,s("ul",null,[s("li",null,[x,s("a",C,[k,a(n)])]),s("li",null,[N,s("a",y,[S,a(n)])])]),B],64)}var $=o(u,[["render",A],["__file","getstatic.html.vue"]]);export{$ as default};
