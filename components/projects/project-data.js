const projects = [
  {
    id: 1,
    title: "Library Management System",
    description: "A web app for manage books and distribute books.",
    image: {
      src: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=pexels-pixabay-159711.jpg&fm=jpg",
      altText: "lms",
    },
    stack: [
      {
        name: "PHP",
      },
      {
        name: "JS",
      },
      {
        name: "MySQL",
      },
      {
        name: "HTML",
      },
    ],
    sourceCode: "https://github.com/hrrarya/LibraryMannagementSystem_PHP_OOP",
    demo: [
      // {
      //   title: "Live Demo",
      //   src: "https://lms.cleaninggadget.com/",
      //   target: "_blank",
      // },
    ],
  },
  {
    id: 2,
    title: "Ice Cream Shop",
    description: "A web app for Ice Cream Shop.",
    image: {
      src: "https://images.pexels.com/photos/4916023/pexels-photo-4916023.jpeg?cs=srgb&dl=pexels-maria-orlova-4916023.jpg&fm=jpg",
      altText: "Ice Cream Shop",
    },
    stack: [
      {
        name: "PHP",
      },
      {
        name: "JS",
      },
      {
        name: "MySQL",
      },
      {
        name: "HTML",
      },
      {
        name: "Tailwind",
      },
    ],
    sourceCode: "https://github.com/hrrarya/ShoppingCartJs",
    demo: [
      {
        title: "Live Demo",
        src: "https://hrrarya.github.io/ShoppingCartJs/",
        target: "_blank",
      },
    ],
  },
  {
    id: 3,
    title: "HTML Templates",
    description: "Rebuilding popular social sites.",
    image: {
      src: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-607812.jpg&fm=jpg",
      altText: "Popular website rebuild with html",
    },
    stack: [
      {
        name: "alpine.js",
      },
      {
        name: "tailwind",
      },
      {
        name: "HTML",
      },
    ],
    sourceCode: "https://github.com/hrrarya/html-templates",
    demo: [
      {
        title: "Facebook",
        src: "https://hrrarya.github.io/html-templates/facebook-home-page/index.html",
        target: "_blank",
      },
      {
        title: "Twitter",
        src: "https://hrrarya.github.io/html-templates/twitter-profile-page/",
        target: "_blank",
      },
      {
        title: "Instagram Home Page",
        src: "https://hrrarya.github.io/html-templates/Instagram/",
        target: "_blank",
      },
    ],
  },
  {
    id: 4,
    title: "Hotel Resort",
    description: "A web app for hotel room booking.",
    image: {
      src: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=pexels-boonkong-boonpeng-1134176.jpg&fm=jpg",
      altText: "Hotel Resort",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Node",
      },
      {
        name: "Apache",
      },
    ],
    sourceCode: "https://github.com/hrrarya/Hotel-resort",  
    demo: [
      // {
      //   title: "Live Demo",
      //   src: "http://hotel-resort.cleaninggadget.com/",
      //   target: "_blank",
      // },
    ],
  },
  {
    id: 5,
    title: "VS Code Portfolio",
    description: "Stylish VS Code looking portfolio website.",
    image: {
      src: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974914.jpg&fm=jpg",
      altText: "VS Code Portfolio",
    },
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Node",
      },
    ],
    sourceCode: "https://github.com/hrrarya/vscode-portfolio",
    demo: [
      {
        title: "Live Demo",
        src: "/",
        self: true,
      },
    ],
  },
  {
    id: 6,
    title: "Litmas",
    description: "Litmas is a story sharing app.",
    image: {
      src: "/litmas-homepage.png",
      altText: "Litmas",
    },
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Node",
      },
    ],
    sourceCode: "https://github.com/hrrarya/litmas",
    demo: [
      {
        title: "Live Demo",
        src: "http://litmas.vercel.app/",
      },
    ],
  },
  {
    id: 7,
    title: "DigitMin",
    description: "DigitMin is a Crypto Mining website.",
    image: {
      src: "/digitmin.jpeg",
      altText: "DigitMin",
    },
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "SCSS",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "Live Demo",
        src: "http://digitmin.vercel.app/",
      },
    ],
  },
  {
    id: 8,
    title: "Realio",
    description: "Realio is built for real estate company.",
    image: {
      src: "/realio.jpeg",
      altText: "Realio",
    },
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Bootstrap",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "Live Demo",
        src: "http://realio.vercel.app/",
      },
    ],
  },
  {
    id: 9,
    title: "Pocket Clone",
    description: "Get Pocket Clone.",
    image: {
      src: "/pocket_clone.jpg",
      altText: "Pocket Clone",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Apache",
      },
    ],
    sourceCode: "https://github.com/hrrarya/pocket-clone",
    demo: [
      {
        title: "Backend Code",
        src: "https://github.com/hrrarya/pocket-clone-backend",
      },
    ],
  },
  {
    id: 11,
    title: "Divi Essential",
    description: "The Most Powerful All-in-One Module Pack — Divi 5 Compatible",
    associated: "DiviNext",
    image: {
      src: "https://ucarecdn.com/6a8958d3-7a2f-46bf-b9c7-7ad3564ecc1d/-/resize/1428x/-/format/jpeg/-/quality/normal/",
      altText: "Divi Essential",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "Divi 5",
      },
      {
        name: "Divi 4",
      }
    ],
    sourceCode: "",
    demo: [
      {
        title: "Website",
        src: "https://diviessential.com/",
      },
      {
        title: "Divi Marketplace",
        src: "https://www.elegantthemes.com/marketplace/divi-essential/",
      },
    ],
  },
  {
    id: 12,
    title: "Woo Essential",
    description: "The Complete WooCommerce Solution for Divi Built for Divi 5",
    associated: "DiviNext",
    image: {
      src: "https://ucarecdn.com/413c6df1-00e5-4890-b1b8-0544448a3912/-/resize/1428x/-/format/jpeg/-/quality/normal/",
      altText: "Woo Essential",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "Divi 5",
      },
      {
        name: "Divi 4",
      }
    ],
    sourceCode: "",
    demo: [
      {
        title: "Website",
        src: "https://wooessential.com/",
      },
      {
        title: "Divi Marketplace",
        src: "https://www.elegantthemes.com/marketplace/woo-essential/",
      },
    ],
  },
  {
    id: 13,
    title: "Simple 301 Redirects by BetterLinks – Easy Redirect Manager",
    associated: "WPDeveloper",
    description: "Improve Your Website User Experience With Simple 301 Redirects Solution for WordPress",
    image: {
      src: "https://ps.w.org/simple-301-redirects/assets/screenshot-1.png?rev=2783827",
      altText: "Simple 301 Redirects",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "WordPress.Org",
        src: "https://wordpress.org/plugins/simple-301-redirects/",
      },
    ],
  },
  {
    id: 14,
    title: "BetterLinks – Link Shortener, Link Cloaking, Redirects, Affiliate Link Manager & MCP",
    description: "BetterLinks is the complete link management plugin for WordPress.",
    associated: "WPDeveloper",
    image: {
      src: "https://ps.w.org/betterlinks/assets/banner-1544x500.gif?rev=3107962",
      altText: "Betterlinks",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Google Analytics",
      },
      {
        name: "Facebook Pixel",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "WordPress.Org",
        src: "https://wordpress.org/plugins/betterlinks/",
      },
    ],
  },
  {
    id: 15,
    title: "Charts for Divi – Divi Theme, Extra Theme and Divi Builder",
    description: "Charts for Divi is unlike any other chart plugin out there. It’s loaded with a bunch of free, powerful, and easy-to-use chart modules.",
    image: {
      src: "https://ps.w.org/charts-for-divi/assets/screenshot-2.png?rev=3285675",
      altText: "Charts for Divi",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "Divi 4",
      }
    ],
    sourceCode: "",
    demo: [
      {
        title: "WordPress.Org",
        src: "https://wordpress.org/plugins/charts-for-divi/",
      },
    ],
  },
  {
    id: 16,
    title: "Reviewkit – Trustpilot Reviews Widget & Embed",
    description: "Reviewkit is a wordpress plugin that seamlessly integrates Trustpilot Reviews into your website, Serving over 1k real client",
    image: {
      src: "https://ps.w.org/gutensuite-reviewkit/assets/screenshot-1.png?rev=3436674",
      altText: "Reviewkit",
    },
    stack: [
      {
        name: "Python",
      },
      {
        name: "Playwright",
      },
      {
        name: "React",
      },
      {
        name: "WordPress Plugin",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "SCSS",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "Website",
        src: "https://reviewkit.gutensuite.net/",
      },
      {
        title: "WordPress.Org",
        src: "https://wordpress.org/plugins/gutensuite-reviewkit/",
      },
    ],
  },
  {
    id: 17,
    title: "Unimart - Multipurpose WooCommerce Theme",
    description: "A powerful, modern eCommerce WordPress theme built for online stores of every size — from a single-product shop to a multi-category marketplace, powered by WooCommerce.",
    associated: "Rainbow Themes",
    image: {
      src: "https://market-resized.envatousercontent.com/themeforest.net/files/819409892/01_preview.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=ec8dd2c4147c2b69d0342d969f4d6cbd8f4af22a63ff985fda47367b47393c0a",
      altText: "Unimart - A Modern WooCommerce Theme",
    },
    stack: [
      {
        name: "WordPress Theme",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "SCSS",
      },
    ],
    sourceCode: "",
    demo: [
      {
        title: "Website",
        src: "https://www.getunimart.com/",
      },
      {
        title: "Themeforest",
        src: "https://themeforest.net/item/unimart-multipurpose-woocommerce-wordpress-theme/63756550",
      },
    ],
  },
];

export { projects };
