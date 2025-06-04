import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  cleanUrls: true,
  outDir: "./dist",
  srcExclude: ["**/README.md", "**/TODO.md"],
  lang: "zh-CN",
  title: "土拨鼠视频下载",
  description: "土拨鼠（tuberover）视频下载",
  // <meta name="google-adsense-account" content="ca-pub-7016841222608649">
  head: [
    [
      "meta",
      { name: "google-adsense-account", content: "ca-pub-7016841222608649" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "",
    search: {
      provider: "local",
      options: {},
    },

    nav: [
      { text: "简介", link: "/" },
      { text: "使用教程", link: "/docs/guide" },
      { text: "常见问题", link: "/docs/faq" },
      { text: "机场推荐", link: "/docs/airport" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "使用教程",
          link: "/docs/guide",
        },
        {
          text: "常见问题",
          link: "/docs/faq",
        },
        {
          text: "机场推荐",
          link: "/docs/airport",
        },
      ],
    },

    // socialLinks: [
    //   {
    //     icon: "github",
    //     link: "https://github.com/moqisoft/moqisoft.github.io",
    //   },
    // ],

    footer: {
      // message:
      //   'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: "Copyright © 2025 tuberover.moqisoft.com",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 4],
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  // locales: {
  //   root: { label: "English", ...en },
  //   zh: { label: "简体中文", ...zh },
  // },
  lastUpdated: true,
  ignoreDeadLinks: true,
});
