import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/doc/en': [
        {
            text: 'DOCS',
            children: [
                {
                    text: 'Home',
                    link: '/en-us/'
                },
                {
                    text: 'Introduction',
                    link: '/doc/en/README.md'
                },
                '/doc/en/quick-start.md',
                // {
                //     text: 'Online tutorials(Recommend)',
                //     link: '/doc/arthas-tutorials.html?language=en&id=arthas-basics'
                // },
                '/doc/en/eninstall-detail.md',
                '/doc/en/download.md',
                '/doc/en/advanced-use.md',
                {
                    text: 'Commands',
                    collapsible: true,
                    link: '/doc/en/commands.md',
                    children: [
                        {
                            text: 'jvm',
                            collapsible: false,
                            children: [
                                '/doc/en/dashboard.md',
                                '/doc/en/thread.md',
                                '/doc/en/jvm.md',
                                '/doc/en/memory.md',
                                '/doc/en/sysprop.md',
                                '/doc/en/sysenv.md',
                                '/doc/en/vmoption.md',
                                '/doc/en/perfcounter.md',
                                '/doc/en/logger.md',
                                '/doc/en/mbean.md',
                                '/doc/en/getstatic.md',
                                '/doc/en/ognl.md',
                                '/doc/en/heapdump.md',
                                '/doc/en/vmtool.md',
                            ],
                        },
                        {
                            text: 'class/classloader',
                            collapsible: false,
                            children: [
                                '/doc/en/sc.md',
                                '/doc/en/sm.md',
                                '/doc/en/jad.md',
                                '/doc/en/classloader.md',
                                '/doc/en/mc.md',
                                '/doc/en/dump.md',
                                '/doc/en/retransform.md',
                                '/doc/en/redefine.md',
                            ],
                        },
                        {
                            text: 'monitor/watch/trace - related',
                            collapsible: false,
                            children: [
                                '/doc/en/monitor.md',
                                '/doc/en/watch.md',
                                '/doc/en/trace.md',
                                '/doc/en/stack.md',
                                '/doc/en/tt.md',
                            ],
                        },
                        {
                            text: 'other',
                            collapsible: false,
                            children: [
                                '/doc/en/profiler.md',
                                '/doc/en/cat.md',
                                '/doc/en/echo.md',
                                '/doc/en/grep.md',
                                '/doc/en/base64.md',
                                '/doc/en/tee.md',
                                '/doc/en/pwd.md',
                                '/doc/en/auth.md',
                                '/doc/en/options.md',
                            ],
                        },
                        {
                            text: 'Basic',
                            collapsible: false,
                            children: [
                                '/doc/en/help.md',
                                '/doc/en/cls.md',
                                '/doc/en/session.md',
                                '/doc/en/reset.md',
                                '/doc/en/history.md',
                                '/doc/en/quit.md',
                                '/doc/en/stop.md',
                                {
                                    text: 'keymap',
                                    link: '/doc/en/keymap.md'
                                },
                            ],
                        },
                    ],
                },
                '/doc/en/web-console.md',
                '/doc/en/tunnel.md',
                '/doc/en/http-api.md',
                '/doc/en/docker.md',
                '/doc/en/spring-boot-starter.md',
                '/doc/en/idea-plugin.md',
                {
                    text: 'User cases',
                    link: 'https://github.com/alibaba/arthas/issues?q=label%3Auser-case'
                },
                '/doc/en/faq.md',
                {
                    text: 'start me at github',
                    link: 'https://github.com/alibaba/arthas'
                },
                {
                    text: 'Compile and debug/CONTRIBUTING',
                    link: 'https://github.com/alibaba/arthas/blob/master/CONTRIBUTING.md'
                },
                {
                    text: 'Release Notes',
                    link: 'https://github.com/alibaba/arthas/releases'
                },
                {
                    text: 'Contact us',
                    link: '/doc/en/contact-us.md'
                },
            ],

        },
    ]
}
