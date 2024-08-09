import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ama_434",
  description: "サイトの名前はportfolioだが、正直名前負けしている",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/docs/about' },
      { text: 'Links', link: '/docs/links' },
      { text: 'Works', link: '/docs/works' }
    ],

    sidebar: [
      {
        text: 'Links',
        items: [
          { text: 'Twitter / X', link: 'https://x.com/ama_434' },
          { text: 'GitHub', link: 'https://github.com/ama434' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ama434' },
      { icon: 'twitter', link: 'https://x.com/ama_434' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ama_434' }
    ]
  },
  base: "/ama434-portfolio/"
})
