import{_ as p,r,o as t,c as b,a,b as s,w as l,F as o,d as n,e as i}from"./app.1edb3735.js";const d={},u=a("h1",{id:"jad",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jad","aria-hidden":"true"},"#"),n(" jad")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-jad",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"jad",-1),g=n("\u5728\u7EBF\u6559\u7A0B"),v=i(`<blockquote><p>\u53CD\u7F16\u8BD1\u6307\u5B9A\u5DF2\u52A0\u8F7D\u7C7B\u7684\u6E90\u7801</p></blockquote><p><code>jad</code> \u547D\u4EE4\u5C06 JVM \u4E2D\u5B9E\u9645\u8FD0\u884C\u7684 class \u7684 byte code \u53CD\u7F16\u8BD1\u6210 java \u4EE3\u7801\uFF0C\u4FBF\u4E8E\u4F60\u7406\u89E3\u4E1A\u52A1\u903B\u8F91\uFF1B</p><ul><li>\u5728 Arthas Console \u4E0A\uFF0C\u53CD\u7F16\u8BD1\u51FA\u6765\u7684\u6E90\u7801\u662F\u5E26\u8BED\u6CD5\u9AD8\u4EAE\u7684\uFF0C\u9605\u8BFB\u66F4\u65B9\u4FBF</li><li>\u5F53\u7136\uFF0C\u53CD\u7F16\u8BD1\u51FA\u6765\u7684 java \u4EE3\u7801\u53EF\u80FD\u4F1A\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4F46\u4E0D\u5F71\u54CD\u4F60\u8FDB\u884C\u9605\u8BFB\u7406\u89E3</li></ul><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u7C7B\u6240\u5C5E ClassLoader \u7684 hashcode</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">\u6307\u5B9A\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 class name</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><h4 id="\u53CD\u7F16\u8BD1java-lang-string" tabindex="-1"><a class="header-anchor" href="#\u53CD\u7F16\u8BD1java-lang-string" aria-hidden="true">#</a> \u53CD\u7F16\u8BD1<code>java.lang.String</code></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad java.lang.String

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="\u53CD\u7F16\u8BD1\u65F6\u53EA\u663E\u793A\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u53CD\u7F16\u8BD1\u65F6\u53EA\u663E\u793A\u6E90\u4EE3\u7801" aria-hidden="true">#</a> \u53CD\u7F16\u8BD1\u65F6\u53EA\u663E\u793A\u6E90\u4EE3\u7801</h4>`,9),j=n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53CD\u7F16\u8BD1\u7ED3\u679C\u91CC\u4F1A\u5E26\u6709"),L=a("code",null,"ClassLoader",-1),_=n("\u4FE1\u606F\uFF0C\u901A\u8FC7"),C=a("code",null,"--source-only",-1),f=n("\u9009\u9879\uFF0C\u53EF\u4EE5\u53EA\u6253\u5370\u6E90\u4EE3\u7801\u3002\u65B9\u4FBF\u548C"),x=n("mc"),S=n("/"),y=n("retransform"),w=n("\u547D\u4EE4\u7ED3\u5408\u4F7F\u7528\u3002"),E=i(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad --source-only demo.MathGame
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="\u53CD\u7F16\u8BD1\u6307\u5B9A\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u53CD\u7F16\u8BD1\u6307\u5B9A\u7684\u51FD\u6570" aria-hidden="true">#</a> \u53CD\u7F16\u8BD1\u6307\u5B9A\u7684\u51FD\u6570</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame main

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u53CD\u7F16\u8BD1\u65F6\u4E0D\u663E\u793A\u884C\u53F7" tabindex="-1"><a class="header-anchor" href="#\u53CD\u7F16\u8BD1\u65F6\u4E0D\u663E\u793A\u884C\u53F7" aria-hidden="true">#</a> \u53CD\u7F16\u8BD1\u65F6\u4E0D\u663E\u793A\u884C\u53F7</h4><p><code>--lineNumber</code> \u53C2\u6570\u9ED8\u8BA4\u503C\u4E3Atrue\uFF0C\u663E\u793A\u6307\u5B9A\u4E3Afalse\u5219\u4E0D\u6253\u5370\u884C\u53F7\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad demo.MathGame main --lineNumber false

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u53CD\u7F16\u8BD1\u65F6\u6307\u5B9Aclassloader" tabindex="-1"><a class="header-anchor" href="#\u53CD\u7F16\u8BD1\u65F6\u6307\u5B9Aclassloader" aria-hidden="true">#</a> \u53CD\u7F16\u8BD1\u65F6\u6307\u5B9AClassLoader</h4><blockquote><p>\u5F53\u6709\u591A\u4E2A <code>ClassLoader</code> \u90FD\u52A0\u8F7D\u4E86\u8FD9\u4E2A\u7C7B\u65F6\uFF0C<code>jad</code> \u547D\u4EE4\u4F1A\u8F93\u51FA\u5BF9\u5E94 <code>ClassLoader</code> \u5B9E\u4F8B\u7684 <code>hashcode</code>\uFF0C\u7136\u540E\u4F60\u53EA\u9700\u8981\u91CD\u65B0\u6267\u884C <code>jad</code> \u547D\u4EE4\uFF0C\u5E76\u4F7F\u7528\u53C2\u6570 <code>-c &lt;hashcode&gt;</code> \u5C31\u53EF\u4EE5\u53CD\u7F16\u8BD1\u6307\u5B9A ClassLoader \u52A0\u8F7D\u7684\u90A3\u4E2A\u7C7B\u4E86\uFF1B</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>$ jad org.apache.log4j.Logger

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684ClassLoader\u8FD8\u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9Aclass name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><p><code>--classLoaderClass</code> \u7684\u503C\u662FClassLoader\u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684ClassLoader\u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p>`,11);function k(A,M){const c=r("ExternalLinkIcon"),e=r("RouterLink");return t(),b(o,null,[u,a("p",null,[a("a",m,[h,g,s(c)])]),v,a("p",null,[j,L,_,C,f,s(e,{to:"/doc/mc.html"},{default:l(()=>[x]),_:1}),S,s(e,{to:"/doc/retransform.html"},{default:l(()=>[y]),_:1}),w]),E],64)}var $=p(d,[["render",k],["__file","jad.html.vue"]]);export{$ as default};
