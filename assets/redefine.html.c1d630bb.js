import{_ as l,r as o,o as i,c as d,a as e,b as s,w as r,F as c,d as n,e as m}from"./app.1edb3735.js";const u={},h=e("h1",{id:"redefine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redefine","aria-hidden":"true"},"#"),n(" redefine")],-1),p=n("Recommend to use the "),b=n("retransform"),f=n(" command."),g={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-mc-redefine",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"mc-redefine",-1),_=n(" online tutorial"),x=e("blockquote",null,[e("p",null,[n("Load the external "),e("code",null,"*.class"),n(" files to re-define the loaded classes in JVM.")])],-1),y=n("Reference: "),w={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#redefineClasses-java.lang.instrument.ClassDefinition...-",target:"_blank",rel:"noopener noreferrer"},k=n("Instrumentation#redefineClasses"),q=e("h3",{id:"frequently-asked-questions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frequently-asked-questions","aria-hidden":"true"},"#"),n(" Frequently asked questions")],-1),T=n("Recommend to use the "),C=n("retransform"),j=n(" command."),L=m(`<ul><li><p>The class of <code>redefine</code> cannot modify, add or delete the field and method of the class, including method parameters, method names and return values.</p></li><li><p>If <code>mc</code> fails, you can compile the class file in the local development environment, upload it to the target system, and use <code>redefine</code> to hot load the class.</p></li><li><p>At present, <code>redefine</code> conflicts with <code>watch / trace / jad / tt</code> commands. Reimplementing <code>redefine</code> function in the future will solve this problem.</p></li></ul><blockquote><p>Notes: Re-defined classes cannot be restored. There are chances that redefining may fail due to some reasons, for example: there&#39;s new field introduced in the new version of the class, pls. refer to JDK&#39;s documentation for the limitations.</p></blockquote><blockquote><p>The <code>reset</code> command is not valid for classes that have been processed by <code>redefine</code>. If you want to reset, you need <code>redefine</code> the original bytecode.</p></blockquote><blockquote><p>The <code>redefine</code> command will conflict with the <code>jad</code>/<code>watch</code>/<code>trace</code>/<code>monitor</code>/<code>tt</code> commands. After executing <code>redefine</code>, if you execute the above mentioned command, the bytecode of the class will be reset. The reason is that in the JDK <code>redefine</code> and <code>retransform</code> are different mechanisms. When two mechanisms are both used to update the bytecode, only the last modified will take effect.</p></blockquote><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">hashcode of the class loader</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redefine /tmp/Test.class
redefine -c 327a647b /tmp/Test.class /tmp/Test\\$Inner.class
redefine --classLoaderClass sun.misc.Launcher$AppClassLoader /tmp/Test.class /tmp/Test\\$Inner.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="use-with-the-jad-mc-command" tabindex="-1"><a class="header-anchor" href="#use-with-the-jad-mc-command" aria-hidden="true">#</a> Use with the jad/mc command</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController &gt; /tmp/UserController.java

mc /tmp/UserController.java -d /tmp

redefine /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>Use <code>jad</code> command to decompile bytecode, and then you can use other editors, such as vim to modify the source code.</li><li><code>mc</code> command to compile the modified code</li><li>Load new bytecode with <code>redefine</code> command</li></ul><h3 id="tips-for-uploading-class-files-to-the-server" tabindex="-1"><a class="header-anchor" href="#tips-for-uploading-class-files-to-the-server" aria-hidden="true">#</a> Tips for uploading .class files to the server</h3><p>The <code>mc</code> command may fail. You can modify the code locally, compile it, and upload it to the server. Some servers do not allow direct uploading files, you can use the <code>base64</code> command to bypass.</p><ol><li><p>Convert the <code>.class</code> file to base64 first, then save it as result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Base64 &lt; Test.class &gt; result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Login the server, create and edit <code>result.txt</code>, copy the local content, paste and save</p></li><li><p>Restore <code>result.txt</code> on the server to <code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Use the md5 command to verify that the <code>.class</code> files are consistent.</p></li></ol><h3 id="restrictions-of-the-redefine-command" tabindex="-1"><a class="header-anchor" href="#restrictions-of-the-redefine-command" aria-hidden="true">#</a> Restrictions of the redefine command</h3><ul><li><p>New field/method is not allowed</p></li><li><p>The function that is running, no exit can not take effect, such as the new <code>System.out.println</code> added below, only the <code>run()</code> function will take effect.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MathGame {
    public static void main(String[] args) throws InterruptedException {
        MathGame game = new MathGame();
        while (true) {
            game.run();
            TimeUnit.SECONDS.sleep(1);
            // This doesn&#39;t work because the code keeps running in while
            System.out.println(&quot;in loop&quot;);
        }
    }

    public void run() throws InterruptedException {
        // This works because the run() function ends completely every time
        System.out.println(&quot;call run()&quot;);
        try {
            int number = random.nextInt();
            List&lt;Integer&gt; primeFactors = primeFactors(number);
            print(number, primeFactors);

        } catch (Exception e) {
            System.out.println(String.format(&quot;illegalArgumentCount:%3d, &quot;, illegalArgumentCount) + e.getMessage());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,17);function I(S,R){const t=o("RouterLink"),a=o("ExternalLinkIcon");return i(),d(c,null,[h,e("blockquote",null,[e("p",null,[p,s(t,{to:"/en/doc/retransform.html"},{default:r(()=>[b]),_:1}),f])]),e("p",null,[e("a",g,[v,_,s(a)])]),x,e("p",null,[y,e("a",w,[k,s(a)])]),q,e("blockquote",null,[e("p",null,[T,s(t,{to:"/en/doc/retransform.html"},{default:r(()=>[C]),_:1}),j])]),L],64)}var N=l(u,[["render",I],["__file","redefine.html.vue"]]);export{N as default};