import{_ as s,r,o as l,c as i,a as n,b as t,F as p,d as e,e as o}from"./app.1edb3735.js";const u={},c=n("h1",{id:"vmoption",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vmoption","aria-hidden":"true"},"#"),e(" vmoption")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-vmoption",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"vmoption",-1),d=e("\u5728\u7EBF\u6559\u7A0B"),h=o(`<blockquote><p>\u67E5\u770B\uFF0C\u66F4\u65B0VM\u8BCA\u65AD\u76F8\u5173\u7684\u53C2\u6570</p></blockquote><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><h4 id="\u67E5\u770B\u6240\u6709\u7684option" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7684option" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u7684option</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[arthas@56963]$ vmoption
 KEY                    VALUE                   ORIGIN                 WRITEABLE
---------------------------------------------------------------------------------------------
 HeapDumpBeforeFullGC   false                   DEFAULT                true
 HeapDumpAfterFullGC    false                   DEFAULT                true
 HeapDumpOnOutOfMemory  false                   DEFAULT                true
 Error
 HeapDumpPath                                   DEFAULT                true
 CMSAbortablePrecleanW  100                     DEFAULT                true
 aitMillis
 CMSWaitDuration        2000                    DEFAULT                true
 CMSTriggerInterval     -1                      DEFAULT                true
 PrintGC                false                   DEFAULT                true
 PrintGCDetails         true                    MANAGEMENT             true
 PrintGCDateStamps      false                   DEFAULT                true
 PrintGCTimeStamps      false                   DEFAULT                true
 PrintGCID              false                   DEFAULT                true
 PrintClassHistogramBe  false                   DEFAULT                true
 foreFullGC
 PrintClassHistogramAf  false                   DEFAULT                true
 terFullGC
 PrintClassHistogram    false                   DEFAULT                true
 MinHeapFreeRatio       0                       DEFAULT                true
 MaxHeapFreeRatio       100                     DEFAULT                true
 PrintConcurrentLocks   false                   DEFAULT                true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="\u67E5\u770B\u6307\u5B9A\u7684option" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u7684option" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u7684option</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vmoption PrintGC
 KEY                 VALUE                ORIGIN              WRITEABLE
---------------------------------------------------------------------------------
 PrintGC             false                MANAGEMENT          true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u66F4\u65B0\u6307\u5B9A\u7684option" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u7684option" aria-hidden="true">#</a> \u66F4\u65B0\u6307\u5B9A\u7684option</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vmoption PrintGC true
Successfully updated the vm option.
 NAME     BEFORE-VALUE  AFTER-VALUE
------------------------------------
 PrintGC  false         true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vmoption PrintGCDetails true
Successfully updated the vm option.
 NAME            BEFORE-VALUE  AFTER-VALUE
-------------------------------------------
 PrintGCDetails  false         true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9);function E(A,f){const a=r("ExternalLinkIcon");return l(),i(p,null,[c,n("p",null,[n("a",b,[m,d,t(a)])]),h],64)}var F=s(u,[["render",E],["__file","vmoption.html.vue"]]);export{F as default};
