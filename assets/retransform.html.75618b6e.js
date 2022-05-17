import{_ as r,r as t,o as l,c as i,a as e,b as n,F as o,d as s,e as c}from"./app.1edb3735.js";const d={},m=e("h1",{id:"retransform",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#retransform","aria-hidden":"true"},"#"),s(" retransform")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-mc-retransform",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"mc-retransform",-1),h=s(" online tutorial"),b=e("blockquote",null,[e("p",null,[s("Load the external "),e("code",null,"*.class"),s(" files to retransform the loaded classes in JVM.")])],-1),f=s("Reference: "),g={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#retransformClasses-java.lang.Class...-",target:"_blank",rel:"noopener noreferrer"},v=s("Instrumentation#retransformClasses"),x=c(`<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   retransform /tmp/Test.class
   retransform -l
   retransform -d 1                    # delete retransform entry
   retransform --deleteAll             # delete all retransform entries
   retransform --classPattern demo.*   # triger retransform classes
   retransform -c 327a647b /tmp/Test.class /tmp/Test\\$Inner.class
   retransform --classLoaderClass &#39;sun.misc.Launcher$AppClassLoader&#39; /tmp/Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="retransform-the-specified-class-file" tabindex="-1"><a class="header-anchor" href="#retransform-the-specified-class-file" aria-hidden="true">#</a> retransform the specified .class file</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform /tmp/MathGame.class
retransform success, size: 1, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Load the specified .class file, then parse out the class name, and then retransform the corresponding class loaded in the jvm. Every time a <code>.class</code> file is loaded, a retransform entry is recorded.</p><blockquote><p>If retransform is executed multiple times to load the same class file, there will be multiple retransform entries.</p></blockquote><h3 id="view-retransform-entry" tabindex="-1"><a class="header-anchor" href="#view-retransform-entry" aria-hidden="true">#</a> View retransform entry</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform -l
Id              ClassName       TransformCount  LoaderHash      LoaderClassName
1               demo.MathGame   1               null            null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>TransformCount counts the times of attempts to return the .class file corresponding to the entry in the ClassFileTransformer#transform method, but it does not mean that the transform must be successful.</li></ul><h3 id="delete-the-specified-retransform-entry" tabindex="-1"><a class="header-anchor" href="#delete-the-specified-retransform-entry" aria-hidden="true">#</a> Delete the specified retransform entry</h3><p>Need to specify id:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform -d 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="delete-all-retransform-entries" tabindex="-1"><a class="header-anchor" href="#delete-all-retransform-entries" aria-hidden="true">#</a> Delete all retransform entries</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform --deleteAll
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="explicitly-trigger-retransform" tabindex="-1"><a class="header-anchor" href="#explicitly-trigger-retransform" aria-hidden="true">#</a> Explicitly trigger retransform</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform --classPattern demo.MathGame
retransform success, size: 1, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>Note: For the same class, when there are multiple retransform entries, if retransform is explicitly triggered, the entry added last will take effect (the one with the largest id).</p></blockquote><h3 id="eliminate-the-influence-of-retransform" tabindex="-1"><a class="header-anchor" href="#eliminate-the-influence-of-retransform" aria-hidden="true">#</a> Eliminate the influence of retransform</h3><p>If you want to eliminate the impact after performing retransform on a class, you need to:</p><ul><li>Delete the retransform entry corresponding to this class</li><li>Re-trigger retransform</li></ul><blockquote><p>If you do not clear all retransform entries and trigger retransform again, the retransformed classes will still take effect when arthas stop.</p></blockquote><h3 id="use-with-the-jad-mc-command" tabindex="-1"><a class="header-anchor" href="#use-with-the-jad-mc-command" aria-hidden="true">#</a> Use with the jad/mc command</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController &gt; /tmp/UserController.java

mc /tmp/UserController.java -d /tmp

retransform /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>Use <code>jad</code> command to decompile bytecode, and then you can use other editors, such as vim to modify the source code.</li><li><code>mc</code> command to compile the modified code</li><li>Load new bytecode with <code>retransform</code> command</li></ul><h3 id="tips-for-uploading-class-files-to-the-server" tabindex="-1"><a class="header-anchor" href="#tips-for-uploading-class-files-to-the-server" aria-hidden="true">#</a> Tips for uploading .class files to the server</h3><p>The <code>mc</code> command may fail. You can modify the code locally, compile it, and upload it to the server. Some servers do not allow direct uploading files, you can use the <code>base64</code> command to bypass.</p><ol><li><p>Convert the <code>.class</code> file to base64 first, then save it as result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Base64 &lt; Test.class &gt; result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Login the server, create and edit <code>result.txt</code>, copy the local content, paste and save</p></li><li><p>Restore <code>result.txt</code> on the server to <code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Use the md5 command to verify that the <code>.class</code> files are consistent.</p></li></ol><h3 id="restrictions-of-the-retransform-command" tabindex="-1"><a class="header-anchor" href="#restrictions-of-the-retransform-command" aria-hidden="true">#</a> Restrictions of the retransform command</h3><ul><li><p>New field/method is not allowed</p></li><li><p>The function that is running, no exit can not take effect, such as the new <code>System.out.println</code> added below, only the <code>run()</code> function will take effect.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class MathGame {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,30);function y(_,w){const a=t("ExternalLinkIcon");return l(),i(o,null,[m,e("p",null,[e("a",u,[p,h,n(a)])]),b,e("p",null,[f,e("a",g,[v,n(a)])]),x],64)}var C=r(d,[["render",y],["__file","retransform.html.vue"]]);export{C as default};
