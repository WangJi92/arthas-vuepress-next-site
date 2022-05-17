import{_ as a,r,o as t,c as l,a as n,b as p,F as i,d as e,e as c}from"./app.1edb3735.js";const o={},u=n("h1",{id:"grep",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grep","aria-hidden":"true"},"#"),e(" grep")],-1),b={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-grep",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"grep",-1),d=e(" online tutorial"),g=c(`<blockquote><p>Similar to the traditional <code>grep</code> command.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> USAGE:
   grep [-A &lt;value&gt;] [-B &lt;value&gt;] [-C &lt;value&gt;] [-h] [-i] [-v] [-n] [-m &lt;value&gt;] [-e] [--trim-end] pattern

 SUMMARY:
   grep command for pipes.

 EXAMPLES:
  sysprop | grep java
  sysprop | grep java -n
  sysenv | grep -v JAVA
  sysenv | grep -e &quot;(?i)(JAVA|sun)&quot; -m 3  -C 2
  sysenv | grep JAVA -A2 -B3
  thread | grep -m 10 -e  &quot;TIMED_WAITING|WAITING&quot;

 WIKI:
   https://arthas.aliyun.com/doc/grep

 OPTIONS:
 -A, --after-context &lt;value&gt;                                                    Print NUM lines of trailing context)
 -B, --before-context &lt;value&gt;                                                   Print NUM lines of leading context)
 -C, --context &lt;value&gt;                                                          Print NUM lines of output context)
 -h, --help                                                                     this help
 -i, --ignore-case                                                              Perform case insensitive matching.  By default, grep is case sensitive.
 -v, --invert-match                                                             Select non-matching lines
 -n, --line-number                                                              Print line number with output lines
 -m, --max-count &lt;value&gt;                                                        stop after NUM selected lines)
 -e, --regex                                                                    Enable regular expression to match
     --trim-end                                                                 Remove whitespaces at the end of the line
 &lt;pattern&gt;                                                                      Pattern
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,2);function h(v,_){const s=r("ExternalLinkIcon");return t(),l(i,null,[u,n("p",null,[n("a",b,[m,d,p(s)])]),g],64)}var x=a(o,[["render",h],["__file","grep.html.vue"]]);export{x as default};
