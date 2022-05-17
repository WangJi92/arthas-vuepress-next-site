import{_ as i,r as t,o as l,c as p,a as n,b as a,w as c,F as d,d as e,e as r}from"./app.1edb3735.js";const u={},b=n("h1",{id:"arthas-spring-boot-starter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arthas-spring-boot-starter","aria-hidden":"true"},"#"),e(" Arthas Spring Boot Starter")],-1),h=n("blockquote",null,[n("p",null,"Support spring boot 2")],-1),g=e("Latest Version: "),m={href:"https://search.maven.org/search?q=arthas-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},f=e("View"),v=r(`<p>Add maven dependency:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        &lt;dependency&gt;
            &lt;groupId&gt;com.taobao.arthas&lt;/groupId&gt;
            &lt;artifactId&gt;arthas-spring-boot-starter&lt;/artifactId&gt;
            &lt;version&gt;\${arthas.version}&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>When the application is started, spring will start arthas and attach its own process.</p><h3 id="configuration-properties" tabindex="-1"><a class="header-anchor" href="#configuration-properties" aria-hidden="true">#</a> Configuration properties</h3><p>For example, by configuring the tunnel server for remote management.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.agent-id=hsehdfsfghhwertyfad
arthas.tunnel-server=ws://47.75.156.201:7777/ws
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),_=e("All supported configuration: "),x={href:"https://github.com/alibaba/arthas/blob/master/arthas-spring-boot-starter/src/main/java/com/alibaba/arthas/spring/ArthasProperties.java",target:"_blank",rel:"noopener noreferrer"},q=e("Reference"),w=n("blockquote",null,[n("p",null,[e("By default, arthas-spring-boot-starter will disable the "),n("code",null,"stop"),e(" command.")])],-1),y=e("Reference: "),k=e("Arthas Properties"),I=n("h3",{id:"view-endpoint-information",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#view-endpoint-information","aria-hidden":"true"},"#"),e(" View Endpoint Information")],-1),A=e("Need to configure spring boot to expose endpoint: "),S={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"},j=e("Reference"),N=e("."),B=r(`<p>Assuming the endpoint port is 8080, it can be viewed via the following url.</p><p>http://localhost:8080/actuator/arthas</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>{
    &quot;arthasConfigMap&quot;: {
        &quot;agent-id&quot;: &quot;hsehdfsfghhwertyfad&quot;,
        &quot;tunnel-server&quot;: &quot;ws://47.75.156.201:7777/ws&quot;,
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="non-spring-boot-application-usage" tabindex="-1"><a class="header-anchor" href="#non-spring-boot-application-usage" aria-hidden="true">#</a> Non-spring boot application usage</h3><p>Non-Spring Boot applications can be used in the following ways.</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        &lt;dependency&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>You can also configure properties:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        HashMap&lt;String, String&gt; configMap = new HashMap&lt;String, String&gt;();
        configMap.put(&quot;arthas.appName&quot;, &quot;demo&quot;);
        configMap.put(&quot;arthas.tunnelServer&quot;, &quot;ws://127.0.0.1:7777/ws&quot;);
        ArthasAgent.attach(configMap);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>Note that the configuration must be <code>camel case</code>, which is different from the <code>-</code> style of spring boot. Only the spring boot application supports both <code>camel case</code> and <code>-</code> style configuration.</p></blockquote>`,10);function M(V,E){const s=t("ExternalLinkIcon"),o=t("RouterLink");return l(),p(d,null,[b,h,n("p",null,[g,n("a",m,[f,a(s)])]),v,n("p",null,[_,n("a",x,[q,a(s)])]),w,n("p",null,[y,a(o,{to:"/en/doc/arthas-properties.html"},{default:c(()=>[k]),_:1})]),I,n("blockquote",null,[n("p",null,[A,n("a",S,[j,a(s)]),N])]),B],64)}var R=i(u,[["render",M],["__file","spring-boot-starter.html.vue"]]);export{R as default};
