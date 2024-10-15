import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "MikeLaita",
  DESCRIPTION: "Welcome to MikeLaita, a portfolio and blog for designers and developers.",
  AUTHOR: "Mike Laita",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Animals",
    HREF: "/animals",
  },
  {
    TEXT: "Cosmetics",
    HREF: "/cosmetics",
  },
  {
    TEXT: "Drinks",
    HREF: "/drinks",
  },
  {
    TEXT: "Food",
    HREF: "/food",
  },
  {
    TEXT: "People",
    HREF: "/people",
  },
  {
    TEXT: "Still-Life",
    HREF: "/still-life",
  },
  {
    TEXT: "Technology",
    HREF: "/technology",
  },
  {
    TEXT: "Contact",
    HREF: "/contact",
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "mike.laita@example.com",
    HREF: "mailto:mike.laita@example.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mikelaita",
    HREF: "https://github.com/mikelaita"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "mikelaita",
    HREF: "https://www.linkedin.com/in/mikelaita/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "mikelaita",
    HREF: "https://twitter.com/mikelaita",
  },
]
