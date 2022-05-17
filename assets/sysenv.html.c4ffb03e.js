import{_ as e,r,o as l,c as i,a as n,b as p,F as b,d as s,e as c}from"./app.1edb3735.js";const t={},m=n("h1",{id:"sysenv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sysenv","aria-hidden":"true"},"#"),s(" sysenv")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-sysenv",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"sysenv",-1),o=s("\u5728\u7EBF\u6559\u7A0B"),h=c(`<blockquote><p>\u67E5\u770B\u5F53\u524DJVM\u7684\u73AF\u5883\u5C5E\u6027(<code>System Environment Variables</code>)</p></blockquote><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> USAGE:
   sysenv [-h] [env-name]

 SUMMARY:
   Display the system env.

 EXAMPLES:
   sysenv
   sysenv USER

 WIKI:
   https://arthas.aliyun.com/doc/sysenv

 OPTIONS:
 -h, --help                                                 this help
 &lt;env-name&gt;                                                 env name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sysenv
 KEY                      VALUE
----------------------------------------------------------------------------------------------------------------------------
 PATH                     /Users/admin/.sdkman/candidates/visualvm/current/bin:/Users/admin/.sdkman/candidates/ja
                          va/current/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Wireshark.app/Contents/
                          MacOS
 SDKMAN_VERSION           5.7.3+337
 JAVA_HOME                /Users/admin/.sdkman/candidates/java/current
 JAVA_MAIN_CLASS_65244    demo.MathGame
 TERM                     xterm-256color
 LANG                     zh_CN.UTF-8
 AUTOJUMP_SOURCED         1
 COLORTERM                truecolor
 LOGNAME                  admin
 XPC_SERVICE_NAME         0
 PWD                      /Users/admin/code/ali/arthas/demo
 TERM_PROGRAM_VERSION     3.2.5
 _                        /Users/admin/.sdkman/candidates/java/current/bin/java
 SHELL                    /bin/bash
 TERM_PROGRAM             iTerm.app
 SDKMAN_PLATFORM          Darwin
 USER                     admin
 ITERM_PROFILE            Default
 TMPDIR                   /var/folders/0r/k561bkk917gg972stqclbz9h0000gn/T/
 XPC_FLAGS                0x0
 TERM_SESSION_ID          w0t4p0:60BC264D-9649-42AC-A7E4-AF85B69F93F8
 __CF_USER_TEXT_ENCODING  0x1F5:0x19:0x34
 Apple_PubSub_Socket_Ren  /private/tmp/com.apple.launchd.DwmmjSQsll/Render
 der
 COLORFGBG                7;0
 HOME                     /Users/admin
 SHLVL                    1
 AUTOJUMP_ERROR_PATH      /Users/admin/Library/autojump/errors.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="\u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF</h4><blockquote><p>\u652F\u6301\u901A\u8FC7<code>TAB</code>\u952E\u81EA\u52A8\u8865\u5168</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sysenv USER
USER=admin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8);function _(v,E){const a=r("ExternalLinkIcon");return l(),i(b,null,[m,n("p",null,[n("a",u,[d,o,p(a)])]),h],64)}var A=e(t,[["render",_],["__file","sysenv.html.vue"]]);export{A as default};
