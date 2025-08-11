type SiteConfig = {
  site_domain: string;
  site_name: string;
  site_description: string;
};

export const siteConfig: SiteConfig = {
  site_name: process.env.SITE_NAME || "Spotlight Space",
  site_description: process.env.SITE_DESCRIPTION || "Oplev fremtidens musik i Aarhus. Spotlight Space er Danmarks platform for artister i vækstlaget. Vi giver upcoming talenter et rampelys. Udforsk events og artister!",
  site_domain: process.env.SITE_DOMAIN || "http://localhost:3000/",
};
