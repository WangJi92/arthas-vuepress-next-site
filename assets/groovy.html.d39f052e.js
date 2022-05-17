import{_ as r,r as t,o as p,c as l,a,b as i,w as c,F as o,e,d as n}from"./app.1edb3735.js";const u={},b=e(`<h1 id="groovy" tabindex="-1"><a class="header-anchor" href="#groovy" aria-hidden="true">#</a> groovy</h1><blockquote><p>Arthas support groovy scripting to allow user to use script like BTrace. It is possible to use if/for/switch/while in groovy scripting, but has more limitations compared to BTrace.</p></blockquote><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><ol><li>Prohibit from alternating the original logic. Like <code>watch</code> command, The major purpose of scripting is monitoring and observing.</li><li>Only allow to monitor at the stages of before/success/exception/finish on one method.</li></ol><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th style="text-align:right;">Parameter</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">class name pattern</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">method name pattern</td></tr><tr><td style="text-align:right;"><em>script-filepath</em></td><td style="text-align:left;">the absolute path of the groovy script</td></tr><tr><td style="text-align:right;">[S]</td><td style="text-align:left;">match all sub classes</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">enable regex match, the default is wildcard match</td></tr></tbody></table><p>Note: the third parameter <code>script-filepath</code> must be the absolute path of the groovy script, for example <code>/tmp/test.groovy</code>. It is not recommended to use relative path, e.g. <code>./test.groovy</code>.</p><h3 id="explanation-on-the-important-callbacks" tabindex="-1"><a class="header-anchor" href="#explanation-on-the-important-callbacks" aria-hidden="true">#</a> Explanation on the important callbacks</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * Listeners for script to enhance the class
 */
interface ScriptListener {

    /**
     * When the script is created
     *
     * @param output Output
     */
    void create(Output output);

    /**
     * When the script is destroyed
     *
     * @param output Output
     */
    void destroy(Output output);

    /**
     * Before the method executes
     *
     * @param output Output
     * @param advice Advice
     */
    void before(Output output, Advice advice);

    /**
     * After the method returns
     *
     * @param output Output
     * @param advice Advice
     */
    void afterReturning(Output output, Advice advice);

    /**
     * After the method throws exceptions
     *
     * @param output Output
     * @param advice Advice
     */
    void afterThrowing(Output output, Advice advice);

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="advice-parameter" tabindex="-1"><a class="header-anchor" href="#advice-parameter" aria-hidden="true">#</a> <code>Advice</code> parameter</h3>`,10),m=a("code",null,"Advice",-1),d=n(" contains all information necessary for notification. Refer to "),h=n("expression core parameters"),g=n(" for more details."),v=e(`<h3 id="output-parameter" tabindex="-1"><a class="header-anchor" href="#output-parameter" aria-hidden="true">#</a> <code>Output</code> parameter</h3><p>There are three methods in <code>Output</code>, used for outputting the corresponding text.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * Output
 */
interface Output {

    /**
     * Output text without line break
     *
     * @param string Text to output
     * @return this
     */
    Output print(String string);

    /**
     * Output text with line break
     *
     * @param string Text to output
     * @return this
     */
    Output println(String string);

    /**
     * Finish outputting from the script
     *
     * @return this
     */
    Output finish();

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="a-groovy-sample-script-to-output-logs" tabindex="-1"><a class="header-anchor" href="#a-groovy-sample-script-to-output-logs" aria-hidden="true">#</a> A groovy sample script to output logs</h3><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>import com.taobao.arthas.core.command.ScriptSupportCommand
import com.taobao.arthas.core.util.Advice

import static java.lang.String.format

/**
 * Output method logs
 */
public class Logger implements ScriptSupportCommand.ScriptListener {

    @Override
    void create(ScriptSupportCommand.Output output) {
        output.println(&quot;script create.&quot;);
    }

    @Override
    void destroy(ScriptSupportCommand.Output output) {
        output.println(&quot;script destroy.&quot;);
    }

    @Override
    void before(ScriptSupportCommand.Output output, Advice advice) {
        output.println(format(&quot;before:class=%s;method=%s;paramslen=%d;%s;&quot;,
                advice.getClazz().getSimpleName(),
                advice.getMethod().getName(),
                advice.getParams().length, advice.getParams()))
    }

    @Override
    void afterReturning(ScriptSupportCommand.Output output, Advice advice) {
        output.println(format(&quot;returning:class=%s;method=%s;&quot;,
                advice.getClazz().getSimpleName(),
                advice.getMethod().getName()))
    }

    @Override
    void afterThrowing(ScriptSupportCommand.Output output, Advice advice) {
        output.println(format(&quot;throwing:class=%s;method=%s;&quot;,
                advice.getClazz().getSimpleName(),
                advice.getMethod().getName()))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>Run the script like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ groovy com.alibaba.sample.petstore.dal.dao.ProductDao getProductById /Users/zhuyong/middleware/arthas/scripts/Logger.groovy -S
script create.
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 102 ms.
before:class=IbatisProductDao;method=getProductById;paramslen=1;[Ljava.lang.Object;@45df64fc;
returning:class=IbatisProductDao;method=getProductById;
before:class=IbatisProductDao;method=getProductById;paramslen=1;[Ljava.lang.Object;@5b0e2d00;
returning:class=IbatisProductDao;method=getProductById;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,7);function f(y,x){const s=t("RouterLink");return p(),l(o,null,[b,a("p",null,[m,d,i(s,{to:"/en/doc/advice-class.html"},{default:c(()=>[h]),_:1}),g]),v],64)}var _=r(u,[["render",f],["__file","groovy.html.vue"]]);export{_ as default};
