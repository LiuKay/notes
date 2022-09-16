import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  author: {
    name: "Kaybee",
    url: "https://github.com/LiuKay",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "LiuKay/liukay.github.io",

  docsRepo: "LiuKay/liukay.github.io",

  docsBranch: "main",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Default footer",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],

  blog: {
    description: "A BackEnd programmer",
    intro: "/intro.html",
    medias: {
      Discord: "https://example.com",
      Email: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
      Wechat: "https://example.com",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "LiuKay/KaybeeNotes",
      repoId: "R_kgDOGYbmGQ",
      category: "Announcements",
      categoryId: "DIC_kwDOGYbmGc4CRcof",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
