import{_ as l,r as t,o as i,c as p,a,b as e,w as c,F as d,d as n,e as r}from"./app.1edb3735.js";const u={},b=a("h1",{id:"arthas-spring-boot-starter",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-spring-boot-starter","aria-hidden":"true"},"#"),n(" Arthas Spring Boot Starter")],-1),h=a("blockquote",null,[a("p",null,"\u53EA\u652F\u6301 spring boot 2")],-1),g=n("\u6700\u65B0\u7248\u672C\uFF1A"),m={href:"https://search.maven.org/search?q=arthas-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},_=n("\u67E5\u770B"),v=r(`<p>\u914D\u7F6Emaven\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        &lt;dependency&gt;
            &lt;groupId&gt;com.taobao.arthas&lt;/groupId&gt;
            &lt;artifactId&gt;arthas-spring-boot-starter&lt;/artifactId&gt;
            &lt;version&gt;\${arthas.version}&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5E94\u7528\u542F\u52A8\u540E\uFF0Cspring\u4F1A\u542F\u52A8arthas\uFF0C\u5E76\u4E14attach\u81EA\u8EAB\u8FDB\u7A0B\u3002</p><blockquote><p>\u4E00\u952E\u521B\u5EFA\u5305\u542B Arthas Spring Boot Starter \u7684\u5DE5\u7A0B\uFF1A<a href="https://start.aliyun.com/bootstrap.html/#!dependencies=arthas" target="_blank">\u70B9\u51FB</a></p></blockquote><h3 id="\u914D\u7F6E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5C5E\u6027" aria-hidden="true">#</a> \u914D\u7F6E\u5C5E\u6027</h3><p>\u6BD4\u5982\uFF0C\u901A\u8FC7\u914D\u7F6Etunnel server\u5B9E\u73B0\u8FDC\u7A0B\u7BA1\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.agent-id=hsehdfsfghhwertyfad
arthas.tunnel-server=ws://47.75.156.201:7777/ws
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,7),f=n("\u5168\u90E8\u652F\u6301\u7684\u914D\u7F6E\u9879\uFF1A"),x={href:"https://github.com/alibaba/arthas/blob/master/arthas-spring-boot-starter/src/main/java/com/alibaba/arthas/spring/ArthasProperties.java",target:"_blank",rel:"noopener noreferrer"},q=n("\u53C2\u8003"),k=a("blockquote",null,[a("p",null,[n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Carthas-spring-boot-starter\u4F1A\u7981\u6389"),a("code",null,"stop"),n("\u547D\u4EE4\u3002")])],-1),I=n("\u53C2\u8003\uFF1A"),S=n("Arthas Properties"),A=a("h3",{id:"\u67E5\u770Bendpoint\u4FE1\u606F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u67E5\u770Bendpoint\u4FE1\u606F","aria-hidden":"true"},"#"),n(" \u67E5\u770BEndpoint\u4FE1\u606F")],-1),w=n("\u9700\u8981\u914D\u7F6Espring boot\u66B4\u9732endpoint\uFF1A"),y={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"},j=n("\u53C2\u8003"),B=r(`<p>\u5047\u5B9Aendpoint\u7AEF\u53E3\u662F 8080\uFF0C\u5219\u901A\u8FC7\u4E0B\u9762url\u53EF\u4EE5\u67E5\u770B\uFF1A</p><p>http://localhost:8080/actuator/arthas</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;arthasConfigMap&quot;: {
        &quot;agent-id&quot;: &quot;hsehdfsfghhwertyfad&quot;,
        &quot;tunnel-server&quot;: &quot;ws://47.75.156.201:7777/ws&quot;,
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u975Espring-boot\u5E94\u7528\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u975Espring-boot\u5E94\u7528\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u975Espring boot\u5E94\u7528\u4F7F\u7528\u65B9\u5F0F</h3><p>\u975ESpring Boot\u5E94\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        &lt;dependency&gt;
            &lt;groupId&gt;com.taobao.arthas&lt;/groupId&gt;
            &lt;artifactId&gt;arthas-agent-attach&lt;/artifactId&gt;
            &lt;version&gt;\${arthas.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.taobao.arthas&lt;/groupId&gt;
            &lt;artifactId&gt;arthas-packaging&lt;/artifactId&gt;
            &lt;version&gt;\${arthas.version}&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import com.taobao.arthas.agent.attach.ArthasAgent;

public class ArthasAttachExample {
	
	public static void main(String[] args) {
		ArthasAgent.attach();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u914D\u7F6E\u5C5E\u6027\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        HashMap&lt;String, String&gt; configMap = new HashMap&lt;String, String&gt;();
        configMap.put(&quot;arthas.appName&quot;, &quot;demo&quot;);
        configMap.put(&quot;arthas.tunnelServer&quot;, &quot;ws://127.0.0.1:7777/ws&quot;);
        ArthasAgent.attach(configMap);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u6CE8\u610F\u914D\u7F6E\u5FC5\u987B\u662F<code>\u9A7C\u5CF0</code>\u7684\uFF0C\u548Cspring boot\u7684<code>-</code>\u98CE\u683C\u4E0D\u4E00\u6837\u3002spring boot\u5E94\u7528\u624D\u540C\u65F6\u652F\u6301<code>\u9A7C\u5CF0</code> \u548C <code>-</code>\u98CE\u683C\u7684\u914D\u7F6E\u3002</p></blockquote>`,10);function M(E,N){const s=t("ExternalLinkIcon"),o=t("RouterLink");return i(),p(d,null,[b,h,a("p",null,[g,a("a",m,[_,e(s)])]),v,a("p",null,[f,a("a",x,[q,e(s)])]),k,a("p",null,[I,e(o,{to:"/doc/arthas-properties.html"},{default:c(()=>[S]),_:1})]),A,a("blockquote",null,[a("p",null,[w,a("a",y,[j,e(s)])])]),B],64)}var V=l(u,[["render",M],["__file","spring-boot-starter.html.vue"]]);export{V as default};
