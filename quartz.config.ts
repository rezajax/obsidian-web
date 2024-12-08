import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧑‍💻 Reza Blog",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto",
        body: "Roboto",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f5f5", // Material Design Light
          lightgray: "#eeeeee", // Material Design Light Gray
          gray: "#9e9e9e", // Material Design Gray
          darkgray: "#616161", // Material Design Dark Gray
          dark: "#212121", // Material Design Dark
          secondary: "#1976d2", // Material Design Blue
          tertiary: "#607d8b", // Material Design Blue Gray
          highlight: "rgba(0, 0, 0, 0.12)", // Material Design Highlight
          textHighlight: "#ffeb3b", // Material Design Yellow
        },
        darkMode: {
          light: "#303030", // Material Design Dark background
          lightgray: "#616161", // Material Design Dark Gray
          gray: "#9e9e9e", // Material Design Gray
          darkgray: "#bdbdbd", // Material Design Light Gray
          dark: "#fafafa", // Material Design Light Text on Dark background
          secondary: "#2196f3", // Material Design Blue
          tertiary: "#80deea", // Material Design Cyan
          highlight: "rgba(0, 0, 0, 0.12)", // Material Design Highlight
          textHighlight: "#ffeb3b", // Material Design Yellow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

