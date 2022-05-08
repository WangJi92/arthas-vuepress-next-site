import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/doc/': [
        {
            text: '文档',
            children: [
                {
                    text: '首页',
                    link: '/zh-cn'
                },
                {
                    text: '介绍',
                    link: '/doc/README.md'
                },
                '/doc/quick-start.md',
                //'/doc/arthas-tutorials.html',
                {
                    text: '在线教程(阿里云)',
                    link: 'https://start.aliyun.com/handson-lab?category=arthas'
                },
                '/doc/install-detail.md',
                '/doc/download.md',
                '/doc/advanced-use.md',
                '/doc/commands.md',
                '/doc/web-console.md',
                '/doc/tunnel.md',
                '/doc/http-api.md',
                '/doc/docker.md',
                '/doc/spring-boot-starter.md',
                '/doc/idea-plugin.md',
                {
                    text: '用户案列',
                    link: 'https://github.com/alibaba/arthas/issues?q=label%3Auser-case'
                },
                '/doc/faq.md',
                {
                    text: 'start me at github',
                    link: 'https://github.com/alibaba/arthas'
                },
                {
                    text: '编译调试/参与贡献',
                    link: 'https://github.com/alibaba/arthas/blob/master/CONTRIBUTING.md'
                },
                {
                    text: 'Release Notes',
                    link: 'https://github.com/alibaba/arthas/releases'
                },
                {
                    text: 'QQ群/钉钉群',
                    link: '/doc/contact-us.md'
                },
            ],

        },
    ]
}
