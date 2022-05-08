import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'
export default defineUserConfig({
  lang: 'en-US',
  title: 'arthas',
  description: 'arthas 使用文档',
  base:"/",
  // https://v2.vuepress.vuejs.org/zh/reference/config.html#head
  head:[['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 多语言配置
  locales:{
       '/en/': {
        lang: 'en-US',
        title: 'arthas',
        description: 'This will take effect under /en/ subpath'
       },
       '/zh/': {
         lang: 'zh-CN',
         title: 'arthas',
         description: '它将会在 /zh/ 子路径下生效',
       }
    },
    //theme 主题配置
    //打包的目的地址
    dest:'${sourceDir}/.vuepress/dist',

    // public 公共资源模块
    //public:'${sourceDir}/.vuepress/public',

    debug : false,

    // 页面md 路径信息
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],

    host:'0.0.0.0',
    port:8081,
    open:false,

    theme: defaultTheme({
        logo:'arthas.png',
        logoDark:'arthas.png',
        // 暗黑模式是否启用
        darkMode:false,
        // 仓库地址
        repo:'https://github.com/alibaba/arthas',
        sidebarDepth: 10,
        locales: {
            '/en/': {
              selectLanguageName: 'English',
              // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
              navbar:navbar.en,
              sidebar:sidebar.en,
            },
            '/zh/': {
              selectLanguageName: '简体中文',
              selectLanguageText: '选择语言',
              selectLanguageAriaLabel: '选择语言',
              navbar:navbar.zh,
               // 404 page
              notFound: [
                '这里什么都没有',
                '我们怎么到这来了？',
                '这是一个 404 页面',
                '看起来我们进入了错误的链接',
              ],
              backToHome: '返回首页',
              // a11y
              openInNewWindow: '在新窗口打开',
              toggleDarkMode: '切换夜间模式',
              toggleSidebar: '切换侧边栏',
            },
        }
    })
})