import{_ as e,e as n}from"./app.1edb3735.js";const a={},s=n(`<h1 id="memory" tabindex="-1"><a class="header-anchor" href="#memory" aria-hidden="true">#</a> memory</h1><p>View the JVM memory information.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ memory
Memory                           used      total      max        usage
heap                             32M       256M       4096M      0.79%
g1_eden_space                    11M       68M        -1         16.18%
g1_old_gen                       17M       184M       4096M      0.43%
g1_survivor_space                4M        4M         -1         100.00%
nonheap                          35M       39M        -1         89.55%
codeheap_&#39;non-nmethods&#39;          1M        2M         5M         20.53%
metaspace                        26M       27M        -1         96.88%
codeheap_&#39;profiled_nmethods&#39;     4M        4M         117M       3.57%
compressed_class_space           2M        3M         1024M      0.29%
codeheap_&#39;non-profiled_nmethods&#39; 685K      2496K      120032K    0.57%
mapped                           0K        0K         -          0.00%
direct                           48M       48M        -          100.00%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4);function r(p,l){return s}var c=e(a,[["render",r],["__file","memory.html.vue"]]);export{c as default};
