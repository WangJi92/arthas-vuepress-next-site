import{_ as c,r,o as p,c as o,a,b as e,w as l,F as d,d as n,e as i}from"./app.1edb3735.js";const b={},u=a("h1",{id:"jad",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jad","aria-hidden":"true"},"#"),n(" jad")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-jad",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"jad",-1),g=n(" online tutorial"),f=i(`<blockquote><p>Decompile the specified classes.</p></blockquote><p><code>jad</code> helps to decompile the byte code running in JVM to the source code to assist you to understand the logic behind better.</p><ul><li>The decompiled code is syntax highlighted for better readability in Arthas console.</li><li>It is possible that there&#39;s grammar error in the decompiled code, but it should not affect your interpretation.</li></ul><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">pattern for the class name</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">hashcode of the class loader that loads the class</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr><tr><td style="text-align:right;"><code>[E]</code></td><td style="text-align:left;">turn on regex match while the default is wildcard match</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="decompile-java-lang-string" tabindex="-1"><a class="header-anchor" href="#decompile-java-lang-string" aria-hidden="true">#</a> Decompile <code>java.lang.String</code></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad java.lang.String

ClassLoader:

Location:


        /*
         * Decompiled with CFR.
         */
        package java.lang;

        import java.io.ObjectStreamField;
        import java.io.Serializable;
...
        public final class String
        implements Serializable,
        Comparable&lt;String&gt;,
        CharSequence {
            private final char[] value;
            private int hash;
            private static final long serialVersionUID = -6849794470754667710L;
            private static final ObjectStreamField[] serialPersistentFields = new ObjectStreamField[0];
            public static final Comparator&lt;String&gt; CASE_INSENSITIVE_ORDER = new CaseInsensitiveComparator();
...
            public String(byte[] byArray, int n, int n2, Charset charset) {
/*460*/         if (charset == null) {
                    throw new NullPointerException(&quot;charset&quot;);
                }
/*462*/         String.checkBounds(byArray, n, n2);
/*463*/         this.value = StringCoding.decode(charset, byArray, n, n2);
            }
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="print-source-only" tabindex="-1"><a class="header-anchor" href="#print-source-only" aria-hidden="true">#</a> Print source only</h4>`,9),v=n("By default, the decompile result will have the "),j=a("code",null,"ClassLoader",-1),_=n(" information. With the "),L=a("code",null,"--source-only",-1),y=n(" option, you can print only the source code. Conveniently used with the "),x=n("mc"),C=n("/"),S=n("retransform"),w=n(" commands."),E=i(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad --source-only demo.MathGame
/*
 * Decompiled with CFR 0_132.
 */
package demo;

import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class MathGame {
    private static Random random = new Random();
    public int illegalArgumentCount = 0;
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="decompile-the-specified-method" tabindex="-1"><a class="header-anchor" href="#decompile-the-specified-method" aria-hidden="true">#</a> Decompile the specified method</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame main

ClassLoader:
+-sun.misc.Launcher$AppClassLoader@232204a1
  +-sun.misc.Launcher$ExtClassLoader@7f31245a

Location:
/private/tmp/math-game.jar

       public static void main(String[] args) throws InterruptedException {
           MathGame game = new MathGame();
           while (true) {
/*16*/         game.run();
/*17*/         TimeUnit.SECONDS.sleep(1L);
           }
       }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="do-not-print-line-numbers" tabindex="-1"><a class="header-anchor" href="#do-not-print-line-numbers" aria-hidden="true">#</a> Do not print line numbers</h4><ul><li><code>--lineNumber</code>: Output source code contins line numbers, default value true</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame main --lineNumber false

ClassLoader:
+-sun.misc.Launcher$AppClassLoader@232204a1
  +-sun.misc.Launcher$ExtClassLoader@7f31245a

Location:
/private/tmp/math-game.jar

public static void main(String[] args) throws InterruptedException {
    MathGame game = new MathGame();
    while (true) {
        game.run();
        TimeUnit.SECONDS.sleep(1L);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="decompile-with-specified-classloader" tabindex="-1"><a class="header-anchor" href="#decompile-with-specified-classloader" aria-hidden="true">#</a> Decompile with specified classLoader</h4><blockquote><p>If the target class is loaded by multiple classloaders, <code>jad</code> outputs the <code>hashcode</code> of the corresponding classloaders, then you can re-run <code>jad</code> and specify <code>-c &lt;hashcode&gt;</code> to decompile the target class from the specified classloader.</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad org.apache.log4j.Logger

Found more than one class for: org.apache.log4j.Logger, Please use jad -c hashcode org.apache.log4j.Logger
HASHCODE  CLASSLOADER
69dcaba4  +-monitor&#39;s ModuleClassLoader
6e51ad67  +-java.net.URLClassLoader@6e51ad67
            +-sun.misc.Launcher$AppClassLoader@6951a712
            +-sun.misc.Launcher$ExtClassLoader@6fafc4c2
2bdd9114  +-pandora-qos-service&#39;s ModuleClassLoader
4c0df5f8  +-pandora-framework&#39;s ModuleClassLoader

Affect(row-cnt:0) cost in 38 ms.
$ jad org.apache.log4j.Logger -c 69dcaba4

ClassLoader:
+-monitor&#39;s ModuleClassLoader

Location:
/Users/admin/app/log4j-1.2.14.jar

package org.apache.log4j;

import org.apache.log4j.spi.*;

public class Logger extends Category
{
    private static final String FQCN;

    protected Logger(String name)
    {
        super(name);
    }

...

Affect(row-cnt:1) cost in 190 ms.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>For classloader with only one instance, it can be specified by <code>--classLoaderClass</code> using class name, which is more convenient to use.</p><p>The value of <code>--classloaderclass</code> is the class name of classloader. It can only work when it matches a unique classloader instance. The purpose is to facilitate the input of general commands. However, <code>-c &lt;hashcode&gt;</code> is dynamic.</p>`,11);function k(A,D){const t=r("ExternalLinkIcon"),s=r("RouterLink");return p(),o(d,null,[u,a("p",null,[a("a",m,[h,g,e(t)])]),f,a("p",null,[v,j,_,L,y,e(s,{to:"/en/doc/mc.html"},{default:l(()=>[x]),_:1}),C,e(s,{to:"/en/doc/retransform.html"},{default:l(()=>[S]),_:1}),w]),E],64)}var M=c(b,[["render",k],["__file","jad.html.vue"]]);export{M as default};
