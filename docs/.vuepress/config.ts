import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'arthas',
  description: 'arthas 使用文档',
  base:"/",
  // https://v2.vuepress.vuejs.org/zh/reference/config.html#head
  head:[['link', { rel: 'icon', href: '/arthas-log.png' }]],
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
    public:'${sourceDir}/.vuepress/public',

    debug : false,

    // 页面md 路径信息
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],

    host:'0.0.0.0',
    port:8081,
    open:false,

    theme: defaultTheme({
        locales: {
            '/en/': {
              selectLanguageName: 'English',
              navbar:[
                {
                  text: 'DOCS',
                  link: '/en/',
                },
              ],
            },
            '/zh/': {
              selectLanguageName: '简体中文',
              navbar:[
                {
                  text: '文档',
                  link: '/zh/',
                },
              ],
            },
        }
    })
})