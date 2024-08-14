import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ama_434",
  description: "サイトの名前はportfolioだが、正直名前負けしていると思う",
  themeConfig: {
    head: [
      // https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
      [
        'script',
        { id: 'register-twitter-widget' },
        `window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };

          return t;
        })(document, 'script', 'twitter-wjs');`,
      ],
    ],
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
