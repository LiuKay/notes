import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "程序员练级攻略", icon: "repo", link: "/guide/" },
  {
    text: "技术专题",
    icon: "note",
    prefix: "/tech/" ,
    children: [
      {
        text: "JVM",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "Redis",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "微服务",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "MySQL",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "AWS",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "分布式系统",
        icon: "edit",
        link: "distribution-system",
      },
      {
        text: "消息队列",
        icon: "edit",
        link: "JVM"
      },
      {
        text: "JVM",
        icon: "edit",
        link: "JVM"
      },
    ],
  },
  {
    text: "博客归档",
    icon: "blog",
    prefix: "/posts/",
    children: [
      {
        text: "Articles 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "Article 1", icon: "edit", link: "article1" },
          { text: "Article 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
    ],
  },
  {
    icon: "ask",
    text: "Q&A",
    link: "/guide/",
  },
]);
