import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://admin.thepinkpopo.com/wp-json/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "The Pink Popo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Your favorite cosplay DJ"
      },
      {
        property: "og:title",
        content: "The Pink Popo"
      },
      {
        property: "og:description",
        content: "Your favorite cosplay DJ"
      },
      {
        property: "og:image",
        content: "https://www.thepinkpopo.com/og.jpg"
      },
      {
        property: "og:url",
        content: "https://www.thepinkpopo.com"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "fb:app_id",
        content: "323112195679096"
      }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          //"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/redirectssl.js",
    "~/plugins/posts.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/dateformat.js",
    "~/plugins/hammer.client.js",
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
