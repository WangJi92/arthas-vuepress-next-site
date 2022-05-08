import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'
export default defineUserConfig({
  lang: 'en-US',
  title: 'arthas',
  description: 'arthas 使用文档',
  base: "/",
  // https://v2.vuepress.vuejs.org/zh/reference/config.html#head
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 多语言配置
  locales: {
    '/doc/en/': {
      lang: 'en-US',
      title: 'arthas',
      description: 'arthas user document'
    },
    '/doc/': {
      lang: 'zh-CN',
      title: 'arthas',
      description: 'arthas 使用文档',
    }
  },
  //theme 主题配置
  //打包的目的地址
  dest: '${sourceDir}/.vuepress/dist',

  // public 公共资源模块
  //public:'${sourceDir}/.vuepress/public',

  debug: false,

  // 页面md 路径信息
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],

  host: '0.0.0.0',
  port: 8081,
  open: false,
  theme: defaultTheme({
    logo: 'arthas.png',
    logoDark: 'arthas.png',
    // 暗黑模式是否启用
    darkMode: false,
    // 仓库地址
    repo: 'https://github.com/alibaba/arthas',
    sidebarDepth: 10,

    // 这里可以定制化github 编辑修改的地方
    docsDir:"site",
    docsBranch:"master",
    locales: {
      '/en-us/': {
        selectLanguageName: 'English',
        navbar: navbar.en,
        sidebar:false
      },
      '/doc/en/': {
        selectLanguageName: 'English',
        // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      '/doc/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页'
      },
      '/zh-cn/': {
        navbar: navbar.zh,
        sidebar:false ,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        backToHome: '返回首页'
      }
    },
    themePlugins: {
      //不需要展示git 修改记录
      git: false,
      prismjs: false,
    },
  }),
})