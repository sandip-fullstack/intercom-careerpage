import SFIcon from "./assets/SanFrancisco_Icon@2x.webp";
import ChicagoIcon from "./assets/Chicago_Icon@2x.webp";
import LondonIcon from "./assets/London_Icon@2x.webp";
import DublinIcon from "./assets/Dublin_Icon@2x.webp";
import SydneyIcon from "./assets/Sydney_Icon@2x.webp";

export const GREENHOUSE_INTERCOM = "https://boards-api.greenhouse.io/v1/boards/intercom";
export const OFFICE_MAPPER: Record<string, any>= {
  "San Francisco": {
    assetURL: SFIcon,
    description: "Our HQ with a diverse group of teams from sales, to marketing, to G&A.",
    imageAlt: "Golden Gate Bridge Icon",
  },
  "Chicago": {
    assetURL: ChicagoIcon,
    description: "Our Chicago office is home to both Customer Support and Sales.",
    imageAlt: "Chicago Bean Icon",
  },
  "London": {
    assetURL: LondonIcon,
    description: "Our London office is home to several of our R+D teams.",
    imageAlt: "London Big Ben Icon",
  },
  "Dublin": {
    assetURL: DublinIcon,
    description: "Our largest office, the teams here focus on everything from R&D to People Operations.",
    imageAlt: "Dublin Icon",
  },
  "Sydney": {
    assetURL: SydneyIcon,
    description: "Sydney offers strong Sales and Customer Support teams for you to join.",
    imageAlt: "Sydney Opera House Icon",
  }
}

export const CACHE_TIME = 30000; // 30 secs