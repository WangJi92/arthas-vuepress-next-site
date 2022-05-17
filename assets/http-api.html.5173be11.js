import{_ as t}from"./arthas-web-ui.2f403248.js";import{_ as r,r as o,o as p,c as i,a as n,b as a,w as c,F as b,d as s,e as u}from"./app.1edb3735.js";const d={},m=n("h1",{id:"http-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http-api","aria-hidden":"true"},"#"),s(" Http API")],-1),q={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=case-http-api",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"Http API",-1),g=s("\u5728\u7EBF\u6559\u7A0B"),v=u(`<h3 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h3><p>Http API \u63D0\u4F9B\u7C7B\u4F3CRESTful\u7684\u4EA4\u4E92\u63A5\u53E3\uFF0C\u8BF7\u6C42\u548C\u54CD\u5E94\u5747\u4E3AJSON\u683C\u5F0F\u7684\u6570\u636E\u3002\u76F8\u5BF9\u4E8ETelnet/WebConsole\u7684\u8F93\u51FA\u975E\u7ED3\u6784\u5316\u6587\u672C\u6570\u636E\uFF0CHttp API\u53EF\u4EE5\u63D0\u4F9B\u7ED3\u6784\u5316\u7684\u6570\u636E\uFF0C\u652F\u6301\u66F4\u590D\u6742\u7684\u4EA4\u4E92\u529F\u80FD\uFF0C\u6BD4\u5982\u7279\u5B9A\u5E94\u7528\u573A\u666F\u7684\u4E00\u7CFB\u5217\u8BCA\u65AD\u64CD\u4F5C\u3002</p><h4 id="\u8BBF\u95EE\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5730\u5740" aria-hidden="true">#</a> \u8BBF\u95EE\u5730\u5740</h4><p>Http API\u63A5\u53E3\u5730\u5740\u4E3A\uFF1A<code>http://ip:port/api</code>\uFF0C\u5FC5\u987B\u4F7F\u7528POST\u65B9\u5F0F\u63D0\u4EA4\u8BF7\u6C42\u53C2\u6570\u3002\u5982POST <code>http://127.0.0.1:8563/api</code> \u3002</p><p>\u6CE8\u610F\uFF1Atelnet\u670D\u52A1\u76843658\u7AEF\u53E3\u4E0EChrome\u6D4F\u89C8\u5668\u6709\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5EFA\u8BAE\u4F7F\u7528http\u7AEF\u53E38563\u6765\u8BBF\u95EEhttp\u63A5\u53E3\u3002</p><h4 id="\u8BF7\u6C42\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u8BF7\u6C42\u6570\u636E\u683C\u5F0F</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;action&quot;: &quot;exec&quot;,
  &quot;requestId&quot;: &quot;req112&quot;,
  &quot;sessionId&quot;: &quot;94766d3c-8b39-42d3-8596-98aee3ccbefb&quot;,
  &quot;consumerId&quot;: &quot;955dbd1325334a84972b0f3ac19de4f7_2&quot;,
  &quot;command&quot;: &quot;version&quot;,
  &quot;execTimeout&quot;: &quot;10000&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF7\u6C42\u6570\u636E\u683C\u5F0F\u8BF4\u660E\uFF1A</p><ul><li><code>action</code> : \u8BF7\u6C42\u7684\u52A8\u4F5C/\u884C\u4E3A\uFF0C\u53EF\u9009\u503C\u8BF7\u53C2\u8003&quot;\u8BF7\u6C42Action&quot;\u5C0F\u8282\u3002</li><li><code>requestId</code> : \u53EF\u9009\u8BF7\u6C42ID\uFF0C\u7531\u5BA2\u6237\u7AEF\u751F\u6210\u3002</li><li><code>sessionId</code> : Arthas\u4F1A\u8BDDID\uFF0C\u4E00\u6B21\u6027\u547D\u4EE4\u4E0D\u9700\u8981\u8BBE\u7F6E\u4F1A\u8BDDID\u3002</li><li><code>consumerId</code> : Arthas\u6D88\u8D39\u8005ID\uFF0C\u7528\u4E8E\u591A\u4EBA\u5171\u4EAB\u4F1A\u8BDD\u3002</li><li><code>command</code> : Arthas command line \u3002</li><li><code>execTimeout</code> : \u547D\u4EE4\u540C\u6B65\u6267\u884C\u7684\u8D85\u65F6\u65F6\u95F4(ms)\uFF0C\u9ED8\u8BA4\u4E3A30000\u3002</li></ul><p>\u6CE8\u610F: \u4E0D\u540C\u7684action\u4F7F\u7528\u5230\u53C2\u6570\u4E0D\u540C\uFF0C\u6839\u636E\u5177\u4F53\u7684action\u6765\u8BBE\u7F6E\u53C2\u6570\u3002</p><h4 id="\u8BF7\u6C42action" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42action" aria-hidden="true">#</a> \u8BF7\u6C42Action</h4><p>\u76EE\u524D\u652F\u6301\u7684\u8BF7\u6C42Action\u5982\u4E0B\uFF1A</p><ul><li><code>exec</code> : \u540C\u6B65\u6267\u884C\u547D\u4EE4\uFF0C\u547D\u4EE4\u6B63\u5E38\u7ED3\u675F\u6216\u8005\u8D85\u65F6\u540E\u4E2D\u65AD\u547D\u4EE4\u6267\u884C\u540E\u8FD4\u56DE\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u3002</li><li><code>async_exec</code> : \u5F02\u6B65\u6267\u884C\u547D\u4EE4\uFF0C\u7ACB\u5373\u8FD4\u56DE\u547D\u4EE4\u7684\u8C03\u5EA6\u7ED3\u679C\uFF0C\u547D\u4EE4\u6267\u884C\u7ED3\u679C\u901A\u8FC7<code>pull_results</code>\u83B7\u53D6\u3002</li><li><code>interrupt_job</code> : \u4E2D\u65AD\u4F1A\u8BDD\u5F53\u524D\u7684\u547D\u4EE4\uFF0C\u7C7B\u4F3CTelnet <code>Ctrl + c</code>\u7684\u529F\u80FD\u3002</li><li><code>pull_results</code> : \u83B7\u53D6\u5F02\u6B65\u6267\u884C\u7684\u547D\u4EE4\u7684\u7ED3\u679C\uFF0C\u4EE5http \u957F\u8F6E\u8BE2\uFF08long-polling\uFF09\u65B9\u5F0F\u91CD\u590D\u6267\u884C</li><li><code>init_session</code> : \u521B\u5EFA\u4F1A\u8BDD</li><li><code>join_session</code> : \u52A0\u5165\u4F1A\u8BDD\uFF0C\u7528\u4E8E\u652F\u6301\u591A\u4EBA\u5171\u4EAB\u540C\u4E00\u4E2AArthas\u4F1A\u8BDD</li><li><code>close_session</code> : \u5173\u95ED\u4F1A\u8BDD</li></ul><h4 id="\u54CD\u5E94\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u72B6\u6001" aria-hidden="true">#</a> \u54CD\u5E94\u72B6\u6001</h4><p>\u54CD\u5E94\u4E2D\u7684state\u5C5E\u6027\u8868\u793A\u8BF7\u6C42\u5904\u7406\u72B6\u6001\uFF0C\u53D6\u503C\u5982\u4E0B\uFF1A</p><ul><li><code>SCHEDULED</code>\uFF1A\u5F02\u6B65\u6267\u884C\u547D\u4EE4\u65F6\u8868\u793A\u5DF2\u7ECF\u521B\u5EFAjob\u5E76\u5DF2\u63D0\u4EA4\u5230\u547D\u4EE4\u6267\u884C\u961F\u5217\uFF0C\u547D\u4EE4\u53EF\u80FD\u8FD8\u6CA1\u5F00\u59CB\u6267\u884C\u6216\u8005\u6267\u884C\u4E2D\uFF1B</li><li><code>SUCCEEDED</code>\uFF1A\u8BF7\u6C42\u5904\u7406\u6210\u529F\uFF08\u5B8C\u6210\u72B6\u6001\uFF09\uFF1B</li><li><code>FAILED</code>\uFF1A\u8BF7\u6C42\u5904\u7406\u5931\u8D25\uFF08\u5B8C\u6210\u72B6\u6001\uFF09\uFF0C\u901A\u5E38\u9644\u5E26message\u8BF4\u660E\u539F\u56E0\uFF1B</li><li><code>REFUSED</code>\uFF1A\u8BF7\u6C42\u88AB\u62D2\u7EDD\uFF08\u5B8C\u6210\u72B6\u6001\uFF09\uFF0C\u901A\u5E38\u9644\u5E26message\u8BF4\u660E\u539F\u56E0\uFF1B</li></ul><h3 id="\u4E00\u6B21\u6027\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u6027\u547D\u4EE4" aria-hidden="true">#</a> \u4E00\u6B21\u6027\u547D\u4EE4</h3><p>\u4E0E\u6267\u884C\u6279\u5904\u7406\u547D\u4EE4\u7C7B\u4F3C\uFF0C\u4E00\u6B21\u6027\u547D\u4EE4\u4EE5\u540C\u6B65\u65B9\u5F0F\u6267\u884C\u3002\u4E0D\u9700\u8981\u521B\u5EFA\u4F1A\u8BDD\uFF0C\u4E0D\u9700\u8981\u8BBE\u7F6E<code>sessionId</code>\u9009\u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;action&quot;: &quot;exec&quot;,
  &quot;command&quot;: &quot;&lt;Arthas command line&gt;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6BD4\u5982\u83B7\u53D6Arthas\u7248\u672C\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;exec&quot;,
  &quot;command&quot;:&quot;version&quot;
}
&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u54CD\u5E94\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;state&quot; : &quot;SUCCEEDED&quot;,
   &quot;sessionId&quot; : &quot;ee3bc004-4586-43de-bac0-b69d6db7a869&quot;,
   &quot;body&quot; : {
      &quot;results&quot; : [
         {
            &quot;type&quot; : &quot;version&quot;,
            &quot;version&quot; : &quot;3.3.7&quot;,
            &quot;jobId&quot; : 5
         },
         {
            &quot;jobId&quot; : 5,
            &quot;statusCode&quot; : 0,
            &quot;type&quot; : &quot;status&quot;
         }
      ],
      &quot;timeExpired&quot; : false,
      &quot;command&quot; : &quot;version&quot;,
      &quot;jobStatus&quot; : &quot;TERMINATED&quot;,
      &quot;jobId&quot; : 5
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u54CD\u5E94\u6570\u636E\u89E3\u6790\uFF1A</p><ul><li><code>state</code>: \u8BF7\u6C42\u5904\u7406\u72B6\u6001\uFF0C\u53C2\u8003\u201C\u63A5\u53E3\u54CD\u5E94\u72B6\u6001\u201D\u8BF4\u660E</li><li><code>sessionId </code>: Arthas\u4F1A\u8BDDID\uFF0C\u4E00\u6B21\u6027\u547D\u4EE4\u81EA\u52A8\u521B\u5EFA\u53CA\u9500\u6BC1\u4E34\u65F6\u4F1A\u8BDD</li><li><code>body.jobId</code>: \u547D\u4EE4\u7684\u4EFB\u52A1ID\uFF0C\u540C\u4E00\u4EFB\u52A1\u8F93\u51FA\u7684\u6240\u6709Result\u90FD\u662F\u76F8\u540C\u7684jobId</li><li><code>body.jobStatus</code>: \u4EFB\u52A1\u72B6\u6001\uFF0C\u540C\u6B65\u6267\u884C\u6B63\u5E38\u7ED3\u675F\u4E3A<code>TERMINATED </code></li><li><code>body.timeExpired</code>: \u4EFB\u52A1\u6267\u884C\u662F\u5426\u8D85\u65F6</li><li><code>body/results</code>: \u547D\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u5217\u8868</li></ul><p><strong>\u547D\u4EE4\u7ED3\u679C\u683C\u5F0F\u8BF4\u660E</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> [{
    &quot;type&quot; : &quot;version&quot;,
    &quot;version&quot; : &quot;3.3.7&quot;,
    &quot;jobId&quot; : 5
 },
 {
    &quot;jobId&quot; : 5,
    &quot;statusCode&quot; : 0,
    &quot;type&quot; : &quot;status&quot;
 }]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>type</code> : \u547D\u4EE4\u7ED3\u679C\u7C7B\u578B\uFF0C\u9664\u4E86<code>status</code>\u7B49\u7279\u6B8A\u7684\u51E0\u4E2A\u5916\uFF0C\u5176\u5B83\u7684\u4FDD\u6301\u4E0EArthas\u547D\u4EE4\u540D\u79F0\u4E00\u81F4\u3002\u8BF7\u53C2\u8003&quot;<a href="#special_command_results">\u7279\u6B8A\u547D\u4EE4\u7ED3\u679C</a>&quot;\u5C0F\u8282\u3002</li><li><code>jobId</code> : \u5904\u7406\u547D\u4EE4\u7684\u4EFB\u52A1ID\u3002</li><li>\u5176\u5B83\u5B57\u6BB5\u4E3A\u6BCF\u4E2A\u4E0D\u540C\u547D\u4EE4\u7684\u6570\u636E\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u6B21\u6027\u547D\u4EE4\u7684\u65B9\u5F0F\u6267\u884Cwatch/trace\u7B49\u8FDE\u7EED\u8F93\u51FA\u7684\u547D\u4EE4\uFF0C\u4F46\u4E0D\u80FD\u4E2D\u65AD\u547D\u4EE4\u6267\u884C\uFF0C\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u6CA1\u6709\u7ED3\u675F\u7684\u95EE\u9898\u3002\u8BF7\u53C2\u8003&quot;<a href="#change_watch_value_to_map">watch\u547D\u4EE4\u8F93\u51FAmap\u5BF9\u8C61</a>&quot;\u5C0F\u8282\u7684\u793A\u4F8B\u3002</p><p>\u8BF7\u5C3D\u91CF\u6309\u7167\u4EE5\u4E0B\u65B9\u5F0F\u5904\u7406\uFF1A</p><ul><li>\u8BBE\u7F6E\u5408\u7406\u7684<code>execTimeout</code>\uFF0C\u5230\u8FBE\u8D85\u65F6\u65F6\u95F4\u540E\u5F3A\u5236\u4E2D\u65AD\u547D\u4EE4\u6267\u884C\uFF0C\u907F\u514D\u957F\u65F6\u95F4\u6302\u8D77\u3002</li><li>\u901A\u8FC7<code>-n</code>\u53C2\u6570\u6307\u5B9A\u8F83\u5C11\u7684\u6267\u884C\u6B21\u6570\u3002</li><li>\u4FDD\u8BC1\u547D\u4EE4\u5339\u914D\u7684\u65B9\u6CD5\u53EF\u4EE5\u6210\u529F\u547D\u4E2D\u548Ccondition-express\u7F16\u5199\u6B63\u786E\uFF0C\u5982\u679Cwatch/trace\u6CA1\u6709\u547D\u4E2D\u5C31\u7B97\u6307\u5B9A<code>-n 1</code>\u4E5F\u4F1A\u6302\u8D77\u7B49\u5F85\u5230\u6267\u884C\u8D85\u65F6\u3002</li></ul><h3 id="\u4F1A\u8BDD\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD\u4EA4\u4E92" aria-hidden="true">#</a> \u4F1A\u8BDD\u4EA4\u4E92</h3><p>\u7531\u7528\u6237\u521B\u5EFA\u53CA\u7BA1\u7406Arthas\u4F1A\u8BDD\uFF0C\u9002\u7528\u4E8E\u590D\u6742\u7684\u4EA4\u4E92\u8FC7\u7A0B\u3002\u8BBF\u95EE\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u521B\u5EFA\u4F1A\u8BDD</li><li>\u52A0\u5165\u4F1A\u8BDD(\u53EF\u9009\uFF09</li><li>\u62C9\u53D6\u547D\u4EE4\u7ED3\u679C</li><li>\u6267\u884C\u4E00\u7CFB\u5217\u547D\u4EE4</li><li>\u4E2D\u65AD\u547D\u4EE4\u6267\u884C</li><li>\u5173\u95ED\u4F1A\u8BDD</li></ul><h4 id="\u521B\u5EFA\u4F1A\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4F1A\u8BDD" aria-hidden="true">#</a> \u521B\u5EFA\u4F1A\u8BDD</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;init_session&quot;
}
&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u54CD\u5E94\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;sessionId&quot; : &quot;b09f1353-202c-407b-af24-701b744f971e&quot;,
   &quot;consumerId&quot; : &quot;5ae4e5fbab8b4e529ac404f260d4e2d1_1&quot;,
   &quot;state&quot; : &quot;SUCCEEDED&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u524D\u4F1A\u8BDDID\u4E3A\uFF1A <code>b09f1353-202c-407b-af24-701b744f971e</code>\uFF0C \u5F53\u524D\u6D88\u8D39\u8005ID\u4E3A\uFF1A<code>5ae4e5fbab8b4e529ac404f260d4e2d1_1 </code>\u3002</p><h4 id="\u52A0\u5165\u4F1A\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5165\u4F1A\u8BDD" aria-hidden="true">#</a> \u52A0\u5165\u4F1A\u8BDD</h4><p>\u6307\u5B9A\u8981\u52A0\u5165\u7684\u4F1A\u8BDDID\uFF0C\u670D\u52A1\u7AEF\u5C06\u5206\u914D\u4E00\u4E2A\u65B0\u7684\u6D88\u8D39\u8005ID\u3002\u591A\u4E2A\u6D88\u8D39\u8005\u53EF\u4EE5\u63A5\u6536\u5230\u540C\u4E00\u4E2A\u4F1A\u8BDD\u7684\u547D\u4EE4\u7ED3\u679C\u3002\u672C\u63A5\u53E3\u7528\u4E8E\u652F\u6301\u591A\u4EBA\u5171\u4EAB\u540C\u4E00\u4E2A\u4F1A\u8BDD\u6216\u5237\u65B0\u9875\u9762\u540E\u91CD\u65B0\u62C9\u53D6\u4F1A\u8BDD\u5386\u53F2\u8BB0\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;join_session&quot;,
  &quot;sessionId&quot; : &quot;b09f1353-202c-407b-af24-701b744f971e&quot;
}
&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u54CD\u5E94\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;consumerId&quot; : &quot;8f7f6ad7bc2d4cb5aa57a530927a95cc_2&quot;,
   &quot;sessionId&quot; : &quot;b09f1353-202c-407b-af24-701b744f971e&quot;,
   &quot;state&quot; : &quot;SUCCEEDED&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u65B0\u7684\u6D88\u8D39\u8005ID\u4E3A<code>8f7f6ad7bc2d4cb5aa57a530927a95cc_2 </code> \u3002</p><h4 id="\u62C9\u53D6\u547D\u4EE4\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u547D\u4EE4\u7ED3\u679C" aria-hidden="true">#</a> \u62C9\u53D6\u547D\u4EE4\u7ED3\u679C</h4><p>\u62C9\u53D6\u547D\u4EE4\u7ED3\u679C\u6D88\u606F\u7684action\u4E3A<code>pull_results</code>\u3002\u8BF7\u4F7F\u7528Http long-polling\u65B9\u5F0F\uFF0C\u5B9A\u65F6\u5FAA\u73AF\u62C9\u53D6\u7ED3\u679C\u6D88\u606F\u3002 \u6D88\u8D39\u8005\u7684\u8D85\u65F6\u65F6\u95F4\u4E3A5\u5206\u949F\uFF0C\u8D85\u65F6\u540E\u9700\u8981\u8C03\u7528<code>join_session</code>\u5206\u914D\u65B0\u7684\u6D88\u8D39\u8005\u3002\u6BCF\u4E2A\u6D88\u8D39\u8005\u5355\u72EC\u5206\u914D\u4E00\u4E2A\u7F13\u5B58\u961F\u5217\uFF0C\u6309\u987A\u5E8F\u62C9\u53D6\u547D\u4EE4\u7ED3\u679C\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u5B83\u6D88\u8D39\u8005\u3002</p><p>\u8BF7\u6C42\u53C2\u6570\u9700\u8981\u6307\u5B9A\u4F1A\u8BDDID\u53CA\u6D88\u8D39\u8005ID:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;pull_results&quot;,
  &quot;sessionId&quot; : &quot;b09f1353-202c-407b-af24-701b744f971e&quot;,
  &quot;consumerId&quot; : &quot;8f7f6ad7bc2d4cb5aa57a530927a95cc_2&quot;
}
&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7528Bash\u811A\u672C\u5B9A\u65F6\u62C9\u53D6\u7ED3\u679C\u6D88\u606F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>while true; do curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;pull_results&quot;,
  &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;,
  &quot;consumerId&quot; : &quot;8ecb9cb7c7804d5d92e258b23d5245cc_1&quot;
}
&#39; | json_pp; sleep 2; done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\uFF1A <code>json_pp</code> \u5DE5\u5177\u5C06\u8F93\u51FA\u5185\u5BB9\u683C\u5F0F\u5316\u4E3Apretty json\u3002</p><p>\u54CD\u5E94\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;body&quot; : {
      &quot;results&quot; : [
         {
            &quot;inputStatus&quot; : &quot;DISABLED&quot;,
            &quot;jobId&quot; : 0,
            &quot;type&quot; : &quot;input_status&quot;
         },
         {
            &quot;type&quot; : &quot;message&quot;,
            &quot;jobId&quot; : 0,
            &quot;message&quot; : &quot;Welcome to arthas!&quot;
         },
         {
            &quot;tutorials&quot; : &quot;https://arthas.aliyun.com/doc/arthas-tutorials.html&quot;,
            &quot;time&quot; : &quot;2020-08-06 15:56:43&quot;,
            &quot;type&quot; : &quot;welcome&quot;,
            &quot;jobId&quot; : 0,
            &quot;pid&quot; : &quot;7909&quot;,
            &quot;wiki&quot; : &quot;https://arthas.aliyun.com/doc&quot;,
            &quot;version&quot; : &quot;3.3.7&quot;
         },
         {
            &quot;inputStatus&quot; : &quot;ALLOW_INPUT&quot;,
            &quot;type&quot; : &quot;input_status&quot;,
            &quot;jobId&quot; : 0
         }
      ]
   },
   &quot;sessionId&quot; : &quot;b09f1353-202c-407b-af24-701b744f971e&quot;,
   &quot;consumerId&quot; : &quot;8f7f6ad7bc2d4cb5aa57a530927a95cc_2&quot;,
   &quot;state&quot; : &quot;SUCCEEDED&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="\u5F02\u6B65\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u5F02\u6B65\u6267\u884C\u547D\u4EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;&#39;&#39;
{
  &quot;action&quot;:&quot;async_exec&quot;,
  &quot;command&quot;:&quot;watch demo.MathGame primeFactors \\&quot;{params, returnObj, throwExp}\\&quot; &quot;,
   &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;
}
&#39;&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>async_exec</code> \u7684\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;,
   &quot;state&quot; : &quot;SCHEDULED&quot;,
   &quot;body&quot; : {
      &quot;jobStatus&quot; : &quot;READY&quot;,
      &quot;jobId&quot; : 3,
      &quot;command&quot; : &quot;watch demo.MathGame primeFactors \\&quot;{params, returnObj, throwExp}\\&quot; &quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>state</code> : <code>SCHEDULED</code> \u72B6\u6001\u8868\u793A\u5DF2\u7ECF\u89E3\u6790\u547D\u4EE4\u751F\u6210\u4EFB\u52A1\uFF0C\u4F46\u672A\u5F00\u59CB\u6267\u884C\u3002</li><li><code>body.jobId</code> : \u5F02\u6B65\u6267\u884C\u547D\u4EE4\u7684\u4EFB\u52A1ID\uFF0C\u53EF\u4EE5\u6839\u636E\u6B64\u4EFB\u52A1ID\u6765\u8FC7\u6EE4\u5728<code>pull_results</code>\u8F93\u51FA\u7684\u547D\u4EE4\u7ED3\u679C\u3002</li><li><code>body.jobStatus</code> : \u4EFB\u52A1\u72B6\u6001<code>READY</code>\u8868\u793A\u672A\u5F00\u59CB\u6267\u884C\u3002</li></ul><p>\u67E5\u770B\u4E0A\u9762\u81EA\u52A8\u62C9\u53D6\u7ED3\u679C\u6D88\u606F\u811A\u672C\u7684shell\u8F93\u51FA\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;body&quot; : {
      &quot;results&quot; : [
         {
            &quot;type&quot; : &quot;command&quot;,
            &quot;jobId&quot; : 3,
            &quot;state&quot; : &quot;SCHEDULED&quot;,
            &quot;command&quot; : &quot;watch demo.MathGame primeFactors \\&quot;{params, returnObj, throwExp}\\&quot; &quot;
         },
         {
            &quot;inputStatus&quot; : &quot;ALLOW_INTERRUPT&quot;,
            &quot;jobId&quot; : 0,
            &quot;type&quot; : &quot;input_status&quot;
         },
         {
            &quot;success&quot; : true,
            &quot;jobId&quot; : 3,
            &quot;effect&quot; : {
               &quot;listenerId&quot; : 3,
               &quot;cost&quot; : 24,
               &quot;classCount&quot; : 1,
               &quot;methodCount&quot; : 1
            },
            &quot;type&quot; : &quot;enhancer&quot;
         },
         {
            &quot;sizeLimit&quot; : 10485760,
            &quot;expand&quot; : 1,
            &quot;jobId&quot; : 3,
            &quot;type&quot; : &quot;watch&quot;,
            &quot;cost&quot; : 0.071499,
            &quot;ts&quot; : 1596703453237,
            &quot;value&quot; : [
               [
                  -170365
               ],
               null,
               {
                  &quot;stackTrace&quot; : [
                     {
                        &quot;className&quot; : &quot;demo.MathGame&quot;,
                        &quot;classLoaderName&quot; : &quot;app&quot;,
                        &quot;methodName&quot; : &quot;primeFactors&quot;,
                        &quot;nativeMethod&quot; : false,
                        &quot;lineNumber&quot; : 46,
                        &quot;fileName&quot; : &quot;MathGame.java&quot;
                     },
                     ...
                  ],
                  &quot;localizedMessage&quot; : &quot;number is: -170365, need &gt;= 2&quot;,
                  &quot;@type&quot; : &quot;java.lang.IllegalArgumentException&quot;,
                  &quot;message&quot; : &quot;number is: -170365, need &gt;= 2&quot;
               }
            ]
         },
         {
            &quot;type&quot; : &quot;watch&quot;,
            &quot;cost&quot; : 0.033375,
            &quot;jobId&quot; : 3,
            &quot;ts&quot; : 1596703454241,
            &quot;value&quot; : [
               [
                  1
               ],
               [
                  2,
                  2,
                  2,
                  2,
                  13,
                  491
               ],
               null
            ],
            &quot;sizeLimit&quot; : 10485760,
            &quot;expand&quot; : 1
         }
      ]
   },
   &quot;consumerId&quot; : &quot;8ecb9cb7c7804d5d92e258b23d5245cc_1&quot;,
   &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;,
   &quot;state&quot; : &quot;SUCCEEDED&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><p>watch\u547D\u4EE4\u7ED3\u679C\u7684<code>value</code>\u4E3Awatch-experss\u7684\u503C\uFF0C\u4E0A\u9762\u547D\u4EE4\u4E2D\u4E3A<code>{params, returnObj, throwExp}</code>\uFF0C\u6240\u4EE5watch\u7ED3\u679C\u7684value\u4E3A\u4E00\u4E2A\u957F\u5EA6\u4E3A3\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u5206\u522B\u5BF9\u5E94\u76F8\u5E94\u987A\u5E8F\u7684\u8868\u8FBE\u5F0F\u3002 \u8BF7\u53C2\u8003&quot;<a href="#change_watch_value_to_map">watch\u547D\u4EE4\u8F93\u51FAmap\u5BF9\u8C61</a>&quot;\u5C0F\u8282\u3002</p><h4 id="\u4E2D\u65AD\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u65AD\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> \u4E2D\u65AD\u547D\u4EE4\u6267\u884C</h4><p>\u4E2D\u65AD\u4F1A\u8BDD\u6B63\u5728\u8FD0\u884C\u7684\u524D\u53F0Job\uFF08\u524D\u53F0\u4EFB\u52A1\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;&#39;&#39;
{
  &quot;action&quot;:&quot;interrupt_job&quot;,
  &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;
}
&#39;&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   &quot;state&quot; : &quot;SUCCEEDED&quot;,
   &quot;body&quot; : {
      &quot;jobStatus&quot; : &quot;TERMINATED&quot;,
      &quot;jobId&quot; : 3
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u5173\u95ED\u4F1A\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u4F1A\u8BDD" aria-hidden="true">#</a> \u5173\u95ED\u4F1A\u8BDD</h4><p>\u6307\u5B9A\u4F1A\u8BDDID\uFF0C\u5173\u95ED\u4F1A\u8BDD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d &#39;&#39;&#39;
{
  &quot;action&quot;:&quot;close_session&quot;,
  &quot;sessionId&quot; : &quot;2b085b5d-883b-4914-ab35-b2c5c1d5aa2a&quot;
}
&#39;&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
   &quot;state&quot; : &quot;SUCCEEDED&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#\u9274\u6743" aria-hidden="true">#</a> \u9274\u6743</h3>`,71),_=s("\u53C2\u8003\uFF1A "),j=s("auth"),x=n("h3",{id:"web-ui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web-ui","aria-hidden":"true"},"#"),s(" Web UI")],-1),I=n("p",null,[n("img",{src:t,alt:"",title:"arthas web ui"})],-1),f=s("\u4E00\u4E2A\u57FA\u4E8EHttp API\u63A5\u53E3\u5B9E\u73B0\u7684Web UI\uFF0C\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A "),E={href:"http://127.0.0.1:8563/ui",target:"_blank",rel:"noopener noreferrer"},S=s("http://127.0.0.1:8563/ui"),D=s(" \u3002"),y=u(`<p>\u5DF2\u5B9E\u73B0\u529F\u80FD\uFF1A</p><ul><li>\u521B\u5EFA\u4F1A\u8BDD</li><li>\u590D\u5236\u5E76\u6253\u5F00url\u52A0\u5165\u4F1A\u8BDD\uFF0C\u591A\u4EBA\u5171\u4EAB\u4F1A\u8BDD</li><li>\u5468\u671F\u6027\u62C9\u53D6\u4F1A\u8BDD\u547D\u4EE4\u7ED3\u679C\u6D88\u606F</li><li>\u5237\u65B0\u9875\u9762\u6216\u8005\u52A0\u5165\u4F1A\u8BDD\u62C9\u53D6\u4F1A\u8BDD\u5386\u53F2\u547D\u4EE4\u6D88\u606F</li><li>\u8F93\u5165\u547D\u4EE4/\u4E2D\u65AD\u547D\u4EE4\u72B6\u6001\u63A7\u5236</li></ul><p>\u5F85\u5F00\u53D1\u529F\u80FD\uFF1A</p><ul><li>\u6539\u8FDB\u5C06\u547D\u4EE4\u7ED3\u679C\u6D88\u606F\u53EF\u8BFB\u6027</li><li>\u547D\u4EE4\u8F93\u5165\u652F\u6301\u81EA\u52A8\u5B8C\u6210\u53CA\u547D\u4EE4\u6A21\u677F</li><li>\u63D0\u4F9B\u547D\u4EE4\u5E2E\u52A9</li><li>\u652F\u6301\u4E2A\u4EBA\u9009\u9879\u8BBE\u7F6E</li></ul><p><a id="special_command_results"></a></p><h3 id="\u7279\u6B8A\u547D\u4EE4\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u547D\u4EE4\u7ED3\u679C" aria-hidden="true">#</a> \u7279\u6B8A\u547D\u4EE4\u7ED3\u679C</h3><h4 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
    &quot;jobId&quot; : 5,
    &quot;statusCode&quot; : 0,
    &quot;type&quot; : &quot;status&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>type</code>\u4E3A<code>status</code>\u8868\u793A\u547D\u4EE4\u6267\u884C\u72B6\u6001\uFF1A</p><p>\u6BCF\u4E2A\u547D\u4EE4\u6267\u884C\u7ED3\u675F\u540E\u90FD\u6709\u552F\u4E00\u4E00\u4E2Astatus\u7ED3\u679C\u3002<code>statusCode</code> \u4E3A0\u8868\u793A\u6267\u884C\u6210\u529F\uFF0C<code>statusCode</code> \u4E3A\u975E0\u503C\u8868\u793A\u6267\u884C\u5931\u8D25\uFF0C\u7C7B\u4F3C\u8FDB\u7A0B\u9000\u51FA\u7801(exit code)\u3002</p><p>\u547D\u4EE4\u6267\u884C\u5931\u8D25\u65F6\u4E00\u822C\u4F1A\u63D0\u4F9B\u9519\u8BEF\u6D88\u606F\uFF0C\u5982\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;jobId&quot;:3,
  &quot;message&quot;:&quot;The argument &#39;class-pattern&#39; is required&quot;,
  &quot;statusCode&quot;:-10,
  &quot;type&quot;:&quot;status&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="input-status" tabindex="-1"><a class="header-anchor" href="#input-status" aria-hidden="true">#</a> input_status</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> {
    &quot;inputStatus&quot; : &quot;ALLOW_INPUT&quot;,
    &quot;type&quot; : &quot;input_status&quot;,
    &quot;jobId&quot; : 0
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>type</code>\u4E3A<code>input_status</code>\u8868\u793A\u8F93\u5165\u72B6\u6001\uFF1A</p><p>\u7528\u4E8EUI\u4EA4\u4E92\u65F6\u63A7\u5236\u7528\u6237\u8F93\u5165\uFF0C\u6BCF\u6B21\u6267\u884C\u547D\u4EE4\u524D\u540E\u4F1A\u53D1\u9001\u6539\u53D8\u7684\u6D88\u606F\u3002 <code>inputStatus</code> \u7684\u503C\u8BF4\u660E\uFF1A</p><ul><li><code>ALLOW_INPUT</code> : \u5141\u8BB8\u7528\u6237\u8F93\u5165\u547D\u4EE4\uFF0C\u8868\u793A\u4F1A\u8BDD\u6CA1\u6709\u5728\u6267\u884C\u7684\u524D\u53F0\u547D\u4EE4\uFF0C\u53EF\u4EE5\u63A5\u53D7\u65B0\u7684\u547D\u4EE4\u3002</li><li><code>ALLOW_INTERRUPT</code> : \u5141\u8BB8\u7528\u6237\u4E2D\u65AD\u547D\u4EE4\u6267\u884C\uFF0C\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u547D\u4EE4\uFF0C\u7528\u6237\u53EF\u4EE5\u53D1\u9001<code>interrupt_job</code>\u4E2D\u65AD\u6267\u884C\u3002</li><li><code>DISABLED</code> : \u7981\u7528\u72B6\u6001\uFF0C\u4E0D\u80FD\u8F93\u5165\u547D\u4EE4\u4E5F\u4E0D\u80FD\u4E2D\u65AD\u547D\u4EE4\u3002</li></ul><h4 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> {
    &quot;type&quot; : &quot;command&quot;,
    &quot;jobId&quot; : 3,
    &quot;state&quot; : &quot;SCHEDULED&quot;,
    &quot;command&quot; : &quot;watch demo.MathGame primeFactors \\&quot;{params, returnObj, throwExp}\\&quot; &quot;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>type</code> \u4E3A<code>command</code>\u8868\u793A\u8F93\u5165\u7684\u547D\u4EE4\u6570\u636E\uFF1A</p><p>\u7528\u4E8E\u4EA4\u4E92UI\u56DE\u663E\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u62C9\u53D6\u7684\u4F1A\u8BDD\u547D\u4EE4\u6D88\u606F\u5386\u53F2\u4F1A\u5305\u542B<code>command</code>\u7C7B\u578B\u7684\u6D88\u606F\uFF0C\u6309\u987A\u5E8F\u5904\u7406\u5373\u53EF\u3002</p><h4 id="enhancer" tabindex="-1"><a class="header-anchor" href="#enhancer" aria-hidden="true">#</a> enhancer</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> {
    &quot;success&quot; : true,
    &quot;jobId&quot; : 3,
    &quot;effect&quot; : {
       &quot;listenerId&quot; : 3,
       &quot;cost&quot; : 24,
       &quot;classCount&quot; : 1,
       &quot;methodCount&quot; : 1
    },
    &quot;type&quot; : &quot;enhancer&quot;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>type</code>\u4E3A<code>enhancer</code>\u8868\u793A\u7C7B\u589E\u5F3A\u7ED3\u679C\uFF1A</p><p><code>trace/watch/jad/tt</code>\u7B49\u547D\u4EE4\u9700\u8981\u5BF9\u7C7B\u8FDB\u884C\u589E\u5F3A\uFF0C\u4F1A\u63A5\u6536\u5230\u8FD9\u4E2A<code>enhancer</code>\u7ED3\u679C\u3002\u53EF\u80FD\u51FA\u73B0<code>enhancer</code>\u7ED3\u679C\u6210\u529F\uFF0C\u4F46\u6CA1\u6709\u547D\u4E2D\u65B9\u6CD5\u7684\u60C5\u51B5\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6839\u636E<code>enhancer</code>\u7ED3\u679C\u63D0\u793A\u7528\u6237\u3002</p><h3 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h3><h4 id="\u83B7\u53D6java\u5E94\u7528\u7684classpath" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6java\u5E94\u7528\u7684classpath" aria-hidden="true">#</a> \u83B7\u53D6Java\u5E94\u7528\u7684Classpath</h4><p>\u901A\u8FC7Http api\u67E5\u8BE2Java\u5E94\u7528\u7684System properties\uFF0C\u63D0\u53D6<code>java.class.path</code>\u7684\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>json_data=$(curl -Ss -XPOST http://localhost:8563/api -d &#39;
{
  &quot;action&quot;:&quot;exec&quot;,
  &quot;command&quot;:&quot;sysprop&quot;
}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u4F7F\u7528<code>sed</code>\u63D0\u53D6\u503C\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>class_path=$(echo $json_data | tr -d &#39;\\n&#39; | sed &#39;s/.*&quot;java.class.path&quot;:&quot;\\([^&quot;]*\\).*/\\1/&#39;)
echo &quot;classpath: $class_path&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u4F7F\u7528<code>json_pp/awk</code>\u63D0\u53D6\u503C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>class_path=$(echo $json_data | tr -d &#39;\\n&#39; | json_pp | grep java.class.path | awk -F&#39;&quot;&#39; &#39;{ print $4 }&#39;)
echo &quot;classpath: $class_path&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u51FA\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>classpath: demo-arthas-spring-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\uFF1A</p><ul><li><code>echo $json_data | tr -d &#39;\\n&#39;</code> : \u5220\u9664\u6362\u884C\u7B26(<code>line.separator</code>\u7684\u503C)\uFF0C\u907F\u514D\u5F71\u54CD<code>sed</code>/<code>json_pp</code>\u547D\u4EE4\u5904\u7406\u3002</li><li><code>awk -F&#39;&quot;&#39; &#39;{ print $4 }&#39;</code> : \u4F7F\u7528\u53CC\u5F15\u53F7\u4F5C\u4E3A\u5206\u9694\u7B26\u53F7</li></ul><p><a id="change_watch_value_to_map"></a></p><h4 id="watch\u547D\u4EE4\u8F93\u51FAmap\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#watch\u547D\u4EE4\u8F93\u51FAmap\u5BF9\u8C61" aria-hidden="true">#</a> watch\u547D\u4EE4\u8F93\u51FAmap\u5BF9\u8C61</h4>`,39),w=s("watch\u7684\u7ED3\u679C\u503C\u7531\u8BA1\u7B97"),C=n("code",null,"watch-express",-1),T=s(" ognl\u8868\u8FBE\u5F0F\u4EA7\u751F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6539\u53D8ognl\u8868\u8FBE\u5F0F\u6765\u751F\u6210\u60F3\u8981\u7684\u503C\uFF0C\u8BF7\u53C2\u8003"),A={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},O=s("OGNL\u6587\u6863"),L=s("\u3002"),P=u(`<blockquote><p>Maps can also be created using a special syntax.</p><p>#{ &quot;foo&quot; : &quot;foo value&quot;, &quot;bar&quot; : &quot;bar value&quot; }</p><p>This creates a Map initialized with mappings for &quot;foo&quot; and &quot;bar&quot;.</p></blockquote><p>\u4E0B\u9762\u7684\u547D\u4EE4\u751F\u6210map\u683C\u5F0F\u7684\u503C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>watch *MathGame prime* &#39;#{ &quot;params&quot; : params, &quot;returnObj&quot; : returnObj, &quot;throwExp&quot;: throwExp}&#39; -x 2 -n 5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728Telnet shell/WebConsole \u4E2D\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ts=2020-08-06 16:57:20; [cost=0.241735ms] result=@LinkedHashMap[
    @String[params]:@Object[][
        @Integer[1],
    ],
    @String[returnObj]:@ArrayList[
        @Integer[2],
        @Integer[241],
        @Integer[379],
    ],
    @String[throwExp]:null,
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7528Http api \u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u6CE8\u610F\u5BF9JSON\u53CC\u5F15\u53F7\u8F6C\u4E49\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl -Ss -XPOST http://localhost:8563/api -d @- &lt;&lt; EOF
{
  &quot;action&quot;:&quot;exec&quot;,
  &quot;execTimeout&quot;: 30000,
  &quot;command&quot;:&quot;watch *MathGame prime* &#39;#{ \\&quot;params\\&quot; : params, \\&quot;returnObj\\&quot; : returnObj, \\&quot;throwExp\\&quot;: throwExp}&#39; -n 3 &quot;
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Http api \u6267\u884C\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
    &quot;body&quot;: {
         ...
        &quot;results&quot;: [
            ...
            {
                ...
                &quot;type&quot;: &quot;watch&quot;,
                &quot;value&quot;: {
                    &quot;params&quot;: [
                        1
                    ],
                    &quot;returnObj&quot;: [
                        2,
                        5,
                        17,
                        23,
                        23
                    ]
                }
            },
            {
                ...
                &quot;type&quot;: &quot;watch&quot;,
                &quot;value&quot;: {
                    &quot;params&quot;: [
                        -98278
                    ],
                    &quot;throwExp&quot;: {
                        &quot;@type&quot;: &quot;java.lang.IllegalArgumentException&quot;,
                        &quot;localizedMessage&quot;: &quot;number is: -98278, need &gt;= 2&quot;,
                        &quot;message&quot;: &quot;number is: -98278, need &gt;= 2&quot;,
                        &quot;stackTrace&quot;: [
                            ...
                        ]
                    }
                }
            },
            ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230watch\u7ED3\u679C\u7684value\u53D8\u6210map\u5BF9\u8C61\uFF0C\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7key\u8BFB\u53D6\u7ED3\u679C\u3002</p>`,10);function U(N,k){const e=o("ExternalLinkIcon"),l=o("RouterLink");return p(),i(b,null,[m,n("p",null,[n("a",q,[h,g,a(e)])]),v,n("p",null,[_,a(l,{to:"/doc/auth.html"},{default:c(()=>[j]),_:1})]),x,I,n("p",null,[f,n("a",E,[S,a(e)]),D]),y,n("p",null,[w,C,T,n("a",A,[O,a(e)]),L]),P],64)}var R=r(d,[["render",U],["__file","http-api.html.vue"]]);export{R as default};
