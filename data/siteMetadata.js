const siteMetadata = {
  title: "dzaaaaaa",
  author: "Soteota De Tualin",
  headerTitle: "自然魔法的科学原理",
  description: "在深渊边上看星星",
  language: "zh-cn",
  siteUrl: "https://dzaaaaaa.com",
  siteRepo: "https://github.com/Tualin14/Tweb",
  siteLogo: "/static/images/dzaaaaaa.png",
  image: "/static/images/dzaaaaaa.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "tiancai@dzaaaaaa.com",
  github: "https://github.com/Tualin14",
  twitter: "https://twitter.com/OliviaiDT",
  youtube: "https://youtube.com",
  bilibili: "https://space.bilibili.com/403504801",
  locale: "zn-cn",
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: "" // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: "buttondown"
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: "Tualin14/Tweb",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: "Announcements",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      // theme when dark mode
      darkTheme: "transparent_dark",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: ""
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: "", // supported options: pathname, url, title
      label: "", // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: "",
      // theme when dark mode
      darkTheme: ""
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
    }
  }
};

module.exports = siteMetadata;
