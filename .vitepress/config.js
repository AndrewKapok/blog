import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站标题，游览器标签页上显示
  title: "Andrew`s Notes",
  description: "description",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 页面左上方导航栏
    nav: [{ text: "Home", link: "/" }],
    // 底部配置
    footer: {
      copyright: "Copyright@ 2025 Andrew Kapok",
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "线段树", link: "/algorithm/SegmentTree" },
          { text: "Tarjan", link: "/algorithm/tarjan" },
        ],
      },
      {
        text: "题解",
        items: [{ text: "Luogu P13800", link: "/solution/P13800" }],
      },
      {
        text: "文化课",
        items: [
          {
            text: "语文",
            items: [
              { text: "把木棉带回去", link: "/study_note/chinese/kapok" },
              { text: "那辆自行车", link: "/study_note/chinese/bike.md" },
              { text: "心桥", link: "/study_note/chinese/bridge_in_heart.md" },
              {
                text: "蒸汽腾腾里的文化",
                link: "/study_note/chinese/culture_in_steam.md",
              },
              { text: "龙眼甜", link: "/study_note/chinese/longan.md" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/AndrewKapok" }],
  },
});
