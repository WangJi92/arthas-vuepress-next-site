import{_ as s,r as n,o as r,c as o,a,b as c,w as d,F as i,e as l,d as e}from"./app.1edb3735.js";const h={},_=l(`<h1 id="\u4EE5java-agent\u7684\u65B9\u5F0F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4EE5java-agent\u7684\u65B9\u5F0F\u542F\u52A8" aria-hidden="true">#</a> \u4EE5Java Agent\u7684\u65B9\u5F0F\u542F\u52A8</h1><p>\u901A\u5E38Arthas\u662F\u4EE5\u52A8\u6001attach\u7684\u65B9\u5F0F\u6765\u8BCA\u65AD\u5E94\u7528\uFF0C\u4F46\u4ECE<code>3.2.0</code>\u7248\u672C\u8D77\uFF0CArthas\u652F\u6301\u76F4\u63A5\u4EE5 java agent\u7684\u65B9\u5F0F\u542F\u52A8\u3002</p><p>\u6BD4\u5982\u4E0B\u8F7D\u5168\u91CF\u7684arthas zip\u5305\uFF0C\u89E3\u538B\u4E4B\u540E\u4EE5 <code>-javaagent</code> \u7684\u53C2\u6570\u6307\u5B9A<code>arthas-agent.jar</code>\u6765\u542F\u52A8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -javaagent:/tmp/test/arthas-agent.jar -jar math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),p=e("\u9ED8\u8BA4\u7684\u914D\u7F6E\u9879\u5728\u89E3\u538B\u76EE\u5F55\u91CC\u7684"),m=a("code",null,"arthas.properties",-1),u=e("\u6587\u4EF6\u91CC\u3002\u53C2\u8003\uFF1A"),g=e("Arthas Properties"),v=a("p",null,"Java Agent\u673A\u5236\u53C2\u8003\uFF1A https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/package-summary.html",-1);function j(x,f){const t=n("RouterLink");return r(),o(i,null,[_,a("p",null,[p,m,u,c(t,{to:"/doc/arthas-properties.html"},{default:d(()=>[g]),_:1})]),v],64)}var k=s(h,[["render",j],["__file","agent.html.vue"]]);export{k as default};
