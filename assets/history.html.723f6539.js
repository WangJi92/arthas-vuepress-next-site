import{_ as e,e as s}from"./app.1edb3735.js";const a={},t=s(`<h1 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h1><p>view command history.</p><blockquote><p>history of commands will persisted in a file named history, so the history command can show all the history commands of current Arthas server ,but not only history in current session.</p></blockquote><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;">[c:]</td><td style="text-align:left;">clear all the history commands</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">view the nearest 5 commands</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#view the nearest 3 commands
$ history 3
  269  thread
  270  cls
  271  history 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> #clear all the history commands
 $ history -c
 $ history 3
  1  history 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,8);function n(r,i){return t}var h=e(a,[["render",n],["__file","history.html.vue"]]);export{h as default};
