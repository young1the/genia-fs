type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};

// https://nextjs.org/docs/messages/next-script-for-ga
// https://dev.to/valse/how-to-setup-google-tag-manager-in-a-next-13-app-router-website-248p
