import{_ as e,r,o as l,c as b,a as n,b as p,F as i,d as s,e as c}from"./app.1edb3735.js";const m={},u=n("h1",{id:"jvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jvm","aria-hidden":"true"},"#"),s(" jvm")],-1),t={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-jvm",target:"_blank",rel:"noopener noreferrer"},o=n("code",null,"jvm",-1),E=s("\u5728\u7EBF\u6559\u7A0B"),d=c(`<blockquote><p>\u67E5\u770B\u5F53\u524DJVM\u4FE1\u606F</p></blockquote><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ jvm
RUNTIME
--------------------------------------------------------------------------------------------------------------
 MACHINE-NAME                   37@ff267334bb65
 JVM-START-TIME                 2020-07-23 07:50:36
 MANAGEMENT-SPEC-VERSION        1.2
 SPEC-NAME                      Java Virtual Machine Specification
 SPEC-VENDOR                    Oracle Corporation
 SPEC-VERSION                   1.8
 VM-NAME                        Java HotSpot(TM) 64-Bit Server VM
 VM-VENDOR                      Oracle Corporation
 VM-VERSION                     25.201-b09
 INPUT-ARGUMENTS                []
 CLASS-PATH                     demo-arthas-spring-boot.jar
 BOOT-CLASS-PATH                /usr/lib/jvm/java-8-oracle/jre/lib/resources.jar:/usr/lib/jvm/java-8-oracle/j
                                re/lib/rt.jar:/usr/lib/jvm/java-8-oracle/jre/lib/sunrsasign.jar:/usr/lib/jvm/
                                java-8-oracle/jre/lib/jsse.jar:/usr/lib/jvm/java-8-oracle/jre/lib/jce.jar:/us
                                r/lib/jvm/java-8-oracle/jre/lib/charsets.jar:/usr/lib/jvm/java-8-oracle/jre/l
                                ib/jfr.jar:/usr/lib/jvm/java-8-oracle/jre/classes
 LIBRARY-PATH                   /usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib

--------------------------------------------------------------------------------------------------------------
 CLASS-LOADING
--------------------------------------------------------------------------------------------------------------
 LOADED-CLASS-COUNT             7529
 TOTAL-LOADED-CLASS-COUNT       7529
 UNLOADED-CLASS-COUNT           0
 IS-VERBOSE                     false

--------------------------------------------------------------------------------------------------------------
 COMPILATION
--------------------------------------------------------------------------------------------------------------
 NAME                           HotSpot 64-Bit Tiered Compilers
 TOTAL-COMPILE-TIME             14921(ms)

--------------------------------------------------------------------------------------------------------------
 GARBAGE-COLLECTORS
--------------------------------------------------------------------------------------------------------------
 PS Scavenge                            name : PS Scavenge                                                                             
 [count/time (ms)]                      collectionCount : 7                                                                            
                                        collectionTime : 68                                                                            
                                                                                                                                       
 PS MarkSweep                           name : PS MarkSweep                                                                            
 [count/time (ms)]                      collectionCount : 1                                                                            
                                        collectionTime : 47 

--------------------------------------------------------------------------------------------------------------
 MEMORY-MANAGERS
--------------------------------------------------------------------------------------------------------------
 CodeCacheManager               Code Cache

 Metaspace Manager              Metaspace
                                Compressed Class Space

 Copy                           Eden Space
                                Survivor Space

 MarkSweepCompact               Eden Space
                                Survivor Space
                                Tenured Gen


--------------------------------------------------------------------------------------------------------------
 MEMORY
--------------------------------------------------------------------------------------------------------------
 HEAP-MEMORY-USAGE                      init : 268435456(256.0 MiB)                                                                    
 [memory in bytes]                      used : 18039504(17.2 MiB)                                                                      
                                        committed : 181403648(173.0 MiB)                                                               
                                        max : 3817865216(3.6 GiB)                                                                      
                                                                                                                                       
 NO-HEAP-MEMORY-USAGE                   init : 2555904(2.4 MiB)                                                                        
 [memory in bytes]                      used : 33926216(32.4 MiB)                                                                      
                                        committed : 35176448(33.5 MiB)                                                                 
                                        max : -1(-1 B)  

--------------------------------------------------------------------------------------------------------------
 OPERATING-SYSTEM
--------------------------------------------------------------------------------------------------------------
 OS                             Linux
 ARCH                           amd64
 PROCESSORS-COUNT               3
 LOAD-AVERAGE                   29.53
 VERSION                        4.15.0-52-generic

--------------------------------------------------------------------------------------------------------------
 THREAD
--------------------------------------------------------------------------------------------------------------
 COUNT                          30
 DAEMON-COUNT                   24
 PEAK-COUNT                     31
 STARTED-COUNT                  36
 DEADLOCK-COUNT                 0

--------------------------------------------------------------------------------------------------------------
 FILE-DESCRIPTOR
--------------------------------------------------------------------------------------------------------------
 MAX-FILE-DESCRIPTOR-COUNT      1048576
 OPEN-FILE-DESCRIPTOR-COUNT     100
Affect(row-cnt:0) cost in 88 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div><h3 id="thread\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#thread\u76F8\u5173" aria-hidden="true">#</a> THREAD\u76F8\u5173</h3><ul><li>COUNT: JVM\u5F53\u524D\u6D3B\u8DC3\u7684\u7EBF\u7A0B\u6570</li><li>DAEMON-COUNT: JVM\u5F53\u524D\u6D3B\u8DC3\u7684\u5B88\u62A4\u7EBF\u7A0B\u6570</li><li>PEAK-COUNT: \u4ECEJVM\u542F\u52A8\u5F00\u59CB\u66FE\u7ECF\u6D3B\u7740\u7684\u6700\u5927\u7EBF\u7A0B\u6570</li><li>STARTED-COUNT: \u4ECEJVM\u542F\u52A8\u5F00\u59CB\u603B\u5171\u542F\u52A8\u8FC7\u7684\u7EBF\u7A0B\u6B21\u6570</li><li>DEADLOCK-COUNT: JVM\u5F53\u524D\u6B7B\u9501\u7684\u7EBF\u7A0B\u6570</li></ul><h3 id="\u6587\u4EF6\u63CF\u8FF0\u7B26\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u63CF\u8FF0\u7B26\u76F8\u5173" aria-hidden="true">#</a> \u6587\u4EF6\u63CF\u8FF0\u7B26\u76F8\u5173</h3><ul><li>MAX-FILE-DESCRIPTOR-COUNT\uFF1AJVM\u8FDB\u7A0B\u6700\u5927\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570</li><li>OPEN-FILE-DESCRIPTOR-COUNT\uFF1AJVM\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570</li></ul>`,7);function S(O,C){const a=r("ExternalLinkIcon");return l(),b(i,null,[u,n("p",null,[n("a",t,[o,E,p(a)])]),d],64)}var T=e(m,[["render",S],["__file","jvm.html.vue"]]);export{T as default};
