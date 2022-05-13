import { defaultTheme, defineUserConfig, Page } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchPlugin } from "@vuepress/plugin-search";
import { navbar, sidebar } from './configs'
export default defineUserConfig({
  lang: 'en-US',
  title: 'arthas',
  description: 'arthas 使用文档',
  base: "/arthas-vuepress-next-site/",
  // base: "/",
  // https://v2.vuepress.vuejs.org/zh/reference/config.html#head
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
  // 多语言配置
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'arthas',
      description: 'arthas user document'
    },
    '/': {
      lang: 'zh-CN',
      title: 'arthas',
      description: 'arthas 使用文档',
    }
  },
  //theme 主题配置
  //打包的目的地址
  //dest: '${sourceDir}/.vuepress/dist',

  // public 公共资源模块
  //public:'${sourceDir}/.vuepress/public',

  debug: false,

  // 页面md 路径信息
  /// pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],

  host: '0.0.0.0',
  port: 8081,
  open: false,
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo.png',
    // 暗黑模式是否启用
    darkMode: false,
    // 仓库地址
    repo: 'https://github.com/alibaba/arthas',
    sidebarDepth: 5,

    // 这里可以定制化github 编辑修改的地方
    docsDir: "site",
    docsBranch: "master",
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      '/': {
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
        backToHome: '返回首页',

      }
    },
    themePlugins: {
      //不需要展示git 修改记录
      git: false,
      prismjs: false,
    },
  }),
  plugins: [
    copyCodePlugin({
      showInMobile: false,
      pure: true,
      locales: {
        '/': {
          hint: "复制代码"

        },
        '/en/': {
          hint: "Copy code"
        }
      }
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: '搜索'
        },
        "/en/": {
          placeholder: "Search"
        }
      },
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/' && page.path !== '/en/'
    })
  ]
})